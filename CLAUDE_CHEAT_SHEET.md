# 🚀 Claude Developer Cheat Sheet - ImagiNative Studios

## ⚡ Quick Commands
```bash
npm run dev              # Start development server (port 3000)
npm run build            # Production build
npm start                # Start production server (custom server.js)
npm run lint             # ESLint code checking
npm run generate-images  # Generate AI placeholder images
```

## 🎯 Project Identity & Theme
**Cyberpunk/Terminal Aesthetic Digital Agency** with comprehensive AI integrations
- **Primary Colors**: `#000000` (black), `#FFFFFF` (white), `#FF0000` (red), `#FFFF00` (yellow)
- **Typography**: JetBrains Mono (terminal/code), Inter (headings and body at different weights)
- **Design Language**: WindowFrame components, terminal borders, monospace styling
- **Animation**: Framer Motion with subtle, performance-focused effects

## 📁 Critical File Locations
```
src/
├── app/
│   ├── page.tsx                    # Homepage
│   ├── layout.tsx                  # Root layout with fonts & metadata
│   ├── api/                        # AI service API routes
│   │   ├── openai/chat/route.ts    # GPT-4 chat endpoint
│   │   ├── anthropic/chat/route.ts # Claude chat endpoint
│   │   ├── replicate/generate-image/route.ts # Image generation
│   │   └── deepgram/route.ts       # Voice transcription
│   ├── services/                   # Service pages
│   ├── work/                       # Portfolio pages
│   └── insights/                   # Blog/articles
├── components/                     # 25+ reusable React components
│   ├── WindowFrame.tsx             # Terminal-style container wrapper
│   ├── Navigation.tsx              # Main navigation
│   ├── Footer.tsx                  # Site footer
│   └── ...
├── lib/
│   ├── data/                       # Static content
│   │   ├── projects.ts             # Portfolio projects
│   │   ├── team.ts                 # Team member data
│   │   ├── testimonials.ts         # Client testimonials
│   │   └── insights.ts             # Blog articles
│   ├── contexts/                   # React contexts
│   ├── utils/                      # Helper functions & validation
│   └── services/                   # External service integrations
├── middleware.ts                   # Security, rate limiting, monitoring
└── hooks/                          # Custom React hooks

Public Assets:
public/
├── hero/                          # Hero section images
├── projects/                      # Portfolio images
├── team/                          # Team member photos
├── insights/                      # Blog post images
└── ...

Configuration:
├── tailwind.config.js             # Custom design system
├── next.config.js                 # Next.js configuration
├── server.js                      # Production server with security
├── tsconfig.json                  # TypeScript configuration
└── .env.local                     # Environment variables
```

## 🤖 AI Service Integrations

### API Endpoints
```typescript
// Chat Completions
POST /api/openai/chat              # GPT-4 streaming responses
POST /api/anthropic/chat           # Claude 3.5 Sonnet streaming

// Image Generation
POST /api/replicate/generate-image # Stable Diffusion via Replicate

// Voice Services
GET /api/deepgram/route            # Deepgram API key for transcription

// Monitoring & Security
POST /api/monitoring/log           # Performance monitoring
POST /api/security/log             # Security event logging
```

### Usage Patterns
```typescript
// Chat Integration
import { useChat } from 'ai/react';

const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
  api: '/api/openai/chat', // or '/api/anthropic/chat'
  onError: (error) => console.error('AI Error:', error),
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
```

## 🎨 Component Development Patterns

### Standard Component Template
```typescript
'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface ComponentProps {
  title?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function Component({ title, className = '', children }: ComponentProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent hydration issues

  return (
    <motion.section
      className={`bg-primary-black text-primary-white font-mono ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <WindowFrame title={title || "COMPONENT_TITLE"}>
        <div className="p-4 sm:p-6 lg:p-8">
          {children}
        </div>
      </WindowFrame>
    </motion.section>
  );
}
```

### WindowFrame Usage (Terminal Aesthetic)
```typescript
import WindowFrame from '@/components/WindowFrame';

