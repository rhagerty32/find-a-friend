import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const OnboardingAvailability = () => {
    const navigate = useNavigate();
    const [selectedDays, setSelectedDays] = useState([]);

    const handleDayClick = (day) => {
        setSelectedDays((prevDays) =>
            prevDays.includes(day)
                ? prevDays.filter((d) => d !== day)
                : [...prevDays, day]
        );
    };

    const handleContinue = () => {
        if (selectedDays.length > 0) {
            navigate("/onboarding-profilePicture"); // Update with actual next step route
        }
    };

    const daysOfWeek = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];

    return (
        <div className="flex flex-col h-screen justify-between px-6 py-10">
            {/* Progress Indicator */}
            <div className="flex justify-center space-x-2">
                <div className="w-8 h-2 bg-orange-400 rounded-full"></div>
                <div className="w-8 h-2 bg-orange-400 rounded-full"></div>
                <div className="w-8 h-2 bg-orange-400 rounded-full"></div>
                <div className="w-8 h-2 bg-gray-300 rounded-full"></div>
            </div>

            {/* Question */}
            <div className="text-center">
                <h1 className="text-3xl font-bold">Availability</h1>
            </div>

            {/* Days Selection */}
            <div className="flex flex-wrap justify-center gap-2">
                {daysOfWeek.map((day) => (
                    <button
                        key={day}
                        onClick={() => handleDayClick(day)}
                        className={`px-4 py-2 border rounded-lg text-lg ${
                            selectedDays.includes(day)
                                ? "bg-orange-400 text-white"
                                : "bg-gray-100 text-gray-700"
                        }`}
                    >
                        {day}
                    </button>
                ))}
            </div>

            {/* Continue Button */}
            <div className="pb-6">
                <button
                    onClick={handleContinue}
                    disabled={selectedDays.length === 0} // ✅ Only enable if days are selected
                    className={`w-full text-white text-lg font-semibold py-3 rounded-lg ${
                        selectedDays.length > 0 ? "bg-orange-400" : "bg-gray-300 cursor-not-allowed"
                    }`}
                >
                    Continue
                </button>
            </div>
        </div>
    );
};

export default OnboardingAvailability;
