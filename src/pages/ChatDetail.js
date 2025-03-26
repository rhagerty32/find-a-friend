import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ChatDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const messagesEndRef = useRef(null);
  
  const [user] = useState({
    id: id,
    name: "Emma Davis",
    avatar: "https://images.squarespace-cdn.com/content/v1/62b717b1244b1a2e5ba00d20/c1a2560f-2818-4c70-b509-734d09a60e00/Headshot-Operations-exec-in-pink-background-1.jpg",
    online: true
  });
  
  const [messages, setMessages] = useState([
    { id: 1, text: "Hey there! How are you doing?", sender: "them", timestamp: "10:30 AM" },
    { id: 2, text: "I'm good, thanks! Just working on some projects.", sender: "me", timestamp: "10:32 AM" },
    { id: 3, text: "That sounds interesting. What kind of projects?", sender: "them", timestamp: "10:33 AM" },
    { id: 4, text: "Mostly UI prototypes for a new app we're developing. It's been fun!", sender: "me", timestamp: "10:35 AM" },
    { id: 5, text: "That sounds awesome! Can't wait to see what you come up with.", sender: "them", timestamp: "10:36 AM" }
  ]);
  
  const [newMessage, setNewMessage] = useState("");
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() === "") return;
    
    const message = {
      id: messages.length + 1,
      text: newMessage,
      sender: "me",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages([...messages, message]);
    setNewMessage("");
    
    setTimeout(() => {
      const reply = {
        id: messages.length + 2,
        text: "Thanks for the update! Let's catch up soon.",
        sender: "them",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, reply]);
    }, 1000);
  };
  
  return (
    <div className="flex flex-col h-screen pb-24 bg-white">
    {/* Header */}
    <div className="bg-white border-b border-gray-300 p-4 flex items-center">
      <button 
        onClick={() => navigate('/messages')}
        className="mr-4"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <img 
        src={user.avatar} 
        alt={user.name} 
        className="w-10 h-10 rounded-full object-cover mr-3"
      />

      <div>
        <h2 className="text-[22px] font-bold">{user.name}</h2>
        <p className="text-sm text-gray-600">{user.online ? 'Online' : 'Offline'}</p>
      </div>
    </div>

    {/* Messages */}
    <div className="flex-1 p-4 overflow-y-auto bg-white">
      {messages.map((message) => (
        <div 
          key={message.id} 
          className={`flex mb-4 ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
        >
          <div 
            className={`max-w-xs p-3 rounded-[16px] ${
              message.sender === 'me' 
                ? 'bg-orange-400 leading-[1.3] rounded-br-none text-white' 
                : 'bg-gray-200 leading-[1.3] rounded-bl-none text-black'
            }`}
          >
          <p>{message.text}</p>
          <p className={`text-xs text-right mt-1 ${message.sender === 'me' ? 'text-white' : 'text-gray-600'}`}>
            {message.timestamp}
          </p>
          </div>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>

    {/* Message Input */}
    <form 
      onSubmit={handleSendMessage}
      className="p-4 bg-white"
    >
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Type a message..."
          className="w-full border border-gray-300 rounded-full px-4 py-2 pr-12 focus:outline-none focus:ring-2 focus:ring-orange-400"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button 
          type="submit"
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-orange-400 text-white rounded-full p-1"
          disabled={!newMessage.trim()}
        >
          {/* Up arrow icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            strokeWidth="3"
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5m0 0l-6 6m6-6l6 6" />
          </svg>
        </button>
      </div>
    </form>

  </div>
  );
};

export default ChatDetail;
