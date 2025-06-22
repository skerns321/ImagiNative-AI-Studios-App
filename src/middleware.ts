import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { SecurityMonitor } from '@/lib/utils/monitoring';
import { MonitoringService } from '@/lib/services/monitoring';

export async function middleware(request: NextRequest) {
  const startTime = performance.now();

  // Check for suspicious headers
  const suspiciousHeaders = ['x-middleware-subrequest', 'x-powered-by'];
  const hasBlockedHeaders = suspiciousHeaders.some(header => 
    request.headers.has(header)
  );

  if (hasBlockedHeaders) {
    await SecurityMonitor.logSuspiciousActivity({
      headers: Object.fromEntries(request.headers),
      ip: request.ip,
      path: request.nextUrl.pathname
    });

    return new NextResponse(null, { status: 403 });
  }

  const response = NextResponse.next();

  // Track API performance for API routes
  if (request.nextUrl.pathname.startsWith('/api/')) {
    const responseTime = performance.now() - startTime;
    await MonitoringService.trackApiResponse(
      request.nextUrl.pathname,
      responseTime
    );
  }

  // Add security headers
  const headers = response.headers;

  // Prevent XSS attacks
  headers.set('X-XSS-Protection', '1; mode=block');
  
  // Prevent MIME type sniffing
  headers.set('X-Content-Type-Options', 'nosniff');
  
  // Prevent clickjacking
  headers.set('X-Frame-Options', 'DENY');
  
  // Enable strict CSP
  headers.set(
    'Content-Security-Policy',
    [
      "default-src 'self'",
      "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://hcaptcha.com https://*.hcaptcha.com",
      "style-src 'self' 'unsafe-inline' https://hcaptcha.com https://*.hcaptcha.com",
      "img-src 'self' blob: data: https:",
      "font-src 'self'",
      "frame-src 'self' https://hcaptcha.com https://*.hcaptcha.com",
      "connect-src 'self' https://api.openai.com https://api.anthropic.com https://api.replicate.com",
    ].join('; ')
  );

  // HSTS - Force HTTPS
  headers.set(
    'Strict-Transport-Security',
    'max-age=31536000; includeSubDomains'
  );

  // Referrer Policy
  headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

  // Permissions Policy
  headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), interest-cohort=()'
  );

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    {
      source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
}; 