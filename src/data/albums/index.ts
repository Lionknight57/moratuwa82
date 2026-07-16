// Every album on the site, newest first — this is the order they appear at
// /gallery.
//
// To add one: create its data file in this folder exporting an Album as its
// default, then add it to the list below. The page at /gallery/<slug> and the
// card on /gallery both come for free; photo counts are derived so they can't
// drift.

import type { Album } from './types.ts';
import { photosOf } from './types.ts';
import historical from './historical.ts';
import reunion2006 from './reunion2006.ts';
import reunion2016 from './reunion2016.ts';

export type { Album, AlbumPhoto, AlbumSection } from './types.ts';
export { photosOf } from './types.ts';

export const albums: Album[] = [reunion2016, reunion2006, historical];

export const albumBySlug = (slug: string): Album | undefined =>
  albums.find((a) => a.slug === slug);

export const photoCount = (album: Album): number => photosOf(album).length;
