// ============================================================
// Firebase Configuration
// ============================================================
// STEP 1: Replace each placeholder below with your real values.
//         See FIREBASE_SETUP.md for a step-by-step walkthrough.
// ============================================================

const FIREBASE_CONFIG = {
  apiKey:            "YOUR_API_KEY_HERE",
  authDomain:        "your-project-id.firebaseapp.com",
  projectId:         "your-project-id",
  storageBucket:     "your-project-id.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID_HERE",
  appId:             "YOUR_APP_ID_HERE"
};

// ── How the app behaves ────────────────────────────────────
// • If FIREBASE_CONFIG still has "YOUR_API_KEY_HERE",
//   the app runs in LOCAL-ONLY mode (localStorage only).
// • Once you fill in real values the app switches to
//   Firebase mode: teacher controls the active day and
//   all student scores are saved to Firestore.
// ──────────────────────────────────────────────────────────
