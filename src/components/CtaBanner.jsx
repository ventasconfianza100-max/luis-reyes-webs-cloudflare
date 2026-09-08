import Section from './Section'

// Cierre de página: bloque compacto en horizontal (antes ocupaba media
// pantalla). El objetivo es que el visitante llegue al botón sin scrollear de
// más, no que el banner compita con el contenido.
export default function CtaBanner({
  titulo,
  texto,
  etiqueta = 'Agenda una reunión gratis',
  href = '/agenda',
  onNavigate,
}) {
  const go = (event) => {
    if (!onNavigate) return
    event.preventDefault()
    onNavigate(href)
  }

  return (
    <Section spacing="pt-2 pb-16 md:pb-20">
      <div className="rounded-3xl bg-ink text-white px-6 py-7 md:px-10 md:py-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <h2 className="font-display text-xl md:text-2xl font-bold leading-snug">{titulo}</h2>
          {texto && <p className="mt-1.5 text-sm text-slate-300 leading-relaxed">{texto}</p>}
        </div>
        <a
          href={href}
          onClick={go}
          className="inline-flex flex-shrink-0 items-center justify-center gap-2 bg-brand-600 hover:bg-brand-500 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all"
        >
          {etiqueta}
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </div>
    </Section>
  )
}
