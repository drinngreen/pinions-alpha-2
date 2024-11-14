import React, { useState } from 'react';
import { AlertCircle, Send, Image as ImageIcon } from 'lucide-react';
import Logo from './Logo';

interface PostFormProps {
  onSubmit: (content: string) => void;
}

export default function PostForm({ onSubmit }: PostFormProps) {
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
    <div className="bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] rounded-xl p-6 shadow-xl border border-white/10 hover:border-white/20 transition-colors">
      <div className="flex items-center space-x-3 mb-4">
        <div className="hover-platypus">
          <Logo className="h-12 w-12" />
        </div>
        <div>
          <h2 className="text-lg font-display text-white">Share Your Perspective</h2>
          <p className="text-sm text-gray-400">Your unique take matters!</p>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full p-4 rounded-lg bg-black/40 border border-white/10 focus:ring-2 focus:ring-white/20 focus:border-transparent resize-none text-white placeholder-gray-400 text-lg"
          placeholder="What's your unique take on this?"
          rows={3}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        
        <div className="mt-4 flex items-center justify-between">
          <button
            type="button"
            className="p-2 text-gray-400 hover:text-white rounded-full hover:bg-white/10 transition-colors"
          >
            <ImageIcon className="h-6 w-6" />
          </button>

          <div className="flex items-center space-x-3">
            {isConfirming && (
              <button
                type="button"
                className="px-4 py-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full text-base"
                onClick={() => setIsConfirming(false)}
              >
                Rethink
              </button>
            )}
            <button
              type="submit"
              className="px-6 py-2.5 bg-[#45B7A4] text-white rounded-full hover:bg-[#3a9b8b] transition-colors flex items-center space-x-2 text-base font-medium shadow-lg"
            >
              <Send className="h-5 w-5" />
              <span>{isConfirming ? 'Yes, Share My Take' : 'Share Opinion'}</span>
            </button>
          </div>
        </div>
        
        {isConfirming && (
          <div className="mt-4 p-4 bg-white/5 rounded-lg flex items-start space-x-3 border border-[#45B7A4]/30">
            <AlertCircle className="h-6 w-6 text-[#45B7A4] flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-[#45B7A4] font-medium">Is this your true perspective?</p>
              <p className="text-sm text-gray-300 mt-1">Like our platypus mascot, be proud of being different - but make sure it's authentic!</p>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}