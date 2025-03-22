import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiSearch, FiPlus } from 'react-icons/fi';

export function ChatSidebar({ contacts, activeChat, onSelectChat }) {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter contacts based on search query
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="flex flex-col h-full">
      {/* Sidebar Header */}
      <div className="p-4 border-b border-border">
        <h2 className="text-xl font-bold mb-4">{t('chat.newMessage')}</h2>
        
        <div className="relative">
          <input
            type="text"
            placeholder={t('chat.searchContacts')}
            className="input w-full pr-12 box-border"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
            <FiSearch size={20} />
          </button>
        </div>
      </div>
      
      {/* Contacts List */}
      <div className="flex-1 overflow-y-auto">
        {filteredContacts.length > 0 ? (
          <div className="divide-y divide-border">
            {filteredContacts.map(contact => (
              <div
                key={contact.id}
                className={`p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 ${
                  activeChat === contact.id ? 'bg-gray-100 dark:bg-gray-800' : ''
                }`}
                onClick={() => onSelectChat(contact.id)}
              >
                <div className="flex items-start">
                  <div className="relative mr-3">
                    <img 
                      src={contact.avatar} 
                      alt={contact.name} 
                      className="w-10 h-10 rounded-full"
                    />
                    {contact.online && (
                      <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-900"></span>
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium truncate">{contact.name}</h4>
                      <span className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap ml-2">
                        {contact.timestamp}
                      </span>
                    </div>
                    
                    <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                      {contact.lastMessage}
                    </p>
                  </div>
                  
                  {contact.unread > 0 && (
                    <div className="ml-2 bg-indigo-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                      {contact.unread}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-4 text-center text-gray-500 dark:text-gray-400">
            No contacts found
          </div>
        )}
      </div>
      
      {/* New Chat Button */}
      <div className="p-4 border-t border-border">
        <button className="btn-primary w-full flex items-center justify-center">
          <FiPlus className="mr-2" />
          {t('chat.newMessage')}
        </button>
      </div>
    </div>
  );
}