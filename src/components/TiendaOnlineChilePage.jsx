import Navbar from './Navbar'
import Footer from './Footer'
import Section from './Section'

const WHATSAPP = 'https://wa.me/56922012534?text=' +
  encodeURIComponent('Hola Luis, quiero una tienda online para mi negocio. ¿Cómo avanzamos?')

const incluye = [
  {
    title: 'Catálogo por categorías',
    text: 'Tus productos ordenados y fáciles de recorrer, con búsqueda para que encuentren rápido lo que quieren.',
  },
  {
    title: 'Tallas, marcas y variantes',
    text: 'Maneja tallas, colores o modelos sin enredos, ideal para ropa, calzado o productos con opciones.',
  },
  {
    title: 'Control de stock y precios',
    text: 'Muestra lo que hay disponible y mantén los precios al día sin tener que pedírmelo cada vez.',
  },
  {
    title: 'Carrito o consulta por WhatsApp',
    text: 'Vende con carrito o, si prefieres cerrar por chat, deja que te escriban directo con el producto listo.',
  },
  {
    title: 'Panel de administración propio',
    text: 'Tú agregas, editas y sacas productos cuando quieras. Sin depender de nadie y sin mensualidades de plataforma.',
  },
  {
    title: 'Envíos a todo Chile',
    text: 'Pensada para vender en tu ciudad y despachar a regiones, con la información de envío clara para el cliente.',
  },
]

export default function TiendaOnlineChilePage({ onNavigate }) {
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
              E-commerce · Chile
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.1] text-slate-900">
              Tu <span className="text-brand-600">tienda online</span>, ordenada y a tu medida
            </h1>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              He construido tiendas y catálogos reales con su propio panel de administración: el dueño
              agrega productos, cambia precios y maneja el stock cuando quiere, sin pagar mensualidades
              de plataforma. Si ya pasas el día respondiendo precios por mensaje, una tienda te ordena
              las ventas.
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

        {/* Qué puede tener */}
        <Section>
          <div className="max-w-2xl mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Lo que puede tener tu tienda
            </h2>
            <p className="mt-3 text-slate-500 leading-relaxed">
              No todas las tiendas necesitan lo mismo. Armamos solo lo que tu negocio realmente usa,
              para que sea simple de manejar y fácil de comprar.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {incluye.map((item, i) => (
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

        {/* Diferenciador: panel propio */}
        <Section className="bg-gradient-to-b from-amber-50/40 via-white to-white">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block text-sm font-semibold uppercase tracking-wider text-brand-600 mb-3">
                Tú al mando
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">
                Una tienda que controlas tú, no la plataforma
              </h2>
              <p className="text-slate-600 leading-relaxed">
                La diferencia de una tienda a medida es que es <strong>tuya de verdad</strong>: el
                catálogo, los precios y el stock los manejas desde un panel propio, sin pagar una
                mensualidad por cada venta ni quedar atado a las reglas de un servicio externo. Es la
                misma forma en que he trabajado tiendas reales con envíos a todo Chile.
              </p>
              <a
                href="/proyectos-empresas"
                onClick={(e) => go(e, '/proyectos-empresas')}
                className="mt-6 inline-flex items-center gap-2 text-brand-600 font-semibold text-sm hover:translate-x-1 transition-transform"
              >
                Ver el tipo de trabajo que hago
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
            <div className="rounded-3xl bg-white border border-slate-100 shadow-soft p-6">
              {/* Mini representación de un panel */}
              <div className="flex items-center gap-1.5 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                <span className="ml-2 text-xs text-slate-400 font-semibold">Panel · Productos</span>
              </div>
              <div className="space-y-2.5">
                {['Polera algodón · $12.900 · 14 en stock', 'Chaqueta cuero · $59.900 · 3 en stock', 'Gorro lana · $8.900 · agotado'].map((row) => (
                  <div key={row} className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/60 px-4 py-3">
                    <span className="text-sm text-slate-600">{row}</span>
                    <span className="text-xs font-semibold text-brand-600">Editar</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 inline-flex items-center gap-2 rounded-xl bg-brand-600 text-white text-sm font-semibold px-4 py-2.5">
                + Agregar producto
              </div>
            </div>
          </div>
        </Section>

        {/* Cierre / CTA */}
        <Section spacing="pt-4 pb-20 md:pb-28">
          <div className="rounded-3xl bg-ink text-white p-10 md:p-14 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
              ¿Vendes productos y quieres ordenarlo?
            </h2>
            <p className="text-slate-300 max-w-xl mx-auto mb-7 leading-relaxed">
              Conversemos sin compromiso. Te muestro qué tipo de tienda le conviene a tu negocio y
              cuánto costaría, según lo que vendes.
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
