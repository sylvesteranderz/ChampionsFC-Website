import './Contact.css'

// ── Shared sub-components ─────────────────────────────────

interface ContactCardProps {
  category: string
  accentColor: string
  title: string
  description: string
  whatsappHref: string
  whatsappLabel: string
  emailHref: string
}

function ContactCard({ category, accentColor, title, description, whatsappHref, whatsappLabel }: ContactCardProps) {
  return (
    <div className="ct-card" style={{ borderTop: `2px solid ${accentColor}` }}>
      <span className="ct-pill">{category}</span>
      <h3 className="ct-card-title">{title}</h3>
      <p className="ct-card-desc">{description}</p>
      <a className="ct-whatsapp-btn" href={whatsappHref} target="_blank" rel="noopener noreferrer">
        {whatsappLabel} →
      </a>
      {/* <a className="ct-email-link" href={emailHref}>or send an email</a> */}
    </div>
  )
}

interface SocialPillProps {
  platform: string
  href: string
}

function SocialPill({ platform, href }: SocialPillProps) {
  return (
    // TODO: Replace href="#" with real social profile URLs
    <a className="ct-social-pill" href={href} target="_blank" rel="noopener noreferrer">
      <span className="ct-social-name">{platform}</span>
      <span className="ct-social-follow">Follow →</span>
    </a>
  )
}

// ── Page ─────────────────────────────────────────────────

export default function Contact() {
  return (
    <div className="ct-page">
      <div className="ct-container">

        {/* ── Page header ── */}
        <header className="ct-header">
          <span className="ct-label">GET IN TOUCH</span>
          <h1 className="ct-heading">Contact Us</h1>
          <p className="ct-subtext">
            Whether you're a fan, a potential sponsor, or a player looking
            for an opportunity — we want to hear from you.
          </p>
        </header>

        {/* ── Contact cards ── */}
        <div className="ct-cards-grid">
          <ContactCard
            category="GENERAL"
            accentColor="#f59e0b"
            title="General Enquiries"
            description="Questions about the club, matches, or anything else — reach out directly."
            whatsappLabel="Message on WhatsApp"
            whatsappHref="https://wa.me/233207109917?text=Hi%2C%20I%20have%20an%20enquiry%20about%20Changing%20Lives%20FC"
            emailHref="mailto:placeholder@changinglivesfc.com"
          />
          <ContactCard
            category="PARTNERSHIPS"
            accentColor="#fb923c"
            title="Sponsorship & Partnerships"
            description="Interested in putting your brand behind a rising club? Let's build something together."
            whatsappLabel="Discuss Partnership"
            whatsappHref="https://wa.me/233207109917?text=Hi%2C%20I%27m%20interested%20in%20a%20sponsorship%20partnership%20with%20Changing%20Lives%20FC"
            emailHref="mailto:placeholder@changinglivesfc.com"
          />
          <ContactCard
            category="RECRUITMENT"
            accentColor="#fbbf24"
            title="Player Trials"
            description="Think you have what it takes? Get in touch with our coaching staff about upcoming trial dates."
            whatsappLabel="Enquire About Trials"
            whatsappHref="https://wa.me/233207109917?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20player%20trials%20at%20Changing%20Lives%20FC"
            emailHref="mailto:placeholder@changinglivesfc.com"
          />
        </div>

        {/* ── Divider ── */}
        <div className="ct-divider" />

        {/* ── Location + Socials ── */}
        <div className="ct-bottom-row">

          {/* Location */}
          <div className="ct-location">
            <span className="ct-section-label">FIND US</span>
            <address className="ct-address">
              {/* TODO: Replace with real club name if different */}
              <span>Champions FC</span>
              {/* TODO: Replace with actual home ground name */}
              <span>Home Ground: [Good Foundation School]</span>
              {/* TODO: Confirm exact city/area */}
              <span>Nsawam, Ghana</span>
            </address>
            {/* TODO: Replace iframe src with exact ground coordinates:
                https://maps.google.com/maps?q=LAT,LNG&output=embed */}
            <div className="ct-map-wrap">
              <iframe
                className="ct-map"
                src="https://maps.google.com/maps?q=Nsawam,Ghana&output=embed"
                title="Club location"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Socials */}
          <div className="ct-socials">
            <span className="ct-section-label">FOLLOW THE CLUB</span>
            <p className="ct-socials-subtext">
              Stay updated with match results, behind the scenes content, and club news.
            </p>
            <div className="ct-social-list">
              {/* TODO: Replace href="#" with real Instagram URL */}
              <SocialPill platform="Instagram" href="#" />
              {/* TODO: Replace href="#" with real Facebook URL */}
              <SocialPill platform="Facebook"  href="#" />
              {/* TODO: Replace href="#" with real Snapchat URL */}
              {/* <SocialPill platform="Snapchat"  href="#" /> */}
              {/* TODO: Replace href="#" with real TikTok URL */}
              {/* <SocialPill platform="TikTok"    href="#" /> */}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
