import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import type { Auth } from "firebase/auth";
import type { Firestore } from "firebase/firestore";
import type { FirebaseStorage } from "firebase/storage";

// Check if Firebase environment variables are set
const hasFirebaseConfig = 
  process.env.NEXT_PUBLIC_FIREBASE_API_KEY &&
  process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN &&
  process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;

// Use placeholder values if env vars aren't set
const firebaseConfig = hasFirebaseConfig ? {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
} : {
  // Placeholder config for development - Firebase won't connect with these values
  apiKey: "placeholder-api-key",
  authDomain: "placeholder-app.firebaseapp.com",
  projectId: "placeholder-app",
  storageBucket: "placeholder-app.appspot.com",
  messagingSenderId: "000000000000",
  appId: "1:000000000000:web:0000000000000000000000",
};

// Create a dummy implementation to avoid runtime errors
const createDummyFirebase = () => {
  const dummyApp = {};
  const dummyAuth = {
    onAuthStateChanged: () => () => {},
    signInWithEmailAndPassword: () => Promise.resolve({}),
    createUserWithEmailAndPassword: () => Promise.resolve({}),
    signOut: () => Promise.resolve(),
    currentUser: null,
  };
  const dummyFirestore = {
    collection: () => ({
      add: () => Promise.resolve({}),
      get: () => Promise.resolve({ docs: [] }),
    }),
  };
  const dummyStorage = {
    ref: () => ({
      put: () => Promise.resolve({}),
      getDownloadURL: () => Promise.resolve(""),
    }),
  };
  return { dummyApp, dummyAuth, dummyFirestore, dummyStorage };
};

// Lazy loading functions for Firebase services
const getFirebaseAuth = async (): Promise<Auth> => {
  if (hasFirebaseConfig) {
    const { getAuth } = await import("firebase/auth");
    const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
    return getAuth(app);
  }
  return createDummyFirebase().dummyAuth as Auth;
};

const getFirebaseFirestore = async (): Promise<Firestore> => {
  if (hasFirebaseConfig) {
    const { getFirestore } = await import("firebase/firestore");
    const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
    return getFirestore(app);
  }
  return createDummyFirebase().dummyFirestore as Firestore;
};

const getFirebaseStorage = async (): Promise<FirebaseStorage> => {
  if (hasFirebaseConfig) {
    const { getStorage } = await import("firebase/storage");
    const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
    return getStorage(app);
  }
  return createDummyFirebase().dummyStorage as FirebaseStorage;
};

// Initialize Firebase app only
let app: FirebaseApp | any;

try {
  if (hasFirebaseConfig) {
    app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  } else {
    console.warn("Firebase environment variables are missing. Using dummy implementation.");
    app = createDummyFirebase().dummyApp;
  }
} catch (error) {
  console.error("Failed to initialize Firebase:", error);
  app = createDummyFirebase().dummyApp;
}

// Legacy exports for backward compatibility (will be lazy loaded)
let auth: Auth | any;
let db: Firestore | any;
let storage: FirebaseStorage | any;

export { app, auth, db, storage, getFirebaseAuth, getFirebaseFirestore, getFirebaseStorage };
