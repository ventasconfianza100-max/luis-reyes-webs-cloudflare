import Section from './Section'

const stats = [
  {
    title: 'Sitios reales funcionando',
    sub: 'Tiendas, empresas y profesionales, hoy online.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
  },
  {
    title: 'Atención directa',
    sub: 'Hablas conmigo, no con una agencia.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
    ),
  },
  {
    title: 'Posicionamiento en Google',
    sub: 'SEO local trabajado en cada proyecto.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
  },
]

export default function Stats() {
  return (
    <Section spacing="py-6 md:py-8">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map((s) => (
          <div
            key={s.title}
            className="flex items-center gap-4 bg-white rounded-2xl border border-slate-200/70 shadow-sm px-5 py-4"
          >
            <div className="w-11 h-11 rounded-xl bg-brand-50 text-brand-500 flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                {s.icon}
              </svg>
            </div>
            <div>
              <p className="font-semibold text-slate-800 text-sm leading-tight">{s.title}</p>
              <p className="text-slate-500 text-xs mt-0.5 leading-snug">{s.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
