import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-green-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-purple-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">CC</span>
              </div>
              <h1 className="text-xl font-bold text-gray-800">Connected Creativity</h1>
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

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full mb-8">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Connected Creativity
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            A Holistic Design Curriculum
          </p>
          
          <p className="text-lg text-purple-700 font-medium mb-8 max-w-3xl mx-auto">
            Strengthen your creative skills through arts-based methods and develop a deeper connection with yourself, others, and the world around you.
          </p>

          {/* Course Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-purple-200">
              <div className="text-3xl mb-2">🎓</div>
              <h3 className="font-semibold text-gray-800 mb-1">Level</h3>
              <p className="text-sm text-gray-600">3rd Year University</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-purple-200">
              <div className="text-3xl mb-2">⏱️</div>
              <h3 className="font-semibold text-gray-800 mb-1">Duration</h3>
              <p className="text-sm text-gray-600">11 weeks</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-purple-200">
              <div className="text-3xl mb-2">🌐</div>
              <h3 className="font-semibold text-gray-800 mb-1">Format</h3>
              <p className="text-sm text-gray-600">Hybrid learning</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-purple-200">
              <div className="text-3xl mb-2">🎨</div>
              <h3 className="font-semibold text-gray-800 mb-1">Focus</h3>
              <p className="text-sm text-gray-600">Holistic creativity</p>
            </div>
          </div>

          <Link 
            href="/course" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-lg font-semibold"
          >
            Start your creative journey
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Course Overview */}
      <div className="bg-white/50 backdrop-blur-sm py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              What will you learn?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-purple-100">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🧘</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Presence & Mindfulness</h3>
                <p className="text-gray-600">Develop awareness and presence as the foundation for creative expression.</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">❤️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Empathy & Connection</h3>
                <p className="text-gray-600">Strengthen your ability to connect with others and understand their perspectives.</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg border border-green-100">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">💪</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Resilience</h3>
                <p className="text-gray-600">Build mental and emotional resilience for creative challenges.</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg border border-yellow-100">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Collaboration</h3>
                <p className="text-gray-600">Learn to collaborate effectively in creative processes.</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg border border-indigo-100">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">💻</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Technology & Creativity</h3>
                <p className="text-gray-600">Discover how technology can enhance your creative process.</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg border border-pink-100">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🌊</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Creative Flow</h3>
                <p className="text-gray-600">Achieve and maintain flow states for optimal creativity.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Learning Approach */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Holistic Learning Approach
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Each session follows a proven structure that promotes deep learning and personal growth.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl p-6">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="font-semibold text-purple-800 mb-2">Anchoring</h3>
                <p className="text-sm text-purple-700">Ground yourself and arrive in the moment</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl p-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="font-semibold text-blue-800 mb-2">Context</h3>
                <p className="text-sm text-blue-700">Explore background and theory</p>
              </div>
              
              <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-xl p-6">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">3</span>
                </div>
                <h3 className="font-semibold text-green-800 mb-2">Main Exercise</h3>
                <p className="text-sm text-green-700">Experience through practical exercises</p>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-xl p-6">
                <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">4</span>
                </div>
                <h3 className="font-semibold text-yellow-800 mb-2">Sense Making</h3>
                <p className="text-sm text-yellow-700">Reflect and integrate your experiences</p>
              </div>
              
              <div className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-xl p-6">
                <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">5</span>
                </div>
                <h3 className="font-semibold text-pink-800 mb-2">Take-Aways</h3>
                <p className="text-sm text-pink-700">Take concrete insights with you</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to discover your creative potential?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Begin your journey toward deeper creativity, authentic connection, and personal growth.
          </p>
          <Link 
            href="/course" 
            className="inline-flex items-center px-8 py-4 bg-white text-purple-600 rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-lg font-semibold"
          >
            Start now
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}