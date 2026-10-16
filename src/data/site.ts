// Datos de contacto y enlaces del sitio. Actualiza aquí antes de publicar.
export const site = {
  name: 'BUILDEV',
  tagline: 'Software Solutions & Innovation',
  url: 'https://buildev.co',
  email: 'desarrollo@buildev.co',
  // Número en formato internacional sin "+" ni espacios, ej: 573001234567
  whatsapp: '573183797890',
  city: 'Cali, Colombia',
};

export const nav = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#contacto', label: 'Contacto' },
];

// Fuera de la página principal, las anclas del menú deben llevar a ella (ej: /#servicios).
export const navHref = (href: string, pathname: string) => (pathname === '/' ? href : `/${href}`);

// Contenido informativo (guías y preguntas frecuentes). Solo se enlaza desde el footer para no tocar la landing.
export const resources = [
  { href: '/guias/', label: 'Guías' },
  { href: '/preguntas-frecuentes/', label: 'Preguntas frecuentes' },
];
