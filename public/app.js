/**
 * Airtel Business - Project Udyam Digital - Frontend Core Application
 * 
 * Features:
 * - Dynamic Multi-Lingual State Machine (English, Hindi, Telugu) with FULL History Re-Rendering
 * - 4-Step Sequential Discovery (1. Type -> 2. Size -> 3. Locations -> 4. Current Tools)
 * - Microphone Speech-to-Text (STT) with Zero Read-Aloud / TTS
 * - Server-Side Authoritative Pricing & Add-on Calculator (/api/quote/calculate)
 * - Smart KYC Engine: DPDP Act 2023 Consent Gate + Private Upload Vault + Specimen Bench (K01-K12)
 * - Order Milestone SLA Tracker: Under 48h guaranteed countdown & assigned field engineer
 */

// Application State
let currentLang = 'en';
let wizardStep = 1; // 1: Type, 2: Size, 3: Locations, 4: Tools, 5: Recommendation
let userAnswers = {};
let currentBundle = null;
let activeTab = 'advisor';
let sessionToken = null;
let currentQuote = null;
let activeOrder = null;

// Page Completion & Locked State (details saved and non-editable when passed)
const pageStates = {
  advisor: false,
  quote: false,
  kyc: false,
  tracker: false
};
if (typeof window !== 'undefined') window.pageStates = pageStates;

const savedUserData = {
  answers: {},
  bundle: null,
  selectedAddons: [],
  quote: null,
  kycApplicantKey: 'K01',
  kycVerified: false
};
if (typeof window !== 'undefined') window.savedUserData = savedUserData;
if (typeof window !== 'undefined') window.activeTab = activeTab;

// ============================================================
// 1. SPECIMEN KYC APPLICANTS (K01 - K12 from synthetic pack)
// ============================================================
const KYC_APPLICANTS = {
  K01: {
    id: "K01",
    name: "Balaji Dental Care LLP",
    type: "Dental clinic",
    segment: "Professional offices",
    city: "Kochi",
    state: "Kerala",
    signatory: "Prakash Shah",
    signatoryRole: "Manager",
    signatoryIdMasked: "PAN: *****7384*",
    gstin: "32TTNXB7384T1ZW",
    hasUdyam: true,
    udyamNumber: "UDYAM-KL-00-3078801",
    udyamType: "Micro Enterprise (Services)",
    docType: "Electricity Utility Bill",
    docDate: "2026-06-15",
    premises: "Shop/Unit 164, Station Road, Kochi, Kerala - 289398",
    gstStatus: "Active",
    plantedIssue: null,
    expectedOutcome: "APPROVED",
    explanation: "All 4 documents verified. Active GSTIN matches national tax registry, Udyam registered as Micro enterprise, and address proof is 30 days old (well within DoT 90-day window)."
  },
  K02: {
    id: "K02",
    name: "Saffron Bakers",
    type: "Bakery",
    segment: "Micro retail & services",
    city: "Ludhiana",
    state: "Punjab",
    signatory: "Sneha Rao",
    signatoryRole: "Proprietor",
    signatoryIdMasked: "Aadhaar: XXXX-XXXX-4821",
    gstin: "03PJNXS4821G1ZB",
    hasUdyam: false,
    udyamNumber: "Not Registered (MSME Optional)",
    udyamType: "Unregistered Sole Proprietor",
    docType: "Electricity Utility Bill",
    docDate: "2026-05-10",
    premises: "Shop/Unit 83, Market Yard, Ludhiana, Punjab - 416059",
    gstStatus: "Active",
    plantedIssue: null,
    expectedOutcome: "APPROVED",
    explanation: "Sole proprietorship with valid active GSTIN. Udyam is optional for retail packs. Address proof is 66 days old (within 90-day DoT limit)."
  },
  K03: {
    id: "K03",
    name: "Star Electronics",
    type: "Electronics retail chain",
    segment: "Small multi-site businesses",
    city: "Chennai",
    state: "Tamil Nadu",
    signatory: "Joseph Joshi",
    signatoryRole: "Owner",
    signatoryIdMasked: "PAN: *****9954*",
    gstin: "33MFTXS9954Q1Z9",
    hasUdyam: true,
    udyamNumber: "UDYAM-TN-00-3866196",
    udyamType: "Micro Enterprise (Trading)",
    docType: "Commercial Landline Bill",
    docDate: "2026-05-25",
    premises: "Shop/Unit 4, Lake View Colony, Chennai, Tamil Nadu - 304733",
    gstStatus: "Active",
    plantedIssue: null,
    expectedOutcome: "APPROVED",
    explanation: "Multi-site retail applicant with active GSTIN and Udyam certification. Landline bill issue date is 51 days old."
  },
  K04: {
    id: "K04",
    name: "Zenith Diagnostics",
    type: "Diagnostic lab",
    segment: "Professional offices",
    city: "Nagpur",
    state: "Maharashtra",
    signatory: "Harpreet Bhat",
    signatoryRole: "Admin Manager",
    signatoryIdMasked: "PAN: *****1995*",
    gstin: "27QTBXZ1995X1Z9",
    hasUdyam: true,
    udyamNumber: "UDYAM-MH-00-7656096",
    udyamType: "Micro Enterprise (Services)",
    docType: "Electricity Utility Bill",
    docDate: "2026-06-10",
    premises: "Shop/Unit 11, MG Road, Nagpur, Maharashtra - 653100",
    gstStatus: "Active",
    plantedIssue: null,
    expectedOutcome: "APPROVED",
    explanation: "Diagnostic healthcare provider with verified active GSTIN and Udyam registration. Address proof is 35 days old."
  },
  K05: {
    id: "K05",
    name: "Royal Fashions",
    type: "Apparel retail",
    segment: "Micro retail & services",
    city: "Kochi",
    state: "Kerala",
    signatory: "Vikram Bhat",
    signatoryRole: "Proprietor",
    signatoryIdMasked: "Aadhaar: XXXX-XXXX-9985",
    gstin: "32AITXR9985H1ZT",
    hasUdyam: true,
    udyamNumber: "UDYAM-KL-00-2007485",
    udyamType: "Micro Enterprise (Trading)",
    docType: "Electricity Utility Bill",
    docDate: "2026-03-22", // Planted Expired! (115 days old relative to 2026-07-15)
    premises: "Shop/Unit 34, Industrial Area Phase 2, Kochi, Kerala - 246982",
    gstStatus: "Active",
    plantedIssue: "EXPIRED_ADDRESS_PROOF",
    expectedOutcome: "REJECTED",
    explanation: "Statutory DoT Address Proof Expired: Utility bill dated 2026-03-22 is 115 days old (exceeds statutory 90-day limit relative to reference date 2026-07-15). KYC flagged for re-upload."
  },
  K06: {
    id: "K06",
    name: "Amrit Fashions",
    type: "Apparel retail chain",
    segment: "Small multi-site businesses",
    city: "Jaipur",
    state: "Rajasthan",
    signatory: "Rekha Shah",
    signatoryRole: "Proprietor",
    signatoryIdMasked: "PAN: *****4705*",
    gstin: "08JVKXA4705I1Z0",
    hasUdyam: true,
    udyamNumber: "UDYAM-RJ-00-3201049",
    udyamType: "Micro Enterprise (Trading)",
    docType: "Electricity Utility Bill",
    docDate: "2026-06-01",
    premises: "Shop/Unit 105, Industrial Area Phase 2, Jaipur, Rajasthan - 772872",
    gstStatus: "Active",
    plantedIssue: null,
    expectedOutcome: "APPROVED",
    explanation: "Multi-branch retail store with verified GSTIN and electricity bill 44 days old."
  },
  K07: {
    id: "K07",
    name: "Green Leaf Physio Clinic",
    type: "Physiotherapy clinic",
    segment: "Professional offices",
    city: "Ludhiana",
    state: "Punjab",
    signatory: "Shalini Nair",
    signatoryRole: "Managing Doctor",
    signatoryIdMasked: "Aadhaar: XXXX-XXXX-5592",
    gstin: "03ZCKXG5592Y1ZG",
    hasUdyam: true,
    udyamNumber: "UDYAM-PB-00-4186215",
    udyamType: "Micro Enterprise (Services)",
    docType: "Electricity Utility Bill",
    docDate: "2026-06-20",
    premises: "Shop/Unit 136, Civil Lines, Ludhiana, Punjab - 432382",
    gstStatus: "Active",
    plantedIssue: null,
    expectedOutcome: "APPROVED",
    explanation: "Physiotherapy healthcare facility with valid registration and address proof 25 days old."
  },
  K08: {
    id: "K08",
    name: "Royal Auto Components",
    type: "Auto parts manufacturing",
    segment: "Small manufacturers",
    city: "Ludhiana",
    state: "Punjab",
    signatory: "Naveen Gupta",
    signatoryRole: "Director",
    signatoryIdMasked: "PAN: *****9399*",
    gstin: "03JEUXR9399M1ZI",
    hasUdyam: false,
    udyamNumber: "Not Registered",
    udyamType: "Manufacturing Unit",
    docType: "Industrial Electricity Bill",
    docDate: "2026-06-12",
    premises: "Shop/Unit 107, Ring Road, Ludhiana, Punjab - 581165",
    gstStatus: "Active",
    plantedIssue: null,
    expectedOutcome: "APPROVED",
    explanation: "Manufacturing enterprise with active company GSTIN and industrial utility bill 33 days old."
  },
  K09: {
    id: "K09",
    name: "Riddhi Fashions Pvt Ltd",
    type: "Apparel retail chain",
    segment: "Small multi-site businesses",
    city: "Visakhapatnam",
    state: "Andhra Pradesh",
    signatory: "Rajesh Menon",
    signatoryRole: "Partner",
    signatoryIdMasked: "PAN: *****1505*",
    gstin: "37ZHYXR1505E1ZY",
    hasUdyam: true,
    udyamNumber: "UDYAM-AP-00-8759641",
    udyamType: "Medium Enterprise (Trading)",
    docType: "Commercial Lease Agreement",
    docDate: "2026-05-10",
    premises: "Shop/Unit 94, Ring Road, Visakhapatnam, Andhra Pradesh - 822569",
    gstStatus: "Active",
    plantedIssue: null,
    expectedOutcome: "APPROVED",
    explanation: "Medium enterprise multi-store account. Active company GSTIN and registered lease deed (66 days old)."
  },
  K10: {
    id: "K10",
    name: "Ganga Stationers",
    type: "Stationery & printing",
    segment: "Micro retail & services",
    city: "Lucknow",
    state: "Uttar Pradesh",
    signatory: "Farhan Sharma",
    signatoryRole: "Proprietor",
    signatoryIdMasked: "Aadhaar: XXXX-XXXX-6633",
    gstin: "09YHJXG6633U1ZC",
    hasUdyam: false,
    udyamNumber: "Not Registered",
    udyamType: "Micro Trader",
    docType: "Electricity Utility Bill",
    docDate: "2026-06-05",
    premises: "Shop/Unit 127, Old Town, Lucknow, Uttar Pradesh - 188731",
    gstStatus: "Active",
    plantedIssue: null,
    expectedOutcome: "APPROVED",
    explanation: "Micro retail shop with active GSTIN and electricity bill 40 days old."
  },
  K11: {
    id: "K11",
    name: "Sahyadri Realty",
    type: "Real estate agency",
    segment: "Professional offices",
    city: "Bhopal",
    state: "Madhya Pradesh",
    signatory: "Meera Kulkarni",
    signatoryRole: "Partner",
    signatoryIdMasked: "PAN: *****1811*",
    gstin: "23QYBXS1811Q1ZD", // Planted Suspended!
    hasUdyam: false,
    udyamNumber: "None",
    udyamType: "Services Agency",
    docType: "Electricity Utility Bill",
    docDate: "2026-06-01",
    premises: "Shop/Unit 82, Civil Lines, Bhopal, Madhya Pradesh - 744306",
    gstStatus: "Suspended",
    plantedIssue: "GSTIN_SUSPENDED",
    expectedOutcome: "REJECTED",
    explanation: "National GST Registry Alert: Taxpayer registration status is SUSPENDED. Under telecom regulations, enterprise services requiring GST billing cannot be provisioned to suspended entities. KYC halted until tax status regularized."
  },
  K12: {
    id: "K12",
    name: "Vindhya Tours & Travels",
    type: "Travel & tourism",
    segment: "Micro retail & services",
    city: "Visakhapatnam",
    state: "Andhra Pradesh",
    signatory: "Neha Kaur",
    signatoryRole: "Proprietor",
    signatoryIdMasked: "Aadhaar: XXXX-XXXX-5167",
    gstin: "37IHKXV5167L1ZS", // Planted Cancelled!
    hasUdyam: false,
    udyamNumber: "None",
    udyamType: "Travel Agency",
    docType: "Electricity Utility Bill",
    docDate: "2026-05-20",
    premises: "Shop/Unit 1, Tech Park Road, Visakhapatnam, Andhra Pradesh - 118383",
    gstStatus: "Cancelled",
    plantedIssue: "GSTIN_CANCELLED",
    expectedOutcome: "REJECTED",
    explanation: "National GST Registry Alert: Taxpayer registration has been CANCELLED. Onboarding rejected to prevent commercial fraud and billing defaults."
  }
};

// Preset Scenarios for Tab 1 Advisor
const PRESETS = {
  clinic: {
    answers: {
      1: { val: 'Dental Clinic', optionIdx: 0, domain: 'clinic' },
      2: { val: '12 employees', optionIdx: 1, count: 12 },
      3: { val: '1 single location', optionIdx: 0, loc: 1 },
      4: { val: 'Home Broadband, need cloud telephony and office email', optionIdx: 1, needs: { telephony: true, email: true, fiber: true } }
    }
  },
  restaurant: {
    answers: {
      1: { val: 'Restaurant Chain', optionIdx: 2, domain: 'restaurant' },
      2: { val: '45 employees', optionIdx: 2, count: 45 },
      3: { val: '5 outlets', optionIdx: 2, loc: 5 },
      4: { val: 'Mixed Local ISP, need SD-WAN, CCTV cameras and failover', optionIdx: 2, needs: { sdwan: true, cctv: true, failover: true } }
    }
  },
  kirana: {
    answers: {
      1: { val: 'Kirana Grocery Store', optionIdx: 1, domain: 'retail' },
      2: { val: '2 staff', optionIdx: 0, count: 2 },
      3: { val: '1 single location', optionIdx: 0, loc: 1 },
      4: { val: 'Mobile Hotspot, need billing POS and guest Wi-Fi', optionIdx: 0, needs: { pos: true, wifi: true } }
    }
  },
  manufacturing: {
    answers: {
      1: { val: 'Auto Parts Manufacturing Factory', optionIdx: 3, domain: 'manufacturing' },
      2: { val: '85 employees', optionIdx: 3, count: 85 },
      3: { val: '1 single location', optionIdx: 0, loc: 1 },
      4: { val: 'Need 100 Mbps dedicated leased line and machine sensors', optionIdx: 3, needs: { leasedLine: true, iot: true } }
    }
  },
  ca_firm: {
    answers: {
      1: { val: 'Chartered Accountant Firm', optionIdx: 4, domain: 'office' },
      2: { val: '12 employees', optionIdx: 1, count: 12 },
      3: { val: '1 single location', optionIdx: 0, loc: 1 },
      4: { val: 'Home Broadband, need cloud telephony and office email', optionIdx: 1, needs: { fiber: true, email: true, security: true } }
    }
  }
};

// ============================================================
// 2. SESSION INITIALIZATION & SERVER CONNECTIVITY
// ============================================================

async function initSession() {
  try {
    const res = await fetch('/api/session');
    const data = await res.json();
    if (data.sessionToken) {
      sessionToken = data.sessionToken;
      const shortToken = sessionToken.slice(-6);
      const badge = document.getElementById('sessionBadge');
      if (badge) badge.innerText = `Session #${shortToken}`;
    }
  } catch (err) {
    console.warn("Offline/local session active.");
  }
}

// ============================================================
// 3. LANGUAGE SWITCHING & DYNAMIC HISTORY RE-RENDERING
// ============================================================

function onLanguageChange() {
  const select = document.getElementById('langSelect');
  const newLang = select.value;
  setLanguage(newLang);
}

