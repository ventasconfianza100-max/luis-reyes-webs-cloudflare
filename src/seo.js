import { blogPosts } from './blogPosts.js'

// URL base del sitio
export const SITE_URL = 'https://www.luisreyesweb.cl'

export const metaByPath = {
  '/': {
    title: 'Diseño y Desarrollo Web en Talca, Chile | Luis Reyes Castro',
    description:
      'Diseño y programación de páginas web para negocios en Chile: tiendas online, empresas de servicios y profesionales. Sitios rápidos, optimizados para Google y pensados para captar clientes. Talca, Región del Maule.',
  },
  '/diseno-web-talca': {
    title: 'Diseño Web en Talca | Páginas web para negocios — Luis Reyes Castro',
    description:
      'Diseño y desarrollo de páginas web en Talca: tiendas online, empresas de servicios y profesionales. Sitios rápidos, optimizados para Google y pensados para captar clientes en Talca y la Región del Maule.',
  },
  '/tienda-online-chile': {
    title: 'Tienda Online en Chile | Catálogo y e-commerce a medida — Luis Reyes Castro',
    description:
      'Tiendas online y catálogos a medida en Chile: categorías, tallas, stock, carrito o consulta por WhatsApp y panel de administración propio, sin mensualidades. Envíos a todo Chile.',
  },
  '/paginas-web-empresas-servicios': {
    title: 'Páginas Web para Empresas de Servicios en Chile | Luis Reyes Castro',
    description:
      'Páginas web para empresas de servicios en Chile: fumigación, mantención, salud, educación, limpieza y servicios técnicos. Sitios multipágina con SEO local que captan cotizaciones por WhatsApp.',
  },
  '/desarrollo-software-aplicaciones': {
    title: 'Desarrollo de Software y Aplicaciones a Medida en Chile | Luis Reyes Castro',
    description:
      'Creación de software, programas y aplicaciones a medida en Chile: sistemas de gestión, apps web, automatizaciones e integraciones para tu negocio. Desarrollo propio, sin plantillas.',
  },
  '/paginas-web-para-psicologos': {
    title: 'Páginas web para psicólogos en Chile | Luis Reyes Web',
    description:
      'Webs profesionales para psicólogos y consultas: presentación, enfoque, servicios, agendamiento, WhatsApp, privacidad y SEO local. Atención online en Chile.',
  },
  '/catalogo-online-con-whatsapp': {
    title: 'Catálogo online con WhatsApp en Chile | Luis Reyes Web',
    description:
      'Catálogo online con fichas, categorías, precios y consulta por WhatsApp. Una alternativa simple a una tienda con pago online para negocios en Chile.',
  },
  '/sobre-luis': {
    title: 'Sobre Luis Reyes | Psicólogo y desarrollador web en Talca',
    description: 'Conoce a Luis Reyes Castro, psicólogo y desarrollador web en Talca. Diseño páginas claras, estratégicas y orientadas a generar confianza y contactos.',
  },
  '/diagnostico-web': {
    title: 'Diagnóstico web para tu negocio | Luis Reyes Web',
    description: 'Responde tres preguntas y recibe orientación para saber qué tipo de página web necesita tu negocio en Chile.',
  },
  '/proyectos': {
    title: 'Proyectos de páginas web para profesionales | Luis Reyes Castro',
    description:
      'Ejemplos de sitios web para profesionales independientes en Chile: landing profesional, captación de clientes y presencia digital. Mira los proyectos.',
  },
  '/proyectos-empresas': {
    title: 'Páginas web para empresas, negocios y tiendas | Luis Reyes Castro',
    description:
      'Diseño web para empresas, negocios locales y tiendas online en Chile. Sitios profesionales que ordenan tu oferta, generan confianza y captan clientes.',
  },
  '/proyectos/sitio-psicologa-clinica': {
    title: 'Sitio web para psicóloga clínica — Proyecto | Luis Reyes Castro',
    description:
      'Caso de diseño web para una psicóloga clínica: estructura, enfoque y contacto pensados desde la lógica del paciente que está eligiendo profesional.',
  },
  '/proyectos/consulta-terapeutica-online': {
    title: 'Web para consulta terapéutica online — Proyecto | Luis Reyes Castro',
    description:
      'Caso de diseño web para terapia y consulta psicológica 100% online en Chile, optimizada para agendar sesiones y transmitir confianza.',
  },
  '/proyectos/perfil-profesional-redes': {
    title: 'Perfil profesional para redes — Proyecto | Luis Reyes Castro',
    description:
      'Página breve y elegante tipo link en bio para psicólogos: reúne trayectoria, enfoque y contacto para usar en Instagram, LinkedIn o WhatsApp.',
  },
  '/proyectos-empresas/clinica-centro-atencion': {
    title: 'Web para clínica y centro de atención — Proyecto | Luis Reyes Castro',
    description:
      'Caso de diseño web para una clínica o centro de atención psicológica en Chile: servicios, equipo y agendamiento en un sitio profesional.',
  },
  '/agenda': {
    title: 'Agenda una reunión — Meet, Zoom o WhatsApp | Luis Reyes Castro',
    description:
      'Agenda una reunión sin compromiso con Luis Reyes Castro por Google Meet, Zoom o WhatsApp para cotizar la página web de tu consulta psicológica.',
  },
  '/blog': {
    title: 'Blog sobre diseño web, negocios y presencia online | Luis Reyes Castro',
    description:
      'Artículos prácticos sobre diseño web, precios, presencia digital y cómo captar más clientes para tu negocio en Chile. Tiendas online, empresas y profesionales.',
  },
}

