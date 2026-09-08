import { useEffect, useMemo, useState } from 'react'
import { TIPOS_DOCUMENTO, construirDocumento, documentoATexto } from './documentos.js'
import { nombreCliente, siguienteFolio } from './store.js'
import { Boton, Campo, Encabezado, Input, Select, Tarjeta, Vacio } from './ui.jsx'
import DocumentoPreview from './DocumentoPreview.jsx'

export default function PanelDocumentos({ estado, api, irA }) {
  const { proyectos, clientes, ajustes } = estado
  const [proyectoId, setProyectoId] = useState(proyectos[0]?.id || '')
  const [tipoId, setTipoId] = useState('cotizacion-web')
  const [folio, setFolio] = useState('')
  const [aviso, setAviso] = useState('')

  const proyecto = proyectos.find((p) => p.id === proyectoId) || proyectos[0]
  const cliente = clientes.find((c) => c.id === proyecto?.clienteId)
  const tipo = TIPOS_DOCUMENTO.find((t) => t.id === tipoId)

  // El folio se sugiere según el tipo: las cotizaciones reutilizan el del
  // proyecto; los demás documentos usan su propio prefijo.
  useEffect(() => {
    if (!proyecto || !tipo) return
    setFolio(
      tipo.prefijo === 'LRW'
        ? proyecto.folio || siguienteFolio('LRW', ajustes.correlativo, ajustes.anioRetencion)
        : siguienteFolio(tipo.prefijo, ajustes.correlativo, ajustes.anioRetencion)
    )
  }, [proyectoId, tipoId, proyecto?.folio, ajustes.correlativo, ajustes.anioRetencion])

  const doc = useMemo(
    () => (proyecto ? construirDocumento(tipoId, { cliente, proyecto, ajustes, folio }) : null),
    [tipoId, cliente, proyecto, ajustes, folio]
  )

  const mostrar = (texto) => {
    setAviso(texto)
    window.setTimeout(() => setAviso(''), 2500)
  }

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(documentoATexto(doc, ajustes))
      mostrar('Texto copiado: pégalo en WhatsApp o en un correo.')
    } catch {
      mostrar('No se pudo copiar. Usa "Imprimir / Guardar PDF".')
    }
  }

  const enviarWhatsApp = () => {
    const numero = String(cliente?.telefono || '').replace(/\D/g, '')
    const texto = encodeURIComponent(documentoATexto(doc, ajustes))
    const url = numero ? `https://wa.me/${numero}?text=${texto}` : `https://wa.me/?text=${texto}`
    window.open(url, '_blank', 'noopener')
  }

  if (proyectos.length === 0) {
    return (
      <div className="space-y-6">
        <Encabezado
          titulo="Documentos"
          texto="Cotización, contrato, ficha inicial, plan de mantención y acta de entrega, listos para imprimir o mandar por WhatsApp."
        />
        <Vacio
          titulo="Necesitas un proyecto"
          texto="Los documentos se arman con los datos del cliente y del proyecto: crea uno y vuelve aquí."
          accion={<Boton onClick={() => irA('proyectos')}>Ir a proyectos</Boton>}
        />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="no-imprimir space-y-5">
        <Encabezado
          titulo="Documentos"
          texto="Elige proyecto y tipo de documento: se completa solo con los datos guardados y queda listo para PDF."
        />

        <Tarjeta className="p-5">
          <div className="grid gap-4 sm:grid-cols-3">
            <Campo label="Proyecto">
              <Select value={proyecto?.id || ''} onChange={(e) => setProyectoId(e.target.value)}>
                {proyectos.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.nombre || 'Sin nombre'} — {nombreCliente(clientes, p.clienteId)}
                  </option>
                ))}
              </Select>
            </Campo>
            <Campo label="Tipo de documento">
              <Select value={tipoId} onChange={(e) => setTipoId(e.target.value)}>
                {TIPOS_DOCUMENTO.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.icono} {t.nombre}
                  </option>
                ))}
              </Select>
            </Campo>
            <Campo label="Folio" ayuda="Puedes editarlo antes de imprimir.">
              <Input value={folio} onChange={(e) => setFolio(e.target.value)} />
            </Campo>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-2">
            <Boton onClick={() => window.print()}>🖨️ Imprimir / Guardar PDF</Boton>
            <Boton variante="secundario" onClick={copiar}>
              Copiar como texto
            </Boton>
            <Boton variante="secundario" onClick={enviarWhatsApp}>
              Enviar por WhatsApp
            </Boton>
            {aviso && <span className="text-sm font-semibold text-emerald-600">{aviso}</span>}
          </div>

          <p className="mt-3 text-xs text-slate-400">
            En el diálogo de impresión elige “Guardar como PDF”. Sale una hoja A4 con tus datos, sin la interfaz
            del panel.
          </p>
        </Tarjeta>
      </div>

      <div className="zona-impresion overflow-x-auto pb-4">{doc && <DocumentoPreview doc={doc} ajustes={ajustes} />}</div>
    </div>
  )
}
