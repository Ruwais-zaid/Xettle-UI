import React from 'react'


const Nav = () => {
  return (
    <div className=' px-8 py-4 w-full'>
        <nav className='flex justify-between items-center '>
        <img src="https://xettle.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.6802fdda.png&w=1920&q=75" width={200} height={50} />
        <ul className='flex justify-center items-center gap-10 max-lg:hidden'>
        <li className='font-montserrat leading-normal text-2xl text-slate-gray'><a href='#'>Home</a></li>
          <li className="font-montserrat leading-normal text-2xl text-slate-gray"><a href='#'>About Us</a></li>
          <li className="font-montserrat leading-normal text-2xl text-slate-gray"><a href='#'>Products</a></li>
          <li className="font-montserrat leading-normal text-2xl text-slate-gray"><a href='#'>Contact Us</a></li>
        </ul>
        <div>
            <button className='text-2xl bg-blue-600 p-5 font-palanquin text-white rounded-xl '>BOOK DEMO</button>
        </div>
        
        </nav>
      
    </div>
  )
}

export default Nav
