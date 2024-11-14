import React from 'react';
import { Feather, Search } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-10">
      <div className="w-full bg-gradient-to-r from-[#2a2a2a] to-[#1a1a1a] border-b border-white/5">
        <p className="text-center py-1.5 text-sm text-gray-300 font-medium">
          "With great opinions comes great responsibility. Share wisely, think deeply."
        </p>
      </div>
      <div className="glass-effect">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="w-72 flex items-center">
              <h1 className="text-2xl font-display text-white tracking-tight">Pinions</h1>
            </div>
            <div className="flex-1 max-w-xl px-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search opinions..."
                  className="w-full bg-black/40 border border-white/10 rounded-full py-2 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>
            <div className="flex items-center space-x-4 w-72 justify-end">
              <button className="px-4 py-2 rounded-full bg-black text-white hover:bg-black/80 transition-colors flex items-center space-x-2 border border-white/10">
                <Feather className="h-4 w-4" />
                <span>Share Your Unique Take</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}