// Estado del panel. Todo vive en el navegador (localStorage): no hay servidor
// ni base de datos, así que los datos de clientes nunca salen de este equipo.
// El respaldo se hace exportando/importando el JSON desde Ajustes.

import { ANIO_ACTUAL, hoyISO } from './honorarios.js'

export const CLAVE_ALMACEN = 'lrw-admin-v1'

export const AJUSTES_INICIALES = {
  prestador: 'Luis Fernando Reyes Castro',
  rut: '20.171.111-8',
  profesion: 'Diseño y desarrollo web',
  email: 'contacto@luisreyesweb.cl',
  telefono: '+56 9 2201 2534',
  sitio: 'www.luisreyesweb.cl',
  ciudad: 'Talca, Región del Maule',
  anioRetencion: ANIO_ACTUAL,
  vigenciaDias: 15,
  correlativo: 1,
}

export const ESTADO_INICIAL = {
  ajustes: { ...AJUSTES_INICIALES },
  clientes: [],
  proyectos: [],
  boletas: [],
}

export const TIPOS_PROYECTO = [
  { id: 'web', nombre: 'Página web', monto: 120000, mantencion: 10000 },
  { id: 'plan', nombre: 'Plan web (Esencial / Profesional / Premium)', monto: 190000, mantencion: 10000 },
  { id: 'tienda', nombre: 'Tienda online o catálogo', monto: 320000, mantencion: 15000 },
  { id: 'software', nombre: 'Software o aplicación a medida', monto: 0, mantencion: 0 },
]

export const ESTADOS_PROYECTO = [
  { id: 'cotizado', nombre: 'Cotizado', color: 'bg-amber-100 text-amber-700' },
  { id: 'aceptado', nombre: 'Aceptado', color: 'bg-blue-100 text-blue-700' },
  { id: 'desarrollo', nombre: 'En desarrollo', color: 'bg-violet-100 text-violet-700' },
  { id: 'entregado', nombre: 'Entregado', color: 'bg-emerald-100 text-emerald-700' },
  { id: 'mantencion', nombre: 'En mantención', color: 'bg-teal-100 text-teal-700' },
  { id: 'cerrado', nombre: 'Cerrado', color: 'bg-slate-100 text-slate-600' },
]

export const ESTADOS_BOLETA = [
  { id: 'pendiente', nombre: 'Por emitir', color: 'bg-amber-100 text-amber-700' },
  { id: 'emitida', nombre: 'Emitida', color: 'bg-blue-100 text-blue-700' },
  { id: 'pagada', nombre: 'Pagada', color: 'bg-emerald-100 text-emerald-700' },
]

export function nuevoId() {
  return `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 7)}`
}

export function clienteVacio() {
  return {
    id: nuevoId(),
    nombre: '',
    rut: '',
    contacto: '',
    telefono: '',
    email: '',
    ciudad: '',
    notas: '',
    creado: hoyISO(),
  }
}

export function proyectoVacio(clienteId = '') {
  return {
    id: nuevoId(),
    clienteId,
    nombre: '',
    tipo: 'web',
    folio: '',
    fecha: hoyISO(),
    objetivo: '',
    // Los montos se manejan siempre como líquidos: es lo que Luis debe recibir.
    monto: 120000,
    cuotas: 2,
    mantencion: 10000,
    plazoDias: '10 a 20',
    rondas: 2,
    garantiaDias: 30,
    estado: 'cotizado',
    url: '',
    plan: 'Plan Profesional',
    incluye: '',
    notas: '',
  }
}

export function boletaVacia(proyectoId = '') {
  return {
    id: nuevoId(),
    proyectoId,
    glosa: '',
    liquido: 0,
    modo: 'liquido',
    fecha: hoyISO(),
    estado: 'pendiente',
    numero: '',
    retieneCliente: false,
  }
}

function normalizar(datos) {
  if (!datos || typeof datos !== 'object') return { ...ESTADO_INICIAL }
  return {
    ajustes: { ...AJUSTES_INICIALES, ...(datos.ajustes || {}) },
    clientes: Array.isArray(datos.clientes) ? datos.clientes : [],
    proyectos: Array.isArray(datos.proyectos) ? datos.proyectos : [],
    boletas: Array.isArray(datos.boletas) ? datos.boletas : [],
  }
}

export function leerAlmacen() {
  if (typeof window === 'undefined') return { ...ESTADO_INICIAL }
  try {
    const crudo = window.localStorage.getItem(CLAVE_ALMACEN)
    return crudo ? normalizar(JSON.parse(crudo)) : { ...ESTADO_INICIAL }
  } catch {
    return { ...ESTADO_INICIAL }
  }
}

export function guardarAlmacen(estado) {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(CLAVE_ALMACEN, JSON.stringify(estado))
  } catch {
    // Modo privado o cuota llena: el panel sigue funcionando en memoria.
  }
}

export function importarJSON(texto) {
  return normalizar(JSON.parse(texto))
}

// Folio correlativo por tipo de documento: LRW-2026-004, LRW-TIENDA-004, etc.
export function siguienteFolio(prefijo, correlativo, anio = ANIO_ACTUAL) {
  const n = String(correlativo).padStart(3, '0')
  return prefijo === 'LRW' ? `LRW-${anio}-${n}` : `${prefijo}-${n}`
}

// ── Boletas ──────────────────────────────────────────────────
// Cada pago recibido debe quedar respaldado con una boleta de honorarios:
// anticipo, saldo final y cada mantención mensual.

const SERVICIO_POR_TIPO = {
  web: 'diseño y desarrollo de página web',
  plan: 'diseño y desarrollo de página web',
  tienda: 'diseño y desarrollo de tienda online',
  software: 'desarrollo de software a medida',
}

export function servicioDe(proyecto) {
  return SERVICIO_POR_TIPO[proyecto?.tipo] || 'diseño y desarrollo de página web'
}

// Reparte el monto líquido del proyecto en las cuotas acordadas y arma la glosa
// de cada boleta, con la redacción que el SII espera ver en el detalle.
export function boletasDeProyecto(proyecto) {
  const cuotas = Math.max(1, Number(proyecto.cuotas) || 1)
  const servicio = servicioDe(proyecto)
  const base = Math.floor(proyecto.monto / cuotas)

  return Array.from({ length: cuotas }, (_, i) => {
    const esUltima = i === cuotas - 1
    const liquido = esUltima ? proyecto.monto - base * (cuotas - 1) : base
    let glosa
    if (cuotas === 1) glosa = `Pago por ${servicio}`
    else if (i === 0) glosa = `Abono inicial por ${servicio}`
    else if (esUltima) glosa = `Pago final por ${servicio}`
    else glosa = `Pago parcial ${i + 1} por ${servicio}`

    return {
      ...boletaVacia(proyecto.id),
      id: nuevoId(),
      glosa,
      liquido,
      fecha: proyecto.fecha,
    }
  })
}

export function boletaDeMantencion(proyecto, fecha) {
  return {
    ...boletaVacia(proyecto.id),
    glosa: 'Servicio mensual de mantenimiento de página web',
    liquido: proyecto.mantencion || 10000,
    fecha: fecha || hoyISO(),
  }
}

export function nombreCliente(clientes, id) {
  return clientes.find((c) => c.id === id)?.nombre || 'Sin cliente'
}
