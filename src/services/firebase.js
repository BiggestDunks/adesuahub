// src/services/firebase.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAw6nd3xx9EgyqKZDnGJNfuxrRNf6AcjiU",
  authDomain: "adesuahub-c0479.firebaseapp.com",
  projectId: "adesuahub-c0479",
  storageBucket: "adesuahub-c0479.appspot.com", // ✅ corrected domain
  messagingSenderId: "596188657335",
  appId: "1:596188657335:web:c7984af942a01eb266bf32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase Auth instance
export const auth = getAuth(app);
