import React from 'react'
import icon from '../assets/favicon copy.ico'

function Navbar() {
  return (
    <>
    <header className="bg-[#0a0e11]">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <div className="md:flex md:items-center md:gap-12">
        <a className="block text-teal-600" href="#">
          <span className="sr-only">Home</span>
          <h1 className='text-[white] '>arjan<span className='text-[#50BFBA]'>.</span></h1>
        </a>
      </div>

      <div className="hidden sm:block">
        <nav aria-label="Global">
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <a className="text-[#66fcf1] transition hover:text-[#66fcf1]/75 hover:border-b-2 hover:border-[#66FCF2] p-1" href="#"> About </a>
            </li>

            <li>
              <a className="text-[#66fcf1] transition hover:text-[#66fcf1]/75 hover:border-b-2 hover:border-[#66FCF2] p-1" href="#"> Skills </a>
            </li>

            <li>
              <a className="text-[#66fcf1] transition hover:text-[#66fcf1]/75 hover:border-b-2 hover:border-[#66FCF2] p-1" href="#">Projects</a>
            </li>

            <li>
              <a className="text-[#66fcf1] transition hover:text-[#66fcf1]/75 hover:border-b-2 hover:border-[#66FCF2] p-1" href="#">Experience</a>
            </li>

            <li>
              <a className="text-[#66fcf1] transition hover:text-[#66fcf1]/75 hover:border-b-2 hover:border-[#66FCF2] p-1" href="#">Contact</a>
            </li>

          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4">
          <a
            className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
            href="#"
          >
            Resume  
          </a>

          
        </div>

        <div className="block md:hidden">
          <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
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
  </div>
</header>
    </>
  )
}

export default Navbar;