// Agrega automáticamente una entrada de meta por cada artículo del blog.
for (const post of blogPosts) {
  metaByPath[`/blog/${post.slug}`] = {
    title: `${post.title} | Luis Reyes Castro`,
    description: post.description,
  }
}

export const ROUTES = Object.keys(metaByPath)

export function getMeta(path) {
  return metaByPath[path] || { title: 'Página no encontrada | Luis Reyes Web', description: 'La página solicitada no existe.', noindex: true }
}

export function canonicalFor(path) {
  return path === '/' ? SITE_URL : `${SITE_URL}${path}`
}

// Tipo de Open Graph: los artículos del blog son "article", el resto "website".
export function ogTypeFor(path) {
  return path.startsWith('/blog/') ? 'article' : 'website'
}

// Etiquetas <meta> específicas de artículo (fechas y autor) para blog posts.
// Devuelve string vacío si la ruta no es un artículo.
export function articleMetaTagsFor(path) {
  if (!path.startsWith('/blog/')) return ''
  const slug = path.replace('/blog/', '')
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return ''
  const modified = post.dateModified || post.datePublished
  return [
    `<meta property="article:published_time" content="${post.datePublished}" />`,
    `<meta property="article:modified_time" content="${modified}" />`,
    `<meta property="article:author" content="Luis Reyes Castro" />`,
    `<meta property="article:section" content="${post.category}" />`,
  ].join('\n    ')
}

// ─────────────────────────────────────────────────────────────
// Datos estructurados (JSON-LD)
// ─────────────────────────────────────────────────────────────

// 👉 Cuando crees tu ficha de Google Business Profile, copia aquí la URL
//    pública (la que aparece al hacer clic en tu negocio en Maps) para
//    conectar el sitio con la ficha. Déjalo vacío si aún no la tienes.
const GOOGLE_BUSINESS_URL = 'https://www.google.com/search?kgmid=/g/11z7ktq60d'

const SAME_AS = [
  'https://www.linkedin.com/in/luis-reyes-castro-959261339/',
  'https://www.instagram.com/luis.rey3z/',
  // Otra faceta profesional de la misma persona: su consulta de psicólogo.
  // Cruza ambos sitios para que Google entienda "misma persona, dos negocios".
  'https://www.luisreyespsicologo.cl',
  GOOGLE_BUSINESS_URL,
].filter(Boolean)

