import { getCollection } from 'astro:content';
import { paths, type Lang } from '../i18n';

// Guías publicadas en un idioma, de la más reciente a la más antigua.
// Español: src/content/guias. Inglés: src/content/guides.
export const getGuias = async (lang: Lang = 'es') => {
  const entries =
    lang === 'en'
      ? await getCollection('guides', ({ data }) => !data.draft)
      : await getCollection('guias', ({ data }) => !data.draft);
  return entries.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime() || a.id.localeCompare(b.id));
};

export type Guia = Awaited<ReturnType<typeof getGuias>>[number];

export const guiaHref = (lang: Lang, id: string) => `${paths.guides[lang]}${id}/`;

export const formatDate = (date: Date, lang: Lang = 'es') =>
  date.toLocaleDateString(lang === 'en' ? 'en-US' : 'es-CO', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
