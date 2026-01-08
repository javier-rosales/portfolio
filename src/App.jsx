import Background from './components/Background'
import Header from './components/Header'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Background />
      <Header />
      <Hero />
      <div className='*:mb-4 md:*:mb-12'>
        <Experience />
        <Projects />
        <Skills />
        <Education />
      </div>
      <Footer />
    </>
  )
}

export default App
