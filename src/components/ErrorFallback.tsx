'use client';

import React from 'react';

export default function ErrorFallback() {
  return (
    <div className="min-h-screen bg-primary-black flex flex-col items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-primary-white mb-4">Something went wrong</h1>
        <p className="text-primary-white mb-8 max-w-md mx-auto">
          We apologize for the inconvenience. Please try refreshing the page or check the console for error details.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-primary-black bg-primary-red hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          Refresh Page
        </button>
      </div>
    </div>
  );
} 