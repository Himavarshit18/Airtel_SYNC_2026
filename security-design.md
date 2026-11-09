# Security & Privacy Design Document
## Project Udyam Digital — Airtel Business (YTL Hackathon 2026 Track A)
### Compliance Framework: DPDP Act 2023 & DoT Telecommunications Mandates

---

## 1. Executive Security Architecture

Project Udyam Digital is designed with **Privacy by Design** and **Zero-Trust Client Integrity** as foundational pillars. This architecture guarantees that MSME customers can discover, quote, complete KYC, and track digital telecom bundles without risk of data leakage, unauthorized inspection, or transaction tampering.

```
+-----------------------------------------------------------------------------------+
|                            CLIENT BROWSER (UNTRUSTED)                             |
|  - Minimalist Airtel-inspired UI                                                  |
|  - Multi-Lingual State Machine (EN, HI, TE) with Real-Time History Re-Rendering   |
|  - Masked PII Rendering (Aadhaar: XXXX-XXXX-4821, PAN: *****7384*)                |
|  - Web Speech API Microphone (Audio processed locally; no server-side audio dump) |
+----------------------------------------+------------------------------------------+
                                         | HTTPS / REST (Session Header: X-Session-Token)
                                         v
+-----------------------------------------------------------------------------------+
|                        SECURITY & SESSION MIDDLEWARE LAYER                         |
|  - Rate Limiting & Payload Sanitization                                           |
|  - Cryptographic Session Generation (UUIDv4) & Tenant Isolation                  |
|  - Strict CORS & Security Headers (CSP, X-Content-Type-Options, X-Frame-Options)   |
+----------------------------------------+------------------------------------------+
                                         |
     +-----------------------------------+-----------------------------------+
     |                                   |                                   |
     v                                   v                                   v
+-----------------------+   +-----------------------+   +-----------------------+
|   CATALOGUE SERVICE   |   |    PRICING SERVICE    |   |      KYC SERVICE      |
| - product_catalogue   |   | - Server-Side Locking |   | - Modulo-36 Checksum  |
| - Eligibility Rules   |   | - 18% GST Enforcement |   | - In-Memory Lookups   |
| - Plain Language Rationale| - Add-on Validation   |   | - 90-Day DoT Rule     |
+-----------------------+   +-----------------------+   +-----------+-----------+
                                                                    |
                                                  +-----------------+-----------------+
                                                  |                                   |
                                                  v                                   v
                                      +-----------------------+           +-----------------------+
                                      |   MOCK REGISTRIES     |           | PRIVATE DOCUMENT VAULT|
                                      | - mock_gstin_registry |           | storage/private_uploads|
                                      | - mock_udyam_registry |           | - Outside web root    |
                                      | (Backend In-Memory)   |           | - Authenticated access|
                                      +-----------------------+           +-----------------------+
```

---

## 2. Digital Personal Data Protection Act (DPDP Act, 2023) Compliance

### 2.1 Explicit Notice & Prior Consent
Before any document is uploaded or processed, the user is presented with a statutory **DPDP Act 2023 Consent Gate**:
- **Purpose Limitation:** Customer data is collected exclusively for:
  1. Telecom service provisioning (Fixed fiber, cloud telephony, SD-WAN).
  2. Telecom billing verification and tax invoicing.
  3. Statutory Department of Telecommunications (DoT) KYC audit trails.
- **Data Minimization:** Only 4 documents are collected:
  1. Entity Registration (GST Certificate or Trade License).
  2. MSME Certificate (Udyam Registration - optional for micro-proprietorships).
  3. Authorized Signatory ID (PAN / Aadhaar).
  4. Address Proof (Utility bill / commercial lease).
- **Withdrawal of Consent:** The customer may cancel the application prior to activation, triggering immediate purging of unverified files.

### 2.2 PII Redaction & Masking Standards
No full personal identifiers are displayed in the customer UI or recorded in application telemetry:
- **Aadhaar Numbers:** Formatted as `XXXX-XXXX-NNNN` (only the last 4 digits visible).
- **PAN Numbers:** Formatted as `*****NNNN*`.
- **GSTIN Identifiers:** Masked as `32TTNXB****1ZW` in logs and public UI badges.
- **Passports / Voter IDs:** Masked to show only the last 3 alphanumeric characters.

### 2.3 Document Storage Vault (`storage/private_uploads/`)
- All user-uploaded documents are saved in a private storage directory located **outside the web server's static root (`public/`)**.
- Direct URL pathing (e.g., `GET /uploads/doc1.pdf`) is disabled.
- Retrieval requires an active, valid session token matching the specific applicant.
- Statutory retention complies with DoT 7-year audit requirements, followed by automated cryptographic deletion.

---

## 3. Server-Side Price & Order Protection

### 3.1 Tamper-Proof Pricing Calculation
Under no circumstances does the backend accept a client-computed price or subtotal:
1. The client submits only the chosen bundle ID (`starter`, `pro_office`, `multi_chain`, `mfg_pro`) and an array of selected add-on product IDs (e.g., `["P09", "P23"]`).
2. `services/pricingService.js` retrieves authoritative prices directly from `product_catalogue.csv`.
3. Strict dependency checking ensures that add-ons requiring parent connectivity (e.g., `requires_one_of = P01|P02|P03|P05|P06`) are strictly validated.
4. Setup fees and statutory 18% GST are calculated server-side and digitally locked to the order session.

---

## 4. KYC Registry Integrity & Fraud Prevention

### 4.1 Modulo-36 GSTIN Algorithmic Checksum
Every GSTIN is validated against the standard ISO/IEC 7064 Modulo-36 checksum:
- 15-character structure: 2-digit state code + 10-digit PAN + 1-digit entity code + 1-character 'Z' + 1-character checksum.
- Accepts synthetic test datasets where the 4th PAN character is `X`.

### 4.2 Real In-Memory Registry Cross-Check
The server loads `mock_gstin_registry.csv` (3,534 records) and `mock_udyam_registry.csv` (2,723 records) into high-performance in-memory Hash Maps on startup:
- **Active Taxpayers (`K01`, `K02`, `K03`, etc.):** Pass verification immediately.
- **Suspended Taxpayers (`K11` - `23QYBXS1811Q1ZD`):** Automatically flagged and **REJECTED** with clear regulatory notice.
- **Cancelled Taxpayers (`K12` - `37IHKXV5167L1ZS`):** Automatically flagged and **REJECTED** to prevent commercial fraud.

### 4.3 DoT 90-Day Document Currency Enforcement
Under DoT circulars, proof of address utility bills must not be older than 90 days:
- Fixed benchmark date: `2026-07-15`.
- `K05` (`Royal Fashions`): Address proof bill issued `2026-03-22` (~115 days old) is caught and **REJECTED** with instructions to supply a current bill.

---

## 5. Session Isolation & Tenant Security
- Each user connection receives a cryptographically random session token (`ses_<timestamp>_<hex>`).
- All orders, quotes, and uploaded KYC documents are scoped to this session token.
- Orders cannot be enumerated or accessed by incrementing integer IDs.

