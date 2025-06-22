import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { SecurityMonitor } from '@/lib/utils/monitoring';

export async function authMiddleware(request: NextRequest) {
  // Protected routes pattern
  const protectedPaths = ['/dashboard', '/admin', '/api/protected'];
  const isProtectedPath = protectedPaths.some(path => 
    request.nextUrl.pathname.startsWith(path)
  );

  if (isProtectedPath) {
    const token = await getToken({ 
      req: request, 
      secret: process.env.NEXTAUTH_SECRET 
    });

    if (!token) {
      await SecurityMonitor.logAuthFailure(
        'unknown',
        'Missing or invalid token'
      );
      return NextResponse.redirect(new URL('/auth/signin', request.url));
    }

    // Additional role-based checks for admin routes
    if (request.nextUrl.pathname.startsWith('/admin') && 
        token.role !== 'admin') {
      await SecurityMonitor.logAuthFailure(
        token.sub || 'unknown',
        'Insufficient permissions'
      );
      return NextResponse.redirect(new URL('/unauthorized', request.url));
    }
  }

  return NextResponse.next();
} 