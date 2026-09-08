// Plantillas de los documentos comerciales. Cada una devuelve una estructura de
// bloques que DocumentoPreview sabe pintar (y documentoATexto sabe convertir a
// texto plano para pegar en WhatsApp o correo).
//
// Regla de negocio: todos los montos se expresan como LÍQUIDOS, es decir, lo que
// hay que recibir después de la retención. La boleta de honorarios se emite por
// el bruto equivalente.

import { formatCLP, formatFecha, desdeLiquido, tasaRetencion, porcentaje } from './honorarios.js'

export const TIPOS_DOCUMENTO = [
  { id: 'cotizacion-web', nombre: 'Cotización · Página web', prefijo: 'LRW', icono: '📄' },
  { id: 'cotizacion-planes', nombre: 'Cotización · Planes web', prefijo: 'LRW-PLANES', icono: '📊' },
  { id: 'cotizacion-tienda', nombre: 'Cotización · Tienda online', prefijo: 'LRW-TIENDA', icono: '🛒' },
  { id: 'mantencion', nombre: 'Plan de mantención web', prefijo: 'LRW-MANT', icono: '🔧' },
  { id: 'contrato', nombre: 'Acuerdo de prestación de servicios', prefijo: 'LRW-CONTRATO', icono: '📝' },
  { id: 'ficha', nombre: 'Ficha inicial del cliente', prefijo: 'LRW-BRIEF', icono: '📋' },
  { id: 'acta', nombre: 'Acta de entrega y conformidad', prefijo: 'LRW-ENTREGA', icono: '✅' },
]

const liq = (monto) => `${formatCLP(monto)} líquidos`

// "$60.000 al iniciar + $60.000 antes de publicar"
function condicionPago(proyecto) {
  const cuotas = Math.max(1, Number(proyecto.cuotas) || 1)
  if (cuotas === 1) return 'Pago único al aceptar la propuesta'
  const base = Math.floor(proyecto.monto / cuotas)
  const primera = formatCLP(base)
  const ultima = formatCLP(proyecto.monto - base * (cuotas - 1))
  if (cuotas === 2) return `${primera} al iniciar + ${ultima} antes de publicar`
  return `${cuotas} cuotas: ${primera} cada una (la última de ${ultima})`
}

function encabezado(cliente, proyecto, folio) {
  return {
    cliente: cliente?.nombre || '[Nombre o razón social]',
    rut: cliente?.rut || '[RUT]',
    fecha: formatFecha(proyecto.fecha) || '[dd/mm/aaaa]',
    folio: folio || proyecto.folio || '[N°]',
  }
}

// Permite reemplazar la lista por defecto escribiendo una por línea en el proyecto.
const listaPersonalizada = (texto, porDefecto) => {
  const items = String(texto || '')
    .split('\n')
    .map((l) => l.replace(/^[-•·*]\s*/, '').trim())
    .filter(Boolean)
  return items.length ? items : porDefecto
}

const condicionesBase = (proyecto, ajustes) => [
  `Plazo estimado: ${proyecto.plazoDias || '10 a 20'} días hábiles, contado desde la recepción completa del contenido y el abono inicial.`,
  'Valores expresados como montos líquidos a recibir. Se emitirá boleta de honorarios electrónica.',
  'El cliente entrega textos, imágenes, accesos y datos necesarios, salvo que esta propuesta indique lo contrario.',
  'Cambios fuera del alcance se cotizan previamente y solo se ejecutan con aprobación del cliente.',
  `Vigencia de esta cotización: ${ajustes.vigenciaDias || 15} días corridos.`,
]

const FIRMA_ACEPTACION = {
  t: 'firmas',
  titulo: 'Aceptación',
  columnas: [
    ['Nombre: ____________________________', 'RUT: ____________________'],
    ['Firma: _____________________________', 'Fecha: __________________'],
  ],
}

function sumarDias(iso, dias) {
  const base = new Date(`${String(iso).slice(0, 10)}T12:00:00`)
  if (Number.isNaN(base.getTime())) return iso
  base.setDate(base.getDate() + Number(dias || 0))
  const mes = String(base.getMonth() + 1).padStart(2, '0')
  const dia = String(base.getDate()).padStart(2, '0')
  return `${base.getFullYear()}-${mes}-${dia}`
}

