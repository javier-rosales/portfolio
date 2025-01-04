import Section from './Section'
import SectionTitle from './SectionTitle'
import ProjectCard from './ProjectCard'
import {v4 as uuidv4} from 'uuid'
import calculatorImg from '../assets/images/projects/calculator-desktop.webp'
import jclimeImg from '../assets/images/projects/jclime-desktop.webp'
import etchASketchImg from '../assets/images/projects/etch-a-sketch-desktop.webp'

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
    title: 'Etch-A-Sketch',
    description: 'Juego de dibujo en el que puedes pintar en un lienzo con el mouse. Puedes elegir el tamaño de la cuadrícula y el color del pincel.',
    technologies: ['html', 'css', 'javascript'],
    img: etchASketchImg,
    repoLink: 'https://github.com/javier-rosales/etch-a-sketch',
    liveLink: 'https://javier-rosales.github.io/etch-a-sketch'
  },
  {
    title: 'Calculadora',
    description: 'Calculadora web hecha desde cero con las operaciones aritméticas básicas: suma, resta, multiplicación y división.',
    technologies: ['html', 'css', 'javascript'],
    img: calculatorImg,
    repoLink: 'https://github.com/javier-rosales/calculator',
    liveLink: 'https://javier-rosales.github.io/calculator'
  },
].map(project => ({...project, id: uuidv4()}))

const Projects = () => {
  return (
    <Section>
      <SectionTitle title='Proyectos' id='proyectos' />
      <div className='flex flex-col gap-8 md:gap-10 lg:gap-12'>
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