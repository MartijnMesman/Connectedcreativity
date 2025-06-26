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
  // Base64 audio data (truncated for example - you would include the full base64 string here)
  const base64Audio = "data:audio/mpeg;base64,SUQzAgAAAAAfdlRTUwAAEwBMb2dpYyBQcm8gWCAxMC43LjlDT00AAGgAZW5naVR1bk5PUk0AIDAwMDAwMDg1IDAwMDAwMDdEIDAw..."

  const handleDownload = () => {
    // Create a temporary link element
    const link = document.createElement('a')
    link.href = base64Audio
    link.download = filename
    
    // Append to body, click, and remove
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
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