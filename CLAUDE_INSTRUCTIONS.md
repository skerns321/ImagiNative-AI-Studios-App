# Claude Instructions - ImagiNative AI Studios Website

This document provides step-by-step instructions for Claude to effectively work with the ImagiNative AI Studios website codebase.

## 🚀 Quick Start Guide

### Step 1: Project Setup
```bash
# Clone and install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

### Step 2: Environment Configuration
Create `.env.local` with these variables:
```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id

# AI Service API Keys
OPENAI_API_KEY=your-openai-key
ANTHROPIC_API_KEY=your-anthropic-key
REPLICATE_API_TOKEN=your-replicate-token
DEEPGRAM_API_KEY=your-deepgram-key

# Optional
SENDGRID_API_KEY=your-sendgrid-key
```

## 🏗️ Architecture Overview

### Step 3: Understanding the Structure
```
src/
├── app/                    # Next.js 14 App Router
│   ├── api/               # API routes (AI services, contact, etc.)
│   ├── services/          # Service pages
│   ├── work/              # Portfolio pages
│   ├── insights/          # Blog/articles
│   └── page.tsx           # Homepage
├── components/            # Reusable React components
├── lib/                   # Utilities and configurations
│   ├── data/             # Static data (projects, team, etc.)
│   ├── contexts/         # React contexts
│   ├── hooks/            # Custom hooks
│   └── utils/            # Helper functions
└── middleware.ts          # Next.js middleware
```

### Step 4: Key Technologies Used
- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Firebase** for auth/database
- **Vercel AI SDK** for AI integrations
- **Zod** for validation

## 🎨 Design System

### Step 5: Understanding the Theme
```css
/* Color Palette */
--primary-black: #000000
--primary-white: #FFFFFF
--primary-red: #FF0000
--primary-yellow: #FFFF00

/* Typography */
font-mono: JetBrains Mono (terminal style)
font-sans: Montserrat (headings)
font-body: Roboto (body text)
```

### Step 6: Component Patterns
All components follow this structure:
```typescript
'use client'; // For client components

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function ComponentName() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent hydration issues

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {/* Component content */}
    </motion.section>
  );
}
```

## 🤖 AI Integrations

### Step 7: Working with AI APIs

#### OpenAI Integration
```typescript
// Location: src/app/api/openai/chat/route.ts
import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";

export async function POST(req: Request) {
  const { messages } = await req.json();
  const result = await streamText({
    model: openai("gpt-4o"),
    messages: convertToCoreMessages(messages),
  });
  return result.toDataStreamResponse();
}
```

#### Replicate Image Generation
```typescript
// Location: src/app/api/replicate/generate-image/route.ts
// Handles Stable Diffusion image generation
```

#### Deepgram Voice Transcription
```typescript
// Location: src/app/api/deepgram/route.ts
// Returns API key for client-side transcription
```

### Step 8: Using AI Services in Components
```typescript
import { useChat } from 'ai/react';

export default function ChatComponent() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/openai/chat',
  });

  return (
    <form onSubmit={handleSubmit}>
      <input value={input} onChange={handleInputChange} />
      <button type="submit">Send</button>
    </form>
  );
}
```

## 📱 Component Development

### Step 9: Creating New Components

#### Basic Component Template
```typescript
'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface ComponentProps {
  // Define props here
}

export default function NewComponent({ }: ComponentProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      className="bg-primary-black text-primary-white"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Component content */}
    </motion.div>
  );
}
```

#### WindowFrame Component Usage
```typescript
import WindowFrame from './WindowFrame';

<WindowFrame title="COMPONENT_TITLE">
  <div className="p-4">
    Content goes here
  </div>
</WindowFrame>
```

### Step 10: Styling Guidelines

#### Terminal Aesthetic Classes
```css
/* Common patterns used throughout */
.terminal-border { @apply border-2 border-primary-white; }
.terminal-text { @apply font-mono text-primary-white; }
.terminal-accent { @apply text-primary-red; }
.terminal-highlight { @apply text-primary-yellow; }
.terminal-button { 
  @apply bg-primary-black border-2 border-primary-white px-4 py-2 
         font-mono hover:border-primary-red transition-colors; 
}
```

#### Responsive Design
```css
/* Mobile-first approach */
.responsive-text {
  @apply text-sm sm:text-base md:text-lg lg:text-xl;
}

.responsive-spacing {
  @apply p-4 sm:p-6 md:p-8 lg:p-10;
}
```

## 🗃️ Data Management

### Step 11: Working with Static Data
```typescript
// Location: src/lib/data/
// projects.ts - Portfolio projects
// team.ts - Team member information
// testimonials.ts - Client testimonials
// insights.ts - Blog articles

