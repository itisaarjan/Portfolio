import React, { useEffect, useRef, forwardRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Cards from './Cards';
import wanderLust from '../assets/wanderlustpic.jpeg';
import financeTracker from '../assets/financetracker.png';
import simrikmed from '../assets/image.png';

gsap.registerPlugin(ScrollTrigger);

const ProjectSection = forwardRef((props, ref) => {
  const sectionRef = ref || useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;

    gsap.fromTo(section.querySelector('h1'), 
      { opacity: 0, y: -50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'top 50%',
          scrub: 1,
        }
      }
    );

    cards.forEach((card, index) => {
      gsap.fromTo(card,
        { 
          opacity: 0, 
          x: index % 2 === 0 ? -100 : 100
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1,
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [sectionRef]);

  return (
    <section ref={sectionRef} className='w-[90%] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 mb-32'>
      <div className='text-center mb-12'>
        <h1 id='projects' className='text-white text-4xl font-bold'>
          Projects
        </h1>
      </div>
      <div className='grid grid-cols-1 gap-8 justify-items-center pl-4 mx-auto'>
        <div ref={el => cardsRef.current[0] = el} className="w-full max-w">
          <Cards
            imglink={simrikmed}
            description="SimrikMed.com is a React-based medical services website I developed for a healthcare provider. It offers virtual care consultations and specialized weight loss programs. The site features a user-friendly interface with EmailJS integration for seamless patient-provider communication. Hosted on Render with a Porkbun domain, it ensures HIPAA compliance while providing accessible healthcare services. This project showcases my ability to create functional, secure, and user-centric web applications in the healthcare sector."
            year='2024'
            date='September'
            link='https://simrikmed.com'
          />
        </div>
        <div ref={el => cardsRef.current[1] = el} className="w-full max-w">
          <Cards
            imglink={wanderLust}
            description="A full-stack travel website built with HTML, CSS, and JavaScript for the frontend, powered by Node.js and Express on the backend. Features secure user authentication and data validation, with MongoDB Atlas as the cloud database for efficient data management and scalability."
            year="2024"
            date="Aug"
            link='https://wanderlust-fwwe.onrender.com/listings'
          />
        </div>
        <div ref={el => cardsRef.current[2] = el} className="w-full max-w">
          <Cards
            imglink={financeTracker}
            description="A comprehensive personal finance tracker built with the MERN (MongoDB, Express.js, React.js, Node.js) stack. This application helps you manage and visualize your monthly expenses with secure authentication handled by Clerk."
            year="2024"
            date="Aug"
            link=''
          />
        </div>
      </div>
    </section>
  );
});

export default ProjectSection;
