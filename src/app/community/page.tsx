'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function CommunityPage() {
  const [selectedTab, setSelectedTab] = useState<'discussions' | 'peer-review' | 'resources'>('discussions')

  const discussions = [
    {
      id: 1,
      title: "How do you integrate mind wandering into a busy day?",
      author: "Emma van der Berg",
      module: "Week 2: Mind Wandering",
      replies: 12,
      lastActivity: "2 hours ago",
      tags: ["practical", "time-management"],
      excerpt: "I find it difficult to make time for mind wandering between all my obligations..."
    },
    {
      id: 2,
      title: "Experiences with walking meditation",
      author: "Daan Jansen",
      module: "Week 2: Mind Wandering",
      replies: 8,
      lastActivity: "5 hours ago",
      tags: ["meditation", "experience"],
      excerpt: "What a difference it makes to walk outside during meditation!"
    },
    {
      id: 3,
      title: "Curiosity vs. perfectionism",
      author: "Lisa Chen",
      module: "Week 1: Curiosity",
      replies: 15,
      lastActivity: "1 day ago",
      tags: ["mindset", "reflection"],
      excerpt: "I notice that my perfectionism sometimes blocks my curiosity..."
    }
  ]

  const peerReviews = [
    {
      id: 1,
      title: "Mind Wandering Reflection - Emma",
      author: "Emma van der Berg",
      module: "Week 2",
      status: "Awaiting review",
      reviewers: 2,
      maxReviewers: 3,
      deadline: "Dec 18, 2024"
    },
    {
      id: 2,
      title: "Curiosity Mapping - Daan",
      author: "Daan Jansen",
      module: "Week 1",
      status: "Review available",
      reviewers: 3,
      maxReviewers: 3,
      deadline: "Dec 15, 2024"
    }
  ]

  const resources = [
    {
      id: 1,
      title: "Mindfulness Apps Comparison",
      author: "Course Team",
      type: "Guide",
      downloads: 45,
      rating: 4.8,
      description: "Overview of the best mindfulness apps for students"
    },
    {
      id: 2,
      title: "Creative Inspiration Playlist",
      author: "Lisa Chen",
      type: "Music",
      downloads: 32,
      rating: 4.6,
      description: "Spotify playlist for creative flow moments"
    },
    {
      id: 3,
      title: "Mind Wandering Scientific Articles",
      author: "Dr. Sarah Williams",
      type: "Research",
      downloads: 28,
      rating: 4.9,
      description: "Collection of peer-reviewed articles about mind wandering"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-green-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-purple-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link href="/" className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">CC</span>
                </div>
                <h1 className="text-xl font-bold text-gray-800">Connected Creativity</h1>
              </Link>
            </div>
            <div className="flex items-center space-x-6">
              <Link href="/dashboard" className="text-purple-600 hover:text-purple-800 font-medium">
                Dashboard
              </Link>
              <Link href="/course" className="text-purple-600 hover:text-purple-800 font-medium">
                Course
              </Link>
              <Link href="/progress" className="text-purple-600 hover:text-purple-800 font-medium">
                Progress
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Community 🤝</h1>
          <p className="text-lg text-gray-600">Connect with fellow students, share experiences and learn together.</p>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8">
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-2 border border-purple-200 inline-flex">
            <button
              onClick={() => setSelectedTab('discussions')}
              className={`px-6 py-3 rounded-lg transition-all ${
                selectedTab === 'discussions'
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              💬 Discussions
            </button>
            <button
              onClick={() => setSelectedTab('peer-review')}
              className={`px-6 py-3 rounded-lg transition-all ${
                selectedTab === 'peer-review'
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              👥 Peer Review
            </button>
            <button
              onClick={() => setSelectedTab('resources')}
              className={`px-6 py-3 rounded-lg transition-all ${
                selectedTab === 'resources'
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              📚 Resources
            </button>
          </div>
        </div>

        {/* Discussions Tab */}
        {selectedTab === 'discussions' && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-6">
              {/* New Discussion Button */}
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-purple-200">
                <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg font-semibold">
                  ✨ Start New Discussion
                </button>
              </div>

              {/* Discussion List */}
              <div className="space-y-4">
                {discussions.map((discussion) => (
                  <div key={discussion.id} className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-purple-200 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-purple-600 cursor-pointer">
                          {discussion.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-3">{discussion.excerpt}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span className="flex items-center space-x-1">
                            <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                              <span className="text-purple-600 text-xs font-bold">
                                {discussion.author.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                            <span>{discussion.author}</span>
                          </span>
                          <span>•</span>
                          <span>{discussion.module}</span>
                          <span>•</span>
                          <span>{discussion.lastActivity}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-purple-600 font-semibold">{discussion.replies}</div>
                        <div className="text-xs text-gray-500">replies</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {discussion.tags.map((tag, index) => (
                        <span key={index} className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Community Stats */}
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-purple-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Community Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Active members</span>
                    <span className="font-semibold text-purple-600">127</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Discussions this week</span>
                    <span className="font-semibold text-blue-600">23</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Peer reviews</span>
                    <span className="font-semibold text-green-600">45</span>
                  </div>
                </div>
              </div>

              {/* Popular Tags */}
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-purple-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {['mindfulness', 'creativity', 'collaboration', 'reflection', 'practical', 'inspiration'].map((tag, index) => (
                    <button key={index} className="bg-gray-100 hover:bg-purple-100 text-gray-700 hover:text-purple-700 text-sm px-3 py-1 rounded-full transition-colors">
                      #{tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Online Members */}
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-purple-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Currently Online</h3>
                <div className="space-y-3">
                  {['Emma van der Berg', 'Daan Jansen', 'Lisa Chen', 'Tom de Vries'].map((member, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">
                          {member.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <span className="text-gray-700 text-sm">{member}</span>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Peer Review Tab */}
        {selectedTab === 'peer-review' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-purple-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Peer Review System</h2>
                <p className="text-gray-600 mb-6">
                  Give and receive feedback from fellow students on your reflections and assignments. 
                  This helps you discover different perspectives and deepen your own insights.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-2">How it works</h3>
                    <ul className="text-blue-700 text-sm space-y-1">
                      <li>• Upload your assignment</li>
                      <li>• Receive 3 peer reviews</li>
                      <li>• Review 3 assignments from others</li>
                      <li>• Integrate feedback into your learning process</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-800 mb-2">Benefits</h3>
                    <ul className="text-green-700 text-sm space-y-1">
                      <li>• Different perspectives</li>
                      <li>• Improved reflection skills</li>
                      <li>• Constructive feedback</li>
                      <li>• Community connection</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {peerReviews.map((review) => (
                  <div key={review.id} className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-purple-200">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-800">{review.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        review.status === 'Awaiting review' 
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {review.status}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                      <span>By: {review.author}</span>
                      <span>Module: {review.module}</span>
                      <span>Deadline: {review.deadline}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-600">Reviews:</span>
                        <div className="flex space-x-1">
                          {[...Array(review.maxReviewers)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-3 h-3 rounded-full ${
                                i < review.reviewers ? 'bg-purple-600' : 'bg-gray-200'
                              }`}
                            ></div>
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">
                          {review.reviewers}/{review.maxReviewers}
                        </span>
                      </div>
                      
                      <button className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        review.status === 'Review available'
                          ? 'bg-green-600 text-white hover:bg-green-700'
                          : 'bg-purple-600 text-white hover:bg-purple-700'
                      }`}>
                        {review.status === 'Review available' ? 'View Reviews' : 'Give Review'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-purple-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Your Review Stats</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Reviews given</span>
                    <span className="font-semibold text-purple-600">8</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Reviews received</span>
                    <span className="font-semibold text-blue-600">6</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Average rating</span>
                    <span className="font-semibold text-green-600">4.7/5</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-purple-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Review Guidelines</h3>
                <ul className="text-gray-600 text-sm space-y-2">
                  <li>• Be constructive and respectful</li>
                  <li>• Give specific examples</li>
                  <li>• Highlight strengths</li>
                  <li>• Suggest improvements</li>
                  <li>• Ask questions to stimulate reflection</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Resources Tab */}
        {selectedTab === 'resources' && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3 space-y-6">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-purple-200">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">Shared Resources</h2>
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                    📤 Upload Resource
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {resources.map((resource) => (
                    <div key={resource.id} className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center justify-between mb-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          resource.type === 'Guide' ? 'bg-blue-100 text-blue-800' :
                          resource.type === 'Music' ? 'bg-green-100 text-green-800' :
                          'bg-purple-100 text-purple-800'
                        }`}>
                          {resource.type}
                        </span>
                        <div className="flex items-center space-x-1">
                          <span className="text-yellow-500">⭐</span>
                          <span className="text-sm text-gray-600">{resource.rating}</span>
                        </div>
                      </div>
                      
                      <h3 className="font-semibold text-gray-800 mb-2">{resource.title}</h3>
                      <p className="text-gray-600 text-sm mb-3">{resource.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">By: {resource.author}</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs text-gray-500">{resource.downloads} downloads</span>
                          <button className="bg-purple-100 text-purple-600 px-3 py-1 rounded text-xs hover:bg-purple-200 transition-colors">
                            Download
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-purple-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Categories</h3>
                <div className="space-y-2">
                  {['All Resources', 'Guides & Tutorials', 'Music & Audio', 'Research & Articles', 'Tools & Apps', 'Inspiration'].map((category, index) => (
                    <button key={index} className="w-full text-left px-3 py-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded transition-colors">
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-purple-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Popular Downloads</h3>
                <div className="space-y-3">
                  <div className="text-sm">
                    <div className="font-medium text-gray-800">Mindfulness Apps Comparison</div>
                    <div className="text-gray-600">45 downloads</div>
                  </div>
                  <div className="text-sm">
                    <div className="font-medium text-gray-800">Creative Inspiration Playlist</div>
                    <div className="text-gray-600">32 downloads</div>
                  </div>
                  <div className="text-sm">
                    <div className="font-medium text-gray-800">Mind Wandering Articles</div>
                    <div className="text-gray-600">28 downloads</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}