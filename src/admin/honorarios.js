// Cálculo de boletas de honorarios electrónicas (Chile).
//
// La Ley 21.133 subió la retención de forma gradual hasta llegar al 17% en 2028.
// Si el cliente es una empresa que retiene, deposita el líquido y entera la
// retención al SII. Si no retiene, Luis recibe el bruto y debe reservar la
// retención para la Operación Renta.

export const RETENCION_POR_ANIO = {
  2020: 0.1075,
  2021: 0.115,
  2022: 0.1225,
  2023: 0.13,
  2024: 0.1375,
  2025: 0.145,
  2026: 0.1525,
  2027: 0.16,
  2028: 0.17,
}

export const ANIO_ACTUAL = new Date().getFullYear()

export function tasaRetencion(anio = ANIO_ACTUAL) {
  if (RETENCION_POR_ANIO[anio]) return RETENCION_POR_ANIO[anio]
  return anio < 2020 ? 0.1075 : 0.17
}

export function porcentaje(tasa) {
  return `${(tasa * 100).toLocaleString('es-CL', { maximumFractionDigits: 2 })}%`
}

// Precio líquido: el monto que Luis quiere recibir. La boleta se emite por un
// bruto mayor para que, tras la retención, quede exactamente el líquido.
export function desdeLiquido(liquido, tasa) {
  const neto = Math.max(0, Math.round(Number(liquido) || 0))
  const bruto = Math.round(neto / (1 - tasa))
  const retencion = Math.round(bruto * tasa)
  return { bruto, retencion, liquido: bruto - retencion }
}

// Precio bruto: el monto que dice la boleta. La retención se descuenta de ahí.
export function desdeBruto(bruto, tasa) {
  const total = Math.max(0, Math.round(Number(bruto) || 0))
  const retencion = Math.round(total * tasa)
  return { bruto: total, retencion, liquido: total - retencion }
}

export function calcular(monto, tasa, modo = 'liquido') {
  return modo === 'bruto' ? desdeBruto(monto, tasa) : desdeLiquido(monto, tasa)
}

export function formatCLP(valor) {
  const n = Number(valor)
  if (!Number.isFinite(n)) return '$0'
  return `$${Math.round(n).toLocaleString('es-CL')}`
}

// Acepta "120.000", "$120000", "120 000" y devuelve el número.
export function parseCLP(texto) {
  if (typeof texto === 'number') return texto
  const limpio = String(texto ?? '').replace(/[^\d]/g, '')
  return limpio ? Number(limpio) : 0
}

export function formatFecha(iso) {
  if (!iso) return ''
  const [a, m, d] = String(iso).slice(0, 10).split('-')
  return d ? `${d}/${m}/${a}` : iso
}

export function hoyISO() {
  const d = new Date()
  const mes = String(d.getMonth() + 1).padStart(2, '0')
  const dia = String(d.getDate()).padStart(2, '0')
  return `${d.getFullYear()}-${mes}-${dia}`
}

// Suma meses a una fecha ISO (para las mantenciones mensuales).
export function sumarMeses(iso, meses) {
  const base = new Date(`${String(iso).slice(0, 10)}T12:00:00`)
  if (Number.isNaN(base.getTime())) return iso
  base.setMonth(base.getMonth() + meses)
  const mes = String(base.getMonth() + 1).padStart(2, '0')
  const dia = String(base.getDate()).padStart(2, '0')
  return `${base.getFullYear()}-${mes}-${dia}`
}

export const MESES = [
  'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
  'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre',
]

export function mesDe(iso) {
  const mes = Number(String(iso).slice(5, 7)) - 1
  const anio = String(iso).slice(0, 4)
  return MESES[mes] ? `${MESES[mes]} ${anio}` : ''
}
