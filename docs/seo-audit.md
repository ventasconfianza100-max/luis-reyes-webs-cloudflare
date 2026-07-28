# Auditoría SEO inicial

Fecha: 2026-07-13. El sitio tiene prerender y un registro central de metadata, pero el sitemap de `public/` no reflejaba todas las rutas del blog y comerciales. Las rutas desconocidas caían en la portada y heredaban su title/canonical. Se corrigió el flujo para generar sitemap desde `ROUTES`, servir una 404 prerenderizada y validar title, description, canonical y H1.

## Hallazgos y oportunidades

- Rutas indexables: las declaradas en `src/seo.js` más los posts de `blogPosts.js`.
- Rutas faltantes priorizadas: `/paginas-web-para-psicologos` y `/catalogo-online-con-whatsapp`.
- Canonical: usa `https://www.luisreyesweb.cl`; debe mantenerse una redirección canónica de www/sin-www en infraestructura.
- Enlaces internos: existen href reales; se reforzaron las nuevas páginas con enlaces a proyectos, tienda y artículo relacionado.
- Conversión: WhatsApp y agenda estaban disponibles, pero faltaba una página específica para dos intenciones comerciales de alta cercanía.
- Imágenes: la portada principal ya tiene dimensiones y prioridad; continuar auditando assets secundarios y lazy loading.
- Prerender: el contenido de las rutas registradas se genera en HTML; las rutas desconocidas usan `404.html` y `noindex`.
- La página `dist/404.html` debe probarse en Cloudflare Pages con una URL inexistente para confirmar la respuesta visual y el estado 404.

## Pendiente con datos del propietario

Validar capacidades exactas de pagos, stock, mantenimiento, precios vigentes, casos publicables y configuración de Google Business Profile/Search Console.
