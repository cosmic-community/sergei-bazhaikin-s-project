'use client'

import { useState } from 'react'

interface GalleryImage {
  url: string
  imgix_url: string
}

interface ProductGalleryProps {
  images: GalleryImage[]
  alt: string
}

export default function ProductGallery({ images, alt }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  if (!images || images.length === 0) {
    return (
      <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center text-gray-300 text-8xl">
        📦
      </div>
    )
  }

  const currentImage = images[activeIndex]

  if (!currentImage) {
    return null
  }

  return (
    <div>
      <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
        <img
          src={`${currentImage.imgix_url}?w=1200&h=1200&fit=crop&auto=format,compress`}
          alt={alt}
          width={600}
          height={600}
          className="w-full h-full object-cover"
        />
      </div>

      {images.length > 1 && (
        <div className="grid grid-cols-5 gap-2">
          {images.map((image, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`aspect-square bg-gray-100 rounded overflow-hidden border-2 transition-colors ${
                idx === activeIndex ? 'border-brand-600' : 'border-transparent hover:border-gray-300'
              }`}
            >
              <img
                src={`${image.imgix_url}?w=200&h=200&fit=crop&auto=format,compress`}
                alt={`${alt} ${idx + 1}`}
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}