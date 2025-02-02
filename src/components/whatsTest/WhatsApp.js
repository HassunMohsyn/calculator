import React, { useState } from 'react';
import './WhatsApp.css';

export default function WhatsApp() {
    const [currentChat, setCurrentChat] = useState(null);

    const usersArray = [
        { id: 1, name: 'Hassun', profile: 'https://via.placeholder.com/50', lastMessage: 'Hey, how are you?' },
        { id: 2, name: 'Aisha', profile: 'https://via.placeholder.com/50', lastMessage: 'Let’s catch up soon!' },
        { id: 3, name: 'Ali', profile: 'https://via.placeholder.com/50', lastMessage: 'Meeting tomorrow?' },
    ];

    const messages = {
        1: [{ from: 'Hassun', text: 'Hey, how are you?' }, { from: 'Me', text: 'I am fine, you?' }],
        2: [{ from: 'Aisha', text: 'Let’s catch up soon!' }, { from: 'Me', text: 'Sure, when?' }],
        3: [{ from: 'Ali', text: 'Meeting tomorrow?' }, { from: 'Me', text: 'Yes, 10 AM.' }],
    };

    const handleChatSelect = (id) => {
        setCurrentChat(id);
    };

    return (
        <div className="WhatsApp">
            {/* Sidebar */}
            <div className="sidebar">
                <div className="search-bar">
                    <input type="text" placeholder="Search or start new chat" />
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <div className="chat-list">
                    {usersArray.map((user) => (
                        <div
                            key={user.id}
                            className={`chat-item ${currentChat === user.id ? 'active' : ''}`}
                            onClick={() => handleChatSelect(user.id)}
                        >
                            <img src={user.profile} alt={user.name} className="profile-img" />
                            <div className="chat-info">
                                <h4>{user.name}</h4>
                                <p>{user.lastMessage}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Chat Window */}
            <div className="chat-window">
                {currentChat ? (
                    <div className="messages">
                        <div className="message-header">
                            <h3>{usersArray.find((user) => user.id === currentChat).name}</h3>
                        </div>
                        <div className="message-body">
                            {messages[currentChat].map((msg, index) => (
                                <div
                                    key={index}
                                    className={`message ${msg.from === 'Me' ? 'sent' : 'received'}`}
                                >
                                    {msg.text}
                                </div>
                            ))}
                        </div>
                        <div className="message-input">
                            <input type="text" placeholder="Type a message" />
                            <button>Send</button>
                        </div>
                    </div>
                ) : (
                    <div className="no-chat-selected">
                        <p>Select a chat to start messaging</p>
                    </div>
                )}
            </div>
        </div>
    );
}