// Negocio principal — se incluye en todas las páginas
const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE_URL}/#business`,
  name: 'Luis Reyes Castro — Diseño y Desarrollo Web',
  description:
    'Diseño y desarrollo de sitios web para negocios en Chile: tiendas online, empresas de servicios y profesionales. Talca, Región del Maule.',
  url: SITE_URL,
  image: `${SITE_URL}/og-image.jpg`,
  logo: `${SITE_URL}/profile.jpg`,
  telephone: '+56922012534',
  priceRange: '$$',
  currenciesAccepted: 'CLP',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Talca',
    addressRegion: 'Región del Maule',
    addressCountry: 'CL',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -35.4264,
    longitude: -71.6554,
  },
  areaServed: [
    { '@type': 'Country', name: 'Chile' },
    { '@type': 'City', name: 'Talca' },
    { '@type': 'AdministrativeArea', name: 'Región del Maule' },
  ],
  knowsLanguage: 'es',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+56922012534',
    contactType: 'sales',
    availableLanguage: 'Spanish',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de diseño y desarrollo web',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Página web para profesionales independientes',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Tienda online / e-commerce con panel de administración',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Sitio web para empresas y negocios de servicios',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Desarrollo de software, programas y aplicaciones a medida',
        },
      },
    ],
  },
  founder: {
    '@type': 'Person',
    name: 'Luis Reyes Castro',
    jobTitle: 'Desarrollador y Diseñador Web',
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Universidad de Talca',
    },
  },
  sameAs: SAME_AS,
}

// FAQ — SOLO en la home, que es donde se muestra el contenido visible.
// (Google pide que el FAQ estructurado solo esté en páginas que lo muestran.)
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cuánto cuesta una página web en Chile?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El valor depende del tipo de proyecto. Una página web profesional parte desde $90.000 CLP, y una tienda online o sitio multipágina tiene un valor mayor según el alcance. Agendemos una reunión gratuita para cotizar según lo que necesitas.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto tiempo tarda en estar lista mi página web?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El tiempo promedio de entrega es 2 semanas desde que confirmamos el proyecto.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué tipo de páginas web haces?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hago sitios para profesionales independientes, tiendas online con carrito y panel de administración, y webs multipágina para empresas de servicios con SEO local. He desarrollado proyectos reales en estos tres rubros.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo tener una página web si estoy en Talca o en regiones?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutamente. Trabajo con clientes de todo Chile de forma 100% online. La reunión de coordinación también es por videollamada o WhatsApp.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Mi página web va a aparecer en Google?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Todas las páginas incluyen optimización SEO básica: título, descripción, palabras clave y configuración técnica para que Google pueda indexarla correctamente.',
      },
    },
  ],
}

// Etiquetas legibles para construir las migas de pan (breadcrumbs)
const breadcrumbLabels = {
  '/diseno-web-talca': 'Diseño web en Talca',
  '/tienda-online-chile': 'Tienda online en Chile',
  '/paginas-web-empresas-servicios': 'Páginas web para empresas de servicios',
  '/desarrollo-software-aplicaciones': 'Desarrollo de software y aplicaciones',
  '/paginas-web-para-psicologos': 'Páginas web para psicólogos',
  '/catalogo-online-con-whatsapp': 'Catálogo online con WhatsApp',
  '/sobre-luis': 'Sobre Luis',
  '/diagnostico-web': 'Diagnóstico web',
  '/proyectos': 'Proyectos para profesionales',
  '/proyectos-empresas': 'Proyectos para empresas',
  '/proyectos/sitio-psicologa-clinica': 'Sitio para psicóloga clínica',
  '/proyectos/consulta-terapeutica-online': 'Consulta terapéutica online',
  '/proyectos/perfil-profesional-redes': 'Perfil profesional para redes',
  '/proyectos-empresas/clinica-centro-atencion': 'Clínica y centro de atención',
  '/agenda': 'Agenda una reunión',
  '/blog': 'Blog',
}

