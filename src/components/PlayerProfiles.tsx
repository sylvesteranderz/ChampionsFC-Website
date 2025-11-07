import { useState } from 'react'
import './PlayerProfiles.css'

interface PlayerStats {
  dribbling?: number
  speed?: number
  pass?: number
  [key: string]: number | undefined
}

interface Player {
  name: string
  position: string
  age?: number
  bio: string
  image: string
  stats: PlayerStats
}

const PlayerProfiles = () => {
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const players: Record<string, Player> = {
    'Bermah': {
      name: 'Nana Kofi Bermah',
      position: 'Midfielder',
      age: 19,
      bio: 'Nana Kofi Bermah is a skilled midfielder with great ball control and vision.',
      image: 'Player-images/Richard.jpg',
      stats: {
        dribbling: 85,
        speed: 85,
        pass: 72,
      },
    },
    'Kweku-victor': {
      name: 'Kweku Victor Adjei',
      position: 'Forward',
      age: 23,
      bio: 'Kweku Victor is known for his speed and exceptional scoring ability.',
      image: 'Player-images/Player2.jpg',
      stats: {
        dribbling: 70,
        speed: 70,
        pass: 50,
      },
    },
    'jamos-brown': {
      name: 'Jamos Brown',
      position: 'Forward',
      age: 26,
      bio: 'Jamos Brown is a dynamic forward with excellent finishing skills.',
      image: 'Player-images/Player3.jpg',
      stats: {
        dribbling: 85,
        speed: 85,
      },
    },
    'philip-siame': {
      name: 'Philip Siame',
      position: 'Forward',
      bio: 'Philip Siame is a versatile forward with strong attacking instincts.',
      image: 'Player-images/Player4.jpg',
      stats: {
        dribbling: 75,
        speed: 80,
      },
    },
    'tetteh-camara': {
      name: 'Tetteh Camara Boyd',
      position: 'Forward',
      bio: 'Tetteh Camara Boyd brings experience and leadership to the forward line.',
      image: 'Player-images/.jpg',
      stats: {
        dribbling: 70,
        speed: 75,
      },
    },
    'andy-offei': {
      name: 'Andy Offei',
      position: 'Forward',
      bio: 'Andy Offei is a promising young forward with great potential.',
      image: 'background2.jpg',
      stats: {
        dribbling: 75,
        speed: 80,
      },
    },
    'bright-senaya': {
      name: 'Bright Senaya',
      position: 'Forward',
      bio: 'Bright Senaya is known for his pace and agility on the wing.',
      image: 'background2.jpg',
      stats: {
        dribbling: 80,
        speed: 85,
      },
    },
    'mike-kenell': {
      name: 'Mike Kenell Amoah',
      position: 'Forward',
      bio: 'Mike Kenell Amoah is a clinical finisher with excellent positioning.',
      image: 'background2.jpg',
      stats: {
        dribbling: 75,
        speed: 70,
      },
    },
    'owusu-samuel': {
      name: 'Owusu Samuel Nketsiah',
      position: 'Forward',
      bio: 'Owusu Samuel Nketsiah brings creativity and flair to the attack.',
      image: 'background2.jpg',
      stats: {
        dribbling: 80,
        speed: 75,
      },
    },
    'emmanuel-tagoe': {
      name: 'Emmanuel Tagoe',
      position: 'Forward',
      bio: 'Emmanuel Tagoe is a hardworking forward with strong work ethic.',
      image: 'background2.jpg',
      stats: {
        dribbling: 70,
        speed: 80,
      },
    },
    'saviola': {
      name: 'Saviour Harms Azametsi',
      position: 'Goalkeeper',
      bio: 'Saviour Harms Azametsi is a reliable goalkeeper with excellent reflexes.',
      image: 'background3.jpg',
      stats: {
        dribbling: 65,
        speed: 70,
      },
    },
  }

  const playerCards = [
    {
      id: 'Bermah',
      name: 'Nana Kofi Bermah',
      position: 'Midfielder',
      age: 19,
      image: 'Player-images/Richard.jpg',
      stats: { dribbling: 85, speed: 85 },
    },
    {
      id: 'Kweku-victor',
      name: 'Kweku Victor Adjei',
      position: 'Forward',
      age: 23,
      image: 'Player-images/Player2.jpg',
      stats: { dribbling: 70, speed: 70 },
    },
    {
      id: 'jamos-brown',
      name: 'Jamos Brown',
      position: 'Forward',
      age: 26,
      image: 'Player-images/Player3.jpg',
      stats: { dribbling: 85, speed: 85 },
    },
    {
      id: 'philip-siame',
      name: 'Philip Siame',
      position: 'Forward',
      image: 'Player-images/Player4.jpg',
    },
    {
      id: 'tetteh-camara',
      name: 'Tetteh Camara Boyd',
      position: 'Forward',
      image: 'Player-images/.jpg',
    },
    {
      id: 'andy-offei',
      name: 'Andy Offei',
      position: 'Forward',
      image: 'background2.jpg',
    },
    {
      id: 'bright-senaya',
      name: 'Bright Senaya',
      position: 'Forward',
      image: 'background2.jpg',
    },
    {
      id: 'mike-kenell',
      name: 'Mike Kenell Amoah',
      position: 'Forward',
      image: 'background2.jpg',
    },
    {
      id: 'owusu-samuel',
      name: 'Owusu Samuel Nketsiah',
      position: 'Forward',
      image: 'background2.jpg',
    },
    {
      id: 'emmanuel-tagoe',
      name: 'Emmanuel Tagoe',
      position: 'Forward',
      image: 'background2.jpg',
    },
    {
      id: 'saviola',
      name: 'Saviour Harms Azametsi',
      position: 'Goalkeeper',
      image: 'background3.jpg',
    },
  ]

  const viewPlayer = (playerId: string) => {
    const player = players[playerId]
    if (player) {
      setSelectedPlayer(player)
      setIsModalOpen(true)
    }
  }

  const closePlayerDetails = () => {
    setIsModalOpen(false)
    setSelectedPlayer(null)
  }

  return (
    <div className="player-profiles-page">
      <section id="players" className="players">
        <h2>Meet the Players</h2>
        <div className="players-grid">
          {playerCards.map((card) => (
            <div
              key={card.id}
              className="player-card"
              onClick={() => viewPlayer(card.id)}
            >
              <img src={card.image} alt={card.name} />
              <h3>{card.name}</h3>
              <h4>Position: {card.position}</h4>
              {card.age && <h4>Age: {card.age}</h4>}
              {card.stats && (
                <>
                  <div className="stat">
                    <label>Dribbling</label>
                    <div className="progress-bar">
                      <div
                        className="progress"
                        style={{ width: `${card.stats.dribbling || 0}%` }}
                      />
                    </div>
                  </div>
                  <div className="stat">
                    <label>Speed</label>
                    <div className="progress-bar">
                      <div
                        className="progress"
                        style={{ width: `${card.stats.speed || 0}%` }}
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Backdrop */}
      {isModalOpen && (
        <div className="backdrop visible" onClick={closePlayerDetails} />
      )}

      {/* Modal for Player Details */}
      {isModalOpen && selectedPlayer && (
        <div className="modal visible" id="player-modal">
          <img
            id="player-image"
            src={selectedPlayer.image}
            alt={selectedPlayer.name}
          />
          <h3 id="player-name">{selectedPlayer.name}</h3>
          <p id="player-position">{selectedPlayer.position}</p>
          {selectedPlayer.age && <p>Age: {selectedPlayer.age}</p>}
          <p id="player-bio">{selectedPlayer.bio}</p>
          <div id="player-stats">
            {Object.entries(selectedPlayer.stats).map(([statName, value]) => (
              <div key={statName} className="stat">
                <label>
                  {statName.charAt(0).toUpperCase() + statName.slice(1)}
                </label>
                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{ width: `${value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <button onClick={closePlayerDetails}>Close</button>
        </div>
      )}
    </div>
  )
}

export default PlayerProfiles

