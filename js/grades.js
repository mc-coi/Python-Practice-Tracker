// ============================================================
// Grade Tracking — localStorage-backed grade storage
// ============================================================

const STORAGE_KEY = 'cs_coding_grades_v1';

// Data structure:
// {
//   studentName: {
//     dayNumber: {
//       bellRinger:  { score: 0|1, total: 1, timestamp: ISO },
//       practice:    { score: n, total: n, timestamp: ISO },
//       exitTicket:  { score: 0|1, total: 1, timestamp: ISO }
//     }
//   }
// }

function loadAllGrades() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    console.error('Grade load error:', e);
    return {};
  }
}

function saveAllGrades(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error('Grade save error:', e);
  }
}

function saveSessionGrade(studentName, day, phase, score, total) {
  // ── localStorage (always) ──────────────────────────────────
  const all = loadAllGrades();
  if (!all[studentName]) all[studentName] = {};
  if (!all[studentName][day]) all[studentName][day] = {};
  all[studentName][day][phase] = {
    score,
    total,
    timestamp: new Date().toISOString()
  };
  saveAllGrades(all);

  // ── Firebase (when configured) ─────────────────────────────
  if (typeof saveGradeToFirebase === 'function') {
    saveGradeToFirebase(studentName, day, phase, score, total);
  }
}

function getStudentGrades(studentName) {
  const all = loadAllGrades();
  return all[studentName] || {};
}

function getAllStudents() {
  const all = loadAllGrades();
  return Object.keys(all).sort();
}

function getStudentSummary(studentName) {
  const grades = getStudentGrades(studentName);
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
  if (pct >= 90) return 'Excellent work! You have a strong grasp of today\'s material.';
  if (pct >= 80) return 'Great job! A few small gaps to review, but solid understanding.';
  if (pct >= 70) return 'Good effort! Review the questions you missed and keep practicing.';
  if (pct >= 60) return 'Keep working! Review today\'s lesson notes and try practice problems again.';
  return 'This material needs more review. Ask your teacher for help!';
}

function deleteStudentGrades(studentName) {
  const all = loadAllGrades();
  delete all[studentName];
  saveAllGrades(all);
}

function deleteAllGrades() {
  localStorage.removeItem(STORAGE_KEY);
}

function exportGradesCSV() {
  const all = loadAllGrades();
  const students = Object.keys(all).sort();
  if (students.length === 0) return null;

  const rows = [['Student', 'Day', 'Unit', 'Lesson', 'Bell Ringer', 'Practice', 'Exit Ticket', 'Overall %', 'Date']];

  students.forEach(name => {
    const studentData = all[name];
    Object.keys(studentData).sort((a, b) => Number(a) - Number(b)).forEach(day => {
      const d = studentData[day];
      const lesson = getLesson(Number(day));
      const unitName = lesson ? lesson.unitName : '';
      const title = lesson ? lesson.title : '';

      const br = d.bellRinger ? `${d.bellRinger.score}/${d.bellRinger.total}` : '—';
      const pr = d.practice ? `${d.practice.score}/${d.practice.total}` : '—';
      const et = d.exitTicket ? `${d.exitTicket.score}/${d.exitTicket.total}` : '—';

      let totalScore = 0, totalPossible = 0;
      ['bellRinger', 'practice', 'exitTicket'].forEach(p => {
        if (d[p]) { totalScore += d[p].score; totalPossible += d[p].total; }
      });
      const pct = totalPossible > 0 ? Math.round((totalScore / totalPossible) * 100) + '%' : '—';

      // Get most recent timestamp
      const timestamps = ['bellRinger', 'practice', 'exitTicket']
        .filter(p => d[p] && d[p].timestamp)
        .map(p => d[p].timestamp);
      const date = timestamps.length > 0 ? new Date(timestamps[timestamps.length - 1]).toLocaleDateString() : '—';

      rows.push([name, day, unitName, title, br, pr, et, pct, date]);
    });
  });

  return rows.map(row => row.map(cell => `"${cell}"`).join(',')).join('\n');
}
