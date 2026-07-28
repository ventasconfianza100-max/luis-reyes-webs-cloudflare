// Fondo sutil e intencionado: 2 blobs suaves + textura de grano muy leve.
// (Se eliminaron las tarjetas flotantes con emoji: se veían de plantilla.)
export default function Decorations() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10" aria-hidden="true">
      <div className="absolute -top-40 -left-32 w-[32rem] h-[32rem] bg-brand-200/35 rounded-full blur-3xl" />
      <div className="absolute top-1/2 -right-40 w-[30rem] h-[30rem] bg-brand-100/40 rounded-full blur-3xl" />
      {/* grano sutil */}
      <div
        className="absolute inset-0 opacity-[0.025] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  )
}
