# Claude Quick Reference - ImagiNative Studios

Essential commands, patterns, and references for working with the ImagiNative Studios AI-powered digital agency platform.

## 🚀 Essential Commands

```bash
# Development
npm run dev              # Start dev server (localhost:3000)
npm run build            # Production build
npm start                # Start production server (custom server.js)
npm run lint             # ESLint code checking
npm run generate-images  # Generate AI placeholder images

# Git Operations
git status              # Check repository status
git add .              # Stage all changes
git commit -m "message" # Commit with descriptive message
git push               # Push to remote repository

# Debugging & Analysis
npm run build 2>&1 | tee build.log  # Log build output
npx tsc --noEmit       # Type checking without compilation
```

## 🏗️ Key File Locations

```
📁 Critical Paths:
├── src/app/page.tsx               # Homepage
├── src/app/layout.tsx             # Root layout & metadata
├── src/components/                # All React components
├── src/lib/data/                  # Static content (projects, team, etc.)
├── src/app/api/                   # AI services & API routes
├── src/middleware.ts              # Security & monitoring
├── .env.local                     # Environment variables
├── tailwind.config.js             # Design system configuration
└── server.js                      # Production server

🎨 Static Assets:
├── public/hero/                   # Hero section images
├── public/projects/               # Portfolio images
├── public/team/                   # Team member photos
└── public/insights/               # Blog post images

🔧 Configuration:
├── next.config.js                 # Next.js settings
├── tsconfig.json                  # TypeScript config
└── package.json                   # Dependencies & scripts
```

## 🎨 Design System Quick Reference

### Core Colors
```css
/* Terminal Color Palette */
bg-primary-black        /* #000000 - Main background */
text-primary-white      /* #FFFFFF - Primary text */
border-primary-red      /* #FF0000 - Accent borders */
text-primary-yellow     /* #FFFF00 - Highlights */

/* Opacity Variants */
text-primary-white/80   /* 80% opacity white */
text-primary-white/50   /* 50% opacity white */
bg-primary-red/20       /* 20% opacity red background */
```

### Typography System
```css
/* Font Families */
font-mono               /* JetBrains Mono (terminal/code aesthetic) */
font-heading            /* Inter (section headings) */
font-body               /* Inter (body text) */
font-sans               /* Inter (general sans-serif text) */

/* Responsive Text Sizes (Fluid Typography) */
text-fluid-xs           /* clamp(0.75rem, 0.5vw + 0.5rem, 0.875rem) */
text-fluid-sm           /* clamp(0.875rem, 0.75vw + 0.625rem, 1rem) */
text-fluid-base         /* clamp(1rem, 1vw + 0.75rem, 1.125rem) */
text-fluid-lg           /* clamp(1.125rem, 1.25vw + 0.875rem, 1.5rem) */
text-fluid-xl           /* clamp(1.25rem, 1.5vw + 1rem, 1.875rem) */

/* Standard Text Sizes */
text-sm sm:text-base md:text-lg lg:text-xl  /* Responsive scaling */
```

### Terminal UI Patterns
```css
/* Common Terminal Styling */
border-2 border-primary-white    /* Standard terminal borders */
hover:border-primary-red         /* Interactive hover states */
transition-colors               /* Smooth color transitions */

/* Custom Utilities */
shadow-terminal                 /* Terminal-style box shadow */
shadow-terminal-hover          /* Hover state shadow */
animate-blink                  /* Terminal cursor animation */
animate-glitch                 /* Subtle glitch effect */
scrollbar-terminal             /* Custom terminal scrollbar */
```

### Responsive Design
```css
/* Breakpoints: xs(475px), sm(640px), md(768px), lg(1024px), xl(1280px), 2xl(1536px), 3xl(1920px) */

/* Common Responsive Patterns */
p-4 sm:p-6 md:p-8 lg:p-10                  /* Responsive padding */
grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  /* Responsive grid */
text-sm sm:text-base lg:text-xl            /* Responsive text */
```

## 🤖 AI Service Integrations

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
```

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
```

## 📱 Component Development

### Standard Component Template
```typescript
'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import WindowFrame from '@/components/WindowFrame';

export default function Component() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => setMounted(true), []);
  if (!mounted) return null; // Prevent hydration issues

  return (
    <motion.section
      className="bg-primary-black text-primary-white"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <WindowFrame title="COMPONENT_TITLE">
        <div className="p-4 sm:p-6 lg:p-8">
          {/* Content */}
        </div>
      </WindowFrame>
    </motion.section>
  );
}
```

### WindowFrame Usage (Terminal Container)
```typescript
import WindowFrame from '@/components/WindowFrame';

// Basic usage
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
```

