import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // TODO: set this to your real domain once you have one (used for canonical URLs / sitemap)
  site: 'https://moratuwa82.example.com',
  build: {
    // Emit clean URLs like /news/annual-dinner/ instead of /news/annual-dinner.html
    format: 'directory',
  },
});
