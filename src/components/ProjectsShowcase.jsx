import Section from './Section'

const projects = [
  {
    name: 'Empresa de servicios',
    type: 'Sitio multipágina',
    result:
      'Web de varias páginas para un negocio de servicios que necesitaba aparecer en Google y recibir consultas sin intermediarios.',
    built: ['Páginas por cada servicio', 'SEO local para su ciudad', 'Cotización directa por WhatsApp', 'Sitemap + datos para Google'],
    image: '/portfolio-servicios.webp',
    alt: 'Sitio web real de una empresa de servicios en Talca, desarrollado por Luis Reyes',
    chip: 'bg-rose-50 text-rose-600 border-rose-200',
  },
  {
    name: 'Tienda online',
    type: 'E-commerce a medida',
    result:
      'Tienda completa con su propio panel para que el dueño gestione productos, precios y stock sin depender de nadie ni pagar mensualidades.',
    built: ['Catálogo por categorías', 'Carrito de compras', 'Panel de administración propio', 'Envíos a todo Chile'],
    image: '/portfolio-tienda.webp',
    alt: 'Tienda online real con catálogo y carrito de compras, desarrollada por Luis Reyes',
    chip: 'bg-amber-50 text-amber-600 border-amber-200',
  },
  {
    name: 'Profesional independiente',
    type: 'Sitio de consulta',
    result:
      'Web pensada para transmitir confianza y convertir la visita en contacto, para alguien que vende su servicio de forma personal.',
    built: ['Diseño que genera confianza', 'Agendamiento y contacto directo', 'Textos orientados a convertir', 'Optimizado para celular'],
    image: '/portfolio-profesional.webp',
    alt: 'Sitio web real de un profesional independiente con agendamiento online, desarrollado por Luis Reyes',
    chip: 'bg-brand-50 text-brand-600 border-brand-200',
  },
]

function SiteCapture({ image, alt }) {
  return (
    <div className="rounded-xl bg-white border border-slate-200 overflow-hidden shadow-soft">
      <div className="flex items-center gap-1.5 px-3 py-2 bg-slate-100 border-b border-slate-200">
        <span className="w-2 h-2 rounded-full bg-red-300" />
        <span className="w-2 h-2 rounded-full bg-amber-300" />
        <span className="w-2 h-2 rounded-full bg-green-300" />
      </div>
      <img
        src={image}
        alt={alt}
        width="1360"
        height="900"
        loading="lazy"
        decoding="async"
        className="w-full aspect-[1360/900] object-cover object-top"
      />
    </div>
  )
}

function Check() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5 text-brand-500 flex-shrink-0 mt-0.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )
}

export default function ProjectsShowcase() {
  return (
    <Section>
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="inline-block text-sm font-semibold uppercase tracking-wider text-brand-600 mb-3">
          Proyectos
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-3">
          Lo que he construido
        </h2>
        <p className="text-slate-500">
          Capturas reales de sitios que he desarrollado y que hoy están funcionando.
          Esto es exactamente lo que entregué en cada uno.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div
            key={p.name}
            className="flex flex-col rounded-3xl bg-white border border-slate-100 shadow-soft p-5 transition-all hover:-translate-y-1 hover:shadow-lift"
          >
            <SiteCapture image={p.image} alt={p.alt} />
            <div className="mt-5 flex flex-col flex-1">
              <span className={`inline-block w-fit text-xs font-semibold px-2.5 py-1 rounded-full border ${p.chip} mb-3`}>
                {p.type}
              </span>
              <h3 className="font-display text-lg font-bold text-slate-900">{p.name}</h3>
              <p className="text-slate-500 text-sm mt-1 leading-relaxed">{p.result}</p>

              <div className="mt-4 pt-4 border-t border-slate-100">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2.5">
                  Lo que construí
                </p>
                <ul className="space-y-1.5">
                  {p.built.map((b) => (
                    <li key={b} className="flex gap-2 text-sm text-slate-600 leading-snug">
                      <Check />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tira de cierre: cómo trabajo */}
      <div className="mt-10 rounded-3xl bg-slate-50 border border-slate-100 p-6 md:p-8">
        <div className="grid gap-6 sm:grid-cols-3 text-center">
          <div>
            <p className="font-display text-2xl font-extrabold text-brand-600">A medida</p>
            <p className="text-slate-500 text-sm mt-1">Código propio, sin plantillas genéricas ni mensualidades de plataformas.</p>
          </div>
          <div>
            <p className="font-display text-2xl font-extrabold text-brand-600">Para Google</p>
            <p className="text-slate-500 text-sm mt-1">SEO y velocidad cuidados desde el inicio, no como un agregado al final.</p>
          </div>
          <div>
            <p className="font-display text-2xl font-extrabold text-brand-600">Acompañado</p>
            <p className="text-slate-500 text-sm mt-1">Reuniones, revisiones y soporte después de entregar. No desaparezco.</p>
          </div>
        </div>
      </div>
    </Section>
  )
}
