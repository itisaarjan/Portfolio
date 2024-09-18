import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Skills from './components/skills';
import Footer from './components/footer';
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
      <div className='m-auto w-[80%]'>
        <HeroSection />
        <Skills ref={skillsSectionRef} />
        <ProjectSection ref={projectSectionRef} />
        <Footer ref={footerRef} />
      </div>
    </>
  );
}

export default App;
