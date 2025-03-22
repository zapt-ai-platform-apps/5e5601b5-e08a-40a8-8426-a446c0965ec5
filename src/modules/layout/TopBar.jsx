import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiMenu, FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '@/modules/theme/useTheme';
import { LanguageSwitcher } from '@/modules/i18n/LanguageSwitcher';
import { useAuth } from '@/modules/auth/useAuth';

export function TopBar({ toggleSidebar }) {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const { user } = useAuth();
  
  return (
    <header className="sticky top-0 z-50 bg-card shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <button 
            className="mr-4 text-xl cursor-pointer p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={toggleSidebar}
            aria-label="Toggle sidebar"
          >
            <FiMenu />
          </button>
          
          <Link to="/" className="flex items-center">
            <img 
              src="https://supabase.zapt.ai/storage/v1/render/image/public/icons/c7bd5333-787f-461f-ae9b-22acbc0ed4b0/55145115-0624-472f-96b9-d5d88aae355f.png?width=40&height=40" 
              alt="FreelanceHub Logo" 
              className="w-8 h-8"
            />
            <span className="ml-2 font-semibold text-xl">
              {t('general.appName')}
            </span>
          </Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <LanguageSwitcher />
          
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label={theme === 'light' ? t('settings.darkMode') : t('settings.lightMode')}
          >
            {theme === 'light' ? <FiMoon /> : <FiSun />}
          </button>
          
          {user ? (
            <Link to="/profile" className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                {user.email ? user.email.charAt(0).toUpperCase() : 'U'}
              </div>
            </Link>
          ) : (
            <Link to="/auth" className="btn-primary text-sm">
              {t('auth.signInButton')}
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}