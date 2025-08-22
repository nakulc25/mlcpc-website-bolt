import DOMPurify from 'dompurify';

/**
 * Sanitizes user input to prevent XSS attacks
 */
export const sanitizeInput = (input: string): string => {
  return DOMPurify.sanitize(input, {
    ALLOWED_TAGS: [],
    ALLOWED_ATTR: [],
    KEEP_CONTENT: true
  });
};

/**
 * Validates email format
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
};

/**
 * Validates name input (letters, spaces, hyphens, apostrophes only)
 */
export const isValidName = (name: string): boolean => {
  const nameRegex = /^[a-zA-Z\s\-']{1,100}$/;
  return nameRegex.test(name);
};

/**
 * Validates message content (basic length and content checks)
 */
export const isValidMessage = (message: string): boolean => {
  return message.length >= 10 && message.length <= 5000;
};

/**
 * Validates external URLs against whitelist
 */
export const isValidExternalUrl = (url: string): boolean => {
  const allowedDomains = [
    'calendly.com',
    'mclpc.ca',
    'www.calendly.com',
    'www.mclpc.ca'
  ];
  
  try {
    const urlObj = new URL(url);
    return allowedDomains.some(domain => 
      urlObj.hostname === domain || urlObj.hostname.endsWith('.' + domain)
    );
  } catch {
    return false;
  }
};

/**
 * Authorizes file downloads based on whitelist
 */
export const isAuthorizedFile = (filePath: string): boolean => {
  const allowedFiles = [
    '/data/henaa-mall-cv.pdf',
    '/data/nakul-chhibbar-cv.pdf'
  ];
  
  return allowedFiles.includes(filePath);
};

/**
 * Rate limiting helper (simple client-side implementation)
 */
class RateLimiter {
  private attempts: Map<string, number[]> = new Map();
  private readonly maxAttempts: number;
  private readonly windowMs: number;

  constructor(maxAttempts: number = 5, windowMs: number = 60000) {
    this.maxAttempts = maxAttempts;
    this.windowMs = windowMs;
  }

  isAllowed(identifier: string): boolean {
    const now = Date.now();
    const attempts = this.attempts.get(identifier) || [];
    
    // Remove old attempts outside the window
    const recentAttempts = attempts.filter(time => now - time < this.windowMs);
    
    if (recentAttempts.length >= this.maxAttempts) {
      return false;
    }
    
    recentAttempts.push(now);
    this.attempts.set(identifier, recentAttempts);
    return true;
  }
}

export const contactFormRateLimiter = new RateLimiter(3, 300000); // 3 attempts per 5 minutes