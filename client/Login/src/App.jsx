import React from 'react';
import { IoWallet } from "react-icons/io5";

const App = () => {
  return (
    <main className="relative min-h-screen">
      {/* Background Image */}
    
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1644316902396-9bd0558cd771?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className='absolute  top-1/2 left-1/2 transform xl:-translate-x-[59em]  lg:-translate-x-1/2 md:-translate-x-1/2 sm:-translate-x-1/2  -translate-y-[25rem]  italic font-bold z-20'>
      <div className='flex gap-3 mx-auto '>
      < IoWallet className="w-[4rem] h-[4rem]  text-blue-500" />
      <h1 className='text-6xl text-gray-400'>Haoda <span className='text-black'>Pay</span></h1>
      </div>
      </div>
      {/* Sign In Form */}
      <div className="absolute top-1/2 left-1/2 transform xl:-translate-x-[65rem]  lg:-translate-x-1/2 md:-translate-x-1/2 sm:-translate-x-1/2  -translate-y-1/2 z-20  w-[35rem] min-h-[34rem] rounded-xl shadow-lg bg-[rgba(0,0,0,0.35)]">
        <div className="p-5 flex flex-col gap-5 mt-10">
          <h1 className="text-5xl text-center text-blue-400 font-bold">Sign In</h1>
          <div className="flex flex-col gap-6 items-center mt-10">
            <input
              type="text"
              placeholder="Email Address*"
              className="text-blue-500 w-[25rem] text-lg rounded-full border-[1px] h-[3rem] p-4 border-gray-500 outline-none"
            />
            <input
              type="password"
              placeholder="Password*"
              className="text-blue-500 w-[25rem] text-lg rounded-full border-[1px] h-[3rem] p-4 border-gray-500 outline-none"
            />
          </div>
          <a href="#" className="text-right text-md font-semibold text-gray-300">
            Forgot your password ?
          </a>
          <div className="flex flex-col gap-5 mt-5">
            <button className="bg-blue-500 w-[20rem] text-white text-xl rounded-xl h-[3rem] mx-auto font-thin hover:bg-black hover:text-white">
              Login
            </button>
            <button className="bg-blue-700 w-[20rem] text-white text-xl rounded-xl h-[3rem] mx-auto font-thin hover:bg-black hover:text-white">
              Create New Account
            </button>
          </div>
          <div className='flex items-center justify-between mt-10 text-white'>
            <a href='#'>Contact Support</a>
            <a href='#'>Terms and Conditions</a>
            <a href='#'>Privacy Policy</a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
