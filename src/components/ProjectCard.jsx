import TechnologyBadge from './TechnologyBadge'
import ButtonLink from './ButtonLink'
import GitHub from './icons/flat/GitHub'
import ExternalLink from './icons/flat/ExternalLink'

const linkIconSize = 'xs'

const ProjectCard = ({
  title,
  description,
  technologies,
  img,
  repoLink,
  liveLink
}) => {
  return (
    <div className='md:grid md:grid-cols-2 border rounded-md overflow-hidden shadow-lg bg-[#ffffff] border-[#ebebeb] dark:bg-[#0a0a0a] dark:border-[#2e2e2e]'>
      <div>
        <img
          className='w-full h-full object-cover'
          src={img}
          alt='Previsualización del proyecto'
        />
      </div>
      <div className='grid grid-rows-[auto_auto_1fr_auto] gap-2.5 p-4 md:p-5 lg:p-8'>
        <h3 className='text-xl md:text-2xl font-medium'>
          {title}
        </h3>
        <div className='flex flex-wrap gap-1'>
          {technologies.map(technology => (
            <TechnologyBadge
              key={technology}
              name={technology}
            />
          ))}
        </div>
        <p className='md:text-lg'>
          {description}
        </p>
        <div className='flex flex-wrap gap-2 mt-3'>
          <ButtonLink
            icon={<GitHub size={linkIconSize} />}
            href={repoLink}
            text='Repositorio'
          />
          <ButtonLink
            icon={<ExternalLink size={linkIconSize} />}
            href={liveLink}
            text='Sitio web'
          />
        </div>
      </div>
    </div>
  )
}

export default ProjectCard