/**
 * Airtel Business - Security & Session Middleware
 * Session isolation, HTTP security headers, and PII masking
 */

const crypto = require('crypto');

class SecurityMiddleware {
  constructor() {
    this.sessions = new Map(); // sessionToken -> sessionObject
    this.rateLimits = new Map(); // ip -> { count, resetTime }
  }

  /**
   * Apply enterprise HTTP security headers
   */
  applySecurityHeaders(res) {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    res.setHeader('Permissions-Policy', 'microphone=(self), geolocation=()');
    res.setHeader(
      'Content-Security-Policy',
      "default-src 'self' 'unsafe-inline' https://cdn.tailwindcss.com https://cdnjs.cloudflare.com; img-src 'self' data: https:; font-src 'self' https://cdnjs.cloudflare.com; connect-src 'self';"
    );
  }

  /**
   * Resolve or create session token
   */
  resolveSession(req, res) {
    let sessionToken = req.headers['x-session-token'];
    if (!sessionToken || typeof sessionToken !== 'string' || sessionToken.length < 16) {
      sessionToken = `ses_${Date.now()}_${crypto.randomBytes(8).toString('hex')}`;
    }

    if (!this.sessions.has(sessionToken)) {
      this.sessions.set(sessionToken, {
        token: sessionToken,
        createdAt: new Date().toISOString(),
        lastActive: new Date().toISOString(),
        data: {}
      });
    } else {
      const sess = this.sessions.get(sessionToken);
      sess.lastActive = new Date().toISOString();
    }

    res.setHeader('X-Session-Token', sessionToken);
    return sessionToken;
  }

  /**
   * Rate limiting by IP (60 requests per minute)
   */
  checkRateLimit(req, res) {
    const ip = req.socket.remoteAddress || '127.0.0.1';
    const now = Date.now();
    const windowMs = 60 * 1000;
    const maxRequests = 120;

    let record = this.rateLimits.get(ip);
    if (!record || now > record.resetTime) {
      record = { count: 1, resetTime: now + windowMs };
      this.rateLimits.set(ip, record);
    } else {
      record.count++;
      if (record.count > maxRequests) {
        res.writeHead(429, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ status: 'error', message: 'Rate limit exceeded. Please wait a minute.' }));
        return false;
      }
    }
    return true;
  }

  /**
   * PII Redaction
   */
  redactPii(obj) {
    if (!obj || typeof obj !== 'object') return obj;
    const cloned = JSON.parse(JSON.stringify(obj));

    const maskValue = (key, val) => {
      if (typeof val !== 'string') return val;
      if (key.toLowerCase().includes('aadhaar')) {
        return val.length >= 12 ? `XXXX-XXXX-${val.slice(-4)}` : val;
      }
      if (key.toLowerCase().includes('pan')) {
        return val.length >= 10 ? `*****${val.slice(5, 9)}*` : val;
      }
      if (key.toLowerCase().includes('gstin')) {
        return val.length === 15 ? `${val.slice(0, 7)}****${val.slice(12)}` : val;
      }
      return val;
    };

    const traverse = (o) => {
      for (const k of Object.keys(o)) {
        if (typeof o[k] === 'object' && o[k] !== null) {
          traverse(o[k]);
        } else {
          o[k] = maskValue(k, o[k]);
        }
      }
    };

    traverse(cloned);
    return cloned;
  }
}

module.exports = SecurityMiddleware;

