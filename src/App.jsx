import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Skills from './components/Skills';
import Footer from './components/Footer';
import ProjectSection from './components/ProjectSection';

function App() {
  const skillsSectionRef = useRef(null);
  const footerRef = useRef(null);
  const projectSectionRef = useRef(null);

  return (
    <>
      <Navbar 
        skillsSectionRef={skillsSectionRef}
        projectSectionRef={projectSectionRef}
        footerRef={footerRef}
      />
      <div className='m-auto w-[100%]'>
        <HeroSection />
        <Skills ref={skillsSectionRef} className='m-auto w-[80%]' />
        <ProjectSection ref={projectSectionRef} className='m-auto w-[80%]' />
        <Footer ref={footerRef} />
      </div>
    </>
  );
}

export default App;
