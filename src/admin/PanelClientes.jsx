import { useState } from 'react'
import { clienteVacio } from './store.js'
import { Boton, Campo, Encabezado, Input, Tarjeta, Textarea, Vacio } from './ui.jsx'

export default function PanelClientes({ estado, api, irA }) {
  const { clientes, proyectos } = estado
  const [editando, setEditando] = useState(null)

  const guardar = () => {
    if (!editando.nombre.trim()) return
    api.upsert('clientes', editando)
    setEditando(null)
  }

  const borrar = (cliente) => {
    const conProyectos = proyectos.some((p) => p.clienteId === cliente.id)
    const aviso = conProyectos
      ? `${cliente.nombre} tiene proyectos asociados. Si lo eliminas, esos proyectos quedan sin cliente. ¿Continuar?`
      : `¿Eliminar a ${cliente.nombre}?`
    if (window.confirm(aviso)) api.eliminar('clientes', cliente.id)
  }

  return (
    <div className="space-y-6">
      <Encabezado
        titulo="Clientes"
        texto="Los datos que se repiten en cada cotización, contrato y acta. Se escriben una vez."
        accion={<Boton onClick={() => setEditando(clienteVacio())}>+ Nuevo cliente</Boton>}
      />

      {editando && (
        <Tarjeta className="p-5">
          <h2 className="font-display text-base font-bold text-slate-900">
            {clientes.some((c) => c.id === editando.id) ? 'Editar cliente' : 'Nuevo cliente'}
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <Campo label="Nombre o razón social">
              <Input
                value={editando.nombre}
                onChange={(e) => setEditando({ ...editando, nombre: e.target.value })}
                placeholder="Munay Cueros SpA"
                autoFocus
              />
            </Campo>
            <Campo label="RUT">
              <Input
                value={editando.rut}
                onChange={(e) => setEditando({ ...editando, rut: e.target.value })}
                placeholder="77.123.456-7"
              />
            </Campo>
            <Campo label="Persona de contacto">
              <Input
                value={editando.contacto}
                onChange={(e) => setEditando({ ...editando, contacto: e.target.value })}
                placeholder="Álvaro Pérez"
              />
            </Campo>
            <Campo label="WhatsApp">
              <Input
                value={editando.telefono}
                onChange={(e) => setEditando({ ...editando, telefono: e.target.value })}
                placeholder="+56 9 1234 5678"
              />
            </Campo>
            <Campo label="Correo">
              <Input
                type="email"
                value={editando.email}
                onChange={(e) => setEditando({ ...editando, email: e.target.value })}
                placeholder="contacto@negocio.cl"
              />
            </Campo>
            <Campo label="Ciudad">
              <Input
                value={editando.ciudad}
                onChange={(e) => setEditando({ ...editando, ciudad: e.target.value })}
                placeholder="Talca"
              />
            </Campo>
            <Campo label="Notas" className="sm:col-span-2">
              <Textarea
                rows={2}
                value={editando.notas}
                onChange={(e) => setEditando({ ...editando, notas: e.target.value })}
                placeholder="Cómo llegó, qué necesita, acuerdos previos…"
              />
            </Campo>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            <Boton onClick={guardar} disabled={!editando.nombre.trim()}>
              Guardar cliente
            </Boton>
            <Boton variante="secundario" onClick={() => setEditando(null)}>
              Cancelar
            </Boton>
          </div>
        </Tarjeta>
      )}

      {clientes.length === 0 && !editando ? (
        <Vacio
          titulo="Todavía no hay clientes"
          texto="Guarda aquí a cada cliente con su RUT y contacto: después el panel completa solo la cotización, el contrato y el acta de entrega."
          accion={<Boton onClick={() => setEditando(clienteVacio())}>+ Nuevo cliente</Boton>}
        />
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {clientes.map((c) => {
            const susProyectos = proyectos.filter((p) => p.clienteId === c.id)
            return (
              <Tarjeta key={c.id} className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="font-display text-base font-bold text-slate-900">{c.nombre}</h3>
                    <p className="text-sm text-slate-500">{c.rut || 'Sin RUT registrado'}</p>
                  </div>
                  <span className="flex-shrink-0 rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-600">
                    {susProyectos.length} {susProyectos.length === 1 ? 'proyecto' : 'proyectos'}
                  </span>
                </div>

                <dl className="mt-3 space-y-1 text-sm text-slate-600">
                  {c.contacto && <div>👤 {c.contacto}</div>}
                  {c.telefono && <div>📱 {c.telefono}</div>}
                  {c.email && <div>✉️ {c.email}</div>}
                  {c.ciudad && <div>📍 {c.ciudad}</div>}
                </dl>
                {c.notas && <p className="mt-3 text-sm leading-relaxed text-slate-500">{c.notas}</p>}

                <div className="mt-4 flex flex-wrap gap-2">
                  <Boton variante="secundario" onClick={() => setEditando(c)}>
                    Editar
                  </Boton>
                  <Boton variante="suave" onClick={() => irA('proyectos')}>
                    Ver proyectos
                  </Boton>
                  <Boton variante="peligro" onClick={() => borrar(c)}>
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
