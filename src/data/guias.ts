import { getCollection } from 'astro:content';

// Guías publicadas, de la más reciente a la más antigua.
export const getGuias = async () =>
  (await getCollection('guias', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime(),
  );

export const formatDate = (date: Date) =>
  date.toLocaleDateString('es-CO', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
