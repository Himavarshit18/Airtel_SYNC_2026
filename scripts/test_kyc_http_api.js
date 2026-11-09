/**
 * Test HTTP API Endpoints for KYC
 */

const { fork } = require('child_process');
const http = require('http');
const path = require('path');
const fs = require('fs');

async function testHttpEndpoints() {
  console.log('--- Starting HTTP API Server for KYC Testing ---');
  const serverProcess = fork(path.join(__dirname, '..', 'server.js'), [], {
    env: { ...process.env, PORT: '3099' },
    silent: true
  });

  // Wait for server to spin up
  await new Promise(resolve => setTimeout(resolve, 1500));

  function request(options, bodyData = null) {
    return new Promise((resolve, reject) => {
      const req = http.request(options, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
          try {
            resolve({ status: res.statusCode, data: JSON.parse(data) });
          } catch (e) {
            resolve({ status: res.statusCode, raw: data });
          }
        });
      });
      req.on('error', reject);
      if (bodyData) {
        req.write(typeof bodyData === 'string' ? bodyData : JSON.stringify(bodyData));
      }
      req.end();
    });
  }

  try {
    // 1. Test Specimen Document static serving
    console.log('Test 1: GET /kyc_documents/K01_gst_certificate.png');
    const docRes = await request({
      hostname: 'localhost',
      port: 3099,
      path: '/kyc_documents/K01_gst_certificate.png',
      method: 'GET'
    });
    console.log('  Status:', docRes.status, '(Expected: 200)');
    if (docRes.status !== 200) throw new Error('Failed to fetch specimen image');

    // 2. Test GSTIN lookup API
    console.log('Test 2: POST /api/kyc/lookup-gstin (Balaji Dental Care)');
    const gstRes = await request({
      hostname: 'localhost',
      port: 3099,
      path: '/api/kyc/lookup-gstin',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    }, { gstin: '32TTNXB7384T1ZW' });
    console.log('  Lookup Result:', gstRes.data.record?.status, gstRes.data.record?.legal_name);
    if (gstRes.data.record?.status !== 'Active') throw new Error('Expected Active GSTIN');

    // 3. Test KYC Document Upload API
    console.log('Test 3: POST /api/kyc/upload (Base64 file stream)');
    const sampleBytes = fs.readFileSync(path.join(__dirname, '..', 'kyc_documents', 'K01_gst_certificate.png'));
    const uploadRes = await request({
      hostname: 'localhost',
      port: 3099,
      path: '/api/kyc/upload',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    }, {
      fileName: 'K01_gst_certificate.png',
      fileBase64: sampleBytes.toString('base64'),
      docType: 'gst'
    });
    console.log('  Upload Result:', uploadRes.data.status, 'Vault:', uploadRes.data.document?.vault);
    if (uploadRes.data.status !== 'success') throw new Error('Document upload failed');

    // 4. Test KYC Verification API (Approved Case)
    console.log('Test 4: POST /api/kyc/verify (K01 Approved)');
    const verifyPass = await request({
      hostname: 'localhost',
      port: 3099,
      path: '/api/kyc/verify',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    }, {
      applicantId: 'K01',
      gstin: '32TTNXB7384T1ZW',
      hasUdyam: true,
      udyamNumber: 'UDYAM-KL-00-3078801',
      docDate: '2026-06-15',
      consentGiven: true
    });
    console.log('  Decision:', verifyPass.data.decision, '(Expected: APPROVED)');
    if (verifyPass.data.decision !== 'APPROVED') throw new Error('Expected APPROVED');

    // 5. Test KYC Verification API (Rejected Case: Suspended GSTIN)
    console.log('Test 5: POST /api/kyc/verify (K11 Suspended GSTIN)');
    const verifyFail = await request({
      hostname: 'localhost',
      port: 3099,
      path: '/api/kyc/verify',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    }, {
      applicantId: 'K11',
      gstin: '23QYBXS1811Q1ZD',
      hasUdyam: false,
      udyamNumber: 'None',
      docDate: '2026-06-01',
      consentGiven: true
    });
    console.log('  Decision:', verifyFail.data.decision, '(Expected: REJECTED)');
    if (verifyFail.data.decision !== 'REJECTED') throw new Error('Expected REJECTED');

    console.log('\n>>> ALL 5 HTTP API ENDPOINT TESTS PASSED SUCCESSFULY! <<<');
  } finally {
    serverProcess.kill();
  }
}

testHttpEndpoints().catch(err => {
  console.error("HTTP Test Error:", err);
  process.exit(1);
});
