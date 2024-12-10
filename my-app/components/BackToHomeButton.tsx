'use client'

import Link from 'next/link'
import { Home } from 'lucide-react'

export function BackToHomeButton() {
  return (
    <Link
      href="/"
      className="fixed top-4 right-4 z-50 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full shadow-lg transition-colors duration-200 flex items-center justify-center"
    >
      <Home className="h-6 w-6" />
      <span className="sr-only">Back to Home</span>
    </Link>
  )
}

