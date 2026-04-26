// ============================================================
// Grade Tracking — localStorage-backed, 3-class aware
//
// Storage keys:
//   coding1   → 'cs_coding_grades_v1'   (original — backward compat)
//   coding2   → 'mc_grades_coding2_v1'
//   videogame → 'mc_grades_videogame_v1'
// ============================================================

function _storageKey(cls) {
  if (cls === 'coding2')   return 'mc_grades_coding2_v1';
  if (cls === 'videogame') return 'mc_grades_videogame_v1';
  return 'cs_coding_grades_v1';   // coding1 original key
}

function loadAllGrades(cls) {
  try {
    const raw = localStorage.getItem(_storageKey(cls));
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}

function saveAllGrades(cls, data) {
  try {
    localStorage.setItem(_storageKey(cls), JSON.stringify(data));
  } catch (e) {
    console.error('Grade save error:', e);
  }
}

function saveSessionGrade(studentName, day, phase, score, total, cls) {
  // ── localStorage (always) ─────────────────────────────
  const all = loadAllGrades(cls);
  if (!all[studentName]) all[studentName] = {};
  if (!all[studentName][day]) all[studentName][day] = {};
  all[studentName][day][phase] = { score, total, timestamp: new Date().toISOString() };
  saveAllGrades(cls, all);

  // ── Firebase (when configured) ────────────────────────
  if (typeof saveGradeToFirebase === 'function') {
    saveGradeToFirebase(studentName, day, phase, score, total, cls);
  }
}

function getStudentGrades(studentName, cls) {
  return (loadAllGrades(cls)[studentName]) || {};
}

function getAllStudents(cls) {
  return Object.keys(loadAllGrades(cls)).sort();
}

function getStudentSummary(studentName, cls) {
  const grades = getStudentGrades(studentName, cls);
  let totalScore = 0, totalPossible = 0, sessions = 0;

  for (const day in grades) {
    const d = grades[day];
    ['bellRinger', 'practice', 'exitTicket'].forEach(phase => {
      if (d[phase]) {
        totalScore += d[phase].score;
        totalPossible += d[phase].total;
        sessions++;
      }
    });
  }

  const pct = totalPossible > 0 ? Math.round((totalScore / totalPossible) * 100) : null;
  return { totalScore, totalPossible, pct, sessions };
}

function getLetterGrade(pct) {
  if (pct === null) return '—';
  if (pct >= 90) return 'A';
  if (pct >= 80) return 'B';
  if (pct >= 70) return 'C';
  if (pct >= 60) return 'D';
  return 'F';
}

function getGradeClass(pct) {
  if (pct === null) return 'grade-na';
  if (pct >= 90) return 'grade-A';
  if (pct >= 80) return 'grade-B';
  if (pct >= 70) return 'grade-C';
  if (pct >= 60) return 'grade-D';
  return 'grade-F';
}

function getScoreCircleClass(pct) {
  if (pct >= 90) return 'score-A';
  if (pct >= 80) return 'score-B';
  if (pct >= 70) return 'score-C';
  if (pct >= 60) return 'score-D';
  return 'score-F';
}

function getFeedbackMessage(pct) {
  if (pct === 100) return '🎉 Perfect score! Outstanding work!';
  if (pct >= 90)   return "Excellent work! You have a strong grasp of today's material.";
  if (pct >= 80)   return 'Great job! A few small gaps to review, but solid understanding.';
  if (pct >= 70)   return 'Good effort! Review the questions you missed and keep practicing.';
  if (pct >= 60)   return "Keep working! Review today's lesson notes and try again.";
  return 'This material needs more review. Ask your teacher for help!';
}

function deleteStudentGrades(studentName, cls) {
  const all = loadAllGrades(cls);
  delete all[studentName];
  saveAllGrades(cls, all);
}

function deleteAllGrades(cls) {
  localStorage.removeItem(_storageKey(cls));
}
