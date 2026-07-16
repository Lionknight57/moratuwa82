// Every album on the site, in the order they appear at /gallery: the old
// photographs first, then the reunions oldest to newest.
//
// To add one: create its data file in this folder exporting an Album as its
// default, then add it to the list below in date order. The page at
// /gallery/<slug> and the card on /gallery both come for free; photo counts are
// derived so they can't drift.

import type { Album } from './types.ts';
import { photosOf } from './types.ts';
import historical from './historical.ts';
import campus from './campus.ts';
import reunion2006 from './reunion2006.ts';
import reunion2013 from './reunion2013.ts';
import reunion2014 from './reunion2014.ts';
import reunion2015 from './reunion2015.ts';
import reunion2016 from './reunion2016.ts';

export type { Album, AlbumPhoto, AlbumSection } from './types.ts';
export { photosOf } from './types.ts';

export const albums: Album[] = [
  historical,
  campus,
  reunion2006,
  reunion2013,
  reunion2014,
  reunion2015,
  reunion2016,
];

export const albumBySlug = (slug: string): Album | undefined =>
  albums.find((a) => a.slug === slug);

export const photoCount = (album: Album): number => photosOf(album).length;
