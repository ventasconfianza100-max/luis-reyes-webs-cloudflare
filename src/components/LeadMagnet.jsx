import Section from './Section'

const WHATSAPP = '56922012534'

const waLink = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
  'Hola Luis, quiero el checklist gratis: las 7 cosas que la web de un negocio necesita para conseguir clientes.'
)}`

const items = [
  'Qué secciones generan confianza en un cliente nuevo',
  'El error que hace que te escriban por Instagram y no compren ni coticen',
  'Cómo aparecer en Google cuando buscan lo que ofreces en tu ciudad',
]

export default function LeadMagnet() {
  return (
    <Section id="checklist">
      <div className="rounded-3xl bg-brand-600 text-white shadow-lift p-10 md:p-14 text-center">
        <span className="inline-block text-3xl mb-3">🎁</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">Checklist gratis para tu web</h2>
        <p className="text-brand-100 text-sm md:text-base mb-6 max-w-md mx-auto">
          Las 7 cosas que la web de un negocio necesita para convertir visitas en clientes. Te lo
          envío por WhatsApp, sin costo.
        </p>

        <ul className="text-left max-w-md mx-auto space-y-2.5 mb-7">
          {items.map((it) => (
            <li key={it} className="flex gap-2 text-sm text-brand-50 leading-snug">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 flex-shrink-0 mt-0.5 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span>{it}</span>
            </li>
          ))}
        </ul>

        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white text-brand-600 font-semibold px-7 py-3.5 rounded-xl text-sm hover:bg-brand-50 transition-all shadow-md"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Pídeme el checklist gratis
        </a>
      </div>
    </Section>
  )
}
