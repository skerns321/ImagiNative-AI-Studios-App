# Claude Code Instructions - ImagiNative Studios Platform

This document provides comprehensive step-by-step instructions for Claude Code to effectively work with the ImagiNative Studios digital agency platform codebase.

## 🚀 Initial Setup & Orientation

### Step 1: Project Understanding
**Platform Overview**: ImagiNative Studios is a Next.js 14-based digital agency platform featuring:
- **Cyberpunk/Terminal Aesthetic**: Black, white, red, yellow color scheme with monospace typography
- **Comprehensive AI Integrations**: OpenAI GPT-4, Anthropic Claude, Replicate image generation, Deepgram voice
- **Enterprise-Grade Security**: Custom middleware, rate limiting, threat monitoring
- **Performance-Optimized**: Dynamic imports, edge runtime, responsive design

### Step 2: Quick Start Setup
```bash
# 1. Install dependencies
npm install

# 2. Copy environment template
cp ENV_TEMPLATE.md .env.local

# 3. Configure environment variables (see Step 3)
# Edit .env.local with your API keys

# 4. Start development server
npm run dev
# Server runs on http://localhost:3000

# 5. Verify build works
npm run build
```

### Step 3: Environment Configuration
Create `.env.local` with these essential variables:
```env
# Firebase Configuration (Required for auth/database)
NEXT_PUBLIC_FIREBASE_API_KEY=your-firebase-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abcdef

# AI Service Keys (Required for AI features)
OPENAI_API_KEY=sk-proj-your-openai-key
ANTHROPIC_API_KEY=sk-ant-your-anthropic-key
REPLICATE_API_TOKEN=r8_your-replicate-token
DEEPGRAM_API_KEY=your-deepgram-key

# Optional Services
SENDGRID_API_KEY=SG.your-sendgrid-key
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## 🏗️ Architecture Deep Dive

### Step 4: Understanding the File Structure
```
src/
├── app/                          # Next.js 14 App Router
│   ├── layout.tsx                # Root layout with fonts, metadata
│   ├── page.tsx                  # Homepage with dynamic imports
│   ├── loading.tsx               # Global loading component
│   ├── error.tsx                 # Global error boundary
│   ├── not-found.tsx             # 404 page
│   ├── globals.css               # Global styles & Tailwind
│   ├── api/                      # Backend API routes
│   │   ├── anthropic/chat/       # Claude 3.5 Sonnet streaming
│   │   ├── openai/chat/          # GPT-4 streaming
│   │   ├── replicate/generate-image/ # Stable Diffusion
│   │   ├── deepgram/             # Voice transcription API key
│   │   ├── contact/              # Contact form handler
│   │   ├── monitoring/log/       # Performance monitoring
│   │   └── security/log/         # Security event logging
│   ├── services/                 # Service pages
│   │   ├── ai-business-solutions/
│   │   ├── branding-and-marketing/
│   │   ├── social-media-management/
│   │   └── web-development/
│   ├── work/                     # Portfolio pages
│   │   ├── page.tsx              # Portfolio listing
│   │   ├── WorkPageClient.tsx    # Client component
│   │   └── [slug]/page.tsx       # Individual project pages
│   ├── insights/                 # Blog/articles
│   │   ├── page.tsx              # Blog listing
│   │   └── [slug]/page.tsx       # Individual article pages
│   └── contact/                  # Contact page
│       └── page.tsx
├── components/                   # Reusable React components
│   ├── Navigation.tsx            # Main nav with mobile menu
│   ├── Footer.tsx                # Site footer with social links
│   ├── Hero.tsx                  # Homepage hero section
│   ├── WindowFrame.tsx           # Terminal-style container
│   ├── About.tsx                 # About section
│   ├── Services.tsx              # Services section
│   ├── Work.tsx                  # Portfolio section
│   ├── Testimonials.tsx          # Client testimonials
│   ├── Insights.tsx              # Blog section
│   ├── Contact.tsx               # Contact section
│   ├── ContactForm.tsx           # Contact form component
│   ├── VoiceRecorder.tsx         # Voice note functionality
│   ├── ImageUpload.tsx           # AI image generation
│   ├── LoadingSpinner.tsx        # Loading states
│   ├── ErrorBoundary.tsx         # Error handling
│   ├── ScrollProgress.tsx        # Page scroll indicator
│   ├── ScrollToTop.tsx           # Back to top button
│   ├── CyberpunkBackground.tsx   # Animated background
│   └── ...                       # 25+ total components
├── lib/                          # Utilities and configurations
│   ├── data/                     # Static content data
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
├── middleware.ts                 # Next.js middleware (security)
├── middleware/                   # Additional middleware
│   ├── apiSecurityMiddleware.ts  # API security
│   └── authMiddleware.ts         # Authentication
└── hooks/                        # Additional custom hooks
    └── useResponsive.ts          # Responsive breakpoints

Configuration Files:
├── next.config.js                # Next.js configuration
├── tailwind.config.js            # Custom design system
├── tsconfig.json                 # TypeScript configuration
├── server.js                     # Production server with security
├── postcss.config.mjs            # PostCSS configuration
└── package.json                  # Dependencies and scripts