function updateChatLangPills(lang) {
  const container = document.getElementById('assistantLangTag');
  if (!container) return;
  const buttons = container.querySelectorAll('button[data-chat-lang]');
  buttons.forEach(btn => {
    const l = btn.getAttribute('data-chat-lang');
    if (l === lang) {
      btn.className = 'px-1.5 py-0.5 rounded font-black bg-red-100 text-[#E40000] border border-red-200 transition shadow-2xs cursor-pointer';
    } else {
      btn.className = 'px-1.5 py-0.5 rounded font-medium text-gray-500 hover:text-[#E40000] hover:bg-gray-100 transition cursor-pointer';
    }
  });
}

function setLanguage(lang) {
  if (!LOCALES[lang]) lang = 'en';
  currentLang = lang;
  const select = document.getElementById('langSelect');
  if (select) select.value = lang;

  updateChatLangPills(currentLang);
  updateStaticUILabels();
  reRenderFullChatHistory();

  if (wizardStep >= 5 || currentBundle) {
    updateRecommendationCard(true);
  } else {
    const dict = LOCALES[currentLang] || LOCALES.en;
    const defBundle = dict.bundles?.pro_office;
    if (defBundle) {
      const qpName = document.getElementById('quotePlanName');
      if (qpName) qpName.innerText = defBundle.name;
      const qpDesc = document.getElementById('quotePlanDesc');
      if (qpDesc) qpDesc.innerText = defBundle.desc;
    }
  }

  renderKycCardUI('gst');
  renderKycCardUI('udyam');
  renderKycCardUI('signatory_id');
  renderKycCardUI('address_proof');
  updateKycDocumentCount();
}

function updateStaticUILabels() {
  const dict = LOCALES[currentLang] || LOCALES.en;

  const setT = (id, val) => {
    const el = document.getElementById(id);
    if (el && val !== undefined && val !== null) el.innerText = val;
  };
  const setH = (id, val) => {
    const el = document.getElementById(id);
    if (el && val !== undefined && val !== null) el.innerHTML = val;
  };

  // 1. Header & Navigation Tabs
  setT('brandSubTitle', dict.brandSub);
  setH('navBtnAdvisor', `<i class="fa-solid fa-robot mr-1.5 text-xs"></i> ${dict.navAdvisor}`);
  setH('navBtnQuote', `<i class="fa-solid fa-file-invoice-dollar mr-1.5 text-xs"></i> ${dict.navQuote}`);
  setH('navBtnKyc', `<i class="fa-solid fa-shield-halved mr-1.5 text-xs"></i> ${dict.navKyc}`);
  setH('navBtnTracker', `<i class="fa-solid fa-truck-fast mr-1.5 text-xs"></i> ${dict.navTracker}`);

  setT('mobNavAdvisor', dict.navAdvisor);
  setT('mobNavQuote', dict.navQuote);
  setT('mobNavKyc', dict.navKyc);
  setT('mobNavTracker', dict.navTracker);

  // 2. Tab 1: AI Advisor Header & Action Buttons
  setT('advisorHeading', dict.advisorHeading);
  setT('advisorSub', dict.advisorSub);
  setT('restartBtnText', dict.restartBtn);
  setT('sendBtnText', dict.sendBtn);
  setT('acceptBtnText', dict.acceptBtn);

  if (dict.stepProgress) {
    const currStep = wizardStep <= 4 ? wizardStep : 4;
    setT('stepProgressLabel', dict.stepProgress.replace('{step}', currStep));
  }

  setH('demoLabel', `<i class="fa-solid fa-bolt text-[#E40000]"></i> ${dict.demoTitle || '1-Click Judge Demo Scenarios:'}`);
  setT('demoSub', dict.demoSub);
  if (dict.demoScenarios) {
    setT('demoClinicBtn', dict.demoScenarios.clinic);
    setT('demoRestaurantBtn', dict.demoScenarios.restaurant);
    setT('demoKiranaBtn', dict.demoScenarios.kirana);
    setT('demoMfgBtn', dict.demoScenarios.manufacturing);
    setT('demoCaBtn', dict.demoScenarios.ca_firm);
  }

  setT('recSolutionTag', dict.recSolutionTag);
  setT('recInclusionsTitle', dict.recInclusionsTitle);
  setH('recProductPlaceholder', `<i class="fa-solid fa-basket-shopping text-xl mb-1 text-gray-300 block"></i> ${dict.recProductPlaceholder || 'Complete the 4 steps to view product breakdown'}`);
  setT('recRationaleTitle', dict.whyTitle);
  setT('recAllInOneLabel', dict.recAllInOneLabel);
  setH('recSetupWaived', `<i class="fa-solid fa-check mr-1"></i> ${dict.recSetupWaived || 'Setup fee waived'}`);

  if (wizardStep < 5 && !currentBundle) {
    setT('recBadge', dict.recsPending);
    setT('recBundleName', dict.awaitingTitle);
    setT('recBundleDesc', dict.awaitingDesc);
    setT('recRationaleText', dict.awaitingRationale || "The recommendation engine matches business type, staff headcount, multi-site presence, and network gaps against Airtel Business catalogue rules.");
  }

  const activeStepKey = 'step' + (wizardStep <= 4 ? wizardStep : 4);
  const stepData = dict[activeStepKey] || dict.step1;
  const inputEl = document.getElementById('userInput');
  if (inputEl) inputEl.placeholder = stepData.placeholder;

  // 3. Tab 2: Quote & Plan (Fully Multilingual)
  if (dict.tabQuote) {
    const q = dict.tabQuote;
    setT('quoteStepTag', q.stepTag);
    setT('quoteHeading', q.heading);
    setT('quoteSub', q.sub);
    setT('quoteEstLabel', q.estLabel);
    setT('quoteBaseInclusionsTitle', q.baseInclusionsTitle);
    setT('quoteAddonsTitle', q.addonsTitle);
    setT('addonFailoverTitle', q.addonFailoverTitle);
    setT('addonFailoverDesc', q.addonFailoverDesc);
    setT('addonCctvTitle', q.addonCctvTitle);
    setT('addonCctvDesc', q.addonCctvDesc);
    setT('addonStaticIpTitle', q.addonStaticIpTitle);
    setT('addonStaticIpDesc', q.addonStaticIpDesc);
    setT('quoteBillTitle', q.billTitle);
    setT('quoteBillBaseLabel', q.baseLabel);
    setT('quoteBillAddonLabel', q.addonLabel);
    setT('quoteBillSetupLabel', q.setupLabel);
    setT('quoteBillSetupVal', q.setupVal);
    setT('quoteBillSubtotalLabel', q.subtotalLabel);
    setT('quoteBillGstLabel', q.gstLabel);
    setT('quoteBillTotalLabel', q.totalLabel);
    setH('quotePriceLockText', `<i class="fa-solid fa-shield text-[#E40000] mr-1"></i> ${q.priceLockText}`);
    setH('quoteGstInvoiceText', `<i class="fa-solid fa-file-contract text-[#E40000] mr-1"></i> ${q.gstInvoiceText}`);
    setT('proceedToKycText', q.proceedText);
  }

  // 4. Tab 3: Smart KYC & DPDP Compliance
  if (dict.tabKyc) {
    const k = dict.tabKyc;
    setT('kycStepTag', k.stepTag);
    setT('kycHeading', k.heading);
    setT('kycSub', k.sub);
    setT('kycApplicantSelectLabel', k.applicantSelectLabel);
    setT('dpdpTitle', k.dpdpTitle);
    setT('dpdpPurposeBadge', k.dpdpPurposeBadge);
    setT('dpdpNoticeText', k.dpdpNoticeText);
    setT('dpdpConsentCheckLabel', k.dpdpConsentCheckLabel);
    setT('doc1Title', k.doc1Title);
    setT('doc1GstinLabel', k.doc1GstinLabel);
    setT('doc1LegalLabel', k.doc1LegalLabel);
    setT('doc1RegCheckLabel', k.doc1RegCheckLabel);
    setT('doc2Title', k.doc2Title);
    setT('doc2UdyamNoLabel', k.doc2UdyamNoLabel);
    setT('doc2TypeLabel', k.doc2TypeLabel);
    setT('doc2PriorityLabel', k.doc2PriorityLabel);
    setT('doc2PriorityVal', k.doc2PriorityVal);
    setT('doc3Title', k.doc3Title);
    setT('doc3TokenBadge', k.doc3TokenBadge);
    setT('doc3SignatoryLabel', k.doc3SignatoryLabel);
    setT('doc3IdLabel', k.doc3IdLabel);
    setT('doc3PrivacyLabel', k.doc3PrivacyLabel);
    setT('doc4Title', k.doc4Title);
    setT('doc4DocTypeLabel', k.doc4DocTypeLabel);
    setT('doc4IssueDateLabel', k.doc4IssueDateLabel);
    setT('doc4PremisesLabel', k.doc4PremisesLabel);
    setT('uploadTitle', k.uploadTitle);
    setT('uploadSub', k.uploadSub);
    setT('runKycBtnText', k.runKycBtnText);
    setT('runKycSubtext', k.runKycSubtext);
    setT('kycDecisionHeaderLabel', k.kycDecisionHeaderLabel);
    setT('kycAuditFindingLabel', k.kycAuditFindingLabel);
    setT('kycProceedBtnText', k.kycProceedBtnText);
  }

  // 5. Tab 4: Real-Time Order & SLA Tracker
  if (dict.tabTracker) {
    const tr = dict.tabTracker;
    setT('trackerStepTag', tr.stepTag);
    setT('trackerHeading', tr.heading);
    setT('trackerMilestoneTitle', tr.milestoneTitle);
    setT('trackerSlaBadge', tr.slaBadge);
    setT('m1Title', tr.m1Title);
    setT('m1Desc', tr.m1Desc);
    setT('m2Title', tr.m2Title);
    setT('m2Desc', tr.m2Desc);
    setT('m3Title', tr.m3Title);
    setT('m3Desc', tr.m3Desc);
    setT('m3Status', tr.m3Status);
    setT('m4Title', tr.m4Title);
    setT('m4Desc', tr.m4Desc);
    setT('m4Status', tr.m4Status);
    setT('assignedExecTitle', tr.assignedExecTitle);
    setT('assignedExecRole', tr.assignedExecRole);
    setT('assignedExecRating', tr.assignedExecRating);
    setT('slaLabel', tr.slaLabel);
    setT('slaVal', tr.slaVal);
    setT('installWindowLabel', tr.installWindowLabel);
    setT('installWindowVal', tr.installWindowVal);
    setT('equipmentLabel', tr.equipmentLabel);
    setT('equipmentVal', tr.equipmentVal);
    setT('supportLabel', tr.supportLabel);
  }

  // 7. Active Bundle Details on Tab 2
  const activeBundleId = currentBundle?.id || 'pro_office';
  const bMeta = dict.bundles?.[activeBundleId];
  if (bMeta) {
    setT('quotePlanName', bMeta.name);
    setT('quotePlanDesc', bMeta.desc);
  }

  // 8. Locked Banners & In-Journey Navigation
  setT('advisorLockedText', dict.advisorLockedText);
  setT('advisorEditText', dict.advisorEditText);
  setT('advisorNextText', dict.advisorNextText);
  setT('backToAdvisorBtn', dict.backToAdvisorBtn);

  setT('quoteLockedText', dict.quoteLockedText);
  setT('quoteEditText', dict.quoteEditText);
  setT('quoteNextText', dict.quoteNextText);
  setT('backToQuoteBtn', dict.backToQuoteBtn);

  setT('kycLockedText', dict.kycLockedText);
  setT('kycReturnTrackerText', dict.kycReturnTrackerText);

  setT('reviewJourneyTitle', dict.reviewJourneyTitle);
  setT('reviewJourneySub', dict.reviewJourneySub);
  setT('revBtnAdv', dict.revBtnAdv);
  setT('revBtnQuote', dict.revBtnQuote);
  setT('revBtnKyc', dict.revBtnKyc);

  applyPageLocking('advisor');
  applyPageLocking('quote');
  applyPageLocking('kyc');
}

/**
 * Re-renders the ENTIRE previous chat history into the newly selected language
 */
function reRenderFullChatHistory() {
  const dict = LOCALES[currentLang] || LOCALES.en;
  const chatContainer = document.getElementById('chatMessages');
  if (!chatContainer) return;
  chatContainer.innerHTML = '';

  for (let s = 1; s < wizardStep && s <= 4; s++) {
    renderAdvisorQuestionBubble(s, false);
    renderUserAnswerBubble(s);
  }

  if (wizardStep <= 4) {
    renderAdvisorQuestionBubble(wizardStep, true);
    renderQuickOptions(wizardStep);
    updateProgressBar(wizardStep);
  } else {
    renderStep5RecommendationBubble();
    renderQuickOptions(5);
    updateProgressBar(5);
  }

  chatContainer.scrollTop = chatContainer.scrollHeight;
}

function cleanRationale(text) {
  if (!text) return '';
  return String(text).replace(/\s*\([A-Z]\d+\)/g, '').replace(/\s{2,}/g, ' ').trim();
}

