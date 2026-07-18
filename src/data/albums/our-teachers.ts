// "Hosting Our Teachers" — the batch's dinner with past teachers, July 2026.
// Linked from the news story of the same date.

import type { Album } from './types.ts';

const album: Album = {
  slug: 'our-teachers',
  title: 'Hosting Our Teachers',
  summary: 'The batch hosts its past teachers over dinner, July 2026.',
  cover: 'our-teachers/group',
  sourceDir: '../LionknightWeb/LionknightWeb/Moratuwa82Reunion/VasanthainMaryland',
  sections: [
    {
      photos: [
        {
          publicId: 'our-teachers/de-silva',
          sourceFile: 'WhatsApp Image 2026-07-18 at 9.17.22 AM.jpeg',
          caption: 'Prof. PA de Silva',
        },
        {
          publicId: 'our-teachers/group',
          sourceFile: 'WhatsApp Image 2026-07-18 at 9.17.23 AM.jpeg',
          caption: 'Prof. K.K.Y.W. Perera, Prof. PA de Silva, Prof. (Mrs) Indra Dayawansha',
        },
      ],
    },
  ],
};

export default album;