<WindowFrame 
  title="SECTION_TITLE"
  className="max-w-4xl mx-auto"
>
  <div className="space-y-4">
    <p className="font-mono text-primary-white/80">
      &gt; Terminal-style content here
    </p>
    <div className="border-l-2 border-primary-red pl-4">
      Highlighted content block
    </div>
  </div>
</WindowFrame>
```

## 🎨 Design System Classes

### Color System
```css
/* Background Colors */
.bg-primary-black     /* #000000 - Main background */
.bg-primary-white     /* #FFFFFF - Light backgrounds */

/* Text Colors */
.text-primary-white   /* #FFFFFF - Primary text */
.text-primary-red     /* #FF0000 - Accent/highlights */
.text-primary-yellow  /* #FFFF00 - Special emphasis */
.text-primary-white/70 /* 70% opacity white */
.text-primary-white/50 /* 50% opacity white */

/* Border Colors */
.border-primary-white /* Default borders */
.border-primary-red   /* Accent borders */
.border-primary-yellow /* Special borders */
```

### Typography Classes
```css
/* Font Families */
.font-mono            /* JetBrains Mono - terminal/code aesthetic */
.font-heading         /* Inter - section headings */
.font-body            /* Inter - body text */
.font-sans            /* Inter - general sans-serif text */

/* Responsive Text Sizes */
.text-fluid-xs        /* clamp(0.75rem, 0.5vw + 0.5rem, 0.875rem) */
.text-fluid-sm        /* clamp(0.875rem, 0.75vw + 0.625rem, 1rem) */
.text-fluid-base      /* clamp(1rem, 1vw + 0.75rem, 1.125rem) */
.text-fluid-lg        /* clamp(1.125rem, 1.25vw + 0.875rem, 1.5rem) */
.text-fluid-xl        /* clamp(1.25rem, 1.5vw + 1rem, 1.875rem) */
```

### Terminal UI Classes
```css
/* Common Patterns */
.terminal-border      /* border-2 border-primary-white */
.terminal-button      /* Standard terminal-style button */
.terminal-input       /* Terminal-style form input */

/* Custom Utilities */
.text-shadow-terminal /* 2px 2px 0 #ff0000 */
.text-shadow-glow     /* 0 0 10px currentColor */
.shadow-terminal      /* 0 0 0 2px #ff0000, 4px 4px 0 0 #ffff00 */
.shadow-terminal-hover /* 0 0 0 2px #ffff00, 6px 6px 0 0 #ff0000 */

/* Animations */
.animate-blink        /* Terminal cursor blink */
.animate-glitch       /* Subtle glitch effect */
.animate-fade-in      /* Smooth fade in */
.animate-slide-up     /* Slide up animation */
```

### Responsive Design Patterns
```css
/* Mobile-First Approach */
.responsive-text {
  @apply text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl;
}

.responsive-spacing {
  @apply p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12;
}

.responsive-grid {
  @apply grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4;
}

