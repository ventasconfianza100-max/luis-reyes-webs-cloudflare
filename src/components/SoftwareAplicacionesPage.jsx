import Navbar from './Navbar'
import Footer from './Footer'
import Section from './Section'

const WHATSAPP = 'https://wa.me/56922012534?text=' +
  encodeURIComponent('Hola Luis, necesito un software o aplicación a medida. ¿Cómo avanzamos?')

const soluciones = [
  {
    title: 'Sistemas de gestión a medida',
    text: 'Programas para ordenar clientes, pedidos, inventario o agenda, hechos a la forma real en que trabaja tu negocio.',
  },
  {
    title: 'Aplicaciones web',
    text: 'Apps que corren en el navegador, desde cualquier computador o celular, con usuarios, permisos y datos en la nube.',
  },
  {
    title: 'Automatizaciones',
    text: 'Tareas repetitivas que dejan de hacerse a mano: reportes, avisos, planillas y procesos que se ejecutan solos.',
  },
  {
    title: 'Integraciones y APIs',
    text: 'Conecto tu software con WhatsApp, pagos, correo, planillas u otros sistemas para que todo hable entre sí.',
  },
  {
    title: 'Paneles y reportes',
    text: 'Tableros claros para ver ventas, stock o indicadores de tu negocio en un solo lugar, siempre al día.',
  },
  {
    title: 'Mantención y mejoras',
    text: 'El software crece contigo: agrego funciones, corrijo detalles y lo adapto a medida que cambia tu operación.',
  },
]

const proceso = [
  {
    step: 'Entiendo tu proceso',
    text: 'Primero conversamos cómo trabajas hoy y qué te hace perder tiempo. El software se diseña a partir de eso, no al revés.',
  },
  {
    step: 'Construyo lo esencial',
    text: 'Empezamos por lo que más impacto tiene y lo ves funcionando pronto, sin esperar meses por un sistema gigante.',
  },
  {
    step: 'Ajustamos y crece',
    text: 'Lo usas de verdad, me dices qué falta y vamos sumando funciones. Queda hecho a tu medida, no a una plantilla.',
  },
]

export default function SoftwareAplicacionesPage({ onNavigate }) {
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
              Software y aplicaciones · Chile
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.1] text-slate-900">
              Creo <span className="text-brand-600">software, programas y aplicaciones</span> a medida
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Además de páginas web, desarrollo programas y aplicaciones hechos a la medida de tu
              negocio: sistemas de gestión, apps web, automatizaciones e integraciones. Nada de
              plantillas genéricas: código propio pensado para resolver el problema concreto que te
              está quitando tiempo.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/agenda"
                onClick={(e) => go(e, '/agenda')}
                className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-7 py-3.5 rounded-2xl text-sm transition-all shadow-[0_8px_24px_-10px_rgba(124,58,237,0.6)] hover:-translate-y-0.5"
              >
                Cuéntame tu idea
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

        {/* Qué desarrollo */}
        <Section>
          <div className="max-w-2xl mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Lo que puedo desarrollar para ti
            </h2>
            <p className="mt-3 text-slate-500 leading-relaxed">
              No todo negocio necesita lo mismo. Armamos solo lo que de verdad te ordena el trabajo y
              te ahorra tiempo, sin funciones que nunca vas a usar.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {soluciones.map((item, i) => (
              <div key={item.title} className="flex flex-col rounded-3xl bg-white border border-slate-100 shadow-soft p-6">
                <span className="font-display text-base font-bold text-slate-300 mb-3">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-lg font-bold text-slate-900 mb-1.5">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Cómo trabajo */}
        <Section className="bg-gradient-to-b from-amber-50/40 via-white to-white">
          <div className="max-w-2xl mb-10">
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-brand-600 mb-3">
              Cómo trabajo
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Software que parte de tu proceso, no de una plantilla
            </h2>
            <p className="mt-3 text-slate-600 leading-relaxed">
              La ventaja de un desarrollo a medida es que se adapta a cómo trabajas tú. Avanzamos por
              partes, lo ves funcionando pronto y crece según lo que realmente necesitas.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {proceso.map((item, i) => (
              <div key={item.step} className="flex flex-col rounded-3xl bg-white border border-slate-100 shadow-soft p-6">
                <span className="font-display text-base font-bold text-slate-300 mb-3">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-lg font-bold text-slate-900 mb-1.5">{item.step}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Cierre / CTA */}
        <Section spacing="pt-4 pb-20 md:pb-28">
          <div className="rounded-3xl bg-ink text-white p-10 md:p-14 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
              ¿Tienes una idea o un proceso que ordenar?
            </h2>
            <p className="text-slate-300 max-w-xl mx-auto mb-7 leading-relaxed">
              Conversemos sin compromiso. Te digo si conviene un software a medida, cómo lo abordaría
              y cuánto costaría, según lo que necesitas resolver.
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
