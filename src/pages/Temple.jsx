import { Link } from 'react-router-dom'
import { FiCheckCircle } from 'react-icons/fi'
import { PageHero, Reveal, SectionHead, BookingBanner } from '../components/Common.jsx'
import { IMG } from '../data.js'

export default function Temple() {
  return (
    <>
      <PageHero title="Ma Surkanda Devi Temple" crumb="The Temple" image={IMG('temple-front')} text="A sacred Shakti Peeth crowning the ridge above Dhanaulti." />

      <section className="section">
        <div className="container split">
          <Reveal className="copy">
            <span className="eyebrow">Sacred history</span>
            <h2>Where the Goddess is worshipped on the mountain top</h2>
            <p>Surkanda Devi Temple sits at 2,756 metres in the Tehri Garhwal region, close to Kanatal. It is dedicated to Goddess Parvati as Sati and is counted among the 51 Shakti Peethas.</p>
            <p>Tradition holds that the head of Sati fell on this hill after Lord Shiva carried her body across the heavens, giving the place its name. Devotees believe the Goddess here fulfils sincere wishes.</p>
            <ul className="ticks">
              <li><FiCheckCircle /> One of the 51 Shakti Peethas</li>
              <li><FiCheckCircle /> Dedicated to Goddess Parvati (Sati)</li>
              <li><FiCheckCircle /> Ganga Dussehra is celebrated with great devotion</li>
            </ul>
          </Reveal>
          <Reveal delay={120} className="media">
            <div className="frame tall"><img src={IMG('temple-top')} alt="Tiered roof of Surkanda Devi Temple" loading="lazy" /></div>
          </Reveal>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <SectionHead eyebrow="Inside the complex" title="What you will see" />
          <div className="cards">
            {[
              ['temple-gate', 'The Gateway', 'A red stone arch strung with marigold garlands marks the path towards the shrine.'],
              ['temple-side', 'The Sanctum', 'A grey-stone shrine with tiered roofs, decorated with fresh flowers and the sacred Om.'],
              ['mountains-2', 'The Panorama', 'On clear days, the summit opens to long views across the Himalayan ranges.'],
            ].map(([img, t, d], i) => (
              <Reveal key={t} delay={i * 90}>
                <div className="card" style={{ padding: 12 }}>
                  <img src={IMG(img)} alt={t} loading="lazy" style={{ borderRadius: 10, height: 250, width: '100%', objectFit: 'cover' }} />
                  <div style={{ padding: '20px 14px 10px' }}><h3 style={{ marginBottom: 8 }}>{t}</h3><p>{d}</p></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="quote">
              <span className="eyebrow" style={{ color: '#f6c46b' }}>Ganga Dussehra</span>
              <h2>A festival of faith that fills the hills</h2>
              <p>Every year around Ganga Dussehra, pilgrims from across Uttarakhand and beyond gather here for a grand fair and special worship. The ropeway makes it easier to join the celebration.</p>
              <Link to="/plan-your-visit" className="btn btn-primary" style={{ marginTop: 26 }}>Plan Your Visit</Link>
            </div>
          </Reveal>
        </div>
      </section>
      <section style={{ padding: '0 0 96px' }}><BookingBanner image={IMG('cabin-yellow-tower')} /></section>
    </>
  )
}
