import { useState } from 'react'
import { ESTADOS_BOLETA, boletaVacia, nombreCliente } from './store.js'
import {
  RETENCION_POR_ANIO,
  calcular,
  desdeLiquido,
  formatCLP,
  formatFecha,
  porcentaje,
  tasaRetencion,
} from './honorarios.js'
import { Boton, Campo, Encabezado, Etiqueta, Input, Select, Tarjeta, Textarea, Vacio } from './ui.jsx'

export default function PanelBoletas({ estado, api, irA }) {
  const { boletas, proyectos, clientes, ajustes } = estado
  const [editando, setEditando] = useState(null)
  const [filtro, setFiltro] = useState('todas')
  const [aviso, setAviso] = useState('')
  const tasa = tasaRetencion(ajustes.anioRetencion)

  const visibles = boletas
    .filter((b) => filtro === 'todas' || b.estado === filtro)
    .slice()
    .sort((a, b) => String(b.fecha).localeCompare(String(a.fecha)))

  const proyectoDe = (b) => proyectos.find((p) => p.id === b.proyectoId)

  const cambiarEstado = (boleta, nuevo) => api.upsert('boletas', { ...boleta, estado: nuevo })

  const copiarParaSII = async (boleta) => {
    const { bruto, retencion, liquido } = desdeLiquido(boleta.liquido, tasa)
    const texto = [
      `Glosa: ${boleta.glosa}`,
      `Monto bruto: ${bruto}`,
      `Retención (${porcentaje(tasa)}): ${retencion}`,
      `Total a recibir: ${liquido}`,
    ].join('\n')
    try {
      await navigator.clipboard.writeText(texto)
      setAviso(`Datos de "${boleta.glosa}" copiados.`)
    } catch {
      setAviso('No se pudo copiar en este navegador.')
    }
    window.setTimeout(() => setAviso(''), 2500)
  }

  return (
    <div className="space-y-6">
      <Encabezado
        titulo="Boletas y pagos"
        texto="Cada pago que recibes se respalda con su boleta de honorarios: anticipo, saldo final y cada mantención mensual."
        accion={
          <Boton onClick={() => setEditando(boletaVacia(proyectos[0]?.id || ''))} disabled={proyectos.length === 0}>
            + Boleta suelta
          </Boton>
        }
      />

      <Calculadora ajustes={ajustes} />

      {editando && (
        <FormularioBoleta
          boleta={editando}
          setBoleta={setEditando}
          proyectos={proyectos}
          clientes={clientes}
          tasa={tasa}
          onGuardar={() => {
            api.upsert('boletas', editando)
            setEditando(null)
          }}
          onCancelar={() => setEditando(null)}
        />
      )}

      <div className="flex flex-wrap items-center gap-2">
        {[{ id: 'todas', nombre: 'Todas' }, ...ESTADOS_BOLETA].map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setFiltro(f.id)}
            className={`rounded-full px-3.5 py-1.5 text-sm font-semibold transition ${
              filtro === f.id ? 'bg-brand-600 text-white' : 'bg-white text-slate-600 border border-slate-200'
            }`}
          >
            {f.nombre}
          </button>
        ))}
        {aviso && <span className="text-sm font-semibold text-emerald-600">{aviso}</span>}
      </div>

      {visibles.length === 0 ? (
        <Vacio
          titulo={boletas.length === 0 ? 'Aún no hay boletas' : 'Nada en este filtro'}
          texto={
            boletas.length === 0
              ? 'Desde un proyecto puedes crear el plan completo: abono inicial, pago final y las mantenciones mensuales.'
              : 'Prueba con otro estado.'
          }
          accion={boletas.length === 0 ? <Boton onClick={() => irA('proyectos')}>Ir a proyectos</Boton> : null}
        />
      ) : (
        <div className="space-y-3">
          {visibles.map((b) => {
            const { bruto, retencion } = desdeLiquido(b.liquido, tasa)
            const est = ESTADOS_BOLETA.find((e) => e.id === b.estado)
            const proyecto = proyectoDe(b)
            return (
              <Tarjeta key={b.id} className="p-5">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-display text-base font-bold text-slate-900">{b.glosa}</h3>
                      {est && <Etiqueta color={est.color}>{est.nombre}</Etiqueta>}
                    </div>
                    <p className="mt-0.5 text-sm text-slate-500">
                      {proyecto?.nombre || 'Sin proyecto'} · {nombreCliente(clientes, proyecto?.clienteId)} ·{' '}
                      {formatFecha(b.fecha)}
                      {b.numero ? ` · boleta N.º ${b.numero}` : ''}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-display text-xl font-bold text-brand-700">{formatCLP(bruto)}</p>
                    <p className="text-xs text-slate-400">bruto de la boleta</p>
                  </div>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  <Celda label="Recibes (líquido)" valor={formatCLP(b.liquido)} />
                  <Celda label={`Retención ${porcentaje(tasa)}`} valor={formatCLP(retencion)} />
                  <Celda
                    label="Quién paga la retención"
                    valor={b.retieneCliente ? 'La retiene el cliente' : 'La reservas tú'}
                  />
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {b.estado !== 'emitida' && (
                    <Boton variante="suave" onClick={() => cambiarEstado(b, 'emitida')}>
                      Marcar emitida
                    </Boton>
                  )}
                  {b.estado !== 'pagada' && (
                    <Boton variante="suave" onClick={() => cambiarEstado(b, 'pagada')}>
                      Marcar pagada
                    </Boton>
                  )}
                  <Boton variante="secundario" onClick={() => copiarParaSII(b)}>
                    Copiar datos para el SII
                  </Boton>
                  <Boton variante="secundario" onClick={() => setEditando(b)}>
                    Editar
                  </Boton>
                  <Boton
                    variante="peligro"
                    onClick={() => window.confirm('¿Eliminar esta boleta?') && api.eliminar('boletas', b.id)}
                  >
                    Eliminar
                  </Boton>
                </div>
              </Tarjeta>
            )
          })}
        </div>
      )}
    </div>
  )
}

