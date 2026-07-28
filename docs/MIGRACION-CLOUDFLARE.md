# Migración completa a Cloudflare

## 1. Crear el proyecto de Pages

1. En Cloudflare, abre **Workers & Pages**.
2. Crea una aplicación de **Pages** e importa el repositorio
   `ventasconfianza100-max/luis-reyes-webs-cloudflare`.
3. Configura `npm run build` como comando y `dist` como directorio de salida.
4. Espera a que la URL temporal `*.pages.dev` funcione y revisa todas las rutas.

No cambies todavía el DNS del dominio. Primero valida el despliegue temporal.

## 2. Llevar el dominio a Cloudflare

1. Añade `luisreyesweb.cl` como zona en la cuenta de Cloudflare.
2. Copia todos los registros DNS existentes antes de cambiar nameservers,
   especialmente correo: MX, SPF, DKIM y DMARC.
3. En el registrador del dominio cambia los nameservers por los dos asignados
   por Cloudflare.
4. Espera a que la zona aparezca como **Active**.

Cambiar nameservers no transfiere el registro ni la propiedad del dominio. Para
una migración sin interrupciones, los registros DNS deben existir en Cloudflare
antes del cambio.

## 3. Asociar la web

1. En el proyecto de Pages abre **Custom domains**.
2. Añade primero `www.luisreyesweb.cl`.
3. Añade también `luisreyesweb.cl`.
4. Define una regla permanente (301) que redirija el dominio sin `www` hacia
   `https://www.luisreyesweb.cl` conservando la ruta.
5. Activa **Always Use HTTPS**.

La versión canónica del sitio ya está definida con `www` en metadatos,
robots.txt y sitemap.

## 4. Comprobaciones finales

- Inicio, proyectos, agenda, blog y páginas de detalle responden correctamente.
- `https://www.luisreyesweb.cl/robots.txt` y `/sitemap.xml` están disponibles.
- Una ruta inventada devuelve la página 404.
- El dominio sin `www` conserva la ruta y redirige con 301 al dominio con `www`.
- HTTPS funciona sin advertencias.
- WhatsApp, imágenes y el PDF descargable funcionan.
- El correo del dominio sigue operativo.

## 5. Retiro del sistema anterior

Mantén el despliegue anterior durante algunos días como respaldo. Cuando DNS,
HTTPS y correo estén verificados, desconecta Vercel del dominio. El repositorio
anterior puede archivarse en GitHub, pero no hace falta borrarlo.
