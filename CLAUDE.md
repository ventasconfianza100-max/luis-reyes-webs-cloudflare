# CLAUDE.md

## Qué es este repo

Web personal/profesional de **Luis Reyes** (React + Vite, SSR/prerender). Desplegada en Cloudflare Pages.

## Arquitectura SEO (clave de este repo)

- **SSG/prerender**: build hace `vite build` normal + `vite build --ssr src/entry-server.jsx` + `node scripts/prerender.mjs` — genera HTML estático por ruta para SEO. Cualquier cambio de rutas debe considerar el prerender.
- **`seo.js` es la fuente única de metadatos** (title, description, OG, etc.) — no dupliques meta tags manualmente en componentes; todo pasa por ese archivo.
- Imágenes ya migradas a **WebP** — mantener ese formato en nuevos assets, no volver a subir JPG/PNG sin convertir.
- **Cross-link con la consulta de psicólogo**: este sitio enlaza con `psicologo-luis-reyes` (otro repo, mismo Luis Reyes) — mantener coherencia de marca/datos entre ambos, pero son proyectos separados.

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
