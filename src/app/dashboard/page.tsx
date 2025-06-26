'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Dashboard() {
  const [completedModules, setCompletedModules] = useState([1, 2]) // Example completed modules

  const modules = [
    { week: 1, title: "Introduction + Curiosity", type: "physical", completed: true, score: 85 },
    { week: 2, title: "Mind Wandering", type: "online", completed: true, score: 92 },
    { week: 3, title: "Collaborative Creativity", type: "physical", completed: false, score: null },
    { week: 4, title: "Intuition", type: "online", completed: false, score: null },
    { week: 5, title: "Resilience", type: "physical", completed: false, score: null },
  ]

  const upcomingDeadlines = [
    { title: "Mind Wandering Reflection", date: "Dec 15, 2024", type: "assignment" },
    { title: "Collaborative Creativity Session", date: "Dec 18, 2024", type: "physical" },
    { title: "Intuition Self-Study", date: "Dec 22, 2024", type: "online" },
  ]

  const recentActivity = [
    { action: "Completed", module: "Mind Wandering - Stream of Consciousness", time: "2 hours ago" },
    { action: "Started", module: "Mind Wandering - Context", time: "1 day ago" },
    { action: "Completed", module: "Introduction - Curiosity mapping", time: "3 days ago" },
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
              <Link href="/course" className="text-purple-600 hover:text-purple-800 font-medium">
                Course
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
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome back! 👋</h1>
          <p className="text-lg text-gray-600">Here's an overview of your progress in Connected Creativity.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Progress Overview */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-purple-200">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Progress Overview</h2>
              
              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Total Progress</span>
                  <span className="text-sm font-medium text-purple-600">2 of 11 modules completed</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 h-3 rounded-full" style={{width: '18%'}}></div>
                </div>
              </div>

              {/* Module Cards */}
              <div className="space-y-4">
                {modules.map((module) => (
                  <div key={module.week} className={`p-4 rounded-lg border-2 transition-all ${
                    module.completed 
                      ? 'bg-green-50 border-green-200' 
                      : 'bg-gray-50 border-gray-200'
                  }`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          module.completed 
                            ? 'bg-green-600 text-white' 
                            : 'bg-gray-300 text-gray-600'
                        }`}>
                          {module.completed ? '✓' : module.week}
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800">Week {module.week}: {module.title}</h3>
                          <div className="flex items-center space-x-2">
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              module.type === 'physical' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-blue-100 text-blue-800'
                            }`}>
                              {module.type === 'physical' ? 'Physical' : 'Online'}
                            </span>
                            {module.completed && module.score && (
                              <span className="text-xs text-green-600 font-medium">
                                Score: {module.score}%
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {module.completed ? (
                          <Link 
                            href={`/course?week=${module.week}`}
                            className="text-green-600 hover:text-green-800 text-sm font-medium"
                          >
                            View
                          </Link>
                        ) : (
                          <Link 
                            href={`/course?week=${module.week}`}
                            className="bg-purple-600 text-white px-3 py-1 rounded text-sm hover:bg-purple-700 transition-colors"
                          >
                            Start
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-purple-200">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-4 p-3 bg-white rounded-lg border border-gray-200">
                    <div className={`w-3 h-3 rounded-full ${
                      activity.action === 'Completed' ? 'bg-green-500' : 'bg-blue-500'
                    }`}></div>
                    <div className="flex-1">
                      <p className="text-gray-800">
                        <span className="font-medium">{activity.action}</span> - {activity.module}
                      </p>
                      <p className="text-sm text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-purple-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Statistics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Modules completed</span>
                  <span className="font-bold text-purple-600">2/11</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Average score</span>
                  <span className="font-bold text-green-600">88.5%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Time spent</span>
                  <span className="font-bold text-blue-600">8.5 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Streak</span>
                  <span className="font-bold text-orange-600">5 days</span>
                </div>
              </div>
            </div>

            {/* Upcoming Deadlines */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-purple-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Upcoming Deadlines</h3>
              <div className="space-y-3">
                {upcomingDeadlines.map((deadline, index) => (
                  <div key={index} className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <h4 className="font-medium text-gray-800 text-sm">{deadline.title}</h4>
                    <p className="text-xs text-gray-600">{deadline.date}</p>
                    <span className={`inline-block mt-1 text-xs px-2 py-1 rounded-full ${
                      deadline.type === 'physical' 
                        ? 'bg-green-100 text-green-800' 
                        : deadline.type === 'assignment'
                        ? 'bg-orange-100 text-orange-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {deadline.type === 'physical' ? 'Physical Session' : 
                       deadline.type === 'assignment' ? 'Assignment' : 'Online'}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-purple-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link 
                  href="/course?week=3"
                  className="block w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                >
                  Start Next Module
                </Link>
                <Link 
                  href="/community"
                  className="block w-full bg-white text-purple-600 border border-purple-600 text-center py-3 rounded-lg hover:bg-purple-50 transition-colors"
                >
                  Community Forum
                </Link>
                <Link 
                  href="/progress"
                  className="block w-full bg-gray-100 text-gray-700 text-center py-3 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Detailed Progress
                </Link>
              </div>
            </div>

            {/* Motivational Quote */}
            <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl p-6 border border-purple-200">
              <div className="text-center">
                <div className="text-3xl mb-3">💡</div>
                <blockquote className="text-gray-700 italic mb-3">
                  "Creativity is intelligence having fun."
                </blockquote>
                <cite className="text-sm text-gray-600">- Albert Einstein</cite>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}