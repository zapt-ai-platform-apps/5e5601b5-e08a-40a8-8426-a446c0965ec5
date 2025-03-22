import React from 'react';
import { useTranslation } from 'react-i18next';

export function CoursesFilters() {
  const { t } = useTranslation();
  
  const categories = [
    'Web Development',
    'Mobile Development',
    'UI/UX Design',
    'Graphic Design',
    'Business',
    'Marketing',
    'Photography',
    'Video Editing',
    'Writing'
  ];
  
  const levels = [
    'Beginner',
    'Intermediate',
    'Advanced',
    'All Levels'
  ];
  
  const durations = [
    'Less than 2 hours',
    '2-5 hours',
    '5-10 hours',
    '10-20 hours',
    'More than 20 hours'
  ];
  
  return (
    <div className="card">
      <h3 className="font-semibold mb-4">{t('learn.categories')}</h3>
      
      {/* Course Type */}
      <div className="mb-6">
        <h4 className="text-sm font-medium mb-2">Course Type</h4>
        <div className="flex gap-2">
          <button className="badge badge-primary py-1">
            {t('learn.freeCourses')}
          </button>
          <button className="badge py-1 bg-gray-100 dark:bg-gray-800">
            {t('learn.paidCourses')}
          </button>
        </div>
      </div>
      
      {/* Categories */}
      <div className="mb-6">
        <h4 className="text-sm font-medium mb-2">{t('learn.categories')}</h4>
        <div className="space-y-2">
          {categories.map((category, index) => (
            <div key={index} className="flex items-center">
              <input
                type="checkbox"
                id={`category-${index}`}
                className="mr-2 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor={`category-${index}`} className="text-sm">
                {category}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      {/* Level */}
      <div className="mb-6">
        <h4 className="text-sm font-medium mb-2">{t('learn.level')}</h4>
        <div className="space-y-2">
          {levels.map((level, index) => (
            <div key={index} className="flex items-center">
              <input
                type="checkbox"
                id={`level-${index}`}
                className="mr-2 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor={`level-${index}`} className="text-sm">
                {level}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      {/* Duration */}
      <div className="mb-6">
        <h4 className="text-sm font-medium mb-2">{t('learn.duration')}</h4>
        <div className="space-y-2">
          {durations.map((duration, index) => (
            <div key={index} className="flex items-center">
              <input
                type="checkbox"
                id={`duration-${index}`}
                className="mr-2 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor={`duration-${index}`} className="text-sm">
                {duration}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      {/* Filter Buttons */}
      <div className="flex flex-col space-y-2">
        <button className="btn-primary">
          {t('general.search')}
        </button>
        <button className="btn-outline">
          {t('general.cancel')}
        </button>
      </div>
    </div>
  );
}