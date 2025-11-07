import { useEffect, useState, useRef } from 'react'

interface CounterProps {
  end: number
  duration: number
  label: string
  icon?: string
}

const Counter = ({ end, duration, label, icon }: CounterProps) => {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const counterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (hasAnimated) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            
            // Start counting from 0
            setCount(0)
            const increment = end / (duration / 16)
            let current = 0
            
            const timer = setInterval(() => {
              current += increment
              if (current >= end) {
                setCount(end)
                clearInterval(timer)
              } else {
                setCount(Math.floor(current))
              }
            }, 16)
          }
        })
      },
      { threshold: 0.3 }
    )

    const currentRef = counterRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [hasAnimated, end, duration])

  return (
    <div className="stat-item" ref={counterRef}>
      {icon && <div className="stat-icon">{icon}</div>}
      <h2 className="counter">{count}</h2>
      <p>{label}</p>
    </div>
  )
}

const Stats = () => {
  return (
    <section className="stats">
      <Counter end={25} duration={2000} label="Number of Players" icon="👥" />
      <Counter end={100} duration={2500} label="Matches Played" icon="⚽" />
      <Counter end={10} duration={1500} label="Trophies Won" icon="🏆" />
    </section>
  )
}

export default Stats