/* Breakpoints: xs(475px), sm(640px), md(768px), lg(1024px), xl(1280px), 2xl(1536px), 3xl(1920px) */
```

## 📋 Common Development Tasks

### Adding New Content

#### 1. Add Portfolio Project
```typescript
// Edit: src/lib/data/projects.ts
export const projects: Project[] = [
  // ... existing projects
  {
    id: 'new-project-id',
    slug: 'new-project-slug',
    title: 'NEW_PROJECT_TITLE',
    description: 'Brief project description for listings',
    fullDescription: 'Detailed project description with technical details',
    tags: ['AI', 'Web Development', 'React'],
    image: '/projects/new-project.jpg',
    gallery: ['/projects/new-project-1.jpg', '/projects/new-project-2.jpg'],
    technologies: ['Next.js', 'TypeScript', 'OpenAI'],
    timeline: 'Q1 2024',
    client: 'Client Name',
    challenge: 'Project challenge description',
    solution: 'How we solved the challenge',
    results: 'Quantifiable results and outcomes'
  }
];
```

#### 2. Add Team Member
```typescript
// Edit: src/lib/data/team.ts
export const team: TeamMember[] = [
  // ... existing members
  {
    id: 'new-member-id',
    name: 'Full Name',
    role: 'ROLE_TITLE',
    bio: 'Professional biography and background',
    image: '/team/new-member.jpg',
    skills: ['Skill 1', 'Skill 2', 'Skill 3'],
    social: {
      linkedin: 'https://linkedin.com/in/username',
      github: 'https://github.com/username',
      twitter: 'https://twitter.com/username'
    }
  }
];
```

#### 3. Add Blog Article
```typescript
// Edit: src/lib/data/insights.ts
export const insights: Insight[] = [
  // ... existing articles
  {
    id: 'new-article-id',
    slug: 'new-article-slug',
    title: 'Article Title',
    excerpt: 'Brief article summary for listings',
    content: 'Full article content in markdown format',
    image: '/insights/new-article.jpg',
    author: 'Author Name',
    date: '2024-01-15',
    readTime: '5 min read',
    tags: ['AI', 'Technology', 'Innovation'],
    category: 'Technology'
  }
];
```

### Creating New Pages

#### 1. Basic Page Structure
```typescript
// Create: src/app/new-page/page.tsx
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WindowFrame from '@/components/WindowFrame';

export const metadata: Metadata = {
  title: 'Page Title | ImagiNative Studios',
  description: 'Page description for SEO',
};

export default function NewPage() {
  return (
    <div className="min-h-screen bg-primary-black">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <WindowFrame title="PAGE_TITLE">
            <div className="p-6 space-y-6">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-mono text-primary-white">
                &gt; Page Heading_
              </h1>
              
              <p className="text-primary-white/80 font-mono">
                Page content goes here...
              </p>
            </div>
          </WindowFrame>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
```

#### 2. Add to Navigation
```typescript
// Edit: src/components/Navigation.tsx
const navItems = [
  // ... existing items
  { name: 'New Page', href: '/new-page' }
];
```

### Creating API Routes
```typescript
// Create: src/app/api/new-endpoint/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const requestSchema = z.object({
  field1: z.string(),
  field2: z.number().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validatedData = requestSchema.parse(body);
    
    // Process request
    const result = {
      success: true,
      data: validatedData
    };
    
    return NextResponse.json(result);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Invalid request' },
      { status: 400 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    // Handle GET request
    return NextResponse.json({ message: 'Success' });
  } catch (error) {
    return NextResponse.json(
      { error: 'Server error' },
      { status: 500 }
    );
  }
}
```

## 🔧 Environment Configuration

### Required Environment Variables
```bash
# .env.local template

# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your-firebase-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abcdef

# AI Service Keys
OPENAI_API_KEY=sk-proj-...
ANTHROPIC_API_KEY=sk-ant-...
REPLICATE_API_TOKEN=r8_...
DEEPGRAM_API_KEY=your-deepgram-key

# Optional Services
SENDGRID_API_KEY=SG...
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## 🐛 Troubleshooting Guide

### Common Issues & Solutions

#### 1. Hydration Errors
```typescript
// Problem: React hydration mismatch
// Solution: Use mounted state pattern
const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);
}, []);

if (!mounted) return null;
```

#### 2. Animation/Dynamic Import Issues
```typescript
// Problem: SSR conflicts with client-side animations
// Solution: Dynamic imports with SSR disabled
const AnimatedComponent = dynamic(() => import('./AnimatedComponent'), {
  ssr: false,
  loading: () => <div className="animate-pulse">Loading...</div>
});
```

#### 3. Image Optimization Issues
```typescript
// Problem: Next.js Image component errors
// Solution: Proper configuration in next.config.js
import Image from 'next/image';

<Image
  src="/path/to/image.jpg"
  alt="Descriptive alt text"
  width={800}
  height={600}
  priority={isAboveFold}
  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
  className="object-cover"
/>
```

#### 4. API Route Debugging
```typescript
// Add comprehensive error logging
export async function POST(req: NextRequest) {
  try {
    console.log('Request received:', {
      method: req.method,
      url: req.url,
      headers: Object.fromEntries(req.headers),
    });
    
    const body = await req.json();
    console.log('Request body:', body);
    
    // Your API logic here
    
  } catch (error) {
    console.error('API Error Details:', {
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString(),
    });
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

## 🚀 Performance Optimization

### Best Practices
```typescript
// 1. Dynamic imports for large components
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <SectionLoading />,
  ssr: false
});

