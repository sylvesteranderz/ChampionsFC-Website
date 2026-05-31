import { useState } from 'react'
import PlayerCard from './PlayerCard'
import PlayerModal, { type ModalPlayer } from './PlayerModal'
import './PlayerProfiles.css'

const players: ModalPlayer[] = [
  {
    name: 'Nana Kofi Bermah',
    position: 'Midfielder',
    age: 19,
    squadNumber: 8,
    nationality: 'Ghanaian',
    nationalityFlag: '🇬🇭',
    bio: 'Engine of the midfield. Dictates tempo and covers ground tirelessly.',
    imageUrl: '/Player-images/Richard.jpg',
    highlightUrl: 'https://youtube.com',
    stats: { appearances: 18, goals: 4, assists: 7, cleanSheets: 0 },
  },
  {
    name: 'Kweku Victor Adjei',
    position: 'Forward',
    age: 23,
    squadNumber: 11,
    nationality: 'Ghanaian',
    nationalityFlag: '🇬🇭',
    bio: '',
    imageUrl: '/Player-images/Player2.jpg',
    stats: { appearances: 14, goals: 9, assists: 3, cleanSheets: 0 },
  },
  {
    name: 'Jamos Brown',
    position: 'Forward',
    age: 26,
    squadNumber: 9,
    nationality: 'Ghanaian',
    nationalityFlag: '🇬🇭',
    bio: 'Dynamic forward with excellent finishing skills.',
    imageUrl: '/Player-images/Player3.jpg',
    stats: { appearances: 16, goals: 11, assists: 2, cleanSheets: 0 },
  },
  {
    name: 'Philip Siame',
    position: 'Forward',
    age: 22,
    squadNumber: 7,
    nationality: 'Ghanaian',
    nationalityFlag: '🇬🇭',
    bio: 'Versatile forward with strong attacking instincts.',
    imageUrl: '/Player-images/Player4.jpg',
    stats: { appearances: 12, goals: 5, assists: 4, cleanSheets: 0 },
  },
  {
    name: 'Tetteh Camara Boyd',
    position: 'Forward',
    age: 24,
    squadNumber: 10,
    nationality: 'Ghanaian',
    nationalityFlag: '🇬🇭',
    bio: 'Brings experience and leadership to the forward line.',
    imageUrl: '/Player-images/Players46.jpg',
    stats: { appearances: 15, goals: 6, assists: 5, cleanSheets: 0 },
  },
  {
    name: 'Andy Offei',
    position: 'Forward',
    age: 20,
    squadNumber: 17,
    nationality: 'Ghanaian',
    nationalityFlag: '🇬🇭',
    bio: 'Promising young forward with great potential.',
    imageUrl: '/Player-images/Players45.jpg',
    stats: { appearances: 10, goals: 3, assists: 2, cleanSheets: 0 },
  },
  {
    name: 'Bright Senaya',
    position: 'Forward',
    age: 21,
    squadNumber: 14,
    nationality: 'Ghanaian',
    nationalityFlag: '🇬🇭',
    bio: 'Known for his pace and agility on the wing.',
    imageUrl: '/Player-images/PlayerImage1.jpg',
    stats: { appearances: 13, goals: 4, assists: 6, cleanSheets: 0 },
  },
  {
    name: 'Mike Kenell Amoah',
    position: 'Forward',
    age: 25,
    squadNumber: 21,
    nationality: 'Ghanaian',
    nationalityFlag: '🇬🇭',
    bio: 'Clinical finisher with excellent positioning.',
    imageUrl: '/Player-images/PlayerImage1 (2).jpg',
    stats: { appearances: 11, goals: 7, assists: 1, cleanSheets: 0 },
  },
  {
    name: 'Owusu Samuel Nketsiah',
    position: 'Midfielder',
    age: 22,
    squadNumber: 6,
    nationality: 'Ghanaian',
    nationalityFlag: '🇬🇭',
    bio: 'Brings creativity and flair to the midfield.',
    imageUrl: '/Player-images/PlayerImage1 (4).jpg',
    stats: { appearances: 17, goals: 2, assists: 8, cleanSheets: 0 },
  },
  {
    name: 'Emmanuel Tagoe',
    position: 'Defender',
    age: 23,
    squadNumber: 3,
    nationality: 'Ghanaian',
    nationalityFlag: '🇬🇭',
    bio: 'Commanding defender with strong aerial ability.',
    imageUrl: '/Player-images/PlayerImage1 (5).jpg',
    stats: { appearances: 16, goals: 1, assists: 0, cleanSheets: 9 },
  },
  {
    name: 'Saviour Harms Azametsi',
    position: 'Goalkeeper',
    age: 21,
    squadNumber: 1,
    nationality: 'Ghanaian',
    nationalityFlag: '🇬🇭',
    bio: 'Reliable goalkeeper with excellent reflexes and commanding presence.',
    imageUrl: '/Player-images/PlayerImage1 (6).jpg',
    stats: { appearances: 18, goals: 0, assists: 0, cleanSheets: 11 },
  },
]

const PlayerProfiles = () => {
  const [selectedPlayer, setSelectedPlayer] = useState<ModalPlayer | null>(null)

  return (
    <div className="player-profiles-page">
      <section className="players-section">
        <h2 className="players-section-title">Meet the Players</h2>
        <div className="players-grid">
          {players.map(player => (
            <PlayerCard
              key={player.squadNumber}
              name={player.name}
              position={player.position}
              age={player.age}
              squadNumber={player.squadNumber}
              nationality={player.nationality}
              nationalityFlag={player.nationalityFlag}
              imageUrl={player.imageUrl}
              onClick={() => setSelectedPlayer(player)}
            />
          ))}
        </div>
      </section>

      <PlayerModal
        player={selectedPlayer ?? players[0]}
        isOpen={selectedPlayer !== null}
        onClose={() => setSelectedPlayer(null)}
      />
    </div>
  )
}

export default PlayerProfiles
