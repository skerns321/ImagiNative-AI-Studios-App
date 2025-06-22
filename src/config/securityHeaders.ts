export const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://hcaptcha.com https://*.hcaptcha.com",
      "style-src 'self' 'unsafe-inline' https://hcaptcha.com https://*.hcaptcha.com",
      "img-src 'self' blob: data: https:",
      "font-src 'self'",
      "frame-src 'self' https://hcaptcha.com https://*.hcaptcha.com",
      "connect-src 'self' https://api.openai.com https://api.anthropic.com https://api.replicate.com",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      "upgrade-insecure-requests",
      "block-all-mixed-content",
    ].join('; ')
  },
  {
    key: 'Permissions-Policy',
    value: [
      'camera=()',
      'microphone=()',
      'geolocation=()',
      'interest-cohort=()',
      'accelerometer=()',
      'autoplay=()',
      'encrypted-media=()',
      'gyroscope=()',
      'magnetometer=()',
      'midi=()',
      'payment=()',
      'picture-in-picture=()',
      'usb=()',
      'vr=()'
    ].join(', ')
  },
  // Additional headers...
]; 