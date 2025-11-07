
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3>Champions FC</h3>
          <p>We are dedicated to developing football talent and nurturing future stars in Ghana.</p>
        </div>
        <div className="footer-middle">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/team">Team</Link></li>
            <li><a href="#fixtures">Fixtures</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-right">
          <h4>Follow Us</h4>
          <div className="social-media">
            <a href="https://facebook.com" target="_blank" className="social-icon" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" className="social-icon" rel="noopener noreferrer">Twitter</a>
            <a href="https://instagram.com" target="_blank" className="social-icon" rel="noopener noreferrer">Instagram</a>
            <a href="https://linkedin.com" target="_blank" className="social-icon" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Champions FC. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer

