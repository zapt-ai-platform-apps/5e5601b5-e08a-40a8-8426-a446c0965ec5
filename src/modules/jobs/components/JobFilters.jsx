import React from 'react';
import { useTranslation } from 'react-i18next';

export function JobFilters() {
  const { t } = useTranslation();
  
  const categories = [
    'Web Development', 
    'Mobile Development', 
    'Design', 
    'Writing', 
    'Marketing',
    'Admin Support',
    'Customer Service',
    'Sales',
    'Accounting'
  ];
  
  const jobTypes = [
    'Full-time',
    'Part-time',
    'Contract',
    'Freelance',
    'Internship'
  ];
  
  const locations = [
    'Remote',
    'Cairo, Egypt',
    'Alexandria, Egypt',
    'Giza, Egypt',
    'Sharm El-Sheikh, Egypt'
  ];
  
  return (
    <div className="card">
      <h3 className="font-semibold mb-4">{t('jobs.filters')}</h3>
      
      {/* Categories */}
      <div className="mb-6">
        <h4 className="text-sm font-medium mb-2">{t('jobs.category')}</h4>
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
      
      {/* Job Type */}
      <div className="mb-6">
        <h4 className="text-sm font-medium mb-2">{t('navigation.postJob')}</h4>
        <div className="space-y-2">
          {jobTypes.map((type, index) => (
            <div key={index} className="flex items-center">
              <input
                type="checkbox"
                id={`type-${index}`}
                className="mr-2 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor={`type-${index}`} className="text-sm">
                {type}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      {/* Location */}
      <div className="mb-6">
        <h4 className="text-sm font-medium mb-2">{t('jobs.location')}</h4>
        <div className="space-y-2">
          {locations.map((location, index) => (
            <div key={index} className="flex items-center">
              <input
                type="checkbox"
                id={`location-${index}`}
                className="mr-2 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor={`location-${index}`} className="text-sm">
                {location}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      {/* Salary Range */}
      <div className="mb-6">
        <h4 className="text-sm font-medium mb-2">{t('jobs.budget')}</h4>
        <div className="flex flex-col space-y-2">
          <input
            type="range"
            min="0"
            max="100"
            defaultValue="50"
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-xs text-gray-500">
            <span>$0</span>
            <span>$100K+</span>
          </div>
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