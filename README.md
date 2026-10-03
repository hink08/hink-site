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
│   ├── layouts/            # BaseLayout (page shell) and BlogPost
│   ├── lib/posts.ts        # Post query helpers (sorting, drafts, URLs)
│   ├── pages/              # File-based routes
│   ├── styles/global.css   # Design tokens and base styles
│   ├── content.config.ts   # Blog frontmatter schema
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

## Configuration

Edit `src/site.config.ts` to change the site title, description, navigation, and social links.
`SITE.url` is the production domain (`https://ryanhinkle.info`) — it's used for canonical URLs, the sitemap, and RSS.
