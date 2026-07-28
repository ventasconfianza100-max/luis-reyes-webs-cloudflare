# Luis Reyes Webs — Cloudflare

Sitio profesional de Luis Reyes, preparado para desplegarse desde GitHub en
Cloudflare Pages y publicarse en `https://www.luisreyesweb.cl`.

## Desarrollo local

Requisitos: Node.js 20 y npm.

```bash
npm ci
npm run dev
```

## Verificación

```bash
npm run build
npm run seo:check
```

El build genera el sitio estático y prerenderizado en `dist/`.

## Despliegue en Cloudflare Pages

Conecta este repositorio desde **Workers & Pages > Create > Pages > Import an
existing Git repository** y usa:

- Rama de producción: `main`
- Framework preset: `Vite`
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `/`
- Node.js: `20` (también fijado en `.nvmrc`)

Cada cambio enviado a `main` creará un nuevo despliegue. Los pull requests
obtendrán una URL de vista previa.

Consulta [docs/MIGRACION-CLOUDFLARE.md](docs/MIGRACION-CLOUDFLARE.md) antes de
cambiar el dominio y los DNS.
