# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
npm run dev          # Start development server on port 3000
npm run build        # Build for production
npm start            # Start production server (uses custom server.js)
npm run lint         # Run ESLint
npm run generate-images  # Generate placeholder images using AI
```

## Architecture Overview

This is a **Next.js 14 App Router** application for ImagiNative Studios - a digital agency platform with comprehensive AI integrations.

### Technology Stack

- **Frontend**: Next.js 14, React 18, TypeScript, Tailwind CSS, Framer Motion
- **AI Services**: OpenAI, Anthropic, Replicate, Deepgram (via Vercel AI SDK)
- **Backend**: Firebase (Auth/Firestore), Next.js API routes
- **Security**: Custom middleware, rate limiting, threat monitoring
- **Validation**: Zod schemas throughout

### Key Architectural Patterns

**Security-First Design**: Custom middleware (`src/middleware.ts`) handles authentication, rate limiting, and threat detection with comprehensive monitoring system.

**AI Service Integration**: Streaming responses with provider fallbacks in API routes. Multiple AI capabilities:

- Chat completions (OpenAI/Anthropic)
- Image generation (Replicate/OpenAI)  
- Voice transcription (Deepgram)

**Component Architecture**:

- Page components in `src/app/` following App Router conventions
- Reusable UI components in `src/components/`
- React contexts for global state (`AuthContext`, `ThemeContext`)
- Custom hooks in `src/hooks/`

**Data Flow**: Firebase for authentication and Firestore for data persistence, with Zod validation schemas in `src/lib/validations/`.

## Important Conventions

**Styling**: Uses custom Tailwind configuration with terminal-themed design system. 7 responsive breakpoints defined (xs to 4xl).

**Error Handling**: Comprehensive error boundaries and API error responses with monitoring integration.

**Type Safety**: Strict TypeScript configuration with Zod runtime validation for all API inputs.

**Security Headers**: Production server (`server.js`) implements additional security layers beyond Next.js defaults.

## File Structure Notes

- `src/app/` - Next.js 14 App Router pages and layouts
- `src/components/` - Reusable React components organized by domain
- `src/lib/` - Utilities, configurations, and shared logic
- `src/contexts/` - React context providers
- `src/hooks/` - Custom React hooks
- `public/` - Static assets and generated images

## Testing

No test framework is currently configured. When adding tests, check with the user for their preferred testing approach.
