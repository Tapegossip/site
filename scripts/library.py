#!/usr/bin/env python3
"""TapeGossip library tool: add items and build the full-text search index.

Usage (from the repo root):
  python scripts/library.py add <url | "book title"> [options]
      --type book|video|article|website|paper|podcast   (auto-detected from the URL if omitted)
      --category "Trading"      --tags "options, volatility"
      --title "..."  --author "..."  --year 2021
      --note "words you'll remember it by"   (searchable, not shown)
  python scripts/library.py index [--all] [--retry] [--only TEXT]
      Builds search words for items that don't have them yet:
        videos   -> transcript + description + YouTube keywords
        articles -> the article text;  websites -> title, description, headings
        books    -> Open Library subjects + description
      --all re-indexes everything; --retry re-tries failed items and videos without a transcript;
      --only limits to items whose id contains TEXT.
  python scripts/library.py format
      Rewrites books.json / links.json in the canonical layout.

The index stores only a de-duplicated list of words per item (not transcripts or article
text), so nothing is republished; it is loaded by the site only when someone searches.
"""
from __future__ import annotations

import argparse
import html
import json
import re
import sys
import time
import unicodedata
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "src" / "data" / "library"
BOOKS = DATA / "books.json"
LINKS = DATA / "links.json"
INDEX = DATA / "search-index.json"

KEY_ORDER = ["title", "author", "publishedYear", "type", "category", "tags", "note", "link", "description"]
TYPE_ORDER = ["video", "article", "website", "paper", "podcast"]
CATEGORY_ORDER = ["Investing", "Trading", "Finance", "Business", "Philosophy", "Psychology",
                  "Self-Improvement", "History", "Politics", "Geography", "Sociology", "Science",
                  "Physics", "Astronomy", "Biology", "Mathematics", "Technology", "Engineering",
                  "Fiction", "Miscellaneous"]
USER_AGENT = "Mozilla/5.0 (compatible; tapegossip-library-tool/1.0)"

STOPWORDS = set("""
a about above actually after again against all almost also although always am among an and another any anyone
anything are aren around as at back be because been before being below between both but by can cannot could
couldn did didn do does doesn doing don done down during each either else enough even ever every everything
few for from further get gets getting go goes going gonna got gotta had has hasn have haven having he her here
hers herself him himself his how however i if in into is isn it its itself just know kind let like likely ll
lot lots made make makes making many may maybe me might mine more most much must my myself need never new no
nor not nothing now of off often oh ok okay on once one only onto or other others otherwise our ours ourselves
out over own per perhaps please pretty probably put quite rather re really right said same say says see seem
seems shall she should shouldn since so some something sometimes still such sure take than that the their
theirs them themselves then there these they thing things think this those though through thus to too toward
towards um uh under until up upon us use used using ve very via want wants was wasn way we well were weren
what whatever when where whether which while who whom whose why will with within without won would wouldn yeah
yes yet you your yours yourself yourselves
""".split())


# ----------------------------------------------------------------------------- data files

def slug(text: str) -> str:
    """Must match slug() in src/data/library/index.ts (ids key the search index)."""
    return re.sub(r"[^a-z0-9]+", "-", text.lower()).strip("-")


def item_id(item: dict) -> str:
    return slug(f"{item['title']}-{item['author']}")


def load(path: Path) -> list[dict]:
    return json.loads(path.read_text(encoding="utf-8")) if path.exists() else []


def dump_items(path: Path, items: list[dict]) -> None:
    """One field per line, arrays inline: readable and diff-friendly."""
    out = ["["]
    for i, item in enumerate(items):
        keys = [k for k in KEY_ORDER if k in item] + [k for k in item if k not in KEY_ORDER]
        out.append("  {")
        for j, k in enumerate(keys):
            comma = "," if j < len(keys) - 1 else ""
            out.append(f"    {json.dumps(k)}: {json.dumps(item[k], ensure_ascii=False)}{comma}")
        out.append("  }" + ("," if i < len(items) - 1 else ""))
    out.append("]")
    path.write_text("\n".join(out) + "\n", encoding="utf-8")


