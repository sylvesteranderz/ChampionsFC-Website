import { useNavigate } from 'react-router-dom'
import './NewsPage.css'

// TODO: Replace this entire page when Supabase news routing is built
export default function NewsPage() {
  const navigate = useNavigate()

  return (
    <div className="np-page">
      <div className="np-content">
        <span className="np-label">CLUB NEWS</span>
        <h1 className="np-heading">More stories coming soon.</h1>
        <p className="np-subtext">
          We're building out our news section. Check back soon for match reports,
          player features, and club updates.
        </p>
        <button className="np-back" onClick={() => navigate('/')}>
          ← Back to Home
        </button>
      </div>
    </div>
  )
}
