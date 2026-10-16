// Idiomas del sitio. El español vive en la raíz (/, /guias/...) para no perder lo ya indexado;
// el inglés vive bajo /en/. Cada página declara su par en el otro idioma para hreflang y el selector.
import { getCollection } from 'astro:content';

export type Lang = 'es' | 'en';
export const langs: Lang[] = ['es', 'en'];

export const getLang = (url: URL): Lang => (url.pathname === '/en' || url.pathname.startsWith('/en/') ? 'en' : 'es');

export const homePath = (lang: Lang) => (lang === 'en' ? '/en/' : '/');

// Páginas fijas traducidas. Las guías se emparejan aparte con `translationOf`.
const pairs: Record<Lang, string>[] = [
  { es: '/', en: '/en/' },
  { es: '/guias/', en: '/en/guides/' },
  { es: '/preguntas-frecuentes/', en: '/en/faq/' },
  { es: '/privacidad/', en: '/en/privacy/' },
  { es: '/gracias/', en: '/en/thank-you/' },
];

export const paths = {
  guides: { es: '/guias/', en: '/en/guides/' },
  faq: { es: '/preguntas-frecuentes/', en: '/en/faq/' },
  privacy: { es: '/privacidad/', en: '/en/privacy/' },
  thanks: { es: '/gracias/', en: '/en/thank-you/' },
} satisfies Record<string, Record<Lang, string>>;

const withSlash = (p: string) => (p.endsWith('/') ? p : `${p}/`);

/** Versiones de la página actual en cada idioma, ej: { es: '/guias/x/', en: '/en/guides/y/' }. */
export async function getAlternates(pathname: string): Promise<Partial<Record<Lang, string>>> {
  const path = withSlash(pathname);
  const pair = pairs.find((p) => p.es === path || p.en === path);
  if (pair) return pair;

  const guides = await getCollection('guides');
  for (const g of guides) {
    const es = `/guias/${g.data.translationOf}/`;
    const en = `/en/guides/${g.id}/`;
    if (path === es || path === en) return { es, en };
  }
  return {};
}

export const nav: { href: string; label: Record<Lang, string> }[] = [
  { href: '#inicio', label: { es: 'Inicio', en: 'Home' } },
  { href: '#servicios', label: { es: 'Servicios', en: 'Services' } },
  { href: '#nosotros', label: { es: 'Nosotros', en: 'About' } },
  { href: '#proyectos', label: { es: 'Proyectos', en: 'Projects' } },
  { href: '#contacto', label: { es: 'Contacto', en: 'Contact' } },
];

/** Fuera de la portada, las anclas del menú llevan a la portada del mismo idioma (ej: /en/#servicios). */
export const navHref = (href: string, url: URL) => {
  const home = homePath(getLang(url));
  return withSlash(url.pathname) === home ? href : `${home}${href}`;
};

// Textos compartidos por header, footer y plantillas.
export const ui = {
  es: {
    talk: 'Hablemos',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    homeAria: 'BUILDEV, ir al inicio',
    navAria: 'Principal',
    langAria: 'Idioma',
    footerAria: 'Pie de página',
    footerNav: 'Navegación',
    footerContact: 'Contacto',
    footerClaim: 'Ideas que construyen el futuro.',
    rights: 'Todos los derechos reservados.',
    privacy: 'Privacidad',
    guides: 'Guías',
    faq: 'Preguntas frecuentes',
    city: 'Cali, Colombia',
    crumbsAria: 'Ruta de navegación',
    home: 'Inicio',
    ctaTitle: '¿Tienes un proyecto en mente?',
    ctaText: 'Cuéntanos qué necesitas. Te respondemos con una propuesta clara, sin compromiso.',
    waText: 'Hola BUILDEV, leí su sitio web y quiero hablar sobre un proyecto.',
    backHome: 'Volver al inicio',
  },
  en: {
    talk: "Let's talk",
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    homeAria: 'BUILDEV, go to home',
    navAria: 'Main',
    langAria: 'Language',
    footerAria: 'Footer',
    footerNav: 'Navigation',
    footerContact: 'Contact',
    footerClaim: 'Ideas that build the future.',
    rights: 'All rights reserved.',
    privacy: 'Privacy',
    guides: 'Guides',
    faq: 'FAQ',
    city: 'Cali, Colombia',
    crumbsAria: 'Breadcrumb',
    home: 'Home',
    ctaTitle: 'Have a project in mind?',
    ctaText: "Tell us what you need. We'll reply with a clear proposal, no strings attached.",
    waText: "Hi BUILDEV, I read your website and I'd like to talk about a project.",
    backHome: 'Back to home',
  },
} satisfies Record<Lang, Record<string, string>>;

export const useT = (url: URL) => ui[getLang(url)];
