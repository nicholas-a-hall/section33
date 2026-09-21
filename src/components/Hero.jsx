import { HeroVisual, MetricStrip } from './VisualBlocks.jsx'

export default function Hero({ track, otherTrack, setMode }) {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div className="hero-eyebrow-row">
          <span className="hud-label">{track.eyebrow}</span>
          <span className="chip">{track.modeChip}</span>
        </div>

        <div className="hero-grid">
          <div className="hero-copy">
            <h1>{track.heading}</h1>
            <p className="hero-sub">{track.sub}</p>
            <div className="hero-actions">
              <a className="btn btn-solid" href="#proof" onClick={(e) => { e.preventDefault(); document.getElementById('proof')?.scrollIntoView({ behavior: 'smooth' }) }}>
                See what I've built &rarr;
              </a>
              <button type="button" className="btn btn-ghost" onClick={() => setMode(otherTrack.key)}>
                Switch to {otherTrack.navLabel} &rarr;
              </button>
            </div>
          </div>
          <div className="hero-side">
            <HeroVisual src={track.heroVisual} alt={track.heroVisualAlt} />
            <div className="panel hero-card">
              <h3>{track.heroCard.title}</h3>
              <p>{track.heroCard.body}</p>
            </div>
          </div>
        </div>

        <MetricStrip items={track.stats} />
      </div>
    </section>
  )
}
