import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Cards from './Cards';
import wanderLust from '../assets/wanderlustpic.jpeg';
import financeTracker from '../assets/financetracker.png'
import weatherApp from '../assets/weatherApp.png'
import simrikmed from '../assets/image.png'

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
          imglink={simrikmed}
          description="SimrikMed.com is a React-based medical services website I developed for a healthcare provider. It offers virtual care consultations and specialized weight loss programs. The site features a user-friendly interface with EmailJS integration for seamless patient-provider communication. Hosted on Render with a Porkbun domain, it ensures HIPAA compliance while providing accessible healthcare services. This project showcases my ability to create functional, secure, and user-centric web applications in the healthcare sector."
          year='2024'
          date='September'
          link='https://simrikmed.com'
        />
        <Cards
          imglink={wanderLust}
          description="A full-stack travel website built with HTML, CSS, and JavaScript for the frontend, powered by Node.js and Express on the backend. Features secure user authentication and data validation, with MongoDB Atlas as the cloud database for efficient data management and scalability."
          year="2024"
          date="Aug"
          link='https://wanderlust-fwwe.onrender.com/listings'
        />
        <Cards
          imglink={financeTracker}
          description="A comprehensive personal finance tracker built with the MERN (MongoDB, Express.js, React.js, Node.js) stack. This application helps you manage and visualize your monthly expenses with secure authentication handled by Clerk."
          year="2024"
          date="Aug"
          link=''
          />
        
      </div>
    </div>
  );
}

export default ProjectSection;
