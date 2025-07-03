# 🚀 Claude Cheat Sheet - ImagiNative AI Studios

## ⚡ Quick Start
```bash
npm install && npm run dev  # Setup and run
```

## 🎯 Project Identity
**Cyberpunk/Terminal themed digital agency** with AI integrations
- Colors: Black (#000), White (#FFF), Red (#F00), Yellow (#FF0)  
- Font: JetBrains Mono (terminal aesthetic)
- Style: WindowFrame components, border-2 border-primary-white

## 📁 Essential Files
```
src/app/page.tsx           # Homepage
src/components/            # All UI components
src/lib/data/projects.ts   # Portfolio projects
src/lib/data/team.ts       # Team members
src/app/api/               # AI API routes
.env.local                 # Environment variables
```

## 🤖 AI Endpoints
```typescript
/api/openai/chat           # GPT chat
/api/anthropic/chat        # Claude chat  
/api/replicate/generate-image  # Image generation
/api/deepgram/route        # Voice transcription
```

## 🎨 Component Pattern
```typescript
'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Component() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <motion.div className="bg-primary-black text-primary-white font-mono">
      <WindowFrame title="SECTION_TITLE">
        {/* Terminal-style content */}
      </WindowFrame>
    </motion.div>
  );
}
```

## 🎨 Styling Classes
```css
bg-primary-black           # Background
text-primary-white         # Text
border-primary-red         # Accent borders
text-primary-yellow        # Highlights
font-mono                  # Terminal font
border-2 border-primary-white  # Standard borders
hover:border-primary-red   # Hover effects
```

## 📋 Common Tasks

**Add Project:**
```typescript
// Edit src/lib/data/projects.ts
{ id: 'new', slug: 'new-project', title: 'NEW_PROJECT', ... }
```

**Add Team Member:**
```typescript  
// Edit src/lib/data/team.ts
{ id: 'new', name: 'Name', role: 'ROLE', ... }
```

**Add Page:**
```typescript
// 1. Create src/app/new-page/page.tsx
// 2. Add to src/components/Navigation.tsx
```

**Add Component:**
```typescript
// 1. Create src/components/NewComponent.tsx  
// 2. Import and use with WindowFrame wrapper
```

## 🔧 Environment Variables
```bash
# Required in .env.local
NEXT_PUBLIC_FIREBASE_API_KEY=xxx
NEXT_PUBLIC_FIREBASE_PROJECT_ID=xxx
OPENAI_API_KEY=sk-xxx
ANTHROPIC_API_KEY=sk-ant-xxx
REPLICATE_API_TOKEN=r8_xxx
DEEPGRAM_API_KEY=xxx
```

## 🐛 Quick Fixes
```typescript
// Hydration errors
const [mounted, setMounted] = useState(false);
useEffect(() => setMounted(true), []);
if (!mounted) return null;

// Animation issues
const Comp = dynamic(() => import('./Comp'), { ssr: false });
```

## 📱 Responsive Pattern
```css
text-sm sm:text-base md:text-lg lg:text-xl  # Text scaling
p-4 sm:p-6 md:p-8 lg:p-10                  # Padding scaling
grid-cols-1 md:grid-cols-2 lg:grid-cols-4  # Grid scaling
```

## 🔥 Key Features
- **WindowFrame**: Terminal-style containers
- **Framer Motion**: Page/section animations  
- **Dynamic Imports**: Performance optimization
- **Firebase**: Auth & database
- **AI Integration**: Multiple providers
- **Mobile-First**: Responsive design
- **Accessibility**: Skip links, ARIA labels

## 🚀 Deploy Checklist
```bash
npm run build              # ✅ Build passes
# ✅ All env vars set in production
# ✅ AI services working
# ✅ Contact form working  
# ✅ Mobile responsive
```

---
**Remember**: Maintain cyberpunk aesthetic, use WindowFrame for sections, keep terminal/mono font styling throughout! 