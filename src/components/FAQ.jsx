import { useState } from 'react'
import Section from './Section'

const faqs = [
  {
    q: '¿Cuánto cuesta una página web en Chile?',
    a: 'Trabajo con tres planes claros: Esencial ($90.000), Profesional ($190.000) y Premium ($320.000), según lo que necesites. Una tienda online o un sitio multipágina se cotiza aparte según el alcance. Todos parten con una reunión gratuita, sin sorpresas en el precio.',
  },
  {
    q: '¿Cuánto tiempo tarda en estar lista mi página web?',
    a: 'El tiempo promedio de entrega es 2 semanas desde que confirmamos el proyecto. Trabajo de forma organizada para cumplir los plazos sin apuros de último minuto.',
  },
  {
    q: '¿Qué tipo de páginas web haces?',
    a: 'Sitios para profesionales independientes, tiendas online con carrito y panel de administración, y webs multipágina para empresas de servicios con SEO local. He desarrollado proyectos reales en estos tres rubros; en una reunión puedo mostrarte ejemplos según lo que necesites.',
  },
  {
    q: '¿Puedo tener una página web si estoy en Talca o en regiones?',
    a: 'Absolutamente. Trabajo con clientes de todo Chile de forma 100% online. La reunión de coordinación es por videollamada o WhatsApp, así que la distancia no es problema.',
  },
  {
    q: '¿Qué pasa después de que me entregan la página web?',
    a: 'Ofrezco soporte post-entrega. Si algo no funciona, si quieres cambiar un texto o tienes dudas, puedes escribirme. No desaparezco el día de la entrega.',
  },
  {
    q: '¿Mi página web va a aparecer en Google?',
    a: 'Sí. Todas las páginas que diseño incluyen optimización SEO básica: título, descripción, palabras clave y configuración técnica para que Google pueda indexarla. El posicionamiento orgánico toma tiempo, pero partimos con todo bien configurado.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <Section id="faq" width="narrow">
      <div className="bg-white rounded-3xl shadow-soft border border-slate-100 p-8 md:p-10">
        <div className="text-center mb-8">
          <span className="inline-block text-sm font-semibold uppercase tracking-wider text-brand-600 mb-3">
            Preguntas frecuentes
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            ¿Tienes dudas?
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-slate-100 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-5 py-4 flex items-center justify-between gap-3 hover:bg-violet-50/50 transition-colors"
              >
                <span className="font-semibold text-slate-700 text-sm leading-snug">{faq.q}</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={`w-4 h-4 text-violet-400 flex-shrink-0 transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
                </svg>
              </button>
              {open === i && (
                <div className="px-5 pb-5">
                  <p className="text-slate-500 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA al final */}
        <div className="mt-8 text-center">
          <p className="text-slate-500 text-sm mb-3">¿Tienes otra pregunta?</p>
          <a
            href="https://wa.me/56922012534?text=Hola%20Luis%2C%20tengo%20una%20consulta%20sobre%20tu%20servicio%20de%20dise%C3%B1o%20web"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-violet-500 hover:bg-violet-600 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all shadow-sm"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Escríbeme por WhatsApp
          </a>
        </div>
      </div>
    </Section>
  )
}