Documentation:
├── CLAUDE.md                     # Main Claude instructions
├── CLAUDE_CHEAT_SHEET.md         # Quick reference
├── CLAUDE_QUICK_REFERENCE.md     # Condensed guide
├── CLAUDE_INSTRUCTIONS.md        # This file
├── ENV_TEMPLATE.md               # Environment setup
├── PROJECT_STRUCTURE.md          # Project organization
├── PROJECT_RULES.md              # Development rules
├── FORMSPREE_SETUP.md            # Form service setup
└── NETLIFY_FORMS_SETUP.md        # Alternative form setup
```

### Step 5: Technology Stack Understanding
```typescript
// Core Technologies
"next": "^14.2.25"              // App Router, SSR, Edge Runtime
"react": "^18"                  // Latest React with hooks
"typescript": "^5"              // Strict type checking
"tailwindcss": "^3.4.1"         // Utility-first CSS

// AI & Machine Learning
"@ai-sdk/openai": "^1.3.22"     // OpenAI GPT-4 integration
"@ai-sdk/anthropic": "^1.2.12"  // Anthropic Claude integration
"ai": "^4.3.16"                 // Vercel AI SDK
"replicate": "^0.32.0"          // Image generation
"@deepgram/sdk": "^3.6.0"       // Voice transcription

// Animation & UI
"framer-motion": "^11.18.2"     // Smooth animations
"lucide-react": "^0.436.0"      // Icon library

// Backend & Database
"firebase": "via Next.js"       // Authentication, Firestore
"@sendgrid/mail": "^8.1.5"      // Email service

// Validation & Security
"zod": "^3.25.67"               // Runtime validation
"isomorphic-dompurify": "^2.22.0" // XSS prevention

// Development
"eslint": "^8"                  // Code linting
"sharp": "^0.33.5"              // Image optimization
```

## 🎨 Design System & Theming

### Step 6: Understanding the Terminal Aesthetic
```css
/* Color Palette */
:root {
  --primary-black: #000000;    /* Main background */
  --primary-white: #ffffff;    /* Primary text */
  --primary-red: #ff0000;      /* Accent/highlights */
  --primary-yellow: #ffff00;   /* Special emphasis */
}

/* Typography Hierarchy */
.font-mono      /* JetBrains Mono - terminal/code aesthetic */
.font-heading   /* Inter - section headings */
.font-body      /* Inter - body text */
.font-sans      /* Inter - general sans-serif text */

/* Responsive Text (Fluid Typography) */
.text-fluid-xs   /* clamp(0.75rem, 0.5vw + 0.5rem, 0.875rem) */
.text-fluid-sm   /* clamp(0.875rem, 0.75vw + 0.625rem, 1rem) */
.text-fluid-base /* clamp(1rem, 1vw + 0.75rem, 1.125rem) */
.text-fluid-lg   /* clamp(1.125rem, 1.25vw + 0.875rem, 1.5rem) */
.text-fluid-xl   /* clamp(1.25rem, 1.5vw + 1rem, 1.875rem) */
```

### Step 7: Component Styling Patterns
```typescript
// Standard terminal-style component
<div className="bg-primary-black text-primary-white border-2 border-primary-white font-mono">
  <div className="p-4 space-y-2">
    <h2 className="text-primary-red uppercase tracking-wider">
      &gt; SECTION_TITLE
    </h2>
    <p className="text-primary-white/80">
      Terminal-style content with opacity for hierarchy
    </p>
    <div className="border-l-2 border-primary-yellow pl-4">
      Highlighted content block
    </div>
  </div>
</div>

// Responsive spacing pattern
<div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
  Content with responsive padding
</div>

// Responsive grid pattern
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
  Grid items
</div>
```

### Step 8: Animation Guidelines
```typescript
// Standard Framer Motion animations
import { motion } from 'framer-motion';

// Fade in with slide up
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>

// Staggered animations for lists
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ 
    duration: 0.5,
    staggerChildren: 0.1,
    delayChildren: 0.2
  }}
>
  {items.map((item, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      {item}
    </motion.div>
  ))}
</motion.div>
```

## 🤖 AI Service Integration

### Step 9: OpenAI Integration (GPT-4)
```typescript
// API Route: src/app/api/openai/chat/route.ts
import { openai } from "@ai-sdk/openai";
import { convertToCoreMessages, streamText } from "ai";

export const runtime = "edge";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    
    const result = await streamText({
      model: openai("gpt-4o"),
      messages: convertToCoreMessages(messages),
      system: "You are a helpful AI assistant for ImagiNative Studios.",
      maxTokens: 1000,
      temperature: 0.7,
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error('OpenAI API Error:', error);
    return new Response('AI service unavailable', { status: 503 });
  }
}

// Component Usage
import { useChat } from 'ai/react';