function cotizacionWeb(cliente, proyecto, ajustes, folio) {
  const incluye = listaPersonalizada(proyecto.incluye, [
    'Diseño visual personalizado y adaptable a celular, tablet y computador.',
    'Estructura de inicio, servicios, acerca de, contacto y secciones acordadas.',
    'Botón de WhatsApp y formulario de contacto.',
    'Configuración inicial de dominio, publicación y seguridad HTTPS.',
    'SEO básico: títulos, descripciones, estructura y sitemap.',
    `${proyecto.rondas || 2} rondas de ajustes sobre la propuesta presentada.`,
  ])

  return {
    titulo: 'Cotización · Página web personalizada',
    bajada: 'Una presencia digital clara, profesional y preparada para convertir visitas en contactos.',
    encabezado: encabezado(cliente, proyecto, folio),
    bloques: [
      { t: 'seccion', titulo: 'Objetivo del proyecto' },
      {
        t: 'parrafo',
        texto:
          proyecto.objetivo ||
          '[Descripción breve del negocio, público y resultado que se busca conseguir con la página.]',
      },
      { t: 'seccion', titulo: 'Incluye' },
      { t: 'lista', items: incluye },
      { t: 'seccion', titulo: 'Inversión' },
      {
        t: 'tabla',
        columnas: ['Concepto', 'Monto', 'Condición'],
        filas: [
          ['Diseño y desarrollo de página web', liq(proyecto.monto), condicionPago(proyecto)],
          ...(proyecto.mantencion > 0
            ? [
                [
                  'Mantención mensual opcional',
                  liq(proyecto.mantencion),
                  'Se cobra desde el mes siguiente a la entrega',
                ],
              ]
            : []),
        ],
      },
      { t: 'seccion', titulo: 'Condiciones comerciales' },
      { t: 'lista', items: condicionesBase(proyecto, ajustes) },
      FIRMA_ACEPTACION,
    ],
  }
}

function cotizacionPlanes(cliente, proyecto, ajustes, folio) {
  return {
    titulo: 'Cotización · Planes web',
    bajada: 'Tres niveles de inversión según el momento y las necesidades del negocio.',
    encabezado: encabezado(cliente, proyecto, folio),
    bloques: [
      { t: 'seccion', titulo: 'Alternativas' },
      {
        t: 'tabla',
        columnas: ['Concepto', 'Monto', 'Condición'],
        filas: [
          ['Plan Esencial', liq(90000), 'Landing page, WhatsApp, formulario, SEO básico y publicación'],
          ['Plan Profesional', liq(190000), '3-4 secciones, textos, SEO local, blog y contacto'],
          [
            'Plan Premium',
            liq(320000),
            'Sitio multipágina, integraciones, copy, SEO avanzado y 1 mes de soporte',
          ],
        ],
        destacar: proyecto.plan,
      },
      { t: 'seccion', titulo: 'Incluido en todos los planes' },
      {
        t: 'lista',
        items: [
          'Diseño adaptable a dispositivos móviles.',
          'Atención directa, sin intermediarios.',
          'Reunión inicial y revisión del avance.',
          'Publicación y boleta de honorarios electrónica.',
        ],
      },
      { t: 'seccion', titulo: 'Forma de pago' },
      {
        t: 'parrafo',
        texto:
          '50% para reservar e iniciar el proyecto y 50% antes de la publicación definitiva. Si el alcance cambia, se entrega una actualización por escrito antes de continuar.',
      },
      { t: 'seccion', titulo: 'Condiciones comerciales' },
      {
        t: 'lista',
        items: [
          ...condicionesBase(proyecto, ajustes).slice(0, 2),
          'Solicitudes fuera del alcance se cotizan antes de ejecutarse.',
          `Vigencia de esta cotización: ${ajustes.vigenciaDias || 15} días corridos.`,
          'La contratación se confirma mediante aceptación escrita y pago del abono inicial.',
        ],
      },
    ],
  }
}

