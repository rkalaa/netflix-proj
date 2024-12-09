import ContentCard from '../../components/ContentCard'
import { getImageUrl } from '../../utils/image'
import { DebugButton } from '../../components/DebugButton'

const resumeSections = [
  { 
    title: 'Projects', 
    type: 'movie',
    prompt: 'coding project visualization',
    image: getImageUrl('coding project visualization')
  },
  { 
    title: 'Skills', 
    type: 'tv',
    prompt: 'technical skills mindmap',
    image: getImageUrl('technical skills mindmap')
  },
  { 
    title: 'Experience', 
    type: 'movie',
    prompt: 'career timeline',
    image: getImageUrl('career timeline')
  },
  { 
    title: 'Education', 
    type: 'tv',
    prompt: 'graduation cap and diploma',
    image: getImageUrl('graduation cap and diploma')
  },
]

export default function Dashboard() {
  return (
    <main className="min-h-screen p-8 relative">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Movies</h2>
        <div className="flex space-x-4 overflow-x-auto pb-4">
          {resumeSections
            .filter((section) => section.type === 'movie')
            .map((section) => (
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
          {resumeSections
            .filter((section) => section.type === 'tv')
            .map((section) => (
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

