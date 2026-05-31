import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './LatestNews.css'

export interface NewsItem {
  id: number
  category: string
  date: string
  title: string
  excerpt: string
  imageUrl: string
}

const DEFAULT_ITEMS: NewsItem[] = [
  {
    id: 1,
    category: 'Match Report',
    date: 'TODO: Real match date',
    title: 'TODO: Real match headline',
    excerpt: 'TODO: Brief match summary — what happened, who scored, what it means for the season.',
    imageUrl: '',
    // TODO: Replace with actual match photo
  },
  {
    id: 2,
    category: 'Player Feature',
    date: 'TODO: Real date',
    title: 'TODO: Player spotlight headline',
    excerpt: 'TODO: Brief player story — achievement, milestone, or profile piece.',
    imageUrl: '',
    // TODO: Replace with player photo
  },
  {
    id: 3,
    category: 'Club News',
    date: 'TODO: Real date',
    title: 'TODO: Club update headline',
    excerpt: 'TODO: Training update, pre-season news, or club announcement.',
    imageUrl: '',
    // TODO: Replace with relevant photo
  },
]

interface LatestNewsProps {
  items?: NewsItem[]
  onViewAll?: () => void
}

function NewsCard({ item }: { item: NewsItem }) {
  const showFallback = !item.imageUrl

  return (
    <div
      className="ln-card"
      onClick={() => {
        // TODO: Navigate to /news/[slug] when Supabase news routing is built
      }}
    >
      <div className="ln-card-image">
        {showFallback ? (
          <div className="ln-card-image-fallback">
            <span className="ln-card-image-fallback-text">{item.category}</span>
          </div>
        ) : (
          <img src={item.imageUrl} alt={item.title} />
        )}
        <span className="ln-category-tag">{item.category}</span>
      </div>

      <div className="ln-card-body">
        <span className="ln-date">{item.date}</span>
        <h3 className="ln-title">{item.title}</h3>
        <p className="ln-excerpt">{item.excerpt}</p>
        <div className="ln-card-footer">
          <div className="ln-divider" />
          <span className="ln-read-more">Read Full Story →</span>
        </div>
      </div>
    </div>
  )
}

export default function LatestNews({ items, onViewAll }: LatestNewsProps) {
  const navigate = useNavigate()
  const activeItems = items ?? DEFAULT_ITEMS

  // Warn about placeholder content in development; hide in production
  useEffect(() => {
    activeItems.forEach(item => {
      if (item.title.startsWith('TODO')) {
        console.warn(`[LatestNews] Item ${item.id} has placeholder content: "${item.title}"`)
      }
    })
  }, [activeItems])

  const displayItems = import.meta.env.PROD
    ? activeItems.filter(item => !item.title.startsWith('TODO'))
    : activeItems

  const handleViewAll = onViewAll ?? (() => navigate('/news'))

  if (import.meta.env.PROD && displayItems.length === 0) return null

  return (
    <section className="ln-section" id="news">
      <div className="ln-container">

        {/* ── Header ── */}
        <div className="ln-header">
          <div className="ln-header-left">
            <span className="ln-label">LATEST FROM THE CLUB</span>
            <h2 className="ln-heading">Club News</h2>
          </div>
          <button className="ln-view-all ln-view-all--desktop" onClick={handleViewAll}>
            View All News →
          </button>
        </div>

        {/* ── Grid ── */}
        <div className="ln-grid">
          {displayItems.map(item => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>

        {/* Mobile "View All" */}
        <button className="ln-view-all ln-view-all--mobile" onClick={handleViewAll}>
          View All News →
        </button>

      </div>
    </section>
  )
}