function cotizacionTienda(cliente, proyecto, ajustes, folio) {
  const solucion = listaPersonalizada(proyecto.incluye, [
    'Catálogo organizado por categorías y productos.',
    'Buscador, filtros y fichas de producto.',
    'Carrito de compras o solicitud directa por WhatsApp.',
    'Panel de administración para gestionar productos, precios y stock, si se contrata.',
    'Configuración de dominio, seguridad y publicación.',
    'Integración de pagos o envíos cotizada según proveedor y requisitos técnicos.',
  ])

  return {
    titulo: 'Cotización · Tienda online o catálogo',
    bajada: 'Una plataforma propia para ordenar productos, recibir pedidos y facilitar la compra.',
    encabezado: encabezado(cliente, proyecto, folio),
    bloques: [
      { t: 'seccion', titulo: 'Solución propuesta' },
      { t: 'lista', items: solucion },
      { t: 'seccion', titulo: 'Inversión' },
      {
        t: 'tabla',
        columnas: ['Concepto', 'Monto', 'Condición'],
        filas: [
          ['Diseño y desarrollo base', liq(proyecto.monto), condicionPago(proyecto)],
          ...(proyecto.mantencion > 0
            ? [
                [
                  'Mantención y soporte',
                  `${liq(proyecto.mantencion)}/mes`,
                  'Alcance definido en plan de mantención',
                ],
              ]
            : []),
        ],
      },
      { t: 'seccion', titulo: 'No incluido salvo indicación expresa' },
      {
        t: 'lista',
        items: [
          'Comisiones de Webpay u otros medios de pago.',
          'Tarifas de empresas de despacho.',
          'Compra o renovación del dominio.',
          'Fotografía profesional y carga masiva no indicada.',
        ],
      },
      { t: 'seccion', titulo: 'Condiciones comerciales' },
      {
        t: 'lista',
        items: [
          `Plazo estimado: ${proyecto.plazoDias || '20 a 40'} días hábiles, contado desde la recepción completa del contenido y el abono inicial.`,
          ...condicionesBase(proyecto, ajustes).slice(1),
        ],
      },
      FIRMA_ACEPTACION,
    ],
  }
}

function planMantencion(cliente, proyecto, ajustes, folio) {
  const monto = proyecto.mantencion || 10000
  return {
    titulo: 'Plan de mantención web',
    bajada: 'Soporte mensual para mantener el sitio operativo, actualizado y acompañado.',
    encabezado: encabezado(cliente, proyecto, folio),
    bloques: [
      { t: 'seccion', titulo: `Plan básico · ${liq(monto)} al mes` },
      {
        t: 'lista',
        items: [
          'Revisión general del funcionamiento del sitio.',
          'Cambios menores de textos, fotografías, horarios o datos de contacto.',
          'Respaldo o control técnico según la infraestructura del proyecto.',
          'Soporte por WhatsApp dentro de horario laboral.',
          'Prioridad frente a solicitudes aisladas.',
        ],
      },
      { t: 'seccion', titulo: 'Límites del servicio' },
      {
        t: 'lista',
        items: [
          'Hasta 30 minutos de cambios menores por mes; el tiempo no utilizado no se acumula.',
          'No incluye nuevas secciones, rediseños, funciones, integraciones ni carga masiva.',
          'Trabajos adicionales se cotizan y aprueban antes de ejecutarse.',
          'Servicios externos, dominio, correo y plataformas de terceros se pagan por separado.',
        ],
      },
      { t: 'seccion', titulo: 'Pago y continuidad' },
      {
        t: 'parrafo',
        texto:
          'El pago se realiza mensualmente contra boleta de honorarios electrónica. Cualquiera de las partes puede terminar el plan avisando con 15 días de anticipación. Las urgencias y tiempos de respuesta especiales deben acordarse por escrito.',
      },
      {
        t: 'firmas',
        titulo: 'Aceptación',
        columnas: [['Cliente: ____________________', 'Firma: ____________________', 'Fecha: ____________']],
      },
    ],
  }
}

