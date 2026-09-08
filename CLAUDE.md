# CLAUDE.md

## Qué es este repo

Web personal/profesional de **Luis Reyes** (React + Vite, SSR/prerender). Desplegada en Cloudflare Pages.

## Arquitectura SEO (clave de este repo)

- **SSG/prerender**: build hace `vite build` normal + `vite build --ssr src/entry-server.jsx` + `node scripts/prerender.mjs` — genera HTML estático por ruta para SEO. Cualquier cambio de rutas debe considerar el prerender.
- **`seo.js` es la fuente única de metadatos** (title, description, OG, etc.) — no dupliques meta tags manualmente en componentes; todo pasa por ese archivo.
- Imágenes ya migradas a **WebP** — mantener ese formato en nuevos assets, no volver a subir JPG/PNG sin convertir.
- **Cross-link con la consulta de psicólogo**: este sitio enlaza con `psicologo-luis-reyes` (otro repo, mismo Luis Reyes) — mantener coherencia de marca/datos entre ambos, pero son proyectos separados.

## Panel interno (/admin)

- Ruta privada (`src/admin/`) para cotizaciones, contratos, actas y boletas de honorarios. No está enlazada en el sitio, va con `noindex`, fuera del sitemap y con `Disallow` en `robots.txt`.
- Se prerenderiza aparte vía `INTERNAL_ROUTES` en `seo.js` (no entra en `ROUTES`, así no lo revisa `seo:check` ni el sitemap) y se carga como chunk propio, para no sumar peso al bundle público.
- Los datos viven solo en `localStorage` del navegador; el respaldo se exporta/importa como JSON desde Ajustes.
- Regla de negocio: los montos se manejan como **líquidos** y la boleta se emite por el bruto equivalente (`honorarios.js` tiene la tabla de retención por año, 15,25% en 2026).

## Comandos

```
npm install
npm run dev       # vite
npm run build     # build + SSR + prerender
npm run preview
```

## Flujo de trabajo

- Commits en español.
- Al tocar SEO, verificar que el HTML prerenderizado (`dist/`) realmente contiene el contenido esperado, no solo el bundle de JS.
