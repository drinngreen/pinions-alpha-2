import React, { useState } from 'react';
import { AlertCircle, Send } from 'lucide-react';
import Logo from './Logo';

interface CommentFormProps {
  onSubmit: (content: string) => void;
}

export default function CommentForm({ onSubmit }: CommentFormProps) {
  const [content, setContent] = useState('');
  const [isConfirming, setIsConfirming] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isConfirming) {
      setIsConfirming(true);
      return;
    }
    if (content.trim()) {
      onSubmit(content);
      setContent('');
      setIsConfirming(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="flex items-start space-x-3">
        <Logo className="h-8 w-8" />
        <div className="flex-1">
          <textarea
            className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:ring-2 focus:ring-[#45B7A4] focus:border-transparent resize-none text-white placeholder-gray-500"
            placeholder="What's your take on this topic?"
            rows={2}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          
          {isConfirming && (
            <div className="mt-2 p-3 bg-[#45B7A4]/10 rounded-lg flex items-start space-x-2">
              <AlertCircle className="h-5 w-5 text-[#45B7A4] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-[#45B7A4]">Are you sure about sharing this perspective?</p>
              </div>
            </div>
          )}

          <div className="mt-2 flex justify-end">
            {isConfirming && (
              <button
                type="button"
                className="mr-2 px-3 py-1.5 text-sm text-gray-400 hover:text-white hover:bg-white/10 rounded-full"
                onClick={() => setIsConfirming(false)}
              >
                Rethink
              </button>
            )}
            <button
              type="submit"
              className="px-3 py-1.5 bg-[#45B7A4] text-white text-sm rounded-full hover:bg-[#3a9b8b] transition-colors flex items-center space-x-2"
            >
              <Send className="h-3 w-3" />
              <span>{isConfirming ? 'Yes, Share' : 'Comment'}</span>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}