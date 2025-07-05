# CLAUDE.md

This file provides comprehensive guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 🚀 Quick Start

```bash
# Development
npm run dev              # Start development server on port 3000
npm run build            # Build for production
npm start                # Start production server (uses custom server.js)
npm run lint             # Run ESLint
npm run generate-images  # Generate placeholder images using AI

# Essential file locations
src/app/page.tsx         # Homepage
src/components/          # All React components
src/lib/data/           # Static content (projects, team, etc.)
src/app/api/            # AI services & API routes
.env.local              # Environment variables
```plaintext

## 🏗️ Architecture Overview

This is a **Next.js 14 App Router** application for ImagiNative Studios - a digital agency platform with comprehensive AI integrations and a distinctive cyberpunk/terminal aesthetic.

### Technology Stack

- **Frontend**: Next.js 14, React 18, TypeScript, Tailwind CSS, Framer Motion
- **AI Services**: OpenAI (GPT-4), Anthropic (Claude), Replicate (Image Generation), Deepgram (Voice)
- **Backend**: Firebase (Auth/Firestore), Next.js API routes with edge runtime
- **Security**: Custom middleware, rate limiting, threat monitoring, comprehensive security headers
- **Validation**: Zod schemas throughout for runtime type safety
- **Styling**: Custom Tailwind configuration with terminal-themed design system
- **Typography**: JetBrains Mono for terminal/code elements, Inter for headings and body text

### Key Architectural Patterns

**Security-First Design**: Custom middleware (`src/middleware.ts`) handles authentication, rate limiting, and threat detection. Production server (`server.js`) adds additional security layers.

**AI Service Integration**: Multiple providers with streaming responses:

- Chat completions (OpenAI GPT-4 / Anthropic Claude 3.5 Sonnet)
- Image generation (Replicate Stable Diffusion)
- Voice transcription (Deepgram)
- Edge runtime for optimal performance

**Component Architecture**:

- Page components in `src/app/` following App Router conventions
- 25+ reusable UI components in `src/components/`
- WindowFrame wrapper component for terminal aesthetic consistency
- React contexts for global state (`AuthContext`, `DeepgramContext`)
- Custom hooks in `src/hooks/` and `src/lib/hooks/`

**Data Flow**:

- Static content in `src/lib/data/` (projects, team, testimonials, insights)
- Firebase for authentication and dynamic data persistence
- Zod validation schemas for all API inputs
- Comprehensive error boundaries and error handling

## 🎨 Design System & Styling

### Color Palette

```css
/* Terminal Colors */
bg-primary-black        /* #000000 - Main background */
text-primary-white      /* #FFFFFF - Primary text */
border-primary-red      /* #FF0000 - Accent borders */
text-primary-yellow     /* #FFFF00 - Highlights */

/* Opacity Variants */
text-primary-white/80   /* 80% opacity white */
text-primary-white/50   /* 50% opacity white */
bg-primary-red/20       /* 20% opacity red background */
```plaintext

### Typography System

```css
/* Font Families */
font-mono               /* JetBrains Mono - terminal/code aesthetic */
font-sans               /* Inter - general text */
font-heading            /* Inter - section headings */
font-body               /* Inter - body text */

/* Responsive Text Sizes (Fluid Typography) */
text-fluid-xs           /* clamp(0.75rem, 0.5vw + 0.5rem, 0.875rem) */
text-fluid-sm           /* clamp(0.875rem, 0.75vw + 0.625rem, 1rem) */
text-fluid-base         /* clamp(1rem, 1vw + 0.75rem, 1.125rem) */
text-fluid-lg           /* clamp(1.125rem, 1.25vw + 0.875rem, 1.5rem) */
text-fluid-xl           /* clamp(1.25rem, 1.5vw + 1rem, 1.875rem) */

/* Standard Responsive Patterns */
text-sm sm:text-base md:text-lg lg:text-xl    /* Responsive scaling */
p-4 sm:p-6 md:p-8 lg:p-10                    /* Responsive padding */
grid-cols-1 sm:grid-cols-2 lg:grid-cols-4    /* Responsive grid */
```plaintext

### Terminal UI Patterns

