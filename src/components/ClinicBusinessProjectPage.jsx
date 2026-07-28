const services = ['Especialidades', 'Profesionales', 'Ubicación', 'Contacto']

const blocks = [
  {
    title: 'Servicios por área',
    text: 'La web separa prestaciones o especialidades para que cada visitante encuentre rápido lo que necesita.',
  },
  {
    title: 'Equipo profesional',
    text: 'Perfiles breves para mostrar experiencia, roles y confianza sin llenar la página de texto pesado.',
  },
  {
    title: 'Contacto directo',
    text: 'Botones claros para WhatsApp, llamada, ubicación y solicitud de información.',
  },
]

export default function ClinicBusinessProjectPage({ onNavigate }) {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8 md:py-12">
      <section className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-white/60 p-8 md:p-10">
        <a
          href="/proyectos-empresas"
          onClick={(event) => {
            event.preventDefault()
            onNavigate('/proyectos-empresas')
          }}
          className="inline-flex items-center gap-2 text-emerald-500 hover:text-emerald-600 font-semibold text-sm mb-8"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"/>
          </svg>
          Volver a empresas
        </a>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 items-start">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wide text-emerald-400">
              Web institucional
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-800 mt-3 mb-5 leading-tight">
              Sitio para clínica o centro de atención
            </h1>
            <p className="text-slate-500 leading-relaxed mb-6">
              Una página profesional para presentar servicios, equipo, ubicación y canales de contacto
              de forma clara, confiable y fácil de recorrer.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {services.map((item) => (
                <div key={item} className="rounded-2xl bg-emerald-50 border border-emerald-100 px-4 py-3 text-emerald-600 text-sm font-semibold">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-emerald-100 bg-emerald-50/70 p-5">
            <div className="rounded-2xl bg-white p-5 shadow-sm mb-4">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 border border-emerald-200" />
                <div className="flex-1">
                  <div className="h-4 w-32 rounded-full bg-slate-200 mb-2" />
                  <div className="h-3 w-44 rounded-full bg-slate-100" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="h-20 rounded-2xl bg-emerald-50 border border-emerald-100" />
                <div className="h-20 rounded-2xl bg-emerald-50 border border-emerald-100" />
              </div>
              <div className="h-10 rounded-xl bg-emerald-500" />
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Un diseño ordenado para que la clínica parezca seria desde el primer vistazo y la persona
              pueda elegir rápido cómo contactarse.
            </p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
          {blocks.map((block) => (
            <article key={block.title} className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-5">
              <p className="text-emerald-500 font-bold mb-2">{block.title}</p>
              <p className="text-slate-500 text-sm leading-relaxed">{block.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-2xl bg-white/70 border border-white/70 p-6 text-center">
          <p className="text-slate-800 font-bold text-xl mb-2">¿Quieres una web para tu centro?</p>
          <p className="text-slate-500 text-sm mb-5">
            Podemos diseñarla para ordenar servicios, profesionales y contactos de tu clínica o negocio de salud.
          </p>
          <a
            href="https://wa.me/56922012534?text=Hola%20Luis%2C%20quiero%20una%20web%20para%20una%20cl%C3%ADnica%20o%20centro%20de%20atenci%C3%B3n"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all shadow-sm"
          >
            Cotizar este proyecto
          </a>
        </div>
      </section>
    </main>
  )
}
