import { NextResponse } from 'next/server';
import { headers } from 'next/headers';

export async function POST(req: Request) {
  const headersList = headers();
  const internalKey = headersList.get('x-internal-key');

  if (internalKey !== process.env.MONITORING_KEY) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const event = await req.json();
    
    // Here you would typically send to your logging service
    // Example with Winston or other logger
    // logger.log('security-event', event);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Logging error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 