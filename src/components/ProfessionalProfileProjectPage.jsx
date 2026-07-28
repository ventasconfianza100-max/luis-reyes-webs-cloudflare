const links = ['Sobre mí', 'Servicios', 'Agenda', 'Instagram']
const highlights = ['Link en bio', 'Lectura rápida', 'Contacto directo']

export default function ProfessionalProfileProjectPage({ onNavigate }) {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8 md:py-12">
      <section className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-white/60 p-8 md:p-10">
        <a
          href="/proyectos"
          onClick={(event) => {
            event.preventDefault()
            onNavigate('/proyectos')
          }}
          className="inline-flex items-center gap-2 text-pink-500 hover:text-pink-600 font-semibold text-sm mb-8"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"/>
          </svg>
          Volver a proyectos
        </a>

        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-8 items-center">
          <div className="rounded-[2rem] border border-pink-100 bg-gradient-to-b from-pink-50 to-white p-6 shadow-sm">
            <div className="mx-auto w-full max-w-xs rounded-[2rem] bg-white border border-pink-100 p-5 text-center shadow-md">
              <div className="w-20 h-20 rounded-full bg-pink-100 border-4 border-pink-200 mx-auto mb-4" />
              <div className="h-4 w-36 rounded-full bg-slate-200 mx-auto mb-2" />
              <div className="h-3 w-48 rounded-full bg-slate-100 mx-auto mb-5" />
              <div className="space-y-3">
                {links.map((link) => (
                  <div key={link} className="rounded-2xl border border-pink-100 bg-pink-50/70 px-4 py-3 text-sm font-semibold text-pink-500">
                    {link}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <span className="text-xs font-semibold uppercase tracking-wide text-pink-400">Presencia digital</span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-800 mt-3 mb-5 leading-tight">
              Perfil profesional para redes
            </h1>
            <p className="text-slate-500 leading-relaxed mb-6">
              Una página breve y elegante para usar como enlace principal en Instagram, LinkedIn o WhatsApp,
              reuniendo trayectoria, enfoque y contacto en un solo lugar.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              {highlights.map((item) => (
                <span key={item} className="rounded-full bg-pink-50 border border-pink-100 text-pink-500 text-sm font-semibold px-4 py-2">
                  {item}
                </span>
              ))}
            </div>
            <div className="rounded-2xl border border-pink-100 bg-white/70 p-5">
              <h2 className="text-lg font-bold text-slate-800 mb-3">Pensado para llegar desde redes</h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                La persona entra, entiende quién eres en segundos, revisa tus áreas de trabajo y encuentra
                un botón claro para escribirte. Todo se siente como una extensión cuidada de tu marca personal.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            ['Primera impresión', 'Una presentación humana, breve y profesional.'],
            ['Orden visual', 'Bloques simples para que el contenido se lea bien en celular.'],
            ['Un solo enlace', 'Ideal para perfil de Instagram, LinkedIn o firma de correo.'],
          ].map(([title, text]) => (
            <article key={title} className="rounded-2xl border border-pink-100 bg-pink-50/60 p-5">
              <p className="text-pink-500 font-bold mb-2">{title}</p>
              <p className="text-slate-500 text-sm leading-relaxed">{text}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-2xl bg-white/70 border border-white/70 p-6 text-center">
          <p className="text-slate-800 font-bold text-xl mb-2">¿Quieres ordenar tu presencia digital?</p>
          <p className="text-slate-500 text-sm mb-5">Diseñemos una página perfil que funcione perfecto como link en bio.</p>
          <a
            href="https://wa.me/56922012534?text=Hola%20Luis%2C%20me%20interesa%20una%20web%20tipo%20perfil%20profesional%20para%20redes"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all shadow-sm"
          >
            Cotizar este proyecto
          </a>
        </div>
      </section>
    </main>
  )
}
