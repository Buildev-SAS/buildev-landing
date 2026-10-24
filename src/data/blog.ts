import { getCollection } from 'astro:content';

// Artículos del blog publicados, del más reciente al más antiguo. Contenido en src/content/blog.
export const getPosts = async () => {
  const entries = await getCollection('blog', ({ data }) => !data.draft);
  return entries.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime() || a.id.localeCompare(b.id));
};

export type Post = Awaited<ReturnType<typeof getPosts>>[number];

export const blogPath = '/blog/';

export const postHref = (id: string) => `${blogPath}${id}/`;
