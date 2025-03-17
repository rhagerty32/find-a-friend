import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const OnboardingConvert = () => {
  const navigate = useNavigate();
  const [selection, setSelection] = useState(null); // Track selection state

  const handleSelection = (choice) => {
    setSelection(choice);
  };

  const handleContinue = () => {
    if (selection) {
      navigate("/feed"); // Navigate to Feed page only if a choice is made
    }
  };

  return (
    <div className="flex flex-col h-screen justify-between px-6 py-10">
      {/* Progress Indicator */}
      <div className="flex justify-center space-x-2">
        <div className="w-8 h-2 bg-orange-400 rounded-full"></div>
        <div className="w-8 h-2 bg-orange-400 rounded-full"></div>
        <div className="w-8 h-2 bg-gray-300 rounded-full"></div>
        <div className="w-8 h-2 bg-gray-300 rounded-full"></div>
      </div>

      {/* Question */}
      <div className="text-center">
        <h1 className="text-2xl font-bold">Are you a recent Convert?</h1>
      </div>

      {/* Answer Options */}
      <div className="flex flex-col space-y-4">
        <button
          onClick={() => handleSelection("Yes")}
          className={`w-full border border-gray-300 rounded-lg py-3 text-lg ${
            selection === "Yes" ? "bg-gray-200" : "bg-white"
          }`}
        >
          Yes
        </button>
        <button
          onClick={() => handleSelection("No")}
          className={`w-full border border-gray-300 rounded-lg py-3 text-lg ${
            selection === "No" ? "bg-gray-200" : "bg-white"
          }`}
        >
          No
        </button>
      </div>

      {/* Continue Button */}
      <div className="pb-6">
        <button
          onClick={handleContinue}
          disabled={!selection} // Disable button if no selection is made
          className={`w-full text-white text-lg font-semibold py-3 rounded-lg ${
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
