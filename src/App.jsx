import Background from './components/Background'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import Education from './components/Education'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Background />
      <Header />
      <Hero />
      <div className='*:mb-4 md:*:mb-12'>
        <Projects />
        <TechStack />
        <Education />
      </div>
      <Footer />
    </>
  )
}

export default App
