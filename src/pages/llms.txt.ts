import type { APIRoute } from 'astro';
import { getGuias, guiaHref } from '../data/guias';
import { getPosts, postHref } from '../data/blog';
import { faqGroups } from '../data/faq';
import { site } from '../data/site';
import { paths } from '../i18n';

// /llms.txt: resumen del sitio en Markdown para asistentes de IA (ChatGPT, Gemini, Claude, Perplexity).
// Formato propuesto en https://llmstxt.org
export const GET: APIRoute = async () => {
  const guias = await getGuias('es');
  const guides = await getGuias('en');
  const posts = await getPosts();
  const list = (entries: typeof guias, lang: 'es' | 'en') =>
    entries.map((g) => `- [${g.data.title}](${site.url}${guiaHref(lang, g.id)}): ${g.data.description}`).join('\n');

  const body = `# ${site.name}

> ${site.name} es una empresa de desarrollo de software a la medida con sede en ${site.city}. Construye aplicaciones web, apps móviles, automatizaciones de procesos, integraciones (APIs, pasarelas de pago, WhatsApp) e infraestructura en la nube para empresas de toda Colombia.

- Sitio: ${site.url}
- Correo: ${site.email}
- WhatsApp: +${site.whatsapp}

## Servicios

- Software a la medida: plataformas y sistemas diseñados para los procesos de cada empresa.
- Aplicaciones web: portales, paneles administrativos y productos SaaS.
- Apps móviles: aplicaciones para que los clientes accedan al servicio desde el celular.
- Automatización de procesos: eliminar tareas repetitivas y reducir errores operativos.
- Integraciones y APIs: conexión de sistemas, pasarelas de pago, WhatsApp y servicios de terceros.
- Cloud y despliegue: infraestructura en la nube escalable, monitoreada y segura.

## Productos propios

- [Agendorio](https://agendorio.buildev.co): plataforma SaaS de agendamiento en línea con WhatsApp para barberías, salones de belleza, consultorios, gimnasios y estudios.
- [Rentablo](https://rentablo.buildev.co): app móvil Android que reparte cada venta entre insumos, sueldo y utilidad para independientes y negocios de servicios.

## Guías

${list(guias, 'es')}

## Blog

Cada 8 días, la noticia más importante del sector TI con la opinión de ${site.name}.

${posts.map((p) => `- [${p.data.title}](${site.url}${postHref(p.id)}): ${p.data.description}`).join('\n')}

## Preguntas frecuentes

${faqGroups.es
  .flatMap((g) => g.items)
  .map((f) => `### ${f.q}\n\n${f.a}`)
  .join('\n\n')}

## English

BUILDEV is a custom software development company based in ${site.city}. The site is also available in English.

- [Home](${site.url}/en/)
- [FAQ](${site.url}${paths.faq.en})
${list(guides, 'en')}
`;

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
