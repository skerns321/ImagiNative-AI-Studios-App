"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { signInWithPopup, GoogleAuthProvider, signOut as firebaseSignOut } from "firebase/auth";
import { User } from "firebase/auth";
import { auth } from "../firebase/firebase";

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
    try {
      // Check if auth has the onAuthStateChanged method
      if (auth && typeof auth.onAuthStateChanged === 'function') {
        const unsubscribe = auth.onAuthStateChanged((user: User | null) => {
          setCurrentUser(user);
          setLoading(false);
        });
        
        return () => unsubscribe();
      } else {
        // If auth is a dummy implementation, just set loading to false
        console.warn('Firebase auth not properly initialized. Authentication features will not work.');
        setLoading(false);
      }
    } catch (error) {
      console.error('Error in auth state listener:', error);
      setLoading(false);
    }
  }, []);

  // Dummy signInWithGoogle function to prevent errors
  const signInWithGoogle = async () => {
    console.warn('Firebase auth not properly initialized. Sign in with Google will not work.');
    return Promise.resolve();
  };

  // Dummy signOut function to prevent errors
  const signOut = async () => {
    console.warn('Firebase auth not properly initialized. Sign out will not work.');
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
