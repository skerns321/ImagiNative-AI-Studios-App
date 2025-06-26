import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Loading from './loading';
import SectionLoading from '@/components/SectionLoading';

// Import static components
import SkipLink from '@/components/SkipLink';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import ErrorFallback from '@/components/ErrorFallback';

// Dynamic import for client-only components
const ScrollProgress = dynamic(() => import('@/components/ScrollProgress'), { 
  ssr: false,
  loading: () => null
});
const SectionIndicator = dynamic(() => import('@/components/SectionIndicator'), { 
  ssr: false,
  loading: () => null
});

// Dynamic imports for other components with error fallbacks
const Services = dynamic(() => import('@/components/Services'), { 
  ssr: false,
  loading: () => <SectionLoading />
});
const Work = dynamic(() => import('@/components/Work'), { 
  ssr: false,
  loading: () => <SectionLoading />
});
const About = dynamic(() => import('@/components/About'), { 
  ssr: false,
  loading: () => <SectionLoading />
});
const Insights = dynamic(() => import('@/components/Insights'), { 
  ssr: false,
  loading: () => <SectionLoading />
});
const Contact = dynamic(() => import('@/components/Contact'), { 
  ssr: false,
  loading: () => <SectionLoading />
});
const Testimonials = dynamic(() => import('@/components/Testimonials'), { 
  ssr: false,
  loading: () => <SectionLoading />
});

export default function Home() {
  return (
    <ErrorBoundary fallback={<ErrorFallback />}>
      <SkipLink />
      <Navigation />
      
      {/* Client-side only components */}
      <ScrollProgress />
      <SectionIndicator />
      
      <main 
        id="main-content" 
        className="pt-20"
        role="main" 
        tabIndex={-1}
      >
        <ErrorBoundary fallback={<ErrorFallback />}>
          <section id="hero">
            <Hero />
          </section>
        </ErrorBoundary>

        <ErrorBoundary fallback={<ErrorFallback />}>
          <Suspense fallback={<SectionLoading />}>
            <section id="work">
              <Work />
            </section>
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary fallback={<ErrorFallback />}>
          <Suspense fallback={<SectionLoading />}>
            <section id="services">
              <Services />
            </section>
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary fallback={<ErrorFallback />}>
          <Suspense fallback={<SectionLoading />}>
            <section id="about">
              <About />
            </section>
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary fallback={<ErrorFallback />}>
          <Suspense fallback={<SectionLoading />}>
            <section id="testimonials">
              <Testimonials />
            </section>
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary fallback={<ErrorFallback />}>
          <Suspense fallback={<SectionLoading />}>
            <section id="insights">
              <Insights />
            </section>
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary fallback={<ErrorFallback />}>
          <Suspense fallback={<SectionLoading />}>
            <section id="contact">
              <Contact />
            </section>
          </Suspense>
        </ErrorBoundary>
      </main>
      
      <Footer />
    </ErrorBoundary>
  );
}
