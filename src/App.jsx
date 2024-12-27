import Background from './components/Background'
import ThemeSwitcher from './components/ThemeSwitcher'

const App = () => {
  return (
    <div>
      <Background />
      <h1 className='text-3xl'>
        Hola mundo!
      </h1>
      <ThemeSwitcher />
    </div>
  )
}

export default App
