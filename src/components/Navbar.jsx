import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import resume from '../assets/ArjanSubedi.pdf';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollToPlugin);



function Navbar({ skillsSectionRef, projectSectionRef, footerRef }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const title = useRef(null);
  const navlinks = useRef(null);

  useGSAP(() => {
    const t1 = gsap.timeline();
    t1.from(title.current, {
      y: -60,
      delay: 0.5,
      duration: 0.5,
    });
    t1.from(navlinks.current?.children || [], {
      y: -60,
      delay: 0.5,
      duration: 0.5,
      stagger: 0.2,
    });
  });

  // Animate mobile navlinks when menu is opened
  useEffect(() => {
    if (isMenuOpen && navlinks.current) {
      gsap.from(navlinks.current.children, {
        y: -60,
        duration: 0.5,
        stagger: 0.2,
      });
    }
  }, [isMenuOpen]);

  const scrollToSection = (sectionRef) => {
    if (sectionRef && sectionRef.current) {
      if (sectionRef === footerRef) {
        sectionRef.current.scrollTo();
      } else {
        gsap.to(window, {
          scrollTo: sectionRef.current,
          duration: 1,
        });
      }
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#0a0e11]">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a className="block text-teal-600" href="#">
              <span className="sr-only">Home</span>
              <h1 className="text-[white] text-3xl" ref={title}>
                arjan<span className="text-[#50BFBA]">.</span>
              </h1>
            </a>
          </div>

          <div className="hidden sm:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-lg" ref={navlinks}>
                <li>
                  <a
                    className="text-[#66fcf1] transition hover:text-[#66fcf1]/75 hover:border-b-2 hover:border-[#66FCF2] p-1"
                    onClick={() => scrollToSection(skillsSectionRef)}
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    className="text-[#66fcf1] transition hover:text-[#66fcf1]/75 hover:border-b-2 hover:border-[#66FCF2] p-1"
                    onClick={() => scrollToSection(projectSectionRef)}
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    className="text-[#66fcf1] transition hover:text-[#66fcf1]/75 hover:border-b-2 hover:border-[#66FCF2] p-1"
                    onClick={() => scrollToSection(footerRef)}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <a
                className="rounded-md bg-teal-600 px-5 py-3 text-lg font-medium text-white shadow"
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </div>

            <div className="block md:hidden">
              <button
                onClick={toggleMenu}
                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
              >
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
            <nav aria-label="Mobile Navigation" ref={navlinks}>
              <ul className="flex flex-col gap-6 text-lg">
                <li>
                  <a
                    className="text-[#66fcf1] block transition hover:text-[#66fcf1]/75 p-2"
                    onClick={() => scrollToSection(skillsSectionRef)}
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    className="text-[#66fcf1] block transition hover:text-[#66fcf1]/75 p-2"
                    onClick={() => scrollToSection(projectSectionRef)}
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    className="text-[#66fcf1] block transition hover:text-[#66fcf1]/75 p-2"
                    onClick={() => scrollToSection(footerRef)}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
