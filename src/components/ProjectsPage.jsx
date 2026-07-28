const projects = [
  {
    href: '/proyectos/sitio-psicologa-clinica',
    title: 'Sitio para psicóloga clínica',
    category: 'Landing profesional',
  },
  {
    href: '/proyectos/consulta-terapeutica-online',
    title: 'Consulta terapéutica online',
    category: 'Captación de pacientes',
  },
  {
    href: '/proyectos/perfil-profesional-redes',
    title: 'Perfil profesional para redes',
    category: 'Presencia digital',
  },
]

export default function ProjectsPage({ onNavigate }) {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8 md:py-12">
      <section className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-white/60 p-8 md:p-10">
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault()
            onNavigate('/')
          }}
          className="inline-flex items-center gap-2 text-violet-500 hover:text-violet-600 font-semibold text-sm mb-8"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"/>
          </svg>
          Volver al inicio
        </a>

        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-semibold uppercase tracking-wide text-violet-400">
            Proyectos
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-800 mt-3 mb-4">
            Ejemplos de páginas web para profesionales
          </h1>
          <p className="text-slate-500 leading-relaxed">
            Ideas de sitios limpios, modernos y enfocados en que tus pacientes entiendan quién eres,
            cómo trabajas y cómo pueden contactarte.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <a
              key={project.title}
              href={project.href}
              onClick={(event) => {
                event.preventDefault()
                onNavigate(project.href)
              }}
              className="group min-h-64 rounded-3xl border border-violet-100 bg-violet-50/60 p-5 flex flex-col justify-between overflow-hidden relative transition-all hover:-translate-y-1 hover:shadow-lg hover:border-violet-300"
            >
              <div className="absolute -right-8 -top-8 w-28 h-28 rounded-full bg-violet-200/40 transition-transform group-hover:scale-125" />
              <div className="relative flex items-start justify-between gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white text-violet-500 flex items-center justify-center shadow-sm">
                  <span className="font-extrabold text-sm">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/80 text-violet-500 flex items-center justify-center transition-transform group-hover:translate-x-1">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
                  </svg>
                </div>
              </div>

              <div className="relative mt-8">
                <p className="text-xs font-semibold uppercase tracking-wide text-violet-500 mb-3">
                  {project.category}
                </p>
                <h2 className="text-2xl font-extrabold text-slate-800 leading-tight">
                  {project.title}
                </h2>
              </div>

              <p className="relative text-violet-500 font-bold text-sm mt-8">
                Ver proyecto
              </p>
            </a>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-white/70 bg-white/70 p-6 text-center">
          <p className="text-slate-800 font-bold text-xl mb-2">
            ¿Quieres una página parecida?
          </p>
          <p className="text-slate-500 text-sm mb-5">
            La adaptamos a tu especialidad, tono profesional y forma de atender.
          </p>
          <a
            href="https://wa.me/56922012534?text=Hola%20Luis%2C%20quiero%20una%20p%C3%A1gina%20web%20parecida%20a%20tus%20proyectos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-violet-500 hover:bg-violet-600 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all shadow-sm"
          >
            Escríbeme por WhatsApp
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
            </svg>
          </a>
        </div>
      </section>
    </main>
  )
}
