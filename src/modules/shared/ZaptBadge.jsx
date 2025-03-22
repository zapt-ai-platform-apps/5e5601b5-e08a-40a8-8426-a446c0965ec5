import React from 'react';
import { useTranslation } from 'react-i18next';

export function ZaptBadge() {
  const { t } = useTranslation();
  
  return (
    <a 
      href="https://www.zapt.ai" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="fixed bottom-20 right-4 md:bottom-4 z-40 px-2 py-1 text-xs rounded-md bg-indigo-600 text-white shadow-md"
    >
      {t('general.madeOnZapt')}
    </a>
  );
}