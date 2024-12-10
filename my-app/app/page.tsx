import Link from 'next/link'
import ProfileCard from '../components/ProfileCard'
import { getImageUrl } from '../utils/image'
import { DebugButton } from '../components/DebugButton'

const profiles = [
  { 
    name: 'Recruiter', 
    prompt: 'professional business person silhouette',
    image: getImageUrl('professional business person silhouette')
  },
  { 
    name: 'Developer', 
    prompt: 'programmer with laptop silhouette',
    image: getImageUrl('programmer with laptop silhouette')
  },
  { 
    name: 'Stalker', 
    prompt: 'mysterious figure silhouette',
    image: getImageUrl('mysterious figure silhouette')
  },
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 relative">
      <h1 className="text-5xl font-bold mb-12 tracking-tight">Who's watching?</h1>
      <div className="flex space-x-8">
        {profiles.map((profile) => (
          <Link href={`/dashboard/${profile.name.toLowerCase()}`} key={profile.name}>
            <ProfileCard 
              name={profile.name} 
              image={profile.image}
              prompt={profile.prompt} 
            />
          </Link>
        ))}
      </div>
      <DebugButton />
    </main>
  )
}

