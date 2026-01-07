import Section from './Section'
import SectionTitle from './SectionTitle'
import ButtonLink from './ButtonLink'
import { v4 as uuidv4 } from 'uuid'

export const experienceData = [
  {
    dateRange: "2025 – Present",
    role: "Junior e-Learning Developer",
    company: "Mexico Development Center (MDC)",
    companyDescription:
      "Mexico Development Center is a multidisciplinary company focused on the development of corporate eLearning solutions for national and international clients, following industry standards such as SCORM.",
    summary:
      "As part of the engineering team, I work on the assembly and technical implementation of eLearning courses, collaborating closely with design and QA teams to transform instructional designs into fully functional learning experiences.",
    highlights: [
      "Building and maintaining course structure using HTML5 and XML.",
      "Implementing HTML-based interactivities and custom learning components.",
      "Supporting SCORM testing and validation using SCORM Cloud.",
      "Working with course behavior, completion logic, and progress tracking.",
      "Contributing to accessibility-focused projects using semantic HTML and NVDA testing."
    ]
  },
  {
    dateRange: "2025",
    role: "Full Stack Developer",
    company: "Santul",
    companyDescription:
      "Santul is a Mexican company undergoing a digital transformation process. I worked on internal web applications designed to replace manual workflows with user-friendly digital tools.",
    summary:
      "My work focused on translating complex business processes into clear interfaces, collaborating directly with stakeholders and building solutions accessible to non-technical users.",
  }
].map(item => {
  const newItem = { ...item, id: uuidv4() }

  if (newItem.links) {
    newItem.links = newItem.links.map(link => ({ ...link, id: uuidv4() }))
  }

  return newItem
})

const ExperienceItem = ({ dateRange, role, company, companyDescription, summary, highlights }) => {
  return (
    <div>
      <p className='relative text-[#666666] dark:text-[#a1a1a1] md:text-lg font-medium before:content-[""] before:bg-[#a8a8a8] dark:before:bg-[#878787] before:absolute before:-left-4 md:before:-left-8 before:top-1/2 before:h-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:aspect-square before:rounded-full'>
        {dateRange}
      </p>
      <h3 className='mb-1 text-xl md:text-2xl font-medium text-[#00254d] dark:text-[#ebf6ff]'>
        {role}
      </h3>
      <h4 className='mb-3 text-lg md:text-xl font-normal italic text-[#00254d] dark:text-[#ebf6ff]'>
        {company}
      </h4>
      {
        /* temporary removal of company description
        <p className='md:text-lg my-4 p-3 shadow-md border-l-8 rounded-sm border-[#a8a8a8] dark:border-[#878787] bg-[#ffffff] dark:bg-[#0a0a0a]'>
          {companyDescription}
        </p>
        */
      }
      <p className='md:text-lg mb-4'>
        {summary}
      </p>
      {highlights && (
        <>
          <p className='md:text-lg'>
            Key contributions:
          </p>
          <ul className='list-disc list-inside mt-2 md:mt-4 space-y-1 md:space-y-2 md:text-lg'>
            {highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

const Experience = () => {
  return (
    <Section>
      <SectionTitle title='Experience' id='experience' />
      <div className='flex flex-col gap-10 border-l border-[#a8a8a8] dark:border-[#878787] pl-4 md:pl-8'>
        {experienceData.map(item => (
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