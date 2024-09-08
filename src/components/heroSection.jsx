import React, { useEffect } from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/animation1.json';
import { motion, useAnimation } from 'framer-motion';
import {gsap} from 'gsap'
import {useGSAP} from '@gsap/react'

const typingVariants = {
  hidden: { width: 0 },
  visible: { width: 'auto' },
};

const cursorVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

function HeroSection() {
  useGSAP(()=>{
    gsap.from(".highlight",{
      opacity:0,
      y:-5,
      delay:1,
      repeat:-1,
      yoyo:true
    })
  })
  const controls = useAnimation();

  useEffect(() => {
    async function startAnimation() {
      await controls.start('visible');
    }
    startAnimation();
  }, [controls]);

  return (
    <main className='grid grid-cols-2 xs:grid-cols-1 '>
      <div className='text-white w-[50vw] p-4'>
        <h1 className='text-[10.5vw]'>Hi, I am Arjan</h1>
        <h4 className='mt-4 text-white'>
          Junior at University of South Florida and{' '}
          <span className='highlight text-[#66fcf1] relative inline-block'>
            software developer{' '}
          </span>
           seeking to code the future. Software developer with a passion for turning caffeine into cutting-edge web apps. Ready to bring fresh ideas and relentless enthusiasm to your dev team. Contact me to build something amazing together!
        </h4>
      </div>
      <div className='w-[40vw]'>
        <Lottie animationData={animationData} />
      </div>
    </main>
  );
}

export default HeroSection;
