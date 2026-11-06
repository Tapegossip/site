# TapeGossip

Source for [tapegossip.com](https://tapegossip.com): essays on markets, risk, and human behavior, and a personal library of books, videos, and articles.

## Stack

React, TypeScript, Vite, Tailwind CSS. Hosted on GitHub Pages.

## Development

Requires Node.js 18+.

```sh
npm install
npm run dev      # http://localhost:8080
```

## Deploy

Pushing to `master` deploys automatically (`.github/workflows/deploy.yml`). The build writes one
HTML file per route (`library.html`, `essays.html`, `essay/<slug>.html`, `404.html`) so clean URLs
work on GitHub Pages and each page has its own title and description (`vite-pages.ts`).

## Content

- Essays: `src/data/essays/<slug>.md`, Markdown with front matter (`title`, `subtitle`, `date`,
  `order`, `tags`, `excerpt`), converted to HTML at build time (`vite-markdown.ts`)
- Library: `src/data/library/books.json` (books) and `links.json` (videos, articles, websites, papers)
- Page titles and descriptions: `src/lib/pageMeta.ts`
- Images: `public/images/`

## Adding to the library

**From your phone:** open an issue in this repo (GitHub app → Issues → New → "Add to library").
Put the link, or a book title, in the issue title. Optional lines in the body:

```
category: Trading
tags: options, volatility
note: words you'll remember it by
```

A workflow adds it, comments with what it found, closes the issue, and deploys. Only issues
opened by the repo owner are processed.

**From a computer:** one-time `pip install -r scripts/requirements.txt` (Python 3.9+), then:

```sh
npm run add -- "https://youtu.be/VIDEO_ID" --category Mathematics --tags "linear algebra, vectors"
npm run add -- "https://example.com/some-article" --category Trading --note "words you'll remember it by"
npm run add -- "Thinking in Systems" --category Science          # a book: details from Open Library
git push
```

`add` detects the type (YouTube → video, a site's home page → website, a `.pdf` → paper,
any other URL → article, plain text → book), fills in title, author and year, and indexes the
content so search finds it by words inside it:

| Type | Indexed from |
|---|---|
| Video | transcript, description, YouTube keywords |
| Article / paper | the article text |
| Website | title, description, headings |
| Book | Open Library subjects and description |

The index (`search-index.json`) holds only a de-duplicated word list per item, not the text
itself, and the site loads it only when someone searches. `npm run index` indexes anything
missing; `npm run index -- --retry` retries failures and videos without a transcript (YouTube
often blocks transcripts from GitHub's servers, so run this on your PC); `--all` rebuilds everything.

`--note` adds hidden searchable words. Tags are also searchable and never displayed.

Owner mode: open `/library?owner` once per device to show a **Read** link on books that
searches your own Google Drive; `?owner=off` turns it off.
