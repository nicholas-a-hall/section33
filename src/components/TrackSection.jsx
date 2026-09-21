import { HeroVisual, ProjectVisual } from './VisualBlocks.jsx'

export default function TrackSection({ track }) {
  return (
    <div className={`track-${track.key}`} id={track.key}>
      <section id="services">
        <div className="wrap">
          <div className="section-head">
            <span className="hud-num">01 // CAPABILITIES</span>
            <h2>{track.key === 'enterprise' ? 'Where I usually find leverage' : 'What kind of problem is it?'}</h2>
          </div>
          <div className="grid-auto service-grid">
            {track.services.map((s, i) => (
              <article className="panel card panel-tight service-card" key={s.title}>
                <span className="service-index">{String(i + 1).padStart(2, '0')}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="proof">
        <div className="wrap">
          <div className="section-head">
            <span className="hud-num">02 // BUILT & SHIPPED</span>
            <h2>{track.key === 'enterprise' ? 'Not theory' : "Things I've actually built"}</h2>
          </div>
          <div className="proof-grid">
            {track.proof.map((p) => (
              <article className={`panel proof-card ${p.visual ? 'proof-card-featured' : ''}`} key={p.title}>
                <ProjectVisual src={p.visual} alt={p.visual ? `${p.title} architecture sketch` : ''} />
                <span className="proof-tag">{p.tag}</span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
                {(p.url || p.link?.href) && (
                  <a className="proof-link" href={p.url || p.link.href} target="_blank" rel="noopener noreferrer">
                    {p.linkLabel || p.link?.label || 'Open project →'}
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="engagement">
        <div className="wrap engagement-layout">
          <div>
            <div className="section-head">
              <span className="hud-num">03 // HOW I WORK</span>
              <h2>{track.key === 'enterprise' ? 'Fix the pattern, not the symptom' : 'Start with the problem'}</h2>
            </div>
            <HeroVisual src={track.systemVisual} alt="Recurring pain becomes a reusable system and a better outcome" />
          </div>
          <div className="steps">
            {track.engagement.map((step, i) => (
              <div className="step" key={step.title}>
                <span className="step-num">{i + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                  {step.ownership && (
                    <div className="ownership-grid">
                      {step.ownership.map((o) => (
                        <div className="ownership-card" key={o.title}>
                          <h4>{o.title}</h4>
                          <p>{o.body}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing">
        <div className="wrap">
          <div className="section-head">
            <span className="hud-num">04 // PRICING</span>
            <h2>Pricing</h2>
            <p className="section-sub">{track.pricing.intro}</p>
          </div>
          {track.pricing.note && <div className="pricing-note">{track.pricing.note}</div>}
          {track.pricing.groups ? (
            track.pricing.groups.map((group) => (
              <div className="pricing-group" key={group.label}>
                <h3 className="pricing-group-label">{group.label}</h3>
                {group.blurb && <p className="pricing-group-blurb">{group.blurb}</p>}
                <div className="grid-auto">
                  {group.tiers.map((t) => (
                    <div className="panel price-card panel-tight" key={t.title}>
                      <h3>{t.title}</h3><p>{t.body}</p><span className="price">{t.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="grid-auto">
              {track.pricing.tiers.map((t) => (
                <div className="panel price-card panel-tight" key={t.title}>
                  <h3>{t.title}</h3><p>{t.body}</p><span className="price">{t.price}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
