import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Guías del blog. Cada archivo .md en src/content/guias es una página en /guias/<nombre-del-archivo>/.
const guias = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guias' }),
  schema: z.object({
    title: z.string(),
    // Resumen para Google y para la tarjeta del listado: entre 120 y 160 caracteres.
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    // Preguntas cortas al final de la guía; también van como datos estructurados FAQPage.
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { guias };
