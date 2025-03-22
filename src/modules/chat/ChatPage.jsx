import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiSearch, FiMoreVertical, FiSend, FiPaperclip, FiSmile } from 'react-icons/fi';
import { ChatSidebar } from './components/ChatSidebar';
import { ChatMessages } from './components/ChatMessages';
import { EmptyChatState } from './components/EmptyChatState';

export default function ChatPage() {
  const { t } = useTranslation();
  const [activeChat, setActiveChat] = useState(null);
  const [message, setMessage] = useState('');
  
  // Mock contacts data
  const contacts = [
    {
      id: 1,
      name: 'Ahmed Hassan',
      avatar: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHJ4PSI4IiBmaWxsPSIjNzNBOUZGIi8+PHBhdGggZD0iTTEyIDI1LjVDMTIgMjIuNDYyNSAxNC40NjI1IDIwIDE3LjUgMjBIMjIuNUMyNS41Mzc1IDIwIDI4IDIyLjQ2MjUgMjggMjUuNUMyOCAyNS43NzY2IDI3Ljc3NjYgMjggMjcuNSAyOEgxMi41QzEyLjIyMzQgMjggMTIgMjUuNzc2NiAxMiAyNS41WiIgZmlsbD0id2hpdGUiLz48Y2lyY2xlIGN4PSIyMCIgY3k9IjE1IiByPSI0IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==',
      lastMessage: 'Hey, are you available for a new project?',
      timestamp: '10:30 AM',
      unread: 2,
      online: true
    },
    {
      id: 2,
      name: 'Sara Ahmed',
      avatar: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHJ4PSI4IiBmaWxsPSIjRkY3QTdBIi8+PHBhdGggZD0iTTEyIDI1LjVDMTIgMjIuNDYyNSAxNC40NjI1IDIwIDE3LjUgMjBIMjIuNUMyNS41Mzc1IDIwIDI4IDIyLjQ2MjUgMjggMjUuNUMyOCAyNS43NzY2IDI3Ljc3NjYgMjggMjcuNSAyOEgxMi41QzEyLjIyMzQgMjggMTIgMjUuNzc2NiAxMiAyNS41WiIgZmlsbD0id2hpdGUiLz48Y2lyY2xlIGN4PSIyMCIgY3k9IjE1IiByPSI0IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==',
      lastMessage: 'The design looks great! Thanks for your help.',
      timestamp: 'Yesterday',
      unread: 0,
      online: false
    },
    {
      id: 3,
      name: 'Mohamed Ali',
      avatar: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHJ4PSI4IiBmaWxsPSIjOUI4QUZGIi8+PHBhdGggZD0iTTEyIDI1LjVDMTIgMjIuNDYyNSAxNC40NjI1IDIwIDE3LjUgMjBIMjIuNUMyNS41Mzc1IDIwIDI4IDIyLjQ2MjUgMjggMjUuNUMyOCAyNS43NzY2IDI3Ljc3NjYgMjggMjcuNSAyOEgxMi41QzEyLjIyMzQgMjggMTIgMjUuNzc2NiAxMiAyNS41WiIgZmlsbD0id2hpdGUiLz48Y2lyY2xlIGN4PSIyMCIgY3k9IjE1IiByPSI0IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==',
      lastMessage: 'Can we schedule a meeting tomorrow at 2 PM?',
      timestamp: 'Monday',
      unread: 0,
      online: true
    }
  ];
  
  // Mock messages for each contact
  const mockMessages = {
    1: [
      { id: 1, text: 'Hey, are you available for a new project?', sent: false, timestamp: '10:30 AM' },
      { id: 2, text: 'Yes, I am. What kind of project are you working on?', sent: true, timestamp: '10:32 AM' },
      { id: 3, text: 'It\'s a web app for a freelance marketplace. Similar to Fiverr but more focused on local services.', sent: false, timestamp: '10:35 AM' },
      { id: 4, text: 'Sounds interesting! What\'s your budget and timeline?', sent: true, timestamp: '10:38 AM' }
    ],
    2: [
      { id: 1, text: 'Hi Sara, I\'ve completed the UI design you requested.', sent: true, timestamp: '9:15 AM' },
      { id: 2, text: 'That was fast! Can you share it with me?', sent: false, timestamp: '9:20 AM' },
      { id: 3, text: 'Sure, just sent it to your email.', sent: true, timestamp: '9:22 AM' },
      { id: 4, text: 'The design looks great! Thanks for your help.', sent: false, timestamp: '9:45 AM' }
    ],
    3: [
      { id: 1, text: 'Hello, I\'m interested in your freelance services.', sent: false, timestamp: 'Monday, 2:10 PM' },
      { id: 2, text: 'Hi Mohamed, thank you for reaching out. What services are you looking for?', sent: true, timestamp: 'Monday, 2:15 PM' },
      { id: 3, text: 'I need help with developing a mobile app. Are you available?', sent: false, timestamp: 'Monday, 2:20 PM' },
      { id: 4, text: 'Yes, I have experience with mobile app development. When would you like to discuss the details?', sent: true, timestamp: 'Monday, 2:25 PM' },
      { id: 5, text: 'Can we schedule a meeting tomorrow at 2 PM?', sent: false, timestamp: 'Monday, 2:30 PM' }
    ]
  };
  
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim() || !activeChat) return;
    
    // In a real app, you would send this message to your backend
    console.log('Sending message to contact', activeChat, ':', message);
    
    setMessage('');
  };
  
  // Mobile view state for responsive design
  const [showSidebar, setShowSidebar] = useState(true);
  
  // Function to select a chat and show the messages view on mobile
  const handleSelectChat = (contact) => {
    setActiveChat(contact);
    // On mobile, hide the sidebar when a chat is selected
    if (window.innerWidth < 768) {
      setShowSidebar(false);
    }
  };
  
  // Function to go back to the contacts list on mobile
  const handleBackToContacts = () => {
    setShowSidebar(true);
  };
  
  return (
    <div className="container mx-auto px-0 sm:px-4 py-0 sm:py-6 h-[calc(100vh-4rem)]">
      <div className="h-full md:card md:p-0 flex overflow-hidden">
        {/* Chat Sidebar (Contact List) */}
        {(showSidebar || window.innerWidth >= 768) && (
          <div className="w-full md:w-80 border-r border-border flex-shrink-0 h-full">
            <ChatSidebar 
              contacts={contacts} 
              activeChat={activeChat} 
              onSelectChat={handleSelectChat} 
            />
          </div>
        )}
        
        {/* Chat Messages Area */}
        <div className="flex-1 flex flex-col h-full">
          {activeChat ? (
            <>
              {/* Chat Header */}
              <div className="p-4 border-b border-border flex items-center justify-between">
                <div className="flex items-center">
                  {window.innerWidth < 768 && (
                    <button 
                      onClick={handleBackToContacts}
                      className="mr-2 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      &larr;
                    </button>
                  )}
                  <img 
                    src={contacts.find(c => c.id === activeChat)?.avatar} 
                    alt="Contact" 
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <h3 className="font-medium">
                      {contacts.find(c => c.id === activeChat)?.name}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {contacts.find(c => c.id === activeChat)?.online
                        ? t('chat.online')
                        : t('chat.offline')}
                    </p>
                  </div>
                </div>
                
                <button className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
                  <FiMoreVertical />
                </button>
              </div>
              
              {/* Messages */}
              <ChatMessages messages={mockMessages[activeChat] || []} />
              
              {/* Message Input */}
              <div className="p-4 border-t border-border">
                <form onSubmit={handleSendMessage} className="flex items-center">
                  <button 
                    type="button"
                    className="p-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                  >
                    <FiPaperclip />
                  </button>
                  <input
                    type="text"
                    placeholder={t('chat.writeMessage')}
                    className="input flex-1 mx-2 box-border"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <button 
                    type="button"
                    className="p-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 mr-2"
                  >
                    <FiSmile />
                  </button>
                  <button 
                    type="submit"
                    className="btn-primary cursor-pointer"
                    disabled={!message.trim()}
                  >
                    <FiSend />
                  </button>
                </form>
              </div>
            </>
          ) : (
            <EmptyChatState />
          )}
        </div>
      </div>
    </div>
  );
}