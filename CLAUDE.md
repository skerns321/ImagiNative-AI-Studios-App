# CLAUDE.md

This file provides comprehensive guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
npm run dev              # Start development server on port 3000
npm run build            # Build for production
npm start                # Start production server (uses custom server.js)
npm run lint             # Run ESLint
npm run generate-images  # Generate placeholder images using AI
```

## Architecture Overview

This is a **Next.js 14 App Router** application for ImagiNative Studios - a digital agency platform with comprehensive AI integrations and a distinctive cyberpunk/terminal aesthetic.

### Technology Stack

- **Frontend**: Next.js 14, React 18, TypeScript, Tailwind CSS, Framer Motion
- **AI Services**: OpenAI (GPT-4), Anthropic (Claude), Replicate (Image Generation), Deepgram (Voice)
- **Backend**: Firebase (Auth/Firestore), Next.js API routes with edge runtime
- **Security**: Custom middleware, rate limiting, threat monitoring, comprehensive security headers
- **Validation**: Zod schemas throughout for runtime type safety
- **Styling**: Custom Tailwind configuration with terminal-themed design system
- **Performance**: Dynamic imports, image optimization, responsive design with 7 breakpoints

### Key Architectural Patterns

**Security-First Design**: Custom middleware (`src/middleware.ts`) handles authentication, rate limiting, and threat detection with comprehensive monitoring system. Additional security layer in production server (`server.js`).

**AI Service Integration**: Multiple AI providers with streaming responses and fallback systems:
- Chat completions (OpenAI GPT-4 / Anthropic Claude 3.5 Sonnet)
- Image generation (Replicate Stable Diffusion)
- Voice transcription (Deepgram)
- Edge runtime for optimal performance

**Component Architecture**:
- Page components in `src/app/` following App Router conventions
- 25+ reusable UI components in `src/components/`
- React contexts for global state management (`AuthContext`, `DeepgramContext`)
- Custom hooks in `src/hooks/` and `src/lib/hooks/`
- WindowFrame wrapper component for terminal aesthetic consistency

**Data Flow**: 
- Static content in `src/lib/data/` (projects, team, testimonials, insights)
- Firebase for authentication and dynamic data persistence
- Zod validation schemas in `src/lib/utils/validation.ts`
- Error boundaries and comprehensive error handling

**Design System**:
- Terminal/cyberpunk aesthetic with black, white, red, yellow color scheme
- JetBrains Mono for terminal/code elements, Inter for headings and body text
- Fluid typography using CSS clamp() for responsive scaling
- Custom Tailwind utilities for terminal effects and animations

## Important Conventions

**Styling Consistency**: 
- All components should use the terminal aesthetic with WindowFrame containers
- Maintain the cyberpunk color scheme throughout
- Use consistent typography hierarchy and responsive patterns
- Follow mobile-first responsive design with 7 breakpoints (xs to 3xl)

**Code Patterns**:
- Always use 'use client' directive for interactive components
- Implement mounted state pattern to prevent hydration issues
- Use dynamic imports for performance optimization
- Follow Framer Motion animation patterns for consistency

**Error Handling**: 
- Comprehensive error boundaries in all major components
- API error responses with proper status codes and monitoring
- Graceful degradation when AI services are unavailable

**Type Safety**: 
- Strict TypeScript configuration with no implicit any
- Zod schemas for all API inputs and form validation
- Proper TypeScript interfaces for all data structures

**Security Headers**: 
- Production server implements additional security layers
- Content Security Policy configured for AI service domains
- Rate limiting and threat monitoring in middleware

## File Structure Notes

```
src/
├── app/                          # Next.js 14 App Router
│   ├── layout.tsx                # Root layout with fonts & metadata
│   ├── page.tsx                  # Homepage with dynamic imports
│   ├── globals.css               # Global styles & Tailwind imports
│   ├── api/                      # AI service API routes
│   │   ├── anthropic/chat/       # Claude 3.5 Sonnet streaming
│   │   ├── openai/chat/          # GPT-4 streaming
│   │   ├── replicate/generate-image/ # Stable Diffusion
│   │   ├── deepgram/             # Voice transcription
│   │   ├── contact/              # Contact form handler
│   │   ├── monitoring/log/       # Performance monitoring
│   │   └── security/log/         # Security event logging
│   ├── services/                 # Service pages
│   ├── work/                     # Portfolio pages with dynamic routing
│   ├── insights/                 # Blog pages with dynamic routing
│   └── contact/                  # Contact page
├── components/                   # 25+ reusable React components
│   ├── WindowFrame.tsx           # Terminal-style container wrapper
│   ├── Navigation.tsx            # Main navigation with mobile menu
│   ├── Footer.tsx                # Site footer with social links
│   ├── Hero.tsx                  # Homepage hero section
│   ├── About.tsx                 # About section
│   ├── Services.tsx              # Services showcase
│   ├── Work.tsx                  # Portfolio section
│   ├── Testimonials.tsx          # Client testimonials
│   ├── Insights.tsx              # Blog section
│   ├── Contact.tsx               # Contact section with form
│   ├── VoiceRecorder.tsx         # Voice note functionality
│   ├── ImageUpload.tsx           # AI image generation
│   ├── ErrorBoundary.tsx         # Error handling
│   ├── LoadingSpinner.tsx        # Loading states
│   ├── ScrollProgress.tsx        # Page scroll indicator
│   ├── CyberpunkBackground.tsx   # Animated background
│   └── ...                       # Additional components
├── lib/                          # Utilities and configurations
│   ├── data/                     # Static content
│   │   ├── projects.ts           # Portfolio projects
│   │   ├── team.ts               # Team member profiles
│   │   ├── testimonials.ts       # Client testimonials
│   │   └── insights.ts           # Blog articles
│   ├── contexts/                 # React context providers
│   │   ├── AuthContext.tsx       # Firebase authentication
│   │   └── DeepgramContext.tsx   # Voice API context
│   ├── hooks/                    # Custom React hooks
│   │   ├── useAuth.ts            # Authentication hook
│   │   ├── useCustomScroll.ts    # Scroll behavior
│   │   └── useKeyboardNavigation.ts # Accessibility
│   ├── utils/                    # Helper functions
│   │   ├── validation.ts         # Zod schemas
│   │   ├── sanitize.ts           # Input sanitization
│   │   ├── cors.ts               # CORS configuration
│   │   ├── rateLimit.ts          # Rate limiting
│   │   ├── monitoring.ts         # Performance monitoring
│   │   └── security-monitor.ts   # Security monitoring
│   ├── services/                 # External service integrations
│   │   └── monitoring.ts         # Monitoring service
│   └── config/                   # Configuration files
│       ├── sessionConfig.ts      # Session configuration
│       └── securityHeaders.ts    # Security headers
├── middleware.ts                 # Next.js middleware (security & monitoring)
├── middleware/                   # Additional middleware modules
│   ├── apiSecurityMiddleware.ts  # API security
│   └── authMiddleware.ts         # Authentication
└── hooks/                        # Additional custom hooks
    └── useResponsive.ts          # Responsive breakpoints

