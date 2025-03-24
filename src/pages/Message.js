import React, { useState, useEffect } from 'react';

const MessagingApp = () => {
  // Pre-filled dummy messages
  const [messages, setMessages] = useState([
    { id: 1, sender: 'John', text: 'Hey there! How are you doing?', timestamp: '10:30 AM' },
    { id: 2, sender: 'You', text: 'I\'m good, thanks! Just working on some projects.', timestamp: '10:32 AM' },
    { id: 3, sender: 'John', text: 'That sounds interesting. What kind of projects?', timestamp: '10:33 AM' },
    { id: 4, sender: 'You', text: 'Mostly UI prototypes for a new app we\'re developing. It\'s been fun!', timestamp: '10:35 AM' },
    { id: 5, sender: 'John', text: 'That sounds awesome! Can\'t wait to see what you come up with.', timestamp: '10:36 AM' }
  ]);

  // State for the new message text
  const [newMessage, setNewMessage] = useState('');
  
  // Effect to log when component mounts
  useEffect(() => {
    console.log('MessagingApp component mounted - portrait mode');
    // Force a repaint
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 100);
  }, []);

  // Handle message submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;

    // Create a new message object
    const currentTime = new Date();
    const timeString = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    const newMessageObj = {
      id: messages.length + 1,
      sender: 'You',
      text: newMessage,
      timestamp: timeString
    };

    // Add the new message to the messages array
    setMessages([...messages, newMessageObj]);
    
    // Clear the input field
    setNewMessage('');
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: 'calc(100vh - 60px)', // Adjust height to account for navbar
      width: '100%',
      overflow: 'hidden',
      background: '#f3f4f6',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: '60px', // Add space at the bottom for navbar
      paddingBottom: '10px'
    }}>
      {/* Header - fixed height - Using orange */}
      <div style={{
        background: '#F4874A', // Dark orange for header
        color: 'white',
        padding: '12px',
        display: 'flex',
        alignItems: 'center',
      }}>
        <div style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          background: '#FFD580', // Light orange for avatar background
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#FF4500', // Dark orange-red for avatar text
          fontWeight: 'bold',
          marginRight: '12px'
        }}>
          B
        </div>
        <div>
          <h2 style={{ fontWeight: 'bold', margin: 0 }}>Bob</h2>
          <p style={{ fontSize: '12px', margin: 0 }}>Online</p>
        </div>
      </div>

      {/* Messages Container - flexible height */}
      <div style={{
        flex: '1',
        overflowY: 'auto',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
        {messages.map((message) => (
          <div 
            key={message.id} 
            style={{
              display: 'flex',
              justifyContent: message.sender === 'You' ? 'flex-end' : 'flex-start',
              width: '100%'
            }}
          >
            <div style={{
              maxWidth: '80%',
              borderRadius: '12px',
              padding: '8px 12px',
              background: message.sender === 'You' ? 'rgba(244, 135, 74, 0.4)' : '#d1d5db', // Dark orange for user messages
              color: message.sender === 'You' ? 'black' : 'black',
              borderBottomRightRadius: message.sender === 'You' ? 0 : '12px',
              borderBottomLeftRadius: message.sender === 'You' ? '12px' : 0,
            }}>
              <p style={{ margin: '0 0 4px 0' }}>{message.text}</p>
              <span style={{ 
                fontSize: '10px', 
                color: message.sender === 'You' ? '#000005' : '#6b7280', // Light orange for timestamp in user messages
                display: 'block',
                textAlign: 'right'
              }}>
                {message.timestamp}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Message Input - fixed height */}
      <div style={{
        background: 'white',
        padding: '12px 12px 20px 12px', // Extra bottom padding
        borderTop: '1px solid #e5e7eb',
        marginBottom: '10px', // Additional margin to avoid navbar overlap
      }}>
        <form 
          onSubmit={handleSubmit} 
          style={{
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            style={{
              flex: 1,
              border: '1px solid #d1d5db',
              borderRadius: '9999px',
              padding: '8px 16px',
              outline: 'none'
            }}
          />
          <button 
            type="submit" 
            style={{
              marginLeft: '8px',
              background: '#FF8C00', // Dark orange for send button
              color: 'white',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default MessagingApp;