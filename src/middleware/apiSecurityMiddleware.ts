import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { rateLimit } from '@/lib/utils/rateLimit';

// Helper functions
async function corsCheck(request: NextRequest): Promise<NextResponse | null> {
  const origin = request.headers.get('origin');
  const allowedOrigins = [
    'http://localhost:3000',
    'https://yourdomain.com'
  ];
  
  if (origin && !allowedOrigins.includes(origin)) {
    return new NextResponse(
      JSON.stringify({ error: 'CORS policy violation' }),
      { status: 403 }
    );
  }
  return null;
}

function validateApiKey(apiKey: string): boolean {
  // Simple API key validation - replace with your logic
  return apiKey === process.env.API_SECRET_KEY;
}

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
  const isAllowed = await rateLimit(ip, request.nextUrl.pathname, 100, 15 * 60 * 1000);

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