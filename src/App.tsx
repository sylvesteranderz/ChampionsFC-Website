import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import HeroSlideshow from './components/HeroSlideshow'
import News from './components/News'
import LiveScores from './components/LiveScores'
import StatsStrip from './components/StatsStrip'
import PlayersPreview, { type PreviewPlayer } from './components/PlayersPreview'
import ClubLife from './components/ClubLife'
import About from './components/About'
import CTA from './components/CTA'
import Footer from './components/Footer'
import PlayerProfiles from './components/PlayerProfiles'
import AboutPage from './components/AboutPage'
import Contact from './components/Contact'

const previewPlayers: PreviewPlayer[] = [
  {
    id: 1, name: 'Nana Kofi Bermah', position: 'Midfielder', squadNumber: 8,
    nationality: 'Ghanaian', nationalityFlag: '🇬🇭', age: 19,
    imageUrl: '/Player-images/Richard.jpg',
    bio: 'Engine of the midfield. Dictates tempo and covers ground tirelessly.',
    highlightUrl: 'https://youtube.com',
    stats: { appearances: 18, goals: 4, assists: 7, cleanSheets: 0 },
  },
  {
    id: 2, name: 'Kweku Victor Adjei', position: 'Forward', squadNumber: 11,
    nationality: 'Ghanaian', nationalityFlag: '🇬🇭', age: 23,
    imageUrl: '/Player-images/Player2.jpg',
    bio: '',
    stats: { appearances: 14, goals: 9, assists: 3, cleanSheets: 0 },
  },
  {
    id: 3, name: 'Jamos Brown', position: 'Forward', squadNumber: 9,
    nationality: 'Ghanaian', nationalityFlag: '🇬🇭', age: 26,
    imageUrl: '/Player-images/Player3.jpg',
    bio: 'Dynamic forward with excellent finishing skills.',
    stats: { appearances: 16, goals: 11, assists: 2, cleanSheets: 0 },
  },
  {
    id: 4, name: 'Philip Siame', position: 'Forward', squadNumber: 7,
    nationality: 'Ghanaian', nationalityFlag: '🇬🇭', age: 22,
    imageUrl: '/Player-images/Player4.jpg',
    bio: 'Versatile forward with strong attacking instincts.',
    stats: { appearances: 12, goals: 5, assists: 4, cleanSheets: 0 },
  },
  {
    id: 5, name: 'Tetteh Camara Boyd', position: 'Forward', squadNumber: 10,
    nationality: 'Ghanaian', nationalityFlag: '🇬🇭', age: 24,
    imageUrl: '/Player-images/Players46.jpg',
    bio: 'Brings experience and leadership to the forward line.',
    stats: { appearances: 15, goals: 6, assists: 5, cleanSheets: 0 },
  },
  {
    id: 6, name: 'Andy Offei', position: 'Forward', squadNumber: 17,
    nationality: 'Ghanaian', nationalityFlag: '🇬🇭', age: 20,
    imageUrl: '/Player-images/Players45.jpg',
    bio: 'Promising young forward with great potential.',
    stats: { appearances: 10, goals: 3, assists: 2, cleanSheets: 0 },
  },
  {
    id: 7, name: 'Bright Senaya', position: 'Forward', squadNumber: 14,
    nationality: 'Ghanaian', nationalityFlag: '🇬🇭', age: 21,
    imageUrl: '/Player-images/PlayerImage1.jpg',
    bio: 'Known for his pace and agility on the wing.',
    stats: { appearances: 13, goals: 4, assists: 6, cleanSheets: 0 },
  },
  {
    id: 8, name: 'Mike Kenell Amoah', position: 'Forward', squadNumber: 21,
    nationality: 'Ghanaian', nationalityFlag: '🇬🇭', age: 25,
    imageUrl: '/Player-images/PlayerImage1 (2).jpg',
    bio: 'Clinical finisher with excellent positioning.',
    stats: { appearances: 11, goals: 7, assists: 1, cleanSheets: 0 },
  },
  {
    id: 9, name: 'Owusu Samuel Nketsiah', position: 'Midfielder', squadNumber: 6,
    nationality: 'Ghanaian', nationalityFlag: '🇬🇭', age: 22,
    imageUrl: '/Player-images/PlayerImage1 (4).jpg',
    bio: 'Brings creativity and flair to the midfield.',
    stats: { appearances: 17, goals: 2, assists: 8, cleanSheets: 0 },
  },
  {
    id: 10, name: 'Emmanuel Tagoe', position: 'Defender', squadNumber: 3,
    nationality: 'Ghanaian', nationalityFlag: '🇬🇭', age: 23,
    imageUrl: '/Player-images/PlayerImage1 (5).jpg',
    bio: 'Commanding defender with strong aerial ability.',
    stats: { appearances: 16, goals: 1, assists: 0, cleanSheets: 9 },
  },
  {
    id: 11, name: 'Saviour Harms Azametsi', position: 'Goalkeeper', squadNumber: 1,
    nationality: 'Ghanaian', nationalityFlag: '🇬🇭', age: 21,
    imageUrl: '/Player-images/PlayerImage1 (6).jpg',
    bio: 'Reliable goalkeeper with excellent reflexes and commanding presence.',
    stats: { appearances: 18, goals: 0, assists: 0, cleanSheets: 11 },
  },
]

function Home() {
  const navigate = useNavigate()

  return (
    <>
      <HeroSlideshow />
      <main>
        <News />
        <LiveScores />
        <StatsStrip />

        {/* TODO: Replace with MatchScoresSection once Supabase matches table is built */}
        <div />

        <PlayersPreview
          players={previewPlayers}
          onViewAll={() => navigate('/team')}
        />

        <ClubLife
          photos={[
            {
              imageUrl: '/Player-images/Players46.jpg',
              title: 'Matchday Ready',
              subtitle: 'The preparation that precedes every performance',
            },
            {
              imageUrl: '/Player-images/TrainingDay.jpg',
              title: 'Training Ground',
              subtitle: 'Where the work gets done',
            },
            {
              imageUrl: '/Player-images/Brotherhood.jpg',
              title: 'The Brotherhood',
              subtitle: 'Eleven individuals. One identity.',
            },
          ]}
        />
        <About />
        <CTA />
      </main>
    </>
  )
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<PlayerProfiles />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/Playerprofile.html" element={<PlayerProfiles />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
