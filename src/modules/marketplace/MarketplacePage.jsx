import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiSearch, FiFilter } from 'react-icons/fi';
import { MarketplaceFilters } from './components/MarketplaceFilters';
import { ProductCard } from './components/ProductCard';

export default function MarketplacePage() {
  const { t } = useTranslation();
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock products data
  const products = [
    {
      id: 1,
      title: 'Professional Logo Design',
      seller: 'Design Master',
      price: '$3',
      rating: 4.8,
      delivery: '2 days',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjE4MCIgdmlld0JveD0iMCAwIDMyMCAxODAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjMyMCIgaGVpZ2h0PSIxODAiIHJ4PSI4IiBmaWxsPSIjRkY3QTdBIi8+PGNpcmNsZSBjeD0iMTYwIiBjeT0iOTAiIHI9IjUwIiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==',
      description: 'I will design a professional and unique logo for your business or brand with unlimited revisions.'
    },
    {
      id: 2,
      title: 'Website Development for Beginners',
      seller: 'WebDev Pro',
      price: '$2',
      rating: 4.6,
      delivery: '3 days',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjE4MCIgdmlld0JveD0iMCAwIDMyMCAxODAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjMyMCIgaGVpZ2h0PSIxODAiIHJ4PSI4IiBmaWxsPSIjNzRCOUZGIi8+PHBhdGggZD0iTTcwIDYwSDI1MFYxMjBINzBWNjBaIiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==',
      description: 'I will develop a simple website for beginners to help them launch their online presence quickly.'
    },
    {
      id: 3,
      title: 'Social Media Content Creation',
      seller: 'Creative Studio',
      price: '$1',
      rating: 4.7,
      delivery: '1 day',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjE4MCIgdmlld0JveD0iMCAwIDMyMCAxODAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjMyMCIgaGVpZ2h0PSIxODAiIHJ4PSI4IiBmaWxsPSIjOUI4QUZGIi8+PHBhdGggZD0iTTExMCA1MEgyMTBWMTMwSDExMFY1MFoiIGZpbGw9IndoaXRlIi8+PC9zdmc+',
      description: 'I will create engaging social media content for your business to boost your online presence.'
    },
    {
      id: 4,
      title: 'E-book Cover Design',
      seller: 'Book Designer',
      price: '$2',
      rating: 4.9,
      delivery: '2 days',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjE4MCIgdmlld0JveD0iMCAwIDMyMCAxODAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjMyMCIgaGVpZ2h0PSIxODAiIHJ4PSI4IiBmaWxsPSIjNTBDODc4Ii8+PHJlY3QgeD0iODAiIHk9IjQwIiB3aWR0aD0iMTYwIiBoZWlnaHQ9IjIwMCIgcng9IjQiIGZpbGw9IndoaXRlIi8+PC9zdmc+',
      description: 'I will design a professional e-book cover that will catch the eye of potential readers.'
    }
  ];
  
  // Filter products based on search query
  const filteredProducts = products.filter(product => 
    product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.seller.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">{t('marketplace.allProducts')}</h1>
      
      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder={t('general.search')}
            className="input w-full pr-12 box-border"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
            <FiSearch size={20} />
          </button>
        </div>
      </div>
      
      {/* Filter Toggle Button (Mobile) */}
      <div className="md:hidden mb-4">
        <button 
          className="w-full btn-outline flex items-center justify-center"
          onClick={() => setShowFilters(!showFilters)}
        >
          <FiFilter className="mr-2" />
          {t('marketplace.filters')}
        </button>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6">
        {/* Filters (Sidebar) */}
        <div className={`${showFilters ? 'block' : 'hidden'} md:block w-full md:w-64 shrink-0`}>
          <MarketplaceFilters />
        </div>
        
        {/* Products Grid */}
        <div className="flex-1">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="card p-8 text-center">
              <p className="text-lg font-medium">{t('errors.notFound')}</p>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Try adjusting your search or filters to find products.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}