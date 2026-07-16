// The shape every album shares. One file per album in this folder exports an
// Album as its default; src/data/albums/index.ts collects them, and
// src/pages/gallery/[album].astro renders each one at /gallery/<slug>.
//
// `sourceFile` records the original this photo came from, so the upload script
// can derive its Cloudinary mapping from the album itself. See README.md.

export type AlbumPhoto = {
  /** Cloudinary public ID. Normalized — never copied from the source filename. */
  publicId: string;
  /** The original file this came from, relative to the album's sourceDir. */
  sourceFile: string;
  /** May be empty; the first line doubles as the image's alt text. */
  caption: string;
};

export type AlbumSection = {
  /** Omitted for sections the original page left unlabelled. */
  title?: string;
  photos: AlbumPhoto[];
};

export type Album = {
  /** URL segment: /gallery/<slug>. */
  slug: string;
  title: string;
  /** One line, shown on the album card at /gallery. */
  summary: string;
  /** publicId of the cover shown on the album card. */
  cover: string;
  /** Optional lead paragraph on the album page. */
  intro?: string;
  /** Optional closing note under the photos. */
  closing?: string;
  sections: AlbumSection[];
  /**
   * Where the originals live, for the upload script. Absolute, or relative to
   * the repo root. Omit for albums whose images are already on Cloudinary.
   */
  sourceDir?: string;
};

export const photosOf = (album: Album): AlbumPhoto[] => album.sections.flatMap((s) => s.photos);
