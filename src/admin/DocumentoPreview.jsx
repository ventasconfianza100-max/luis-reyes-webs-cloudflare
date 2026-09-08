// Hoja imprimible del documento. Al imprimir (Ctrl+P o el botón), el CSS de
// .zona-impresion oculta el resto del panel y deja solo esta hoja tamaño carta.

export default function DocumentoPreview({ doc, ajustes }) {
  const { cliente, rut, fecha, folio } = doc.encabezado

  return (
    <article className="hoja-doc">
      <header className="hoja-doc__cabecera">
        <div>
          <p className="hoja-doc__marca">
            {ajustes.prestador}
            <span> · {ajustes.profesion}</span>
          </p>
          <p className="hoja-doc__contacto">
            RUT {ajustes.rut} · {ajustes.telefono} · {ajustes.email} · {ajustes.sitio}
          </p>
        </div>
        <span className="hoja-doc__folio">{folio}</span>
      </header>

      <h1 className="hoja-doc__titulo">{doc.titulo}</h1>
      <p className="hoja-doc__bajada">{doc.bajada}</p>

      <table className="hoja-doc__ficha">
        <thead>
          <tr>
            <th>Cliente</th>
            <th>RUT</th>
            <th>Fecha</th>
            <th>Documento</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{cliente}</td>
            <td>{rut}</td>
            <td>{fecha}</td>
            <td>{folio}</td>
          </tr>
        </tbody>
      </table>

      {doc.bloques.map((bloque, i) => (
        <Bloque key={i} bloque={bloque} />
      ))}

      {doc.pie && <p className="hoja-doc__nota-legal">{doc.pie}</p>}

      <footer className="hoja-doc__pie">
        {ajustes.prestador} · {ajustes.telefono} · {ajustes.sitio}
        {ajustes.ciudad ? ` · ${ajustes.ciudad}` : ''}
      </footer>
    </article>
  )
}

function Bloque({ bloque }) {
  if (bloque.t === 'seccion') return <h2 className="hoja-doc__seccion">{bloque.titulo}</h2>

  if (bloque.t === 'parrafo') return <p className="hoja-doc__parrafo">{bloque.texto}</p>

  if (bloque.t === 'lista')
    return (
      <ul className="hoja-doc__lista">
        {bloque.items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    )

  if (bloque.t === 'tabla')
    return (
      <table className="hoja-doc__tabla">
        <thead>
          <tr>
            {bloque.columnas.map((c) => (
              <th key={c}>{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {bloque.filas.map((fila, i) => (
            <tr key={i} className={bloque.destacar && fila[0] === bloque.destacar ? 'es-destacada' : ''}>
              {fila.map((celda, j) => (
                <td key={j}>{celda}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    )

  if (bloque.t === 'campos')
    return (
      <dl className="hoja-doc__campos">
        {bloque.items.map((item, i) => (
          <div key={i}>
            <dt>{item.label}</dt>
            <dd>{item.valor || ''}</dd>
          </div>
        ))}
      </dl>
    )

  if (bloque.t === 'nota') return <p className="hoja-doc__nota">{bloque.texto}</p>

  if (bloque.t === 'firmas')
    return (
      <div className="hoja-doc__firmas">
        {bloque.titulo && <h2 className="hoja-doc__seccion">{bloque.titulo}</h2>}
        {bloque.columnas.map((fila, i) => (
          <div key={i} className="hoja-doc__firma-fila">
            {fila.map((celda, j) => (
              <span key={j}>{celda}</span>
            ))}
          </div>
        ))}
      </div>
    )

  return null
}
