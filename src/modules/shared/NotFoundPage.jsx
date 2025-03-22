import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function NotFoundPage() {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-6xl font-bold text-indigo-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-4">{t('errors.notFound')}</h2>
      <p className="text-gray-500 dark:text-gray-400 mb-8">
        {t('errors.somethingWentWrong')}
      </p>
      <Link to="/" className="btn-primary">
        {t('errors.backToHome')}
      </Link>
    </div>
  );
}