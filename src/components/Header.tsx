import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

const NAV_LINKS = [
  { label: 'Fixtures & Results', path: '/matches' },
  { label: 'The Squad',          path: '/team'    },
  { label: 'Our Story',          path: '/about'   },
  { label: 'Club News',          path: '/news'    },
  { label: 'Get In Touch',       path: '/contact' },
]

export default function Header() {
  const location                    = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled]     = useState(false)
  const navRef                      = useRef<HTMLElement>(null)

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path)

  const closeMenu = () => setIsMenuOpen(false)
  const toggleMenu = () => setIsMenuOpen(prev => !prev)

  // Scroll behaviour
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close on resize past breakpoint
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) closeMenu() }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Close on click outside
  useEffect(() => {
    if (!isMenuOpen) return
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) closeMenu()
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [isMenuOpen])

  // Close mobile menu on route change
  useEffect(() => { closeMenu() }, [location.pathname])

  return (
    <header ref={navRef} className={`nb-header${scrolled ? ' nb-header--scrolled' : ''}`}>

      {/* ── Main bar ── */}
      <div className="nb-inner">

        {/* Left: logo */}
        <Link className="nb-logo" to="/" onClick={closeMenu}>
          <img src="/Images/Logo.png" alt="Champions FC" className="nb-logo-img" />
          <span className="nb-brand">CHAMPIONS FC</span>
        </Link>

        {/* Center: desktop links */}
        <nav className="nb-desktop-nav" aria-label="Main navigation">
          <ul className="nb-links">
            {NAV_LINKS.map(link => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`nb-link${isActive(link.path) ? ' nb-link--active' : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right: CTA + hamburger */}
        <div className="nb-right">
          {/* TODO: Replace href="#" with primary social platform URL */}
          <a href="#" className="nb-cta">Follow Us</a>

          <button
            className={`nb-burger${isMenuOpen ? ' nb-burger--open' : ''}`}
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            <span className="nb-burger-line" />
            <span className="nb-burger-line" />
            <span className="nb-burger-line" />
          </button>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      {isMenuOpen && (
        <div className="nb-mobile-menu" role="navigation" aria-label="Mobile navigation">
          <ul className="nb-mobile-links">
            {NAV_LINKS.map((link, i) => (
              <li
                key={link.path}
                className={`nb-mobile-item${i === NAV_LINKS.length - 1 ? ' nb-mobile-item--last' : ''}`}
              >
                <Link
                  to={link.path}
                  className={`nb-mobile-link${isActive(link.path) ? ' nb-mobile-link--active' : ''}`}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          {/* TODO: Replace href="#" with primary social platform URL */}
          <a href="#" className="nb-mobile-cta" onClick={closeMenu}>Follow Us</a>
        </div>
      )}

    </header>
  )
}
