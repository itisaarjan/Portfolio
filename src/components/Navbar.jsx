import React from 'react'
import icon from '../assets/favicon copy.ico'

function Navbar() {
  return (
    <>
      <header className="bg-[#0B0D10]">
        <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
          <a className="block text-[white] font-lobster " href="#">
            <span className="sr-only">Home</span>
            <h1 className='text-white-900'>arjan<span className='text-[#50BFBA]'>.</span></h1>
          </a>

          <div className="flex flex-1 items-center justify-end md:justify-between">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a className="text-[#66FCF2] transition hover:text-[#66FCF2]/75 pb-1 hover:border-b-2 hover:border-[#66FCF2]" href="#">
                    About
                  </a>
                </li>

                <li>
                  <a className="text-[#66FCF2] transition hover:text-[#66FCF2]/75 pb-1 hover:border-b-2 hover:border-[#66FCF2]" href="#">
                    Experiences
                  </a>
                </li>

                <li>
                  <a className="text-[#66FCF2] transition hover:text-[#66FCF2]/75 pb-1 hover:border-b-2 hover:border-[#66FCF2]" href="#">
                    Projects
                  </a>
                </li>

                <li>
                  <a className="text-[#66FCF2] transition hover:text-[#66FCF2]/75 pb-1 hover:border-b-2 hover:border-[#66FCF2]" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <a
                  className="block rounded-md bg-[#46A29F] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
                  href="#"
                >
                  Resume
                </a>
              </div>

              <button
                className="block rounded bg-[#66FCF2] p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
              >
                <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
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
      </header>
    </>
  )
}

export default Navbar;
