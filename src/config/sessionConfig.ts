import { SessionOptions } from 'next-auth';

export const sessionConfig: SessionOptions = {
  strategy: 'jwt',
  maxAge: 30 * 24 * 60 * 60, // 30 days
  updateAge: 24 * 60 * 60, // 24 hours
  generateSessionToken: () => crypto.randomUUID(),
  cookie: {
    name: 'next-auth.session-token',
    options: {
      httpOnly: true,
      sameSite: 'lax',
      path: '/',
      secure: process.env.NODE_ENV === 'production',
      maxAge: 30 * 24 * 60 * 60 // 30 days
    }
  }
}; 