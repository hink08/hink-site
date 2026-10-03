# hinksite

Personal site and blog for **Ryan Hinkle** — [ryanhinkle.info](https://ryanhinkle.info) — built with [Astro](https://astro.build).

## Getting started

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs static site to ./dist
npm run preview   # serve the production build locally
```

Requires Node.js 22.12+.

## Project structure

```
.
├── public/                 # Static files served as-is (favicon, etc.)
├── src/
│   ├── assets/             # Images and fonts processed by Astro
│   ├── components/         # Reusable UI (header, footer, post list, …)
│   ├── content/blog/       # Blog posts (.md / .mdx)
│   ├── content/notes/      # Short-form notes
│   ├── content/books/      # Bookshelf — one file per book
│   ├── layouts/            # BaseLayout (page shell), ArticleLayout (sidebar + text), BlogPost
│   ├── lib/                # Query helpers for posts, notes, books
│   ├── pages/              # File-based routes
│   ├── styles/global.css   # Design tokens and base styles
│   ├── content.config.ts   # Frontmatter schemas for all collections
│   └── site.config.ts      # Site title, URL, nav and social links
└── astro.config.mjs
```

## Writing a post

Create `src/content/blog/my-post.md` (the filename becomes the URL slug):

```md
---
title: 'My post'
description: 'One-line summary used in lists, RSS, and meta tags.'
pubDate: '2025-10-03'
tags: ['example']        # optional
heroImage: '../../assets/my-image.jpg'  # optional
draft: true              # optional — drafts only show in `npm run dev`
---

Post content…
```

## Writing a note

Notes are short thoughts. Create `src/content/notes/my-note.md`:

```md
---
title: 'A quick thought'
pubDate: '2025-10-03'
tags: ['example']        # optional
draft: true              # optional
---

A paragraph or two.
```

## Adding a book

Create `src/content/books/book-slug.md`:

```md
---
title: 'Book title'
author: 'Author Name'
status: 'reading'        # reading | finished | want-to-read | abandoned
started: '2025-09-20'    # optional
finished: '2025-10-01'   # optional
rating: 4                # optional, 1–5
summary: 'One-liner.'    # optional, shown on the bookshelf
cover: '../../assets/covers/book.jpg'  # optional
link: 'https://www.goodreads.com/book/show/…'  # optional
---

Optional notes/review. If the body has content, the book gets its own page at /books/book-slug.
```

Books with `status: 'reading'` also appear on the home page and `/now`.
Set `draft: true` on a book to hide it from production builds.

## Now page

`src/pages/now.astro` is a [/now page](https://nownownow.com/about) — edit the lists and bump the `updated` date.

## Light / dark mode

The site follows the visitor's OS preference by default. The toggle in the header overrides it
(saved in `localStorage`); choosing the theme that matches the OS clears the override. Colours are
defined once in `src/styles/global.css` using `light-dark()`, and code blocks use Shiki's dual themes.

## Configuration

Edit `src/site.config.ts` to change the site title, description, navigation, and social links.
`SITE.url` is the production domain (`https://ryanhinkle.info`) — it's used for canonical URLs, the sitemap, and RSS.
