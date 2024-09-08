import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Cards from './Cards';
import wanderLust from '../assets/wanderlustpic.jpeg';

function ProjectSection() {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('projects');
      const rect = section.getBoundingClientRect();
      setIsVisible(rect.top <= window.innerHeight && rect.bottom >= 0);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    controls.start({
      borderBottom: isVisible ? '4px solid white' : 'none',
      marginBottom: isVisible ? '1rem' : '0',
      opacity: isVisible ? 1 : 0,
      transition: { duration: 1 } // Duration for the fade-in effect
    });
  }, [isVisible, controls]);

  return (
    <div className='flex flex-col justify-center items-center mt-8 mb-16'>
      <div className='flex justify-center items-center mb-8 '>
        <motion.h1
          id='projects'
          className='text-white text-4xl p-'
          animate={controls}
        >
          Projects
        </motion.h1>
      </div>
      <div className='flex flex-wrap justify-center gap-6'>
        <Cards
          imglink={wanderLust}
          description="A full-stack travel website built with HTML, CSS, and JavaScript for the frontend, powered by Node.js and Express on the backend. Features secure user authentication and data validation, with MongoDB Atlas as the cloud database for efficient data management and scalability."
          year="2024"
          date="Aug"
        />
        <Cards
          imglink={wanderLust}
          description="A full-stack travel website built with HTML, CSS, and JavaScript for the frontend, powered by Node.js and Express on the backend. Features secure user authentication and data validation, with MongoDB Atlas as the cloud database for efficient data management and scalability."
        />
        <Cards
          imglink={wanderLust}
          description="A full-stack travel website built with HTML, CSS, and JavaScript for the frontend, powered by Node.js and Express on the backend. Features secure user authentication and data validation, with MongoDB Atlas as the cloud database for efficient data management and scalability."
        />
      </div>
    </div>
  );
}

export default ProjectSection;
