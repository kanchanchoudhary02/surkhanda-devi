import { PageHero } from '../components/Common.jsx'
import { SITE, IMG } from '../data.js'

function Wrap({ title, children }) {
  return (
    <>
      <PageHero title={title} image={IMG('mountains-3')} />
      <section className="section"><div className="container"><div className="policy">{children}</div></div></section>
    </>
  )
}

export function Privacy() {
  return (
    <Wrap title="Privacy Policy">
      <p>{SITE.company} respects your privacy. This page explains what information we collect and how we use it. (Please replace with your final legal text if you already have one.)</p>
      <h3>Information we collect</h3>
      <ul><li>Name, mobile number and email you provide when booking or contacting us</li><li>Booking details such as visit date and number of tickets</li></ul>
      <h3>How we use it</h3>
      <ul><li>To confirm and manage your ropeway booking</li><li>To respond to your enquiries</li><li>To share important updates about your visit, such as weather closures</li></ul>
      <h3>Sharing</h3>
      <p>We do not sell your personal information. Payment details are handled by our payment partner and are not stored on this website.</p>
      <h3>Contact</h3>
      <p>For privacy questions, write to {SITE.email}.</p>
    </Wrap>
  )
}

export function Refund() {
  return (
    <Wrap title="Refund Policy">
      <p>Please read this policy before booking. (Replace with your final approved terms if they differ.)</p>
      <h3>Weather and operational closures</h3>
      <p>If the ropeway is closed for safety reasons such as storms or strong winds, you can reschedule or request a refund for unused tickets.</p>
      <h3>Customer cancellations</h3>
      <p>Tickets are valid only for the selected date. Please contact us before your visit date to request any change.</p>
      <h3>Refund process</h3>
      <p>Approved refunds are returned to the original payment method. Contact {SITE.email} or {SITE.phone} with your booking details.</p>
    </Wrap>
  )
}