```css
/* Common Terminal Styling */
border-2 border-primary-white    /* Standard terminal borders */
hover:border-primary-red         /* Interactive hover states */
transition-colors               /* Smooth color transitions */

/* Custom Utilities */
shadow-terminal                 /* Terminal-style box shadow */
animate-blink                  /* Terminal cursor animation */
scrollbar-terminal             /* Custom terminal scrollbar */
```plaintext

## 🤖 AI Service Integration

### API Endpoints

```typescript
// Chat Completions
POST /api/openai/chat              # GPT-4 streaming chat
POST /api/anthropic/chat           # Claude 3.5 Sonnet chat

// Image Generation
POST /api/replicate/generate-image # Stable Diffusion images

// Voice Services
GET /api/deepgram/route            # Deepgram API key

// Monitoring
POST /api/monitoring/log           # Performance monitoring
POST /api/security/log             # Security event logging
```plaintext

### Usage Examples

```typescript
// Chat Integration
import { useChat } from 'ai/react';

const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
  api: '/api/openai/chat', // or '/api/anthropic/chat'
});

// Image Generation
const generateImage = async (prompt: string) => {
  const response = await fetch('/api/replicate/generate-image', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt }),
  });
  return response.json();
};

// Error Handling
try {
  const result = await apiCall();
} catch (error) {
  console.error('AI Service Error:', error);
}
```plaintext

### API Route Pattern

All AI API routes should follow this structure:

```typescript
import { NextRequest, NextResponse } from 'next/server';

export const runtime = "edge"; // For performance

export async function POST(req: NextRequest) {
  try {
    const { input } = await req.json();
    const result = await aiServiceCall(input);
    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    console.error('AI Service Error:', error);
    return NextResponse.json({ error: 'Service unavailable' }, { status: 503 });
  }
}
```plaintext

## 📱 Component Development

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
```plaintext

### WindowFrame Usage (Terminal Container)

```typescript
import WindowFrame from '@/components/WindowFrame';

<WindowFrame title="SECTION_TITLE">
  <div className="p-4 space-y-4">
    <h2 className="text-primary-red font-mono uppercase">
      &gt; Subsection Title
    </h2>
    <p className="text-primary-white/80 font-mono">
      Terminal-style content
    </p>
    <div className="border-l-2 border-primary-yellow pl-4">
      Highlighted content block
    </div>
  </div>
</WindowFrame>
```plaintext

### Form Validation Pattern

Always use Zod for form validation:

```typescript
import { useState } from 'react';
import { z } from 'zod';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Valid email required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export default function TerminalForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const validatedData = formSchema.parse(formData);
      // Submit to API
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errorMap: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            errorMap[err.path[0] as string] = err.message;
          }
        });
        setErrors(errorMap);
      }
    }
  };

  return (
    <WindowFrame title="CONTACT_FORM">
      <form onSubmit={handleSubmit} className="space-y-4 p-6">
        <div>
          <label className="block text-primary-yellow font-mono text-sm mb-2">
            NAME:
          </label>
          <input
            className="w-full bg-primary-black border-2 border-primary-white
                     text-primary-white font-mono p-3 focus:border-primary-red
                     focus:outline-none transition-colors"
            placeholder="Enter name..."
          />
        </div>
        
        <button className="w-full py-3 bg-primary-black border-2 border-primary-white
                         text-primary-white font-mono hover:border-primary-red
                         transition-colors">
          SUBMIT
        </button>
      </form>
    </WindowFrame>
  );
}
```plaintext

## 🗃️ Data Management

### Static Data Files

```typescript
// Portfolio Projects: src/lib/data/projects.ts
export const projects: Project[] = [
  {
    id: 'project-id',
    slug: 'project-slug',
    title: 'PROJECT_TITLE',
    description: 'Brief description',
    tags: ['AI', 'Web Development'],
    image: '/projects/project.jpg',
    technologies: ['Next.js', 'TypeScript'],
    featured: true
  }
];

// Team Members: src/lib/data/team.ts
export const team: TeamMember[] = [
  {
    id: 'member-id',
    name: 'Name',
    role: 'ROLE_TITLE',
    bio: 'Biography',
    image: '/team/member.jpg',
    skills: ['React', 'Node.js'],
    featured: true
  }
];

