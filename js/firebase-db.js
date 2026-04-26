// ============================================================
// Firebase Database Layer — 3-Class Activity Tracker
//
// Firestore paths by class:
//   coding1   → /settings/classroom  + /grades/{key}         (original — backward compat)
//   coding2   → /settings/coding2    + /grades_coding2/{key}
//   videogame → /settings/videogame  + /grades_videogame/{key}
// ============================================================

let _db   = null;
let _auth = null;
let firebaseReady = false;

// ── Init ─────────────────────────────────────────────────────

function initFirebase() {
  try {
    if (
      typeof FIREBASE_CONFIG === 'undefined' ||
      FIREBASE_CONFIG.apiKey === 'YOUR_API_KEY_HERE'
    ) {
      console.info('[Firebase] No config — local-only mode.');
      return false;
    }

    if (!firebase.apps.length) {
      firebase.initializeApp(FIREBASE_CONFIG);
    }

    _db   = firebase.firestore();
    _auth = firebase.auth();
    firebaseReady = true;
    console.info('[Firebase] Initialized.');
    return true;
  } catch (e) {
    console.error('[Firebase] Init error:', e);
    return false;
  }
}

// ── Path helpers ─────────────────────────────────────────────

function _settingsDocId(cls) {
  if (cls === 'coding2')   return 'coding2';
  if (cls === 'videogame') return 'videogame';
  return 'classroom';   // coding1 — original path
}

function _gradesCollection(cls) {
  if (cls === 'coding2')   return 'grades_coding2';
  if (cls === 'videogame') return 'grades_videogame';
  return 'grades';      // coding1 — original path
}

// ── Active Day ───────────────────────────────────────────────

function watchActiveDayChanges(callback, cls) {
  if (!firebaseReady) return () => {};
  const docId = _settingsDocId(cls);
  return _db.collection('settings').doc(docId).onSnapshot(
    doc => callback(doc.exists ? doc.data() : null),
    err => console.error('[Firebase] watchActiveDay error:', err)
  );
}

async function setActiveDayInFirebase(day, isActive, cls) {
  if (!firebaseReady) return false;
  try {
    const data = {
      activeDay: day,
      isActive:  isActive,
      setAt:     firebase.firestore.FieldValue.serverTimestamp()
    };
    if (isActive) {
      data.sections = { bell: true, practice: true, exit: true };
    }
    await _db.collection('settings').doc(_settingsDocId(cls)).set(data);
    return true;
  } catch (e) {
    console.error('[Firebase] setActiveDay error:', e);
    return false;
  }
}

async function setSectionInFirebase(section, isOpen, cls) {
  if (!firebaseReady) return false;
  try {
    const update = {
      setAt: firebase.firestore.FieldValue.serverTimestamp()
    };
    update[`sections.${section}`] = isOpen;
    await _db.collection('settings').doc(_settingsDocId(cls)).update(update);
    return true;
  } catch (e) {
    console.error('[Firebase] setSection error:', e);
    return false;
  }
}

// ── Grades ───────────────────────────────────────────────────

function _studentKey(name) {
  return name.trim().toLowerCase().replace(/[^a-z0-9]/g, '_');
}

async function saveGradeToFirebase(studentName, day, phase, score, total, cls) {
  if (!firebaseReady) return false;
  try {
    const key = _studentKey(studentName);
    const ref = _db.collection(_gradesCollection(cls)).doc(key);
    await ref.set({ name: studentName }, { merge: true });
    const update = {
      lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
    };
    update[`days.${day}.${phase}`] = {
      score, total, timestamp: new Date().toISOString()
    };
    await ref.update(update);
    return true;
  } catch (e) {
    console.error('[Firebase] saveGrade error:', e);
    return false;
  }
}

function watchAllGrades(callback, cls) {
  if (!firebaseReady) return () => {};
  return _db.collection(_gradesCollection(cls)).onSnapshot(
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

async function getAllGradesFromFirebase(cls) {
  if (!firebaseReady) return null;
  try {
    const snapshot = await _db.collection(_gradesCollection(cls)).get();
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
  if (!firebaseReady) return { error: 'Firebase is not configured.' };
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
