import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ChatDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const messagesEndRef = useRef(null);
  
  // Sample user data - this would come from an API in a real app
  const [user] = useState({
    id: id,
    name: "Emma Davis",
    avatar: "https://images.squarespace-cdn.com/content/v1/62b717b1244b1a2e5ba00d20/c1a2560f-2818-4c70-b509-734d09a60e00/Headshot-Operations-exec-in-pink-background-1.jpg",
    online: true
  });
  
  // Sample messages - this would come from an API in a real app
  const [messages, setMessages] = useState([
    { id: 1, text: "Hey there! How are you doing?", sender: "them", timestamp: "10:30 AM" },
    { id: 2, text: "I'm good, thanks! Just working on some projects.", sender: "me", timestamp: "10:32 AM" },
    { id: 3, text: "That sounds interesting. What kind of projects?", sender: "them", timestamp: "10:33 AM" },
    { id: 4, text: "Mostly UI prototypes for a new app we're developing. It's been fun!", sender: "me", timestamp: "10:35 AM" },
    { id: 5, text: "That sounds awesome! Can't wait to see what you come up with.", sender: "them", timestamp: "10:36 AM" }
  ]);
  
  const [newMessage, setNewMessage] = useState("");
  
  // Scroll to bottom of messages when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() === "") return;
    
    // Create a new message
    const message = {
      id: messages.length + 1,
      text: newMessage,
      sender: "me",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    // Add to messages
    setMessages([...messages, message]);
    setNewMessage("");
    
    // Simulate reply after 1 second
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
    <div className="flex flex-col h-screen pb-24">
      {/* Header */}
      <div className="bg-[#F4874A] text-white p-4 flex items-center">
        <button 
          onClick={() => navigate('/messages')}
          className="mr-4"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <img 
          src={user.avatar} 
          alt={user.name} 
          className="w-10 h-10 rounded-full object-cover mr-3"
        />
        
        <div>
          <h2 className="font-semibold">{user.name}</h2>
          <p className="text-xs">{user.online ? 'Online' : 'Offline'}</p>
        </div>
      </div>
      
      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
        {messages.map((message) => (
          <div 
            key={message.id} 
            className={`flex mb-4 ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`max-w-xs p-3 rounded-lg ${
                message.sender === 'me' 
                  ? 'bg-[#F4874A] bg-opacity-50 rounded-br-none' 
                  : 'bg-white rounded-bl-none shadow'
              }`}
            >
              <p>{message.text}</p>
              <p className="text-xs text-right mt-1 text-gray-500">{message.timestamp}</p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      {/* Message Input */}
      <form 
        onSubmit={handleSendMessage}
        className="p-4 bg-white border-t flex items-center"
      >
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#F4874A]"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button 
          type="submit"
          className="ml-2 bg-[#F4874A] text-white rounded-full p-2"
          disabled={!newMessage.trim()}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default ChatDetail; 