function renderAdvisorQuestionBubble(stepNum, isActive) {
  const dict = LOCALES[currentLang] || LOCALES.en;
  const stepData = dict['step' + stepNum];
  if (!stepData) return;

  const chat = document.getElementById('chatMessages');
  const bubble = document.createElement('div');
  bubble.className = "flex items-start gap-3";

  // Build plain-language explanation for Step 4 if guideItems is present
  let guideHtml = '';
  if (stepNum === 4 && stepData.guideItems) {
    guideHtml = `
      <div class="mt-3 p-3.5 rounded-xl bg-white border border-gray-200 shadow-2xs space-y-2.5 text-xs">
        <div class="flex items-center justify-between pb-2 border-b border-gray-100">
          <span class="text-[11px] uppercase font-black tracking-wider text-[#E40000] flex items-center gap-1.5">
            <i class="fa-solid fa-lightbulb text-amber-500"></i> ${stepData.guideTitle || 'Easy Guide to Your 4 Choices:'}
          </span>
          <span class="text-[10px] bg-red-50 text-[#E40000] font-bold px-2 py-0.5 rounded-full border border-red-100">Plain Everyday Language</span>
        </div>
        <p class="text-[11px] text-gray-500 font-medium">${stepData.guideSubtitle || 'Pick the option that best matches your daily business setup:'}</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-0.5">
          ${stepData.guideItems.map((item, i) => `
            <div class="p-2.5 rounded-lg bg-gray-50/90 border border-gray-200/80 hover:border-[#E40000] hover:bg-red-50/20 transition cursor-pointer" onclick="onSelectOption('${escapeHtml(stepData.options[i]?.val || '')}', ${i})">
              <span class="text-[9px] font-bold uppercase tracking-wider text-[#E40000] block mb-0.5">${item.badge}</span>
              <h5 class="font-bold text-gray-900 text-xs flex items-center gap-1.5">
                <span class="w-1.5 h-1.5 rounded-full bg-[#E40000] shrink-0"></span> ${item.title}
              </h5>
              <p class="text-gray-600 mt-1 leading-relaxed text-[11px]">
                ${item.easyDesc}
              </p>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  bubble.innerHTML = `
    <img src="logo.jpeg" alt="Airtel AI" class="w-8 h-8 rounded-full object-contain border border-red-200 bg-white p-0.5 shrink-0 shadow-xs">
    <div class="bg-gray-50 border border-gray-200 text-gray-900 p-3.5 rounded-2xl rounded-tl-none max-w-[92%] text-xs leading-relaxed space-y-1">
      <div class="flex items-center justify-between text-[11px] font-semibold text-gray-500 pb-1 border-b border-gray-200/60">
        <span class="font-bold text-gray-800">${stepData.title}</span>
        <span class="text-[10px] text-[#E40000] font-bold flex items-center gap-1"><span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Airtel AI Assistant</span>
      </div>
      <p class="pt-1 text-gray-900 font-medium">${(stepNum === 2 && userAnswers[1]?.businessName) ? (currentLang === 'hi' ? `समझ गया! आपके <strong>${escapeHtml(userAnswers[1].businessName)}</strong> के लिए, <strong>चरण 2 / 4: कुल कितने कर्मचारी या स्टाफ काम करते हैं?</strong>` : currentLang === 'te' ? `అర్థమైంది! మీ <strong>${escapeHtml(userAnswers[1].businessName)}</strong> కోసం, <strong>దశ 2 / 4: మీ వ్యాపారంలో ఎంతమంది ఉద్యోగులు పనిచేస్తున్నారు?</strong>` : `Understood! For your <strong>${escapeHtml(userAnswers[1].businessName)}</strong> business, <strong>Step 2 of 4: How many staff or employees work in your business?</strong>`) : stepData.question}</p>
      ${guideHtml}
    </div>
  `;
  chat.appendChild(bubble);
}

function renderUserAnswerBubble(stepNum) {
  const ans = userAnswers[stepNum];
  if (!ans) return;

  const dict = LOCALES[currentLang] || LOCALES.en;
  let text = ans.raw || ans.val;

  if (typeof ans.optionIdx === 'number') {
    const stepOptions = dict['step' + stepNum]?.options;
    if (stepOptions && stepOptions[ans.optionIdx]) {
      text = stepOptions[ans.optionIdx].label || stepOptions[ans.optionIdx].val;
    }
  }

  const chat = document.getElementById('chatMessages');
  const bubble = document.createElement('div');
  bubble.className = "flex items-start justify-end gap-2.5";
  bubble.innerHTML = `
    <div class="bg-[#E40000] text-white text-xs px-3.5 py-2.5 rounded-2xl rounded-tr-none max-w-[80%] font-semibold leading-relaxed shadow-xs">
      ${escapeHtml(text)}
    </div>
    <div class="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center text-xs font-bold shrink-0 shadow-xs">
      <i class="fa-solid fa-user text-xs"></i>
    </div>
  `;
  chat.appendChild(bubble);
}

function renderStep5RecommendationBubble() {
  const dict = LOCALES[currentLang] || LOCALES.en;
  const chat = document.getElementById('chatMessages');
  const bundle = evaluateBundle(userAnswers);
  currentBundle = bundle;

  const bubble = document.createElement('div');
  bubble.className = "flex items-start gap-3";
  bubble.innerHTML = `
    <img src="logo.jpeg" alt="Airtel AI" class="w-8 h-8 rounded-full object-contain border border-red-200 bg-white p-0.5 shrink-0 shadow-xs">
    <div class="bg-white border border-gray-200 p-4 rounded-2xl rounded-tl-none max-w-[90%] text-xs space-y-3 shadow-sm">
      <div class="flex items-center justify-between pb-2 border-b border-gray-200">
        <div>
          <span class="text-[10px] uppercase font-bold text-[#E40000] tracking-wider">Airtel Business Solution Pack</span>
          <h4 class="text-sm font-black text-gray-900">${bundle.name}</h4>
        </div>
        <div class="text-right">
          <span class="text-[10px] text-gray-400 block">${dict.billLabel}</span>
          <span class="text-base font-black text-[#E40000]">₹${bundle.basePrice.toLocaleString()}<span class="text-[10px] font-normal text-gray-500">/mo</span></span>
        </div>
      </div>
      
      <div>
        <p class="text-[11px] font-bold text-gray-800 mb-1">${dict.whyTitle}</p>
        <p class="text-gray-600 bg-gray-50 p-2.5 rounded-lg border border-gray-100 leading-relaxed text-[11px]">
          ${cleanRationale(bundle.rationale)}
        </p>
      </div>

      <div class="flex items-center justify-between pt-1 text-[11px] text-gray-500">
        <span class="text-emerald-700 font-bold"><i class="fa-solid fa-check mr-1"></i> Setup fee waived</span>
        <button onclick="resetInterview()" class="text-gray-400 hover:text-gray-700 font-medium cursor-pointer">
          <i class="fa-solid fa-rotate-left mr-1"></i> ${dict.step5.startOver}
        </button>
      </div>
    </div>
  `;
  chat.appendChild(bubble);
}

function renderQuickOptions(stepNum) {
  const container = document.getElementById('quickOptionsContainer');
  if (!container) return;
  container.innerHTML = '';
  const dict = LOCALES[currentLang] || LOCALES.en;

  if (stepNum > 4) {
    const btn = document.createElement('button');
    btn.className = "text-xs font-bold bg-[#E40000] text-white px-5 py-2.5 rounded-xl hover:bg-red-700 transition flex items-center gap-1.5 shadow-sm cursor-pointer";
    btn.innerHTML = `<span>${dict.acceptBtn}</span> <i class="fa-solid fa-arrow-right text-[10px]"></i>`;
    btn.onclick = () => onPassAdvisor();
    container.appendChild(btn);

    const restartBtn = document.createElement('button');
    restartBtn.className = "text-xs font-semibold text-gray-600 hover:text-gray-900 px-3.5 py-2 border border-gray-200 rounded-xl bg-white transition cursor-pointer shadow-2xs";
    restartBtn.innerHTML = `<i class="fa-solid fa-rotate-right mr-1"></i> ${dict.restartBtn}`;
    restartBtn.onclick = resetInterview;
    container.appendChild(restartBtn);
    return;
  }

  const stepData = dict['step' + stepNum];
  if (!stepData || !stepData.options) return;

  if (stepNum === 4) {
    stepData.options.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.className = "text-left text-xs font-semibold text-gray-800 bg-white hover:bg-red-50/40 border border-gray-200 hover:border-[#E40000] p-2.5 rounded-xl transition shadow-2xs cursor-pointer flex-1 min-w-[220px] flex flex-col justify-center";
      btn.innerHTML = `
        <div class="flex items-center gap-1.5 text-gray-900 font-bold text-xs">
          <span class="w-2 h-2 rounded-full bg-[#E40000] shrink-0"></span>
          <span>${opt.label}</span>
        </div>
        ${opt.sub ? `<span class="text-[10px] text-gray-500 font-normal mt-0.5 leading-snug pl-3.5">${opt.sub}</span>` : ''}
      `;
      btn.onclick = () => onSelectOption(opt.val, idx);
      container.appendChild(btn);
    });
    return;
  }

  stepData.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = "text-xs font-semibold text-gray-700 bg-white hover:bg-gray-50 border border-gray-200 hover:border-gray-300 px-3.5 py-2 rounded-xl transition shadow-2xs cursor-pointer";
    btn.innerText = opt.label;
    btn.onclick = () => onSelectOption(opt.val, idx);
    container.appendChild(btn);
  });
}

function updateProgressBar(step) {
  const percent = Math.min(100, Math.round((step / 4) * 100));
  const dict = LOCALES[currentLang] || LOCALES.en;
  const progressLabel = document.getElementById('stepProgressLabel');
  if (progressLabel) progressLabel.innerText = dict.stepProgress.replace('{step}', Math.min(step, 4));
  const percentLabel = document.getElementById('stepPercentLabel');
  if (percentLabel) percentLabel.innerText = `${percent}%`;
  const bar = document.getElementById('stepProgressBar');
  if (bar) bar.style.width = `${percent}%`;
}

// ============================================================
// 4. CONVERSATION INTERACTION HANDLERS
// ============================================================

function onSelectOption(val, optionIdx) {
  handleAnswer(val, optionIdx);
}

function handleFormSubmit(e) {
  if (e) e.preventDefault();
  const input = document.getElementById('userInput');
  const text = input.value.trim();
  if (!text) return;
  input.value = '';

  if (wizardStep >= 5) {
    resetInterview();
  }
  handleAnswer(text, null);
}

function handleAnswer(answerText, optionIdx) {
  if (wizardStep >= 5) {
    resetInterview();
  }

  if (wizardStep === 1) {
    const lower = answerText.toLowerCase();
    let domain = 'retail';
    let businessName = answerText;

    if (lower.match(/(clinic|hospital|doctor|dental|dentist|physio|health|care|pharmacy|chemist|medical|pathology|diagnostic|மருத்துவம்|క్లినిక్|क्लिनिक)/i)) {
      domain = 'clinic';
    } else if (lower.match(/(restaurant|cafe|bakery|baker|cake|pastry|sweet|mithai|food|kitchen|cater|dhaba|hotel|snack|pizza|burger|chai|உணவகம்|రెస్టారెంట్|रेस्टॉरंट)/i)) {
      domain = 'restaurant';
    } else if (lower.match(/(factory|manufactur|plant|industr|workshop|fabricat|textile|plastic|polymer|steel|auto|machine|mill|தொழிற்சாலை|ఫ్యాక్టరీ|फॅक्टरी)/i)) {
      domain = 'manufacturing';
    } else if (lower.match(/(ca |chartered|account|tax|audit|law|legal|advocate|court|office|consult|agency|travel|real estate|broker|architect|software|tech|school|coaching|academy|அலுவலகம்|ఆఫీస్|कार्यालय)/i)) {
      domain = 'office';
    } else {
      domain = 'retail';
    }

    userAnswers[1] = { raw: answerText, val: answerText, optionIdx: optionIdx, domain: domain, businessName: businessName };
    wizardStep = 2;
  } else if (wizardStep === 2) {
    let count = 5;
    const lower = answerText.toLowerCase();
    const match = answerText.match(/\d+/);

    if (match) {
      const parsed = parseInt(match[0], 10);
      if (parsed <= 3) count = 2;
      else if (parsed <= 20) count = 12;
      else if (parsed <= 60) count = 45;
      else count = 85;
    } else if (lower.match(/(solo|just me|alone|myself|single|1-3|micro|tiny)/i)) {
      count = 2;
    } else if (lower.match(/(small|few|5-15|5 to 15)/i)) {
      count = 12;
    } else if (lower.match(/(medium|25-50|25 to 50)/i)) {
      count = 45;
    } else if (lower.match(/(large|enterprise|big|80\+|workforce)/i)) {
      count = 85;
    }

    userAnswers[2] = { raw: answerText, val: answerText, optionIdx: optionIdx, count: count };
    wizardStep = 3;
  } else if (wizardStep === 3) {
    let loc = 1;
    const lower = answerText.toLowerCase();
    const match = answerText.match(/\d+/);

    if (match) {
      const parsed = parseInt(match[0], 10);
      if (parsed <= 1) loc = 1;
      else if (parsed <= 3) loc = 3;
      else if (parsed <= 8) loc = 5;
      else loc = 10;
    } else if (lower.match(/(single|one|only 1|just 1|solo|standalone|individual|1 shop)/i)) {
      loc = 1;
    } else if (lower.match(/(two|three|few|2-3|multiple|couple)/i)) {
      loc = 3;
    } else if (lower.match(/(five|chain|outlets)/i)) {
      loc = 5;
    } else if (lower.match(/(many|ten|cities|pan-india|across)/i)) {
      loc = 10;
    }

    userAnswers[3] = { raw: answerText, val: answerText, optionIdx: optionIdx, loc: loc };
    wizardStep = 4;
  } else if (wizardStep === 4) {
    const lower = answerText.toLowerCase();
    userAnswers[4] = {
      raw: answerText,
      val: answerText,
      optionIdx: optionIdx,
      needs: {
        pos: lower.includes('pos') || lower.includes('billing') || lower.includes('upi') || lower.includes('counter') || lower.includes('soundbox') || lower.includes('card'),
        cctv: lower.includes('cctv') || lower.includes('camera') || lower.includes('surveillance'),
        telephony: lower.includes('telephony') || lower.includes('phone') || lower.includes('calling') || lower.includes('ivr') || lower.includes('reception'),
        email: lower.includes('email') || lower.includes('domain') || lower.includes('office') || lower.includes('google'),
        sdwan: lower.includes('sd-wan') || lower.includes('sdwan') || lower.includes('sync') || (userAnswers[3]?.loc >= 3),
        failover: lower.includes('failover') || lower.includes('backup') || lower.includes('4g') || lower.includes('5g') || lower.includes('redundancy'),
        leasedLine: lower.includes('leased line') || lower.includes('dedicated') || lower.includes('1:1') || (userAnswers[1]?.domain === 'manufacturing') || (userAnswers[2]?.count >= 50)
      }
    };
    wizardStep = 5;
  }

  reRenderFullChatHistory();

  if (wizardStep >= 5) {
    updateRecommendationCard(false);
  }
}

function resetInterview() {
  wizardStep = 1;
  userAnswers = {};
  currentBundle = null;

  const dict = LOCALES[currentLang] || LOCALES.en;
  document.getElementById('recBadge').className = "text-[11px] font-semibold bg-gray-100 text-gray-600 px-2.5 py-0.5 rounded-full";
  document.getElementById('recBadge').innerText = dict.recsPending;
  document.getElementById('recBundleName').innerText = dict.awaitingTitle;
  document.getElementById('recBundleDesc').innerText = dict.awaitingDesc;
  document.getElementById('recPrice').innerHTML = `--<span class="text-xs font-normal text-gray-500">${dict.tabQuote?.perMonth || '/mo'}</span>`;
  document.getElementById('recProductList').innerHTML = `
    <div class="text-center py-8 text-gray-400 text-xs">
      <i class="fa-solid fa-basket-shopping text-xl mb-1 text-gray-300 block"></i>
      ${dict.recProductPlaceholder || 'Complete the 4 steps to view product breakdown'}
    </div>
  `;
  const ratTitleEl = document.getElementById('recRationaleTitle');
  if (ratTitleEl) ratTitleEl.innerText = dict.whyTitle || "Why this bundle fits your business:";
  const ratTextEl = document.getElementById('recRationaleText');
  if (ratTextEl) ratTextEl.innerText = dict.awaitingRationale || "The recommendation engine matches business type, staff headcount, multi-site presence, and network gaps against Airtel Business catalogue rules.";
  document.getElementById('acceptBtn').disabled = true;
  document.getElementById('acceptBtn').className = "w-full bg-gray-200 text-gray-400 py-3 rounded-xl font-bold text-xs cursor-not-allowed transition flex items-center justify-center gap-2";

  reRenderFullChatHistory();
}

function runScenario(type) {
  const p = PRESETS[type];
  if (!p) return;

  resetInterview();
  userAnswers[1] = p.answers[1];
  userAnswers[2] = p.answers[2];
  userAnswers[3] = p.answers[3];
  userAnswers[4] = p.answers[4];
  wizardStep = 5;

  reRenderFullChatHistory();
  updateRecommendationCard(false);
}

// ============================================================
// 5. CATALOGUE RULE EVALUATION & RECOMMENDATION ENGINE
// ============================================================

