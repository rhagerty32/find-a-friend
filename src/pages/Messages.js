import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LuSquarePen } from "react-icons/lu";

const Messages = () => {
  const navigate = useNavigate();
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
    <div className="px-7 pt-20 pb-28">
      {/* Title row with pencil icon */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-[42px] leading-[1.2] font-bold font-['Averia_Serif_Libre']">
          Chat
        </h1>
        <button
          onClick={() => alert('New message feature coming soon!')}
          className="text-orange-400 p-2"
        >
          <LuSquarePen className="w-7 h-7" />
        </button>
      </div>

      {/* Message list */}
      <div className="space-y-6">
        {conversations.map((conversation) => (
          <div 
            key={conversation.id}
            className="flex items-center p-4 border border-gray-300 rounded-[16px] bg-white cursor-pointer"
            onClick={() => handleConversationClick(conversation.id)}
          >
            <div className="relative mr-4">
              <img 
                src={conversation.avatar} 
                alt={conversation.name} 
                className="w-14 h-14 rounded-full object-cover"
              />
              {conversation.unread && (
                <div className="absolute top-0 right-0 w-3 h-3 bg-orange-400 rounded-full"></div>
              )}
            </div>

            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-base">{conversation.name}</h3>
                <span className="text-xs text-gray-500">{conversation.timestamp}</span>
              </div>
              <p className={`text-sm mt-1 ${conversation.unread ? 'font-medium text-black' : 'text-gray-600'}`}>
                {conversation.lastMessage}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Messages;
