import Section from './Section'
import profileHero from '/javier-photo.webp'
import ContactLink from './ContactLink'
import LinkedInIcon from './icons/flat/LinkedIn'
import GitHubIcon from './icons/flat/GitHub'
import EmailIcon from './icons/flat/Email'
import DocumentPdfIcon from './icons/flat/DocumentPdf'
import cvPdf from '/documents/Javier_Rosales_Junior_Course_Designer.pdf'

const contactIconSize = 'sm'

const contactLinks = [
  {
    href: cvPdf,
    icon: <DocumentPdfIcon size={contactIconSize} />,
    text: 'Download CV'
  },
  {
    href: 'https://www.linkedin.com/in/francisco-javier-rosales-benitez',
    icon: <LinkedInIcon size={contactIconSize} />,
    text: 'LinkedIn'
  },
  {
    href: 'https://github.com/javier-rosales',
    icon: <GitHubIcon size={contactIconSize} />,
    text: 'GitHub'
  },
  {
    href: 'mailto:cyjav.dev@gmail.com',
    icon: <EmailIcon size={contactIconSize} />,
    text: 'cyjav.dev@gmail.com'
  }
]

const Hero = () => {
  return (
    <Section>
      <div className='grid gap-5 md:gap-6 lg:gap-8 my-4 md:my-10 lg:my-20'>
        <div className='flex gap-5 items-center'>
          <img src={profileHero} className='w-20 rounded-xl' alt='Javier Rosales' />
          <div>
            <h1 className='mb-2 text-4xl md:text-5xl font-medium text-[#0068d6] dark:text-[#52a8ff]'>Javier Rosales</h1>
            <h3 className='text-lg md:text-xl text-[#666666] dark:text-[#a1a1a1]'>Interactive Learning Content Developer</h3>
          </div>
        </div>
        <p className='text-xl md:text-2xl'>
          I build interactive and accessible <span className='font-bold text-[#00254d] dark:text-[#ebf6ff]'>eLearning</span> experiences, focusing on clear course structure and <span className='font-bold text-[#00254d] dark:text-[#ebf6ff]'>HTML-based interactivities</span>. I collaborate with design and QA teams to deliver well-structured, high-quality courses.
        </p>
        <div className='flex flex-wrap gap-4'>
          {contactLinks.map((contactLink, index) => (
            <ContactLink
              key={index}
              {...contactLink}
            />
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Hero