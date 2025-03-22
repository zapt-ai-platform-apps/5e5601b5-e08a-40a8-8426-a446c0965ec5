import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

export function ChatMessages({ messages }) {
  const { t } = useTranslation();
  const messagesEndRef = useRef(null);
  
  // Scroll to bottom whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  if (!messages || messages.length === 0) {
    return (
      <div className="flex-1 p-4 flex flex-col items-center justify-center text-gray-500 dark:text-gray-400">
        <p>{t('chat.noMessages')}</p>
      </div>
    );
  }
  
  // Group messages by date
  const groupedMessages = messages.reduce((groups, message) => {
    const date = message.timestamp.includes(',') 
      ? message.timestamp.split(',')[0] 
      : 'Today';
    
    if (!groups[date]) {
      groups[date] = [];
    }
    
    groups[date].push(message);
    return groups;
  }, {});
  
  return (
    <div className="flex-1 p-4 overflow-y-auto">
      {Object.entries(groupedMessages).map(([date, dateMessages]) => (
        <div key={date}>
          <div className="flex items-center justify-center my-4">
            <span className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 px-2 py-1 rounded-full">
              {date}
            </span>
          </div>
          
          {dateMessages.map(message => (
            <div 
              key={message.id} 
              className={`mb-4 flex ${message.sent ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[70%] rounded-lg px-4 py-2 ${
                  message.sent 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-gray-100 dark:bg-gray-800'
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <p 
                  className={`text-xs mt-1 text-right ${
                    message.sent 
                      ? 'text-indigo-200' 
                      : 'text-gray-500 dark:text-gray-400'
                  }`}
                >
                  {message.timestamp.includes(',') 
                    ? message.timestamp.split(',')[1].trim() 
                    : message.timestamp}
                </p>
              </div>
            </div>
          ))}
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
}