// Etiqueta de cada artículo para las migas de pan.
for (const post of blogPosts) {
  breadcrumbLabels[`/blog/${post.slug}`] = post.title
}

// Convierte los bloques de un artículo en texto plano (para articleBody).
function blocksToPlainText(blocks) {
  return blocks
    .map((b) => {
      if (b.t === 'ul' || b.t === 'ol') return b.items.join(' ')
      return b.text || ''
    })
    .join(' ')
    .replace(/\*\*/g, '')
}

function blogPostSchema(post) {
  const url = `${SITE_URL}/blog/${post.slug}`
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    articleBody: blocksToPlainText(post.blocks),
    datePublished: post.datePublished,
    dateModified: post.dateModified || post.datePublished,
    inLanguage: 'es-CL',
    image: `${SITE_URL}/og-image.jpg`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    url,
    author: {
      '@type': 'Person',
      name: 'Luis Reyes Castro',
      jobTitle: 'Desarrollador y Diseñador Web',
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Luis Reyes Castro — Diseño y Desarrollo Web',
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/profile.jpg` },
    },
  }
}

function blogIndexSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${SITE_URL}/blog#blog`,
    name: 'Blog — Luis Reyes Castro',
    description:
      'Artículos sobre diseño web, precios, presencia digital y cómo captar más clientes para tu negocio en Chile.',
    url: `${SITE_URL}/blog`,
    inLanguage: 'es-CL',
    publisher: { '@id': `${SITE_URL}/#business` },
    blogPost: blogPosts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description,
      datePublished: post.datePublished,
      url: `${SITE_URL}/blog/${post.slug}`,
    })),
  }
}

function breadcrumbSchema(path) {
  if (path === '/') return null

  const items = [{ name: 'Inicio', url: SITE_URL }]
  const segments = path.split('/').filter(Boolean)
  let acc = ''
  for (const seg of segments) {
    acc += `/${seg}`
    items.push({
      name: breadcrumbLabels[acc] || seg,
      url: `${SITE_URL}${acc}`,
    })
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  }
}

// Devuelve el array de objetos JSON-LD que corresponde a cada ruta.
export function jsonLdFor(path) {
  const schemas = [businessSchema, {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: 'Luis Reyes Web',
    url: SITE_URL,
    publisher: { '@id': `${SITE_URL}/#business` },
    inLanguage: 'es-CL',
  }]

  if (path === '/') {
    schemas.push(faqSchema)
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: getMeta(path).title,
      description: getMeta(path).description,
      url: SITE_URL,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      inLanguage: 'es-CL',
    })
    return schemas
  }

  const bc = breadcrumbSchema(path)
  if (bc) schemas.push(bc)
  schemas.push({
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: getMeta(path).title,
    description: getMeta(path).description,
    url: canonicalFor(path),
    isPartOf: { '@id': `${SITE_URL}/#website` },
    inLanguage: 'es-CL',
  })

  if (
    path === '/paginas-web-para-psicologos' ||
    path === '/catalogo-online-con-whatsapp' ||
    path === '/desarrollo-software-aplicaciones'
  ) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: getMeta(path).title.split(' | ')[0],
      description: getMeta(path).description,
      provider: { '@id': `${SITE_URL}/#business` },
      areaServed: { '@type': 'Country', name: 'Chile' },
      url: canonicalFor(path),
    })
  }

  if (path === '/blog') {
    schemas.push(blogIndexSchema())
  } else if (path.startsWith('/blog/')) {
    const slug = path.replace('/blog/', '')
    const post = blogPosts.find((p) => p.slug === slug)
    if (post) schemas.push(blogPostSchema(post))
  }

  return schemas
}

// Genera las etiquetas <script> de JSON-LD listas para inyectar en el HTML.
export function jsonLdScriptsFor(path) {
  return jsonLdFor(path)
    .map(
      (schema) =>
        `<script type="application/ld+json">${JSON.stringify(schema)}</script>`
    )
    .join('\n    ')
}
