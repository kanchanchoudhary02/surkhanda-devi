# Surkanda Devi Ropeway – React Website

Multi-page React (Vite + React Router) website.

## Run
```
npm install
npm run dev        # local preview
npm run build      # production files in /dist
```

## Logo (important)
Replace `public/images/logo.png` with your real logo (same file name). Header, footer and favicon use it.
Also replace `public/favicon.png` with a small version of your logo.

## Colors
All colors are in `src/styles.css` under `:root` (--maroon, --saffron, --gold, --navy, --cream). Change them there to match your logo.

## Pages
Home, About, Ropeway, The Temple, Gallery (with lightbox), Plan Your Visit, Book Tickets, Contact, Privacy Policy, Refund Policy.

## Content / images
Text and image lists: `src/data.js` and the files in `src/pages/`. Photos are in `public/images/` (optimized WebP).

## Before going live
1. Booking: "Proceed to Payment" currently sends the booking request to your WhatsApp. Add your payment gateway in `src/pages/Booking.jsx` (see the TODO comment).
2. Contact form opens the visitor's email app. Connect a form backend if you want direct submissions.
3. Privacy and Refund policy text is a draft – paste your approved legal text in `src/pages/Policies.jsx`.
4. Social links (YouTube, Facebook, Instagram) are set in `src/data.js` under `SITE`.

## Deploy on cPanel
Upload everything inside `dist/` (including the hidden `.htaccess`) to `public_html`. The `.htaccess` makes page refresh work on every route.
