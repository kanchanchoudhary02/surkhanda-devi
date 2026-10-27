import { useMemo, useState } from 'react'
import { FiCalendar, FiCheck, FiUsers } from 'react-icons/fi'
import { PageHero, Reveal } from '../components/Common.jsx'
import { SITE, IMG } from '../data.js'

const today = () => new Date().toISOString().slice(0, 10)

export default function Booking() {
  const [f, setF] = useState({ name: '', phone: '', email: '', date: today(), qty: 1 })
  const [err, setErr] = useState('')
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })

  const sum = useMemo(() => {
    const q = Number(f.qty)
    const base = SITE.base * q, cgst = SITE.gst * q
    return { base, cgst, total: SITE.price * q }
  }, [f.qty])
  const money = (n) => `₹${n.toFixed(2)}`

  const submit = (e) => {
    e.preventDefault()
    if (f.name.trim().length < 2) return setErr('Please enter your full name.')
    if (!/^[6-9]\d{9}$/.test(f.phone.trim())) return setErr('Please enter a valid 10-digit mobile number.')
    if (f.date < today()) return setErr('Please choose today or a future date.')
    setErr('')
    // TODO: connect your payment gateway (Razorpay / PhonePe / CCAvenue) here.
    // Until then, the request is sent to the ticket desk on WhatsApp for confirmation.
    const msg = `Ropeway booking request%0AName: ${f.name}%0APhone: ${f.phone}%0AEmail: ${f.email || '-'}%0ADate: ${f.date}%0ATickets: ${f.qty}%0ATotal: ₹${sum.total}`
    window.open(`https://wa.me/${SITE.phoneRaw}?text=${msg}`, '_blank', 'noopener')
  }

  return (
    <>
      <PageHero title="Book Ropeway Tickets" crumb="Book Tickets" image={IMG('cabins-blue-sky')} text="Price per ticket: ₹225 (inclusive of GST)." />
      <section className="section">
        <div className="container booking">
          <Reveal>
            <form className="panel" onSubmit={submit} noValidate>
              <h3><FiUsers /> Booking details</h3>
              <div className="note"><b>Note:</b> Please carry a valid ID proof and show your e-ticket at the counter.</div>
              {err && <div className="note" style={{ background: '#fdecea', borderColor: '#d33', color: '#8a1f1f' }}>{err}</div>}
              <div className="field"><label htmlFor="n">Full name</label><input id="n" value={f.name} onChange={set('name')} placeholder="As on your ID" /></div>
              <div className="two">
                <div className="field"><label htmlFor="p">Mobile number</label><input id="p" inputMode="numeric" maxLength={10} value={f.phone} onChange={set('phone')} placeholder="10-digit number" /></div>
                <div className="field"><label htmlFor="e">Email (optional)</label><input id="e" type="email" value={f.email} onChange={set('email')} placeholder="you@example.com" /></div>
              </div>
              <div className="two">
                <div className="field"><label htmlFor="d"><FiCalendar style={{ verticalAlign: '-2px' }} /> Visit date</label><input id="d" type="date" min={today()} value={f.date} onChange={set('date')} /></div>
                <div className="field"><label htmlFor="q">Number of tickets</label>
                  <select id="q" value={f.qty} onChange={set('qty')}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => <option key={n} value={n}>{n} Ticket{n > 1 ? 's' : ''}</option>)}
                  </select>
                </div>
              </div>
              <button className="btn btn-primary" type="submit" style={{ width: '100%', justifyContent: 'center' }}>Proceed to Payment</button>
            </form>
          </Reveal>
          <Reveal delay={120}>
            <div className="panel summary">
              <h3>Price summary</h3>
              <div className="row"><span>Ropeway ticket</span><span>₹{SITE.base} × {f.qty}</span></div>
              <div className="row"><span>Subtotal</span><span>{money(sum.base)}</span></div>
              <div className="row"><span>CGST (2.5%)</span><span>{money(sum.cgst)}</span></div>
              <div className="row"><span>SGST (2.5%)</span><span>{money(sum.cgst)}</span></div>
              <div className="row total"><span>Total amount</span><span>₹{sum.total.toFixed(2)}</span></div>
              <ul>
                <li><FiCheck /> Two-way ropeway ride included</li>
                <li><FiCheck /> Valid for the selected date only</li>
                <li><FiCheck /> Carry a valid ID proof</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