function contrato(cliente, proyecto, ajustes, folio) {
  const cuotas = Math.max(1, Number(proyecto.cuotas) || 1)
  const base = Math.floor(proyecto.monto / cuotas)
  const formaPago =
    cuotas === 1
      ? 'pago único al aceptar la propuesta'
      : `${formatCLP(base)} al iniciar y ${formatCLP(
          proyecto.monto - base * (cuotas - 1)
        )} antes de la publicación`

  return {
    titulo: 'Acuerdo de prestación de servicios web',
    bajada: 'Documento base para formalizar alcance, pagos, responsabilidades y entrega.',
    encabezado: encabezado(cliente, proyecto, folio),
    bloques: [
      { t: 'seccion', titulo: '1. Partes' },
      {
        t: 'parrafo',
        texto: `Prestador: ${ajustes.prestador}, RUT ${ajustes.rut}, en adelante “el Prestador”. Cliente: ${
          cliente?.nombre || '[nombre/razón social]'
        }, RUT ${cliente?.rut || '[RUT]'}, en adelante “el Cliente”.`,
      },
      { t: 'seccion', titulo: '2. Servicio y alcance' },
      {
        t: 'parrafo',
        texto: `El Prestador desarrollará ${
          proyecto.objetivo || proyecto.nombre || '[descripción del proyecto]'
        } conforme a la cotización N.° ${
          proyecto.folio || folio || '[N°]'
        }, que se entiende incorporada a este acuerdo. Todo elemento no descrito se considera fuera de alcance y requiere cotización adicional.`,
      },
      { t: 'seccion', titulo: '3. Precio y pagos' },
      {
        t: 'parrafo',
        texto: `Precio total: ${liq(
          proyecto.monto
        )}. Forma de pago: ${formaPago}. Cada pago será respaldado mediante boleta de honorarios electrónica emitida por el monto bruto equivalente. El trabajo comienza una vez recibido el abono inicial.`,
      },
      { t: 'seccion', titulo: '4. Plazos y colaboración' },
      {
        t: 'parrafo',
        texto: `Plazo estimado: ${
          proyecto.plazoDias || '10 a 20'
        } días hábiles desde que el Cliente entregue el contenido y accesos solicitados. Los retrasos del Cliente suspenden proporcionalmente el calendario. Las fechas de terceros no dependen del Prestador.`,
      },
      { t: 'seccion', titulo: '5. Revisiones y cambios' },
      {
        t: 'parrafo',
        texto: `Se incluyen ${
          proyecto.rondas || 2
        } rondas de revisión. Una ronda corresponde a una lista consolidada de observaciones. Cambios estructurales, nuevas funciones o solicitudes posteriores a la aprobación se cotizan por separado.`,
      },
      { t: 'seccion', titulo: '6. Propiedad, accesos y publicación' },
      {
        t: 'parrafo',
        texto:
          'Una vez pagado el total, el Cliente recibe acceso y derecho de uso sobre el sitio entregado. Licencias, tipografías, fotografías y servicios de terceros conservan sus términos. El Prestador puede mostrar el proyecto en su portafolio, salvo acuerdo escrito distinto.',
      },
      { t: 'seccion', titulo: '7. Garantía y mantención' },
      {
        t: 'parrafo',
        texto: `Durante ${
          proyecto.garantiaDias || 30
        } días posteriores a la entrega se corregirán sin costo errores atribuibles al desarrollo entregado. La garantía no cubre cambios del Cliente, terceros, credenciales comprometidas o nuevas necesidades. La mantención posterior es opcional y se contrata separadamente.`,
      },
      { t: 'seccion', titulo: '8. Terminación' },
      {
        t: 'parrafo',
        texto:
          'Si el Cliente desiste después de iniciado el trabajo, el abono remunera la reserva, planificación y avance realizado y no es reembolsable en la medida correspondiente al trabajo efectivamente ejecutado. Las partes procurarán dejar por escrito el estado y los archivos entregables.',
      },
      {
        t: 'firmas',
        titulo: 'Firmas',
        columnas: [
          [`Cliente: ${cliente?.nombre || '__________________________'}`, `Prestador: ${ajustes.prestador}`],
          ['Firma: ___________________________', 'Firma: ______________________________'],
          ['Fecha: ___________________________', 'Fecha: ______________________________'],
        ],
      },
    ],
  }
}