// Helper functions
export const getFeaturedProjects = () => projects.filter(p => p.featured);
export const getProjectBySlug = (slug: string) => projects.find(p => p.slug === slug);
```plaintext

### Dynamic Content with Firebase

```typescript
// Contact form submissions
export const submitContactForm = async (formData: {
  name: string;
  email: string;
  message: string;
}) => {
  try {
    const docRef = await addDoc(collection(db, 'contacts'), {
      ...formData,
      timestamp: new Date(),
      status: 'unread'
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Firebase submission error:', error);
    return { success: false, error: error.message };
  }
};
```plaintext

## 🔧 Common Development Tasks

### Adding New Content

#### Portfolio Project

```typescript
// Edit: src/lib/data/projects.ts
{
  id: 'new-project',
  slug: 'new-project',
  title: 'NEW_PROJECT_TITLE',
  description: 'Brief project description',
  fullDescription: 'Detailed description',
  tags: ['AI', 'Web Development'],
  image: '/projects/new-project.jpg',
  technologies: ['Next.js', 'TypeScript'],
  timeline: 'Q1 2024',
  client: 'Client Name',
  featured: true
}
```plaintext

#### Team Member

```typescript
// Edit: src/lib/data/team.ts
{
  id: 'new-member',
  name: 'Member Name',
  role: 'ROLE_TITLE',
  bio: 'Professional background',
  image: '/team/new-member.jpg',
  skills: ['Skill 1', 'Skill 2'],
  social: {
    linkedin: 'https://linkedin.com/in/username'
  }
}
```plaintext

### Creating New Pages

```typescript
// 1. Create: src/app/new-page/page.tsx
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'New Page | ImagiNative Studios',
  description: 'Page description',
};

export default function NewPage() {
  return (
    <div className="min-h-screen bg-primary-black">
      <Navigation />
      <main className="pt-20 pb-16">
        {/* Page content */}
      </main>
      <Footer />
    </div>
  );
}

// 2. Add to Navigation: src/components/Navigation.tsx
const navItems = [
  // ... existing items
  { name: 'New Page', href: '/new-page' }
];
```plaintext

### Creating API Routes

```typescript
// Create: src/app/api/new-endpoint/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const schema = z.object({
  field: z.string()
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = schema.parse(body);
    
    // Process request
    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
```plaintext

## 🔧 Environment Configuration

### Required Variables (.env.local)

```bash
# Firebase (Required for auth/database)
NEXT_PUBLIC_FIREBASE_API_KEY=your-key
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-domain
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id

# AI Services (Required for AI features)
OPENAI_API_KEY=sk-proj-your-openai-key
ANTHROPIC_API_KEY=sk-ant-your-anthropic-key
REPLICATE_API_TOKEN=r8_your-replicate-token
DEEPGRAM_API_KEY=your-deepgram-key

# Optional
SENDGRID_API_KEY=SG.your-sendgrid-key
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```plaintext

## 🔒 Security & Performance

### Security Best Practices

- Never expose API keys in client-side code
- Use middleware for rate limiting and threat detection
- Implement proper CORS configuration
- Sanitize all user inputs with DOMPurify
- Use Content Security Policy headers
- Monitor for suspicious activity

### Performance Optimization

```typescript
// 1. Dynamic imports for heavy components
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <SectionLoading />,
  ssr: false
});

// 2. Image optimization
<Image src="/image.jpg" width={800} height={600} priority sizes="..." />

// 3. Memoization
const value = useMemo(() => expensiveCalculation(data), [data]);

// 4. Debounced API calls
const debouncedSearch = useCallback(debounce(searchFn, 300), []);
```plaintext

## 🐛 Troubleshooting

### Common Issues & Solutions

#### Hydration Errors

```typescript
// Problem: React hydration mismatch
// Solution: Use mounted state
const [mounted, setMounted] = useState(false);
useEffect(() => setMounted(true), []);
if (!mounted) return null;
```plaintext

#### Animation Issues

```typescript
// Problem: Framer Motion SSR conflicts
// Solution: Dynamic import with SSR disabled
const Component = dynamic(() => import('./Component'), { ssr: false });
```plaintext

#### Build Failures

```bash
# Problem: Build not working
# Solution: Clean rebuild
rm -rf .next node_modules package-lock.json
npm install
npm run build

