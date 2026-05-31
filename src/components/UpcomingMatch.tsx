// PLACEHOLDER COMPONENT
// Replace with MatchCard once 
// Supabase matches table is built
// See: src/components/MatchCard.tsx (TODO)

import React from 'react'
import './UpcomingMatch.css'

export default function UpcomingMatch() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = document.getElementById('live-scores')
    if (el) {
      e.preventDefault()
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="um-section">
      <div className="um-outer-wrapper">
        <span className="um-section-label">Next Match</span>
        
        <div className="um-card">
          {/* Background Watermark */}
          <div className="um-watermark">NEXT MATCH</div>

          {/* Card Header */}
          <div className="um-header">
            <span className="um-header-label">Upcoming Fixture</span>
            <span className="um-badge">To Be Confirmed</span>
          </div>

          {/* Match Display Row */}
          <div className="um-display-row">
            {/* Home Team */}
            <div className="um-team um-team--home">
              <div className="um-crest-placeholder">
                {/* TODO: Replace with actual crest */}
                <img src="/Images/Logo.png" alt="Champions FC Crest" className="um-crest-img" />
              </div>
              <h3 className="um-team-name">Champions FC</h3>
              <span className="um-team-label">Home</span>
            </div>

            {/* Center (VS area) */}
            <div className="um-vs-area">
              <span className="um-vs">VS</span>
              <span className="um-date">—</span>
              <span className="um-venue">—</span>
            </div>

            {/* Away Team */}
            <div className="um-team um-team--away">
              <div className="um-crest-placeholder">
                <span className="um-crest-question">?</span>
              </div>
              <h3 className="um-team-name">Opponent TBC</h3>
              <span className="um-team-label">Away</span>
            </div>
          </div>

          {/* Divider */}
          <div className="um-divider" />

          {/* Bottom Row */}
          <div className="um-bottom-row">
            <p className="um-notice">
              Match details will be updated here before each fixture.
            </p>
            <a href="#live-scores" onClick={handleScroll} className="um-schedule-link">
              View Full Schedule →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
