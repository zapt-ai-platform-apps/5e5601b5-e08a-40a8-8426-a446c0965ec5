import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '@/modules/auth/useAuth';
import { FiEdit2, FiPlusCircle } from 'react-icons/fi';

export default function ProfilePage() {
  const { t } = useTranslation();
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');
  
  // Mock profile data
  const profile = {
    name: user?.email ? user.email.split('@')[0] : 'User',
    title: 'Freelance Developer',
    bio: 'Passionate freelance developer with 5+ years of experience in web and mobile development. Specialized in React, Node.js, and modern JavaScript frameworks.',
    location: 'Cairo, Egypt',
    website: 'https://example.com',
    skills: ['JavaScript', 'React', 'Node.js', 'TypeScript', 'Tailwind CSS', 'MongoDB'],
    education: [
      {
        id: 1,
        school: 'Cairo University',
        degree: 'Bachelor of Computer Science',
        years: '2015 - 2019'
      }
    ],
    experience: [
      {
        id: 1,
        company: 'Web Solutions Inc',
        role: 'Senior Frontend Developer',
        years: '2020 - Present',
        description: 'Developing and maintaining web applications for various clients.'
      },
      {
        id: 2,
        company: 'Tech Startup',
        role: 'Frontend Developer',
        years: '2019 - 2020',
        description: 'Worked on building a fintech product with React and TypeScript.'
      }
    ]
  };
  
  const tabs = [
    { id: 'profile', label: t('profile.editProfile') },
    { id: 'skills', label: t('profile.skills') },
    { id: 'experience', label: t('profile.experience') },
    { id: 'education', label: t('profile.education') },
    { id: 'portfolio', label: t('profile.portfolio') }
  ];
  
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="max-w-4xl mx-auto">
        {/* Profile Header */}
        <div className="card mb-6">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="w-24 h-24 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center text-4xl font-bold text-indigo-600 dark:text-indigo-300">
              {profile.name.charAt(0).toUpperCase()}
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold mb-1">{profile.name}</h2>
              <p className="text-gray-500 dark:text-gray-400 mb-2">{profile.title}</p>
              <p className="mb-4">{profile.bio}</p>
              
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {profile.skills.slice(0, 4).map((skill, index) => (
                  <span 
                    key={index} 
                    className="badge badge-primary"
                  >
                    {skill}
                  </span>
                ))}
                {profile.skills.length > 4 && (
                  <span className="badge">+{profile.skills.length - 4}</span>
                )}
              </div>
            </div>
            
            <button className="btn-outline flex items-center">
              <FiEdit2 className="mr-2" />
              {t('profile.editProfile')}
            </button>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="mb-6 overflow-x-auto">
          <div className="flex space-x-2 md:space-x-4 border-b border-border">
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`py-2 px-3 whitespace-nowrap font-medium ${
                  activeTab === tab.id 
                    ? 'text-indigo-600 border-b-2 border-indigo-600 dark:text-indigo-400 dark:border-indigo-400' 
                    : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Tab Content */}
        <div className="space-y-6">
          {activeTab === 'profile' && (
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4">{t('profile.editProfile')}</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    className="input w-full box-border"
                    defaultValue={profile.name}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Professional Title
                  </label>
                  <input
                    type="text"
                    className="input w-full box-border"
                    defaultValue={profile.title}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Bio
                  </label>
                  <textarea
                    className="input w-full box-border"
                    rows="4"
                    defaultValue={profile.bio}
                  ></textarea>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    className="input w-full box-border"
                    defaultValue={profile.location}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Website
                  </label>
                  <input
                    type="url"
                    className="input w-full box-border"
                    defaultValue={profile.website}
                  />
                </div>
                
                <div className="flex justify-end">
                  <button className="btn-primary">
                    {t('general.save')}
                  </button>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'skills' && (
            <div className="card p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">{t('profile.skills')}</h3>
                <button className="btn-outline flex items-center">
                  <FiPlusCircle className="mr-2" />
                  {t('profile.addSkill')}
                </button>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {profile.skills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="badge badge-primary py-2 px-4 flex items-center"
                  >
                    {skill}
                    <button className="ml-2 text-xs">&times;</button>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {activeTab === 'experience' && (
            <div className="card p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">{t('profile.experience')}</h3>
                <button className="btn-outline flex items-center">
                  <FiPlusCircle className="mr-2" />
                  {t('profile.addExperience')}
                </button>
              </div>
              
              <div className="space-y-6">
                {profile.experience.map(exp => (
                  <div key={exp.id} className="border-b border-border pb-6 last:border-0 last:pb-0">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="font-semibold">{exp.role}</h4>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{exp.years}</span>
                    </div>
                    <p className="text-indigo-600 dark:text-indigo-400 mb-2">{exp.company}</p>
                    <p className="text-sm">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {activeTab === 'education' && (
            <div className="card p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">{t('profile.education')}</h3>
                <button className="btn-outline flex items-center">
                  <FiPlusCircle className="mr-2" />
                  {t('profile.addEducation')}
                </button>
              </div>
              
              <div className="space-y-6">
                {profile.education.map(edu => (
                  <div key={edu.id} className="border-b border-border pb-6 last:border-0 last:pb-0">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="font-semibold">{edu.degree}</h4>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{edu.years}</span>
                    </div>
                    <p className="text-indigo-600 dark:text-indigo-400">{edu.school}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {activeTab === 'portfolio' && (
            <div className="card p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">{t('profile.portfolio')}</h3>
                <button className="btn-outline flex items-center">
                  <FiPlusCircle className="mr-2" />
                  {t('profile.addPortfolio')}
                </button>
              </div>
              
              <div className="text-center py-8">
                <p className="text-gray-500 dark:text-gray-400">
                  You haven't added any portfolio items yet.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}