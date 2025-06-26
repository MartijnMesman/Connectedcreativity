'use client'

import { useState } from 'react'
import Link from 'next/link'

const modules = [
  {
    week: 1,
    title: "Physical Session 1",
    subtitle: "Introduction + Curiosity",
    type: "physical",
    description: "Introduction to the course and exploring curiosity as a driver for creativity.",
    duration: "3 hours",
    location: "Classroom",
    status: "available"
  },
  {
    week: 2,
    title: "Online Session 1",
    subtitle: "Mind Wandering",
    type: "online",
    description: "Discover the power of mind wandering and how it can stimulate your creativity.",
    duration: "2-3 hours self-study",
    location: "Online",
    status: "available"
  },
  {
    week: 3,
    title: "Physical Session 2",
    subtitle: "Collaborative Creativity",
    type: "physical",
    description: "Learn to collaborate effectively in creative processes and projects.",
    duration: "3 hours",
    location: "Classroom",
    status: "locked"
  },
  {
    week: 4,
    title: "Online Session 2",
    subtitle: "Intuition",
    type: "online",
    description: "Develop your intuitive skills and learn to integrate them into your creative work.",
    duration: "2-3 hours self-study",
    location: "Online",
    status: "locked"
  },
  {
    week: 5,
    title: "Physical Session 3",
    subtitle: "Resilience",
    type: "physical",
    description: "Build resilience to overcome creative challenges and setbacks.",
    duration: "3 hours",
    location: "Classroom",
    status: "locked"
  },
  {
    week: 6,
    title: "Online Session 3",
    subtitle: "Inner Critic",
    type: "online",
    description: "Learn to deal with your inner critic and transform it into an ally.",
    duration: "2-3 hours self-study",
    location: "Online",
    status: "locked"
  },
  {
    week: 7,
    title: "Online Session 4",
    subtitle: "Entrepreneurship",
    type: "online",
    description: "Discover how creativity and entrepreneurship reinforce each other.",
    duration: "2-3 hours self-study",
    location: "Online",
    status: "locked"
  },
  {
    week: 8,
    title: "Physical Session 4",
    subtitle: "Creative Courage",
    type: "physical",
    description: "Develop the courage to share and execute your creative ideas.",
    duration: "3 hours",
    location: "Classroom",
    status: "locked"
  },
  {
    week: 9,
    title: "Online Session 5",
    subtitle: "Creativity and Technology",
    type: "online",
    description: "Explore how technology can support and enrich your creative process.",
    duration: "2-3 hours self-study",
    location: "Online",
    status: "locked"
  },
  {
    week: 10,
    title: "Online Session 6",
    subtitle: "Creative Flow",
    type: "online",
    description: "Learn to achieve and maintain flow states for optimal creativity.",
    duration: "2-3 hours self-study",
    location: "Online",
    status: "locked"
  },
  {
    week: 11,
    title: "Physical Session 5",
    subtitle: "Your Creative Vision",
    type: "physical",
    description: "Integrate everything you've learned and develop your personal creative vision.",
    duration: "3 hours",
    location: "Classroom",
    status: "locked"
  }
]