export default function ChatComponent() {
  const { 
    messages, 
    input, 
    handleInputChange, 
    handleSubmit, 
    isLoading,
    error 
  } = useChat({
    api: '/api/openai/chat',
    onError: (error) => {
      console.error('Chat error:', error);
    },
  });

  return (
    <WindowFrame title="AI_CHAT">
      <div className="space-y-4">
        {/* Messages display */}
        <div className="h-96 overflow-y-auto space-y-2">
          {messages.map((message) => (
            <div 
              key={message.id}
              className={`p-3 rounded ${
                message.role === 'user' 
                  ? 'bg-primary-red/20 text-primary-white' 
                  : 'bg-primary-white/10 text-primary-white/90'
              }`}
            >
              <strong className="text-primary-yellow">
                {message.role === 'user' ? '> USER' : '> AI'}:
              </strong>
              <p className="mt-1 font-mono text-sm">{message.content}</p>
            </div>
          ))}
          {isLoading && (
            <div className="text-primary-yellow font-mono">
              > AI thinking...
            </div>
          )}
        </div>

        {/* Input form */}
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            value={input}
            onChange={handleInputChange}
            placeholder="Type your message..."
            className="flex-1 bg-primary-black border-2 border-primary-white 
                     text-primary-white font-mono p-2 focus:border-primary-red
                     focus:outline-none"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="px-4 py-2 bg-primary-black border-2 border-primary-white
                     text-primary-white font-mono hover:border-primary-red
                     disabled:opacity-50 disabled:cursor-not-allowed
                     transition-colors"
          >
            SEND
          </button>
        </form>
      </div>
    </WindowFrame>
  );
}
```

### Step 10: Anthropic Integration (Claude)
```typescript
// API Route: src/app/api/anthropic/chat/route.ts
import { anthropic } from "@ai-sdk/anthropic";
import { convertToCoreMessages, streamText } from "ai";

export const runtime = "edge";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    
    const result = await streamText({
      model: anthropic("claude-3-5-sonnet-20240620"),
      messages: convertToCoreMessages(messages),
      system: "You are Claude, an AI assistant helping users with ImagiNative Studios projects.",
      maxTokens: 1000,
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error('Anthropic API Error:', error);
    return new Response('Claude service unavailable', { status: 503 });
  }
}
```

### Step 11: Replicate Image Generation
```typescript
// API Route: src/app/api/replicate/generate-image/route.ts
import { NextResponse } from "next/server";
import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

export async function POST(request: Request) {
  try {
    if (!process.env.REPLICATE_API_TOKEN) {
      throw new Error("REPLICATE_API_TOKEN not configured");
    }

    const { prompt } = await request.json();

    if (!prompt?.trim()) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    const output = await replicate.run(
      "stability-ai/stable-diffusion:db21e45d3f7023abc2a46ee38a23973f6dce16bb082a930b0c49861f96d1e5bf",
      {
        input: {
          prompt: prompt,
          image_dimensions: "512x512",
          num_outputs: 1,
          num_inference_steps: 50,
          guidance_scale: 7.5,
          scheduler: "DPMSolverMultistep",
        },
      }
    );

    return NextResponse.json({ 
      success: true,
      images: output 
    });
  } catch (error) {
    console.error("Replicate Error:", error);
    return NextResponse.json(
      { error: "Image generation failed" },
      { status: 500 }
    );
  }
}

// Component Usage
export default function ImageGenerator() {
  const [prompt, setPrompt] = useState('');
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const generateImage = async () => {
    if (!prompt.trim()) return;
    
    setLoading(true);
    try {
      const response = await fetch('/api/replicate/generate-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });

      const result = await response.json();
      
      if (result.success) {
        setImages(result.images);
      } else {
        console.error('Generation failed:', result.error);
      }
    } catch (error) {
      console.error('Request failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <WindowFrame title="AI_IMAGE_GENERATOR">
      <div className="space-y-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe the image you want to generate..."
            className="flex-1 bg-primary-black border-2 border-primary-white
                     text-primary-white font-mono p-2 focus:border-primary-red
                     focus:outline-none"
          />
          <button
            onClick={generateImage}
            disabled={loading || !prompt.trim()}
            className="px-4 py-2 bg-primary-black border-2 border-primary-white
                     text-primary-white font-mono hover:border-primary-red
                     disabled:opacity-50 transition-colors"
          >
            {loading ? 'GENERATING...' : 'GENERATE'}
          </button>
        </div>

        {images.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`Generated: ${prompt}`}
                width={512}
                height={512}
                className="border-2 border-primary-white"
              />
            ))}
          </div>
        )}
      </div>
    </WindowFrame>
  );
}
```

### Step 12: Deepgram Voice Integration
```typescript
// API Route: src/app/api/deepgram/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const apiKey = process.env.DEEPGRAM_API_KEY;
    
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Deepgram API key not configured' },
        { status: 500 }
      );
    }

    return NextResponse.json({ apiKey });
  } catch (error) {
    console.error('Deepgram API Error:', error);
    return NextResponse.json(
      { error: 'Voice service unavailable' },
      { status: 500 }
    );
  }
}

// Component Usage
import { useDeepgram } from '@/lib/contexts/DeepgramContext';

