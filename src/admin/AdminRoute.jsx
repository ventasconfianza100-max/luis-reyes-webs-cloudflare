import { useEffect, useState } from 'react'

// El panel se carga en su propio chunk y solo cuando alguien entra a /admin,
// para no sumar peso al bundle del sitio público (que sí necesita ser rápido).
export default function AdminRoute({ onNavigate }) {
  const [Panel, setPanel] = useState(null)

  useEffect(() => {
    let vigente = true
    import('./AdminPage.jsx').then((mod) => {
      if (vigente) setPanel(() => mod.default)
    })
    return () => {
      vigente = false
    }
  }, [])

  if (!Panel) {
    return (
      <div className="min-h-screen bg-slate-50">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h1 className="font-display text-2xl font-bold text-slate-900">Panel interno</h1>
          <p className="mt-2 text-sm text-slate-500">Cargando el panel…</p>
        </div>
      </div>
    )
  }

  return <Panel onNavigate={onNavigate} />
}
