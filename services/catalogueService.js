/**
 * Airtel Business - Catalogue Service
 * Parses product_catalogue.csv and powers GenAI Rule-Based Recommendation Engine
 */

const fs = require('fs');
const path = require('path');

class CatalogueService {
  constructor(csvPath) {
    this.csvPath = csvPath || path.join(__dirname, '..', 'product_catalogue.csv');
    this.products = [];
    this.productMap = new Map();
    this.init();
  }

  init() {
    if (!fs.existsSync(this.csvPath)) {
      console.warn(`[WARN] Catalogue file not found at: ${this.csvPath}`);
      return;
    }

    const raw = fs.readFileSync(this.csvPath, 'utf8');
    const lines = raw.trim().split('\n');
    if (lines.length < 2) return;

    const headers = lines[0].split(',').map(h => h.trim());
    this.products = [];
    this.productMap.clear();

    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;

      const regex = /(?:,|\n|^)("(?:(?:"")*[^"]*)*"|[^",\n]*|(?:\n|$))/g;
      const cols = [];
      let match;
      while ((match = regex.exec(line)) !== null && cols.length < headers.length) {
        let val = match[1] ? match[1].trim() : '';
        if (val.startsWith('"') && val.endsWith('"')) {
          val = val.substring(1, val.length - 1).replace(/""/g, '"');
        }
        cols.push(val);
        if (regex.lastIndex >= line.length) break;
      }

      if (cols.length >= headers.length) {
        const item = {};
        headers.forEach((h, idx) => {
          item[h] = cols[idx];
        });

        item.price_min_inr_per_month = parseInt(item.price_min_inr_per_month, 10) || 0;
        item.price_max_inr_per_month = parseInt(item.price_max_inr_per_month, 10) || 0;
        item.one_time_setup_inr = parseInt(item.one_time_setup_inr, 10) || 0;
        item.min_employees = parseInt(item.min_employees, 10) || 1;
        item.min_sites = parseInt(item.min_sites, 10) || 1;
        item.min_contract_months = parseInt(item.min_contract_months, 10) || 12;
        item.typical_install_days = parseInt(item.typical_install_days, 10) || 3;

        this.products.push(item);
        this.productMap.set(item.product_id, item);
      }
    }

    console.log(`[INFO] CatalogueService loaded ${this.products.length} products.`);
  }

  getAllProducts() {
    return this.products;
  }

  getProductById(id) {
    return this.productMap.get(id) || null;
  }

  /**
   * Evaluates business answers and recommends a tailored bundle
   * @param {Object} profile - { type, size, locations, tools, lang }
   */
  recommendBundle(profile) {
    const { type = '', size = 5, locations = 1, tools = '', lang = 'en' } = profile;
    const lowerType = String(type).toLowerCase();
    const lowerTools = String(tools).toLowerCase();
    const empCount = parseInt(size, 10) || 5;
    const siteCount = parseInt(locations, 10) || 1;

    let bundleId = 'starter';
    let bundleName = 'Airtel Starter Digital Pack';
    let segment = 'Micro retail & services';
    let matchedProductIds = ['P01', 'P19', 'P11'];
    let sla = '99.5% Commercial Broadband SLA';
    let targetInstallDays = 2;
    let rationaleKey = 'kirana';

    // Rule 1: Manufacturing / Factory
    if (lowerType.match(/(factory|manufactur|textile|plastic|auto|steel|engineering)/i) || empCount >= 50) {
      bundleId = 'mfg_pro';
      bundleName = 'Airtel Smart Manufacturing Suite';
      segment = 'Small manufacturers';
      matchedProductIds = ['P06', 'P21', 'P24', 'P20'];
      sla = '99.9% Symmetrical Internet Leased Line SLA';
      targetInstallDays = 3;
      rationaleKey = 'manufacturing';
    } 
    // Rule 2: Multi-Site Operations (3+ sites or explicitly needing SD-WAN / CCTV)
    else if (siteCount >= 3 || lowerTools.includes('sd-wan') || lowerTools.includes('branches') || lowerTools.includes('outlets')) {
      bundleId = 'multi_chain';
      bundleName = 'Airtel Connected Enterprise (Multi-Site)';
      segment = 'Small multi-site businesses';
      matchedProductIds = ['P02', 'P09', 'P10', 'P23'];
      sla = '99.5% Multi-Site SD-WAN SLA';
      targetInstallDays = 2;
      rationaleKey = 'restaurant';
    } 
    // Rule 3: Professional Office / Healthcare / Legal / CA
    else if (lowerType.match(/(clinic|hospital|doctor|dental|health|ca |law |legal|office|consult|agency|coaching|school)/i) || empCount >= 5) {
      bundleId = 'pro_office';
      bundleName = 'Airtel Professional Office Suite';
      segment = 'Professional offices';
      matchedProductIds = ['P02', 'P12', 'P16', 'P20'];
      sla = '99.5% Commercial Fiber SLA';
      targetInstallDays = 2;
      rationaleKey = 'clinic';
    }

    // Retrieve components from catalogue
    const components = matchedProductIds.map(id => this.getProductById(id)).filter(Boolean);
    const baseMonthlyPrice = components.reduce((sum, p) => sum + p.price_min_inr_per_month, 0);

    return {
      bundleId,
      bundleName,
      segment,
      baseMonthlyPrice,
      setupFee: 0, // Waived in digital self-service campaign
      sla,
      targetInstallDays,
      rationaleKey,
      components
    };
  }
}

module.exports = CatalogueService;

