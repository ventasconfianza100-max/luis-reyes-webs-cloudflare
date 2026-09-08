import { useEffect, useMemo, useState } from 'react'
import {
  ESTADO_INICIAL,
  ESTADOS_PROYECTO,
  leerAlmacen,
  guardarAlmacen,
  boletaDeMantencion,
  nombreCliente,
} from './store.js'
import {
  ANIO_ACTUAL,
  desdeLiquido,
  formatCLP,
  formatFecha,
  hoyISO,
  mesDe,
  porcentaje,
  tasaRetencion,
} from './honorarios.js'
import { Boton, Etiqueta, Tarjeta, Vacio } from './ui.jsx'
import PanelClientes from './PanelClientes.jsx'
import PanelProyectos from './PanelProyectos.jsx'
import PanelDocumentos from './PanelDocumentos.jsx'
import PanelBoletas from './PanelBoletas.jsx'
import PanelAjustes from './PanelAjustes.jsx'

const VISTAS = [
  { id: 'resumen', nombre: 'Resumen', icono: '📈' },
  { id: 'clientes', nombre: 'Clientes', icono: '👥' },
  { id: 'proyectos', nombre: 'Proyectos', icono: '💼' },
  { id: 'documentos', nombre: 'Documentos', icono: '📄' },
  { id: 'boletas', nombre: 'Boletas y pagos', icono: '🧾' },
  { id: 'ajustes', nombre: 'Ajustes', icono: '⚙️' },
]

export default function AdminPage({ onNavigate }) {
  const [estado, setEstado] = useState(ESTADO_INICIAL)
  const [cargado, setCargado] = useState(false)
  const [vista, setVista] = useState('resumen')
  const [menuAbierto, setMenuAbierto] = useState(false)

  // El almacén vive en localStorage: se lee al montar (nunca en SSR) y se
  // guarda en cada cambio posterior.
  useEffect(() => {
    setEstado(leerAlmacen())
    setCargado(true)
  }, [])

  useEffect(() => {
    if (cargado) guardarAlmacen(estado)
  }, [estado, cargado])

  const api = useMemo(() => {
    const upsert = (coleccion, item) =>
      setEstado((prev) => {
        const existe = prev[coleccion].some((x) => x.id === item.id)
        return {
          ...prev,
          [coleccion]: existe
            ? prev[coleccion].map((x) => (x.id === item.id ? item : x))
            : [item, ...prev[coleccion]],
        }
      })

    const eliminar = (coleccion, id) =>
      setEstado((prev) => ({ ...prev, [coleccion]: prev[coleccion].filter((x) => x.id !== id) }))

    const agregarVarios = (coleccion, items) =>
      setEstado((prev) => ({ ...prev, [coleccion]: [...items, ...prev[coleccion]] }))

    const guardarAjustes = (ajustes) => setEstado((prev) => ({ ...prev, ajustes }))

    return { upsert, eliminar, agregarVarios, guardarAjustes, setEstado }
  }, [])

  const irA = (destino) => {
    setVista(destino)
    setMenuAbierto(false)
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="no-imprimir sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-600 font-display text-sm font-bold text-white">
              LR
            </span>
            <div className="leading-tight">
              <p className="font-display text-sm font-bold text-slate-900">Panel interno</p>
              <p className="text-xs text-slate-400">Cotizaciones, contratos y boletas</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/"
              onClick={(e) => {
                if (!onNavigate) return
                e.preventDefault()
                onNavigate('/')
              }}
              className="hidden text-sm font-semibold text-slate-500 hover:text-brand-700 sm:block"
            >
              Ver el sitio →
            </a>
            <button
              type="button"
              onClick={() => setMenuAbierto((v) => !v)}
              aria-label="Abrir secciones"
              className="grid h-10 w-10 place-items-center rounded-xl text-slate-600 hover:bg-slate-100 md:hidden"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                <path strokeLinecap="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
              </svg>
            </button>
          </div>
        </div>

        <nav className={`${menuAbierto ? 'block' : 'hidden'} border-t border-slate-200 md:block md:border-t-0`}>
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 pb-3 md:flex-row md:gap-1 md:pb-0">
            {VISTAS.map((v) => (
              <button
                key={v.id}
                type="button"
                onClick={() => irA(v.id)}
                className={`rounded-lg px-3 py-2.5 text-left text-sm font-semibold transition md:rounded-none md:border-b-2 md:px-3.5 md:py-3 ${
                  vista === v.id
                    ? 'bg-brand-50 text-brand-700 md:bg-transparent md:border-brand-600'
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800 md:border-transparent'
                }`}
              >
                <span className="mr-1.5">{v.icono}</span>
                {v.nombre}
              </button>
            ))}
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-5 py-8">
        {!cargado ? (
          <p className="text-sm text-slate-400">Cargando tus datos…</p>
        ) : vista === 'resumen' ? (
          <Resumen estado={estado} api={api} irA={irA} />
        ) : vista === 'clientes' ? (
          <PanelClientes estado={estado} api={api} irA={irA} />
        ) : vista === 'proyectos' ? (
          <PanelProyectos estado={estado} api={api} irA={irA} />
        ) : vista === 'documentos' ? (
          <PanelDocumentos estado={estado} api={api} irA={irA} />
        ) : vista === 'boletas' ? (
          <PanelBoletas estado={estado} api={api} irA={irA} />
        ) : (
          <PanelAjustes estado={estado} api={api} />
        )}
      </main>
    </div>
  )
}

