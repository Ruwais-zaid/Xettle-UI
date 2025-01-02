import { useState } from 'react';
import { MdAddHome } from "react-icons/md";
import { TbReport } from "react-icons/tb";
import { GoStack } from "react-icons/go";
import { CiFolderOn } from "react-icons/ci";
import { FiUsers } from "react-icons/fi"; 
import { IoIosArrowDown } from "react-icons/io";

const Sidebar = () => {
    const [isDrop1, setIsDrop1] = useState(false);
    const [isDrop2, setIsDrop2] = useState(false);

    const handleDrop1Click = () => {
        setIsDrop1(!isDrop1);
    }

    const handleDrop2Click = () => {
        setIsDrop2(!isDrop2);
    }

    return (
            <div className='border-r-[1px] w-[28.5rem] min-h-screen'>
                <div className='px-40 py-10 flex flex-col gap-4'>
                    <div className='bg-green-200 rounded-full h-[7rem] w-[7.2rem] pt-10 mx-auto px-3'>
                        <span className='bg-blue-600 text-white rounded-full font-thin text-2xl p-8 '>ZA</span>
                    </div>
                    <span className='text-black text-xl font-semibold text-center'>ruwais zaid</span>
                </div>
                <div className='flex justify-between gap-7 text-2xl text-center px-8 font-mono'>
                    <div className='flex flex-col gap-2'>
                        <span className='text-black font-semibold'>40,079.08</span>
                        <span className='text-gray-400 text-xl'>Total</span>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <span className='text-black font-semibold'>0</span>
                        <span className='text-gray-400 text-xl'>Settled</span>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <span className='text-black font-semibold'>40,079.08</span>
                        <span className='text-gray-400 text-xl'>Pending</span>
                    </div>
                </div>

                <div className='border-t-[1px] mt-10 p-14 font-medium text-2xl text-black'>
                    <div className='flex flex-col gap-10'>
                        <div className='flex justify-between'>
                            <div className='flex gap-5 p-3 hover:bg-blue-500 hover:p-3 rounded-md hover:text-gray-200 hover:w-full'>
                                <MdAddHome className='text-3xl'/>
                                <span>Dashboard</span>
                            </div>
                        </div>
                        <div className='flex justify-between text-center p-3 hover:bg-blue-500 hover:p-3 rounded-md hover:text-gray-200'>
                            <div className='flex gap-5'>
                                <TbReport className='text-3xl' />
                                <span>Reports</span>
                            </div>
                            <IoIosArrowDown onClick={handleDrop1Click} />
                        </div>
                        {isDrop1 && (
                            <div className='ml-12 mt-[-20px] font-light flex flex-col gap-3'>
                                <span className='hover:bg-blue-500 hover:p-3 rounded-md hover:text-gray-200 p-3 hover:w-full'>Payout</span>
                                <span className='hover:bg-blue-500 hover:p-3 rounded-md hover:text-gray-200 p-3 hover:w-full'>UPI</span>
                            </div>
                        )}

                        <div className='flex justify-between text-center hover:bg-blue-500 hover:p-3 rounded-md hover:text-gray-200 p-3'>
                            <div className='flex gap-5'>
                                <GoStack className='text-3xl' />
                                <span>History</span>
                            </div>
                            <IoIosArrowDown onClick={handleDrop2Click} />
                        </div>
                        {isDrop2 && (
                            <div className='ml-12 mt-[-20px] font-light flex flex-col gap-3'>
                                <span className='hover:bg-blue-500 hover:p-3 rounded-md hover:text-gray-200 p-3 hover:w-full'>Payout</span>
                                <span className='hover:bg-blue-500 hover:p-3 rounded-md hover:text-gray-200 p-3 hover:w-full    '>UPI</span>
                            </div>
                        )}

                        <div className='flex gap-5 hover:bg-blue-500 hover:p-3 rounded-md hover:text-gray-200 p-3'>
                            <CiFolderOn className='text-3xl'/>
                            <span>Ledgers</span>
                        </div>
                        <div className='flex gap-5 hover:bg-blue-500 hover:p-3 rounded-md hover:text-gray-200 p-3'>
                            <FiUsers className='text-3xl'/>
                            <span>Users</span>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default Sidebar;
