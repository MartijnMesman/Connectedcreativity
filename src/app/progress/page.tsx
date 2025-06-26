'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function ProgressPage() {
  const [selectedView, setSelectedView] = useState<'overview' | 'detailed' | 'analytics'>('overview')

  const moduleProgress = [
    {
      week: 1,
      title: "Introduction + Curiosity",
      type: "physical",
      completed: true,
      completedDate: "2024-12-10",
      score: 85,
      timeSpent: "3.5 hours",
      activities: [
        { name: "Introduction round", completed: true, score: 90 },
        { name: "Curiosity mapping", completed: true, score: 85 },
        { name: "Mindfulness introduction", completed: true, score: 80 },
        { name: "Creative warm-up", completed: true, score: 85 }
      ]
    },
    {
      week: 2,
      title: "Mind Wandering",
      type: "online",
      completed: true,
      completedDate: "2024-12-12",
      score: 92,
      timeSpent: "2.8 hours",
      activities: [
        { name: "Anchoring Meditation", completed: true, score: 95 },
        { name: "Context Reading", completed: true, score: 88 },
        { name: "Walking Meditation", completed: true, score: 92 },
        { name: "Stream of Consciousness", completed: true, score: 94 },
        { name: "Doodle & Dream", completed: true, score: 90 },
        { name: "Reflection Questions", completed: true, score: 95 }
      ]
    },
    {
      week: 3,
      title: "Collaborative Creativity",
      type: "physical",
      completed: false,
      completedDate: null,
      score: null,
      timeSpent: "0 hours",
      activities: []
    }
  ]

  const learningGoals = [
    { goal: "Develop mindfulness skills", progress: 75, category: "Presence" },
    { goal: "Strengthen creative confidence", progress: 60, category: "Courage" },
    { goal: "Improve collaboration skills", progress: 30, category: "Collaboration" },
    { goal: "Integrate technology in creative process", progress: 15, category: "Technology" },
    { goal: "Achieve flow states", progress: 45, category: "Flow" }
  ]

  const skillDevelopment = [
    { skill: "Mindfulness", level: 3, maxLevel: 5, progress: 60 },
    { skill: "Creativity", level: 2, maxLevel: 5, progress: 40 },
    { skill: "Collaboration", level: 2, maxLevel: 5, progress: 35 },
    { skill: "Resilience", level: 1, maxLevel: 5, progress: 20 },
    { skill: "Empathy", level: 2, maxLevel: 5, progress: 45 }
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
              <Link href="/community" className="text-purple-600 hover:text-purple-800 font-medium">
                Community
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Progress & Analytics</h1>
          <p className="text-lg text-gray-600">Detailed overview of your learning journey and development.</p>
        </div>

        {/* View Selector */}
        <div className="mb-8">
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-2 border border-purple-200 inline-flex">
            <button
              onClick={() => setSelectedView('overview')}
              className={`px-4 py-2 rounded-lg transition-all ${
                selectedView === 'overview'
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setSelectedView('detailed')}
              className={`px-4 py-2 rounded-lg transition-all ${
                selectedView === 'detailed'
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              Detailed
            </button>
            <button
              onClick={() => setSelectedView('analytics')}
              className={`px-4 py-2 rounded-lg transition-all ${
                selectedView === 'analytics'
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              Analytics
            </button>
          </div>
        </div>

        {/* Overview View */}
        {selectedView === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Progress */}
            <div className="lg:col-span-2 space-y-6">
              {/* Overall Progress */}
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-purple-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Total Progress</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-1">18%</div>
                    <div className="text-gray-600">Course Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-1">88.5%</div>
                    <div className="text-gray-600">Average Score</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">6.3</div>
                    <div className="text-gray-600">Hours Spent</div>
                  </div>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 h-4 rounded-full" style={{width: '18%'}}></div>
                </div>
                <p className="text-center text-gray-600">2 of 11 modules completed</p>
              </div>

              {/* Module Progress */}
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-purple-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Module Progress</h2>
                <div className="space-y-4">
                  {moduleProgress.map((module) => (
                    <div key={module.week} className={`p-4 rounded-lg border-2 ${
                      module.completed 
                        ? 'bg-green-50 border-green-200' 
                        : 'bg-gray-50 border-gray-200'
                    }`}>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-800">
                          Week {module.week}: {module.title}
                        </h3>
                        {module.completed && (
                          <span className="text-green-600 font-bold">{module.score}%</span>
                        )}
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <span className={`px-2 py-1 rounded-full ${
                          module.type === 'physical' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {module.type === 'physical' ? 'Physical' : 'Online'}
                        </span>
                        <span>Time spent: {module.timeSpent}</span>
                        {module.completedDate && (
                          <span>Completed: {new Date(module.completedDate).toLocaleDateString('en-US')}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Learning Goals */}
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-purple-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Learning Goals</h3>
                <div className="space-y-4">
                  {learningGoals.map((goal, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-gray-700">{goal.goal}</span>
                        <span className="text-sm font-medium text-purple-600">{goal.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full" 
                          style={{width: `${goal.progress}%`}}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-500">{goal.category}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-purple-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Achievements</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                    <div className="text-2xl">🏆</div>
                    <div>
                      <div className="font-medium text-gray-800">First Module</div>
                      <div className="text-sm text-gray-600">Completed your first module</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="text-2xl">🧘</div>
                    <div>
                      <div className="font-medium text-gray-800">Mindfulness Beginner</div>
                      <div className="text-sm text-gray-600">Completed 10 meditations</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="text-2xl">📝</div>
                    <div>
                      <div className="font-medium text-gray-800">Reflection Master</div>
                      <div className="text-sm text-gray-600">Answered all reflection questions</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Detailed View */}
        {selectedView === 'detailed' && (
          <div className="space-y-8">
            {moduleProgress.map((module) => (
              <div key={module.week} className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-purple-200">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">
                    Week {module.week}: {module.title}
                  </h2>
                  {module.completed && (
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">{module.score}%</div>
                      <div className="text-sm text-gray-600">Completed on {new Date(module.completedDate!).toLocaleDateString('en-US')}</div>
                    </div>
                  )}
                </div>

                {module.completed ? (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <div className="text-lg font-bold text-purple-600">{module.score}%</div>
                        <div className="text-sm text-gray-600">Total Score</div>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="text-lg font-bold text-blue-600">{module.timeSpent}</div>
                        <div className="text-sm text-gray-600">Time Spent</div>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <div className="text-lg font-bold text-green-600">{module.activities.length}</div>
                        <div className="text-sm text-gray-600">Activities</div>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Activity Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {module.activities.map((activity, index) => (
                        <div key={index} className="p-4 bg-white rounded-lg border border-gray-200">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium text-gray-800">{activity.name}</h4>
                            <span className="text-green-600 font-bold">{activity.score}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-green-600 h-2 rounded-full" 
                              style={{width: `${activity.score}%`}}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="text-gray-400 text-6xl mb-4">🔒</div>
                    <h3 className="text-lg font-semibold text-gray-600 mb-2">Module Not Started Yet</h3>
                    <p className="text-gray-500 mb-4">Complete the previous modules first to gain access.</p>
                    <Link 
                      href="/course"
                      className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      Go to Course
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Analytics View */}
        {selectedView === 'analytics' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Skill Development */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-purple-200">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Skill Development</h2>
              <div className="space-y-6">
                {skillDevelopment.map((skill, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-800">{skill.skill}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-600">Level {skill.level}/{skill.maxLevel}</span>
                        <div className="flex space-x-1">
                          {[...Array(skill.maxLevel)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-3 h-3 rounded-full ${
                                i < skill.level ? 'bg-purple-600' : 'bg-gray-200'
                              }`}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-purple-600 to-blue-600 h-3 rounded-full" 
                        style={{width: `${skill.progress}%`}}
                      ></div>
                    </div>
                    <div className="text-right text-sm text-gray-600 mt-1">{skill.progress}%</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Patterns */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-purple-200">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Learning Patterns</h2>
              <div className="space-y-6">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">Best Learning Time</h3>
                  <p className="text-blue-700">You are most active between 2:00-4:00 PM</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">Favorite Activities</h3>
                  <p className="text-green-700">Meditation and reflective exercises score highest</p>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <h3 className="font-semibold text-purple-800 mb-2">Learning Speed</h3>
                  <p className="text-purple-700">You complete modules 15% faster than average</p>
                </div>
                <div className="p-4 bg-yellow-50 rounded-lg">
                  <h3 className="font-semibold text-yellow-800 mb-2">Areas for Focus</h3>
                  <p className="text-yellow-700">Focus more on collaboration exercises for better balance</p>
                </div>
              </div>
            </div>

            {/* Weekly Activity */}
            <div className="lg:col-span-2 bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-purple-200">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Weekly Activity Overview</h2>
              <div className="grid grid-cols-7 gap-2 mb-4">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
                  <div key={index} className="text-center text-sm font-medium text-gray-600 p-2">
                    {day}
                  </div>
                ))}
                {[...Array(7)].map((_, index) => (
                  <div key={index} className="h-20 bg-gray-100 rounded-lg p-2 relative">
                    {index < 5 && (
                      <div className={`absolute bottom-0 left-0 right-0 rounded-b-lg ${
                        index === 1 ? 'bg-purple-600 h-16' :
                        index === 3 ? 'bg-blue-600 h-12' :
                        'bg-green-600 h-8'
                      }`}></div>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-600 rounded"></div>
                  <span>Light activity</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-600 rounded"></div>
                  <span>Moderate activity</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-purple-600 rounded"></div>
                  <span>High activity</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}