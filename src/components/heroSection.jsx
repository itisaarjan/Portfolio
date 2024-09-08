import React, { useEffect } from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/animation1.json';
import { motion, useAnimation } from 'framer-motion';

const typingVariants = {
  hidden: { width: 0 },
  visible: { width: 'auto' },
};

const cursorVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

function HeroSection() {
  const controls = useAnimation();

  useEffect(() => {
    async function startAnimation() {
      await controls.start('visible');
    }
    startAnimation();
  }, [controls]);

  return (
    <main className='grid grid-cols-1 md:grid-cols-2 gap-8'>
      <div className='text-white w-full md:w-[50vw] p-4'>
        <h1 className='text-[10.5vw]'>Hi, I am Arjan</h1>
        <h4 className='mt-4 text-white'>
          Junior at University of South Florida and{' '}
          <span className='relative inline-block'>
            <motion.span
              className='text-[#66fcf1] inline-block overflow-hidden'
              initial='hidden'
              animate={controls}
              variants={typingVariants}
              transition={{ duration: 2, ease: 'steps(30, end)' }}
            >
              software developer
            </motion.span>
            <motion.span
              className='absolute right-0 top-0 h-full border-r-2 border-white'
              initial='hidden'
              animate={controls}
              variants={cursorVariants}
              transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
            >
              &nbsp;
            </motion.span>
          </span>{' '}
          seeking to code the future. Software developer with a passion for turning caffeine into cutting-edge web apps. Ready to bring fresh ideas and relentless enthusiasm to your dev team. Contact me to build something amazing together!
        </h4>
      </div>
      <div className='w-full md:w-[40vw]'>
        <Lottie animationData={animationData} />
      </div>
    </main>
  );
}

export default HeroSection;
