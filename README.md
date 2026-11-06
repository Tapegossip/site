# TapeGossip

Source for [tapegossip.com](https://tapegossip.com): essays on markets, risk, and human behavior, and a personal library of books.

## Stack

React, TypeScript, Vite, Tailwind CSS, shadcn/ui. Hosted on GitHub Pages.

## Development

Requires Node.js 18+.

```sh
npm install
npm run dev      # http://localhost:8080
```

## Deploy

```sh
npm run deploy   # builds and publishes dist/ to the gh-pages branch
```

The custom domain is set by `public/CNAME`, which is copied into every build.

## Content

- Essays: `src/data/essays/` (one file per essay, listed in `essayList.ts`)
- Library: `src/data/library/books.json` (books) and `links.json` (videos, articles, websites, papers)
- Images: `public/images/`

## Adding to the library

One-time setup: `pip install -r scripts/requirements.txt` (Python 3.9+).

```sh
npm run add -- "https://youtu.be/VIDEO_ID" --category Mathematics --tags "linear algebra, vectors"
npm run add -- "https://example.com/some-article" --category Trading --note "words you'll remember it by"
npm run add -- "Thinking in Systems" --category Science          # a book: details from Open Library
npm run deploy
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
missing; `npm run index -- --all` rebuilds everything.

`--note` adds hidden searchable words. Tags are also searchable and never displayed.

Owner mode: open `/#/library?owner` once per device to show a **Read** link on books that
searches your own Google Drive; `?owner=off` turns it off.