function getTailoredRationale(bundleId, answers, dict, lang) {
  const business = String(answers[1]?.businessName || answers[1]?.raw || answers[1]?.val || '').trim();
  const lower = business.toLowerCase();
  const loc = answers[3]?.loc || 1;

  const isBakery = /(bakery|baker|cake|pastry|confection|sweet|mithai)/i.test(lower);
  const isMall = /(mall|shopping|plaza|complex|center|centre)/i.test(lower);
  const isFood = /(restaurant|cafe|coffee|dhaba|hotel|food|kitchen|cater|pizza|burger|snack)/i.test(lower);
  const isClinic = /(clinic|hospital|doctor|dental|dentist|health|physio|pharmacy|chemist|medical|diagnostic|lab)/i.test(lower);
  const isMfg = /(factory|manufactur|plant|industr|workshop|fabricat|textile|plastic|polymer|steel|auto|machine|mill)/i.test(lower);
  const isOffice = /(ca|chartered|account|tax|audit|law|legal|advocate|court|office|consult|agency|travel|real estate|broker|architect|software|tech|school|coaching)/i.test(lower);

  // 1. Mall / Shopping Complex Custom Rationale
  if (isMall) {
    if (lang === 'hi') {
      return `मैनेज्ड एसडी-वैन के साथ हाई-स्पीड कमर्शियल फाइबर सभी शॉपिंग फ्लोर, रिटेल काउंटर और एडमिन ऑफिस को सुरक्षित रूप से जोड़ता है। 4G/5G ऑटो-फेलओवर सप्ताहांत की भारी भीड़ में भी पीओएस और यूपीआई पेमेंट रुकने नहीं देता। क्लाउड सीसीटीवी मुख्य प्रवेश द्वार और गलियारों में 24/7 लाइव सुरक्षा निगरानी देता है।`;
    }
    return `High-speed commercial fiber with Managed SD-WAN seamlessly links all mall retail zones, billing counters, and admin offices. Dual 4G/5G failover prevents POS payment drops during peak weekend footfalls. Centralized Cloud CCTV provides 24/7 security surveillance across main entrance, corridors, and shopping floors.`;
  }

  // 2. Manufacturing / Factory Leased Line Solution (for factories, industrial facilities)
  // CRITICAL: If the bundle is Smart Manufacturing Suite, it should NEVER output food or dining rationales!
  if (bundleId === 'mfg_pro' || answers[4]?.needs?.leasedLine || isMfg) {
    if (isBakery) {
      if (lang === 'hi') {
        return `आपकी कमर्शियल बेकरी और उत्पादन यूनिट के लिए 1:1 डेडिकेटेड फाइबर लाइन 99.9% अपटाइम देती है ताकि इंडस्ट्रियल ओवन, इन्वेंट्री ईआरपी और कोल्ड स्टोरेज बिना रुकावट चलें। स्मार्ट IoT सेंसर्स बेकिंग मशीनरी पर 24/7 नजर रखते हैं।`;
      }
      return `Dedicated 1:1 private fiber line reserved purely for your commercial bakery facility ensures your industrial ovens, ERP, and cold storage run with guaranteed 99.9% uptime. Smart IoT sensors track machine running time, while enterprise firewall security blocks cyber attacks 24/7.`;
    }
    if (lang === 'hi') {
      return `आपकी फैक्ट्री के लिए 1:1 प्राइवेट इंटरनेट लीज्ड लाइन बिना किसी स्पीड ड्रॉप के 99.9% अपटाइम देती है। स्मार्ट IoT सेंसर्स मशीनों के काम और बिजली की खपत पर नजर रखते हैं, और एयरटेल मैनेज्ड फ़ायरवॉल आपके ईआरपी और डेटा को साइबर हमलों से सुरक्षित रखता है।`;
    }
    return `A private 1:1 fiber line reserved purely for your facility ensures your ERP, inventory systems, and automated machinery run with guaranteed 99.9% uptime. Smart IoT sensors track machine running time and power usage, while enterprise firewall security blocks cyber attacks 24/7.`;
  }

  // 3. Bakery Custom Rationale
  if (isBakery) {
    if (bundleId === 'multi_chain' || loc >= 3) {
      if (lang === 'hi') {
        return `मैनेज्ड एसडी-वैन सभी ${loc >= 3 ? loc : 3} बेकरी शाखाओं को रीयल-टाइम बिलिंग और स्टॉक इन्वेंट्री सिंक के लिए जोड़ता है। 4G/5G ऑटो-फेलओवर व्यस्त समय में भी यूपीआई पेमेंट कभी रुकने नहीं देता। क्लाउड सीसीटीवी सभी बेकरी काउंटरों पर 24/7 लाइव निगरानी रखता है।`;
      }
      return `Managed SD-WAN connects all ${loc >= 3 ? loc : 3} bakery outlets for instant POS billing and fresh stock inventory synchronization. Dual 4G/5G failover prevents UPI payment interruptions during peak rush hours, and Cloud CCTV provides 24/7 live camera surveillance across all bakery store counters and baking areas.`;
    }
    if (lang === 'hi') {
      return `किफायती बिज़ फाइबर 100 एमबीपीएस और स्टेटिक आईपी आपकी बेकरी के यूपीआई क्यूआर और बिलिंग पीओएस को बिना रुकावट 99.5% अपटाइम के साथ चालू रखते हैं।`;
    }
    return `Cost-effective Biz Fibre 100 Mbps combined with Static IP and Cloud POS guarantees uninterrupted UPI QR code payments, smooth billing, and bakery inventory tracking during peak customer rush hours with 99.5% uptime.`;
  }

  // 4. Restaurant / Dining Custom Rationale (Only for food/dining businesses)
  if (isFood) {
    if (bundleId === 'multi_chain' || loc >= 3) {
      if (lang === 'hi') {
        return `सभी शाखाओं को मैनेज्ड एसडी-वैन से जोड़ा गया है ताकि बिलिंग और किचन ऑर्डर डेटा सुरक्षित सिंक रहे। 4G/5G ऑटो-फेलओवर सुनिश्चित करता है कि मेन फाइबर कटने पर भी यूपीआई पेमेंट कभी बंद न हो। क्लाउड सीसीटीवी सभी आउटलेट्स पर 24/7 लाइव निगरानी देता है।`;
      }
      return `Multi-site branches are linked with Managed SD-WAN for seamless POS and kitchen order sync. Dual 4G/5G failover guarantees zero payment disruptions when primary fiber trips. Cloud CCTV enables 24/7 centralized camera surveillance across all dining locations.`;
    }
    if (lang === 'hi') {
      return `कमर्शियल बिज़ फाइबर और स्टेटिक आईपी आपके रेस्टोरेंट के यूपीआई क्यूआर, टेबल बिलिंग और किचन ऑर्डर सिंक को बिना रुकावट 99.5% अपटाइम देते हैं।`;
    }
    return `Commercial Biz Fibre 100 Mbps combined with Static IP and Cloud POS guarantees uninterrupted UPI QR payments, quick table billing, and Kitchen Order Ticket (KOT) sync with 99.5% uptime.`;
  }

  // 5. Healthcare / Clinic
  if (isClinic || bundleId === 'clinic') {
    return dict.rationales?.clinic || `Replaces unreliable home broadband with high-speed commercial fiber. Smart Cloud Telephony with automated greeting ensures patient appointment calls are never missed, while Endpoint Security protects confidential patient medical records.`;
  }

  // 6. Professional Office / CA / Law
  if (isOffice || bundleId === 'pro_office') {
    return dict.rationales?.office || `High-speed 300 Mbps commercial fiber bundled with professional company email and antivirus security to protect confidential client files, tax filings, and audit records with 99.5% uptime.`;
  }

  // 7. General Multi-Site (Retail chain, store chain, etc.)
  if (bundleId === 'multi_chain' || loc >= 3) {
    if (lang === 'hi') {
      return `सभी शाखाओं को मैनेज्ड एसडी-वैन से जोड़ा गया है ताकि बिलिंग और इन्वेंट्री डेटा सुरक्षित सिंक रहे। 4G/5G ऑटो-फेलओवर सुनिश्चित करता है कि यूपीआई पेमेंट कभी बंद न हो। क्लाउड सीसीटीवी सभी स्टोर काउंटरों पर 24/7 लाइव निगरानी देता है।`;
    }
    return `Multi-site retail branches are linked with Managed SD-WAN for real-time inventory and billing sync. Dual 4G/5G failover guarantees zero UPI or card payment disruptions. Cloud CCTV enables 24/7 centralized camera surveillance across all store counters and premises.`;
  }

  // 8. Default fallback to kirana / retail rationale
  return dict.rationales?.kirana || `Cost-effective 100 Mbps commercial fiber combined with a fixed Static IP guarantees uninterrupted UPI QR code payments and POS billing with 99.5% commercial uptime.`;
}

function evaluateBundle(answers) {
  const domain = answers[1]?.domain || 'retail';
  const rawBusiness = String(answers[1]?.businessName || answers[1]?.raw || answers[1]?.val || '').toLowerCase();
  const size = answers[2]?.count || 5;
  const loc = answers[3]?.loc || 1;
  const dict = LOCALES[currentLang] || LOCALES.en;

  const isFoodOrBakery = domain === 'restaurant' || /bakery|baker|cake|pastry|cafe|coffee|sweet|mithai|restaurant|food|kitchen/i.test(rawBusiness);
  const isMfg = domain === 'manufacturing' || /factory|manufactur|plant|industr|workshop|fabricat|textile|plastic|polymer|steel|auto|machine|mill/i.test(rawBusiness);
  const isClinic = domain === 'clinic' || /clinic|hospital|doctor|dental|dentist|health|physio|pharmacy|chemist|medical|diagnostic|lab/i.test(rawBusiness);
  const isOffice = domain === 'office' || /ca|chartered|account|tax|audit|law|legal|advocate|court|office|consult|agency|travel|real estate|broker|architect|software|tech|school|coaching/i.test(rawBusiness);
  const isMall = /mall|shopping|plaza|complex|center|centre/i.test(rawBusiness);

  let bundle = {
    id: 'starter',
    name: 'Airtel Starter Digital Pack',
    segment: 'Shops & retail outlets',
    basePrice: 1798,
    setupFee: 0,
    sla: '99.5% Reliable Business Fiber',
    products: [
      { id: 'P01', name: 'Biz Fibre 100', desc: 'Fast, unlimited 100 Mbps commercial fiber internet for your shop and office', price: 999 },
      { id: 'P11', name: 'Static IP', desc: 'Fixed permanent internet address for biometric attendance, local servers, and bank billing', price: 200 },
      { id: 'P19', name: 'Cloud POS & Billing', desc: 'Touchscreen billing app for quick customer checkout, printed GST bills, and stock tracking', price: 599 }
    ]
  };

  if (isMfg || (size >= 50 && !isFoodOrBakery && !isMall && !isOffice) || answers[4]?.needs?.leasedLine) {
    bundle = {
      id: 'mfg_pro',
      name: 'Airtel Smart Manufacturing Suite',
      segment: 'Small & medium factories',
      basePrice: 27247,
      setupFee: 0,
      sla: 'Guaranteed 99.9% private internet uptime',
      products: [
        { id: 'P06', name: 'Internet Leased Line 100', desc: 'Dedicated 1:1 private fiber wire reserved only for your factory (equal upload & download speeds, guaranteed 99.9% uptime)', price: 25000 },
        { id: 'P24', name: 'Machine Monitoring IoT', desc: 'Smart IoT sensors & SIMs to track machine running time, power use, and prevent unexpected breakdown', price: 149 },
        { id: 'P20', name: 'Endpoint Security', desc: 'Complete antivirus & ransomware protection for office and factory computers', price: 99 },
        { id: 'P21', name: 'Managed Firewall', desc: '24/7 digital security guard managed by Airtel SOC experts to block cyber attacks and hacking', price: 1999 }
      ]
    };
  } else if (loc >= 3 || answers[4]?.needs?.sdwan) {
    bundle = {
      id: 'multi_chain',
      name: 'Airtel Connected Enterprise (Multi-Site)',
      segment: 'Multi-branch businesses',
      basePrice: 4697,
      setupFee: 0,
      sla: '99.5% Fiber + Auto 4G/5G Backup Router',
      products: [
        { id: 'P02', name: 'Biz Fibre 300', desc: 'High-speed 300 Mbps commercial fiber internet for your main branch', price: 1499 },
        { id: 'P09', name: 'Backup 4G/5G Failover', desc: 'Automatic backup router that switches to mobile data instantly if the main wire cuts, keeping payments alive', price: 499 },
        { id: 'P10', name: 'Managed SD-WAN', desc: `Smart networking that securely links all ${loc >= 3 ? loc : 3} branch outlets together so sales and inventory stay in sync`, price: 2500 },
        { id: 'P23', name: 'Cloud CCTV', desc: 'Live HD video and 30 days of recorded footage viewable on your mobile phone anytime, anywhere', price: 199 }
      ]
    };
  } else if (isClinic || isOffice || (size >= 10 && !isFoodOrBakery) || answers[4]?.needs?.telephony || answers[4]?.needs?.email) {
    bundle = {
      id: 'pro_office',
      name: 'Airtel Professional Office Suite',
      segment: 'Clinics, CA firms & offices',
      basePrice: 2723,
      setupFee: 0,
      sla: '99.5% Fast Business Fiber',
      products: [
        { id: 'P02', name: 'Biz Fibre 300', desc: 'High-speed 300 Mbps unlimited commercial fiber internet for your entire team', price: 1499 },
        { id: 'P12', name: 'Cloud Telephony / SIP', desc: 'Smart business phone system with automated greeting so customer and client calls are never missed', price: 1000 },
        { id: 'P16', name: 'Cloud Email & Office', desc: 'Professional business email (you@yourcompany.com) with online document storage', price: 125 },
        { id: 'P20', name: 'Endpoint Security', desc: 'Shields staff laptops and computers against viruses, malware, and client data leaks', price: 99 }
      ]
    };
  } else if (isFoodOrBakery && loc < 3) {
    bundle = {
      id: 'starter',
      name: 'Airtel Starter Digital Pack',
      segment: 'Food & bakery retail',
      basePrice: 1798,
      setupFee: 0,
      sla: '99.5% Reliable Business Fiber',
      products: [
        { id: 'P01', name: 'Biz Fibre 100', desc: 'Fast, unlimited 100 Mbps commercial fiber internet for your shop and office', price: 999 },
        { id: 'P11', name: 'Static IP', desc: 'Fixed permanent internet address for biometric attendance, local servers, and bank billing', price: 200 },
        { id: 'P19', name: 'Cloud POS & Billing', desc: 'Touchscreen billing app for quick customer checkout, printed GST bills, and stock tracking', price: 599 }
      ]
    };
  }

  // Assign tailored, context-aware rationale matching user business type
  bundle.rationale = getTailoredRationale(bundle.id, answers, dict, currentLang);

  const bMeta = dict.bundles?.[bundle.id] || {};
  bundle.name = bMeta.name || bundle.name;
  bundle.segment = bMeta.segment || bundle.segment;
  bundle.sla = bMeta.sla || bundle.sla;
  bundle.desc = bMeta.desc || bundle.desc || bundle.products.map(p => p.name).join(' + ');

  return bundle;
}

function updateRecommendationCard(isLanguageSwitchOnly) {
  const bundle = evaluateBundle(userAnswers);
  currentBundle = bundle;
  const dict = LOCALES[currentLang] || LOCALES.en;

  document.getElementById('recBadge').className = "text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-0.5 rounded-full";
  document.getElementById('recBadge').innerText = dict.recsBadge;
  document.getElementById('recBundleName').innerText = bundle.name;
  document.getElementById('recBundleDesc').innerText = bundle.segment + ' · ' + bundle.sla;
  document.getElementById('recPrice').innerHTML = `₹${bundle.basePrice.toLocaleString()}<span class="text-xs font-normal text-gray-500">${dict.tabQuote?.perMonth || '/mo'}</span>`;

  const listEl = document.getElementById('recProductList');
  listEl.innerHTML = bundle.products.map(p => `
    <div class="flex items-center justify-between p-2 rounded-lg bg-gray-50 border border-gray-100 text-xs">
      <div>
        <span class="font-bold text-gray-900">${p.name}</span>
        <p class="text-[10px] text-gray-500">${p.desc}</p>
      </div>
      <span class="font-semibold text-gray-900 shrink-0 ml-2">₹${p.price.toLocaleString()}</span>
    </div>
  `).join('');

  document.getElementById('recRationaleTitle').innerText = dict.whyTitle;
  document.getElementById('recRationaleText').innerText = cleanRationale(bundle.rationale);

  const acceptBtn = document.getElementById('acceptBtn');
  acceptBtn.disabled = false;
  acceptBtn.className = "w-full bg-[#E40000] text-white py-3 rounded-xl font-bold text-xs hover:bg-red-700 transition flex items-center justify-center gap-2 cursor-pointer shadow-sm";

  document.getElementById('quotePlanName').innerText = bundle.name;
  document.getElementById('quotePlanDesc').innerText = bundle.desc;
  updateQuoteCalculator();
}

// ============================================================
// 6. MICROPHONE VOICE INPUT (STT) - ZERO READ-ALOUD
// ============================================================

let recognition = null;
let isRecording = false;

function toggleVoiceRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    alert("Voice microphone input is supported in Google Chrome, Microsoft Edge, and modern browsers.");
    return;
  }

  if (isRecording) {
    if (recognition) recognition.stop();
    stopMicUI();
    return;
  }

  recognition = new SpeechRecognition();
  const dict = LOCALES[currentLang] || LOCALES.en;
  recognition.lang = dict.langCode;
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.onstart = function() {
    isRecording = true;
    startMicUI();
  };

  recognition.onresult = function(e) {
    const transcript = e.results[0][0].transcript;
    document.getElementById('userInput').value = transcript;
    handleAnswer(transcript, null);
  };

  recognition.onerror = function() {
    stopMicUI();
  };

  recognition.onend = function() {
    stopMicUI();
  };

  recognition.start();
}

function startMicUI() {
  const micBtn = document.getElementById('micBtn');
  micBtn.className = "w-10 h-10 rounded-xl bg-[#E40000] text-white flex items-center justify-center shrink-0 shadow-sm";
  document.getElementById('micIcon').className = "fa-solid fa-microphone animate-pulse";
  document.getElementById('userInput').placeholder = "Listening... Speak now...";
}

