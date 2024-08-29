import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Otp from './Otp';

const Register = () => {
  const navigate = useNavigate();
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    mobile: '',
    password: '',
    confirmpassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmpassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }

      alert('Registration successful!');
      setIsOtpSent(true);  // Set OTP state to true when successful

      // Navigate to OTP verification page
      navigate('/verify', { state: { mobile: formData.mobile } });

    } catch (error) {
      console.error('Error:', error);
      alert('Registration failed: ' + error.message);
    }
  };

  if (isOtpSent) {
    return <Otp mobile={formData.mobile} />;  // Render OTP component after registration
  }

  return (
    <div className="bg-[#071232] flex justify-center items-center h-screen">
      <div className="w-1/2 h-screen hidden lg:block">
        <img
          src="https://xettle.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcont-img.fd304de1.png&w=1920&q=75"
          alt="Placeholder Image"
          className="object-cover w-full h-full"
        />
      </div>
      
      <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
        <h1 className="text-5xl font-normal text-white text-center mb-4">Create New Account</h1>
        <h1 className="text-xl font-normal text-gray-500 text-center mb-16">Enter your personal details to create your account</h1>
        
        <form onSubmit={handleSubmit} className='text-black'>
          <div className='flex flex-col gap-4 mb-2'>
            <label htmlFor="firstname" className='font-semibold text-2xl text-white'>Your Name</label>
            <div className='flex gap-4 py-2'>
              <input
                type="text"
                placeholder='First Name'
                name='firstname'
                value={formData.firstname}
                onChange={handleChange}
                className='text-gray-500 text-md font-thin h-10 rounded-md p-2 w-full'
              />
              <input
                type="text"
                placeholder='Last Name'
                name='lastname'
                value={formData.lastname}
                onChange={handleChange}
                className='text-gray-500 text-md rounded-md h-10 p-2 font-thin w-full'
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-xl mb-2 font-semibold text-white">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter E-Mail"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="mobile" className="block text-white mb-2 text-xl font-semibold">Mobile</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Enter Mobile"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
            />
          </div>

          <div className='flex flex-col gap-4 mb-5'>
            <label htmlFor="password" className='font-semibold text-2xl text-white'>Password</label>
            <div className='flex gap-4'>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className='text-gray-500 text-md font-thin h-10 rounded-md p-2 w-full'
              />
              <input
                type="password"
                name="confirmpassword"
                value={formData.confirmpassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                className='text-gray-500 text-md rounded-md h-10 p-2 font-thin w-full'
              />
            </div>
          </div>

          <div className='flex justify-center text-xl'>
            <button
              type="submit"
              className="bg-[#071232] hover:bg-blue-600 border-[1px] border-blue-500 text-white font-semibold rounded-md py-2 px-4 w-full"
            >
              CREATE ACCOUNT
            </button>
          </div>
        </form>

        <div className='text-center mt-6'>
          <a href="/login" className='text-white font-semibold text-lg'> Already have an account? <span className='text-blue-500 text-lg'>Sign in</span></a>
        </div>
      </div>
    </div>
  );
};

export default Register;
