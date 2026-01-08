import Section from './Section'
import SectionTitle from './SectionTitle'
import ProjectCard from './ProjectCard'
import {v4 as uuidv4} from 'uuid'
import calculatorImg from '../assets/images/projects/calculator-desktop.webp'
import jclimeImg from '../assets/images/projects/jclime-desktop.webp'
import etchASketchImg from '../assets/images/projects/etch-a-sketch-desktop.webp'

const projectList = [
  {
    title: 'JClime - Weather Forecast Application',
    description:
      'Interactive web application focused on clear data presentation and user-driven exploration, integrating external APIs with responsive layouts and intuitive interactions.',
    technologies: ['react', 'css'],
    img: jclimeImg,
    repoLink: 'https://github.com/javier-rosales/jclime',
    liveLink: 'https://jclime.netlify.app'
  },
  {
    title: 'Etch-A-Sketch - Interactive Drawing Tool (Spanish only)',
    description:
      'Grid-based interactive drawing experience focused on event handling, dynamic DOM updates, and real-time visual feedback through direct user input.',
    technologies: ['html', 'css', 'javascript'],
    img: etchASketchImg,
    repoLink: 'https://github.com/javier-rosales/etch-a-sketch',
    liveLink: 'https://javier-rosales.github.io/etch-a-sketch'
  },
  {
    title: 'Calculator - Interactive Logic Interface',
    description:
      'Interactive calculator built from scratch, focused on input validation, state management, and predictable user interactions.',
    technologies: ['html', 'css', 'javascript'],
    img: calculatorImg,
    repoLink: 'https://github.com/javier-rosales/calculator',
    liveLink: 'https://javier-rosales.github.io/calculator'
  }
].map(project => ({...project, id: uuidv4()}))

const Projects = () => {
  return (
    <Section>
      <SectionTitle title='Projects' id='projects' />
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