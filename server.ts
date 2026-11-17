import 'dotenv/config';
import express, { type Request, type Response } from 'express';
import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = Number(process.env.PORT || 3000);
const HOST = '0.0.0.0';
const SITE_BASE_URL = (process.env.SITE_BASE_URL || 'https://nfm.eprbazaar.com').replace(/\/+$/, '');
const DATA_DIR = path.resolve(__dirname, 'data');
const ENQUIRIES_FILE = path.join(DATA_DIR, 'enquiries.json');

const LEGACY_REDIRECTS: Record<string, string> = {
  '/non-ferrous-metal-epr': '/',
  '/non-ferrous-metal-epr/': '/',
  '/manufacturer-non-ferrous-metals-epr': '/applicant-types/manufacturer/',
  '/manufacturer-non-ferrous-metals-epr/': '/applicant-types/manufacturer/',
  '/producer-p1-own-manufacturing-branding': '/applicant-types/producer-p1/',
  '/producer-p1-own-manufacturing-branding/': '/applicant-types/producer-p1/',
  '/producer-p2-outsourced-manufacturing-branding': '/applicant-types/producer-p2/',
  '/producer-p2-outsourced-manufacturing-branding/': '/applicant-types/producer-p2/',
  '/producer-p3-imported-products': '/applicant-types/producer-p3/',
  '/producer-p3-imported-products/': '/applicant-types/producer-p3/',
  '/producer-p4-imported-scrap-non-ferrous-metals': '/applicant-types/producer-p4/',
  '/producer-p4-imported-scrap-non-ferrous-metals/': '/applicant-types/producer-p4/',
  '/refurbisher-non-ferrous-metals-epr': '/applicant-types/refurbisher/',
  '/refurbisher-non-ferrous-metals-epr/': '/applicant-types/refurbisher/',
  '/collection-agent-non-ferrous-metals-epr': '/applicant-types/collection-agent/',
  '/collection-agent-non-ferrous-metals-epr/': '/applicant-types/collection-agent/',
  '/recycler-non-ferrous-metals-epr': '/applicant-types/recycler/',
  '/recycler-non-ferrous-metals-epr/': '/applicant-types/recycler/',
};

const CANONICAL_SITEMAP_ENTRIES: Array<{ path: string; priority: string; changefreq: string }> = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/applicant-types/', priority: '0.9', changefreq: 'weekly' },
  { path: '/applicant-types/manufacturer/', priority: '0.85', changefreq: 'monthly' },
  { path: '/applicant-types/producer-p1/', priority: '0.85', changefreq: 'monthly' },
  { path: '/applicant-types/producer-p2/', priority: '0.85', changefreq: 'monthly' },
  { path: '/applicant-types/producer-p3/', priority: '0.85', changefreq: 'monthly' },
  { path: '/applicant-types/producer-p4/', priority: '0.9', changefreq: 'monthly' },
  { path: '/applicant-types/refurbisher/', priority: '0.85', changefreq: 'monthly' },
  { path: '/applicant-types/collection-agent/', priority: '0.85', changefreq: 'monthly' },
  { path: '/applicant-types/recycler/', priority: '0.9', changefreq: 'monthly' },
  { path: '/schedule-x-products/', priority: '0.9', changefreq: 'weekly' },
  { path: '/schedule-x-products/beverage-aerosol-cans/', priority: '0.8', changefreq: 'monthly' },
  { path: '/schedule-x-products/packaging-foils/', priority: '0.8', changefreq: 'monthly' },
  { path: '/schedule-x-products/doors-windows-shutters/', priority: '0.8', changefreq: 'monthly' },
  { path: '/schedule-x-products/aluminium-composite-panels/', priority: '0.8', changefreq: 'monthly' },
  { path: '/schedule-x-products/aluminium-partitions-grills/', priority: '0.8', changefreq: 'monthly' },
  { path: '/schedule-x-products/utensils-cookware/', priority: '0.8', changefreq: 'monthly' },
  { path: '/schedule-x-products/furniture-hardware/', priority: '0.8', changefreq: 'monthly' },
  { path: '/schedule-x-products/roofing-ceiling-sheets/', priority: '0.8', changefreq: 'monthly' },
  { path: '/schedule-x-products/motors-pumps-alternators/', priority: '0.8', changefreq: 'monthly' },
  { path: '/schedule-x-products/conductor-cables-wires-strips/', priority: '0.8', changefreq: 'monthly' },
  { path: '/schedule-x-products/sanitary-ware-fittings/', priority: '0.8', changefreq: 'monthly' },
  { path: '/schedule-x-products/electrical-fittings/', priority: '0.8', changefreq: 'monthly' },
  { path: '/schedule-x-products/aluminium-alloy-bicycles/', priority: '0.8', changefreq: 'monthly' },
  { path: '/schedule-x-products/transformers/', priority: '0.8', changefreq: 'monthly' },
  { path: '/schedule-x-products/electric-generator-sets/', priority: '0.8', changefreq: 'monthly' },
  { path: '/schedule-x-products/centralised-air-conditioning-plants/', priority: '0.8', changefreq: 'monthly' },
  { path: '/schedule-x-products/apparel-products-buckles-zips-shoes/', priority: '0.8', changefreq: 'monthly' },
  { path: '/schedule-x-products/toys/', priority: '0.8', changefreq: 'monthly' },
  { path: '/aluminium-epr-registration/', priority: '0.9', changefreq: 'monthly' },
  { path: '/copper-epr-registration/', priority: '0.9', changefreq: 'monthly' },
  { path: '/zinc-epr-registration/', priority: '0.9', changefreq: 'monthly' },
  { path: '/epr-certificate-calculator/', priority: '0.85', changefreq: 'monthly' },
  { path: '/registration-fees/', priority: '0.85', changefreq: 'monthly' },
  { path: '/non-ferrous-metal-epr-faq/', priority: '0.9', changefreq: 'monthly' },
  { path: '/contact/', priority: '0.8', changefreq: 'monthly' },
];

