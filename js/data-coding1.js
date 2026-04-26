// ============================================================
// Coding I — Alias wrapper for data.js
// Exposes LESSONS_C1 / TOTAL_DAYS_C1 / getLessonC1()
// so app.js can reference all three classes uniformly.
// MUST be loaded AFTER data.js.
// ============================================================

const LESSONS_C1   = LESSONS;       // from data.js
const TOTAL_DAYS_C1 = TOTAL_DAYS;   // from data.js

function getLessonC1(day) {
  return LESSONS[day] || null;
}
