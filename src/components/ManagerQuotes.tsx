
interface Quote {
  id: number
  text: string
  author: string
}

const ManagerQuotes = () => {
  const quotes: Quote[] = [
    {
      id: 1,
      text: "I don't believe in luck, I believe in hard work.",
      author: 'Jose Mourinho',
    },
    {
      id: 2,
      text: 'In football, the worst things are excuses. The best thing is to try to do it better.',
      author: 'Louis van Gaal',
    },
    {
      id: 3,
      text: 'Football is a game of mistakes. Whoever makes the fewest mistakes wins.',
      author: 'General Marcus',
    },
  ]

  return (
    <section className="managers-quotes">
      <h2>Managers' Wisdom</h2>
      <p className="quote-intro">Inspirational quotes from top football managers.</p>
      <div className="quotes-container">
        {quotes.map((quote) => (
          <div key={quote.id} className="quote-card">
            <p className="quote-text">
              "{quote.text}" - <strong>{quote.author}</strong>
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ManagerQuotes

