import { blogPosts } from '../blogPosts'

function formatDate(iso) {
  try {
    return new Date(iso + 'T00:00:00').toLocaleDateString('es-CL', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  } catch {
    return iso
  }
}

// Convierte **negrita** en <strong> dentro de un texto plano.
function renderInline(text) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="text-slate-800 font-semibold">
          {part.slice(2, -2)}
        </strong>
      )
    }
    return part
  })
}

function Block({ block }) {
  switch (block.t) {
    case 'h2':
      return <h2 className="text-2xl font-extrabold text-slate-800 mt-10 mb-4">{block.text}</h2>
    case 'h3':
      return <h3 className="text-xl font-bold text-slate-800 mt-8 mb-3">{block.text}</h3>
    case 'ul':
      return (
        <ul className="list-disc pl-5 space-y-2 mb-5 text-slate-600 leading-relaxed">
          {block.items.map((it, i) => (
            <li key={i}>{renderInline(it)}</li>
          ))}
        </ul>
      )
    case 'ol':
      return (
        <ol className="list-decimal pl-5 space-y-2 mb-5 text-slate-600 leading-relaxed">
          {block.items.map((it, i) => (
            <li key={i}>{renderInline(it)}</li>
          ))}
        </ol>
      )
    case 'quote':
      return (
        <blockquote className="border-l-4 border-violet-300 bg-violet-50/60 rounded-r-xl px-5 py-4 my-6 text-slate-700 italic">
          {renderInline(block.text)}
        </blockquote>
      )
    case 'p':
    default:
      return <p className="text-slate-600 leading-relaxed mb-5">{renderInline(block.text)}</p>
  }
}

export default function BlogPostPage({ slug, onNavigate }) {
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <main className="max-w-2xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-extrabold text-slate-800 mb-4">Artículo no encontrado</h1>
        <a
          href="/blog"
          onClick={(event) => {
            event.preventDefault()
            onNavigate('/blog')
          }}
          className="text-violet-500 hover:text-violet-600 font-semibold"
        >
          ← Volver al blog
        </a>
      </main>
    )
  }

  return (
    <main className="max-w-2xl mx-auto px-4 py-8 md:py-12">
      <article className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-white/60 p-7 md:p-10">
        <a
          href="/blog"
          onClick={(event) => {
            event.preventDefault()
            onNavigate('/blog')
          }}
          className="inline-flex items-center gap-2 text-violet-500 hover:text-violet-600 font-semibold text-sm mb-8"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Volver al blog
        </a>

        <header className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs font-semibold uppercase tracking-wide text-violet-500">
              {post.category}
            </span>
            <span className="text-slate-300">·</span>
            <span className="text-xs text-slate-400">{formatDate(post.datePublished)}</span>
            <span className="text-slate-300">·</span>
            <span className="text-xs text-slate-400">{post.readingMinutes} min de lectura</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 leading-tight">
            {post.title}
          </h1>
        </header>

        <div className="prose-content">
          {post.blocks.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </div>

        {/* Autor */}
        <div className="mt-10 flex items-center gap-4 rounded-2xl border border-violet-100 bg-violet-50/50 p-5">
          <picture>
            <source srcSet="/profile.webp" type="image/webp" />
            <img
              src="/profile.jpg"
              alt="Luis Reyes Castro, psicólogo y diseñador web"
              width="56"
              height="56"
              loading="lazy"
              className="w-14 h-14 rounded-full object-cover border-2 border-violet-200 shrink-0"
            />
          </picture>
          <div>
            <p className="font-bold text-slate-800 text-sm">Luis Reyes Castro</p>
            <p className="text-slate-500 text-sm">
              Psicólogo titulado UTalca. Diseño webs para psicólogos en Chile.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 rounded-2xl border border-white/70 bg-white/70 p-6 text-center">
          <p className="text-slate-800 font-bold text-xl mb-2">¿Hablamos de tu página web?</p>
          <p className="text-slate-500 text-sm mb-5">
            Una reunión sin compromiso para ver cómo atraer más pacientes desde Google.
          </p>
          <a
            href="/agenda"
            onClick={(event) => {
              event.preventDefault()
              onNavigate('/agenda')
            }}
            className="inline-flex items-center gap-2 bg-violet-500 hover:bg-violet-600 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all shadow-sm"
          >
            Agenda una reunión
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </article>
    </main>
  )
}
