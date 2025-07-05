import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Loading from './loading';
import SectionLoading from '@/components/SectionLoading';

// Import static components
import SkipLink from '@/components/SkipLink';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import CyberpunkBackground from '@/components/CyberpunkBackground';

// Dynamic import for client-only components
const ScrollProgress = dynamic(() => import('@/components/ScrollProgress'), { 
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
const ScrollToTop = dynamic(() => import('@/components/ScrollToTop'), {
  ssr: false,
  loading: () => null
});

export default function Home() {
  return (
    <>
      <SkipLink />
      
      {/* Client-side only components */}
      <ScrollProgress />
      
      {/* Cyberpunk Background */}
      <CyberpunkBackground intensity="low" />
      
      <main 
        id="main-content" 
        role="main" 
        tabIndex={-1}
      >
        <section id="hero">
          <Hero />
        </section>

        <div>
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
            <section id="testimonials">
              <Testimonials />
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
        </div>
      </main>
      
      <Footer />
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </>
  );
}
