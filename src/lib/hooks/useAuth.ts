import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

// Export the useAuth hook with additional properties that might be required
export const useAuth = () => {
  const context = useContext(AuthContext);
  
  // If the context doesn't exist or doesn't have signInWithGoogle, provide a dummy implementation
  if (!context || typeof context.signInWithGoogle !== 'function') {
    return {
      ...context,
      signInWithGoogle: async () => {
        console.warn('Auth context not properly initialized or signInWithGoogle not available');
        return Promise.resolve();
      }
    };
  }
  
  return context;
};