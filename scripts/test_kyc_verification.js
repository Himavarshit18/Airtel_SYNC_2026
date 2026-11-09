/**
 * Comprehensive Automated Test Suite: KYC 4-Document Upload & mock_gstin_registry.csv Verification
 */

const fs = require('fs');
const path = require('path');
const http = require('http');
const KycService = require('../services/kycService');

async function runTests() {
  console.log('===============================================================');
  console.log(' STARTING KYC REGISTRY & 4-DOCUMENT UPLOAD VERIFICATION TESTS');
  console.log('===============================================================\n');

  let passedTests = 0;
  let totalTests = 0;

  function assert(condition, message) {
    totalTests++;
    if (condition) {
      console.log(`  [PASS] Test ${totalTests}: ${message}`);
      passedTests++;
    } else {
      console.error(`  [FAIL] Test ${totalTests}: ${message}`);
      process.exitCode = 1;
    }
  }

  // 1. Verify existence of the 4 documents for K01 in kyc_documents/
  console.log('--- Test Suite 1: Specimen Files in kyc_documents/ ---');
  const k01Docs = [
    'K01_gst_certificate.png',
    'K01_udyam_certificate.png',
    'K01_signatory_id.png',
    'K01_address_proof.png'
  ];

  k01Docs.forEach(docName => {
    const filePath = path.join(__dirname, '..', 'kyc_documents', docName);
    const exists = fs.existsSync(filePath);
    const stats = exists ? fs.statSync(filePath) : null;
    assert(exists && stats.size > 0, `Document exists: ${docName} (${stats ? stats.size : 0} bytes)`);
  });

  // 2. Test KycService Indexing of mock_gstin_registry.csv
  console.log('\n--- Test Suite 2: Registry Indexing & Data Integrity ---');
  const kyc = new KycService();
  assert(kyc.gstinRegistry.size === 3534, `mock_gstin_registry.csv indexed exactly 3,534 records (actual: ${kyc.gstinRegistry.size})`);
  assert(kyc.udyamRegistry.size === 2723, `mock_udyam_registry.csv indexed exactly 2,723 records (actual: ${kyc.udyamRegistry.size})`);

  // 3. Test Registry Status Lookups
  console.log('\n--- Test Suite 3: Central Registry Status Lookups ---');
  const k01Gst = kyc.lookupGstin('32TTNXB7384T1ZW');
  assert(k01Gst && k01Gst.status === 'Active' && k01Gst.legal_name === 'Balaji Dental Care LLP', 
    'K01 GSTIN 32TTNXB7384T1ZW matched Active status for Balaji Dental Care LLP');

  const k11Gst = kyc.lookupGstin('23QYBXS1811Q1ZD');
  assert(k11Gst && k11Gst.status === 'Suspended', 
    'K11 GSTIN 23QYBXS1811Q1ZD matched SUSPENDED status in mock_gstin_registry.csv');

  const k12Gst = kyc.lookupGstin('37IHKXV5167L1ZS');
  assert(k12Gst && k12Gst.status === 'Cancelled', 
    'K12 GSTIN 37IHKXV5167L1ZS matched CANCELLED status in mock_gstin_registry.csv');

  const unknownGst = kyc.lookupGstin('99ZZZZZ9999Z9ZZ');
  assert(unknownGst === null, 
    'Unregistered GSTIN 99ZZZZZ9999Z9ZZ correctly returns NULL (Not found in registry)');

  // 4. Test 4-Document Upload to Encrypted Private Vault
  console.log('\n--- Test Suite 4: Document Upload to Private Storage Vault ---');
  const sessionToken = 'test_session_' + Date.now();
  k01Docs.forEach(docName => {
    const rawBuffer = fs.readFileSync(path.join(__dirname, '..', 'kyc_documents', docName));
    const saved = kyc.savePrivateUpload(docName, rawBuffer, sessionToken);
    assert(fs.existsSync(saved.storedPath) && saved.sizeBytes === rawBuffer.length,
      `Vaulted ${docName} into storage/private_uploads (UUID: ${saved.fileId})`);
  });

  // 5. Test Verification Outcomes
  console.log('\n--- Test Suite 5: Automated Verification Engine Outcomes ---');

  // Test Case A: K01 Clean Approval (All 4 docs valid + Active GSTIN)
  const resultK01 = kyc.verifyApplicantDossier({
    applicantId: 'K01',
    gstin: '32TTNXB7384T1ZW',
    hasUdyam: true,
    udyamNumber: 'UDYAM-KL-00-3078801',
    docDate: '2026-06-15',
    signatory: 'Prakash Shah',
    signatoryId: 'PAN: *****7384*',
    consentGiven: true
  });
  assert(resultK01.decision === 'APPROVED', 
    'K01 Clean Pass yields decision: APPROVED (Active in GSTIN registry & valid 30d bill)');

  // Test Case B: K05 Planted Issue: Expired Address Proof (115 days old > 90d)
  const resultK05 = kyc.verifyApplicantDossier({
    applicantId: 'K05',
    gstin: '32AITXR9985H1ZT',
    hasUdyam: true,
    udyamNumber: 'UDYAM-KL-00-2007485',
    docDate: '2026-03-22', // 115 days old relative to benchmark 2026-07-15
    signatory: 'Vikram Bhat',
    signatoryId: 'Aadhaar: XXXX-XXXX-9985',
    consentGiven: true
  });
  assert(resultK05.decision === 'REJECTED' && resultK05.summary.includes('Expired'), 
    'K05 Expired Bill yields decision: REJECTED (DoT currency threshold >90 days)');

  // Test Case C: K11 Planted Issue: Suspended GSTIN in Registry
  const resultK11 = kyc.verifyApplicantDossier({
    applicantId: 'K11',
    gstin: '23QYBXS1811Q1ZD',
    hasUdyam: false,
    udyamNumber: 'None',
    docDate: '2026-06-01',
    signatory: 'Meera Kulkarni',
    signatoryId: 'PAN: *****1811*',
    consentGiven: true
  });
  assert(resultK11.decision === 'REJECTED' && resultK11.summary.includes('SUSPENDED'), 
    'K11 Suspended GSTIN yields decision: REJECTED (Entity status SUSPENDED in mock_gstin_registry.csv)');

  // Test Case D: K12 Planted Issue: Cancelled GSTIN in Registry
  const resultK12 = kyc.verifyApplicantDossier({
    applicantId: 'K12',
    gstin: '37IHKXV5167L1ZS',
    hasUdyam: false,
    udyamNumber: 'None',
    docDate: '2026-05-20',
    signatory: 'Neha Kaur',
    signatoryId: 'Aadhaar: XXXX-XXXX-5167',
    consentGiven: true
  });
  assert(resultK12.decision === 'REJECTED' && resultK12.summary.includes('CANCELLED'), 
    'K12 Cancelled GSTIN yields decision: REJECTED (Entity status CANCELLED in mock_gstin_registry.csv)');

  // Test Case E: Unregistered GSTIN (Not found in mock_gstin_registry.csv)
  const resultUnregistered = kyc.verifyApplicantDossier({
    applicantId: 'CUSTOM',
    gstin: '99ZZZZZ9999Z9ZZ',
    hasUdyam: false,
    udyamNumber: 'None',
    docDate: '2026-06-15',
    signatory: 'Test Person',
    signatoryId: 'PAN: *****1234*',
    consentGiven: true
  });
  assert(resultUnregistered.decision === 'REJECTED' && resultUnregistered.summary.toLowerCase().includes('not found in mock_gstin_registry.csv'), 
    'Unregistered GSTIN yields decision: REJECTED (Taxpayer GSTIN not found in mock_gstin_registry.csv)');

  // Test Case F: Consent Denied Check (DPDP Act, 2023)
  const resultNoConsent = kyc.verifyApplicantDossier({
    applicantId: 'K01',
    gstin: '32TTNXB7384T1ZW',
    docDate: '2026-06-15',
    consentGiven: false
  });
  assert(resultNoConsent.decision === 'REJECTED' && resultNoConsent.summary.includes('Customer consent was not granted'), 
    'Missing DPDP 2023 consent instantly halts and rejects processing');

  console.log('\n===============================================================');
  console.log(` RESULTS: ${passedTests} OF ${totalTests} TESTS PASSED CLEANLY!`);
  console.log('===============================================================\n');
}

runTests().catch(err => {
  console.error("Test execution error:", err);
  process.exit(1);
});
