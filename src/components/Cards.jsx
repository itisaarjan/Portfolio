import React from 'react';
import { motion } from 'framer-motion';
import wanderLust from '../assets/wanderlustpic.jpeg';

function Cards(props) {
  return (
    <article className="flex bg-black text-white transition hover:shadow-xl p-4" style={{ width: '70%' }}>
      <div className="rotate-180 p-2 [writing-mode:_vertical-lr] ">
        <time
          datetime="2022-10-10"
          className="flex items-center justify-between gap-4 text-xs font-bold uppercase"
        >
          <span>{props.year}</span>
          <span className="w-px flex-1 bg-[#00BFFF]/20"></span>
          <span>{props.date}</span>
        </time>
      </div>

      <div className="hidden sm:block sm:basis-56">
        <img
          alt=""
          src={props.imglink}
          className="object-none h-[80%] w-[80%] "
          style={{ objectFit: 'cover' }} // Ensures the image fits well
        />
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <div className="border-s border-[#00BFFF] p-4 sm:border-l-transparent sm:p-6">
          <a href="#">
            <h3 className="font-bold uppercase text-white">
              {props.title}
            </h3>
          </a>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-300">
            {props.description}
          </p>
        </div>

        <div className="sm:flex sm:items-end sm:justify-end">
          <a
            href={props.link}
            target='_blank'
            className="block bg-[#00BFFF] px-5 py-3 text-center text-xs font-bold uppercase text-white transition hover:bg-[#00BFFF]/80"
          >
            Watch Demo
          </a>
        </div>
      </div>
    </article>
  );
}

export default Cards;
