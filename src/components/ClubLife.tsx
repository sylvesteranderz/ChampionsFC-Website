import { useState } from 'react'
import './ClubLife.css'

interface PhotoCard {
  imageUrl: string
  title: string
  subtitle: string
}

const DEFAULT_PHOTOS: PhotoCard[] = [
  {
    imageUrl: '',
    title: 'Matchday Ready',
    subtitle: 'The preparation that precedes every performance',
  },
  {
    imageUrl: '/Player-images/TrainingDay.jpg',
    title: 'Training Ground',
    subtitle: 'Where the work gets done',
  },
  {
    imageUrl: '',
    title: 'The Brotherhood',
    subtitle: 'Eleven individuals. One identity.',
  },
]

interface ClubLifeProps {
  photos?: PhotoCard[]
}

function Card({ photo }: { photo: PhotoCard }) {
  const [imgError, setImgError] = useState(false)
  const showFallback = !photo.imageUrl || imgError

  return (
    <div className="cl-card">
      {showFallback ? (
        <div className="cl-placeholder">
          <span className="cl-placeholder-text">{photo.title}</span>
        </div>
      ) : (
        <img
          className="cl-img"
          src={photo.imageUrl}
          alt={photo.title}
          onError={() => setImgError(true)}
        />
      )}
      <div className="cl-overlay" />
      <div className="cl-caption">
        <span className="cl-caption-title">{photo.title}</span>
        <span className="cl-caption-subtitle">{photo.subtitle}</span>
      </div>
    </div>
  )
}

export default function ClubLife({ photos = DEFAULT_PHOTOS }: ClubLifeProps) {
  return (
    <section className="cl-section">
      <div className="cl-header">
        <span className="cl-label">BEYOND THE PITCH</span>
        <h2 className="cl-heading">Club Life</h2>
        <p className="cl-subtext">Training. Matchday. Brotherhood.</p>
      </div>

      <div className="cl-grid">
        {photos.slice(0, 3).map((photo, i) => (
          <Card key={i} photo={photo} />
        ))}
      </div>
    </section>
  )
}