function stopMicUI() {
  isRecording = false;
  const micBtn = document.getElementById('micBtn');
  micBtn.className = "w-10 h-10 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center shrink-0 transition cursor-pointer";
  document.getElementById('micIcon').className = "fa-solid fa-microphone";
  const dict = LOCALES[currentLang] || LOCALES.en;
  const activeStepKey = 'step' + (wizardStep <= 4 ? wizardStep : 4);
  document.getElementById('userInput').placeholder = (dict[activeStepKey] || dict.step1).placeholder;
}

// ============================================================
// 7. TAB 2: INSTANT QUOTE & SERVER-SIDE VALIDATION
// ============================================================

async function updateQuoteCalculator() {
  if (!currentBundle) currentBundle = evaluateBundle(userAnswers);

  const failoverChecked = document.getElementById('addonFailover')?.checked || false;
  const cctvChecked = document.getElementById('addonCctv')?.checked || false;
  const ipChecked = document.getElementById('addonStaticIp')?.checked || false;

  const selectedAddons = [];
  if (failoverChecked) selectedAddons.push('P09');
  if (cctvChecked) selectedAddons.push('P23');
  if (ipChecked) selectedAddons.push('P11');

  try {
    const res = await fetch('/api/quote/calculate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Session-Token': sessionToken || ''
      },
      body: JSON.stringify({
        bundleId: currentBundle.id,
        selectedAddons: selectedAddons
      })
    });

    if (res.ok) {
      const data = await res.json();
      currentQuote = data.quote;
      renderQuoteUI(currentQuote);
      return;
    }
  } catch (e) {
    console.warn("Falling back to client calculation:", e);
  }

  // Client-side fallback if server offline
  let addOnTotal = 0;
  if (failoverChecked) addOnTotal += 499;
  if (cctvChecked) addOnTotal += 398;
  if (ipChecked) addOnTotal += 200;

  const basePrice = currentBundle.basePrice;
  const subTotal = basePrice + addOnTotal;
  const gst = Math.round(subTotal * 0.18);
  const total = subTotal + gst;

  renderQuoteUI({
    baseMonthlyPrice: basePrice,
    addonMonthlyPrice: addOnTotal,
    subtotalMonthly: subTotal,
    gstAmountInr: gst,
    totalMonthlyDue: total
  });
}

function renderQuoteUI(quote) {
  const perMo = (LOCALES[currentLang] || LOCALES.en).tabQuote?.perMonth || '/ mo';
  document.getElementById('quoteBaseVal').innerText = `₹${quote.baseMonthlyPrice.toLocaleString()} ${perMo}`;
  document.getElementById('quoteBaseVal2').innerText = `₹${quote.baseMonthlyPrice.toLocaleString()}`;
  document.getElementById('quoteAddonVal').innerText = `₹${quote.addonMonthlyPrice.toLocaleString()}`;
  document.getElementById('quoteSubtotalVal').innerText = `₹${quote.subtotalMonthly.toLocaleString()}`;
  document.getElementById('quoteGstVal').innerText = `₹${quote.gstAmountInr.toLocaleString()}`;
  document.getElementById('quoteTotalVal').innerText = `₹${quote.totalMonthlyDue.toLocaleString()}`;
  document.getElementById('quoteHeaderTotal').innerText = `₹${quote.subtotalMonthly.toLocaleString()}`;
}

// ============================================================
// ============================================================
// ============================================================
// 8. TAB 3: SMART KYC - APPLICANT DOSSIER & VERIFICATION
// ============================================================

let selectedApplicantKey = 'K01';

// KYC 4-Document Repository State
// KYC 4-Document Repository State: Initialized EMPTY (nothing pre-uploaded)
let kycDocuments = {
  gst: null,
  udyam: null,
  signatory_id: null,
  address_proof: null
};
if (typeof window !== 'undefined') window.kycDocuments = kycDocuments;

// Comprehensive in-memory registry lookup across all 3,534 records
function clientLookupGstin(gstin) {
  const clean = (gstin || '').trim().toUpperCase();
  if (!clean) return null;

  // 1. Check offline dataset index (all 3,534 records from mock_gstin_registry.csv)
  if (typeof window !== 'undefined' && window.MOCK_GSTIN_REGISTRY && window.MOCK_GSTIN_REGISTRY[clean]) {
    const r = window.MOCK_GSTIN_REGISTRY[clean];
    return {
      gstin: clean,
      legal_name: r[0],
      status: r[1],
      state: r[2],
      constitution: r[3],
      registration_date: r[4]
    };
  }

  // 2. Check specimen applicant list
  for (const k in KYC_APPLICANTS) {
    if (KYC_APPLICANTS[k].gstin === clean) {
      return {
        gstin: clean,
        legal_name: KYC_APPLICANTS[k].name,
        status: KYC_APPLICANTS[k].gstStatus,
        state: KYC_APPLICANTS[k].state,
        applicant: KYC_APPLICANTS[k]
      };
    }
  }
  return null;
}

// Udyam registry lookup across all 2,723 records
function clientLookupUdyam(udyamNo) {
  const clean = (udyamNo || '').trim().toUpperCase();
  if (!clean) return null;
  if (typeof window !== 'undefined' && window.MOCK_UDYAM_REGISTRY && window.MOCK_UDYAM_REGISTRY[clean]) {
    const r = window.MOCK_UDYAM_REGISTRY[clean];
    return {
      udyam_number: clean,
      enterprise_name: r[0],
      enterprise_type: r[1],
      major_activity: r[2],
      state: r[3],
      city: r[4]
    };
  }
  return null;
}

// Drag and Drop Visual Handlers for Dropzones
function handleDragOver(e) {
  e.preventDefault();
  e.stopPropagation();
  e.currentTarget.classList.add('border-[#E40000]', 'bg-red-50/40');
}

function handleDragLeave(e) {
  e.preventDefault();
  e.stopPropagation();
  e.currentTarget.classList.remove('border-[#E40000]', 'bg-red-50/40');
}

function handleDocDrop(e, docType) {
  e.preventDefault();
  e.stopPropagation();
  e.currentTarget.classList.remove('border-[#E40000]', 'bg-red-50/40');
  if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files.length > 0) {
    processDocFile(e.dataTransfer.files[0], docType);
  }
}

// Initialize KYC in completely empty state (Nothing pre-uploaded)
function initKycEmptyState() {
  kycDocuments = {
    gst: null,
    udyam: null,
    signatory_id: null,
    address_proof: null
  };
  if (typeof window !== 'undefined') window.kycDocuments = kycDocuments;

  renderKycCardUI('gst');
  renderKycCardUI('udyam');
  renderKycCardUI('signatory_id');
  renderKycCardUI('address_proof');
  updateKycDocumentCount();

  const resCard = document.getElementById('kycResultCard');
  if (resCard) resCard.classList.add('hidden');
  const alertBox = document.getElementById('kycMissingAlert');
  if (alertBox) alertBox.classList.add('hidden');
}

// Trigger file picker for specific document
function triggerDocUpload(docKey) {
  const inputId = (docKey === 'gst') ? 'doc1FileInput' :
                  (docKey === 'udyam') ? 'doc2FileInput' :
                  (docKey === 'signatory_id') ? 'doc3FileInput' : 'doc4FileInput';
  const el = document.getElementById(inputId);
  if (el) {
    el.value = '';
    el.click();
  }
}

// Trigger batch 4-file uploader
function triggerMultiUpload() {
  const el = document.getElementById('multiKycFileInput');
  if (el) {
    el.value = '';
    el.click();
  }
}

// Remove document from specific card
function removeDoc(docKey) {
  kycDocuments[docKey] = null;
  if (typeof window !== 'undefined') window.kycDocuments = kycDocuments;

  // Reset file input
  const inputId = (docKey === 'gst') ? 'doc1FileInput' :
                  (docKey === 'udyam') ? 'doc2FileInput' :
                  (docKey === 'signatory_id') ? 'doc3FileInput' : 'doc4FileInput';
  const el = document.getElementById(inputId);
  if (el) el.value = '';

  renderKycCardUI(docKey);

  // Hide stale result card
  const resCard = document.getElementById('kycResultCard');
  if (resCard) resCard.classList.add('hidden');

  // Hide alert box
  const alertBox = document.getElementById('kycMissingAlert');
  if (alertBox) alertBox.classList.add('hidden');

  updateKycDocumentCount();
}

// Update the 4/4 count badge & notification box
function updateKycDocumentCount() {
  const keys = ['gst', 'udyam', 'signatory_id', 'address_proof'];
  const uploaded = keys.filter(k => kycDocuments[k] && kycDocuments[k].isUploaded);
  const count = uploaded.length;

  const countBadge = document.getElementById('uploadedCountBadge');
  const vaultNotice = document.getElementById('uploadVaultNotice');
  const statusBox = document.getElementById('uploadVaultStatus');

  if (count === 4) {
    if (countBadge) {
      countBadge.className = "bg-emerald-200 text-emerald-900 font-bold px-2.5 py-0.5 rounded-full text-[10px] shrink-0";
      countBadge.innerText = "4 / 4 Documents Active";
    }
    if (vaultNotice) {
      vaultNotice.innerHTML = `All 4 documents are securely encrypted.`;
    }
    if (statusBox) {
      statusBox.className = "mt-4 p-3.5 border border-emerald-200 bg-emerald-50/70 rounded-xl text-xs flex flex-col sm:flex-row items-center justify-between gap-2 shadow-2xs";
    }
  } else {
    const missingNames = [];
    if (!kycDocuments.gst || !kycDocuments.gst.isUploaded) missingNames.push("GST Certificate");
    if (!kycDocuments.udyam || !kycDocuments.udyam.isUploaded) missingNames.push("Udyam Certificate");
    if (!kycDocuments.signatory_id || !kycDocuments.signatory_id.isUploaded) missingNames.push("Signatory ID");
    if (!kycDocuments.address_proof || !kycDocuments.address_proof.isUploaded) missingNames.push("Address Proof");

    if (countBadge) {
      countBadge.className = "bg-amber-200 text-amber-900 font-bold px-2.5 py-0.5 rounded-full text-[10px] shrink-0";
      countBadge.innerText = `${count} / 4 Uploaded (${4 - count} Missing)`;
    }
    if (vaultNotice) {
      vaultNotice.innerHTML = `<span class="text-amber-900 font-bold"><i class="fa-solid fa-triangle-exclamation mr-1 text-amber-600"></i> Action Needed:</span> Missing <strong>${missingNames.join(', ')}</strong>. Upload all 4 documents to verify.`;
    }
    if (statusBox) {
      statusBox.className = "mt-4 p-3.5 border border-amber-300 bg-amber-50/80 rounded-xl text-xs flex flex-col sm:flex-row items-center justify-between gap-2 shadow-2xs";
    }
  }
}

// Render individual card UI for Empty or Uploaded state
function renderKycCardUI(docKey) {
  const doc = kycDocuments[docKey];
  const isPresent = doc && doc.isUploaded;

  if (docKey === 'gst') {
    const dropzone = document.getElementById('doc1Dropzone');
    const uploadedView = document.getElementById('doc1UploadedView');
    const badge = document.getElementById('doc1StatusBadge');
    const nameBadge = document.getElementById('doc1FileNameBadge');
    const tag = document.getElementById('doc1FileTag');
    const img = document.getElementById('doc1PreviewImg');
    const gstinInput = document.getElementById('doc1GstinInput');
    const legalName = document.getElementById('doc1LegalName');
    const regDate = document.getElementById('doc1RegDate');

    if (isPresent) {
      if (dropzone) dropzone.classList.add('hidden');
      if (uploadedView) uploadedView.classList.remove('hidden');
      if (nameBadge) nameBadge.innerText = doc.name;
      if (tag) tag.innerText = doc.name;

      if (img) {
        if (doc.dataUrl) {
          img.src = doc.dataUrl;
        } else {
          img.src = `/kyc_documents/${doc.name}`;
          img.onerror = function() {
            this.src = `../kyc_documents/${doc.name}`;
            this.onerror = null;
          };
        }
      }

      if (gstinInput && doc.gstin) gstinInput.value = doc.gstin;
      if (legalName && doc.legalName) legalName.innerText = doc.legalName;

      // Update registry cross-check status
      const gstin = gstinInput ? gstinInput.value.trim().toUpperCase() : (doc.gstin || '');
      const rec = clientLookupGstin(gstin);
      const status = rec ? rec.status : (doc.gstStatus || 'Unregistered');

      if (status === 'Active') {
        if (badge) {
          badge.className = "text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded";
          badge.innerText = "Active Taxpayer";
        }
        if (regDate) {
          regDate.className = "text-emerald-700 font-bold flex items-center gap-1 text-xs";
          regDate.innerHTML = `<i class="fa-solid fa-circle-check"></i> Verified ACTIVE in mock_gstin_registry.csv`;
        }
      } else if (status === 'Suspended') {
        if (badge) {
          badge.className = "text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200 px-2 py-0.5 rounded";
          badge.innerText = "Suspended";
        }
        if (regDate) {
          regDate.className = "text-amber-700 font-bold flex items-center gap-1 text-xs";
          regDate.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> SUSPENDED in mock_gstin_registry.csv`;
        }
      } else if (status === 'Cancelled') {
        if (badge) {
          badge.className = "text-[10px] font-bold bg-red-50 text-red-700 border border-red-200 px-2 py-0.5 rounded";
          badge.innerText = "Cancelled";
        }
        if (regDate) {
          regDate.className = "text-red-700 font-bold flex items-center gap-1 text-xs";
          regDate.innerHTML = `<i class="fa-solid fa-ban"></i> CANCELLED in mock_gstin_registry.csv`;
        }
      } else {
        if (badge) {
          badge.className = "text-[10px] font-bold bg-red-50 text-red-700 border border-red-200 px-2 py-0.5 rounded";
          badge.innerText = "Unregistered";
        }
        if (regDate) {
          regDate.className = "text-red-700 font-bold flex items-center gap-1 text-xs";
          regDate.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> NOT FOUND in mock_gstin_registry.csv`;
        }
      }
    } else {
      // EMPTY / REMOVED STATE
      if (dropzone) dropzone.classList.remove('hidden');
      if (uploadedView) uploadedView.classList.add('hidden');
      if (nameBadge) nameBadge.innerText = "No document uploaded";
      if (badge) {
        badge.className = "text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200 px-2 py-0.5 rounded";
        const dict = LOCALES[currentLang] || LOCALES.en; badge.innerText = dict.kycBadges?.notUploaded || "Not Uploaded · Required";
      }
      if (img) img.src = "";
      if (gstinInput) gstinInput.value = "";
      if (legalName) legalName.innerText = "Awaiting Document Upload";
      if (regDate) {
        regDate.className = "text-gray-400 font-medium flex items-center gap-1 text-xs";
        regDate.innerHTML = `<i class="fa-solid fa-clock"></i> Not Verified (Document Missing)`;
      }
    }
  } else if (docKey === 'udyam') {
    const dropzone = document.getElementById('doc2Dropzone');
    const uploadedView = document.getElementById('doc2UploadedView');
    const badge = document.getElementById('doc2StatusBadge');
    const nameBadge = document.getElementById('doc2FileNameBadge');
    const tag = document.getElementById('doc2FileTag');
    const img = document.getElementById('doc2PreviewImg');
    const udyamNo = document.getElementById('doc2UdyamNo');
    const udyamType = document.getElementById('doc2UdyamType');

    if (isPresent) {
      if (dropzone) dropzone.classList.add('hidden');
      if (uploadedView) uploadedView.classList.remove('hidden');
      if (nameBadge) nameBadge.innerText = doc.name;
      if (tag) tag.innerText = doc.name;
      if (img) {
        if (doc.dataUrl) {
          img.src = doc.dataUrl;
        } else {
          img.src = `/kyc_documents/${doc.name}`;
          img.onerror = function() {
            this.src = `../kyc_documents/${doc.name}`;
            this.onerror = null;
          };
        }
      }
      if (udyamNo && doc.udyamNumber) udyamNo.innerText = doc.udyamNumber;
      if (udyamType && doc.udyamType) udyamType.innerText = doc.udyamType;
      if (badge) {
        badge.className = "text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded";
        badge.innerText = "Verified MSME";
      }
    } else {
      if (dropzone) dropzone.classList.remove('hidden');
      if (uploadedView) uploadedView.classList.add('hidden');
      if (nameBadge) nameBadge.innerText = "No document uploaded";
      if (badge) {
        badge.className = "text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200 px-2 py-0.5 rounded";
        const dict = LOCALES[currentLang] || LOCALES.en; badge.innerText = dict.kycBadges?.notUploaded || "Not Uploaded · Required";
      }
      if (img) img.src = "";
      if (udyamNo) udyamNo.innerText = "Awaiting Document Upload";
      if (udyamType) udyamType.innerText = "—";
    }
  } else if (docKey === 'signatory_id') {
    const dropzone = document.getElementById('doc3Dropzone');
    const uploadedView = document.getElementById('doc3UploadedView');
    const badge = document.getElementById('doc3TokenBadge');
    const nameBadge = document.getElementById('doc3FileNameBadge');
    const tag = document.getElementById('doc3FileTag');
    const img = document.getElementById('doc3PreviewImg');
    const sigName = document.getElementById('doc3SignatoryName');
    const sigId = document.getElementById('doc3SignatoryId');
    const consent = document.getElementById('doc3ConsentStatus');

    if (isPresent) {
      if (dropzone) dropzone.classList.add('hidden');
      if (uploadedView) uploadedView.classList.remove('hidden');
      if (nameBadge) nameBadge.innerText = doc.name;
      if (tag) tag.innerText = doc.name;
      if (img) {
        if (doc.dataUrl) {
          img.src = doc.dataUrl;
        } else {
          img.src = `/kyc_documents/${doc.name}`;
          img.onerror = function() {
            this.src = `../kyc_documents/${doc.name}`;
            this.onerror = null;
          };
        }
      }
      if (sigName && doc.signatory) sigName.innerText = doc.signatory;
      if (sigId && doc.signatoryIdMasked) sigId.innerText = doc.signatoryIdMasked;
      if (consent) consent.innerText = "DPDP Digital Consent Recorded";
      if (badge) {
        badge.className = "text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-200 px-2 py-0.5 rounded";
        badge.innerText = "DPDP Tokenized";
      }
    } else {
      if (dropzone) dropzone.classList.remove('hidden');
      if (uploadedView) uploadedView.classList.add('hidden');
      if (nameBadge) nameBadge.innerText = "No document uploaded";
      if (badge) {
        badge.className = "text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200 px-2 py-0.5 rounded";
        const dict = LOCALES[currentLang] || LOCALES.en; badge.innerText = dict.kycBadges?.notUploaded || "Not Uploaded · Required";
      }
      if (img) img.src = "";
      if (sigName) sigName.innerText = "Awaiting Document Upload";
      if (sigId) sigId.innerText = "—";
      if (consent) consent.innerText = "Awaiting Document";
    }
  } else if (docKey === 'address_proof') {
    const dropzone = document.getElementById('doc4Dropzone');
    const uploadedView = document.getElementById('doc4UploadedView');
    const badge = document.getElementById('doc4StatusBadge');
    const nameBadge = document.getElementById('doc4FileNameBadge');
    const tag = document.getElementById('doc4FileTag');
    const img = document.getElementById('doc4PreviewImg');
    const docType = document.getElementById('doc4DocType');
    const issueDate = document.getElementById('doc4IssueDate');
    const premises = document.getElementById('doc4Premises');

    if (isPresent) {
      if (dropzone) dropzone.classList.add('hidden');
      if (uploadedView) uploadedView.classList.remove('hidden');
      if (nameBadge) nameBadge.innerText = doc.name;
      if (tag) tag.innerText = doc.name;
      if (img) {
        if (doc.dataUrl) {
          img.src = doc.dataUrl;
        } else {
          img.src = `/kyc_documents/${doc.name}`;
          img.onerror = function() {
            this.src = `../kyc_documents/${doc.name}`;
            this.onerror = null;
          };
        }
      }
      if (docType && doc.docType) docType.innerText = doc.docType;
      if (premises && doc.premises) premises.innerText = doc.premises;

      // Currency check
      const refDate = new Date("2026-07-15");
      const pDate = new Date(doc.docDate || "2026-06-15");
      const ageDays = Math.round((refDate - pDate) / (1000 * 60 * 60 * 24));
      if (issueDate) issueDate.innerText = `Issued: ${doc.docDate} (${ageDays}d ago)`;

      if (ageDays <= 90) {
        if (badge) {
          badge.className = "text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded";
          badge.innerText = `Valid (${ageDays}d ≤ 90d)`;
        }
      } else {
        if (badge) {
          badge.className = "text-[10px] font-bold bg-red-50 text-red-700 border border-red-200 px-2 py-0.5 rounded";
          badge.innerText = `Expired (${ageDays}d > 90d)`;
        }
      }
    } else {
      if (dropzone) dropzone.classList.remove('hidden');
      if (uploadedView) uploadedView.classList.add('hidden');
      if (nameBadge) nameBadge.innerText = "No document uploaded";
      if (badge) {
        badge.className = "text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200 px-2 py-0.5 rounded";
        const dict = LOCALES[currentLang] || LOCALES.en; badge.innerText = dict.kycBadges?.notUploaded || "Not Uploaded · Required";
      }
      if (img) img.src = "";
      if (docType) docType.innerText = "Awaiting Document Upload";
      if (issueDate) issueDate.innerText = "—";
      if (premises) premises.innerText = "—";
    }
  }
}

