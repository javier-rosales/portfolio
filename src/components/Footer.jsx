import GitHubIcon from './icons/flat/GitHub'
import ReactIcon from './icons/React'
import TailwindCssIcon from './icons/TailwindCss'

const iconSize = 'xs'

const Footer = () => {
  return (
    <footer className='flex justify-between items-center max-w-4xl mx-auto px-5 py-8 lg:py-10'>
      <div>
        <p className='text-sm text-[#666666] dark:text-[#a1a1a1] mb-2'>
          Desarrollado con:
        </p>
        <ul className='flex flex-col md:flex-row gap-1 md:gap-8'>
          <li className='flex gap-2 font-medium'>
            <ReactIcon size={iconSize} />
            React
          </li>
          <li className='flex gap-2 font-medium'>
            <TailwindCssIcon size={iconSize} />
            Tailwind CSS
          </li>
        </ul>
      </div>
      <a className='flex gap-1 hover:text-[#0068d6] dark:hover:text-[#52a8ff]' href='https://github.com/javier-rosales' target='_blank'>
        <GitHubIcon size='xs' />
        javier-rosales
      </a>
    </footer>
  )
}

export default Footer