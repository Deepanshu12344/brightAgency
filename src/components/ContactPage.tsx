import { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'

const services = ['Brand strategy', 'Campaign creative', 'AI content systems', 'Digital experiences']

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    document.body.classList.add('contact-page-active')
    return () => document.body.classList.remove('contact-page-active')
  }, [])

  return (
    <main className="contact-page">
      <Header />
      <section className="contact-hero" aria-labelledby="contact-title">
        <div className="contact-intro contact-enter">
          <p className="contact-kicker">LET&apos;S MAKE SOMETHING ICONIC</p>
          <span className="contact-rule" />
          <h1 id="contact-title">Bring us your<br /><em>biggest brief.</em></h1>
          <p className="contact-summary">Tell us where your brand wants to go. We pair sharp creative thinking with AI-powered production to help ambitious teams move at a different speed.</p>
          <div className="contact-details">
            <a href="mailto:hello@bright.agency">hello@bright.agency</a>
            <span>Worldwide · Built for ambitious teams</span>
          </div>
          <p className="contact-display" aria-hidden="true">BRIGHT</p>
        </div>

        <div className="contact-form-shell contact-enter">
          {submitted ? (
            <div className="contact-success">
              <p className="contact-kicker">MESSAGE RECEIVED</p>
              <h2>We&apos;re on it.</h2>
              <p>Thanks for sharing your brief. Our team will be in touch shortly.</p>
              <button className="contact-submit" type="button" onClick={() => setSubmitted(false)}>Send another inquiry</button>
            </div>
          ) : (
            <form
              className="contact-form"
              action="https://formspree.io/f/mrpbrzlp"
              method="POST"
              onSubmit={async (event) => {
                event.preventDefault()
                setError('')
                setIsSubmitting(true)

                try {
                  const response = await fetch(event.currentTarget.action, {
                    method: 'POST',
                    body: new FormData(event.currentTarget),
                    headers: { Accept: 'application/json' },
                  })
                  if (!response.ok) throw new Error('Form submission failed')
                  event.currentTarget.reset()
                  setSubmitted(true)
                } catch {
                  setError('Something went wrong. Please email us directly at hello@bright.agency.')
                } finally {
                  setIsSubmitting(false)
                }
              }}
            >
              <div className="contact-form-heading">
                <p className="contact-kicker">START A CONVERSATION</p>
                <h2>Tell us a little about the opportunity.</h2>
              </div>
              <div className="contact-field-grid">
                <label>YOUR NAME<input name="name" autoComplete="name" required placeholder="Name" /></label>
                <label>WORK EMAIL<input name="email" type="email" autoComplete="email" required placeholder="you@company.com" /></label>
                <label>COMPANY<input name="company" autoComplete="organization" required placeholder="Company name" /></label>
                <label>WEBSITE <span>OPTIONAL</span><input name="website" type="url" placeholder="https://" /></label>
              </div>
              <fieldset className="contact-services">
                <legend>WHAT CAN WE HELP WITH?</legend>
                <div>
                  {services.map((service) => <label key={service}><input type="checkbox" name="services" value={service} /><span>{service}</span></label>)}
                </div>
              </fieldset>
              <div className="contact-field-grid">
                <label>ESTIMATED BUDGET<select name="budget" required defaultValue=""><option value="" disabled>Select a range</option><option>$10k–$25k</option><option>$25k–$50k</option><option>$50k–$100k</option><option>$100k+</option></select></label>
                <label>IDEAL START<select name="timeline" required defaultValue=""><option value="" disabled>Select timing</option><option>As soon as possible</option><option>Within 1–2 months</option><option>Later this quarter</option><option>Just exploring</option></select></label>
              </div>
              <label className="contact-message">TELL US ABOUT THE PROJECT<textarea name="message" required rows={4} placeholder="What are you looking to make possible?" /></label>
              {error && <p className="contact-error" role="alert">{error}</p>}
              <button className="contact-submit" type="submit" disabled={isSubmitting}><span className="rollup-wrapper"><span className="rollup-original">{isSubmitting ? 'Sending…' : 'Send inquiry'}</span><span className="rollup-duplicate">{isSubmitting ? 'Sending…' : 'Send inquiry'}</span></span></button>
            </form>
          )}
        </div>
      </section>
      <Footer className="contact-footer" />
    </main>
  )
}
