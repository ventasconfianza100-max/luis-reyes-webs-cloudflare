export default function NotFoundPage({ onNavigate }) {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-6 py-20">
      <section className="max-w-xl text-center">
        <p className="text-brand-600 font-semibold">Error 404</p>
        <h1 className="font-display text-4xl md:text-5xl font-extrabold text-slate-900 mt-3">Esta página no existe</h1>
        <p className="mt-5 text-slate-600 leading-relaxed">La dirección puede estar escrita de forma incorrecta o el contenido fue movido.</p>
        <a href="/" onClick={(e) => { e.preventDefault(); onNavigate('/') }} className="inline-flex mt-8 rounded-2xl bg-brand-600 px-6 py-3.5 text-white font-semibold">Volver al inicio</a>
      </section>
    </main>
  )
}