def save_all(books: list[dict], links: list[dict]) -> None:
    # Books file holds only books; everything else lives in links.json.
    moved = [b for b in books if b.get("type", "book") != "book"]
    books = [b for b in books if b.get("type", "book") == "book"]
    links = links + moved
    cat = lambda x: CATEGORY_ORDER.index(x["category"]) if x["category"] in CATEGORY_ORDER else len(CATEGORY_ORDER)
    typ = lambda x: TYPE_ORDER.index(x.get("type")) if x.get("type") in TYPE_ORDER else len(TYPE_ORDER)
    dump_items(BOOKS, sorted(books, key=cat))
    dump_items(LINKS, sorted(links, key=typ))


def load_index() -> dict:
    return json.loads(INDEX.read_text(encoding="utf-8")) if INDEX.exists() else {}


def save_index(index: dict) -> None:
    lines = [f"  {json.dumps(k)}: {json.dumps(index[k], ensure_ascii=False)}" for k in sorted(index)]
    INDEX.write_text("{\n" + ",\n".join(lines) + "\n}\n", encoding="utf-8")


# ----------------------------------------------------------------------------- text → words

def fold(text: str) -> str:
    text = unicodedata.normalize("NFKD", text.lower())
    return "".join(c for c in text if not unicodedata.combining(c))


def words_of(text: str) -> set[str]:
    """Distinct meaningful words, tokenized the same way the site's search does."""
    text = re.sub(r"https?://\S+|www\.\S+", " ", fold(text))
    out = set()
    for w in re.findall(r"[a-z0-9]+", text):
        if w in STOPWORDS or len(w) > 30:
            continue
        if w.isdigit():
            if len(w) == 4 and 1000 <= int(w) <= 2099:  # keep years
                out.add(w)
            continue
        if len(w) >= 3:
            out.add(w)
    return out


def base_words(item: dict) -> set[str]:
    return words_of(" ".join([item["title"], item["author"], item["category"], item.get("note", ""), *item.get("tags", [])]))


# ----------------------------------------------------------------------------- fetching

def http_get(url: str, accept: str = "*/*") -> tuple[str, str]:
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT, "Accept": accept,
                                               "Accept-Language": "en-US,en;q=0.9"})
    with urllib.request.urlopen(req, timeout=25) as r:
        ctype = r.headers.get("Content-Type", "")
        charset = r.headers.get_content_charset() or "utf-8"
        return r.read().decode(charset, errors="replace"), ctype


def http_json(url: str):
    return json.loads(http_get(url, "application/json")[0])


def youtube_id(url: str) -> str | None:
    m = re.search(r"(?:youtu\.be/|youtube\.com/(?:watch\?(?:.*&)?v=|embed/|shorts/|live/))([A-Za-z0-9_-]{11})", url)
    return m.group(1) if m else None


def strip_tags(fragment: str) -> str:
    fragment = re.sub(r"(?is)<(script|style|noscript|svg|template)[^>]*>.*?</\1>", " ", fragment)
    return re.sub(r"\s+", " ", html.unescape(re.sub(r"(?s)<[^>]+>", " ", fragment))).strip()


def meta(page: str, *names: str) -> str | None:
    for name in names:
        for pat in (rf'<meta[^>]+(?:name|property)=["\']{re.escape(name)}["\'][^>]+content=["\']([^"\']*)',
                    rf'<meta[^>]+content=["\']([^"\']*)["\'][^>]+(?:name|property)=["\']{re.escape(name)}["\']'):
            m = re.search(pat, page, re.I)
            if m and m.group(1).strip():
                return html.unescape(m.group(1).strip())
    return None


def page_title(page: str) -> str | None:
    t = meta(page, "og:title", "twitter:title")
    if t:
        return t
    m = re.search(r"(?is)<title[^>]*>(.*?)</title>", page)
    return strip_tags(m.group(1)) if m else None


def year_from(text: str | None) -> int | None:
    m = re.search(r"\b(1[0-9]{3}|20[0-9]{2})\b", text or "")
    return int(m.group(1)) if m else None


