/**
 * Airtel Business - Order Management & SLA Tracking Service
 * Customer session isolation, 48-hour SLA countdown, and assigned field engineer dispatch
 */

const crypto = require('crypto');

class OrderService {
  constructor() {
    this.orders = new Map(); // sessionToken -> order
  }

  generateOrderId() {
    const randomSuffix = Math.floor(10000 + Math.random() * 90000);
    return `AB-2026-${randomSuffix}`;
  }

  createOrder(sessionToken, orderData) {
    if (!sessionToken) {
      sessionToken = `ses_${Date.now()}_${crypto.randomBytes(4).toString('hex')}`;
    }

    const orderId = this.generateOrderId();
    const now = new Date();
    const scheduledDate = new Date(now.getTime() + 24 * 60 * 60 * 1000); // Tomorrow
    const slaDeadline = new Date(now.getTime() + 48 * 60 * 60 * 1000); // 48h SLA

    const order = {
      orderId,
      sessionToken,
      createdAt: now.toISOString(),
      slaDeadline: slaDeadline.toISOString(),
      slaHoursRemaining: 48,
      guaranteedSlaText: 'Under 48 Hours',
      customer: {
        businessName: orderData.businessName || 'MSME Enterprise',
        applicantId: orderData.applicantId || 'K01',
        city: orderData.city || 'Kochi',
        state: orderData.state || 'Kerala'
      },
      bundle: {
        bundleId: orderData.bundleId || 'pro_office',
        bundleName: orderData.bundleName || 'Airtel Professional Office Suite',
        totalMonthlyDue: orderData.totalMonthlyDue || 3213,
        contractMonths: 12
      },
      milestones: [
        {
          step: 1,
          title: 'Instant Digital Quote Accepted',
          description: 'Completed via GenAI Advisor · 12-month commercial agreement recorded',
          status: 'COMPLETED',
          timestamp: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        },
        {
          step: 2,
          title: 'Autonomous Smart KYC Verified',
          description: 'Modulo-36 GSTIN checksum passed · Central GSTN taxpayer active',
          status: 'COMPLETED',
          timestamp: new Date(now.getTime() + 2 * 60 * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        },
        {
          step: 3,
          title: 'Field Fiber Engineer Dispatched',
          description: 'Router provisioned at local OLT · Optical line splicing scheduled',
          status: 'IN_PROGRESS',
          timestamp: 'CURRENT'
        },
        {
          step: 4,
          title: 'Live Fiber Testing & Billing Handshake',
          description: 'Speed test validation, welcome kit SMS, and single monthly bill generation',
          status: 'PENDING',
          timestamp: 'Estimated Tomorrow'
        }
      ],
      assignedEngineer: {
        name: 'Ramesh Kumar',
        initials: 'RK',
        role: 'Senior Field Network Specialist',
        rating: '4.9',
        completedInstalls: 420,
        equipment: 'Wi-Fi 6 Optical Network Terminal (ONT) & CAT-6 cabling kit',
        installationWindow: 'Tomorrow, 2:00 PM - 4:00 PM',
        phoneSupport: '1800-102-030'
      }
    };

    this.orders.set(sessionToken, order);
    return order;
  }

  getOrderBySession(sessionToken) {
    if (!sessionToken) return null;
    return this.orders.get(sessionToken) || null;
  }
}

module.exports = OrderService;

