"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Simple user interface since we removed Firebase
interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
}

interface AuthContextType {
  currentUser: User | null;
  loading: boolean;
  signInWithGoogle?: () => Promise<any>;
  signOut?: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  loading: true,
});

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Since we removed Firebase, just set loading to false
    // You can implement authentication with NextAuth.js or another provider
    setLoading(false);
  }, []);

  // Placeholder functions - implement with NextAuth.js or other auth provider
  const signInWithGoogle = async () => {
    console.log('Auth not implemented yet - consider using NextAuth.js');
    return Promise.resolve();
  };

  const signOut = async () => {
    console.log('Sign out not implemented yet');
    setCurrentUser(null);
    return Promise.resolve();
  };

  const value = {
    currentUser,
    loading,
    signInWithGoogle,
    signOut
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
