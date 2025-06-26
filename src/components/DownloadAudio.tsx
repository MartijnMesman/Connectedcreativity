'use client'

interface DownloadAudioProps {
  title?: string
  filename?: string
  className?: string
}

export default function DownloadAudio({ 
  title = "Download Mindwandering Audio", 
  filename = "mindwandering.mp3",
  className = ""
}: DownloadAudioProps) {
  
  const handleDownload = () => {
    // For demonstration purposes, we'll create a simple audio file
    // In a real implementation, you would either:
    // 1. Have the full base64 string of your actual audio file
    // 2. Link to a hosted audio file URL
    // 3. Generate audio dynamically
    
    // Option 1: If you have a hosted audio file
    const audioUrl = "/audio/mindwandering-meditation.mp3" // Replace with your actual audio file path
    
    // Check if the file exists by trying to fetch it
    fetch(audioUrl, { method: 'HEAD' })
      .then(response => {
        if (response.ok) {
          // File exists, proceed with download
          const link = document.createElement('a')
          link.href = audioUrl
          link.download = filename
          link.target = '_blank'
          
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
        } else {
          // File doesn't exist, show helpful message
          alert(`Audio file not found. Please add your audio file to the public/audio/ folder or update the audioUrl in the component.`)
        }
      })
      .catch(() => {
        // Fallback: Show instructions for adding the audio file
        alert(`To enable audio download:
        
1. Add your audio file to the public/audio/ folder
2. Update the audioUrl in DownloadAudio.tsx
3. Or provide the full base64 string of your audio file

Current expected path: ${audioUrl}`)
      })
  }

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <button
        onClick={handleDownload}
        className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-4-4m4 4l4-4m-4-4V3" />
        </svg>
        <span>🎧 {title}</span>
      </button>
      <p className="text-sm text-gray-600 mt-2 text-center">
        Download the guided meditation audio file
      </p>
    </div>
  )
}