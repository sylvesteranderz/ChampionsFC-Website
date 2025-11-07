
const CTA = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission
    alert('Thank you for subscribing!')
  }

  return (
    <section className="cta-section" id="cta-section">
      <div className="cta-container">
        <h2>Stay Updated with the Latest News</h2>
        <p>Sign up for our newsletter and never miss a moment of the action!</p>
        <form className="cta-form" onSubmit={handleSubmit}>
          <input type="email" placeholder="Enter your email" required />
          <button type="submit" className="cta-btn">Sign Up</button>
        </form>
      </div>
    </section>
  )
}

export default CTA