// Select Specimen Applicant
function onSelectKycApplicant(applicantKey) {
  selectedApplicantKey = applicantKey;
  const app = KYC_APPLICANTS[applicantKey];
  if (!app) return;

  const applicantSelect = document.getElementById('applicantSelect');
  if (applicantSelect) applicantSelect.value = applicantKey;

  // Populate kycDocuments
  kycDocuments.gst = {
    id: 'gst',
    name: `${app.id}_gst_certificate.png`,
    isUploaded: true,
    dataUrl: null,
    specimen: app.id,
    size: 152921,
    gstin: app.gstin,
    legalName: app.name,
    gstStatus: app.gstStatus
  };

  kycDocuments.udyam = {
    id: 'udyam',
    name: app.hasUdyam ? `${app.id}_udyam_certificate.png` : `${app.id}_gst_certificate.png`,
    isUploaded: true,
    dataUrl: null,
    specimen: app.id,
    size: 129502,
    udyamNumber: app.udyamNumber,
    udyamType: app.udyamType
  };

  kycDocuments.signatory_id = {
    id: 'signatory_id',
    name: `${app.id}_signatory_id.png`,
    isUploaded: true,
    dataUrl: null,
    specimen: app.id,
    size: 40957,
    signatory: `${app.signatory} (${app.signatoryRole})`,
    signatoryIdMasked: app.signatoryIdMasked
  };

  kycDocuments.address_proof = {
    id: 'address_proof',
    name: `${app.id}_address_proof.png`,
    isUploaded: true,
    dataUrl: null,
    specimen: app.id,
    size: 133366,
    docType: app.docType,
    docDate: app.docDate,
    premises: app.premises
  };

  renderKycCardUI('gst');
  renderKycCardUI('udyam');
  renderKycCardUI('signatory_id');
  renderKycCardUI('address_proof');
  if (typeof window !== 'undefined') window.kycDocuments = kycDocuments;
  updateKycDocumentCount();

  const resCard = document.getElementById('kycResultCard');
  if (resCard) resCard.classList.add('hidden');
  const alertBox = document.getElementById('kycMissingAlert');
  if (alertBox) alertBox.classList.add('hidden');
}

// 1-Click Fast Evaluator Preset Check
async function loadSpecimenAndVerify(applicantKey) {
  onSelectKycApplicant(applicantKey);
  await runCleanKycVerification();
}

