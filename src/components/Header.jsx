import ThemeSwitcher from './ThemeSwitcher'

const Header = () => {
  return (
    <header className='max-w-md mx-auto bg-[#0000000d] dark:bg-[#ffffff0f] backdrop-blur-sm shadow-md p-2 md:p-3 rounded-md'>
      <nav className='flex gap-3 md:gap-5 justify-center items-center text-sm'>
        <ul className='flex items-center gap-3 md:gap-5'>
          <li className='hover:text-[#0068d6] dark:hover:text-[#52a8ff]'>
            <a href="#">Proyectos</a>
          </li>
          <li className='hover:text-[#0068d6] dark:hover:text-[#52a8ff]'>
            <a href="#">Habilidades</a>
          </li>
          <li className='hover:text-[#0068d6] dark:hover:text-[#52a8ff]'>
            <a href="#">Formación</a>
          </li>
          <li className='hover:text-[#0068d6] dark:hover:text-[#52a8ff]'>
            <a href="#">Sobre mí</a>
          </li>
        </ul>
        <ThemeSwitcher />
      </nav>
    </header>
  )
}

export default Header