import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Monitor, Globe, ShoppingCart, Code, Settings } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Web Development Services | ImagiNative AI Studios',
  description: 'Professional web development services including custom applications, e-commerce solutions, and managed services.',
};

export default function WebDevelopmentPage() {
  return (
    <main className="min-h-screen pt-20 sm:pt-24 lg:pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-primary-black">
      <div className="max-w-5xl mx-auto">
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
                <Monitor className="w-8 h-8 text-primary-red" />
              </div>
              <h1 className="font-mono text-3xl sm:text-4xl lg:text-5xl uppercase relative z-10 text-primary-white">
                <span className="text-primary-red">[</span>
                WEB_DEVELOPMENT
                <span className="text-primary-red">]_</span>
              </h1>
            </div>
            <p className="font-mono text-sm sm:text-base text-primary-white/70 relative z-10">
              &gt; Building powerful web solutions that drive business growth
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {/* Web Presence & Development */}
          <div className="border-2 border-primary-white p-6 relative group hover:border-primary-yellow transition-colors">
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-yellow opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex items-center gap-3 mb-4">
              <Globe className="w-6 h-6 text-primary-yellow" />
              <h3 className="font-mono text-lg sm:text-xl text-primary-white">WEB_PRESENCE</h3>
            </div>
            <p className="font-mono text-sm text-primary-white/80 mb-4">
              Professional websites that establish your digital presence and engage your audience.
            </p>
            <ul className="font-mono text-xs text-primary-white/70 space-y-2">
              <li>&gt; Responsive design across all devices</li>
              <li>&gt; SEO optimization for better visibility</li>
              <li>&gt; Performance optimization</li>
              <li>&gt; Content management systems</li>
            </ul>
          </div>

          {/* E-commerce & Marketing */}
          <div className="border-2 border-primary-white p-6 relative group hover:border-primary-yellow transition-colors">
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-yellow opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex items-center gap-3 mb-4">
              <ShoppingCart className="w-6 h-6 text-primary-yellow" />
              <h3 className="font-mono text-lg sm:text-xl text-primary-white">E-COMMERCE</h3>
            </div>
            <p className="font-mono text-sm text-primary-white/80 mb-4">
              Complete e-commerce solutions to sell your products online effectively.
            </p>
            <ul className="font-mono text-xs text-primary-white/70 space-y-2">
              <li>&gt; Secure payment processing</li>
              <li>&gt; Inventory management</li>
              <li>&gt; Marketing automation</li>
              <li>&gt; Analytics and reporting</li>
            </ul>
          </div>

          {/* Custom Applications */}
          <div className="border-2 border-primary-white p-6 relative group hover:border-primary-yellow transition-colors">
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-yellow opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex items-center gap-3 mb-4">
              <Code className="w-6 h-6 text-primary-yellow" />
              <h3 className="font-mono text-lg sm:text-xl text-primary-white">CUSTOM_APPS</h3>
            </div>
            <p className="font-mono text-sm text-primary-white/80 mb-4">
              Tailored web applications built to solve your specific business challenges.
            </p>
            <ul className="font-mono text-xs text-primary-white/70 space-y-2">
              <li>&gt; Custom functionality development</li>
              <li>&gt; API integrations</li>
              <li>&gt; Database design and optimization</li>
              <li>&gt; Scalable architecture</li>
            </ul>
          </div>

          {/* Managed Services */}
          <div className="border-2 border-primary-white p-6 relative group hover:border-primary-yellow transition-colors">
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-yellow opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="flex items-center gap-3 mb-4">
              <Settings className="w-6 h-6 text-primary-yellow" />
              <h3 className="font-mono text-lg sm:text-xl text-primary-white">MANAGED_SERVICES</h3>
            </div>
            <p className="font-mono text-sm text-primary-white/80 mb-4">
              Ongoing maintenance and support to keep your website running smoothly.
            </p>
            <ul className="font-mono text-xs text-primary-white/70 space-y-2">
              <li>&gt; Regular security updates</li>
              <li>&gt; Performance monitoring</li>
              <li>&gt; Backup and recovery</li>
              <li>&gt; Technical support</li>
            </ul>
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-12 sm:mb-16">
          <h2 className="font-mono text-2xl sm:text-3xl text-primary-white mb-6 border-l-4 border-primary-red pl-4">
            TECHNOLOGIES_WE_USE
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {['Next.js', 'React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'AWS'].map((tech) => (
              <div key={tech} className="border border-primary-white/30 p-3 text-center">
                <span className="font-mono text-sm text-primary-white">{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="border-2 border-primary-white p-6 sm:p-8 inline-block relative">
            <div className="absolute -top-3 -right-3 w-8 h-8 sm:w-12 sm:h-12 bg-primary-yellow" />
            <h3 className="font-mono text-lg sm:text-xl lg:text-2xl text-primary-white mb-4 relative z-10">
              READY_TO_BUILD_YOUR_WEB_PRESENCE?
            </h3>
            <Link
              href="/contact"
              className="inline-block bg-primary-black border-2 border-primary-white px-6 py-3 
                       font-mono uppercase relative hover:translate-x-1 hover:-translate-y-1 
                       transition-transform group touch-manipulation"
            >
              <span className="relative z-10 text-sm sm:text-base text-primary-black">GET_STARTED</span>
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