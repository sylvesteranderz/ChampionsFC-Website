import { useState } from 'react'
import './PlayerCard.css'

export interface PlayerCardProps {
  name: string
  position: string
  age?: number
  squadNumber: number
  nationality: string
  nationalityFlag: string
  imageUrl?: string
  onClick?: () => void
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

export default function PlayerCard({
  name,
  position,
  age,
  squadNumber,
  nationality,
  nationalityFlag,
  imageUrl,
  onClick,
}: PlayerCardProps) {
  const [imgError, setImgError] = useState(false)
  const showFallback = !imageUrl || imgError

  return (
    <div className="pc-card" onClick={onClick}>
      <span className="pc-watermark" aria-hidden="true">{squadNumber}</span>

      <div className="pc-image-wrap">
        {showFallback ? (
          <div className="pc-fallback">
            <span className="pc-fallback-num">{squadNumber}</span>
            <span className="pc-fallback-initials">{getInitials(name)}</span>
          </div>
        ) : (
          <img
            className="pc-img"
            src={imageUrl}
            alt={name}
            onError={() => setImgError(true)}
          />
        )}
        <div className="pc-gradient" />
      </div>

      <div className="pc-body">
        <h3 className="pc-name">{name}</h3>
        <span className="pc-badge">{position}</span>
        <div className="pc-divider" />
        <div className="pc-info-row">
          <div className="pc-info-item">
            <span className="pc-info-label">Age</span>
            <span className="pc-info-value">{age ?? '—'}</span>
          </div>
          <div className="pc-info-item pc-info-item--wide">
            <span className="pc-info-label">Nation</span>
            <span className="pc-info-value">{nationalityFlag} {nationality}</span>
          </div>
          <div className="pc-info-item">
            <span className="pc-info-label">Squad</span>
            <span className="pc-info-value">#{squadNumber}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
