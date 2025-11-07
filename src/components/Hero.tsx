import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const wallpapers = [
  'Images/CFC.jpg',
  'Images/img2.jpg',
  'Images/img4.jpg',
  // 'public/Player-images/Richard.jpg',
  // 'public/Player-images/pic1.jpg',
]

const Hero = () => {
  const [currentWallpaperIndex, setCurrentWallpaperIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWallpaperIndex((prev) => (prev + 1) % wallpapers.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <header 
      className="hero" 
      style={{ 
        backgroundImage: `url(${wallpapers[currentWallpaperIndex]})`,
        transition: 'background-image 1s ease-in-out'
      }}
    >
      <div className="overlay">
        <div className="hero-content">
          <h1>Welcome to Our Football World</h1>
          <p>Stay up to date with the latest news, match schedules, and more.</p>
          <div className="cta-buttons">
            <button className="cta-btn" onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}>
              Join Us
            </button>
            <Link to="/team" className="cta-btn">Meet the Team</Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero

