import React from 'react';
import { CheckCheck, Users } from 'lucide-react';

const followingAccounts = [
  {
    name: "Marie Curie",
    handle: "@sciencepioneer",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    verified: true
  },
  {
    name: "Alan Turing",
    handle: "@computinggenius",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
    verified: true
  },
  {
    name: "Jane Goodall",
    handle: "@wildlifeadvocate",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
    verified: true
  },
  {
    name: "Neil deGrasse Tyson",
    handle: "@stargazer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    verified: true
  },
  {
    name: "Ada Lovelace",
    handle: "@firstcoder",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150",
    verified: true
  }
];

export default function FollowingStrip() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent pt-8">
      <div className="bg-[#1a1a1a] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-4 py-3 overflow-x-auto scrollbar-hide">
            <div className="flex items-center space-x-2 flex-shrink-0">
              <Users className="h-5 w-5 text-[#45B7A4]" />
              <span className="text-sm font-medium text-white">Following</span>
            </div>
            {followingAccounts.map((account, index) => (
              <div key={index} className="flex items-center space-x-2 flex-shrink-0 group">
                <div className="relative">
                  <img
                    src={account.avatar}
                    alt={account.name}
                    className="w-8 h-8 rounded-full object-cover border border-white/10 group-hover:border-[#45B7A4] transition-colors"
                  />
                  {account.verified && (
                    <CheckCheck className="absolute -bottom-1 -right-1 h-3.5 w-3.5 text-[#45B7A4]" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white truncate group-hover:text-[#45B7A4] transition-colors">
                    {account.name}
                  </p>
                  <p className="text-xs text-gray-400 truncate">{account.handle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}