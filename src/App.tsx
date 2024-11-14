import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import PostForm from './components/PostForm';
import Post from './components/Post';
import Navbar from './components/Navbar';
import TrendingPanel from './components/TrendingPanel';
import RightSidebar from './components/RightSidebar';
import FollowingStrip from './components/FollowingStrip';
import Logo from './components/Logo';

export default function App() {
  const [isTrendingExpanded, setIsTrendingExpanded] = useState(false);
  const [isRightExpanded, setIsRightExpanded] = useState(false);
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Jane Cooper",
      handle: "@jane_cooper",
      content: "Just learned that honey never spoils! Ancient Egyptian tombs contained honey that was still preserved after thousands of years. Nature is amazing! 🍯",
      image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=800&auto=format&fit=crop&q=60",
      likes: 24,
      comments: 5,
      shares: 3,
      verified: true,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
    },
    {
      id: 2,
      author: "Alex Rivers",
      handle: "@alex_rivers",
      content: "Did you know? The Great Wall of China is not visible from space with the naked eye. This is a common misconception that's been debunked by multiple astronauts! 🚀",
      image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&auto=format&fit=crop&q=60",
      likes: 15,
      comments: 8,
      shares: 2,
      verified: true,
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150"
    }
  ]);

  const addPost = (content: string) => {
    const newPost = {
      id: posts.length + 1,
      author: "You",
      handle: "@user",
      content,
      likes: 0,
      comments: 0,
      shares: 0,
      verified: false,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150"
    };
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="min-h-screen bg-gradient-main">
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30 pointer-events-none"></div>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-4 flex relative">
        {/* Left Sidebar */}
        <aside className={`fixed left-0 top-0 h-full bg-gradient-card transition-all duration-300 z-30
          ${isTrendingExpanded ? 'w-[300px] translate-x-0' : 'w-[300px] -translate-x-[calc(100%-40px)]'}`}>
          <button
            onClick={() => setIsTrendingExpanded(!isTrendingExpanded)}
            className="absolute -right-10 top-24 bg-gradient-card rounded-r-xl p-3 hover:bg-white/10 shadow-lg border border-white/20 border-l-0 z-50"
          >
            {isTrendingExpanded ? <ChevronLeft className="h-6 w-6 text-white" /> : <ChevronRight className="h-6 w-6 text-white" />}
          </button>
          <div className="h-full flex flex-col pt-24">
            <div className="flex justify-center mb-6">
              <Logo className="h-16 w-16 hover-platypus" variant="colored" />
            </div>
            <div className="flex-1 overflow-y-auto scrollbar-hide">
              <TrendingPanel />
            </div>
          </div>
        </aside>
        
        {/* Main Content */}
        <main className={`flex-1 transition-all duration-300 
          ${isTrendingExpanded ? 'ml-[300px]' : 'ml-[40px]'}
          ${isRightExpanded ? 'mr-[280px]' : 'mr-[60px]'}
          min-h-[calc(100vh-80px)]`}
        >
          <div className="flex justify-center mb-8">
            <Logo className="h-24 w-24 hover-platypus opacity-20" variant="white" />
          </div>
          <div className="max-w-3xl mx-auto">
            <div className={`transition-all duration-300 
              ${(isTrendingExpanded && isRightExpanded) ? 'max-w-xl' : 
                ((isTrendingExpanded || isRightExpanded) ? 'max-w-2xl' : 'max-w-3xl')}`}>
              <PostForm onSubmit={addPost} />
              <div className="space-y-6 mt-8 pb-20">
                {posts.map(post => (
                  <Post key={post.id} post={post} />
                ))}
              </div>
            </div>
          </div>
        </main>

        {/* Right Sidebar */}
        <RightSidebar isExpanded={isRightExpanded} onToggle={() => setIsRightExpanded(!isRightExpanded)} />
      </div>
      <FollowingStrip />
    </div>
  );
}