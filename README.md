# Test Blog

A professional, minimalist Astro + Tailwind + MDX blog with a pink accent. Deployed on GitHub Pages.

- Framework: Astro
- Styling: Tailwind (light mode only)
- Posts: MDX in `src/content/blog/`
- Features: RSS, sitemap, code highlighting, SEO

## Posting a new article

1. In GitHub, go to `src/content/blog/` and click “Add file” → “Create new file”.
2. Name it like `my-post.mdx`.
3. Add frontmatter and content, then commit to `main`.

Example:

---START MDX EXAMPLE---
---
title: "My First Post"
description: "A quick intro"
publishedDate: 2025-08-16
tags: ["intro"]
draft: false
---

Write in Markdown or MDX. You can embed JSX, code blocks, images, and more.

```ts
export const hello = (name: string) => `Hello, ${name}!`;
```
---END MDX EXAMPLE---

## Local development

```bash
npm install
npm run dev
```

## Deployment

This repo is configured to deploy via GitHub Actions to GitHub Pages.
