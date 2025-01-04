import ThemeSwitcher from './ThemeSwitcher'

const Header = () => {
  return (
    <header className='sticky z-10 top-2 border border-[#ebebeb]/80 dark:border-[#2e2e2e]/80 max-w-md mx-auto bg-[#ffffff]/80 dark:bg-[#0a0a0a]/80 backdrop-blur shadow-lg p-2 md:p-3 rounded-md'>
      <nav className='flex gap-5 md:gap-8 justify-center items-center text-sm md:text-base'>
        <ul className='flex items-center gap-5 md:gap-8'>
          <li className='hover:text-[#0068d6] dark:hover:text-[#52a8ff]'>
            <a href="#proyectos">Proyectos</a>
          </li>
          <li className='hover:text-[#0068d6] dark:hover:text-[#52a8ff]'>
            <a href="#tech-stack">Tech Stack</a>
          </li>
          <li className='hover:text-[#0068d6] dark:hover:text-[#52a8ff]'>
            <a href="#formacion">Formación</a>
          </li>
        </ul>
        <ThemeSwitcher />
      </nav>
    </header>
  )
}

export default Header