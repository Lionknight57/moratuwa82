import { defineCollection, z } from 'astro:content';

// The "news" collection: each Markdown file in src/content/news/ is one news item.
const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string().optional(),
    // Optional Cloudinary public ID for a hero image on the post
    heroImage: z.string().optional(),
    // Pinned items sort above everything else, regardless of date.
    pinned: z.boolean().default(false),
    // If set, the item links straight here (e.g. a gallery album) and no
    // standalone /news/<slug> page is generated.
    link: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { news };
