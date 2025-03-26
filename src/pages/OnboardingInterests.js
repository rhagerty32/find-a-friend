import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const interestData = {
  "🛼 Lifestyle": ["Content Creator", "Gamer", "Actor", "Dog Lover", "Voice Actor", "Choreographer"],
  "🎥 TV & Movies": ["Netflix", "TV", "Movies", "Disney+", "Bleach", "Demon Slayer", "Anime", "Manga"],
  "🎨 Activities": ["Memes", "YouTube", "Social Media", "Photography", "Painting", "Writing", "Digital Art"]
};

const OnboardingInterests = () => {
  const navigate = useNavigate();
  const [selectedInterests, setSelectedInterests] = useState([]);

  const toggleInterest = (interest) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest]
    );
  };

  const handleContinue = () => {
    if (selectedInterests.length > 0) {
      navigate("/onboarding-calling-avail");
    }
  };

  return (
    <div className="flex flex-col h-screen justify-between px-6 py-10 font-sans">
      {/* Progress Bar */}
      <div className="flex justify-center space-x-2 mb-10">
        <div className="w-8 h-2 bg-orange-400 rounded-full"></div>
        <div className="w-8 h-2 bg-orange-400 rounded-full"></div>
        <div className="w-8 h-2 bg-orange-400 rounded-full"></div>
        <div className="w-8 h-2 bg-gray-300 rounded-full"></div>
        <div className="w-8 h-2 bg-gray-300 rounded-full"></div>
      </div>

      {/* Heading + Subheading */}
      <div className="flex flex-col text-left px-2 space-y-3 pt-6">
        <h1 className="leading-[1.2] text-[42px] font-bold font-['Averia_Serif_Libre']">
          Interests
        </h1>
        <p className="text-gray-600 text-base">
          We’ll recommend people you have more in common with
        </p>
      </div>

      {/* Interests Sections */}
      <div className="flex flex-col gap-8 overflow-y-auto mt-6">
        {Object.entries(interestData).map(([category, interests]) => (
          <div key={category} className="space-y-3">
            <h2 className="text-lg font-semibold">{category}</h2>
            <div className="overflow-x-auto scrollbar-hide">
              <div className="grid grid-rows-2 auto-cols-max gap-3 grid-flow-col w-max">
                {interests.map((interest) => (
                  <button
                    key={interest}
                    onClick={() => toggleInterest(interest)}
                    className={`px-6 py-3 rounded-[16px] border text-sm whitespace-nowrap transition duration-200 ${
                      selectedInterests.includes(interest)
                        ? "bg-orange-400 text-white border-orange-400"
                        : "bg-white border-gray-300 text-black"
                    }`}
                  >
                    {interest}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Continue Button */}
      <div className="mt-auto pb-6 px-2">
        <button
          onClick={handleContinue}
          disabled={selectedInterests.length === 0}
          className={`w-full text-white text-lg font-semibold py-4 rounded-[16px] transition ${
            selectedInterests.length > 0 ? "bg-orange-400" : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default OnboardingInterests;
