import React from 'react';
import { Link } from 'react-router-dom';
import { FiClock, FiMapPin, FiDollarSign } from 'react-icons/fi';

export function JobCard({ job }) {
  return (
    <div className="card hover:shadow-md transition-shadow">
      <div className="flex items-start">
        <img src={job.logo} alt={job.company} className="w-12 h-12 rounded-lg mr-4" />
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <h3 className="font-semibold">{job.title}</h3>
            <div className="badge badge-primary mt-1 sm:mt-0">
              {job.type}
            </div>
          </div>
          
          <p className="text-gray-500 dark:text-gray-400 mb-2">{job.company}</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-4">
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
          
          <p className="text-sm mb-4">{job.description}</p>
          
          <div className="mt-2 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-2">
            <Link 
              to={`/search/job/${job.id}`} 
              className="text-indigo-600 hover:text-indigo-500 text-sm"
            >
              View Details
            </Link>
            <Link
              to={`/search/job/${job.id}/apply`}
              className="btn-primary"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}