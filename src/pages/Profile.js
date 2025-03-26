import React, { useState, useEffect } from 'react';

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

export const Profile = () => {
    const [selectedDays, setSelectedDays] = useState(['Tues', 'Sun']);
    const [birthday, setBirthday] = useState('May 25, 2001');
    const [showOnProfile, setShowOnProfile] = useState(true);
    const [selectedCalling, setSelectedCalling] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        const randomCalling = callings[Math.floor(Math.random() * callings.length)];
        setSelectedCalling(randomCalling);
        setSearchTerm(randomCalling);
    }, []);

    const filteredCallings = callings.filter((calling) =>
        calling.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const toggleDay = (day) => {
        setSelectedDays((prev) =>
            prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
        );
    };

    const handleBirthdayChange = (e) => {
        setBirthday(e.target.value);
    };

    return (
        <div className="px-7 pt-20 pb-28">
            {/* Title */}
            <h1 className="text-[42px] leading-[1.2] font-bold font-['Averia_Serif_Libre'] mb-6">Profile</h1>

            {/* Profile Avatar + Name */}
            <div className="flex items-center space-x-6 mb-7">
                <img
                    className="w-[113px] h-[113px] rounded-full object-cover"
                    src="./images/profile.JPG"
                    alt="profile"
                />
                <span className="text-xl text-black font-bold text-[30px]">Jonathan</span>
            </div>

            {/* Calling */}
            <div className="mb-8">
                <h2 className="text-[25px] font-bold font-['Averia_Serif_Libre'] mb-2">Info:</h2>
                <label className="block text-[30px] mb-2">Calling</label>
                <div className="relative w-full max-w-md">
                    <input
                        type="text"
                        placeholder="Search for a calling..."
                        value={searchTerm}
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                            setIsFocused(true);
                        }}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setTimeout(() => setIsFocused(false), 150)}
                        className="w-full px-4 py-5 border border-gray-300 rounded-[16px] text-[18px] bg-white"
                    />
                    {isFocused && filteredCallings.length > 0 && (
                        <div className="absolute z-10 mt-2 w-full max-h-64 overflow-y-auto bg-white border border-gray-300 rounded-[16px] shadow-md">
                            {filteredCallings.map((calling) => (
                                <button
                                    key={calling}
                                    onClick={() => {
                                        setSelectedCalling(calling);
                                        setSearchTerm(calling);
                                        setIsFocused(false);
                                    }}
                                    className={`w-full text-left px-4 py-3 text-[18px] hover:bg-gray-100 ${selectedCalling === calling ? 'bg-gray-200' : ''}`}
                                >
                                    {calling}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Availability */}
            <div className="mb-8">
                <label className="block text-[30px] mb-4">Availability</label>
                <div className="flex flex-wrap gap-2">
                    {['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'].map(day => (
                        <button
                            type="button"
                            key={day}
                            onClick={() => toggleDay(day)}
                            className={`px-5 py-3 rounded-[16px] text-[18px] border ${selectedDays.includes(day) ? 'bg-orange-400 text-white border-white' : 'bg-white border-gray-300'}`}
                        >
                            {day}
                        </button>
                    ))}
                </div>
            </div>

            {/* Birthday */}
            <div className="mb-8">
                <label className="block text-[30px] mb-2">Birthday</label>
                <input
                    type="date"
                    value={new Date(birthday).toISOString().substring(0, 10)}
                    onChange={handleBirthdayChange}
                    className="border border-gray-300 rounded-[16px] p-4 py-5 text-[18px] bg-white w-full max-w-md mb-4"
                />

                {/* Toggle */}
                <div className="flex items-center text-[18px] justify-between border border-gray-300 rounded-[16px] p-4 py-5 w-full max-w-md">
                    <span>Show on profile</span>
                    <button
                        onClick={() => setShowOnProfile(!showOnProfile)}
                        className={`w-14 h-8 flex items-center rounded-full p-1 transition ${showOnProfile ? 'bg-green-500' : 'bg-gray-300'}`}
                    >
                        <div className={`h-5 w-5 bg-white rounded-full shadow-md transform transition ${showOnProfile ? 'translate-x-7' : 'translate-x-0'}`} />
                    </button>
                </div>
            </div>
        </div>
    );
};