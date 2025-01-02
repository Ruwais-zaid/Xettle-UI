import { useState } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';

const Otp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');
  const mobile = location.state?.mobile || '';


  const handleSendOtp = async () => {
    if (!mobile) {
      alert('Mobile number is missing');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/send-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mobile }),
      });
      console.log(JSON.stringify({ mobile }));

      if (response.ok) {
        alert('OTP Sent!');

      } else {
        alert('Error sending OTP');
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mobile, otp }),
      });


      console.log(JSON.stringify({mobile,otp}))
      if (response.ok) {
        navigate('/')
      } else {
        alert('Invalid OTP');
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className='bg-[url("https://xettle.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcont-img.fd304de1.png&w=1920&q=75")] bg-cover bg-center w-full min-h-screen flex justify-center items-center'>
      <div className='bg-[#071232] flex flex-col justify-center items-center w-full max-w-xl p-10 shadow-lg'>
        <h1 className="text-white text-2xl font-thin mb-4">Enter OTP sent to {mobile.slice(3,6)+'XXX'+mobile.slice(9)}</h1>
        <input
          type="text"
          inputMode="numeric"
          pattern="\d{6}"
          maxLength={6}
          tabIndex={2}
          placeholder='Enter the OTP'
          onChange={(e) => setOtp(e.target.value)}
          className='text-gray-400 text-md font-thin p-2 border bg-black border-gray-300 rounded-md focus:outline-none focus:border-blue-500 mb-4 w-full'
        />
        <div className='flex gap-2'>
          <button
            className='bg-blue-500 max-w-lg text-white p-2 rounded-lg'
            onClick={handleVerifyOtp}
          >
            VERIFY OTP
          </button>
          <button
            className='bg-[#071232] text-white border-[1px] border-blue-500 max-w-lg p-2 rounded-lg'
            onClick={handleSendOtp}
          >
            RESEND OTP
          </button>
        </div>
      </div>
    </div>
  );
};

export default Otp;
