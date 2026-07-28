import { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const options = {
  type: ['Profesional o consulta', 'Negocio con productos', 'Empresa de servicios', 'Todavía no estoy seguro'],
  goal: ['Conseguir consultas', 'Mostrar productos', 'Recibir cotizaciones', 'Vender con carrito y pago'],
  stage: ['No tengo web', 'Tengo una web que quiero mejorar', 'Vendo principalmente por Instagram o WhatsApp'],
}

export default function DiagnosticPage({ onNavigate }) {
  const [answers, setAnswers] = useState({})
  const [sent, setSent] = useState(false)
  const choose = (key, value) => setAnswers((current) => ({ ...current, [key]: value }))
  const ready = Object.keys(answers).length === 3
  const submit = (event) => {
    event.preventDefault()
    const text = `Hola Luis, quiero orientación para mi web. Mi negocio es: ${answers.type}. Mi objetivo es: ${answers.goal}. Actualmente: ${answers.stage}.`
    window.open(`https://wa.me/56922012534?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer')
    setSent(true)
  }
  return <><Navbar onNavigate={onNavigate} /><main className="px-6 py-16 md:py-24"><div className="max-w-3xl mx-auto"><div className="text-center"><p className="text-sm font-semibold uppercase tracking-wider text-brand-600">Diagnóstico inicial</p><h1 className="font-display text-4xl md:text-5xl font-extrabold text-slate-900 mt-4">Descubre qué tipo de web necesita tu negocio</h1><p className="mt-5 text-lg text-slate-600">Responde tres preguntas y escríbeme por WhatsApp con el contexto necesario para orientarte mejor.</p></div><form onSubmit={submit} className="mt-12 space-y-8 rounded-[2rem] bg-white border border-slate-100 shadow-soft p-6 md:p-10">{Object.entries(options).map(([key, values], index) => <fieldset key={key}><legend className="font-display text-xl font-bold text-slate-900"><span className="text-brand-600 mr-2">0{index + 1}</span>{key === 'type' ? '¿Qué tipo de negocio tienes?' : key === 'goal' ? '¿Qué quieres conseguir?' : '¿En qué punto estás?'}</legend><div className="mt-4 grid sm:grid-cols-2 gap-3">{values.map((value) => <label key={value} className={`cursor-pointer rounded-2xl border p-4 text-sm font-medium transition-all ${answers[key] === value ? 'border-brand-500 bg-brand-50 text-brand-800 ring-2 ring-brand-100' : 'border-slate-200 text-slate-600 hover:border-brand-300'}`}><input type="radio" name={key} value={value} checked={answers[key] === value} onChange={() => choose(key, value)} className="sr-only" />{value}</label>)}</div></fieldset>)}<button type="submit" disabled={!ready} className="w-full rounded-2xl bg-brand-600 px-6 py-4 text-white font-semibold disabled:cursor-not-allowed disabled:opacity-40">{sent ? 'Mensaje preparado en WhatsApp' : 'Recibir orientación por WhatsApp'}</button><p className="text-center text-xs text-slate-400">No guardamos tus respuestas en el sitio; se envían solo cuando eliges abrir WhatsApp.</p></form></div></main><Footer onNavigate={onNavigate} /></>
}
