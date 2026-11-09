const fs = require('fs');
const path = require('path');
const vm = require('vm');

// Mock browser DOM
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
console.log(' TESTING CLEAN EMPTY KYC WORKFLOW & REPUTATION AUDIT');
console.log('===============================================================');

const callFn = (name, ...args) => (sandbox[name] || sandbox.window[name])(...args);
const getDocs = () => sandbox.window.kycDocuments;

let passCount = 0;
function assert(cond, msg) {
  if (!cond) {
    console.error(`[FAIL] ${msg}`);
    process.exit(1);
  }
  console.log(`  [PASS] ${msg}`);
  passCount++;
}

// 1. Initial State: Must be completely EMPTY (Nothing pre-uploaded)
callFn('initKycEmptyState');
assert(getDocs().gst === null, 'Doc 1 GST starts as null (nothing pre-uploaded)');
assert(getDocs().udyam === null, 'Doc 2 Udyam starts as null');
assert(getDocs().signatory_id === null, 'Doc 3 Signatory starts as null');
assert(getDocs().address_proof === null, 'Doc 4 Address proof starts as null');

assert(dom.getElementById('doc1Dropzone').classList.contains('hidden') === false, 'Doc 1 dropzone is visible');
assert(dom.getElementById('doc1UploadedView').classList.contains('hidden') === true, 'Doc 1 uploaded view is hidden');
assert(dom.getElementById('doc1StatusBadge').innerText.includes('Not Uploaded'), 'Doc 1 status badge shows Not Uploaded · Required');
assert(dom.getElementById('uploadedCountBadge').innerText.includes('0 / 4'), 'Document count reports 0 / 4 Uploaded (4 Missing)');

// 2. Verification Halted when nothing uploaded
callFn('runCleanKycVerification');
assert(dom.getElementById('kycMissingAlert').classList.contains('hidden') === false, 'Missing alert displayed when running verification empty');
assert(dom.getElementById('kycMissingList').innerHTML.includes('Document 1'), 'Lists Document 1 missing');
assert(dom.getElementById('kycMissingList').innerHTML.includes('Document 2'), 'Lists Document 2 missing');
assert(dom.getElementById('kycMissingList').innerHTML.includes('Document 3'), 'Lists Document 3 missing');
assert(dom.getElementById('kycMissingList').innerHTML.includes('Document 4'), 'Lists Document 4 missing');
assert(dom.getElementById('kycResultCard').classList.contains('hidden') === true, 'Result card remains hidden');

// 3. Sequential Document Uploads
const f1 = { name: 'K01_gst_certificate.png', size: 152921 };
callFn('handleSingleDocUpload', { target: { files: [f1] } }, 'gst');

setTimeout(() => {
  assert(getDocs().gst !== null, 'Doc 1 successfully uploaded');
  assert(getDocs().gst.gstin === '32TTNXB7384T1ZW', 'Doc 1 GSTIN auto-extracted');
  assert(getDocs().gst.legalName === 'Balaji Dental Care LLP', 'Doc 1 legal name matched from registry');
  assert(dom.getElementById('doc1Dropzone').classList.contains('hidden') === true, 'Doc 1 dropzone hidden after upload');
  assert(dom.getElementById('doc1UploadedView').classList.contains('hidden') === false, 'Doc 1 uploaded view visible');
  assert(dom.getElementById('uploadedCountBadge').innerText.includes('1 / 4'), 'Document count reports 1 / 4 Uploaded (3 Missing)');

  // Upload Doc 2 Udyam
  const f2 = { name: 'K01_udyam_certificate.png', size: 129502 };
  callFn('handleSingleDocUpload', { target: { files: [f2] } }, 'udyam');

  setTimeout(() => {
    assert(getDocs().udyam !== null, 'Doc 2 successfully uploaded');
    assert(getDocs().udyam.udyamNumber === 'UDYAM-KL-00-3078801', 'Doc 2 Udyam number extracted');
    assert(dom.getElementById('uploadedCountBadge').innerText.includes('2 / 4'), 'Document count reports 2 / 4 Uploaded (2 Missing)');

    // Upload Doc 3 Signatory
    const f3 = { name: 'K01_signatory_id.png', size: 40957 };
    callFn('handleSingleDocUpload', { target: { files: [f3] } }, 'signatory_id');

    setTimeout(() => {
      assert(getDocs().signatory_id !== null, 'Doc 3 successfully uploaded');
      assert(dom.getElementById('uploadedCountBadge').innerText.includes('3 / 4'), 'Document count reports 3 / 4 Uploaded (1 Missing)');

      // Upload Doc 4 Address Proof
      const f4 = { name: 'K01_address_proof.png', size: 133366 };
      callFn('handleSingleDocUpload', { target: { files: [f4] } }, 'address_proof');

      setTimeout(() => {
        assert(getDocs().address_proof !== null, 'Doc 4 successfully uploaded');
        assert(dom.getElementById('uploadedCountBadge').innerText.includes('4 / 4'), 'Document count reports 4 / 4 Active');

        // 4. Run Verification on complete 4 documents
        dom.getElementById('dpdpConsentCheck').checked = true;
        callFn('runCleanKycVerification');

        assert(dom.getElementById('kycResultCard').classList.contains('hidden') === false, 'Result card visible on full upload');
        assert(dom.getElementById('kycDecisionBadge').innerText === 'APPROVED', 'Decision is APPROVED for valid K01 dossier');
        assert(dom.getElementById('kycProceedBtn').classList.contains('hidden') === false, 'Proceed to Order Tracker button displayed');

        // 5. Test Remove Document 1
        callFn('removeDoc', 'gst');
        assert(getDocs().gst === null, 'Doc 1 is null after removal');
        assert(dom.getElementById('doc1Dropzone').classList.contains('hidden') === false, 'Doc 1 returns to dropzone state');
        assert(dom.getElementById('doc1UploadedView').classList.contains('hidden') === true, 'Doc 1 uploaded view hidden');
        assert(dom.getElementById('uploadedCountBadge').innerText.includes('3 / 4'), 'Document count reports 3 / 4 Uploaded (1 Missing)');

        // 6. Test Replace with Planted Suspended GSTIN (K11)
        const fSuspended = { name: 'K11_gst_certificate.png', size: 151705 };
        callFn('handleSingleDocUpload', { target: { files: [fSuspended] } }, 'gst');

        setTimeout(() => {
          assert(getDocs().gst.gstin === '23QYBXS1811Q1ZD', 'Doc 1 replaced with K11 GSTIN');
          callFn('runCleanKycVerification');
          assert(dom.getElementById('kycDecisionBadge').innerText === 'ACTION REQUIRED', 'Verification halts on Suspended GSTIN');
          assert(dom.getElementById('kycDecisionExplanation').innerHTML.includes('SUSPENDED'), 'Decision explanation cites SUSPENDED status');

          console.log('\n===============================================================');
          console.log(` ALL ${passCount} CLEAN EMPTY KYC TESTS PASSED FLAWLESSLY!`);
          console.log('===============================================================');
        }, 10);

      }, 10);
    }, 10);
  }, 10);
}, 10);

