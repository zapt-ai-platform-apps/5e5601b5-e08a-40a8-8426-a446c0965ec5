import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiMessageCircle, FiHeart, FiShare2, FiMoreHorizontal } from 'react-icons/fi';
import { CreatePost } from './components/CreatePost';
import { Post } from './components/Post';

export default function CommunityPage() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('trending');
  
  // Mock posts data
  const posts = [
    {
      id: 1,
      author: {
        name: 'Ahmed Hassan',
        avatar: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHJ4PSI4IiBmaWxsPSIjNzNBOUZGIi8+PHBhdGggZD0iTTEyIDI1LjVDMTIgMjIuNDYyNSAxNC40NjI1IDIwIDE3LjUgMjBIMjIuNUMyNS41Mzc1IDIwIDI4IDIyLjQ2MjUgMjggMjUuNUMyOCAyNS43NzY2IDI3Ljc3NjYgMjggMjcuNSAyOEgxMi41QzEyLjIyMzQgMjggMTIgMjUuNzc2NiAxMiAyNS41WiIgZmlsbD0id2hpdGUiLz48Y2lyY2xlIGN4PSIyMCIgY3k9IjE1IiByPSI0IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg=='
      },
      content: 'Just finished my latest project using React and Tailwind CSS. It was a great experience! Check out the live demo here: #webdevelopment #freelance',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDYwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjYwMCIgaGVpZ2h0PSIzMDAiIHJ4PSI4IiBmaWxsPSIjNGZiM2Y3Ii8+PHJlY3QgeD0iMTAwIiB5PSI1MCIgd2lkdGg9IjQwMCIgaGVpZ2h0PSIyMDAiIHJ4PSI2IiBmaWxsPSJ3aGl0ZSIvPjxwYXRoIGQ9Ik0xNTAgMTAwTDIwMCAxNTBMMjUwIDEwMEwzMDAgMTUwTDM1MCAxMDBMNDAwIDE1MEw0NTAgMTAwIiBzdHJva2U9IiM0ZmIzZjciIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PC9zdmc+',
      timestamp: '2 hours ago',
      likes: 24,
      comments: 5,
      shares: 2
    },
    {
      id: 2,
      author: {
        name: 'Sara Ahmed',
        avatar: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHJ4PSI4IiBmaWxsPSIjRkY3QTdBIi8+PHBhdGggZD0iTTEyIDI1LjVDMTIgMjIuNDYyNSAxNC40NjI1IDIwIDE3LjUgMjBIMjIuNUMyNS41Mzc1IDIwIDI4IDIyLjQ2MjUgMjggMjUuNUMyOCAyNS43NzY2IDI3Ljc3NjYgMjggMjcuNSAyOEgxMi41QzEyLjIyMzQgMjggMTIgMjUuNzc2NiAxMiAyNS41WiIgZmlsbD0id2hpdGUiLz48Y2lyY2xlIGN4PSIyMCIgY3k9IjE1IiByPSI0IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg=='
      },
      content: 'Looking for recommendations for the best UI/UX design courses for beginners. Any suggestions? #design #learning',
      image: null,
      timestamp: '5 hours ago',
      likes: 18,
      comments: 12,
      shares: 1
    },
    {
      id: 3,
      author: {
        name: 'Mohamed Ali',
        avatar: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHJ4PSI4IiBmaWxsPSIjOUI4QUZGIi8+PHBhdGggZD0iTTEyIDI1LjVDMTIgMjIuNDYyNSAxNC40NjI1IDIwIDE3LjUgMjBIMjIuNUMyNS41Mzc1IDIwIDI4IDIyLjQ2MjUgMjggMjUuNUMyOCAyNS43NzY2IDI3Ljc3NjYgMjggMjcuNSAyOEgxMi41QzEyLjIyMzQgMjggMTIgMjUuNzc2NiAxMiAyNS41WiIgZmlsbD0id2hpdGUiLz48Y2lyY2xlIGN4PSIyMCIgY3k9IjE1IiByPSI0IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg=='
      },
      content: 'Just got my first freelance client on FreelanceHub! The platform is amazing and easy to use. If you're looking for work or to hire talented freelancers, definitely check it out. #FreelanceHub #Success',
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDYwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjYwMCIgaGVpZ2h0PSIzMDAiIHJ4PSI4IiBmaWxsPSIjOGI1Y2Y2Ii8+PHBhdGggZD0iTTEwMCAxNTBMMjAwIDEwMEgzMDBMMTAwIDE1MFoiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTUwMCAxNTBMNDAwIDEwMEgzMDBMNTAwIDE1MFoiIGZpbGw9IndoaXRlIi8+PHBhdGggZD0iTTEwMCAxNTBMMjAwIDIwMEgzMDBMMTAwIDE1MFoiIGZpbGw9IiM2ZDI4ZDkiLz48cGF0aCBkPSJNNTAwIDE1MEw0MDAgMjAwSDMwMEw1MDAgMTUwWiIgZmlsbD0iIzZkMjhkOSIvPjwvc3ZnPg==',
      timestamp: '1 day ago',
      likes: 42,
      comments: 8,
      shares: 5
    }
  ];
  
  const tabs = [
    { id: 'trending', label: t('community.trending') },
    { id: 'recent', label: t('community.recent') },
    { id: 'following', label: t('community.following') }
  ];
  
  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">{t('community.posts')}</h1>
      
      {/* Create Post */}
      <div className="mb-6">
        <CreatePost />
      </div>
      
      {/* Tabs */}
      <div className="mb-6 border-b border-border">
        <div className="flex space-x-4">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`pb-2 px-1 font-medium ${
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
      
      {/* Posts */}
      <div className="space-y-6">
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}