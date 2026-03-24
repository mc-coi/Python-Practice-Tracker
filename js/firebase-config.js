// ============================================================
// Firebase Configuration
// ============================================================
// STEP 1: Replace each placeholder below with your real values.
//         See FIREBASE_SETUP.md for a step-by-step walkthrough.
// ============================================================

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkcvyadSPk5DzZl54VdXfvNgQVSK64mAc",
  authDomain: "coding-1-activities.firebaseapp.com",
  projectId: "coding-1-activities",
  storageBucket: "coding-1-activities.firebasestorage.app",
  messagingSenderId: "980092953911",
  appId: "1:980092953911:web:270d6828df016cc4aca6b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ── How the app behaves ────────────────────────────────────
// • If FIREBASE_CONFIG still has "YOUR_API_KEY_HERE",
//   the app runs in LOCAL-ONLY mode (localStorage only).
// • Once you fill in real values the app switches to
//   Firebase mode: teacher controls the active day and
//   all student scores are saved to Firestore.
// ──────────────────────────────────────────────────────────
