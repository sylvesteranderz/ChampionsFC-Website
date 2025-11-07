import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleNavClick = () => {
    if (window.innerWidth <= 768) {
      setIsMenuOpen(false)
    }
  }

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <Link to="/" onClick={handleNavClick}>
            <span className="Brand-name">CHAMPIONS FC</span>
          </Link>
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          &#9776;
        </button>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          {location.pathname === '/' ? (
            <>
              <li><a href="#live-scores" onClick={handleNavClick}>Matches</a></li>
              <li><Link to="/team" onClick={handleNavClick}>Team</Link></li>
              <li><a href="#news" onClick={handleNavClick}>News</a></li>
              <li><a href="#cta-section" onClick={handleNavClick}>Contact</a></li>
            </>
          ) : (
            <>
              <li><Link to="/#live-scores" onClick={handleNavClick}>Matches</Link></li>
              <li><Link to="/team" onClick={handleNavClick}>Team</Link></li>
              <li><Link to="/#news" onClick={handleNavClick}>News</Link></li>
              <li><Link to="/#cta-section" onClick={handleNavClick}>Contact</Link></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  )
}

export default Header

