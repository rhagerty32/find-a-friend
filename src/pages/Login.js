import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../logo.svg'; // High-five logo

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/onboarding-birthday');
  };

  return (
    <div className="min-h-screen flex flex-col justify-between items-center px-6 py-10 text-center">
        {/* Logo + Title */}
        <div className="flex flex-col items-center space-y-6 mt-14">
            <img src={logo} alt="Find a Friend Logo" className="w-50 h-50" />
            <h1 className="text-5xl font-bold font-sans">find a friend</h1>
        </div>

        {/* Description + Button */}
        <div className="flex flex-col items-center w-full max-w-sm space-y-10">
            <p className="text-[23px] font-['Averia_Serif_Libre'] leading-tight mb-6">
            Connect with fellow LDS <br /> members and build <br /> meaningful friendships.
            <br />
            Your next adventure starts <br /> here!
            </p>
                <div className="mt-auto pb-6 px-2 w-full">
                    <button
                        onClick={handleLogin}
                        className="w-full border border-gray-300 rounded-[16px] py-4 pl-16 pr-4 bg-white hover:shadow-md transition flex items-center justify-center relative font-sans overflow-hidden"
                        >
                        {/* Background image on the left, behind text */}
                        <div className="absolute top-0 left-0 h-full z-0">
                            <img
                            src={`${process.env.PUBLIC_URL}/church.png`}
                            alt="Church Logo"
                            className="h-full w-full object-cover"
                            />
                        </div>

                        {/* Centered Text (z-10 puts it above the image) */}
                        <span className="text-lg z-10">
                            Continue with Church Account
                        </span>
                    </button>
                </div>
            </div>
        {/* Footer */}
        <div className="text-gray-500 text-sm mt-12 flex items-center space-x-1">
            <a href="#" className="underline">Privacy</a>
            <span>| © Team 3</span>
        </div>
    </div>
  );
};

export default Login;
