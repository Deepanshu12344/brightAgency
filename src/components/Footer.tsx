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

export default function Footer({ className = '' }: { className?: string }) {
  return (
    <footer id="footer" className={`site-footer ${className}`.trim()}>
      <div className="footer-top">
        <div className="footer-social-area footer-reveal" style={{ '--reveal-delay': '0ms' } as CSSProperties}>
          <nav className="footer-socials" aria-label="Social media">
            <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.6 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.6 1.7-1.6H17V3.8c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.2V10H8v3h2.6v8h3Z" /></svg></a>
            <a href="#" aria-label="Instagram"><svg className="social-icon-outline" viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="4" fill="none" /><circle cx="12" cy="12" r="4" fill="none" /><circle cx="17.5" cy="6.8" r="1" fill="currentColor" stroke="none" /></svg></a>
            <a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.36 7.44a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.14 20.45H3.58V9h3.56v11.45Z" /></svg></a>
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
