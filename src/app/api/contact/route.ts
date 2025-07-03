import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';
import { z } from 'zod';
import { headers } from 'next/headers';
import { kv } from '@vercel/kv';
import { sanitizeInput } from '@/lib/utils/sanitize';

// Initialize SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(1000),
  captchaToken: z.string(),
});

// Rate limiting function
async function checkRateLimit(ip: string): Promise<boolean> {
  const now = Date.now();
  const windowSize = 3600000; // 1 hour in milliseconds
  const maxRequests = 5; // Max 5 requests per hour

  const key = `contact-rate-limit:${ip}`;
  const requests = await kv.zrange(key, now - windowSize, now, { byScore: true });

  if (requests && requests.length >= maxRequests) {
    return false;
  }

  await kv.zadd(key, { score: now, member: now.toString() });
  await kv.expire(key, 3600); // Expire after 1 hour

  return true;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(body.name),
      email: sanitizeInput(body.email),
      message: sanitizeInput(body.message),
      captchaToken: body.captchaToken,
    };

    // Validate input
    const result = contactSchema.safeParse(sanitizedData);
    if (!result.success) {
      return NextResponse.json(
        { error: 'Invalid input data' },
        { status: 400 }
      );
    }

    // Verify hCaptcha
    const captchaVerification = await fetch('https://hcaptcha.com/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `response=${sanitizedData.captchaToken}&secret=${process.env.HCAPTCHA_SECRET_KEY}`,
    });

    const captchaResult = await captchaVerification.json();
    if (!captchaResult.success) {
      return NextResponse.json(
        { error: 'Invalid captcha' },
        { status: 400 }
      );
    }

    // Check rate limit
    const headersList = headers();
    const ip = headersList.get('x-forwarded-for') || 'unknown';
    const isAllowed = await checkRateLimit(ip);
    if (!isAllowed) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Send email
    const msg = {
      to: process.env.CONTACT_EMAIL,
      from: process.env.SENDGRID_FROM_EMAIL!,
      subject: `New Contact Form Submission from ${sanitizedData.name}`,
      text: `
Name: ${sanitizedData.name}
Email: ${sanitizedData.email}
Message: ${sanitizedData.message}
      `,
      html: `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${sanitizedData.name}</p>
<p><strong>Email:</strong> ${sanitizedData.email}</p>
<p><strong>Message:</strong><br>${sanitizedData.message}</p>
      `,
    };

    await sgMail.send(msg);

    // Send confirmation email to user
    const confirmationMsg = {
      to: sanitizedData.email,
      from: process.env.SENDGRID_FROM_EMAIL!,
      subject: 'We received your message - ImagiNative AI Studios',
      text: `
Thank you for contacting us! We've received your message and will get back to you soon.

Best regards,
ImagiNative AI Studios Team
      `,
      html: `
<h2>Thank you for contacting us!</h2>
<p>We've received your message and will get back to you soon.</p>
<br>
<p>Best regards,<br>ImagiNative AI Studios Team</p>
      `,
    };

    await sgMail.send(confirmationMsg);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 