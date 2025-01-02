/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'

const Login = () => {
    const Navigate = useNavigate();
    const [cred, setCred] = useState({ email: "", password: "" });

    const handleChangeEvent = (event) => {
        const { name, value } = event.target;
        setCred({ ...cred, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(JSON.stringify({ email: cred.email, password: cred.password }));

        try {
            const response = await fetch("http://localhost:3000/api/login", {
                method: "POST",
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: cred.email, password: cred.password }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error(errorData);
                alert("Login Failed: " + errorData.message);
                return;
            }

            const data = await response.json();
            const authToken = data.token;
            localStorage.setItem('authToken', authToken);
            alert("Login Successful!");
            Navigate('/verify')

        } catch (error) {
            console.error(error);
            alert("Login Failed: Please try again later!");
        }
    };

    return (
        <div className="bg-[#071232] flex justify-center items-center h-screen">
            <div className="w-1/2 h-screen hidden lg:block">
                <img
                    src="https://xettle.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcont-img.fd304de1.png&w=1920&q=75"
                    alt="Placeholder Image"
                    className="object-cover w-full h-full"
                />
            </div>

            <div className="lg:p-36 md:p-52 sm:p-20 p-8 w-full lg:w-1/2">
                <h1 className="text-5xl font-bold text-white text-center mb-4">Login</h1>
                <h2 className="text-2xl font-bold text-gray-500 text-center">Welcome back! Log in to your account.</h2>

                <form onSubmit={handleSubmit} className="text-black mt-6">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-xl mb-2 font-semibold text-white">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={cred.email}
                            onChange={handleChangeEvent}
                            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                            autoComplete="off"
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="password" className="block text-xl mb-2 font-semibold text-white">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={cred.password}
                            onChange={handleChangeEvent}
                            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                            autoComplete="off"
                        />
                    </div>

                    <div className="mb-4 flex items-center">
                        <input
                            type="checkbox"
                            id="remember"
                            name="remember"
                            className="text-blue-500"
                        />
                        <label htmlFor="remember" className="text-xl ml-2 font-semibold text-slate-400">
                            Remember Me
                        </label>
                    </div>

                    <div className="mb-6 text-xl font-semibold text-blue-600 flex justify-between">
                        <a href="#" className="hover:underline">Forgot Password?</a>
                        <a href="/signup" className="hover:underline">Sign up Here</a>
                    </div>

                    <div className="flex justify-center text-xl">
                        <button
                            type="submit"
                            className="bg-[#071232] text-xl hover:bg-blue-600 border-[1px] border-blue-500 text-white font-semibold rounded-md py-2 px-4 w-full"
                        >
                            SIGN IN
                        </button>
                    </div>
                </form>

                <div className="text-center mt-6">
                    <a href="/signup" className="text-white font-semibold text-lg">
                        Don't have an account? <span className="text-blue-500">Create Account</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Login;
