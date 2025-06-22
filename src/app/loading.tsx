'use client';

import LoadingWindow from '@/components/LoadingWindow';

export default function Loading() {
  return (
    <div className="min-h-[400px] flex items-center justify-center bg-primary-black p-4">
      <LoadingWindow message="INITIALIZING" size="lg" />
    </div>
  );
} 