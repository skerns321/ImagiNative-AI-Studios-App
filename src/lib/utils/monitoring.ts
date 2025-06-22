type SecurityEventType = 
  | 'SUSPICIOUS_ACTIVITY'
  | 'RATE_LIMIT_VIOLATION'
  | 'AUTH_FAILURE'
  | 'API_MISUSE'
  | 'SECURITY_VIOLATION';

interface SecurityEvent {
  type: SecurityEventType;
  timestamp: string;
  ip?: string;
  userId?: string;
  path?: string;
  details: Record<string, any>;
  severity: 'low' | 'medium' | 'high' | 'critical';
}

export class SecurityMonitor {
  private static async logEvent(event: SecurityEvent) {
    try {
      // Log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.error('Security Event:', event);
        return;
      }

      // In production, send to logging service
      await fetch('/api/security/log', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Security-Key': process.env.INTERNAL_SECURITY_KEY || '',
        },
        body: JSON.stringify(event),
      });
    } catch (error) {
      console.error('Failed to log security event:', error);
    }
  }

  static async logSuspiciousActivity(details: Record<string, any>) {
    await this.logEvent({
      type: 'SUSPICIOUS_ACTIVITY',
      timestamp: new Date().toISOString(),
      details,
      severity: 'medium',
    });
  }

  static async logRateLimitViolation(ip: string, path: string) {
    await this.logEvent({
      type: 'RATE_LIMIT_VIOLATION',
      timestamp: new Date().toISOString(),
      ip,
      path,
      details: { threshold: 'exceeded' },
      severity: 'low',
    });
  }

  static async logAuthFailure(userId: string, reason: string) {
    await this.logEvent({
      type: 'AUTH_FAILURE',
      timestamp: new Date().toISOString(),
      userId,
      details: { reason },
      severity: 'high',
    });
  }

  static async logApiMisuse(path: string, details: Record<string, any>) {
    await this.logEvent({
      type: 'API_MISUSE',
      timestamp: new Date().toISOString(),
      path,
      details,
      severity: 'medium',
    });
  }
} 