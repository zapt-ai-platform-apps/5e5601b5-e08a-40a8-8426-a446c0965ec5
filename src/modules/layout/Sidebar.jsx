import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiX, FiHome, FiSearch, FiBriefcase, FiBook, FiShoppingBag, FiUsers, FiMessageCircle, FiUser, FiLogOut } from 'react-icons/fi';
import { useAuth } from '@/modules/auth/useAuth';

export function Sidebar({ isOpen, onClose }) {
  const { t } = useTranslation();
  const location = useLocation();
  const { user, signOut } = useAuth();
  
  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };
  
  const menuItems = [
    { path: '/', label: t('navigation.home'), icon: <FiHome /> },
    { path: '/search', label: t('navigation.search'), icon: <FiSearch /> },
    { path: '/post-job', label: t('navigation.postJob'), icon: <FiBriefcase /> },
    { path: '/learn', label: t('navigation.learn'), icon: <FiBook /> },
    { path: '/marketplace', label: t('navigation.marketplace'), icon: <FiShoppingBag /> },
    { path: '/community', label: t('navigation.community'), icon: <FiUsers /> },
    { path: '/chat', label: t('navigation.chat'), icon: <FiMessageCircle /> },
    { path: '/profile', label: t('navigation.profile'), icon: <FiUser /> },
  ];
  
  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside 
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-card border-r border-border transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:static md:z-0 flex flex-col`}
      >
        <div className="flex items-center justify-between p-4 border-b border-border">
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
          
          <button 
            className="md:hidden text-xl p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={onClose}
            aria-label="Close sidebar"
          >
            <FiX />
          </button>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-2">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center px-4 py-3 rounded-lg ${
                    location.pathname === item.path 
                      ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300' 
                      : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                  onClick={onClose}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="ml-3">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        {user && (
          <div className="p-4 border-t border-border">
            <button
              onClick={handleSignOut}
              className="flex items-center w-full px-4 py-3 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20"
            >
              <span className="text-lg"><FiLogOut /></span>
              <span className="ml-3">{t('auth.signOut')}</span>
            </button>
          </div>
        )}
      </aside>
    </>
  );
}