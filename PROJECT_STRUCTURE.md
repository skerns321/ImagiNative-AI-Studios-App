# ImagiNative AI Studios Website Project Structure

This document outlines the organization and key components of the ImagiNative AI Studios website codebase.

## Directory Structure

```
/
├── public/              # Static assets
│   ├── grid-bg.svg      # Grid pattern background 
│   ├── hero-bg.svg      # Hero section background
│   ├── og-image.svg     # Open Graph image for social sharing
│   ├── projects/        # Project portfolio images
│   ├── team/            # Team member photos
│   ├── about/           # About section images
│   └── insights/        # Blog/insights images
│
├── src/                 # Application source code
│   ├── app/             # Next.js App Router
│   │   ├── api/         # API routes
│   │   ├── globals.css  # Global styles
│   │   ├── layout.tsx   # Root layout with metadata
│   │   ├── page.tsx     # Home page component
│   │   ├── loading.tsx  # Loading state component
│   │   ├── not-found.tsx # 404 page
│   │   └── error.tsx    # Error boundary page
│   │
│   ├── components/      # React components
│   │   ├── Navigation.tsx    # Site navigation/header
│   │   ├── Hero.tsx          # Hero section
│   │   ├── Work.tsx          # Work/portfolio section
│   │   ├── Services.tsx      # Services section
│   │   ├── About.tsx         # About section
│   │   ├── Insights.tsx      # Blog/insights section
│   │   ├── Contact.tsx       # Contact form section
│   │   ├── Footer.tsx        # Site footer
│   │   ├── ClientWrapper.tsx # Wrapper for keyboard navigation
│   │   ├── ErrorBoundary.tsx # React error boundary component
│   │   └── SkipLink.tsx      # Accessibility skip link
│   │
│   └── lib/             # Utility functions and hooks
│       ├── hooks/       # Custom React hooks
│       ├── contexts/    # React context providers
│       └── firebase/    # Firebase configuration
│
├── tailwind.config.js   # Tailwind CSS configuration
└── package.json         # Project dependencies
```

## Key Components

### Page Sections

- **Navigation**: Main navigation menu with mobile responsiveness
- **Hero**: Striking hero section with animations and call-to-action buttons
- **Work**: Portfolio showcase with project cards and detailed modal views
- **Services**: Services offered with icons and descriptions
- **About**: Team information and company history
- **Insights**: Blog posts and news items
- **Contact**: Contact form with service selection and map
- **Footer**: Site footer with links, social media, and newsletter signup

### Special Pages

- **not-found.tsx**: Custom 404 page
- **error.tsx**: Error handling page
- **loading.tsx**: Loading state component

### Design System

The website uses a consistent design system with:

- **Colors**: Black (#000000), White (#FFFFFF), Red (#E50914), Yellow (#FFC107)
- **Typography**: Montserrat for headings, Roboto for body text
- **Animations**: Powered by Framer Motion for smooth, engaging interactions
- **Accessibility**: Skip links, keyboard navigation, ARIA attributes

## Technology Stack

- **Framework**: Next.js 14 with App Router
- **UI**: React components with TypeScript
- **Styling**: Tailwind CSS for responsive design
- **Animations**: Framer Motion
- **Form Processing**: Firebase (configured but implementation may vary)

## Development Guidelines

1. **Component Organization**: Each major section has its own component file
2. **Styling**: Use Tailwind classes following the established design system
3. **Accessibility**: Maintain keyboard navigation and screen reader support
4. **Error Handling**: Use ErrorBoundary for component-level error management
5. **Performance**: Dynamic imports for code splitting to improve load times 