import ProjectDetailPage from './ProjectDetailPage'

export default function ClinicalPsychologistProjectPage({ onNavigate }) {
  return (
    <ProjectDetailPage
      badge="Landing profesional"
      title="Sitio para psicóloga clínica"
      intro="Una página pensada para que una psicóloga pueda presentarse con claridad, transmitir confianza y facilitar que un paciente dé el primer paso sin sentirse presionado."
      tags={['Responsive', 'WhatsApp', 'SEO básico']}
      sections={[
        'Presentación profesional y enfoque clínico',
        'Especialidades o problemáticas que atiende',
        'Modalidad presencial, online o mixta',
        'Preguntas frecuentes para nuevos pacientes',
        'Contacto directo por WhatsApp',
      ]}
      previewText="Estructura visual sobria, cálida y enfocada en guiar al paciente desde la primera impresión hasta el contacto."
      objective="No se trata solo de una página bonita. La idea es que la web ayude a que el paciente entienda si esa profesional puede acompañarlo, resuelva dudas básicas y tenga un camino simple para escribir sin fricción."
      flow={[
        {
          title: 'Confianza inicial',
          text: 'La primera pantalla muestra quién es la profesional, su tono de atención y una invitación clara a consultar.',
        },
        {
          title: 'Información ordenada',
          text: 'El paciente encuentra especialidades, modalidad, valores referenciales y dudas frecuentes sin perderse.',
        },
        {
          title: 'Contacto simple',
          text: 'El cierre lleva a WhatsApp con un mensaje listo para iniciar la conversación de forma natural.',
        },
      ]}
      ctaTitle="¿Quieres este estilo para tu consulta?"
      ctaText="Podemos adaptarlo a tu especialidad, ciudad, modalidad de atención y forma de comunicarte."
      ctaHref="https://wa.me/56922012534?text=Hola%20Luis%2C%20me%20interesa%20una%20web%20como%20el%20sitio%20para%20psic%C3%B3loga%20cl%C3%ADnica"
      onNavigate={onNavigate}
    />
  )
}
