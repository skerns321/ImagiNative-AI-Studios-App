import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { insights } from '@/lib/data/insights';
import { Metadata } from 'next';
import { ArrowLeft } from 'lucide-react';
import CyberpunkBackground from '@/components/CyberpunkBackground';

interface InsightPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: InsightPageProps): Promise<Metadata> {
  const insight = insights.find((p) => p.slug === params.slug);
  
  if (!insight) {
    return {
      title: 'Insight Not Found',
    };
  }

  return {
    title: `${insight.title} | ImagiNative AI Studios`,
    description: insight.description,
  };
}

export default function InsightPage({ params }: InsightPageProps) {
  const insight = insights.find((p) => p.slug === params.slug);

  if (!insight) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-32 pb-16 px-4 md:px-8 bg-primary-black relative">
      <CyberpunkBackground intensity="low" />
      <article className="max-w-4xl mx-auto relative">
        {/* Category */}
        <div className="mb-8">
          <span className="inline-block px-4 py-2 border-2 border-primary-yellow 
                         text-primary-yellow font-mono">
            {insight.category}
          </span>
        </div>

        {/* Title and Date */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-mono text-primary-white mb-4">
            {insight.title}
          </h1>
          <time className="text-primary-white/60 font-mono">
            &gt; {insight.date}
          </time>
        </div>

        {/* Hero Image */}
        <div className="relative h-[50vh] mb-12 border-2 border-primary-white">
          <Image
            src={insight.image}
            alt={insight.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 1024px"
            priority
          />
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none font-mono">
          <div className="text-lg text-primary-white/80 mb-8">
            {insight.description}
          </div>
          <div className="text-primary-white whitespace-pre-line">
            {insight.content}
          </div>
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
            BACK_TO_INSIGHTS
          </Link>
        </div>
      </article>
    </main>
  );
} 