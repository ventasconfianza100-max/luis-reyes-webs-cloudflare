const cases = {
  munay: {
    eyebrow: 'Caso real · E-commerce',
    title: 'Tienda online para Munay Cueros',
    intro: 'Una plataforma de venta pensada para ordenar el catálogo, facilitar la compra desde el celular y permitir que el negocio administre sus productos sin depender de terceros.',
    challenge: 'El negocio necesitaba presentar una colección amplia de productos de cuero de forma clara, mantener precios y stock actualizados y transformar las visitas en pedidos reales.',
    solution: ['Catálogo organizado por categorías y fichas de producto.', 'Carrito de compras y recorrido adaptable a celulares.', 'Gestión de productos, precios y stock desde un panel propio.', 'Estructura preparada para buscadores y contacto comercial.', 'Publicación y soporte técnico posterior al lanzamiento.'],
    stack: ['React', 'JavaScript', 'E-commerce', 'Diseño adaptable', 'Cloudflare'],
    result: 'Una tienda clara y administrable que concentra el catálogo del negocio y reduce la fricción entre descubrir un producto y realizar una compra o consulta.',
    serviceHref: '/tienda-online-chile',
    serviceLabel: 'Ver servicio de tienda online',
    whatsapp: 'Hola Luis, vi el caso de Munay Cueros y quiero cotizar una tienda online para mi negocio.',
  },
  rdlf: {
    eyebrow: 'Caso real · Sitio institucional',
    title: 'Plataforma web para la Escuela de Fútbol Ronald De La Fuente',
    intro: 'Un sitio para comunicar la propuesta formativa de la escuela, centralizar información para las familias y convertir el interés en inscripciones por WhatsApp.',
    challenge: 'La escuela necesitaba reunir en un solo lugar sus categorías, entrenadores, horarios, sedes, actividades, fotografías y participación en torneos.',
    solution: ['Categorías formativas, metodología, equipo técnico y logros.', 'Horarios y sedes de entrenamiento con acceso a mapas.', 'Galería optimizada y organizada por fechas.', 'Módulo de torneo con fixture, rivales, canchas y fases finales.', 'Inscripción directa por WhatsApp y enlaces a redes sociales.', 'Migración y publicación en Cloudflare Pages.'],
    stack: ['React', 'JavaScript', 'React Router', 'Tailwind CSS', 'Cloudflare Pages'],
    result: 'Una presencia digital completa que facilita a las familias conocer la escuela, revisar información actualizada y comenzar el proceso de inscripción.',
    publicUrl: 'https://www.escuelardlf.cl',
    serviceHref: '/paginas-web-empresas-servicios',
    serviceLabel: 'Ver páginas web para organizaciones',
    whatsapp: 'Hola Luis, vi el proyecto de la Escuela RDLF y quiero cotizar una página web para mi organización.',
  },
}

function Check() {
  return <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand-100 text-xs font-bold text-brand-700">✓</span>
}

export default function RealBusinessCasePage({ kind, onNavigate }) {
  const project = cases[kind]
  const waUrl = `https://wa.me/56922012534?text=${encodeURIComponent(project.whatsapp)}`

  return (
    <main>
      <section className="bg-gradient-to-br from-white via-brand-50/40 to-amber-50/40 py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <a href="/proyectos-empresas" onClick={(e) => { e.preventDefault(); onNavigate('/proyectos-empresas') }} className="text-sm font-semibold text-brand-700">← Volver a proyectos</a>
          <p className="mt-10 text-sm font-semibold uppercase tracking-wider text-brand-600">{project.eyebrow}</p>
          <h1 className="mt-3 max-w-4xl font-display text-4xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-6xl">{project.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">{project.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-brand-600 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-700">Quiero un proyecto similar</a>
            {project.publicUrl && <a href={project.publicUrl} target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-brand-300 hover:text-brand-700">Visitar sitio publicado</a>}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-5xl gap-8 px-6 md:grid-cols-2">
          <article className="rounded-3xl border border-slate-100 bg-white p-7 shadow-soft"><p className="text-sm font-semibold uppercase tracking-wider text-slate-400">El desafío</p><h2 className="mt-3 font-display text-2xl font-bold text-slate-900">Qué necesitaba el cliente</h2><p className="mt-4 leading-relaxed text-slate-600">{project.challenge}</p></article>
          <article className="rounded-3xl border border-brand-100 bg-brand-50/50 p-7"><p className="text-sm font-semibold uppercase tracking-wider text-brand-600">El resultado</p><h2 className="mt-3 font-display text-2xl font-bold text-slate-900">Qué consiguió el proyecto</h2><p className="mt-4 leading-relaxed text-slate-600">{project.result}</p></article>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-display text-3xl font-bold text-slate-900 md:text-4xl">Lo que desarrollé</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">{project.solution.map((item) => <li key={item} className="flex gap-3 rounded-2xl border border-slate-100 bg-white p-5 text-slate-700"><Check /><span>{item}</span></li>)}</ul>
          <div className="mt-10 flex flex-wrap gap-2">{project.stack.map((item) => <span key={item} className="rounded-full border border-brand-200 bg-white px-4 py-2 text-sm font-semibold text-brand-700">{item}</span>)}</div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-3xl font-bold text-slate-900 md:text-4xl">¿Necesitas una solución parecida?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">Conversemos sobre tu negocio, tus clientes y lo que necesitas resolver. Te orientaré sin compromiso y con una propuesta clara.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3"><a href={waUrl} target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-brand-600 px-7 py-3.5 text-sm font-semibold text-white hover:bg-brand-700">Conversar por WhatsApp</a><a href={project.serviceHref} onClick={(e) => { e.preventDefault(); onNavigate(project.serviceHref) }} className="rounded-2xl border border-slate-200 px-7 py-3.5 text-sm font-semibold text-slate-700 hover:border-brand-300 hover:text-brand-700">{project.serviceLabel}</a></div>
        </div>
      </section>
    </main>
  )
}