export default function VoiceRecorder() {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState('');
  const { connection, connectToDeepgram, disconnectFromDeepgram } = useDeepgram();

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      
      await connectToDeepgram();
      
      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0 && connection?.getReadyState() === 1) {
          connection.send(event.data);
        }
      };

      connection.onmessage = (message) => {
        const received = JSON.parse(message.data);
        const transcript = received.channel?.alternatives?.[0]?.transcript;
        
        if (transcript && received.is_final) {
          setTranscript(prev => prev + ' ' + transcript);
        }
      };

      mediaRecorder.start(250);
      setIsRecording(true);
    } catch (error) {
      console.error('Recording failed:', error);
    }
  };

  const stopRecording = () => {
    setIsRecording(false);
    disconnectFromDeepgram();
  };

  return (
    <WindowFrame title="VOICE_RECORDER">
      <div className="space-y-4">
        <button
          onClick={isRecording ? stopRecording : startRecording}
          className={`w-full py-3 font-mono border-2 transition-colors ${
            isRecording
              ? 'bg-primary-red border-primary-red text-primary-white'
              : 'bg-primary-black border-primary-white text-primary-white hover:border-primary-red'
          }`}
        >
          {isRecording ? 'STOP RECORDING' : 'START RECORDING'}
        </button>

        {transcript && (
          <div className="bg-primary-white/10 border-2 border-primary-white p-4">
            <h3 className="text-primary-yellow font-mono mb-2">TRANSCRIPT:</h3>
            <p className="text-primary-white font-mono text-sm">{transcript}</p>
          </div>
        )}
      </div>
    </WindowFrame>
  );
}
```

## 📱 Component Development

### Step 13: Standard Component Template
```typescript
'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import WindowFrame from '@/components/WindowFrame';

interface ComponentProps {
  title?: string;
  className?: string;
  children?: React.ReactNode;
  data?: any; // Define specific types as needed
}

export default function NewComponent({ 
  title = "COMPONENT_TITLE", 
  className = '',
  children,
  data 
}: ComponentProps) {
  // Prevent hydration issues
  const [mounted, setMounted] = useState(false);
  
  // Component state
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render until mounted (prevents hydration errors)
  if (!mounted) return null;

  // Loading state
  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-primary-yellow font-mono">Loading...</div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="p-4 border-2 border-primary-red bg-primary-red/10">
        <p className="text-primary-red font-mono">Error: {error}</p>
      </div>
    );
  }

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

### Step 14: WindowFrame Component Usage
```typescript
// WindowFrame is the primary container for terminal aesthetic
import WindowFrame from '@/components/WindowFrame';

// Basic usage
<WindowFrame title="SECTION_TITLE">
  <div className="p-4">
    Content goes here
  </div>
</WindowFrame>

// With custom styling
<WindowFrame 
  title="CUSTOM_SECTION"
  className="max-w-4xl mx-auto"
>
  <div className="space-y-6">
    <h2 className="text-primary-red font-mono uppercase">
      &gt; Subsection Title
    </h2>
    <p className="text-primary-white/80 font-mono">
      Terminal-style content with proper hierarchy
    </p>
    <div className="border-l-2 border-primary-yellow pl-4">
      <p className="text-primary-white font-mono">
        Highlighted content block
      </p>
    </div>
  </div>
</WindowFrame>
```

### Step 15: Form Component Patterns
```typescript
// Contact form with terminal styling
import { useState } from 'react';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Valid email required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrors({});

    try {
      // Validate with Zod
      const validatedData = contactSchema.parse(formData);

      // Submit to API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validatedData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errorMap: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            errorMap[err.path[0] as string] = err.message;
          }
        });
        setErrors(errorMap);
      } else {
        setErrors({ general: 'Submission failed. Please try again.' });
      }
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <WindowFrame title="MESSAGE_SENT">
        <div className="p-6 text-center">
          <p className="text-primary-green font-mono">
            &gt; Message sent successfully!
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-4 px-4 py-2 bg-primary-black border-2 border-primary-white
                     text-primary-white font-mono hover:border-primary-red
                     transition-colors"
          >
            SEND ANOTHER
          </button>
        </div>
      </WindowFrame>
    );
  }

  return (
    <WindowFrame title="CONTACT_FORM">
      <form onSubmit={handleSubmit} className="p-6 space-y-4">
        {/* Name field */}
        <div>
          <label className="block text-primary-yellow font-mono text-sm mb-2">
            NAME:
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            className="w-full bg-primary-black border-2 border-primary-white
                     text-primary-white font-mono p-3 focus:border-primary-red
                     focus:outline-none transition-colors"
            placeholder="Enter your name..."
          />
          {errors.name && (
            <p className="text-primary-red font-mono text-xs mt-1">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email field */}
        <div>
          <label className="block text-primary-yellow font-mono text-sm mb-2">
            EMAIL:
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            className="w-full bg-primary-black border-2 border-primary-white
                     text-primary-white font-mono p-3 focus:border-primary-red
                     focus:outline-none transition-colors"
            placeholder="Enter your email..."
          />
          {errors.email && (
            <p className="text-primary-red font-mono text-xs mt-1">
              {errors.email}
            </p>
          )}
        </div>

        {/* Message field */}
        <div>
          <label className="block text-primary-yellow font-mono text-sm mb-2">
            MESSAGE:
          </label>
          <textarea
            value={formData.message}
            onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
            rows={5}
            className="w-full bg-primary-black border-2 border-primary-white
                     text-primary-white font-mono p-3 focus:border-primary-red
                     focus:outline-none transition-colors resize-none"
            placeholder="Enter your message..."
          />
          {errors.message && (
            <p className="text-primary-red font-mono text-xs mt-1">
              {errors.message}
            </p>
          )}
        </div>

        {/* General error */}
        {errors.general && (
          <div className="p-3 border-2 border-primary-red bg-primary-red/10">
            <p className="text-primary-red font-mono text-sm">
              {errors.general}
            </p>
          </div>
        )}

        {/* Submit button */}
        <button
          type="submit"
          disabled={submitting}
          className="w-full py-3 bg-primary-black border-2 border-primary-white
                   text-primary-white font-mono hover:border-primary-red
                   disabled:opacity-50 disabled:cursor-not-allowed
                   transition-colors"
        >
          {submitting ? 'SENDING...' : 'SEND MESSAGE'}
        </button>
      </form>
    </WindowFrame>
  );
}
```

