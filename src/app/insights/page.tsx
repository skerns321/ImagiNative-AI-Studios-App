import Link from 'next/link';
import Image from 'next/image';
import { insights } from '@/lib/data/insights';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Insights & Articles | ImagiNative AI Studios',
  description: 'Explore our latest insights and articles about technology, design, and innovation',
};

export default function InsightsPage() {
  return (
    <main className="min-h-screen pt-32 pb-16 px-4 md:px-8 bg-primary-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 border-4 border-primary-white p-8 relative">
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary-red" />
          <h1 className="font-mono text-5xl uppercase relative z-10">
            <span className="text-primary-red">[</span>
            INSIGHTS & ARTICLES
            <span className="text-primary-red">]_</span>
          </h1>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight) => (
            <div 
              key={insight.slug}
              className="border-2 border-primary-white group hover:border-primary-red transition-colors"
            >
              <div className="relative h-48">
                <Image
                  src={insight.image}
                  alt={insight.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <p className="font-mono text-xs text-primary-white/60 mb-2">
                  &gt; {insight.date}
                </p>
                <h3 className="font-mono text-xl text-primary-white mb-3">
                  {insight.title}
                </h3>
                <p className="font-mono text-sm text-primary-white/70 mb-4">
                  {insight.description}
                </p>
                <Link
                  href={`/insights/${insight.slug}`}
                  className="inline-flex items-center font-mono text-primary-yellow text-sm group-hover:text-primary-red transition-colors duration-300"
                >
                  Read more_
                  <span className="ml-2 font-mono">&gt;&gt;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Back Button */}
        <div className="mt-16">
          <Link
            href="/#insights"
            className="inline-flex items-center px-6 py-3 border-2 border-primary-white 
                     text-primary-white hover:border-primary-red hover:text-primary-red 
                     transition-colors font-mono group"
          >
            <ArrowLeft className="mr-2 group-hover:transform group-hover:-translate-x-2 
                                transition-transform" />
            BACK_TO_HOME
          </Link>
        </div>
      </div>
    </main>
  );
} 