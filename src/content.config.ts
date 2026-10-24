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

// Versión en inglés de las guías (/en/guides/<archivo>/). `translationOf` es el nombre del archivo
// de la guía en español que traduce; con eso se enlazan entre sí (hreflang y selector de idioma).
const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    translationOf: z.string(),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    draft: z.boolean().default(false),
  }),
});

// Blog (/blog/<nombre-del-archivo>/): la noticia más importante del sector TI, con la opinión de BUILDEV.
// Solo en español. `image` es la imagen para compartir en redes (1200x630, dentro de /public).
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    image: z.string().optional(),
    // Fuentes de la noticia; se listan al final del artículo.
    sources: z.array(z.object({ title: z.string(), url: z.string().url() })).default([]),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { guias, guides, blog };
