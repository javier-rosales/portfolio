import Section from './Section'
import SectionTitle from './SectionTitle'
import ProjectCard from './ProjectCard'
import {v4 as uuidv4} from 'uuid'
import calculatorImg from '../assets/images/projects/calculator-desktop.webp'
import jclimeImg from '../assets/images/projects/jclime-desktop.webp'

const projectList = [
  {
    title: 'JClime - Pronóstico climático',
    description: 'Aplicación web para consultar el pronóstico del clima de cualquier parte del mundo. Utiliza la API de Tomorrow.io para obtener los datos climáticos asi como la API de Google Places para obtener sugerencias de búsqueda.',
    technologies: ['react', 'css'],
    img: jclimeImg,
    repoLink: 'https://github.com/javier-rosales/jclime',
    liveLink: 'https://jclime-es.netlify.app'
  },
  {
    title: 'Calculadora',
    description: 'Calculadora web hecha desde cero con las operaciones aritméticas básicas: suma, resta, multiplicacion y division.',
    technologies: ['html', 'css', 'javascript'],
    img: calculatorImg,
    repoLink: 'https://github.com/javier-rosales/calculator',
    liveLink: 'https://javier-rosales.github.io/calculator'
  },
].map(project => ({...project, id: uuidv4()}))

const Projects = () => {
  return (
    <Section>
      <SectionTitle title='Proyectos' />
      <div className='flex flex-col gap-6 md:gap-8 lg:gap-10'>
        {projectList.map(({ id, ...project }) => (
          <ProjectCard
            key={id}
            {...project}
          />
        ))}
      </div>
    </Section>
  )
}

export default Projects