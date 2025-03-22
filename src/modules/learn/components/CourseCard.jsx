import React from 'react';
import { Link } from 'react-router-dom';
import { FiClock, FiUser, FiBarChart2, FiStar } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

export function CourseCard({ course }) {
  const { t } = useTranslation();
  
  return (
    <Link to={`/learn/course/${course.id}`} className="card hover:shadow-md transition-shadow overflow-hidden">
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
        
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <FiStar className="mr-2 text-yellow-500" />
          <span>{course.rating}/5.0</span>
        </div>
      </div>
      
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
        <div className="badge badge-secondary">
          {course.price}
        </div>
        
        <button className="btn-primary">
          {t('learn.startLearning')}
        </button>
      </div>
    </Link>
  );
}