// ── Resumen ──────────────────────────────────────────────────

function Resumen({ estado, api, irA }) {
  const { boletas, proyectos, clientes, ajustes } = estado
  const tasa = tasaRetencion(ajustes.anioRetencion)
  const anio = String(ajustes.anioRetencion || ANIO_ACTUAL)

  const delAnio = boletas.filter((b) => String(b.fecha).slice(0, 4) === anio)
  const totales = delAnio.reduce(
    (acc, b) => {
      const { bruto, retencion, liquido } = desdeLiquido(b.liquido, tasa)
      if (b.estado === 'pagada') {
        acc.recibido += liquido
        acc.brutoEmitido += bruto
        acc.retencion += retencion
      } else if (b.estado === 'emitida') {
        acc.porCobrar += liquido
        acc.brutoEmitido += bruto
        acc.retencion += retencion
      } else {
        acc.porEmitir += liquido
      }
      return acc
    },
    { recibido: 0, porCobrar: 0, porEmitir: 0, retencion: 0, brutoEmitido: 0 }
  )

  const pendientes = boletas.filter((b) => b.estado !== 'pagada')
  const activos = proyectos.filter((p) => !['cerrado'].includes(p.estado))

  // Mantenciones del mes en curso que todavía no tienen boleta emitida.
  const mesActual = hoyISO().slice(0, 7)
  const mantencionesPendientes = proyectos.filter((p) => {
    if (!p.mantencion || !['entregado', 'mantencion'].includes(p.estado)) return false
    return !boletas.some(
      (b) => b.proyectoId === p.id && b.glosa.toLowerCase().includes('mantenimiento') && String(b.fecha).slice(0, 7) === mesActual
    )
  })

  const generarMantencion = (proyecto) => api.upsert('boletas', boletaDeMantencion(proyecto, hoyISO()))

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-slate-900">
          Hola, Luis. Esto es lo que tienes en curso.
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Retención vigente {anio}: <strong className="text-slate-700">{porcentaje(tasa)}</strong>. Todos los
          montos se manejan como líquidos (lo que recibes), y la boleta se emite por el bruto equivalente.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <TarjetaDato label={`Recibido ${anio}`} valor={formatCLP(totales.recibido)} tono="brand" nota="Boletas pagadas" />
        <TarjetaDato label="Por cobrar" valor={formatCLP(totales.porCobrar)} nota="Boletas emitidas sin pago" />
        <TarjetaDato label="Por emitir" valor={formatCLP(totales.porEmitir)} nota={`${boletas.filter((b) => b.estado === 'pendiente').length} boletas en cola`} />
        <TarjetaDato
          label="Retención del año"
          valor={formatCLP(totales.retencion)}
          nota={`Sobre ${formatCLP(totales.brutoEmitido)} brutos`}
        />
      </div>

      {mantencionesPendientes.length > 0 && (
        <Tarjeta className="p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="font-display text-base font-bold text-slate-900">
                Mantenciones de {mesDe(hoyISO())} sin boleta
              </h2>
              <p className="mt-0.5 text-sm text-slate-500">
                Cada mantención mensual también se respalda con su boleta de honorarios.
              </p>
            </div>
          </div>
          <ul className="mt-4 divide-y divide-slate-100">
            {mantencionesPendientes.map((p) => (
              <li key={p.id} className="flex flex-wrap items-center justify-between gap-3 py-3">
                <div>
                  <p className="text-sm font-semibold text-slate-800">{p.nombre || 'Proyecto sin nombre'}</p>
                  <p className="text-xs text-slate-500">
                    {nombreCliente(clientes, p.clienteId)} · {formatCLP(p.mantencion)} líquidos/mes
                  </p>
                </div>
                <Boton variante="suave" onClick={() => generarMantencion(p)}>
                  Generar boleta del mes
                </Boton>
              </li>
            ))}
          </ul>
        </Tarjeta>
      )}

      <div className="grid gap-5 lg:grid-cols-2">
        <Tarjeta className="p-5">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-base font-bold text-slate-900">Proyectos activos</h2>
            <button type="button" onClick={() => irA('proyectos')} className="text-sm font-semibold text-brand-600">
              Ver todos →
            </button>
          </div>
          {activos.length === 0 ? (
            <p className="mt-4 text-sm text-slate-400">
              Aún no hay proyectos. Crea el primero desde la pestaña Proyectos.
            </p>
          ) : (
            <ul className="mt-3 divide-y divide-slate-100">
              {activos.slice(0, 5).map((p) => {
                const est = ESTADOS_PROYECTO.find((e) => e.id === p.estado)
                return (
                  <li key={p.id} className="flex items-center justify-between gap-3 py-3">
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-slate-800">
                        {p.nombre || 'Proyecto sin nombre'}
                      </p>
                      <p className="truncate text-xs text-slate-500">
                        {nombreCliente(clientes, p.clienteId)} · {formatCLP(p.monto)} líquidos
                      </p>
                    </div>
                    {est && <Etiqueta color={est.color}>{est.nombre}</Etiqueta>}
                  </li>
                )
              })}
            </ul>
          )}
        </Tarjeta>

        <Tarjeta className="p-5">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-base font-bold text-slate-900">Boletas pendientes</h2>
            <button type="button" onClick={() => irA('boletas')} className="text-sm font-semibold text-brand-600">
              Ver todas →
            </button>
          </div>
          {pendientes.length === 0 ? (
            <p className="mt-4 text-sm text-slate-400">Todo al día: no tienes boletas pendientes.</p>
          ) : (
            <ul className="mt-3 divide-y divide-slate-100">
              {pendientes.slice(0, 5).map((b) => {
                const { bruto } = desdeLiquido(b.liquido, tasa)
                return (
                  <li key={b.id} className="flex items-center justify-between gap-3 py-3">
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-slate-800">{b.glosa}</p>
                      <p className="text-xs text-slate-500">
                        {formatFecha(b.fecha)} · emitir por {formatCLP(bruto)} brutos
                      </p>
                    </div>
                    <span className="flex-shrink-0 text-sm font-bold text-slate-700">{formatCLP(b.liquido)}</span>
                  </li>
                )
              })}
            </ul>
          )}
        </Tarjeta>
      </div>

      {proyectos.length === 0 && clientes.length === 0 && (
        <Vacio
          titulo="Empieza creando un cliente"
          texto="Con el cliente y su proyecto listos, el panel arma la cotización, el contrato, el acta de entrega y el plan de boletas sin que tengas que reescribir nada."
          accion={<Boton onClick={() => irA('clientes')}>Crear mi primer cliente</Boton>}
        />
      )}
    </div>
  )
}

function TarjetaDato({ label, valor, nota, tono }) {
  return (
    <div
      className={`rounded-2xl border p-4 ${
        tono === 'brand' ? 'border-brand-200 bg-brand-50' : 'border-slate-200 bg-white'
      }`}
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</p>
      <p className={`mt-1 font-display text-2xl font-bold ${tono === 'brand' ? 'text-brand-700' : 'text-slate-900'}`}>
        {valor}
      </p>
      {nota && <p className="mt-0.5 text-xs text-slate-400">{nota}</p>}
    </div>
  )
}
