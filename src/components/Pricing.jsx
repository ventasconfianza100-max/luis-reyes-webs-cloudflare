import Section from './Section'

const WHATSAPP = '56922012534'

const wa = (plan) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
    `Hola Luis, me interesa el ${plan} para mi página web. ¿Cómo avanzamos?`
  )}`

const plans = [
  {
    name: 'Plan Esencial',
    price: '$90.000',
    pitch: 'Para el negocio o profesional que recién parte y necesita estar online ya.',
    features: [
      'Landing page de una sección, 100% responsive',
      'Botón de WhatsApp y formulario de contacto',
      'SEO básico para aparecer en Google',
      'Publicación y dominio configurados',
    ],
    cta: 'Quiero el Esencial',
    highlight: false,
  },
  {
    name: 'Plan Profesional',
    price: '$190.000',
    pitch: 'El más elegido: pensado para captar clientes de verdad.',
    features: [
      'Sitio de 3-4 secciones a tu medida',
      'Agendamiento o cotización por WhatsApp',
      'SEO local + ficha de Google Business',
      'Textos escritos para convertir visitas en contactos',
      'Blog para posicionar en Google',
    ],
    cta: 'Quiero el Profesional',
    highlight: true,
  },
  {
    name: 'Plan Premium',
    price: '$320.000',
    pitch: 'Para tiendas, empresas y negocios que quieren destacar y escalar.',
    features: [
      'Sitio multi-página completo',
      'Agendamiento + integraciones a medida',
      'Copy persuasivo de toda la web',
      'SEO avanzado y optimización de velocidad',
      '1 mes de soporte y mejoras incluido',
    ],
    cta: 'Quiero el Premium',
    highlight: false,
  },
]

function Check() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )
}

export default function Pricing() {
  return (
    <Section id="planes">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="inline-block text-sm font-semibold uppercase tracking-wider text-brand-600 mb-3">
          Planes
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-3">
          Planes claros, sin sorpresas
        </h2>
        <p className="text-slate-500">
          Elige el que se ajusta a tu momento. Todos incluyen reunión inicial sin costo.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 items-start">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-3xl p-7 flex flex-col transition-all hover:-translate-y-1 ${
              plan.highlight
                ? 'bg-white shadow-lift border-2 border-brand-400 ring-4 ring-brand-100'
                : 'bg-white shadow-soft border border-slate-100'
            }`}
          >
            {plan.highlight && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-500 text-white text-xs font-semibold px-4 py-1 rounded-full shadow-sm">
                ⭐ Más elegido
              </span>
            )}

            <h3 className="text-lg font-bold text-slate-800">{plan.name}</h3>
            <div className="mt-2 mb-1 flex items-baseline gap-1">
              <span className="text-3xl font-extrabold text-brand-600">{plan.price}</span>
              <span className="text-slate-400 text-sm">CLP</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-5">{plan.pitch}</p>

            <ul className="space-y-2.5 mb-7 flex-1">
              {plan.features.map((f) => (
                <li key={f} className="flex gap-2 text-sm text-slate-600 leading-snug">
                  <Check />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <a
              href={wa(plan.name)}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all w-full ${
                plan.highlight
                  ? 'bg-brand-600 text-white hover:bg-brand-700 shadow-soft hover:shadow-lift'
                  : 'bg-brand-50 text-brand-600 hover:bg-brand-100 border border-brand-200'
              }`}
            >
              {plan.cta}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        ))}
      </div>

      {/* Garantía / reversión de riesgo */}
      <div className="mt-8 max-w-3xl mx-auto rounded-2xl bg-brand-50/70 border border-brand-100 p-5 flex items-start gap-3">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6 text-brand-500 flex-shrink-0">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
        <p className="text-sm text-slate-600 leading-relaxed">
          <strong className="text-slate-800">Sin riesgo para ti:</strong> partimos con una reunión
          gratuita y sin compromiso. Incluyo revisiones hasta que tu web quede como la necesitas, y no
          desaparezco el día de la entrega.
        </p>
      </div>
    </Section>
  )
}