# Check for TypeScript errors
npx tsc --noEmit

# Check linting
npm run lint
```plaintext

#### API Route Errors

```typescript
// Add comprehensive error logging
export async function POST(req: NextRequest) {
  try {
    console.log('Request:', { method: req.method, url: req.url });
    // API logic
  } catch (error) {
    console.error('Detailed error:', { message: error.message, stack: error.stack });
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
```plaintext

## 📋 Pre-Deployment Checklist

### Build & Test

- [ ] `npm run build` passes without errors
- [ ] `npm run lint` shows no issues
- [ ] TypeScript check: `npx tsc --noEmit`
- [ ] All environment variables configured
- [ ] Production server starts: `npm start`

### Functionality

- [ ] Homepage loads correctly
- [ ] Navigation works on all devices
- [ ] Contact form submits successfully
- [ ] AI chat features operational
- [ ] Image generation works
- [ ] Voice recorder functions
- [ ] Portfolio/blog pages display

### Performance & Security

- [ ] Mobile responsiveness verified
- [ ] Core Web Vitals acceptable
- [ ] SEO metadata present
- [ ] Security headers active
- [ ] API rate limiting working
- [ ] No sensitive data exposed

## 🎨 Terminal Text Patterns

### Standard Terminal Formatting

```typescript
// Section headers
<h2 className="text-primary-red font-mono uppercase tracking-wider">
  &gt; SECTION_TITLE
</h2>

// Terminal prompts
<p className="font-mono text-primary-white">
  &gt; Command or content here
</p>

// Highlighted content
<div className="border-l-2 border-primary-yellow pl-4">
  <p className="text-primary-white font-mono">Important information</p>
</div>

// Status messages
<div className="text-primary-yellow font-mono">&gt; Loading...</div>
<div className="text-primary-green font-mono">&gt; Success!</div>
<div className="text-primary-red font-mono">&gt; Error occurred</div>
```plaintext

## 📁 File Structure Reference

```plaintext
src/
├── app/                          # Next.js 14 App Router
│   ├── layout.tsx                # Root layout with fonts & metadata
│   ├── page.tsx                  # Homepage with dynamic imports
│   ├── api/                      # AI service API routes
│   ├── services/                 # Service pages
│   ├── work/                     # Portfolio pages
│   ├── insights/                 # Blog pages
│   └── contact/                  # Contact page
├── components/                   # 25+ reusable React components
│   ├── WindowFrame.tsx           # Terminal-style container wrapper
│   ├── Navigation.tsx            # Main navigation
│   ├── Footer.tsx                # Site footer
│   └── ...                       # Additional components
├── lib/                          # Utilities and configurations
│   ├── data/                     # Static content
│   ├── contexts/                 # React context providers
│   ├── hooks/                    # Custom React hooks
│   ├── utils/                    # Helper functions
│   └── services/                 # External service integrations
├── middleware.ts                 # Security & monitoring
└── hooks/                        # Additional custom hooks

Configuration:
├── next.config.js                # Next.js configuration
├── tailwind.config.js            # Custom design system
├── tsconfig.json                 # TypeScript configuration
└── server.js                     # Production server with security
```plaintext

---

## Important Reminders

1. **Maintain Aesthetic Consistency**: Always use the terminal/cyberpunk theme with appropriate colors, typography, and styling patterns.

2. **Security First**: Never compromise security for functionality. Always validate inputs, sanitize data, and follow security best practices.

3. **Performance Optimization**: Use dynamic imports, proper image optimization, and efficient coding patterns to maintain fast load times.

4. **Error Handling**: Implement comprehensive error handling for all AI services and user interactions.

5. **Type Safety**: Use TypeScript and Zod validation throughout to maintain code quality and prevent runtime errors.

6. **Responsive Design**: Ensure all components work across all 7 breakpoints and maintain mobile-first approach.

7. **AI Integration**: Test all AI services thoroughly and implement proper fallback mechanisms.

This platform represents a modern, secure, and performant digital agency website with cutting-edge AI integrations while maintaining a distinctive cyberpunk/terminal visual identity.
