import { useEffect, useRef, useState } from 'react'
import PlayerModal, { type ModalPlayer } from './PlayerModal'
import './PlayersPreview.css'

// Extends ModalPlayer to allow imageUrl: null from sample/API data
export interface PreviewPlayer extends Omit<ModalPlayer, 'imageUrl'> {
  id: number
  imageUrl: string | null | undefined
}

interface PlayersPreviewProps {
  players: PreviewPlayer[]
  onViewAll: () => void
}

function getInitials(name: string): string {
  return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
}

function toModalPlayer(p: PreviewPlayer): ModalPlayer {
  return { ...p, imageUrl: p.imageUrl ?? undefined }
}

// ── Preview card ─────────────────────────────────────────
function PreviewCard({
  player,
  onClick,
}: {
  player: PreviewPlayer
  onClick: () => void
}) {
  const [imgError, setImgError] = useState(false)
  const showFallback = !player.imageUrl || imgError

  return (
    <div className="pp-card" onClick={onClick}>
      <span className="pp-watermark" aria-hidden="true">{player.squadNumber}</span>

      <div className="pp-img-wrap">
        {showFallback ? (
          <div className="pp-fallback">
            <span className="pp-initials">{getInitials(player.name)}</span>
          </div>
        ) : (
          <img
            className="pp-img"
            src={player.imageUrl!}
            alt={player.name}
            onError={() => setImgError(true)}
          />
        )}
        <div className="pp-img-gradient" />
      </div>

      <div className="pp-info">
        <span className="pp-name">{player.name}</span>
        <span className="pp-badge">{player.position}</span>
      </div>
    </div>
  )
}

// ── Main component ───────────────────────────────────────
export default function PlayersPreview({ players, onViewAll }: PlayersPreviewProps) {
  const trackRef     = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex]       = useState(0)
  const [selectedPlayer, setSelectedPlayer] = useState<PreviewPlayer | null>(null)

  // Update active dot on scroll
  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const CARD_STEP = 216 // 200px card + 16px gap

    const onScroll = () => {
      const index = Math.round(track.scrollLeft / CARD_STEP)
      setActiveIndex(Math.max(0, Math.min(index, players.length - 1)))
    }

    track.addEventListener('scroll', onScroll, { passive: true })
    return () => track.removeEventListener('scroll', onScroll)
  }, [players.length])

  const scrollToCard = (index: number) => {
    trackRef.current?.scrollTo({ left: index * 216, behavior: 'smooth' })
  }

  return (
    <section className="pp-section">
      {/* ── Header ── */}
      <div className="pp-header">
        <div className="pp-header-left">
          <span className="pp-label">OUR SQUAD</span>
          <h2 className="pp-heading">Meet The Players</h2>
        </div>
        <button className="pp-view-all" onClick={onViewAll}>
          View Full Squad →
        </button>
      </div>

      {/* ── Swipeable track ── */}
      <div className="pp-track-wrapper">
        <div className="pp-track" ref={trackRef}>
          {players.map(player => (
            <PreviewCard
              key={player.id}
              player={player}
              onClick={() => setSelectedPlayer(player)}
            />
          ))}
        </div>
        <div className="pp-fade" aria-hidden="true" />
      </div>

      {/* ── Dots ── */}
      <div className="pp-dots" role="tablist" aria-label="Player navigation">
        {players.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === activeIndex}
            aria-label={`Go to player ${i + 1}`}
            className={`pp-dot${i === activeIndex ? ' pp-dot--active' : ''}`}
            onClick={() => scrollToCard(i)}
          />
        ))}
      </div>

      {/* ── Modal ── */}
      {selectedPlayer && (
        <PlayerModal
          player={toModalPlayer(selectedPlayer)}
          isOpen
          onClose={() => setSelectedPlayer(null)}
        />
      )}
    </section>
  )
}
