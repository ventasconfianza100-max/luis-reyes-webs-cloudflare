import { useState } from 'react'

const palettes = [
  {
    name: 'Violeta calma',
    accent: '#8b5cf6',
    soft: '#ede9fe',
    border: '#c4b5fd',
  },
  {
    name: 'Verde sereno',
    accent: '#10b981',
    soft: '#d1fae5',
    border: '#6ee7b7',
  },
  {
    name: 'Azul confianza',
    accent: '#38bdf8',
    soft: '#e0f2fe',
    border: '#7dd3fc',
  },
  {
    name: 'Rosa cálido',
    accent: '#f472b6',
    soft: '#fce7f3',
    border: '#f9a8d4',
  },
]

export default function ProjectDetailPage({
  badge,
  title,
  intro,
  tags,
  sections,
  previewText,
  objective,
  flow,
  ctaTitle,
  ctaText,
  ctaHref,
  onNavigate,
}) {
  const [activePalette, setActivePalette] = useState(palettes[0])

  return (
    <main className="max-w-4xl mx-auto px-4 py-8 md:py-12">
      <section className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-white/60 p-8 md:p-10">
        <a
          href="/proyectos"
          onClick={(event) => {
            event.preventDefault()
            onNavigate('/proyectos')
          }}
          className="inline-flex items-center gap-2 text-violet-500 hover:text-violet-600 font-semibold text-sm mb-8"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"/>
          </svg>
          Volver a proyectos
        </a>

        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-6 items-start">
          <div className="space-y-5">
            <span className="text-xs font-semibold uppercase tracking-wide text-violet-400">
              {badge}
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 leading-tight">
              {title}
            </h1>
            <p className="text-slate-500 leading-relaxed">{intro}</p>

            <div className="flex flex-wrap gap-3">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-violet-50 border border-violet-100 text-violet-500 text-sm font-semibold px-4 py-2"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="rounded-2xl border border-violet-100 bg-white/70 p-5">
              <h2 className="text-lg font-bold text-slate-800 mb-4">Qué incluiría</h2>
              <ul className="space-y-3">
                {sections.map((section) => (
                  <li key={section} className="flex items-start gap-3 text-slate-500 text-sm leading-relaxed">
                    <span className="w-2 h-2 rounded-full bg-violet-400 mt-2 flex-shrink-0" />
                    {section}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className="rounded-3xl border p-6 transition-colors duration-300"
            style={{
              backgroundColor: `${activePalette.soft}99`,
              borderColor: activePalette.border,
            }}
          >
            <div className="rounded-2xl bg-white p-5 shadow-sm mb-4">
              <div
                className="w-14 h-14 rounded-full border-4 mb-4 transition-colors duration-300"
                style={{
                  backgroundColor: activePalette.soft,
                  borderColor: activePalette.border,
                }}
              />
              <div className="h-4 w-2/3 rounded-full bg-slate-200 mb-3" />
              <div className="h-3 w-full rounded-full bg-slate-100 mb-2" />
              <div className="h-3 w-5/6 rounded-full bg-slate-100 mb-5" />
              <div
                className="h-10 w-36 rounded-xl transition-colors duration-300"
                style={{ backgroundColor: activePalette.accent }}
              />
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">{previewText}</p>

            <div className="mt-5 pt-5 border-t border-white/70">
              <p className="text-slate-700 text-sm font-semibold mb-3">Paleta de colores</p>
              <div className="grid grid-cols-2 gap-3">
                {palettes.map((palette) => (
                  <button
                    key={palette.name}
                    type="button"
                    onClick={() => setActivePalette(palette)}
                    className={`rounded-2xl bg-white/80 border p-3 text-left transition-all hover:-translate-y-0.5 hover:shadow-sm ${
                      activePalette.name === palette.name ? 'ring-2 ring-offset-2' : ''
                    }`}
                    style={{
                      borderColor: palette.border,
                      '--tw-ring-color': palette.accent,
                    }}
                    aria-pressed={activePalette.name === palette.name}
                  >
                    <span className="flex items-center gap-2 mb-2">
                      <span
                        className="w-5 h-5 rounded-full border"
                        style={{ backgroundColor: palette.accent, borderColor: palette.border }}
                      />
                      <span
                        className="w-5 h-5 rounded-full border"
                        style={{ backgroundColor: palette.soft, borderColor: palette.border }}
                      />
                    </span>
                    <span className="text-xs font-semibold text-slate-600">{palette.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-violet-100 bg-white/70 p-6">
          <h2 className="text-xl font-bold text-slate-800 mb-3">Objetivo del diseño</h2>
          <p className="text-slate-500 text-sm leading-relaxed">{objective}</p>
        </div>

        <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-5">
          {flow.map((item) => (
            <article key={item.title} className="rounded-2xl border border-violet-100 bg-violet-50/60 p-5">
              <p className="text-violet-500 font-bold mb-2">{item.title}</p>
              <p className="text-slate-500 text-sm leading-relaxed">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-white/70 bg-white/70 p-6 text-center">
          <p className="text-slate-800 font-bold text-xl mb-2">{ctaTitle}</p>
          <p className="text-slate-500 text-sm mb-5">{ctaText}</p>
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-violet-500 hover:bg-violet-600 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all shadow-sm"
          >
            Cotizar este proyecto
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
            </svg>
          </a>
        </div>
      </section>
    </main>
  )
}
