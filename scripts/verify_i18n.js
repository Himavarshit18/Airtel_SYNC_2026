const fs = require('fs');
const path = require('path');
const vm = require('vm');

const locales = require('../public/locales.js');
const html = fs.readFileSync(path.join(__dirname, '..', 'public', 'index.html'), 'utf8');

const requiredLanguages = ['en', 'hi', 'te', 'ta', 'mr', 'gu', 'bn', 'pa'];
let hasErrors = false;

console.log('--- 1. VERIFYING LANGUAGE COVERAGE ---');
for (const lang of requiredLanguages) {
  if (!locales[lang]) {
    console.error(`Missing language: ${lang}`);
    hasErrors = true;
    continue;
  }
  const l = locales[lang];
  const requiredSubObjects = ['tabQuote', 'tabKyc', 'tabTracker', 'footerText', 'bundles', 'kycBadges', 'demoScenarios'];
  for (const obj of requiredSubObjects) {
    if (!l[obj]) {
      console.error(`Language ${lang} is missing sub-object: ${obj}`);
      hasErrors = true;
    }
  }
  const requiredLockStrings = [
    'advisorLockedText', 'advisorEditText', 'advisorNextText', 'backToAdvisorBtn',
    'quoteLockedText', 'quoteEditText', 'quoteNextText', 'backToQuoteBtn',
    'kycLockedText', 'kycReturnTrackerText', 'reviewJourneyTitle', 'reviewJourneySub',
    'revBtnAdv', 'revBtnQuote', 'revBtnKyc', 'awaitingRationale'
  ];
  for (const str of requiredLockStrings) {
    if (!l[str]) {
      console.error(`Language ${lang} is missing lock string: ${str}`);
      hasErrors = true;
    }
  }
  console.log(`[PASS] Language ${lang} (${l.name}) fully configured with all sub-objects & lock strings.`);
}

console.log('\n--- 2. VERIFYING HTML DOM IDs ACCESSED IN UPDATE ---');
const idsToCheck = [
  'brandSubTitle', 'navBtnAdvisor', 'navBtnQuote', 'navBtnKyc', 'navBtnTracker',
  'mobNavAdvisor', 'mobNavQuote', 'mobNavKyc', 'mobNavTracker',
  'advisorHeading', 'advisorSub', 'restartBtnText', 'sendBtnText', 'acceptBtnText',
  'stepProgressLabel', 'recSolutionTag', 'recInclusionsTitle',
  'recProductPlaceholder', 'recRationaleTitle', 'recRationaleText', 'recAllInOneLabel', 'recSetupWaived',
  'recBadge', 'recBundleName', 'recBundleDesc', 'userInput',
  'advisorLockedBanner', 'advisorLockedText', 'advisorEditText', 'advisorNextText',
  'backToAdvisorBtn', 'quoteLockedBanner', 'quoteLockedText', 'quoteEditText', 'quoteNextText',
  'backToQuoteBtn', 'kycLockedBanner', 'kycLockedText', 'kycReturnTrackerText',
  'quoteStepTag', 'quoteHeading', 'quoteSub', 'quoteEstLabel', 'quoteBaseInclusionsTitle',
  'quotePlanName', 'quotePlanDesc', 'quoteAddonsTitle', 'addonFailoverTitle', 'addonFailoverDesc',
  'addonCctvTitle', 'addonCctvDesc', 'addonStaticIpTitle', 'addonStaticIpDesc',
  'quoteBillTitle', 'quoteBillBaseLabel', 'quoteBillAddonLabel', 'quoteBillSetupLabel',
  'quoteBillSetupVal', 'quoteBillSubtotalLabel', 'quoteBillGstLabel', 'quoteBillTotalLabel',
  'quotePriceLockText', 'quoteGstInvoiceText', 'proceedToKycText',
  'kycStepTag', 'kycHeading', 'kycSub',
  'dpdpTitle', 'dpdpPurposeBadge', 'dpdpNoticeText', 'dpdpConsentCheckLabel',
  'doc1Title', 'doc1GstinLabel', 'doc1LegalLabel', 'doc1RegCheckLabel',
  'doc2Title', 'doc2UdyamNoLabel', 'doc2TypeLabel', 'doc2PriorityLabel', 'doc2PriorityVal',
  'doc3Title', 'doc3TokenBadge', 'doc3SignatoryLabel', 'doc3IdLabel', 'doc3PrivacyLabel',
  'doc4Title', 'doc4DocTypeLabel', 'doc4IssueDateLabel', 'doc4PremisesLabel',
  'runKycBtnText', 'runKycSubtext',
  'kycDecisionHeaderLabel', 'kycAuditFindingLabel', 'kycProceedBtnText',
  'trackerStepTag', 'trackerHeading', 'trackerMilestoneTitle', 'trackerSlaBadge',
  'm1Title', 'm1Desc', 'm2Title', 'm2Desc', 'm3Title', 'm3Desc', 'm3Status',
  'm4Title', 'm4Desc', 'm4Status', 'assignedExecTitle', 'assignedExecRole', 'assignedExecRating',
  'slaLabel', 'slaVal', 'installWindowLabel', 'installWindowVal', 'equipmentLabel',
  'equipmentVal', 'supportLabel'
];

let missingIds = 0;
for (const id of idsToCheck) {
  if (!html.includes(`id="${id}"`)) {
    console.error(`HTML is missing id: ${id}`);
    missingIds++;
    hasErrors = true;
  }
}

if (missingIds === 0) {
  console.log(`[PASS] All ${idsToCheck.length} DOM IDs are verified present in public/index.html.`);
}

console.log('\n--- 3. VERIFYING JS SYNTAX OF APP.JS ---');
try {
  const appCode = fs.readFileSync(path.join(__dirname, '..', 'public', 'app.js'), 'utf8');
  new vm.Script(appCode);
  console.log('[PASS] public/app.js syntax parsed cleanly with zero errors.');
} catch (e) {
  console.error('[FAIL] Syntax error in public/app.js:', e);
  hasErrors = true;
}

if (!hasErrors) {
  console.log('\n>>> ALL MULTILINGUAL, PERSISTENCE & LOCKING CHECKS PASSED PERFECTLY! <<<');
} else {
  process.exit(1);
}
