
const LiveScores = () => {
  return (
    <section className="live-score-section" id="live-scores">
      <div className="container">
        <h2>Live Match Scores</h2>
        <div className="iframe-wrapper">
          <iframe 
            id="sofa-standings-embed-125227-67503" 
            src="https://widgets.sofascore.com/embed/tournament/125227/season/67503/standings/Zone%203?widgetTitle=Zone%203&showCompetitionLogo=true" 
            style={{
              height: '723px',
              maxWidth: '768px',
              width: '100%',
              border: '0',
              overflow: 'hidden',
            }}
            frameBorder={0}
            scrolling="no"
            allowFullScreen
            title="Live Match Scores"
          />
        </div>
        <div style={{ fontSize: '12px', fontFamily: 'Arial, sans-serif', textAlign: 'left', width: '100%', maxWidth: '768px' }}>
          Standings provided by{' '}
          <a target="_blank" href="https://www.sofascore.com/" rel="noopener noreferrer">
            Sofascore
          </a>
        </div>
      </div>
    </section>
  )
}

export default LiveScores

