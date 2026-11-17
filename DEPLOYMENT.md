# Deploying EPR Bazaar Non-Ferrous Metal EPR to `nfm.eprbazaar.com` (GitHub → Hostinger)

This repository is ready for deployment to **`https://nfm.eprbazaar.com`** via **GitHub → Hostinger Web App** (both **Hostinger Node.js Web App** and **Hostinger Static Web Hosting** fallback are supported).

---

## 1. WhatsApp Form Divert (`+91 74391 03014`)
Whenever a visitor submits any enquiry form (Homepage Contact, Popup Modal, Applicant Pages, Schedule X Product Pages, Calculator, Fees, FAQs, or Contact Us):
1. All required fields and consent are validated cleanly.
2. When running on the Node.js Express backend, the enquiry is also saved to `data/enquiries.json` (and optionally sent via Meta WhatsApp Cloud API if server credentials are configured).
3. The live page diverts directly to **`https://wa.me/917439103014?text=...`** with every submitted field pre-formatted (Ref ID, Name, Company, Mobile, Email, City, State, Applicant Type, Metal Category, Quantity, Page Source, Enquiry Details), plus a fallback WhatsApp button & Copy button.

---

## 2. Hostinger DNS Setup for `nfm.eprbazaar.com`
1. In your Hostinger hPanel → **Domains → DNS / Nameservers** for `eprbazaar.com`:
   - Add the **A** record (or **CNAME** target) provided by your Hostinger Web App / Hosting plan for subdomain host **`nfm`**.
2. Enable **SSL (HTTPS)** for `nfm.eprbazaar.com` inside Hostinger hPanel.

---

## 3. Option A — Hostinger Node.js Web App (Recommended Full-Stack)
1. Push this project to a GitHub repository.
2. In Hostinger hPanel → **Websites → Add Website / Web App → Node.js (Import from GitHub)**:
   - **Domain / Subdomain**: `nfm.eprbazaar.com`
   - **Node.js Version**: `22.x` (required for `node server.ts`)
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `NODE_ENV=production npm start` (runs `node server.ts` on `process.env.PORT`)
3. Add **Environment Variables** in Hostinger Web App settings:
   - `NODE_ENV=production`
   - `SITE_BASE_URL=https://nfm.eprbazaar.com`
   - `VITE_SITE_URL=https://nfm.eprbazaar.com`
   - `VITE_WHATSAPP_REDIRECT_NUMBER=917439103014`
   - *(Optional GA4 & Search Console)* `VITE_GA4_MEASUREMENT_ID=G-XXXXXXXXXX` and `VITE_GSC_VERIFICATION_TOKEN=...`
   - *(Optional automated server-side Cloud API alerts)* `LEAD_WHATSAPP_TO`, `WHATSAPP_ACCESS_TOKEN`, `WHATSAPP_PHONE_NUMBER_ID`

---

## 4. Option B — Hostinger Static Hosting (`dist/` + `.htaccess`)
If deploying as a static Vite build via GitHub Integration / GitHub Actions to Hostinger Web Hosting (`public_html`):
1. Build command: `npm install && npm run build`
2. Publish directory: **`dist`**
3. Included `public/.htaccess` is copied automatically into `dist/.htaccess` to handle SPA routing (`/applicant-types/producer-p4/`, `/schedule-x-products/`, etc.), `301` redirects, `robots.txt`, and `sitemap.xml`. Form submissions gracefully skip the Node API and divert directly to WhatsApp **`+91 74391 03014`**.

---

## 5. Google Search Console Post-Launch Check
1. Open `https://nfm.eprbazaar.com/robots.txt` and `https://nfm.eprbazaar.com/sitemap.xml`.
2. Add property `https://nfm.eprbazaar.com` in Google Search Console and submit `https://nfm.eprbazaar.com/sitemap.xml`.
