import ContentCard from '../../../components/ContentCard'
import { getImageUrl } from '../../../utils/image'
import { notFound } from 'next/navigation'
import { BackToHomeButton } from '../../../components/BackToHomeButton'

const profileContent = {
  recruiter: {
    movies: [
      { 
        title: 'Projects', 
        prompt: 'coding project visualization',
        image: getImageUrl('coding project visualization')
      },
      { 
        title: 'Experience', 
        prompt: 'career timeline',
        image: getImageUrl('career timeline')
      },
    ],
    tvShows: [
      { 
        title: 'Resume', 
        prompt: 'professional resume document',
        image: getImageUrl('professional resume document')
      },
      { 
        title: 'LinkedIn Profile', 
        prompt: 'LinkedIn logo with professional background',
        image: getImageUrl('LinkedIn logo with professional background')
      },
    ],
  },
  developer: {
    movies: [
      { 
        title: 'Projects', 
        prompt: 'coding project visualization',
        image: getImageUrl('coding project visualization')
      },
      { 
        title: 'Open-source Contributions', 
        prompt: 'github contribution graph',
        image: getImageUrl('github contribution graph')
      },
      { 
        title: 'Hackathon Entries', 
        prompt: 'hackathon event poster',
        image: getImageUrl('hackathon event poster')
      },
    ],
    tvShows: [
      { 
        title: 'Skills', 
        prompt: 'technical skills mindmap',
        image: getImageUrl('technical skills mindmap')
      },
      { 
        title: 'Experience', 
        prompt: 'career timeline',
        image: getImageUrl('career timeline')
      },
      { 
        title: 'Technical Blog', 
        prompt: 'tech blog website screenshot',
        image: getImageUrl('tech blog website screenshot')
      },
    ],
  },
  stalker: {
    movies: [
      { 
        title: 'Fun Projects', 
        prompt: 'exciting hobby project collage',
        image: getImageUrl('exciting hobby project collage')
      },
      { 
        title: 'Experience', 
        prompt: 'career timeline',
        image: getImageUrl('career timeline')
      },
      { 
        title: 'Hobbies', 
        prompt: 'diverse hobbies illustration',
        image: getImageUrl('diverse hobbies illustration')
      },
    ],
    tvShows: [
      { 
        title: 'Skills', 
        prompt: 'technical skills mindmap',
        image: getImageUrl('technical skills mindmap')
      },
      { 
        title: 'Timeline', 
        prompt: 'personal life timeline infographic',
        image: getImageUrl('personal life timeline infographic')
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
    <main className="min-h-screen pt-20 px-4 sm:px-6 md:px-8 pb-8 relative">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 capitalize tracking-tight">{profile}'s Dashboard</h1>
      <section className="mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-2xl font-medium mb-4 tracking-tight">Movies</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4">
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
        <h2 className="text-xl sm:text-2xl font-medium mb-4 tracking-tight">TV Shows</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4">
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

      <BackToHomeButton />
    </main>
  )
}

