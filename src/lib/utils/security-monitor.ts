import { NextRequest } from 'next/server';

export async function logSecurityEvent(
  request: NextRequest, 
  type: 'blocked' | 'suspicious' | 'error',
  details: Record<string, any>
) {
  const event = {
    timestamp: new Date().toISOString(),
    type,
    ip: request.ip,
    path: request.nextUrl.pathname,
    userAgent: request.headers.get('user-agent'),
    details,
  };

  // Log to your monitoring service
  console.error('Security Event:', event);

  // If you're using a monitoring service like DataDog or New Relic
  if (process.env.NODE_ENV === 'production') {
    try {
      await fetch(process.env.SECURITY_WEBHOOK_URL!, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(event),
      });
    } catch (error) {
      console.error('Failed to log security event:', error);
    }
  }
} 