// ⚠️ IMPORTANTE: reemplaza estos testimonios por los REALES de tus clientes
// antes de publicar. Usa nombre real (o iniciales), profesión y ciudad.
// Si aún no tienes testimonios, puedes ocultar esta sección comentándola en App.jsx.
const testimonials = [
  {
    quote:
      'Tenía una página antigua que no me llegaba nadie. Luis la rehízo entendiendo cómo busca un paciente, y ahora recibo consultas todas las semanas.',
    name: 'Nombre Apellido',
    role: 'Psicóloga clínica · Talca',
  },
  {
    quote:
      'Lo mejor fue que habla mi idioma: es psicólogo, así que entendió de inmediato qué quería transmitir. La web quedó profesional y clara.',
    name: 'Nombre Apellido',
    role: 'Psicólogo · Santiago',
  },
  {
    quote:
      'Rápido, ordenado y siempre disponible para dudas. En dos semanas tenía mi sitio listo y apareciendo en Google.',
    name: 'Nombre Apellido',
    role: 'Terapeuta · Concepción',
  },
]

function Stars() {
  return (
    <div className="flex gap-0.5 mb-3" aria-label="5 de 5 estrellas">
      {[...Array(5)].map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-amber-400">
          <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
          Psicólogos que ya confiaron
        </h2>
        <p className="text-slate-400 text-sm">Esto es lo que dicen quienes ya tienen su web conmigo</p>
      </div>

      <div className="grid grid-cols-1 gap-5">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-md border border-white/60 p-7"
          >
            <Stars />
            <p className="text-slate-600 text-sm leading-relaxed mb-4">“{t.quote}”</p>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 font-bold text-sm">
                {t.name.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-slate-700 text-sm leading-tight">{t.name}</p>
                <p className="text-slate-400 text-xs">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
