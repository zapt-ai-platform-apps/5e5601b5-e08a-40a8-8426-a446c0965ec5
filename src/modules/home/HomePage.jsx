import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiArrowRight, FiSearch, FiBriefcase, FiCode, FiDesignServices, FiEdit, FiBarChart } from 'react-icons/fi';
import { FeaturedJobs } from './components/FeaturedJobs';
import { FeaturedCourses } from './components/FeaturedCourses';
import { TrendingServices } from './components/TrendingServices';

export default function HomePage() {
  const { t } = useTranslation();
  
  const categories = [
    { id: 1, name: 'Web Development', icon: <FiCode />, count: 432 },
    { id: 2, name: 'Design', icon: <FiDesignServices />, count: 316 },
    { id: 3, name: 'Writing', icon: <FiEdit />, count: 253 },
    { id: 4, name: 'Marketing', icon: <FiBarChart />, count: 189 },
  ];
  
  return (
    <div className="container mx-auto px-4 py-6">
      {/* Hero Section */}
      <section className="mb-12">
        <div className="card p-6 md:p-10">
          <div className="md:max-w-lg">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {t('home.title')}
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mb-6">
              {t('home.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/search" className="btn-primary flex items-center justify-center">
                <FiSearch className="mr-2" />
                {t('jobs.search')}
              </Link>
              <Link to="/post-job" className="btn-outline flex items-center justify-center">
                <FiBriefcase className="mr-2" />
                {t('jobs.postJob')}
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Popular Categories */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">{t('home.popularCategories')}</h2>
          <Link to="/search" className="text-indigo-600 hover:text-indigo-500 flex items-center">
            {t('home.viewAll')}
            <FiArrowRight className="ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Link key={category.id} to={`/search?category=${category.name}`} className="card hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-600 dark:text-indigo-300 mr-4">
                  {category.icon}
                </div>
                <div>
                  <h3 className="font-medium">{category.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{category.count} jobs</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      
      {/* Featured Jobs */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">{t('home.featuredJobs')}</h2>
          <Link to="/search" className="text-indigo-600 hover:text-indigo-500 flex items-center">
            {t('home.viewAll')}
            <FiArrowRight className="ml-1" />
          </Link>
        </div>
        
        <FeaturedJobs />
      </section>
      
      {/* Featured Courses */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">{t('home.featuredCourses')}</h2>
          <Link to="/learn" className="text-indigo-600 hover:text-indigo-500 flex items-center">
            {t('home.viewAll')}
            <FiArrowRight className="ml-1" />
          </Link>
        </div>
        
        <FeaturedCourses />
      </section>
      
      {/* Trending Services */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">{t('home.trendingServices')}</h2>
          <Link to="/marketplace" className="text-indigo-600 hover:text-indigo-500 flex items-center">
            {t('home.viewAll')}
            <FiArrowRight className="ml-1" />
          </Link>
        </div>
        
        <TrendingServices />
      </section>
    </div>
  );
}