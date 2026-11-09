const fs = require('fs');
const path = require('path');
const vm = require('vm');

// Mock DOM
const dom = {
  elements: {},
  getElementById(id) {
    if (!this.elements[id]) {
      this.elements[id] = {
        id,
        value: '',
        innerText: '',
        innerHTML: '',
        className: '',
        style: {},
        disabled: false,
        classList: {
          classes: new Set(),
          add(c) { this.classes.add(c); },
          remove(c) { this.classes.delete(c); },
          contains(c) { return this.classes.has(c); }
        },
        scrollIntoView() {},
        parentElement: null
      };
    }
    return this.elements[id];
  }
};

const sandbox = {
  window: {
    addEventListener: () => {},
    location: { href: 'http://localhost:3000' },
    scrollTo: () => {}
  },
  document: dom,
  console: console,
  setTimeout: setTimeout,
  clearTimeout: clearTimeout,
  fetch: async () => ({ ok: false }),
  alert: (msg) => { sandbox.lastAlert = msg; },
  lastAlert: null,
  sessionToken: 'test-token',
  FileReader: class {
    readAsDataURL(file) {
      setTimeout(() => {
        this.onload({ target: { result: 'data:image/png;base64,mockImageData' } });
      }, 5);
    }
  }
};

const registryCode = fs.readFileSync(path.join(__dirname, '..', 'public', 'mock_registry_data.js'), 'utf8');
const localesCode = fs.readFileSync(path.join(__dirname, '..', 'public', 'locales.js'), 'utf8');
const appCode = fs.readFileSync(path.join(__dirname, '..', 'public', 'app.js'), 'utf8');

vm.createContext(sandbox);
vm.runInContext(registryCode, sandbox);
vm.runInContext(localesCode, sandbox);
vm.runInContext(appCode, sandbox);

console.log('===============================================================');
console.log(' TESTING STRICT SEQUENTIAL STAGE PROGRESSION GATE');
console.log('===============================================================');

const callFn = (name, ...args) => (sandbox[name] || sandbox.window[name])(...args);
const getStates = () => sandbox.window.pageStates || sandbox.pageStates;
const getActiveTab = () => sandbox.window.activeTab || sandbox.activeTab;

let passCount = 0;
function assert(cond, msg) {
  if (!cond) {
    console.error(`[FAIL] ${msg}`);
    process.exit(1);
  }
  console.log(`  [PASS] ${msg}`);
  passCount++;
}

// 1. Initial State: On Step 1 (Advisor), all future stages must be locked
assert(getStates().advisor === false, 'Stage 1 starts as incomplete (advisor: false)');
assert(getStates().quote === false, 'Stage 2 starts as locked (quote: false)');
assert(getStates().kyc === false, 'Stage 3 starts as locked (kyc: false)');
assert(getStates().tracker === false, 'Stage 4 starts as locked (tracker: false)');

assert(callFn('canAccessStage', 'advisor') === true, 'Stage 1 is accessible initially');
assert(callFn('canAccessStage', 'quote') === false, 'Stage 2 is inaccessible initially');
assert(callFn('canAccessStage', 'kyc') === false, 'Stage 3 is inaccessible initially');
assert(callFn('canAccessStage', 'tracker') === false, 'Stage 4 is inaccessible initially');

// 2. Attempting to skip ahead from Step 1 must be blocked
callFn('switchTab', 'quote');
assert(getActiveTab() === 'advisor', 'Blocked: Cannot jump to Quote & Plan without passing Advisor');
assert(dom.getElementById('stageLockToastText').innerText.includes('Stage Locked'), 'Toast displayed for blocked Quote jump');

callFn('switchTab', 'kyc');
assert(getActiveTab() === 'advisor', 'Blocked: Cannot jump to Smart KYC without passing Advisor');

callFn('switchTab', 'tracker');
assert(getActiveTab() === 'advisor', 'Blocked: Cannot jump to Order Tracker without passing Advisor');

// 3. Complete Stage 1 (AI Advisor)
sandbox.window.currentBundle = { id: 'pro_office', name: 'Airtel Pro Office', basePrice: 2999 };
callFn('onPassAdvisor');
assert(getStates().advisor === true, 'Stage 1 marked as completed after onPassAdvisor');
assert(getActiveTab() === 'quote', 'Smoothly advanced to Step 2 (Quote & Plan)');
assert(callFn('canAccessStage', 'quote') === true, 'Stage 2 is now accessible');

// 4. On Step 2 (Quote & Plan): Cannot jump to Step 3 or Step 4
callFn('switchTab', 'kyc');
assert(getActiveTab() === 'quote', 'Blocked: Cannot jump to Smart KYC without passing Quote & Plan');

callFn('switchTab', 'tracker');
assert(getActiveTab() === 'quote', 'Blocked: Cannot jump to Order Tracker without passing Quote & Plan');

// Can view earlier completed Step 1
callFn('switchTab', 'advisor');
assert(getActiveTab() === 'advisor', 'Allowed: Can view completed earlier Step 1 (AI Advisor)');
callFn('switchTab', 'quote');
assert(getActiveTab() === 'quote', 'Allowed: Can return to Step 2 (Quote & Plan)');

// 5. Complete Stage 2 (Quote & Plan)
callFn('onPassQuote');
assert(getStates().quote === true, 'Stage 2 marked as completed after onPassQuote');
assert(getActiveTab() === 'kyc', 'Smoothly advanced to Step 3 (Smart KYC)');
assert(callFn('canAccessStage', 'kyc') === true, 'Stage 3 is now accessible');

// 6. On Step 3 (Smart KYC): Cannot jump to Step 4 without KYC verification
callFn('switchTab', 'tracker');
assert(getActiveTab() === 'kyc', 'Blocked: Cannot jump to Order Tracker without passing KYC verification');

// 7. Verify KYC and Complete Stage 3
callFn('onSelectKycApplicant', 'K01');
dom.getElementById('dpdpConsentCheck').checked = true;
callFn('runCleanKycVerification');
const getUserData = () => sandbox.window.savedUserData || sandbox.savedUserData;
assert(getUserData().kycVerified === true, 'KYC verification marked verified in savedUserData');

callFn('onPassKyc');
assert(getStates().kyc === true, 'Stage 3 marked as completed after onPassKyc');

setTimeout(() => {
  assert(getStates().tracker === true, 'Stage 4 marked active on order fulfillment');
  assert(getActiveTab() === 'tracker', 'Smoothly advanced to Step 4 (Order Tracker)');

  // 8. On Step 4 (Order Tracker): Earlier stages are strictly non-editable and locked from backward toggle
  callFn('switchTab', 'advisor');
  assert(getActiveTab() === 'tracker', 'Strict Lock: Cannot toggle back to Advisor once on Order Tracker');

  callFn('switchTab', 'quote');
  assert(getActiveTab() === 'tracker', 'Strict Lock: Cannot toggle back to Quote once on Order Tracker');

  callFn('switchTab', 'kyc');
  assert(getActiveTab() === 'tracker', 'Strict Lock: Cannot toggle back to KYC once on Order Tracker');

  console.log('\n===============================================================');
  console.log(` ALL ${passCount} STAGE PROGRESSION GATE ASSERTIONS PASSED!`);
  console.log('===============================================================');
}, 20);