def youtube_details(vid: str) -> dict:
    """Title/channel via oEmbed; description, keywords, date from the watch page; transcript via library."""
    info: dict = {}
    try:
        o = http_json(f"https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v={vid}&format=json")
        info["title"], info["author"] = o["title"], o["author_name"]
    except Exception as e:  # noqa: BLE001
        print(f"  ! oEmbed failed: {e}")
    try:
        page, _ = http_get(f"https://www.youtube.com/watch?v={vid}&hl=en")
        start = page.find("ytInitialPlayerResponse = ")
        if start >= 0:
            data, _ = json.JSONDecoder().raw_decode(page[start + len("ytInitialPlayerResponse = "):])
            vd = data.get("videoDetails", {})
            info["description"] = vd.get("shortDescription", "")
            info["keywords"] = vd.get("keywords", [])
            mf = data.get("microformat", {}).get("playerMicroformatRenderer", {})
            info["year"] = year_from(mf.get("publishDate") or mf.get("uploadDate"))
    except Exception as e:  # noqa: BLE001
        print(f"  ! watch page failed: {e}")
    try:
        from youtube_transcript_api import YouTubeTranscriptApi  # type: ignore
        api = YouTubeTranscriptApi()
        listing = api.list(vid)
        try:
            tr = listing.find_transcript(["en", "en-US", "en-GB"])
        except Exception:  # noqa: BLE001
            tr = next(iter(listing))
        info["transcript"] = " ".join(s.text for s in tr.fetch())
    except ImportError:
        print("  ! youtube-transcript-api not installed: pip install -r scripts/requirements.txt")
    except Exception as e:  # noqa: BLE001
        print(f"  ! no transcript: {type(e).__name__}")
    return info


def page_details(url: str, kind: str) -> dict:
    """Article: main text. Website: title, description, headings only (home pages are mostly navigation)."""
    page, ctype = http_get(url, "text/html,application/xhtml+xml")
    info: dict = {"title": page_title(page),
                  "author": meta(page, "author", "article:author", "og:site_name", "application-name"),
                  "year": year_from(meta(page, "article:published_time", "datePublished", "date", "pubdate")),
                  "description": meta(page, "description", "og:description", "twitter:description") or ""}
    if "pdf" in ctype:
        info["text"] = ""
        return info
    if kind in ("article", "paper"):
        body = page
        for tag in ("article", "main"):
            m = re.search(rf"(?is)<{tag}[^>]*>(.*)</{tag}>", page)
            if m:
                body = m.group(1)
                break
        body = re.sub(r"(?is)<(nav|header|footer|aside|form)[^>]*>.*?</\1>", " ", body)
        info["text"] = strip_tags(body)
    else:
        heads = re.findall(r"(?is)<h[1-3][^>]*>(.*?)</h[1-3]>", page)
        info["text"] = " ".join(strip_tags(h) for h in heads)
    return info


def surname(name: str) -> str:
    parts = re.findall(r"[a-z]+", fold(name.split(",")[0]))
    return parts[-1] if parts else ""


def openlibrary_details(title: str, author: str | None) -> dict:
    q = {"title": re.split(r"[:(]", title)[0].strip(), "limit": "5",
         "fields": "key,title,author_name,first_publish_year,subject"}
    if author:
        q["author"] = author.split(",")[0]
    docs = http_json("https://openlibrary.org/search.json?" + urllib.parse.urlencode(q)).get("docs", [])
    if not docs and author:  # retry without author (spelling differences)
        q.pop("author")
        docs = http_json("https://openlibrary.org/search.json?" + urllib.parse.urlencode(q)).get("docs", [])
    if author:
        want = surname(author)
        docs = [d for d in docs if any(surname(a) == want for a in d.get("author_name", []))] or []
    if not docs:
        return {}
    d = docs[0]
    info = {"author": ", ".join(d.get("author_name", [])[:3]) or None,
            "year": d.get("first_publish_year"),
            "subjects": d.get("subject", [])[:80]}
    try:
        work = http_json(f"https://openlibrary.org{d['key']}.json")
        desc = work.get("description", "")
        info["description"] = desc.get("value", "") if isinstance(desc, dict) else desc
        info["subjects"] = list(dict.fromkeys(info["subjects"] + work.get("subjects", [])[:80]))
    except Exception:  # noqa: BLE001
        pass
    return info


# ----------------------------------------------------------------------------- indexing

