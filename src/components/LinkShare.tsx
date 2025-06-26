'use client'

interface LinkShareProps {
  title?: string
  description?: string
  url?: string
  linkText?: string
  icon?: string
  className?: string
  isAvailable?: boolean
  category?: 'resource' | 'tool' | 'external' | 'video' | 'article' | 'other'
}

export default function LinkShare({ 
  title = "Shared Resource", 
  description = "Click to access this resource",
  url = "#",
  linkText = "Visit Link",
  icon = "🔗",
  className = "",
  isAvailable = true,
  category = 'other'
}: LinkShareProps) {

  const handleLinkClick = () => {
    if (!isAvailable) return
    
    if (url === "#") {
      alert("Link will be added by the instructor soon!")
      return
    }
    
    // Open link in new tab
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const getCategoryStyles = () => {
    switch (category) {
      case 'resource':
        return 'bg-blue-50 border-blue-200 text-blue-800'
      case 'tool':
        return 'bg-green-50 border-green-200 text-green-800'
      case 'external':
        return 'bg-purple-50 border-purple-200 text-purple-800'
      case 'video':
        return 'bg-red-50 border-red-200 text-red-800'
      case 'article':
        return 'bg-yellow-50 border-yellow-200 text-yellow-800'
      default:
        return 'bg-gray-50 border-gray-200 text-gray-800'
    }
  }

  const getCategoryIcon = () => {
    switch (category) {
      case 'resource': return '📚'
      case 'tool': return '🛠️'
      case 'external': return '🌐'
      case 'video': return '🎥'
      case 'article': return '📄'
      default: return icon
    }
  }

  return (
    <div className={`${className}`}>
      <div className={`border rounded-lg p-4 ${getCategoryStyles()}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
              <span className="text-xl">{getCategoryIcon()}</span>
            </div>
            <div>
              <h4 className="font-semibold">{title}</h4>
              <p className="text-sm opacity-80">{description}</p>
            </div>
          </div>
          
          <button
            onClick={handleLinkClick}
            disabled={!isAvailable}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 ${
              isAvailable
                ? 'bg-white text-gray-700 hover:bg-gray-50 shadow-lg hover:shadow-xl transform hover:scale-105 border'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            <span>{isAvailable ? linkText : 'Coming Soon'}</span>
          </button>
        </div>
        
        {!isAvailable && (
          <div className="mt-3 p-3 bg-white bg-opacity-50 border border-white border-opacity-30 rounded">
            <p className="text-sm">
              💡 <strong>For Developers:</strong> Add the URL in the LinkShare component props to make this link active.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}