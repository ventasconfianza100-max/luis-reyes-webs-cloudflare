import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import {
  ROUTES,
  getMeta,
  canonicalFor,
  jsonLdScriptsFor,
  ogTypeFor,
  articleMetaTagsFor,
} from '../src/seo.js'
import { render } from '../dist-server/entry-server.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const distDir = path.join(root, 'dist')
const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8')

function replaceAttr(html, openTag, value) {
  // Reemplaza el content/href del primer tag que empiece por `openTag`.
  const re = new RegExp(`(${openTag.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})[^"]*(")`)
  return html.replace(re, `$1${value}$2`)
}

function applyMeta(html, routePath) {
  const meta = getMeta(routePath)
  const canonical = canonicalFor(routePath)

  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${meta.title}</title>`)
  html = replaceAttr(html, '<meta name="description" content="', meta.description)
  html = replaceAttr(html, '<link rel="canonical" href="', canonical)
  html = replaceAttr(html, '<meta property="og:title" content="', meta.title)
  html = replaceAttr(html, '<meta property="og:description" content="', meta.description)
  html = replaceAttr(html, '<meta property="og:url" content="', canonical)
  html = replaceAttr(html, '<meta property="og:type" content="', ogTypeFor(routePath))
  html = replaceAttr(html, '<meta name="robots" content="', meta.noindex ? 'noindex, nofollow' : 'index, follow')

  // Twitter Card (refleja título y descripción de la ruta).
  html = replaceAttr(html, '<meta name="twitter:title" content="', meta.title)
  html = replaceAttr(html, '<meta name="twitter:description" content="', meta.description)

  // Meta de artículo (fechas/autor) solo para los posts del blog.
  html = html.replace('<!--SSR_ARTICLE_META-->', articleMetaTagsFor(routePath))

  // Inyecta el JSON-LD que corresponde a esta ruta.
  html = html.replace('<!--SSR_JSONLD-->', jsonLdScriptsFor(routePath))
  return html
}

for (const routePath of ROUTES) {
  const appHtml = render(routePath)
  let html = applyMeta(template, routePath)
  html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)

  const outPath =
    routePath === '/'
      ? path.join(distDir, 'index.html')
      : path.join(distDir, routePath, 'index.html')

  fs.mkdirSync(path.dirname(outPath), { recursive: true })
  fs.writeFileSync(outPath, html)
  console.log('✓ prerendered', routePath, '→', path.relative(root, outPath))
}

// Página 404 real para rutas desconocidas; Cloudflare Pages la sirve automáticamente.
{
  const notFoundPath = path.join(distDir, '404.html')
  let html = applyMeta(template, '/__404__')
  html = html.replace('<div id="root"></div>', `<div id="root">${render('/__404__')}</div>`)
  fs.writeFileSync(notFoundPath, html)
  console.log('✓ 404 prerendered → dist/404.html')
}

// ── Sitemap automático ───────────────────────────────────────
// Se genera a partir de TODAS las rutas (incluye los artículos del blog),
// así nunca queda desactualizado al agregar contenido nuevo.
function sitemapMeta(routePath) {
  if (routePath === '/') return { priority: '1.0', changefreq: 'weekly' }
  if (routePath === '/proyectos' || routePath === '/proyectos-empresas')
    return { priority: '0.9', changefreq: 'weekly' }
  if (routePath === '/blog') return { priority: '0.8', changefreq: 'weekly' }
  if (routePath.startsWith('/blog/')) return { priority: '0.7', changefreq: 'monthly' }
  if (routePath === '/agenda') return { priority: '0.6', changefreq: 'monthly' }
  return { priority: '0.7', changefreq: 'monthly' }
}

const today = new Date().toISOString().slice(0, 10)
const urls = ROUTES.map((routePath) => {
  const { priority, changefreq } = sitemapMeta(routePath)
  return `  <url>
    <loc>${canonicalFor(routePath)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
}).join('\n')

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`
fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap)
console.log('✓ sitemap.xml generado con', ROUTES.length, 'rutas')
