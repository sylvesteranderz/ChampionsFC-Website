import { useCallback, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './HeroSlideshow.css'

// ── Slide data ────────────────────────────────────────────
const slides = [
  {
    id: 1,
    imageUrl: '/Images/CFC.jpg',
    // TODO: Replace with pre-match team photo path
    bgFallback: 'linear-gradient(160deg, #0f172a 0%, #1a2a4a 100%)',
    label: 'ERFA DIVISION TWO · Nsawam, GHANA',
    line1: 'One Club.',
    line2: 'One Mission.',
    subtext: 'Champions FC — built on discipline, driven by purpose.',
    primaryCta:   { text: 'Meet The Squad →', path: '/team' },
    secondaryCta: { text: 'Our Story',         path: '/about' },
  },
  {
    id: 2,
    imageUrl: '/Images/img2.jpg',
    // TODO: Replace with match action photo path
    bgFallback: 'linear-gradient(160deg, #0f172a 0%, #1c1a3a 100%)',
    label: 'MATCHDAY',
    line1: 'Every Match.',
    line2: 'Everything We Have.',
    subtext: 'Competing hard in the ERFA Division Two, every single week.',
    primaryCta:   { text: 'View Fixtures →', path: '/#live-scores' },
    secondaryCta: { text: 'Latest Results',  path: '/#live-scores' },
  },
  {
    id: 3,
    imageUrl: '/Images/img4.jpg',
    // TODO: Replace with celebration photo path
    bgFallback: 'linear-gradient(160deg, #0f172a 0%, #1a2e3a 100%)',
    label: 'THE CULTURE',
    line1: 'This Is What',
    line2: 'We Play For.',
    subtext: 'The moments that make every training session, every sacrifice worth it.',
    primaryCta:   { text: 'Follow The Journey →', path: '/news' },
    secondaryCta: { text: 'Club News',             path: '/news' },
  },
]

const DURATION = 6000

// ── Component ─────────────────────────────────────────────
export default function HeroSlideshow() {
  const navigate = useNavigate()
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const prefersReduced = useRef(
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false,
  ).current

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered,    setIsHovered]    = useState(false)
  const [scrolledDown, setScrolledDown] = useState(false)

  // ── Timer ────────────────────────────────────────────────
  const stopTimer = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = null
  }, [])

  const startTimer = useCallback(() => {
    if (prefersReduced) return
    stopTimer()
    intervalRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % slides.length)
    }, DURATION)
  }, [prefersReduced, stopTimer])

  // Start on mount
  useEffect(() => {
    startTimer()
    return stopTimer
  }, [startTimer, stopTimer])

  // Pause/resume on hover
  useEffect(() => {
    if (isHovered) stopTimer()
    else startTimer()
  }, [isHovered, startTimer, stopTimer])

  // ── Preload images ───────────────────────────────────────
  useEffect(() => {
    slides.forEach(slide => {
      const img = new Image()
      img.src = slide.imageUrl
    })
  }, [])

  // ── Scroll indicator ─────────────────────────────────────
  useEffect(() => {
    const onScroll = () => setScrolledDown(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // ── Navigation ───────────────────────────────────────────
  const goTo = useCallback((index: number) => {
    setCurrentIndex(index)
    startTimer()
  }, [startTimer])

  const prev = () => goTo((currentIndex - 1 + slides.length) % slides.length)
  const next = () => goTo((currentIndex + 1) % slides.length)

  const handleCtaClick = (path: string) => {
    if (path.startsWith('/#')) {
      window.location.href = path
    } else {
      navigate(path)
    }
  }

  const slide = slides[currentIndex]

  return (
    <section
      className="hs-hero"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* ── Image layers (cross-fade) ── */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          className={`hs-slide${i === currentIndex ? ' hs-slide--active' : ''}`}
          role="img"
          aria-label={`${s.line1} ${s.line2}`}
        >
          {s.imageUrl ? (
            <img className="hs-bg" src={s.imageUrl} alt="" aria-hidden="true" />
          ) : (
            <div className="hs-bg-fallback" style={{ background: s.bgFallback }} />
          )}
        </div>
      ))}

      {/* ── Overlay ── */}
      <div className="hs-overlay" aria-hidden="true" />

      {/* ── Content — key forces remount → retriggers animations ── */}
      <div className="hs-content" key={prefersReduced ? 0 : currentIndex}>
        <span className="hs-label">{slide.label}</span>
        <div className="hs-headline">
          <div className="hs-line1">{slide.line1}</div>
          <div className="hs-line2">{slide.line2}</div>
        </div>
        <p className="hs-subtext">{slide.subtext}</p>
        <div className="hs-ctas">
          <button
            className="hs-btn-primary"
            onClick={() => handleCtaClick(slide.primaryCta.path)}
          >
            {slide.primaryCta.text}
          </button>
          <button
            className="hs-btn-secondary"
            onClick={() => handleCtaClick(slide.secondaryCta.path)}
          >
            {slide.secondaryCta.text}
          </button>
        </div>
      </div>

      {/* ── Dot indicators ── */}
      <div className="hs-dots" role="tablist" aria-label="Slide navigation">
        {slides.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === currentIndex}
            aria-label={`Go to slide ${i + 1}`}
            className={`hs-dot${i === currentIndex ? ' hs-dot--active' : ''}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>

      {/* ── Arrow buttons (desktop) ── */}
      <button className="hs-arrow hs-arrow--prev" onClick={prev} aria-label="Previous slide">
        ‹
      </button>
      <button className="hs-arrow hs-arrow--next" onClick={next} aria-label="Next slide">
        ›
      </button>

      {/* ── Progress bar — key restarts animation ── */}
      <div className="hs-progress" aria-hidden="true">
        <div
          className="hs-progress-fill"
          key={prefersReduced ? 'static' : `fill-${currentIndex}`}
        />
      </div>

      {/* ── Scroll indicator ── */}
      <div
        className={`hs-scroll-indicator${scrolledDown ? ' hs-scroll-indicator--hidden' : ''}`}
        aria-hidden="true"
      >
        <div className="hs-scroll-chevron" />
      </div>

      {/* ── Anchor bar ── */}
      <div className="hs-anchor" aria-label="Club info">
        <div className="hs-anchor-item">
          <span className="hs-anchor-label">HOME GROUND</span>
          {/* TODO: Replace with actual ground name */}
          <span className="hs-anchor-value">Nsawam, Ghana</span>
        </div>
        <div className="hs-anchor-dot" aria-hidden="true" />
        <div className="hs-anchor-item">
          <span className="hs-anchor-label">COMPETITION</span>
          <span className="hs-anchor-value">ERFA Division Two</span>
        </div>
        <div className="hs-anchor-dot" aria-hidden="true" />
        <div className="hs-anchor-item">
          <span className="hs-anchor-label">ESTABLISHED</span>
          {/* TODO: Confirm with club owner */}
          <span className="hs-anchor-value">2011</span>
        </div>
      </div>
    </section>
  )
}
