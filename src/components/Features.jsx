import Section from './Section'

const features = [
  {
    title: 'Se ve bien en cualquier pantalla',
    desc: 'Celular, tablet o computador: tu web se adapta sola. La mayoría de tus clientes te verá desde el teléfono.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3m-3 3h3m-3 3h3" />
    ),
  },
  {
    title: 'Contacto fácil y directo',
    desc: 'Botón de WhatsApp, formulario o agenda integrados, para que escribirte cueste un solo toque.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
    ),
  },
  {
    title: 'Pensada para Google',
    desc: 'Títulos, velocidad y estructura cuidados desde el inicio para que te encuentren cuando buscan lo que ofreces.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    ),
  },
  {
    title: 'No te dejo solo al entregar',
    desc: 'Después de publicar sigo disponible para ajustes, dudas y los cambios que vayas necesitando.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    ),
  },
]

export default function Features() {
  return (
    <Section>
      <div className="bg-white rounded-3xl shadow-soft border border-slate-100 p-8 md:p-12">
        <div className="max-w-2xl mb-10">
          <span className="inline-block text-sm font-semibold uppercase tracking-wider text-brand-600 mb-3">
            Qué incluye
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Lo importante, ya resuelto
          </h2>
          <p className="mt-3 text-slate-500 leading-relaxed">
            Sin paquetes confusos ni letra chica: esto viene incluido en todo lo que hago.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-slate-100 rounded-2xl overflow-hidden">
          {features.map((f) => (
            <div key={f.title} className="bg-white p-6 flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-500 flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                  {f.icon}
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-slate-800 mb-1">{f.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
