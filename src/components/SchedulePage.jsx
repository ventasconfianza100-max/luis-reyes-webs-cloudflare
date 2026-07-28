const whatsappNumber = '56922012534'

const meetingOptions = [
  {
    label: 'Reunión por Google Meet',
    description: 'Coordinamos día y hora y te envío el enlace de Meet por WhatsApp.',
    accent: 'Recomendado',
    href: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      'Hola Luis, me gustaría agendar una reunión por Google Meet. ¿Qué horarios tienes disponibles?'
    )}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <rect x="2" y="6" width="13" height="12" rx="2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l5-3v10l-5-3" />
      </svg>
    ),
  },
  {
    label: 'Reunión por Zoom',
    description: 'Te comparto el enlace de Zoom una vez confirmemos el horario.',
    href: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      'Hola Luis, me gustaría agendar una reunión por Zoom. ¿Qué horarios tienes disponibles?'
    )}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <rect x="3" y="6" width="13" height="12" rx="3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 10l5-3v10l-5-3" />
      </svg>
    ),
  },
  {
    label: 'Conversemos por WhatsApp',
    description: 'Si prefieres, escríbeme directo y resolvemos tus dudas por chat.',
    href: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      'Hola Luis, me interesa saber más sobre tu servicio de diseño web'
    )}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
]

export default function SchedulePage({ onNavigate }) {
  return (
    <main className="max-w-2xl mx-auto px-4 py-8 md:py-12">
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

        <div className="text-center mb-8">
          <div className="mx-auto mb-5 w-24 h-24 rounded-full border-4 border-violet-300 overflow-hidden shadow-md bg-violet-50">
            <picture>
              <source srcSet="/profile.webp" type="image/webp" />
              <img
                src="/profile.jpg"
                alt="Luis Reyes Castro, psicólogo y diseñador web"
                width="96"
                height="96"
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </picture>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-3">
            Agenda una reunión conmigo
          </h1>
          <p className="text-slate-500 leading-relaxed">
            Elige la forma que te resulte más cómoda. Conversamos sin compromiso para ver cómo
            puedo ayudarte con tu presencia web.
          </p>
        </div>

        <div className="space-y-4">
          {meetingOptions.map((option) => (
            <a
              key={option.label}
              href={option.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-violet-200 bg-white/70 p-5 transition-all hover:border-violet-400 hover:bg-violet-50 hover:shadow-md"
            >
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-500 transition-colors group-hover:bg-violet-500 group-hover:text-white">
                {option.icon}
              </span>
              <span className="flex-1">
                <span className="flex items-center gap-2">
                  <span className="font-semibold text-slate-800">{option.label}</span>
                  {option.accent && (
                    <span className="rounded-full bg-violet-100 px-2 py-0.5 text-xs font-semibold text-violet-500">
                      {option.accent}
                    </span>
                  )}
                </span>
                <span className="mt-1 block text-sm text-slate-500">{option.description}</span>
              </span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 flex-shrink-0 text-violet-300 transition-colors group-hover:text-violet-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-slate-400">
          Te responderé personalmente para coordinar el día y la hora que mejor te acomode.
        </p>
      </section>
    </main>
  )
}
