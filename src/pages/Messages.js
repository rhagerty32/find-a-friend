import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Messages = () => {
  const navigate = useNavigate();
  // Sample conversations data
  const [conversations] = useState([
    {
      id: 1,
      name: "Emma Davis",
      lastMessage: "Hey there! How are you doing?",
      timestamp: "10:30 AM",
      avatar: "https://images.squarespace-cdn.com/content/v1/62b717b1244b1a2e5ba00d20/c1a2560f-2818-4c70-b509-734d09a60e00/Headshot-Operations-exec-in-pink-background-1.jpg",
      unread: true
    },
    {
      id: 2,
      name: "Jacob Mitchell",
      lastMessage: "Would you like to meet for FHE on Monday?",
      timestamp: "Yesterday",
      avatar: "https://zsuttonphoto.com/wp-content/uploads/2016/05/Los-Angeles-Headshot-Photography-8.jpg",
      unread: false
    },
    {
      id: 3,
      name: "Sarah Johnson",
      lastMessage: "I'll be at the ward activity this weekend!",
      timestamp: "Wed",
      avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      unread: true
    },
    {
      id: 4,
      name: "Michael Brown",
      lastMessage: "Thanks for the invite to the scripture study!",
      timestamp: "Tue",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      unread: false
    }
  ]);

  const handleConversationClick = (id) => {
    navigate(`/chat/${id}`);
  };

  return (
    <div className="px-4 py-4 pb-24" style={{ maxWidth: '100vw' }}>
      <h1 className="text-2xl font-bold mb-6 text-center text-[#F4874A]">Messages</h1>
      
      <div className="space-y-4 mt-4">
        {conversations.map((conversation) => (
          <div 
            key={conversation.id}
            className="flex items-center p-3 rounded-lg shadow-md bg-white cursor-pointer"
            onClick={() => handleConversationClick(conversation.id)}
          >
            <div className="relative">
              <img 
                src={conversation.avatar} 
                alt={conversation.name} 
                className="w-12 h-12 rounded-full object-cover mr-3"
              />
              {conversation.unread && (
                <div className="absolute top-0 right-0 w-3 h-3 bg-[#F4874A] rounded-full"></div>
              )}
            </div>
            
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">{conversation.name}</h3>
                <span className="text-xs text-gray-500">{conversation.timestamp}</span>
              </div>
              <p className={`text-sm ${conversation.unread ? 'font-medium text-black' : 'text-gray-600'}`}>
                {conversation.lastMessage}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* New Message Button */}
      <div className="fixed bottom-24 right-4">
        <button 
          className="bg-[#F4874A] text-white rounded-full p-3 shadow-lg"
          onClick={() => alert('New message feature coming soon!')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Messages; 