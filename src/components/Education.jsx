import Section from './Section'
import SectionTitle from './SectionTitle'
import ButtonLink from './ButtonLink'
import ExternalLinkIcon from './icons/flat/ExternalLink'
import DocumentPdfIcon from './icons/flat/DocumentPdf'
import fullStackOpenCertificate from '/documents/courses/full-stack-open-certificate.pdf'
import fullStackOpenCredits from '/documents/courses/full-stack-open-credits.pdf'
import { v4 as uuidv4 } from 'uuid'

const linkIconSize = 'xs'

const educationData = [
  {
    title: 'Full Stack Open',
    date: '2024',
    description:
      'University-level course by the University of Helsinki focused on modern web development. Strengthened my understanding of component-based architectures, backend services, and data-driven applications.',
    links: [
      {
        icon: <DocumentPdfIcon size={linkIconSize} />,
        href: fullStackOpenCertificate,
        text: 'Certificate'
      },
      {
        icon: <DocumentPdfIcon size={linkIconSize} />,
        href: fullStackOpenCredits,
        text: 'University Credits'
      },
      {
        icon: <ExternalLinkIcon size={linkIconSize} />,
        href: 'https://fullstackopen.com/en/',
        text: 'Course'
      }
    ]
  },
  {
    title: 'The Odin Project',
    date: '2023',
    description:
      'Project-based curriculum covering the fundamentals of web development, with a strong emphasis on JavaScript, problem-solving, and interactive user interfaces.',
    links: [
      {
        icon: <ExternalLinkIcon size={linkIconSize} />,
        href: 'https://www.theodinproject.com/',
        text: 'Course'
      }
    ]
  },
  {
    title: 'Bachelor’s Degree in Computer Systems Engineering',
    date: '2018 – 2023',
    description:
      'Degree focused on software design and development at Tecnológico de Estudios Superiores de Cuautitlán Izcalli.'
  }
].map(item => {
  const newItem = { ...item, id: uuidv4() }

  if (newItem.links) {
    newItem.links = newItem.links.map(link => ({ ...link, id: uuidv4() }))
  }

  return newItem
})

const EducationItem = ({ title, date, description, links }) => {
  return (
    <div>
      <p className='relative text-[#666666] dark:text-[#a1a1a1] md:text-lg font-medium before:content-[""] before:bg-[#a8a8a8] dark:before:bg-[#878787] before:absolute before:-left-4 md:before:-left-8 before:top-1/2 before:h-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:aspect-square before:rounded-full'>
        {date}
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

const Education = () => {
  return (
    <Section>
      <SectionTitle title='Education' id='education' />
      <div className='flex flex-col gap-10 border-l border-[#a8a8a8] dark:border-[#878787] pl-4 md:pl-8'>
        {educationData.map(item => (
          <EducationItem
            key={item.id}
            {...item}
          />
        ))}
      </div>
    </Section>
  )
}

export default Education