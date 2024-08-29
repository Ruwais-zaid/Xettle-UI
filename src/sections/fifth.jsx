import React from 'react';
import { FaFacebook, FaInstagram, FaPinterest, FaLinkedin } from 'react-icons/fa';
import { RiTwitterXLine } from 'react-icons/ri';
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

const Fifth = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 h-auto min-h-[70vh] bg-black p-4'>
      <div className='flex flex-col justify-center items-center xl:items-start xl:p-8 gap-6 text-center xl:text-left'>
        <img 
          src='https://xettle.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-wt.22fcd2bb.png&w=256&q=75' 
          alt='Logo'
          className='w-32 md:w-40 xl:w-48'
        />
        <p className='mt-4 font-medium text-base md:text-lg xl:text-2xl text-white'>
          This is the place where quality meets innovation. Discover revolutionary solutions that will transform the way you deliver value to your customers, quickly and easily.
        </p>
        <div className='flex gap-6 text-white mt-4'>
          <FaFacebook className='w-6 h-6 md:w-8 md:h-8' />
          <FaInstagram className='w-6 h-6 md:w-8 md:h-8' />
          <FaLinkedin className='w-6 h-6 md:w-8 md:h-8' />
          <FaPinterest className='w-6 h-6 md:w-8 md:h-8' />
          <RiTwitterXLine className='w-6 h-6 md:w-8 md:h-8' />
        </div>
      </div>
      <div className='flex flex-col justify-start items-center xl:items-center xl:p-[8rem] mt-16 gap-5 '>
        <div className='flex flex-col gap-10 text-white mt-4 '>
        <h1 className='text-white text-xl md:text-2xl xl:text-4xl font-bold'>Services</h1>
          <h3 className='text-base md:text-xl'>Utility Payment Solutions</h3>
          <h3 className='text-base md:text-xl'>Domestic Money Transfer</h3>
          <h3 className='text-base md:text-xl'>Micro ATM</h3>
          <h3 className='text-base md:text-xl'>Fin-Tech Software</h3>
          <h3 className='text-base md:text-xl'>Payout Solutions</h3>
          <h3 className='text-base md:text-xl'>KYC and Validation</h3>
        </div>
      </div>
      
      <div className='flex flex-col justify-start items-center xl:items-start mt-16 p-[8rem] gap-5'>

        <div className='flex flex-col gap-10 text-white mt-4'>
        <h3 className='text-base md:text-3xl font-bold'>Helpful Links</h3>
          <h3 className='text-base md:text-xl'>About Us</h3>
          <h3 className='text-base md:text-xl'>Contact Us</h3>


        </div>
      </div>
      <div className='flex flex-col justify-start items-center xl:items-start mt-16 p-[8rem] gap-5'>

        <div className='flex flex-col gap-10 text-white mt-4'>
        <h3 className='text-base md:text-3xl font-bold '>Contact Us</h3>
          <div className='grid grid-cols-2 max-w-[90px]'>
            <div className='flex flex-col gap-24 xl:text-2xl '>
            <MdOutlineMail />
            <FaPhoneAlt />
            <FaMapMarkerAlt />
            </div>
            <div className='flex flex-col gap-14 xl:text-2xl'>
            <h3 className='text-base md:text-xl'>letstalk@xettle.net</h3>
            <h3 className='text-base md:text-xl'>+91 9654607040</h3>
            <a href='https://www.google.com/maps/place/Xettle+Technologies/@28.6072796,77.1405068,12.75z/data=!4m6!3m5!1s0x390d03007dd0c74b:0xb93a0bed79e7ea87!8m2!3d28.639986!4d77.1771597!16s%2Fg%2F11vp_dmkkb?entry=tts' className='mt-4 font-medium text-base md:text-lg  text-white text-nowrap '>715-A, Netaji Subhash Place<br /> PP Trade Center, Pitampura, <br/> New Delhi, 110034</a>
            </div>

          </div>



        </div>
      </div>
    </div>
  );
};

export default Fifth;
