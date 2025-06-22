# ImagiNative AI Studios

A modern, responsive website for ImagiNative AI Studios, a digital agency specializing in innovative design and development solutions.

## Features

- **Modern Design System**: Black, white, red, and yellow color scheme with futuristic tech/art studio aesthetic
- **Responsive Layout**: Mobile-first design that looks great on all devices
- **Animations**: Smooth transitions and engaging animations powered by Framer Motion
- **Accessibility**: Keyboard navigation, skip links, and ARIA attributes
- **Error Handling**: Custom error boundary and 404 pages
- **Form Submission**: Contact form with Firebase integration
- **SEO Optimized**: Comprehensive metadata and structured data
- **Performance**: Dynamic imports for optimized loading

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **UI**: React components with TypeScript
- **Styling**: Tailwind CSS for responsive design
- **Animations**: Framer Motion
- **Database**: Firebase Firestore for form submissions
- **Authentication**: Firebase Auth (configured for future use)

## Project Structure

See [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) for a detailed overview of the codebase organization.

## Getting Started

1. Clone the repository
2. Install dependencies with `npm install`
3. Configure Firebase credentials in the `.env.local` file
4. Run the development server with `npm run dev`
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Environment Variables

Create a `.env.local` file with the following variables:

```
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
```

## Deployment

This site is configured for deployment on Vercel. Simply connect your repository to Vercel for automatic deployments.

## Future Enhancements

- **Blog CMS**: Integration with a headless CMS for blog content management
- **Authentication**: User accounts for client portals
- **Project Dashboard**: Internal dashboard for project management
- **Analytics**: Integration with analytics tools for visitor tracking

# ImagiNative AI Studios - Project Documentation

## 1. Project Overview

### Architecture
- **Frontend**: Next.js 14 App Router with TypeScript and React
- **Styling**: Tailwind CSS
- **Authentication**: Firebase
- **AI Services**: OpenAI, Anthropic, Replicate, Deepgram
- **Security**: Enhanced middleware, CSP headers, monitoring system

### Directory Structure