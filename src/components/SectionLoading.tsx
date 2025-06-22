'use client';

import LoadingWindow from '@/components/LoadingWindow';

export default function SectionLoading() {
  return (
    <div className="py-8">
      <LoadingWindow message="LOADING_SECTION" size="sm" />
    </div>
  );
} 