function fichaInicial(cliente, proyecto, ajustes, folio) {
  const campo = (label, valor) => ({ label, valor: valor || '' })
  return {
    titulo: 'Ficha inicial del proyecto',
    bajada: 'Información necesaria para diseñar una web alineada con el negocio y evitar retrasos.',
    encabezado: encabezado(cliente, proyecto, folio),
    bloques: [
      { t: 'seccion', titulo: 'Datos del negocio' },
      {
        t: 'campos',
        items: [
          campo('Nombre comercial', cliente?.nombre),
          campo('RUT / razón social', cliente?.rut),
          campo('Persona de contacto', cliente?.contacto),
          campo('WhatsApp y correo', [cliente?.telefono, cliente?.email].filter(Boolean).join(' · ')),
          campo('Ciudad y zona de atención', cliente?.ciudad),
        ],
      },
      { t: 'seccion', titulo: 'Objetivo y clientes' },
      {
        t: 'campos',
        items: [
          campo('¿Qué debería lograr la página?', proyecto.objetivo),
          campo('¿Quién es el cliente ideal?'),
          campo('¿Qué problema resuelve el negocio?'),
          campo('¿Cuál es el principal llamado a la acción?'),
        ],
      },
      { t: 'seccion', titulo: 'Contenido y estructura' },
      {
        t: 'campos',
        items: [
          campo('Servicios o productos principales'),
          campo('Secciones necesarias'),
          campo('Páginas de referencia que le gustan'),
          campo('Textos, logotipo y fotografías disponibles'),
        ],
      },
      { t: 'seccion', titulo: 'Funciones' },
      {
        t: 'campos',
        items: [
          campo('WhatsApp / formulario / agenda'),
          campo('Catálogo / carrito / pagos'),
          campo('Panel de administración'),
          campo('Otras integraciones'),
        ],
      },
      { t: 'seccion', titulo: 'Accesos y fechas' },
      {
        t: 'campos',
        items: [
          campo('Dominio y proveedor'),
          campo('Redes sociales'),
          campo('Fecha deseada de publicación'),
          campo('Responsable de aprobar avances'),
        ],
      },
      {
        t: 'nota',
        texto: 'La información de esta ficha orientará la propuesta y deberá validarse en la cotización final.',
      },
    ],
  }
}

function actaEntrega(cliente, proyecto, ajustes, folio) {
  const hasta = proyecto.fecha
    ? `Hasta: ${formatFecha(sumarDias(proyecto.fecha, proyecto.garantiaDias || 30))}`
    : 'Hasta: [dd/mm/aaaa]'

  return {
    titulo: 'Acta de entrega y conformidad',
    bajada: 'Registro final de publicación, accesos, pendientes y aprobación del proyecto.',
    encabezado: encabezado(cliente, proyecto, folio),
    bloques: [
      { t: 'seccion', titulo: 'Proyecto entregado' },
      {
        t: 'tabla',
        columnas: ['Concepto', 'Detalle', 'Referencia'],
        filas: [
          ['Sitio / sistema', proyecto.nombre || '[Nombre del proyecto]', proyecto.url || 'URL: [enlace]'],
          ['Fecha de publicación', formatFecha(proyecto.fecha) || '[dd/mm/aaaa]', 'Versión: 1'],
          ['Garantía técnica', `${proyecto.garantiaDias || 30} días`, hasta],
        ],
      },
      { t: 'seccion', titulo: 'Elementos entregados' },
      {
        t: 'lista',
        items: [
          'Sitio publicado y revisado en computador y celular.',
          'Dominio y certificado de seguridad configurados.',
          'Formularios, WhatsApp y enlaces principales probados.',
          'Credenciales o invitaciones administrativas entregadas de forma segura.',
          'Indicaciones básicas de uso explicadas al Cliente.',
        ],
      },
      { t: 'seccion', titulo: 'Accesos y responsables' },
      {
        t: 'campos',
        items: [
          { label: 'Dominio', valor: '[proveedor / titular]' },
          { label: 'Hosting o plataforma', valor: '[proveedor / titular]' },
          { label: 'Panel administrador', valor: cliente?.email || '[correo autorizado]' },
        ],
      },
      {
        t: 'nota',
        texto: 'Importante: no escribir contraseñas en esta acta; entregarlas mediante un canal seguro.',
      },
      { t: 'seccion', titulo: 'Pendientes acordados' },
      {
        t: 'parrafo',
        texto: proyecto.notas || '[Sin pendientes / detallar responsable y fecha de cada pendiente.]',
      },
      { t: 'seccion', titulo: 'Conformidad' },
      {
        t: 'parrafo',
        texto:
          'El Cliente declara haber revisado la entrega y recibirla conforme, sin perjuicio de la garantía técnica indicada. Nuevas funciones o cambios posteriores serán evaluados y cotizados por separado.',
      },
      {
        t: 'firmas',
        titulo: '',
        columnas: [
          [
            `Cliente: ${cliente?.nombre || '__________________________'}`,
            'Firma: __________________',
            'Fecha: __________',
          ],
          [`Prestador: ${ajustes.prestador}`, 'Firma: __________________', 'Fecha: __________'],
        ],
      },
    ],
  }
}