function Celda({ label, valor }) {
  return (
    <div className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-3">
      <p className="text-xs font-semibold text-slate-500">{label}</p>
      <p className="mt-0.5 font-display text-base font-bold text-slate-800">{valor}</p>
    </div>
  )
}

function FormularioBoleta({ boleta, setBoleta, proyectos, clientes, tasa, onGuardar, onCancelar }) {
  const set = (campo) => (e) => setBoleta({ ...boleta, [campo]: e.target.value })
  const { bruto, retencion } = desdeLiquido(boleta.liquido, tasa)

  return (
    <Tarjeta className="p-5">
      <h2 className="font-display text-base font-bold text-slate-900">Datos de la boleta</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <Campo label="Proyecto">
          <Select value={boleta.proyectoId} onChange={set('proyectoId')}>
            {proyectos.map((p) => (
              <option key={p.id} value={p.id}>
                {p.nombre || 'Sin nombre'} — {nombreCliente(clientes, p.clienteId)}
              </option>
            ))}
          </Select>
        </Campo>
        <Campo label="Fecha">
          <Input type="date" value={boleta.fecha} onChange={set('fecha')} />
        </Campo>
        <Campo label="Glosa (el detalle que va en la boleta)" className="sm:col-span-2">
          <Textarea
            rows={2}
            value={boleta.glosa}
            onChange={set('glosa')}
            placeholder="Abono inicial por diseño y desarrollo de página web"
          />
        </Campo>
        <Campo label="Monto líquido a recibir" ayuda={`Se emite por ${formatCLP(bruto)} brutos`}>
          <Input
            type="number"
            min="0"
            step="1000"
            value={boleta.liquido}
            onChange={(e) => setBoleta({ ...boleta, liquido: Number(e.target.value) || 0 })}
          />
        </Campo>
        <Campo label="Estado">
          <Select value={boleta.estado} onChange={set('estado')}>
            {ESTADOS_BOLETA.map((e) => (
              <option key={e.id} value={e.id}>
                {e.nombre}
              </option>
            ))}
          </Select>
        </Campo>
        <Campo label="N.º de boleta en el SII" ayuda="Opcional, para cuadrar después.">
          <Input value={boleta.numero} onChange={set('numero')} />
        </Campo>
        <Campo label="¿Quién retiene?">
          <Select
            value={boleta.retieneCliente ? 'cliente' : 'yo'}
            onChange={(e) => setBoleta({ ...boleta, retieneCliente: e.target.value === 'cliente' })}
          >
            <option value="yo">Yo reservo la retención (cliente persona natural)</option>
            <option value="cliente">La retiene el cliente (empresa)</option>
          </Select>
        </Campo>
      </div>

      <div className="mt-4 rounded-xl border border-brand-100 bg-brand-50 px-4 py-3 text-sm text-brand-900">
        Boleta por <strong>{formatCLP(bruto)}</strong> brutos · retención {formatCLP(retencion)} · recibes{' '}
        {formatCLP(boleta.liquido)}.
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <Boton onClick={onGuardar}>Guardar boleta</Boton>
        <Boton variante="secundario" onClick={onCancelar}>
          Cancelar
        </Boton>
      </div>
    </Tarjeta>
  )
}

// ── Calculadora rápida ───────────────────────────────────────

function Calculadora({ ajustes }) {
  const [monto, setMonto] = useState(60000)
  const [modo, setModo] = useState('liquido')
  const [anio, setAnio] = useState(ajustes.anioRetencion)
  const tasa = tasaRetencion(anio)
  const r = calcular(monto, tasa, modo)

  return (
    <Tarjeta className="p-5">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="font-display text-base font-bold text-slate-900">Calculadora líquido ↔ bruto</h2>
          <p className="mt-0.5 text-sm text-slate-500">
            Retención {anio}: <strong className="text-slate-700">{porcentaje(tasa)}</strong>
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Campo label="Año">
            <Select value={anio} onChange={(e) => setAnio(Number(e.target.value))}>
              {Object.keys(RETENCION_POR_ANIO).map((a) => (
                <option key={a} value={a}>
                  {a}
                </option>
              ))}
            </Select>
          </Campo>
          <Campo label="El monto que escribo es">
            <Select value={modo} onChange={(e) => setModo(e.target.value)}>
              <option value="liquido">Líquido (lo que quiero recibir)</option>
              <option value="bruto">Bruto (lo que dice la boleta)</option>
            </Select>
          </Campo>
          <Campo label="Monto">
            <Input
              type="number"
              min="0"
              step="1000"
              value={monto}
              onChange={(e) => setMonto(Number(e.target.value) || 0)}
              className="sm:w-40"
            />
          </Campo>
        </div>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <Celda label="Boleta bruta" valor={formatCLP(r.bruto)} />
        <Celda label={`Retención (${porcentaje(tasa)})`} valor={formatCLP(r.retencion)} />
        <Celda label="Recibes" valor={formatCLP(r.liquido)} />
      </div>

      <p className="mt-3 text-xs text-slate-400">
        En tus cotizaciones conviene escribir el valor líquido: “Valor del servicio: {formatCLP(r.liquido)} líquidos.
        Se emitirá boleta de honorarios”. Así el cliente sabe que ese es el monto que debes recibir después de la
        retención.
      </p>
    </Tarjeta>
  )
}
