// The albums shown as cover cards at the top of /gallery.
//
// To add an album: create its data file alongside this one, create the matching
// page in src/pages/gallery/, then add an entry here. The photo count is derived
// so it can't drift out of sync with the album itself.

import * as historical from './historical';

export type AlbumCard = {
  href: string;
  title: string;
  summary: string;
  cover: string;
  count: number;
};

export const albums: AlbumCard[] = [
  {
    href: '/gallery/historical/',
    title: historical.title,
    summary: historical.summary,
    cover: historical.cover,
    count: historical.sections.reduce((n, s) => n + s.photos.length, 0),
  },
];
