import { useEffect, useState } from 'react'

interface CounterProps {
  end: number
  duration: number
  label: string
}

const Counter = ({ end, duration, label }: CounterProps) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
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

    return () => clearInterval(timer)
  }, [end, duration])

  return (
    <div className="stat-item">
      <h2 className="counter">{count}</h2>
      <p>{label}</p>
    </div>
  )
}

const Stats = () => {
  return (
    <section className="stats">
      <Counter end={25} duration={2000} label="Number of Players" />
      <Counter end={100} duration={2500} label="Matches Played" />
      <Counter end={10} duration={1500} label="Trophies Won" />
    </section>
  )
}

export default Stats

