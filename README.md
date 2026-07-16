# Moratuwa '82 — Reunion Site

A read-only site (photos + news) for our batch, live at
**https://moratuwa82.ken-abeynayake.workers.dev**. Built with
[Astro](https://astro.build), photos served from
[Cloudinary](https://cloudinary.com), deployed free on
[Cloudflare Workers](https://workers.cloudflare.com).

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

An album is a set of photos at `/gallery/<slug>`, listed as a card on `/gallery`.
Each one is **just a data file** in `src/data/albums/` exporting an `Album`
(see `types.ts`); `src/pages/gallery/[album].astro` renders them all and
`index.ts` is the registry. Counts are derived, so they can't drift.

Current albums: `historical.ts` ("Old Photographs", 43) and `reunion2006.ts`
("Reunion 2006", 90), both imported from the old ASP.NET site.

### Adding an album

1. Write `src/data/albums/<slug>.ts` with a default-exported `Album`: a `slug`,
   `title`, `summary`, `cover` publicId, `sourceDir`, and `sections`. Photos are
   `{ publicId, sourceFile, caption }`. Sections may be untitled.
2. Add it to `albums` in `index.ts`.
3. Upload its photos (below). The page and card appear on their own.

For a big album, generate the data file from the old `.cshtml` rather than typing
it — see the note at the top of `reunion2006.ts` for why.

### Uploading an album's photos

Don't drag files into the Cloudinary web UI: it derives public IDs from
filenames, and these filenames are inconsistently cased, URL-encoded in the old
views, and contain spaces and semicolons (`2-02-2014 9;41;58 AM.jpg`). Each entry
pairs a normalized `publicId` with the `sourceFile` it came from, and the script
reads that mapping:

```bash
cp .env.example .env                     # then fill in cloud name, key, secret
npm run upload -- <slug> --dry-run       # verifies every source file, uploads nothing
npm run upload -- <slug>
```

Always dry-run first: it checks every source file resolves before touching the
network. Safe to re-run; pass `--overwrite` to replace what's already there. If
your LionknightWeb checkout is elsewhere, set `SOURCE_DIR`.

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

## Build and preview

```bash
npm run build      # writes dist/
npm run preview    # builds, then serves it through the Worker runtime
```

## Deploy

**Live at https://moratuwa82.ken-abeynayake.workers.dev**

```bash
npm run deploy     # npm run build && wrangler deploy
```

That is the whole deploy. It builds locally and pushes the result straight to
Cloudflare, updating the Worker named in `wrangler.jsonc` in place — the URL
never changes.

### Two things to know

**Deploys are manual.** The Cloudflare project is *not* connected to GitHub, so
`git push` does nothing on its own — push to save the code, run `npm run deploy`
to publish it. The two are independent, so it's easy for the live site and the
repo to drift; do both.

**The cloud name is baked in at build time.** Astro inlines `PUBLIC_*` variables
into the HTML during `npm run build`, so the build machine must know the cloud
name. Building locally, that comes from your `.env` — which is why deploying from
here works. If you ever switch to Cloudflare-side builds (connecting the repo),
`.env` is not there and the value must be set under **Settings → Build → Build
variables**; the separate *Settings → Variables & Secrets* section is runtime
only and the build never sees it. Get this wrong and Astro silently falls back
to Cloudinary's `demo` cloud: the build succeeds, the pages load, and every photo
404s.

Verify any deployment:

```bash
curl -s https://moratuwa82.ken-abeynayake.workers.dev/gallery/historical/ \
  | grep -c 'res.cloudinary.com/demo'   # 0 is what you want
```

### Hosting shape

Deployed as a **Worker serving static assets**, not classic Pages — that is what
new Cloudflare projects get, hence the `*.workers.dev` URL. Every page is still
prerendered at build time; the Worker just serves the files. Static assets are
free and unmetered. The `@astrojs/cloudflare` adapter, `output: 'hybrid'`,
`wrangler.jsonc` and `public/.assetsignore` all exist to support this.

## Project structure

```
src/
  content/news/       # news posts as Markdown (the "database")
  data/gallery.ts     # list of Cloudinary photo IDs for the gallery
  data/albums/        # one file per album (photos + captions, grouped)
  lib/cloudinary.ts   # builds optimized Cloudinary URLs
  components/         # CldImage.astro (responsive image)
  data/reunion.ts     # 50th Anniversary figures; the page derives every total
  layouts/            # BaseLayout.astro (header/footer/styles)
  pages/              # index, news/, news/[slug], gallery, gallery/<album>,
                      #   reunion-2027
scripts/              # one-time Cloudinary upload, driven by the album data
public/               # favicon and other static files
wrangler.jsonc        # Cloudflare Worker config (name, assets directory)
```
