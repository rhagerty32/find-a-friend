import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const OnboardingConvert = () => {
  const navigate = useNavigate();
  const [selection, setSelection] = useState(null);

  const handleSelection = (choice) => {
    setSelection(choice);
  };

  const handleContinue = () => {
    if (selection) {
      navigate("/onboarding-interests");
    }
  };

  return (
    <div className="flex flex-col h-screen justify-between px-6 py-10">
      {/* Progress Bar */}
      <div className="flex justify-center space-x-2 mb-16">
        <div className="w-8 h-2 bg-orange-400 rounded-full"></div>
        <div className="w-8 h-2 bg-orange-400 rounded-full"></div>
        <div className="w-8 h-2 bg-gray-300 rounded-full"></div>
        <div className="w-8 h-2 bg-gray-300 rounded-full"></div>
        <div className="w-8 h-2 bg-gray-300 rounded-full"></div>
      </div>

      {/* Question + Answers */}
      <div className="flex flex-col text-left px-2 space-y-8">
        <h1 className="leading-[1.2] text-[42px] font-bold font-['Averia_Serif_Libre']">
          Are you a recent Convert?
        </h1>

        <div className="flex flex-col space-y-4 font-sans">
          <button
            onClick={() => handleSelection("Yes")}
            className={`w-full border border-gray-300 rounded-[16px] py-4 text-lg ${
              selection === "Yes" ? "bg-orange-400 text-white border-orange-400" : "bg-white"
            }`}
          >
            Yes
          </button>
          <button
            onClick={() => handleSelection("No")}
            className={`w-full border border-gray-300 rounded-[16px] py-4 text-lg ${
              selection === "No" ? "bg-orange-400 text-white border-orange-400" : "bg-white"
            }`}
          >
            No
          </button>
        </div>
      </div>

      {/* Continue Button at Bottom */}
      <div className="mt-auto pb-6 font-sans p-2">
        <button
          onClick={handleContinue}
          disabled={!selection}
          className={`w-full text-white text-lg font-semibold py-4 rounded-[16px] ${
            selection ? "bg-orange-400" : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default OnboardingConvert;
