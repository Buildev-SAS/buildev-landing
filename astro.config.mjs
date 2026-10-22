// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Páginas que no deben aparecer en el sitemap (también llevan noindex).
const excluded = ['/gracias/', '/404/', '/en/thank-you/', '/en/404/', '/demo-scroll/'];

export default defineConfig({
  site: 'https://buildev.co',
  integrations: [
    sitemap({
      filter: (page) => !excluded.some((path) => new URL(page).pathname === path),
    }),
  ],
  vite: {
    server: {
      // Permite abrir el dev server a través de túneles ngrok
      allowedHosts: ['.ngrok-free.dev'],
    },
  },
});
