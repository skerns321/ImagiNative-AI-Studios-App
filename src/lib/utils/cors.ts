import { NextResponse } from 'next/server';

const allowedOrigins = [
  process.env.NEXT_PUBLIC_SITE_URL,
  'https://yourdomain.com',
];

export function corsCheck(request: Request) {
  const origin = request.headers.get('origin');
  
  if (!origin || !allowedOrigins.includes(origin)) {
    return new NextResponse(null, {
      status: 403,
      statusText: 'Forbidden',
    });
  }

  return null;
} 