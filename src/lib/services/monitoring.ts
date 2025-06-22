import { monitoringConfig } from '../config/monitoring';

export class MonitoringService {
  // Performance Monitoring
  static async trackPageLoad(pathname: string, loadTime: number) {
    if (loadTime > monitoringConfig.performance.pageLoadThreshold) {
      await this.logPerformanceIssue('PAGE_LOAD', {
        pathname,
        loadTime,
        threshold: monitoringConfig.performance.pageLoadThreshold
      });
    }
  }

  static async trackApiResponse(endpoint: string, responseTime: number) {
    if (responseTime > monitoringConfig.performance.apiResponseThreshold) {
      await this.logPerformanceIssue('API_RESPONSE', {
        endpoint,
        responseTime,
        threshold: monitoringConfig.performance.apiResponseThreshold
      });
    }
  }

  // Security Monitoring
  static async trackSecurityEvent(
    type: 'SUSPICIOUS' | 'RATE_LIMIT' | 'AUTH_FAILURE' | 'API_MISUSE',
    details: Record<string, any>
  ) {
    const event = {
      timestamp: new Date().toISOString(),
      type,
      details,
    };

    if (process.env.NODE_ENV === 'production') {
      // Send to your logging service (e.g., DataDog, CloudWatch)
      await fetch('/api/monitoring/log', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Internal-Key': process.env.MONITORING_KEY || '',
        },
        body: JSON.stringify(event),
      });
    } else {
      console.log('Security Event:', event);
    }
  }

  private static async logPerformanceIssue(
    type: string,
    details: Record<string, any>
  ) {
    if (process.env.NODE_ENV === 'production') {
      await fetch('/api/monitoring/performance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Internal-Key': process.env.MONITORING_KEY || '',
        },
        body: JSON.stringify({ type, details, timestamp: new Date() }),
      });
    } else {
      console.log('Performance Issue:', { type, details });
    }
  }
} 