import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Plus } from "lucide-react";

const ProfilePictureSelection = () => {
  const navigate = useNavigate();
  const [selectedPicture, setSelectedPicture] = useState(null);

  const handlePictureUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedPicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleContinue = () => {
    if (selectedPicture) {
      navigate("/feed");
    }
  };

  return (
    <div className="flex flex-col h-screen justify-between px-6 py-10 font-sans">
      {/* Progress Bar */}
      <div className="flex justify-center space-x-2 mb-16">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-8 h-2 bg-orange-400 rounded-full"></div>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex flex-col px-2 space-y-6">
        {/* Heading + Subheading (tighter) */}
        <div className="space-y-2">
          <h1 className="text-[42px] leading-[1.2] font-bold font-['Averia_Serif_Libre']">
            Add Profile Picture
          </h1>
          <p className="text-gray-600 text-base">
            Make sure your face is clearly visible in your pics
          </p>
        </div>

        {/* Profile Picture Box (normal spacing after text) */}
        <label
          htmlFor="file-upload"
          className="w-full aspect-[3/4] border border-gray-300 rounded-[16px] flex items-center justify-center cursor-pointer overflow-hidden"
        >
          {selectedPicture ? (
            <img
              src={selectedPicture}
              alt="Selected"
              className="w-full h-full object-cover rounded-[16px]"
            />
          ) : (
            <Plus className="w-10 h-10 text-gray-400" />
          )}
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handlePictureUpload}
          />
        </label>
      </div>

      {/* Continue Button - Matched Spacing */}
      <div className="mt-auto pb-6 px-2">
        <button
          onClick={handleContinue}
          disabled={!selectedPicture}
          className={`w-full text-white text-lg font-semibold py-4 rounded-[16px] transition ${
            selectedPicture ? "bg-orange-400" : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          Find Friends
        </button>
      </div>
    </div>
  );
};

export default ProfilePictureSelection;
