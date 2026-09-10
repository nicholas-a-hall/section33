import { useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import TrackSection from './components/TrackSection.jsx'
import Faq from './components/Faq.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { enterprise, local } from './data/content.js'

const tracks = { enterprise, local }

export default function App() {
  const [mode, setMode] = useState('local')
  const track = tracks[mode]

  return (
    <div className={`app track-${mode}`}>
      <div className="bg-gradient" />

      <Header mode={mode} setMode={setMode} />
      <main>
        <Hero track={track} otherTrack={tracks[mode === 'local' ? 'enterprise' : 'local']} setMode={setMode} />
        <TrackSection track={track} />
        <Faq mode={mode} />
        <Contact track={track} otherTrack={tracks[mode === 'local' ? 'enterprise' : 'local']} setMode={setMode} />
      </main>
      <Footer />
    </div>
  )
}
