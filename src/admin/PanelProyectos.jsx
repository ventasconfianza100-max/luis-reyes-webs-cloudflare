import { useState } from 'react'
import {
  ESTADOS_PROYECTO,
  TIPOS_PROYECTO,
  boletasDeProyecto,
  nombreCliente,
  proyectoVacio,
  siguienteFolio,
} from './store.js'
import { desdeLiquido, formatCLP, formatFecha, porcentaje, tasaRetencion } from './honorarios.js'
import { Boton, Campo, Encabezado, Etiqueta, Input, Select, Tarjeta, Textarea, Vacio } from './ui.jsx'

export default function PanelProyectos({ estado, api, irA }) {
  const { proyectos, clientes, boletas, ajustes } = estado
  const [editando, setEditando] = useState(null)
  const tasa = tasaRetencion(ajustes.anioRetencion)

  const nuevo = () => {
    const p = proyectoVacio(clientes[0]?.id || '')
    setEditando({ ...p, folio: siguienteFolio('LRW', ajustes.correlativo, ajustes.anioRetencion) })
  }

  const guardar = () => {
    api.upsert('proyectos', editando)
    // Si usó el folio sugerido, avanza el correlativo para el próximo documento.
    const sugerido = siguienteFolio('LRW', ajustes.correlativo, ajustes.anioRetencion)
    if (editando.folio === sugerido) {
      api.guardarAjustes({ ...ajustes, correlativo: Number(ajustes.correlativo || 1) + 1 })
    }
    setEditando(null)
  }

  const borrar = (proyecto) => {
    const suyas = boletas.filter((b) => b.proyectoId === proyecto.id)
    const aviso = suyas.length
      ? `${proyecto.nombre || 'Este proyecto'} tiene ${suyas.length} boleta(s) asociadas, que también se eliminarán. ¿Continuar?`
      : '¿Eliminar este proyecto?'
    if (!window.confirm(aviso)) return
    suyas.forEach((b) => api.eliminar('boletas', b.id))
    api.eliminar('proyectos', proyecto.id)
  }

  const generarBoletas = (proyecto) => {
    const yaTiene = boletas.some((b) => b.proyectoId === proyecto.id)
    if (yaTiene && !window.confirm('Este proyecto ya tiene boletas. ¿Agregar igualmente el plan completo?')) return
    api.agregarVarios('boletas', boletasDeProyecto(proyecto))
    irA('boletas')
  }

  return (
    <div className="space-y-6">
      <Encabezado
        titulo="Proyectos"
        texto="Cada proyecto guarda el monto líquido acordado, la forma de pago y los plazos. De ahí salen los documentos y las boletas."
        accion={
          <Boton onClick={nuevo} disabled={clientes.length === 0}>
            + Nuevo proyecto
          </Boton>
        }
      />

      {clientes.length === 0 && (
        <Vacio
          titulo="Primero necesitas un cliente"
          texto="Un proyecto se asocia siempre a un cliente, para que la cotización y el contrato salgan con su nombre y RUT."
          accion={<Boton onClick={() => irA('clientes')}>Ir a clientes</Boton>}
        />
      )}

      {editando && (
        <FormularioProyecto
          proyecto={editando}
          setProyecto={setEditando}
          clientes={clientes}
          tasa={tasa}
          onGuardar={guardar}
          onCancelar={() => setEditando(null)}
        />
      )}

      {proyectos.length === 0 && clientes.length > 0 && !editando && (
        <Vacio
          titulo="Sin proyectos todavía"
          texto="Crea el proyecto con el monto líquido que vas a cobrar; el panel calcula solo el bruto de cada boleta."
          accion={<Boton onClick={nuevo}>+ Nuevo proyecto</Boton>}
        />
      )}

      <div className="grid gap-4">
        {proyectos.map((p) => {
          const est = ESTADOS_PROYECTO.find((e) => e.id === p.estado)
          const tipo = TIPOS_PROYECTO.find((t) => t.id === p.tipo)
          const { bruto, retencion } = desdeLiquido(p.monto, tasa)
          const suyas = boletas.filter((b) => b.proyectoId === p.id)
          const cobrado = suyas.filter((b) => b.estado === 'pagada').reduce((s, b) => s + Number(b.liquido || 0), 0)

          return (
            <Tarjeta key={p.id} className="p-5">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display text-base font-bold text-slate-900">
                      {p.nombre || 'Proyecto sin nombre'}
                    </h3>
                    {est && <Etiqueta color={est.color}>{est.nombre}</Etiqueta>}
                  </div>
                  <p className="mt-0.5 text-sm text-slate-500">
                    {nombreCliente(clientes, p.clienteId)} · {tipo?.nombre} · {p.folio || 'sin folio'} ·{' '}
                    {formatFecha(p.fecha)}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-display text-xl font-bold text-brand-700">{formatCLP(p.monto)}</p>
                  <p className="text-xs text-slate-400">líquidos</p>
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <MiniDato label="Boleta bruta" valor={formatCLP(bruto)} nota={`Retención ${formatCLP(retencion)}`} />
                <MiniDato
                  label="Cobrado"
                  valor={formatCLP(cobrado)}
                  nota={`${suyas.filter((b) => b.estado === 'pagada').length} de ${suyas.length || p.cuotas} boletas pagadas`}
                />
                <MiniDato
                  label="Mantención"
                  valor={p.mantencion ? `${formatCLP(p.mantencion)}/mes` : 'Sin plan'}
                  nota={p.mantencion ? `Boleta de ${formatCLP(desdeLiquido(p.mantencion, tasa).bruto)}` : '—'}
                />
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <Boton variante="suave" onClick={() => irA('documentos')}>
                  Generar documento
                </Boton>
                <Boton variante="secundario" onClick={() => generarBoletas(p)}>
                  Crear plan de boletas
                </Boton>
                <Boton variante="secundario" onClick={() => setEditando(p)}>
                  Editar
                </Boton>
                <Boton variante="peligro" onClick={() => borrar(p)}>
                  Eliminar
                </Boton>
              </div>
            </Tarjeta>
          )
        })}
      </div>
    </div>
  )
}