def build_entry(item: dict) -> tuple[dict, dict]:
    """Returns (index entry, discovered metadata)."""
    kind = item.get("type", "book")
    found: dict = {}
    src, text = "none", ""
    try:
        if kind == "video" and (vid := youtube_id(item["link"])):
            found = youtube_details(vid)
            parts = [found.get("transcript", ""), found.get("description", ""), " ".join(found.get("keywords", []))]
            text = " ".join(parts)
            src = "transcript" if found.get("transcript") else ("description" if text.strip() else "none")
        elif kind == "book":
            found = openlibrary_details(item["title"], item.get("author"))
            text = " ".join(found.get("subjects", [])) + " " + found.get("description", "")
            src = "catalog" if text.strip() else "none"
            time.sleep(0.4)  # be polite to Open Library
        else:
            found = page_details(item["link"], kind)
            text = (found.get("description") or "") + " " + found.get("text", "")
            src = {"website": "site", "article": "article", "paper": "paper"}.get(kind, "page") if text.strip() else "none"
    except (urllib.error.URLError, TimeoutError, ValueError) as e:
        print(f"  ! fetch failed: {e}")
    words = sorted(words_of(text) - base_words(item))
    return {"src": src, "w": " ".join(words)}, found


def needs_retry(item: dict, entry: dict) -> bool:
    """Failed before, or a video indexed without its transcript."""
    return entry["src"] == "none" or (item.get("type") == "video" and entry["src"] != "transcript")


def cmd_index(args) -> None:
    books, links = load(BOOKS), load(LINKS)
    items = books + links
    index = load_index()
    ids = {item_id(i) for i in items}
    for stale in [k for k in index if k not in ids]:
        del index[stale]
    todo = [i for i in items
            if (args.all or item_id(i) not in index or (args.retry and needs_retry(i, index[item_id(i)])))
            and (not args.only or args.only.lower() in item_id(i))]
    print(f"Indexing {len(todo)} of {len(items)} items...")
    changed_meta = False
    for n, item in enumerate(todo, 1):
        entry, found = build_entry(item)
        index[item_id(item)] = entry
        if item.get("type", "book") != "book" and "publishedYear" not in item and found.get("year"):
            item["publishedYear"] = found["year"]
            changed_meta = True
        print(f"  [{n}/{len(todo)}] {entry['src']:<11} {len(entry['w'].split()):>5} words  {item['title'][:60]}")
        if n % 20 == 0:
            save_index(index)
    save_index(index)
    if changed_meta:
        save_all(books, links)
    print(f"Done. {INDEX.relative_to(ROOT)} has {len(index)} entries, {INDEX.stat().st_size // 1024} KB.")


def cmd_add(args) -> None:
    books, links = load(BOOKS), load(LINKS)
    target = args.target.strip()
    is_url = bool(re.match(r"https?://", target))
    if args.type:
        kind = args.type
    elif not is_url:
        kind = "book"
    elif youtube_id(target):
        kind = "video"
    elif target.lower().split("?")[0].endswith(".pdf"):
        kind = "paper"
    elif urllib.parse.urlparse(target).path.strip("/") == "":
        kind = "website"
    else:
        kind = "article"

    if is_url:
        for existing in books + links:
            if existing.get("link") == target:
                sys.exit(f"Already in the library: {existing['title']}")

    item: dict = {"title": args.title or (None if is_url else target), "author": args.author}
    if is_url:
        item["link"] = target
    print(f"Adding {kind}: {target}")

    draft = {"title": item["title"] or target, "author": item["author"] or "", "category": "", "tags": [],
             "type": kind, "link": target if is_url else ""}
    entry, found = build_entry(draft)

    item["title"] = item["title"] or found.get("title") or target
    host = (urllib.parse.urlparse(target).hostname or "").removeprefix("www.") if is_url else ""
    item["author"] = item["author"] or found.get("author") or host or "Unknown"
    year = args.year or found.get("year")
    if year:
        item["publishedYear"] = int(year)
    if kind != "book":
        item["type"] = kind
    item["category"] = args.category or "Miscellaneous"
    item["tags"] = [t.strip() for t in (args.tags or "").split(",") if t.strip()]
    if args.note:
        item["note"] = args.note.strip()  # searchable via the site's normal search, never displayed
    if not is_url:
        q = urllib.parse.quote_plus(f"{item['title'].split(':')[0]} {item['author'].split(',')[0]}")
        item["link"] = f"https://www.goodreads.com/search?q={q}"
    if found.get("description") and kind == "website" and len(found["description"]) < 200:
        item["description"] = found["description"]

    new_id = item_id(item)
    for existing in books + links:
        if item_id(existing) == new_id or (is_url and existing.get("link") == target):
            sys.exit(f"Already in the library: {existing['title']}")

    (books if kind == "book" else links).append(item)
    save_all(books, links)
    # Re-run with the final title/author so base words are excluded correctly.
    entry["w"] = " ".join(sorted(set(entry["w"].split()) - base_words(item)))
    index = load_index()
    index[new_id] = entry
    save_index(index)

    print(json.dumps(item, indent=2, ensure_ascii=False))
    print(f"Search index: {entry['src']}, {len(entry['w'].split())} words")
    if not args.category:
        print("  ! No --category given: filed under Miscellaneous.")
    if not item["tags"]:
        print("  ! No --tags given.")


