import Navbar from './Navbar'
import Footer from './Footer'
import Section from './Section'

const WHATSAPP = 'https://wa.me/56922012534?text=' +
  encodeURIComponent('Hola Luis, quiero una página web para mi empresa de servicios. ¿Cómo avanzamos?')

const rubros = [
  'Fumigación y control de plagas',
  'Mantención y servicios técnicos',
  'Salud y centros de atención',
  'Educación y talleres',
  'Limpieza y sanitización',
  'Construcción y oficios',
]

const logra = [
  {
    title: 'Una página por cada servicio',
    text: 'En vez de meter todo en una sola página, cada servicio tiene la suya. Así explicas mejor y apareces en más búsquedas.',
  },
  {
    title: 'SEO local para tu ciudad',
    text: 'Pensada para salir en Google cuando alguien busca tu servicio más el nombre de tu ciudad, que es como buscan los clientes.',
  },
  {
    title: 'Cotizaciones por WhatsApp',
    text: 'Botón directo y formulario claro para que pedir presupuesto sea de un toque. Menos llamadas perdidas, más mensajes reales.',
  },
]

export default function EmpresasServiciosPage({ onNavigate }) {
  const go = (event, href) => {
    event.preventDefault()
    onNavigate(href)
  }

  return (
    <>
      <Navbar onNavigate={onNavigate} />

      <main>
        {/* Encabezado */}
        <Section width="wide" spacing="pt-14 pb-12 md:pt-20 md:pb-16" className="bg-gradient-to-br from-white via-white to-brand-50/70">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-brand-600 mb-4">
              Empresas y servicios · Chile
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.1] text-slate-900">
              Páginas web para <span className="text-brand-600">empresas de servicios</span>
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              He desarrollado sitios multipágina para empresas de servicios que necesitaban aparecer
              en Google y recibir cotizaciones, no solo "estar en internet". Si vendes un servicio y
              dependes del boca a boca, una web bien armada te trae clientes nuevos cada semana.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/agenda"
                onClick={(e) => go(e, '/agenda')}
                className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-7 py-3.5 rounded-2xl text-sm transition-all shadow-[0_8px_24px_-10px_rgba(124,58,237,0.6)] hover:-translate-y-0.5"
              >
                Agenda una reunión
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/80 backdrop-blur border border-slate-200/80 text-slate-700 font-semibold px-7 py-3.5 rounded-2xl text-sm transition-all hover:border-brand-300 hover:text-brand-700 hover:bg-white hover:-translate-y-0.5"
              >
                Escríbeme por WhatsApp
              </a>
            </div>
          </div>
        </Section>

        {/* Rubros */}
        <Section>
          <div className="max-w-2xl mb-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Para rubros que viven de las cotizaciones
            </h2>
            <p className="mt-3 text-slate-500 leading-relaxed">
              Si tu cliente primero pregunta y después contrata, tu web tiene que generar confianza y
              hacer fácil ese primer mensaje. He trabajado con rubros como estos:
            </p>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {rubros.map((r) => (
              <span
                key={r}
                className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 shadow-sm px-4 py-2 text-sm text-slate-700"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                {r}
              </span>
            ))}
          </div>
        </Section>

        {/* Qué logra */}
        <Section className="bg-gradient-to-b from-amber-50/40 via-white to-white">
          <div className="max-w-2xl mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Lo que logra una web bien hecha
            </h2>
            <p className="mt-3 text-slate-500 leading-relaxed">
              No es tener "una página por tener". Es que esa página trabaje para ti todos los días.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {logra.map((item, i) => (
              <div key={item.title} className="flex flex-col rounded-3xl bg-white border border-slate-100 shadow-soft p-6">
                <span className="font-display text-base font-bold text-slate-300 mb-3">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-lg font-bold text-slate-900 mb-1.5">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <a
              href="/proyectos-empresas"
              onClick={(e) => go(e, '/proyectos-empresas')}
              className="inline-flex items-center gap-2 text-brand-600 font-semibold text-sm hover:translate-x-1 transition-transform"
            >
              Ver el tipo de trabajo que hago
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </Section>

        {/* Cierre / CTA */}
        <Section spacing="pt-4 pb-20 md:pb-28">
          <div className="rounded-3xl bg-ink text-white p-10 md:p-14 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
              ¿Quieres que tu empresa reciba más cotizaciones?
            </h2>
            <p className="text-slate-300 max-w-xl mx-auto mb-7 leading-relaxed">
              Conversemos sin compromiso. Te muestro cómo ordenar tus servicios en una web que
              aparezca en Google y convierta visitas en mensajes.
            </p>
            <a
              href="/agenda"
              onClick={(e) => go(e, '/agenda')}
              className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-500 text-white font-semibold px-8 py-4 rounded-2xl text-sm transition-all"
            >
              Agenda una reunión gratis
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </Section>
      </main>

      <Footer onNavigate={onNavigate} />
    </>
  )
}
