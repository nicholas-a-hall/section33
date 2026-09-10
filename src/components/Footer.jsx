import { footer } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-row">
        <span>{footer.left}</span>
        <span>{footer.right}</span>
      </div>
    </footer>
  )
}
