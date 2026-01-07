import Section from './Section'
import SectionTitle from './SectionTitle'
import ButtonLink from './ButtonLink'
import { v4 as uuidv4 } from 'uuid'

const linkIconSize = 'xs'

const experience = [
  {
    title: 'Mexico Development Center (MDC)',
    dateRange: '2025 - Presente',
    description: 'Me desempeño como Desarrollador Frontend en el área de e-Learning, donde contribuyo al desarrollo de cursos en línea interactivos utilizando tecnologías web como HTML, CSS y JavaScript además del estándar SCORM para asegurar la compatibilidad con plataformas LMS. Mi trabajo incluye la creación de interfaces de usuario atractivas y funcionales, así como la integración de contenido multimedia para mejorar la experiencia de aprendizaje.',
  },
  {
    title: 'Santul',
    dateRange: '2025',
    description: 'Empresa dedicada a la fabricación y comercialización de herramientas para mantenimiento casero e industrial. Desempeñé el rol de Desarrollador Full Stack, participando en el proceso de digitalización de procesos internos de la empresa mediante el desarrollo de aplicaciones web (React, Node.js, MySQL) personalizadas que optimizan la gestión y operación diaria.',
  }
].map(item => {
  const newItem = { ...item, id: uuidv4() }

  if (newItem.links) {
    newItem.links = newItem.links.map(link => ({ ...link, id: uuidv4() }))
  }

  return newItem
})

const ExperienceItem = ({ title, dateRange, description, links }) => {
  return (
    <div>
      <p className='relative text-[#666666] dark:text-[#a1a1a1] md:text-lg font-medium before:content-[""] before:bg-[#a8a8a8] dark:before:bg-[#878787] before:absolute before:-left-4 md:before:-left-8 before:top-1/2 before:h-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:aspect-square before:rounded-full'>
        {dateRange}
      </p>
      <h3 className='mb-1 text-xl md:text-2xl font-medium text-[#00254d] dark:text-[#ebf6ff]'>
        {title}
      </h3>
      <p className='md:text-lg'>
        {description}
      </p>
      {links && (
        <div className='mt-2 flex flex-wrap gap-2'>
          {links.map(({ id, ...link }) => (
            <ButtonLink
              key={id}
              {...link}
            />
          ))}
        </div>
      )}
    </div>
  )
}

const Experience = () => {
  return (
    <Section>
      <SectionTitle title='Experiencia' id='experiencia' />
      <div className='flex flex-col gap-10 border-l border-[#a8a8a8] dark:border-[#878787] pl-4 md:pl-8'>
        {experience.map(item => (
          <ExperienceItem
            key={item.id}
            {...item}
          />
        ))}
      </div>
    </Section>
  )
}

export default Experience