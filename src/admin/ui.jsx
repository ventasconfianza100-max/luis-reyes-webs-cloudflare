// Primitivos del panel: inputs, botones y contenedores con el mismo lenguaje
// visual del sitio (violeta de marca, bordes suaves, tipografía Sora en títulos).

export function Campo({ label, ayuda, children, className = '' }) {
  return (
    <label className={`block ${className}`}>
      <span className="block text-xs font-semibold text-slate-600 mb-1.5">{label}</span>
      {children}
      {ayuda && <span className="block mt-1 text-xs text-slate-400">{ayuda}</span>}
    </label>
  )
}

const baseInput =
  'w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-800 placeholder:text-slate-300 focus:border-brand-400 focus:ring-2 focus:ring-brand-100 focus:outline-none transition'

export function Input(props) {
  return <input {...props} className={`${baseInput} ${props.className || ''}`} />
}

export function Textarea(props) {
  return <textarea {...props} className={`${baseInput} leading-relaxed ${props.className || ''}`} />
}

export function Select({ children, ...props }) {
  return (
    <select {...props} className={`${baseInput} pr-8 ${props.className || ''}`}>
      {children}
    </select>
  )
}

const variantes = {
  primario: 'bg-brand-600 text-white hover:bg-brand-700 shadow-soft',
  secundario: 'bg-white text-slate-700 border border-slate-200 hover:border-brand-300 hover:text-brand-700',
  suave: 'bg-brand-50 text-brand-700 border border-brand-100 hover:bg-brand-100',
  peligro: 'bg-white text-rose-600 border border-rose-200 hover:bg-rose-50',
}

export function Boton({ variante = 'primario', className = '', children, ...props }) {
  return (
    <button
      type="button"
      {...props}
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition disabled:opacity-40 disabled:cursor-not-allowed ${variantes[variante]} ${className}`}
    >
      {children}
    </button>
  )
}

export function Tarjeta({ children, className = '' }) {
  return (
    <div className={`rounded-2xl bg-white border border-slate-200/80 shadow-soft ${className}`}>
      {children}
    </div>
  )
}

export function Etiqueta({ color = 'bg-slate-100 text-slate-600', children }) {
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${color}`}>
      {children}
    </span>
  )
}

export function Vacio({ titulo, texto, accion }) {
  return (
    <div className="rounded-2xl border border-dashed border-slate-300 bg-white/60 px-6 py-12 text-center">
      <p className="font-display text-base font-bold text-slate-700">{titulo}</p>
      <p className="mt-1.5 text-sm text-slate-500 max-w-sm mx-auto leading-relaxed">{texto}</p>
      {accion && <div className="mt-5 flex justify-center">{accion}</div>}
    </div>
  )
}

export function Dato({ label, valor, destacado = false }) {
  return (
    <div className="rounded-xl bg-slate-50 border border-slate-100 px-4 py-3">
      <p className="text-xs font-semibold text-slate-500">{label}</p>
      <p className={`mt-0.5 font-display font-bold ${destacado ? 'text-xl text-brand-700' : 'text-base text-slate-800'}`}>
        {valor}
      </p>
    </div>
  )
}

export function Encabezado({ titulo, texto, accion }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div>
        <h1 className="font-display text-2xl font-bold text-slate-900">{titulo}</h1>
        <p className="mt-1 max-w-2xl text-sm text-slate-500">{texto}</p>
      </div>
      {accion}
    </div>
  )
}