## 🗃️ Data Management

### Step 16: Working with Static Data
```typescript
// src/lib/data/projects.ts - Portfolio projects
export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  tags: string[];
  image: string;
  gallery?: string[];
  technologies: string[];
  timeline: string;
  client: string;
  challenge: string;
  solution: string;
  results: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'ai-chatbot-platform',
    slug: 'ai-chatbot-platform',
    title: 'AI_CHATBOT_PLATFORM',
    description: 'Enterprise AI chatbot solution with multi-provider support',
    fullDescription: `Developed a comprehensive AI chatbot platform featuring 
                     multi-provider support (OpenAI, Anthropic), real-time chat,
                     and advanced analytics dashboard.`,
    tags: ['AI', 'Chatbot', 'Enterprise'],
    image: '/projects/ai-chatbot.jpg',
    gallery: [
      '/projects/ai-chatbot-1.jpg',
      '/projects/ai-chatbot-2.jpg',
      '/projects/ai-chatbot-3.jpg'
    ],
    technologies: ['Next.js', 'TypeScript', 'OpenAI', 'Anthropic', 'Firebase'],
    timeline: 'Q1 2024',
    client: 'TechCorp Industries',
    challenge: 'Create scalable AI chatbot with enterprise-grade security',
    solution: 'Built with Next.js 14, implementing edge runtime for performance',
    results: '300% increase in customer engagement, 50% reduction in support tickets',
    featured: true
  },
  // Add more projects...
];

// Helper functions
export const getFeaturedProjects = () => projects.filter(p => p.featured);
export const getProjectBySlug = (slug: string) => projects.find(p => p.slug === slug);
export const getProjectsByTag = (tag: string) => projects.filter(p => 
  p.tags.some(t => t.toLowerCase() === tag.toLowerCase())
);
```

```typescript
// src/lib/data/team.ts - Team members
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  skills: string[];
  social: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    website?: string;
  };
  featured?: boolean;
}

export const team: TeamMember[] = [
  {
    id: 'stephen-kerns',
    name: 'Stephen Kerns',
    role: 'FOUNDER_&_LEAD_DEVELOPER',
    bio: `Passionate full-stack developer and AI enthusiast with expertise in 
         modern web technologies and machine learning integration.`,
    image: '/team/stephenkerns.png',
    skills: ['Next.js', 'TypeScript', 'AI Integration', 'System Architecture'],
    social: {
      linkedin: 'https://linkedin.com/in/stephenkerns',
      github: 'https://github.com/stephenkerns',
      twitter: 'https://twitter.com/stephenkerns'
    },
    featured: true
  },
  // Add more team members...
];

export const getFeaturedTeam = () => team.filter(member => member.featured);
export const getTeamMemberById = (id: string) => team.find(member => member.id === id);
```

### Step 17: Dynamic Content with Firebase
```typescript
// src/lib/firebase/firebaseUtils.ts
import { 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  updateDoc, 
  deleteDoc,
  query,
  where,
  orderBy,
  limit 
} from 'firebase/firestore';
import { db } from './firebase';

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

// Get recent contact submissions (admin)
export const getContactSubmissions = async (limitCount = 10) => {
  try {
    const q = query(
      collection(db, 'contacts'),
      orderBy('timestamp', 'desc'),
      limit(limitCount)
    );
    
    const querySnapshot = await getDocs(q);
    const submissions = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    
    return { success: true, data: submissions };
  } catch (error) {
    console.error('Firebase fetch error:', error);
    return { success: false, error: error.message };
  }
};

// Newsletter subscriptions
export const subscribeToNewsletter = async (email: string) => {
  try {
    const docRef = await addDoc(collection(db, 'newsletter'), {
      email,
      timestamp: new Date(),
      status: 'active'
    });
    
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return { success: false, error: error.message };
  }
};
```

## 🔒 Security & Performance