def cmd_from_issue(_args) -> None:
    """GitHub Actions: add the item described by an issue (env ISSUE_TITLE / ISSUE_BODY).

    Title: the link, or a book title. Body (all optional), one per line:
      category: Trading
      tags: options, volatility
      note: words you'll remember it by
      type: article
    Writes a Markdown summary to $RESULT_FILE for the issue comment.
    """
    import os
    title = os.environ.get("ISSUE_TITLE", "").strip()
    fields = {}
    for line in os.environ.get("ISSUE_BODY", "").splitlines():
        m = re.match(r"^\s*(category|tags|note|type|title|author|year)\s*:\s*(.*?)\s*$", line, re.I)
        if m and m.group(2):
            fields[m.group(1).lower()] = m.group(2)
    if not title:
        sys.exit("Issue title is empty: put the link or book title in the title.")
    url = re.search(r"https?://\S+", title)
    args = argparse.Namespace(
        target=url.group(0) if url else title,
        type=fields.get("type", "").lower() or None,
        category=fields.get("category"), tags=fields.get("tags"), note=fields.get("note"),
        title=fields.get("title"), author=fields.get("author"),
        year=int(fields["year"]) if fields.get("year", "").isdigit() else None,
    )
    if args.type and args.type not in ("book", "video", "article", "website", "paper", "podcast"):
        sys.exit(f"Unknown type: {args.type}")
    before = {item_id(i) for i in load(BOOKS) + load(LINKS)}
    cmd_add(args)
    added = [i for i in load(BOOKS) + load(LINKS) if item_id(i) not in before]
    if not added:
        sys.exit("Nothing was added.")
    item = added[0]
    entry = load_index().get(item_id(item), {"src": "none", "w": ""})
    lines = [f"Added **{item['title']}** by {item['author']}",
             f"- Type: {item.get('type', 'book')} · Category: {item['category']}"
             + (f" · Year: {item['publishedYear']}" if item.get("publishedYear") else ""),
             f"- Tags: {', '.join(item['tags']) or '(none)'}",
             f"- Search index: {entry['src']}, {len(entry['w'].split())} words"]
    if item.get("type") == "video" and entry["src"] != "transcript":
        lines.append("- No transcript here (YouTube often blocks cloud servers). "
                     "On your PC: `npm run index -- --retry` then push.")
    result = os.environ.get("RESULT_FILE")
    if result:
        Path(result).write_text("\n".join(lines) + "\n", encoding="utf-8")
    print("\n".join(lines))


def cmd_format(_args) -> None:
    save_all(load(BOOKS), load(LINKS))
    print("Formatted books.json and links.json.")


def main() -> None:
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8")
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = p.add_subparsers(dest="cmd", required=True)
    a = sub.add_parser("add", help="add a link or a book")
    a.add_argument("target", help="URL, or a book title")
    a.add_argument("--type", choices=["book", "video", "article", "website", "paper", "podcast"])
    a.add_argument("--category")
    a.add_argument("--tags", help="comma-separated")
    a.add_argument("--title")
    a.add_argument("--author")
    a.add_argument("--year", type=int)
    a.add_argument("--note", help="extra searchable words (not shown on the site)")
    a.set_defaults(func=cmd_add)
    i = sub.add_parser("index", help="build search words for items")
    i.add_argument("--all", action="store_true")
    i.add_argument("--retry", action="store_true")
    i.add_argument("--only")
    i.set_defaults(func=cmd_index)
    g = sub.add_parser("from-issue", help="(GitHub Actions) add the item described by an issue")
    g.set_defaults(func=cmd_from_issue)
    f = sub.add_parser("format", help="rewrite data files in canonical layout")
    f.set_defaults(func=cmd_format)
    args = p.parse_args()
    args.func(args)


if __name__ == "__main__":
    main()
