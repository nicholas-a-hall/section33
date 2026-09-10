import { local, enterprise } from '../data/content.js'

export default function Header({ mode, setMode }) {
  const goTo = (id) => (e) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="site-header">
      <div className="wrap header-row">
        <a className="wordmark" href="#top" onClick={goTo('top')}>
          Section<span>33</span>
        </a>
        <div className="header-actions">
          <div className="mode-select">
            <span className="hud-label mode-select-label">Mode Select</span>
            <div className={`hud-toggle ${mode}`} role="tablist" aria-label="Mode select">
              <span className="hud-toggle-glow" />
              <button
                type="button"
                role="tab"
                aria-selected={mode === 'local'}
                className={`hud-toggle-opt${mode === 'local' ? ' active' : ''}`}
                onClick={() => setMode('local')}
              >
                <span className="hud-toggle-dot" />
                {local.navLabel}
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={mode === 'enterprise'}
                className={`hud-toggle-opt${mode === 'enterprise' ? ' active' : ''}`}
                onClick={() => setMode('enterprise')}
              >
                <span className="hud-toggle-dot" />
                {enterprise.navLabelShort}
              </button>
            </div>
          </div>
          <a className="btn btn-solid" href="#contact" onClick={goTo('contact')} style={{ padding: '9px 18px', fontSize: 12.5 }}>
            Contact
          </a>
        </div>
      </div>
    </header>
  )
}
