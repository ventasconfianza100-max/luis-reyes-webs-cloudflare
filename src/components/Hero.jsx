export default function Hero({ onNavigate }) {
  const whatsapp = 'https://wa.me/56922012534?text=' + encodeURIComponent('Hola Luis, vi tu página y quiero cotizar una web para mi negocio.')
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-white to-brand-50/70">
      {/* Imagen a sangre completa en la mitad derecha (desktop) */}
      <div className="hidden md:block absolute inset-y-6 right-6 w-[48%] lg:w-[47%] rounded-[2rem] overflow-hidden border border-white shadow-[0_24px_70px_-28px_rgba(15,23,42,0.45)]">
        <picture>
          <source srcSet="/hero-workspace.webp" type="image/webp" />
          <img
            src="/hero-workspace.jpg"
            alt="Escritorio de madera con una laptop mostrando un sitio web diseñado por Luis Reyes y un cuaderno con bocetos de wireframe — desarrollo web en Talca"
            width="1200"
            height="900"
            loading="eager"
            fetchpriority="high"
            decoding="async"
            className="w-full h-full object-cover"
          />
        </picture>
        {/* Fundido suave solo en el borde izquierdo: el texto se lee sin tapar la imagen */}
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/35 via-transparent to-transparent" />
        <div className="absolute left-5 bottom-5 right-5 rounded-2xl bg-white/90 backdrop-blur-md border border-white/70 p-4 shadow-lg">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">Diseño con intención</p>
          <p className="mt-1 text-sm font-semibold text-slate-900">Una web que explica, convence y facilita el contacto.</p>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-10 pb-12 md:pt-14 md:pb-16">
        <div className="md:w-[48%] md:pr-6">
          <span className="inline-block text-sm font-semibold uppercase tracking-wider text-brand-600 mb-5">
            Desarrollo web · Talca, Chile
          </span>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-slate-900">
            Páginas web para negocios, tiendas y profesionales en Chile
          </h1>

          <p className="mt-7 text-lg text-slate-600 leading-relaxed max-w-xl">
            Diseño sitios rápidos, administrables y preparados para aparecer en Google.
            Trabajo desde Talca con clientes de todo Chile y adapto la estructura a la
            forma en que vendes: por WhatsApp, agenda, cotizaciones o tienda online.
          </p>

          {/* Doble CTA */}
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              data-analytics="whatsapp_click_home"
              className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-7 py-3.5 rounded-2xl text-sm transition-all shadow-[0_8px_24px_-10px_rgba(124,58,237,0.6)] hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
            >
              Cotizar por WhatsApp
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a
              href="/proyectos"
              onClick={(event) => {
                event.preventDefault()
                onNavigate('/proyectos')
              }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur border border-slate-200/80 text-slate-700 font-semibold px-7 py-3.5 rounded-2xl text-sm transition-all hover:border-brand-300 hover:text-brand-700 hover:bg-white hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
            >
              Ver proyectos
            </a>
          </div>

          <p className="mt-3 text-sm text-slate-500">
            Atención directa desde Talca · Diseño adaptable a celular · Sin compromiso
          </p>

          {/* Imagen en móvil: a todo el ancho, debajo del texto */}
          <div className="md:hidden mt-10 -mx-6">
            <picture>
              <source srcSet="/hero-workspace.webp" type="image/webp" />
              <img
                src="/hero-workspace.jpg"
                alt="Escritorio de madera con una laptop mostrando un sitio web diseñado por Luis Reyes y un cuaderno con bocetos de wireframe — desarrollo web en Talca"
                width="1200"
                height="900"
                loading="eager"
                decoding="async"
                className="w-full object-cover"
              />
            </picture>
          </div>

          {/* Tira de credibilidad */}
          <div className="mt-10 md:mt-11 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-brand-200 shadow-sm flex-shrink-0">
              <picture>
                <source srcSet="/profile.webp" type="image/webp" />
                <img
                  src="/profile.jpg"
                  alt="Luis Reyes Castro, desarrollador y diseñador web en Talca"
                  width="48"
                  height="48"
                  loading="eager"
                  fetchpriority="high"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </picture>
            </div>
            <div>
              <p className="text-sm text-slate-800 font-semibold leading-tight">
                Luis Reyes Castro · Desarrollo web para negocios y profesionales
              </p>
              <p className="text-sm text-slate-500 mt-0.5">
                Talca, Región del Maule · Atención directa, sin intermediarios
              </p>
            </div>
          </div>
          <div className="mt-7 flex flex-wrap gap-2 text-xs font-medium text-slate-600">
            {['Web para profesionales', 'Catálogos y tiendas', 'Empresas de servicios'].map((item) => (
              <span key={item} className="rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 shadow-sm">{item}</span>
            ))}
          </div>
          <a href="/diagnostico-web" onClick={(event) => { event.preventDefault(); onNavigate('/diagnostico-web') }} className="inline-flex mt-4 text-sm font-semibold text-brand-700 hover:text-brand-800">¿No sabes qué necesitas? Haz el diagnóstico web →</a>
        </div>
      </div>
    </section>
  )
}