const ALLOWED_APPLICANT_TYPES = new Set([
  'Manufacturer',
  'Producer (P1) - Own Manufacturing & Own Branding',
  'Producer (P2) - Outsourced Manufacturing & Own Branding',
  'Producer (P3) - Imported Products',
  'Producer (P4) - Imported Used Devices or Products or Scrap of Non Ferrous Metals',
  'Refurbisher',
  'Collection Agent',
  'Recycler',
]);

const ALLOWED_METAL_CATEGORIES = new Set([
  'Aluminium',
  'Copper',
  'Zinc',
  'Mixed Non-Ferrous Metals',
  'Other/Not Sure',
]);

interface StoredEnquiry {
  enquiryId: string;
  dedupHash: string;
  fullName: string;
  companyName: string;
  mobile: string;
  email: string;
  state: string;
  city: string;
  applicantType: string;
  metalCategory: string;
  quantity: string;
  pageSource: string;
  enquiryDetails: string;
  consentAccepted: boolean;
  submittedAtIso: string;
  submittedAtIst: string;
}

// Simple in-memory IP rate limit store (6 requests per 15 min)
const rateLimitMap = new Map<string, number[]>();
const RATE_WINDOW_MS = 15 * 60 * 1000;
const RATE_MAX_REQUESTS = 6;

// Sequential write queue to avoid concurrent JSON corruption
let writeQueue: Promise<void> = Promise.resolve();

function sanitizeText(value: unknown, maxLen: number): string {
  if (typeof value !== 'string') return '';
  return value
    .replace(/[\u0000-\u001F\u007F]/g, ' ')
    .replace(/[<>]/g, '')
    .trim()
    .slice(0, maxLen);
}

function getClientIp(req: Request): string {
  const forwarded = req.headers['x-forwarded-for'];
  if (typeof forwarded === 'string' && forwarded.length > 0) {
    return forwarded.split(',')[0].trim();
  }
  return req.socket.remoteAddress || 'unknown';
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const timestamps = (rateLimitMap.get(ip) || []).filter((ts) => now - ts < RATE_WINDOW_MS);
  if (timestamps.length >= RATE_MAX_REQUESTS) {
    rateLimitMap.set(ip, timestamps);
    return false;
  }
  timestamps.push(now);
  rateLimitMap.set(ip, timestamps);
  return true;
}

