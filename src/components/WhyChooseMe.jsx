const points = [
  {
    title: 'Entiendo a quien decide',
    text: 'Soy psicólogo titulado UTalca. Eso me ayuda a leer al cliente que está del otro lado y a ordenar tu web para que genere confianza y acción, no solo para que se vea bonita.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    ),
  },
  {
    title: 'Experiencia real, no plantillas',
    text: 'He desarrollado sitios para clientes de rubros distintos: tiendas online con su propio panel, empresas de servicios y profesionales. Experiencia que aplico a tu proyecto.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
    ),
  },
  {
    title: 'No desaparezco al entregar',
    text: 'Te acompaño después del lanzamiento, con soporte y mejoras. La relación no termina el día de la entrega.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    ),
  },
]

export default function WhyChooseMe() {
  return (
    <section className="bg-ink text-white">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-sm font-semibold uppercase tracking-wider text-brand-400 mb-3">
            La diferencia
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight leading-tight">
            ¿Por qué trabajar <span className="text-brand-400">conmigo</span>?
          </h2>
          <p className="mt-5 text-slate-300 text-lg leading-relaxed">
            No es solo diseño bonito. Es una web hecha por alguien que entiende a tu
            cliente y que ya tiene proyectos funcionando de verdad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((p) => (
            <div key={p.title} className="rounded-3xl bg-white/5 border border-white/10 p-7">
              <div className="w-12 h-12 rounded-2xl bg-brand-600/20 flex items-center justify-center mb-5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6 text-brand-300">
                  {p.icon}
                </svg>
              </div>
              <h3 className="font-display text-lg font-bold mb-2">{p.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
