import React from 'react';
import { useTranslation } from 'react-i18next';

export function MarketplaceFilters() {
  const { t } = useTranslation();
  
  const categories = [
    'Graphics & Design',
    'Digital Marketing',
    'Writing & Translation',
    'Video & Animation',
    'Music & Audio',
    'Programming & Tech',
    'Business',
    'Lifestyle'
  ];
  
  const sellerLevels = [
    'New Seller',
    'Level 1',
    'Level 2',
    'Top Rated'
  ];
  
  return (
    <div className="card">
      <h3 className="font-semibold mb-4">{t('marketplace.filters')}</h3>
      
      {/* Categories */}
      <div className="mb-6">
        <h4 className="text-sm font-medium mb-2">{t('marketplace.categories')}</h4>
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
      
      {/* Price Range */}
      <div className="mb-6">
        <h4 className="text-sm font-medium mb-2">{t('marketplace.price')}</h4>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label htmlFor="price-from" className="block text-xs text-gray-500 mb-1">
              {t('marketplace.from')}
            </label>
            <input
              type="number"
              id="price-from"
              className="input w-full box-border"
              min="0"
              defaultValue="0"
            />
          </div>
          <div>
            <label htmlFor="price-to" className="block text-xs text-gray-500 mb-1">
              {t('marketplace.to')}
            </label>
            <input
              type="number"
              id="price-to"
              className="input w-full box-border"
              min="0"
              defaultValue="100"
            />
          </div>
        </div>
      </div>
      
      {/* Delivery Time */}
      <div className="mb-6">
        <h4 className="text-sm font-medium mb-2">{t('marketplace.deliveryTime')}</h4>
        <div className="space-y-2">
          {[1, 2, 3, 7].map((day) => (
            <div key={day} className="flex items-center">
              <input
                type="checkbox"
                id={`delivery-${day}`}
                className="mr-2 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor={`delivery-${day}`} className="text-sm">
                {day === 1 ? 'Express 24h' : `Up to ${day} ${t('marketplace.days')}`}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      {/* Seller Level */}
      <div className="mb-6">
        <h4 className="text-sm font-medium mb-2">{t('marketplace.sellerLevel')}</h4>
        <div className="space-y-2">
          {sellerLevels.map((level, index) => (
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