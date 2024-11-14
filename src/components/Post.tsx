import React from 'react';
import { ThumbsUp, MessageCircle, Share2, CheckCircle } from 'lucide-react';

interface PostProps {
  post: {
    id: number;
    author: string;
    handle: string;
    content: string;
    image?: string;
    likes: number;
    comments: number;
    shares: number;
    verified: boolean;
    avatar: string;
  };
}

export default function Post({ post }: PostProps) {
  return (
    <div className="post-card rounded-xl p-4">
      <div className="flex items-start space-x-3">
        <img
          src={post.avatar}
          alt={post.author}
          className="w-12 h-12 rounded-full object-cover border-2 border-[#45B7A4]"
        />
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-white">{post.author}</span>
            {post.verified && (
              <CheckCircle className="h-4 w-4 text-[#45B7A4]" />
            )}
            <span className="text-gray-400 text-sm">{post.handle}</span>
          </div>
          <p className="mt-2 text-gray-200">{post.content}</p>
          {post.image && (
            <div className="mt-3 rounded-xl overflow-hidden">
              <img 
                src={post.image} 
                alt="Post content"
                className="w-full h-64 object-cover"
              />
            </div>
          )}
          <div className="mt-4 flex items-center space-x-6 text-gray-400">
            <button className="flex items-center space-x-2 hover:text-[#45B7A4] transition-colors">
              <ThumbsUp className="h-5 w-5" />
              <span>{post.likes}</span>
            </button>
            <button className="flex items-center space-x-2 hover:text-[#45B7A4] transition-colors">
              <MessageCircle className="h-5 w-5" />
              <span>{post.comments}</span>
            </button>
            <button className="flex items-center space-x-2 hover:text-[#45B7A4] transition-colors">
              <Share2 className="h-5 w-5" />
              <span>{post.shares}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}