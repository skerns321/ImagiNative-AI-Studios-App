import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { rateLimit } from '@/lib/utils/rateLimit';
import { validateToken } from '@/lib/utils/jwt';

export async function apiSecurityMiddleware(
  request: NextRequest,
  handler: (req: NextRequest) => Promise<NextResponse>
) {
  // Block malicious headers
  if (request.headers.has('x-middleware-subrequest')) {
    return new NextResponse(
      JSON.stringify({ error: 'Forbidden' }), 
      { status: 403 }
    );
  }

  // 1. CORS Check
  const corsResponse = await corsCheck(request);
  if (corsResponse) return corsResponse;

  // Enhanced rate limiting
  const ip = request.ip ?? 'unknown';
  const isAllowed = await rateLimit(ip, request.nextUrl.pathname, {
    maxRequests: 100,
    windowMs: 15 * 60 * 1000 // 15 minutes
  });

  if (!isAllowed) {
    return new NextResponse(
      JSON.stringify({ error: 'Too many requests' }), 
      { 
        status: 429,
        headers: {
          'Retry-After': '900',
          'X-RateLimit-Reset': new Date(Date.now() + 900000).toISOString()
        }
      }
    );
  }

  // Log suspicious activities
  const suspiciousHeaders = ['x-middleware-subrequest', 'x-powered-by'];
  const hasBlockedHeaders = suspiciousHeaders.some(header => 
    request.headers.has(header)
  );

  if (hasBlockedHeaders) {
    console.error('Security Alert: Blocked headers detected', {
      ip,
      path: request.nextUrl.pathname,
      headers: Object.fromEntries(request.headers)
    });
  }

  // 3. API Key Validation for External Services
  const apiKey = request.headers.get('x-api-key');
  if (request.nextUrl.pathname.startsWith('/api/external')) {
    if (!apiKey || !validateApiKey(apiKey)) {
      return new NextResponse(
        JSON.stringify({ 
          error: 'Invalid API key' 
        }), {
          status: 401,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }
  }

  // 4. Request Body Size Limit
  if (request.method === 'POST') {
    const contentLength = parseInt(request.headers.get('content-length') ?? '0');
    if (contentLength > 1024 * 1024) { // 1MB limit
      return new NextResponse(
        JSON.stringify({ 
          error: 'Request body too large' 
        }), {
          status: 413,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }
  }

  try {
    return await handler(request);
  } catch (error) {
    console.error('API Error:', error);
    return new NextResponse(
      JSON.stringify({ error: 'Internal server error' }), 
      { status: 500 }
    );
  }
} 
  }
} 