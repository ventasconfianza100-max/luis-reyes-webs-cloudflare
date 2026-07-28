import Section from './Section'

const services = [
  {
    num: '01',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    ),
    accent: 'bg-violet-50 text-violet-500',
    title: 'Profesionales independientes',
    lead: 'Para quienes venden confianza antes que productos.',
    description:
      'Sitios para psicólogos, terapeutas, consultores y profesionales que necesitan explicar bien lo que hacen, mostrar experiencia y facilitar el contacto.',
    detail: 'agenda, WhatsApp, servicios, sobre mí y confianza inicial.',
    cta: 'Ver ejemplo profesional',
    ctaHref: '/paginas-web-para-psicologos',
  },
  {
    num: '02',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
    ),
    accent: 'bg-amber-50 text-amber-600',
    title: 'Tiendas y catálogos',
    lead: 'Para negocios que necesitan ordenar sus productos.',
    description:
      'Catálogos o tiendas online con categorías, búsqueda, precios, stock, carrito o consulta directa por WhatsApp.',
    detail: 'productos, tallas, marcas, envíos o muchas categorías.',
    cta: 'Ver ejemplo de tienda',
    ctaHref: '/catalogo-online-con-whatsapp',
  },
  {
    num: '03',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
    ),
    accent: 'bg-emerald-50 text-emerald-600',
    title: 'Empresas y servicios',
    lead: 'Para negocios que quieren recibir más cotizaciones.',
    description:
      'Webs multipágina pensadas para explicar servicios, aparecer mejor en Google y convertir visitas en mensajes reales.',
    detail: 'fumigación, mantención, salud, educación, limpieza, servicios técnicos o atención local.',
    cta: 'Ver ejemplo de empresa',
    ctaHref: '/proyectos-empresas',
  },
]

const microNotes = [
  'Pensado para tu forma de vender',
  'Estructura clara antes de diseñar',
  'Contacto fácil desde el celular',
]

export default function Services({ onNavigate }) {
  return (
    <Section className="bg-gradient-to-b from-amber-50/40 via-white to-white">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <span className="inline-block text-sm font-semibold uppercase tracking-wider text-brand-600 mb-3">
          Servicios
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
          El tipo de web depende de lo que vendes
        </h2>
        <p className="mt-4 text-slate-500 leading-relaxed">
          No es lo mismo una tienda con productos, una consulta profesional o una empresa que necesita
          cotizaciones. Por eso adapto la estructura, los textos y el diseño según el negocio.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((s) => (
          <div
            key={s.num}
            className="flex flex-col h-full rounded-3xl bg-white border border-slate-100 shadow-soft p-6 transition-all hover:-translate-y-1 hover:shadow-lift"
          >
            {/* Número + ícono discreto */}
            <div className="flex items-center justify-between mb-5">
              <span className="font-display text-base font-bold text-slate-300">{s.num}</span>
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${s.accent}`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                  {s.icon}
                </svg>
              </div>
            </div>

            <h3 className="font-display text-lg font-bold text-slate-900">{s.title}</h3>
            <p className="text-brand-600 text-sm font-semibold mt-1.5">{s.lead}</p>
            <p className="text-slate-500 text-sm leading-relaxed mt-3 flex-1">{s.description}</p>

            {/* Divisor + detalle */}
            <div className="mt-5 pt-4 border-t border-slate-100">
              <p className="text-xs text-slate-400 leading-relaxed">
                <span className="font-semibold text-slate-500">Ideal si necesitas:</span> {s.detail}
              </p>
            </div>

            {/* Botón al pie */}
            <a
              href={s.ctaHref}
              onClick={(event) => {
                event.preventDefault()
                onNavigate(s.ctaHref)
              }}
              className="mt-5 inline-flex items-center gap-2 text-brand-600 font-semibold text-sm transition-transform hover:translate-x-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 w-fit"
            >
              {s.cta}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        ))}
      </div>

      {/* Franja destacada: software y aplicaciones a medida */}
      <div className="mt-6 rounded-3xl border border-slate-100 bg-white shadow-soft p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-5 md:gap-8">
        <div className="w-11 h-11 shrink-0 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
          </svg>
        </div>
        <div className="flex-1">
          <h3 className="font-display text-lg font-bold text-slate-900">
            ¿Necesitas algo más que una web? Software y aplicaciones a medida
          </h3>
          <p className="text-slate-500 text-sm leading-relaxed mt-1.5">
            También creo programas, sistemas de gestión, apps web y automatizaciones hechos a la
            medida de tu negocio. Código propio para resolver el problema concreto que te quita tiempo.
          </p>
        </div>
        <a
          href="/desarrollo-software-aplicaciones"
          onClick={(event) => {
            event.preventDefault()
            onNavigate('/desarrollo-software-aplicaciones')
          }}
          className="shrink-0 inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm px-6 py-3 rounded-2xl transition-all hover:-translate-y-0.5 w-fit"
        >
          Ver desarrollo de software
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </div>

      {/* Micro-notas de cercanía */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-400">
        {microNotes.map((note, i) => (
          <span key={note} className="inline-flex items-center gap-2">
            {i > 0 && <span className="hidden sm:inline w-1 h-1 rounded-full bg-slate-300" />}
            {note}
          </span>
        ))}
      </div>
    </Section>
  )
}
