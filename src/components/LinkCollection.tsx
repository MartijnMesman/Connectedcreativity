'use client'

import LinkShare from './LinkShare'

interface Link {
  id: string
  title: string
  description: string
  url: string
  linkText?: string
  icon?: string
  category: 'resource' | 'tool' | 'external' | 'video' | 'article' | 'other'
  isAvailable: boolean
}

interface LinkCollectionProps {
  title?: string
  links: Link[]
  className?: string
}

export default function LinkCollection({ 
  title = "Useful Links", 
  links,
  className = ""
}: LinkCollectionProps) {

  if (links.length === 0) {
    return (
      <div className={`${className}`}>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
          <div className="text-4xl mb-3">🔗</div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600">No links have been added yet. The instructor will add relevant links here.</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`${className}`}>
      <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
      <div className="space-y-3">
        {links.map((link) => (
          <LinkShare
            key={link.id}
            title={link.title}
            description={link.description}
            url={link.url}
            linkText={link.linkText}
            icon={link.icon}
            category={link.category}
            isAvailable={link.isAvailable}
          />
        ))}
      </div>
    </div>
  )
}