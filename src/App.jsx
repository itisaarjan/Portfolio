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
    <div className='m-auto w-[80%]'>
      <HeroSection/>
    <Skills/>
    <ProjectSection/>
    </div>
    <Footer/>
    </>
  )
}

export default App
