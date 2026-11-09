/**
 * Airtel Business - Authoritative Server-Side Pricing Service
 * Prevents client-side price tampering and enforces catalogue dependency constraints
 */

class PricingService {
  constructor(catalogueService) {
    this.catalogue = catalogueService;
    this.GST_RATE = 0.18; // 18% GST standard in Indian Telecom
  }

  /**
   * Authoritatively computes quote for a bundle and selected add-ons
   * @param {string} bundleId
   * @param {Array<string>} selectedAddonIds
   * @param {Object} options
   */
  calculateQuote(bundleId, selectedAddonIds = [], options = {}) {
    const addons = Array.isArray(selectedAddonIds) ? selectedAddonIds : [];

    // Bundle definitions mapped to catalogue product IDs
    const bundleDefinitions = {
      starter: {
        name: 'Airtel Starter Digital Pack',
        segment: 'Micro retail & services',
        productIds: ['P01', 'P19', 'P11'],
        contractMonths: 12
      },
      pro_office: {
        name: 'Airtel Professional Office Suite',
        segment: 'Professional offices',
        productIds: ['P02', 'P12', 'P16', 'P20'],
        contractMonths: 12
      },
      multi_chain: {
        name: 'Airtel Connected Enterprise (Multi-Site)',
        segment: 'Small multi-site businesses',
        productIds: ['P02', 'P09', 'P10', 'P23'],
        contractMonths: 12
      },
      mfg_pro: {
        name: 'Airtel Smart Manufacturing Suite',
        segment: 'Small manufacturers',
        productIds: ['P06', 'P21', 'P24', 'P20'],
        contractMonths: 24
      }
    };

    const bundleDef = bundleDefinitions[bundleId] || bundleDefinitions.pro_office;
    const baseProducts = bundleDef.productIds
      .map(id => this.catalogue.getProductById(id))
      .filter(Boolean);

    // Calculate base monthly price
    const baseMonthly = baseProducts.reduce((sum, p) => sum + p.price_min_inr_per_month, 0);

    // Validate and calculate add-ons
    const validatedAddons = [];
    const baseProductIds = new Set(bundleDef.productIds);
    let addonMonthly = 0;

    for (const addonId of addons) {
      // Avoid duplicating products already in base
      if (baseProductIds.has(addonId)) continue;

      const product = this.catalogue.getProductById(addonId);
      if (!product) continue;

      // Validate dependency constraints (requires_one_of)
      if (product.requires_one_of) {
        const requiredAlts = product.requires_one_of.split('|');
        const satisfied = requiredAlts.some(reqId => 
          baseProductIds.has(reqId) || addons.includes(reqId)
        );
        if (!satisfied) {
          throw new Error(`Product ${product.product_id} (${product.product_name}) requires one of: ${product.requires_one_of}`);
        }
      }

      addonMonthly += product.price_min_inr_per_month;
      validatedAddons.push({
        product_id: product.product_id,
        product_name: product.product_name,
        description: product.description,
        price_inr_per_month: product.price_min_inr_per_month
      });
    }

    const subtotal = baseMonthly + addonMonthly;
    const gstAmount = Math.round(subtotal * this.GST_RATE);
    const totalMonthly = subtotal + gstAmount;

    return {
      bundleId: bundleId || 'pro_office',
      bundleName: bundleDef.name,
      segment: bundleDef.segment,
      contractMonths: bundleDef.contractMonths,
      priceLockMonths: 12,
      baseMonthlyPrice: baseMonthly,
      baseProducts: baseProducts.map(p => ({
        product_id: p.product_id,
        product_name: p.product_name,
        category: p.category,
        description: p.description,
        price_inr_per_month: p.price_min_inr_per_month
      })),
      selectedAddons: validatedAddons,
      addonMonthlyPrice: addonMonthly,
      oneTimeSetupFee: 0, // Waived in self-service digital campaign (standard: ₹1,500 - ₹5,000)
      subtotalMonthly: subtotal,
      gstRatePercent: 18,
      gstAmountInr: gstAmount,
      totalMonthlyDue: totalMonthly,
      calculatedAt: new Date().toISOString()
    };
  }
}

module.exports = PricingService;

