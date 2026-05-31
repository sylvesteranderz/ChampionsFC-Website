import { useEffect, useRef, useState } from 'react'
import './StatsStrip.css'

interface StatItem {
  display: string
  label: string
  animateTo?: number
}

const STATS: StatItem[] = [
  { display: '2019', label: 'YEAR FOUNDED' },
  { display: '127',  label: 'MATCHES PLAYED', animateTo: 127 },
  { display: '61%',  label: 'WIN RATE' },
  { display: '203',  label: 'GOALS SCORED',   animateTo: 203 },
]

function AnimatedNumber({ target }: { target: number }) {
  const [count, setCount] = useState(0)
  const ref    = useRef<HTMLSpanElement>(null)
  const hasRun = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasRun.current) return
        hasRun.current = true

        const duration = 1500
        const start    = performance.now()

        const tick = (now: number) => {
          const t      = Math.min((now - start) / duration, 1)
          const eased  = 1 - Math.pow(1 - t, 3) // cubic ease-out
          setCount(Math.round(eased * target))
          if (t < 1) requestAnimationFrame(tick)
        }

        requestAnimationFrame(tick)
      },
      { threshold: 0.3 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref}>{count}</span>
}

export default function StatsStrip() {
  return (
    <section className="ss-section">
      <div className="ss-grid">
        {STATS.map(stat => (
          <div key={stat.label} className="ss-stat">
            <span className="ss-number">
              {stat.animateTo !== undefined
                ? <AnimatedNumber target={stat.animateTo} />
                : stat.display}
            </span>
            <span className="ss-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
