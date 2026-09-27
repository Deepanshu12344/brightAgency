import type { CSSProperties } from 'react'

const footerGroups = [
  {
    heading: 'Services',
    links: ['AI Image Generator', 'Creative Ideation', 'Background Remover', 'Train Your Own Model'],
  },
  {
    heading: 'Why Us',
    links: ['AI Video Generator', 'Image Editor', 'Video Editor', 'Image Upscaler'],
  },
  {
    heading: 'Resources',
    links: ['Lucid Origin', 'Phoenix 1.0', 'Veo 3', 'Our Work'],
  },
]

export default function Footer() {
  return (
    <footer id="footer" className="site-footer">
      <div className="footer-top">
        <div className="footer-social-area footer-reveal" style={{ '--reveal-delay': '0ms' } as CSSProperties}>
          <nav className="footer-socials" aria-label="Social media">
            <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.6 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.6 1.7-1.6H17V3.8c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.2V10H8v3h2.6v8h3Z" /></svg></a>
            <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="4" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.8" r="1" fill="currentColor" stroke="none" /></svg></a>
            <a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 9h3v10H5zM6.5 4.5a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6ZM10 9h2.9v1.4h.1c.4-.8 1.4-1.7 3-1.7 3.2 0 3.8 2.1 3.8 4.8V19h-3v-4.8c0-1.1 0-2.6-1.6-2.6s-1.9 1.2-1.9 2.5V19h-3V9Z" /></svg></a>
          </nav>
          <p className="footer-compliance">Bright is committed to the highest standards of security, availability and data integrity. This ensures our customers can trust that their data is handled with enterprise-grade protection and compliance.</p>
        </div>
        <div className="footer-links">
          {footerGroups.map((group, index) => (
            <div key={group.heading} className="footer-col footer-reveal" style={{ '--reveal-delay': `${index * 90}ms` } as CSSProperties}>
              <h4>{group.heading}</h4>
              {group.links.map(link => <a key={link} href="#">{link}</a>)}
            </div>
          ))}
          <div className="footer-col footer-reveal footer-nav-links" style={{ '--reveal-delay': '270ms' } as CSSProperties}>
            <a href="#">Contact</a>
            <a href="#">Book a Demo</a>
          </div>
        </div>
      </div>

      <div className="footer-wordmark">
        <span className="footer-tagline footer-reveal">Make your brand iconic</span>
        <span className="footer-logo">
          {'BRIGHT AGENCY'.split('').map((char, i) => (
            <span key={i} className="footer-char" style={{ display: 'inline-block', '--char-delay': `${i * 0.05}s` } as CSSProperties}>
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </span>
      </div>

      <div className="footer-bottom footer-reveal" style={{ '--reveal-delay': '450ms' } as CSSProperties}>
        <div className="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </div>
        <span>© 2026 Bright Agency. All rights reserved.</span>
      </div>
    </footer>
  )
}
