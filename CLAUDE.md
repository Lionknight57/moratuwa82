# Moratuwa '82 Reunion Site

Read-only site (photos + news) for the 1977–1981 UoM engineering batch.
Astro → Cloudflare Worker; photos on Cloudinary. See README.md for how to run,
add news, and add albums. This file covers only what bites you.

- **Live:** https://moratuwa82.ken-abeynayake.workers.dev
- **Repo:** https://github.com/Lionknight57/moratuwa82
- **Cloudinary cloud:** `moratuwa82`

## Deploys are manual — `git push` does NOT publish

The Cloudflare project is **not** connected to GitHub. Two independent actions:

```bash
git push        # saves code. Publishes nothing.
npm run deploy  # npm run build && wrangler deploy. Publishes.
```

The repo and the live site drift apart easily. After changing anything user
facing, do both. `wrangler deploy` updates the Worker named in `wrangler.jsonc`
in place, so the URL never changes — "no new URL appeared" means it worked.

## The `demo` cloud trap

Astro inlines `PUBLIC_*` env vars into the HTML **at build time**. If the build
can't see `PUBLIC_CLOUDINARY_CLOUD_NAME`, `src/lib/cloudinary.ts` silently falls
back to Cloudinary's `demo` cloud: the build succeeds, pages return 200, and
every photo 404s. This has already happened once in production.

Local builds read `.env`, which is why deploying from here works. If Cloudflare
ever builds this repo, `.env` isn't there and the value must be set under
**Settings → Build → Build variables**. The separate *Settings → Variables &
Secrets* section is runtime-only and the build never sees it — that distinction
is what caused the outage.

Never trust "it works locally". Verify the deployed HTML:

```bash
curl -s https://moratuwa82.ken-abeynayake.workers.dev/gallery/historical/ \
  | grep -c 'res.cloudinary.com/demo'   # 0 = good, anything else = broken
```

## Secrets

`.env` holds the cloud name plus `CLOUDINARY_API_KEY` / `CLOUDINARY_API_SECRET`
and is gitignored. **`.env.example` is committed** — it is a placeholder template
and real credentials have been pasted into it by mistake before. Before any
commit, check the secret isn't staged:

```bash
git diff --cached | grep -E 'CLOUDINARY_API_SECRET=.+'
```

Only `scripts/upload-album.ts` needs the key/secret; the site itself never does.

## Album data owns the Cloudinary mapping

Albums are data files in `src/data/albums/` exporting an `Album` (`types.ts`),
registered in `index.ts`, all rendered by one route: `pages/gallery/[album].astro`.
Adding an album is a data file plus one line — never a new page.

Each photo pairs a normalized `publicId` with the `sourceFile` it came from, and
`scripts/upload-album.ts` reads that mapping, so the album file is the single
source of truth. Don't hand-upload via the Cloudinary web UI: it derives public
IDs from filenames, and the originals are inconsistently cased (`Campusboys.jpg`
vs the `.JPG` the old site referenced), URL-encoded in the old views
(`re%2Dunion%20003.jpg`), and full of spaces and semicolons
(`2-02-2014 9;41;58 AM.jpg`). Cloudinary public IDs are case-sensitive; Windows
filenames are not, so the old ASP.NET site hid every one of these mismatches.

**Generate large album data from the old `.cshtml`, don't transcribe it.** Of the
90 photos in `reunion2006.ts`, 19 disagreed with the disk on case and all the
`re-union` ones were URL-encoded. Parse the view, decode, then match the disk
case-insensitively to recover the real filename.

Imports inside `src/data/albums/` need explicit `.ts` extensions — the upload
script runs under plain Node's type-stripping, which won't resolve extensionless
paths the way Astro/Vite does.

Album covers and news `heroImage`s that aren't album photos live under `site/`
(e.g. `site/sumanadasa-hall`), not `historical/`.

Uploads are idempotent — re-running is safe; pass `--overwrite` to replace.
Always dry-run first; it verifies every source file resolves before touching the
network:

```bash
npm run upload -- <slug> --dry-run
```

## Member portraits

`src/data/member-photos.ts` maps a member name to a Cloudinary portrait
(`member/<slug>`); the members page looks up by name and falls back to a
monogram. Every `name` must match members.ts exactly — a name-normalising step
in the roster (sort, dedupe) means a stale name here silently shows a monogram
instead of erroring, so regenerate/validate after renaming a member. Upload with
`npm run upload-photos`. Portraits come from the LionknightWeb
`Moratuwa82Reunion` root, whose filenames are abbreviations (`Bhuwen.jpg`,
`udayaR.jpg`) — several matches were inferred and confirmed by Kanishka against
the face on the page. **Never invent a face-to-name link; if a portrait can't be
placed with confidence, leave it out and ask.**

## Derived numbers — don't hardcode

`src/data/reunion.ts` holds the 50th Anniversary line items. Every total, the
grand total, the per-person sponsorship discount and the net costs are **derived
in code**. Edit a line item or the sponsorship figure and everything recomputes.
Never paste a total from a committee circular over a computed one — the whole
point is that the figures can't drift apart. (Committee figures as of 27 Jun 2026
all reconciled exactly against the derived ones.)

Note the published Rs 39,150 / 34,750 per-person costs **include** the T-shirt
that the same circular calls optional. The page marks this explicitly.

## Content provenance

Imported from the old ASP.NET site at
`C:\repo\LionknightWeb\LionknightWeb\Areas\Moratuwa82Reunion\`. Photo originals
are in `...\Moratuwa82Reunion\Historical\`. When importing more, keep names
verbatim unless clearly a typo — `Frnando` and `Dhrmadasa` may be spellings, not
mistakes. Prose typos were fixed; personal names were not.

## Open questions

- **`campusboys` / `campusgirls` captions may be swapped** — the "boys" caption
  lists women in the standing row and vice versa. Copied verbatim from the old
  site; needs a human who can recognise the faces.
- **"Option 2"** in the 18 Jun 2026 committee update is never defined anywhere,
  so it was left off `/reunion-2027`.
- **`site/sumanadasa-hall` is only 600×450**, so the news hero upscales it and
  looks soft. Fine on the album card. A larger original would fix it — re-upload
  over the same public ID and both pages pick it up.
- The `/gallery` "Recent" grid is still Cloudinary's stock samples from the
  scaffold (`src/data/gallery.ts`), captioned as if they were batch photos.

## Verify, don't assume

This project has produced several failures that look like success: a build that
passes while every image 404s, a "deployed" site serving the wrong cloud, an
`.env.example` holding live credentials. Check the artifact, not the intent —
curl the live URL, grep the built HTML, list what's actually staged.
