import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const OnboardingCallingAvailability = () => {
  const navigate = useNavigate();
  const [selection, setSelection] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [selectedDays, setSelectedDays] = useState([]);

  const callings = [
    "I don't have a calling",
    "Bishop (or Branch President)",
    "First Counselor in the Bishopric",
    "Second Counselor in the Bishopric",
    "Ward Executive Secretary",
    "Ward Clerk",
    "Assistant Ward Clerk (Finance, Membership, etc.)",
    "Elders Quorum President",
    "First Counselor in the Elders Quorum",
    "Second Counselor in the Elders Quorum",
    "Relief Society President",
    "First Counselor in the Relief Society",
    "Second Counselor in the Relief Society",
    "Young Men’s President",
    "First Counselor in the Young Men’s Presidency",
    "Second Counselor in the Young Men’s Presidency",
    "Young Women’s President",
    "First Counselor in the Young Women’s Presidency",
    "Second Counselor in the Young Women’s Presidency",
    "Sunday School President",
    "Ward Mission Leader",
    "Gospel Doctrine Teacher",
    "Gospel Principles Teacher",
    "Primary Teacher",
    "Nursery Leader",
    "Ward Music Director",
    "Ward Organist/Pianist",
    "Choir Director",
    "Choir Pianist",
    "Temple and Family History Consultant",
    "JustServe Specialist",
    "Self-Reliance Specialist",
    "Seminary Teacher",
    "Institute Teacher"
  ];

  const daysOfWeek = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];

  const filteredCallings = callings.filter((calling) =>
    calling.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCallingSelect = (calling) => {
    setSelection(calling);
    setSearchTerm(calling);
    setIsFocused(false);
  };

  const handleDayClick = (day) => {
    setSelectedDays((prev) =>
      prev.includes(day)
        ? prev.filter((d) => d !== day)
        : [...prev, day]
    );
  };

  const handleContinue = () => {
    if (selection && selectedDays.length > 0) {
      navigate("/onboarding-profilePicture");
    }
  };

  return (
    <div className="flex flex-col h-screen justify-between px-6 py-10 font-sans">
      {/* Progress Indicator */}
      <div className="flex justify-center space-x-2 mb-16">
        <div className="w-8 h-2 bg-orange-400 rounded-full"></div>
        <div className="w-8 h-2 bg-orange-400 rounded-full"></div>
        <div className="w-8 h-2 bg-orange-400 rounded-full"></div>
        <div className="w-8 h-2 bg-orange-400 rounded-full"></div>
        <div className="w-8 h-2 bg-gray-300 rounded-full"></div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col px-2 space-y-12">

      {/* Calling Section */}
      <div className="space-y-6">
        <h1 className="text-[42px] leading-[1.2] font-bold font-['Averia_Serif_Libre']">
          Calling
        </h1>

        <div className="relative font-sans">
          <input
            type="text"
            placeholder="Search for a calling..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 100)}
            className="w-full px-4 py-4 border border-gray-300 rounded-[16px] text-lg"
          />

          {isFocused && filteredCallings.length > 0 && (
            <div className="absolute z-10 mt-2 w-full max-h-64 overflow-y-auto bg-white border border-gray-300 rounded-[16px] shadow-md">
              {filteredCallings.map((calling) => (
                <button
                  key={calling}
                  onClick={() => handleCallingSelect(calling)}
                  className={`w-full text-left px-4 py-3 text-lg hover:bg-gray-100 ${
                    selection === calling ? "bg-gray-200" : ""
                  }`}
                >
                  {calling}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Availability Section */}
      <div className="space-y-6">
        <h1 className="text-[42px] leading-[1.2] font-bold font-['Averia_Serif_Libre']">
          Availability
        </h1>

        <div className="flex flex-wrap justify-start gap-3 font-sans">
          {daysOfWeek.map((day) => (
            <button
              key={day}
              onClick={() => handleDayClick(day)}
              className={`min-w-[64px] px-4 py-3 rounded-[16px] text-lg border transition ${
                selectedDays.includes(day)
                  ? "bg-orange-400 border-orange-400 text-white"
                  : "bg-white text-gray-700 border-gray-300"
              }`}
            >
              {day}
            </button>
          ))}
        </div>
      </div>
      </div>


      {/* Continue Button */}
      <div className="mt-auto pb-6 px-2">
        <button
          onClick={handleContinue}
          disabled={!selection || selectedDays.length === 0}
          className={`w-full text-white text-lg font-semibold py-4 rounded-[16px] transition ${
            selection && selectedDays.length > 0
              ? "bg-orange-400"
              : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default OnboardingCallingAvailability;
