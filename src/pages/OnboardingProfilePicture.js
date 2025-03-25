// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Plus } from "lucide-react";

// const ProfilePictureSelection = () => {
//   const navigate = useNavigate();
//   const [selectedPicture, setSelectedPicture] = useState(null);

//   const handleContinue = () => {
//     if (selectedPicture) {
//       navigate("/feed");
//     }
//   };

//   return (
//     <div className="flex flex-col h-screen justify-between px-6 py-10 items-center text-center">
//       <div className="flex justify-center space-x-2">
//         <div className="w-8 h-2 bg-orange-400 rounded-full"></div>
//         <div className="w-8 h-2 bg-orange-400 rounded-full"></div>
//         <div className="w-8 h-2 bg-orange-400 rounded-full"></div>
//         <div className="w-8 h-2 bg-orange-400 rounded-full"></div>
//         <div className="w-8 h-2 bg-gray-300 rounded-full"></div>
//       </div>
//       <h1 className="text-2xl font-bold mt-4">Add Profile Picture</h1>
//       <p className="text-gray-600 mb-4">Make sure your face is clearly visible in your pics</p>
//       <div
//         className="w-48 h-48 border-2 border-gray-300 rounded-lg flex items-center justify-center cursor-pointer"
//         onClick={() => console.log("Upload logic here")}
//       >
//         {selectedPicture ? (
//           <img src={selectedPicture} alt="Selected" className="w-full h-full rounded-lg object-cover" />
//         ) : (
//           <Plus className="w-12 h-12 text-gray-400" />
//         )}
//       </div>
//       <button
//         onClick={handleContinue}
//         disabled={!selectedPicture}
//         className={`mt-6 w-64 text-white text-lg font-semibold py-3 rounded-lg ${
//           selectedPicture ? "bg-orange-400" : "bg-gray-300 cursor-not-allowed"
//         }`}
//       >
//         Find Friends
//       </button>
//     </div>
//   );
// };

// export default ProfilePictureSelection;
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
    <div className="flex flex-col h-screen justify-between px-6 py-10 items-center text-center">
      <div className="flex justify-center space-x-2">
        <div className="w-8 h-2 bg-orange-400 rounded-full"></div>
        <div className="w-8 h-2 bg-orange-400 rounded-full"></div>
        <div className="w-8 h-2 bg-orange-400 rounded-full"></div>
        <div className="w-8 h-2 bg-orange-400 rounded-full"></div>
        <div className="w-8 h-2 bg-gray-300 rounded-full"></div>
      </div>
      <h1 className="text-2xl font-bold mt-4">Add Profile Picture</h1>
      <p className="text-gray-600 mb-4">Make sure your face is clearly visible in your pics</p>
      <label
        htmlFor="file-upload"
        className="w-48 h-48 border-2 border-gray-300 rounded-lg flex items-center justify-center cursor-pointer"
      >
        {selectedPicture ? (
          <img src={selectedPicture} alt="Selected" className="w-full h-full rounded-lg object-cover" />
        ) : (
          <Plus className="w-12 h-12 text-gray-400" />
        )}
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handlePictureUpload}
        />
      </label>
      <button
        onClick={handleContinue}
        disabled={!selectedPicture}
        className={`mt-6 w-64 text-white text-lg font-semibold py-3 rounded-lg ${
          selectedPicture ? "bg-orange-400" : "bg-gray-300 cursor-not-allowed"
        }`}
      >
        Find Friends
      </button>
    </div>
  );
};

export default ProfilePictureSelection;