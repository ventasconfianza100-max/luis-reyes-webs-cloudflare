import Navbar from './Navbar'
import Footer from './Footer'
import Section from './Section'

const WHATSAPP = 'https://wa.me/56922012534?text=' +
  encodeURIComponent('Hola Luis, quiero una página web para mi negocio en Talca. ¿Cómo avanzamos?')

const paraQuien = [
  {
    title: 'Tiendas y negocios con productos',
    text: 'Catálogo o tienda online para vender en Talca y despachar a todo Chile, con consulta directa por WhatsApp.',
  },
  {
    title: 'Empresas de servicios',
    text: 'Fumigación, mantención, salud, educación, servicios técnicos: webs que explican lo que haces y reciben cotizaciones.',
  },
  {
    title: 'Profesionales independientes',
    text: 'Psicólogos, terapeutas, consultores y oficios que necesitan transmitir confianza y facilitar el contacto.',
  },
]

const incluye = [
  'Diseño que se ve bien en el celular (donde te ven la mayoría)',
  'Optimización para Google: títulos, velocidad y estructura',
  'Botón de WhatsApp y formas de contacto directas',
  'Dominio y publicación configurados',
  'Acompañamiento después de la entrega',
]

export default function DisenoWebTalcaPage({ onNavigate }) {
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
              Diseño web · Talca, Región del Maule
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.1] text-slate-900">
              Diseño y desarrollo web en <span className="text-brand-600">Talca</span>
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Soy Luis Reyes Castro, desarrollador web en Talca. Hago páginas rápidas y bien
              posicionadas para negocios de la zona: tiendas online, empresas de servicios y
              profesionales que quieren que los encuentren en Google y reciban más clientes.
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

        {/* Para quién */}
        <Section>
          <div className="max-w-2xl mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Páginas web para negocios de Talca
            </h2>
            <p className="mt-3 text-slate-500 leading-relaxed">
              Cada negocio necesita un tipo de web distinto. Adapto la estructura y los textos a lo
              que vendes y a cómo te buscan tus clientes en la zona.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {paraQuien.map((p) => (
              <div key={p.title} className="rounded-3xl bg-white border border-slate-100 shadow-soft p-6">
                <h3 className="font-display text-lg font-bold text-slate-900 mb-2">{p.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Qué incluye */}
        <Section className="bg-gradient-to-b from-amber-50/40 via-white to-white">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
                Pensada para aparecer en Google
              </h2>
              <p className="text-slate-600 leading-relaxed">
                No basta con tener una web bonita: tiene que cargar rápido y estar bien armada para
                que Google la entienda y la muestre cuando alguien busca lo que ofreces en Talca.
                Eso viene cuidado desde el primer día, no como un agregado al final.
              </p>
              <a
                href="/proyectos"
                onClick={(e) => go(e, '/proyectos')}
                className="mt-6 inline-flex items-center gap-2 text-brand-600 font-semibold text-sm hover:translate-x-1 transition-transform"
              >
                Ver el tipo de trabajo que hago
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                <a href="/paginas-web-para-psicologos" onClick={(e) => go(e, '/paginas-web-para-psicologos')} className="text-brand-700 font-semibold">Web para psicólogos →</a>
                <a href="/catalogo-online-con-whatsapp" onClick={(e) => go(e, '/catalogo-online-con-whatsapp')} className="text-brand-700 font-semibold">Catálogo con WhatsApp →</a>
              </div>
            </div>
            <ul className="space-y-3">
              {incluye.map((item) => (
                <li key={item} className="flex gap-3 items-start bg-white rounded-2xl border border-slate-100 shadow-sm px-5 py-3.5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-slate-700 text-sm leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* Cierre / CTA */}
        <Section spacing="pt-4 pb-20 md:pb-28">
          <div className="rounded-3xl bg-ink text-white p-10 md:p-14 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
              ¿Tienes un negocio en Talca y aún no tienes web?
            </h2>
            <p className="text-slate-300 max-w-xl mx-auto mb-7 leading-relaxed">
              Conversemos sin compromiso. Te digo qué tipo de página te conviene y cuánto costaría,
              sin tecnicismos ni letra chica.
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
