import { useEffect, useRef } from 'react'
import './PlayerModal.css'

export interface ModalPlayer {
  name: string
  position: string
  age?: number
  squadNumber: number
  nationality: string
  nationalityFlag: string
  imageUrl?: string
  bio?: string
  highlightUrl?: string
  stats: {
    appearances: number
    goals: number
    assists: number
    cleanSheets: number
  }
}

interface PlayerModalProps {
  player: ModalPlayer
  isOpen: boolean
  onClose: () => void
}

function getInitials(name: string): string {
  return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
}

function getStatColumns(position: string, stats: ModalPlayer['stats']) {
  const apps        = { label: 'Apps',         value: stats.appearances }
  const goals       = { label: 'Goals',        value: stats.goals }
  const assists     = { label: 'Assists',      value: stats.assists }
  const cleanSheets = { label: 'Clean Sheets', value: stats.cleanSheets }

  if (position === 'Goalkeeper') return [apps, cleanSheets, assists]
  if (position === 'Defender')   return [apps, cleanSheets, goals]
  return [apps, goals, assists]
}

export default function PlayerModal({ player, isOpen, onClose }: PlayerModalProps) {
  const modalRef    = useRef<HTMLDivElement>(null)
  const closeBtnRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isOpen, onClose])

  useEffect(() => {
    if (isOpen) closeBtnRef.current?.focus()
  }, [isOpen])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen || !modalRef.current) return
    const modal = modalRef.current
    const sel   = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    const onTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return
      const nodes = Array.from(modal.querySelectorAll<HTMLElement>(sel))
      if (!nodes.length) return
      const first = nodes[0], last = nodes[nodes.length - 1]
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
    }
    modal.addEventListener('keydown', onTab)
    return () => modal.removeEventListener('keydown', onTab)
  }, [isOpen])

  if (!isOpen) return null

  const statCols = getStatColumns(player.position, player.stats)
  const hasBio   = Boolean(player.bio?.trim())

  return (
    <>
      <div className="pm-backdrop" onClick={onClose} aria-hidden="true" />
      <div
        className="pm-modal"
        role="dialog"
        aria-modal="true"
        aria-label={`${player.name} profile`}
        ref={modalRef}
        tabIndex={-1}
      >
        <button className="pm-close" onClick={onClose} ref={closeBtnRef} aria-label="Close">✕</button>

        <div className="pm-header">
          <span className="pm-watermark" aria-hidden="true">{player.squadNumber}</span>
          {player.imageUrl ? (
            <img className="pm-hero-img" src={player.imageUrl} alt={player.name} />
          ) : (
            <div className="pm-hero-fallback">
              <span className="pm-hero-initials">{getInitials(player.name)}</span>
            </div>
          )}
          <div className="pm-hero-gradient" />
          <div className="pm-hero-info">
            <h2 className="pm-hero-name">{player.name}</h2>
            <span className="pm-hero-badge">{player.position}</span>
          </div>
        </div>

        <div className="pm-body">
          <div className="pm-stats-row">
            {statCols.map(col => (
              <div key={col.label} className="pm-stat-col">
                <span className="pm-stat-num">{col.value}</span>
                <span className="pm-stat-label">{col.label}</span>
              </div>
            ))}
          </div>

          <div className="pm-divider" />

          <div className="pm-detail-row">
            {player.age !== undefined && (
              <span className="pm-detail-item">
                <svg className="pm-detail-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Age {player.age}
              </span>
            )}
            <span className="pm-detail-item">{player.nationalityFlag} {player.nationality}</span>
          </div>

          {hasBio && <p className="pm-bio">"{player.bio}"</p>}

          {player.highlightUrl && (
            <a className="pm-highlight-btn" href={player.highlightUrl} target="_blank" rel="noopener noreferrer">
              Watch Highlights →
            </a>
          )}
        </div>
      </div>
    </>
  )
}
