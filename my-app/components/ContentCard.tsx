'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { getImageUrl } from '../utils/image'
import { Play } from 'lucide-react'

interface ContentCardProps {
  title: string
  image: string
  prompt: string
}

export default function ContentCard({ title, prompt }: ContentCardProps) {
  const [currentImage, setCurrentImage] = useState('')

  // Ensure a new image is fetched on every page load
  useEffect(() => {
    setCurrentImage(getImageUrl(prompt) + `&t=${Date.now()}`)
  }, [prompt])

  const regenerateImage = () => {
    setCurrentImage(getImageUrl(prompt) + `&t=${Date.now()}`)
  }

  return (
    <div
      className="relative w-full aspect-video bg-gray-800 rounded-md overflow-hidden cursor-pointer transition-all duration-200 ease-in-out group"
    >
      <Image
        src={currentImage}
        alt={title}
        fill
        className="object-cover transition-all duration-200 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
      <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-200">
        <h3 className="text-base sm:text-lg font-medium mb-2 tracking-tight">{title}</h3>
        <div className="flex space-x-2">
          <button
            onClick={regenerateImage}
            className="flex items-center justify-center bg-white text-black px-2 py-1 rounded-md text-xs font-semibold hover:bg-opacity-80 transition-colors duration-200"
          >
            <Play size={16} className="mr-1" />
            View
          </button>
        </div>
      </div>
    </div>
  )
}