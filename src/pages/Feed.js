import React, { useState, useRef } from 'react';

const Feed = () => {
  // Sample profiles data
  const profiles = [
    {
      id: 1,
      name: "Emma Davis",
      age: 24,
      location: "Salt Lake City, UT",
      distance: "5 miles away",
      bio: "BYU graduate. I love hiking and photography. Looking for someone who shares my faith and values.",
      interests: ["Photography", "Hiking", "Cooking", "Church Service"],
      images: [
        'https://images.squarespace-cdn.com/content/v1/62b717b1244b1a2e5ba00d20/c1a2560f-2818-4c70-b509-734d09a60e00/Headshot-Operations-exec-in-pink-background-1.jpg'
    
      ]
    },
    {
      id: 2,
      name: "Jacob Mitchell",
      age: 26,
      location: "Provo, UT",
      distance: "12 miles away",
      bio: "Software engineer who loves the outdoors. Sunday school teacher. Looking for someone to build a life with.",
      interests: ["Coding", "Mountain Biking", "Piano", "Scripture Study"],
      images: [
        'https://zsuttonphoto.com/wp-content/uploads/2016/05/Los-Angeles-Headshot-Photography-8.jpg'
      ]
    },
    {
      id: 3,
      name: "Sarah Johnson",
      age: 23,
      location: "Orem, UT",
      distance: "8 miles away",
      bio: "Elementary school teacher. I love music, reading, and spending time with family. Served a mission in Spain.",
      interests: ["Reading", "Music", "Teaching", "Family Activities"],
      images: [
      'https://images.squarespace-cdn.com/content/v1/5ec689480cc22c2d441e152f/250cd7bf-db74-44f3-af0c-284ba54f763a/Gusitsch-Amy-WebSized.jpg'
      ]
    },
    {
      id: 4,
      name: "Daniel Carter",
      age: 27,
      location: "Lehi, UT",
      distance: "15 miles away",
      bio: "Marketing professional who enjoys playing the guitar and volunteering. Love meaningful conversations and good food.",
      interests: ["Guitar", "Volunteering", "Cooking", "Traveling"],
      images: [
        'https://images.squarespace-cdn.com/content/v1/5ec689480cc22c2d441e152f/4abb45fb-e456-4079-8076-b40ac0a89dfc/nlalor-photography-2021-06-17-Jason-Cholewa-Headshot-Web-Sized-1.jpg'
      ]
    },
    {
      id: 5,
      name: "Megan Thompson",
      age: 25,
      location: "Draper, UT",
      distance: "18 miles away",
      bio: "Nurse who loves running marathons and baking. Passionate about health and wellness.",
      interests: ["Running", "Baking", "Yoga", "Health & Wellness"],
      images: [
        'https://retratosbarcelona.com/wp-content/uploads/2022/09/Retratos-Barcelona-womens-what-to-wear-for-your-business-headshot.jpg'
      ]
    },
    {
      id: 6,
      name: "Ethan Roberts",
      age: 28,
      location: "West Jordan, UT",
      distance: "20 miles away",
      bio: "Firefighter and fitness enthusiast. Love being outdoors, fishing, and spending time with family.",
      interests: ["Fitness", "Fishing", "Camping", "Family"],
      images: [
        'https://pauladeegan.co.uk/wp-content/uploads/2021/08/corporate-headshots-surrey.jpg'
      ]
    },
    {
      id: 7,
      name: "Hannah Wilson",
      age: 24,
      location: "Sandy, UT",
      distance: "10 miles away",
      bio: "Aspiring writer and book lover. Always looking for my next adventure!",
      interests: ["Writing", "Books", "Coffee", "Hiking"],
      images: [
        'https://images.squarespace-cdn.com/content/v1/672cd3bc7d35386e30afeeff/d15cbb75-9c75-43af-b990-de1fb9b094c4/professional-headshot-listening-pose.jpg?format=2500w'
      ]
    },
    {
      id: 8,
      name: "Joshua Martinez",
      age: 29,
      location: "Murray, UT",
      distance: "22 miles away",
      bio: "Entrepreneur and business owner. I enjoy traveling and meeting new people.",
      interests: ["Business", "Traveling", "Networking", "Golf"],
      images: [
        'https://img.freepik.com/free-photo/headshot-handsome-bearded-man-smiling-standing-against-white-background_1258-26733.jpg'
      ]
    },
    {
      id: 9,
      name: "Olivia Brooks",
      age: 26,
      location: "Bountiful, UT",
      distance: "30 miles away",
      bio: "Graphic designer with a love for art and creativity. Passionate about helping others express themselves.",
      interests: ["Art", "Design", "Photography", "Cats"],
      images: [
        'https://www.artofher.com/wp-content/uploads/2020/03/photographerheadshotforrealtor-1.jpg'
      ]
    },
    {
      id: 10,
      name: "Michael Adams",
      age: 27,
      location: "South Jordan, UT",
      distance: "17 miles away",
      bio: "Engineer who enjoys solving problems and learning new things. Avid sci-fi fan and board game enthusiast.",
      interests: ["Engineering", "Sci-Fi", "Board Games", "Travel"],
      images: [
        'https://johngress.com/wp-content/uploads//2024/09/Male-model-headshot-photography-in-Chicago-Enrique-042323.Workshop.SanDiego2239_highres-copy_1200.jpg'
      ]
    }
  ];

  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [showMatchPopup, setShowMatchPopup] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [offsetX, setOffsetX] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const [tapStart, setTapStart] = useState({ x: 0, y: 0 });
  const [tapEnd, setTapEnd] = useState({ x: 0, y: 0 });

  const cardRef = useRef(null);
  const currentProfile = profiles[currentProfileIndex];

  const handleSwipe = (direction) => {
    setSwipeDirection(direction);
    if (direction === 'right') {
      setShowMatchPopup(true);
      setTimeout(() => setShowMatchPopup(false), 1500);
    }
    setTimeout(() => {
      setCurrentProfileIndex((currentProfileIndex + 1) % profiles.length);
      setCurrentImageIndex(0);
      setSwipeDirection(null);
      setOffsetX(0);
    }, 300);
  };

  const nextImage = () => {
    if (currentImageIndex < currentProfile.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
    const diff = touchStart - e.targetTouches[0].clientX;
    setOffsetX(-diff);
    setIsSwiping(true);
    e.preventDefault();
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) handleSwipe('left');
    else if (distance < -50) handleSwipe('right');
    else setOffsetX(0);
    setIsSwiping(false);
  };

  const getCardStyle = () => {
    if (swipeDirection === 'right') return { transform: 'translateX(120%) rotate(12deg)', transition: 'transform 0.3s ease' };
    if (swipeDirection === 'left') return { transform: 'translateX(-120%) rotate(-12deg)', transition: 'transform 0.3s ease' };
    if (isSwiping) {
      const rotate = offsetX * 0.1;
      return { transform: `translateX(${offsetX}px) rotate(${rotate}deg)`, transition: 'none' };
    }
    return { transform: 'translateX(0) rotate(0)', transition: 'transform 0.3s ease' };
  };

  const handleImageTouchStart = (e) => {
    setTapStart({ x: e.touches[0].clientX, y: e.touches[0].clientY });
  };

  const handleImageTouchEnd = (e) => {
    setTapEnd({ x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY });
    const distanceX = Math.abs(tapEnd.x - tapStart.x);
    const distanceY = Math.abs(tapEnd.y - tapStart.y);
    if (distanceX < 10 && distanceY < 10) setShowDetails(!showDetails);
    else if (distanceX > distanceY) {
      tapEnd.x < tapStart.x ? nextImage() : prevImage();
    }
  };

  return (
    <div className="flex flex-col pt-14">
      {/* Static Header (doesn't move) */}
      <div className="px-7 pt-6 pb-6">
        <h1 className="text-[42px] leading-[1.2] font-bold font-['Averia_Serif_Libre']">
          Discover
        </h1>
      </div>

      {/* Main Content Area */}
      <div className={`flex-1 flex items-center justify-center px-5 ${showDetails ? 'pb-28' : 'pb-20'}`}>
        <div
          ref={cardRef}
          className="w-full max-w-md rounded-[16px] shadow-xl overflow-hidden"
          style={getCardStyle()}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="relative h-[calc(100vh-250px)] max-h-[600px] overflow-hidden"
            onTouchStart={handleImageTouchStart}
            onTouchEnd={handleImageTouchEnd}
          >
            <img
              src={currentProfile.images[currentImageIndex]}
              alt={`${currentProfile.name}'s photo`}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 text-white">
              <h2 className="text-2xl font-bold">{currentProfile.name}, {currentProfile.age}</h2>
              <p className="opacity-90">{currentProfile.location}</p>
              <p className="text-sm opacity-80">{currentProfile.distance}</p>
            </div>
          </div>

          {showDetails && (
            <div className="bg-white p-4">
              <h3 className="font-bold mb-2">About Me</h3>
              <p className="text-gray-700 mb-4">{currentProfile.bio}</p>
              <h3 className="font-bold mb-2">Interests</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {currentProfile.interests.map((interest, index) => (
                  <span key={index} className="px-3 py-1 bg-orange-100 text-orange-400 rounded-full text-sm">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Match Popup */}
      {showMatchPopup && (
        <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
          <div className="bg-orange-300 text-white text-3xl font-bold py-6 px-12 rounded-xl shadow-lg animate-fade-in-out">
            Invite Sent!
          </div>
        </div>
      )}

      {/* Animation Style */}
      <style jsx="true">{`
        @keyframes fadeInOut {
          0% { opacity: 0; transform: scale(0.8); }
          20% { opacity: 1; transform: scale(1.1); }
          30% { opacity: 1; transform: scale(1); }
          80% { opacity: 1; }
          100% { opacity: 0; }
        }
        .animate-fade-in-out {
          animation: fadeInOut 1.5s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Feed;