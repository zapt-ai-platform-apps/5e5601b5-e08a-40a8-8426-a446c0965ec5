import React from 'react';
import { Link } from 'react-router-dom';
import { FiClock, FiUser, FiStar } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

export function ProductCard({ product }) {
  const { t } = useTranslation();
  
  return (
    <Link to={`/marketplace/product/${product.id}`} className="card hover:shadow-md transition-shadow overflow-hidden">
      <div className="h-40 mb-4 rounded-t-lg overflow-hidden -mx-4 -mt-4">
        <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
      </div>
      
      <h3 className="font-semibold mb-2">{product.title}</h3>
      
      <div className="space-y-2 mb-4">
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <FiUser className="mr-2" />
          <span>{product.seller}</span>
        </div>
        
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <FiClock className="mr-2" />
          <span>Delivery in {product.delivery}</span>
        </div>
        
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <FiStar className="mr-2 text-yellow-500" />
          <span>{product.rating}</span>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-indigo-600">
          {product.price}
        </span>
        
        <button className="btn-primary">
          {t('marketplace.buyNow')}
        </button>
      </div>
    </Link>
  );
}