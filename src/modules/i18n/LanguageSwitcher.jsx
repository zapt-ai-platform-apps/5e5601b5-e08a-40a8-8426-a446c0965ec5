import React from 'react';
import { useTranslation } from 'react-i18next';

export function LanguageSwitcher() {
  const { i18n, t } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => changeLanguage('en')}
        className={`px-2 py-1 text-xs rounded ${
          i18n.language === 'en' 
            ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300' 
            : 'hover:bg-gray-100 dark:hover:bg-gray-800'
        }`}
      >
        {t('settings.english')}
      </button>
      <button
        onClick={() => changeLanguage('ar')}
        className={`px-2 py-1 text-xs rounded ${
          i18n.language === 'ar' 
            ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300' 
            : 'hover:bg-gray-100 dark:hover:bg-gray-800'
        }`}
      >
        {t('settings.arabic')}
      </button>
    </div>
  );
}