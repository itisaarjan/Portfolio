
import React from 'react';
import Skilllogo from './Skilllogo'; 
import reactlogo from '../assets/logo/react.png';
import nodelogo from '../assets/logo/node.png';
import cpluslogo from '../assets/logo/c++.png';
import gitlogo from '../assets/logo/git.png';
import htmllogo from '../assets/logo/html.png';
import csslogo from '../assets/logo/css.png';
import jslogo from '../assets/logo/js.png';
import mongologo from '../assets/logo/mongo.png';
import reduxlogo from '../assets/logo/redux.png';
import mysqllogo from '../assets/logo/mysql.png';

function Skills(props, ref) {
  return (
    <section ref={ref} className='flex items-center justify-center flex-col font-poppins mt-16'>
      <h1 className='text-white text-4xl mb-4'>Tools that I Prefer Using</h1>
      <h4 className='text-gray-500 mb-4'>Frontend Technologies I Prefer Using</h4>
      <div className='w-[80%] max-w-[1200px] grid grid-cols-1 gap-y-12 p-4'>
        <div className='w-full grid grid-cols-3 md:grid-cols-4 gap-6'>
          <Skilllogo logo={htmllogo} />
          <Skilllogo logo={csslogo} />
          <Skilllogo logo={jslogo} />
          <Skilllogo logo={reactlogo} />
          <Skilllogo logo={reduxlogo} />
          <Skilllogo logo={gitlogo} />
        </div>
        <h4 className='text-gray-500 text-center mt-4'>Other technologies that I use</h4>
        <div className='w-full grid grid-cols-4 gap-6'>
          <Skilllogo logo={cpluslogo} />
          <Skilllogo logo={nodelogo} />
          <Skilllogo logo={mongologo} />
          <Skilllogo logo={mysqllogo} />
        </div>
      </div>
    </section>
  );
}

export default React.forwardRef(Skills);
