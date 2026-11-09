const LOCALES = {
  "en": {
    "langCode": "en-IN",
    "name": "English (India)",
    "brandSub": "Project Udyam Digital · Enterprise MSME Onboarding",
    "navAdvisor": "1. AI Advisor",
    "navQuote": "2. Quote & Plan",
    "navKyc": "3. Smart KYC",
    "navTracker": "4. Order Tracker",
    "navBackOffice": "5. Back-Office & ML",
    "advisorHeading": "Digital Business Advisor",
    "advisorSub": "Sequential Discovery: 1. Type → 2. Size → 3. Locations → 4. Current Tools",
    "stepProgress": "Discovery Step {step} of 4",
    "restartBtn": "Restart Interview",
    "inputPlaceholder": "Type your answer or click mic to speak...",
    "sendBtn": "Send",
    "whyTitle": "Why this bundle fits your business:",
    "billLabel": "Single transparent monthly bill:",
    "acceptBtn": "Accept Recommendation & View Quote",
    "recsBadge": "Recommendation Ready",
    "recsPending": "Discovery In Progress",
    "awaitingTitle": "Awaiting Discovery Answers",
    "awaitingDesc": "Answer the 4 questions on the left. The catalogue engine will assemble your bundle here.",
    "awaitingRationale": "The recommendation engine matches business type, staff headcount, multi-site presence, and network gaps against Airtel Business catalogue rules.",
    "demoTitle": "1-Click Judge Demo Scenarios:",
    "step1": {
      "title": "Step 1: Business Type",
      "question": "Welcome to Airtel Business! <strong>Step 1 of 4: What type of business do you run?</strong> (e.g. Dental Clinic, Kirana Store, Restaurant, Factory, CA Office)",
      "options": [
        {
          "label": "🩺 Clinic / Healthcare",
          "val": "Dental Clinic"
        },
        {
          "label": "🛒 Kirana / Retail Shop",
          "val": "Kirana Grocery Store"
        },
        {
          "label": "🍽️ Restaurant / Cafe",
          "val": "Restaurant Chain"
        },
        {
          "label": "🏭 Manufacturing Factory",
          "val": "Auto Parts Manufacturing Factory"
        },
        {
          "label": "💼 CA & Law Firm",
          "val": "Chartered Accountant Firm"
        }
      ],
      "placeholder": "Type business type or click mic..."
    },
    "step2": {
      "title": "Step 2: Business Size",
      "question": "Understood! <strong>Step 2 of 4: How many staff or employees work in your business?</strong>",
      "options": [
        {
          "label": "1-3 staff (Micro)",
          "val": "2 staff"
        },
        {
          "label": "5-15 employees (Small)",
          "val": "12 employees"
        },
        {
          "label": "25-50 employees (Medium)",
          "val": "45 employees"
        },
        {
          "label": "80+ workforce (Enterprise)",
          "val": "85 employees"
        }
      ],
      "placeholder": "Enter employee count (e.g., 12)..."
    },
    "step3": {
      "title": "Step 3: Locations",
      "question": "Great! <strong>Step 3 of 4: How many branches or physical locations do you operate?</strong>",
      "options": [
        {
          "label": "1 single location",
          "val": "1 single location"
        },
        {
          "label": "2-3 branches",
          "val": "3 branches"
        },
        {
          "label": "5 outlets",
          "val": "5 outlets"
        },
        {
          "label": "10+ multi-city sites",
          "val": "10 locations"
        }
      ],
      "placeholder": "Enter number of branches (e.g., 1 or 5)..."
    },
    "step4": {
      "title": "Step 4: Current Tools & Needs",
      "question": "Final question! <strong>Step 4 of 4: What do you currently use for connectivity and what tools do you need?</strong>",
      "options": [
        {
          "label": "1. Shop Counter & POS (UPI Wi-Fi)",
          "sub": "For UPI soundbox & card swipe machines on phone hotspot",
          "val": "Mobile Hotspot, need billing POS and guest Wi-Fi"
        },
        {
          "label": "2. Office & Clinic (Fiber, Email & IVR)",
          "sub": "Commercial fiber, domain email & automated reception",
          "val": "Home Broadband, need cloud telephony and office email"
        },
        {
          "label": "3. Multi-Store Outlets (CCTV & Backup)",
          "sub": "Live store sync, mobile CCTV & auto 4G/5G backup",
          "val": "Mixed Local ISP, need SD-WAN, CCTV cameras and failover"
        },
        {
          "label": "4. Factory Leased Line (1:1 Dedicated)",
          "sub": "1:1 dedicated leased line, 99.5% SLA & IoT sensors",
          "val": "Need 100 Mbps dedicated leased line and machine sensors"
        }
      ],
      "placeholder": "Enter current tools & requirements...",
      "guideTitle": "Easy Guide to Your 4 Choices:",
      "guideSubtitle": "Pick the option that best matches your daily business setup and tools:",
      "guideItems": [
        {
          "badge": "Choice 1 · Kirana & Retail Counter",
          "title": "Shop Counter & UPI Billing POS",
          "easyDesc": "For single shops, grocery stores, or cafes on mobile hotspots. Gives dedicated counter Wi-Fi so your UPI QR, soundbox, and card swipe machines never freeze or fail during billing."
        },
        {
          "badge": "Choice 2 · Clinics & Professional Offices",
          "title": "Office Suite, Domain Email & Phone IVR",
          "easyDesc": "For clinics, CA firms, and consultancy offices on home internet. Gives commercial fiber broadband, professional domain emails (you@firm.com), and an automated IVR reception greeting so patient or client calls are never missed."
        },
        {
          "badge": "Choice 3 · Retail Chains & Restaurants",
          "title": "Multi-Store Outlets, CCTV & Backup",
          "easyDesc": "For multi-outlet businesses. Syncs live billing across stores (SD-WAN), provides 24/7 mobile-view CCTV cameras, and automatic 4G/5G backup router that kicks in instantly if fiber wire gets cut outside."
        },
        {
          "badge": "Choice 4 · Factories & High-Speed Industry",
          "title": "1:1 Dedicated Leased Line & Machine IoT",
          "easyDesc": "For factories, manufacturing plants, and tech centers. Provides an unshared 1:1 dedicated leased line with 99.5% uptime SLA guarantee, static IP for servers, and real-time connectivity for factory machinery and IoT sensors."
        }
      ]
    },
    "step5": {
      "header": "Discovery complete! Tailored digital bundle assembled from Airtel Product Catalogue:",
      "whyTitle": "Why this bundle fits:",
      "billLabel": "Single Monthly Bill:",
      "startOver": "Start Over"
    },
    "rationales": {
      "clinic": "Replaces unreliable home broadband with high-speed commercial fiber. Smart Cloud Telephony with automated greeting ensures patient appointment calls are never missed, while Endpoint Security protects confidential patient medical records.",
      "restaurant": "Multi-site branches are linked with Managed SD-WAN for seamless POS and kitchen order sync. Dual 4G/5G failover guarantees zero payment disruptions when primary fiber trips. Cloud CCTV enables 24/7 centralized camera surveillance across all dining locations.",
      "kirana": "Cost-effective 100 Mbps commercial fiber combined with a fixed Static IP guarantees uninterrupted UPI QR code payments and POS billing with 99.5% commercial uptime.",
      "manufacturing": "A private 1:1 fiber line reserved purely for your facility ensures your ERP, inventory systems, and automated machinery run with guaranteed 99.9% uptime. Smart IoT sensors track machine running time and power usage, while enterprise firewall security blocks cyber attacks 24/7.",
      "office": "High-speed 300 Mbps commercial fiber bundled with professional company email and antivirus security to protect confidential client files, tax filings, and audit records with 99.5% uptime."
    },
    "recSolutionTag": "Airtel Business Solution",
    "recInclusionsTitle": "Catalogue Inclusions:",
    "recProductPlaceholder": "Complete the 4 steps to view product breakdown",
    "recAllInOneLabel": "All-in-One Monthly Cost",
    "recSetupWaived": "Setup fee waived",
    "demoSub": "Instantly evaluates 25 products in product_catalogue.csv",
    "demoScenarios": {
      "clinic": "🩺 Dental Clinic (12 staff · 1 site · Home Broadband)",
      "restaurant": "🍽️ Restaurant Chain (45 staff · 5 sites · SD-WAN & CCTV)",
      "kirana": "🛒 Kirana Store (2 staff · 1 site · Hotspot to POS)",
      "manufacturing": "🏭 Factory (85 staff · 1 site · 100M Leased Line + IoT)",
      "ca_firm": "💼 CA & Law Firm (12 staff · Cloud Email + Antivirus)"
    },
    "tabQuote": {
      "stepTag": "Step 2 of 4 · Instant Quote",
      "heading": "Customized Digital Bundle & Transparent Pricing",
      "sub": "Single consolidated invoice. Server-side price lock. Toggle optional add-ons in real-time.",
      "estLabel": "Estimated Monthly Recurring",
      "baseInclusionsTitle": "Base Package Inclusions",
      "addonsTitle": "Optional Recommended Add-ons (Server-Side Validated)",
      "addonFailoverTitle": "Automatic 4G/5G Wireless Backup Router",
      "addonFailoverDesc": "If the main internet wire ever cuts, it instantly switches to mobile SIM data so your UPI payments and card machines never stop working.",
      "addonCctvTitle": "Cloud CCTV Surveillance (2 HD Cameras)",
      "addonCctvDesc": "Watch live shop video and past 30 days of recordings directly on your smartphone anytime, anywhere—no expensive recording machine needed.",
      "addonStaticIpTitle": "Public Static IP Address",
      "addonStaticIpDesc": "A fixed, permanent internet address for your business—required for staff biometric attendance machines, local servers, and direct bank billing.",
      "billTitle": "Single Unified Monthly Bill",
      "baseLabel": "Base Package",
      "addonLabel": "Selected Add-ons",
      "setupLabel": "Installation & Setup",
      "setupVal": "Waived (₹0)",
      "subtotalLabel": "Subtotal",
      "gstLabel": "GST (18%)",
      "totalLabel": "Total Due Monthly",
      "priceLockText": "Price lock guarantee for 12 months",
      "gstInvoiceText": "Single consolidated GST tax invoice",
      "proceedText": "Proceed to Smart KYC Verification",
      "perMonth": "/ mo",
      "plusGst": "+ GST"
    },
    "tabKyc": {
      "stepTag": "Step 3 of 4 · Automated Digital KYC",
      "heading": "Smart KYC & Data Privacy Engine",
      "sub": "Instant verification against national registries with DPDP Act 2023 consent and DoT 90-day currency rules.",
      "applicantSelectLabel": "Specimen Test Applicant:",
      "dpdpTitle": "DPDP Act 2023 Statutory Consent & Privacy Notice",
      "dpdpPurposeBadge": "Purpose-Limited",
      "dpdpNoticeText": "In compliance with the Digital Personal Data Protection Act, 2023 and Department of Telecommunications (DoT) regulations, Airtel Business collects business registration and signatory proof strictly for service provisioning, billing, and statutory telecom verification. PII is tokenized and masked in all systems.",
      "dpdpConsentCheckLabel": "I grant explicit digital consent to verify registration data against GSTN and Udyam national registries.",
      "doc1Title": "Doc 1: Business Registration (GST)",
      "doc1GstinLabel": "Extracted GSTIN (Masked):",
      "doc1LegalLabel": "Entity Legal Name:",
      "doc1RegCheckLabel": "Registry Cross-Check:",
      "doc2Title": "Doc 2: MSME Registration (Udyam)",
      "doc2UdyamNoLabel": "Udyam MSME Number:",
      "doc2TypeLabel": "Classification:",
      "doc2PriorityLabel": "MSME Priority:",
      "doc2PriorityVal": "Priority Business Broadband",
      "doc3Title": "Doc 3: Authorized Signatory ID",
      "doc3TokenBadge": "DPDP Tokenized",
      "doc3SignatoryLabel": "Authorized Signatory:",
      "doc3IdLabel": "Redacted Identifier:",
      "doc3PrivacyLabel": "Privacy Safeguard:",
      "doc4Title": "Doc 4: Address Proof (Premises)",
      "doc4DocTypeLabel": "Document Type:",
      "doc4IssueDateLabel": "Validity & Issue Date:",
      "doc4PremisesLabel": "Premises Address:",
      "uploadTitle": "Upload All 4 KYC Documents (Select Files from kyc_documents/)",
      "uploadSub": "Upload GST, Udyam, Signatory ID & Address Proof files for automated verification",
      "runKycBtnText": "Run Automated Compliance & Registry Check",
      "runKycSubtext": "Autonomous evaluation & DoT rules",
      "kycDecisionHeaderLabel": "Automated Verification Decision",
      "kycAuditFindingLabel": "Compliance Summary:",
      "kycProceedBtnText": "KYC Approved · Proceed to Order Tracker",
      "replaceBtn": "Replace File",
      "removeBtn": "Remove",
      "clickUpload": "Click to Upload",
      "mandatoryDoc": "Mandatory Document",
      "awaitingDoc": "Awaiting Document Upload",
      "notVerified": "Not Verified (Document Missing)",
      "docsActiveBadge": "4 / 4 Documents Active",
      "docsMissingBadge": "{count} / 4 Uploaded ({missing} Missing)",
      "activeDocsNotice": "All 4 documents are securely encrypted.",
      "missingDocsNotice": "Please upload all 4 documents to verify.",
      "actionNeededPrefix": "Action Needed:",
      "decisionApprovedTitle": "Verification Approved · Ready for Provisioning",
      "decisionHaltedTitle": "Verification Halted · Compliance Issue Detected",
      "decisionApprovedSummary": "Entity is verified Active (<strong>{legalName}</strong>). MSME Udyam classification verified, premises address proof is within statutory DoT 90-day currency limits ({days}d old), and DPDP Act 2023 digital consent is recorded.",
      "auditDoc1": "Doc 1: GSTIN Registry Check ({gstin}): ACTIVE ({legalName})",
      "auditDoc2": "Doc 2: MSME Udyam Registry Check: {udyam} ({type})",
      "auditDoc3": "Doc 3: Authorized Signatory Verification ({name} ({role})): DPDP Act Tokenized",
      "auditDoc4": "Doc 4: Premises Address Proof Currency: {days} days old (Statutory DoT Rule: ≤ 90 days)",
      "passBadge": "PASS",
      "failBadge": "FAIL"
    },
    "tabTracker": {
      "stepTag": "Step 4 of 4 · Order & Installation",
      "heading": "Order Status & Installation Tracker",
      "sub": "",
      "milestoneTitle": "Installation Progress",
      "slaBadge": "Guaranteed Installation: Under 48 Hours",
      "m1Title": "1. Plan & Quote Confirmed",
      "m1Desc": "Your business plan is confirmed with 12-month price protection.",
      "m2Title": "2. Business KYC Verified",
      "m2Desc": "Business registration and documents successfully verified.",
      "m3Title": "3. Installation Engineer Assigned",
      "m3Desc": "Airtel technician is on the way to install your fiber connection.",
      "m3Status": "IN PROGRESS",
      "m4Title": "4. Speed Test & Service Activation",
      "m4Desc": "On-site speed test at your business and welcome confirmation SMS.",
      "m4Status": "Estimated Tomorrow",
      "assignedExecTitle": "Assigned Installation Engineer",
      "assignedExecRole": "Senior Fiber Installation Engineer",
      "assignedExecRating": "★ 4.9 Rating (420 installs)",
      "slaLabel": "Guaranteed Time:",
      "slaVal": "Under 48 Hours",
      "installWindowLabel": "Installation Slot:",
      "installWindowVal": "Tomorrow, 2:00 PM - 4:00 PM",
      "equipmentLabel": "Equipment Provided:",
      "equipmentVal": "Wi-Fi 6 High-Speed Router",
      "supportLabel": "Need Help? Call:",
      "revAdvTitle": "1. AI Advisor Discovery",
      "revAdvSub": "Needs Assessed · Plan Recommended",
      "revQuoteTitle": "2. Quote & Plan",
      "revQuoteSub": "Transparent Monthly Bill Locked",
      "revKycTitle": "3. Smart KYC & Privacy",
      "revKycSub": "4 Documents & GSTN Verified",
      "doneBadge": "Done",
      "orderBadgeText": "Order"
    },
    "footerText": "Airtel Business Enterprise Track A · Project Udyam Digital · Fully DPDP Act 2023 & DoT Compliant",
    "bundles": {
      "starter": {
        "name": "Airtel Starter Digital Pack",
        "segment": "Shops & retail outlets",
        "sla": "99.5% Reliable Business Fiber",
        "desc": "Fast 100 Mbps business fiber + permanent Static IP + GST billing & stock app."
      },
      "mfg_pro": {
        "name": "Airtel Smart Manufacturing Suite",
        "segment": "Small & medium factories",
        "sla": "Guaranteed 99.9% private internet uptime",
        "desc": "Dedicated 1:1 private fiber line (100 Mbps) + smart machine IoT sensors + managed cyber firewall."
      },
      "multi_chain": {
        "name": "Airtel Connected Enterprise (Multi-Site)",
        "segment": "Multi-branch businesses",
        "sla": "99.5% Fiber + Auto 4G/5G Backup Router",
        "desc": "300 Mbps commercial fiber + automatic 4G/5G backup router + branch SD-WAN network + Cloud CCTV."
      },
      "pro_office": {
        "name": "Airtel Professional Office Suite",
        "segment": "Clinics, CA firms & offices",
        "sla": "99.5% Fast Business Fiber",
        "desc": "300 Mbps commercial fiber + smart business phone IVR + professional company email + antivirus security."
      }
    },
    "kycBadges": {
      "activeTaxpayer": "Active Taxpayer",
      "suspended": "Suspended",
      "cancelled": "Cancelled",
      "verifiedMsme": "Verified MSME",
      "exemptNone": "Exempt / None",
      "dotValid": "Valid (≤90 Days)",
      "dotExpired": "Expired (>90 Days)",
      "approvedDecision": "APPROVED",
      "rejectedDecision": "ACTION REQUIRED / REJECTED",
      "verifiedRegDate": "Verified in National GSTN",
      "dpdpConsentStatus": "DPDP Digital Consent Recorded",
      "notUploaded": "Not Uploaded · Required",
      "dpdpTokenized": "DPDP Tokenized"
    },
    "advisorLockedText": "Discovery Completed · Answers & Recommendation Saved (Non-Editable)",
    "advisorEditText": "Edit Answers",
    "advisorNextText": "Next: Quote",
    "backToAdvisorBtn": "Back to AI Advisor",
    "quoteLockedText": "Quote Accepted · 12-Month Price Lock Active (Non-Editable)",
    "quoteEditText": "Modify Add-ons",
    "quoteNextText": "Next: Smart KYC",
    "backToQuoteBtn": "Back to Quote & Plan",
    "kycLockedText": "Smart KYC Verified & DPDP Consent Recorded (Non-Editable)",
    "kycReturnTrackerText": "Return to Order Tracker",
    "reviewJourneyTitle": "Order Active & Tracked:",
    "reviewJourneySub": "Review your saved inputs from previous pages (view-only):",
    "revBtnAdv": "1. View Advisor",
    "revBtnQuote": "2. View Quote",
    "revBtnKyc": "3. View KYC",
    "inputPlaceholderLocked": "Discovery interview completed · Details saved (Read-Only)",
    "kycVerifiedBadge": "KYC Verified & Audit Passed",
    "continueToKyc": "Continue to Smart KYC"
  },
  "hi": {
    "langCode": "hi-IN",
    "name": "हिंदी (Hindi)",
    "brandSub": "प्रोजेक्ट उद्यम डिजिटल · एमएसएमई डिजिटल ऑनबोर्डिंग",
    "navAdvisor": "1. एआई सलाहकार",
    "navQuote": "2. कोटेशन व प्लान",
    "navKyc": "3. स्मार्ट केवाईसी",
    "navTracker": "4. ऑर्डर ट्रैकर",
    "navBackOffice": "5. बैक-ऑफिस व एमएल",
    "advisorHeading": "डिजिटल बिजनेस सलाहकार",
    "advisorSub": "क्रमबद्ध बातचीत: 1. प्रकार → 2. आकार → 3. शाखाएं → 4. वर्तमान टूल्स",
    "stepProgress": "खोज चरण 4 में से {step}",
    "restartBtn": "बातचीत दोबारा शुरू करें",
    "inputPlaceholder": "अपना उत्तर लिखें या माइक पर क्लिक करके बोलें...",
    "sendBtn": "भेजें",
    "whyTitle": "यह बंडल आपके व्यवसाय के लिए सर्वोत्तम क्यों है:",
    "billLabel": "एकल पारदर्शी मासिक बिल:",
    "acceptBtn": "सिफारिश स्वीकार करें और कोटेशन देखें",
    "recsBadge": "सिफारिश तैयार है",
    "recsPending": "विश्लेषण जारी है",
    "awaitingTitle": "प्रश्नों के उत्तर की प्रतीक्षा है",
    "awaitingDesc": "बाईं ओर दिए गए 4 प्रश्नों के उत्तर दें। एयरटेल कैटलॉग इंजन आपका बंडल तैयार करेगा।",
    "awaitingRationale": "सिफारिश इंजन आपके बिज़नेस के प्रकार, कर्मचारियों की संख्या और शाखाओं के अनुसार एयरटेल प्रोडक्ट कैटलॉग से सर्वश्रेष्ठ समाधान चुनेगा।",
    "demoTitle": "1-क्लिक डेमो परिदृश्य:",
    "step1": {
      "title": "चरण 1: व्यवसाय का प्रकार",
      "question": "एयरटेल बिज़नेस में आपका स्वागत है! <strong>चरण 1 / 4: आप किस प्रकार का व्यवसाय चलाते हैं?</strong> (जैसे क्लिनिक, किराना दुकान, रेस्टोरेंट, फैक्ट्री, सीए ऑफिस)",
      "options": [
        {
          "label": "🩺 क्लिनिक / अस्पताल",
          "val": "डेंटल क्लिनिक"
        },
        {
          "label": "🛒 किराना / रिटेल स्टोर",
          "val": "किराना दुकान"
        },
        {
          "label": "🍽️ रेस्टोरेंट / कैफे",
          "val": "रेस्टोरेंट चेन"
        },
        {
          "label": "🏭 मैन्युफैक्चरिंग फैक्ट्री",
          "val": "ऑटो पार्ट्स मैन्युफैक्चरिंग फैक्ट्री"
        },
        {
          "label": "💼 सीए व लॉ फर्म",
          "val": "चार्टर्ड अकाउंटेंट ऑफिस"
        }
      ],
      "placeholder": "व्यवसाय का प्रकार लिखें या बोलें..."
    },
    "step2": {
      "title": "चरण 2: कर्मचारियों की संख्या",
      "question": "बहुत बढ़िया! <strong>चरण 2 / 4: आपके व्यवसाय में कुल कितने कर्मचारी या स्टाफ काम करते हैं?</strong>",
      "options": [
        {
          "label": "1-3 कर्मचारी (अति सूक्ष्म)",
          "val": "2 कर्मचारी"
        },
        {
          "label": "5-15 कर्मचारी (लघु)",
          "val": "12 कर्मचारी"
        },
        {
          "label": "25-50 कर्मचारी (मध्यम)",
          "val": "45 कर्मचारी"
        },
        {
          "label": "80+ कर्मचारी (फैक्ट्री/बड़ा)",
          "val": "85 कर्मचारी"
        }
      ],
      "placeholder": "कर्मचारियों की संख्या दर्ज करें..."
    },
    "step3": {
      "title": "चरण 3: शाखाओं की संख्या",
      "question": "समझ गया! <strong>चरण 3 / 4: आपकी कितनी शाखाएं, दुकानें या व्यावसायिक स्थान हैं?</strong>",
      "options": [
        {
          "label": "1 एकल दुकान/ऑफिस",
          "val": "1 एकल दुकान"
        },
        {
          "label": "2-3 शाखाएं",
          "val": "3 शाखाएं"
        },
        {
          "label": "5 आउटलेट",
          "val": "5 आउटलेट"
        },
        {
          "label": "10+ बहु-शहरी शाखाएं",
          "val": "10 शाखाएं"
        }
      ],
      "placeholder": "शाखाओं की संख्या दर्ज करें..."
    },
    "step4": {
      "title": "चरण 4: वर्तमान टूल्स व जरूरतें",
      "question": "अंतिम प्रश्न! <strong>चरण 4 / 4: वर्तमान में आप इंटरनेट के लिए क्या उपयोग करते हैं और आपको किन टूल्स की आवश्यकता है?</strong>",
      "options": [
        {
          "label": "1. दुकान काउंटर व POS (UPI वाई-फाई)",
          "sub": "फोन हॉटस्पॉट पर चलने वाले साउंडबॉक्स व बिलिंग कार्ड मशीन हेतु",
          "val": "Mobile Hotspot, need billing POS and guest Wi-Fi"
        },
        {
          "label": "2. ऑफिस व क्लिनिक (फाइबर, ईमेल व IVR)",
          "sub": "कमर्शियल फाइबर, आधिकारिक डोमेन ईमेल व स्वचालित फोन स्वागत",
          "val": "Home Broadband, need cloud telephony and office email"
        },
        {
          "label": "3. मल्टी-स्टोर आउटलेट्स (CCTV व बैकअप)",
          "sub": "शाखाओं का लाइव सिंक, मोबाइल CCTV व 4G/5G ऑटो बैकअप",
          "val": "Mixed Local ISP, need SD-WAN, CCTV cameras and failover"
        },
        {
          "label": "4. फैक्ट्री लीज्ड लाइन (1:1 समर्पित)",
          "sub": "1:1 अनशेयर्ड लीज्ड लाइन, 99.5% SLA व मशीन IoT सेंसर",
          "val": "Need 100 Mbps dedicated leased line and machine sensors"
        }
      ],
      "placeholder": "वर्तमान टूल्स व जरूरतें लिखें या बोलें...",
      "guideTitle": "आपके 4 विकल्पों की आसान भाषा में समझ:",
      "guideSubtitle": "अपनी वर्तमान व्यवस्था और दैनिक व्यापारिक जरूरत के अनुसार चुनें:",
      "guideItems": [
        {
          "badge": "विकल्प 1 · दुकान व किराना काउंटर",
          "title": "दुकान काउंटर व UPI बिलिंग POS",
          "easyDesc": "सिंगल दुकान, किराना स्टोर या कैफे के लिए जो अभी फोन हॉटस्पॉट पर चलते हैं। समर्पित काउंटर वाई-फाई जिससे UPI क्यूआर, साउंडबॉक्स और कार्ड स्वाइप मशीन बिलिंग के समय कभी न अटके।"
        },
        {
          "badge": "विकल्प 2 · क्लिनिक व पेशेवर कार्यालय",
          "title": "ऑफिस सुइट, डोमेन ईमेल व फोन IVR",
          "easyDesc": "घरेलू ब्रॉडबैंड पर चलने वाले ऑफिसों व क्लिनिकों के लिए। हाई-स्पीड कमर्शियल फाइबर, आधिकारिक डोमेन ईमेल (you@firm.com) और स्वचालित IVR फोन प्रणाली ताकि ग्राहक या मरीज के फोन मिस न हों।"
        },
        {
          "badge": "विकल्प 3 · रिटेल चेन व रेस्टोरेंट",
          "title": "मल्टी-आउटलेट सिंक, CCTV व 4G/5G बैकअप",
          "easyDesc": "कई शाखाओं वाले व्यापारियों के लिए। सभी शाखाओं की बिलिंग लाइव सिंक (SD-WAN), मोबाइल पर 24/7 CCTV और फाइबर तार कटने पर तुरंत शुरू होने वाला ऑटो 4G/5G बैकअप।"
        },
        {
          "badge": "विकल्प 4 · फैक्ट्री व विनिर्माण उद्योग",
          "title": "1:1 डेडिकेटेड लीज्ड लाइन व मशीन IoT",
          "easyDesc": "फैक्ट्री या मैन्युफैक्चरिंग प्लांट के लिए। 1:1 अनशेयर्ड लीज्ड लाइन, 99.5% अपटाइम गारंटी, रिमोट सर्वर हेतु स्टैटिक आईपी और औद्योगिक मशीन सेंसर कनेक्टिविटी।"
        }
      ]
    },
    "step5": {
      "header": "विश्लेषण पूरा हुआ! आपके उत्तरों के आधार पर एयरटेल कैटलॉग से आपका डिजिटल बंडल तैयार है:",
      "whyTitle": "💡 बंडल चुनने का कारण (Plain Rationale):",
      "billLabel": "एकल पारदर्शी मासिक बिल:",
      "startOver": "दोबारा शुरू करें"
    },
    "rationales": {
      "clinic": "अस्थिर घरेलू ब्रॉडबैंड को हाई-स्पीड कमर्शियल फाइबर से बदलता है। क्लाउड टेलीफोनी सुनिश्चित करती है कि आईवीआर के माध्यम से मरीजों के अपॉइंटमेंट कॉल कभी न छूटें। क्लाउड ईमेल क्लिनिक डोमेन प्रदान करता है, और एंडपॉइंट सुरक्षा संवेदनशील मेडिकल रिकॉर्ड्स की सुरक्षा करती है।",
      "restaurant": "सभी शाखाओं को मैनेज्ड एसडी-वैन से जोड़ा गया है ताकि बिलिंग डेटा सुरक्षित सिंक रहे। 4G/5G ऑटो-फेलओवर सुनिश्चित करता है कि मेन फाइबर कटने पर भी यूपीआई पेमेंट कभी बंद न हो। क्लाउड सीसीटीवी सभी आउटलेट्स पर 24/7 लाइव निगरानी देता है।",
      "kirana": "किफायती बिज़ फाइबर 100 एमबीपीएस और स्टेटिक आईपी आपके यूपीआई क्यूआर और बिलिंग पीओएस को बिना रुकावट 99.5% अपटाइम के साथ चालू रखते हैं।",
      "manufacturing": "ईआरपी और मशीन संचालन के लिए 100 एमबीपीएस 1:1 डेडिकेटेड लीज्ड लाइन 99.9% एसएलए गारंटी के साथ। आईओटी सिम मशीनों की खराबी और बिजली खपत की लाइव निगरानी करते हैं।",
      "office": "300 एमबीपीएस बिजनेस फाइबर, क्लाउड ऑफिस सूट और एंडपॉइंट एंटीवायरस आपके वित्तीय डेटा व ऑडिट फाइलों को रैंसमवेयर से सुरक्षित रखते हैं।"
    },
    "recSolutionTag": "एयरटेल बिज़नेस समाधान",
    "recInclusionsTitle": "कैटलॉग में शामिल सेवाएं:",
    "recProductPlaceholder": "उत्पादों का विवरण देखने के लिए 4 चरण पूरे करें",
    "recAllInOneLabel": "ऑल-इन-वन मासिक लागत",
    "recSetupWaived": "इंस्टॉलेशन शुल्क माफ़",
    "demoSub": "product_catalogue.csv के 25 उत्पादों का तुरंत विश्लेषण करता है",
    "demoScenarios": {
      "clinic": "🩺 डेंटल क्लिनिक (12 कर्मचारी · 1 स्थान · होम ब्रॉडबैंड)",
      "restaurant": "🍽️ रेस्टोरेंट चेन (45 कर्मचारी · 5 शाखाएं · एसडी-वैन और सीसीटीवी)",
      "kirana": "🛒 किराना स्टोर (2 कर्मचारी · 1 दुकान · हॉटस्पॉट से पीओएस)",
      "manufacturing": "🏭 फैक्ट्री (85 कर्मचारी · 1 प्लांट · 100M लीज्ड लाइन + आईओटी)",
      "ca_firm": "💼 सीए एवं विधि फर्म (12 कर्मचारी · क्लाउड ईमेल + एंटीवायरस)"
    },
    "tabQuote": {
      "stepTag": "चरण 2 / 4 · तत्काल कोटेशन",
      "heading": "कस्टमाइज्ड डिजिटल बंडल और पारदर्शी मूल्य निर्धारण",
      "sub": "एकल समेकित चालान। सर्वर-साइड मूल्य निर्धारण लॉक। रीयल-टाइम में वैकल्पिक ऐड-ऑन चुनें।",
      "estLabel": "अनुमानित मासिक आवर्ती शुल्क",
      "baseInclusionsTitle": "मूल पैकेज में शामिल सेवाएं",
      "addonsTitle": "वैकल्पिक अनुशंसित ऐड-ऑन (सर्वर-सत्यापित)",
      "addonFailoverTitle": "स्वचालित 4G/5G वायरलेस बैकअप राउटर",
      "addonFailoverDesc": "अगर मुख्य इंटरनेट तार कट जाए, तो यह तुरंत मोबाइल सिम पर स्विच हो जाता है ताकि आपके यूपीआई क्यूआर और कार्ड मशीन कभी बंद न हों।",
      "addonCctvTitle": "क्लाउड सीसीटीवी सुरक्षा (2 एचडी कैमरे)",
      "addonCctvDesc": "दुकान का लाइव वीडियो और पिछले 30 दिनों की रिकॉर्डिंग सीधे अपने फोन पर कभी भी देखें—अलग से रिकॉर्डर मशीन लगाने की जरूरत नहीं।",
      "addonStaticIpTitle": "पब्लिक स्टैटिक आईपी एड्रेस",
      "addonStaticIpDesc": "आपके व्यवसाय के लिए एक स्थायी फिक्स्ड इंटरनेट पता—स्टाफ बायोमेट्रिक हाजिरी, ऑफिस सर्वर और सुरक्षित बैंक बिलिंग के लिए जरूरी।",
      "billTitle": "एकल एकीकृत मासिक बिल",
      "baseLabel": "मूल पैकेज",
      "addonLabel": "चयनित ऐड-ऑन",
      "setupLabel": "इंस्टॉलेशन व सेटअप शुल्क",
      "setupVal": "माफ़ (₹0)",
      "subtotalLabel": "उप-योग",
      "gstLabel": "जीएसटी (18%)",
      "totalLabel": "कुल देय मासिक राशि",
      "priceLockText": "12 महीनों के लिए मूल्य निर्धारण लॉक गारंटी",
      "gstInvoiceText": "एकल समेकित जीएसटी टैक्स चालान",
      "proceedText": "स्मार्ट केवाईसी सत्यापन के लिए आगे बढ़ें",
      "perMonth": "/ माह",
      "plusGst": "+ जीएसटी"
    },
    "tabKyc": {
      "stepTag": "चरण 3 / 4 · स्वचालित डिजिटल केवाईसी",
      "heading": "स्मार्ट केवाईसी और डेटा गोपनीयता इंजन",
      "sub": "डीपीडीपी अधिनियम 2023 सहमति और दूरसंचार विभाग के 90-दिवसीय नियमों के तहत राष्ट्रीय रजिस्ट्रियों से तत्काल सत्यापन।",
      "applicantSelectLabel": "परीक्षण नमूना आवेदक:",
      "dpdpTitle": "डीपीडीपी अधिनियम 2023 वैधानिक सहमति एवं गोपनीयता नोटिस",
      "dpdpPurposeBadge": "उद्देश्य-सीमित",
      "dpdpNoticeText": "डिजिटल व्यक्तिगत डेटा संरक्षण अधिनियम, 2023 और दूरसंचार विभाग के नियमों के अनुसार, एयरटेल बिज़नेस व्यावसायिक पंजीकरण और हस्ताक्षरकर्ता पहचान केवल सेवा सक्रियण, बिलिंग और वैधानिक सत्यापन के लिए एकत्र करता है। सभी व्यक्तिगत डेटा टोकनाइज़ और मास्क किया जाता है।",
      "dpdpConsentCheckLabel": "मैं जीएसटीएन और उद्यम राष्ट्रीय रजिस्ट्रियों से पंजीकरण डेटा सत्यापित करने के लिए स्पष्ट डिजिटल सहमति देता हूँ।",
      "doc1Title": "दस्तावेज़ 1: व्यावसायिक पंजीकरण (जीएसटी)",
      "doc1GstinLabel": "निकाला गया जीएसटीएन (मास्क किया हुआ):",
      "doc1LegalLabel": "संस्था का कानूनी नाम:",
      "doc1RegCheckLabel": "रजिस्ट्री क्रॉस-चेक:",
      "doc2Title": "दस्तावेज़ 2: एमएसएमई पंजीकरण (उद्यम)",
      "doc2UdyamNoLabel": "उद्यम एमएसएमई संख्या:",
      "doc2TypeLabel": "उद्यम श्रेणी:",
      "doc2PriorityLabel": "एमएसएमई प्राथमिकता:",
      "doc2PriorityVal": "प्राथमिकता बिजनेस ब्रॉडबैंड",
      "doc3Title": "दस्तावेज़ 3: अधिकृत हस्ताक्षरकर्ता पहचान",
      "doc3TokenBadge": "डीपीडीपी टोकनाइज्ड",
      "doc3SignatoryLabel": "अधिकृत हस्ताक्षरकर्ता:",
      "doc3IdLabel": "मास्क पहचान पत्र:",
      "doc3PrivacyLabel": "गोपनीयता सुरक्षा:",
      "doc4Title": "दस्तावेज़ 4: व्यावसायिक पते का प्रमाण",
      "doc4DocTypeLabel": "दस्तावेज़ का प्रकार:",
      "doc4IssueDateLabel": "वैधता और जारी तिथि:",
      "doc4PremisesLabel": "व्यावसायिक परिसर पता:",
      "uploadTitle": "सभी 4 KYC दस्तावेज़ अपलोड करें (kyc_documents/ से चुनें)",
      "uploadSub": "रजिस्ट्री सत्यापन हेतु GST, उद्यम, हस्ताक्षरकर्ता ID व पता प्रमाण अपलोड करें",
      "runKycBtnText": "स्वचालित अनुपालन व रजिस्ट्री जाँच शुरू करें",
      "runKycSubtext": "रजिस्ट्री डेटा और दूरसंचार विभाग के नियमों के अनुसार स्वचालित मूल्यांकन",
      "kycDecisionHeaderLabel": "स्वचालित सत्यापन निर्णय",
      "kycAuditFindingLabel": "अनुपालन सारांश:",
      "kycProceedBtnText": "केवाईसी स्वीकृत · ऑर्डर ट्रैकर पर आगे बढ़ें",
      "replaceBtn": "फ़ाइल बदलें",
      "removeBtn": "हटाएं",
      "clickUpload": "अपलोड करने के लिए क्लिक करें",
      "mandatoryDoc": "अनिवार्य दस्तावेज़",
      "awaitingDoc": "दस्तावेज़ अपलोड की प्रतीक्षा है",
      "notVerified": "सत्यापित नहीं (दस्तावेज़ अनुपलब्ध)",
      "docsActiveBadge": "4 / 4 दस्तावेज़ सक्रिय",
      "docsMissingBadge": "{count} / 4 अपलोड ({missing} शेष)",
      "activeDocsNotice": "सभी 4 दस्तावेज़ सुरक्षित रूप से एन्क्रिप्टेड हैं।",
      "missingDocsNotice": "कृपया सत्यापन के लिए सभी 4 दस्तावेज़ अपलोड करें।",
      "actionNeededPrefix": "कार्रवाई आवश्यक:",
      "decisionApprovedTitle": "सत्यापन स्वीकृत · सेवा सक्रियण हेतु तैयार",
      "decisionHaltedTitle": "सत्यापन रुका · अनुपालन समस्या",
      "decisionApprovedSummary": "संस्था सक्रिय रूप से सत्यापित है (<strong>{legalName}</strong>)। एमएसएमई उद्यम वर्गीकरण सत्यापित, परिसर का पता प्रमाण वैधानिक डीओटी 90-दिन की सीमा के भीतर है ({days} दिन पुराना), और डीपीडीपी अधिनियम 2023 डिजिटल सहमति दर्ज की गई है।",
      "auditDoc1": "दस्तावेज़ 1: जीएसटीएन रजिस्ट्री जांच ({gstin}): सक्रिय ({legalName})",
      "auditDoc2": "दस्तावेज़ 2: एमएसएमई उद्यम रजिस्ट्री जांच: {udyam} ({type})",
      "auditDoc3": "दस्तावेज़ 3: अधिकृत हस्ताक्षरकर्ता सत्यापन ({name} ({role})): डीपीडीपी टोकनाइज़्ड",
      "auditDoc4": "दस्तावेज़ 4: परिसर पता प्रमाण वैधता: {days} दिन पुराना (वैधानिक डीओटी नियम: ≤ 90 दिन)",
      "passBadge": "सफल",
      "failBadge": "असफल"
    },
    "tabTracker": {
      "stepTag": "चरण 4 / 4 · ऑर्डर और इंस्टॉलेशन",
      "heading": "ऑर्डर स्थिति और इंस्टॉलेशन ट्रैकर",
      "sub": "",
      "milestoneTitle": "इंस्टॉलेशन प्रगति",
      "slaBadge": "गारंटीड इंस्टॉलेशन: 48 घंटे के भीतर",
      "m1Title": "1. प्लान और कोटेशन स्वीकृत",
      "m1Desc": "12 महीने के मूल्य सुरक्षा के साथ आपका बिज़नेस प्लान कन्फर्म हुआ।",
      "m2Title": "2. बिज़नेस केवाईसी सत्यापित",
      "m2Desc": "व्यावसायिक पंजीकरण और दस्तावेज़ सफलतापूर्वक सत्यापित।",
      "m3Title": "3. इंस्टॉलेशन इंजीनियर नियुक्त",
      "m3Desc": "एयरटेल तकनीशियन आपका फ़ाइबर कनेक्शन लगाने के लिए आ रहे हैं।",
      "m3Status": "प्रगति पर है",
      "m4Title": "4. स्पीड टेस्ट और सेवा सक्रियण",
      "m4Desc": "आपकी दुकान पर स्पीड टेस्ट और स्वागत पुष्टिकरण एसएमएस।",
      "m4Status": "अनुमानित: कल",
      "assignedExecTitle": "नियुक्त इंस्टॉलेशन इंजीनियर",
      "assignedExecRole": "वरिष्ठ फ़ाइबर इंस्टॉलेशन इंजीनियर",
      "assignedExecRating": "★ 4.9 रेटिंग (420 इंस्टॉलेशन)",
      "slaLabel": "गारंटीड समय:",
      "slaVal": "48 घंटे के भीतर",
      "installWindowLabel": "इंस्टॉलेशन स्लॉट:",
      "installWindowVal": "कल, दोपहर 2:00 - शाम 4:00",
      "equipmentLabel": "उपकरण प्रदान किया गया:",
      "equipmentVal": "वाई-फ़ाई 6 हाई-स्पीड राउटर",
      "supportLabel": "मदद चाहिए? कॉल करें:",
      "revAdvTitle": "1. एआई सलाहकार डिस्कवरी",
      "revAdvSub": "आवश्यकताओं का आकलन · प्लान अनुशंसित",
      "revQuoteTitle": "2. कोटेशन व प्लान",
      "revQuoteSub": "पारदर्शी मासिक बिल लॉक",
      "revKycTitle": "3. स्मार्ट केवाईसी व गोपनीयता",
      "revKycSub": "4 दस्तावेज़ व जीएसटीएन सत्यापित",
      "doneBadge": "पूर्ण",
      "orderBadgeText": "ऑर्डर"
    },
    "footerText": "एयरटेल बिज़नेस एंटरप्राइज ट्रैक ए · प्रोजेक्ट उद्यम डिजिटल · पूर्णतः डीपीडीपी अधिनियम 2023 एवं दूरसंचार विभाग अनुपालन",
    "bundles": {
      "starter": {
        "name": "एयरटेल स्टार्टर डिजिटल पैक",
        "segment": "माइक्रो रिटेल व सेवाएँ",
        "sla": "99.5% कमर्शियल फाइबर",
        "desc": "बिज फाइबर 100 Mbps + स्टैटिक आईपी + क्लाउड पीओएस व बिलिंग 99.5% अपटाइम के साथ।"
      },
      "mfg_pro": {
        "name": "एयरटेल स्मार्ट मैन्युफैक्चरिंग सूट",
        "segment": "छोटे विनिर्माता / कारखाने",
        "sla": "99.9% समर्पित लीज्ड लाइन",
        "desc": "समर्पित 1:1 इंटरनेट लीज्ड लाइन (100 Mbps) + आईओटी मशीन मॉनिटरिंग + प्रबंधित फ़ायरवॉल।"
      },
      "multi_chain": {
        "name": "एयरटेल कनेक्टेड एंटरप्राइज (मल्टी-साइट)",
        "segment": "मल्टी-साइट व्यापार",
        "sla": "99.5% फाइबर + 4G बैकअप",
        "desc": "कमर्शियल ब्रॉडबैंड + क्लाउड वॉयस आईवीआर + बिजनेस ईमेल + 99.5% अपटाइम एसएलए सुरक्षा।"
      },
      "pro_office": {
        "name": "एयरटेल प्रोफेशनल ऑफिस सूट",
        "segment": "पेशेवर कार्यालय व क्लिनिक",
        "sla": "99.5% कमर्शियल फाइबर",
        "desc": "कमर्शियल ब्रॉडबैंड + क्लाउड वॉयस आईवीआर + बिजनेस ईमेल + 99.5% अपटाइम एसएलए सुरक्षा।"
      }
    },
    "kycBadges": {
      "activeTaxpayer": "सक्रिय करदाता",
      "suspended": "निलंबित",
      "cancelled": "रद्द किया गया",
      "verifiedMsme": "सत्यापित एमएसएमई",
      "exemptNone": "छूट प्राप्त / लागू नहीं",
      "dotValid": "वैध (≤90 दिन)",
      "dotExpired": "अमान्य / समाप्त (>90 दिन)",
      "approvedDecision": "स्वीकृत (APPROVED)",
      "rejectedDecision": "कार्रवाई आवश्यक / अस्वीकृत",
      "verifiedRegDate": "केंद्रीय जीएसटीएन में सत्यापित",
      "dpdpConsentStatus": "डीपीडीपी डिजिटल सहमति दर्ज",
      "notUploaded": "अपलोड नहीं · आवश्यक",
      "dpdpTokenized": "डीपीडीपी टोकनाइज़्ड"
    },
    "advisorLockedText": "खोज साक्षात्कार पूर्ण · उत्तर व सिफारिश सुरक्षित (केवल दृश्य)",
    "advisorEditText": "उत्तर संपादित करें",
    "advisorNextText": "आगे: कोटेशन",
    "backToAdvisorBtn": "एआई सलाहकार पर वापस जाएं",
    "quoteLockedText": "कोटेशन स्वीकृत · 12-महीने का मूल्य लॉक सक्रिय (केवल दृश्य)",
    "quoteEditText": "ऐड-ऑन बदलें",
    "quoteNextText": "आगे: स्मार्ट केवाईसी",
    "backToQuoteBtn": "कोटेशन व प्लान पर वापस जाएं",
    "kycLockedText": "स्मार्ट केवाईसी सत्यापित एवं डीपीडीपी सहमति दर्ज (केवल दृश्य)",
    "kycReturnTrackerText": "ऑर्डर ट्रैकर पर वापस लौटें",
    "reviewJourneyTitle": "ऑर्डर सक्रिय एवं ट्रैक किया जा रहा है:",
    "reviewJourneySub": "पिछले पृष्ठों से अपने सहेजे गए विवरण की समीक्षा करें (केवल दृश्य):",
    "revBtnAdv": "1. सलाहकार देखें",
    "revBtnQuote": "2. कोटेशन देखें",
    "revBtnKyc": "3. केवाईसी देखें",
    "inputPlaceholderLocked": "बातचीत पूर्ण · विवरण सुरक्षित (केवल दृश्य)",
    "kycVerifiedBadge": "केवाईसी सत्यापित व ऑडिट स्वीकृत",
    "continueToKyc": "स्मार्ट केवाईसी पर जाएं"
  },
  "ta": {
    "langCode": "ta-IN",
    "name": "தமிழ் (Tamil)",
    "brandSub": "திட்டம் உத்யம் டிஜிட்டல் · ஏர்டெல் பிசினஸ்",
    "navAdvisor": "1. AI ஆலோசகர்",
    "navQuote": "2. விலைப்பட்டியல்",
    "navKyc": "3. ஸ்மார்ட் KYC",
    "navTracker": "4. ஆர்டர் டிராக்கர்",
    "navBackOffice": "5. மேலாண்மை போர்டல்",
    "advisorHeading": "டிஜிட்டல் வணிக ஆலோசகர்",
    "advisorSub": "வரிசைமுறை கேள்வி: 1. வகை → 2. அளவு → 3. கிளைகள் → 4. தற்போதைய கருவிகள்",
    "stepProgress": "படி 4 இல் {step}",
    "restartBtn": "மீண்டும் தொடங்கு",
    "inputPlaceholder": "பதிலை தட்டச்சு செய்யவும் அல்லது மைக் மூலம் பேசவும்...",
    "sendBtn": "அனுப்பு",
    "whyTitle": "இந்த தொகுப்பு உங்கள் வணிகத்திற்கு ஏன் சிறந்தது:",
    "billLabel": "ஒற்றை வெளிப்படையான மாதாந்திர கட்டணம்:",
    "acceptBtn": "பரிந்துரையை ஏற்று விலையைக் காண்க",
    "recsBadge": "பரிந்துரை தயார்",
    "recsPending": "பகுப்பாய்வு நடக்கிறது",
    "awaitingTitle": "பதில்களுக்காக காத்திருக்கிறது",
    "awaitingDesc": "இடதுபுறத்தில் உள்ள 4 கேள்விகளுக்கு பதிலளிக்கவும். ஏர்டெல் தயாரிப்பு தொகுப்பு இங்கே தயாராகும்.",
    "awaitingRationale": "உங்கள் வணிக வகை, ஊழியர்கள் எண்ணிக்கை மற்றும் கிளைகளுக்கு ஏற்ப ஏர்டெல் தயாரிப்பு பட்டியலிலிருந்து சிறந்த தீர்வை பரிந்துரைக்கும்.",
    "demoTitle": "டெமோ காட்சிகள்:",
    "step1": {
      "title": "படி 1: தொழில் வகை",
      "question": "ஏர்டெல் பிசினஸுக்கு வரவேற்கிறோம்! <strong>படி 1 / 4: நீங்கள் என்ன வகையான தொழில் செய்கிறீர்கள்?</strong> (எ.கா. கிளினிக், மளிகைக் கடை, உணவகம், தொழிற்சாலை, அலுவலகம்)",
      "options": [
        {
          "label": "🩺 கிளினிக் / மருத்துவம்",
          "val": "மருத்துவ கிளினிக்"
        },
        {
          "label": "🛒 மளிகை / சில்லறை கடை",
          "val": "மளிகை கடை"
        },
        {
          "label": "🍽️ உணவகம் / பேக்கரி",
          "val": "உணவக கிளைகள்"
        },
        {
          "label": "🏭 தொழிற்சாலை",
          "val": "உதிரிபாகங்கள் தயாரிப்பு தொழிற்சாலை"
        },
        {
          "label": "💼 அலுவலகம் / ஆடிட்டர்",
          "val": "ஆடிட்டர் அலுவலகம்"
        }
      ],
      "placeholder": "தொழில் வகையை உள்ளிடவும் அல்லது பேசவும்..."
    },
    "step2": {
      "title": "படி 2: ஊழியர்கள் எண்ணிக்கை",
      "question": "நன்று! <strong>படி 2 / 4: உங்கள் நிறுவனத்தில் எத்தனை ஊழியர்கள் வேலை செய்கிறார்கள்?</strong>",
      "options": [
        {
          "label": "1-3 ஊழியர்கள்",
          "val": "2 ஊழியர்கள்"
        },
        {
          "label": "5-15 ஊழியர்கள்",
          "val": "12 ஊழியர்கள்"
        },
        {
          "label": "25-50 ஊழியர்கள்",
          "val": "45 ஊழியர்கள்"
        },
        {
          "label": "80+ தொழிலாளர்கள்",
          "val": "85 தொழிலாளர்கள்"
        }
      ],
      "placeholder": "ஊழியர்களின் எண்ணிக்கையை உள்ளிடவும்..."
    },
    "step3": {
      "title": "படி 3: கிளைகள் எண்ணிக்கை",
      "question": "புரிந்தது! <strong>படி 3 / 4: உங்கள் வணிகத்திற்கு எத்தனை கிளைகள் அல்லது கடைகள் உள்ளன?</strong>",
      "options": [
        {
          "label": "1 கடை",
          "val": "1 கடை"
        },
        {
          "label": "2-3 கிளைகள்",
          "val": "3 கிளைகள்"
        },
        {
          "label": "5 கிளைகள்",
          "val": "5 கிளைகள்"
        },
        {
          "label": "10+ கிளைகள்",
          "val": "10 கிளைகள்"
        }
      ],
      "placeholder": "கிளைகளின் எண்ணிக்கையை உள்ளிடவும்..."
    },
    "step4": {
      "title": "படி 4: தற்போதைய கருவிகள்",
      "question": "கடைசி கேள்வி! <strong>படி 4 / 4: தற்போது இணையத்திற்கு என்ன பயன்படுத்துகிறீர்கள், உங்களுக்கு என்ன கருவிகள் தேவை?</strong>",
      "options": [
        {
          "label": "1. கடை கவுண்டர் & POS (UPI வை-ஃபை)",
          "sub": "UPI சவுண்ட்பாக்ஸ் மற்றும் கார்டு ஸ்வைப் இயந்திரங்களுக்கு",
          "val": "Mobile Hotspot, need billing POS and guest Wi-Fi"
        },
        {
          "label": "2. அலுவலகம் & கிளினிக் (ஃபைபர், மின்னஞ்சல் & IVR)",
          "sub": "வணிக ஃபைபர், நிறுவன மின்னஞ்சல் & தானியங்கி வரவேற்பு",
          "val": "Home Broadband, need cloud telephony and office email"
        },
        {
          "label": "3. பல கிளைகள் (CCTV & பேக்கப்)",
          "sub": "நேரலை கிளை ஒத்திசைவு, மொபைல் CCTV & தானியங்கி 4G/5G பேக்கப்",
          "val": "Mixed Local ISP, need SD-WAN, CCTV cameras and failover"
        },
        {
          "label": "4. தொழிற்சாலை லீஸ்ட் லைன் (1:1 பிரத்யேக)",
          "sub": "1:1 பிரத்யேக லீஸ்ட் லைன், 99.5% SLA & இயந்திர IoT சென்சார்கள்",
          "val": "Need 100 Mbps dedicated leased line and machine sensors"
        }
      ],
      "placeholder": "தற்போதைய இணையம் மற்றும் தேவைகளை உள்ளிடவும்...",
      "guideTitle": "உங்கள் 4 விருப்பங்களுக்கான எளிய விளக்கம்:",
      "guideSubtitle": "உங்கள் தினசரி வணிகத் தேவைக்கேற்ப சிறந்த விருப்பத்தைத் தேர்வுசெய்யவும்:",
      "guideItems": [
        {
          "badge": "விருப்பம் 1 · சில்லறை & மளிகைக் கடை",
          "title": "கடை கவுண்டர் & UPI பில்லிங் POS",
          "easyDesc": "மொபைல் ஹாட்ஸ்பாட் பயன்படுத்தும் கடைகளுக்கு. UPI QR, சவுண்ட்பாக்ஸ் மற்றும் கார்டு ஸ்வைப் மெஷின் பில்லிங்கின் போது தடங்கலின்றி செயல்பட பிரத்யேக வை-ஃபை."
        },
        {
          "badge": "விருப்பம் 2 · கிளினிக்குகள் & தொழில்முறை அலுவலகங்கள்",
          "title": "அலுவலக தொகுப்பு, நிறுவன மின்னஞ்சல் & IVR",
          "easyDesc": "வீட்டு பிராட்பேண்ட் பயன்படுத்தும் அலுவலகங்களுக்கு. அதிவேக வணிக ஃபைபர், அதிகாரப்பூர்வ மின்னஞ்சல் (you@firm.com) மற்றும் அழைப்புகளைத் தவறவிடாமல் இருக்க தானியங்கி IVR அமைப்பு."
        },
        {
          "badge": "விருப்பம் 3 · பல கிளைகள் & உணவகங்கள்",
          "title": "கிளைகள் இணைப்பு, CCTV & 4G/5G பேக்கப்",
          "easyDesc": "பல கிளைகள் கொண்ட வணிகங்களுக்கு. அனைத்து கிளைகளிலும் பில்லிங் நேரலை ஒத்திசைவு, மொபைல் CCTV மற்றும் ஃபைபர் துண்டிக்கப்பட்டால் தானியங்கி 4G/5G காப்புப்பிரதி."
        },
        {
          "badge": "விருப்பம் 4 · தொழிற்சாலைகள் & உற்பத்தி ஆலைகள்",
          "title": "1:1 பிரத்யேக லீஸ்ட் லைன் & IoT சென்சார்கள்",
          "easyDesc": "தொழிற்சாலைகளுக்கு. 99.5% உத்தரவாதத்துடன் 1:1 பகிரப்படாத லீஸ்ட் லைன், சர்வர்களுக்கான நிலையான IP மற்றும் இயந்திர IoT சென்சார் இணைப்பு."
        }
      ]
    },
    "step5": {
      "header": "பகுப்பாய்வு முடிந்தது! ஏர்டெல் தயாரிப்பு அட்டவணையில் இருந்து உங்கள் திட்டம் இதோ:",
      "whyTitle": "💡 இந்த திட்டத்தை தேர்ந்தெடுத்ததற்கான காரணம்:",
      "billLabel": "ஒற்றை மாதாந்திர கட்டணம்:",
      "startOver": "மீண்டும் தொடங்கு"
    },
    "rationales": {
      "clinic": "நம்பகமான அதிவேக ஏர்டெல் ஃபைபர். கிளவுட் டெலிபோனி மூலம் நோயாளிகளின் அழைப்புகள் தவறவிடப்படாது. உத்தியோகபூர்வ மின்னஞ்சல் மற்றும் வைரஸ் எதிர்ப்பு பாதுகாப்பு.",
      "restaurant": "அனைத்து கிளைகளும் SD-WAN மூலம் இணைக்கப்படும். 4G/5G பேக்அப் மூலம் பில்லிங் மற்றும் UPI எப்போதும் இயங்கும். கிளவுட் சிசிடிவி நேரடி கண்காணிப்பை வழங்குகிறது.",
      "kirana": "குறைந்த செலவில் பிஸ் ஃபைபர் 100 Mbps மற்றும் ஸ்டேடிக் ஐபி தடையில்லா யுபிஐ பில்லிங்கை உறுதி செய்கிறது.",
      "manufacturing": "100 Mbps பிரத்யேக லீஸ்டு லைன் 99.9% உத்தரவாதத்துடன். IoT சென்சார்கள் இயந்திரங்களின் இயக்கத்தை கண்காணிக்கிறது.",
      "office": "300 Mbps ஃபைபர், கிளவுட் ஆபிஸ் சூட் மற்றும் பாதுகாப்பு கோப்புகளைப் பாதுகாக்கிறது."
    },
    "recSolutionTag": "அக்செல் பிசினஸ் தீர்வு",
    "recInclusionsTitle": "சேர்க்கப்பட்ட சேவைகள்:",
    "recProductPlaceholder": "தயாரிப்பு விவரங்களைக் காண 4 படிகளை முடிக்கவும்",
    "recAllInOneLabel": "மாதாந்திர மொத்த செலவு",
    "recSetupWaived": "நிறுவல் கட்டணம் தள்ளுபடி",
    "demoSub": "product_catalogue.csv இல் உள்ள 25 தயாரிப்புகளை உடனடியாக பகுப்பாய்வு செய்கிறது",
    "demoScenarios": {
      "clinic": "🩺 பல் மருத்துவமனை (12 ஊழியர்கள் · 1 கிளை · பிராட்பேண்ட்)",
      "restaurant": "🍽️ உணவக சங்கிலி (45 ஊழியர்கள் · 5 கிளைகள் · SD-WAN & CCTV)",
      "kirana": "🛒 மளிகைக் கடை (2 ஊழியர்கள் · 1 கடை · ஹாட்ஸ்பாட் to POS)",
      "manufacturing": "🏭 தொழிற்சாலை (85 ஊழியர்கள் · 100M லீஸ்ட் லைன் + IoT)",
      "ca_firm": "💼 ஆடிட்டர் அலுவலகம் (12 ஊழியர்கள் · அலுவலக மின்னஞ்சல் + பாதுகாப்பு)"
    },
    "tabQuote": {
      "stepTag": "படி 2 / 4 · உடனடி மேற்கோள்",
      "heading": "தனிப்பயனாக்கப்பட்ட டிஜிட்டல் தொகுப்பு & வெளிப்படையான விலை",
      "sub": "ஒரே ஒருங்கிணைந்த விலைப்பட்டியல். சர்வர் விலை பூட்டு. விருப்ப கூடுதல் சேவைகளைத் தேர்ந்தெடுக்கவும்.",
      "estLabel": "மதிப்பிடப்பட்ட மாதாந்திர கட்டணம்",
      "baseInclusionsTitle": "அடிப்படை தொகுப்பில் உள்ளவை",
      "addonsTitle": "பரிந்துரைக்கப்பட்ட கூடுதல் சேவைகள் (சர்வர் சரிபார்க்கப்பட்டது)",
      "addonFailoverTitle": "தானியங்கி 4G/5G வயர்லெஸ் பேக்கப் ரூட்டர்",
      "addonFailoverDesc": "முக்கிய ஃபைபர் கம்பி துண்டிக்கப்பட்டாலும், உடனடியாக மொபைல் சிம் மூலம் இயங்கும்; இதனால் UPI மற்றும் கார்டு பேமெண்ட் ஒருபோதும் நிற்காது.",
      "addonCctvTitle": "கிளவுட் சிசிடிவி கண்காணிப்பு (2 எச்டி கேமராக்கள்)",
      "addonCctvDesc": "கடையின் நேரடி வீடியோ மற்றும் 30 நாட்கள் பதிவுகளை உங்கள் மொபைல் போனில் எப்போது வேண்டுமானாலும் பார்க்கலாம்—என்விஆர் இயந்திரம் தேவையில்லை.",
      "addonStaticIpTitle": "பொது நிலையான ஐபி முகவரி",
      "addonStaticIpDesc": "உங்கள் வணிகத்திற்கான பிரத்யேக நிலையான முகவரி—பயோமெட்ரிக் வருகைப் பதிவு மற்றும் நேரடி வங்கி பில்லிங்கிற்கு அவசியமானது.",
      "billTitle": "ஒரே ஒருங்கிணைந்த மாதாந்திர பில்",
      "baseLabel": "அடிப்படை தொகுப்பு",
      "addonLabel": "தேர்ந்தெடுக்கப்பட்ட கூடுதல் சேவைகள்",
      "setupLabel": "நிறுவல் மற்றும் கட்டமைப்பு",
      "setupVal": "தள்ளுபடி (₹0)",
      "subtotalLabel": "துணை மொத்தம்",
      "gstLabel": "ஜிஎஸ்டி (18%)",
      "totalLabel": "மாதாந்திர மொத்த தொகை",
      "priceLockText": "12 மாதங்களுக்கு விலை பூட்டு உத்தரவாதம்",
      "gstInvoiceText": "ஒரே ஒருங்கிணைந்த ஜிஎஸ்டி வரி விலைப்பட்டியல்",
      "proceedText": "ஸ்மார்ட் கேஒய்சி சரிபார்ப்புக்கு செல்லவும்",
      "perMonth": "/ மாதம்",
      "plusGst": "+ ஜிஎஸ்டி"
    },
    "tabKyc": {
      "stepTag": "படி 3 / 4 · தானியங்கி டிஜிட்டல் கேஒய்சி",
      "heading": "ஸ்மார்ட் கேஒய்சி & தரவு தனியுரிமை அமைப்பு",
      "sub": "டிபிடிபி சட்டம் 2023 ஒப்புதல் மற்றும் டாட் 90 நாள் விதிகளுடன் தேசிய பதிவேடுகளில் உடனடி சரிபார்ப்பு.",
      "applicantSelectLabel": "மாதிரி விண்ணப்பதாரர்:",
      "dpdpTitle": "டிபிடிபி சட்டம் 2023 சட்டப்பூர்வ ஒப்புதல் மற்றும் தனியுரிமை அறிவிப்பு",
      "dpdpPurposeBadge": "நோக்கம்-வரையறுக்கப்பட்டது",
      "dpdpNoticeText": "டிஜிட்டல் தனிநபர் தரவு பாதுகாப்பு சட்டம் 2023 இன் படி, தொலைத்தொடர்பு சேவை மற்றும் பில்லிங் நோக்கங்களுக்காக மட்டுமே ஆவணங்கள் பெறப்படுகின்றன. தனிநபர் விவரங்கள் முகமூடி இடப்பட்டு பாதுகாக்கப்படுகின்றன.",
      "dpdpConsentCheckLabel": "ஜிஎஸ்டிஎன் மற்றும் உத்யம் தேசிய பதிவேடுகளில் சரிபார்க்க நான் வெளிப்படையான டிஜிட்டல் ஒப்புதலை வழங்குகிறேன்.",
      "doc1Title": "ஆவணம் 1: வணிகப் பதிவு (ஜிஎஸ்டி)",
      "doc1GstinLabel": "எடுக்கப்பட்ட ஜிஎஸ்டி எண்:",
      "doc1LegalLabel": "நிறுவனத்தின் சட்டப்பூர்வ பெயர்:",
      "doc1RegCheckLabel": "பதிவேடு சரிபார்ப்பு:",
      "doc2Title": "ஆவணம் 2: எம்எஸ்எம்இ பதிவு (உத்யம்)",
      "doc2UdyamNoLabel": "உத்யம் பதிவு எண்:",
      "doc2TypeLabel": "வகைப்பாடு:",
      "doc2PriorityLabel": "எம்எஸ்எம்இ முன்னுரிமை:",
      "doc2PriorityVal": "முன்னுரிமை வணிக பிராட்பேண்ட்",
      "doc3Title": "ஆவணம் 3: அங்கீகரிக்கப்பட்ட கையொப்பமிட்டவர் ஐடி",
      "doc3TokenBadge": "டிபிடிபி டோக்கனாக்கப்பட்டது",
      "doc3SignatoryLabel": "அங்கீகரிக்கப்பட்ட கையொப்பமிட்டவர்:",
      "doc3IdLabel": "மறைக்கப்பட்ட அடையாள எண்:",
      "doc3PrivacyLabel": "தனியுரிமை பாதுகாப்பு:",
      "doc4Title": "ஆவணம் 4: முகவரி ஆதாரம்",
      "doc4DocTypeLabel": "ஆவண வகை:",
      "doc4IssueDateLabel": "செல்லுபடியாகும் காலம் & தேதி:",
      "doc4PremisesLabel": "வணிக முகவரி:",
      "uploadTitle": "அனைத்து 4 KYC ஆவணங்களையும் பதிவேற்றவும் (kyc_documents/ இலிருந்து)",
      "uploadSub": "பதிவேட்டில் சரிபார்க்க GST, உதயம், கையொப்ப அடையாள அட்டை மற்றும் முகவரி சான்றைப் பதிவேற்றவும்",
      "runKycBtnText": "தானியங்கி சரிபார்ப்பை இயக்கவும்",
      "runKycSubtext": "விதிகளின்படி தன்னாட்சி மதிப்பீடு",
      "kycDecisionHeaderLabel": "தானியங்கி சரிபார்ப்பு முடிவு",
      "kycAuditFindingLabel": "இணக்க சுருக்கம்:",
      "kycProceedBtnText": "கேஒய்சி அங்கீகரிக்கப்பட்டது · ஆர்டர் டிராக்கருக்கு செல்லவும்",
      "replaceBtn": "கோப்பை மாற்றவும்",
      "removeBtn": "நீக்கு",
      "clickUpload": "பதிவேற்ற கிளிக் செய்யவும்",
      "mandatoryDoc": "கட்டாய ஆவணம்",
      "awaitingDoc": "ஆவணப் பதிவேற்றத்திற்காக காத்திருக்கிறது",
      "notVerified": "சரிபார்க்கப்படவில்லை (ஆவணம் இல்லை)",
      "docsActiveBadge": "4 / 4 ஆவணங்கள் செயலில் உள்ளன",
      "docsMissingBadge": "{count} / 4 பதிவேற்றப்பட்டது ({missing} விடுபட்டுள்ளது)",
      "activeDocsNotice": "அனைத்து 4 ஆவணங்களும் பாதுகாப்பாக குறியாக்கம் செய்யப்பட்டுள்ளன.",
      "missingDocsNotice": "சரிபார்க்க அனைத்து 4 ஆவணங்களையும் பதிவேற்றவும்.",
      "actionNeededPrefix": "நடவடிக்கை தேவை:",
      "decisionApprovedTitle": "சரிபார்ப்பு அங்கீகரிக்கப்பட்டது · சேவை வழங்கலுக்கு தயார்",
      "decisionHaltedTitle": "சரிபார்ப்பு நிறுத்தப்பட்டது · இணக்கப் பிரச்சனை",
      "decisionApprovedSummary": "நிறுவனம் செயலில் உள்ளதாக சரிபார்க்கப்பட்டது (<strong>{legalName}</strong>). குறுந்தொழில் உதயம் வகைப்பாடு சரிபார்க்கப்பட்டது, வளாக முகவரிச் சான்று சட்டப்பூர்வ DoT 90-நாள் வரம்பிற்குள் உள்ளது ({days} நாட்கள் பழமையானது), மற்றும் DPDP சட்டம் 2023 டிஜிட்டல் ஒப்புதல் பதிவு செய்யப்பட்டுள்ளது.",
      "auditDoc1": "ஆவணம் 1: GSTIN சரிபார்ப்பு ({gstin}): செயலில் உள்ளது ({legalName})",
      "auditDoc2": "ஆவணம் 2: MSME உதயம் சரிபார்ப்பு: {udyam} ({type})",
      "auditDoc3": "ஆவணம் 3: அங்கீகரிக்கப்பட்ட கையொப்பமிட்டவர் சரிபார்ப்பு ({name} ({role})): DPDP டோக்கனைஸ் செய்யப்பட்டது",
      "auditDoc4": "ஆவணம் 4: வளாக முகவரி சான்று காலம்: {days} நாட்கள் (DoT விதி: ≤ 90 நாட்கள்)",
      "passBadge": "வெற்றி",
      "failBadge": "தோல்வி"
    },
    "tabTracker": {
      "stepTag": "படி 4 / 4 · ஆர்டர் மற்றும் நிறுவல்",
      "heading": "ஆர்டர் நிலை மற்றும் நிறுவல் டிராக்கர்",
      "sub": "",
      "milestoneTitle": "நிறுவல் முன்னேற்றம்",
      "slaBadge": "உறுதியளிக்கப்பட்ட நிறுவல்: 48 மணி நேரத்திற்குள்",
      "m1Title": "1. திட்டம் & விலைப்புள்ளி உறுதிப்படுத்தப்பட்டது",
      "m1Desc": "12 மாத விலை உத்தரவாதத்துடன் உங்கள் வணிகத் திட்டம் உறுதி செய்யப்பட்டது.",
      "m2Title": "2. வணிக கேஒய்சி சரிபார்க்கப்பட்டது",
      "m2Desc": "வணிகப் பதிவு மற்றும் ஆவணங்கள் வெற்றிகரமாக சரிபார்க்கப்பட்டன.",
      "m3Title": "3. நிறுவல் பொறியாளர் நியமிக்கப்பட்டுள்ளார்",
      "m3Desc": "ஏர்டெல் தொழில்நுட்ப வல்லுநர் ஃபைபர் இணைப்பை நிறுவ வருகிறார்கள்.",
      "m3Status": "செயலில் உள்ளது",
      "m4Title": "4. வேக சோதனை & சேவை தொடக்கம்",
      "m4Desc": "உங்கள் கடையில் வேக சோதனை மற்றும் வரவேற்பு SMS உறுதிப்படுத்தல்.",
      "m4Status": "நாளை எதிர்பார்க்கப்படுகிறது",
      "assignedExecTitle": "நியமிக்கப்பட்ட நிறுவல் பொறியாளர்",
      "assignedExecRole": "சீனியர் ஃபைபர் நிறுவல் பொறியாளர்",
      "assignedExecRating": "★ 4.9 மதிப்பீடு (420 நிறுவல்கள்)",
      "slaLabel": "உறுதியளிக்கப்பட்ட நேரம்:",
      "slaVal": "48 மணி நேரத்திற்குள்",
      "installWindowLabel": "நிறுவல் நேரம்:",
      "installWindowVal": "நாளை, மதியம் 2:00 - மாலை 4:00",
      "equipmentLabel": "வழங்கப்பட்ட உபகரணங்கள்:",
      "equipmentVal": "வை-ஃபை 6 அதிவேக ரூட்டர்",
      "supportLabel": "உதவி தேவையா? அழைக்கவும்:",
      "revAdvTitle": "1. AI ஆலோசகர் கண்டறிதல்",
      "revAdvSub": "தேவைகள் மதிப்பிடப்பட்டன · திட்டம் பரிந்துரைக்கப்பட்டது",
      "revQuoteTitle": "2. மேற்கோள் & திட்டம்",
      "revQuoteSub": "வெளிப்படையான மாதாந்திர பில் பூட்டப்பட்டது",
      "revKycTitle": "3. ஸ்மார்ட் KYC & தனியுரிமை",
      "revKycSub": "4 ஆவணங்கள் & GSTN சரிபார்க்கப்பட்டது",
      "doneBadge": "முடிந்தது",
      "orderBadgeText": "ஆர்டர்"
    },
    "footerText": "அக்செல் பிசினஸ் · புராஜெக்ட் உத்யம் டிஜிட்டல் · டிபிடிபி சட்டம் 2023 மற்றும் டாட் முழு இணக்கம்",
    "bundles": {
      "starter": {
        "name": "ஏர்டெல் ஸ்டார்ட்டர் டிஜிட்டல் பேக்",
        "segment": "சிறு வணிகம் & சில்லறை விற்பனை",
        "sla": "99.5% ஃபைபர்",
        "desc": "பிஸ் ஃபைபர் 100 Mbps + நிலையான ஐபி + கிளவுட் பில்லிங் பிஓஎஸ்."
      },
      "mfg_pro": {
        "name": "ஏர்டெல் ஸ்மார்ட் உற்பத்திக் கட்டமைப்பு",
        "segment": "சிறு உற்பத்தியாளர்கள்",
        "sla": "99.9% பிரத்யேக லீஸ்ட் லைன்",
        "desc": "100 Mbps பிரத்யேக இணைய இணைப்பு + ஐஓடி சென்சార్లు + ஃபயர்வால் பாதுகாப்பு."
      },
      "multi_chain": {
        "name": "ஏர்டெல் கனெக்டட் எண்டர்பிரைஸ் (மல்டி-சைட்)",
        "segment": "பல கிளை வணிகங்கள்",
        "sla": "99.5% ஃபைபர் + 4G பேக்கப்",
        "desc": "வணிக பிராட்பேண்ட் + கிளவுட் வாய்ஸ் + அலுவலக மின்னஞ்சல் + பாதுகாப்பு."
      },
      "pro_office": {
        "name": "ஏர்டெல் புரொபஷனல் ஆபிஸ் சூட்",
        "segment": "தொழில்முறை அலுவலகங்கள்",
        "sla": "99.5% ஃபைபர்",
        "desc": "வணிக பிராட்பேண்ட் + கிளவுட் வாய்ஸ் + தொழில்முறை மின்னஞ்சல் + பாதுகாப்பு."
      }
    },
    "kycBadges": {
      "activeTaxpayer": "செயலில் உள்ள வரி செலுத்துவோர்",
      "suspended": "இடைநிறுத்தப்பட்டது",
      "cancelled": "ரத்து செய்யப்பட்டது",
      "verifiedMsme": "சரிபார்க்கப்பட்ட எம்எஸ்எம்இ",
      "exemptNone": "விலக்கு / இல்லை",
      "dotValid": "செல்லுபடியாகும் (≤90 நாட்கள்)",
      "dotExpired": "காலாவதியானது (>90 நாட்கள்)",
      "approvedDecision": "APPROVED",
      "rejectedDecision": "ACTION REQUIRED / REJECTED",
      "verifiedRegDate": "தேசிய ஜிஎஸ்டி பதிவேட்டில் சரிபார்க்கப்பட்டது",
      "dpdpConsentStatus": "டிபிடிபி ஒப்புதல் பதிவு செய்யப்பட்டது",
      "notUploaded": "பதிவேற்றப்படவில்லை · தேவை",
      "dpdpTokenized": "DPDP டோக்கனைஸ் செய்யப்பட்டது"
    },
    "advisorLockedText": "விவரங்கள் பெறப்பட்டன · பரிந்துரை சேமிக்கப்பட்டது (மாற்ற முடியாது)",
    "advisorEditText": "பதில்களைத் திருத்து",
    "advisorNextText": "அடுத்து: மேற்கோள்",
    "backToAdvisorBtn": "ஏஐ ஆலோசகருக்குச் செல்",
    "quoteLockedText": "மேற்கோள் ஏற்கப்பட்டது · 12 மாத விலை பூட்டு (மாற்ற முடியாது)",
    "quoteEditText": "சேவைகளை மாற்று",
    "quoteNextText": "அடுத்து: ஸ்மார்ட் கேஒய்சி",
    "backToQuoteBtn": "விலைப்பட்டியலுக்குச் செல்",
    "kycLockedText": "கேஒய்சி சரிபார்க்கப்பட்டது (மாற்ற முடியாது)",
    "kycReturnTrackerText": "டிராக்கருக்குத் திரும்பு",
    "reviewJourneyTitle": "ஆர்டர் செயல்பாட்டில் உள்ளது:",
    "reviewJourneySub": "முந்தைய பக்கங்களின் விவரங்களை மதிப்பாய்வு செய்யவும்:",
    "revBtnAdv": "1. ஆலோசகர்",
    "revBtnQuote": "2. மேற்கோள்",
    "revBtnKyc": "3. கேஒய்சி",
    "inputPlaceholderLocked": "முடிந்தது · விவரங்கள் பூட்டப்பட்டன",
    "kycVerifiedBadge": "கேஒய்சி அங்கீகரிக்கப்பட்டது",
    "continueToKyc": "கேஒய்சிக்குச் செல்லவும்"
  },
  "te": {
    "langCode": "te-IN",
    "name": "తెలుగు (Telugu)",
    "brandSub": "ప్రాజెక్ట్ ఉద్యమ్ డిజిటల్ · ఎయిర్‌టెల్ బిజినెస్",
    "navAdvisor": "1. AI అడ్వైజర్",
    "navQuote": "2. కొటేషన్ & ప్లాన్",
    "navKyc": "3. స్మార్ట్ KYC",
    "navTracker": "4. ఆర్డర్ ట్రాకర్",
    "navBackOffice": "5. బ్యాక్-ఆఫీస్ పోర్టల్",
    "advisorHeading": "డిజిటల్ బిజినెస్ అడ్వైజర్",
    "advisorSub": "క్రమబద్ధమైన సంభాషణ: 1. రకం → 2. సైజు → 3. శాఖలు → 4. ప్రస్తుత టూల్స్",
    "stepProgress": "దశ 4 లో {step}",
    "restartBtn": "మళ్లీ ప్రారంభించండి",
    "inputPlaceholder": "సమాధానం టైప్ చేయండి లేదా మైక్ ద్వారా మాట్లాడండి...",
    "sendBtn": "పంపండి",
    "whyTitle": "ఈ బండిల్ మీ వ్యాపారానికి ఎందుకు ఉత్తమమైనది:",
    "billLabel": "ఒకే పారదర్శక నెలవారీ బిల్లు:",
    "acceptBtn": "సిఫార్సును అంగీకరించి కొటేషన్ చూడండి",
    "recsBadge": "సిఫార్సు సిద్ధంగా ఉంది",
    "recsPending": "విశ్లేషణ కొనసాగుతోంది",
    "awaitingTitle": "సమాధానాల కోసం వేచి ఉంది",
    "awaitingDesc": "ఎడమ వైపున ఉన్న 4 ప్రశ్నలకు సమాధానం ఇవ్వండి. ఎయిర్‌టెల్ ప్లాన్ ఇక్కడ రూపొందించబడుతుంది.",
    "awaitingRationale": "మీ వ్యాపార రకం, సిబ్బంది సంఖ్య మరియు బ్రాంచ్‌ల ఆధారంగా ఎయిర్‌టెల్ ప్రాడక్ట్ క్యాటలాగ్ నుండి తగిన డిజిటల్ ప్యాకేజీని సిఫార్సు చేస్తుంది.",
    "demoTitle": "డెమో దృశ్యాలు:",
    "step1": {
      "title": "దశ 1: వ్యాపార రకం",
      "question": "ఎయిర్‌టెల్ బిజినెస్‌కి స్వాగతం! <strong>దశ 1 / 4: మీరు ఎలాంటి వ్యాపారాన్ని నిర్వహిస్తున్నారు?</strong> (ఉదా. క్లినిక్, కిరాణా దుకాణం, రెస్టారెంట్, ఫ్యాక్టరీ, కార్యాలయం)",
      "options": [
        {
          "label": "🩺 క్లినిక్ / ఆసుపత్రి",
          "val": "డెంటల్ క్లినిక్"
        },
        {
          "label": "🛒 కిరాణా / రిటైల్ దుకాణం",
          "val": "కిరాణా స్టోర్"
        },
        {
          "label": "🍽️ రెస్టారెంట్ / బేకరీ",
          "val": "రెస్టారెంట్ చైన్"
        },
        {
          "label": "🏭 ఫ్యాక్టరీ / తయారీ రంగం",
          "val": "తయారీ ఫ్యాక్టరీ"
        },
        {
          "label": "💼 ఆఫీస్ / సీఏ సంస్థ",
          "val": "సీఏ మరియు లీగల్ సంస్థ"
        }
      ],
      "placeholder": "వ్యాపార రకాన్ని నమోదు చేయండి..."
    },
    "step2": {
      "title": "దశ 2: సిబ్బంది సంఖ్య",
      "question": "బాగుంది! <strong>దశ 2 / 4: మీ వ్యాపారంలో ఎంతమంది ఉద్యోగులు లేదా సిబ్బంది పనిచేస్తున్నారు?</strong>",
      "options": [
        {
          "label": "1-3 సిబ్బంది",
          "val": "2 సిబ్బంది"
        },
        {
          "label": "5-15 ఉద్యోగులు",
          "val": "12 ఉద్యోగులు"
        },
        {
          "label": "25-50 ఉద్యోగులు",
          "val": "45 ఉద్యోగులు"
        },
        {
          "label": "80+ కార్మికులు",
          "val": "85 కార్మికులు"
        }
      ],
      "placeholder": "ఉద్యోగుల సంఖ్యను నమోదు చేయండి..."
    },
    "step3": {
      "title": "దశ 3: శాఖల సంఖ్య",
      "question": "అర్థమైంది! <strong>దశ 3 / 4: మీ వ్యాపారానికి ఎన్ని శాఖలు లేదా దుకాణాలు ఉన్నాయి?</strong>",
      "options": [
        {
          "label": "1 ఒకే దుకాణం",
          "val": "1 దుకాణం"
        },
        {
          "label": "2-3 శాఖలు",
          "val": "3 శాఖలు"
        },
        {
          "label": "5 అవుట్‌లెట్లు",
          "val": "5 శాఖలు"
        },
        {
          "label": "10+ బ్రాంచీలు",
          "val": "10 శాఖలు"
        }
      ],
      "placeholder": "శాఖల సంఖ్యను నమోదు చేయండి..."
    },
    "step4": {
      "title": "దశ 4: ప్రస్తుత టూల్స్",
      "question": "చివరి ప్రశ్న! <strong>దశ 4 / 4: ప్రస్తుతం ఇంటర్నెట్ కోసం ఏమి వాడుతున్నారు మరియు మీకు ఎలాంటి టూల్స్ కావాలి?</strong>",
      "options": [
        {
          "label": "1. షాప్ కౌంటర్ & POS (UPI వై-ఫై)",
          "sub": "UPI సౌండ్‌బాక్స్ మరియు కార్డ్ స్వైప్ మెషీన్ల కోసం",
          "val": "Mobile Hotspot, need billing POS and guest Wi-Fi"
        },
        {
          "label": "2. ఆఫీస్ & క్లినిక్ (ఫైబర్, ఈమెయిల్ & IVR)",
          "sub": "కమర్షియల్ ఫైబర్, అధికారిక ఈమెయిల్ & ఆటోమేటెడ్ రిసెప్షన్",
          "val": "Home Broadband, need cloud telephony and office email"
        },
        {
          "label": "3. మల్టీ-స్టోర్ బ్రాంచీలు (CCTV & బ్యాకప్)",
          "sub": "లైవ్ బ్రాంచ్ సింక్, మొబైల్ CCTV & ఆటో 4G/5G బ్యాకప్",
          "val": "Mixed Local ISP, need SD-WAN, CCTV cameras and failover"
        },
        {
          "label": "4. ఫ్యాక్టరీ లీజ్డ్ లైన్ (1:1 డెడికేటెడ్)",
          "sub": "1:1 అన్‌షేర్డ్ లీజ్డ్ లైన్, 99.5% SLA & మెషిన్ IoT సెన్సార్లు",
          "val": "Need 100 Mbps dedicated leased line and machine sensors"
        }
      ],
      "placeholder": "ప్రస్తుత టూల్స్ మరియు అవసరాలు...",
      "guideTitle": "మీ 4 ఎంపికల సరళమైన వివరణ:",
      "guideSubtitle": "మీ ప్రస్తుత వ్యాపార ఏర్పాటుకు తగిన ఎంపికను ఎంచుకోండి:",
      "guideItems": [
        {
          "badge": "ఎంపిక 1 · కిరాణా & చిన్న రిటైల్ దుకాణం",
          "title": "షాప్ కౌంటర్ & UPI బిల్లింగ్ POS",
          "easyDesc": "ప్రస్తుతం మొబైల్ హాట్‌స్పాట్ వాడుతున్న దుకాణాలు, కిరాణా షాపుల కోసం. మీ UPI QR కోడ్, సౌండ్‌బాక్స్ మరియు కార్డ్ స్వైప్ మెషీన్లు బిల్లింగ్ సమయంలో ఆగకుండా స్థిరమైన వై-ఫై అందిస్తుంది."
        },
        {
          "badge": "ఎంపిక 2 · క్లినిక్‌లు & ఆఫీసులు",
          "title": "ఆఫీస్ సూట్, డొమైన్ ఈమెయిల్ & IVR",
          "easyDesc": "హోమ్ బ్రాడ్‌బ్యాండ్ వాడుతున్న క్లినిక్‌లు, CA ఆఫీసుల కోసం. హై-స్పీడ్ బిజినెస్ ఫైబర్, అధికారిక డొమైన్ ఈమెయిల్ (you@firm.com), మరియు కస్టమర్/రోగి కాల్స్ మిస్ కాకుండా ఆటోమేటెడ్ IVR ఫోన్ సిస్టమ్."
        },
        {
          "badge": "ఎంపిక 3 · మల్టీ-బ్రాంచ్ స్టోర్లు & రెస్టారెంట్లు",
          "title": "మల్టీ-బ్రాంచ్ సింక్, CCTV & 4G/5G బ్యాకప్",
          "easyDesc": "ఎక్కువ బ్రాంచీలు ఉన్న వ్యాపారాల కోసం. అన్ని స్టోర్ల బిల్లింగ్‌ను లైవ్ సింక్ చేస్తుంది, ఫోన్‌లో 24/7 CCTV లైవ్ వీక్షణ మరియు బయట ఫైబర్ వైర్ తెగితే ఆటోమేటిక్ 4G/5G బ్యాకప్ అందిస్తుంది."
        },
        {
          "badge": "ఎంపిక 4 · ఫ్యాక్టరీలు & తయారీ యూనిట్లు",
          "title": "1:1 డెడికేటెడ్ లీజ్డ్ లైన్ & మెషిన్ IoT",
          "easyDesc": "ఫ్యాక్టరీలు మరియు తయారీ ప్లాంట్ల కోసం. 99.5% అప్‌టైమ్ హామీతో 1:1 అన్‌షేర్డ్ డెడికేటెడ్ లీజ్డ్ లైన్, స్టాటిక్ IP మరియు మెషినరీ సెన్సార్ కనెక్టివిటీ."
        }
      ]
    },
    "step5": {
      "header": "విశ్లేషణ పూర్తయింది! మీ సమాధానాల ఆధారంగా ఎయిర్‌టెల్ డిజిటల్ ప్లాన్ సిద్ధంగా ఉంది:",
      "whyTitle": "💡 ఈ బండిల్‌ను ఎంచుకోవడానికి గల కారణం:",
      "billLabel": "నెలవారీ బిల్లు:",
      "startOver": "మళ్లీ ప్రారంభించండి"
    },
    "rationales": {
      "clinic": "హై-స్పీడ్ బిజినెస్ ఫైబర్. క్లౌడ్ టెలిఫోనీ పేషెంట్ కాల్స్ మిస్ కాకుండా చూస్తుంది. క్లౌడ్ ఈమెయిల్ మరియు డేటా భద్రత.",
      "restaurant": "అన్ని బ్రాంచీలకు SD-WAN కనెక్టివిటీ. 4G/5G ఫెయిల్‌ఓవర్ వల్ల యూపీఐ చెల్లింపులు ఆగవు. క్లౌడ్ సీసీటీవీ లైవ్ నిఘా ఉంచుతుంది.",
      "kirana": "తక్కువ ఖర్చుతో బిజ్ ఫైబర్ 100 Mbps మరియు స్టాటిక్ ఐపీ నిరంతర యూపీఐ బిల్లింగ్ అందిస్తాయి.",
      "manufacturing": "100 Mbps డెడికేటెడ్ లీజ్డ్ లైన్ 99.9% హామీతో. IoT సెన్సార్లు మెషినరీ పనితీరును గమనిస్తాయి.",
      "office": "300 Mbps ఫైబర్, క్లౌడ్ ఆఫీస్ సూట్ మరియు యాంటీవైరస్ ఫైనాన్షియల్ డేటాను కాపాడతాయి."
    },
    "recSolutionTag": "ఎయిర్‌టెల్ బిజినెస్ పరిష్కారం",
    "recInclusionsTitle": "కేటలాగ్ చేరికలు:",
    "recProductPlaceholder": "ఉత్పత్తుల వివరాలను చూడటానికి 4 దశలను పూర్తి చేయండి",
    "recAllInOneLabel": "ఆల్-ఇన్-వన్ నెలవారీ ఖర్చు",
    "recSetupWaived": "ఇన్‌స్టాలేషన్ రుసుము రద్దు",
    "demoSub": "product_catalogue.csv లోని 25 ఉత్పత్తులను వెంటనే విశ్లేషిస్తుంది",
    "demoScenarios": {
      "clinic": "🩺 డెంటల్ క్లినిక్ (12 మంది సిబ్బంది · 1 శాఖ · హోమ్ బ్రాడ్‌బ్యాండ్)",
      "restaurant": "🍽️ రెస్టారెంట్ చైన్ (45 మంది సిబ్బంది · 5 శాఖలు · SD-WAN & CCTV)",
      "kirana": "🛒 కిరాణా దుకాణం (2 సిబ్బంది · 1 దుకాణం · హాట్‌స్పాట్ నుండి పీవోఎస్)",
      "manufacturing": "🏭 ఫ్యాక్టరీ (85 కార్మికులు · 1 ప్లాంట్ · 100M లీజ్డ్ లైన్ + ఐఓటీ)",
      "ca_firm": "💼 సీఏ & లా సంస్థ (12 సిబ్బంది · క్లౌడ్ ఈమెయిల్ + యాంటీవైరస్)"
    },
    "tabQuote": {
      "stepTag": "దశ 2 / 4 · తక్షణ కొటేషన్",
      "heading": "అనుకూలీకరించిన డిజిటల్ బండిల్ & పారదర్శక ధరలు",
      "sub": "సింగిల్ ఏకీకృత ఇన్‌వాయిస్. సర్వర్ లాక్ చేసిన ధర. రియల్-టైమ్‌లో యాడ్-ఆన్‌లను ఎంచుకోండి.",
      "estLabel": "అంచనా వేసిన నెలవారీ రికరింగ్",
      "baseInclusionsTitle": "బేస్ ప్యాకేజీలో చేర్చబడినవి",
      "addonsTitle": "ఐచ్ఛిక సిఫార్సు చేసిన యాడ్-ఆన్‌లు (సర్వర్ ధృవీకరించినవి)",
      "addonFailoverTitle": "ఆటోమేటిక్ 4G/5G వైర్‌లెస్ బ్యాకప్ రౌటర్",
      "addonFailoverDesc": "ప్రధాన ఇంటర్నెట్ వైర్ కట్ అయినా, వెంటనే మొబైల్ సిమ్‌కి మారుతుంది; దీంతో మీ యూపీఐ క్యూఆర్ మరియు కార్డ్ మెషీన్లు ఎప్పుడూ ఆగవు.",
      "addonCctvTitle": "క్లౌడ్ సీసీటీవీ పర్యవేక్షణ (2 హెచ్‌డీ కెమెరాలు)",
      "addonCctvDesc": "దుకాణం లైవ్ వీడియో మరియు 30 రోజుల రికార్డింగ్‌లను మీ ఫోన్‌లో ఎక్కడి నుంచైనా చూడవచ్చు—ఖరీదైన రికార్డర్ బాక్స్ అవసరం లేదు.",
      "addonStaticIpTitle": "పబ్లిక్ స్టాటిక్ ఐపీ చిరునామా",
      "addonStaticIpDesc": "మీ వ్యాపారం కోసం శాశ్వత ఇంటర్నెట్ చిరునామా—బయోమెట్రిక్ హాజరు, లోకల్ సర్వర్లు మరియు సురక్షిత బ్యాంక్ బిల్లింగ్ కోసం అవసరం.",
      "billTitle": "సింగిల్ ఏకీకృత నెలవారీ బిల్లు",
      "baseLabel": "బేస్ ప్యాకేజీ",
      "addonLabel": "ఎంచుకున్న యాడ్-ఆన్‌లు",
      "setupLabel": "ఇన్‌స్టాలేషన్ & సెటప్ రుసుము",
      "setupVal": "రద్దు చేయబడింది (₹0)",
      "subtotalLabel": "మొత్తం",
      "gstLabel": "జీఎస్టీ (18%)",
      "totalLabel": "మొత్తం చెల్లించాల్సిన నెలవారీ మొత్తం",
      "priceLockText": "12 నెలల ధర లాక్ హామీ",
      "gstInvoiceText": "సింగిల్ ఏకీకృత జీఎస్టీ పన్ను ఇన్‌వాయిస్",
      "proceedText": "స్మార్ట్ కేవైసీ ధృవీకరణకు కొనసాగండి",
      "perMonth": "/ నెలకు",
      "plusGst": "+ జీఎస్టీ"
    },
    "tabKyc": {
      "stepTag": "దశ 3 / 4 · స్వయంచాలక డిజిటల్ కేవైసీ",
      "heading": "స్మార్ట్ కేవైసీ & డేటా గోప్యతా ఇంజిన్",
      "sub": "డీపీడీపీ చట్టం 2023 సమ్మతి మరియు డీఓటీ 90 రోజుల నిబంధనలతో జాతీయ రిజిస్ట్రీల నుండి తక్షణ ధృవీకరణ.",
      "applicantSelectLabel": "నమూనా దరఖాస్తుదారు:",
      "dpdpTitle": "డీపీడీపీ చట్టం 2023 చట్టబద్ధమైన సమ్మతి & గోప్యతా నోటీసు",
      "dpdpPurposeBadge": "ప్రయోజన-పరిమితం",
      "dpdpNoticeText": "డిజిటల్ పర్సనల్ డేటా ప్రొటెక్షన్ యాక్ట్, 2023 మరియు టెలికమ్యూనికేషన్స్ డిపార్ట్‌మెంట్ నిబంధనల ప్రకారం, వ్యాపార రిజిస్ట్రేషన్ మరియు సంతకందారు ఆధారాలు సర్వీస్ యాక్టివేషన్, బిల్లింగ్ కోసం మాత్రమే సేకరించబడతాయి. వ్యక్తిగత సమాచారం పూర్తిగా మాస్క్ చేయబడుతుంది.",
      "dpdpConsentCheckLabel": "జీఎస్టీఎన్ మరియు ఉద్యమ్ జాతీయ రిజిస్ట్రీల నుండి డేటాను ధృవీకరించడానికి నేను స్పష్టమైన డిజిటల్ సమ్మతిని ఇస్తున్నాను.",
      "doc1Title": "పత్రం 1: వ్యాపార రిజిస్ట్రేషన్ (జీఎస్టీ)",
      "doc1GstinLabel": "గుర్తించిన జీఎస్టీఎన్ (మాస్క్ చేయబడింది):",
      "doc1LegalLabel": "సంస్థ చట్టపరమైన పేరు:",
      "doc1RegCheckLabel": "రిజిస్ట్రీ ధృవీకరణ:",
      "doc2Title": "పత్రం 2: ఎంఎస్ఎంఈ రిజిస్ట్రేషన్ (ఉద్యమ్)",
      "doc2UdyamNoLabel": "ఉద్యమ్ ఎంఎస్ఎంఈ సంఖ్య:",
      "doc2TypeLabel": "వర్గీకరణ:",
      "doc2PriorityLabel": "ఎంఎస్ఎంఈ ప్రాధాన్యత:",
      "doc2PriorityVal": "ప్రాధాన్యత బిజినెస్ బ్రాడ్‌బ్యాండ్",
      "doc3Title": "పత్రం 3: అధీకృత సంతకందారు గుర్తింపు",
      "doc3TokenBadge": "డీపీడీపీ టోకనైజ్ చేయబడింది",
      "doc3SignatoryLabel": "అధీకృత సంతకందారు:",
      "doc3IdLabel": "మాస్క్ చేసిన గుర్తింపు సంఖ్య:",
      "doc3PrivacyLabel": "గోప్యతా రక్షణ:",
      "doc4Title": "పత్రం 4: వ్యాపార చిరునామా రుజువు",
      "doc4DocTypeLabel": "పత్రం రకం:",
      "doc4IssueDateLabel": "చెల్లుబాటు & జారీ తేదీ:",
      "doc4PremisesLabel": "వ్యాపార స్థల చిరునామా:",
      "uploadTitle": "అన్ని 4 KYC పత్రాలను అప్‌లోడ్ చేయండి (kyc_documents/ నుండి ఎంచుకోండి)",
      "uploadSub": "రిజిస్ట్రీ ధృవీకరణ కోసం GST, ఉద్యమ్, సంతకం ID మరియు చిరునామా రుజువును అప్‌లోడ్ చేయండి",
      "runKycBtnText": "స్వయంచాలక సమ్మతి & రిజిస్ట్రీ తనిఖీని ప్రారంభించండి",
      "runKycSubtext": "రిజిస్ట్రీ డేటా మరియు నిబంధనల ప్రకారం స్వయంప్రతిపత్త మూల్యాంకనం",
      "kycDecisionHeaderLabel": "స్వయంచాలక ధృవీకరణ నిర్ణయం",
      "kycAuditFindingLabel": "సమ్మతి సారాంశం:",
      "kycProceedBtnText": "కేవైసీ ఆమోదించబడింది · ఆర్డర్ ట్రాకర్‌కు కొనసాగండి",
      "replaceBtn": "ఫైల్ మార్చండి",
      "removeBtn": "తొలగించండి",
      "clickUpload": "అప్‌లోడ్ చేయడానికి క్లిక్ చేయండి",
      "mandatoryDoc": "తప్పనిసరి పత్రం",
      "awaitingDoc": "పత్రం అప్‌లోడ్ కోసం వేచి ఉంది",
      "notVerified": "ధృవీకరించబడలేదు (పత్రం లేదు)",
      "docsActiveBadge": "4 / 4 పత్రాలు యాక్టివ్",
      "docsMissingBadge": "{count} / 4 అప్‌లోడ్ చేయబడ్డాయి ({missing} మిగిలి ఉన్నాయి)",
      "activeDocsNotice": "అన్ని 4 పత్రాలు సురక్షితంగా గుప్తీకరించబడ్డాయి.",
      "missingDocsNotice": "ధృవీకరణ కోసం దయచేసి అన్ని 4 పత్రాలను అప్‌లోడ్ చేయండి.",
      "actionNeededPrefix": "చర్య అవసరం:",
      "decisionApprovedTitle": "ధృవీకరణ ఆమోదించబడింది · ప్రొవిజనింగ్ కోసం సిద్ధంగా ఉంది",
      "decisionHaltedTitle": "ధృవీకరణ నిలిపివేయబడింది · సమ్మతి సమస్య కనుగొనబడింది",
      "decisionApprovedSummary": "సంస్థ యాక్టివ్‌గా ధృవీకరించబడింది (<strong>{legalName}</strong>). ఎంఎస్ఎంఈ ఉద్యమ్ వర్గీకరణ ధృవీకరించబడింది, ప్రాంగణం చిరునామా రుజువు చట్టబద్ధమైన డీఓటీ 90 రోజుల పరిమితుల్లో ఉంది ({days} రోజుల క్రితం), మరియు డీపీడీపీ చట్టం 2023 డిజిటల్ సమ్మతి నమోదు చేయబడింది.",
      "auditDoc1": "పత్రం 1: జీఎస్టీఎన్ రిజిస్ట్రీ తనిఖీ ({gstin}): యాక్టివ్ ({legalName})",
      "auditDoc2": "పత్రం 2: ఎంఎస్ఎంఈ ఉద్యమ్ రిజిస్ట్రీ తనిఖీ: {udyam} ({type})",
      "auditDoc3": "పత్రం 3: అధీకృత సంతకందారు ధృవీకరణ ({name} ({role})): డీపీడీపీ టోకనైజ్డ్",
      "auditDoc4": "పత్రం 4: ప్రాంగణ చిరునామా రుజువు చెల్లుబాటు: {days} రోజులు (చట్టబద్ధమైన డీఓటీ నిబంధన: ≤ 90 రోజులు)",
      "passBadge": "పాస్",
      "failBadge": "ఫెయిల్"
    },
    "tabTracker": {
      "stepTag": "దశ 4 / 4 · ఆర్డర్ మరియు ఇన్‌స్టాలేషన్",
      "heading": "ఆర్డర్ స్థితి మరియు ఇన్‌స్టాలేషన్ ట్రాకర్",
      "sub": "",
      "milestoneTitle": "ఇన్‌స్టాలేషన్ పురోగతి",
      "slaBadge": "గ్యారెంటీడ్ ఇన్‌స్టాలేషన్: 48 గంటల్లోపు",
      "m1Title": "1. ప్లాన్ & కొటేషన్ నిర్ధారించబడింది",
      "m1Desc": "12 నెలల ధర రక్షణతో మీ వ్యాపార ప్లాన్ నిర్ధారించబడింది.",
      "m2Title": "2. వ్యాపార కేవైసీ ధృవీకరించబడింది",
      "m2Desc": "వ్యాపార రిజిస్ట్రేషన్ మరియు పత్రాలు విజయవంతంగా ధృవీకరించబడ్డాయి.",
      "m3Title": "3. ఇన్‌స్టాలేషన్ ఇంజనీర్ కేటాయించబడ్డారు",
      "m3Desc": "ఎయిర్‌టెల్ టెక్నీషియన్ ఫైబర్ కనెక్షన్ ఇన్‌స్టాల్ చేయడానికి వస్తున్నారు.",
      "m3Status": "కొనసాగుతోంది",
      "m4Title": "4. స్పీడ్ టెస్ట్ & సర్వీస్ యాక్టివేషన్",
      "m4Desc": "మీ వ్యాపార స్థలంలో స్పీడ్ టెస్ట్ మరియు వెల్‌కమ్ కన్ఫర్మేషన్ SMS.",
      "m4Status": "రేపు అంచనా",
      "assignedExecTitle": "కేటాయించిన ఇన్‌స్టాలేషన్ ఇంజనీర్",
      "assignedExecRole": "సీనియర్ ఫైబర్ ఇన్‌స్టాలేషన్ ఇంజనీర్",
      "assignedExecRating": "★ 4.9 రేటింగ్ (420 ఇన్‌స్టాల్స్)",
      "slaLabel": "గ్యారెంటీ సమయం:",
      "slaVal": "48 గంటల్లోపు",
      "installWindowLabel": "ఇన్‌స్టాలేషన్ సమయం:",
      "installWindowVal": "రేపు, మధ్యాహ్నం 2:00 - సాయంత్రం 4:00",
      "equipmentLabel": "అందించిన పరికరాలు:",
      "equipmentVal": "వై-ఫై 6 హై-స్పీడ్ రౌటర్",
      "supportLabel": "సహాయం కావాలా? కాల్ చేయండి:",
      "revAdvTitle": "1. ఏఐ అడ్వైజర్ డిస్కవరీ",
      "revAdvSub": "అవసరాల అంచనా · ప్లాన్ సిఫార్సు చేయబడింది",
      "revQuoteTitle": "2. కొటేషన్ & ప్లాన్",
      "revQuoteSub": "పారదర్శక నెలవారీ బిల్లు లాక్ చేయబడింది",
      "revKycTitle": "3. స్మార్ట్ కేవైసీ & ప్రైవసీ",
      "revKycSub": "4 పత్రాలు & జీఎస్టీఎన్ ధృవీకరించబడ్డాయి",
      "doneBadge": "పూర్తయింది",
      "orderBadgeText": "ఆర్డర్"
    },
    "footerText": "ఎయిర్‌టెల్ బిజినెస్ ఎంటర్‌ప్రైజ్ ట్రాక్ ఏ · ప్రాజెక్ట్ ఉద్యమ్ డిజిటల్ · పూర్తిగా డీపీడీపీ చట్టం 2023 & డీఓటీ నిబంధనల ప్రకారం",
    "bundles": {
      "starter": {
        "name": "ఎయిర్‌టెల్ స్టార్టర్ డిజిటల్ ప్యాక్",
        "segment": "మైక్రో రిటైల్ & సేవలు",
        "sla": "99.5% కమర్షియల్ ఫైబర్",
        "desc": "బిజ్ ఫైబర్ 100 Mbps + స్టాటిక్ ఐపీ + క్లౌడ్ పీవోఎస్ & బిల్లింగ్ 99.5% అప్‌టైమ్‌తో."
      },
      "mfg_pro": {
        "name": "ఎయిర్‌టెల్ స్మార్ట్ మాన్యుఫ్యాక్చరింగ్ సూట్",
        "segment": "చిన్న పరిశ్రమలు",
        "sla": "99.9% లీజ్డ్ లైన్ ఎస్‌ఎల్‌ఏ",
        "desc": "డెడికేటెడ్ 1:1 ఇంటర్నెట్ లీజ్డ్ లైన్ (100 Mbps) + ఐఓటీ మెషిన్ టెలిమెట్రీ + సెక్యూరిటీ."
      },
      "multi_chain": {
        "name": "ఎయిర్‌టెల్ కనెక్టెడ్ ఎంటర్‌ప్రైజ్ (మల్టీ-సైట్)",
        "segment": "బహుళ శాఖల వ్యాపారాలు",
        "sla": "99.5% ఫైబర్ + 4G ఫెయిల్‌ఓవర్",
        "desc": "కమర్షియల్ బ్రాడ్‌బ్యాండ్ + క్లౌడ్ వాయిస్ ఐవీఆర్ + బిజినెస్ ఈమెయిల్ + ఎండ్‌పాయింట్ సెక్యూరిటీ."
      },
      "pro_office": {
        "name": "ఎయిర్‌టెల్ ప్రొఫెషనల్ ఆఫీస్ సూట్",
        "segment": "ప్రొఫెషనల్ కార్యాలయాలు & క్లినిక్‌లు",
        "sla": "99.5% కమర్షియల్ ఫైబర్",
        "desc": "కమర్షియల్ బ్రాడ్‌బ్యాండ్ + క్లౌడ్ వాయిస్ ఐవీఆర్ + బిజినెస్ ఈమెయిల్ + ఎండ్‌పాయింట్ సెక్యూరిటీ."
      }
    },
    "kycBadges": {
      "activeTaxpayer": "యాక్టివ్ పన్ను చెల్లింపుదారు",
      "suspended": "సస్పెండ్ చేయబడింది",
      "cancelled": "రద్దు చేయబడింది",
      "verifiedMsme": "ధృవీకరించబడిన ఎంఎస్ఎంఈ",
      "exemptNone": "మినహాయింపు / వర్తించదు",
      "dotValid": "చెల్లుబాటు (≤90 రోజులు)",
      "dotExpired": "గడువు ముగిసింది (>90 రోజులు)",
      "approvedDecision": "ఆమోదించబడింది (APPROVED)",
      "rejectedDecision": "చర్య అవసరం / తిరస్కరించబడింది",
      "verifiedRegDate": "కేంద్ర జీఎస్టీఎన్‌లో ధృవీకరించబడింది",
      "dpdpConsentStatus": "డీపీడీపీ డిజిటల్ సమ్మతి నమోదు",
      "notUploaded": "అప్‌లోడ్ చేయలేదు · తప్పనిసరి",
      "dpdpTokenized": "డీపీడీపీ టోకనైజ్డ్"
    },
    "advisorLockedText": "డిస్కవరీ పూర్తయింది · సమాధానాలు & సిఫార్సు భద్రపరచబడ్డాయి (ఎడిట్ చేయలేరు)",
    "advisorEditText": "సమాధానాలు మార్చండి",
    "advisorNextText": "తరువాత: కొటేషన్",
    "backToAdvisorBtn": "ఏఐ అడ్వైజర్‌కు తిరిగి వెళ్లండి",
    "quoteLockedText": "కొటేషన్ ఆమోదించబడింది · 12 నెలల ధర లాక్ యాక్టివ్ (ఎడిట్ చేయలేరు)",
    "quoteEditText": "యాడ్-ఆన్లు మార్చండి",
    "quoteNextText": "తరువాత: స్మార్ట్ కేవైసీ",
    "backToQuoteBtn": "కొటేషన్ & ప్లాన్‌కు తిరిగి వెళ్లండి",
    "kycLockedText": "స్మార్ట్ కేవైసీ ధృవీకరించబడింది & డీపీడీపీ సమ్మతి నమోదు (ఎడిట్ చేయలేరు)",
    "kycReturnTrackerText": "ఆర్డర్ ట్రాకర్‌కు తిరిగి వెళ్లండి",
    "reviewJourneyTitle": "ఆర్డర్ యాక్టివ్‌గా ట్రాక్ చేయబడుతోంది:",
    "reviewJourneySub": "గత పేజీల నుండి మీరు సమర్పించిన వివరాలను ఇక్కడ సమీక్షించండి:",
    "revBtnAdv": "1. అడ్వైజర్ చూడండి",
    "revBtnQuote": "2. కొటేషన్ చూడండి",
    "revBtnKyc": "3. కేవైసీ చూడండి",
    "inputPlaceholderLocked": "డిస్కవరీ ముగిసింది · వివరాలు సేవ్ చేయబడ్డాయి (చూడటానికి మాత్రమే)",
    "kycVerifiedBadge": "కేవైసీ ధృవీకరించబడింది & ఆడిట్ పాస్ అయింది",
    "continueToKyc": "స్మార్ట్ కేవైసీకి కొనసాగండి"
  },
  "mr": {
    "langCode": "mr-IN",
    "name": "मराठी (Marathi)",
    "brandSub": "प्रकल्प उद्यम डिजिटल · एअरटेल बिझनेस",
    "navAdvisor": "1. एआय सल्लागार",
    "navQuote": "2. कोटेशन व प्लॅन",
    "navKyc": "3. स्मार्ट केवायसी",
    "navTracker": "4. ऑर्डर ट्रॅकर",
    "navBackOffice": "5. व्यवस्थापन डॅशबोर्ड",
    "advisorHeading": "डिजिटल बिझनेस सल्लागार",
    "advisorSub": "क्रमबद्ध संवाद: 1. प्रकार → 2. आकार → 3. शाखा → 4. साधने",
    "stepProgress": "पायरी 4 पैकी {step}",
    "restartBtn": "पुन्हा सुरू करा",
    "inputPlaceholder": "उत्तर टाइप करा किंवा माइकवर बोला...",
    "sendBtn": "पाठवा",
    "whyTitle": "हा बंडल आपल्या व्यवसायासाठी सर्वोत्तम का आहे:",
    "billLabel": "एकत्रित पारदर्शक मासिक बिल:",
    "acceptBtn": "शिफारस स्वीकारा आणि कोटेशन पहा",
    "recsBadge": "प्लॅन तयार आहे",
    "recsPending": "विश्लेषण सुरू आहे",
    "awaitingTitle": "उत्तरांची प्रतीक्षा आहे",
    "awaitingDesc": "डावीकडील 4 प्रश्नांची उत्तरे द्या. एअरटेल डिजिटल पॅक येथे तयार होईल.",
    "awaitingRationale": "शिफारस इंजिन तुमच्या व्यवसायाचा प्रकार, कर्मचारी संख्या आणि शाखांनुसार एअरटेल प्रॉडक्ट कॅटलॉगमधून सर्वोत्तम उपाय निवडेल.",
    "demoTitle": "डेमो परिस्थिती:",
    "step1": {
      "title": "पायरी 1: व्यवसायाचा प्रकार",
      "question": "एअरटेल बिझनेसमध्ये आपले स्वागत आहे! <strong>पायरी 1 / 4: तुम्ही कोणत्या प्रकारचा व्यवसाय चालवता?</strong> (उदा. क्लिनिक, किराणा दुकान, रेस्टॉरंट, फॅक्टरी, कार्यालय)",
      "options": [
        {
          "label": "🩺 क्लिनिक / रुग्णालय",
          "val": "डेंटल क्लिनिक"
        },
        {
          "label": "🛒 किराणा / रिटेल दुकान",
          "val": "किराणा स्टोअर"
        },
        {
          "label": "🍽️ रेस्टॉरंट / कॅफे",
          "val": "रेस्टॉरंट साखळी"
        },
        {
          "label": "🏭 फॅक्टरी / उत्पादन युनिट",
          "val": "मॅन्युफॅक्चरिंग फॅक्टरी"
        },
        {
          "label": "💼 सीए / वकील / कार्यालय",
          "val": "सीए फर्म"
        }
      ],
      "placeholder": "व्यवसायाचा प्रकार टाइप करा..."
    },
    "step2": {
      "title": "पायरी 2: कर्मचाऱ्यांची संख्या",
      "question": "छान! <strong>पायरी 2 / 4: तुमच्या व्यवसायात किती कर्मचारी काम करतात?</strong>",
      "options": [
        {
          "label": "1-3 कर्मचारी",
          "val": "2 कर्मचारी"
        },
        {
          "label": "5-15 कर्मचारी",
          "val": "12 कर्मचारी"
        },
        {
          "label": "25-50 कर्मचारी",
          "val": "45 कर्मचारी"
        },
        {
          "label": "80+ कामगार",
          "val": "85 कामगार"
        }
      ],
      "placeholder": "कर्मचाऱ्यांची संख्या टाका..."
    },
    "step3": {
      "title": "पायरी 3: शाखांची संख्या",
      "question": "समजले! <strong>पायरी 3 / 4: तुमच्या व्यवसायाच्या किती शाखा किंवा दुकाने आहेत?</strong>",
      "options": [
        {
          "label": "1 दुकान",
          "val": "1 दुकान"
        },
        {
          "label": "2-3 शाखा",
          "val": "3 शाखा"
        },
        {
          "label": "5 शाखा",
          "val": "5 शाखा"
        },
        {
          "label": "10+ शाखा",
          "val": "10 शाखा"
        }
      ],
      "placeholder": "शाखांची संख्या टाका..."
    },
    "step4": {
      "title": "पायरी 4: सध्याची साधने",
      "question": "शेवटचा प्रश्न! <strong>पायरी 4 / 4: सध्या तुम्ही इंटरनेटसाठी काय वापरता आणि तुम्हाला कोणती साधने हवी आहेत?</strong>",
      "options": [
        {
          "label": "1. दुकान काउंटर व POS (UPI वाय-फाय)",
          "sub": "UPI साउंडबॉक्स व बिलिंग कार्ड मशीन सुरळीत चालण्यासाठी",
          "val": "Mobile Hotspot, need billing POS and guest Wi-Fi"
        },
        {
          "label": "2. कार्यालय व क्लिनिक (फायबर, ईमेल व IVR)",
          "sub": "व्यावसायिक फायबर, अधिकृत डोमेन ईमेल व स्वयंचलित फोन स्वागत",
          "val": "Home Broadband, need cloud telephony and office email"
        },
        {
          "label": "3. मल्टि-स्टोअर शाखा (CCTV व बॅकअप)",
          "sub": "शाखांचे लाइव्ह बिलिंग सिंक, मोबाईल CCTV व ऑटो 4G/5G बॅकअप",
          "val": "Mixed Local ISP, need SD-WAN, CCTV cameras and failover"
        },
        {
          "label": "4. कारखाना लीज्ड लाइन (1:1 समर्पित)",
          "sub": "1:1 अनशेअर्ड लीज्ड लाइन, 99.5% SLA व मशीन IoT सेन्सर्स",
          "val": "Need 100 Mbps dedicated leased line and machine sensors"
        }
      ],
      "placeholder": "सध्याची साधने व गरजा...",
      "guideTitle": "आपल्या 4 पर्यायांचे सोप्या भाषेतील स्पष्टीकरण:",
      "guideSubtitle": "आपल्या सध्याच्या व्यावसायिक सेटअपनुसार योग्य पर्याय निवडा:",
      "guideItems": [
        {
          "badge": "पर्याय 1 · दुकान व किराणा काउंटर",
          "title": "दुकान काउंटर व UPI बिलिंग POS",
          "easyDesc": "मोबाईल हॉटस्पॉट वापरणाऱ्या दुकानांसाठी. UPI QR कोड, साउंडबॉक्स आणि कार्ड स्वाइप मशीन बिलिंग करताना अडकू नये म्हणून वेगळे वाय-फाय."
        },
        {
          "badge": "पर्याय 2 · क्लिनिक व व्यावसायिक कार्यालये",
          "title": "ऑफिस सुइट, डोमेन ईमेल व फोन IVR",
          "easyDesc": "घरगुती ब्रॉडबँड वापरणाऱ्या कार्यालयांसाठी. हाय-स्पीड व्यावसायिक फायबर, कंपनी ईमेल (you@firm.com) आणि ग्राहक कॉल चुकणार नाहीत यासाठी स्वयंचलित IVR फोन प्रणाली."
        },
        {
          "badge": "पर्याय 3 · मल्टि-शाखा स्टोअर्स व रेस्टॉरंट्स",
          "title": "शाखा समन्वय, CCTV व 4G/5G बॅकअप",
          "easyDesc": "अनेक शाखा असलेल्या व्यावसायिकांसाठी. सर्व शाखांचे बिलिंग लाइव्ह सिंक, मोबाईलवर 24/7 CCTV आणि फायबर तुटल्यास त्वरित सुरू होणारा ऑटो 4G/5G बॅकअप."
        },
        {
          "badge": "पर्याय 4 · कारखाने व उत्पादन उद्योग",
          "title": "1:1 डेडिकेटेड लीज्ड लाइन व मशीन IoT",
          "easyDesc": "कारखान्यांसाठी. 99.5% अपटाइम हमीसह 1:1 अनशेअर्ड लीज्ड लाइन, रिमोट सर्व्हरसाठी स्टॅटिक आयपी आणि यंत्रसामग्री सेन्सर कनेक्टिव्हिटी."
        }
      ]
    },
    "step5": {
      "header": "विश्लेषण पूर्ण झाले! एअरटेल कॅटलॉगमधून आपला डिजिटल बंडल तयार आहे:",
      "whyTitle": "💡 हा बंडल निवडण्याचे कारण:",
      "billLabel": "एकत्रित मासिक बिल:",
      "startOver": "पुन्हा सुरू करा"
    },
    "rationales": {
      "clinic": "हाय-स्पीड व्यावसायिक फायबर. क्लाउड टेलिफोनी मुळे रुग्णांचे कॉल सुटणार नाहीत. अधिकृत ईमेल आणि डेटा सुरक्षा.",
      "restaurant": "सर्व शाखा SD-WAN ने जोडल्या जातील. 4G/5G बॅकअप मुळे यूपीआय पेमेंट बंद पडणार नाही. क्लाउड सीसीटीव्ही थेट पाळत ठेवेल.",
      "kirana": "कमी खर्चात बिझ फायबर 100 Mbps आणि स्टॅटिक आयपी अखंड यूपीआय बिलिंग देईल.",
      "manufacturing": "100 Mbps 1:1 डेडिकेटेड लीज्ड लाइन 99.9% हमीसह. IoT सेन्सर्स मशीनच्या कार्यक्षमतेवर लक्ष ठेवतील.",
      "office": "300 Mbps फायबर, क्लाउड ऑफिस आणि अँटीव्हायरस आर्थिक डेटा सुरक्षित ठेवतील."
    },
    "recSolutionTag": "एयरटेल बिझनेस सोल्यूशन",
    "recInclusionsTitle": "कॅटलॉग समाविष्ट सेवा:",
    "recProductPlaceholder": "उत्पादनांचा तपशील पाहण्यासाठी 4 पायऱ्या पूर्ण करा",
    "recAllInOneLabel": "एकूण मासिक खर्च",
    "recSetupWaived": "सेटअप फी माफ",
    "demoSub": "product_catalogue.csv मधील 25 उत्पादनांचे त्वरित विश्लेषण करते",
    "demoScenarios": {
      "clinic": "🩺 डेंटल क्लिनिक (12 कर्मचारी · 1 शाखा · ब्रॉडबँड)",
      "restaurant": "🍽️ रेस्टॉरंट चेन (45 कर्मचारी · 5 शाखा · SD-WAN व CCTV)",
      "kirana": "🛒 किराणा स्टोअर (2 कर्मचारी · 1 दुकान · हॉटस्पॉट ते POS)",
      "manufacturing": "🏭 फॅक्टरी (85 कर्मचारी · 1 प्लांट · 100M लीज्ड लाईन + IoT)",
      "ca_firm": "💼 सीए आणि कायदा फर्म (12 कर्मचारी · क्लाउड ईमेल + सुरक्षा)"
    },
    "tabQuote": {
      "stepTag": "पायरी 2 / 4 · त्वरित कोटेशन",
      "heading": "कस्टमाइज्ड डिजिटल बंडल आणि पारदर्शक दर",
      "sub": "एकच एकत्रित इनव्हॉइस. सर्व्हर-साइड दर लॉक. रिअल-टाइममध्ये अतिरिक्त सेवा निवडा.",
      "estLabel": "अंदाजे मासिक आवर्ती खर्च",
      "baseInclusionsTitle": "मूळ पॅकेजमधील समाविष्ट सेवा",
      "addonsTitle": "पर्यायी शिफारस केलेले ॲड-ऑन्स (सर्व्हर पडताळलेले)",
      "addonFailoverTitle": "स्वयंचलित 4G/5G वायरलेस बॅकअप राउटर",
      "addonFailoverDesc": "मुख्य इंटरनेट वायर तुटल्यास, हे लगेच मोबाईल सिमवर सुरू होते जेणेकरून तुमचे यूपीआई व कार्ड पेमेंट कधीही थांबणार नाही.",
      "addonCctvTitle": "क्लाउड सीसीटीव्ही पाळत (2 एचडी कॅमेरे)",
      "addonCctvDesc": "दुकानाचे थेट व्हिडिओ आणि मागील 30 दिवसांचे रेकॉर्डिंग थेट तुमच्या फोनवर कधीही पहा—वेगळ्या रेकॉर्डिंग मशिनची गरज नाही.",
      "addonStaticIpTitle": "पब्लिक स्टॅटिक आयपी ॲड्रेस",
      "addonStaticIpDesc": "तुमच्या व्यवसायासाठी निश्चित इंटरनेट पत्ता—बायोमेट्रिक हजेरी, ऑफिस सर्व्हर आणि सुरक्षित बँक बिलिंगसाठी आवश्यक.",
      "billTitle": "एकच एकत्रित मासिक बिल",
      "baseLabel": "मूळ पॅकेज",
      "addonLabel": "निवडलेले ॲड-ऑन्स",
      "setupLabel": "इन्स्टॉलेशन आणि सेटअप खर्च",
      "setupVal": "माफ (₹0)",
      "subtotalLabel": "उप-एकूण",
      "gstLabel": "जीएसटी (18%)",
      "totalLabel": "एकूण देय मासिक रक्कम",
      "priceLockText": "12 महिन्यांसाठी दर लॉक हमी",
      "gstInvoiceText": "एकच एकत्रित जीएसटी टॅक्स इनव्हॉइस",
      "proceedText": "स्मार्ट केवायसी पडताळणीकडे पुढे जा",
      "perMonth": "/ महिना",
      "plusGst": "+ जीएसटी"
    },
    "tabKyc": {
      "stepTag": "पायरी 3 / 4 · स्वयंचलित डिजिटल केवायसी",
      "heading": "स्मार्ट केवायसी आणि डेटा गोपनीयता इंजिन",
      "sub": "डीपीडीपी कायदा 2023 संमती आणि डीओटी 90-दिवसीय नियमांनुसार राष्ट्रीय नोंदणीतून त्वरित पडताळणी.",
      "applicantSelectLabel": "नमुना चाचणी अर्जदार:",
      "dpdpTitle": "डीपीडीपी कायदा 2023 वैधानिक संमती व गोपनीयता सूचना",
      "dpdpPurposeBadge": "उद्देश्य-मर्यादित",
      "dpdpNoticeText": "डिजिटल वैयक्तिक डेटा संरक्षण कायदा, 2023 नुसार, व्यवसाय नोंदणी व ओळख पुरावा केवळ सेवा सुरू करणे आणि वैधानिक पडताळणीसाठी गोळा केला जातो. सर्व वैयक्तिक माहिती सुरक्षित ठेवली जाते.",
      "dpdpConsentCheckLabel": "मी जीएसटीएन आणि उद्यम राष्ट्रीय नोंदणीद्वारे डेटा पडताळण्यासाठी स्पष्ट डिजिटल संमती देतो.",
      "doc1Title": "दस्तऐवज 1: व्यवसाय नोंदणी (जीएसटी)",
      "doc1GstinLabel": "काढलेला जीएसटीआयएन (मास्क केलेला):",
      "doc1LegalLabel": "संस्थेचे कायदेशीर नाव:",
      "doc1RegCheckLabel": "नोंदणी पडताळणी:",
      "doc2Title": "दस्तऐवज 2: एमएसएमई नोंदणी (उद्यम)",
      "doc2UdyamNoLabel": "उद्यम एमएसएमई क्रमांक:",
      "doc2TypeLabel": "वर्गीकरण:",
      "doc2PriorityLabel": "एमएसएमई प्राधान्य:",
      "doc2PriorityVal": "प्राधान्य व्यवसाय ब्रॉडबँड",
      "doc3Title": "दस्तऐवज 3: अधिकृत स्वाक्षरीकर्ता ओळख",
      "doc3TokenBadge": "डीपीडीपी टोकनाइज्ड",
      "doc3SignatoryLabel": "अधिकृत स्वाक्षरीकर्ता:",
      "doc3IdLabel": "मास्क केलेला ओळख क्रमांक:",
      "doc3PrivacyLabel": "गोपनीयता सुरक्षा:",
      "doc4Title": "दस्तऐवज 4: पत्ता पुरावा (परिसर)",
      "doc4DocTypeLabel": "दस्तऐवज प्रकार:",
      "doc4IssueDateLabel": "वैधता आणि जारी तारीख:",
      "doc4PremisesLabel": "परिसराचा पत्ता:",
      "uploadTitle": "सर्व 4 KYC कागदपत्रे अपलोड करा (kyc_documents/ मधून निवडा)",
      "uploadSub": "नोंदणी पडताळणीसाठी GST, उद्यम, स्वाक्षरीकर्ता ओळखपत्र व पत्ता पुरावा अपलोड करा",
      "runKycBtnText": "स्वयंचलित अनुपालन व नोंदणी तपासणी सुरू करा",
      "runKycSubtext": "नोंदणी डेटा आणि डीओटी नियमांनुसार स्वयंचलित मूल्यमापन",
      "kycDecisionHeaderLabel": "स्वयंचलित पडताळणी निर्णय",
      "kycAuditFindingLabel": "अनुपालन सारांश:",
      "kycProceedBtnText": "केवायसी मंजूर · ऑर्डर ट्रॅकरकडे पुढे जा",
      "replaceBtn": "फाइल बदला",
      "removeBtn": "काढून टाका",
      "clickUpload": "अपलोड करण्यासाठी क्लिक करा",
      "mandatoryDoc": "अनिवार्य कागदपत्र",
      "awaitingDoc": "कागदपत्र अपलोडची प्रतीक्षा आहे",
      "notVerified": "सत्यापित नाही (कागदपत्र नाही)",
      "docsActiveBadge": "4 / 4 कागदपत्रे सक्रिय",
      "docsMissingBadge": "{count} / 4 अपलोड केले ({missing} शिल्लक)",
      "activeDocsNotice": "सर्व 4 कागदपत्रे सुरक्षितपणे एन्क्रिप्ट केलेली आहेत.",
      "missingDocsNotice": "पडताळणीसाठी कृपया सर्व 4 कागदपत्रे अपलोड करा.",
      "actionNeededPrefix": "कृती आवश्यक:",
      "decisionApprovedTitle": "पडताळणी मंजूर · सेवा सुरू करण्यासाठी सज्ज",
      "decisionHaltedTitle": "पडताळणी थांबवली · समस्या आढळली",
      "decisionApprovedSummary": "संस्था सक्रिय म्हणून पडताळली गेली आहे (<strong>{legalName}</strong>). एमएसएमई उद्यम वर्गीकरण पडताळले, आवाराचा पत्ता पुरावा वैधानिक DoT 90-दिवसांच्या मर्यादेत आहे ({days} दिवस जुना), आणि DPDP कायदा 2023 डिजिटल संमती नोंदवली गेली आहे.",
      "auditDoc1": "दस्तऐवज 1: GSTIN पडताळणी ({gstin}): सक्रिय ({legalName})",
      "auditDoc2": "दस्तऐवज 2: एमएसएमई उद्यम पडताळणी: {udyam} ({type})",
      "auditDoc3": "दस्तऐवज 3: अधिकृत स्वाक्षरीकर्ता पडताळणी ({name} ({role})): DPDP टोकनाइज्ड",
      "auditDoc4": "दस्तऐवज 4: परिसर पत्ता पुरावा वैधता: {days} दिवस (DoT नियम: ≤ 90 दिवस)",
      "passBadge": "उत्तीर्ण",
      "failBadge": "अनुत्तीर्ण"
    },
    "tabTracker": {
      "stepTag": "टप्पा 4 / 4 · ऑर्डर आणि इन्स्टॉलेशन",
      "heading": "ऑर्डर स्थिती आणि इन्स्टॉलेशन ट्रॅकर",
      "sub": "",
      "milestoneTitle": "इन्स्टॉलेशन प्रगती",
      "slaBadge": "हमी दिलेली इन्स्टॉलेशन: 48 तासांच्या आत",
      "m1Title": "1. प्लॅन आणि कोटेशन मंजूर",
      "m1Desc": "12 महिन्यांच्या किंमत सुरक्षेसह तुमचा व्यवसाय प्लॅन निश्चित झाला.",
      "m2Title": "2. बिझनेस केवायसी सत्यापित",
      "m2Desc": "नोंदणी आणि कागदपत्रे यशस्वीरित्या सत्यापित झाली.",
      "m3Title": "3. इन्स्टॉलेशन इंजिनिअर नियुक्त",
      "m3Desc": "एअरटेल तंत्रज्ञ तुमचे फायबर कनेक्शन जोडण्यासाठी येत आहेत.",
      "m3Status": "प्रगतीपथावर आहे",
      "m4Title": "4. स्पीड टेस्ट आणि सेवा सुरू",
      "m4Desc": "तुमच्या दुकानात स्पीड टेस्ट आणि स्वागत एसएमएस.",
      "m4Status": "उद्यापर्यंत अपेक्षित",
      "assignedExecTitle": "नियुक्त इन्स्टॉलेशन इंजिनिअर",
      "assignedExecRole": "वरिष्ठ फायबर इन्स्टॉलेशन इंजिनिअर",
      "assignedExecRating": "★ 4.9 रेटिंग (420 इन्स्टॉलेशन्स)",
      "slaLabel": "हमी वेळ:",
      "slaVal": "48 तासांच्या आत",
      "installWindowLabel": "इन्स्टॉलेशन वेळ:",
      "installWindowVal": "उद्या, दुपारी 2:00 - संध्याकाळी 4:00",
      "equipmentLabel": "दिलेले उपकरण:",
      "equipmentVal": "वाय-फाय 6 हाय-स्पीड राउटर",
      "supportLabel": "मदत हवी आहे? कॉल करा:",
      "revAdvTitle": "1. AI सल्लागार शोध",
      "revAdvSub": "गरजांचे मूल्यांकन · प्लॅन शिफारस केला",
      "revQuoteTitle": "2. कोटेशन आणि प्लॅन",
      "revQuoteSub": "पारदर्शक मासिक बिल लॉक केले",
      "revKycTitle": "3. स्मार्ट KYC आणि गोपनीयता",
      "revKycSub": "4 कागदपत्रे आणि GSTN पडताळणी पूर्ण",
      "doneBadge": "पूर्ण",
      "orderBadgeText": "ऑर्डर"
    },
    "footerText": "एयरटेल बिझनेस एंटरप्राइझ ट्रॅक ए · प्रोजेक्ट उद्यम डिजिटल · पूर्णपणे डीपीडीपी कायदा 2023 व डीओटी अनुपालित",
    "bundles": {
      "starter": {
        "name": "एअरटेल स्टार्टर डिजिटल पॅक",
        "segment": "मायक्रो रिटेल व सेवा",
        "sla": "99.5% कमर्शियल फायबर",
        "desc": "बिज फायबर 100 Mbps + स्टॅटिक आयपी + क्लाउड पीओएस बिलिंग 99.5% अपटाइमसह."
      },
      "mfg_pro": {
        "name": "एअरटेल स्मार्ट मॅन्युफॅक्चरिंग सूट",
        "segment": "लहान उत्पादक / कारखाने",
        "sla": "99.9% समर्पित लीज्ड लाईन",
        "desc": "समर्पित 1:1 इंटरनेट लीज्ड लाईन (100 Mbps) + आयओटी मशीन मॉनिटरिंग + फायरवॉल."
      },
      "multi_chain": {
        "name": "एअरटेल कनेक्टेड एंटरप्राइझ (मल्टी-साइट)",
        "segment": "अनेक शाखांचे व्यवसाय",
        "sla": "99.5% फायबर + 4G बॅकअप",
        "desc": "कमर्शियल ब्रॉडबँड + क्लाउड व्हॉइस आयव्हीआर + बिझनेस ईमेल + सुरक्षा."
      },
      "pro_office": {
        "name": "एअरटेल प्रोफेशनल ऑफिस सूट",
        "segment": "व्यावसायिक कार्यालये व दवाखाने",
        "sla": "99.5% कमर्शियल फायबर",
        "desc": "कमर्शियल ब्रॉडबँड + क्लाउड व्हॉइस आयव्हीआर + बिझनेस ईमेल + सुरक्षा."
      }
    },
    "kycBadges": {
      "activeTaxpayer": "सक्रिय करदाता",
      "suspended": "निलंबित",
      "cancelled": "रद्द केले",
      "verifiedMsme": "पडताळलेले एमएसएमई",
      "exemptNone": "सूट / लागू नाही",
      "dotValid": "वैध (≤90 दिवस)",
      "dotExpired": "कालबाह्य (>90 दिवस)",
      "approvedDecision": "APPROVED",
      "rejectedDecision": "ACTION REQUIRED / REJECTED",
      "verifiedRegDate": "केंद्रीय जीएसटीएनमध्ये पडताळले",
      "dpdpConsentStatus": "डीपीडीपी डिजिटल संमती नोंदवली",
      "notUploaded": "अपलोड नाही · आवश्यक",
      "dpdpTokenized": "DPDP टोकनाइज्ड"
    },
    "advisorLockedText": "माहिती पूर्ण · उत्तरे व शिफारस जतन केली (बदल करता येणार नाही)",
    "advisorEditText": "उत्तरे संपादित करा",
    "advisorNextText": "पुढे: कोटेशन",
    "backToAdvisorBtn": "एआय सल्लागाराकडे परत जा",
    "quoteLockedText": "कोटेशन मंजूर · 12 महिने दर लॉक (बदल करता येणार नाही)",
    "quoteEditText": "ॲड-ऑन्स बदला",
    "quoteNextText": "पुढे: स्मार्ट केवायसी",
    "backToQuoteBtn": "कोटेशनकडे परत जा",
    "kycLockedText": "केवायसी पडताळणी पूर्ण (बदल करता येणार नाही)",
    "kycReturnTrackerText": "ऑर्डर ट्रॅकरकडे परत जा",
    "reviewJourneyTitle": "ऑर्डर ट्रॅक केली जात आहे:",
    "reviewJourneySub": "मागील पानांवरील तपशील तपासा:",
    "revBtnAdv": "1. सल्लागार पहा",
    "revBtnQuote": "2. कोटेशन पहा",
    "revBtnKyc": "3. केवायसी पहा",
    "inputPlaceholderLocked": "पूर्ण · तपशील लॉक केले",
    "kycVerifiedBadge": "केवायसी पडताळणी यशस्वी",
    "continueToKyc": "केवायसीकडे पुढे जा"
  },
  "gu": {
    "langCode": "gu-IN",
    "name": "ગુજરાતી (Gujarati)",
    "brandSub": "પ્રોજેક્ટ ઉદ્યમ ડિજિટલ · એરટેલ બિઝનેસ",
    "navAdvisor": "1. AI સલાહકાર",
    "navQuote": "2. ક્વોટેશન અને પ્લાન",
    "navKyc": "3. સ્માર્ટ કેવાયસી",
    "navTracker": "4. ઓર્ડર ટ્રેકર",
    "navBackOffice": "5. મેનેજમેન્ટ પોર્ટલ",
    "advisorHeading": "ડિજિટલ બિઝનેસ સલાહકાર",
    "advisorSub": "ક્રમબદ્ધ પ્રશ્નોત્તરી: 1. પ્રકાર → 2. કદ → 3. શાખાઓ → 4. સાધનો",
    "stepProgress": "પગલું 4 માંથી {step}",
    "restartBtn": "ફરીથી શરૂ કરો",
    "inputPlaceholder": "જવાબ લખો અથવા માઇક પર બોલો...",
    "sendBtn": "મોકલો",
    "whyTitle": "આ બંડલ તમારા વ્યવસાય માટે કેમ શ્રેષ્ઠ છે:",
    "billLabel": "એકલ પારદર્શક માસિક બિલ:",
    "acceptBtn": "ભલામણ સ્વીકારો અને ક્વોટેશન જુઓ",
    "recsBadge": "પ્લાન તૈયાર છે",
    "recsPending": "વિશ્લેષણ ચાલુ છે",
    "awaitingTitle": "જવાબોની રાહ જોવાઈ રહી છે",
    "awaitingDesc": "ડાબી બાજુના 4 પ્રશ્નોના જવાબ આપો. એરટેલ ડિજિટલ પેક અહીં તૈયાર થશે.",
    "awaitingRationale": "ભલામણ એન્જિન તમારા વ્યવસાયનો પ્રકાર, કર્મચારીઓની સંખ્યા અને શાખાઓ અનુસાર એરટેલ પ્રોડક્ટ કેટલોગમાંથી યોગ્ય પેકેજ પસંદ કરશે.",
    "demoTitle": "ડેમો દૃશ્યો:",
    "step1": {
      "title": "પગલું 1: વ્યવસાયનો પ્રકાર",
      "question": "એરટેલ બિઝનેસમાં આપનું સ્વાગત છે! <strong>પગલું 1 / 4: તમે કેવા પ્રકારનો વ્યવસાય ચલાવો છો?</strong> (દા.ત. ક્લિનિક, કરિયાણાની દુકાન, રેસ્ટોરન્ટ, ફેક્ટરી, ઓફિસ)",
      "options": [
        {
          "label": "🩺 ક્લિનિક / હોસ્પિટલ",
          "val": "ડેન્ટલ ક્લિનિક"
        },
        {
          "label": "🛒 કરિયાણા / રિટેલ દુકાન",
          "val": "કરિયાણા સ્ટોર"
        },
        {
          "label": "🍽️ રેસ્ટોરન્ટ / બેકરી",
          "val": "રેસ્ટોરન્ટ ચેઇન"
        },
        {
          "label": "🏭 ફેક્ટરી / મેન્યુફેક્ચરિંગ",
          "val": "મેન્યુફેક્ચરિંગ ફેક્ટરી"
        },
        {
          "label": "💼 સીએ / વકીલ / ઓફિસ",
          "val": "સીએ ઓફિસ"
        }
      ],
      "placeholder": "વ્યવસાયનો પ્રકાર લખો..."
    },
    "step2": {
      "title": "પગલું 2: સ્ટાફની સંખ્યા",
      "question": "સરસ! <strong>પગલું 2 / 4: તમારા વ્યવસાયમાં કેટલા કર્મચારીઓ કામ કરે છે?</strong>",
      "options": [
        {
          "label": "1-3 કર્મચારીઓ",
          "val": "2 કર્મચારીઓ"
        },
        {
          "label": "5-15 કર્મચારીઓ",
          "val": "12 કર્મચારીઓ"
        },
        {
          "label": "25-50 કર્મચારીઓ",
          "val": "45 કર્મચારીઓ"
        },
        {
          "label": "80+ કામદારો",
          "val": "85 કામદારો"
        }
      ],
      "placeholder": "કર્મચારીઓની સંખ્યા દાખલ કરો..."
    },
    "step3": {
      "title": "પગલું 3: શાખાઓની સંખ્યા",
      "question": "સમજાયું! <strong>પગલું 3 / 4: તમારા વ્યવસાયની કેટલી શાખાઓ અથવા દુકાનો છે?</strong>",
      "options": [
        {
          "label": "1 દુકાન",
          "val": "1 દુકાન"
        },
        {
          "label": "2-3 શાખાઓ",
          "val": "3 શાખાઓ"
        },
        {
          "label": "5 આઉટલેટ્સ",
          "val": "5 શાખાઓ"
        },
        {
          "label": "10+ શાખાઓ",
          "val": "10 શાખાઓ"
        }
      ],
      "placeholder": "શાખાઓની સંખ્યા દાખલ કરો..."
    },
    "step4": {
      "title": "પગલું 4: હાલના સાધનો",
      "question": "છેલ્લો પ્રશ્ન! <strong>પગલું 4 / 4: હાલમાં તમે ઇન્ટરનેટ માટે શું વાપરો છો અને તમને કયા સાધનોની જરૂર છે?</strong>",
      "options": [
        {
          "label": "1. દુકાન કાઉન્ટર અને POS (UPI વાઇ-ફાઇ)",
          "sub": "UPI સાઉન્ડબોક્સ અને કાર્ડ સ્વાઇપ મશીનો માટે",
          "val": "Mobile Hotspot, need billing POS and guest Wi-Fi"
        },
        {
          "label": "2. ઓફિસ અને ક્લિનિક (ફાઇબર, ઇમેઇલ અને IVR)",
          "sub": "બિઝનેસ ફાઇબર, કંપની ઇમેઇલ અને ઓટોમેટેડ રિસેપ્શન",
          "val": "Home Broadband, need cloud telephony and office email"
        },
        {
          "label": "3. મલ્ટિ-સ્ટોર આઉટલેટ્સ (CCTV અને બેકઅપ)",
          "sub": "બધી શાખાઓનું લાઇવ સિંક, મોબાઇલ CCTV અને ઓટો 4G/5G બેકઅપ",
          "val": "Mixed Local ISP, need SD-WAN, CCTV cameras and failover"
        },
        {
          "label": "4. ફેક્ટરી લીઝ્ડ લાઇન (1:1 ડેડિકેટેડ)",
          "sub": "1:1 અનશેર્ડ લીઝ્ડ લાઇન, 99.5% SLA અને મશીન IoT સેન્સર્સ",
          "val": "Need 100 Mbps dedicated leased line and machine sensors"
        }
      ],
      "placeholder": "હાલનું ઇન્ટરનેટ અને જરૂરિયાતો...",
      "guideTitle": "તમારા 4 વિકલ્પોની સરળ ભાષામાં સમજ:",
      "guideSubtitle": "તમારા વર્તમાન વ્યવસાય સેટઅપ મુજબ શ્રેષ્ઠ વિકલ્પ પસંદ કરો:",
      "guideItems": [
        {
          "badge": "વિકલ્પ 1 · દુકાન અને કરિયાણા કાઉન્ટર",
          "title": "દુકાન કાઉન્ટર અને UPI બિલિંગ POS",
          "easyDesc": "મોબાઇલ હોટસ્પોટ પર ચાલતી દુકાનો માટે. UPI QR, સાઉન્ડબોક્સ અને કાર્ડ સ્વાઇપ મશીન બિલિંગ વખતે અટકે નહીં તે માટે સમર્પિત વાઇ-ફાઇ."
        },
        {
          "badge": "વિકલ્પ 2 · ક્લિનિક અને વ્યવસાયિક ઓફિસો",
          "title": "ઓફિસ સ્યુટ, ડોમેન ઇમેઇલ અને IVR",
          "easyDesc": "ઘરેલું બ્રોડબેન્ડ વાપરતી ઓફિસો માટે. હાઇ-સ્પીડ બિઝનેસ ફાઇબર, સત્તાવાર ઇમેઇલ (you@firm.com) અને ગ્રાહક કોલ મિસ ન થાય તે માટે ઓટોમેટેડ IVR સિસ્ટમ."
        },
        {
          "badge": "વિકલ્પ 3 · મલ્ટિ-સ્ટોર શાખાઓ અને રેસ્ટોરન્ટ્સ",
          "title": "બ્રાન્ચ સિંક, CCTV અને 4G/5G બેકઅપ",
          "easyDesc": "બહુવિધ શાખાઓ ધરાવતા વ્યવસાયો માટે. બધી શાખાઓનું લાઇવ બિલિંગ સિંક, મોબાઇલ CCTV અને ફાઇબર વાયર કપાય ત્યારે ઓટોમેટિક 4G/5G બેકઅપ."
        },
        {
          "badge": "વિકલ્પ 4 · ફેક્ટરી અને ઉત્પાદન એકમો",
          "title": "1:1 ડેડિકેટેડ લીઝ્ડ લાઇન અને મશીન IoT",
          "easyDesc": "ફેક્ટરીઓ અને મેન્યુફેક્ચરિંગ માટે. 99.5% અપટાઇમ ગેરંટી સાથે 1:1 અનશેર્ડ લીઝ્ડ લાઇન, સ્ટેટિક IP અને ઔદ્યોગિક મશીન સેન્સર કનેક્ટિવિટી."
        }
      ]
    },
    "step5": {
      "header": "વિશ્લેષણ પૂર્ણ થયું! આપના વ્યવસાય માટે એરટેલ ડિજિટલ બંડલ તૈયાર છે:",
      "whyTitle": "💡 આ બંડલ પસંદ કરવાનું કારણ:",
      "billLabel": "એકલ માસિક બિલ:",
      "startOver": "ફરીથી શરૂ કરો"
    },
    "rationales": {
      "clinic": "હાઇ-સ્પીડ બિઝનેસ ફાઇબર. ક્લાઉડ ટેલિફોની દર્દીઓના મહત્વના કોલ મિસ થવા દેશે નહીં. ઓફિશિયલ ઇમેઇલ અને સુરક્ષા.",
      "restaurant": "તમામ શાખાઓ SD-WAN સાથે જોડાશે. 4G/5G ઓટો-ફેઇલઓવર સાથે યુપીઆઇ પેમેન્ટ ક્યારેય નહીં અટકે. ક્લાઉડ સીસીટીવી લાઈવ દેખરેખ રાખશે.",
      "kirana": "સસ્તા દરે બિઝ ફાઇબર 100 Mbps અને સ્ટેટિક આઈપી અવિરત યુપીઆઇ બિલિંગ સુનિશ્ચિત કરે છે.",
      "manufacturing": "100 Mbps ડેડિકેટેડ લીઝ્ડ લાઇન 99.9% ગેરંટી સાથે. IoT સેન્સર્સ મશીનરીની સ્થિતિ જણાવશે.",
      "office": "300 Mbps ફાઇબર, ક્લાઉડ ઓફિસ અને એન્ટિવાયરસ ઓડિટ ડેટાને સુરક્ષિત રાખશે."
    },
    "recSolutionTag": "એરટેલ બિઝનેસ સોલ્યુશન",
    "recInclusionsTitle": "કેટલોગમાં સામેલ સેવાઓ:",
    "recProductPlaceholder": "પ્રોડક્ટ્સની વિગતો જોવા માટે 4 પગલાં પૂર્ણ કરો",
    "recAllInOneLabel": "ઓલ-ઇન-વન માસિક ખર્ચ",
    "recSetupWaived": "સેટઅપ ફી માફ",
    "demoSub": "product_catalogue.csv ના 25 ઉત્પાદનોનું ત્વરિત મૂલ્યાંકન કરે છે",
    "demoScenarios": {
      "clinic": "🩺 ડેન્ટલ ક્લિનિક (12 સ્ટાફ · 1 સ્થળ · બ્રોડબેન્ડ)",
      "restaurant": "🍽️ રેસ્ટોરન્ટ ચેઇન (45 સ્ટાફ · 5 સ્થળો · SD-WAN અને CCTV)",
      "kirana": "🛒 કરિયાણા સ્ટોર (2 સ્ટાફ · 1 દુકાન · હોટસ્પોટ થી POS)",
      "manufacturing": "🏭 ફેક્ટરી (85 કામદારો · 100M લીઝ્ડ લાઇન + IoT)",
      "ca_firm": "💼 સીએ અને લો ફર્મ (12 સ્ટાફ · ક્લાઉડ ઇમેઇલ + એન્ટિવાયરસ)"
    },
    "tabQuote": {
      "stepTag": "પગલું 2 / 4 · ત્વરિત ક્વોટેશન",
      "heading": "કસ્ટમાઇઝ્ડ ડિજિટલ બંડલ અને પારદર્શક કિંમતો",
      "sub": "એકલ સંકલિત ઇનવોઇસ. સર્વર-સાઇડ ભાવ લોક. રીઅલ-ટાઇમમાં એડ-ઓન પસંદ કરો.",
      "estLabel": "અંદાજિત માસિક રિકરિંગ ખર્ચ",
      "baseInclusionsTitle": "મૂળ પેકેજમાં સામેલ સેવાઓ",
      "addonsTitle": "વૈકલ્પિક ભલામણ કરેલ એડ-ઓન્સ (સર્વર ચકાસાયેલ)",
      "addonFailoverTitle": "સ્વચાલિત 4G/5G વાયરલેસ બેકઅપ રાઉટર",
      "addonFailoverDesc": "જો મુખ્ય ઇન્ટરનેટ વાયર કપાઈ જાય, તો તરત જ મોબાઇલ સિમ પર ચાલુ થઈ જશે જેથી UPI અને કાર્ડ પેમેન્ટ ક્યારેય ન અટકે.",
      "addonCctvTitle": "ક્લાઉડ સીસીટીવી સર્વેલન્સ (2 એચડી કેમેરા)",
      "addonCctvDesc": "દુકાનનું લાઈવ વિડિયો અને 30 દિવસનું રેકોર્ડિંગ સીધા તમારા મોબાઈલ પર ગમે ત્યારે જુઓ—કોઈ અલગ રેકોર્ડર મશીનની જરૂર નથી.",
      "addonStaticIpTitle": "પબ્લિક સ્ટેટિક આઈપી સરનામું",
      "addonStaticIpDesc": "તમારા વ્યવસાય માટે કાયમી ઇન્ટરનેટ સરનામું—બાયોમેટ્રિક હાજરી અને સુરક્ષિત બેંક બિલિંગ માટે જરૂરી.",
      "billTitle": "સિંગલ યુનિફાઇડ માસિક બિલ",
      "baseLabel": "મૂળ પેકેજ",
      "addonLabel": "પસંદ કરેલા એડ-ઓન્સ",
      "setupLabel": "ઇન્સ્ટોલેશન અને સેટઅપ ફી",
      "setupVal": "માફ (₹0)",
      "subtotalLabel": "પેટાસરવાળો",
      "gstLabel": "જીએસટી (18%)",
      "totalLabel": "કુલ માસિક ચૂકવવાપાત્ર રકમ",
      "priceLockText": "12 મહિના માટે ભાવ લોક ગેરંટી",
      "gstInvoiceText": "સિંગલ સંકલિત જીએસટી ટેક્સ ઇનવોઇસ",
      "proceedText": "સ્માર્ટ કેવાયસી ચકાસણી માટે આગળ વધો",
      "perMonth": "/ મહિને",
      "plusGst": "+ જીએસટી"
    },
    "tabKyc": {
      "stepTag": "પગલું 3 / 4 · સ્વચાલિત ડિજિટલ કેવાયસી",
      "heading": "સ્માર્ટ કેવાયસી અને ડેટા ગોપનીયતા એન્જિન",
      "sub": "ડીપીડીપી એક્ટ 2023 સંમતિ અને ડીઓટી 90-દિવસના નિયમો સાથે રાષ્ટ્રીય રજિસ્ટ્રી સામે ત્વરિત ચકાસણી.",
      "applicantSelectLabel": "નમૂના અરજદાર:",
      "dpdpTitle": "ડીપીડીપી એક્ટ 2023 વૈધાનિક સંમતિ અને ગોપનીયતા નોટિસ",
      "dpdpPurposeBadge": "હેતુ-મર્યાદિત",
      "dpdpNoticeText": "ડિજિટલ પર્સનલ ડેટા પ્રોટેક્શન એક્ટ, 2023 અનુસાર, વ્યવસાય નોંધણી અને સહીકર્તા ઓળખ ફક્ત સેવા સક્રિયકરણ અને બિલિંગ માટે એકત્રિત કરવામાં આવે છે. ડેટા સંપૂર્ણ સુરક્ષિત રહે છે.",
      "dpdpConsentCheckLabel": "હું જીએસટીએન અને ઉદ્યમ રાષ્ટ્રીય રજિસ્ટ્રી સામે ડેટા ચકાસવા માટે સ્પષ્ટ ડિજિટલ સંમતિ આપું છું.",
      "doc1Title": "દસ્તાવેજ 1: વ્યવસાય નોંધણી (જીએસટી)",
      "doc1GstinLabel": "મેળવેલ જીએસટી નંબર (માસ્ક કરેલ):",
      "doc1LegalLabel": "પેઢીનું કાનૂની નામ:",
      "doc1RegCheckLabel": "રજિસ્ટ્રી ક્રોસ-ચેક:",
      "doc2Title": "દસ્તાવેજ 2: એમએસએમઈ નોંધણી (ઉદ્યમ)",
      "doc2UdyamNoLabel": "ઉદ્યમ એમએસએમઈ નંબર:",
      "doc2TypeLabel": "વર્ગીકરણ:",
      "doc2PriorityLabel": "એમએસએમઈ અગ્રતા:",
      "doc2PriorityVal": "પ્રાયોરિટી બિઝનેસ બ્રોડબેન્ડ",
      "doc3Title": "દસ્તાવેજ 3: અધિકૃત હસ્તાક્ષરકર્તા ઓળખ",
      "doc3TokenBadge": "ડીપીડીપી ટોકનાઇઝ્ડ",
      "doc3SignatoryLabel": "અધિકૃત હસ્તાક્ષરકર્તા:",
      "doc3IdLabel": "માસ્ક કરેલ ઓળખ કાર્ડ:",
      "doc3PrivacyLabel": "ગોપનીયતા સુરક્ષા:",
      "doc4Title": "દસ્તાવેજ 4: સરનામાનો પુરાવો",
      "doc4DocTypeLabel": "દસ્તાવેજનો પ્રકાર:",
      "doc4IssueDateLabel": "માન્યતા અને જારી તારીખ:",
      "doc4PremisesLabel": "પરિસરનું સરનામું:",
      "uploadTitle": "બધા 4 KYC દસ્તાવેજો અપલોડ કરો (kyc_documents/ માંથી પસંદ કરો)",
      "uploadSub": "રજિસ્ટ્રી ચકાસણી માટે GST, ઉદ્યમ, હસ્તાક્ષરકર્તા ID અને સરનામાંનો પુરાવો અપલોડ કરો",
      "runKycBtnText": "સ્વચાલિત અનુપાલન અને રજિસ્ટ્રી ચકાસણી શરૂ કરો",
      "runKycSubtext": "રજિસ્ટ્રી ડેટા અને ડીઓટી નિયમો અનુસાર મૂલ્યાંકન",
      "kycDecisionHeaderLabel": "સ્વચાલિત ચકાસણી નિર્ણય",
      "kycAuditFindingLabel": "અનુપાલન સારાંશ:",
      "kycProceedBtnText": "કેવાયસી મંજૂર · ઓર્ડર ટ્રેકર પર આગળ વધો",
      "replaceBtn": "ફાઇલ બદલો",
      "removeBtn": "દૂર કરો",
      "clickUpload": "અપલોડ કરવા માટે ક્લિક કરો",
      "mandatoryDoc": "ફરજિયાત દસ્તાવેજ",
      "awaitingDoc": "દસ્તાવેજ અપલોડની રાહ જોવાઈ રહી છે",
      "notVerified": "ચકાસાયેલ નથી (દસ્તાવેજ ખૂટે છે)",
      "docsActiveBadge": "4 / 4 દસ્તાવેજો સક્રિય",
      "docsMissingBadge": "{count} / 4 અપલોડ થયેલ ({missing} ખૂટે છે)",
      "activeDocsNotice": "બધા 4 દસ્તાવેજો સુરક્ષિત રીતે એન્ક્રિપ્ટ થયેલ છે.",
      "missingDocsNotice": "ચકાસણી માટે કૃપા કરીને બધા 4 દસ્તાવેજો અપલોડ કરો.",
      "actionNeededPrefix": "પગલાં જરૂરી:",
      "decisionApprovedTitle": "ચકાસણી મંજૂર · સેવા સક્રિયકરણ માટે તૈયાર",
      "decisionHaltedTitle": "ચકાસણી અટકી · પાલન સમસ્યા મળી",
      "decisionApprovedSummary": "સંસ્થા સક્રિય તરીકે ચકાસાયેલ છે (<strong>{legalName}</strong>). MSME ઉદ્યમ વર્ગીકરણ ચકાસાયેલ છે, પરિસરના સરનામાનો પુરાવો વૈધાનિક DoT 90-દિવસની મર્યાદામાં છે ({days} દિવસ જૂનો), અને DPDP એક્ટ 2023 ડિજિટલ સંમતિ નોંધાયેલ છે.",
      "auditDoc1": "દસ્તાવેજ 1: GSTIN ચકાસણી ({gstin}): સક્રિય ({legalName})",
      "auditDoc2": "દસ્તાવેજ 2: MSME ઉદ્યમ ચકાસણી: {udyam} ({type})",
      "auditDoc3": "દસ્તાવેજ 3: અધિકૃત હસ્તાક્ષરકર્તા ચકાસણી ({name} ({role})): DPDP ટોકનાઇઝ્ડ",
      "auditDoc4": "દસ્તાવેજ 4: પરિસર સરનામા પુરાવા માન્યતા: {days} દિવસ (DoT નિયમ: ≤ 90 દિવસ)",
      "passBadge": "પાસ",
      "failBadge": "નિષ્ફળ"
    },
    "tabTracker": {
      "stepTag": "પગલું 4 / 4 · ઓર્ડર અને ઇન્સ્ટોલેશન",
      "heading": "ઓર્ડર સ્થિતિ અને ઇન્સ્ટોલેશન ટ્રેકર",
      "sub": "",
      "milestoneTitle": "ઇન્સ્ટોલેશન પ્રગતિ",
      "slaBadge": "ગેરંટીડ ઇન્સ્ટોલેશન: 48 કલાકની અંદર",
      "m1Title": "1. પ્લાન અને ક્વોટેશન મંજૂર",
      "m1Desc": "12 મહિનાની કિંમત સુરક્ષા સાથે તમારો બિઝનેસ પ્લાન કન્ફર્મ થયો.",
      "m2Title": "2. બિઝનેસ કેવાયસી ચકાસાયેલ",
      "m2Desc": "વેપાર નોંધણી અને દસ્તાવેજો સફળતાપૂર્વક ચકાસાયા.",
      "m3Title": "3. ઇન્સ્ટોલેશન એન્જિનિયર નિયુક્ત",
      "m3Desc": "એરટેલ ટેકનિશિયન તમારું ફાઇબર કનેક્શન ઇન્સ્ટોલ કરવા આવી રહ્યા છે.",
      "m3Status": "ચાલુ છે",
      "m4Title": "4. સ્પીડ ટેસ્ટ અને સેવા સક્રિયકરણ",
      "m4Desc": "તમારી દુકાન પર સ્પીડ ટેસ્ટ અને સ્વાગત કન્ફર્મેશન SMS.",
      "m4Status": "આવતીકાલે અપેક્ષિત",
      "assignedExecTitle": "નિયુક્ત ઇન્સ્ટોલેશન એન્જિનિયર",
      "assignedExecRole": "સિનિયર ફાઇબર ઇન્સ્ટોલેશન એન્જિનિયર",
      "assignedExecRating": "★ 4.9 રેટિંગ (420 ઇન્સ્ટોલ)",
      "slaLabel": "ખાતરીપૂર્વક સમય:",
      "slaVal": "48 કલાકની અંદર",
      "installWindowLabel": "ઇન્સ્ટોલેશન સ્લોટ:",
      "installWindowVal": "આવતીકાલે, બપોરે 2:00 - સાંજે 4:00",
      "equipmentLabel": "આપવામાં આવેલ સાધનો:",
      "equipmentVal": "વાઇ-ફાઇ 6 હાઇ-સ્પીડ રાઉટર",
      "supportLabel": "મદદ જોઈએ છે? કૉલ કરો:",
      "revAdvTitle": "1. AI સલાહકાર શોધ",
      "revAdvSub": "જરૂરિયાતોનું મૂલ્યાંકન · પ્લાનની ભલામણ",
      "revQuoteTitle": "2. ક્વોટેશન અને પ્લાન",
      "revQuoteSub": "પારદર્શક માસિક બિલ લૉક થયેલ",
      "revKycTitle": "3. સ્માર્ટ KYC અને ગોપનીયતા",
      "revKycSub": "4 દસ્તાવેજો અને GSTN ચકાસાયેલ",
      "doneBadge": "પૂર્ણ",
      "orderBadgeText": "ઓર્ડર"
    },
    "footerText": "એરટેલ બિઝનેસ એન્ટરપ્રાઇઝ ટ્રેક એ · પ્રોજેક્ટ ઉદ્યમ ડિજિટલ · સંપૂર્ણ ડીપીડીપી એક્ટ 2023 અને ડીઓટી સુસંગત",
    "bundles": {
      "starter": {
        "name": "એરટેલ સ્ટાર્ટર ડિજિટલ પેક",
        "segment": "માઇક્રો રિટેલ અને સેવાઓ",
        "sla": "99.5% કોમર્શિયલ ફાઇબર",
        "desc": "બિઝ ફાઇબર 100 Mbps + સ્ટેટિક આઈપી + ક્લાઉડ પીઓએસ બિલિંગ 99.5% અપટાઇમ સાથે."
      },
      "mfg_pro": {
        "name": "એરટેલ સ્માર્ટ મેન્યુફેક્ચરિંગ સ્યુટ",
        "segment": "નાના ઉત્પાદકો / કારખાના",
        "sla": "99.9% સમર્પિત લીઝ્ડ લાઇન",
        "desc": "સમર્પિત 1:1 ઇન્ટરનેટ લીઝ્ડ લાઇન (100 Mbps) + આઈઓટી મશીન મોનિટરિંગ + ફાયરવોલ."
      },
      "multi_chain": {
        "name": "એરટેલ કનેક્ટેડ એન્ટરપ્રાઇઝ (મલ્ટી-સાઇટ)",
        "segment": "બહુવિધ શાખાઓ ધરાવતા વ્યવસાય",
        "sla": "99.5% ફાઇબર + 4G બેકઅપ",
        "desc": "કોમર્શિયલ બ્રોડબેન્ડ + ક્લાઉડ વોઇસ આઈવીઆર + બિઝનેસ ઇમેઇલ + એન્ડપોઇન્ટ સુરક્ષા."
      },
      "pro_office": {
        "name": "એરટેલ પ્રોફેશનલ ઓફિસ સ્યુટ",
        "segment": "વ્યાવસાયિક કચેરીઓ અને ક્લિનિક્સ",
        "sla": "99.5% કોમર્શિયલ ફાઇબર",
        "desc": "કોમર્શિયલ બ્રોડબેન્ડ + ક્લાઉડ વોઇસ આઈવીઆર + બિઝનેસ ઇમેઇલ + એન્ડપોઇન્ટ સુરક્ષા."
      }
    },
    "kycBadges": {
      "activeTaxpayer": "સક્રિય કરદાતા",
      "suspended": "નિલંબિત",
      "cancelled": "રદ થયેલ",
      "verifiedMsme": "ચકાસાયેલ એમએસએમઈ",
      "exemptNone": "મુક્તિ / લાગુ નથી",
      "dotValid": "માન્ય (≤90 દિવસ)",
      "dotExpired": "મુદત પૂરી (>90 દિવસ)",
      "approvedDecision": "APPROVED",
      "rejectedDecision": "ACTION REQUIRED / REJECTED",
      "verifiedRegDate": "રાષ્ટ્રીય જીએસટીએનમાં ચકાસાયેલ",
      "dpdpConsentStatus": "ડીપીડીપી સંમતિ નોંધાયેલ",
      "notUploaded": "અપલોડ કરેલ નથી · જરૂરી",
      "dpdpTokenized": "DPDP ટોકનાઇઝ્ડ"
    },
    "advisorLockedText": "માહિતી પૂર્ણ · જવાબો અને ભલામણ સંગ્રહિત (ફેરફાર અશક્ય)",
    "advisorEditText": "જવાબો સુધારો",
    "advisorNextText": "આગળ: ક્વોટેશન",
    "backToAdvisorBtn": "એઆઈ સલાહકાર પર પાછા જાઓ",
    "quoteLockedText": "ક્વોટેશન સ્વીકારાયું · 12 મહિના ભાવ લોક (ફેરફાર અશક્ય)",
    "quoteEditText": "એડ-ઓન્સ બદલો",
    "quoteNextText": "આગળ: સ્માર્ટ કેવાયસી",
    "backToQuoteBtn": "ક્વોટેશન પર પાછા જાઓ",
    "kycLockedText": "કેવાયસી ચકાસણી પૂર્ણ (ફેરફાર અશક્ય)",
    "kycReturnTrackerText": "ઓર્ડર ટ્રેકર પર પાછા જાઓ",
    "reviewJourneyTitle": "ઓર્ડર સક્રિય અને ટ્રેક થયેલ છે:",
    "reviewJourneySub": "અગાઉના પૃષ્ઠોની વિગતોની સમીક્ષા કરો:",
    "revBtnAdv": "1. સલાહકાર જુઓ",
    "revBtnQuote": "2. ક્વોટેશન જુઓ",
    "revBtnKyc": "3. કેવાયસી જુઓ",
    "inputPlaceholderLocked": "પૂર્ણ · વિગતો લોક કરેલ છે",
    "kycVerifiedBadge": "કેવાયસી ચકાસણી સફળ",
    "continueToKyc": "કેવાયસી પર આગળ વધો"
  },
  "bn": {
    "langCode": "bn-IN",
    "name": "বাংলা (Bengali)",
    "brandSub": "প্রকল্প উদ্যম ডিজিটাল · এয়ারটেল বিজনেস",
    "navAdvisor": "1. এআই উপদেষ্টা",
    "navQuote": "2. কোটেশন ও প্ল্যান",
    "navKyc": "3. স্মার্ট কেওয়াইসি",
    "navTracker": "4. অর্ডার ট্র্যাকার",
    "navBackOffice": "5. ব্যাক-অফিস পোর্টাল",
    "advisorHeading": "ডিজিটাল বিজনেস উপদেষ্টা",
    "advisorSub": "পর্যায়ক্রমিক প্রশ্নাবলী: 1. ধরন → 2. আকার → 3. শাখা → 4. সরঞ্জাম",
    "stepProgress": "ধাপ 4 এর মধ্যে {step}",
    "restartBtn": "পুনরায় শুরু করুন",
    "inputPlaceholder": "উত্তর লিখুন বা মাইকে কথা বলুন...",
    "sendBtn": "পাঠান",
    "whyTitle": "এই বান্ডিলটি আপনার ব্যবসার জন্য কেন সেরা:",
    "billLabel": "একক স্বচ্ছ মাসিক বিল:",
    "acceptBtn": "সুপারিশ গ্রহণ করুন এবং কোটেশন দেখুন",
    "recsBadge": "প্ল্যান প্রস্তুত",
    "recsPending": "বিশ্লেষণ চলছে",
    "awaitingTitle": "উত্তরের অপেক্ষায়",
    "awaitingDesc": "বাম দিকের 4টি প্রশ্নের উত্তর দিন। এয়ারটেল ক্যাটালগ ইঞ্জিন এখানে আপনার বান্ডিল তৈরি করবে।",
    "awaitingRationale": "রেকমেন্ডেশন ইঞ্জিন আপনার ব্যবসার ধরন, কর্মী সংখ্যা ও শাখা অনুযায়ী এয়ারটেল প্রোডাক্ট ক্যাটালগ থেকে সেরা সমাধান নির্বাচন করবে।",
    "demoTitle": "ডেমো দৃশ্যপট:",
    "step1": {
      "title": "ধাপ 1: ব্যবসার ধরন",
      "question": "এয়ারটেল বিজনেসে স্বাগতম! <strong>ধাপ 1 / 4: আপনি কী ধরনের ব্যবসা পরিচালনা করেন?</strong> (যেমন: ক্লিনিক, মুদি দোকান, রেস্তোরাঁ, কারখানা, অফিস)",
      "options": [
        {
          "label": "🩺 ক্লিনিক / হাসপাতাল",
          "val": "ডেন্টাল ক্লিনিক"
        },
        {
          "label": "🛒 মুদি / খুচরা দোকান",
          "val": "মুদি দোকান"
        },
        {
          "label": "🍽️ রেস্তোরাঁ / বেকারি",
          "val": "রেস্তোরাঁ চেইন"
        },
        {
          "label": "🏭 কারখানা / উৎপাদন",
          "val": "ম্যানুফ্যাকচারিং কারখানা"
        },
        {
          "label": "💼 সিএ / আইনজীবী / অফিস",
          "val": "সিএ ফার্ম"
        }
      ],
      "placeholder": "ব্যবসার ধরন লিখুন বা বলুন..."
    },
    "step2": {
      "title": "ধাপ 2: কর্মীর সংখ্যা",
      "question": "চমৎকার! <strong>ধাপ 2 / 4: আপনার ব্যবসায় কতজন কর্মী বা কর্মচারী কাজ করেন?</strong>",
      "options": [
        {
          "label": "1-3 জন কর্মী",
          "val": "2 জন কর্মী"
        },
        {
          "label": "5-15 জন কর্মী",
          "val": "12 জন কর্মী"
        },
        {
          "label": "25-50 জন কর্মী",
          "val": "45 জন কর্মী"
        },
        {
          "label": "80+ শ্রমিক",
          "val": "85 জন কর্মী"
        }
      ],
      "placeholder": "কর্মীর সংখ্যা লিখুন বা বলুন..."
    },
    "step3": {
      "title": "ধাপ 3: শাখার সংখ্যা",
      "question": "বুঝেছি! <strong>ধাপ 3 / 4: আপনার ব্যবসার কতগুলি শাখা বা দোকান রয়েছে?</strong>",
      "options": [
        {
          "label": "1টি একক দোকান",
          "val": "1টি দোকান"
        },
        {
          "label": "2-3টি শাখা",
          "val": "3টি শাখা"
        },
        {
          "label": "5টি শাখা",
          "val": "5টি শাখা"
        },
        {
          "label": "10+ শাখা",
          "val": "10টি শাখা"
        }
      ],
      "placeholder": "শাখার সংখ্যা লিখুন বা বলুন..."
    },
    "step4": {
      "title": "ধাপ 4: বর্তমান সরঞ্জাম",
      "question": "শেষ প্রশ্ন! <strong>ধাপ 4 / 4: বর্তমানে ইন্টারনেটের জন্য কী ব্যবহার করেন এবং কী কী প্রয়োজন?</strong>",
      "options": [
        {
          "label": "১. দোকানের কাউন্টার ও POS (UPI ওয়াই-ফাই)",
          "sub": "UPI সাউন্ডবক্স এবং কার্ড সোয়াইপ মেশিনের জন্য",
          "val": "Mobile Hotspot, need billing POS and guest Wi-Fi"
        },
        {
          "label": "২. অফিস ও ক্লিনিক (ফাইবার, ইমেল ও IVR)",
          "sub": "কমার্শিয়াল ফাইবার, ডোমেন ইমেল ও স্বয়ংক্রিয় ফোন সার্ভিস",
          "val": "Home Broadband, need cloud telephony and office email"
        },
        {
          "label": "৩. মাল্টি-স্টোর আউটলেট (CCTV ও ব্যাকআপ)",
          "sub": "শাখাগুলির লাইভ সিঙ্ক, মোবাইল CCTV ও অটো 4G/5G ব্যাকআপ",
          "val": "Mixed Local ISP, need SD-WAN, CCTV cameras and failover"
        },
        {
          "label": "৪. কারখানা লিজড লাইন (১:১ ডেডিকেটেড)",
          "sub": "১:১ আনশেয়ার্ড লিজড লাইন, ৯৯.৫% SLA ও মেশিন IoT সেন্সর",
          "val": "Need 100 Mbps dedicated leased line and machine sensors"
        }
      ],
      "placeholder": "বর্তমান ইন্টারনেট এবং চাহিদা লিখুন...",
      "guideTitle": "আপনার ৪টি পছন্দের সহজ ভাষার ব্যাখ্যা:",
      "guideSubtitle": "আপনার বর্তমান ব্যবসায়িক পরিকাঠামো অনুযায়ী সেরা বিকল্পটি বেছে নিন:",
      "guideItems": [
        {
          "badge": "বিকল্প ১ · দোকান ও মুদির কাউন্টার",
          "title": "দোকানের কাউন্টার ও UPI বিলিং POS",
          "easyDesc": "মোবাইল হটস্পট ব্যবহারকারী একক দোকানের জন্য। ডেডিকেটেড কাউন্টার ওয়াই-ফাই যাতে UPI QR, সাউন্ডবক্স এবং কার্ড সোয়াইপ মেশিন বিলিংয়ের সময় আটকে না যায়।"
        },
        {
          "badge": "বিকল্প ২ · ক্লিনিক ও অফিস স্যুয়েট",
          "title": "অফিস স্যুট, ডোমেন ইমেল ও ফোন IVR",
          "easyDesc": "হোম ব্রডব্যান্ড ব্যবহারকারী অফিস ও ক্লিনিকের জন্য। হাই-স্পিড কমার্শিয়াল ফাইবার, অফিসিয়াল ইমেল (you@firm.com) এবং কলারদের জন্য স্বয়ংক্রিয় IVR ফোন ব্যবস্থা।"
        },
        {
          "badge": "বিকল্প ৩ · বহু-শাখা স্টোর ও রেস্তোরাঁ",
          "title": "মাল্টি-শাখা সিঙ্ক, CCTV ও 4G/5G ব্যাকআপ",
          "easyDesc": "একাধিক শাখা বিশিষ্ট ব্যবসার জন্য। সমস্ত শাখার বিলিং লাইভ সিঙ্ক, মোবাইলে ২৪/৭ CCTV ক্যামেরা এবং ফাইবার তার কাটলে স্বয়ংক্রিয় 4G/5G ব্যাকআপ।"
        },
        {
          "badge": "বিকল্প ৪ · কারখানা ও উৎপাদন কেন্দ্র",
          "title": "১:১ ডেডিকেটেড লিজড লাইন ও মেশিন IoT",
          "easyDesc": "কারখানা ও উৎপাদন ইউনিটের জন্য। ৯৯.৫% আপটাইম নিশ্চয়তা সহ ১:১ আনশেয়ার্ড লিজড লাইন, স্ট্যাটিক IP এবং শিল্প যন্ত্রপাতির সেন্সর সংযোগ।"
        }
      ]
    },
    "step5": {
      "header": "বিশ্লেষণ সম্পন্ন! আপনার ব্যবসার জন্য এয়ারটেল ডিজিটাল বান্ডিল প্রস্তুত:",
      "whyTitle": "💡 এই বান্ডিলটি নির্বাচনের কারণ:",
      "billLabel": "একক মাসিক বিল:",
      "startOver": "পুনরায় শুরু করুন"
    },
    "rationales": {
      "clinic": "হাই-স্পিড বিজনেস ফাইবার। ক্লাউড টেলিফোনি নিশ্চিত করবে রোগীর কোনো কল যেন মিস না হয়। অফিসিয়াল ইমেল এবং সাইবার সুরক্ষা।",
      "restaurant": "সকল শাখা SD-WAN দ্বারা সংযুক্ত হবে। 4G/5G ব্যাকআপ এর মাধ্যমে ইউপিআই পেমেন্ট কখনো থামবে না। ক্লাউড সিসিটিভি লাইভ নজরদারি রাখবে।",
      "kirana": "সাশ্রয়ী মূল্যে বিজ ফাইবার 100 Mbps এবং স্ট্যাটিক আইপি অবিরাম ইউপিআই বিলিং দেবে।",
      "manufacturing": "100 Mbps ডেডিকেটেড লিজড লাইন 99.9% আপটাইম সহ। IoT সেন্সর মেশিনারি পর্যবেক্ষণ করবে।",
      "office": "300 Mbps ফাইবার, ক্লাউড অফিস এবং অ্যান্টিভাইরাস অডিট ফাইল সুরক্ষিত রাখবে।"
    },
    "recSolutionTag": "এয়ারটেল বিজনেস সলিউশন",
    "recInclusionsTitle": "ক্যাটালগ অন্তর্ভুক্ত সেবাসমূহ:",
    "recProductPlaceholder": "পণ্যের বিশদ দেখতে ৪টি ধাপ সম্পূর্ণ করুন",
    "recAllInOneLabel": "অল-ইন-ওয়ান মাসিক খরচ",
    "recSetupWaived": "সেটআপ ফি মওকুফ",
    "demoSub": "product_catalogue.csv-এর ২৫টি পণ্য তাৎক্ষণিক মূল্যায়ন করে",
    "demoScenarios": {
      "clinic": "🩺 ডেন্টাল ক্লিনিক (১২ জন কর্মী · ১টি শাখা · ব্রডব্যান্ড)",
      "restaurant": "🍽️ রেস্তোরাঁ চেইন (৪৫ জন কর্মী · ৫টি শাখা · SD-WAN ও CCTV)",
      "kirana": "🛒 মুদি দোকান (২ জন কর্মী · ১টি দোকান · হটস্পট to POS)",
      "manufacturing": "🏭 কারখানা (৮৫ জন কর্মী · ১০০M লিজড লাইন + IoT)",
      "ca_firm": "💼 সিএ ও আইন সংস্থা (১২ জন কর্মী · অফিস ইমেইল + অ্যান্টিভাইরাস)"
    },
    "tabQuote": {
      "stepTag": "ধাপ ২ / ৪ · তাৎক্ষণিক কোটেশন",
      "heading": "কাস্টমাইজড ডিজিটাল বান্ডিল এবং স্বচ্ছ মূল্য",
      "sub": "একক সমন্বিত ইনভয়েস। সার্ভার-সাইড মূল্য লক। রিয়েল-টাইমে অ্যাড-অন যুক্ত করুন।",
      "estLabel": "আনুমানিক মাসিক পৌনঃপুনিক খরচ",
      "baseInclusionsTitle": "মূল প্যাকেজে অন্তর্ভুক্ত সেবাসমূহ",
      "addonsTitle": "ঐচ্ছিক প্রস্তাবিত অ্যাড-অন (সার্ভার যাচাইকৃত)",
      "addonFailoverTitle": "স্বয়ংক্রিয় 4G/5G ওয়্যারলেস ব্যাকআপ রাউটার",
      "addonFailoverDesc": "মূল ইন্টারনেটের তার কেটে গেলেও এটি সাথে সাথে মোবাইল সিমে চালু হয়ে যাবে, ফলে UPI পেমেন্ট ও কার্ড মেশিন কখনো বন্ধ হবে না।",
      "addonCctvTitle": "ক্লাউড সিসিটিভি নজরদারি (২টি এইচডি ক্যামেরা)",
      "addonCctvDesc": "দোকানের লাইভ ভিডিও এবং বিগত ৩০ দিনের রেকর্ডিং সরাসরি আপনার ফোনে যখন খুশি দেখুন—আলাদা রেকর্ডিং বক্স লাগবে না।",
      "addonStaticIpTitle": "পাবলিক স্ট্যাটিক আইপি ঠিকানা",
      "addonStaticIpDesc": "আপনার ব্যবসার জন্য একটি স্থায়ী ইন্টারনেট ঠিকানা—স্টাফ বায়োমেট্রিক হাজিরা ও নিরাপদ ব্যাংক বিলিংয়ের জন্য দরকার।",
      "billTitle": "একক সমন্বিত মাসিক বিল",
      "baseLabel": "মূল প্যাকেজ",
      "addonLabel": "নির্বাচিত অ্যাড-অন",
      "setupLabel": "ইনস্টলেশন ও সেটআপ ফি",
      "setupVal": "মওকুফ (₹০)",
      "subtotalLabel": "উপমোট",
      "gstLabel": "জিএসটি (১৮%)",
      "totalLabel": "মাসিক সর্বমোট প্রদেয়",
      "priceLockText": "১২ মাসের মূল্য অপরিবর্তিত থাকার গ্যারান্টি",
      "gstInvoiceText": "একক সমন্বিত জিএসটি কর চালান",
      "proceedText": "স্মার্ট কেওয়াইসি যাচাইকরণে এগিয়ে যান",
      "perMonth": "/ মাস",
      "plusGst": "+ জিএসটি"
    },
    "tabKyc": {
      "stepTag": "ধাপ ৩ / ৪ · স্বয়ংক্রিয় ডিজিটাল কেওয়াইসি",
      "heading": "স্মার্ট কেওয়াইসি এবং তথ্য গোপনীয়তা ইঞ্জিন",
      "sub": "ডিপিদিপি আইন ২০২৩ সম্মতি এবং ডিওটি ৯০-দিনের নিয়মের অধীনে তাৎক্ষণিক সরকারি যাচাইকরণ।",
      "applicantSelectLabel": "নমুনা আবেদনকারী:",
      "dpdpTitle": "ডিপিদিপি আইন ২০২৩ সংবিধিবদ্ধ সম্মতি ও গোপনীয়তা বিজ্ঞপ্তি",
      "dpdpPurposeBadge": "উদ্দেশ্য-সীমাবদ্ধ",
      "dpdpNoticeText": "ডিজিটাল ব্যক্তিগত ডেটা সুরক্ষা আইন, ২০২৩ অনুযায়ী, শুধুমাত্র পরিষেবা সক্রিয়করণ ও বিলিংয়ের উদ্দেশ্যে ব্যবসায়িক প্রমাণ সংগ্রহ করা হয়। ব্যক্তিগত তথ্য সুরক্ষিত রাখা হয়।",
      "dpdpConsentCheckLabel": "আমি জিএসটিএন এবং উদ্যম জাতীয় রেজিস্ট্রির মাধ্যমে ডেটা যাচাইয়ের স্পষ্ট সম্মতি দিচ্ছি।",
      "doc1Title": "নথি ১: ব্যবসায়িক নিবন্ধন (জিএসটি)",
      "doc1GstinLabel": "চিহ্নিত জিএসটি নম্বর (সুরক্ষিত):",
      "doc1LegalLabel": "প্রতিষ্ঠানের আইনি নাম:",
      "doc1RegCheckLabel": "রেজিস্ট্রি যাচাইকরণ:",
      "doc2Title": "নথি ২: এমএসএমই নিবন্ধন (উদ্যম)",
      "doc2UdyamNoLabel": "উদ্যম এমএসএমই নম্বর:",
      "doc2TypeLabel": "শ্রেণিবিভাগ:",
      "doc2PriorityLabel": "এমএসএমই অগ্রাধিকার:",
      "doc2PriorityVal": "অগ্রাধিকার বিজনেস ব্রডব্যান্ড",
      "doc3Title": "নথি ৩: অনুমোদিত স্বাক্ষরকারী পরিচয়পত্র",
      "doc3TokenBadge": "ডিপিদিপি টোকেনাইজড",
      "doc3SignatoryLabel": "অনুমোদিত স্বাক্ষরকারী:",
      "doc3IdLabel": "সুরক্ষিত পরিচয় নম্বর:",
      "doc3PrivacyLabel": "গোপনীয়তা সুরক্ষা:",
      "doc4Title": "নথি ৪: ঠিকানার প্রমাণপত্র",
      "doc4DocTypeLabel": "নথির ধরন:",
      "doc4IssueDateLabel": "মেয়াদ ও জারির তারিখ:",
      "doc4PremisesLabel": "প্রতিষ্ঠানের ঠিকানা:",
      "uploadTitle": "সমস্ত ৪টি KYC নথি আপলোড করুন (kyc_documents/ থেকে নির্বাচন করুন)",
      "uploadSub": "রেজিস্ট্রি যাচাইয়ের জন্য GST, উদ্যোগ, স্বাক্ষরকারীর পরিচয়পত্র ও ঠিকানার প্রমাণ আপলোড করুন",
      "runKycBtnText": "স্বয়ংক্রিয় নিয়ম ও রেজিস্ট্রি যাচাই শুরু করুন",
      "runKycSubtext": "সরকারি রেজিস্ট্রি ও ডিওটি নিয়মের ভিত্তিতে মূল্যায়ন",
      "kycDecisionHeaderLabel": "স্বয়ংক্রিয় যাচাইকরণ সিদ্ধান্ত",
      "kycAuditFindingLabel": "নিয়মপালন সারাংশ:",
      "kycProceedBtnText": "কেওয়াইসি অনুমোদিত · অর্ডার ট্র্যাকারে এগিয়ে যান",
      "replaceBtn": "ফাইল পরিবর্তন",
      "removeBtn": "মুছুন",
      "clickUpload": "আপলোড করতে ক্লিক করুন",
      "mandatoryDoc": "বাধ্যতামূলক নথি",
      "awaitingDoc": "নথি আপলোডের অপেক্ষায়",
      "notVerified": "যাচাই করা হয়নি (নথি অনুপস্থিত)",
      "docsActiveBadge": "4 / 4 নথি সক্রিয়",
      "docsMissingBadge": "{count} / 4 আপলোড করা হয়েছে ({missing} অনুপস্থিত)",
      "activeDocsNotice": "সমস্ত 4টি নথি সুরক্ষিতভাবে এনক্রিপ্ট করা হয়েছে।",
      "missingDocsNotice": "যাচাই করার জন্য অনুগ্রহ করে সমস্ত 4টি নথি আপলোড করুন।",
      "actionNeededPrefix": "পদক্ষেপ প্রয়োজন:",
      "decisionApprovedTitle": "যাচাই অনুমোদিত · সংযোগ প্রদানের জন্য প্রস্তুত",
      "decisionHaltedTitle": "যাচাই স্থগিত · সম্মতির সমস্যা সনাক্ত হয়েছে",
      "decisionApprovedSummary": "প্রতিষ্ঠানটি সক্রিয় হিসেবে যাচাই করা হয়েছে (<strong>{legalName}</strong>)। এমএসএমই উদ্যোগ শ্রেণীকরণ যাচাইকৃত, ঠিকানার প্রমাণ বিধিবদ্ধ ডিওটি ৯০ দিনের সীমার মধ্যে রয়েছে ({days} দিন পুরনো), এবং ডিপিডিপি আইন ২০২৩ ডিজিটাল সম্মতি রেকর্ড করা হয়েছে।",
      "auditDoc1": "নথি ১: GSTIN রেজিস্ট্রি পরীক্ষা ({gstin}): সক্রিয় ({legalName})",
      "auditDoc2": "নথি ২: এমএসএমই উদ্যোগ রেজিস্ট্রি পরীক্ষা: {udyam} ({type})",
      "auditDoc3": "নথি ৩: অনুমোদিত স্বাক্ষরকারী যাচাইকরণ ({name} ({role})): ডিপিডিপি টোকেনাইজড",
      "auditDoc4": "নথি ৪: প্রাঙ্গণ ঠিকানার প্রমাণ বয়স: {days} দিন (DoT নিয়ম: ≤ ৯০ দিন)",
      "passBadge": "পাস",
      "failBadge": "ব্যর্থ"
    },
    "tabTracker": {
      "stepTag": "ধাপ ৪ / ৪ · অর্ডার ও ইনস্টলেশন",
      "heading": "অর্ডার স্থিতি ও ইনস্টলেশন ট্র্যাকার",
      "sub": "",
      "milestoneTitle": "ইনস্টলেশন অগ্রগতি",
      "slaBadge": "নিশ্চিত ইনস্টলেশন: ৪৮ ঘণ্টার মধ্যে",
      "m1Title": "১. প্ল্যান ও কোটেশন নিশ্চিত",
      "m1Desc": "১২ মাসের মূল্য সুরক্ষার সাথে আপনার ব্যবসায়িক প্ল্যান নিশ্চিত হয়েছে।",
      "m2Title": "২. বিজনেস কেওয়াইসি যাচাইকৃত",
      "m2Desc": "ব্যবসায়িক নিবন্ধন এবং নথিপত্র সফলভাবে যাচাই করা হয়েছে।",
      "m3Title": "৩. ইনস্টলেশন ইঞ্জিনিয়ার নিযুক্ত",
      "m3Desc": "এয়ারটেল টেকনিশিয়ান আপনার ফাইবার সংযোগ ইনস্টল করতে আসছেন।",
      "m3Status": "চলমান",
      "m4Title": "৪. স্পিড টেস্ট ও সার্ভিস চালু",
      "m4Desc": "আপনার দোকানে ইন্টারনেট স্পিড টেস্ট এবং স্বাগত কনফার্মেশন SMS।",
      "m4Status": "আগামীকাল সম্ভাব্য",
      "assignedExecTitle": "নিযুক্ত ইনস্টলেশন ইঞ্জিনিয়ার",
      "assignedExecRole": "সিনিয়র ফাইবার ইনস্টলেশন ইঞ্জিনিয়ার",
      "assignedExecRating": "★ ৪.৯ রেটিং (৪২০ ইনস্টলেশন)",
      "slaLabel": "নিশ্চিত সময়সীমা:",
      "slaVal": "৪৮ ঘণ্টার মধ্যে",
      "installWindowLabel": "ইনস্টলেশন সময়:",
      "installWindowVal": "আগামীকাল, দুপুর ২:০০ - বিকেল ৪:০০",
      "equipmentLabel": "সরবরাহকৃত সরঞ্জাম:",
      "equipmentVal": "ওয়াই-ফাই ৬ হাই-স্পিড রাউটার",
      "supportLabel": "সাহায্য প্রয়োজন? কল করুন:",
      "revAdvTitle": "1. AI পরামর্শক মূল্যায়ন",
      "revAdvSub": "চাহিদা মূল্যায়িত · প্ল্যান প্রস্তাবিত",
      "revQuoteTitle": "2. কোটেশন ও প্ল্যান",
      "revQuoteSub": "স্বচ্ছ মাসিক বিল লক করা হয়েছে",
      "revKycTitle": "3. স্মার্ট কেওয়াইসি ও গোপনীয়তা",
      "revKycSub": "৪টি নথি এবং GSTN যাচাইকৃত",
      "doneBadge": "সম্পন্ন",
      "orderBadgeText": "অর্ডার"
    },
    "footerText": "এয়ারটেল বিজনেস এন্টারপ্রাইজ ট্র্যাক এ · প্রজেক্ট উদ্যম ডিজিটাল · সম্পূর্ণ ডিপিদিপি আইন ২০২৩ ও ডিওটি সম্মত",
    "bundles": {
      "starter": {
        "name": "এয়ারটেল স্টার্টার ডিজিটাল প্যাক",
        "segment": "ক্ষুদ্র খুচরা ও সেবা",
        "sla": "৯৯.৫% কমার্শিয়াল ফাইবার",
        "desc": "বিজ ফাইবার ১০০ এমবিপিএস + স্ট্যাটিক আইপি + ক্লাউড পিওএস ও বিলিং।"
      },
      "mfg_pro": {
        "name": "এয়ারটেল স্মার্ট ম্যানুফ্যাকচারিং স্যুট",
        "segment": "ক্ষুদ্র শিল্প কারখানা",
        "sla": "৯৯.৯% ডেডিকেটেড লিজড লাইন",
        "desc": "ডেডিকেটেড ১:১ ইন্টারনেট লিজড লাইন (১০০ এমবিপিএস) + আইওটি সেন্সর + ফায়ারওয়াল।"
      },
      "multi_chain": {
        "name": "এয়ারটেল কানেক্টেড এন্টারপ্রাইজ (মাল্টি-সাইট)",
        "segment": "একাধিক শাখা বিশিষ্ট ব্যবসা",
        "sla": "৯৯.৫% ফাইবার + ৪জি ব্যাকআপ",
        "desc": "কমার্শিয়াল ব্রডব্যান্ড + ক্লাউড ভয়েস আইভিআর + ব্যবসায়িক ইমেইল + নিরাপত্তা।"
      },
      "pro_office": {
        "name": "এয়ারটেল প্রফেশনাল অফিস স্যুট",
        "segment": "পেশাদার অফিস ও ক্লিনিক",
        "sla": "৯৯.৫% কমার্শিয়াল ফাইবার",
        "desc": "কমার্শিয়াল ব্রডব্যান্ড + ক্লাউড ভয়েস আইভিআর + ব্যবসায়িক ইমেইল + নিরাপত্তা।"
      }
    },
    "kycBadges": {
      "activeTaxpayer": "সক্রিয় করদাতা",
      "suspended": "স্থগিত",
      "cancelled": "বাতিল",
      "verifiedMsme": "যাচাইকৃত এমএসএমই",
      "exemptNone": "অব্যাহতিপ্রাপ্ত / প্রযোজ্য নয়",
      "dotValid": "বৈধ (≤৯০ দিন)",
      "dotExpired": "মেয়াদোত্তীর্ণ (>৯০ দিন)",
      "approvedDecision": "APPROVED",
      "rejectedDecision": "ACTION REQUIRED / REJECTED",
      "verifiedRegDate": "জাতীয় জিএসটিএন রেজিস্ট্রিতে যাচাইকৃত",
      "dpdpConsentStatus": "ডিপিদিপি ডিজিটাল সম্মতি সংরক্ষিত",
      "notUploaded": "আপলোড করা হয়নি · প্রয়োজনীয়",
      "dpdpTokenized": "ডিপিডিপি টোকেনাইজড"
    },
    "advisorLockedText": "তথ্য সম্পন্ন · উত্তর ও সুপারিশ সংরক্ষিত (পরিবর্তনযোগ্য নয়)",
    "advisorEditText": "উত্তর সম্পাদনা করুন",
    "advisorNextText": "পরবর্তী: কোটেশন",
    "backToAdvisorBtn": "এআই উপদেষ্টায় ফিরুন",
    "quoteLockedText": "কোটেশন গৃহীত · ১২ মাসের মূল্য লক (পরিবর্তনযোগ্য নয়)",
    "quoteEditText": "অ্যাড-অন পরিবর্তন করুন",
    "quoteNextText": "পরবর্তী: স্মার্ট কেওয়াইসি",
    "backToQuoteBtn": "কোটেশনে ফিরুন",
    "kycLockedText": "কেওয়াইসি যাচাইকৃত (পরিবর্তনযোগ্য নয়)",
    "kycReturnTrackerText": "অর্ডার ট্র্যাকারে ফিরুন",
    "reviewJourneyTitle": "অর্ডার সক্রিয় এবং ট্র্যাক করা হচ্ছে:",
    "reviewJourneySub": "পূর্ববর্তী পৃষ্ঠাগুলির তথ্য পর্যালোচনা করুন:",
    "revBtnAdv": "১. উপদেষ্টা দেখুন",
    "revBtnQuote": "২. কোটেশন দেখুন",
    "revBtnKyc": "৩. কেওয়াইসি দেখুন",
    "inputPlaceholderLocked": "সম্পন্ন · তথ্য সংরক্ষিত",
    "kycVerifiedBadge": "কেওয়াইসি যাচাই সম্পন্ন",
    "continueToKyc": "কেওয়াইসিতে এগিয়ে যান"
  },
  "pa": {
    "langCode": "pa-IN",
    "name": "ਪੰਜਾਬੀ (Punjabi)",
    "brandSub": "ਪ੍ਰੋਜੈਕਟ ਉਦਯਮ ਡਿਜੀਟਲ · ਏਅਰਟੈੱਲ ਬਿਜ਼ਨਸ",
    "navAdvisor": "1. ਏਆਈ ਸਲਾਹਕਾਰ",
    "navQuote": "2. ਕੋਟੇਸ਼ਨ ਅਤੇ ਪਲਾਨ",
    "navKyc": "3. ਸਮਾਰਟ ਕੇਵਾਈਸੀ",
    "navTracker": "4. ਆਰਡਰ ਟਰੈਕਰ",
    "navBackOffice": "5. ਪ੍ਰਬੰਧਨ ਪੋਰਟਲ",
    "advisorHeading": "ਡਿਜੀਟਲ ਬਿਜ਼ਨਸ ਸਲਾਹਕਾਰ",
    "advisorSub": "ਤਰਤੀਬਵਾਰ ਸਵਾਲ: 1. ਕਿਸਮ → 2. ਆਕਾਰ → 3. ਸ਼ਾਖਾਵਾਂ → 4. ਸਾਧਨ",
    "stepProgress": "ਕਦਮ 4 ਵਿੱਚੋਂ {step}",
    "restartBtn": "ਦੁਬਾਰਾ ਸ਼ੁਰੂ ਕਰੋ",
    "inputPlaceholder": "ਜਵਾਬ ਟਾਈਪ ਕਰੋ ਜਾਂ ਮਾਈਕ ਤੇ ਬੋਲੋ...",
    "sendBtn": "ਭੇਜੋ",
    "whyTitle": "ਇਹ ਬੰਡਲ ਤੁਹਾਡੇ ਕਾਰੋਬਾਰ ਲਈ ਕਿਉਂ ਵਧੀਆ ਹੈ:",
    "billLabel": "ਇੱਕੋ ਪਾਰਦਰਸ਼ੀ ਮਹੀਨਾਵਾਰ ਬਿੱਲ:",
    "acceptBtn": "ਸਿਫ਼ਾਰਿਸ਼ ਸਵੀਕਾਰ ਕਰੋ ਅਤੇ ਕੋਟੇਸ਼ਨ ਦੇਖੋ",
    "recsBadge": "ਪਲਾਨ ਤਿਆਰ ਹੈ",
    "recsPending": "ਵਿਸ਼ਲੇਸ਼ਣ ਜਾਰੀ ਹੈ",
    "awaitingTitle": "ਜਵਾਬਾਂ ਦੀ ਉਡੀਕ ਹੈ",
    "awaitingDesc": "ਖੱਬੇ ਪਾਸੇ ਦਿੱਤੇ 4 ਸਵਾਲਾਂ ਦੇ ਜਵਾਬ ਦਿਓ। ਏਅਰਟੈੱਲ ਡਿਜੀਟਲ ਪੈਕ ਇੱਥੇ ਤਿਆਰ ਹੋਵੇਗਾ।",
    "awaitingRationale": "ਸਿਫਾਰਸ਼ ਇੰਜਣ ਤੁਹਾਡੇ ਕਾਰੋਬਾਰ ਦੀ ਕਿਸਮ, ਕਰਮਚਾਰੀਆਂ ਦੀ ਗਿਣਤੀ ਅਤੇ ਸ਼ਾਖਾਵਾਂ ਅਨੁਸਾਰ ਏਅਰਟੈੱਲ ਪ੍ਰੋਡਕਟ ਕੈਟਾਲਾਗ ਵਿੱਚੋਂ ਸਭ ਤੋਂ ਵਧੀਆ ਪੈਕੇਜ ਚੁਣੇਗਾ।",
    "demoTitle": "ਡੈਮੋ ਦ੍ਰਿਸ਼:",
    "step1": {
      "title": "ਕਦਮ 1: ਕਾਰੋਬਾਰ ਦੀ ਕਿਸਮ",
      "question": "ਏਅਰਟੈੱਲ ਬਿਜ਼ਨਸ ਵਿੱਚ ਜੀ ਆਇਆਂ ਨੂੰ! <strong>ਕਦਮ 1 / 4: ਤੁਸੀਂ ਕਿਸ ਕਿਸਮ ਦਾ ਕਾਰੋਬਾਰ ਚਲਾਉਂਦੇ ਹੋ?</strong> (ਜਿਵੇਂ ਕਿ ਕਲੀਨਿਕ, ਕਰਿਆਨਾ ਸਟੋਰ, ਰੈਸਟੋਰੈਂਟ, ਫੈਕਟਰੀ, ਦਫ਼ਤਰ)",
      "options": [
        {
          "label": "🩺 ਕਲੀਨਿਕ / ਹਸਪਤਾਲ",
          "val": "ਡੈਂਟਲ ਕਲੀਨਿਕ"
        },
        {
          "label": "🛒 ਕਰਿਆਨਾ / ਰਿਟੇਲ ਸਟੋਰ",
          "val": "ਕਰਿਆਨਾ ਦੁਕਾਨ"
        },
        {
          "label": "🍽️ ਰੈਸਟੋਰੈਂਟ / ਕੈਫੇ",
          "val": "ਰੈਸਟੋਰੈਂਟ ਚੇਨ"
        },
        {
          "label": "🏭 ਫੈਕਟਰੀ / ਉਦਯੋਗ",
          "val": "ਮੈਨੂਫੈਕਚਰਿੰਗ ਫੈਕਟਰੀ"
        },
        {
          "label": "💼 ਸੀਏ / ਵਕੀਲ / ਦਫ਼ਤਰ",
          "val": "ਸੀਏ ਦਫ਼ਤਰ"
        }
      ],
      "placeholder": "ਕਾਰੋਬਾਰ ਦੀ ਕਿਸਮ ਲਿਖੋ..."
    },
    "step2": {
      "title": "ਕਦਮ 2: ਮੁਲਾਜ਼ਮਾਂ ਦੀ ਗਿਣਤੀ",
      "question": "ਵਧੀਆ! <strong>ਕਦਮ 2 / 4: ਤੁਹਾਡੇ ਕਾਰੋਬਾਰ ਵਿੱਚ ਕਿੰਨੇ ਮੁਲਾਜ਼ਮ ਕੰਮ ਕਰਦੇ ਹਨ?</strong>",
      "options": [
        {
          "label": "1-3 ਮੁਲਾਜ਼ਮ",
          "val": "2 ਮੁਲਾਜ਼ਮ"
        },
        {
          "label": "5-15 ਮੁਲਾਜ਼ਮ",
          "val": "12 ਮੁਲਾਜ਼ਮ"
        },
        {
          "label": "25-50 ਮੁਲਾਜ਼ਮ",
          "val": "45 ਮੁਲਾਜ਼ਮ"
        },
        {
          "label": "80+ ਮਜ਼ਦੂਰ",
          "val": "85 ਮੁਲਾਜ਼ਮ"
        }
      ],
      "placeholder": "ਮੁਲਾਜ਼ਮਾਂ ਦੀ ਗਿਣਤੀ ਦਰਜ ਕਰੋ..."
    },
    "step3": {
      "title": "ਕਦਮ 3: ਸ਼ਾਖਾਵਾਂ ਦੀ ਗਿਣਤੀ",
      "question": "ਸਮਝ ਗਿਆ! <strong>ਕਦਮ 3 / 4: ਤੁਹਾਡੇ ਕਾਰੋਬਾਰ ਦੀਆਂ ਕਿੰਨੀਆਂ ਸ਼ਾਖਾਵਾਂ ਜਾਂ ਦੁਕਾਨਾਂ ਹਨ?</strong>",
      "options": [
        {
          "label": "1 ਦੁਕਾਨ",
          "val": "1 ਦੁਕਾਨ"
        },
        {
          "label": "2-3 ਸ਼ਾਖਾਵਾਂ",
          "val": "3 ਸ਼ਾਖਾਵਾਂ"
        },
        {
          "label": "5 ਸ਼ਾਖਾਵਾਂ",
          "val": "5 ਸ਼ਾਖਾਵਾਂ"
        },
        {
          "label": "10+ ਸ਼ਾਖਾਵਾਂ",
          "val": "10 ਸ਼ਾਖਾਵਾਂ"
        }
      ],
      "placeholder": "ਸ਼ਾਖਾਵਾਂ ਦੀ ਗਿਣਤੀ ਦਰਜ ਕਰੋ..."
    },
    "step4": {
      "title": "ਕਦਮ 4: ਮੌਜੂਦਾ ਸਾਧਨ",
      "question": "ਆਖਰੀ ਸਵਾਲ! <strong>ਕਦਮ 4 / 4: ਮੌਜੂਦਾ ਸਮੇਂ ਤੁਸੀਂ ਇੰਟਰਨੈੱਟ ਲਈ ਕੀ ਵਰਤਦੇ ਹੋ ਅਤੇ ਤੁਹਾਨੂੰ ਕੀ ਚਾਹੀਦਾ ਹੈ?</strong>",
      "options": [
        {
          "label": "1. ਦੁਕਾਨ ਕਾਊਂਟਰ ਤੇ POS (UPI ਵਾਈ-ਫਾਈ)",
          "sub": "UPI ਸਾਊਂਡਬਾਕਸ ਅਤੇ ਕਾਰਡ ਸਵਾਈਪ ਮਸ਼ੀਨਾਂ ਲਈ",
          "val": "Mobile Hotspot, need billing POS and guest Wi-Fi"
        },
        {
          "label": "2. ਦਫ਼ਤਰ ਤੇ ਕਲੀਨਿਕ (ਫਾਈਬਰ, ਈਮੇਲ ਤੇ IVR)",
          "sub": "ਕਮਰਸ਼ੀਅਲ ਫਾਈਬਰ, ਕੰਪਨੀ ਈਮੇਲ ਤੇ ਆਟੋਮੇਟਿਡ ਫ਼ੋਨ ਰਿਸੈਪਸ਼ਨ",
          "val": "Home Broadband, need cloud telephony and office email"
        },
        {
          "label": "3. ਮਲਟੀ-ਸਟੋਰ ਆਊਟਲੇਟ (CCTV ਤੇ ਬੈਕਅੱਪ)",
          "sub": "ਲਾਈਵ ਬ੍ਰਾਂਚ ਸਿੰਕ, ਮੋਬਾਈਲ CCTV ਤੇ ਆਟੋ 4G/5G ਬੈਕਅੱਪ",
          "val": "Mixed Local ISP, need SD-WAN, CCTV cameras and failover"
        },
        {
          "label": "4. ਫ਼ੈਕਟਰੀ ਲੀਜ਼ਡ ਲਾਈਨ (1:1 ਸਮਰਪਿਤ)",
          "sub": "1:1 ਅਨਸ਼ੇਅਰਡ ਲੀਜ਼ਡ ਲਾਈਨ, 99.5% SLA ਤੇ ਮਸ਼ੀਨ IoT ਸੈਂਸਰ",
          "val": "Need 100 Mbps dedicated leased line and machine sensors"
        }
      ],
      "placeholder": "ਮੌਜੂਦਾ ਇੰਟਰਨੈੱਟ ਅਤੇ ਲੋੜਾਂ...",
      "guideTitle": "ਤੁਹਾਡੇ 4 ਵਿਕਲਪਾਂ ਦੀ ਸੌਖੀ ਭਾਸ਼ਾ ਵਿੱਚ ਸਮਝ:",
      "guideSubtitle": "ਆਪਣੇ ਮੌਜੂਦਾ ਕਾਰੋਬਾਰੀ ਪ੍ਰਬੰਧ ਅਨੁਸਾਰ ਸਭ ਤੋਂ ਵਧੀਆ ਵਿਕਲਪ ਚੁਣੋ:",
      "guideItems": [
        {
          "badge": "ਵਿਕਲਪ 1 · ਦੁਕਾਨ ਤੇ ਕਰਿਆਨਾ ਕਾਊਂਟਰ",
          "title": "ਦੁਕਾਨ ਕਾਊਂਟਰ ਤੇ UPI ਬਿਲਿੰਗ POS",
          "easyDesc": "ਮੋਬਾਈਲ ਹੌਟਸਪੌਟ ਵਰਤਣ ਵਾਲੀਆਂ ਦੁਕਾਨਾਂ ਲਈ। ਸਮਰਪਿਤ ਕਾਊਂਟਰ ਵਾਈ-ਫਾਈ ਤਾਂ ਜੋ UPI QR, ਸਾਊਂਡਬਾਕਸ ਅਤੇ ਕਾਰਡ ਸਵਾਈਪ ਮਸ਼ੀਨ ਬਿਲਿੰਗ ਵੇਲੇ ਕਦੇ ਨਾ ਰੁਕੇ।"
        },
        {
          "badge": "ਵਿਕਲਪ 2 · ਕਲੀਨਿਕ ਤੇ ਦਫ਼ਤਰ ਸੂਟ",
          "title": "ਦਫ਼ਤਰ ਸੂਟ, ਡੋਮੇਨ ਈਮੇਲ ਤੇ IVR",
          "easyDesc": "ਘਰੇਲੂ ਬਰਾਡਬੈਂਡ ਵਰਤਣ ਵਾਲੇ ਦਫ਼ਤਰਾਂ ਤੇ ਕਲੀਨਿਕਾਂ ਲਈ। ਤੇਜ਼ ਕਮਰਸ਼ੀਅਲ ਫਾਈਬਰ, ਅਧਿਕਾਰਤ ਕੰਪਨੀ ਈਮੇਲ (you@firm.com) ਅਤੇ ਆਟੋਮੇਟਿਡ IVR ਫ਼ੋਨ ਪ੍ਰਣਾਲੀ।"
        },
        {
          "badge": "ਵਿਕਲਪ 3 · ਮਲਟੀ-ਬ੍ਰਾਂਚ ਸਟੋਰ ਤੇ ਰੈਸਟੋਰੈਂਟ",
          "title": "ਮਲਟੀ-ਬ੍ਰਾਂਚ ਸਿੰਕ, CCTV ਤੇ 4G/5G ਬੈਕਅੱਪ",
          "easyDesc": "ਕਈ ਸ਼ਾਖਾਵਾਂ ਵਾਲੇ ਕਾਰੋਬਾਰਾਂ ਲਈ। ਸਾਰੀਆਂ ਸ਼ਾਖਾਵਾਂ ਦਾ ਲਾਈਵ ਬਿਲਿੰਗ ਸਿੰਕ, ਫ਼ੋਨ 'ਤੇ 24/7 CCTV ਅਤੇ ਫਾਈਬਰ ਤਾਰ ਕੱਟਣ 'ਤੇ ਤੁਰੰਤ ਸ਼ੁਰੂ ਹੋਣ ਵਾਲਾ ਆਟੋ 4G/5G ਬੈਕਅੱਪ।"
        },
        {
          "badge": "ਵਿਕਲਪ 4 · ਫ਼ੈਕਟਰੀ ਤੇ ਉਦਯੋਗਿਕ ਯੂਨਿਟ",
          "title": "1:1 ਡੈਡੀਕੇਟਿਡ ਲੀਜ਼ਡ ਲਾਈਨ ਤੇ ਮਸ਼ੀਨ IoT",
          "easyDesc": "ਫ਼ੈਕਟਰੀਆਂ ਅਤੇ ਨਿਰਮਾਣ ਪਲਾਂਟਾਂ ਲਈ। 99.5% ਅਪਟਾਈਮ ਗਰੰਟੀ ਨਾਲ 1:1 ਅਨਸ਼ੇਅਰਡ ਲੀਜ਼ਡ ਲਾਈਨ, ਸਟੈਟਿਕ IP ਅਤੇ ਉਦਯੋਗਿਕ ਮਸ਼ੀਨ ਸੈਂਸਰ ਕੁਨੈਕਟੀਵਿਟੀ।"
        }
      ]
    },
    "step5": {
      "header": "ਵਿਸ਼ਲੇਸ਼ਣ ਮੁਕੰਮਲ! ਤੁਹਾਡੇ ਕਾਰੋਬਾਰ ਲਈ ਏਅਰਟੈੱਲ ਡਿਜੀਟਲ ਬੰਡਲ ਤਿਆਰ ਹੈ:",
      "whyTitle": "💡 ਇਹ ਬੰਡਲ ਚੁਣਨ ਦਾ ਕਾਰਨ:",
      "billLabel": "ਇੱਕੋ ਮਹੀਨਾਵਾਰ ਬਿੱਲ:",
      "startOver": "ਦੁਬਾਰਾ ਸ਼ੁਰੂ ਕਰੋ"
    },
    "rationales": {
      "clinic": "ਹਾਈ-ਸਪੀਡ ਬਿਜ਼ਨਸ ਫਾਈਬਰ। ਕਲਾਉਡ ਟੈਲੀਫੋਨੀ ਨਾਲ ਮਰੀਜ਼ਾਂ ਦੇ ਕਾਲ ਮਿਸ ਨਹੀਂ ਹੋਣਗੇ। ਅਧਿਕਾਰਤ ਈਮੇਲ ਅਤੇ ਐਂਟੀਵਾਇਰਸ।",
      "restaurant": "ਸਾਰੀਆਂ ਸ਼ਾਖਾਵਾਂ SD-WAN ਨਾਲ ਜੁੜਨਗੀਆਂ। 4G/5G ਬੈਕਅੱਪ ਨਾਲ ਯੂਪੀਆਈ ਪੇਮੈਂਟ ਕਦੇ ਨਹੀਂ ਰੁਕੇਗੀ। ਕਲਾਉਡ ਸੀਸੀਟੀਵੀ 24/7 ਨਿਗਰਾਨੀ ਰੱਖੇਗਾ।",
      "kirana": "ਕਿਫਾਇਤੀ ਬਿਜ਼ ਫਾਈਬਰ 100 Mbps ਅਤੇ ਸਟੈਟਿਕ ਆਈਪੀ ਨਿਰਵਿਘਨ ਯੂਪੀਆਈ ਬਿਲਿੰਗ ਯਕੀਨੀ ਬਣਾਉਂਦੇ ਹਨ।",
      "manufacturing": "100 Mbps 1:1 ਡੈਡੀਕੇਟਿਡ ਲੀਜ਼ਡ ਲਾਈਨ 99.9% ਗਾਰੰਟੀ ਨਾਲ। IoT ਸੈਂਸਰ ਮਸ਼ੀਨਾਂ ਦੀ ਕਾਰਗੁਜ਼ਾਰੀ ਦੱਸਣਗੇ।",
      "office": "300 Mbps ਫਾਈਬਰ, ਕਲਾਉਡ ਆਫਿਸ ਅਤੇ ਸੁਰੱਖਿਆ ਆਡਿਟ ਫਾਈਲਾਂ ਨੂੰ ਸੁਰੱਖਿਅਤ ਰੱਖਣਗੇ।"
    },
    "recSolutionTag": "ਏਅਰਟੈੱਲ ਬਿਜ਼ਨਸ ਹੱਲ",
    "recInclusionsTitle": "ਸ਼ਾਮਲ ਸੇਵਾਵਾਂ:",
    "recProductPlaceholder": "ਉਤਪਾਦਾਂ ਦਾ ਵੇਰਵਾ ਦੇਖਣ ਲਈ 4 ਕਦਮ ਪੂਰੇ ਕਰੋ",
    "recAllInOneLabel": "ਆਲ-ਇਨ-ਵਨ ਮਹੀਨਾਵਾਰ ਖਰਚਾ",
    "recSetupWaived": "ਇੰਸਟਾਲੇਸ਼ਨ ਫੀਸ ਮਾਫ਼",
    "demoSub": "product_catalogue.csv ਦੇ 25 ਉਤਪਾਦਾਂ ਦਾ ਤੁਰੰਤ ਮੁਲਾਂਕਣ ਕਰਦਾ ਹੈ",
    "demoScenarios": {
      "clinic": "🩺 ਡੈਂਟਲ ਕਲੀਨਿਕ (12 ਸਟਾਫ · 1 ਸਾਈਟ · ਬਰਾਡਬੈਂਡ)",
      "restaurant": "🍽️ ਰੈਸਟੋਰੈਂਟ ਚੇਨ (45 ਸਟਾਫ · 5 ਬ੍ਰਾਂਚਾਂ · SD-WAN ਅਤੇ CCTV)",
      "kirana": "🛒 ਕਰਿਆਨਾ ਸਟੋਰ (2 ਸਟਾਫ · 1 ਦੁਕਾਨ · ਹੌਟਸਪੌਟ to POS)",
      "manufacturing": "🏭 ਫੈਕਟਰੀ (85 ਮਜ਼ਦੂਰ · 100M ਲੀਜ਼ਡ ਲਾਈਨ + IoT)",
      "ca_firm": "💼 ਸੀਏ ਅਤੇ ਕਾਨੂੰਨੀ ਫਰਮ (12 ਸਟਾਫ · ਆਫਿਸ ਈਮੇਲ + ਸੁਰੱਖਿਆ)"
    },
    "tabQuote": {
      "stepTag": "ਕਦਮ 2 / 4 · ਤੁਰੰਤ ਕੋਟੇਸ਼ਨ",
      "heading": "ਕਸਟਮਾਈਜ਼ਡ ਡਿਜੀਟਲ ਬੰਡਲ ਅਤੇ ਪਾਰਦਰਸ਼ੀ ਕੀਮਤ",
      "sub": "ਇੱਕੋ ਇਕੱਠਾ ਇਨਵੌਇਸ। ਸਰਵਰ-ਸਾਈਡ ਕੀਮਤ ਲਾਕ। ਰੀਅਲ-ਟਾਈਮ ਵਿੱਚ ਐਡ-ਆਨ ਸ਼ਾਮਲ ਕਰੋ।",
      "estLabel": "ਅਨੁਮਾਨਿਤ ਮਹੀਨਾਵਾਰ ਖਰਚਾ",
      "baseInclusionsTitle": "ਮੂਲ ਪੈਕੇਜ ਵਿੱਚ ਸ਼ਾਮਲ ਸੇਵਾਵਾਂ",
      "addonsTitle": "ਵਿਕਲਪਿਕ ਸਿਫ਼ਾਰਸ਼ੀ ਐਡ-ਆਨ (ਸਰਵਰ ਤਸਦੀਕਸ਼ੁਦਾ)",
      "addonFailoverTitle": "ਸਵੈਚਾਲਿਤ 4G/5G ਵਾਇਰਲੈੱਸ ਬੈਕਅੱਪ ਰਾਊਟਰ",
      "addonFailoverDesc": "ਜੇ ਮੁੱਖ ਇੰਟਰਨੈੱਟ ਤਾਰ ਕੱਟ ਜਾਵੇ, ਤਾਂ ਇਹ ਤੁਰੰਤ ਮੋਬਾਈਲ ਸਿਮ 'ਤੇ ਚੱਲ ਪਵੇਗਾ ਤਾਂ ਜੋ ਤੁਹਾਡੇ UPI ਅਤੇ ਕਾਰਡ ਪੇਮੈਂਟ ਕਦੇ ਨਾ ਰੁਕਣ।",
      "addonCctvTitle": "ਕਲਾਉਡ ਸੀਸੀਟੀਵੀ ਨਿਗਰਾਨੀ (2 ਐਚਡੀ ਕੈਮਰੇ)",
      "addonCctvDesc": "ਦੁਕਾਨ ਦੀ ਲਾਈਵ ਵੀਡੀਓ ਅਤੇ ਪਿਛਲੇ 30 ਦਿਨਾਂ ਦੀ ਰਿਕਾਰਡਿੰਗ ਸਿੱਧਾ ਆਪਣੇ ਫ਼ੋਨ 'ਤੇ ਜਦੋਂ ਮਰਜ਼ੀ ਦੇਖੋ—ਵੱਖਰੀ ਰਿਕਾਰਡਰ ਮਸ਼ੀਨ ਦੀ ਲੋੜ ਨਹੀਂ।",
      "addonStaticIpTitle": "ਪਬਲਿਕ ਸਟੈਟਿਕ ਆਈਪੀ ਐਡਰੈੱਸ",
      "addonStaticIpDesc": "ਤੁਹਾਡੇ ਕਾਰੋਬਾਰ ਲਈ ਇੱਕ ਪੱਕਾ ਇੰਟਰਨੈੱਟ ਪਤਾ—ਸਟਾਫ ਬਾਇਓਮੈਟ੍ਰਿਕ ਹਾਜ਼ਰੀ ਅਤੇ ਬੈਂਕ ਬਿਲਿੰਗ ਲਈ ਜ਼ਰੂਰੀ।",
      "billTitle": "ਇੱਕੋ ਏਕੀਕ੍ਰਿਤ ਮਹੀਨਾਵਾਰ ਬਿੱਲ",
      "baseLabel": "ਮੂਲ ਪੈਕੇਜ",
      "addonLabel": "ਚੁਣੇ ਗਏ ਐਡ-ਆਨ",
      "setupLabel": "ਇੰਸਟਾਲੇਸ਼ਨ ਅਤੇ ਸੈੱਟਅੱਪ ਫੀਸ",
      "setupVal": "ਮਾਫ਼ (₹0)",
      "subtotalLabel": "ਕੁੱਲ ਜੋੜ",
      "gstLabel": "ਜੀਐੱਸਟੀ (18%)",
      "totalLabel": "ਕੁੱਲ ਮਹੀਨਾਵਾਰ ਦੇਣਦਾਰੀ",
      "priceLockText": "12 ਮਹੀਨਿਆਂ ਲਈ ਕੀਮਤ ਲਾਕ ਗਾਰੰਟੀ",
      "gstInvoiceText": "ਇੱਕੋ ਸੰਯੁਕਤ ਜੀਐੱਸਟੀ ਟੈਕਸ ਇਨਵੌਇਸ",
      "proceedText": "ਸਮਾਰਟ ਕੇਵਾਈਸੀ ਤਸਦੀਕ ਲਈ ਅੱਗੇ ਵਧੋ",
      "perMonth": "/ ਮਹੀਨਾ",
      "plusGst": "+ ਜੀਐਸਟੀ"
    },
    "tabKyc": {
      "stepTag": "ਕਦਮ 3 / 4 · ਸਵੈਚਾਲਿਤ ਡਿਜੀਟਲ ਕੇਵਾਈਸੀ",
      "heading": "ਸਮਾਰਟ ਕੇਵਾਈਸੀ ਅਤੇ ਡਾਟਾ ਪ੍ਰਾਈਵੇਸੀ ਇੰਜਣ",
      "sub": "ਡੀਪੀਡੀਪੀ ਐਕਟ 2023 ਸਹਿਮਤੀ ਅਤੇ ਡੀਓਟੀ ਨਿਯਮਾਂ ਅਧੀਨ ਸਰਕਾਰੀ ਰਜਿਸਟਰੀਆਂ ਤੋਂ ਤੁਰੰਤ ਤਸਦੀਕ।",
      "applicantSelectLabel": "ਟੈਸਟ ਨਮੂਨਾ ਬਿਨੈਕਾਰ:",
      "dpdpTitle": "ਡੀਪੀਡੀਪੀ ਐਕਟ 2023 ਕਾਨੂੰਨੀ ਸਹਿਮਤੀ ਅਤੇ ਪ੍ਰਾਈਵੇਸੀ ਨੋਟਿਸ",
      "dpdpPurposeBadge": "ਮਕਸਦ-ਸੀਮਤ",
      "dpdpNoticeText": "ਡਿਜੀਟਲ ਨਿੱਜੀ ਡਾਟਾ ਸੁਰੱਖਿਆ ਕਾਨੂੰਨ 2023 ਤਹਿਤ, ਸਿਰਫ਼ ਸੇਵਾ ਚਾਲੂ ਕਰਨ ਅਤੇ ਬਿਲਿੰਗ ਲਈ ਦਸਤਾਵੇਜ਼ ਲਏ ਜਾਂਦੇ ਹਨ। ਨਿੱਜੀ ਡਾਟਾ ਪੂਰੀ ਤਰ੍ਹਾਂ ਸੁਰੱਖਿਅਤ ਰੱਖਿਆ ਜਾਂਦਾ ਹੈ।",
      "dpdpConsentCheckLabel": "ਮੈਂ ਜੀਐੱਸਟੀਐੱਨ ਅਤੇ ਉਦਯਮ ਰਜਿਸਟਰੀਆਂ ਰਾਹੀਂ ਡਾਟਾ ਤਸਦੀਕ ਕਰਨ ਲਈ ਸਪੱਸ਼ਟ ਡਿਜੀਟਲ ਸਹਿਮਤੀ ਦਿੰਦਾ ਹਾਂ।",
      "doc1Title": "ਦਸਤਾਵੇਜ਼ 1: ਵਪਾਰਕ ਰਜਿਸਟ੍ਰੇਸ਼ਨ (ਜੀਐੱਸਟੀ)",
      "doc1GstinLabel": "ਪ੍ਰਾਪਤ ਜੀਐੱਸਟੀ ਨੰਬਰ (ਮਾਸਕ ਕੀਤਾ):",
      "doc1LegalLabel": "ਕੰਪਨੀ ਦਾ ਕਾਨੂੰਨੀ ਨਾਂ:",
      "doc1RegCheckLabel": "ਰਜਿਸਟਰੀ ਪੜਤਾਲ:",
      "doc2Title": "ਦਸਤਾਵੇਜ਼ 2: ਐੱਮਐੱਸਐੱਮਈ ਰਜਿਸਟ੍ਰੇਸ਼ਨ (ਉਦਯਮ)",
      "doc2UdyamNoLabel": "ਉਦਯਮ ਐੱਮਐੱਸਐੱਮਈ ਨੰਬਰ:",
      "doc2TypeLabel": "ਸ਼੍ਰੇਣੀ:",
      "doc2PriorityLabel": "ਐੱਮਐੱਸਐੱਮਈ ਤਰਜੀਹ:",
      "doc2PriorityVal": "ਤਰਜੀਹੀ ਬਿਜ਼ਨਸ ਬਰਾਡਬੈਂਡ",
      "doc3Title": "ਦਸਤਾਵੇਜ਼ 3: ਅਧਿਕਾਰਤ ਹਸਤਾਖ਼ਰਕਰਤਾ ਪਛਾਣ",
      "doc3TokenBadge": "ਡੀਪੀਡੀਪੀ ਟੋਕਨਾਈਜ਼ਡ",
      "doc3SignatoryLabel": "ਅਧਿਕਾਰਤ ਹਸਤਾਖ਼ਰਕਰਤਾ:",
      "doc3IdLabel": "ਮਾਸਕ ਕੀਤਾ ਪਛਾਣ ਨੰਬਰ:",
      "doc3PrivacyLabel": "ਪ੍ਰਾਈਵੇਸੀ ਸੁਰੱਖਿਆ:",
      "doc4Title": "ਦਸਤਾਵੇਜ਼ 4: ਪਤੇ ਦਾ ਸਬੂਤ (ਦੁਕਾਨ/ਦਫ਼ਤਰ)",
      "doc4DocTypeLabel": "ਦਸਤਾਵੇਜ਼ ਦੀ ਕਿਸਮ:",
      "doc4IssueDateLabel": "ਮਿਆਦ ਅਤੇ ਜਾਰੀ ਮਿਤੀ:",
      "doc4PremisesLabel": "ਦੁਕਾਨ/ਦਫ਼ਤਰ ਦਾ ਪਤਾ:",
      "uploadTitle": "ਸਾਰੇ 4 ਕੇਵਾਈਸੀ ਦਸਤਾਵੇਜ਼ ਅਪਲੋਡ ਕਰੋ (kyc_documents/ ਵਿੱਚੋਂ ਚੁਣੋ)",
      "uploadSub": "ਰਜਿਸਟਰੀ ਤਸਦੀਕ ਲਈ GST, ਉਦਯਮ, ਦਸਤਖਤਕਰਤਾ ਆਈਡੀ ਅਤੇ ਪਤੇ ਦਾ ਸਬੂਤ ਅਪਲੋਡ ਕਰੋ",
      "runKycBtnText": "ਸਵੈਚਾਲਿਤ ਰਜਿਸਟਰੀ ਪੜਤਾਲ ਸ਼ੁਰੂ ਕਰੋ",
      "runKycSubtext": "ਨਿਯਮਾਂ ਅਨੁਸਾਰ ਸਵੈਚਾਲਿਤ ਮੁਲਾਂਕਣ",
      "kycDecisionHeaderLabel": "ਸਵੈਚਾਲਿਤ ਤਸਦੀਕ ਫੈਸਲਾ",
      "kycAuditFindingLabel": "ਨਿਯਮ ਪਾਲਣਾ ਸੰਖੇਪ:",
      "kycProceedBtnText": "ਕੇਵਾਈਸੀ ਮਨਜ਼ੂਰ · ਆਰਡਰ ਟਰੈਕਰ ਤੇ ਜਾਓ",
      "replaceBtn": "ਫਾਈਲ ਬਦਲੋ",
      "removeBtn": "ਹਟਾਓ",
      "clickUpload": "ਅਪਲੋਡ ਕਰਨ ਲਈ ਕਲਿੱਕ ਕਰੋ",
      "mandatoryDoc": "ਲਾਜ਼ਮੀ ਦਸਤਾਵੇਜ਼",
      "awaitingDoc": "ਦਸਤਾਵੇਜ਼ ਅਪਲੋਡ ਦੀ ਉਡੀਕ ਹੈ",
      "notVerified": "ਤਸਦੀਕ ਨਹੀਂ ਹੋਇਆ (ਦਸਤਾਵੇਜ਼ ਗੁੰਮ ਹੈ)",
      "docsActiveBadge": "4 / 4 ਦਸਤਾਵੇਜ਼ ਕਿਰਿਆਸ਼ੀਲ",
      "docsMissingBadge": "{count} / 4 ਅਪਲੋਡ ਕੀਤੇ ਗਏ ({missing} ਗੁੰਮ)",
      "activeDocsNotice": "ਸਾਰੇ 4 ਦਸਤਾਵੇਜ਼ ਸੁਰੱਖਿਅਤ ਢੰਗ ਨਾਲ ਐਨਕ੍ਰਿਪਟ ਕੀਤੇ ਗਏ ਹਨ।",
      "missingDocsNotice": "ਤਸਦੀਕ ਕਰਨ ਲਈ ਕਿਰਪਾ ਕਰਕੇ ਸਾਰੇ 4 ਦਸਤਾਵੇਜ਼ ਅਪਲੋਡ ਕਰੋ।",
      "actionNeededPrefix": "ਕਾਰਵਾਈ ਦੀ ਲੋੜ ਹੈ:",
      "decisionApprovedTitle": "ਤਸਦੀਕ ਮਨਜ਼ੂਰ · ਸੇਵਾ ਸ਼ੁਰੂ ਕਰਨ ਲਈ ਤਿਆਰ",
      "decisionHaltedTitle": "ਤਸਦੀਕ ਰੋਕੀ ਗਈ · ਪਾਲਣਾ ਮੁੱਦਾ ਮਿਲਿਆ",
      "decisionApprovedSummary": "ਸੰਸਥਾ ਸਰਗਰਮ ਵਜੋਂ ਤਸਦੀਕ ਕੀਤੀ ਗਈ ਹੈ (<strong>{legalName}</strong>)। ਐੱਮਐੱਸਐੱਮਈ ਉਦਯਮ ਵਰਗੀਕਰਨ ਤਸਦੀਕ ਕੀਤਾ ਗਿਆ, ਇਮਾਰਤ ਦੇ ਪਤੇ ਦਾ ਸਬੂਤ ਕਾਨੂੰਨੀ DoT 90-ਦਿਨਾਂ ਦੀ ਸੀਮਾ ਦੇ ਅੰਦਰ ਹੈ ({days} ਦਿਨ ਪੁਰਾਣਾ), ਅਤੇ DPDP ਐਕਟ 2023 ਡਿਜੀਟਲ ਸਹਿਮਤੀ ਦਰਜ ਕੀਤੀ ਗਈ ਹੈ।",
      "auditDoc1": "ਦਸਤਾਵੇਜ਼ 1: GSTIN ਰਜਿਸਟਰੀ ਜਾਂਚ ({gstin}): ਸਰਗਰਮ ({legalName})",
      "auditDoc2": "ਦਸਤਾਵੇਜ਼ 2: MSME ਉਦਯਮ ਰਜਿਸਟਰੀ ਜਾਂਚ: {udyam} ({type})",
      "auditDoc3": "ਦਸਤਾਵੇਜ਼ 3: ਅਧਿਕਾਰਤ ਦਸਤਖਤਕਰਤਾ ਤਸਦੀਕ ({name} ({role})): DPDP ਟੋਕਨਾਈਜ਼ਡ",
      "auditDoc4": "ਦਸਤਾਵੇਜ਼ 4: ਇਮਾਰਤ ਦੇ ਪਤੇ ਦੇ ਸਬੂਤ ਦੀ ਮਿਆਦ: {days} ਦਿਨ (DoT ਨਿਯਮ: ≤ 90 ਦਿਨ)",
      "passBadge": "ਪਾਸ",
      "failBadge": "ਫੇਲ੍ਹ"
    },
    "tabTracker": {
      "stepTag": "ਕਦਮ 4 / 4 · ਆਰਡਰ ਅਤੇ ਇੰਸਟਾਲੇਸ਼ਨ",
      "heading": "ਆਰਡਰ ਸਥਿਤੀ ਅਤੇ ਇੰਸਟਾਲੇਸ਼ਨ ਟਰੈਕਰ",
      "sub": "",
      "milestoneTitle": "ਇੰਸਟਾਲੇਸ਼ਨ ਪ੍ਰਗਤੀ",
      "slaBadge": "ਗਾਰੰਟੀਡ ਇੰਸਟਾਲੇਸ਼ਨ: 48 ਘੰਟਿਆਂ ਦੇ ਅੰਦਰ",
      "m1Title": "1. ਪਲਾਨ ਅਤੇ ਕੋਟੇਸ਼ਨ ਮਨਜ਼ੂਰ",
      "m1Desc": "12 ਮਹੀਨਿਆਂ ਦੀ ਕੀਮਤ ਸੁਰੱਖਿਆ ਨਾਲ ਤੁਹਾਡਾ ਬਿਜ਼ਨਸ ਪਲਾਨ ਪੱਕਾ ਹੋਇਆ।",
      "m2Title": "2. ਬਿਜ਼ਨਸ ਕੇਵਾਈਸੀ ਤਸਦੀਕਸ਼ੁਦਾ",
      "m2Desc": "ਵਪਾਰਕ ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਅਤੇ ਦਸਤਾਵੇਜ਼ ਸਫਲਤਾਪੂਰਵਕ ਤਸਦੀਕ ਕੀਤੇ ਗਏ।",
      "m3Title": "3. ਇੰਸਟਾਲੇਸ਼ਨ ਇੰਜੀਨੀਅਰ ਨਿਯੁਕਤ",
      "m3Desc": "ਏਅਰਟੈੱਲ ਟੈਕਨੀਸ਼ੀਅਨ ਤੁਹਾਡਾ ਫਾਈਬਰ ਕੁਨੈਕਸ਼ਨ ਲਗਾਉਣ ਲਈ ਆ ਰਹੇ ਹਨ।",
      "m3Status": "ਜਾਰੀ ਹੈ",
      "m4Title": "4. ਸਪੀਡ ਟੈਸਟ ਅਤੇ ਸੇਵਾ ਸ਼ੁਰੂ",
      "m4Desc": "ਤੁਹਾਡੀ ਦੁਕਾਨ 'ਤੇ ਸਪੀਡ ਟੈਸਟ ਅਤੇ ਸਵਾਗਤੀ ਐੱਸਐੱਮਐੱਸ।",
      "m4Status": "ਕੱਲ੍ਹ ਤੱਕ ਸੰਭਾਵਿਤ",
      "assignedExecTitle": "ਨਿਯੁਕਤ ਇੰਸਟਾਲੇਸ਼ਨ ਇੰਜੀਨੀਅਰ",
      "assignedExecRole": "ਸੀਨੀਅਰ ਫਾਈਬਰ ਇੰਸਟਾਲੇਸ਼ਨ ਇੰਜੀਨੀਅਰ",
      "assignedExecRating": "★ 4.9 ਰੇਟਿੰਗ (420 ਇੰਸਟਾਲ)",
      "slaLabel": "ਗਾਰੰਟੀਡ ਸਮਾਂ:",
      "slaVal": "48 ਘੰਟਿਆਂ ਦੇ ਅੰਦਰ",
      "installWindowLabel": "ਇੰਸਟਾਲੇਸ਼ਨ ਸਮਾਂ:",
      "installWindowVal": "ਕੱਲ੍ਹ, ਦੁਪਹਿਰ 2:00 - ਸ਼ਾਮ 4:00",
      "equipmentLabel": "ਦਿੱਤਾ ਗਿਆ ਉਪਕਰਣ:",
      "equipmentVal": "ਵਾਈ-ਫਾਈ 6 ਹਾਈ-ਸਪੀਡ ਰਾਊਟਰ",
      "supportLabel": "ਮਦਦ ਚਾਹੀਦੀ ਹੈ? ਕਾਲ ਕਰੋ:",
      "revAdvTitle": "1. AI ਸਲਾਹਕਾਰ ਖੋਜ",
      "revAdvSub": "ਲੋੜਾਂ ਦਾ ਮੁਲਾਂਕਣ · ਪਲਾਨ ਦੀ ਸਿਫਾਰਸ਼ ਕੀਤੀ",
      "revQuoteTitle": "2. ਕੋਟੇਸ਼ਨ ਅਤੇ ਪਲਾਨ",
      "revQuoteSub": "ਪਾਰਦਰਸ਼ੀ ਮਹੀਨਾਵਾਰ ਬਿੱਲ ਲਾਕ ਕੀਤਾ ਗਿਆ",
      "revKycTitle": "3. ਸਮਾਰਟ KYC ਅਤੇ ਗੋਪਨੀਯਤਾ",
      "revKycSub": "4 ਦਸਤਾਵੇਜ਼ ਅਤੇ GSTN ਤਸਦੀਕਸ਼ੁਦਾ",
      "doneBadge": "ਮੁਕੰਮਲ",
      "orderBadgeText": "ਆਰਡਰ"
    },
    "footerText": "ਏਅਰਟੈੱਲ ਬਿਜ਼ਨਸ ਐਂਟਰਪ੍ਰਾਈਜ਼ ਟਰੈਕ ਏ · ਪ੍ਰੋਜੈਕਟ ਉਦਯਮ ਡਿਜੀਟਲ · ਪੂਰੀ ਤਰ੍ਹਾਂ ਡੀਪੀਡੀਪੀ ਐਕਟ 2023 ਅਤੇ ਡੀਓਟੀ ਨਿਯਮਾਂ ਅਨੁਸਾਰ",
    "bundles": {
      "starter": {
        "name": "ਏਅਰਟੈੱਲ ਸਟਾਰਟਰ ਡਿਜੀਟਲ ਪੈਕ",
        "segment": "ਮਾਈਕ੍ਰੋ ਰਿਟੇਲ ਅਤੇ ਸੇਵਾਵਾਂ",
        "sla": "99.5% ਕਮਰਸ਼ੀਅਲ ਫਾਈਬਰ",
        "desc": "ਬਿਜ਼ ਫਾਈਬਰ 100 Mbps + ਸਟੈਟਿਕ ਆਈਪੀ + ਕਲਾਉਡ ਪੀਓਐੱਸ ਬਿਲਿੰਗ 99.5% ਅੱਪਟਾਈਮ ਨਾਲ।"
      },
      "mfg_pro": {
        "name": "ਏਅਰਟੈੱਲ ਸਮਾਰਟ ਮੈਨੂਫੈਕਚਰਿੰਗ ਸੂਟ",
        "segment": "ਛੋਟੇ ਕਾਰਖਾਨੇ",
        "sla": "99.9% ਡੈਡੀਕੇਟਿਡ ਲੀਜ਼ਡ ਲਾਈਨ",
        "desc": "100 Mbps ਡੈਡੀਕੇਟਿਡ ਲੀਜ਼ਡ ਲਾਈਨ + IoT ਸੈਂਸਰ + ਫਾਇਰਵਾਲ ਸੁਰੱਖਿਆ।"
      },
      "multi_chain": {
        "name": "ਏਅਰਟੈੱਲ ਕਨੈਕਟਡ ਐਂਟਰਪ੍ਰਾਈਜ਼ (ਮਲਟੀ-ਸਾਈਟ)",
        "segment": "ਕਈ ਸ਼ਾਖਾਵਾਂ ਵਾਲੇ ਕਾਰੋਬਾਰ",
        "sla": "99.5% ਫਾਈਬਰ + 4G ਬੈਕਅੱਪ",
        "desc": "ਕਮਰਸ਼ੀਅਲ ਬਰਾਡਬੈਂਡ + ਕਲਾਉਡ ਵੌਇਸ IVR + ਬਿਜ਼ਨਸ ਈਮੇਲ + ਸੁਰੱਖਿਆ।"
      },
      "pro_office": {
        "name": "ਏਅਰਟੈੱਲ ਪ੍ਰੋਫੈਸ਼ਨਲ ਆਫਿਸ ਸੂਟ",
        "segment": "ਦਫ਼ਤਰ ਅਤੇ ਕਲੀਨਿਕ",
        "sla": "99.5% ਕਮਰਸ਼ੀਅਲ ਫਾਈਬਰ",
        "desc": "ਕਮਰਸ਼ੀਅਲ ਬਰਾਡਬੈਂਡ + ਕਲਾਉਡ ਵੌਇਸ IVR + ਬਿਜ਼ਨਸ ਈਮੇਲ + ਸੁਰੱਖਿਆ।"
      }
    },
    "kycBadges": {
      "activeTaxpayer": "ਐਕਟਿਵ ਟੈਕਸਦਾਤਾ",
      "suspended": "ਮੁਅੱਤਲ",
      "cancelled": "ਰੱਦ ਕੀਤਾ",
      "verifiedMsme": "ਤਸਦੀਕਸ਼ੁਦਾ ਐੱਮਐੱਸਐੱਮਈ",
      "exemptNone": "ਛੋਟ / ਲਾਗੂ ਨਹੀਂ",
      "dotValid": "ਮਿਆਰੀ (≤90 ਦਿਨ)",
      "dotExpired": "ਮਿਆਦ ਪੁੱਗੀ (>90 ਦਿਨ)",
      "approvedDecision": "APPROVED",
      "rejectedDecision": "ACTION REQUIRED / REJECTED",
      "verifiedRegDate": "ਕੇਂਦਰੀ ਜੀਐੱਸਟੀਐੱਨ ਵਿੱਚ ਤਸਦੀਕਸ਼ੁਦਾ",
      "dpdpConsentStatus": "ਡੀਪੀਡੀਪੀ ਡਿਜੀਟਲ ਸਹਿਮਤੀ ਦਰਜ",
      "notUploaded": "ਅਪਲੋਡ ਨਹੀਂ ਕੀਤਾ · ਲਾਜ਼ਮੀ",
      "dpdpTokenized": "DPDP ਟੋਕਨਾਈਜ਼ਡ"
    },
    "advisorLockedText": "ਜਾਣਕਾਰੀ ਮੁਕੰਮਲ · ਵੇਰਵੇ ਸੁਰੱਖਿਅਤ (ਬਦਲਿਆ ਨਹੀਂ ਜਾ ਸਕਦਾ)",
    "advisorEditText": "ਜਵਾਬ ਬਦਲੋ",
    "advisorNextText": "ਅੱਗੇ: ਕੋਟੇਸ਼ਨ",
    "backToAdvisorBtn": "ਏਆਈ ਸਲਾਹਕਾਰ ਤੇ ਵਾਪਸ ਜਾਓ",
    "quoteLockedText": "ਕੋਟੇਸ਼ਨ ਸਵੀਕਾਰ · 12 ਮਹੀਨੇ ਕੀਮਤ ਲਾਕ (ਬਦਲਿਆ ਨਹੀਂ ਜਾ ਸਕਦਾ)",
    "quoteEditText": "ਐਡ-ਆਨ ਬਦਲੋ",
    "quoteNextText": "ਅੱਗੇ: ਸਮਾਰਟ ਕੇਵਾਈਸੀ",
    "backToQuoteBtn": "ਕੋਟੇਸ਼ਨ ਤੇ ਵਾਪਸ ਜਾਓ",
    "kycLockedText": "ਕੇਵਾਈਸੀ ਤਸਦੀਕਸ਼ੁਦਾ (ਬਦਲਿਆ ਨਹੀਂ ਜਾ ਸਕਦਾ)",
    "kycReturnTrackerText": "ਆਰਡਰ ਟਰੈਕਰ ਤੇ ਵਾਪਸ ਜਾਓ",
    "reviewJourneyTitle": "ਆਰਡਰ ਟਰੈਕ ਕੀਤਾ ਜਾ ਰਿਹਾ ਹੈ:",
    "reviewJourneySub": "ਪਿਛਲੇ ਪੰਨਿਆਂ ਦੇ ਵੇਰਵਿਆਂ ਦੀ ਸਮੀਖਿਆ ਕਰੋ:",
    "revBtnAdv": "1. ਸਲਾਹਕਾਰ ਦੇਖੋ",
    "revBtnQuote": "2. ਕੋਟੇਸ਼ਨ ਦੇਖੋ",
    "revBtnKyc": "3. ਕੇਵਾਈਸੀ ਦੇਖੋ",
    "inputPlaceholderLocked": "ਮੁਕੰਮਲ · ਵੇਰਵੇ ਲਾਕ ਹਨ",
    "kycVerifiedBadge": "ਕੇਵਾਈਸੀ ਤਸਦੀਕ ਮੁਕੰਮਲ",
    "continueToKyc": "ਕੇਵਾਈਸੀ ਤੇ ਅੱਗੇ ਵਧੋ"
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = LOCALES;
}