// 2. Image optimization
import Image from 'next/image';

// 3. Lazy loading with Suspense
<Suspense fallback={<SectionLoading />}>
  <Component />
</Suspense>

// 4. Memoization for expensive computations
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(data);
}, [data]);

// 5. Debounced API calls
const debouncedSearch = useCallback(
  debounce((query: string) => {
    // API call
  }, 300),
  []
);
```

## 📋 Pre-Deployment Checklist

### Build & Test
```bash
# 1. Clean install
rm -rf node_modules package-lock.json
npm install

# 2. Linting
npm run lint

# 3. Type checking
npx tsc --noEmit

# 4. Production build
npm run build

# 5. Test production server
npm start

# 6. Performance audit
npm run lighthouse # (if configured)
```

### Manual Testing
- [ ] **Homepage loads correctly**
- [ ] **Navigation works on all devices**
- [ ] **Contact form submits successfully**
- [ ] **AI chat features functional**
- [ ] **Image generation works**
- [ ] **Voice recorder operates**
- [ ] **Portfolio pages display properly**
- [ ] **Blog articles load correctly**
- [ ] **Mobile responsiveness verified**
- [ ] **Accessibility features working**
- [ ] **SEO metadata present**
- [ ] **Performance acceptable (Core Web Vitals)**

### Production Environment
- [ ] **All environment variables configured**
- [ ] **Firebase project setup**
- [ ] **AI service quotas sufficient**
- [ ] **Domain configuration**
- [ ] **SSL certificate active**
- [ ] **CDN configured (if applicable)**
- [ ] **Monitoring tools active**
- [ ] **Error tracking enabled**

## 🔄 Git Workflow

### Development Process
```bash
# 1. Start feature branch
git checkout -b feature/feature-name

# 2. Make changes and commit frequently
git add .
git commit -m "feat: add new feature component"

# 3. Push and create PR
git push origin feature/feature-name

# 4. After review and merge
git checkout main
git pull origin main
git branch -d feature/feature-name
```

### Commit Message Format
```bash
feat: add new component
fix: resolve hydration issue
docs: update API documentation
style: improve responsive design
refactor: optimize component structure
test: add unit tests for utility functions
chore: update dependencies
```

---

## 🎯 Terminal Commands Reference

```bash
# Development
npm run dev              # Start dev server (localhost:3000)
npm run build           # Production build
npm start               # Start production server
npm run lint            # ESLint checking

# Git Operations
git status              # Check repository status
git add .              # Stage all changes
git commit -m "message" # Commit with message
git push               # Push to remote
git pull               # Pull latest changes

# Package Management
npm install            # Install dependencies
npm update             # Update packages
npm audit fix          # Fix security vulnerabilities

# Debugging
npm run build 2>&1 | tee build.log  # Log build output
console.log()          # Browser debugging
Network tab            # Check API calls in DevTools
Performance tab        # Analyze performance metrics
```

**Key Reminder**: This is a cyberpunk/terminal-themed digital agency platform with comprehensive AI integrations. Always maintain the aesthetic consistency and follow established patterns for optimal user experience.