import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { FiInfo, FiCheckCircle } from 'react-icons/fi';

export default function JobPostingPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    type: 'Full-time',
    salary: '',
    description: '',
    requirements: '',
    deadline: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally post the job to your API
    console.log('Job posting submitted:', formData);
    
    // For now, we'll just show a success message
    setFormSubmitted(true);
    
    // Redirect after a short delay
    setTimeout(() => {
      navigate('/search');
    }, 3000);
  };
  
  const jobTypes = ['Full-time', 'Part-time', 'Contract', 'Freelance', 'Internship'];
  
  if (formSubmitted) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-6 text-green-500 flex justify-center">
            <FiCheckCircle size={64} />
          </div>
          <h1 className="text-2xl font-bold mb-4">Job Posted Successfully!</h1>
          <p className="text-gray-500 dark:text-gray-400 mb-8">
            Your job has been posted and will be visible to potential candidates shortly. You will be redirected to the job search page.
          </p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">{t('jobs.postJob')}</h1>
        
        <div className="card mb-8">
          <div className="bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 p-4 rounded-lg mb-6 flex">
            <FiInfo className="text-xl mr-2 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium">Post a quality job to find the best freelancers</p>
              <p className="text-sm mt-1">Be detailed and clear about the requirements to attract the right candidates.</p>
            </div>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div>
                <label htmlFor="title" className="block text-sm font-medium mb-1">
                  {t('jobs.jobTitle')} *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="input w-full box-border"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-1">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="input w-full box-border"
                  value={formData.company}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="location" className="block text-sm font-medium mb-1">
                    {t('jobs.location')} *
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    className="input w-full box-border"
                    value={formData.location}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="type" className="block text-sm font-medium mb-1">
                    Job Type *
                  </label>
                  <select
                    id="type"
                    name="type"
                    className="input w-full box-border"
                    value={formData.type}
                    onChange={handleChange}
                    required
                  >
                    {jobTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="salary" className="block text-sm font-medium mb-1">
                  {t('jobs.budget')} *
                </label>
                <input
                  type="text"
                  id="salary"
                  name="salary"
                  className="input w-full box-border"
                  placeholder="e.g. $50K - $70K or $25 - $35 /hr"
                  value={formData.salary}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="description" className="block text-sm font-medium mb-1">
                  {t('jobs.description')} *
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows="6"
                  className="input w-full box-border"
                  value={formData.description}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <div>
                <label htmlFor="requirements" className="block text-sm font-medium mb-1">
                  {t('jobs.requirements')} *
                </label>
                <textarea
                  id="requirements"
                  name="requirements"
                  rows="4"
                  className="input w-full box-border"
                  value={formData.requirements}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <div>
                <label htmlFor="deadline" className="block text-sm font-medium mb-1">
                  {t('jobs.deadline')}
                </label>
                <input
                  type="date"
                  id="deadline"
                  name="deadline"
                  className="input w-full box-border"
                  value={formData.deadline}
                  onChange={handleChange}
                />
              </div>
              
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  className="btn-outline cursor-pointer"
                  onClick={() => navigate(-1)}
                >
                  {t('general.cancel')}
                </button>
                <button
                  type="submit"
                  className="btn-primary cursor-pointer"
                >
                  {t('general.submit')}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}