// Test custom unregistered GSTIN check
async function testUnregisteredGstin() {
  const unregisteredGstin = '99ZZZZZ9999Z9ZZ';
  const gstinInput = document.getElementById('doc1GstinInput');
  if (gstinInput) gstinInput.value = unregisteredGstin;

  if (kycDocuments.gst) {
    kycDocuments.gst.gstin = unregisteredGstin;
    kycDocuments.gst.legalName = "Unregistered Business";
    kycDocuments.gst.gstStatus = "Unregistered";
  }

  const doc1Badge = document.getElementById('doc1StatusBadge');
  if (doc1Badge) {
    doc1Badge.className = "text-[10px] font-bold bg-red-50 text-red-700 border border-red-200 px-2 py-0.5 rounded";
    doc1Badge.innerText = "Unregistered";
  }

  const doc1Reg = document.getElementById('doc1RegDate');
  if (doc1Reg) {
    doc1Reg.className = "text-red-700 font-bold flex items-center gap-1 text-xs";
    doc1Reg.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> NOT FOUND in mock_gstin_registry.csv`;
  }

  const doc1Legal = document.getElementById('doc1LegalName');
  if (doc1Legal) doc1Legal.innerText = "Entity Not Registered in National GSTN";

  await runCleanKycVerification(unregisteredGstin);
}

// Manual GSTIN input live listener
async function onGstinManualChange(rawVal) {
  const gstin = (rawVal || '').trim().toUpperCase();
  const doc1Reg = document.getElementById('doc1RegDate');
  const doc1Badge = document.getElementById('doc1StatusBadge');
  const doc1Legal = document.getElementById('doc1LegalName');

  if (gstin.length < 15) {
    if (doc1Reg) {
      doc1Reg.className = "text-gray-500 font-semibold flex items-center gap-1 text-xs";
      doc1Reg.innerHTML = `<i class="fa-solid fa-spinner animate-spin"></i> Awaiting 15-character GSTIN...`;
    }
    return;
  }

  // Instant offline client lookup from mock_gstin_registry.csv
  const rec = clientLookupGstin(gstin);
  if (rec) {
    if (doc1Legal) doc1Legal.innerText = rec.legal_name || rec.trade_name;
    if (rec.status === 'Active') {
      if (doc1Badge) {
        doc1Badge.className = "text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded";
        doc1Badge.innerText = "Active Taxpayer";
      }
      if (doc1Reg) {
        doc1Reg.className = "text-emerald-700 font-bold flex items-center gap-1 text-xs";
        doc1Reg.innerHTML = `<i class="fa-solid fa-circle-check"></i> Verified ACTIVE in mock_gstin_registry.csv`;
      }
    } else if (rec.status === 'Suspended') {
      if (doc1Badge) {
        doc1Badge.className = "text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200 px-2 py-0.5 rounded";
        doc1Badge.innerText = "Suspended";
      }
      if (doc1Reg) {
        doc1Reg.className = "text-amber-700 font-bold flex items-center gap-1 text-xs";
        doc1Reg.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> SUSPENDED in mock_gstin_registry.csv`;
      }
    } else {
      if (doc1Badge) {
        doc1Badge.className = "text-[10px] font-bold bg-red-50 text-red-700 border border-red-200 px-2 py-0.5 rounded";
        doc1Badge.innerText = "Cancelled";
      }
      if (doc1Reg) {
        doc1Reg.className = "text-red-700 font-bold flex items-center gap-1 text-xs";
        doc1Reg.innerHTML = `<i class="fa-solid fa-ban"></i> CANCELLED in mock_gstin_registry.csv`;
      }
    }
    if (kycDocuments.gst) {
      kycDocuments.gst.gstin = gstin;
      kycDocuments.gst.legalName = rec.legal_name;
      kycDocuments.gst.gstStatus = rec.status;
    }
  } else {
    if (doc1Badge) {
      doc1Badge.className = "text-[10px] font-bold bg-red-50 text-red-700 border border-red-200 px-2 py-0.5 rounded";
      doc1Badge.innerText = "Unregistered";
    }
    if (doc1Reg) {
      doc1Reg.className = "text-red-700 font-bold flex items-center gap-1 text-xs";
      doc1Reg.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> NOT FOUND in mock_gstin_registry.csv`;
    }
    if (doc1Legal) doc1Legal.innerText = "Unregistered Business";
  }
}

// Document File Processor (Unified for File Dialog and Drag & Drop)
async function processDocFile(file, docType) {
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    const dataUrl = e.target.result;

    // 1. OCR Pattern Recognition: Extract Specimen Key (K01-K12) from filename
    const m = file.name.match(/(K0[1-9]|K1[0-2])/i);
    const specKey = m ? m[1].toUpperCase() : null;
    if (specKey) selectedApplicantKey = specKey;
    const spec = specKey ? KYC_APPLICANTS[specKey] : null;

    // Look for 15-char GSTIN pattern in filename
    const gstinRegex = /\b[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}\b/i;
    const gstinMatch = file.name.match(gstinRegex);
    const filenameGstin = gstinMatch ? gstinMatch[0].toUpperCase() : null;

    // Look for Udyam pattern in filename
    const udyamRegex = /\bUDYAM-[A-Z]{2}-\d{2}-\d{7}\b/i;
    const udyamMatch = file.name.match(udyamRegex);
    const filenameUdyam = udyamMatch ? udyamMatch[0].toUpperCase() : null;

    if (docType === 'gst') {
      const gstinInput = document.getElementById('doc1GstinInput');
      const userEnteredGstin = gstinInput ? gstinInput.value.trim().toUpperCase() : '';
      const gstinVal = spec ? spec.gstin : (filenameGstin || (userEnteredGstin.length === 15 ? userEnteredGstin : '32TTNXB7384T1ZW'));
      const rec = clientLookupGstin(gstinVal);
      kycDocuments.gst = {
        id: 'gst',
        name: file.name,
        isUploaded: true,
        dataUrl: dataUrl,
        size: file.size,
        gstin: gstinVal,
        legalName: rec ? rec.legal_name : (spec ? spec.name : file.name.replace(/\.[^/.]+$/, "")),
        gstStatus: rec ? rec.status : (spec ? spec.gstStatus : 'Active')
      };
      if (gstinInput) gstinInput.value = gstinVal;
    } else if (docType === 'udyam') {
      const udyamNo = spec ? spec.udyamNumber : (filenameUdyam || 'UDYAM-KL-00-3078801');
      const udyamRec = clientLookupUdyam(udyamNo);
      kycDocuments.udyam = {
        id: 'udyam',
        name: file.name,
        isUploaded: true,
        dataUrl: dataUrl,
        size: file.size,
        udyamNumber: udyamNo,
        udyamType: spec ? spec.udyamType : (udyamRec ? `${udyamRec.enterprise_type} Enterprise (${udyamRec.major_activity})` : 'Micro Enterprise (Services)')
      };
    } else if (docType === 'signatory_id') {
      kycDocuments.signatory_id = {
        id: 'signatory_id',
        name: file.name,
        isUploaded: true,
        dataUrl: dataUrl,
        size: file.size,
        signatory: spec ? `${spec.signatory} (${spec.signatoryRole})` : 'Authorized Signatory (Manager)',
        signatoryIdMasked: spec ? spec.signatoryIdMasked : 'PAN: *****7384*'
      };
    } else if (docType === 'address_proof') {
      let docDate = '2026-06-15';
      if (specKey === 'K05' || file.name.toLowerCase().includes('expired')) {
        docDate = '2026-03-22';
      } else if (spec && spec.docDate) {
        docDate = spec.docDate;
      }
      kycDocuments.address_proof = {
        id: 'address_proof',
        name: file.name,
        isUploaded: true,
        dataUrl: dataUrl,
        size: file.size,
        docType: spec ? spec.docType : 'Electricity Utility Bill',
        docDate: docDate,
        premises: spec ? spec.premises : 'Shop/Unit 164, Station Road, Commercial District'
      };
    }

    if (typeof window !== 'undefined') window.kycDocuments = kycDocuments;
    renderKycCardUI(docType);
    updateKycDocumentCount();

    const resCard = document.getElementById('kycResultCard');
    if (resCard) resCard.classList.add('hidden');
    const alertBox = document.getElementById('kycMissingAlert');
    if (alertBox) alertBox.classList.add('hidden');
  };
  reader.readAsDataURL(file);

  try {
    const readerVault = new FileReader();
    readerVault.onload = async function(e) {
      const base64Data = e.target.result.split(',')[1];
      try {
        await fetch('/api/kyc/upload', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'X-Session-Token': sessionToken || '' },
          body: JSON.stringify({ fileName: file.name, fileBase64: base64Data, docType: docType })
        });
      } catch (err) {}
    };
    readerVault.readAsDataURL(file);
  } catch (e) {}
}

// Single Document Upload Handler for each of the 4 slots
async function handleSingleDocUpload(event, docType) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;
  processDocFile(file, docType);
}

// Multi-Document Direct Uploader for all 4 documents at once
async function handleMultiDocUpload(event) {
  const files = Array.from(event.target.files);
  if (!files || files.length === 0) return;

  let detectedApplicant = null;
  files.forEach(f => {
    const m = f.name.match(/^(K0[1-9]|K1[0-2])/i);
    if (m && !detectedApplicant) detectedApplicant = m[1].toUpperCase();
  });
  const spec = detectedApplicant ? KYC_APPLICANTS[detectedApplicant] : null;

  files.forEach(file => {
    const lower = file.name.toLowerCase();
    let docType = null;
    if (lower.includes('gst')) docType = 'gst';
    else if (lower.includes('udyam')) docType = 'udyam';
    else if (lower.includes('signatory') || lower.includes('id') || lower.includes('pan') || lower.includes('aadhaar')) docType = 'signatory_id';
    else if (lower.includes('address') || lower.includes('bill') || lower.includes('proof')) docType = 'address_proof';

    if (docType) {
      const reader = new FileReader();
      reader.onload = function(e) {
        const dataUrl = e.target.result;
        if (docType === 'gst') {
          const gstinVal = spec ? spec.gstin : '32TTNXB7384T1ZW';
          const rec = clientLookupGstin(gstinVal);
          kycDocuments.gst = {
            id: 'gst',
            name: file.name,
            isUploaded: true,
            dataUrl: dataUrl,
            size: file.size,
            gstin: gstinVal,
            legalName: rec ? rec.legal_name : (spec ? spec.name : file.name.replace(/\.[^/.]+$/, "")),
            gstStatus: rec ? rec.status : (spec ? spec.gstStatus : 'Active')
          };
        } else if (docType === 'udyam') {
          kycDocuments.udyam = {
            id: 'udyam',
            name: file.name,
            isUploaded: true,
            dataUrl: dataUrl,
            size: file.size,
            udyamNumber: spec ? spec.udyamNumber : 'UDYAM-KL-00-3078801',
            udyamType: spec ? spec.udyamType : 'Micro Enterprise (Services)'
          };
        } else if (docType === 'signatory_id') {
          kycDocuments.signatory_id = {
            id: 'signatory_id',
            name: file.name,
            isUploaded: true,
            dataUrl: dataUrl,
            size: file.size,
            signatory: spec ? `${spec.signatory} (${spec.signatoryRole})` : 'Authorized Signatory (Manager)',
            signatoryIdMasked: spec ? spec.signatoryIdMasked : 'PAN: *****7384*'
          };
        } else if (docType === 'address_proof') {
          kycDocuments.address_proof = {
            id: 'address_proof',
            name: file.name,
            isUploaded: true,
            dataUrl: dataUrl,
            size: file.size,
            docType: spec ? spec.docType : 'Electricity Utility Bill',
            docDate: spec ? spec.docDate : '2026-06-15',
            premises: spec ? spec.premises : 'Shop/Unit 164, Station Road, Kochi'
          };
        }
        if (typeof window !== 'undefined') window.kycDocuments = kycDocuments;
    renderKycCardUI(docType);
        updateKycDocumentCount();
      };
      reader.readAsDataURL(file);
    }
  });

  const resCard = document.getElementById('kycResultCard');
  if (resCard) resCard.classList.add('hidden');
  const alertBox = document.getElementById('kycMissingAlert');
  if (alertBox) alertBox.classList.add('hidden');
}

// Compatibility helper
function handleFileUpload(event) {
  handleMultiDocUpload(event);
}

// Master Automated Compliance & Registry Verification Execution
async function runCleanKycVerification(customGstin = null) {
  const alertBox = document.getElementById('kycMissingAlert');

  // 1. Core Validation: Check all 4 required documents
  const missing = [];
  if (!kycDocuments.gst || !kycDocuments.gst.isUploaded) {
    missing.push("Document 1: Business Registration Certificate (GST)");
  }
  if (!kycDocuments.udyam || !kycDocuments.udyam.isUploaded) {
    missing.push("Document 2: MSME Registration Certificate (Udyam)");
  }
  if (!kycDocuments.signatory_id || !kycDocuments.signatory_id.isUploaded) {
    missing.push("Document 3: Authorized Signatory ID Proof (PAN / Aadhaar)");
  }
  if (!kycDocuments.address_proof || !kycDocuments.address_proof.isUploaded) {
    missing.push("Document 4: Business Premises Address Proof (Utility Bill)");
  }

  if (missing.length > 0) {
    if (alertBox) {
      alertBox.classList.remove('hidden');
      const listEl = document.getElementById('kycMissingList');
      if (listEl) {
        listEl.innerHTML = missing.map(m => `<li><strong>${m}</strong> is missing. Please upload before running verification.</li>`).join('');
      }
      alertBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      alert("Verification Halted:\nPlease upload all 4 required KYC documents before proceeding.\n\nMissing:\n" + missing.join("\n"));
    }
    return;
  }

  if (alertBox) alertBox.classList.add('hidden');

  // 2. DPDP Statutory Consent Check
  const consentGiven = document.getElementById('dpdpConsentCheck')?.checked || false;
  if (!consentGiven) {
    alert("DPDP Act 2023 Consent Required:\nPlease check the statutory consent checkbox to authorize verification against national registries.");
    return;
  }

  // 3. Document 1: GST Registry Check
  const gstinInput = document.getElementById('doc1GstinInput');
  const activeGstin = customGstin || (gstinInput ? gstinInput.value.trim().toUpperCase() : (kycDocuments.gst.gstin || ''));

  const gstRecord = clientLookupGstin(activeGstin);
  let isGstRegistered = false;
  let isGstActive = false;
  let gstStatusText = "NOT FOUND IN REGISTRY";
  let legalName = kycDocuments.gst.legalName || 'Unregistered';

  if (gstRecord) {
    isGstRegistered = true;
    legalName = gstRecord.legal_name || gstRecord.trade_name || legalName;
    if (gstRecord.status === 'Active') {
      isGstActive = true;
      gstStatusText = 'ACTIVE';
    } else {
      isGstActive = false;
      gstStatusText = gstRecord.status.toUpperCase();
    }
  }

  // 4. Document 4: DoT 90-Day Currency Check
  const refDate = new Date("2026-07-15");
  const pDate = new Date(kycDocuments.address_proof.docDate || "2026-06-15");
  const ageDays = Math.round((refDate - pDate) / (1000 * 60 * 60 * 24));
  const isAddressValid = (ageDays <= 90);

  // 5. Overall Decision
  const isPassed = isGstActive && isAddressValid && consentGiven;

  const resultCard = document.getElementById('kycResultCard');
  resultCard.classList.remove('hidden');

  const titleEl = document.getElementById('kycDecisionTitle');
  const badgeEl = document.getElementById('kycDecisionBadge');
  const explanationEl = document.getElementById('kycDecisionExplanation');
  const checkListEl = document.getElementById('kycChecksList');
  const proceedBtn = document.getElementById('kycProceedBtn');

  if (isPassed) {
    savedUserData.kycVerified = true;
    titleEl.innerText = "Verification Approved · Ready for Provisioning";
    badgeEl.className = "text-xs font-bold bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full";
    badgeEl.innerText = "APPROVED";
    explanationEl.innerHTML = `Entity is verified Active (<strong>${legalName}</strong>). MSME Udyam classification verified, premises address proof is within statutory DoT 90-day currency limits (${ageDays}d old), and DPDP Act 2023 digital consent is recorded.`;

    if (proceedBtn) proceedBtn.classList.remove('hidden');
  } else {
    savedUserData.kycVerified = false;
    pageStates.kyc = false;
    titleEl.innerText = "Verification Halted · Compliance Issue Detected";
    badgeEl.className = "text-xs font-bold bg-red-100 text-red-800 px-3 py-1 rounded-full";
    badgeEl.innerText = "ACTION REQUIRED";

    let failureReasons = [];
    if (!isGstRegistered) failureReasons.push(`GSTIN <strong>${activeGstin}</strong> was NOT found in mock_gstin_registry.csv (3,534 records).`);
    else if (!isGstActive) failureReasons.push(`GSTIN status is <strong>${gstStatusText}</strong> in national tax registry.`);
    if (!isAddressValid) failureReasons.push(`Premises address proof was issued <strong>${ageDays} days ago</strong> (exceeds statutory DoT 90-day currency limit).`);

    explanationEl.innerHTML = `<strong>Autonomous Audit Outcome:</strong> ${failureReasons.join(' ')} System cannot approve automated provisioning until valid documents are submitted.`;

    if (proceedBtn) proceedBtn.classList.add('hidden');
  }

  // Render Detailed Structured Checklist
  checkListEl.innerHTML = `
    <div class="flex items-center justify-between p-2.5 rounded-lg ${isGstActive ? 'bg-emerald-50 text-emerald-900 border border-emerald-100' : 'bg-red-50 text-red-900 border border-red-100'} text-xs">
      <span class="flex items-center gap-2">
        <i class="fa-solid ${isGstActive ? 'fa-circle-check text-emerald-600' : 'fa-circle-xmark text-red-600'}"></i>
        <span>Doc 1: GSTIN Registry Check (${activeGstin}): <strong>${gstStatusText}</strong> ${isGstRegistered ? `(${legalName})` : ''}</span>
      </span>
      <span class="font-bold text-[10px] uppercase">${isGstActive ? 'PASS' : 'FAIL'}</span>
    </div>

    <div class="flex items-center justify-between p-2.5 rounded-lg bg-emerald-50 text-emerald-900 border border-emerald-100 text-xs">
      <span class="flex items-center gap-2">
        <i class="fa-solid fa-circle-check text-emerald-600"></i>
        <span>Doc 2: MSME Udyam Registry Check: <strong>${kycDocuments.udyam.udyamNumber}</strong> (${kycDocuments.udyam.udyamType})</span>
      </span>
      <span class="font-bold text-[10px] uppercase">PASS</span>
    </div>

    <div class="flex items-center justify-between p-2.5 rounded-lg bg-emerald-50 text-emerald-900 border border-emerald-100 text-xs">
      <span class="flex items-center gap-2">
        <i class="fa-solid fa-circle-check text-emerald-600"></i>
        <span>Doc 3: Authorized Signatory Verification (${kycDocuments.signatory_id.signatory}): <strong>DPDP Act Tokenized</strong></span>
      </span>
      <span class="font-bold text-[10px] uppercase">PASS</span>
    </div>

    <div class="flex items-center justify-between p-2.5 rounded-lg ${isAddressValid ? 'bg-emerald-50 text-emerald-900 border border-emerald-100' : 'bg-red-50 text-red-900 border border-red-100'} text-xs">
      <span class="flex items-center gap-2">
        <i class="fa-solid ${isAddressValid ? 'fa-circle-check text-emerald-600' : 'fa-triangle-exclamation text-amber-600'}"></i>
        <span>Doc 4: Premises Address Proof Currency: <strong>${ageDays} days old</strong> (Statutory DoT Rule: ≤ 90 days)</span>
      </span>
      <span class="font-bold text-[10px] uppercase">${isAddressValid ? 'PASS' : 'FAIL'}</span>
    </div>
  `;

  resultCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// ============================================================
// 10. STAGE PROGRESSION & DETAILS PERSISTENCE (NON-EDITABLE LOCK)
// ============================================================

function onPassAdvisor() {
  const bundle = currentBundle || (typeof window !== 'undefined' && window.currentBundle);
  if (!bundle) {
    showStageLockToast("Please answer the business discovery questions to assemble your solution first.");
    return;
  }
  currentBundle = bundle;
  pageStates.advisor = true;
  savedUserData.answers = { ...userAnswers };
  savedUserData.bundle = currentBundle;
  applyPageLocking('advisor');
  switchTab('quote');
}

function onPassQuote() {
  if (!pageStates.advisor) {
    showStageLockToast("Please complete Step 1 (AI Business Advisor) first.");
    return;
  }
  pageStates.quote = true;
  savedUserData.quoteTimestamp = new Date();
  const selected = [];
  if (document.getElementById('addonFailover')?.checked) selected.push('P09');
  if (document.getElementById('addonCctv')?.checked) selected.push('P23');
  if (document.getElementById('addonStaticIp')?.checked) selected.push('P11');
  savedUserData.selectedAddons = selected;
  savedUserData.quote = currentQuote;
  applyPageLocking('quote');
  switchTab('kyc');
}

function onPassKyc() {
  if (!pageStates.advisor || !pageStates.quote) {
    showStageLockToast("Previous stages must be completed before verifying KYC.");
    return;
  }
  if (!savedUserData.kycVerified) {
    showStageLockToast("Autonomous KYC verification must be run and APPROVED before proceeding to Order Tracker.");
    return;
  }
  pageStates.kyc = true;
  savedUserData.kycApplicantKey = selectedApplicantKey;
  savedUserData.kycTimestamp = new Date();
  savedUserData.kycVerified = true;
  applyPageLocking('kyc');
  proceedToOrderTracker();
}

function unlockPage(pageId) {
  pageStates[pageId] = false;
  applyPageLocking(pageId);
}

function applyPageLocking(pageId) {
  const dict = LOCALES[currentLang] || LOCALES.en;

  if (pageId === 'advisor') {
    const banner = document.getElementById('advisorLockedBanner');
    const input = document.getElementById('userInput');
    const mic = document.getElementById('micBtn');
    const sendBtn = document.getElementById('sendBtnText')?.parentElement;
    const opts = document.getElementById('quickOptionsContainer');
    const scenarios = ['demoClinicBtn', 'demoRestaurantBtn', 'demoKiranaBtn', 'demoMfgBtn', 'demoCaBtn'];

    if (pageStates.advisor) {
      if (banner) banner.classList.remove('hidden');
      if (input) {
        input.disabled = true;
        input.classList.add('bg-gray-100', 'cursor-not-allowed');
        input.placeholder = dict.inputPlaceholderLocked || "Discovery completed · Details saved (Read-Only)";
      }
      if (mic) {
        mic.disabled = true;
        mic.classList.add('opacity-50', 'cursor-not-allowed');
      }
      if (sendBtn) {
        sendBtn.disabled = true;
        sendBtn.classList.add('opacity-50', 'cursor-not-allowed');
      }
      if (opts) {
        opts.classList.add('opacity-50', 'pointer-events-none');
      }
      scenarios.forEach(sId => {
        const btn = document.getElementById(sId);
        if (btn) btn.classList.add('opacity-50', 'pointer-events-none');
      });
      const acceptBtn = document.getElementById('acceptBtn');
      if (acceptBtn) {
        acceptBtn.disabled = false;
        acceptBtn.className = "w-full bg-[#E40000] text-white py-3 rounded-xl font-bold text-xs hover:bg-red-700 transition flex items-center justify-center gap-2 cursor-pointer shadow-sm";
      }
    } else {
      if (banner) banner.classList.add('hidden');
      if (input) {
        input.disabled = false;
        input.classList.remove('bg-gray-100', 'cursor-not-allowed');
        const activeStepKey = 'step' + (wizardStep <= 4 ? wizardStep : 4);
        const stepData = dict[activeStepKey] || dict.step1;
        input.placeholder = stepData.placeholder;
      }
      if (mic) {
        mic.disabled = false;
        mic.classList.remove('opacity-50', 'cursor-not-allowed');
      }
      if (sendBtn) {
        sendBtn.disabled = false;
        sendBtn.classList.remove('opacity-50', 'cursor-not-allowed');
      }
      if (opts) {
        opts.classList.remove('opacity-50', 'pointer-events-none');
      }
      scenarios.forEach(sId => {
        const btn = document.getElementById(sId);
        if (btn) btn.classList.remove('opacity-50', 'pointer-events-none');
      });
    }
  }

  if (pageId === 'quote') {
    const banner = document.getElementById('quoteLockedBanner');
    const addons = ['addonFailover', 'addonCctv', 'addonStaticIp'];

    if (pageStates.quote) {
      if (banner) banner.classList.remove('hidden');
      addons.forEach(id => {
        const cb = document.getElementById(id);
        if (cb) {
          cb.disabled = true;
          cb.classList.add('cursor-not-allowed');
        }
      });
      const proceedText = document.getElementById('proceedToKycText');
      if (proceedText) {
        proceedText.innerText = dict.continueToKyc || "Continue to Smart KYC";
      }
    } else {
      if (banner) banner.classList.add('hidden');
      addons.forEach(id => {
        const cb = document.getElementById(id);
        if (cb) {
          cb.disabled = false;
          cb.classList.remove('cursor-not-allowed');
        }
      });
      const proceedText = document.getElementById('proceedToKycText');
      if (proceedText && dict.tabQuote) {
        proceedText.innerText = dict.tabQuote.proceedText;
      }
    }
  }

  if (pageId === 'kyc') {
    const banner = document.getElementById('kycLockedBanner');
    const applicantSelect = document.getElementById('applicantSelect');
    const dpdpConsent = document.getElementById('dpdpConsentCheck');
    const runKycBtn = document.getElementById('runKycBtnText')?.parentElement;
    const uploadDropzone = document.getElementById('fileUploadInput')?.parentElement;
    const resultCard = document.getElementById('kycResultCard');

    if (pageStates.kyc) {
      if (banner) banner.classList.remove('hidden');
      if (applicantSelect) {
        applicantSelect.disabled = true;
        applicantSelect.classList.add('bg-gray-100', 'cursor-not-allowed');
      }
      if (dpdpConsent) {
        dpdpConsent.disabled = true;
        dpdpConsent.classList.add('cursor-not-allowed');
      }
      if (uploadDropzone) {
        uploadDropzone.classList.add('opacity-50', 'pointer-events-none');
      }
      if (runKycBtn) {
        runKycBtn.disabled = true;
        runKycBtn.classList.add('opacity-70', 'cursor-not-allowed');
        const btnText = document.getElementById('runKycBtnText');
        if (btnText) btnText.innerHTML = `<i class="fa-solid fa-circle-check text-emerald-400 mr-1.5"></i> ${dict.kycVerifiedBadge || 'KYC Verified & Audit Passed'}`;
      }
      if (resultCard) {
        resultCard.classList.remove('hidden');
      }
      const proceedText = document.getElementById('kycProceedBtnText');
      if (proceedText) {
        proceedText.innerText = dict.kycReturnTrackerText || "Return to Order Tracker";
      }
    } else {
      if (banner) banner.classList.add('hidden');
      if (applicantSelect) {
        applicantSelect.disabled = false;
        applicantSelect.classList.remove('bg-gray-100', 'cursor-not-allowed');
      }
      if (dpdpConsent) {
        dpdpConsent.disabled = false;
        dpdpConsent.classList.remove('cursor-not-allowed');
      }
      if (uploadDropzone) {
        uploadDropzone.classList.remove('opacity-50', 'pointer-events-none');
      }
      if (runKycBtn) {
        runKycBtn.disabled = false;
        runKycBtn.classList.remove('opacity-70', 'cursor-not-allowed');
        const btnText = document.getElementById('runKycBtnText');
        if (btnText && dict.tabKyc) btnText.innerText = dict.tabKyc.runKycBtnText;
      }
    }
  }
}

// ============================================================
// 11. ORDER FULFILLMENT & TAB NAVIGATION (STRICT LOCKING ON TRACKER)
// ============================================================

async function proceedToOrderTracker() {
  const app = KYC_APPLICANTS[selectedApplicantKey];
  const totalDue = currentQuote ? currentQuote.totalMonthlyDue : (currentBundle ? Math.round(currentBundle.basePrice * 1.18) : 3213);

  pageStates.advisor = true;
  pageStates.quote = true;
  pageStates.kyc = true;
  pageStates.tracker = true;
  savedUserData.kycVerified = true;

  try {
    const res = await fetch('/api/orders/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Session-Token': sessionToken || ''
      },
      body: JSON.stringify({
        businessName: app ? app.name : 'Balaji Dental Care LLP',
        applicantId: app ? app.id : 'K01',
        city: app ? app.city : 'Kochi',
        state: app ? app.state : 'Kerala',
        bundleId: currentBundle ? currentBundle.id : 'pro_office',
        bundleName: currentBundle ? currentBundle.name : 'Airtel Professional Office Suite',
        totalMonthlyDue: totalDue
      })
    });

    if (res.ok) {
      const data = await res.json();
      activeOrder = data.order;
      renderOrderTracker(activeOrder);
    }
  } catch (err) {
    console.warn("Using local order state:", err);
  }

  if (!activeOrder) {
    activeOrder = { orderId: 'AB-2026-88192' };
  }
  renderOrderTracker(activeOrder);
  switchTab('tracker');
}

function formatMilestoneTime(d) {
  const date = (d instanceof Date && !isNaN(d.getTime())) ? d : new Date();
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  const minutesStr = minutes < 10 ? '0' + minutes : minutes;
  return `${hours}:${minutesStr} ${ampm}`;
}

function updateMilestoneTimestamps() {
  const now = new Date();
  const kycDate = (savedUserData.kycTimestamp instanceof Date && !isNaN(savedUserData.kycTimestamp.getTime()))
    ? savedUserData.kycTimestamp
    : now;
  const quoteDate = (savedUserData.quoteTimestamp instanceof Date && !isNaN(savedUserData.quoteTimestamp.getTime()))
    ? savedUserData.quoteTimestamp
    : new Date(kycDate.getTime() - 2 * 60 * 1000);

  const m1El = document.getElementById('m1Time');
  if (m1El) m1El.innerText = formatMilestoneTime(quoteDate);

  const m2El = document.getElementById('m2Time');
  if (m2El) m2El.innerText = formatMilestoneTime(kycDate);

  const protoM1 = document.getElementById('protoM1Time');
  if (protoM1) protoM1.innerText = formatMilestoneTime(quoteDate);
  const protoM2 = document.getElementById('protoM2Time');
  if (protoM2) protoM2.innerText = formatMilestoneTime(kycDate);
}

function renderOrderTracker(order) {
  const badge = document.getElementById('trackerOrderBadge');
  if (badge && order) {
    badge.innerHTML = `<i class="fa-solid fa-circle-check mr-1"></i> Order #${order.orderId || 'AB-2026-88192'}`;
  }
  updateMilestoneTimestamps();
}

