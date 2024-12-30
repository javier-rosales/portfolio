import ThemeSwitcher from './ThemeSwitcher'

const Header = () => {
  return (
    <header className='sticky top-2 border border-[#ebebeb]/80 dark:border-[#2e2e2e]/80 max-w-md mx-auto bg-[#ffffff]/80 dark:bg-[#0a0a0a]/80 backdrop-blur shadow-lg p-2 md:p-3 rounded-md'>
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