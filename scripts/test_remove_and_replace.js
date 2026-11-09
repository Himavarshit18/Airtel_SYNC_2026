const fs = require('fs');
const path = require('path');
const vm = require('vm');

// Mock browser window and DOM
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
        classList: {
          classes: new Set(),
          add(c) { this.classes.add(c); },
          remove(c) { this.classes.delete(c); },
          contains(c) { return this.classes.has(c); }
        },
        scrollIntoView() {}
      };
    }
    return this.elements[id];
  }
};

const sandbox = {
  window: {
    addEventListener: () => {},
    location: { href: 'http://localhost:3000' }
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
        this.onload({ target: { result: 'data:image/png;base64,mockData' } });
      }, 5);
    }
  }
};

// Load registry data and app.js into VM context
const registryCode = fs.readFileSync(path.join(__dirname, '..', 'public', 'mock_registry_data.js'), 'utf8');
const localesCode = fs.readFileSync(path.join(__dirname, '..', 'public', 'locales.js'), 'utf8');
const appCode = fs.readFileSync(path.join(__dirname, '..', 'public', 'app.js'), 'utf8');

vm.createContext(sandbox);
vm.runInContext(registryCode, sandbox);
vm.runInContext(localesCode, sandbox);
vm.runInContext(appCode, sandbox);

console.log('===============================================================');
console.log(' TESTING REMOVE, REPLACE, & REGISTRY VERIFICATION SUITE');
console.log('===============================================================');

let passCount = 0;
function assert(condition, message) {
  if (!condition) {
    console.error(`[FAIL] ${message}`);
    process.exit(1);
  }
  console.log(`[PASS] ${message}`);
  passCount++;
}

// 1. Initial State: K01 loaded
const callFn = (name, ...args) => (sandbox[name] || sandbox.window[name])(...args);
const getDocs = () => sandbox.window.kycDocuments;

callFn('onSelectKycApplicant', 'K01');
assert(getDocs().gst !== null, 'Initial state: Doc 1 GST is loaded');
assert(getDocs().gst.gstin === '32TTNXB7384T1ZW', 'Doc 1 GSTIN matches K01 Balaji Dental Care');
assert(getDocs().address_proof.docDate === '2026-06-15', 'Doc 4 Address proof date is 2026-06-15 (valid <= 90d)');

// 2. Remove Doc 1
callFn('removeDoc', 'gst');
assert(getDocs().gst === null, 'After removeDoc("gst"): Doc 1 is null in state');
assert(dom.getElementById('doc1Dropzone').classList.contains('hidden') === false, 'Dropzone is visible for Doc 1');
assert(dom.getElementById('doc1UploadedView').classList.contains('hidden') === true, 'Uploaded view is hidden for Doc 1');
assert(dom.getElementById('uploadedCountBadge').innerText.includes('3 / 4'), 'Document count badge correctly reports 3 / 4 Uploaded (1 Missing)');

// 3. Attempt verification while Doc 1 is missing
callFn('runCleanKycVerification');
assert(dom.getElementById('kycMissingAlert').classList.contains('hidden') === false, 'Verification is HALTED: Missing alert is shown');
assert(dom.getElementById('kycMissingList').innerHTML.includes('Document 1: Business Registration Certificate (GST)'), 'Missing alert lists Document 1 as missing');
assert(dom.getElementById('kycResultCard').classList.contains('hidden') === true, 'Result card remains hidden when required document is missing');

// 4. Upload replacement file for Doc 1
const mockFileGst = { name: 'K01_gst_certificate.png', size: 152921 };
callFn('handleSingleDocUpload', { target: { files: [mockFileGst] } }, 'gst');

setTimeout(() => {
  assert(getDocs().gst !== null, 'Doc 1 replaced: Doc 1 is now present in state');
  assert(getDocs().gst.name === 'K01_gst_certificate.png', 'Doc 1 filename is updated');
  assert(dom.getElementById('doc1Dropzone').classList.contains('hidden') === true, 'Dropzone is hidden after upload');
  assert(dom.getElementById('doc1UploadedView').classList.contains('hidden') === false, 'Uploaded view is visible after upload');
  assert(dom.getElementById('uploadedCountBadge').innerText.includes('4 / 4'), 'Document count badge reports 4 / 4 Active');

  // 5. Run verification with all 4 valid documents
  dom.getElementById('dpdpConsentCheck').checked = true;
  callFn('runCleanKycVerification');

  assert(dom.getElementById('kycDecisionBadge').innerText === 'APPROVED', 'Verification Approved with clean K01 dossier');
  assert(dom.getElementById('kycDecisionTitle').innerText.includes('Approved'), 'Decision title confirms Approved');

  // 6. Test replacing with K11 (Suspended GSTIN)
  const mockFileK11 = { name: 'K11_gst_certificate.png', size: 140000 };
  callFn('handleSingleDocUpload', { target: { files: [mockFileK11] } }, 'gst');

  setTimeout(() => {
    assert(getDocs().gst.gstStatus === 'Suspended', 'Doc 1 registry lookup detected Suspended status for K11');
    callFn('runCleanKycVerification');
    assert(dom.getElementById('kycDecisionBadge').innerText === 'ACTION REQUIRED', 'Verification Rejected due to Suspended GSTIN');
    assert(dom.getElementById('kycDecisionExplanation').innerHTML.includes('SUSPENDED'), 'Compliance summary cites SUSPENDED GSTIN in national tax registry');

    // 7. Test replacing with K12 (Cancelled GSTIN)
    const mockFileK12 = { name: 'K12_gst_certificate.png', size: 145000 };
    callFn('handleSingleDocUpload', { target: { files: [mockFileK12] } }, 'gst');

    setTimeout(() => {
      assert(getDocs().gst.gstStatus === 'Cancelled', 'Doc 1 registry lookup detected Cancelled status for K12');
      callFn('runCleanKycVerification');
      assert(dom.getElementById('kycDecisionBadge').innerText === 'ACTION REQUIRED', 'Verification Rejected due to Cancelled GSTIN');

      // 8. Test remove Doc 4 (Address proof) and replacing with K05 (Expired Bill)
      callFn('removeDoc', 'address_proof');
      assert(getDocs().address_proof === null, 'Doc 4 removed');
      const mockFileK05 = { name: 'K05_address_proof.png', size: 130000 };
      callFn('handleSingleDocUpload', { target: { files: [mockFileK05] } }, 'address_proof');

      setTimeout(() => {
        assert(getDocs().address_proof.docDate === '2026-03-22', 'Doc 4 issue date is 2026-03-22 (expired >90d)');
        callFn('runCleanKycVerification');
        assert(dom.getElementById('kycDecisionExplanation').innerHTML.includes('DoT 90-day currency limit'), 'Verification Rejected due to DoT >90-day expired utility bill');

        console.log('\n===============================================================');
        console.log(` ALL ${passCount} REMOVE & REPLACE TEST ASSERTIONS PASSED!`);
        console.log('===============================================================');
      }, 30);
    }, 30);
  }, 30);
}, 30);
