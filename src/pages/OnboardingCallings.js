import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ChurchCallingSelection = () => {
  const navigate = useNavigate();
  const [selection, setSelection] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const callings = [
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
    "First Counselor in the Sunday School Presidency",
    "Second Counselor in the Sunday School Presidency",
    "Ward Mission Leader",
    "Gospel Doctrine Teacher",
    "Gospel Principles Teacher",
    "Elders Quorum Instructor",
    "Relief Society Instructor",
    "Young Men Adviser",
    "Young Women Adviser",
    "Aaronic Priesthood Quorum Adviser",
    "Primary Teacher",
    "Nursery Leader",
    "Sunday School Teacher",
    "Ward Music Director",
    "Ward Organist/Pianist",
    "Choir Director",
    "Choir Pianist",
    "Ward Missionaries",
    "Temple and Family History Consultant",
    "JustServe Specialist",
    "Primary President",
    "First Counselor in the Primary Presidency",
    "Second Counselor in the Primary Presidency",
    "Primary Music Leader",
    "Primary Pianist",
    "Cub Scout Leader (where applicable)",
    "Activity Days Leader",
    "Young Women Camp Director",
    "Stake President",
    "First Counselor in the Stake Presidency",
    "Second Counselor in the Stake Presidency",
    "Stake Executive Secretary",
    "Stake Clerk",
    "Assistant Stake Clerk",
    "High Councilor",
    "Stake Relief Society President (and Counselors)",
    "Stake Young Women President (and Counselors)",
    "Stake Primary President (and Counselors)",
    "Stake Young Men President",
    "Stake Sunday School President",
    "Stake Mission President",
    "Stake Music Chair",
    "Ward Greeter",
    "Sacrament Meeting Coordinator",
    "Building Coordinator",
    "Technology Specialist",
    "Emergency Preparedness Specialist",
    "Self-Reliance Specialist",
    "Addiction Recovery Program Facilitator",
    "Temple Worker",
    "Seminary Teacher",
    "Institute Teacher",
  ];

  const handleSelection = (calling) => {
    setSelection(calling);
  };

  const handleContinue = () => {
    if (selection) {
      navigate("/feed");
    }
  };

  const filteredCallings = callings.filter((calling) =>
    calling.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col h-screen justify-between px-6 py-10">
      <div className="flex justify-center space-x-2">
        <div className="w-8 h-2 bg-orange-400 rounded-full"></div>
        <div className="w-8 h-2 bg-orange-400 rounded-full"></div>
        <div className="w-8 h-2 bg-orange-400 rounded-full"></div>
        <div className="w-8 h-2 bg-orange-400 rounded-full"></div>
        <div className="w-8 h-2 bg-gray-300 rounded-full"></div>
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-bold">Select Your Church Calling</h1>
      </div>
      <input
        type="text"
        placeholder="Search for a calling..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg"
      />
      <div className="flex flex-col space-y-4 overflow-y-auto max-h-96">
        {filteredCallings.map((calling) => (
          <button
            key={calling}
            onClick={() => handleSelection(calling)}
            className={`w-full border border-gray-300 rounded-lg py-3 text-lg text-left px-4 ${
              selection === calling ? "bg-gray-200" : "bg-white"
            }`}
          >
            {calling}
          </button>
        ))}
      </div>
      <div className="pb-6">
        <button
          onClick={handleContinue}
          disabled={!selection}
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

export default ChurchCallingSelection;
