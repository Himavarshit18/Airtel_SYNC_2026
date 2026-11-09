/**
 * Airtel Business - Project Udyam Digital
 * Enterprise Track A: Production-Grade Node.js Application Server
 * 
 * Zero-dependency native Node.js HTTP server:
 * - Clean architecture with modular services & security middleware
 * - DPDP Act 2023 & DoT 90-day compliance engine
 * - Dynamic Multi-Lingual support (English, Hindi, Telugu)
 * - Server-side authoritative pricing & locked order tracking
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const CatalogueService = require('./services/catalogueService');
const PricingService = require('./services/pricingService');
const KycService = require('./services/kycService');
const OrderService = require('./services/orderService');
const SecurityMiddleware = require('./middleware/security');

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = path.join(__dirname, 'public');
const LOCALES_DIR = path.join(__dirname, 'locales');

// Initialize Services
const catalogueService = new CatalogueService();
const pricingService = new PricingService(catalogueService);
const kycService = new KycService();
const orderService = new OrderService();
const security = new SecurityMiddleware();

// Static file MIME types
const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.pdf': 'application/pdf'
};

// Helper to parse JSON body
function parseJsonBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
      if (body.length > 5 * 1024 * 1024) { // 5MB limit
        reject(new Error('Payload too large'));
      }
    });
    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (e) {
        reject(e);
      }
    });
    req.on('error', reject);
  });
}

// HTTP Server
const server = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  // 1. Apply Security Headers
  security.applySecurityHeaders(res);

  // 2. CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Session-Token');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // 3. Rate Limiting
  if (!security.checkRateLimit(req, res)) {
    return;
  }

  // 4. Session Resolution
  const sessionToken = security.resolveSession(req, res);

  // ========================================================
  // REST API ROUTES
  // ========================================================

  // API: Session Info
  if (pathname === '/api/session' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'success', sessionToken }));
    return;
  }

  // API: Get Modular Locale JSON
  if (pathname.startsWith('/api/locales/') && req.method === 'GET') {
    const lang = pathname.split('/').pop().toLowerCase();
    const safeLang = ['en', 'hi', 'te'].includes(lang) ? lang : 'en';
    const filePath = path.join(LOCALES_DIR, `${safeLang}.json`);

    if (fs.existsSync(filePath)) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      fs.createReadStream(filePath).pipe(res);
    } else {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ status: 'error', message: 'Locale not found' }));
    }
    return;
  }

  // API: Get Product Catalogue
  if (pathname === '/api/catalogue' && req.method === 'GET') {
    const products = catalogueService.getAllProducts();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'success', count: products.length, products }));
    return;
  }

  // API: GenAI Advisor Recommendation
  if (pathname === '/api/recommend' && req.method === 'POST') {
    try {
      const payload = await parseJsonBody(req);
      const recommendation = catalogueService.recommendBundle(payload);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ status: 'success', bundle: recommendation }));
    } catch (err) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ status: 'error', message: err.message }));
    }
    return;
  }

  // API: Authoritative Server-Side Quote Calculation
  if (pathname === '/api/quote/calculate' && req.method === 'POST') {
    try {
      const payload = await parseJsonBody(req);
      const { bundleId = 'pro_office', selectedAddons = [] } = payload;
      const quote = pricingService.calculateQuote(bundleId, selectedAddons);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ status: 'success', quote }));
    } catch (err) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ status: 'error', message: err.message }));
    }
    return;
  }

  // API: Specimen KYC Applicants (K01 - K12)
  if (pathname === '/api/kyc/applicants' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      status: 'success',
      count: 12,
      referenceBenchmarkDate: "2026-07-15",
      note: "12 Specimen Applicants K01-K12 mapped from synthetic dataset"
    }));
    return;
  }

  // API: GSTIN Registry Lookup
  if (pathname === '/api/kyc/lookup-gstin' && req.method === 'POST') {
    try {
      const payload = await parseJsonBody(req);
      const { gstin } = payload;
      const record = kycService.lookupGstin(gstin);
      if (!record) {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ status: 'not_found', message: 'GSTIN not found in mock central registry' }));
      } else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ status: 'success', record }));
      }
    } catch (err) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ status: 'error', message: err.message }));
    }
    return;
  }

  // API: Udyam Registry Lookup
  if (pathname === '/api/kyc/lookup-udyam' && req.method === 'POST') {
    try {
      const payload = await parseJsonBody(req);
      const { udyamNumber } = payload;
      const record = kycService.lookupUdyam(udyamNumber);
      if (!record) {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ status: 'not_found', message: 'Udyam record not found in mock registry' }));
      } else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ status: 'success', record }));
      }
    } catch (err) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ status: 'error', message: err.message }));
    }
    return;
  }

  // API: Load Specimen KYC Pack (K01 - K12)
  if (pathname === '/api/kyc/load-specimen-pack' && req.method === 'POST') {
    try {
      const payload = await parseJsonBody(req);
      const applicantId = payload.applicantId || 'K01';
      const dossier = kycService.getSpecimenApplicant(applicantId);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ status: 'success', dossier }));
    } catch (err) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ status: 'error', message: err.message }));
    }
    return;
  }

  // API: Private Document Upload Vault
  if (pathname === '/api/kyc/upload' && req.method === 'POST') {
    try {
      const payload = await parseJsonBody(req);
      const { fileName = 'document.png', fileBase64 = '', docType = null } = payload;

      if (!fileBase64) {
        throw new Error('No document payload provided');
      }

      const buffer = Buffer.from(fileBase64, 'base64');
      const savedDoc = kycService.savePrivateUpload(fileName, buffer, sessionToken);

      // Attempt metadata and registry extraction
      const extracted = kycService.extractFromFileName(fileName);
      let gstinLookup = null;
      if (extracted && extracted.gstin) {
        gstinLookup = kycService.lookupGstin(extracted.gstin);
      }

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({
        status: 'success',
        message: 'Document securely encrypted in private storage vault',
        document: {
          fileId: savedDoc.fileId,
          originalName: savedDoc.originalName,
          docType: docType,
          sizeBytes: savedDoc.sizeBytes,
          uploadedAt: savedDoc.uploadedAt,
          vault: 'storage/private_uploads'
        },
        extracted,
        gstinLookup
      }));
    } catch (err) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ status: 'error', message: err.message }));
    }
    return;
  }

  // API: Smart KYC Verification
  if (pathname === '/api/kyc/verify' && req.method === 'POST') {
    try {
      const payload = await parseJsonBody(req);
      const verificationResult = kycService.verifyApplicantDossier(payload);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({
        status: 'success',
        ...verificationResult
      }));
    } catch (err) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ status: 'error', message: err.message }));
    }
    return;
  }

  // API: Order Creation
  if (pathname === '/api/orders/create' && req.method === 'POST') {
    try {
      const payload = await parseJsonBody(req);
      const order = orderService.createOrder(sessionToken, payload);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ status: 'success', order }));
    } catch (err) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ status: 'error', message: err.message }));
    }
    return;
  }

  // API: Track Order
  if (pathname === '/api/orders/track' && req.method === 'GET') {
    let order = orderService.getOrderBySession(sessionToken);
    if (!order) {
      // Seed default active demonstration order for session
      order = orderService.createOrder(sessionToken, {
        businessName: 'Balaji Dental Care LLP',
        applicantId: 'K01',
        bundleId: 'pro_office',
        bundleName: 'Airtel Professional Office Suite',
        totalMonthlyDue: 3213
      });
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'success', order }));
    return;
  }

  // API: Funnel & Leads Statistics
  if (pathname === '/api/leads/stats' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      total_leads: 5000,
      activated_leads: 368,
      baseline_conversion_rate: 0.0736,
      biggest_drop_stage: "Needs Assessed to Quote Accepted (56.0% drop)",
      average_onboarding_lag_days: 17.6,
      gstin_lift: "4.8x higher conversion (9.6% vs 2.0%)",
      ml_model_auc: 0.8680,
      top_decile_lift: "5.7x conversion lift (42.1% in Tier 1)",
      explanation: "smb_leads.csv (5,000 leads) proves that quoting delay (3-5 days) and KYC lag (17.6 days) cause 56% prospect abandonment. Project Udyam Digital directly eliminates these bottlenecks through instant 60s GenAI discovery, transparent quotes, and autonomous KYC."
    }));
    return;
  }

  // ========================================================
  // STATIC SPECIMEN KYC DOCUMENTS SERVING
  // ========================================================
  if (pathname.startsWith('/kyc_documents/')) {
    const safeDocName = path.basename(pathname);
    const docPath = path.join(__dirname, 'kyc_documents', safeDocName);
    if (fs.existsSync(docPath)) {
      const ext = path.extname(docPath).toLowerCase();
      const contentType = MIME_TYPES[ext] || 'image/png';
      res.writeHead(200, {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=86400'
      });
      fs.createReadStream(docPath).pipe(res);
      return;
    } else {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ status: 'error', message: 'Specimen KYC document not found' }));
      return;
    }
  }

  // ========================================================
  // STATIC ASSET SERVING
  // ========================================================
  let safePath = path.normalize(pathname).replace(/^(\.\.[\/\\])+/, '');
  if (safePath === '/' || safePath === '\\') safePath = '/index.html';
  let filePath = path.join(PUBLIC_DIR, safePath);

  if (!fs.existsSync(filePath)) {
    filePath = path.join(PUBLIC_DIR, 'index.html');
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    }
  });
});

// Start Server
server.listen(PORT, () => {
  console.log(`=======================================================`);
  console.log(` Airtel Business - Project Udyam Digital`);
  console.log(` Server running at: http://localhost:${PORT}`);
  console.log(` Node.js version:   ${process.version}`);
  console.log(` UI Design:         Airtel-inspired minimalist, clean white`);
  console.log(` Data Privacy:      DPDP Act 2023 & DoT 90-Day compliant`);
  console.log(` Security Vault:    storage/private_uploads (outside web root)`);
  console.log(` Languages:         English, Hindi, Telugu (Dynamic i18n)`);
  console.log(`=======================================================`);
});
