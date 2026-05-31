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
  <Link to="/" onClick={handleNavClick} 
    style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
    <img 
      src="/Images/Logo.png"
      alt="Champions FC Logo" 
      style={{ height: '40px', width: 'auto' }}
    />
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
              <li><Link to="/about" onClick={handleNavClick}>About</Link></li>
              <li><a href="#news" onClick={handleNavClick}>News</a></li>
              <li><Link to="/contact" onClick={handleNavClick}>Contact</Link></li>
            </>
          ) : (
            <>
              <li><Link to="/#live-scores" onClick={handleNavClick}>Matches</Link></li>
              <li><Link to="/team" onClick={handleNavClick}>Team</Link></li>
              <li><Link to="/about" onClick={handleNavClick}>About</Link></li>
              <li><Link to="/#news" onClick={handleNavClick}>News</Link></li>
              <li><Link to="/contact" onClick={handleNavClick}>Contact</Link></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  )
}

export default Header

