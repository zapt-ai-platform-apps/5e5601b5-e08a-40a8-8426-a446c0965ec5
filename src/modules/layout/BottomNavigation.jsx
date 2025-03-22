import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiHome, FiSearch, FiBriefcase, FiBook, FiMessageCircle } from 'react-icons/fi';

export function BottomNavigation() {
  const { t } = useTranslation();
  
  const navItems = [
    { to: '/', label: t('navigation.home'), icon: <FiHome size={20} /> },
    { to: '/search', label: t('navigation.search'), icon: <FiSearch size={20} /> },
    { to: '/post-job', label: t('navigation.postJob'), icon: <FiBriefcase size={20} /> },
    { to: '/learn', label: t('navigation.learn'), icon: <FiBook size={20} /> },
    { to: '/chat', label: t('navigation.chat'), icon: <FiMessageCircle size={20} /> },
  ];
  
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border z-40">
      <div className="flex justify-around">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex flex-col items-center py-2 px-3 ${
                isActive
                  ? 'text-primary'
                  : 'text-gray-500 dark:text-gray-400'
              }`
            }
          >
            <span>{item.icon}</span>
            <span className="text-xs mt-1">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}