import React from 'react';
import { Link } from 'react-router-dom';
import { FiClock, FiUser, FiBarChart2 } from 'react-icons/fi';

export function FeaturedCourses() {
  const featuredCourses = [
    {
      id: 1,
      title: 'Complete Web Development Bootcamp',
      instructor: 'Ahmed Hassan',
      level: 'Beginner',
      duration: '48 hours',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjE4MCIgdmlld0JveD0iMCAwIDMyMCAxODAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjMyMCIgaGVpZ2h0PSIxODAiIHJ4PSI4IiBmaWxsPSIjNzRCOUZGIi8+PHBhdGggZD0iTTE0NCAxMTBMMjI0IDYwVjE2MEgxNDRWMTEwWiIgZmlsbD0id2hpdGUiLz48cGF0aCBkPSJNMTQ0IDExMEw2NCA2MFYxNjBIMTQ0VjExMFoiIGZpbGw9IiM0Mzk3RkYiLz48L3N2Zz4='
    },
    {
      id: 2,
      title: 'UI/UX Design Masterclass',
      instructor: 'Sara Ahmed',
      level: 'Intermediate',
      duration: '32 hours',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjE4MCIgdmlld0JveD0iMCAwIDMyMCAxODAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjMyMCIgaGVpZ2h0PSIxODAiIHJ4PSI4IiBmaWxsPSIjRkY3QTdBIi8+PGNpcmNsZSBjeD0iMTEwIiBjeT0iOTAiIHI9IjQwIiBmaWxsPSJ3aGl0ZSIvPjxjaXJjbGUgY3g9IjIxMCIgY3k9IjkwIiByPSI0MCIgZmlsbD0id2hpdGUiLz48cGF0aCBkPSJNMTEwIDkwTDIxMCA5MCIgc3Ryb2tlPSIjRkY3QTdBIiBzdHJva2Utd2lkdGg9IjEwIi8+PC9zdmc+'
    },
    {
      id: 3,
      title: 'Freelance Business Mastery',
      instructor: 'Mohamed Ali',
      level: 'All Levels',
      duration: '24 hours',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjE4MCIgdmlld0JveD0iMCAwIDMyMCAxODAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjMyMCIgaGVpZ2h0PSIxODAiIHJ4PSI4IiBmaWxsPSIjOUI4QUZGIi8+PHBhdGggZD0iTTgwIDYwSDE2MFYxMjBIODBWNjBaIiBmaWxsPSJ3aGl0ZSIvPjxwYXRoIGQ9Ik0xNjAgNjBIMjQwVjEyMEgxNjBWNjBaIiBmaWxsPSIjNjk1OUJGIi8+PC9zdmc+'
    }
  ];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {featuredCourses.map((course) => (
        <Link key={course.id} to={`/learn/course/${course.id}`} className="card hover:shadow-md transition-shadow overflow-hidden">
          <div className="h-40 mb-4 rounded-t-lg overflow-hidden -mx-4 -mt-4">
            <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
          </div>
          
          <h3 className="font-semibold mb-2">{course.title}</h3>
          
          <div className="space-y-2 mb-4">
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <FiUser className="mr-2" />
              <span>{course.instructor}</span>
            </div>
            
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <FiClock className="mr-2" />
              <span>{course.duration}</span>
            </div>
            
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <FiBarChart2 className="mr-2" />
              <span>{course.level}</span>
            </div>
          </div>
          
          <div className="badge badge-secondary">
            Free
          </div>
        </Link>
      ))}
    </div>
  );
}