### Step 18: Middleware Configuration
```typescript
// src/middleware.ts - Security and performance monitoring
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { SecurityMonitor } from '@/lib/utils/monitoring';
import { MonitoringService } from '@/lib/services/monitoring';

export async function middleware(request: NextRequest) {
  const startTime = performance.now();
  
  // Skip expensive operations in development
  if (process.env.NODE_ENV !== 'production') {
    const response = NextResponse.next();
    addSecurityHeaders(response);
    return response;
  }

  // Security checks
  const suspiciousHeaders = ['x-middleware-subrequest', 'x-powered-by'];
  const hasBlockedHeaders = suspiciousHeaders.some(header => 
    request.headers.has(header)
  );

  if (hasBlockedHeaders) {
    await SecurityMonitor.logSuspiciousActivity({
      headers: Object.fromEntries(request.headers),
      ip: request.ip,
      path: request.nextUrl.pathname,
      timestamp: new Date().toISOString(),
    });

    return new NextResponse(null, { status: 403 });
  }

  // Rate limiting (implement based on your needs)
  const clientIP = request.ip || 'unknown';
  const rateLimitResult = await checkRateLimit(clientIP, request.nextUrl.pathname);
  
  if (!rateLimitResult.allowed) {
    return new NextResponse('Rate limit exceeded', { status: 429 });
  }

  const response = NextResponse.next();

  // Performance monitoring for API routes
  if (request.nextUrl.pathname.startsWith('/api/')) {
    const responseTime = performance.now() - startTime;
    await MonitoringService.trackApiResponse(
      request.nextUrl.pathname,
      responseTime
    );
  }

  addSecurityHeaders(response);
  return response;
}

function addSecurityHeaders(response: NextResponse) {
  const headers = response.headers;

  // XSS Protection
  headers.set('X-XSS-Protection', '1; mode=block');
  
  // MIME type sniffing prevention
  headers.set('X-Content-Type-Options', 'nosniff');
  
  // Clickjacking prevention
  headers.set('X-Frame-Options', 'DENY');
  
  // Content Security Policy
  headers.set(
    'Content-Security-Policy',
    [
      "default-src 'self'",
      "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://hcaptcha.com https://*.hcaptcha.com",
      "style-src 'self' 'unsafe-inline' https://hcaptcha.com https://*.hcaptcha.com",
      "img-src 'self' blob: data: https:",
      "font-src 'self'",
      "frame-src 'self' https://hcaptcha.com https://*.hcaptcha.com",
      "connect-src 'self' https://api.openai.com https://api.anthropic.com https://api.replicate.com",
    ].join('; ')
  );

  // HSTS
  headers.set(
    'Strict-Transport-Security',
    'max-age=31536000; includeSubDomains'
  );

  // Referrer Policy
  headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

  // Permissions Policy
  headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), interest-cohort=()'
  );
}

async function checkRateLimit(clientIP: string, path: string) {
  // Implement rate limiting logic
  // This is a simplified example
  const key = `rate_limit:${clientIP}:${path}`;
  // Use Redis, KV store, or in-memory cache
  return { allowed: true }; // Placeholder
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
```

### Step 19: Performance Optimization Strategies
```typescript
// Dynamic imports for code splitting
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Heavy components loaded only when needed
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <SectionLoading />,
  ssr: false // Client-side only if needed
});

const AnotherComponent = dynamic(() => import('./AnotherComponent'), {
  loading: () => (
    <div className="animate-pulse bg-primary-white/10 h-32 rounded" />
  ),
});

// Page with optimized loading
export default function OptimizedPage() {
  return (
    <div>
      {/* Immediate content */}
      <Navigation />
      <Hero />
      
      {/* Lazy-loaded sections */}
      <Suspense fallback={<SectionLoading />}>
        <HeavyComponent />
      </Suspense>
      
      <Suspense fallback={<SectionLoading />}>
        <AnotherComponent />
      </Suspense>
    </div>
  );
}

// Image optimization
import Image from 'next/image';

<Image
  src="/hero/digital-innovation.jpg"
  alt="Digital Innovation"
  width={1200}
  height={630}
  priority={true} // For above-the-fold images
  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
  className="object-cover"
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkrHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
/>

// Memoization for expensive computations
import { useMemo, useCallback } from 'react';

export default function OptimizedComponent({ data }: { data: any[] }) {
  // Memoize expensive calculations
  const processedData = useMemo(() => {
    return data
      .filter(item => item.active)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 10);
  }, [data]);

  // Memoize event handlers
  const handleClick = useCallback((id: string) => {
    console.log('Clicked item:', id);
  }, []);

  return (
    <div>
      {processedData.map(item => (
        <div key={item.id} onClick={() => handleClick(item.id)}>
          {item.title}
        </div>
      ))}
    </div>
  );
}
```

## 🚀 Deployment & Production

### Step 20: Production Build Process
```bash
# Pre-deployment checklist
# 1. Clean dependencies
rm -rf node_modules package-lock.json
npm install

# 2. Environment variables check
# Ensure all production environment variables are set

# 3. Linting and type checking
npm run lint
npx tsc --noEmit

# 4. Production build
npm run build

# 5. Test production build locally
npm start

# 6. Performance audit (optional)
npm install -g lighthouse
lighthouse http://localhost:3000 --output html --output-path ./lighthouse-report.html
```

### Step 21: Environment Variables for Production
```bash
# Production .env variables (set in deployment platform)

# Firebase (Required)
NEXT_PUBLIC_FIREBASE_API_KEY=prod-firebase-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=prod-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=prod-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=prod-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=prod-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=prod-app-id

# AI Services (Required)
OPENAI_API_KEY=sk-proj-production-key
ANTHROPIC_API_KEY=sk-ant-production-key
REPLICATE_API_TOKEN=r8_production-token
DEEPGRAM_API_KEY=production-deepgram-key

# Optional Services
SENDGRID_API_KEY=SG.production-sendgrid-key
NEXT_PUBLIC_SITE_URL=https://yourdomain.com

# Analytics & Monitoring (if configured)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
SENTRY_DSN=https://your-sentry-dsn
```

### Step 22: Vercel Deployment
```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Set environment variables in Vercel dashboard or CLI
vercel env add OPENAI_API_KEY
vercel env add ANTHROPIC_API_KEY
# ... add all required variables

# Deploy to production
vercel --prod
```

## 🛠️ Common Development Tasks

