# Claude Quick Reference - ImagiNative AI Studios

## 🚀 Essential Commands
```bash
npm run dev              # Start development server
npm run build           # Build for production
npm start               # Start production server
npm run lint            # Run linting
```

## 🏗️ Key File Locations
```
src/app/page.tsx         # Homepage
src/components/          # All React components  
src/lib/data/           # Static data (projects, team, etc.)
src/app/api/            # API routes (AI services)
.env.local              # Environment variables
tailwind.config.js      # Styling configuration
```

## 🎨 Design System Quick Reference
```css
/* Colors */
bg-primary-black        # #000000
text-primary-white      # #FFFFFF  
border-primary-red      # #FF0000
text-primary-yellow     # #FFFF00

/* Typography */
font-mono               # JetBrains Mono (terminal style)
font-sans               # Montserrat (headings)

/* Common Patterns */
border-2 border-primary-white    # Terminal borders
hover:border-primary-red         # Hover effects
transition-colors               # Smooth transitions
```

## 🤖 AI Integrations
```typescript
// OpenAI Chat
/api/openai/chat

// Image Generation  
/api/replicate/generate-image

// Voice Transcription
/api/deepgram/route

// Usage in components
import { useChat } from 'ai/react';
const { messages, input, handleSubmit } = useChat({ api: '/api/openai/chat' });
```

## 📱 Component Template
```typescript
'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Component() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <motion.div
      className="bg-primary-black text-primary-white"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Content */}
    </motion.div>
  );
}
```

## 🗃️ Data Files
```typescript
// Add new project
src/lib/data/projects.ts

// Add team member  
src/lib/data/team.ts

// Add testimonial
src/lib/data/testimonials.ts

// Add blog post
src/lib/data/insights.ts
```

## 🔧 Common Tasks

### Add New Page
```typescript
// 1. Create src/app/new-page/page.tsx
// 2. Add to src/components/Navigation.tsx
```

### Add New Component
```typescript
// 1. Create in src/components/NewComponent.tsx
// 2. Import where needed
// 3. Use WindowFrame wrapper for terminal aesthetic
```

### Update Content
```typescript
// Static content: Edit src/lib/data/ files
// Component text: Edit component files directly  
// Images: Add to public/ directory
```

## 🎯 Key Patterns
- **Mobile-first responsive design**
- **Terminal/cyberpunk aesthetic throughout**
- **Framer Motion for animations**
- **Dynamic imports for performance**
- **Firebase for backend services**
- **Zod validation for forms**
- **Error boundaries implemented**

## 🐛 Quick Fixes
```typescript
// Hydration errors
const [mounted, setMounted] = useState(false);
useEffect(() => setMounted(true), []);
if (!mounted) return null;

// Animation issues  
const Component = dynamic(() => import('./Component'), { ssr: false });

// Missing env vars
// Check .env.local has all required variables
```

## 📋 Before Deploy Checklist
- [ ] `npm run build` passes
- [ ] All environment variables set
- [ ] Test contact form
- [ ] Check AI services work
- [ ] Mobile responsiveness
- [ ] Performance check

## 🎨 WindowFrame Usage
```typescript
import WindowFrame from './WindowFrame';

<WindowFrame title="SECTION_TITLE">
  <div className="p-4">
    Terminal-style content here
  </div>
</WindowFrame>
```

---

**Remember**: This is a cyberpunk/terminal themed digital agency site with AI integrations. All components should maintain the aesthetic and follow the established patterns. 