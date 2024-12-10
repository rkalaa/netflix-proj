'use client'

import Image from 'next/image'
import { useState } from 'react'
import { getImageUrl } from '../utils/image'

interface ProfileCardProps {
  name: string
  image: string
  prompt: string
}

export default function ProfileCard({ name, image, prompt }: ProfileCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [currentImage, setCurrentImage] = useState(image)

  const regenerateImage = () => {
    setCurrentImage(getImageUrl(prompt) + `&t=${Date.now()}`)
  }

  return (
    <div
      className="flex flex-col items-center transition-all duration-200 ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`w-32 h-32 rounded-md overflow-hidden mb-4 ${isHovered ? 'ring-4 ring-white' : ''}`}>
        <Image
          src={currentImage}
          alt={name}
          width={128}
          height={128}
          className="transition-all duration-200 object-cover"
        />
      </div>
      <p className={`text-gray-300 ${isHovered ? 'text-white' : ''} text-lg mt-2 tracking-tight`}>{name}</p>
    </div>
  )
}