### Step 23: Adding New Pages
```typescript
// 1. Create page component: src/app/new-page/page.tsx
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WindowFrame from '@/components/WindowFrame';

export const metadata: Metadata = {
  title: 'New Page | ImagiNative Studios',
  description: 'Description for SEO and social sharing',
  openGraph: {
    title: 'New Page',
    description: 'Description for social sharing',
    images: ['/og-image.jpg'],
  },
};

export default function NewPage() {
  return (
    <div className="min-h-screen bg-primary-black">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <WindowFrame title="NEW_PAGE">
            <div className="p-6 space-y-6">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-mono text-primary-white">
                &gt; New Page Heading_
              </h1>
              
              <p className="text-primary-white/80 font-mono leading-relaxed">
                Page content goes here. Maintain terminal aesthetic with 
                proper spacing and typography.
              </p>
              
              <div className="border-l-2 border-primary-yellow pl-4">
                <p className="text-primary-white font-mono">
                  Highlighted content section with yellow accent border.
                </p>
              </div>
            </div>
          </WindowFrame>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

// 2. Add to navigation: src/components/Navigation.tsx
const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Work', href: '#work' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Insights', href: '/insights' },
  { name: 'Contact', href: '#contact' },
  { name: 'New Page', href: '/new-page' }, // Add here
];
```

### Step 24: Adding New API Routes
```typescript
// Create: src/app/api/new-endpoint/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// Input validation schema
const requestSchema = z.object({
  field1: z.string().min(1, 'Field1 is required'),
  field2: z.number().optional(),
  field3: z.array(z.string()).optional(),
});

// Rate limiting and security (implement as needed)
const rateLimitMap = new Map();

export async function POST(req: NextRequest) {
  try {
    // Rate limiting check
    const clientIP = req.ip || 'unknown';
    const now = Date.now();
    const windowMs = 60 * 1000; // 1 minute
    const maxRequests = 10;

    const clientData = rateLimitMap.get(clientIP) || { count: 0, resetTime: now + windowMs };
    
    if (now > clientData.resetTime) {
      clientData.count = 0;
      clientData.resetTime = now + windowMs;
    }
    
    if (clientData.count >= maxRequests) {
      return NextResponse.json(
        { error: 'Rate limit exceeded' },
        { status: 429 }
      );
    }
    
    clientData.count++;
    rateLimitMap.set(clientIP, clientData);

    // Input validation
    const body = await req.json();
    const validatedData = requestSchema.parse(body);

    // Process request
    const result = await processRequest(validatedData);
    
    return NextResponse.json({
      success: true,
      data: result
    });

  } catch (error) {
    console.error('API Error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          error: 'Validation failed', 
          details: error.errors 
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');

    // Fetch data with pagination
    const data = await fetchData(page, limit);
    
    return NextResponse.json({
      success: true,
      data,
      pagination: {
        page,
        limit,
        total: data.length
      }
    });

  } catch (error) {
    console.error('GET API Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch data' },
      { status: 500 }
    );
  }
}

async function processRequest(data: any) {
  // Implement your business logic here
  return { processed: true, timestamp: new Date().toISOString() };
}

async function fetchData(page: number, limit: number) {
  // Implement data fetching logic
  return [];
}
```

### Step 25: Updating Content
```typescript
// Adding new portfolio project: src/lib/data/projects.ts
export const projects: Project[] = [
  // ... existing projects
  {
    id: 'new-project-2024',
    slug: 'new-project-2024',
    title: 'NEW_PROJECT_2024',
    description: 'Brief description for project cards and listings',
    fullDescription: `Comprehensive description of the project including 
                     technical details, challenges faced, and solutions implemented.
                     This supports markdown formatting for rich content.`,
    tags: ['AI', 'Web Development', 'Next.js'],
    image: '/projects/new-project-2024.jpg',
    gallery: [
      '/projects/new-project-2024-1.jpg',
      '/projects/new-project-2024-2.jpg',
      '/projects/new-project-2024-3.jpg'
    ],
    technologies: ['Next.js 14', 'TypeScript', 'OpenAI', 'Tailwind CSS'],
    timeline: 'Q1 2024',
    client: 'Client Name or Company',
    challenge: 'Detailed description of the main challenge or problem to solve',
    solution: 'Explanation of the approach and technologies used to solve it',
    results: 'Quantifiable results: 50% increase in performance, 200% more engagement, etc.',
    featured: true // Show on homepage
  }
];

// Adding new team member: src/lib/data/team.ts
export const team: TeamMember[] = [
  // ... existing members
  {
    id: 'new-team-member',
    name: 'New Team Member',
    role: 'ROLE_TITLE',
    bio: `Professional background and expertise. Keep it concise but informative,
         highlighting key skills and experience relevant to the role.`,
    image: '/team/new-member.jpg',
    skills: ['React', 'Node.js', 'AI Integration', 'UI/UX Design'],
    social: {
      linkedin: 'https://linkedin.com/in/username',
      github: 'https://github.com/username',
      twitter: 'https://twitter.com/username',
      website: 'https://personal-website.com'
    },
    featured: true
  }
];

// Adding new blog article: src/lib/data/insights.ts
export const insights: Insight[] = [
  // ... existing articles
  {
    id: 'new-article-2024',
    slug: 'new-article-2024',
    title: 'Article Title Here',
    excerpt: 'Brief summary or teaser for the article that appears in listings',
    content: `
