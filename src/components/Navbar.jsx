import { useState } from 'react'

const links = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proyectos', href: '/proyectos', route: true },
  { label: 'Empresas', href: '/proyectos-empresas', route: true },
  { label: 'Blog', href: '/blog', route: true },
  { label: 'Planes', href: '#planes' },
  { label: 'Contacto', href: 'https://wa.me/56922012534', external: true },
]

export default function Navbar({ onNavigate }) {
  const [open, setOpen] = useState(false)

  const handleClick = (event, link) => {
    if (link.route) {
      event.preventDefault()
      onNavigate(link.href)
    }
    setOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault()
            onNavigate('/')
            setOpen(false)
          }}
          className="font-display font-bold text-slate-900 text-lg tracking-tight"
        >
          Luis Reyes <span className="text-brand-600">Castro</span>
        </a>

        {/* Links — desktop */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(event) => handleClick(event, link)}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                link.external
                  ? 'bg-brand-600 text-white hover:bg-brand-700 ml-2'
                  : 'text-slate-600 hover:text-brand-700 hover:bg-brand-50'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Botón hamburguesa — móvil */}
        <button
          type="button"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg text-slate-700 hover:bg-brand-50"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            )}
          </svg>
        </button>
      </div>

      {/* Panel móvil */}
      {open && (
        <div className="md:hidden border-t border-slate-200/60 bg-white">
          <div className="px-6 py-4 flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(event) => handleClick(event, link)}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  link.external
                    ? 'bg-brand-600 text-white hover:bg-brand-700 text-center mt-1'
                    : 'text-slate-700 hover:text-brand-700 hover:bg-brand-50'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