export default function CoursePage() {
  const [selectedModule, setSelectedModule] = useState(modules[0])

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
              <Link href="/progress" className="text-purple-600 hover:text-purple-800 font-medium">
                Progress
              </Link>
              <Link href="/community" className="text-purple-600 hover:text-purple-800 font-medium">
                Community
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Module Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-purple-200 sticky top-24">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Course Modules</h2>
              <div className="space-y-3">
                {modules.map((module) => (
                  <button
                    key={module.week}
                    onClick={() => setSelectedModule(module)}
                    disabled={module.status === 'locked'}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-200 ${
                      selectedModule.week === module.week
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                        : module.status === 'locked'
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-white hover:bg-purple-50 text-gray-700 border border-gray-200 hover:border-purple-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-medium">Week {module.week}</span>
                          {module.type === 'physical' ? (
                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                              Physical
                            </span>
                          ) : (
                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                              Online
                            </span>
                          )}
                        </div>
                        <div className="text-sm font-semibold mt-1">{module.subtitle}</div>
                      </div>
                      {module.status === 'locked' && (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Module Content */}
          <div className="lg:col-span-3">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 border border-purple-200">
              {/* Module Header */}
              <div className="mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                    Week {selectedModule.week}
                  </span>
                  {selectedModule.type === 'physical' ? (
                    <span className="text-sm font-medium text-green-600 bg-green-100 px-3 py-1 rounded-full">
                      🏫 Physical Session
                    </span>
                  ) : (
                    <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                      💻 Online Self-Study
                    </span>
                  )}
                </div>
                
                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                  {selectedModule.title}: {selectedModule.subtitle}
                </h1>
                
                <p className="text-lg text-gray-600 mb-6">
                  {selectedModule.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{selectedModule.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{selectedModule.location}</span>
                  </div>
                </div>
              </div>

              {/* Module Content Based on Week */}
              {selectedModule.week === 1 && (
                <div className="space-y-8">
                  <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Learning Objectives</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-600 mt-1">•</span>
                        <span>Get acquainted with fellow students and the course structure</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-600 mt-1">•</span>
                        <span>Explore personal curiosity and intrinsic motivation</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-600 mt-1">•</span>
                        <span>Understand the holistic approach to creativity</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-purple-600 mt-1">•</span>
                        <span>First experience with mindfulness and presence</span>
                      </li>
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg p-6 border border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-3">📚 Preparation</h4>
                      <p className="text-gray-600 text-sm">
                        No specific preparation required. Come with an open attitude and curiosity about yourself and others.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-6 border border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-3">🎯 Activities</h4>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li>• Introduction round</li>
                        <li>• Curiosity mapping</li>
                        <li>• Mindfulness introduction</li>
                        <li>• Creative warm-up</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                    <h4 className="font-semibold text-yellow-800 mb-3">💡 Tip for this week</h4>
                    <p className="text-yellow-700">
                      Keep a 'curiosity journal'. Note three things that make you curious each day, 
                      no matter how small. This helps you become aware of your natural interest and wonder.
                    </p>
                  </div>
                </div>
              )}

              {selectedModule.week === 2 && (
                <div className="space-y-8">
                  <div className="bg-gradient-to-r from-blue-100 to-green-100 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Learning Objectives</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>Understand what mind wandering is and how it promotes creativity</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>Experience different mind wandering techniques</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>Develop awareness of your own thought patterns</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>Integrate mind wandering into your daily routine</span>
                      </li>
                    </ul>
                  </div>

                  {/* Session Structure */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-gray-800">Session Structure</h3>
                    
                    {/* Anchoring */}
                    <div className="bg-purple-50 border-l-4 border-purple-500 rounded-lg p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">1</span>
                        </div>
                        <h4 className="text-lg font-semibold text-purple-800">Anchoring (10 min)</h4>
                      </div>
                      <p className="text-purple-700 mb-4">
                        Begin with a short mindfulness exercise to ground yourself and be fully present.
                      </p>
                      <div className="bg-white rounded-lg p-4">
                        <h5 className="font-medium text-gray-800 mb-2">🎧 Guided Meditation</h5>
                        <p className="text-gray-600 text-sm mb-3">
                          Listen to the 10-minute grounding meditation to prepare for the session.
                        </p>
                        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                          ▶️ Start Meditation
                        </button>
                      </div>
                    </div>

                    {/* Context */}
                    <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">2</span>
                        </div>
                        <h4 className="text-lg font-semibold text-blue-800">Context (20 min)</h4>
                      </div>
                      <p className="text-blue-700 mb-4">
                        Explore the science behind mind wandering and its connection to creativity.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white rounded-lg p-4">
                          <h5 className="font-medium text-gray-800 mb-2">📖 Reading Material</h5>
                          <p className="text-gray-600 text-sm mb-3">
                            "The Science of Mind Wandering and Creativity" - An overview of recent research.
                          </p>
                          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                            📄 Download PDF
                          </button>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                          <h5 className="font-medium text-gray-800 mb-2">🎥 Video</h5>
                          <p className="text-gray-600 text-sm mb-3">
                            "How Mind Wandering Boosts Creativity" - TED Talk by Dr. Mary Immordino-Yang
                          </p>
                          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                            ▶️ Watch Video (15 min)
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Main Exercise */}
                    <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">3</span>
                        </div>
                        <h4 className="text-lg font-semibold text-green-800">Main Exercise (45 min)</h4>
                      </div>
                      <p className="text-green-700 mb-4">
                        Experience different mind wandering techniques and discover which ones work best for you.
                      </p>
                      
                      <div className="space-y-4">
                        <div className="bg-white rounded-lg p-4">
                          <h5 className="font-medium text-gray-800 mb-2">🚶‍♀️ Walking Meditation (15 min)</h5>
                          <p className="text-gray-600 text-sm mb-3">
                            A guided walk where you let your thoughts flow freely while moving.
                          </p>
                          <div className="flex space-x-2">
                            <button className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700">
                              🎧 Audio Guide
                            </button>
                            <button className="text-green-600 border border-green-600 px-3 py-1 rounded text-sm hover:bg-green-50">
                              📋 Instructions
                            </button>
                          </div>
                        </div>
                        
                        <div className="bg-white rounded-lg p-4">
                          <h5 className="font-medium text-gray-800 mb-2">✍️ Stream of Consciousness Writing (15 min)</h5>
                          <p className="text-gray-600 text-sm mb-3">
                            Write for 15 minutes non-stop without worrying about grammar or logic.
                          </p>
                          <div className="flex space-x-2">
                            <button className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700">
                              ⏱️ Start Timer
                            </button>
                            <button className="text-green-600 border border-green-600 px-3 py-1 rounded text-sm hover:bg-green-50">
                              💡 Tips
                            </button>
                          </div>
                        </div>
                        
                        <div className="bg-white rounded-lg p-4">
                          <h5 className="font-medium text-gray-800 mb-2">🎨 Doodle & Dream (15 min)</h5>
                          <p className="text-gray-600 text-sm mb-3">
                            Draw freely while letting your thoughts wander. No artistic skills required.
                          </p>
                          <div className="flex space-x-2">
                            <button className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700">
                              🎵 Background Music
                            </button>
                            <button className="text-green-600 border border-green-600 px-3 py-1 rounded text-sm hover:bg-green-50">
                              🖼️ Examples
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Sense Making */}
                    <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">4</span>
                        </div>
                        <h4 className="text-lg font-semibold text-yellow-800">Sense Making (20 min)</h4>
                      </div>
                      <p className="text-yellow-700 mb-4">
                        Reflect on your experiences and discover patterns in your mind wandering.
                      </p>
                      
                      <div className="bg-white rounded-lg p-4">
                        <h5 className="font-medium text-gray-800 mb-3">🤔 Reflection Questions</h5>
                        <div className="space-y-3 text-gray-700">
                          <div className="p-3 bg-gray-50 rounded">
                            <p className="font-medium mb-1">1. Which technique felt most natural?</p>
                            <textarea 
                              className="w-full p-2 border border-gray-300 rounded text-sm" 
                              rows={2}
                              placeholder="Type your answer here..."
                            ></textarea>
                          </div>
                          <div className="p-3 bg-gray-50 rounded">
                            <p className="font-medium mb-1">2. What thoughts or ideas came up spontaneously?</p>
                            <textarea 
                              className="w-full p-2 border border-gray-300 rounded text-sm" 
                              rows={2}
                              placeholder="Type your answer here..."
                            ></textarea>
                          </div>
                          <div className="p-3 bg-gray-50 rounded">
                            <p className="font-medium mb-1">3. How could you integrate mind wandering into your daily routine?</p>
                            <textarea 
                              className="w-full p-2 border border-gray-300 rounded text-sm" 
                              rows={2}
                              placeholder="Type your answer here..."
                            ></textarea>
                          </div>
                        </div>
                        <button className="mt-4 bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700 transition-colors">
                          💾 Save Reflection
                        </button>
                      </div>
                    </div>

                    {/* Take-Aways */}
                    <div className="bg-pink-50 border-l-4 border-pink-500 rounded-lg p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">5</span>
                        </div>
                        <h4 className="text-lg font-semibold text-pink-800">Take-Aways (15 min)</h4>
                      </div>
                      <p className="text-pink-700 mb-4">
                        Concrete actions and insights to take into your daily life.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white rounded-lg p-4">
                          <h5 className="font-medium text-gray-800 mb-2">📝 Personal Action Plan</h5>
                          <p className="text-gray-600 text-sm mb-3">
                            Create a plan to practice mind wandering in the coming week.
                          </p>
                          <button className="text-pink-600 hover:text-pink-800 text-sm font-medium">
                            📋 Download Template
                          </button>
                        </div>
                        <div className="bg-white rounded-lg p-4">
                          <h5 className="font-medium text-gray-800 mb-2">🔗 Extra Resources</h5>
                          <ul className="text-gray-600 text-sm space-y-1">
                            <li>• Mind wandering apps</li>
                            <li>• Scientific articles</li>
                            <li>• Community forum</li>
                            <li>• Next week preparation</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Assignment */}
                  <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">📚 Assignment for next week</h3>
                    <p className="text-gray-700 mb-4">
                      Practice 10 minutes of mind wandering daily using the technique that worked best for you. 
                      Keep a log of interesting thoughts or ideas that arise.
                    </p>
                    <div className="flex space-x-3">
                      <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                        📋 Download Log Template
                      </button>
                      <button className="text-indigo-600 border border-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-50 transition-colors">
                        💬 Share in Community
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Locked Module Content */}
              {selectedModule.status === 'locked' && (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">Module Locked</h3>
                  <p className="text-gray-500 mb-6">
                    Complete the previous modules first to gain access to this content.
                  </p>
                  <Link 
                    href="/progress" 
                    className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    View Progress
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              )}

              {/* Action Buttons */}
              {selectedModule.status === 'available' && (
                <div className="mt-8 flex justify-between items-center">
                  <Link 
                    href="/course"
                    className="text-purple-600 hover:text-purple-800 font-medium flex items-center"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to overview
                  </Link>
                  
                  <div className="flex space-x-3">
                    <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                      💾 Save Progress
                    </button>
                    <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg">
                      ✅ Mark as Complete
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}