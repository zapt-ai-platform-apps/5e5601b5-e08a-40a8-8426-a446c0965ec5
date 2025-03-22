import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '@/modules/auth/useAuth';

export function CommentSection({ postId, commentsCount }) {
  const { t } = useTranslation();
  const { user } = useAuth();
  const [commentText, setCommentText] = useState('');
  
  // Mock comments data
  const [comments, setComments] = useState([
    {
      id: 1,
      author: {
        name: 'Amir Hassan',
        avatar: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHJ4PSI4IiBmaWxsPSIjNzNBOUZGIi8+PHBhdGggZD0iTTEyIDI1LjVDMTIgMjIuNDYyNSAxNC40NjI1IDIwIDE3LjUgMjBIMjIuNUMyNS41Mzc1IDIwIDI4IDIyLjQ2MjUgMjggMjUuNUMyOCAyNS43NzY2IDI3Ljc3NjYgMjggMjcuNSAyOEgxMi41QzEyLjIyMzQgMjggMTIgMjUuNzc2NiAxMiAyNS41WiIgZmlsbD0id2hpdGUiLz48Y2lyY2xlIGN4PSIyMCIgY3k9IjE1IiByPSI0IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg=='
      },
      content: 'Great job! The design looks amazing.',
      timestamp: '30 min ago',
      likes: 3
    },
    {
      id: 2,
      author: {
        name: 'Laila Mahmoud',
        avatar: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHJ4PSI4IiBmaWxsPSIjRkY3QTdBIi8+PHBhdGggZD0iTTEyIDI1LjVDMTIgMjIuNDYyNSAxNC40NjI1IDIwIDE3LjUgMjBIMjIuNUMyNS41Mzc1IDIwIDI4IDIyLjQ2MjUgMjggMjUuNUMyOCAyNS43NzY2IDI3Ljc3NjYgMjggMjcuNSAyOEgxMi41QzEyLjIyMzQgMjggMTIgMjUuNzc2NiAxMiAyNS41WiIgZmlsbD0id2hpdGUiLz48Y2lyY2xlIGN4PSIyMCIgY3k9IjE1IiByPSI0IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg=='
      },
      content: 'Can you share which tools you used for this project?',
      timestamp: '1 hour ago',
      likes: 1
    }
  ]);
  
  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    
    // Add a new comment to the list
    const newComment = {
      id: Date.now(),
      author: {
        name: user?.email ? user.email.split('@')[0] : 'User',
        avatar: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHJ4PSI4IiBmaWxsPSIjOUI4QUZGIi8+PHBhdGggZD0iTTEyIDI1LjVDMTIgMjIuNDYyNSAxNC40NjI1IDIwIDE3LjUgMjBIMjIuNUMyNS41Mzc1IDIwIDI4IDIyLjQ2MjUgMjggMjUuNUMyOCAyNS43NzY2IDI3Ljc3NjYgMjggMjcuNSAyOEgxMi41QzEyLjIyMzQgMjggMTIgMjUuNzc2NiAxMiAyNS41WiIgZmlsbD0id2hpdGUiLz48Y2lyY2xlIGN4PSIyMCIgY3k9IjE1IiByPSI0IiBmaWxsPSJ3aGl0ZSIvPjwvc3ZnPg=='
      },
      content: commentText,
      timestamp: 'Just now',
      likes: 0
    };
    
    setComments([...comments, newComment]);
    setCommentText('');
  };
  
  return (
    <div className="mt-4 pt-3 border-t border-border">
      {/* Comment Input */}
      <form onSubmit={handleSubmitComment} className="mb-4 flex items-start gap-2">
        <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center flex-shrink-0">
          {user?.email ? user.email.charAt(0).toUpperCase() : 'U'}
        </div>
        
        <div className="flex-1">
          <input
            type="text"
            placeholder={t('community.writeComment')}
            className="input w-full box-border"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            required
          />
        </div>
        
        <button 
          type="submit" 
          className="btn-primary cursor-pointer"
          disabled={!commentText.trim()}
        >
          {t('general.submit')}
        </button>
      </form>
      
      {/* Comments List */}
      <div className="space-y-4">
        {comments.map(comment => (
          <div key={comment.id} className="flex items-start gap-2">
            <img 
              src={comment.author.avatar} 
              alt={comment.author.name} 
              className="w-8 h-8 rounded-full"
            />
            
            <div className="flex-1">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium">{comment.author.name}</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{comment.timestamp}</span>
                </div>
                <p className="text-sm">{comment.content}</p>
              </div>
              
              <div className="flex items-center mt-1 text-xs text-gray-500 dark:text-gray-400">
                <button className="hover:text-indigo-600 mr-4">Like {comment.likes > 0 && `(${comment.likes})`}</button>
                <button className="hover:text-indigo-600">Reply</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}