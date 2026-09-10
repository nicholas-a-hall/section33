import { site, contact } from '../data/content.js'

export default function Contact({ track, otherTrack, setMode }) {
  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <div className="section-head">
          <span className="hud-num">06 // CONTACT</span>
          <h2>{contact.heading}</h2>
          <p className="section-sub">{contact.sub}</p>
        </div>
        <div className="contact-actions">
          <a className="btn btn-solid" href={`mailto:${site.email}?subject=${track.contactSubject}`}>
            {track.contactCta}
          </a>
          <button type="button" className="btn btn-ghost" onClick={() => setMode(otherTrack.key)}>
            Switch to {otherTrack.navLabel}
          </button>
        </div>
        <div className="contact-direct">{site.email}</div>
        <div className="socials">
          <a href={site.github} target="_blank" rel="noopener">GitHub</a>
          <a href={site.linkedin} target="_blank" rel="noopener">LinkedIn</a>
        </div>
      </div>
    </section>
  )
}
