import React, { useState } from 'react';
import { TrendingUp, Users, Sparkles, MessageCircle } from 'lucide-react';
import Modal from './Modal';
import CommentForm from './CommentForm';

interface Topic {
  id: number;
  category: string;
  title: string;
  posts: number;
  icon: any;
  description: string;
  image: string;
  comments: Comment[];
}

interface Comment {
  id: number;
  author: string;
  content: string;
  timestamp: string;
  avatar: string;
}

const trendingTopics: Topic[] = [
  {
    id: 1,
    category: "Science",
    title: "Quantum Computing Breakthrough",
    description: "Scientists have achieved a major breakthrough in quantum computing, demonstrating sustained quantum coherence for over 10 minutes.",
    posts: 2504,
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&auto=format&fit=crop&q=60",
    comments: [
      {
        id: 1,
        author: "Quantum Expert",
        content: "This breakthrough could revolutionize cryptography as we know it!",
        timestamp: "2h ago",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150"
      }
    ]
  },
  {
    id: 2,
    category: "Technology",
    title: "AI Ethics Discussion",
    description: "Leading tech companies are joining forces to establish ethical guidelines for AI development.",
    posts: 1832,
    icon: Users,
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60",
    comments: [
      {
        id: 1,
        author: "Tech Observer",
        content: "We need to ensure AI development remains transparent and accountable.",
        timestamp: "1h ago",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
      }
    ]
  },
  {
    id: 3,
    category: "Environment",
    title: "Sustainable Living",
    description: "New research shows that small changes in daily habits can lead to significant environmental impact.",
    posts: 1654,
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1623227866882-c005c26dfe41?w=800&auto=format&fit=crop&q=60",
    comments: [
      {
        id: 1,
        author: "EcoWarrior",
        content: "Every small action counts towards a sustainable future!",
        timestamp: "30m ago",
        avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150"
      }
    ]
  }
];

export default function TrendingPanel() {
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [topics, setTopics] = useState(trendingTopics);

  const handleAddComment = (content: string) => {
    if (!selectedTopic) return;

    const newComment = {
      id: selectedTopic.comments.length + 1,
      author: "You",
      content,
      timestamp: "Just now",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150"
    };

    const updatedTopics = topics.map(topic => {
      if (topic.id === selectedTopic.id) {
        return {
          ...topic,
          comments: [newComment, ...topic.comments]
        };
      }
      return topic;
    });

    setTopics(updatedTopics);
    setSelectedTopic(updatedTopics.find(t => t.id === selectedTopic.id) || null);
  };

  return (
    <>
      <div className="p-4">
        <div className="flex items-center space-x-2 mb-6">
          <TrendingUp className="h-5 w-5 text-[#45B7A4]" />
          <h2 className="text-xl font-bold text-white">Trending Topics</h2>
        </div>
        
        <div className="space-y-4">
          {topics.map(topic => (
            <div
              key={topic.id}
              className="post-card rounded-xl overflow-hidden cursor-pointer hover:scale-[1.02] transition-all duration-300"
              onClick={() => setSelectedTopic(topic)}
            >
              <div className="relative h-32">
                <img 
                  src={topic.image} 
                  alt={topic.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center space-x-2 mb-1">
                    <topic.icon className="h-4 w-4 text-[#45B7A4]" />
                    <span className="text-sm text-[#45B7A4] font-medium">{topic.category}</span>
                  </div>
                  <h3 className="font-semibold text-white">{topic.title}</h3>
                </div>
              </div>
              <div className="p-3 flex items-center justify-between text-sm text-gray-400">
                <span>{topic.posts.toLocaleString()} opinions</span>
                <div className="flex items-center space-x-1">
                  <MessageCircle className="h-4 w-4" />
                  <span>{topic.comments.length}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 post-card rounded-xl p-4">
          <h3 className="font-bold text-[#45B7A4] mb-2">Why Pinions?</h3>
          <p className="text-sm text-gray-300">
            Like our platypus mascot, we celebrate uniqueness. Share your authentic perspective and join the conversation!
          </p>
        </div>
      </div>

      <Modal
        isOpen={!!selectedTopic}
        onClose={() => setSelectedTopic(null)}
      >
        {selectedTopic && (
          <div className="bg-[#0A0A0A] text-white">
            <div className="relative h-48">
              <img 
                src={selectedTopic.image} 
                alt={selectedTopic.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
            </div>
            <div className="p-6">
              <div className="flex items-center space-x-2 mb-2">
                <selectedTopic.icon className="h-5 w-5 text-[#45B7A4]" />
                <span className="text-sm text-[#45B7A4] font-medium">{selectedTopic.category}</span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">{selectedTopic.title}</h2>
              <p className="text-gray-300 mb-6">{selectedTopic.description}</p>
              
              <div className="border-t border-white/10 pt-4">
                <div className="flex items-center space-x-2 mb-4">
                  <MessageCircle className="h-5 w-5 text-[#45B7A4]" />
                  <h3 className="font-semibold text-white">Discussion</h3>
                </div>
                
                <CommentForm onSubmit={handleAddComment} />

                <div className="mt-6 space-y-4">
                  {selectedTopic.comments.map(comment => (
                    <div key={comment.id} className="flex space-x-3">
                      <img
                        src={comment.avatar}
                        alt={comment.author}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="font-medium text-white">{comment.author}</span>
                          <span className="text-sm text-gray-400">{comment.timestamp}</span>
                        </div>
                        <p className="text-gray-300 mt-1">{comment.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}