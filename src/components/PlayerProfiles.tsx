import { useState } from 'react'
import PlayerCard from './PlayerCard'
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
  squadNumber: number
  nationality: string
  nationalityFlag: string
  bio: string
  image: string
  stats: PlayerStats
}

const statLabel: Record<string, string> = {
  dribbling: 'Dribbling',
  speed: 'Speed',
  pass: 'Passing',
}

const players: Player[] = [
  {
    name: 'Nana Kofi Bermah',
    position: 'Midfielder',
    age: 19,
    squadNumber: 8,
    nationality: 'Ghana',
    nationalityFlag: '🇬🇭',
    bio: 'Skilled midfielder with great ball control and vision.',
    image: '/Player-images/Richard.jpg',
    stats: { dribbling: 85, speed: 85, pass: 72 },
  },
  {
    name: 'Kweku Victor Adjei',
    position: 'Forward',
    age: 23,
    squadNumber: 11,
    nationality: 'Ghana',
    nationalityFlag: '🇬🇭',
    bio: 'Known for his speed and exceptional scoring ability.',
    image: '/Player-images/Player2.jpg',
    stats: { dribbling: 70, speed: 70, pass: 50 },
  },
  {
    name: 'Jamos Brown',
    position: 'Forward',
    age: 26,
    squadNumber: 9,
    nationality: 'Ghana',
    nationalityFlag: '🇬🇭',
    bio: 'Dynamic forward with excellent finishing skills.',
    image: '/Player-images/Player3.jpg',
    stats: { dribbling: 85, speed: 85 },
  },
  {
    name: 'Philip Siame',
    position: 'Forward',
    squadNumber: 7,
    nationality: 'Ghana',
    nationalityFlag: '🇬🇭',
    bio: 'Versatile forward with strong attacking instincts.',
    image: '/Player-images/Player4.jpg',
    stats: { dribbling: 75, speed: 80 },
  },
  {
    name: 'Tetteh Camara Boyd',
    position: 'Forward',
    squadNumber: 10,
    nationality: 'Ghana',
    nationalityFlag: '🇬🇭',
    bio: 'Brings experience and leadership to the forward line.',
    image: '/Player-images/Players46.jpg',
    stats: { dribbling: 70, speed: 75 },
  },
  {
    name: 'Andy Offei',
    position: 'Forward',
    squadNumber: 17,
    nationality: 'Ghana',
    nationalityFlag: '🇬🇭',
    bio: 'Promising young forward with great potential.',
    image: '/Player-images/Players45.jpg',
    stats: { dribbling: 75, speed: 80 },
  },
  {
    name: 'Bright Senaya',
    position: 'Forward',
    squadNumber: 14,
    nationality: 'Ghana',
    nationalityFlag: '🇬🇭',
    bio: 'Known for his pace and agility on the wing.',
    image: '/Player-images/PlayerImage1.jpg',
    stats: { dribbling: 80, speed: 85 },
  },
  {
    name: 'Mike Kenell Amoah',
    position: 'Forward',
    squadNumber: 21,
    nationality: 'Ghana',
    nationalityFlag: '🇬🇭',
    bio: 'Clinical finisher with excellent positioning.',
    image: '/Player-images/PlayerImage1 (2).jpg',
    stats: { dribbling: 75, speed: 70 },
  },
  {
    name: 'Owusu Samuel Nketsiah',
    position: 'Forward',
    squadNumber: 6,
    nationality: 'Ghana',
    nationalityFlag: '🇬🇭',
    bio: 'Brings creativity and flair to the attack.',
    image: '/Player-images/PlayerImage1 (4).jpg',
    stats: { dribbling: 80, speed: 75 },
  },
  {
    name: 'Emmanuel Tagoe',
    position: 'Forward',
    squadNumber: 3,
    nationality: 'Ghana',
    nationalityFlag: '🇬🇭',
    bio: 'Hardworking forward with strong work ethic.',
    image: '/Player-images/PlayerImage1 (5).jpg',
    stats: { dribbling: 70, speed: 80 },
  },
  {
    name: 'Saviour Harms Azametsi',
    position: 'Goalkeeper',
    squadNumber: 1,
    nationality: 'Ghana',
    nationalityFlag: '🇬🇭',
    bio: 'Reliable goalkeeper with excellent reflexes.',
    image: '/Player-images/PlayerImage1 (6).jpg',
    stats: { dribbling: 65, speed: 70 },
  },
]

const PlayerProfiles = () => {
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (player: Player) => {
    setSelectedPlayer(player)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedPlayer(null)
  }

  return (
    <div className="player-profiles-page">
      <section id="players" className="players">
        <h2>Meet the Players</h2>
        <div className="players-grid">
          {players.map((player) => (
            <PlayerCard
              key={player.squadNumber}
              name={player.name}
              position={player.position}
              age={player.age}
              squadNumber={player.squadNumber}
              nationality={player.nationality}
              nationalityFlag={player.nationalityFlag}
              imageUrl={player.image}
              onClick={() => openModal(player)}
            />
          ))}
        </div>
      </section>

      {isModalOpen && (
        <div className="backdrop visible" onClick={closeModal} />
      )}

      {isModalOpen && selectedPlayer && (
        <div className="modal visible">
          <img
            src={selectedPlayer.image}
            alt={selectedPlayer.name}
          />
          <h3>{selectedPlayer.name}</h3>
          <p className="modal-position">{selectedPlayer.position}</p>
          {selectedPlayer.age && <p>Age: {selectedPlayer.age}</p>}
          <p>{selectedPlayer.bio}</p>
          <div className="modal-stats">
            {Object.entries(selectedPlayer.stats).map(([key, value]) => (
              <div key={key} className="stat">
                <label>{statLabel[key] ?? key}</label>
                <div className="progress-bar">
                  <div className="progress" style={{ width: `${value}%` }} />
                </div>
                <span className="stat-value">{value}</span>
              </div>
            ))}
          </div>
          <button onClick={closeModal}>Close</button>
        </div>
      )}
    </div>
  )
}

export default PlayerProfiles