function MiniDato({ label, valor, nota }) {
  return (
    <div className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-3">
      <p className="text-xs font-semibold text-slate-500">{label}</p>
      <p className="mt-0.5 font-display text-base font-bold text-slate-800">{valor}</p>
      <p className="text-xs text-slate-400">{nota}</p>
    </div>
  )
}

function FormularioProyecto({ proyecto, setProyecto, clientes, tasa, onGuardar, onCancelar }) {
  const set = (campo) => (e) => setProyecto({ ...proyecto, [campo]: e.target.value })
  const setNum = (campo) => (e) => setProyecto({ ...proyecto, [campo]: Number(e.target.value) || 0 })
  const { bruto, retencion } = desdeLiquido(proyecto.monto, tasa)
  const cuotas = Math.max(1, Number(proyecto.cuotas) || 1)
  const porCuota = Math.floor(proyecto.monto / cuotas)

  return (
    <Tarjeta className="p-5">
      <h2 className="font-display text-base font-bold text-slate-900">Datos del proyecto</h2>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <Campo label="Cliente">
          <Select value={proyecto.clienteId} onChange={set('clienteId')}>
            {clientes.map((c) => (
              <option key={c.id} value={c.id}>
                {c.nombre}
              </option>
            ))}
          </Select>
        </Campo>
        <Campo label="Nombre del proyecto">
          <Input value={proyecto.nombre} onChange={set('nombre')} placeholder="Sitio web Munay Cueros" />
        </Campo>
        <Campo label="Tipo de trabajo">
          <Select
            value={proyecto.tipo}
            onChange={(e) => {
              const tipo = TIPOS_PROYECTO.find((t) => t.id === e.target.value)
              setProyecto({
                ...proyecto,
                tipo: e.target.value,
                monto: proyecto.monto || tipo?.monto || 0,
                mantencion: proyecto.mantencion || tipo?.mantencion || 0,
              })
            }}
          >
            {TIPOS_PROYECTO.map((t) => (
              <option key={t.id} value={t.id}>
                {t.nombre}
              </option>
            ))}
          </Select>
        </Campo>
        <Campo label="Estado">
          <Select value={proyecto.estado} onChange={set('estado')}>
            {ESTADOS_PROYECTO.map((e) => (
              <option key={e.id} value={e.id}>
                {e.nombre}
              </option>
            ))}
          </Select>
        </Campo>
        <Campo label="Folio del documento" ayuda="Se usa en la cotización y el contrato.">
          <Input value={proyecto.folio} onChange={set('folio')} placeholder="LRW-2026-001" />
        </Campo>
        <Campo label="Fecha">
          <Input type="date" value={proyecto.fecha} onChange={set('fecha')} />
        </Campo>

        <Campo label="Monto líquido a recibir" ayuda={`Boleta bruta: ${formatCLP(bruto)} · retención ${formatCLP(retencion)}`}>
          <Input type="number" min="0" step="1000" value={proyecto.monto} onChange={setNum('monto')} />
        </Campo>
        <Campo
          label="Cuotas"
          ayuda={cuotas > 1 ? `${cuotas} pagos de ${formatCLP(porCuota)} líquidos` : 'Pago único'}
        >
          <Select value={cuotas} onChange={setNum('cuotas')}>
            <option value={1}>1 pago</option>
            <option value={2}>2 pagos (50% y 50%)</option>
            <option value={3}>3 pagos</option>
          </Select>
        </Campo>
        <Campo label="Mantención mensual líquida" ayuda="0 si el proyecto no lleva mantención.">
          <Input type="number" min="0" step="1000" value={proyecto.mantencion} onChange={setNum('mantencion')} />
        </Campo>
        <Campo label="Plazo estimado (días hábiles)">
          <Input value={proyecto.plazoDias} onChange={set('plazoDias')} placeholder="10 a 20" />
        </Campo>
        <Campo label="Rondas de revisión incluidas">
          <Input type="number" min="1" max="9" value={proyecto.rondas} onChange={setNum('rondas')} />
        </Campo>
        <Campo label="Garantía técnica (días)">
          <Input type="number" min="0" max="365" value={proyecto.garantiaDias} onChange={setNum('garantiaDias')} />
        </Campo>

        {proyecto.tipo === 'plan' && (
          <Campo label="Plan destacado en la cotización">
            <Select value={proyecto.plan} onChange={set('plan')}>
              <option value="Plan Esencial">Plan Esencial</option>
              <option value="Plan Profesional">Plan Profesional</option>
              <option value="Plan Premium">Plan Premium</option>
            </Select>
          </Campo>
        )}
        <Campo label="URL publicada" ayuda="Se usa en el acta de entrega.">
          <Input value={proyecto.url} onChange={set('url')} placeholder="https://…" />
        </Campo>

        <Campo label="Objetivo del proyecto" className="sm:col-span-2">
          <Textarea
            rows={2}
            value={proyecto.objetivo}
            onChange={set('objetivo')}
            placeholder="Qué hace el negocio, a quién le vende y qué resultado busca con la página."
          />
        </Campo>
        <Campo
          label="Qué incluye (una línea por punto)"
          className="sm:col-span-2"
          ayuda="Si lo dejas vacío se usa la lista estándar de la cotización."
        >
          <Textarea rows={3} value={proyecto.incluye} onChange={set('incluye')} />
        </Campo>
        <Campo label="Pendientes o notas internas" className="sm:col-span-2">
          <Textarea rows={2} value={proyecto.notas} onChange={set('notas')} />
        </Campo>
      </div>

      <div className="mt-4 rounded-xl border border-brand-100 bg-brand-50 px-4 py-3 text-sm text-brand-900">
        Con retención de {porcentaje(tasa)}: para recibir {formatCLP(proyecto.monto)} líquidos, la boleta total se
        emite por <strong>{formatCLP(bruto)}</strong> brutos ({formatCLP(retencion)} de retención).
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <Boton onClick={onGuardar}>Guardar proyecto</Boton>
        <Boton variante="secundario" onClick={onCancelar}>
          Cancelar
        </Boton>
      </div>
    </Tarjeta>
  )
}
