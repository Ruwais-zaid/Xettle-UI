import Navbar  from '../Components/Navbar'
import { IoIosRefresh } from "react-icons/io";
import { MdOutlinePayments } from "react-icons/md";
const Home = () => {
  return (
    <div>
      <Navbar/>
      <main>
        <div className='pt-5 pl-20 flex justify-between items-center'>
        <h1 className='text-black text-3xl  font-semibold'>Financial Overview </h1>
        <div className=' flex gap-7 mb-2 '>
          <select name="" id="" className='text-gray-500 border-[1px] font-semibold p-3 rounded-md text-[25px] border-gray-300  outline-none'>
            <option value="1">Today</option>
            <option value="2">YesterDay</option>
            <option value="3">7 Days</option>
            <option value="4">30 Days</option>
            <option value="4">Custome Range</option>
          </select>
          <div className='border-[1px] p-3 rounded-md mr-10 flex min-w-[15rem] relative border-gray-300 outline-none'>
          <IoIosRefresh className=' text-amber-800  absolute left-12 top-5   ' fontSize={25}/>
          <button className='text-amber-800 text-[25px] font-semibold px-20 '>Refresh</button>
          </div>
          
        </div>


        </div>
        <hr />
        <div className='grid grid-col-2 shadow-xl '>
          <div className='flex flex-col space-y-[-18rem]  '>
          <div className='flex  gap-5 p-10'>
            <div className='border-[1px] flex flex-col gap-5  w-[25rem] h-[25rem]   rounded-3xl shadow-xl text-center'>
              <div className=' w-20 h-20 bg-blue-600 rounded-full p-5 mx-auto  mt-5'>
              <MdOutlinePayments className=' text-white w-10 h-10' />
              </div>
              <h1 className='text-gray-400 font-normal  leading-10 text-2xl'>Payout Processed</h1>
              <span className='text-black  font-bold text-3xl  '>₹0.00</span>
              <span className='text-blue-600 font-bold text-2xl'>0</span>
          

            </div>
            <div className='border-[1px] flex flex-col gap-5 w-[25rem] h-[25rem]   rounded-3xl shadow-xl text-center'>
              <div className=' w-20 h-20 bg-blue-600 rounded-full p-5 mx-auto  mt-10'>
              <MdOutlinePayments className=' text-white w-10 h-10' />
              </div>
              <h1 className='text-gray-400 font-normal  leading-10 text-2xl'>Payout Processed</h1>
              <span className='text-black  font-bold text-3xl  '>₹0.00</span>
              <span className='text-blue-600 font-bold text-2xl'>0</span>
          

            </div>
            <div className='border-[1px] flex flex-col gap-5 w-[25rem] h-[25rem]   rounded-3xl shadow-xl text-center'>
              <div className=' w-20 h-20 bg-blue-600 rounded-full p-5 mx-auto  mt-10'>
              <MdOutlinePayments className=' text-white w-10 h-10' />
              </div>
              <h1 className='text-gray-400 font-normal  leading-10 text-2xl'>Payout Processed</h1>
              <span className='text-black  font-bold text-3xl  '>₹0.00</span>
              <span className='text-blue-600 font-bold text-2xl'>0</span>
          

            </div>
            <div>

            </div>
            
            <div className='border-[1px] min-w-[59rem] h-[40rem] p-6 text-start rounded-3xl overflow-scroll  '>
              <span className='text-black font-semibold text-4xl p-3 border-b-[1px] leading-10  '>Latest Activity</span>
              <div className='flex text-black text-md  font-bold justify-between mt-10 p-1 pl-10  '>
                <span>USER</span>
                <span>ACTION</span>
                <span>TIME</span>
              </div>

              <div className='flex flex-col gap-3'>
                <hr />
                <div className='flex justify-between pt-3 '>
                <p className='text-gray-500 font-normal text-[17px]' >Raingam Ngalung <br />
                maitreyaenterprise753@gmail.com</p>
                <p className='text-black text-[20px] font-semibold'>User Logged In <br /> <span className='text-gray-500 text-[17px]'> 223.186.117.227</span>
               </p>
               <p className='text-gray-500 text-lg'>2024-08-19 23:36:33</p>

  
               

                </div>
                <hr />
                <div className='flex justify-between pt-3 '>
                <p className='text-gray-500 font-normal text-[17px]' >Raingam Ngalung <br />
                maitreyaenterprise753@gmail.com</p>
                <p className='text-black text-[20px] font-semibold'>User Logged In <br /> <span className='text-gray-500 text-[17px]'> 223.186.117.227</span>
               </p>
               <p className='text-gray-500 text-lg'>2024-08-19 23:36:33</p>
               

                </div>
                <hr />
                <div className='flex justify-between pt-3 '>
                <p className='text-gray-500 font-normal text-[17px]' >Raingam Ngalung <br />
                maitreyaenterprise753@gmail.com</p>
                <p className='text-black text-[20px] font-semibold'>User Logged In <br /> <span className='text-gray-500 text-[17px]'> 223.186.117.227</span>
               </p>
               <p className='text-gray-500 text-lg'>2024-08-19 23:36:33</p>
               

                </div>
                <div className='flex justify-between pt-3 '>
                <p className='text-gray-500 font-normal text-[17px]' >Raingam Ngalung <br />
                maitreyaenterprise753@gmail.com</p>
                <p className='text-black text-[20px] font-semibold'>User Logged In <br /> <span className='text-gray-500 text-[17px]'> 223.186.117.227</span>
               </p>
               <p className='text-gray-500 text-lg'>2024-08-19 23:36:33</p>
               

                </div>
                <hr />
                <div className='flex justify-between pt-3 '>
                <p className='text-gray-500 font-normal text-[17px]' >Raingam Ngalung <br />
                maitreyaenterprise753@gmail.com</p>
                <p className='text-black text-[20px] font-semibold'>User Logged In <br /> <span className='text-gray-500 text-[17px]'> 223.186.117.227</span>
               </p>
               <p className='text-gray-500 text-lg'>2024-08-19 23:36:33</p>
               

                </div>

                
              </div>
              <div className='flex justify-between pt-3 '>
                <p className='text-gray-500 font-normal text-[17px]' >Raingam Ngalung <br />
                maitreyaenterprise753@gmail.com</p>
                <p className='text-black text-[20px] font-semibold'>User Logged In <br /> <span className='text-gray-500 text-[17px]'> 223.186.117.227</span>
               </p>
               <p className='text-gray-500 text-lg'>2024-08-19 23:36:33</p>
               

                </div>
                <div className='flex justify-between pt-3 '>
                <p className='text-gray-500 font-normal text-[17px]' >Raingam Ngalung <br />
                maitreyaenterprise753@gmail.com</p>
                <p className='text-black text-[20px] font-semibold'>User Logged In <br /> <span className='text-gray-500 text-[17px]'> 223.186.117.227</span>
               </p>
               <p className='text-gray-500 text-lg'>2024-08-19 23:36:33</p>
               

                </div>
                
            </div>

            </div>
            <div className='p-10 flex gap-5 '>
            <div className='border-[1px] flex flex-col gap-5 w-[25rem] h-[25rem]   rounded-3xl shadow-xl text-center' >
              <div className=' w-20 h-20 bg-blue-600 rounded-full p-5 mx-auto  mt-10'>
              <MdOutlinePayments className=' text-white w-10 h-10' />
              </div>
              <h1 className='text-gray-400 font-normal  leading-10 text-2xl'>Payout Processed</h1>
              <span className='text-black  font-bold text-3xl  '>₹0.00</span>
              <span className='text-blue-600 font-bold text-2xl'>0</span>
          

            </div>
            <div className='border-[1px] flex flex-col gap-5 w-[25rem] h-[25rem]   rounded-3xl shadow-xl text-center' >
              <div className=' w-20 h-20 bg-blue-600 rounded-full p-5 mx-auto  mt-10'>
              <MdOutlinePayments className=' text-white w-10 h-10' />
              </div>
              <h1 className='text-gray-400 font-normal  leading-10 text-2xl'>Payout Processed</h1>
              <span className='text-black  font-bold text-3xl  '>₹0.00</span>
              <span className='text-blue-600 font-bold text-2xl'>0</span>
          

            </div>
            
            </div>

           
            


          </div>
          
          <div className='border-[1px] w-[140rem] mx-auto p-20 rounded-3xl overflow-y-scroll'>
  <div className='flex flex-col gap-10 p-10'>
    <span className='text-black font-semibold text-4xl'>Ledger</span>
    <div className='flex flex-col gap-5'>
      <div className='grid grid-cols-7   text-black text-[13px] font-bold gap-32' >
        <span>USER</span>
        <span>TXN ID</span>
        <span>ORDER REF</span>
        <span>TYPE</span>
        <span>AMOUNT</span>
        <span>NARRATION</span>
        <span>DATE & TIME</span>
      </div>
      <hr />
      <div className='grid grid-cols-7   text-[13px] font-semibold gap-32' >
        <p className='text-gray-500 text-lg'>
        Raingam Ngalung <br />
        maitreyaenterprise753@gmail.com
        </p>
        <p className='text-gray-500 text-lg'>TXN38401896437323763F8</p>
        <p className='text-gray-500 text-lg'>REF384018474082322E</p>
        <span className='bg-red-500 rounded-xl w-[5rem] h-[4vh] p-1 text-center text-xl text-white'>DR</span>
        <p className='text-gray-500 text-lg '>130</p>
        <span className='text-gray-500 text-lg '>137.08 debited against REF384018474082322E</span>
        <span className='text-gray-500 text-lg '>2024-07-26 09:49:30</span>
      </div>
      <div className='grid grid-cols-7 gap-32  text-[13px] font-semibold'>
        <p className='text-gray-500 text-lg'>
        Raingam Ngalung <br />
          maitreyaenterprise753@gmail.com
        </p>
        <p className='text-gray-500 text-lg'>TXN38401896437323763F8</p>
        <p className='text-gray-500 text-lg'>REF384018474082322E</p>
        <span className='bg-red-500 rounded-xl w-[5rem] h-[4vh] p-1 text-center text-xl text-white'>DR</span>
        <p className='text-gray-500 text-lg '>130</p>
        <span className='text-gray-500 text-lg  '>137.08 debited against REF384018474082322E</span>
        <span className='text-gray-500 text-lg '>2024-07-26 09:49:30</span>
      </div>  
      <div className='grid grid-cols-7 gap-32  text-[13px] font-semibold'>
        <p className='text-gray-500 text-lg'>
        Raingam Ngalung <br />
          maitreyaenterprise753@gmail.com
        </p>
        <p className='text-gray-500 text-lg'>TXN38401896437323763F8</p>
        <p className='text-gray-500 text-lg'>REF384018474082322E</p>
        <span className='bg-red-500 rounded-xl w-[5rem] h-[4vh] p-1 text-center text-xl text-white'>DR</span>
        <p className='text-gray-500 text-lg '>130</p>
        <span className='text-gray-500 text-lg  '>137.08 debited against REF384018474082322E</span>
        <span className='text-gray-500 text-lg '>2024-07-26 09:49:30</span>
      </div>
      <div className='grid grid-cols-7 gap-32  text-[13px] font-semibold'>
        <p className='text-gray-500 text-lg'>
        Raingam Ngalung <br />
          maitreyaenterprise753@gmail.com
        </p>
        <p className='text-gray-500 text-lg'>TXN38401896437323763F8</p>
        <p className='text-gray-500 text-lg'>REF384018474082322E</p>
        <span className='bg-red-500 rounded-xl w-[5rem] h-[4vh] p-1 text-center text-xl text-white'>DR</span>
        <p className='text-gray-500 text-lg '>130</p>
        <span className='text-gray-500 text-lg  '>137.08 debited against REF384018474082322E</span>
        <span className='text-gray-500 text-lg '>2024-07-26 09:49:30</span>
      </div>
      <div className='grid grid-cols-7 gap-32  text-[13px] font-semibold'>
        <p className='text-gray-500 text-lg'>
        Raingam Ngalung <br />
          maitreyaenterprise753@gmail.com
        </p>
        <p className='text-gray-500 text-lg'>TXN38401896437323763F8</p>
        <p className='text-gray-500 text-lg'>REF384018474082322E</p>
        <span className='bg-red-500 rounded-xl w-[5rem] h-[4vh] p-1 text-center text-xl text-white'>DR</span>
        <p className='text-gray-500 text-lg '>130</p>
        <span className='text-gray-500 text-lg  '>137.08 debited against REF384018474082322E</span>
        <span className='text-gray-500 text-lg '>2024-07-26 09:49:30</span>
      </div>
      <div className='grid grid-cols-7 gap-32  text-[13px] font-semibold'>
        <p className='text-gray-500 text-lg'>
        Raingam Ngalung <br />
          maitreyaenterprise753@gmail.com
        </p>
        <p className='text-gray-500 text-lg'>TXN38401896437323763F8</p>
        <p className='text-gray-500 text-lg'>REF384018474082322E</p>
        <span className='bg-red-500 rounded-xl w-[5rem] h-[4vh] p-1 text-center text-xl text-white'>DR</span>
        <p className='text-gray-500 text-lg '>130</p>
        <span className='text-gray-500 text-lg  '>137.08 debited against REF384018474082322E</span>
        <span className='text-gray-500 text-lg '>2024-07-26 09:49:30</span>
      </div>
      
    </div>
  </div>
</div>

        </div>
        

      </main>
      
    </div>
  )
}

export default Home
