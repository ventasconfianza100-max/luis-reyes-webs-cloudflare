import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
// import Testimonials from './components/Testimonials' // oculto hasta tener reseñas reales
import Features from './components/Features'
import Pricing from './components/Pricing'
import LeadMagnet from './components/LeadMagnet'
import ProjectsShowcase from './components/ProjectsShowcase'
import WhyChooseMe from './components/WhyChooseMe'
import Process from './components/Process'
import Reveal from './components/Reveal'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Decorations from './components/Decorations'
import ProjectsPage from './components/ProjectsPage'
import BusinessProjectsPage from './components/BusinessProjectsPage'
import ClinicalPsychologistProjectPage from './components/ClinicalPsychologistProjectPage'
import TherapyOnlineProjectPage from './components/TherapyOnlineProjectPage'
import ProfessionalProfileProjectPage from './components/ProfessionalProfileProjectPage'
import ClinicBusinessProjectPage from './components/ClinicBusinessProjectPage'
import SchedulePage from './components/SchedulePage'
import BlogPage from './components/BlogPage'
import BlogPostPage from './components/BlogPostPage'
import DisenoWebTalcaPage from './components/DisenoWebTalcaPage'
import TiendaOnlineChilePage from './components/TiendaOnlineChilePage'
import EmpresasServiciosPage from './components/EmpresasServiciosPage'
import SoftwareAplicacionesPage from './components/SoftwareAplicacionesPage'
import CommercialLandingPage from './components/CommercialLandingPage'
import NotFoundPage from './components/NotFoundPage'
import AboutPage from './components/AboutPage'
import DiagnosticPage from './components/DiagnosticPage'

import { getMeta, canonicalFor } from './seo'

export default function App({ initialPath }) {
  const [path, setPath] = useState(
    initialPath ?? (typeof window !== 'undefined' ? window.location.pathname : '/')
  )

  useEffect(() => {
    const handlePopState = () => setPath(window.location.pathname)

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  useEffect(() => {
    const meta = getMeta(path)
    document.title = meta.title

    const setTag = (selector, attr, value) => {
      const el = document.head.querySelector(selector)
      if (el) el.setAttribute(attr, value)
    }

    const canonicalUrl = canonicalFor(path)
    setTag('meta[name="description"]', 'content', meta.description)
    setTag('link[rel="canonical"]', 'href', canonicalUrl)
    setTag('meta[property="og:title"]', 'content', meta.title)
    setTag('meta[property="og:description"]', 'content', meta.description)
    setTag('meta[property="og:url"]', 'content', canonicalUrl)
    setTag('meta[name="robots"]', 'content', meta.noindex ? 'noindex, nofollow' : 'index, follow')
  }, [path])

  const navigateTo = (nextPath) => {
    window.history.pushState({}, '', nextPath)
    setPath(nextPath)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  let content
  if (path === '/diseno-web-talca') {
    content = <DisenoWebTalcaPage onNavigate={navigateTo} />
  } else if (path === '/tienda-online-chile') {
    content = <TiendaOnlineChilePage onNavigate={navigateTo} />
  } else if (path === '/paginas-web-empresas-servicios') {
    content = <EmpresasServiciosPage onNavigate={navigateTo} />
  } else if (path === '/desarrollo-software-aplicaciones') {
    content = <SoftwareAplicacionesPage onNavigate={navigateTo} />
  } else if (path === '/paginas-web-para-psicologos') {
    content = <><Navbar onNavigate={navigateTo} /><CommercialLandingPage kind="psychologist" onNavigate={navigateTo} /><Footer onNavigate={navigateTo} /></>
  } else if (path === '/catalogo-online-con-whatsapp') {
    content = <><Navbar onNavigate={navigateTo} /><CommercialLandingPage kind="catalog" onNavigate={navigateTo} /><Footer onNavigate={navigateTo} /></>
  } else if (path === '/sobre-luis') {
    content = <AboutPage onNavigate={navigateTo} />
  } else if (path === '/diagnostico-web') {
    content = <DiagnosticPage onNavigate={navigateTo} />
  } else if (path === '/agenda') {
    content = <SchedulePage onNavigate={navigateTo} />
  } else if (path === '/blog') {
    content = <BlogPage onNavigate={navigateTo} />
  } else if (path.startsWith('/blog/')) {
    content = <BlogPostPage slug={path.replace('/blog/', '')} onNavigate={navigateTo} />
  } else if (path === '/proyectos/sitio-psicologa-clinica') {
    content = <ClinicalPsychologistProjectPage onNavigate={navigateTo} />
  } else if (path === '/proyectos/consulta-terapeutica-online') {
    content = <TherapyOnlineProjectPage onNavigate={navigateTo} />
  } else if (path === '/proyectos/perfil-profesional-redes') {
    content = <ProfessionalProfileProjectPage onNavigate={navigateTo} />
  } else if (path === '/proyectos-empresas/clinica-centro-atencion') {
    content = <ClinicBusinessProjectPage onNavigate={navigateTo} />
  } else if (path === '/proyectos') {
    content = <ProjectsPage onNavigate={navigateTo} />
  } else if (path === '/proyectos-empresas') {
    content = <BusinessProjectsPage onNavigate={navigateTo} />
  } else if (path === '/') {
    content = (
      <><Navbar onNavigate={navigateTo} /><main><div id="inicio"><Hero onNavigate={navigateTo} /></div><Reveal><Stats /></Reveal><Reveal><div id="servicios"><Services onNavigate={navigateTo} /></div></Reveal><Reveal><ProjectsShowcase /></Reveal><WhyChooseMe /><Reveal><Process /></Reveal><Reveal><div id="incluye"><Features /></div></Reveal><Reveal><Pricing /></Reveal><Reveal><FAQ /></Reveal><Reveal><LeadMagnet /></Reveal></main><Footer onNavigate={navigateTo} /></>
    )
  } else {
    content = <><Navbar onNavigate={navigateTo} /><NotFoundPage onNavigate={navigateTo} /><Footer onNavigate={navigateTo} /></>
  }

  return (
    <div className="min-h-screen">
      <Decorations />
      {content}
      <FloatingWhatsApp />
    </div>
  )
}
