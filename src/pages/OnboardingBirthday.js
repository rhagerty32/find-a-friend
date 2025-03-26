import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const OnboardingBirthday = () => {
    const navigate = useNavigate();
    const [selectedDate, setSelectedDate] = useState(null);
    const [showOnProfile, setShowOnProfile] = useState(true);

    const handleContinue = () => {
        if (selectedDate) {
            navigate("/onboarding-convert");
        }
    };

    return (
        <div className="flex flex-col h-screen justify-between px-6 py-10">
            {/* Progress Indicator */}
            <div className="flex justify-center space-x-2 mb-16">
                <div className="w-8 h-2 bg-orange-400 rounded-full"></div>
                <div className="w-8 h-2 bg-gray-300 rounded-full"></div>
                <div className="w-8 h-2 bg-gray-300 rounded-full"></div>
                <div className="w-8 h-2 bg-gray-300 rounded-full"></div>
                <div className="w-8 h-2 bg-gray-300 rounded-full"></div>
            </div>

            {/* Question + Calendar + Toggle */}
            <div className="flex flex-col text-left px-2 space-y-8">
                <h1 className="leading-[1.2] text-[42px] font-bold font-['Averia_Serif_Libre']">
                    What is your Birthday?
                </h1>

                <div className="flex justify-center font-sans">
                <DayPicker
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="rounded-[16px] border border-gray-300 p-7"
                    modifiersClassNames={{
                        selected: 'rounded-full text-white bg-orange-400',
                        today: 'text-orange-400 font-bold'
                    }}
                    classNames={{
                      chevron: 'fill-orange-400',
                    }}
                    />
                </div>

                <div className="flex items-center justify-between border border-gray-300 rounded-[16px] text-[15px] p-4 font-sans">
                    <span>Show on profile</span>
                    <button
                        onClick={() => setShowOnProfile(!showOnProfile)}
                        className={`w-14 h-8 flex items-center rounded-full p-1 transition ${showOnProfile ? 'bg-green-500' : 'bg-gray-300'}`}
                    >
                        <div className={`h-5 w-5 bg-white rounded-full shadow-md transform transition ${showOnProfile ? 'translate-x-7' : 'translate-x-0'}`} />
                    </button>
                </div>
            </div>

            {/* Continue Button */}
            <div className="mt-auto pb-6 font-sans p-2">
                <button
                    onClick={handleContinue}
                    disabled={!selectedDate}
                    className={`w-full text-white text-lg font-semibold py-4 rounded-[16px] ${
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
