import React from 'react';
import curl from '../assets/curl.png';
import back from '../assets/cont-img.png';

const Third = () => {
  return (
    <div 
      className='relative grid grid-cols-1 xl:grid-cols-2 gap-6 p-6 xl:p-12 h-[60vh] bg-cover bg-center' 
      style={{ backgroundImage: `url(${back})` }}
    >
      {/* Text Content */}
      <div className='flex flex-col justify-center text-center xl:text-left z-10'>
        <h1 className='text-white text-5xl sm:text-6xl font-bold leading-tight mb-4'>
          Developer-Friendly
        </h1>
        <p className='text-slate-300 font-medium sm:text-lg'>
          For the tech-savvy, we provide well-documented APIs with clear documentation. Easy to build and integrate with - and we'll talk your language.
        </p>
      </div>

      {/* Image */}
      <div className='flex justify-center xl:justify-end items-center'>
        <img src={curl} alt="Curl API"  className=' w-full max-w-[30rem] xl:max-w-[50rem]' />
      </div>
    </div>
  );
};

export default Third;
