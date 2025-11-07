import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section className="about-section" id="about">
      {/* <div className="about-images">
        <figure>
          <img src="Player-images/General.jpg" alt="Champions FC Team Photo" />
          <figcaption>Mark Anderson (Founder)</figcaption>
        </figure>
        <img src="P.jpg" alt="Match Action" />
      </div> */}

      <h1>About Champions FC</h1>
      
      <div className="about-preview">
        <section>
          <h2>Brief History</h2>
          <p className="about-text-desktop">
            Champions FC, originally established as Christ Centered Football Club in November 2011, is a second division football team based in Nsawam, Eastern Region, Ghana. Initially founded with a Christian-oriented mission, the club blended faith-based mentorship with football, instilling values like discipline, teamwork, and integrity.
          </p>
          <p className="about-text-mobile">
            Champions FC, originally established as Christ Centered Football Club in November 2011, is a second division football team based in Nsawam, Eastern Region, Ghana...
          </p>
          <p className="about-text-desktop">
            Joining Ghana Football Association's Division Three shortly after formation, the club earned a promotion to Division Two in 2013. This milestone marked a significant step in its journey of growth and development.
          </p>
        </section>
        
        <section>
          <h2>Mission and Vision</h2>
          <h3>Mission Statement</h3>
          <p className="about-text-desktop">
            To nurture and develop young football talent in Ghana by providing a supportive and comprehensive training environment. Through dedicated coaching, mentorship, and community engagement, we strive to empower our players to excel both on and off the field.
          </p>
          <p className="about-text-mobile">
            To nurture and develop young football talent in Ghana by providing a supportive and comprehensive training environment...
          </p>
          <h3>Vision Statement</h3>
          <p className="about-text-desktop">
            To be the leading football academy in Ghana recognized for shaping young athletes into skilled, confident, and responsible individuals.
          </p>
          <p className="about-text-mobile">
            To be the leading football academy in Ghana recognized for shaping young athletes...
          </p>
        </section>
        
        <div className="read-more-link">
          <Link to="/about" className="read-more-btn">Read More</Link>
        </div>
      </div>
    </section>
  )
}

export default About

