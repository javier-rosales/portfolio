import { useState, useEffect } from 'react'
import Sun from './icons/flat/Sun'
import Moon from './icons/flat/Moon'

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(() =>
    localStorage.getItem('theme') || 'dark'
  )

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(
      (theme === 'light') ? 'dark' : 'light'
    )
  }

  return (
    <label className='inline-flex justify-center items-center cursor-pointer p-1 hover:text-[#0068d6] dark:hover:text-[#52a8ff]'>
      <input type='checkbox' onChange={toggleTheme} checked={theme === 'dark'} className='hidden' />
      {theme === 'dark' ? (
        <Moon size='xs' />
      ) : (
        <Sun size='xs' />
      )}
    </label>
  )
}

export default ThemeSwitcher