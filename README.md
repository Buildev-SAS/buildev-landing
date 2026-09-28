# BUILDEV · Landing

Sitio corporativo de BUILDEV construido con [Astro](https://astro.build) (salida estática).

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera dist/
npm run preview  # sirve dist/ localmente
```

Requiere Node 20.3+ (Netlify compila con Node 22, ver `netlify.toml`).

## Estructura

- `src/data/site.ts`: correo, WhatsApp, ciudad y menú. **Edita aquí los datos de contacto.**
- `src/components/`: secciones de la página (Hero, Servicios, Nosotros, Proyectos, Contacto…).
- `src/styles/global.css`: paleta corporativa y tipografía (Montserrat).
- `src/pages/gracias.astro`: página a la que llega el formulario después de enviarse.

## Despliegue en Netlify

1. En Netlify: *Add new site → Import an existing project → GitHub* y elige este repositorio.
2. La configuración se toma de `netlify.toml` (build `npm run build`, publish `dist`).
3. El formulario de contacto usa **Netlify Forms**. Tras el primer deploy, los envíos aparecen en
   *Site configuration → Forms*. Ahí se configuran las notificaciones por correo.
