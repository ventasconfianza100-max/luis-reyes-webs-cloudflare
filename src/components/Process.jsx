import Section from './Section'

const steps = [
  {
    n: '01',
    title: 'Conversamos',
    text: 'Por Meet, Zoom o WhatsApp vemos tu negocio, tus clientes y qué necesitas. Sin costo y sin presión.',
  },
  {
    n: '02',
    title: 'Diseño a tu medida',
    text: 'Armo la estructura, los textos y el diseño pensados desde la lógica de quien decide contratarte.',
  },
  {
    n: '03',
    title: 'Revisamos juntos',
    text: 'Te muestro avances y ajustamos hasta que quede como la necesitas. Tu opinión guía el resultado.',
  },
  {
    n: '04',
    title: 'Entrega y soporte',
    text: 'Publico tu sitio con dominio y SEO listos. Y no desaparezco: te acompaño con dudas y mejoras.',
  },
]

export default function Process() {
  return (
    <Section>
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="inline-block text-sm font-semibold uppercase tracking-wider text-brand-600 mb-3">
          Cómo trabajamos
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-3">
          Simple, claro y sin sorpresas
        </h2>
        <p className="text-slate-500">
          De la primera conversación a tu web publicada, paso a paso y siempre contigo.
        </p>
      </div>

      <div className="relative">
        {/* Línea conectora (desktop) */}
        <div className="hidden md:block absolute top-6 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
          {steps.map((s) => (
            <div key={s.n} className="relative text-center md:px-2">
              <div className="relative z-10 mx-auto w-12 h-12 rounded-full bg-white border border-brand-100 shadow-sm flex items-center justify-center font-display text-lg font-extrabold text-brand-600 mb-4">
                {s.n}
              </div>
              <h3 className="font-display text-lg font-bold text-slate-900 mb-1.5">{s.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed max-w-[15rem] mx-auto">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
