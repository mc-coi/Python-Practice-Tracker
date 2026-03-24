// ============================================================
// Firebase Database Layer — Coding I Daily Activities
// Handles: Auth, Firestore reads/writes, real-time listeners
// ============================================================

let _db   = null;
let _auth = null;
let firebaseReady = false;

// ── Init ─────────────────────────────────────────────────────

function initFirebase() {
  try {
    if (
      !window.FIREBASE_CONFIG ||
      FIREBASE_CONFIG.apiKey === 'YOUR_API_KEY_HERE'
    ) {
      console.info('[Firebase] No config found — running in local-only mode.');
      return false;
    }

    if (!firebase.apps.length) {
      firebase.initializeApp(FIREBASE_CONFIG);
    }

    _db   = firebase.firestore();
    _auth = firebase.auth();
    firebaseReady = true;
    console.info('[Firebase] Initialized successfully.');
    return true;
  } catch (e) {
    console.error('[Firebase] Init error:', e);
    return false;
  }
}

// ── Active Day (Firestore: /settings/classroom) ──────────────
//
//  Document shape:
//    { activeDay: number, isActive: boolean, setAt: Timestamp }

/**
 * One-time fetch of the active day document.
 * Returns null if it doesn't exist or Firebase is not ready.
 */
async function getActiveDayFromFirebase() {
  if (!firebaseReady) return null;
  try {
    const doc = await _db.collection('settings').doc('classroom').get();
    return doc.exists ? doc.data() : null;
  } catch (e) {
    console.error('[Firebase] getActiveDay error:', e);
    return null;
  }
}

/**
 * Real-time listener. callback(data) fires every time the
 * classroom document changes.  Returns an unsubscribe function.
 */
function watchActiveDayChanges(callback) {
  if (!firebaseReady) return () => {};
  return _db.collection('settings').doc('classroom').onSnapshot(
    doc => callback(doc.exists ? doc.data() : null),
    err => console.error('[Firebase] watchActiveDay error:', err)
  );
}

/**
 * Teacher: set which day is active (or deactivate).
 */
async function setActiveDayInFirebase(day, isActive) {
  if (!firebaseReady) return false;
  try {
    await _db.collection('settings').doc('classroom').set({
      activeDay: day,
      isActive:  isActive,
      setAt:     firebase.firestore.FieldValue.serverTimestamp()
    });
    return true;
  } catch (e) {
    console.error('[Firebase] setActiveDay error:', e);
    return false;
  }
}

// ── Grades (Firestore: /grades/{studentKey}) ─────────────────
//
//  Document shape:
//    {
//      name: "Alice Smith",
//      days: {
//        "3": {
//          bellRinger:  { score: 1, total: 1, timestamp: "ISO" },
//          practice:    { score: 4, total: 5, timestamp: "ISO" },
//          exitTicket:  { score: 1, total: 1, timestamp: "ISO" }
//        }
//      },
//      lastUpdated: Timestamp
//    }

function _studentKey(name) {
  return name.trim().toLowerCase().replace(/[^a-z0-9]/g, '_');
}

/**
 * Save one grade entry for a student.
 * Merges into the existing document so multiple phases
 * accumulate without overwriting each other.
 */
async function saveGradeToFirebase(studentName, day, phase, score, total) {
  if (!firebaseReady) return false;
  try {
    const key = _studentKey(studentName);
    const ref = _db.collection('grades').doc(key);

    // Ensure the document exists first (safe with merge)
    await ref.set({ name: studentName }, { merge: true });

    // Dot-notation update merges nested fields cleanly
    const update = {
      lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
    };
    update[`days.${day}.${phase}`] = {
      score,
      total,
      timestamp: new Date().toISOString()
    };

    await ref.update(update);
    return true;
  } catch (e) {
    console.error('[Firebase] saveGrade error:', e);
    return false;
  }
}

/**
 * Real-time listener for ALL student grades.
 * callback receives: { "Alice Smith": { "3": { bellRinger: ... } }, ... }
 * Returns unsubscribe function.
 */
function watchAllGrades(callback) {
  if (!firebaseReady) return () => {};
  return _db.collection('grades').onSnapshot(
    snapshot => {
      const grades = {};
      snapshot.forEach(doc => {
        const data = doc.data();
        if (data.name) grades[data.name] = data.days || {};
      });
      callback(grades);
    },
    err => console.error('[Firebase] watchAllGrades error:', err)
  );
}

/**
 * One-time fetch of all grades (teacher CSV export).
 */
async function getAllGradesFromFirebase() {
  if (!firebaseReady) return null;
  try {
    const snapshot = await _db.collection('grades').get();
    const grades = {};
    snapshot.forEach(doc => {
      const data = doc.data();
      if (data.name) grades[data.name] = data.days || {};
    });
    return grades;
  } catch (e) {
    console.error('[Firebase] getAllGrades error:', e);
    return null;
  }
}

// ── Auth ─────────────────────────────────────────────────────

async function signInTeacher(email, password) {
  if (!firebaseReady) return { error: 'Firebase is not configured yet.' };
  try {
    const cred = await _auth.signInWithEmailAndPassword(email, password);
    return { user: cred.user };
  } catch (e) {
    return { error: e.message };
  }
}

async function signOutTeacher() {
  if (_auth) await _auth.signOut();
}

function onAuthChanged(callback) {
  if (!_auth) { callback(null); return () => {}; }
  return _auth.onAuthStateChanged(callback);
}
