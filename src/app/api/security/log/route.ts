
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  // Validate request
  if (!req.headers.get('content-type')?.includes('application/json')) {
    return new Response(JSON.stringify({ error: 'Invalid content type' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const event = await req.json();

    // Log to your preferred service (e.g., console.log)
    console.log('Security event:', event);
    
    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error logging security event:', error);
    return new Response(JSON.stringify({ error: 'Failed to log security event' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
