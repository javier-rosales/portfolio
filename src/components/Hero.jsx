import Section from './Section'
import profileHero from '/javier-photo.webp'
import ContactLink from './ContactLink'
import LinkedIn from './icons/flat/LinkedIn'
import GitHub from './icons/flat/GitHub'
import Email from './icons/flat/Email'

const contactIconSize = 'sm'

const contactLinks = [
  {
    href: 'https://www.linkedin.com/in/francisco-javier-rosales-benitez',
    icon: <LinkedIn size={contactIconSize} />,
    text: 'LinkedIn'
  },
  {
    href: 'https://github.com/javier-rosales',
    icon: <GitHub size={contactIconSize} />,
    text: 'GitHub'
  },
  {
    href: 'mailto:cyjav.dev@gmail.com',
    icon: <Email size={contactIconSize} />,
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
            <h3 className='text-lg md:text-xl text-[#666666] dark:text-[#a1a1a1]'>Desarrollador Frontend</h3>
          </div>
        </div>
        <p className='text-xl md:text-2xl'>
          Ingeniero en Sistemas Computacionales con enfoque en desarrollo web frontend usando tecnologías modernas e innovadoras.
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