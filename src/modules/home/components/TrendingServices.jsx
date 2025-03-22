import React from 'react';
import { Link } from 'react-router-dom';
import { FiClock, FiUser, FiStar } from 'react-icons/fi';

export function TrendingServices() {
  const trendingServices = [
    {
      id: 1,
      title: 'Professional Logo Design',
      seller: 'Design Master',
      price: '$3',
      rating: 4.8,
      delivery: '2 days',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjE4MCIgdmlld0JveD0iMCAwIDMyMCAxODAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjMyMCIgaGVpZ2h0PSIxODAiIHJ4PSI4IiBmaWxsPSIjRkY3QTdBIi8+PGNpcmNsZSBjeD0iMTYwIiBjeT0iOTAiIHI9IjUwIiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg=='
    },
    {
      id: 2,
      title: 'Website Development for Beginners',
      seller: 'WebDev Pro',
      price: '$2',
      rating: 4.6,
      delivery: '3 days',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjE4MCIgdmlld0JveD0iMCAwIDMyMCAxODAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjMyMCIgaGVpZ2h0PSIxODAiIHJ4PSI4IiBmaWxsPSIjNzRCOUZGIi8+PHBhdGggZD0iTTcwIDYwSDI1MFYxMjBINzBWNjBaIiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg=='
    },
    {
      id: 3,
      title: 'Social Media Content Creation',
      seller: 'Creative Studio',
      price: '$1',
      rating: 4.7,
      delivery: '1 day',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjE4MCIgdmlld0JveD0iMCAwIDMyMCAxODAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjMyMCIgaGVpZ2h0PSIxODAiIHJ4PSI4IiBmaWxsPSIjOUI4QUZGIi8+PHBhdGggZD0iTTExMCA1MEgyMTBWMTMwSDExMFY1MFoiIGZpbGw9IndoaXRlIi8+PC9zdmc+'
    }
  ];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {trendingServices.map((service) => (
        <Link key={service.id} to={`/marketplace/service/${service.id}`} className="card hover:shadow-md transition-shadow overflow-hidden">
          <div className="h-40 mb-4 rounded-t-lg overflow-hidden -mx-4 -mt-4">
            <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
          </div>
          
          <h3 className="font-semibold mb-2">{service.title}</h3>
          
          <div className="space-y-2 mb-4">
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <FiUser className="mr-2" />
              <span>{service.seller}</span>
            </div>
            
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <FiClock className="mr-2" />
              <span>Delivery in {service.delivery}</span>
            </div>
            
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <FiStar className="mr-2 text-yellow-500" />
              <span>{service.rating}</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-indigo-600">
              {service.price}
            </span>
            
            <button className="btn-primary">
              Buy Now
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
}