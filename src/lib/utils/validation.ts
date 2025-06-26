import { z } from 'zod';
import DOMPurify from 'isomorphic-dompurify';

// Contact form validation schema
export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name must be less than 100 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000, 'Message must be less than 1000 characters'),
  services: z.array(z.string()).optional(),
});

// Input sanitization functions
export const sanitizeAndValidate = {
  // HTML sanitization
  sanitizeHtml: (input: string): string => {
    return DOMPurify.sanitize(input);
  },
  
  // General text input sanitization
  sanitizeText: (input: string): string => {
    return input.trim().replace(/[<>]/g, '');
  },
  
  // Email validation
  isValidEmail: (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },
  
  // URL validation
  isValidUrl: (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }
}; 