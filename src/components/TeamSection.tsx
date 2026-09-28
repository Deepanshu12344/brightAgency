import type { CSSProperties } from 'react'
import imageOne from '../../image1.jpg'
import imageTwo from '../../image2.jpg'

const reveal = (delay: string) => ({ '--reveal-delay': delay } as CSSProperties)

export default function TeamSection() {
  return (
    <section className="team-section" aria-labelledby="team-heading">
      <div className="team-copy team-copy-light team-section-reveal" style={reveal('0ms')}>
        <div>
          <p className="team-eyebrow">WORK WITH THE BEST</p>
          <span className="team-rule" />
        </div>
        <h2 id="team-heading" className="team-heading">
          <em>World-class talent</em><br />setting a higher<br />standard
        </h2>
        <div className="team-copy-bottom">
          <p className="team-lead">Work with elite designers, strategists, motion artists, copywriters, AI-trained creatives and more.</p>
          <p className="team-detail">Recruited from the world&apos;s leading brands and agencies, they bring deep craft, sharp judgment, and AI-first fluency to every project. A dedicated project manager ensures alignment, continuity, and momentum from brief to final delivery.</p>
          <a className="team-button" href="#">
            <span className="rollup-wrapper">
              <span className="rollup-original">Book a demo</span>
              <span className="rollup-duplicate">Book a demo</span>
            </span>
          </a>
        </div>
      </div>

      <div className="team-photo team-photo-portrait team-section-reveal" style={reveal('80ms')}>
        <img src={imageOne} alt="Bright creative team" />
      </div>
      <div className="team-photo team-photo-table team-section-reveal" style={reveal('170ms')}>
        <img src={imageTwo} alt="Creative team collaborating" />
      </div>

      <div className="team-copy team-copy-blue team-section-reveal" style={reveal('270ms')}>
        <div>
          <p className="team-eyebrow">SPEED AND SCALE ON SPEED DIAL</p>
          <span className="team-rule" />
        </div>
        <h2 className="team-heading">
          Your creative team <em>deserves<br />better than burnout</em>
        </h2>
        <div className="team-copy-bottom">
          <p className="team-lead">In-house creative teams are the beating heart of enterprise brands, but the endless demands and limited bandwidth mean even the best teams need a hand.</p>
          <p className="team-detail">There&apos;s a better way to ease your team&apos;s stress, and it&apos;s not another agency or more freelancers.</p>
          <a className="team-button" href="#">
            <span className="rollup-wrapper">
              <span className="rollup-original">Book a demo</span>
              <span className="rollup-duplicate">Book a demo</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
