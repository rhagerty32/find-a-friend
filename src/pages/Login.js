import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../logo.svg'; // Ensure the logo path is correct

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        // Simulate login (You can add authentication logic later)
        navigate('/onboarding-birthday');  // Redirect to Onboarding Page after login
    };

    return (
        <div className="h-screen flex flex-col items-center justify-center text-center px-6">
            {/* Logo */}
            <img src={logo} alt="Find a Friend Logo" className="w-70 h-70 mb-3" />

            {/* Title */}
            <h1 className="text-5xl font-bold text-black mb-16">find a friend</h1>

            {/* Description */}
            <div className="mx-20">
                <p className="font-light font-['Averia_Serif_Libre'] text-black text-2xl leading-tight mb-16">
                    Connect with fellow LDS members and build meaningful friendships.
                    <br></br>Your next adventure starts here!
                </p>
            </div>

            {/* Login Button */}
            <button 
                className="relative w-[80%] max-w-sm bg-white border-2 border-[#D9D9D9] rounded-[16px] px-0 py-4 hover:shadow-md transition mb-16 flex items-center overflow-hidden"
                onClick={handleLogin} // Redirect to onboarding
            >
                <img 
                    src={`${process.env.PUBLIC_URL}/church.png`} 
                    alt="Church Account Logo"
                    className="h-full w-auto absolute left-0 top-0 rounded-l-lg object-cover"
                />
                <span className="relative w-full text-center px-6 pl-20">
                    Continue with Church Account
                </span>
            </button>

            {/* Privacy Link */}
            <div className="mt-4 text-gray-500 text-sm">
                <a href="" className="underline">Privacy</a> | © Team 313
            </div>
        </div>
    );
};

export default Login;
