import { kv } from '@vercel/kv';
import { SecurityMonitor } from './monitoring';

export async function rateLimit(
  ip: string,
  endpoint: string,
  limit: number = 10,
  window: number = 60000
) {
  const key = `rate-limit:${endpoint}:${ip}`;
  const now = Date.now();

  try {
    const requests = await kv.zrangebyscore(key, now - window, now);
    
    if (requests && requests.length >= limit) {
      await SecurityMonitor.logRateLimitViolation(ip, endpoint);
      return false;
    }

    await kv.zadd(key, now, now.toString());
    await kv.expire(key, Math.ceil(window / 1000));
    
    return true;
  } catch (error) {
    console.error('Rate limiting error:', error);
    return true; // Fail open if rate limiting is broken
  }
} 