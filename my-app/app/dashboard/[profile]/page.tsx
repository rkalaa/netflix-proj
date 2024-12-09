import ContentCard from '../../../components/ContentCard'
import { getImageUrl } from '../../../utils/image'
import { DebugButton } from '../../../components/DebugButton'
import { notFound } from 'next/navigation'

const profileContent = {
  recruiter: {
    movies: [
      { 
        title: 'Projects', 
        prompt: 'coding project visualization on red background',
        image: getImageUrl('coding project visualization on red background')
      },
      { 
        title: 'Experience', 
        prompt: 'career timeline on red background',
        image: getImageUrl('career timeline on red background')
      },
      { 
        title: 'LinkedIn Profile', 
        prompt: 'LinkedIn logo with professional background on red',
        image: getImageUrl('LinkedIn logo with professional background on red')
      },
    ],
    tvShows: [
      { 
        title: 'Skills', 
        prompt: 'technical skills mindmap on red background',
        image: getImageUrl('technical skills mindmap on red background')
      },
      { 
        title: 'Education', 
        prompt: 'graduation cap and diploma on red background',
        image: getImageUrl('graduation cap and diploma on red background')
      },
      { 
        title: 'Resume', 
        prompt: 'professional resume document on red background',
        image: getImageUrl('professional resume document on red background')
      },
    ],
  },
  developer: {
    movies: [
      { 
        title: 'Projects', 
        prompt: 'coding project visualization on red background',
        image: getImageUrl('coding project visualization on red background')
      },
      { 
        title: 'Open-source Contributions', 
        prompt: 'github contribution graph on red background',
        image: getImageUrl('github contribution graph on red background')
      },
      { 
        title: 'Hackathon Entries', 
        prompt: 'hackathon event poster on red background',
        image: getImageUrl('hackathon event poster on red background')
      },
    ],
    tvShows: [
      { 
        title: 'Skills', 
        prompt: 'technical skills mindmap on red background',
        image: getImageUrl('technical skills mindmap on red background')
      },
      { 
        title: 'Experience', 
        prompt: 'career timeline on red background',
        image: getImageUrl('career timeline on red background')
      },
      { 
        title: 'Technical Blog', 
        prompt: 'tech blog website screenshot on red background',
        image: getImageUrl('tech blog website screenshot on red background')
      },
    ],
  },
  stalker: {
    movies: [
      { 
        title: 'Fun Projects', 
        prompt: 'exciting hobby project collage on red background',
        image: getImageUrl('exciting hobby project collage on red background')
      },
      { 
        title: 'Experience', 
        prompt: 'career timeline on red background',
        image: getImageUrl('career timeline on red background')
      },
      { 
        title: 'Hobbies', 
        prompt: 'diverse hobbies illustration on red background',
        image: getImageUrl('diverse hobbies illustration on red background')
      },
    ],
    tvShows: [
      { 
        title: 'Skills', 
        prompt: 'technical skills mindmap on red background',
        image: getImageUrl('technical skills mindmap on red background')
      },
      { 
        title: 'Timeline', 
        prompt: 'personal life timeline infographic on red background',
        image: getImageUrl('personal life timeline infographic on red background')
      },
    ],
  },
}

export default function Dashboard({ params }: { params: { profile: string } }) {
  const profile = params.profile.toLowerCase()
  const content = profileContent[profile as keyof typeof profileContent]

  if (!content) {
    notFound()
  }

  return (
    <main className="min-h-screen pt-20 px-8 pb-8 relative">
      <h1 className="text-3xl font-bold mb-8 capitalize">{profile}'s Dashboard</h1>
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Movies</h2>
        <div className="flex space-x-4 overflow-x-auto pb-4">
          {content.movies.map((section) => (
            <ContentCard 
              key={section.title} 
              title={section.title}
              image={section.image}
              prompt={section.prompt}
            />
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">TV Shows</h2>
        <div className="flex space-x-4 overflow-x-auto pb-4">
          {content.tvShows.map((section) => (
            <ContentCard 
              key={section.title} 
              title={section.title}
              image={section.image}
              prompt={section.prompt}
            />
          ))}
        </div>
      </section>
      <DebugButton />
    </main>
  )
}