Configuration Files:
├── next.config.js                # Next.js configuration with security
├── tailwind.config.js            # Custom design system
├── tsconfig.json                 # TypeScript configuration
├── server.js                     # Production server with security
├── postcss.config.mjs            # PostCSS configuration
└── package.json                  # Dependencies and scripts

Public Assets:
public/
├── hero/                         # Hero section images
├── projects/                     # Portfolio images
├── team/                         # Team member photos
├── insights/                     # Blog post images
├── og-image.jpg                  # Social sharing image
└── ...                           # Additional static assets
```

## Component Development Guidelines

### Standard Component Template
Always follow this pattern for new components:

```typescript
'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import WindowFrame from '@/components/WindowFrame';

interface ComponentProps {
  title?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function NewComponent({ 
  title = "COMPONENT_TITLE", 
  className = '',
  children 
}: ComponentProps) {
  // Prevent hydration issues
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render until mounted
  if (!mounted) return null;

  return (
    <motion.section
      className={`bg-primary-black text-primary-white ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <WindowFrame title={title}>
        <div className="p-4 sm:p-6 lg:p-8 space-y-4">
          {children}
        </div>
      </WindowFrame>
    </motion.section>
  );
}
```

### Terminal Styling Guidelines
- Use `WindowFrame` component for all major sections
- Maintain terminal aesthetic with appropriate colors and typography
- Follow responsive design patterns with proper breakpoints
- Use Framer Motion for consistent animations

### Form Validation Pattern
Always use Zod for form validation:

```typescript
import { z } from 'zod';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Valid email required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

// Use in component with proper error handling
```

## AI Service Integration Guidelines

### API Route Pattern
All AI API routes should follow this structure:

```typescript
import { NextRequest, NextResponse } from 'next/server';

export const runtime = "edge"; // For performance

export async function POST(req: NextRequest) {
  try {
    // Input validation
    const { input } = await req.json();
    
    // Process with AI service
    const result = await aiServiceCall(input);
    
    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    console.error('AI Service Error:', error);
    return NextResponse.json(
      { error: 'Service unavailable' },
      { status: 503 }
    );
  }
}
```

### Error Handling
- Always implement graceful degradation for AI services
- Provide meaningful error messages to users
- Log errors for monitoring and debugging
- Use try-catch blocks around all AI service calls

## Security Considerations

### Environment Variables
Required environment variables for full functionality:

```bash
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

# AI Service Keys
OPENAI_API_KEY=
ANTHROPIC_API_KEY=
REPLICATE_API_TOKEN=
DEEPGRAM_API_KEY=

# Optional Services
SENDGRID_API_KEY=
NEXT_PUBLIC_SITE_URL=
```

### Security Best Practices
- Never expose API keys in client-side code
- Use middleware for rate limiting and threat detection
- Implement proper CORS configuration
- Sanitize all user inputs with DOMPurify
- Use Content Security Policy headers
- Monitor for suspicious activity

## Performance Optimization

### Code Splitting
- Use dynamic imports for heavy components
- Implement proper loading states
- Use Suspense boundaries where appropriate

### Image Optimization
- Use Next.js Image component with proper sizing
- Implement responsive images with sizes attribute
- Use placeholder and priority props appropriately

### Bundle Optimization
- Avoid importing entire libraries when only specific functions are needed
- Use tree shaking effectively
- Monitor bundle size with analysis tools

## Testing

No test framework is currently configured. When adding tests:
1. Check with the user for their preferred testing approach
2. Consider the existing architecture and patterns
3. Ensure tests maintain the cyberpunk/terminal aesthetic in any UI testing
4. Include tests for AI service integrations with proper mocking

## Deployment Guidelines

### Build Process
1. Ensure all environment variables are configured
2. Run `npm run build` to verify production build
3. Test with `npm start` locally
4. Verify all AI services are functional
5. Check security headers and middleware functionality

### Production Environment
- Use custom `server.js` for additional security
- Ensure all environment variables are set in deployment platform
- Monitor performance and error rates
- Verify AI service quotas and limits

## Accessibility

- Implement proper ARIA labels and roles
- Ensure keyboard navigation works throughout
- Maintain proper color contrast ratios
- Provide alternative text for images
- Use semantic HTML elements

## Content Management

### Static Content
- Portfolio projects in `src/lib/data/projects.ts`
- Team members in `src/lib/data/team.ts`
- Blog articles in `src/lib/data/insights.ts`
- Testimonials in `src/lib/data/testimonials.ts`

### Dynamic Content
- Contact form submissions stored in Firebase
- User authentication through Firebase Auth
- Monitoring data collected through custom middleware

## Troubleshooting Common Issues

### Hydration Errors
Use the mounted state pattern to prevent SSR/client mismatches:
```typescript
const [mounted, setMounted] = useState(false);
useEffect(() => setMounted(true), []);
if (!mounted) return null;
```

### Animation Issues
Use dynamic imports for components with complex animations:
```typescript
const AnimatedComponent = dynamic(() => import('./Component'), { ssr: false });
```

### Build Failures
1. Check TypeScript errors: `npx tsc --noEmit`
2. Run linting: `npm run lint`
3. Clear cache: `rm -rf .next`
4. Reinstall dependencies if needed

### AI Service Issues
1. Verify environment variables are set
2. Check API key validity and quotas
3. Implement proper error handling and fallbacks
4. Monitor service status and response times

---

## Important Reminders for Claude Code

1. **Maintain Aesthetic Consistency**: Always use the terminal/cyberpunk theme with appropriate colors, typography, and styling patterns.

2. **Security First**: Never compromise security for functionality. Always validate inputs, sanitize data, and follow security best practices.

3. **Performance Optimization**: Use dynamic imports, proper image optimization, and efficient coding patterns to maintain fast load times.

4. **Error Handling**: Implement comprehensive error handling for all AI services and user interactions.

5. **Type Safety**: Use TypeScript and Zod validation throughout to maintain code quality and prevent runtime errors.

6. **Responsive Design**: Ensure all components work across all 7 breakpoints and maintain mobile-first approach.

7. **AI Integration**: Test all AI services thoroughly and implement proper fallback mechanisms.

8. **Documentation**: Update relevant documentation when making significant changes to architecture or patterns.

This platform represents a modern, secure, and performant digital agency website with cutting-edge AI integrations while maintaining a distinctive visual identity.