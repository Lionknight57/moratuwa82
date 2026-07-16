# Moratuwa '82 — Reunion Site

A static, read-only site (photos + news) for our batch. Built with
[Astro](https://astro.build), photos served from
[Cloudinary](https://cloudinary.com), deployed free on
[Cloudflare Pages](https://pages.cloudflare.com).

Why this stack: no server, no database, no maintenance, and it stays online for
years at essentially no cost. See `../LionknightWeb/.../ToDo/Reunion-Site-Plan.md`
for the full rationale.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:4321. With no `.env`, it renders Cloudinary's public
sample images so you see a working gallery immediately.

## Configure your own photos

1. Create a free Cloudinary account.
2. Copy `.env.example` to `.env` and set `PUBLIC_CLOUDINARY_CLOUD_NAME`.
3. Upload photos to Cloudinary. Each upload gets a **public ID** (the path minus
   the extension).
4. Add those public IDs to `src/data/gallery.ts`.

Cloudinary automatically resizes, optimizes, and converts formats (WebP/AVIF)
via URL parameters — see `src/lib/cloudinary.ts`. This is what lets you hold 4GB+
of photos without the site being slow or the repo being huge.

## Albums

An album is a titled, sectioned set of photos living under `/gallery/<name>`:
a data file in `src/data/albums/` plus a page in `src/pages/gallery/`. Albums are
listed at the top of `/gallery`.

`src/data/albums/historical.ts` ("Old Photographs", 43 photos) was imported from
the old ASP.NET site. Its images live in
`../LionknightWeb/LionknightWeb/Moratuwa82Reunion/Historical/` and are uploaded
by the script below.

### Uploading an album's photos

Don't drag the files into the Cloudinary web UI: it derives public IDs from
filenames, and these filenames are inconsistently cased and contain spaces and
semicolons (`2-02-2014 9;41;58 AM.jpg`). Each album entry therefore pairs a
normalized `publicId` with the `sourceFile` it came from, and the script reads
that mapping:

```bash
cp .env.example .env                      # then fill in cloud name, key, secret
npm run upload:historical -- --dry-run    # verifies sources, uploads nothing
npm run upload:historical
```

It's safe to re-run — existing photos are skipped unless you pass `--overwrite`.
If your LionknightWeb checkout is elsewhere, set `SOURCE_DIR`.

## Add a news item

Create a Markdown file in `src/content/news/`, for example `my-post.md`:

```markdown
---
title: "My news title"
date: 2026-09-01
summary: "One-line summary shown in listings."
heroImage: "optional/cloudinary/public-id"
draft: false
---

Write the post body here in Markdown.
```

It appears automatically on the home page and `/news/`. Set `draft: true` to hide
a work-in-progress post.

## Build for production

```bash
npm run build      # outputs static site to dist/
npm run preview    # preview the production build locally
```

## Deploy to Cloudflare Pages

1. Push this folder to a GitHub repo.
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**.
3. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Add an environment variable `PUBLIC_CLOUDINARY_CLOUD_NAME` with your cloud name.
5. Deploy. Every `git push` redeploys automatically. Add a custom domain for free
   in the Pages project settings.

## Project structure

```
src/
  content/news/       # news posts as Markdown (the "database")
  data/gallery.ts     # list of Cloudinary photo IDs for the gallery
  data/albums/        # one file per album (photos + captions, grouped)
  lib/cloudinary.ts   # builds optimized Cloudinary URLs
  components/         # CldImage.astro (responsive image)
  layouts/            # BaseLayout.astro (header/footer/styles)
  pages/              # index, news/, news/[slug], gallery, gallery/<album>
public/               # favicon and other static files
```
