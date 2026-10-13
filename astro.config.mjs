// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://buildev.co',
  vite: {
    server: {
      // Permite abrir el dev server a través de túneles ngrok
      allowedHosts: ['.ngrok-free.dev'],
    },
  },
});
