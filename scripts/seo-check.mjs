import fs from 'node:fs'
import path from 'node:path'
import { ROUTES, SITE_URL } from '../src/seo.js'
const dist = path.resolve('dist')
const titles = new Map()
for (const route of ROUTES) {
  const file = route === '/' ? path.join(dist, 'index.html') : path.join(dist, route.slice(1), 'index.html')
  if (!fs.existsSync(file)) throw new Error(`Falta prerender: ${route}`)
  const html = fs.readFileSync(file, 'utf8')
  const title = html.match(/<title>(.*?)<\/title>/)?.[1]
  if (!title) throw new Error(`Falta title: ${route}`)
  if ((html.match(/<meta name="description"/g) || []).length !== 1) throw new Error(`Descripción inválida: ${route}`)
  if ((html.match(/<link rel="canonical"/g) || []).length !== 1 || !html.includes(SITE_URL)) throw new Error(`Canonical inválido: ${route}`)
  if ((html.match(/<h1\b/g) || []).length !== 1) throw new Error(`H1 inválido: ${route}`)
  if (titles.has(title)) throw new Error(`Title duplicado: ${route} y ${titles.get(title)}`)
  titles.set(title, route)
}
if (!fs.existsSync(path.join(dist, 'sitemap.xml'))) throw new Error('Falta sitemap')
if (!fs.existsSync(path.join(dist, '404.html'))) throw new Error('Falta 404')
console.log(`SEO OK: ${ROUTES.length} rutas prerenderizadas, sin titles duplicados.`)
