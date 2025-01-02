import  { useState } from 'react';
import { IoIosLogOut } from "react-icons/io";
import { GoScreenFull } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";
import { AiFillCloseCircle } from 'react-icons/ai';
import { HiMenu } from "react-icons/hi";
import Sidebar from './Sidebar'; // Make sure the path is correct

const Navbar = () => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    return (
        <div>
            <div className='flex justify-between border-b-[1px] p-2'>
                <div className='flex justify-between border-r-[1px] p-4 w-[28rem]'>
                    <div className='flex space-x-[-6rem]'>
                        <img src="https://dashboard.xettle.net/public/vassets/assets/images/XETTLE_LOGO_X.png" alt="Xettle Logo" width={200} height={150} />
                        <span className='text-black mt-7 text-4xl italic font-bold'>XETTLE</span>
                    </div>
                    <HiMenu className='text-black text-3xl mt-9 cursor-pointer' onClick={toggleSidebar} />
                </div>
                {
                    isSidebarVisible && (
                        <div className='fixed w-[28rem] bg-white overflow-y-auto shadow-md z-10 animate-slide-in'>
                            <div className='absolute w-full flex justify-end items-center p-2'>
                                <AiFillCloseCircle fontSize={30} className='cursor-pointer text-black' onClick={toggleSidebar} />
                            </div>
                            <Sidebar closeToggle={toggleSidebar} />
                        </div>
                    )
                }
                <div className='mr-5 mt-10'>
                    <BsThreeDots className='md:text-3xl lg:hidden text-black' />
                </div>
                <div className='flex p-9 justify-between max-xl:hidden'>
                    <GoScreenFull className='w-60 h-8 text-black text-xl mt-2' />
                    <div className='flex gap-5 bg-blue-200 p-3 rounded-lg'>
                        <IoIosLogOut className='font-bold text-3xl text-blue-500 text-center' />
                        <button className='font-bold text-2xl text-blue-500'>Logout</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
