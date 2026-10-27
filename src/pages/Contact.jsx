import { useState } from 'react'
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi'
import { PageHero, Reveal } from '../components/Common.jsx'
import { SITE, IMG } from '../data.js'

export default function Contact() {
  const [f, setF] = useState({ name: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  const submit = (e) => {
    e.preventDefault()
    const body = encodeURIComponent(`Name: ${f.name}\nPhone: ${f.phone}\n\n${f.message}`)
    // Opens the visitor's email app. Replace with your own form backend if you prefer.
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent('Website enquiry')}&body=${body}`
    setSent(true)
  }
  const items = [
    [<FiMapPin />, 'Address', SITE.address],
    [<FiPhone />, 'Phone / WhatsApp', SITE.phone],
    [<FiMail />, 'Email', SITE.email],
    [<FiClock />, 'Open daily', SITE.hours],
  ]
  return (
    <>
      <PageHero title="Contact Us" image={IMG('mountains-2')} text="We are happy to help with bookings, timings and directions." />
      <section className="section">
        <div className="container contact-grid">
          <div className="contact-list">
            {items.map(([ic, t, v], i) => (
              <Reveal key={t} delay={i * 80}>
                <div className="contact-item"><div className="ic">{ic}</div><div><b>{t}</b><span>{v}</span></div></div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <form className="panel" onSubmit={submit}>
              <h3>Send us a message</h3>
              {sent && <div className="success">Thank you! Your email app has opened with your message. You can also reach us on WhatsApp.</div>}
              <div className="two">
                <div className="field"><label htmlFor="cn">Your name</label><input id="cn" required value={f.name} onChange={set('name')} /></div>
                <div className="field"><label htmlFor="cp">Phone</label><input id="cp" required value={f.phone} onChange={set('phone')} /></div>
              </div>
              <div className="field"><label htmlFor="cm">Message</label><textarea id="cm" rows={5} required value={f.message} onChange={set('message')} /></div>
              <button className="btn btn-primary" type="submit">Send Message</button>
            </form>
          </Reveal>
        </div>
      </section>
      <section style={{ paddingBottom: 96 }}>
        <div className="container"><div className="map">
          <iframe title="Map" loading="lazy" src="https://www.google.com/maps?q=Surkanda+Devi+Ropeway+Kaddukhal+Dhanaulti&output=embed" />
        </div></div>
      </section>
    </>
  )
}
