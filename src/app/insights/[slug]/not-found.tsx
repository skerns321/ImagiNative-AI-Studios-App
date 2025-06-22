import Link from 'next/link';

export default function InsightNotFound() {
  return (
    <main className="min-h-screen pt-32 pb-16 px-4 md:px-8 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-mono mb-6 text-primary-white">
          _404_INSIGHT_NOT_FOUND
        </h1>
        <p className="text-xl text-primary-white/80 mb-8 font-mono">
          &gt; The article you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/#insights"
          className="inline-block px-6 py-3 border-2 border-primary-white 
                   text-primary-white hover:border-primary-red hover:text-primary-red 
                   transition-colors font-mono"
        >
          BACK_TO_INSIGHTS
        </Link>
      </div>
    </main>
  );
} 