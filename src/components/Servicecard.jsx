import React from 'react';

const Servicecard = ({ imageURL, label, content, link }) => {
  return (
    <div className='flex-1 sm:w-[250px] xl:w-[200px] rounded-md shadow-xl p-4 space-y-10'>
      <div className='mx-auto w-[400px] h-[200px] sm:h-[300px] flex justify-center items-center shadow-lg rounded-xl overflow-hidden'>
        <img src={imageURL} alt={label} className='object-contain w-[400px] h-[400px]' />
      </div>
      <h3 className='mt-7 text-center text-2xl sm:text-3xl font-bold '>{label}</h3>
      <p className=' font-medium sm:text-lg text-gray-700 '>{content}</p>
      <a href='/' className=' text-blue-500 font-bold  hover:underline'>
    {link}
  </a>
    </div>
    
  );
};

export default Servicecard;
