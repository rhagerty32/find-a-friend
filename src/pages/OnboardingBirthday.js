import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const OnboardingBirthday = () => {
    const navigate = useNavigate();
    const [selectedDate, setSelectedDate] = useState(null);
    const [showOnProfile, setShowOnProfile] = useState(true);

    const handleContinue = () => {
        if (selectedDate) {
            navigate("/onboarding"); // ✅ Navigate to Onboarding Convert
        }
    };

    return (
        <div className="flex flex-col h-screen justify-between px-6 py-10">
            {/* Progress Indicator */}
            <div className="flex justify-center space-x-2">
                <div className="w-8 h-2 bg-orange-400 rounded-full"></div>
                <div className="w-8 h-2 bg-gray-300 rounded-full"></div>
                <div className="w-8 h-2 bg-gray-300 rounded-full"></div>
                <div className="w-8 h-2 bg-gray-300 rounded-full"></div>
            </div>

            {/* Question */}
            <div className="text-center">
                <h1 className="text-3xl font-bold">What is your Birthday?</h1>
            </div>

            {/* Date Picker */}
            <div className="flex justify-center">
                <input
                    type="date"
                    className="text-center text-lg border border-gray-300 rounded-lg py-2 px-4"
                    onChange={(e) => setSelectedDate(e.target.value)}
                />
            </div>

            {/* Toggle Switch */}
            <div className="flex items-center justify-between border border-gray-300 rounded-lg px-4 py-3">
                <span>Show on profile</span>
                <button
                    onClick={() => setShowOnProfile(!showOnProfile)}
                    className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
                        showOnProfile ? "bg-green-500" : "bg-gray-300"
                    }`}
                >
                    <div
                        className={`h-5 w-5 bg-white rounded-full shadow-md transform transition ${
                            showOnProfile ? "translate-x-6" : "translate-x-0"
                        }`}
                    />
                </button>
            </div>

            {/* Continue Button */}
            <div className="pb-6">
                <button
                    onClick={handleContinue}
                    disabled={!selectedDate} // ✅ Only enable if birthday is selected
                    className={`w-full text-white text-lg font-semibold py-3 rounded-lg ${
                        selectedDate ? "bg-orange-400" : "bg-gray-300 cursor-not-allowed"
                    }`}
                >
                    Continue
                </button>
            </div>
        </div>
    );
};

export default OnboardingBirthday;
