import { useState } from 'react'
import Section from './Section'
import SectionTitle from './SectionTitle'
import { v4 as uuidv4 } from 'uuid'
import clsx from 'clsx'
import HtmlIcon from './icons/Html'
import CssIcon from './icons/Css'
import JavaScriptIcon from './icons/JavaScript'
import ReactIcon from './icons/React'
import TailwindCssIcon from './icons/TailwindCss'
import NodeJsIcon from './icons/NodeJs'
import GitIcon from './icons/Git'
import GitHubIcon from './icons/GitHub'
import TerminalIcon from './icons/Terminal'
import XmlIcon from './icons/Xml'
import Scorm from './icons/Scorm'
import ScormCloud from './icons/ScormCloud'
import NvdaIcon from './icons/Nvda'
import NpmIcon from './icons/Npm'

const iconSize = 'xl'

let skills = {
  eLearning: {
    displayName: 'eLearning',
    items: [
      {
        name: 'HTML',
        icon: <HtmlIcon size={iconSize} />
      },
      {
        name: 'XML',
        icon: <XmlIcon size={iconSize} />
      },
      {
        name: 'SCORM',
        icon: <Scorm size={iconSize} />
      },
      {
        name: 'SCORM Cloud',
        icon: <ScormCloud size={iconSize} />
      },
      {
        name: 'NVDA',
        icon: <NvdaIcon size={iconSize} />
      }
    ]
  },
  web: {
    displayName: 'Web',
    items: [
      {
        name: 'CSS',
        icon: <CssIcon size={iconSize} />
      },
      {
        name: 'JavaScript',
        icon: <JavaScriptIcon size={iconSize} />
      },
      {
        name: 'React',
        icon: <ReactIcon size={iconSize} />
      },
      {
        name: 'Tailwind CSS',
        icon: <TailwindCssIcon size={iconSize} />
      },
      {
        name: 'Node.js',
        icon: <NodeJsIcon size={iconSize} />
      }
    ]
  },
  tools: {
    displayName: 'Tools',
    items: [
      {
        name: 'Git',
        icon: <GitIcon size={iconSize} />
      },
      {
        name: 'GitHub',
        icon: <GitHubIcon size={iconSize} />
      },
      {
        name: 'Terminal',
        icon: <TerminalIcon size={iconSize} />
      },
      {
        name: 'Npm',
        icon: <NpmIcon size={iconSize} />
      }
    ]
  }
}

Object.entries(skills).forEach(([key, { items }]) => {
  items.forEach((tech, index) => {
    items[index].id = uuidv4()
  })
})

const Tab = ({ name, displayName, isActive, handleTabClick }) => {
  const classNames = clsx(
    'grow p-2 text-center cursor-pointer rounded-sm dark:text-[#a1a1a1]',
    {
      'bg-[#ffffff] text-[#171717] dark:bg-[#0a0a0a] dark:text-[#ededed]': isActive
    }
  )

  return (
    <li
      className={classNames}
      onClick={() => handleTabClick(name)}
    >
      {displayName}
    </li>
  )
}

const Skills = () => {
  const [activeTab, setActiveTab] = useState('eLearning')

  const handleTabClick = tab => {
    setActiveTab(tab)
  }
  
  return (
    <Section>
      <SectionTitle title='Skills' id='skills' />
      <ul className='flex rounded-md mb-6 p-1 bg-[#ebebeb] text-[#666666] dark:bg-[#1f1f1f]'>
        {Object.keys(skills).map(tabName => (
          <Tab
            key={tabName}
            name={tabName}
            displayName={skills[tabName].displayName}
            isActive={activeTab === tabName}
            handleTabClick={handleTabClick}
          />
        ))}
      </ul>
      <div className='flex flex-wrap justify-center gap-y-6 rounded-md p-5 border shadow-xl bg-[#ffffff] border-[#ebebeb] dark:bg-[#0a0a0a] dark:border-[#2e2e2e]'>
        {skills[activeTab].items.map(({ id, ...tech }) => (
          <div
            className='basis-1/3 md:basis-1/5 flex flex-col items-center gap-1'
            key={id}
          >
            {tech.icon}
            <span className='text-sm font-medium'>
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Skills