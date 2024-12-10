import './globals.css'
import { NetflixHeader } from '../components/NetflixHeader'
import { Analytics } from '@vercel/analytics/react'

export const metadata = {
  title: 'Genix Portfolio Website',
  description: 'A Netflix-inspired website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div>
        <NetflixHeader />
        {children}
        </div>
        <Analytics />
      </body>
    </html>
  )
}

