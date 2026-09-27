import { useEffect } from 'react'

const MEGAMENU_SVG = {
  image: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5-7l-3 3.72L9 13l-3 4h12l-4-5.28z",
  bulb: "M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z",
  plus: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 9h-2V7h-2v5H6v2h2v5h2v-5h2v-2z",
  globe: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z",
  video: "M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z",
  edit1: "M22.7 14.3L21.7 15.3L19.6 13.2L20.6 12.2C21.4 11.4 22.7 11.4 23.5 12.2L24.5 13.2C25.3 14 25.3 15.3 24.5 16.1L22.7 14.3zM13 19.8L18.8 14L20.9 16.1L15.1 21.9H13V19.8z",
  edit2: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z",
  play: "M8 5v14l11-7z",
}

const MegaMenuColumn = () => (
  <>
    <div className="megamenu-column">
      <div className="section-title">Image</div>
      <div className="menu-item">
        <div className="menu-icon"><svg viewBox="0 0 24 24"><path d={MEGAMENU_SVG.image}/></svg></div>
        <div className="menu-text">
          <span className="menu-item-title">AI Image Generator</span>
          <span className="menu-item-desc">Create images from prompts or references</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="menu-icon" style={{color:'white',opacity:1}}><svg viewBox="0 0 24 24"><path d={MEGAMENU_SVG.bulb}/></svg></div>
        <div className="menu-text">
          <span className="menu-item-title" style={{color:'white'}}>Creative Ideation</span>
          <span className="menu-item-desc">Explore visual ideas and directions</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="menu-icon"><svg viewBox="0 0 24 24"><path d={MEGAMENU_SVG.plus}/></svg></div>
        <div className="menu-text">
          <span className="menu-item-title">Background Remover</span>
          <span className="menu-item-desc">Remove and replace image backgrounds</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="menu-icon"><svg viewBox="0 0 24 24"><path d={MEGAMENU_SVG.globe}/></svg></div>
        <div className="menu-text">
          <span className="menu-item-title">Train Your Own Model</span>
          <span className="menu-item-desc">Train custom models for consistency</span>
        </div>
      </div>
    </div>

    <div className="megamenu-column">
      <div className="section-title">Video</div>
      <div className="menu-item">
        <div className="menu-icon"><svg viewBox="0 0 24 24"><path d={MEGAMENU_SVG.video}/></svg></div>
        <div className="menu-text">
          <span className="menu-item-title">AI Video Generator</span>
          <span className="menu-item-desc">Generate motion from images or text</span>
        </div>
      </div>
      <div className="section-title mt-6">Editing</div>
      <div className="menu-item">
        <div className="menu-icon"><svg viewBox="0 0 24 24"><path d={MEGAMENU_SVG.edit1}/></svg></div>
        <div className="menu-text">
          <span className="menu-item-title">Image Editor</span>
          <span className="menu-item-desc">Edit and refine images with AI</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="menu-icon"><svg viewBox="0 0 24 24"><path d={MEGAMENU_SVG.edit2}/></svg></div>
        <div className="menu-text">
          <span className="menu-item-title">Video Editor</span>
          <span className="menu-item-desc">Refine videos with AI editing controls</span>
        </div>
      </div>
    </div>

    <div className="megamenu-column">
      <div className="section-title">Upscaling</div>
      <div className="menu-item">
        <div className="menu-icon"><svg viewBox="0 0 24 24"><path d={MEGAMENU_SVG.play}/></svg></div>
        <div className="menu-text">
          <span className="menu-item-title">Image Upscaler</span>
          <span className="menu-item-desc">Enhance resolution without losing detail</span>
        </div>
      </div>
      <div className="section-title mt-6">Featured Models</div>
      <div className="menu-item simple-item">Lucid Origin</div>
      <div className="menu-item simple-item">Phoenix 1.0</div>
      <div className="menu-item simple-item">Veo 3</div>
      <div className="view-all">View all models &rarr;</div>
    </div>

    <div className="megamenu-column">
      <div className="megamenu-card">
        <div className="card-content">
          <div className="card-title">New to Leonardo?<br/>Learn the basics.</div>
          <button className="card-btn">Get started</button>
        </div>
      </div>
    </div>
  </>
)

export default function Header() {
  useEffect(() => {
    const header = document.querySelector('.header')
    const onScroll = () => {
      header?.classList.toggle('scrolled', window.scrollY > 10)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="header">
      <div className="logo">BRIGHT</div>

      <nav className="nav-links">
        {['Services', 'Why Us', 'Resources'].map(label => (
          <div key={label} className="nav-item has-dropdown">
            <span className="rollup-target">
              {label}
              <svg className="chevron" viewBox="0 0 12 12" aria-hidden="true">
                <path d="m2.5 4.5 3.5 3 3.5-3" />
              </svg>
            </span>
            <div className="megamenu">
              <MegaMenuColumn />
            </div>
          </div>
        ))}
        <div className="nav-item"><span className="rollup-target">Our Work</span></div>
        <div className="nav-item"><span className="rollup-target">Contact</span></div>
      </nav>

      <div className="header-actions">
        <button className="btn btn-secondary btn-small btn-rollup">
          <span className="rollup-wrapper">
            <span className="rollup-original">Book a Demo</span>
            <span className="rollup-duplicate">Book a Demo</span>
          </span>
        </button>
        <button className="btn btn-primary btn-small" style={{background:'white',border:'none'}}>Log in</button>
      </div>
    </header>
  )
}
