import './globals.css'
import { NetflixHeader } from '../components/NetflixHeader'

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
        <NetflixHeader />
        {children}
      </body>
    </html>
  )
}

