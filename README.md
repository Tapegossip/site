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
- Library: `src/data/library/` (one file per category)
- Images: `public/images/`
