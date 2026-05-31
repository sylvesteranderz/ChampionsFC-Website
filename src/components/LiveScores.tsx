import './LiveScores.css'

const LiveScores = () => {
  return (
    <section className="ls-section" id="live-scores">

      {/* ── Section header ── */}
      <div className="ls-header">
        <span className="ls-label">ERFA DIVISION TWO · ZONE 3</span>
        <h2 className="ls-heading">Where We Stand</h2>
        {/* TODO: Update position each matchweek */}
        <p className="ls-subtext">Champions FC · Currently 8th</p>
      </div>

      {/* ── Standings embed ── */}
      <div className="standings-embed-wrapper">
        <iframe
          id="sofa-standings-embed-125227-67503"
          src="https://widgets.sofascore.com/embed/tournament/125227/season/67503/standings/Zone%203?widgetTitle=Zone%203&showCompetitionLogo=true"
          style={{ height: '723px' }}
          allowFullScreen
          title="Live Match Scores"
        />
        {/* TODO: Remove this mask if Sofascore widget height changes and it breaks */}
        <div className="ls-branding-mask" aria-hidden="true" />
      </div>

      {/* ── Attribution ── */}
      <p className="ls-attribution">
        Standings data via{' '}
        <a href="https://www.sofascore.com/" target="_blank" rel="noopener noreferrer">
          sofascore.com
        </a>
      </p>

    </section>
  )
}

export default LiveScores
