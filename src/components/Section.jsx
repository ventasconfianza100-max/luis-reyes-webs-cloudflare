// Sección full-width con contenedor interno centrado.
// Uso: <Section id="planes" width="default" className="bg-...">...</Section>
// width: 'default' (max-w-6xl), 'wide' (max-w-7xl), 'narrow' (max-w-3xl)

const widths = {
  default: 'max-w-6xl',
  wide: 'max-w-7xl',
  narrow: 'max-w-3xl',
}

export default function Section({
  id,
  children,
  width = 'default',
  className = '',
  containerClassName = '',
  spacing = 'py-16 md:py-24',
}) {
  return (
    <section id={id} className={`${spacing} ${className}`}>
      <div className={`${widths[width]} mx-auto px-6 ${containerClassName}`}>
        {children}
      </div>
    </section>
  )
}
