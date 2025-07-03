import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";
import { getStorage, FirebaseStorage } from "firebase/storage";

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

// Initialize Firebase only if environment variables are provided
let app: FirebaseApp | any;
let auth: Auth | any;
let db: Firestore | any;
let storage: FirebaseStorage | any;

try {
  // Only attempt to initialize Firebase if we have proper config
  if (hasFirebaseConfig) {
    app = getApps().length ? getApp() : initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
    storage = getStorage(app);
  } else {
    console.warn("Firebase environment variables are missing. Using dummy implementation.");
    const { dummyApp, dummyAuth, dummyFirestore, dummyStorage } = createDummyFirebase();
    app = dummyApp;
    auth = dummyAuth;
    db = dummyFirestore;
    storage = dummyStorage;
  }
} catch (error) {
  console.error("Failed to initialize Firebase:", error);
  const { dummyApp, dummyAuth, dummyFirestore, dummyStorage } = createDummyFirebase();
  app = dummyApp;
  auth = dummyAuth;
  db = dummyFirestore;
  storage = dummyStorage;
}

export { app, auth, db, storage };
