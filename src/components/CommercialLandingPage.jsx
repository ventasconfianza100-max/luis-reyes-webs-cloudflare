const content = {
  psychologist: {
    title: 'Páginas web para psicólogos y consultas en Chile',
    intro: 'Una web clara y humana para presentar tu forma de trabajar, resolver dudas y facilitar que un nuevo paciente te contacte.',
    items: ['Presentación profesional y enfoque terapéutico', 'Servicios, modalidad online o presencial y agendamiento', 'WhatsApp visible, versión móvil y SEO local', 'Información de privacidad y preguntas frecuentes'],
    link: '/blog/que-poner-en-la-web-de-tu-consulta-psicologica',
    linkText: 'Leer qué debería tener una web de consulta psicológica',
    message: 'Hola Luis, vi tu página para psicólogos y quiero cotizar.',
  },
  catalog: {
    title: 'Catálogo online con WhatsApp para tu negocio',
    intro: 'Ordena tus productos en una página fácil de compartir, con fichas, categorías y consultas directas por WhatsApp.',
    items: ['Fichas de producto con fotos, precios y detalles', 'Categorías para que tus clientes encuentren rápido', 'Botón de WhatsApp con el producto prellenado', 'Panel de administración y stock según el alcance del proyecto'],
    link: '/tienda-online-chile',
    linkText: 'Comparar con una tienda online completa',
    message: 'Hola Luis, vi tu página de catálogo con WhatsApp y quiero cotizar.',
  },
}

export default function CommercialLandingPage({ kind, onNavigate }) {
  const data = content[kind]
  const whatsapp = `https://wa.me/56922012534?text=${encodeURIComponent(data.message)}`
  return <main>
    <section className="bg-gradient-to-br from-white via-white to-brand-50/70 px-6 py-20 md:py-28">
      <div className="max-w-5xl mx-auto">
        <p className="text-brand-600 font-semibold uppercase tracking-wider text-sm">Diseño web en Chile</p>
        <h1 className="font-display text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mt-4 max-w-4xl">{data.title}</h1>
        <p className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">{data.intro}</p>
        <div className="mt-9 flex flex-wrap gap-3"><a href={whatsapp} target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-brand-600 px-6 py-3.5 text-white font-semibold">Cotizar por WhatsApp</a><a href="/proyectos" onClick={(e) => { e.preventDefault(); onNavigate('/proyectos') }} className="rounded-2xl border border-slate-200 bg-white px-6 py-3.5 text-slate-700 font-semibold">Ver proyectos</a></div>
      </div>
    </section>
    <section className="px-6 py-16 bg-white"><div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10"><div><h2 className="font-display text-3xl font-bold text-slate-900">Qué puede incluir</h2><ul className="mt-6 space-y-4">{data.items.map((item) => <li key={item} className="flex gap-3 text-slate-600"><span className="text-brand-600">✓</span>{item}</li>)}</ul></div><div className="rounded-3xl bg-slate-50 p-8"><h2 className="font-display text-2xl font-bold text-slate-900">¿Catálogo o tienda?</h2><p className="mt-3 text-slate-600 leading-relaxed">La solución se define según cómo vendes. Un catálogo prioriza mostrar y conversar; una tienda puede sumar carrito, pagos y más automatización si el proyecto lo contempla.</p><a href={data.link} onClick={(e) => { e.preventDefault(); onNavigate(data.link) }} className="inline-block mt-5 text-brand-700 font-semibold">{data.linkText} →</a></div></div></section>
    <section className="px-6 py-16 text-center"><h2 className="font-display text-3xl font-bold text-slate-900">Conversemos sobre tu proyecto</h2><p className="mt-3 text-slate-600">Te explico el alcance y el precio orientativo según lo que realmente necesitas.</p><a href={whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex mt-7 rounded-2xl bg-brand-600 px-7 py-3.5 text-white font-semibold">Quiero cotizar</a></section>
  </main>
}
