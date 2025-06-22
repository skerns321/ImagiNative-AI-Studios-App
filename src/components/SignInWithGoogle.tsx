"use client";

import { useAuth } from '@/lib/hooks/useAuth';
import { useState } from 'react';

export default function SignInWithGoogle() {
  const auth = useAuth();
  const [error, setError] = useState<string | null>(null);

  const handleSignIn = async () => {
    try {
      // Check if signInWithGoogle exists before calling it
      if (typeof auth?.signInWithGoogle === 'function') {
        await auth.signInWithGoogle();
      } else {
        console.warn('Sign in with Google is not available');
        setError('Authentication is not configured');
        setTimeout(() => setError(null), 3000);
      }
    } catch (err) {
      console.error('Error signing in:', err);
      setError('Failed to sign in');
      setTimeout(() => setError(null), 3000);
    }
  };

  return (
    <div>
      <button
        onClick={handleSignIn}
        className="flex items-center justify-center bg-white text-gray-700 font-semibold py-2 px-4 rounded-full border border-gray-300 hover:bg-gray-100 transition duration-300 ease-in-out"
      >
        <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google logo" className="w-6 h-6 mr-2" />
        Sign in with Google
      </button>
      {error && (
        <div className="mt-2 text-sm text-primary-red">{error}</div>
      )}
    </div>
  );
}
