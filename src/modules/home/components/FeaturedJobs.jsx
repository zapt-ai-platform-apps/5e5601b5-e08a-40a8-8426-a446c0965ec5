import React from 'react';
import { Link } from 'react-router-dom';
import { FiClock, FiMapPin, FiDollarSign } from 'react-icons/fi';

export function FeaturedJobs() {
  const featuredJobs = [
    {
      id: 1,
      title: 'Senior React Developer',
      company: 'TechCorp',
      location: 'Remote',
      type: 'Full-time',
      salary: '$80K - $100K',
      posted: '2 days ago',
      logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHJ4PSI4IiBmaWxsPSIjNzNBOUZGIi8+PHBhdGggZD0iTTEyIDI1LjVDMTIgMjIuNDYyNSAxNC40NjI1IDIwIDE3LjUgMjBIMjIuNUMyNS41Mzc1IDIwIDI4IDIyLjQ2MjUgMjggMjUuNUMyOCAyNS43NzY2IDI3Ljc3NjYgMjggMjcuNSAyOEgxMi41QzEyLjIyMzQgMjggMTIgMjUuNzc2NiAxMiAyNS41WiIgZmlsbD0id2hpdGUiLz48Y2lyY2xlIGN4PSIyMCIgY3k9IjE1IiByPSI0IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg=='
    },
    {
      id: 2,
      title: 'UI/UX Designer',
      company: 'DesignStudio',
      location: 'Cairo, Egypt',
      type: 'Full-time',
      salary: '$60K - $80K',
      posted: '1 week ago',
      logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHJ4PSI4IiBmaWxsPSIjRkY3QTdBIi8+PHBhdGggZD0iTTIwIDEyTDI5Ljc5NzEgMjhIMTAuMjAyOUwyMCAxMloiIGZpbGw9IndoaXRlIi8+PC9zdmc+'
    },
    {
      id: 3,
      title: 'Full-stack Developer',
      company: 'WebSolutions',
      location: 'Alexandria, Egypt',
      type: 'Contract',
      salary: '$40 - $60 / hr',
      posted: '3 days ago',
      logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHJ4PSI4IiBmaWxsPSIjOUI4QUZGIi8+PHJlY3QgeD0iMTAiIHk9IjEwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHJ4PSIyIiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg=='
    }
  ];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {featuredJobs.map((job) => (
        <Link key={job.id} to={`/search/job/${job.id}`} className="card hover:shadow-md transition-shadow">
          <div className="flex items-start mb-4">
            <img src={job.logo} alt={job.company} className="w-12 h-12 rounded-lg mr-4" />
            <div>
              <h3 className="font-semibold">{job.title}</h3>
              <p className="text-gray-500 dark:text-gray-400">{job.company}</p>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <FiMapPin className="mr-2" />
              <span>{job.location}</span>
            </div>
            
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <FiDollarSign className="mr-2" />
              <span>{job.salary}</span>
            </div>
            
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <FiClock className="mr-2" />
              <span>{job.posted}</span>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-border">
            <div className="badge badge-primary">
              {job.type}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}