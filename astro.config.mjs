import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  // Used for canonical URLs / sitemap. Update this if a custom domain is added.
  site: 'https://moratuwa82.ken-abeynayake.workers.dev',

  build: {
    // Emit clean URLs like /news/annual-dinner/ instead of /news/annual-dinner.html
    format: 'directory',
  },

  output: "hybrid",
  adapter: cloudflare()
});