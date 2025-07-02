import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Megaphone, Eye, Target, Palette, Zap } from 'lucide-react';
import CyberpunkBackground from '@/components/CyberpunkBackground';

export const metadata: Metadata = {
  title: 'Branding & Marketing | ImagiNative AI Studios',
  description: 'Comprehensive branding and marketing services including brand identity, campaigns, and strategic consultation.',
};

export default function BrandingAndMarketingPage() {
  return (
    <main className="min-h-screen pt-20 sm:pt-24 lg:pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-primary-black relative">
      <CyberpunkBackground intensity="medium" />
      <div className="max-w-5xl mx-auto relative">
        {/* Header */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-primary-white hover:text-primary-red 
                     transition-colors mb-6 sm:mb-8 font-mono text-sm touch-manipulation"
          >
            <ArrowLeft size={16} />
            BACK_TO_SERVICES
          </Link>
          
          <div className="border-4 border-primary-white p-6 sm:p-8 relative">
            <div className="absolute -top-4 -right-4 w-12 h-12 sm:w-16 sm:h-16 bg-primary-red" />
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 border-2 border-primary-red">
                <Megaphone className="w-8 h-8 text-primary-red" />
              </div>
              <h1 className="font-mono text-3xl sm:text-4xl lg:text-5xl uppercase relative z-10 text-primary-white">
                <span className="text-primary-red">[</span>
                BRANDING_&_MARKETING
                <span className="text-primary-red">]_</span>
              </h1>
            </div>
            <p className="font-mono text-sm sm:text-base text-primary-white/70 relative z-10">
              &gt; Create powerful brand identities and marketing strategies that drive results
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {/* Cohesive Brand Identity */}
          <div className="border-2 border-primary-white p-6 relative group hover:border-primary-yellow transition-colors">
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-yellow opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex items-center gap-3 mb-4">
              <Palette className="w-6 h-6 text-primary-yellow" />
              <h3 className="font-mono text-lg sm:text-xl text-primary-white">BRAND_IDENTITY</h3>
            </div>
            <p className="font-mono text-sm text-primary-white/80 mb-4">
              Develop cohesive brand identities that resonate with your target audience.
            </p>
            <ul className="font-mono text-xs text-primary-white/70 space-y-2">
              <li>&gt; Logo design and brand marks</li>
              <li>&gt; Color palette and typography</li>
              <li>&gt; Brand guidelines and standards</li>
              <li>&gt; Visual identity systems</li>
            </ul>
          </div>

          {/* Impactful Marketing Campaigns */}
          <div className="border-2 border-primary-white p-6 relative group hover:border-primary-yellow transition-colors">
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-yellow opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-6 h-6 text-primary-yellow" />
              <h3 className="font-mono text-lg sm:text-xl text-primary-white">MARKETING_CAMPAIGNS</h3>
            </div>
            <p className="font-mono text-sm text-primary-white/80 mb-4">
              Create impactful marketing campaigns that drive engagement and conversions.
            </p>
            <ul className="font-mono text-xs text-primary-white/70 space-y-2">
              <li>&gt; Multi-channel campaign strategy</li>
              <li>&gt; Creative concept development</li>
              <li>&gt; Content creation and copywriting</li>
              <li>&gt; Campaign execution and management</li>
            </ul>
          </div>

          {/* Data-Driven Visibility Strategies */}
          <div className="border-2 border-primary-white p-6 relative group hover:border-primary-yellow transition-colors">
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-yellow opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-6 h-6 text-primary-yellow" />
              <h3 className="font-mono text-lg sm:text-xl text-primary-white">VISIBILITY_STRATEGIES</h3>
            </div>
            <p className="font-mono text-sm text-primary-white/80 mb-4">
              Implement data-driven strategies to increase your brand's visibility and reach.
            </p>
            <ul className="font-mono text-xs text-primary-white/70 space-y-2">
              <li>&gt; SEO and content marketing</li>
              <li>&gt; Paid advertising optimization</li>
              <li>&gt; Market research and analysis</li>
              <li>&gt; Performance tracking and reporting</li>
            </ul>
          </div>

          {/* Social Listening & Targeted Outreach */}
          <div className="border-2 border-primary-white p-6 relative group hover:border-primary-yellow transition-colors">
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-yellow opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-6 h-6 text-primary-yellow" />
              <h3 className="font-mono text-lg sm:text-xl text-primary-white">TARGETED_OUTREACH</h3>
            </div>
            <p className="font-mono text-sm text-primary-white/80 mb-4">
              Use social listening and targeted outreach to connect with your ideal customers.
            </p>
            <ul className="font-mono text-xs text-primary-white/70 space-y-2">
              <li>&gt; Social media monitoring</li>
              <li>&gt; Audience sentiment analysis</li>
              <li>&gt; Influencer identification</li>
              <li>&gt; Community engagement strategies</li>
            </ul>
          </div>
        </div>

        {/* Marketing Channels */}
        <div className="mb-12 sm:mb-16">
          <h2 className="font-mono text-2xl sm:text-3xl text-primary-white mb-6 border-l-4 border-primary-red pl-4">
            MARKETING_CHANNELS_WE_UTILIZE
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {['Google Ads', 'Facebook Ads', 'Instagram Ads', 'LinkedIn Ads', 'Email Marketing', 'Content Marketing', 'SEO', 'Influencer Marketing'].map((channel) => (
              <div key={channel} className="border border-primary-white/30 p-3 text-center">
                <span className="font-mono text-sm text-primary-white">{channel}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Brand Development Process */}
        <div className="mb-12 sm:mb-16">
          <h2 className="font-mono text-2xl sm:text-3xl text-primary-white mb-6 border-l-4 border-primary-red pl-4">
            OUR_BRAND_DEVELOPMENT_PROCESS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'DISCOVERY', desc: 'Understanding your business, goals, and target audience' },
              { step: '02', title: 'STRATEGY', desc: 'Developing comprehensive brand and marketing strategies' },
              { step: '03', title: 'CREATION', desc: 'Designing visual identity and creating marketing materials' },
              { step: '04', title: 'LAUNCH', desc: 'Implementing campaigns and monitoring performance' }
            ].map((phase) => (
              <div key={phase.step} className="border border-primary-white/30 p-4 relative">
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary-yellow flex items-center justify-center">
                  <span className="font-mono text-xs text-primary-black font-bold">{phase.step}</span>
                </div>
                <h3 className="font-mono text-lg text-primary-white mb-3 mt-2">{phase.title}</h3>
                <p className="font-mono text-sm text-primary-white/80">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <div className="mb-12 sm:mb-16">
          <h2 className="font-mono text-2xl sm:text-3xl text-primary-white mb-6 border-l-4 border-primary-red pl-4">
            SUCCESS_METRICS_WE_TRACK
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'BRAND_AWARENESS', desc: 'Measure brand recognition and recall across target demographics' },
              { title: 'ENGAGEMENT_RATES', desc: 'Track interaction levels across all marketing channels' },
              { title: 'CONVERSION_OPTIMIZATION', desc: 'Monitor and improve conversion rates from campaigns' }
            ].map((metric) => (
              <div key={metric.title} className="border border-primary-white/30 p-4">
                <h3 className="font-mono text-lg text-primary-yellow mb-3">{metric.title}</h3>
                <p className="font-mono text-sm text-primary-white/80">{metric.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="border-2 border-primary-white p-6 sm:p-8 inline-block relative">
            <div className="absolute -top-3 -right-3 w-8 h-8 sm:w-12 sm:h-12 bg-primary-yellow" />
            <h3 className="font-mono text-lg sm:text-xl lg:text-2xl text-primary-white mb-4 relative z-10">
              READY_TO_BUILD_A_POWERFUL_BRAND?
            </h3>
            <Link
              href="/contact"
              className="inline-block bg-primary-black border-2 border-primary-white px-6 py-3 
                       font-mono uppercase relative hover:translate-x-1 hover:-translate-y-1 
                       transition-transform group touch-manipulation"
            >
              <span className="relative z-10 text-sm sm:text-base text-primary-black">BUILD_YOUR_BRAND</span>
              <div className="absolute inset-0 bg-primary-yellow -z-0 translate-x-2 
                            translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 
                            transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
} 