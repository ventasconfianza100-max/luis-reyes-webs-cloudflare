// ─────────────────────────────────────────────────────────────
// Artículos del blog
// ─────────────────────────────────────────────────────────────
// Datos PLANOS (sin JSX) para que puedan usarse tanto en el render de
// React como en el prerender (Node) y en los datos estructurados.
//
// Cada artículo tiene "blocks": una lista de bloques de contenido.
// Tipos soportados por el renderer (ver BlogPostPage.jsx):
//   { t: 'p',  text }            → párrafo
//   { t: 'h2', text }            → subtítulo
//   { t: 'h3', text }            → sub-subtítulo
//   { t: 'ul', items: [..] }     → lista con viñetas
//   { t: 'ol', items: [..] }     → lista numerada
//   { t: 'quote', text }         → cita / destacado
// Dentro de "text" e "items" puedes usar **negrita** con dobles asteriscos.
//
// Para agregar un artículo nuevo: copia un objeto, cambia el "slug"
// (debe ser único, sin tildes ni espacios) y su contenido. El resto
// del sitio (rutas, sitemap, schema) se actualiza solo.

export const blogPosts = [
  {
    slug: 'como-aparecer-en-google-con-tu-negocio',
    title: 'Cómo aparecer en Google con tu negocio (guía simple)',
    description:
      'Guía práctica para que tu negocio aparezca en Google: ficha de Google Business, página web con SEO local, reseñas y contenido. Pasos claros, sin tecnicismos.',
    category: 'SEO',
    datePublished: '2026-06-27',
    dateModified: '2026-06-27',
    readingMinutes: 7,
    excerpt:
      'Aparecer en Google no es magia ni suerte: es la suma de tu ficha de Google, una web bien hecha y reseñas reales. Te explico cada pieza en orden.',
    blocks: [
      {
        t: 'p',
        text: 'Casi todos los días alguien busca en Google exactamente lo que tú ofreces. La pregunta es: ¿te encuentran a ti o a tu competencia? Aparecer en Google **no es suerte**: es la suma de varias piezas que puedes ir armando. Te las explico en orden de impacto.',
      },
      { t: 'h2', text: '1. Tu ficha de Google Business (lo más rápido)' },
      {
        t: 'p',
        text: 'Es gratis y es lo que te mete en el mapa y en el bloque de resultados locales (esos 3 negocios que salen arriba con estrellas). Si tienes un negocio local, **esto es lo primero**.',
      },
      {
        t: 'ul',
        items: [
          'Créala en google.com/business y verifícala.',
          'Elige bien la **categoría** (es lo que más influye en para qué búsquedas apareces).',
          'Completa horario, zona de servicio, teléfono y sube fotos reales.',
          'Enlaza tu página web desde la ficha.',
        ],
      },
      { t: 'h2', text: '2. Una página web que Google entienda' },
      {
        t: 'p',
        text: 'La ficha te da visibilidad, pero la web es la que te da seriedad y te permite posicionarte por más búsquedas. Para que Google la muestre necesita:',
      },
      {
        t: 'ul',
        items: [
          '**Velocidad:** un sitio lento pierde posiciones y visitas.',
          '**Títulos y textos claros** que mencionen lo que haces y tu ciudad.',
          '**Estructura técnica** correcta: títulos, descripciones y un sitemap.',
          '**Que se vea bien en el celular**, donde está la mayoría de tus clientes.',
        ],
      },
      {
        t: 'quote',
        text: 'La ficha y la web se potencian: juntas, le dicen a Google que eres un negocio real, activo y relevante para tu zona.',
      },
      { t: 'h2', text: '3. Reseñas reales' },
      {
        t: 'p',
        text: 'Las reseñas en tu ficha de Google son de lo que más mueve el ranking local, y además convencen a quien duda. Pídelas a tus clientes contentos: un mensaje simple con el enlace directo a dejar la reseña funciona mejor que esperar a que lo hagan solos.',
      },
      { t: 'h2', text: '4. Contenido que responde lo que la gente busca' },
      {
        t: 'p',
        text: 'Cada artículo o página que responde una duda real ("cuánto cuesta", "cuál me conviene", "cómo funciona") es una puerta de entrada nueva desde Google. No necesitas escribir mucho: necesitas responder bien lo que tu cliente se pregunta antes de comprarte.',
      },
      { t: 'h2', text: 'Lo que tienes que recordar' },
      {
        t: 'p',
        text: 'Aparecer en Google es un proceso, no un botón. Pero el orden es claro: **ficha + web bien hecha + reseñas + contenido**. Si quieres que tu negocio dé ese paso, conversémoslo: **agenda una reunión sin costo** y vemos por dónde partir.',
      },
    ],
  },
  {
    slug: 'tienda-online-o-instagram-negocio',
    title: '¿Tienda online o vender solo por Instagram? Qué te conviene',
    description:
      'Instagram o tienda online: ventajas, límites y cuándo conviene cada uno para vender productos en Chile. Cómo decidir según tu negocio sin perder ventas.',
    category: 'Negocios',
    datePublished: '2026-06-27',
    dateModified: '2026-06-27',
    readingMinutes: 6,
    excerpt:
      'Instagram es genial para mostrarte, pero vender ahí tiene límites: sin buscador, sin catálogo ordenado y sin aparecer en Google. Te ayudo a decidir.',
    blocks: [
      {
        t: 'p',
        text: 'Muchos negocios venden solo por Instagram y les funciona… hasta cierto punto. Llega un momento en que responder precios por DM, perder mensajes y no aparecer en Google empieza a costar ventas. ¿Conviene dar el salto a una tienda online? Veámoslo sin exagerar para ningún lado.',
      },
      { t: 'h2', text: 'Lo que Instagram hace bien' },
      {
        t: 'ul',
        items: [
          'Te da **alcance** y gente nueva que te descubre.',
          'Muestra tu día a día y crea cercanía.',
          'Es rápido y gratis para partir.',
        ],
      },
      { t: 'h2', text: 'Dónde Instagram te empieza a frenar' },
      {
        t: 'ul',
        items: [
          '**No tiene buscador real:** quien quiere "el producto azul talla M" tiene que revisar fotos una por una.',
          '**No aparece en Google:** quien busca tu producto en Google no te encuentra.',
          '**Todo pasa por DM:** precios, stock y dudas se acumulan y se pierden mensajes (y ventas).',
          '**No es tuyo:** si te suspenden la cuenta, pierdes tu catálogo y tus contactos.',
        ],
      },
      { t: 'h2', text: 'Qué te da una tienda o catálogo online' },
      {
        t: 'ul',
        items: [
          'Productos **ordenados por categoría** con precios visibles.',
          '**Búsqueda** para que encuentren rápido lo que quieren.',
          'Aparecer en **Google** cuando buscan lo que vendes.',
          'Carrito o **consulta directa por WhatsApp**, según prefieras.',
          'Un **panel propio** para cambiar precios y stock cuando quieras.',
        ],
      },
      { t: 'h2', text: 'Entonces, ¿cuál elijo?' },
      {
        t: 'p',
        text: 'La respuesta no es "uno u otro": es **usar Instagram para mostrarte y una tienda para vender ordenado**. Instagram atrae, la tienda convierte y aparece en Google. Si ya pasas el día respondiendo precios por DM o tienes muchos productos, es señal clara de que te conviene una tienda.',
      },
      {
        t: 'p',
        text: 'Si quieres ver qué tipo de tienda le calza a tu negocio (y cuánto costaría), **escríbeme y lo vemos juntos**, sin compromiso.',
      },
    ],
  },
  {
    slug: 'cuanto-cuesta-una-pagina-web-en-chile',
    title: '¿Cuánto cuesta una página web en Chile en 2026?',
    description:
      'Cuánto cuesta una página web en Chile en 2026: rangos reales según el tipo de sitio (landing, web de empresa o tienda online), qué influye en el precio y cómo no pagar de más.',
    category: 'Precios',
    datePublished: '2026-06-27',
    dateModified: '2026-06-27',
    readingMinutes: 7,
    excerpt:
      'Una landing simple, una web de empresa y una tienda online no cuestan lo mismo. Te muestro los rangos reales en Chile y qué hace que un presupuesto suba o baje.',
    blocks: [
      {
        t: 'p',
        text: 'Es la primera pregunta de casi todos: "¿cuánto me va a costar?". Y la respuesta honesta es **depende de lo que necesites**, igual que un auto no tiene un precio único. Pero "depende" no te sirve para decidir, así que acá van rangos reales en Chile en 2026 y, más importante, **qué hace que un presupuesto suba o baje**.',
      },
      { t: 'h2', text: 'Rangos de precio según el tipo de sitio' },
      {
        t: 'p',
        text: 'A grandes rasgos, los proyectos se ordenan en tres niveles:',
      },
      {
        t: 'ul',
        items: [
          '**Landing / sitio de una página (desde ~$90.000):** ideal para profesionales o negocios que recién parten. Una sola página bien hecha, con contacto por WhatsApp y SEO básico.',
          '**Web de empresa multipágina (~$190.000 a $350.000):** varias secciones o servicios, blog, SEO local y agendamiento. Para negocios que quieren aparecer en Google y recibir cotizaciones.',
          '**Tienda online / catálogo (desde ~$350.000):** productos, categorías, carrito o consulta por WhatsApp y un panel para administrar precios y stock. El precio varía mucho según cuántas funciones necesites.',
        ],
      },
      {
        t: 'quote',
        text: 'Un precio muy por debajo de estos rangos casi siempre significa plantilla genérica, sin SEO real y sin nadie que responda después de la entrega.',
      },
      { t: 'h2', text: 'Qué hace subir o bajar el precio' },
      {
        t: 'ul',
        items: [
          '**Cantidad de páginas y secciones:** más contenido, más trabajo.',
          '**Funciones especiales:** carrito, pagos, reservas, login, panel de administración.',
          '**Quién escribe los textos:** si los redactas tú, baja; si los escribo yo pensados para convertir, sube un poco pero rinde más.',
          '**Diseño a medida vs. plantilla:** una identidad propia cuesta más que adaptar una plantilla, pero te diferencia.',
          '**SEO y velocidad:** un sitio realmente optimizado para Google requiere trabajo técnico que una plantilla no trae.',
        ],
      },
      { t: 'h2', text: 'Lo que SÍ debería venir incluido siempre' },
      {
        t: 'ul',
        items: [
          'Diseño responsive (se ve bien en celular).',
          'Configuración de dominio y publicación.',
          'SEO base: títulos, descripciones y estructura para que Google pueda indexarte.',
          'Contacto fácil: WhatsApp, formulario o agenda.',
          'Acompañamiento después de la entrega.',
        ],
      },
      { t: 'h2', text: 'El costo que casi nadie menciona' },
      {
        t: 'p',
        text: 'Además del desarrollo, considera el **dominio** (~$10.000 al año) y, según el caso, el **hosting**. Muchos sitios modernos se publican en plataformas con plan gratuito, así que ese costo puede ser cero. Te lo aclaro siempre antes de empezar, sin letra chica.',
      },
      { t: 'h2', text: 'Cómo pedir un presupuesto que se entienda' },
      {
        t: 'ol',
        items: [
          'Cuenta **qué vendes** y a quién.',
          'Di si necesitas **vender online** o solo recibir contactos.',
          'Junta ejemplos de webs que te gusten.',
          'Pregunta **qué incluye y qué no** (dominio, soporte, cambios).',
        ],
      },
      {
        t: 'p',
        text: 'Si quieres un número concreto para tu caso, **agenda una reunión sin costo** y lo vemos juntos. Trabajo con clientes de Talca y de todo Chile de forma online.',
      },
    ],
  },
  {
    slug: 'pagina-web-para-tu-negocio-en-talca',
    title: 'Página web para tu negocio en Talca: por dónde empezar',
    description:
      'Guía simple para tener la página web de tu negocio en Talca: qué tipo de sitio necesitas, cómo aparecer en Google localmente y los pasos para partir sin complicarte.',
    category: 'Negocios',
    datePublished: '2026-06-26',
    dateModified: '2026-06-26',
    readingMinutes: 6,
    excerpt:
      'Si tienes un negocio en Talca y todavía dependes solo de Instagram o del boca a boca, una web propia te ayuda a aparecer en Google cuando te buscan. Acá, por dónde partir.',
    blocks: [
      {
        t: 'p',
        text: 'Cada día, gente en Talca busca en Google "lo que tú vendes" más el nombre de la ciudad: "fumigación Talca", "tienda de ropa Talca", "kinesiólogo Talca". Si no tienes una web propia, **esos clientes están encontrando a tu competencia, no a ti**. Te explico cómo empezar sin complicarte.',
      },
      { t: 'h2', text: '1. Define qué tipo de web necesitas' },
      {
        t: 'p',
        text: 'No todos los negocios necesitan lo mismo. En general:',
      },
      {
        t: 'ul',
        items: [
          '**Si vendes servicios** (salud, técnico, mantención, educación): una web de varias páginas que explique lo que haces y reciba cotizaciones.',
          '**Si vendes productos:** un catálogo o tienda online con categorías y consulta por WhatsApp.',
          '**Si vendes tu trabajo personal** (profesional independiente): un sitio que genere confianza y facilite agendar.',
        ],
      },
      { t: 'h2', text: '2. Apunta a aparecer en Google localmente' },
      {
        t: 'p',
        text: 'Para un negocio local, dos cosas mueven la aguja más que cualquier otra:',
      },
      {
        t: 'ul',
        items: [
          '**Tu ficha de Google Business:** es gratis y es lo que te hace aparecer en el mapa y en el "pack" de resultados locales. Créala y mantenla con fotos y horarios reales.',
          '**Una web que mencione Talca y tu rubro:** Google necesita entender dónde estás y qué ofreces. Eso se logra con buenos títulos, textos y datos de tu zona.',
        ],
      },
      {
        t: 'quote',
        text: 'La web y la ficha de Google se potencian: la ficha te da visibilidad local y la web te da la seriedad para que elijan llamarte a ti.',
      },
      { t: 'h2', text: '3. Haz que el contacto sea de un solo toque' },
      {
        t: 'p',
        text: 'La mayoría de tus clientes te verá desde el celular. Un botón de WhatsApp visible, tu teléfono y tu ubicación a la mano convierten muchas más visitas en mensajes reales.',
      },
      { t: 'h2', text: '4. Empieza simple y crece después' },
      {
        t: 'p',
        text: 'No necesitas el sitio perfecto el primer día. Es mejor publicar una web clara y honesta ahora, e ir agregando secciones, fotos o una tienda más adelante. Lo importante es **estar presente cuando te busquen**.',
      },
      {
        t: 'p',
        text: 'Si quieres, lo conversamos: **agenda una reunión sin costo** y vemos qué tipo de web le conviene a tu negocio. Trabajo en Talca y en todo Chile de forma online.',
      },
    ],
  },
  {
    slug: 'pagina-web-o-instagram-psicologos',
    title: '¿Necesito una página web si ya tengo Instagram? (psicólogos)',
    description:
      '¿Basta con Instagram para captar pacientes, o un psicólogo necesita página web propia? Diferencias reales en confianza, posicionamiento en Google y control de tu presencia.',
    category: 'Presencia digital',
    datePublished: '2026-06-04',
    dateModified: '2026-06-04',
    readingMinutes: 6,
    excerpt:
      'Instagram te da alcance, pero no aparece bien en Google ni transmite la misma seriedad. Te explico cuándo basta con redes y cuándo necesitas una web.',
    blocks: [
      {
        t: 'p',
        text: 'Es la pregunta que más me hacen los psicólogos: "Si ya tengo Instagram con seguidores, ¿para qué quiero una página web?". Es una duda razonable. La respuesta corta es que **no compiten, se complementan**, pero cada uno cumple un rol muy distinto. Veámoslo.',
      },
      { t: 'h2', text: 'Lo que Instagram hace bien' },
      {
        t: 'ul',
        items: [
          'Te da **alcance**: gente nueva puede descubrirte a través de reels y recomendaciones.',
          'Permite mostrar tu personalidad y crear cercanía con contenido constante.',
          'Es ideal para mantener el vínculo con quienes ya te siguen.',
        ],
      },
      { t: 'h2', text: 'Lo que Instagram NO puede darte' },
      {
        t: 'p',
        text: 'Aquí está el punto que casi nadie considera hasta que pierde pacientes por ello.',
      },
      {
        t: 'ul',
        items: [
          '**No aparece bien en Google.** Cuando alguien busca "psicólogo ansiedad" en Google, tu perfil de Instagram casi nunca sale. Una página web sí puede posicionarse.',
          '**No es tuyo.** Si Instagram cambia su algoritmo, te suspende la cuenta o simplemente deja de mostrar tu contenido, pierdes el acceso a tu audiencia de la noche a la mañana.',
          '**Transmite menos seriedad para una decisión clínica.** Un perfil social está bien para descubrirte, pero a la hora de confiarte su salud mental, muchas personas esperan ver un espacio profesional propio.',
          '**Obliga a competir con distracciones.** En Instagram, junto a tu post está el de un influencer y un meme. En tu web, la persona está enfocada solo en ti.',
        ],
      },
      { t: 'h2', text: 'La forma correcta de pensarlo' },
      {
        t: 'p',
        text: 'No es "web o Instagram". Es entender que cada uno es una etapa del recorrido del paciente:',
      },
      {
        t: 'ol',
        items: [
          '**Descubrimiento:** te encuentran en Instagram, en una recomendación o en Google.',
          '**Evaluación:** revisan quién eres y si les das confianza.',
          '**Decisión:** dan el paso y te escriben.',
        ],
      },
      {
        t: 'p',
        text: 'Instagram brilla en la primera etapa. Pero la evaluación y la decisión ocurren mucho mejor en una página web, porque ahí controlas el mensaje, la calma y el paso a seguir. Por eso lo ideal es que tu Instagram lleve a tu web, y tu web cierre la conversación.',
      },
      {
        t: 'quote',
        text: 'Instagram es donde te conocen. Tu página web es donde te eligen.',
      },
      { t: 'h2', text: '¿Entonces necesito una web?' },
      {
        t: 'p',
        text: 'Si solo quieres mantener presencia y compartir contenido, Instagram puede bastarte. Pero si quieres **aparecer en Google, proyectar más profesionalismo y no depender de un algoritmo ajeno**, una página web propia deja de ser un lujo y pasa a ser tu base. Lo bueno es que no tiene por qué ser cara ni complicada: una página simple y bien pensada ya marca la diferencia.',
      },
    ],
  },

  {
    slug: 'que-debe-tener-pagina-web-psicologo',
    title: 'Qué debe tener la página web de un psicólogo para generar confianza',
    description:
      'Los elementos que toda página web de psicólogo necesita para transmitir confianza y convertir visitas en pacientes: enfoque claro, rostro visible, contacto simple y SEO.',
    category: 'Diseño web',
    datePublished: '2026-06-04',
    dateModified: '2026-06-04',
    readingMinutes: 6,
    excerpt:
      'Una web bonita no sirve si no genera confianza. Estos son los elementos que hacen que un visitante decida escribirte a ti y no a otro profesional.',
    blocks: [
      {
        t: 'p',
        text: 'Una página web de psicólogo no se trata de verse "bonita". Se trata de que una persona que está pasando por un momento difícil sienta, en pocos segundos, que **puede confiar en ti**. Estos son los elementos que de verdad marcan la diferencia entre una web que decora y una que genera confianza.',
      },
      { t: 'h2', text: '1. Tu rostro y tu nombre, visibles de inmediato' },
      {
        t: 'p',
        text: 'Escribirle a un psicólogo desconocido genera ansiedad. Ver tu cara, tu nombre y tu título reduce esa barrera al instante. Una foto cálida y profesional es uno de los elementos que más confianza transmite en todo el sitio.',
      },
      { t: 'h2', text: '2. Tu enfoque explicado en lenguaje humano' },
      {
        t: 'p',
        text: 'El error más común es llenar la web de tecnicismos. El paciente no busca "intervención psicoterapéutica de corte integrativo": busca dejar de sentirse ansioso, dormir mejor o superar una ruptura. Habla de lo que la persona vive, no del nombre técnico de lo que tú haces.',
      },
      {
        t: 'ul',
        items: [
          'Explica **a quién ayudas** (ansiedad, duelo, parejas, adolescentes...).',
          'Describe **cómo es trabajar contigo**, para que sepan qué esperar.',
          'Evita la jerga clínica; usa las palabras que usaría el paciente.',
        ],
      },
      { t: 'h2', text: '3. Un solo paso de contacto, imposible de perder' },
      {
        t: 'p',
        text: 'Cada clic extra o cada duda sobre "cómo lo contacto" hace que pierdas personas. Lo ideal es un **botón claro y siempre visible**: WhatsApp o un sistema de agenda. Sin formularios eternos, sin buscar el correo en letra chica.',
      },
      {
        t: 'quote',
        text: 'Si el paciente tiene que pensar cómo contactarte, ya perdiste parte del impulso que lo llevó a tu web.',
      },
      { t: 'h2', text: '4. Señales de profesionalismo y respaldo' },
      {
        t: 'ul',
        items: [
          'Tu **formación y título** (universidad, especialidad).',
          'Modalidad de atención (online, presencial, ciudad).',
          'Opcional pero potente: **testimonios o reseñas** de pacientes (cuidando siempre la confidencialidad).',
        ],
      },
      { t: 'h2', text: '5. Que cargue rápido y se vea bien en el celular' },
      {
        t: 'p',
        text: 'La mayoría de tus visitas llegan desde el teléfono. Si la web tarda en cargar o se ve desordenada en móvil, la persona se va antes de leerte. Una web liviana y ordenada en celular no es un detalle técnico: es directamente cuántos pacientes te escriben.',
      },
      { t: 'h2', text: '6. SEO básico para que Google te encuentre' },
      {
        t: 'p',
        text: 'De nada sirve una web perfecta si nadie llega a ella. Necesita lo mínimo para que Google la entienda: un título y descripción claros, palabras clave que usan tus pacientes, datos estructurados y una buena velocidad. Eso es lo que hace que aparezcas cuando alguien busca un psicólogo como tú.',
      },
      { t: 'h2', text: 'En resumen' },
      {
        t: 'p',
        text: 'Una buena web de psicólogo combina **confianza humana** (tu cara, tu enfoque, tu cercanía) con **claridad práctica** (un contacto simple, carga rápida y buen SEO). Cuando esos elementos están bien resueltos, la web deja de ser una tarjeta de presentación y se convierte en una fuente constante de pacientes.',
      },
    ],
  },
  {
    slug: 'cuanto-cuesta-una-pagina-web-para-psicologos',
    title: '¿Cuánto cuesta una página web para psicólogos en Chile?',
    description:
      '¿Cuánto vale una página web para psicólogos en Chile? Te explico los rangos de precio, de qué depende y qué incluye una web profesional pensada para captar pacientes.',
    category: 'Precios',
    datePublished: '2026-06-05',
    dateModified: '2026-06-05',
    readingMinutes: 6,
    excerpt:
      'El precio de una web para psicólogos varía según lo que necesites. Te muestro los rangos reales en Chile y qué debería incluir para que valga la pena.',
    blocks: [
      {
        t: 'p',
        text: 'Es la primera pregunta que se hace casi todo psicólogo que quiere su web: "¿cuánto me va a costar?". La respuesta honesta es que **depende de lo que necesites**, pero sí puedo darte rangos reales y, sobre todo, ayudarte a entender qué estás pagando para que no te cobren de más ni de menos.',
      },
      { t: 'h2', text: 'Rangos de precio en Chile' },
      {
        t: 'ul',
        items: [
          '**Plantilla genérica o tú mismo (Wix, etc.):** desde gratis hasta ~$50.000, pero te lleva tiempo y rara vez convierte bien.',
          '**Web profesional para un psicólogo independiente:** suele ir desde **$90.000** aprox., con diseño a medida, optimización y enfoque en captar pacientes.',
          '**Web para clínica o centro con varios profesionales:** más alta, según cantidad de páginas, equipo y funcionalidades.',
        ],
      },
      { t: 'h2', text: '¿De qué depende el precio?' },
      {
        t: 'ol',
        items: [
          '**Cantidad de páginas:** no es lo mismo una web de una sola página que una con blog y casos.',
          '**Diseño a medida vs. plantilla:** lo hecho para ti transmite más confianza.',
          '**SEO incluido:** que esté optimizada para aparecer en Google marca una gran diferencia a largo plazo.',
          '**Textos:** redactar para que conecten con el paciente es parte del valor.',
        ],
      },
      { t: 'h2', text: 'El error más caro: mirar solo el precio' },
      {
        t: 'p',
        text: 'Una web barata que no aparece en Google ni transmite confianza no te trae pacientes: es plata perdida. Una web bien hecha se paga sola con **uno o dos pacientes nuevos**. La pregunta correcta no es "cuánto cuesta", sino "cuánto me va a devolver".',
      },
      {
        t: 'quote',
        text: 'Una web no es un gasto, es una inversión que trabaja por ti las 24 horas, incluso mientras atiendes o duermes.',
      },
      {
        t: 'p',
        text: 'Soy Luis Reyes Castro, psicólogo titulado UTalca, y diseño páginas web para psicólogos pensadas desde la lógica del paciente que está decidiendo. Si quieres un valor exacto para tu caso, agenda una reunión sin compromiso y lo conversamos.',
      },
    ],
  },
  {
    slug: 'como-conseguir-mas-pacientes-como-psicologo',
    title: 'Cómo conseguir más pacientes como psicólogo (guía práctica)',
    description:
      '¿Cómo conseguir más pacientes siendo psicólogo en Chile? Estrategias reales de presencia online, Google, redes y web para llenar tu agenda sin depender solo del boca a boca.',
    category: 'Captar pacientes',
    datePublished: '2026-06-05',
    dateModified: '2026-06-05',
    readingMinutes: 7,
    excerpt:
      'El boca a boca es valioso, pero impredecible. Te muestro cómo construir un sistema para que lleguen pacientes de forma constante, sin depender de la suerte.',
    blocks: [
      {
        t: 'p',
        text: 'Muchos psicólogos excelentes tienen la agenda a medias, no por falta de talento, sino porque dependen solo del boca a boca, que es valioso pero impredecible. La buena noticia: conseguir pacientes se puede volver **un sistema**, no una lotería. Aquí van las estrategias que de verdad funcionan.',
      },
      { t: 'h2', text: '1. Aparece donde la gente busca: Google' },
      {
        t: 'p',
        text: 'Cuando alguien decide buscar ayuda, escribe en Google "psicólogo + su problema" o "psicólogo + su ciudad". Si no estás ahí, no existes para esa persona. Necesitas dos cosas: una **ficha de Google Business** y una **página web** que pueda posicionarse.',
      },
      { t: 'h2', text: '2. Ten una web que transmita confianza' },
      {
        t: 'p',
        text: 'Elegir psicólogo es una decisión íntima. Antes de escribirte, la persona quiere ver tu cara, tu enfoque y sentir que es un espacio serio. Un perfil de Instagram no basta para eso; una web propia sí. Es la diferencia entre "lo pensaré" y "le escribo".',
      },
      { t: 'h2', text: '3. Usa las redes para acercar, no para vender' },
      {
        t: 'ul',
        items: [
          'Comparte contenido que ayude (no solo promociones).',
          'Muestra tu forma de trabajar y tu personalidad.',
          'Pon siempre el enlace a tu web en la bio, para no perder a quien quiere dar el paso.',
        ],
      },
      { t: 'h2', text: '4. Facilita al máximo el primer contacto' },
      {
        t: 'p',
        text: 'Cada paso extra pierde personas. Un botón directo de WhatsApp, un agendamiento simple y una respuesta rápida convierten muchísimo más que un formulario largo o un correo que tardas días en responder.',
      },
      { t: 'h2', text: '5. Pide reseñas' },
      {
        t: 'p',
        text: 'Las opiniones en Google son una de las cosas que más influye en quién te elige. Pídeselas con naturalidad a pacientes con los que tengas confianza: suman muchísimo a tu visibilidad y a tu credibilidad.',
      },
      {
        t: 'quote',
        text: 'No necesitas estar en todos lados. Necesitas estar bien en los pocos lugares donde tu próximo paciente te está buscando.',
      },
      {
        t: 'p',
        text: 'Como psicólogo que diseña webs para psicólogos, entiendo este recorrido desde adentro. Si quieres una web que trabaje para llenar tu agenda, conversémoslo en una reunión sin compromiso.',
      },
    ],
  },
  {
    slug: 'como-aparecer-en-google-siendo-psicologo',
    title: 'Cómo aparecer en Google cuando buscan un psicólogo',
    description:
      '¿Quieres que tus pacientes te encuentren en Google? Te explico, en simple, qué necesitas para aparecer en las búsquedas de "psicólogo": ficha de Google, web y SEO.',
    category: 'SEO',
    datePublished: '2026-06-05',
    dateModified: '2026-06-05',
    readingMinutes: 6,
    excerpt:
      'Aparecer en Google no es magia ni suerte. Te explico, sin tecnicismos, los pasos para que te encuentren cuando alguien busca un psicólogo.',
    blocks: [
      {
        t: 'p',
        text: 'Si cuando buscas tu nombre o "psicólogo + tu ciudad" no apareces, no estás solo: le pasa a la mayoría de los profesionales. La buena noticia es que aparecer en Google sigue una lógica clara, y aquí te la explico sin tecnicismos.',
      },
      { t: 'h2', text: '1. Crea tu ficha de Google Business' },
      {
        t: 'p',
        text: 'Es gratis y es lo primero. Es esa tarjeta que aparece a la derecha con tu nombre, foto, teléfono y reseñas. Si atiendes online, puedes crearla como negocio de área de servicio. Sin ficha, es muy difícil salir en las búsquedas locales.',
      },
      { t: 'h2', text: '2. Ten una página web propia' },
      {
        t: 'p',
        text: 'Google necesita "algo tuyo" que mostrar y posicionar. Tu perfil de Instagram casi nunca aparece en una búsqueda de "psicólogo ansiedad"; una web bien hecha sí puede. Es la pieza que te permite competir por esas búsquedas.',
      },
      { t: 'h2', text: '3. Optimiza lo básico (SEO)' },
      {
        t: 'ul',
        items: [
          '**Títulos y descripciones claros** en cada página, con las palabras que usan tus pacientes.',
          '**Contenido útil:** un blog que responda las dudas frecuentes te hace aparecer en más búsquedas.',
          '**Datos estructurados** que le digan a Google quién eres y qué haces.',
          '**Velocidad y versión móvil:** Google favorece los sitios rápidos y que se ven bien en el celular.',
        ],
      },
      { t: 'h2', text: '4. Consigue reseñas y enlaces' },
      {
        t: 'p',
        text: 'Las reseñas en Google y los enlaces desde otros sitios (directorios, redes, colaboraciones) le dicen a Google que eres confiable. Mientras más señales, más arriba apareces.',
      },
      {
        t: 'quote',
        text: 'Aparecer en Google no es cuestión de suerte: es la suma de una ficha, una web y señales de confianza, trabajadas con constancia.',
      },
      {
        t: 'p',
        text: 'Soy Luis Reyes Castro, psicólogo y diseñador web. Cada web que hago incluye el SEO básico para que Google pueda encontrarte. Si quieres aparecer cuando buscan un psicólogo como tú, agendemos una reunión.',
      },
    ],
  },
  {
    slug: 'errores-comunes-en-la-web-de-un-psicologo',
    title: '5 errores en la página web de un psicólogo (y cómo evitarlos)',
    description:
      'Los errores más comunes en las webs de psicólogos que hacen perder pacientes: contacto escondido, textos fríos, lentitud y más. Aprende a evitarlos.',
    category: 'Diseño web',
    datePublished: '2026-06-05',
    dateModified: '2026-06-05',
    readingMinutes: 6,
    excerpt:
      'Una web puede estar bonita y aun así espantar pacientes. Estos son los 5 errores que veo más seguido en webs de psicólogos, y cómo solucionarlos.',
    blocks: [
      {
        t: 'p',
        text: 'He revisado muchas webs de psicólogos y casi todas repiten los mismos errores. Lo peor es que no son errores "feos" a primera vista: son fallas que, en silencio, hacen que la persona se vaya sin escribir. Estos son los 5 más comunes.',
      },
      { t: 'h2', text: '1. Esconder el contacto' },
      {
        t: 'p',
        text: 'El error más caro. Si para escribirte hay que buscar el teléfono o llenar un formulario largo, pierdes pacientes. El contacto (WhatsApp o agendamiento) debe estar visible desde el primer segundo y repetido a lo largo de la página.',
      },
      { t: 'h2', text: '2. Hablar de ti y no del paciente' },
      {
        t: 'p',
        text: 'Muchas webs empiezan con "Soy psicólogo titulado en…". Tu formación importa, pero lo primero que la persona necesita ver es que **entiendes lo que le pasa**. Habla de su problema antes que de tu currículum.',
      },
      { t: 'h2', text: '3. Textos fríos o demasiado técnicos' },
      {
        t: 'p',
        text: 'Palabras como "abordaje cognitivo-conductual" no conectan con alguien angustiado. Usa un lenguaje cercano y humano, el mismo que usarías en una primera sesión para que la persona se sienta acogida.',
      },
      { t: 'h2', text: '4. Que cargue lento o se vea mal en el celular' },
      {
        t: 'p',
        text: 'La mayoría de tus visitas llegan desde el teléfono. Si la web tarda en cargar o se ve desordenada en móvil, se van antes de leerte. Velocidad y diseño responsive no son lujo: son cuántos pacientes te escriben.',
      },
      { t: 'h2', text: '5. No aparecer en Google' },
      {
        t: 'p',
        text: 'Una web preciosa que nadie encuentra no sirve. Sin SEO básico (títulos, descripciones, datos estructurados) y sin ficha de Google Business, dependes solo de que compartas el link. El tráfico orgánico es el que trabaja por ti a largo plazo.',
      },
      {
        t: 'quote',
        text: 'Una buena web de psicólogo no es la más bonita: es la que hace que la persona correcta sienta confianza y te escriba.',
      },
      {
        t: 'p',
        text: 'Como psicólogo que diseña webs para psicólogos, cuido justamente estos puntos. Si quieres una revisión honesta de tu web actual o partir de cero, agenda una reunión sin compromiso.',
      },
    ],
  },
  {
    slug: 'plantilla-wix-o-web-a-medida-psicologos',
    title: '¿Plantilla (Wix) o web a medida? Qué le conviene a un psicólogo',
    description:
      '¿Hacer tu web en Wix con una plantilla o encargar una a medida? Comparo costos, tiempo, confianza y posicionamiento en Google para psicólogos en Chile.',
    category: 'Diseño web',
    datePublished: '2026-06-05',
    dateModified: '2026-06-05',
    readingMinutes: 6,
    excerpt:
      'Una plantilla parece más barata, pero tiene un costo oculto. Comparo plantilla vs. web a medida para que decidas con criterio, no por impulso.',
    blocks: [
      {
        t: 'p',
        text: 'Cuando un psicólogo decide tener web, casi siempre aparece la misma duda: "¿lo hago yo en Wix con una plantilla o pago por una a medida?". Las dos opciones son válidas según tu momento. Te ayudo a decidir sin venderte humo.',
      },
      { t: 'h2', text: 'La plantilla (Wix, Squarespace, etc.)' },
      {
        t: 'p',
        text: 'Es la opción de entrada: más barata al principio y la puedes armar tú.',
      },
      {
        t: 'ul',
        items: [
          '✅ Costo inicial bajo y rapidez para publicar algo.',
          '⚠️ Te quita horas que podrías dedicar a tus pacientes.',
          '⚠️ Se ve genérica: muchas consultas terminan con la misma plantilla.',
          '⚠️ Suele cargar más lento y posicionar peor en Google.',
        ],
      },
      { t: 'h2', text: 'La web a medida' },
      {
        t: 'p',
        text: 'Es una inversión mayor, pero pensada para un objetivo: que tu web trabaje para captar pacientes.',
      },
      {
        t: 'ul',
        items: [
          '✅ Diseño y textos hechos para ti, no una plantilla repetida.',
          '✅ Optimizada en velocidad y SEO desde la base.',
          '✅ Pensada desde la lógica del paciente que está decidiendo.',
          '✅ Te ahorra el tiempo de hacerlo y mantenerlo tú.',
        ],
      },
      { t: 'h2', text: '¿Cuál te conviene?' },
      {
        t: 'p',
        text: 'Si recién partes y necesitas presencia mínima ya, una plantilla simple puede servir como primer paso. Pero si quieres que tu web realmente te traiga pacientes y transmita la seriedad de tu trabajo, una web a medida se paga sola con uno o dos pacientes nuevos.',
      },
      {
        t: 'quote',
        text: 'Lo barato a veces sale caro: una web que no convierte es plata y tiempo invertidos en algo que no trae pacientes.',
      },
      {
        t: 'p',
        text: 'Soy Luis Reyes Castro, psicólogo y diseñador web, y trabajo con planes desde $90.000 para distintos momentos. Si tienes dudas sobre qué te conviene, conversémoslo en una reunión sin compromiso.',
      },
    ],
  },
  {
    slug: 'que-poner-en-la-web-de-tu-consulta-psicologica',
    title: 'Qué poner en la página web de tu consulta psicológica',
    description:
      'Las secciones imprescindibles que toda web de psicólogo debería tener: presentación, especialidades, cómo es la terapia, contacto y más. Guía práctica.',
    category: 'Diseño web',
    datePublished: '2026-06-05',
    dateModified: '2026-06-05',
    readingMinutes: 6,
    excerpt:
      '¿No sabes qué secciones incluir en tu web? Te dejo la estructura que mejor funciona para una consulta psicológica, pensada para generar confianza.',
    blocks: [
      {
        t: 'p',
        text: 'Una de las preguntas más frecuentes es: "¿y qué pongo en mi web?". La respuesta no es "todo lo posible", sino lo justo para acompañar la decisión del paciente. Esta es la estructura que mejor convierte para una consulta psicológica.',
      },
      { t: 'h2', text: '1. Una presentación clara (quién eres)' },
      {
        t: 'p',
        text: 'Tu nombre, tu foto real y una frase que diga a quién ayudas y con qué. La foto importa: ver tu cara genera confianza antes de cualquier texto.',
      },
      { t: 'h2', text: '2. En qué puedes ayudar (especialidades)' },
      {
        t: 'p',
        text: 'Lista tus áreas en el lenguaje del paciente: "ansiedad", "duelo", "problemas de pareja"… no en términos técnicos. La persona debe reconocerse en lo que lee.',
      },
      { t: 'h2', text: '3. Cómo es la terapia contigo' },
      {
        t: 'p',
        text: 'Explica cómo son las sesiones, dónde (online o presencial), cuánto duran y qué puede esperar. Reducir la incertidumbre baja el miedo a dar el paso.',
      },
      { t: 'h2', text: '4. Prueba de confianza' },
      {
        t: 'ul',
        items: [
          'Tu formación y número de registro profesional.',
          'Testimonios de pacientes (cuidando la confidencialidad).',
          'Enlaces a tu Instagram o perfiles profesionales.',
        ],
      },
      { t: 'h2', text: '5. Un contacto simple y visible' },
      {
        t: 'p',
        text: 'WhatsApp directo o un agendamiento en un clic, repetido a lo largo de la página. Que escribirte sea lo más fácil del mundo.',
      },
      { t: 'h2', text: '6. Preguntas frecuentes' },
      {
        t: 'p',
        text: 'Responde de antemano las dudas típicas (precio, modalidad, cómo agendar). Resuelve objeciones sin que la persona tenga que preguntar.',
      },
      {
        t: 'quote',
        text: 'Tu web no necesita ser larga: necesita responder, en orden, lo que tu próximo paciente se está preguntando.',
      },
      {
        t: 'p',
        text: 'Si quieres una web con esta estructura, ya pensada y redactada para tu consulta, agenda una reunión conmigo. Soy psicólogo, así que hablamos el mismo idioma.',
      },
    ],
  },
]

export const blogPostsBySlug = Object.fromEntries(
  blogPosts.map((p) => [p.slug, p])
)
