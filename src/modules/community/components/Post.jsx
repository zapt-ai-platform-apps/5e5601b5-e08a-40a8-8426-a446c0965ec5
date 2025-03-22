import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiMessageCircle, FiHeart, FiShare2, FiMoreHorizontal } from 'react-icons/fi';
import { CommentSection } from './CommentSection';

export function Post({ post }) {
  const { t } = useTranslation();
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likes);
  const [showComments, setShowComments] = useState(false);
  
  const handleLike = () => {
    if (liked) {
      setLikesCount(likesCount - 1);
    } else {
      setLikesCount(likesCount + 1);
    }
    setLiked(!liked);
  };
  
  const handleShare = () => {
    console.log('Sharing post:', post.id);
    // Here you would normally implement share functionality
  };
  
  return (
    <div className="card">
      {/* Post Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center">
          <img 
            src={post.author.avatar} 
            alt={post.author.name} 
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <h3 className="font-medium">{post.author.name}</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">{post.timestamp}</p>
          </div>
        </div>
        
        <button className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
          <FiMoreHorizontal />
        </button>
      </div>
      
      {/* Post Content */}
      <div className="mb-4">
        <p className="mb-3 whitespace-pre-line">{post.content}</p>
        
        {post.image && (
          <div className="rounded-lg overflow-hidden mt-2">
            <img src={post.image} alt="Post" className="w-full object-cover" />
          </div>
        )}
      </div>
      
      {/* Post Stats */}
      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-3">
        <div className="flex items-center">
          <div className="flex items-center">
            <span className="inline-flex items-center justify-center w-5 h-5 bg-red-100 dark:bg-red-900/20 text-red-500 rounded-full text-xs mr-1">
              ❤️
            </span>
            <span>{likesCount}</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <span>{post.comments} {t('community.comments')}</span>
          <span>{post.shares} {t('community.shares')}</span>
        </div>
      </div>
      
      {/* Post Actions */}
      <div className="flex items-center border-t border-border pt-3">
        <button 
          className={`flex items-center justify-center flex-1 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 ${
            liked ? 'text-red-500' : 'text-gray-500 dark:text-gray-400'
          }`}
          onClick={handleLike}
        >
          <FiHeart className={`mr-2 ${liked ? 'fill-current' : ''}`} />
          {t('community.likes')}
        </button>
        
        <button 
          className="flex items-center justify-center flex-1 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400"
          onClick={() => setShowComments(!showComments)}
        >
          <FiMessageCircle className="mr-2" />
          {t('community.comment')}
        </button>
        
        <button 
          className="flex items-center justify-center flex-1 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400"
          onClick={handleShare}
        >
          <FiShare2 className="mr-2" />
          {t('community.share')}
        </button>
      </div>
      
      {/* Comments Section */}
      {showComments && <CommentSection postId={post.id} commentsCount={post.comments} />}
    </div>
  );
}