import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiSearch, FiFilter, FiMapPin, FiDollarSign, FiClock } from 'react-icons/fi';
import { JobFilters } from '../components/JobFilters';
import { JobCard } from '../components/JobCard';

export default function SearchPage() {
  const { t } = useTranslation();
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock jobs data
  const jobs = [
    {
      id: 1,
      title: 'Senior React Developer',
      company: 'TechCorp',
      location: 'Remote',
      type: 'Full-time',
      salary: '$80K - $100K',
      posted: '2 days ago',
      logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHJ4PSI4IiBmaWxsPSIjNzNBOUZGIi8+PHBhdGggZD0iTTEyIDI1LjVDMTIgMjIuNDYyNSAxNC40NjI1IDIwIDE3LjUgMjBIMjIuNUMyNS41Mzc1IDIwIDI4IDIyLjQ2MjUgMjggMjUuNUMyOCAyNS43NzY2IDI3Ljc3NjYgMjggMjcuNSAyOEgxMi41QzEyLjIyMzQgMjggMTIgMjUuNzc2NiAxMiAyNS41WiIgZmlsbD0id2hpdGUiLz48Y2lyY2xlIGN4PSIyMCIgY3k9IjE1IiByPSI0IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==',
      description: 'We are looking for an experienced React developer to join our remote team. You will be responsible for building and maintaining user interfaces for our web applications.'
    },
    {
      id: 2,
      title: 'UI/UX Designer',
      company: 'DesignStudio',
      location: 'Cairo, Egypt',
      type: 'Full-time',
      salary: '$60K - $80K',
      posted: '1 week ago',
      logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHJ4PSI4IiBmaWxsPSIjRkY3QTdBIi8+PHBhdGggZD0iTTIwIDEyTDI5Ljc5NzEgMjhIMTAuMjAyOUwyMCAxMloiIGZpbGw9IndoaXRlIi8+PC9zdmc+',
      description: 'We are seeking a talented UI/UX Designer to create amazing user experiences. The ideal candidate should have a strong portfolio showcasing their design skills.'
    },
    {
      id: 3,
      title: 'Full-stack Developer',
      company: 'WebSolutions',
      location: 'Alexandria, Egypt',
      type: 'Contract',
      salary: '$40 - $60 / hr',
      posted: '3 days ago',
      logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHJ4PSI4IiBmaWxsPSIjOUI4QUZGIi8+PHJlY3QgeD0iMTAiIHk9IjEwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHJ4PSIyIiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg==',
      description: 'We need a full-stack developer who is proficient with React and Node.js. You will be working on building robust web applications from front to back.'
    },
    {
      id: 4,
      title: 'Content Writer',
      company: 'MediaGroup',
      location: 'Remote',
      type: 'Part-time',
      salary: '$25 - $35 / hr',
      posted: '5 days ago',
      logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHJ4PSI4IiBmaWxsPSIjNTBDODc4Ii8+PHBhdGggZD0iTTEyIDE1SDI4VjI1SDEyVjE1WiIgZmlsbD0id2hpdGUiLz48L3N2Zz4=',
      description: 'We are looking for a talented content writer to create engaging articles and blog posts. The ideal candidate should have excellent writing skills and SEO knowledge.'
    }
  ];
  
  // Filter jobs based on search query
  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.location.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">{t('jobs.search')}</h1>
      
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
          {t('jobs.filters')}
        </button>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6">
        {/* Filters (Sidebar) */}
        <div className={`${showFilters ? 'block' : 'hidden'} md:block w-full md:w-64 shrink-0`}>
          <JobFilters />
        </div>
        
        {/* Jobs List */}
        <div className="flex-1">
          {filteredJobs.length > 0 ? (
            <div className="space-y-4">
              {filteredJobs.map(job => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          ) : (
            <div className="card p-8 text-center">
              <p className="text-lg font-medium">{t('errors.notFound')}</p>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Try adjusting your search or filters to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}