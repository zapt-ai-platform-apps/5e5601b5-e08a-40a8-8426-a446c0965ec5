import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiImage, FiVideo, FiLink } from 'react-icons/fi';
import { useAuth } from '@/modules/auth/useAuth';

export function CreatePost() {
  const { t } = useTranslation();
  const { user } = useAuth();
  const [postContent, setPostContent] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Post content:', postContent);
    // Here you would normally submit the post to your API
    setPostContent('');
  };
  
  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center flex-shrink-0">
            {user?.email ? user.email.charAt(0).toUpperCase() : 'U'}
          </div>
          
          <div className="flex-1">
            <textarea
              placeholder={t('community.postSomething')}
              className="input w-full min-h-[80px] box-border"
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
              required
            ></textarea>
            
            <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center space-x-2">
                <button 
                  type="button" 
                  className="p-2 text-gray-500 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <FiImage />
                </button>
                <button 
                  type="button" 
                  className="p-2 text-gray-500 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <FiVideo />
                </button>
                <button 
                  type="button" 
                  className="p-2 text-gray-500 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <FiLink />
                </button>
              </div>
              
              <button 
                type="submit" 
                className="btn-primary cursor-pointer"
                disabled={!postContent.trim()}
              >
                {t('community.createPost')}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}