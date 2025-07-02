import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, MessageSquare, Calendar, TrendingUp, Users, BarChart } from 'lucide-react';
import CyberpunkBackground from '@/components/CyberpunkBackground';

export const metadata: Metadata = {
  title: 'Social Media Management | ImagiNative AI Studios',
  description: 'Comprehensive social media management including strategy, content creation, and analytics.',
};

export default function SocialMediaManagementPage() {
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
                <MessageSquare className="w-8 h-8 text-primary-red" />
              </div>
              <h1 className="font-mono text-3xl sm:text-4xl lg:text-5xl uppercase relative z-10 text-primary-white">
                <span className="text-primary-red">[</span>
                SOCIAL_MEDIA_MANAGEMENT
                <span className="text-primary-red">]_</span>
              </h1>
            </div>
            <p className="font-mono text-sm sm:text-base text-primary-white/70 relative z-10">
              &gt; Build your brand and engage your audience across all platforms
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {/* Strategy & Planning */}
          <div className="border-2 border-primary-white p-6 relative group hover:border-primary-yellow transition-colors">
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-yellow opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-6 h-6 text-primary-yellow" />
              <h3 className="font-mono text-lg sm:text-xl text-primary-white">STRATEGY_&_PLANNING</h3>
            </div>
            <p className="font-mono text-sm text-primary-white/80 mb-4">
              Develop comprehensive social media strategies aligned with your business goals.
            </p>
            <ul className="font-mono text-xs text-primary-white/70 space-y-2">
              <li>&gt; Audience analysis and targeting</li>
              <li>&gt; Platform-specific strategies</li>
              <li>&gt; Content calendars and themes</li>
              <li>&gt; Competitor analysis</li>
            </ul>
          </div>

          {/* Content Creation & Scheduling */}
          <div className="border-2 border-primary-white p-6 relative group hover:border-primary-yellow transition-colors">
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-yellow opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-6 h-6 text-primary-yellow" />
              <h3 className="font-mono text-lg sm:text-xl text-primary-white">CONTENT_CREATION</h3>
            </div>
            <p className="font-mono text-sm text-primary-white/80 mb-4">
              Create engaging content that resonates with your audience and drives engagement.
            </p>
            <ul className="font-mono text-xs text-primary-white/70 space-y-2">
              <li>&gt; Visual content design</li>
              <li>&gt; Copywriting and captions</li>
              <li>&gt; Video and multimedia content</li>
              <li>&gt; Automated scheduling</li>
            </ul>
          </div>

          {/* Campaign & Ad Management */}
          <div className="border-2 border-primary-white p-6 relative group hover:border-primary-yellow transition-colors">
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-yellow opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-primary-yellow" />
              <h3 className="font-mono text-lg sm:text-xl text-primary-white">CAMPAIGN_MANAGEMENT</h3>
            </div>
            <p className="font-mono text-sm text-primary-white/80 mb-4">
              Design and execute targeted campaigns that drive results and maximize ROI.
            </p>
            <ul className="font-mono text-xs text-primary-white/70 space-y-2">
              <li>&gt; Paid advertising campaigns</li>
              <li>&gt; Influencer partnerships</li>
              <li>&gt; Contest and giveaway management</li>
              <li>&gt; Cross-platform promotions</li>
            </ul>
          </div>

          {/* Engagement & Analytics */}
          <div className="border-2 border-primary-white p-6 relative group hover:border-primary-yellow transition-colors">
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-yellow opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex items-center gap-3 mb-4">
              <BarChart className="w-6 h-6 text-primary-yellow" />
              <h3 className="font-mono text-lg sm:text-xl text-primary-white">ANALYTICS_&_ENGAGEMENT</h3>
            </div>
            <p className="font-mono text-sm text-primary-white/80 mb-4">
              Monitor performance and engage with your community to build lasting relationships.
            </p>
            <ul className="font-mono text-xs text-primary-white/70 space-y-2">
              <li>&gt; Community management</li>
              <li>&gt; Performance tracking</li>
              <li>&gt; Monthly reporting</li>
              <li>&gt; Strategy optimization</li>
            </ul>
          </div>
        </div>

        {/* Platforms */}
        <div className="mb-12 sm:mb-16">
          <h2 className="font-mono text-2xl sm:text-3xl text-primary-white mb-6 border-l-4 border-primary-red pl-4">
            PLATFORMS_WE_MANAGE
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {['Instagram', 'Facebook', 'Twitter/X', 'LinkedIn', 'TikTok', 'YouTube', 'Pinterest', 'Snapchat'].map((platform) => (
              <div key={platform} className="border border-primary-white/30 p-3 text-center">
                <span className="font-mono text-sm text-primary-white">{platform}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="mb-12 sm:mb-16">
          <h2 className="font-mono text-2xl sm:text-3xl text-primary-white mb-6 border-l-4 border-primary-red pl-4">
            RESULTS_YOU_CAN_EXPECT
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'INCREASED_ENGAGEMENT', desc: 'Average 150% increase in engagement rates within 3 months' },
              { title: 'BRAND_AWARENESS', desc: 'Significant growth in brand recognition and follower count' },
              { title: 'LEAD_GENERATION', desc: 'Convert social media traffic into qualified leads and sales' }
            ].map((result) => (
              <div key={result.title} className="border border-primary-white/30 p-4">
                <h3 className="font-mono text-lg text-primary-yellow mb-3">{result.title}</h3>
                <p className="font-mono text-sm text-primary-white/80">{result.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="border-2 border-primary-white p-6 sm:p-8 inline-block relative">
            <div className="absolute -top-3 -right-3 w-8 h-8 sm:w-12 sm:h-12 bg-primary-yellow" />
            <h3 className="font-mono text-lg sm:text-xl lg:text-2xl text-primary-white mb-4 relative z-10">
              READY_TO_AMPLIFY_YOUR_SOCIAL_PRESENCE?
            </h3>
            <Link
              href="/contact"
              className="inline-block bg-primary-black border-2 border-primary-white px-6 py-3 
                       font-mono uppercase relative hover:translate-x-1 hover:-translate-y-1 
                       transition-transform group touch-manipulation"
            >
              <span className="relative z-10 text-sm sm:text-base text-primary-black">START_GROWING</span>
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