# Article Title

Full article content in **markdown** format. You can use:

- Lists
- **Bold text**
- *Italic text*
- [Links](https://example.com)
- Code blocks
- And more markdown features

## Subheading

Continue with your content here...
    `,
    image: '/insights/new-article-2024.jpg',
    author: 'Author Name',
    date: '2024-01-15',
    readTime: '5 min read',
    tags: ['AI', 'Technology', 'Web Development'],
    category: 'Technology',
    featured: true
  }
];
```

## 🐛 Troubleshooting Guide

### Step 26: Common Issues and Solutions

#### Hydration Errors
```typescript
// Problem: React hydration mismatch between server and client
// Symptoms: Console errors about hydration, content jumping

// Solution 1: Use mounted state
const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);
}, []);

if (!mounted) return null;

// Solution 2: Dynamic imports for client-only components
const ClientOnlyComponent = dynamic(() => import('./ClientOnlyComponent'), {
  ssr: false,
  loading: () => <div>Loading...</div>
});

// Solution 3: Suppress hydration warnings for specific elements
<div suppressHydrationWarning>
  {new Date().toLocaleString()}
</div>
```

#### Animation and Motion Issues
```typescript
// Problem: Framer Motion animations not working or causing errors

// Solution 1: Ensure client-side rendering
const AnimatedComponent = dynamic(() => import('./AnimatedComponent'), {
  ssr: false
});

// Solution 2: Use reduced motion preference
import { useReducedMotion } from 'framer-motion';

const shouldReduceMotion = useReducedMotion();

<motion.div
  animate={shouldReduceMotion ? {} : { x: 100 }}
  transition={shouldReduceMotion ? { duration: 0 } : { duration: 1 }}
>
  Content
</motion.div>

// Solution 3: Conditional animations
const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);
}, []);

<motion.div
  {...(mounted && {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5 }
  })}
>
  Content
</motion.div>
```

#### API Route Issues
```typescript
// Problem: API routes returning errors or not working

// Solution 1: Add comprehensive error logging
export async function POST(req: NextRequest) {
  try {
    console.log('API called:', {
      method: req.method,
      url: req.url,
      headers: Object.fromEntries(req.headers),
      timestamp: new Date().toISOString()
    });

    const body = await req.json();
    console.log('Request body:', body);

    // Your API logic here
    const result = await processRequest(body);

    console.log('API success:', result);
    return NextResponse.json(result);

  } catch (error) {
    console.error('API Error Details:', {
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString(),
      url: req.url
    });

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Solution 2: Environment variable debugging
export async function GET() {
  const envVars = {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY ? '***SET***' : 'MISSING',
    ANTHROPIC_API_KEY: process.env.ANTHROPIC_API_KEY ? '***SET***' : 'MISSING',
    REPLICATE_API_TOKEN: process.env.REPLICATE_API_TOKEN ? '***SET***' : 'MISSING',
    NODE_ENV: process.env.NODE_ENV
  };

  return NextResponse.json({ envVars });
}
```

#### Build and Deployment Issues
```bash
# Problem: Build failures

# Solution 1: Clean rebuild
rm -rf .next
rm -rf node_modules
rm package-lock.json
npm install
npm run build

# Solution 2: Check TypeScript errors
npx tsc --noEmit --pretty

# Solution 3: Check for unused imports
npm run lint

# Solution 4: Analyze bundle size
npm install -g @next/bundle-analyzer
ANALYZE=true npm run build
```

#### Performance Issues
```typescript
// Problem: Slow loading times

// Solution 1: Implement proper image optimization
import Image from 'next/image';

<Image
  src="/large-image.jpg"
  alt="Description"
  width={800}
  height={600}
  priority={isAboveFold}
  sizes="(max-width: 768px) 100vw, 50vw"
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>

// Solution 2: Lazy load components
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <SectionLoading />,
  ssr: false
});

// Solution 3: Optimize API calls
const debouncedSearch = useCallback(
  debounce((query: string) => {
    // API call
  }, 300),
  []
);

// Solution 4: Memoize expensive calculations
const expensiveValue = useMemo(() => {
  return data.reduce((acc, item) => acc + item.value, 0);
}, [data]);
```

## 📋 Final Checklist

### Step 27: Pre-Development Checklist
- [ ] Environment variables configured
- [ ] Firebase project setup
- [ ] AI service API keys obtained
- [ ] Development server running (`npm run dev`)
- [ ] Build process working (`npm run build`)

### Step 28: Pre-Deployment Checklist
- [ ] All features tested locally
- [ ] Production build successful
- [ ] Environment variables set in production
- [ ] Performance audit completed
- [ ] Security headers verified
- [ ] SEO metadata configured
- [ ] Error boundaries in place
- [ ] Accessibility features tested
- [ ] Mobile responsiveness verified
- [ ] AI services tested in production environment

### Step 29: Post-Deployment Monitoring
- [ ] Site loading correctly
- [ ] Contact forms working
- [ ] AI features operational
- [ ] Performance monitoring active
- [ ] Error tracking configured
- [ ] Analytics implementation verified

---

This comprehensive guide should enable Claude Code to effectively work with the ImagiNative Studios platform. The codebase follows modern best practices with a focus on security, performance, and user experience while maintaining the distinctive cyberpunk/terminal aesthetic throughout.