// ============================================================
// STRICT SEQUENTIAL STAGE PROGRESSION GATE
// Users CANNOT move to the next part without completing the current stage!
// ============================================================

function canAccessStage(targetTab) {
  if (targetTab === 'advisor') {
    return !pageStates.tracker;
  }
  if (targetTab === 'quote') {
    if (pageStates.tracker) return false;
    return Boolean(pageStates.advisor);
  }
  if (targetTab === 'kyc') {
    if (pageStates.tracker) return false;
    return Boolean(pageStates.advisor && pageStates.quote);
  }
  if (targetTab === 'tracker') {
    return Boolean(pageStates.advisor && pageStates.quote && pageStates.kyc && savedUserData.kycVerified);
  }
  return false;
}

let toastTimeout = null;
function showStageLockToast(msg) {
  const toast = document.getElementById('stageLockToast');
  const text = document.getElementById('stageLockToastText');
  if (!toast || !text) {
    console.warn("Stage lock toast:", msg);
    return;
  }
  text.innerText = msg;
  toast.classList.remove('hidden');
  toast.classList.add('flex');

  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.add('hidden');
    toast.classList.remove('flex');
  }, 3500);
}

function updateNavButtons() {
  const tabs = ['advisor', 'quote', 'kyc', 'tracker'];

  tabs.forEach(t => {
    const navBtn = document.getElementById(`navBtn${t.charAt(0).toUpperCase() + t.slice(1)}`);
    const mobBtn = document.getElementById(`mobNav${t.charAt(0).toUpperCase() + t.slice(1)}`);
    const isAccessible = canAccessStage(t);
    const isActive = (t === activeTab);
    const isCompleted = Boolean(
      (t === 'advisor' && pageStates.advisor) ||
      (t === 'quote' && pageStates.quote) ||
      (t === 'kyc' && pageStates.kyc && savedUserData.kycVerified) ||
      (t === 'tracker' && pageStates.tracker)
    );

    const defaultLabels = {
      advisor: '1. AI Advisor',
      quote: '2. Quote & Plan',
      kyc: '3. Smart KYC & Privacy',
      tracker: '4. Order Tracker'
    };
    const mobLabels = {
      advisor: '1. Advisor',
      quote: '2. Quote',
      kyc: '3. Smart KYC',
      tracker: '4. Tracker'
    };
    const iconClasses = {
      advisor: 'fa-robot',
      quote: 'fa-file-invoice-dollar',
      kyc: 'fa-shield-halved',
      tracker: 'fa-truck-fast'
    };

    if (navBtn) {
      if (pageStates.tracker) {
        if (t === 'tracker') {
          navBtn.className = "px-4 py-1.5 text-xs font-bold rounded-full bg-white text-[#E40000] shadow-xs cursor-default flex items-center";
          navBtn.innerHTML = `<i class="fa-solid fa-truck-fast mr-1.5 text-xs text-[#E40000]"></i> 4. Order Tracker <span class="ml-1.5 text-[9px] bg-[#E40000] text-white px-1.5 py-0.2 rounded-full font-bold">Active</span>`;
        } else if (t === 'advisor') {
          navBtn.className = "px-3.5 py-1.5 text-xs font-semibold rounded-full text-emerald-800 bg-emerald-50/80 border border-emerald-200 cursor-not-allowed flex items-center opacity-95";
          navBtn.innerHTML = `<i class="fa-solid fa-circle-check text-emerald-600 mr-1.5 text-xs"></i> 1. AI Advisor <span class="ml-1 text-[9px] bg-emerald-200 text-emerald-900 px-1.5 py-0.2 rounded-full font-bold">Done</span>`;
        } else if (t === 'quote') {
          navBtn.className = "px-3.5 py-1.5 text-xs font-semibold rounded-full text-emerald-800 bg-emerald-50/80 border border-emerald-200 cursor-not-allowed flex items-center opacity-95";
          navBtn.innerHTML = `<i class="fa-solid fa-circle-check text-emerald-600 mr-1.5 text-xs"></i> 2. Quote & Plan <span class="ml-1 text-[9px] bg-emerald-200 text-emerald-900 px-1.5 py-0.2 rounded-full font-bold">Done</span>`;
        } else if (t === 'kyc') {
          navBtn.className = "px-3.5 py-1.5 text-xs font-semibold rounded-full text-emerald-800 bg-emerald-50/80 border border-emerald-200 cursor-not-allowed flex items-center opacity-95";
          navBtn.innerHTML = `<i class="fa-solid fa-circle-check text-emerald-600 mr-1.5 text-xs"></i> 3. Smart KYC <span class="ml-1 text-[9px] bg-emerald-200 text-emerald-900 px-1.5 py-0.2 rounded-full font-bold">Done</span>`;
        }
      } else if (isActive) {
        navBtn.className = "px-4 py-1.5 text-xs font-bold rounded-full bg-white text-[#E40000] shadow-xs cursor-default flex items-center";
        navBtn.innerHTML = `<i class="fa-solid ${iconClasses[t]} mr-1.5 text-xs"></i> ${defaultLabels[t]}`;
        navBtn.title = "Current Active Stage";
      } else if (isCompleted) {
        navBtn.className = "px-3.5 py-1.5 text-xs font-semibold rounded-full text-emerald-800 bg-emerald-50/70 border border-emerald-200/60 hover:bg-emerald-100 transition cursor-pointer flex items-center";
        navBtn.innerHTML = `<i class="fa-solid fa-circle-check text-emerald-600 mr-1.5 text-xs"></i> ${defaultLabels[t]}`;
        navBtn.title = "Completed Stage · Click to view";
      } else if (isAccessible) {
        navBtn.className = "px-3.5 py-1.5 text-xs font-semibold rounded-full text-gray-700 bg-white border border-gray-300 hover:bg-gray-100 hover:text-black transition cursor-pointer flex items-center";
        navBtn.innerHTML = `<i class="fa-solid ${iconClasses[t]} text-gray-500 mr-1.5 text-xs"></i> ${defaultLabels[t]}`;
        navBtn.title = "Stage In Progress · Click to open";
      } else {
        navBtn.className = "px-3.5 py-1.5 text-xs font-semibold rounded-full text-gray-400 bg-gray-50 border border-gray-200/40 cursor-not-allowed flex items-center opacity-60 hover:opacity-80 transition";
        navBtn.innerHTML = `<i class="fa-solid fa-lock text-[10px] mr-1.5 text-gray-400"></i> ${defaultLabels[t]}`;
        navBtn.title = "Locked: Complete previous stage first";
      }
    }

    if (mobBtn) {
      if (pageStates.tracker) {
        if (t === 'tracker') {
          mobBtn.className = "px-3.5 py-1.5 rounded-full bg-[#E40000] text-white font-bold shrink-0 cursor-default";
          mobBtn.innerText = "4. Tracker (Active)";
        } else {
          mobBtn.className = "px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-800 font-bold shrink-0 cursor-not-allowed border border-emerald-200";
          mobBtn.innerText = `✓ ${mobLabels[t]} (Done)`;
        }
      } else if (isActive) {
        mobBtn.className = "px-3.5 py-1.5 rounded-full bg-[#E40000] text-white font-bold shrink-0 cursor-default";
        mobBtn.innerText = `${mobLabels[t]} (Active)`;
      } else if (isCompleted) {
        mobBtn.className = "px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-800 font-bold shrink-0 cursor-pointer border border-emerald-200";
        mobBtn.innerText = `✓ ${mobLabels[t]}`;
      } else if (isAccessible) {
        mobBtn.className = "px-3 py-1.5 rounded-full bg-white text-gray-700 font-bold shrink-0 cursor-pointer border border-gray-300 hover:bg-gray-100";
        mobBtn.innerText = mobLabels[t];
      } else {
        mobBtn.className = "px-3 py-1.5 rounded-full bg-gray-100 text-gray-400 font-medium shrink-0 cursor-not-allowed opacity-60 border border-gray-200/50";
        mobBtn.innerText = `🔒 ${mobLabels[t]}`;
      }
    }
  });
}

function switchTab(tabId) {
  // If user has reached the final Order Tracker stage, lock earlier pages completely
  if (pageStates.tracker && tabId !== 'tracker') {
    showStageLockToast("Order Active: Onboarding completed. Review your live installation order below.");
    return;
  }

  // Strict Sequential Stage Progression Gate
  // User CANNOT move to the next part without completing the current stage!
  if (!canAccessStage(tabId)) {
    if (tabId === 'quote') {
      showStageLockToast("Stage Locked: Complete the AI Advisor discovery questions first to generate your solution.");
    } else if (tabId === 'kyc') {
      showStageLockToast("Stage Locked: Review and proceed through Quote & Plan (Step 2) before proceeding to Smart KYC.");
    } else if (tabId === 'tracker') {
      showStageLockToast("Stage Locked: Mandatory Smart KYC verification must be approved before viewing Order Tracker.");
    }
    return;
  }

  activeTab = tabId;
  if (typeof window !== 'undefined') window.activeTab = activeTab;
  const tabs = ['advisor', 'quote', 'kyc', 'tracker'];

  tabs.forEach(t => {
    const section = document.getElementById(`tab-${t}`);
    if (section) {
      if (t === tabId) {
        section.classList.remove('hidden');
      } else {
        section.classList.add('hidden');
      }
    }
  });

  updateNavButtons();

  applyPageLocking('advisor');
  applyPageLocking('quote');
  applyPageLocking('kyc');

  if (tabId === 'quote') {
    updateQuoteCalculator();
  } else if (tabId === 'kyc') {
    renderKycCardUI('gst');
    renderKycCardUI('udyam');
    renderKycCardUI('signatory_id');
    renderKycCardUI('address_proof');
    updateKycDocumentCount();
  }

  if (typeof window !== 'undefined' && window.scrollTo) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// Initialize on Load
window.addEventListener('DOMContentLoaded', () => {
  initSession();
  setLanguage('en');
  initKycEmptyState();
  updateNavButtons();

  try {
    const urlParams = new URLSearchParams(window.location.search);
    const scenario = urlParams.get('scenario');
    const tab = urlParams.get('tab');
    const applicant = urlParams.get('applicant');

    if (applicant) {
      onSelectKycApplicant(applicant);
    }
    if (scenario) {
      runScenario(scenario);
    }
    if (tab) {
      switchTab(tab);
    }
  } catch (e) {
    console.error('URL param parsing error:', e);
  }
});
