import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiMessageCircle } from 'react-icons/fi';

export function EmptyChatState() {
  const { t } = useTranslation();
  
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4">
      <div className="w-16 h-16 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-600 dark:text-indigo-300 mb-4">
        <FiMessageCircle size={30} />
      </div>
      <h3 className="text-xl font-medium mb-2">{t('chat.noMessages')}</h3>
      <p className="text-gray-500 dark:text-gray-400 text-center max-w-sm">
        {t('chat.startConversation')}
      </p>
    </div>
  );
}