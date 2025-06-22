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

// Dynamic imports for other components
const Services = dynamic(() => import('@/components/Services'), { ssr: false });
const Work = dynamic(() => import('@/components/Work'), { ssr: false });
const About = dynamic(() => import('@/components/About'), { ssr: false });
const Insights = dynamic(() => import('@/components/Insights'), { ssr: false });
const Contact = dynamic(() => import('@/components/Contact'), { ssr: false });
const SocialLinks = dynamic(() => import('@/components/SocialLinks'), { ssr: false });

export default function Home() {
  return (
    <>
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
        <section id="hero">
          <Hero />
        </section>
        <Suspense fallback={<SectionLoading />}>
          <section id="work">
            <Work />
          </section>
        </Suspense>
        <Suspense fallback={<SectionLoading />}>
          <section id="services">
            <Services />
          </section>
        </Suspense>
        <Suspense fallback={<SectionLoading />}>
          <section id="about">
            <About />
          </section>
        </Suspense>
        <Suspense fallback={<SectionLoading />}>
          <section id="insights">
            <Insights />
          </section>
        </Suspense>
        <Suspense fallback={<SectionLoading />}>
          <section id="contact">
            <Contact />
          </section>
        </Suspense>
      </main>
      
      <Footer />
    </>
  );
}