const GENERADORES = {
  'cotizacion-web': cotizacionWeb,
  'cotizacion-planes': cotizacionPlanes,
  'cotizacion-tienda': cotizacionTienda,
  mantencion: planMantencion,
  contrato,
  ficha: fichaInicial,
  acta: actaEntrega,
}

export function construirDocumento(tipoId, { cliente, proyecto, ajustes, folio }) {
  const generar = GENERADORES[tipoId] || cotizacionWeb
  const doc = generar(cliente, proyecto, ajustes, folio)
  return { ...doc, tipoId, pie: pieDeDocumento(tipoId, proyecto, ajustes) }
}

// Nota al pie: deja explícito el bruto de la boleta, para que el cliente que
// retiene sepa exactamente qué monto va a ver en el documento tributario.
function pieDeDocumento(tipoId, proyecto, ajustes) {
  if (tipoId === 'ficha' || tipoId === 'acta') return null
  const monto = tipoId === 'mantencion' ? proyecto.mantencion : proyecto.monto
  if (!monto) return null
  const tasa = tasaRetencion(ajustes.anioRetencion)
  const { bruto, retencion } = desdeLiquido(monto, tasa)
  return `Los valores indicados son líquidos. La boleta de honorarios electrónica se emite por ${formatCLP(
    bruto
  )} brutos, con una retención de ${formatCLP(retencion)} (${porcentaje(
    tasa
  )}) que el cliente entera al SII cuando corresponde.`
}

// Versión en texto plano para pegar en WhatsApp o correo.
export function documentoATexto(doc, ajustes) {
  const lineas = [doc.titulo.toUpperCase(), doc.bajada, '']
  const { cliente, rut, fecha, folio } = doc.encabezado
  lineas.push(`Cliente: ${cliente}   RUT: ${rut}`, `Fecha: ${fecha}   Documento: ${folio}`)

  for (const b of doc.bloques) {
    if (b.t === 'seccion') lineas.push('', b.titulo.toUpperCase())
    else if (b.t === 'parrafo') lineas.push(b.texto)
    else if (b.t === 'lista') b.items.forEach((i) => lineas.push(`• ${i}`))
    else if (b.t === 'tabla') b.filas.forEach((f) => lineas.push(`• ${f.filter(Boolean).join(' — ')}`))
    else if (b.t === 'campos') b.items.forEach((i) => lineas.push(`${i.label}: ${i.valor || '______'}`))
    else if (b.t === 'nota') lineas.push(b.texto)
    else if (b.t === 'firmas') {
      if (b.titulo) lineas.push('', b.titulo.toUpperCase())
      b.columnas.forEach((fila) => lineas.push(fila.join('    ')))
    }
  }

  if (doc.pie) lineas.push('', doc.pie)
  lineas.push('', `${ajustes.prestador} · ${ajustes.telefono} · ${ajustes.sitio}`)
  return lineas.join('\n')
}
