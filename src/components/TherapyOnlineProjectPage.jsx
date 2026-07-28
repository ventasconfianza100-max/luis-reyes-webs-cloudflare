const steps = [
  ['01', 'Explicar modalidad', 'Cómo funciona la atención online, qué necesita el paciente y qué puede esperar.'],
  ['02', 'Resolver dudas', 'Privacidad, duración, pago, horarios y preparación para la primera sesión.'],
  ['03', 'Agendar simple', 'Un camino directo a WhatsApp para consultar sin fricción desde el celular.'],
]

const sections = ['Modalidad online', 'Proceso de agenda', 'Preguntas frecuentes', 'Confianza y privacidad']

export default function TherapyOnlineProjectPage({ onNavigate }) {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8 md:py-12">
      <section className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-white/60 p-8 md:p-10">
        <a
          href="/proyectos"
          onClick={(event) => {
            event.preventDefault()
            onNavigate('/proyectos')
          }}
          className="inline-flex items-center gap-2 text-sky-500 hover:text-sky-600 font-semibold text-sm mb-8"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"/>
          </svg>
          Volver a proyectos
        </a>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-7 items-start">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wide text-sky-400">Captación de pacientes</span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-800 mt-3 mb-5 leading-tight">
              Consulta terapéutica online
            </h1>
            <p className="text-slate-500 leading-relaxed mb-6">
              Una página diseñada para que la atención online se entienda rápido, se sienta profesional
              y convierta visitas desde cualquier ciudad en primeras consultas.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {sections.map((section) => (
                <div key={section} className="rounded-2xl bg-sky-50 border border-sky-100 px-4 py-3 text-sky-600 text-sm font-semibold">
                  {section}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-slate-900 p-5 shadow-lg text-white overflow-hidden relative">
            <div className="absolute -right-12 -top-12 w-36 h-36 rounded-full bg-sky-400/20" />
            <div className="relative rounded-2xl bg-white/10 border border-white/10 p-5">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-xs text-sky-200 font-semibold">Agenda online</p>
                  <p className="text-2xl font-bold">Primera sesión</p>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-sky-400 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3.75 8.25h16.5M5.25 5.25h13.5A1.5 1.5 0 0120.25 6.75v12A1.5 1.5 0 0118.75 20.25H5.25A1.5 1.5 0 013.75 18.75v-12A1.5 1.5 0 015.25 5.25z"/>
                  </svg>
                </div>
              </div>
              <div className="space-y-3">
                {['Videollamada', '50 minutos', 'Consulta por WhatsApp'].map((item) => (
                  <div key={item} className="rounded-xl bg-white/10 px-4 py-3 text-sm text-slate-100">{item}</div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-7 grid grid-cols-1 md:grid-cols-3 gap-5">
          {steps.map(([number, title, text]) => (
            <article key={title} className="rounded-2xl border border-sky-100 bg-sky-50/70 p-5">
              <p className="text-sky-400 font-extrabold text-sm mb-4">{number}</p>
              <h2 className="text-slate-800 font-bold mb-2">{title}</h2>
              <p className="text-slate-500 text-sm leading-relaxed">{text}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-2xl bg-white/70 border border-white/70 p-6 text-center">
          <p className="text-slate-800 font-bold text-xl mb-2">¿Quieres captar pacientes online?</p>
          <p className="text-slate-500 text-sm mb-5">Armemos una web clara para explicar tu modalidad, horarios y forma de acompañar.</p>
          <a
            href="https://wa.me/56922012534?text=Hola%20Luis%2C%20me%20interesa%20una%20web%20para%20consulta%20terap%C3%A9utica%20online"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all shadow-sm"
          >
            Cotizar este proyecto
          </a>
        </div>
      </section>
    </main>
  )
}
