export function HeroVisual({ src, alt = '' }) {
  if (!src) return null
  return (
    <div className="s33-hero-visual" aria-hidden={alt ? undefined : true}>
      <img src={src} alt={alt} decoding="async" />
    </div>
  )
}

export function MetricStrip({ items = [] }) {
  if (!items.length) return null
  return (
    <div className="s33-metric-strip" aria-label="Selected results">
      {items.map(({ value, label }) => (
        <div className="s33-metric" key={`${value}-${label}`}>
          <strong>{value}</strong>
          <span>{label}</span>
        </div>
      ))}
    </div>
  )
}

export function ProjectVisual({ src, alt = '' }) {
  if (!src) return null
  return (
    <div className="s33-project-visual">
      <img src={src} alt={alt} loading="lazy" decoding="async" />
    </div>
  )
}
