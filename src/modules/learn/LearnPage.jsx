import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiSearch, FiFilter, FiClock, FiUser, FiBarChart2 } from 'react-icons/fi';
import { CoursesFilters } from './components/CoursesFilters';
import { CourseCard } from './components/CourseCard';

export default function LearnPage() {
  const { t } = useTranslation();
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock courses data
  const courses = [
    {
      id: 1,
      title: 'Complete Web Development Bootcamp',
      instructor: 'Ahmed Hassan',
      level: 'Beginner',
      duration: '48 hours',
      rating: 4.7,
      price: 'Free',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjE4MCIgdmlld0JveD0iMCAwIDMyMCAxODAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjMyMCIgaGVpZ2h0PSIxODAiIHJ4PSI4IiBmaWxsPSIjNzRCOUZGIi8+PHBhdGggZD0iTTE0NCAxMTBMMjI0IDYwVjE2MEgxNDRWMTEwWiIgZmlsbD0id2hpdGUiLz48cGF0aCBkPSJNMTQ0IDExMEw2NCA2MFYxNjBIMTQ0VjExMFoiIGZpbGw9IiM0Mzk3RkYiLz48L3N2Zz4=',
      description: 'Learn web development from scratch. This comprehensive course covers HTML, CSS, JavaScript, React, Node.js and more.'
    },
    {
      id: 2,
      title: 'UI/UX Design Masterclass',
      instructor: 'Sara Ahmed',
      level: 'Intermediate',
      duration: '32 hours',
      rating: 4.8,
      price: 'Free',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjE4MCIgdmlld0JveD0iMCAwIDMyMCAxODAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjMyMCIgaGVpZ2h0PSIxODAiIHJ4PSI4IiBmaWxsPSIjRkY3QTdBIi8+PGNpcmNsZSBjeD0iMTEwIiBjeT0iOTAiIHI9IjQwIiBmaWxsPSJ3aGl0ZSIvPjxjaXJjbGUgY3g9IjIxMCIgY3k9IjkwIiByPSI0MCIgZmlsbD0id2hpdGUiLz48cGF0aCBkPSJNMTEwIDkwTDIxMCA5MCIgc3Ryb2tlPSIjRkY3QTdBIiBzdHJva2Utd2lkdGg9IjEwIi8+PC9zdmc+',
      description: 'Master the art of UI/UX design. Learn design principles, prototyping, user research, and how to create stunning interfaces.'
    },
    {
      id: 3,
      title: 'Freelance Business Mastery',
      instructor: 'Mohamed Ali',
      level: 'All Levels',
      duration: '24 hours',
      rating: 4.6,
      price: 'Free',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjE4MCIgdmlld0JveD0iMCAwIDMyMCAxODAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjMyMCIgaGVpZ2h0PSIxODAiIHJ4PSI4IiBmaWxsPSIjOUI4QUZGIi8+PHBhdGggZD0iTTgwIDYwSDE2MFYxMjBIODBWNjBaIiBmaWxsPSJ3aGl0ZSIvPjxwYXRoIGQ9Ik0xNjAgNjBIMjQwVjEyMEgxNjBWNjBaIiBmaWxsPSIjNjk1OUJGIi8+PC9zdmc+',
      description: 'Learn how to build a successful freelance business. From finding clients to managing finances, this course covers everything.'
    },
    {
      id: 4,
      title: 'Mobile App Development with Flutter',
      instructor: 'Laila Farid',
      level: 'Intermediate',
      duration: '36 hours',
      rating: 4.9,
      price: 'Free',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjE4MCIgdmlld0JveD0iMCAwIDMyMCAxODAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjMyMCIgaGVpZ2h0PSIxODAiIHJ4PSI4IiBmaWxsPSIjNTBDODc4Ii8+PHBhdGggZD0iTTEyMCA2MFYxMjBIMjAwTDEyMCA2MFoiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTIwMCA2MFYxMjBIMTIwTDIwMCA2MFoiIGZpbGw9IiMzQTk1NUUiLz48L3N2Zz4=',
      description: 'Build cross-platform mobile apps with Flutter. Learn Dart programming, state management, and how to create beautiful UIs.'
    }
  ];
  
  // Filter courses based on search query
  const filteredCourses = courses.filter(course => 
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.level.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">{t('learn.allCourses')}</h1>
      
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
          {t('learn.categories')}
        </button>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6">
        {/* Filters (Sidebar) */}
        <div className={`${showFilters ? 'block' : 'hidden'} md:block w-full md:w-64 shrink-0`}>
          <CoursesFilters />
        </div>
        
        {/* Courses Grid */}
        <div className="flex-1">
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredCourses.map(course => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <div className="card p-8 text-center">
              <p className="text-lg font-medium">{t('errors.notFound')}</p>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Try adjusting your search or filters to find courses.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}