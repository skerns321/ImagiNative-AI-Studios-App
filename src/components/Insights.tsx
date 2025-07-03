'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { insights } from '@/lib/data/insights';

// Add type definition for insights
interface Insight {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
  slug: string;
}

export default function Insights() {
  // Add default empty array to prevent undefined error
  const featuredInsights: Insight[] = insights || [];

  return (
    <section id="insights" className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-primary-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Brutalist Style */}
        <div className="mb-16 border-4 border-primary-white p-8 relative">
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary-red" />
          <h2 className="font-mono text-fluid-4xl uppercase relative z-10">
            <span className="text-primary-red">[</span>
            INSIGHTS & ARTICLES
            <span className="text-primary-red">]_</span>
          </h2>
          <p className="font-mono text-fluid-sm text-primary-white/70 mt-4">
            &gt; SELECT * FROM articles ORDER BY date DESC LIMIT 3;
          </p>
        </div>

        {/* Articles Grid with Brutalist Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredInsights.map((insight) => (
            <motion.div
              key={insight.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-primary-black border border-primary-white p-4"
            >
              <div className="relative h-48 mb-4">
                <Image
                  src={insight.image}
                  alt={insight.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <p className="text-primary-white/60 text-sm mb-2">{insight.date}</p>
              <h3 className="text-primary-white text-xl mb-2">{insight.title}</h3>
              <p className="font-body text-primary-white/80 mb-4 leading-relaxed">{insight.description}</p>
              <Link
                href={`/insights/${insight.slug}`}
                className="text-primary-yellow hover:text-primary-red transition-colors"
              >
                Read More →
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Articles Button */}
        <motion.div 
          className="mt-8 sm:mt-12 lg:mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="border-2 border-primary-white p-6 sm:p-8 relative max-w-2xl mx-auto">
            <div className="absolute -top-2 -right-2 w-8 h-8 sm:w-12 sm:h-12 bg-primary-red" />
            <h3 className="font-mono text-lg sm:text-xl lg:text-2xl text-primary-white mb-4">
              READ_MORE_INSIGHTS?
            </h3>
            <p className="font-body text-sm sm:text-base text-primary-white/70 mb-6 leading-relaxed">
              Dive deeper into our latest articles and industry insights
            </p>
            <Link
              href="/insights"
              className="inline-block bg-primary-black border-2 border-primary-white px-6 py-3 
                       font-mono uppercase relative hover:translate-x-1 hover:-translate-y-1 
                       transition-transform group touch-manipulation"
            >
              <span className="relative z-10 text-sm sm:text-base font-bold">VIEW_ALL_ARTICLES</span>
              <div className="absolute inset-0 bg-primary-red -z-0 translate-x-2 
                            translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 
                            transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Brutalist Decorative Elements */}
      <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-primary-yellow" />
      <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-primary-red" />
    </section>
  );
} 