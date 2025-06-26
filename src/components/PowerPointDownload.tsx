'use client'

interface PowerPointDownloadProps {
  title?: string
  filename?: string
  downloadUrl?: string
  className?: string
  isAvailable?: boolean
}

export default function PowerPointDownload({ 
  title = "Session Slides", 
  filename = "session-slides.pptx",
  downloadUrl = "#", // You can replace this with actual URLs
  className = "",
  isAvailable = true
}: PowerPointDownloadProps) {

  const handleDownload = () => {
    if (!isAvailable) return
    
    if (downloadUrl === "#") {
      // Placeholder behavior - in real implementation, this would download the actual file
      alert("PowerPoint download will be available soon. The instructor will add the link here.")
      return
    }
    
    // Create a temporary link element for actual downloads
    const link = document.createElement('a')
    link.href = downloadUrl
    link.download = filename
    link.target = '_blank'
    
    // Append to body, click, and remove
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className={`${className}`}>
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-blue-800">{title}</h4>
              <p className="text-sm text-blue-600">PowerPoint presentation for this session</p>
            </div>
          </div>
          
          <button
            onClick={handleDownload}
            disabled={!isAvailable}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 ${
              isAvailable
                ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl transform hover:scale-105'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-4-4m4 4l4-4m-4-4V3" />
            </svg>
            <span>{isAvailable ? 'Download' : 'Coming Soon'}</span>
          </button>
        </div>
        
        {!isAvailable && (
          <div className="mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded">
            <p className="text-yellow-800 text-sm">
              💡 <strong>For Developers:</strong> Add the PowerPoint download link in the PowerPointDownload component props.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}