import HtmlIcon from './icons/HTML'
import CssIcon from './icons/CSS'
import JavascriptIcon from './icons/Javascript'
import ReactIcon from './icons/React'
import TailwindcssIcon from './icons/Tailwindcss'

const technologyIconSize = 'xxs'

const technologies = [
  {
    name: 'html',
    displayName: 'HTML',
    icon: <HtmlIcon size={technologyIconSize} />,
    background: 'bg-[#c74b25]'
  },
  {
    name: 'css',
    displayName: 'CSS',
    icon: <CssIcon size={technologyIconSize} />,
    background: 'bg-[#563d7c]'
  },
  {
    name: 'javascript',
    displayName: 'JavaScript',
    icon: <JavascriptIcon size={technologyIconSize} />,
    background: 'bg-[#8e730d]'
  },
  {
    name: 'react',
    displayName: 'React',
    icon: <ReactIcon size={technologyIconSize} />,
    background: 'bg-[#2c4f66]'
  },
  {
    name: 'tailwindcss',
    displayName: 'Tailwind CSS',
    icon: <TailwindcssIcon size={technologyIconSize} />,
    background: 'bg-[#0f2c42]'
  }
]

const TechnologyBadge = ({ name }) => {
  const { displayName, icon, background } = technologies.find(tech => tech.name === name)

  return (
    <span className={`${background} inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium text-[#ededed]`}>
      {icon}
      {displayName}
    </span>
  )
}

export default TechnologyBadge