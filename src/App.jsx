import { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/heroSection'
import  Cards from './components/Cards'
import ProjectSection from './components/ProjectSection'
import Skills from './components/skills'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <HeroSection/>
    <Skills/>
    <ProjectSection/>
    <Footer/>
    </>
  )
}

export default App
