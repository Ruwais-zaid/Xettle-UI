import React from 'react';
import StatCards from '../components/StatCards';

const Fourth = () => {
  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 gap-6 p-6 xl:p-12 h-[60vh] bg-gray-500'>
      {/* Text Content */}
      <div className='flex flex-col justify-center items-center xl:items-start text-center xl:text-left ml-[20rem] '>
        <h1 className='text-xl xl:text-4xl font-bold text-black mb-4'>
          Why <span className='text-blue-500'>Xettle?</span>
        </h1>
        <ol className='list-disc list-inside text-lg xl:text-2xl text-gray-800 font-semibold'>
          <li className='mb-3'>Working experience in software and finance for years.</li>
          <li className='mb-3'>Solutions that are user-friendly while addressing complex issues.</li>
          <li className='mb-3'>Services that scale with your business growth.</li>
        </ol>
        <h1 className='mt-5 text-xl xl:text-4xl font-bold text-black mb-4'>
          Let's <span className='text-blue-500'> Work Together</span>
        </h1>
        <p className='text-lg xl:text-2xl font-semibold text-gray-800'>Are you ready to level up your business? We would like to discuss with you the features that will allow Xettle to meet your objectives.</p>
      </div>
      

      {/* Optional Image or Additional Content */}
      <div className='flex justify-center items-center'>
        <StatCards/>
      </div>
    </div>
  );
};

export default Fourth;
