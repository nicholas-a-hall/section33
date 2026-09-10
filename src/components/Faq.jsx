import { faq } from '../data/content.js'

const tagLabel = { enterprise: 'FRACTIONAL', local: 'LOCAL', both: 'BOTH' }

export default function Faq({ mode }) {
  const items = faq.filter((item) => item.track === 'both' || item.track === mode)
  return (
    <section id="faq">
      <div className="wrap">
        <div className="section-head">
          <span className="hud-num">05 // QUESTIONS</span>
          <h2>Questions people actually ask</h2>
        </div>
        <div className="faq-list">
          {items.map((item) => (
            <details className="faq-item" key={item.q}>
              <summary>
                {item.q}
                <span className="faq-tag">{tagLabel[item.track]}</span>
              </summary>
              <p>{item.a}</p>
              {item.list && (
                <ul>
                  {item.list.map((li) => (
                    <li key={li}>{li}</li>
                  ))}
                </ul>
              )}
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
