import { blogPosts } from '../blogPosts'

function formatDate(iso) {
  try {
    return new Date(iso + 'T00:00:00').toLocaleDateString('es-CL', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  } catch {
    return iso
  }
}

export default function BlogPage({ onNavigate }) {
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
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Volver al inicio
        </a>

        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-semibold uppercase tracking-wide text-violet-400">Blog</span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-800 mt-3 mb-4">
            Ideas para psicólogos que quieren más pacientes
          </h1>
          <p className="text-slate-500 leading-relaxed">
            Artículos prácticos sobre presencia online, confianza y diseño web para psicólogos y
            terapeutas en Chile. Escrito por un psicólogo que entiende el rubro desde adentro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {blogPosts.map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              onClick={(event) => {
                event.preventDefault()
                onNavigate(`/blog/${post.slug}`)
              }}
              className="group rounded-3xl border border-violet-100 bg-violet-50/60 p-6 flex flex-col transition-all hover:-translate-y-1 hover:shadow-lg hover:border-violet-300"
            >
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="text-xs font-semibold uppercase tracking-wide text-violet-500">
                  {post.category}
                </span>
                <span className="text-xs text-slate-400">{post.readingMinutes} min de lectura</span>
              </div>

              <h2 className="text-xl font-extrabold text-slate-800 leading-tight mb-3">
                {post.title}
              </h2>

              <p className="text-slate-500 text-sm leading-relaxed flex-1">{post.excerpt}</p>

              <div className="flex items-center justify-between mt-6">
                <span className="text-xs text-slate-400">{formatDate(post.datePublished)}</span>
                <span className="inline-flex items-center gap-1 text-violet-500 font-bold text-sm transition-transform group-hover:translate-x-1">
                  Leer
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-white/70 bg-white/70 p-6 text-center">
          <p className="text-slate-800 font-bold text-xl mb-2">¿Quieres una web que haga todo esto por ti?</p>
          <p className="text-slate-500 text-sm mb-5">
            Diseño páginas para psicólogos pensadas desde la lógica del paciente que está decidiendo.
          </p>
          <a
            href="/agenda"
            onClick={(event) => {
              event.preventDefault()
              onNavigate('/agenda')
            }}
            className="inline-flex items-center gap-2 bg-violet-500 hover:bg-violet-600 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all shadow-sm"
          >
            Agenda una reunión
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  )
}
