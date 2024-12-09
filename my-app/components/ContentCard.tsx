'use client'

import { useState } from 'react'
import Image from 'next/image'
import { getImageUrl } from '../utils/image'
import { Play, Info } from 'lucide-react'

interface ContentCardProps {
  title: string
  image: string
  prompt: string
}

export default function ContentCard({ title, image, prompt }: ContentCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [currentImage, setCurrentImage] = useState(image)

  const regenerateImage = () => {
    setCurrentImage(getImageUrl(prompt) + `&t=${Date.now()}`)
  }

  return (
    <div
      className="relative w-64 h-36 bg-gray-800 rounded-md overflow-hidden cursor-pointer transition-all duration-200 ease-in-out group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={currentImage}
        alt={title}
        fill
        className="object-cover transition-all duration-200 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
      <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-200">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <div className="flex space-x-2">
          <button className="flex items-center justify-center bg-white text-black px-4 py-1 rounded-md text-sm font-semibold hover:bg-opacity-80 transition-colors duration-200">
            <Play size={16} className="mr-1" />
            View
          </button>
          <button className="flex items-center justify-center bg-gray-500 bg-opacity-50 text-white px-4 py-1 rounded-md text-sm hover:bg-opacity-70 transition-colors duration-200">
            <Info size={16} className="mr-1" />
            More Info
          </button>
        </div>
      </div>
    </div>
  )
}

