'use client'

import { Bug } from 'lucide-react'
import { useRouter } from 'next/navigation'

export function DebugButton() {
  const router = useRouter()

  const regenerateAllImages = () => {
    router.refresh()
  }

  return (
    <button
      className="fixed bottom-4 right-4 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full shadow-lg transition-colors duration-200"
      onClick={regenerateAllImages}
    >
      <Bug className="h-6 w-6" />
      <span className="sr-only">Regenerate Images</span>
    </button>
  )
}