### Form Pattern
```typescript
// Terminal-styled form with validation
import { useState } from 'react';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
});

export default function TerminalForm() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [errors, setErrors] = useState({});

  return (
    <WindowFrame title="CONTACT_FORM">
      <form className="space-y-4 p-6">
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
```

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

// Blog Articles: src/lib/data/insights.ts
export const insights: Insight[] = [
  {
    id: 'article-id',
    slug: 'article-slug',
    title: 'Article Title',
    excerpt: 'Brief summary',
    content: 'Full markdown content',
    image: '/insights/article.jpg',
    date: '2024-01-15',
    tags: ['AI', 'Technology']
  }
];
```

### Helper Functions
```typescript
// Get featured content
export const getFeaturedProjects = () => projects.filter(p => p.featured);
export const getFeaturedTeam = () => team.filter(m => m.featured);

// Find by identifier
export const getProjectBySlug = (slug: string) => 
  projects.find(p => p.slug === slug);

// Filter by category
export const getProjectsByTag = (tag: string) => 
  projects.filter(p => p.tags.includes(tag));
```

## 🔧 Common Development Tasks

### Adding New Content

#### 1. New Portfolio Project
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
```

#### 2. New Team Member
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
```

#### 3. New Blog Article
```typescript
// Edit: src/lib/data/insights.ts
{
  id: 'new-article',
  slug: 'new-article',
  title: 'Article Title',
  excerpt: 'Brief summary',
  content: 'Full markdown content',
  image: '/insights/new-article.jpg',
  author: 'Author Name',
  date: '2024-01-15',
  tags: ['Technology']
}
```

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
```

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
```

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
```

## 🐛 Quick Troubleshooting

### Common Issues & Solutions

#### Hydration Errors
```typescript
// Problem: React hydration mismatch
// Solution: Use mounted state
const [mounted, setMounted] = useState(false);
useEffect(() => setMounted(true), []);
if (!mounted) return null;
```

#### Animation Issues
```typescript
// Problem: Framer Motion SSR conflicts
// Solution: Dynamic import with SSR disabled
const Component = dynamic(() => import('./Component'), { ssr: false });
```

#### API Route Errors
```typescript
// Problem: API returning errors
// Solution: Add comprehensive error logging
export async function POST(req: NextRequest) {
  try {
    console.log('Request:', { method: req.method, url: req.url });
    // API logic
  } catch (error) {
    console.error('Detailed error:', { message: error.message, stack: error.stack });
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
```

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
```

#### Performance Issues
```typescript
// Problem: Slow loading
// Solutions:
// 1. Dynamic imports
const Heavy = dynamic(() => import('./Heavy'), { loading: () => <Loading /> });

// 2. Image optimization
<Image src="/image.jpg" width={800} height={600} priority sizes="..." />

// 3. Memoization
const value = useMemo(() => expensiveCalculation(data), [data]);

// 4. Debounced API calls
const debouncedSearch = useCallback(debounce(searchFn, 300), []);
```

## 🎯 Key Development Patterns

### Security & Performance
- **Middleware**: Handles authentication, rate limiting, security headers
- **Edge Runtime**: AI API routes use edge runtime for performance
- **Dynamic Imports**: Components lazy-loaded for better performance
- **Image Optimization**: Next.js Image component with proper sizing

### Design Consistency
- **Terminal Aesthetic**: All components use cyberpunk/terminal styling
- **WindowFrame Wrapper**: Primary container for maintaining design consistency
- **Responsive Design**: Mobile-first approach with 7 breakpoints
- **Typography Hierarchy**: Fluid typography for optimal readability

### AI Integration
- **Multiple Providers**: OpenAI, Anthropic, Replicate, Deepgram
- **Streaming Responses**: Real-time chat with proper error handling
- **Fallback Systems**: Graceful degradation when services unavailable
- **Rate Limiting**: Built-in protection against abuse

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

### Performance & SEO
- [ ] Mobile responsiveness verified
- [ ] Core Web Vitals acceptable
- [ ] SEO metadata present
- [ ] Accessibility features working
- [ ] Error boundaries functioning

### Security
- [ ] Security headers active
- [ ] API rate limiting working
- [ ] Environment variables secured
- [ ] No sensitive data exposed

---

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
<div className="text-primary-yellow font-mono">
  &gt; Loading...
</div>
<div className="text-primary-green font-mono">
  &gt; Success!
</div>
<div className="text-primary-red font-mono">
  &gt; Error occurred
</div>
```

**Remember**: This is a cyberpunk/terminal-themed digital agency platform with comprehensive AI integrations. Always maintain the aesthetic consistency and follow established patterns for optimal development workflow.