// Example: Adding a new project
export const projects: Project[] = [
  {
    id: 'new-project',
    slug: 'new-project-slug',
    title: 'NEW_PROJECT_TITLE',
    description: 'Project description',
    fullDescription: 'Detailed description',
    tags: ['Tag1', 'Tag2'],
    image: '/projects/new-project.jpg',
    technologies: ['Next.js', 'AI'],
    timeline: 'Q1 2024',
    client: 'Client Name'
  }
];
```

### Step 12: Firebase Integration
```typescript
// Location: src/lib/firebase/firebaseUtils.ts
import { addDoc, collection } from 'firebase/firestore';
import { db } from './firebase';

// Example: Adding contact form submission
export const submitContactForm = async (formData: any) => {
  try {
    await addDoc(collection(db, 'contacts'), {
      ...formData,
      timestamp: new Date()
    });
    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
};
```

## 🔒 Security & Performance

### Step 13: Middleware Configuration
```typescript
// Location: src/middleware.ts
// Handles authentication, rate limiting, and security headers
export function middleware(request: NextRequest) {
  // Security checks and rate limiting
}
```

### Step 14: Performance Optimization
```typescript
// Dynamic imports for better performance
const DynamicComponent = dynamic(() => import('./Component'), {
  ssr: false,
  loading: () => <LoadingSpinner />
});

// Image optimization
<Image
  src="/image.jpg"
  alt="Description"
  width={800}
  height={600}
  priority={isAboveFold}
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

## 🚀 Deployment

### Step 15: Production Build
```bash
# Build for production
npm run build

# Start production server
npm start

# Deploy to Vercel
vercel deploy
```

### Step 16: Environment Variables in Production
Set these in your deployment platform:
- All Firebase configuration variables
- AI service API keys
- Any additional service keys

## 🛠️ Common Development Tasks

### Step 17: Adding New Pages
```typescript
// 1. Create in src/app/new-page/page.tsx
export default function NewPage() {
  return (
    <div className="min-h-screen bg-primary-black">
      <Navigation />
      <main className="pt-20">
        {/* Page content */}
      </main>
      <Footer />
    </div>
  );
}

// 2. Add to navigation in src/components/Navigation.tsx
const navItems = [
  // ... existing items
  { name: 'New Page', href: '/new-page' }
];
```

### Step 18: Adding New API Routes
```typescript
// Create in src/app/api/new-endpoint/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    // Process request
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  }
}
```

### Step 19: Updating Content
```typescript
// 1. For static content: Edit files in src/lib/data/
// 2. For component text: Edit directly in component files
// 3. For images: Add to public/ directory and reference
```

## 🐛 Troubleshooting

### Step 20: Common Issues

#### Hydration Errors
```typescript
// Solution: Use mounted state
const [mounted, setMounted] = useState(false);
useEffect(() => setMounted(true), []);
if (!mounted) return null;
```

#### Animation Issues
```typescript
// Solution: Check for client-side rendering
const Component = dynamic(() => import('./AnimatedComponent'), {
  ssr: false
});
```

#### Firebase Connection Issues
```bash
# Check environment variables
# Verify Firebase configuration
# Check network connectivity
```

## 📋 Development Checklist

### Step 21: Before Making Changes
- [ ] Pull latest changes from main branch
- [ ] Check environment variables are set
- [ ] Run `npm run dev` to start development
- [ ] Test in multiple browsers/devices
- [ ] Check console for errors
- [ ] Verify animations work properly
- [ ] Test form submissions
- [ ] Check AI integrations functionality

### Step 22: Before Deployment
- [ ] Run `npm run build` successfully
- [ ] Test production build locally
- [ ] Verify all environment variables in production
- [ ] Check performance with Lighthouse
- [ ] Test on mobile devices
- [ ] Verify SEO metadata
- [ ] Test contact form functionality
- [ ] Confirm AI services are working

## 🔄 Git Workflow

### Step 23: Development Process
```bash
# 1. Create feature branch
git checkout -b feature/new-feature

# 2. Make changes and commit
git add .
git commit -m "feat: add new feature"

# 3. Push and create PR
git push origin feature/new-feature

# 4. After review, merge to main
git checkout main
git pull origin main
```

## 📚 Additional Resources

### Step 24: Key Documentation Links
- [Next.js 14 App Router](https://nextjs.org/docs/app)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Firebase v9](https://firebase.google.com/docs/web/setup)
- [Vercel AI SDK](https://sdk.vercel.ai/docs)

### Step 25: Project-Specific Patterns
- All components use terminal/cyberpunk aesthetic
- Animations are subtle and performance-focused
- Mobile-first responsive design
- Accessibility features included
- Error boundaries implemented
- SEO optimized throughout

---

## 🎯 Quick Reference Commands

```bash
# Development
npm run dev              # Start dev server
npm run build           # Production build
npm run lint            # Code linting
npm run generate-images # Generate AI images

# Git
git status              # Check changes
git add .              # Stage changes
git commit -m "message" # Commit changes
git push               # Push to remote

# Debugging
npm run build          # Check for build errors
console.log()          # Debug in browser
Network tab            # Check API calls
```

This guide should help you navigate and modify the ImagiNative AI Studios website effectively. The codebase follows modern React/Next.js patterns with a focus on performance, accessibility, and user experience. 