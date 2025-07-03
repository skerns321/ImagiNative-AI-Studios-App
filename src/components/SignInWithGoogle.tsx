"use client";

import { useAuth } from '@/lib/hooks/useAuth';
import { useState } from 'react';
import Image from 'next/image';

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
        className="flex items-center justify-center bg-primary-black text-primary-white border-2 border-primary-white font-semibold py-2 px-4 font-mono hover:bg-primary-white/10 transition duration-300 ease-in-out"
      >
        <Image src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google logo" width={24} height={24} className="mr-2" />
        Sign in with Google
      </button>
      {error && (
        <div className="mt-2 text-sm text-primary-red">{error}</div>
      )}
    </div>
  );
}
