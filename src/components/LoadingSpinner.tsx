'use client';

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center p-4" role="status" aria-label="Loading">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
    </div>
  );
} 