import React from 'react';
import vector from '../assets/stock1.mp4'; // Ensure this path is correct

const First = () => {
  return (
    <div className='w-full flex flex-col xl:flex-row justify-between p-4 xl:p-9 h-auto xl:h-screen gap-6 xl:gap-6'>
      {/* Text Content */}
      <div className='mt-32 relative xl:w-2/7 flex flex-col p-4 xl:p-[9rem]'>
        <h1 className='mt-10 font-palanquin text-7xl max-sm:text-[62px] max-sm:leading-[82] font-bold'>
          <span className='xl:whitespace-nowrap relative  pr-10 text-blue-500'>Xettle:</span>Transforming Software and Finance
        </h1>

        <p className='mt-7 font-semibold xl:text-xl 3xl:text-xl text-gray-700 mb-6 font-palanquin'>
          At Xettle, we are revolutionizing how businesses manage software and their finances. Our innovative approach combines industry expertise with cutting-edge technology to address real-world challenges effectively.
        </p>
        <button className='w-full xl:w-1/5 flex justify-center items-center gap-2 p-3 border font-medium text-base xl:text-lg bg-blue-500 rounded-full text-white'>
          Get Started
        </button>
      </div>
      
      {/* Video */}
      <div className='w-full xl:w-3/5 flex justify-center'>
        <video className='w-full max-w-[40rem]' autoPlay loop muted>
          <source src={vector} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default First;
