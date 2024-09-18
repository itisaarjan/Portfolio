import React, { useRef, useState } from 'react';
import icon from '../assets/favicon copy.ico';
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const timeline=gsap.timeline();
  const titleref=useRef();
  const navlinks=useRef();
  const resumeref=useRef();
   useGSAP(()=>{
    const timeline = gsap.timeline();

    timeline.from(titleref.current, {
      y: -55,
      opacity: 0,
      duration: 0.5,
      delay: 0.5,
      ease: 'power3.out'
    });

    timeline.from(navlinks.current.children, {
      y: -60,
      opacity: 0,
      duration: 0.5,
      stagger: 0.2,
      ease: 'power3.out'
    });

    timeline.from(resumeref.current,{
      y:-60,
      opacity:0,
      duration:0.5,
      ease:"power3.out"

    })
   })

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="bg-[#0a0e11]">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <a className="block text-teal-600" href="#">
                <span className="sr-only">Home</span>
                <h1 className="text-[white] text-3xl" ref={titleref}>
                  arjan<span className="text-[#50BFBA]">.</span>
                </h1>
              </a>
            </div>

            <div className="hidden sm:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-lg" ref={navlinks}>
                  <li>
                    <a className="text-[#66fcf1] links-button transition hover:text-[#66fcf1]/75 hover:border-b-2 hover:border-[#66FCF2] p-1" href="#">
                      About
                    </a>
                  </li>
                  <li>
                    <a className="text-[#66fcf1] links-button transition hover:text-[#66fcf1]/75 hover:border-b-2 hover:border-[#66FCF2] p-1" href="#">
                      Skills
                    </a>
                  </li>
                  <li>
                    <a className="text-[#66fcf1] links-button transition hover:text-[#66fcf1]/75 hover:border-b-2 hover:border-[#66FCF2] p-1" href="#">
                      Projects
                    </a>
                  </li>
                  <li>
                    <a className="text-[#66fcf1] links-button transition hover:text-[#66fcf1]/75 hover:border-b-2 hover:border-[#66FCF2] p-1" href="#">
                      Experience
                    </a>
                  </li>
                  <li>
                    <a className="text-[#66fcf1] links-button transition hover:text-[#66fcf1]/75 hover:border-b-2 hover:border-[#66FCF2] p-1" href="#">
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <a className="rounded-md bg-teal-600 px-5 py-3 text-lg font-medium text-white shadow" ref={resumeref} href="#">
                  Resume
                </a>
              </div>

              <div className="block md:hidden">
                <button onClick={toggleMenu} className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4">
              <nav aria-label="Mobile Navigation">
                <ul className="flex flex-col gap-6 text-lg">
                  <li>
                    <a className="text-[#66fcf1] block transition hover:text-[#66fcf1]/75 p-2" href="#">
                      About
                    </a>
                  </li>
                  <li>
                    <a className="text-[#66fcf1] block transition hover:text-[#66fcf1]/75 p-2" href="#">
                      Skills
                    </a>
                  </li>
                  <li>
                    <a className="text-[#66fcf1] block transition hover:text-[#66fcf1]/75 p-2" href="#">
                      Projects
                    </a>
                  </li>
                  <li>
                    <a className="text-[#66fcf1] block transition hover:text-[#66fcf1]/75 p-2" href="#">
                      Experience
                    </a>
                  </li>
                  <li>
                    <a className="text-[#66fcf1] block transition hover:text-[#66fcf1]/75 p-2" href="#">
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}

export default Navbar;
