import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import News from './components/News'
import LiveScores from './components/LiveScores'
import StatsStrip from './components/StatsStrip'

import Gallery from './components/Gallery'
import About from './components/About'
import CTA from './components/CTA'
import Footer from './components/Footer'
import PlayerProfiles from './components/PlayerProfiles'
import AboutPage from './components/AboutPage'

function Home() {
  return (
    <>
      <Hero />
      <main>
        <News />
        <LiveScores />
        <StatsStrip />
        <Gallery />
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
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
