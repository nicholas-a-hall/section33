export default function TrackSection({ track }) {
  return (
    <div className={`track-${track.key}`} id={track.key}>
      <section id="services">
        <div className="wrap">
          <div className="section-head">
            <span className="hud-num">01 // SERVICES</span>
            <h2>Sound familiar?</h2>
          </div>
          <div className="grid-auto">
            {track.services.map((s) => (
              <div className="panel card panel-tight" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="proof">
        <div className="wrap">
          <div className="section-head">
            <span className="hud-num">02 // TRACK RECORD</span>
            <h2>{track.key === 'enterprise' ? 'Not theory' : "What I've actually built"}</h2>
          </div>
          <div className="proof-list">
            {track.proof.map((p) => (
              <div className="proof-item" key={p.title}>
                <span className="proof-tag">{p.tag}</span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                  {p.link && (
                    <a className="proof-link" href={p.link.href} target="_blank" rel="noopener">
                      {p.link.label} &rarr;
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="engagement">
        <div className="wrap">
          <div className="section-head">
            <span className="hud-num">03 // ENGAGEMENT</span>
            <h2>How it works</h2>
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
                      <h3>{t.title}</h3>
                      <p>{t.body}</p>
                      <span className="price">{t.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="grid-auto">
              {track.pricing.tiers.map((t) => (
                <div className="panel price-card panel-tight" key={t.title}>
                  <h3>{t.title}</h3>
                  <p>{t.body}</p>
                  <span className="price">{t.price}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
