// Genera versiones optimizadas de las imágenes a partir de los originales.
// Uso: node scripts/optimize-images.mjs
// (requiere la devDependency "sharp"). No forma parte del build de Cloudflare Pages:
// los archivos generados se commitean y se sirven como estáticos.
import sharp from 'sharp'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const pub = path.join(root, 'public')

// La foto se muestra como máximo a ~112px (≈224px en pantallas retina).
// 320px deja margen de nitidez con un peso mínimo.
// El original (alta resolución) se guarda fuera de public/ para no servirlo.
const SRC = path.join(root, 'assets-src', 'profile-original.jpg')

await sharp(SRC)
  .resize({ width: 320, withoutEnlargement: true })
  .webp({ quality: 82 })
  .toFile(path.join(pub, 'profile.webp'))

await sharp(SRC)
  .resize({ width: 320, withoutEnlargement: true })
  .jpeg({ quality: 80, mozjpeg: true })
  .toFile(path.join(pub, 'profile.jpg'))

console.log('✓ Imágenes optimizadas: profile.webp + profile.jpg (320px)')
