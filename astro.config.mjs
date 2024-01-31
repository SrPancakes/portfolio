import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: 'server',
  adapter: vercel(),
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'ga', 'fr'], 
    routing: {
      prefixDefaultLocale: false,
    }
  }
});
