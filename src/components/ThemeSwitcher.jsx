import { useState, useEffect } from 'react'
import Sun from './icons/Sun'
import Moon from './icons/Moon'

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(() =>
    localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
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
    <label className='inline-flex justify-center items-center cursor-pointer p-1'>
      <input type='checkbox' onChange={toggleTheme} checked={theme === 'dark'} className='hidden' />
      {theme === 'dark' ? (
        <Moon />
      ) : (
        <Sun />
      )}
    </label>
  )
}

export default ThemeSwitcher