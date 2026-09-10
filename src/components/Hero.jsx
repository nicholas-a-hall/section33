export default function Hero({ track, otherTrack, setMode }) {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div className="hero-eyebrow-row">
          <span className="hud-label">{track.eyebrow}</span>
          <span className="chip">{track.modeChip}</span>
        </div>
        <h1>{track.heading}</h1>
        <p className="hero-sub">{track.sub}</p>

        <div className="panel" style={{ maxWidth: 560, marginTop: 8 }}>
          <h3 style={{ marginBottom: 8 }}>{track.heroCard.title}</h3>
          <p style={{ margin: 0 }}>{track.heroCard.body}</p>
        </div>

        <div className="hero-actions">
          <a className="btn btn-solid" href="#pricing" onClick={(e) => { e.preventDefault(); document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' }) }}>
            See pricing &rarr;
          </a>
          <button type="button" className="btn btn-ghost" onClick={() => setMode(otherTrack.key)}>
            Switch to {otherTrack.navLabel} &rarr;
          </button>
        </div>
      </div>
    </section>
  )
}
