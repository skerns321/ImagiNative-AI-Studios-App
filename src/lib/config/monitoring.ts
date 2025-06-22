export const monitoringConfig = {
  performance: {
    pageLoadThreshold: 3000, // 3 seconds
    apiResponseThreshold: 1000, // 1 second
    resourceUsageThreshold: 80, // 80% usage
  },
  security: {
    maxFailedAttempts: 5,
    rateLimitWindow: 60 * 1000, // 1 minute
    suspiciousPatterns: [
      '(../)',
      'javascript:',
      '<script>',
    ],
  }
}; 