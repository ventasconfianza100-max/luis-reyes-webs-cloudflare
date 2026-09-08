import { useRef, useState } from 'react'
import { ESTADO_INICIAL, importarJSON } from './store.js'
import { RETENCION_POR_ANIO, hoyISO, porcentaje, tasaRetencion } from './honorarios.js'
import { Boton, Campo, Encabezado, Input, Select, Tarjeta } from './ui.jsx'

export default function PanelAjustes({ estado, api }) {
  const { ajustes } = estado
  const [aviso, setAviso] = useState('')
  const archivoRef = useRef(null)

  const set = (campo) => (e) => api.guardarAjustes({ ...ajustes, [campo]: e.target.value })
  const setNum = (campo) => (e) => api.guardarAjustes({ ...ajustes, [campo]: Number(e.target.value) || 0 })

  const mostrar = (texto) => {
    setAviso(texto)
    window.setTimeout(() => setAviso(''), 3000)
  }

  const exportar = () => {
    const blob = new Blob([JSON.stringify(estado, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `respaldo-panel-lrw-${hoyISO()}.json`
    a.click()
    URL.revokeObjectURL(url)
    mostrar('Respaldo descargado.')
  }

  const importar = (evento) => {
    const archivo = evento.target.files?.[0]
    if (!archivo) return
    const lector = new FileReader()
    lector.onload = () => {
      try {
        const datos = importarJSON(String(lector.result))
        if (!window.confirm('Esto reemplaza los datos actuales del panel por los del respaldo. ¿Continuar?')) return
        api.setEstado(datos)
        mostrar('Respaldo restaurado.')
      } catch {
        mostrar('El archivo no tiene el formato esperado.')
      }
    }
    lector.readAsText(archivo)
    evento.target.value = ''
  }

  const borrarTodo = () => {
    if (!window.confirm('Se borrarán clientes, proyectos y boletas de este navegador. ¿Seguro?')) return
    api.setEstado({ ...ESTADO_INICIAL, ajustes })
    mostrar('Datos borrados.')
  }

  return (
    <div className="space-y-6">
      <Encabezado
        titulo="Ajustes"
        texto="Tus datos como prestador, la retención vigente y el respaldo de la información del panel."
      />

      <Tarjeta className="p-5">
        <h2 className="font-display text-base font-bold text-slate-900">Datos del prestador</h2>
        <p className="mt-0.5 text-sm text-slate-500">Aparecen en la cabecera y el pie de cada documento.</p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <Campo label="Nombre completo">
            <Input value={ajustes.prestador} onChange={set('prestador')} />
          </Campo>
          <Campo label="RUT">
            <Input value={ajustes.rut} onChange={set('rut')} />
          </Campo>
          <Campo label="Actividad">
            <Input value={ajustes.profesion} onChange={set('profesion')} />
          </Campo>
          <Campo label="Ciudad">
            <Input value={ajustes.ciudad} onChange={set('ciudad')} />
          </Campo>
          <Campo label="Correo">
            <Input value={ajustes.email} onChange={set('email')} />
          </Campo>
          <Campo label="WhatsApp">
            <Input value={ajustes.telefono} onChange={set('telefono')} />
          </Campo>
          <Campo label="Sitio web">
            <Input value={ajustes.sitio} onChange={set('sitio')} />
          </Campo>
        </div>
      </Tarjeta>

      <Tarjeta className="p-5">
        <h2 className="font-display text-base font-bold text-slate-900">Boletas y documentos</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <Campo
            label="Año de la retención"
            ayuda={`Tasa aplicada: ${porcentaje(tasaRetencion(ajustes.anioRetencion))}`}
          >
            <Select value={ajustes.anioRetencion} onChange={setNum('anioRetencion')}>
              {Object.keys(RETENCION_POR_ANIO).map((a) => (
                <option key={a} value={a}>
                  {a} — {porcentaje(RETENCION_POR_ANIO[a])}
                </option>
              ))}
            </Select>
          </Campo>
          <Campo label="Vigencia de las cotizaciones (días)">
            <Input type="number" min="1" value={ajustes.vigenciaDias} onChange={setNum('vigenciaDias')} />
          </Campo>
          <Campo label="Próximo correlativo" ayuda="Se usa al sugerir el folio de un documento nuevo.">
            <Input type="number" min="1" value={ajustes.correlativo} onChange={setNum('correlativo')} />
          </Campo>
        </div>
        <p className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          La retención sube de forma gradual hasta el 17% en 2028. Si el cliente es una empresa que retiene, te
          deposita el líquido y paga la retención al SII; si no retiene, recibes el bruto y debes reservar esa
          diferencia para la Operación Renta.
        </p>
      </Tarjeta>

      <Tarjeta className="p-5">
        <h2 className="font-display text-base font-bold text-slate-900">Respaldo de los datos</h2>
        <p className="mt-0.5 text-sm text-slate-500">
          Todo lo que guardas en el panel vive en este navegador (localStorage): no se envía a ningún servidor ni
          viaja a internet. Si limpias los datos del navegador o cambias de computador, restaura desde el archivo de
          respaldo.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <Boton onClick={exportar}>Descargar respaldo (.json)</Boton>
          <Boton variante="secundario" onClick={() => archivoRef.current?.click()}>
            Restaurar desde archivo
          </Boton>
          <input ref={archivoRef} type="file" accept="application/json" onChange={importar} className="hidden" />
          <Boton variante="peligro" onClick={borrarTodo}>
            Borrar todos los datos
          </Boton>
          {aviso && <span className="text-sm font-semibold text-emerald-600">{aviso}</span>}
        </div>
        <p className="mt-3 text-xs text-slate-400">
          Esta dirección no está enlazada en el sitio y se marca como no indexable, pero es pública: no guardes aquí
          contraseñas ni claves de acceso de clientes.
        </p>
      </Tarjeta>
    </div>
  )
}