async function readStoredEnquiries(): Promise<StoredEnquiry[]> {
  try {
    const raw = await fs.readFile(ENQUIRIES_FILE, 'utf8');
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as StoredEnquiry[]) : [];
  } catch {
    return [];
  }
}

async function writeStoredEnquiries(records: StoredEnquiry[]): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  const tempPath = `${ENQUIRIES_FILE}.${crypto.randomUUID()}.tmp`;
  await fs.writeFile(tempPath, JSON.stringify(records, null, 2), 'utf8');
  await fs.rename(tempPath, ENQUIRIES_FILE);
}

function enqueuePersist(operation: () => Promise<void>): Promise<void> {
  writeQueue = writeQueue.then(operation, operation);
  return writeQueue;
}

function formatIstTimestamp(date: Date): string {
  return new Intl.DateTimeFormat('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(date);
}

async function createServer() {
  const app = express();
  app.disable('x-powered-by');
  app.use((_req: Request, res: Response, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    next();
  });
  app.use(express.json({ limit: '32kb' }));

  app.get('/robots.txt', (_req: Request, res: Response) => {
    res.type('text/plain; charset=utf-8').send(
      [
        'User-agent: *',
        'Allow: /',
        'Disallow: /api/',
        '',
        `Sitemap: ${SITE_BASE_URL}/sitemap.xml`,
      ].join('\n')
    );
  });

  app.get('/sitemap.xml', (_req: Request, res: Response) => {
    const urlsXml = CANONICAL_SITEMAP_ENTRIES.map(
      (entry) =>
        `  <url>\n    <loc>${SITE_BASE_URL}${entry.path}</loc>\n    <changefreq>${entry.changefreq}</changefreq>\n    <priority>${entry.priority}</priority>\n  </url>`
    ).join('\n');

    res
      .type('application/xml; charset=utf-8')
      .send(
        `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlsXml}\n</urlset>\n`
      );
  });

  // 301 redirects from legacy /non-ferrous-metal-epr/* and flat URLs to clean subdomain root paths
  app.use((req: Request, res: Response, next) => {
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      next();
      return;
    }
    const target = LEGACY_REDIRECTS[req.path];
    if (target) {
      res.redirect(301, target);
      return;
    }
    if (req.path.startsWith('/non-ferrous-metal-epr/')) {
      const stripped = req.path.replace('/non-ferrous-metal-epr', '') || '/';
      const normalized = stripped.endsWith('/') ? stripped : `${stripped}/`;
      res.redirect(301, normalized);
      return;
    }
    next();
  });

  app.get('/api/health', (_req: Request, res: Response) => {
    res.json({ status: 'ok' });
  });

  app.post('/api/enquiries', async (req: Request, res: Response) => {
    const clientIp = getClientIp(req);
    if (!checkRateLimit(clientIp)) {
      res.status(429).json({
        ok: false,
        error: 'Too many submissions from this network. Please wait a few minutes and try again.',
      });
      return;
    }

    const body = (req.body || {}) as Record<string, unknown>;

    // Silent honeypot spam rejection
    if (typeof body.website === 'string' && body.website.trim().length > 0) {
      res.status(200).json({
        ok: true,
        enquiryId: 'EPR-SPAM-FILTERED',
        notificationStatus: 'queued',
        message: 'Thank you. Your submission has been received.',
      });
      return;
    }

    const fullName = sanitizeText(body.fullName, 100);
    const companyName = sanitizeText(body.companyName, 140);
    const mobile = sanitizeText(body.mobile, 24);
    const email = sanitizeText(body.email, 140).toLowerCase();
    const state = sanitizeText(body.state, 80);
    const city = sanitizeText(body.city, 80);
    const applicantType = sanitizeText(body.applicantType, 120);
    const metalCategory = sanitizeText(body.metalCategory, 80);
    const quantity = sanitizeText(body.quantity, 80);
    const pageSource = sanitizeText(body.pageSource, 180) || '/';
    const enquiryDetails = sanitizeText(body.enquiryDetails, 1200);
    const consentAccepted = body.consentAccepted === true;

    const validationErrors: Record<string, string> = {};
    if (fullName.length < 2) validationErrors.fullName = 'Full Name is required.';
    if (companyName.length < 2) validationErrors.companyName = 'Company Name is required.';

    const mobileDigits = mobile.replace(/\D/g, '');
    if (mobileDigits.length < 10 || mobileDigits.length > 15) {
      validationErrors.mobile = 'Valid Mobile number (10–15 digits) is required.';
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      validationErrors.email = 'Valid Email address is required.';
    }

    if (state.length < 2) validationErrors.state = 'State is required.';
    if (city.length < 2) validationErrors.city = 'City is required.';

    if (!ALLOWED_APPLICANT_TYPES.has(applicantType)) {
      validationErrors.applicantType = 'Select a valid CPCB Applicant Type.';
    }

    if (!ALLOWED_METAL_CATEGORIES.has(metalCategory)) {
      validationErrors.metalCategory = 'Select a valid Metal Category.';
    }

    if (quantity.length < 1) {
      validationErrors.quantity = 'Specify estimated Monthly or Annual Quantity.';
    }

    if (!consentAccepted) {
      validationErrors.consentAccepted = 'Explicit privacy and compliance communication consent is required.';
    }

    if (Object.keys(validationErrors).length > 0) {
      res.status(400).json({
        ok: false,
        error: 'Please correct the highlighted fields.',
        validationErrors,
      });
      return;
    }

    const now = new Date();
    const dedupHash = crypto
      .createHash('sha256')
      .update(`${email}|${mobileDigits}|${applicantType}|${metalCategory}|${enquiryDetails}`)
      .digest('hex');

    let duplicateEnquiry: StoredEnquiry | undefined;
    const existing = await readStoredEnquiries();
    const tenMinutesAgo = now.getTime() - 10 * 60 * 1000;
    duplicateEnquiry = existing.find(
      (item) =>
        item.dedupHash === dedupHash &&
        new Date(item.submittedAtIso).getTime() >= tenMinutesAgo
    );

    if (duplicateEnquiry) {
      res.status(200).json({
        ok: true,
        duplicate: true,
        enquiryId: duplicateEnquiry.enquiryId,
        notificationStatus: 'saved',
        message: `Your enquiry was already recorded under reference ${duplicateEnquiry.enquiryId}.`,
      });
      return;
    }

    const enquiryId = `EPR-NFM-${now.getFullYear().toString().slice(-2)}${String(
      now.getMonth() + 1
    ).padStart(2, '0')}-${crypto.randomBytes(3).toString('hex').toUpperCase()}`;

    const newRecord: StoredEnquiry = {
      enquiryId,
      dedupHash,
      fullName,
      companyName,
      mobile,
      email,
      state,
      city,
      applicantType,
      metalCategory,
      quantity,
      pageSource,
      enquiryDetails,
      consentAccepted,
      submittedAtIso: now.toISOString(),
      submittedAtIst: formatIstTimestamp(now),
    };

    // Persist enquiry safely
    await enqueuePersist(async () => {
      const current = await readStoredEnquiries();
      current.push(newRecord);
      await writeStoredEnquiries(current);
    });

    res.status(201).json({
      ok: true,
      enquiryId,
      submittedAt: newRecord.submittedAtIst,
      notificationStatus: 'saved',
      message: `Enquiry ${enquiryId} securely saved. Continue on WhatsApp to send your details.`,
    });
  });

  if (process.env.NODE_ENV === 'production') {
    const distDir = path.resolve(__dirname, 'dist');
    app.use(
      express.static(distDir, {
        maxAge: '7d',
        setHeaders: (res, filePath) => {
          if (filePath.endsWith('.html')) {
            res.setHeader('Cache-Control', 'no-cache');
          }
        },
      })
    );
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.join(distDir, 'index.html'));
    });
  } else {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, HOST, () => {
    console.log(`EPR Bazaar server listening on http://${HOST}:${PORT}`);
  });
}

createServer().catch((err) => {
  console.error('Failed to start EPR Bazaar server:', err);
  process.exit(1);
});
