export const SITE = {
  name: 'Surkanda Devi Ropeway',
  company: 'Surkanda Devi Ropeway Project Pvt. Ltd.',
  phone: '+91 98710 04053',
  phoneRaw: '919871004053',
  email: 'info@surkandadevi.com',
  address: 'Kaddukhal, Dhanaulti, Tehri Garhwal, Uttarakhand – 249145',
  hours: '7:00 AM – 5:00 PM',
  gstin: '05AASCS5830P1ZL',
  youtube: 'https://youtu.be/nwMNP24f7xY',
  youtubeEmbed: 'https://www.youtube.com/embed/nwMNP24f7xY',
  facebook: 'https://www.facebook.com/share/r/1D3RQicFAv/',
  instagram: 'https://www.instagram.com/reel/De80lhNE7Xy/?utm_source=ig_web_copy_link&xtok=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==',
  price: 225,
  base: 214.28,
  gst: 5.36,
}

export const IMG = (n) => `/images/${n}.webp`

export const NAV = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/ropeway', label: 'Ropeway' },
  { to: '/temple', label: 'The Temple' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/plan-your-visit', label: 'Plan Your Visit' },
  { to: '/contact', label: 'Contact' },
]

export const FEATURES = [
  { icon: 'clock', title: '5-Minute Journey', text: 'A climb that once took nearly two hours on foot now takes just five minutes in a comfortable cabin.' },
  { icon: 'shield', title: 'Safety First', text: 'Modern safety systems, trained operators and regular inspections on every single run.' },
  { icon: 'mountain', title: 'Himalayan Views', text: 'Glide above pine forests with sweeping views of the Garhwal Himalayas all the way up.' },
  { icon: 'users', title: 'For Every Age', text: 'Elderly pilgrims, families with children and differently-abled devotees can all reach the temple with ease.' },
  { icon: 'sun', title: 'Year-Round Darshan', text: 'Reach the temple in any season, with operating hours adjusted for summer and winter.' },
  { icon: 'ticket', title: 'Simple Booking', text: 'Book online in under a minute, carry your e-ticket and walk straight to the counter.' },
]

export const STEPS = [
  { n: '01', title: 'Book Your Ticket', text: 'Choose your date and number of tickets on our booking page.' },
  { n: '02', title: 'Reach Kaddukhal', text: 'Drive to the ropeway base station on the Mussoorie–Chamba road.' },
  { n: '03', title: 'Ride the Ropeway', text: 'Show your e-ticket and ID, then enjoy a 5-minute scenic ride.' },
  { n: '04', title: 'Seek Darshan', text: 'A short walk from the upper station brings you to Ma Surkanda Devi.' },
]

export const FAQS = [
  { q: 'How long is the ropeway ride?', a: 'The ride covers 502 metres from Kaddukhal towards the temple summit and takes about 5 minutes each way.' },
  { q: 'What is the ticket price?', a: 'A ticket costs ₹225 per person, inclusive of GST, and covers a two-way ride for the selected date.' },
  { q: 'What should I carry?', a: 'Please carry a valid photo ID and show your e-ticket (on your phone or printed) at the counter.' },
  { q: 'What are the operating hours?', a: 'Summer (Apr–Oct): 7:00 AM – 6:00 PM. Winter (Nov–Mar): 8:00 AM – 5:00 PM. Timings may change with weather conditions.' },
  { q: 'Is the ropeway suitable for senior citizens and children?', a: 'Yes. The ropeway is designed for all age groups and makes the temple accessible to elderly and differently-abled pilgrims.' },
  { q: 'Is the ropeway open in bad weather?', a: 'For safety, operations may be paused during strong winds, storms or heavy snow. Please call us on the day of travel if the weather looks uncertain.' },
]

export const GALLERY = [
  { src: 'temple-front', cap: 'Ma Surkanda Devi Temple', cat: 'Temple' },
  { src: 'hero-mountains', cap: 'Morning light over the Garhwal ranges', cat: 'Himalayas' },
  { src: 'cabin-blue-big', cap: 'Ropeway cabins at the station', cat: 'Ropeway' },
  { src: 'temple-gate', cap: 'The gateway on the path to the temple', cat: 'Temple' },
  { src: 'cabin-yellow-big', cap: 'Yellow cabins amid the deodar forest', cat: 'Ropeway' },
  { src: 'mountains-3', cap: 'Layers of misty ridges', cat: 'Himalayas' },
  { src: 'temple-side', cap: 'The shrine adorned with marigold garlands', cat: 'Temple' },
  { src: 'cabin-blue', cap: 'Cabins ready for departure', cat: 'Ropeway' },
  { src: 'mountains-2', cap: 'Sunrise haze in the valley', cat: 'Himalayas' },
  { src: 'temple-top', cap: 'The tiered roof of the sanctum', cat: 'Temple' },
  { src: 'cabins-blue-line', cap: 'Cabins climbing the line', cat: 'Ropeway' },
  { src: 'cabin-yellow-tower', cap: 'A cabin passing a support tower', cat: 'Ropeway' },
  { src: 'temple-crowd', cap: 'Devotees at the temple courtyard', cat: 'Temple' },
  { src: 'tower-view', cap: 'High above Kaddukhal', cat: 'Ropeway' },
  { src: 'mountains-4', cap: 'Himalayan haze at golden hour', cat: 'Himalayas' },
  { src: 'temple-gate2', cap: 'Steps leading up to the shrine', cat: 'Temple' },
]
