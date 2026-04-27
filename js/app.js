// ============================================================
// Main Application Logic — 3-Class Daily Activities
// Classes: Coding I (🐍) | Coding II (💻) | Videogame Design (🎮)
//
// Key design: the TEACHER controls which sections are open.
//             Students have NO forced progression gates.
// ============================================================

// ── Class Configuration ───────────────────────────────────────
const CLASS_CONFIG = {
  coding1:   { display: 'Coding I',         icon: '🐍', bodyClass: 'class-coding1'   },
  coding2:   { display: 'Coding II',        icon: '💻', bodyClass: 'class-coding2'   },
  videogame: { display: 'Videogame Design', icon: '🎮', bodyClass: 'class-videogame' }
};

// ── Current Class ─────────────────────────────────────────────
let currentClass = localStorage.getItem('mc_selected_class') || 'coding1';

// ── App State ─────────────────────────────────────────────────
let state = {
  studentName: '',
  currentDay: 1,
  currentPhase: 'bell',
  bellAnswered: false,
  practiceAnswered: [],
  exitAnswered: false,
  bellScore: 0,
  practiceScore: 0,
  practiceTotal: 0,
  exitScore: 0,
  lesson: null
};

// ── Screen State ─────────────────────────────────────────────
// 'loading' | 'waiting' | 'setup' | 'session' | 'complete'
let screenState = 'loading';
let lastActiveDayData  = null;
let firebaseEnabled    = false;
let _unsubscribeActiveDay = null;   // Firebase listener cleanup

// ── Lesson / Day helpers ──────────────────────────────────────

function getLesson(day) {
  if (currentClass === 'coding2')   return getLessonC2(day);
  if (currentClass === 'videogame') return getLessonVGD(day);
  return LESSONS[day] || null;   // coding1
}

function getTotalDays() {
  if (currentClass === 'coding2')   return TOTAL_DAYS_C2;
  if (currentClass === 'videogame') return TOTAL_DAYS_VGD;
  return TOTAL_DAYS;             // coding1
}

// ============================================================
// Initialization
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  applyBodyClass();

  firebaseEnabled = initFirebase();   // from firebase-db.js

  _subscribeToActiveDay();
});

function _subscribeToActiveDay() {
  // Tear down any prior listener before subscribing
  if (_unsubscribeActiveDay) { _unsubscribeActiveDay(); _unsubscribeActiveDay = null; }

  if (firebaseEnabled) {
    _unsubscribeActiveDay = watchActiveDayChanges((data) => {
      lastActiveDayData = data;
      handleActiveDayChange(data);
    }, currentClass);
  } else {
    screenState = 'setup';
    renderSetupScreen(null);
  }
}

// ── Class Switching ───────────────────────────────────────────
function switchClass(cls) {
  if (cls === currentClass) return;

  if (screenState === 'session') {
    showToast('Finish your current session before switching classes.');
    return;
  }

  currentClass = cls;
  localStorage.setItem('mc_selected_class', cls);
  lastActiveDayData = null;
  screenState = 'loading';

  applyBodyClass();
  updateClassSwitcherUI();

  // Re-subscribe Firebase listener for new class
  _subscribeToActiveDay();
}

function applyBodyClass() {
  document.body.classList.remove('class-coding1', 'class-coding2', 'class-videogame');
  document.body.classList.add(CLASS_CONFIG[currentClass].bodyClass);
}

function updateClassSwitcherUI() {
  Object.keys(CLASS_CONFIG).forEach(cls => {
    const btn = document.getElementById(`cls-btn-${cls}`);
    if (btn) btn.classList.toggle('active', cls === currentClass);
  });
}

// ── React to teacher activating / deactivating a day ─────────
function handleActiveDayChange(data) {
  if (screenState === 'session') {
    updateTabs();
    refreshActionBars();
    return;
  }

  if (data && data.isActive && data.activeDay) {
    if (screenState !== 'setup') {
      screenState = 'setup';
      renderSetupScreen(data.activeDay);
    }
  } else {
    if (screenState !== 'waiting') {
      screenState = 'waiting';
      renderWaitingScreen();
    }
  }
}

// ── Read section locks from latest Firebase snapshot ─────────
function getSectionLocks() {
  if (!lastActiveDayData || !lastActiveDayData.sections) {
    return { bell: true, practice: true, exit: true };
  }
  const s = lastActiveDayData.sections;
  return {
    bell:     s.bell     !== false,
    practice: s.practice !== false,
    exit:     s.exit     !== false
  };
}

// ── Refresh "next section" action bars after a lock change ────
function refreshActionBars() {
  const locks = getSectionLocks();
  const phase = state.currentPhase;

  if (phase === 'bell' && state.bellAnswered) {
    const bar = document.querySelector('#phase-content .action-bar');
    if (bar) bar.innerHTML = locks.practice
      ? `<button class="btn-next show" onclick="goToPractice()">Start Practice Problems →</button>`
      : `<div class="teacher-wait">⏳ Waiting for teacher to open Practice…</div>`;
  }

  if (phase === 'practice' && state.practiceAnswered.every(Boolean)) {
    const bar = document.getElementById('practice-action-bar');
    if (bar) bar.innerHTML = locks.exit
      ? `<button class="btn-next show" onclick="goToExit()">Proceed to Exit Ticket →</button>`
      : `<div class="teacher-wait">⏳ Waiting for teacher to open Exit Ticket…</div>`;
  }
}

// ============================================================
// Waiting Screen
// ============================================================
function renderWaitingScreen() {
  const app = document.getElementById('app');
  if (!app) return;
  const cfg = CLASS_CONFIG[currentClass];

  app.innerHTML = `
    <div class="waiting-screen">
      <div class="card setup-card">
        <div class="setup-banner">
          <div class="waiting-emoji setup-banner-emoji">${cfg.icon}</div>
          <h2 class="setup-banner-title">${cfg.display}</h2>
          <p class="setup-banner-sub">Daily Activities</p>
        </div>
        <div class="setup-body">
          <h3 style="font-size:1.35rem; font-weight:800; color:var(--gray-800); margin-bottom:10px;">
            Not open yet!
          </h3>
          <p style="font-size:1rem; color:var(--gray-500); margin-bottom:6px;">
            Your teacher will activate today's lesson when class begins.
          </p>
          <p style="font-size:0.85rem; color:var(--gray-400); margin-bottom:28px;">
            This page will update automatically — no need to refresh.
          </p>
          <div class="waiting-indicator">
            <div class="live-dot"></div>
            <span style="font-size:0.85rem; color:var(--gray-500);">Waiting for teacher…</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ============================================================
// Setup Screen
// ============================================================
function renderSetupScreen(activeDay) {
  const app = document.getElementById('app');
  if (!app) return;
  const cfg    = CLASS_CONFIG[currentClass];
  const lesson = activeDay ? getLesson(activeDay) : null;

  const activeDayBlock = (lesson && firebaseEnabled) ? `
    <div class="active-day-info">
      <div class="active-day-badge">
        <span class="live-dot" style="background:var(--success);"></span>
        <span style="font-size:0.75rem; font-weight:700; text-transform:uppercase;
                     letter-spacing:.07em; color:var(--success);">Active</span>
      </div>
      <div style="font-size:0.8rem; color:var(--gray-400); font-weight:600;
                  text-transform:uppercase; letter-spacing:.06em; margin-bottom:4px;">
        Day ${activeDay} · Unit ${lesson.unit}: ${lesson.unitName}
      </div>
      <div style="font-size:1.05rem; font-weight:700; color:var(--gray-800);">
        ${lesson.title}
      </div>
    </div>
  ` : '';

  const daySelectorBlock = !firebaseEnabled ? `
    <div class="form-group">
      <label for="day-select">Today's Lesson</label>
      <select id="day-select"></select>
    </div>
  ` : '';

  const googleSignInBlock = firebaseEnabled ? `
    <div style="display:flex; align-items:center; gap:10px; max-width:340px; margin:0 auto;">
      <div style="flex:1; height:1px; background:var(--gray-200);"></div>
      <span style="font-size:0.78rem; color:var(--gray-400); white-space:nowrap;">or sign in with</span>
      <div style="flex:1; height:1px; background:var(--gray-200);"></div>
    </div>
    <div style="max-width:340px; margin:0 auto;">
      <button id="google-signin-btn"
              style="width:100%; display:flex; align-items:center; justify-content:center;
                     gap:10px; padding:11px 20px; border:2px solid var(--gray-200);
                     border-radius:10px; background:white; font-size:0.92rem;
                     font-weight:600; font-family:var(--font); cursor:pointer;
                     transition:border-color .2s, box-shadow .2s; color:var(--gray-700);"
              onmouseover="this.style.borderColor='var(--primary)'; this.style.boxShadow='0 0 0 3px var(--primary-light)'"
              onmouseout="this.style.borderColor='var(--gray-200)'; this.style.boxShadow='none'"
              onclick="handleGoogleSignIn()">
        <svg width="18" height="18" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
          <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
          <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
          <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.35-8.16 2.35-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
          <path fill="none" d="M0 0h48v48H0z"/>
        </svg>
        Sign in with Google
      </button>
      <p style="text-align:center; font-size:0.72rem; color:var(--gray-300); margin-top:6px;">
        Only your name is used — you won't stay logged in
      </p>
    </div>
  ` : '';

  app.innerHTML = `
    <div class="setup-screen">
      <div class="card setup-card">
        <div class="setup-banner">
          <div class="setup-banner-emoji">${cfg.icon}</div>
          <h2 class="setup-banner-title">${cfg.display}</h2>
          <p class="setup-banner-sub">Daily Activities</p>
        </div>
        <div class="setup-body">
          <p style="color:var(--gray-400); font-size:0.85rem; margin-bottom:24px; letter-spacing:.03em;">
            BELL RINGER &nbsp;·&nbsp; PRACTICE &nbsp;·&nbsp; EXIT TICKET
          </p>

          ${activeDayBlock}

          <div style="max-width:340px; margin:0 auto; display:flex; flex-direction:column; gap:14px;">
            <div class="form-group" style="margin-bottom:0;">
              <label for="student-name-input">Your Name</label>
              <input type="text" id="student-name-input" placeholder="First Last" autocomplete="off" />
            </div>
            ${daySelectorBlock}
          </div>

          ${googleSignInBlock}

          <button class="btn-primary" id="start-btn"
                  style="max-width:340px; margin:20px auto 0;">
            Start Today's Activities
          </button>

          <p style="margin-top:16px; font-size:0.78rem; color:var(--gray-300);">
            ${firebaseEnabled
              ? '🔒 Scores saved to your teacher\'s gradebook'
              : '💾 Grades saved automatically to this device'}
          </p>
        </div>
      </div>
    </div>
  `;

  if (!firebaseEnabled) {
    populateDaySelector();
  }

  const lastName = localStorage.getItem('cs_last_student');
  if (lastName) {
    const input = document.getElementById('student-name-input');
    if (input) input.value = lastName;
  }

  const startBtn = document.getElementById('start-btn');
  if (startBtn) {
    startBtn.addEventListener('click', () => {
      const day = firebaseEnabled
        ? activeDay
        : parseInt(document.getElementById('day-select')?.value || '1');
      startSession(day);
    });
  }
}

// ============================================================
// Google Sign-In (name auto-fill)
// ============================================================
async function handleGoogleSignIn() {
  const btn = document.getElementById('google-signin-btn');
  if (!btn) return;

  // Show loading state
  btn.disabled = true;
  btn.innerHTML = `
    <span style="display:inline-block;width:16px;height:16px;border:2px solid var(--gray-300);
                 border-top-color:var(--primary);border-radius:50%;
                 animation:spin .7s linear infinite;"></span>
    Signing in…
  `;

  if (typeof signInWithGoogleForName !== 'function') {
    btn.disabled = false;
    btn.innerHTML = 'Sign in with Google';
    showToast('Google Sign-In is not available in local mode.');
    return;
  }

  const result = await signInWithGoogleForName();

  if (result.cancelled) {
    // User closed the popup — restore button silently
    btn.disabled = false;
    btn.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
        <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
        <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.35-8.16 2.35-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
        <path fill="none" d="M0 0h48v48H0z"/>
      </svg>
      Sign in with Google
    `;
    return;
  }

  if (result.error) {
    btn.disabled = false;
    btn.innerHTML = 'Sign in with Google';
    showToast('Google Sign-In failed: ' + result.error);
    return;
  }

  // Success — pre-fill the name input
  const nameInput = document.getElementById('student-name-input');
  if (nameInput && result.name) {
    nameInput.value = result.name;
    nameInput.style.borderColor = 'var(--success)';
    nameInput.style.background  = 'var(--success-light)';
    // Reset styling after a moment
    setTimeout(() => {
      nameInput.style.borderColor = '';
      nameInput.style.background  = '';
    }, 2000);
  }

  // Replace Google button with a "signed in" confirmation badge
  btn.outerHTML = `
    <div style="display:flex; align-items:center; gap:8px; padding:10px 16px;
                border-radius:10px; background:var(--success-light);
                border:2px solid var(--success); max-width:340px; margin:0 auto;">
      <span style="font-size:1.1rem;">✓</span>
      <span style="font-size:0.9rem; font-weight:600; color:#15803d;">
        Name filled in from Google
      </span>
    </div>
  `;

  showToast(`Welcome, ${result.name}!`);
  localStorage.setItem('cs_last_student', result.name);

  // Focus the start button
  const startBtn = document.getElementById('start-btn');
  if (startBtn) startBtn.focus();
}

// ============================================================
// Day Selector (local-only mode)
// ============================================================
function populateDaySelector() {
  const sel = document.getElementById('day-select');
  if (!sel) return;

  let currentUnit = 0;
  let optgroup    = null;

  for (let day = 1; day <= getTotalDays(); day++) {
    const lesson = getLesson(day);
    if (!lesson) continue;

    if (lesson.unit !== currentUnit) {
      currentUnit = lesson.unit;
      optgroup = document.createElement('optgroup');
      optgroup.label = `Unit ${lesson.unit}: ${lesson.unitName}`;
      sel.appendChild(optgroup);
    }

    const opt = document.createElement('option');
    opt.value       = day;
    opt.textContent = `Day ${day}: ${lesson.title}`;
    optgroup.appendChild(opt);
  }
}

// ============================================================
// Start Session
// ============================================================
function startSession(day) {
  const nameInput = document.getElementById('student-name-input');
  const name = nameInput ? nameInput.value.trim() : '';

  if (!name) {
    if (nameInput) {
      nameInput.focus();
      nameInput.style.borderColor = 'var(--error)';
    }
    showToast('Please enter your name to start!');
    return;
  }

  const lesson = getLesson(day);
  if (!lesson) {
    showToast('Invalid day selected.');
    return;
  }

  localStorage.setItem('cs_last_student', name);
  screenState = 'session';

  state = {
    studentName: name,
    currentDay: day,
    currentPhase: 'bell',
    bellAnswered: false,
    practiceAnswered: new Array(lesson.practice.length).fill(false),
    exitAnswered: false,
    bellScore: 0,
    practiceScore: 0,
    practiceTotal: lesson.practice.length,
    exitScore: 0,
    lesson
  };

  renderLessonHeader();
  renderPhaseTabs();
  renderBellRinger();
}

// ============================================================
// Lesson Header
// ============================================================
function renderLessonHeader() {
  const app = document.getElementById('app');
  const { lesson, studentName } = state;

  app.innerHTML = `
    <div class="lesson-header">
      <div class="day-label">Day ${lesson.day} · Unit ${lesson.unit}: ${lesson.unitName}</div>
      <div class="lesson-title">${lesson.title}</div>
      <div class="student-info">Student: <strong>${studentName}</strong></div>
      <div class="progress-bar-outer">
        <div class="progress-bar-inner" id="progress-bar" style="width: 0%"></div>
      </div>
    </div>

    <div class="phase-tabs" id="phase-tabs">
      <button class="phase-tab active" id="tab-bell" onclick="switchTab('bell')">
        <span class="tab-icon">🔔</span>
        <span class="tab-label">Bell Ringer</span>
      </button>
      <button class="phase-tab" id="tab-practice" onclick="switchTab('practice')">
        <span class="tab-icon">✏️</span>
        <span class="tab-label">Practice</span>
      </button>
      <button class="phase-tab" id="tab-exit" onclick="switchTab('exit')">
        <span class="tab-icon">🚪</span>
        <span class="tab-label">Exit Ticket</span>
      </button>
    </div>

    <div id="phase-content"></div>
  `;

  updateProgress();
}

function renderPhaseTabs() {}   // stub — tabs built inside renderLessonHeader

function updateProgress() {
  const { bellAnswered, practiceAnswered, exitAnswered, lesson } = state;
  let done  = 0;
  const total = 1 + lesson.practice.length + 1;

  if (bellAnswered) done += 1;
  done += practiceAnswered.filter(Boolean).length;
  if (exitAnswered) done += 1;

  const pct = Math.round((done / total) * 100);
  const bar = document.getElementById('progress-bar');
  if (bar) bar.style.width = pct + '%';
}

// ── Tab switching — TEACHER LOCKS ARE THE ONLY GATE ──────────
function switchTab(phase) {
  const locks = getSectionLocks();

  if (phase === 'bell'     && !locks.bell)     { showToast('Bell Ringer is locked by your teacher.'); return; }
  if (phase === 'practice' && !locks.practice) { showToast('Practice is locked by your teacher.'); return; }
  if (phase === 'exit'     && !locks.exit)     { showToast('Exit Ticket is locked by your teacher.'); return; }

  // No student-progression gates — only teacher locks matter

  state.currentPhase = phase;
  updateTabs();

  if      (phase === 'bell')     renderBellRingerContent();
  else if (phase === 'practice') renderPracticeContent();
  else if (phase === 'exit')     renderExitTicketContent();
}

function updateTabs() {
  const locks = getSectionLocks();
  const { bellAnswered, practiceAnswered, currentPhase } = state;
  const allPractice = practiceAnswered.every(Boolean);

  const ICONS = { bell: '🔔', practice: '✏️', exit: '🚪' };

  ['bell', 'practice', 'exit'].forEach(phase => {
    const tab = document.getElementById(`tab-${phase}`);
    if (!tab) return;
    tab.className = 'phase-tab';

    const teacherLocked = !locks[phase];
    const icon = tab.querySelector('.tab-icon');
    if (icon) icon.textContent = teacherLocked ? '🔒' : ICONS[phase];

    if (phase === currentPhase) {
      tab.classList.add('active');
    } else if (teacherLocked) {
      tab.classList.add('teacher-locked');
    } else if (
      (phase === 'bell'     && bellAnswered) ||
      (phase === 'practice' && allPractice)
    ) {
      tab.classList.add('completed');
    }
    // No 'locked' class for incomplete prior sections — freely accessible
  });
}

// ============================================================
// Bell Ringer
// ============================================================
function renderBellRinger() {
  const phaseContent = document.getElementById('phase-content');
  if (!phaseContent) return;
  phaseContent.innerHTML = '';
  renderBellRingerContent();
}

function renderBellRingerContent() {
  const phaseContent = document.getElementById('phase-content');
  if (!phaseContent) return;

  const { lesson, bellAnswered } = state;
  const q = lesson.bellRinger;

  phaseContent.innerHTML = `
    <div class="question-card ${bellAnswered ? (state.bellScore ? 'correct' : 'incorrect') : 'active'}">
      <div class="question-number">
        <span class="badge badge-bell">Bell Ringer</span>
        <span class="question-difficulty diff-beginner">Warm-Up</span>
      </div>
      <div class="question-text">${formatQuestion(q.question)}</div>
      ${renderOptions(q, 'bell', 0, bellAnswered)}
      <div class="feedback-box ${bellAnswered ? (state.bellScore ? 'correct' : 'incorrect') + ' show' : ''}" id="feedback-bell">
        <span class="feedback-icon">${state.bellScore ? '✓' : '✗'}</span>
        ${q.explanation}
      </div>
    </div>

    <div class="action-bar">
      ${!bellAnswered
        ? `<button class="btn-submit" id="submit-bell" onclick="submitBell()" disabled>Submit Answer</button>`
        : getSectionLocks().practice
          ? `<button class="btn-next show" onclick="goToPractice()">Start Practice Problems →</button>`
          : `<div class="teacher-wait">⏳ Waiting for teacher to open Practice…</div>`}
    </div>
  `;

  if (bellAnswered) {
    lockOptions('bell', 0, q.correct, getUserAnswer('bell', 0));
  }
}

function getUserAnswer(phase, index) {
  return localStorage.getItem(
    `cs_answer_${state.studentName}_${state.currentDay}_${phase}_${index}_${currentClass}`
  ) || null;
}

function saveUserAnswer(phase, index, answer) {
  localStorage.setItem(
    `cs_answer_${state.studentName}_${state.currentDay}_${phase}_${index}_${currentClass}`,
    answer
  );
}

function renderOptions(q, phase, index, disabled) {
  if (q.type === 'true_false') {
    return `
      <div class="tf-options">
        <button class="tf-btn" data-answer="True"
          onclick="selectAnswer(this, '${phase}', ${index}, '${escapeAttr(q.correct)}')"
          ${disabled ? 'disabled' : ''}>True</button>
        <button class="tf-btn" data-answer="False"
          onclick="selectAnswer(this, '${phase}', ${index}, '${escapeAttr(q.correct)}')"
          ${disabled ? 'disabled' : ''}>False</button>
      </div>
    `;
  }

  return `
    <div class="options-list">
      ${q.options.map((opt) => {
        const letter = opt.charAt(0);
        const text   = opt.substring(3);
        return `
          <button class="option-btn" data-answer="${letter}"
            onclick="selectAnswer(this, '${phase}', ${index}, '${escapeAttr(q.correct)}')"
            ${disabled ? 'disabled' : ''}>
            <span class="option-letter">${letter}</span>
            <span>${formatOptionText(text)}</span>
          </button>
        `;
      }).join('')}
    </div>
  `;
}

function escapeAttr(str) {
  return String(str).replace(/'/g, "\\'").replace(/"/g, '&quot;');
}

function formatQuestion(text) {
  return text.replace(/\n\n([\s\S]+?)(?=\n\n|$)/g, (match, code) => {
    if (/^\s*(print|def|for|while|if|else|elif|import|#|[a-z_]+ =|pygame|class)/.test(code)) {
      return `<div class="code-block">${escapeHtml(code.trim())}</div>`;
    }
    return match;
  }).replace(/\n/g, '<br>');
}

function formatOptionText(text) {
  if (text.includes('print(') || text.includes('def ') || text.includes('= ') ||
      text.includes('\\n') || text.includes('pygame') || text.includes('[]') ||
      text.includes('{}') || text.includes('()')) {
    return `<code style="font-family:var(--mono);font-size:0.85em;white-space:pre-wrap;">${escapeHtml(text)}</code>`;
  }
  return escapeHtml(text);
}

function escapeHtml(text) {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function selectAnswer(btn, phase, index, correctAnswer) {
  if (btn.disabled) return;

  const isTF = btn.classList.contains('tf-btn');
  const container = btn.closest(isTF ? '.tf-options' : '.options-list');
  container.querySelectorAll(isTF ? '.tf-btn' : '.option-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  btn.dataset.selected = 'true';

  if (phase === 'bell') {
    const sub = document.getElementById('submit-bell');
    if (sub) sub.disabled = false;
  } else if (phase === 'practice') {
    const sub = document.getElementById(`submit-p${index}`);
    if (sub) sub.disabled = false;
  } else if (phase === 'exit') {
    const sub = document.getElementById('submit-exit');
    if (sub) sub.disabled = false;
  }
}

function submitBell() {
  const q = state.lesson.bellRinger;
  const selectedBtn = document.querySelector('.tf-btn.selected, .option-btn.selected');
  if (!selectedBtn) return;

  const answer  = selectedBtn.dataset.answer;
  const correct = answer === q.correct;

  state.bellScore    = correct ? 1 : 0;
  state.bellAnswered = true;
  saveUserAnswer('bell', 0, answer);
  saveSessionGrade(state.studentName, state.currentDay, 'bellRinger', state.bellScore, 1, currentClass);
  updateProgress();

  lockOptions('bell', 0, q.correct, answer);

  const feedbackEl = document.getElementById('feedback-bell');
  if (feedbackEl) {
    feedbackEl.className = `feedback-box ${correct ? 'correct' : 'incorrect'} show`;
    feedbackEl.innerHTML = `<span class="feedback-icon">${correct ? '✓ Correct!' : '✗ Incorrect.'}</span> ${q.explanation}`;
  }

  const actionBar = document.querySelector('.action-bar');
  if (actionBar) {
    actionBar.innerHTML = getSectionLocks().practice
      ? `<button class="btn-next show" onclick="goToPractice()">Start Practice Problems →</button>`
      : `<div class="teacher-wait">⏳ Waiting for teacher to open Practice…</div>`;
  }

  const card = document.querySelector('.question-card');
  if (card) card.className = `question-card ${correct ? 'correct' : 'incorrect'}`;

  updateTabs();
}

function lockOptions(phase, index, correctAnswer, userAnswer) {
  const isTF = document.querySelector('.tf-options');
  const btnClass = isTF ? '.tf-btn' : '.option-btn';
  document.querySelectorAll(btnClass).forEach(btn => {
    btn.disabled = true;
    const ans = btn.dataset.answer;
    if (ans === correctAnswer) {
      btn.classList.add('correct-answer');
      if (btn.querySelector('.option-letter')) btn.querySelector('.option-letter').textContent = '✓';
    } else if (ans === userAnswer && ans !== correctAnswer) {
      btn.classList.add('wrong-answer');
      if (btn.querySelector('.option-letter')) btn.querySelector('.option-letter').textContent = '✗';
    }
  });
}

function goToPractice() {
  state.currentPhase = 'practice';
  updateTabs();
  renderPracticeContent();
}

// ============================================================
// Practice Problems
// ============================================================
function renderPracticeContent() {
  const phaseContent = document.getElementById('phase-content');
  if (!phaseContent) return;

  const { lesson, practiceAnswered } = state;
  const problems = lesson.practice;

  phaseContent.innerHTML = `
    <div style="margin-bottom:16px; display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
      <span style="font-weight:700; color:var(--gray-600);">Practice Problems</span>
      <span style="font-size:0.8rem; color:var(--gray-400);">${problems.length} questions</span>
      <span class="badge badge-practice" style="margin-left:auto;">${practiceAnswered.filter(Boolean).length}/${problems.length} answered</span>
    </div>

    ${problems.map((p, i) => renderPracticeCard(p, i)).join('')}

    <div class="action-bar" id="practice-action-bar">
      ${practiceAnswered.every(Boolean)
        ? getSectionLocks().exit
          ? `<button class="btn-next show" onclick="goToExit()">Proceed to Exit Ticket →</button>`
          : `<div class="teacher-wait">⏳ Waiting for teacher to open Exit Ticket…</div>`
        : `<p style="color:var(--gray-400);font-size:0.875rem;margin:auto 0;">Answer all questions to continue</p>`
      }
    </div>
  `;
}

function renderPracticeCard(problem, index) {
  const answered = state.practiceAnswered[index];
  const userAns  = getUserAnswer('practice', index);

  let cardClass = 'question-card';
  if (answered) {
    cardClass += (userAns === problem.correct) ? ' correct' : ' incorrect';
  } else {
    cardClass += ' active';
  }

  return `
    <div class="${cardClass}" id="practice-card-${index}">
      <div class="question-number">
        <span>Question ${index + 1} of ${state.lesson.practice.length}</span>
        <span class="question-difficulty diff-${problem.diff}">${problem.diff}</span>
      </div>
      <div class="question-text">${formatQuestion(problem.q)}</div>
      <div id="options-p${index}">
        ${renderOptions(problem, 'practice', index, answered)}
      </div>
      <div class="feedback-box ${answered ? ((userAns === problem.correct ? 'correct' : 'incorrect') + ' show') : ''}" id="feedback-p${index}">
        <span class="feedback-icon">${answered ? (userAns === problem.correct ? '✓ Correct!' : '✗ Incorrect.') : ''}</span>
        ${answered ? problem.explanation : ''}
      </div>
      ${!answered
        ? `<div class="action-bar" style="margin-top:12px;justify-content:flex-end;">
             <button class="btn-submit" id="submit-p${index}" onclick="submitPractice(${index})" disabled>Submit</button>
           </div>`
        : ''
      }
    </div>
  `;
}

function submitPractice(index) {
  const problem = state.lesson.practice[index];
  const card    = document.getElementById(`practice-card-${index}`);

  const isTF = card.querySelector('.tf-options');
  const selectedBtn = isTF
    ? card.querySelector('.tf-btn.selected')
    : card.querySelector('.option-btn.selected');

  if (!selectedBtn) return;

  const answer  = selectedBtn.dataset.answer;
  const correct = answer === problem.correct;

  state.practiceAnswered[index] = true;
  if (correct) state.practiceScore++;
  saveUserAnswer('practice', index, answer);

  if (state.practiceAnswered.every(Boolean)) {
    saveSessionGrade(state.studentName, state.currentDay, 'practice', state.practiceScore, state.practiceTotal, currentClass);
  }

  updateProgress();

  card.className = `question-card ${correct ? 'correct' : 'incorrect'}`;

  const feedbackEl = document.getElementById(`feedback-p${index}`);
  if (feedbackEl) {
    feedbackEl.className = `feedback-box ${correct ? 'correct' : 'incorrect'} show`;
    feedbackEl.innerHTML = `<span class="feedback-icon">${correct ? '✓ Correct!' : '✗ Incorrect.'}</span> ${problem.explanation}`;
  }

  const allBtns = isTF
    ? card.querySelectorAll('.tf-btn')
    : card.querySelectorAll('.option-btn');

  allBtns.forEach(btn => {
    btn.disabled = true;
    const ans = btn.dataset.answer;
    if (ans === problem.correct) {
      btn.classList.add('correct-answer');
      if (btn.querySelector('.option-letter')) btn.querySelector('.option-letter').textContent = '✓';
    } else if (ans === answer && ans !== problem.correct) {
      btn.classList.add('wrong-answer');
      if (btn.querySelector('.option-letter')) btn.querySelector('.option-letter').textContent = '✗';
    }
  });

  const submitArea = card.querySelector('.action-bar');
  if (submitArea) submitArea.remove();

  const countBadge = document.querySelector('.badge-practice');
  if (countBadge) {
    countBadge.textContent = `${state.practiceAnswered.filter(Boolean).length}/${state.lesson.practice.length} answered`;
  }

  if (state.practiceAnswered.every(Boolean)) {
    const actionBar = document.getElementById('practice-action-bar');
    if (actionBar) {
      actionBar.innerHTML = getSectionLocks().exit
        ? `<button class="btn-next show" onclick="goToExit()">Proceed to Exit Ticket →</button>`
        : `<div class="teacher-wait">⏳ Waiting for teacher to open Exit Ticket…</div>`;
    }
    updateTabs();
  }
}

function goToExit() {
  state.currentPhase = 'exit';
  updateTabs();
  renderExitTicketContent();
}

// ============================================================
// Exit Ticket
// ============================================================
function renderExitTicketContent() {
  const phaseContent = document.getElementById('phase-content');
  if (!phaseContent) return;

  const { lesson, exitAnswered } = state;
  const q = lesson.exitTicket;

  phaseContent.innerHTML = `
    <div class="question-card ${exitAnswered ? (state.exitScore ? 'correct' : 'incorrect') : 'active'}">
      <div class="question-number">
        <span class="badge badge-exit">Exit Ticket</span>
        <span class="question-difficulty diff-intermediate">Check for Understanding</span>
      </div>
      <div class="question-text">${formatQuestion(q.question)}</div>
      ${renderOptions(q, 'exit', 0, exitAnswered)}
      <div class="feedback-box ${exitAnswered ? (state.exitScore ? 'correct' : 'incorrect') + ' show' : ''}" id="feedback-exit">
        <span class="feedback-icon">${state.exitScore ? '✓ Correct!' : '✗ Incorrect.'}</span>
        ${q.explanation}
      </div>
    </div>

    <div class="action-bar">
      ${!exitAnswered
        ? `<button class="btn-submit" id="submit-exit" onclick="submitExit()" disabled>Submit Exit Ticket</button>`
        : `<button class="btn-next show" onclick="showSessionSummary()">View Today's Results →</button>`
      }
    </div>
  `;

  if (exitAnswered) {
    lockOptions('exit', 0, q.correct, getUserAnswer('exit', 0));
  }
}

function submitExit() {
  const q = state.lesson.exitTicket;
  const selectedBtn = document.querySelector('.tf-btn.selected, .option-btn.selected');
  if (!selectedBtn) return;

  const answer  = selectedBtn.dataset.answer;
  const correct = answer === q.correct;

  state.exitScore    = correct ? 1 : 0;
  state.exitAnswered = true;
  saveUserAnswer('exit', 0, answer);
  saveSessionGrade(state.studentName, state.currentDay, 'exitTicket', state.exitScore, 1, currentClass);
  updateProgress();

  lockOptions('exit', 0, q.correct, answer);

  const feedbackEl = document.getElementById('feedback-exit');
  if (feedbackEl) {
    feedbackEl.className = `feedback-box ${correct ? 'correct' : 'incorrect'} show`;
    feedbackEl.innerHTML = `<span class="feedback-icon">${correct ? '✓ Correct!' : '✗ Incorrect.'}</span> ${q.explanation}`;
  }

  const actionBar = document.querySelector('.action-bar');
  if (actionBar) {
    actionBar.innerHTML = `<button class="btn-next show" onclick="showSessionSummary()">View Today's Results →</button>`;
  }

  const card = document.querySelector('.question-card');
  if (card) card.className = `question-card ${correct ? 'correct' : 'incorrect'}`;
}

// ============================================================
// Session Summary
// ============================================================
function showSessionSummary() {
  const phaseContent = document.getElementById('phase-content');
  if (!phaseContent) return;

  const tabsEl = document.getElementById('phase-tabs');
  if (tabsEl) tabsEl.style.display = 'none';

  const { bellScore, practiceScore, practiceTotal, exitScore, lesson } = state;

  const totalScore    = bellScore + practiceScore + exitScore;
  const totalPossible = 1 + practiceTotal + 1;
  const pct           = Math.round((totalScore / totalPossible) * 100);
  const letter        = getLetterGrade(pct);
  const circleClass   = getScoreCircleClass(pct);
  const feedback      = getFeedbackMessage(pct);

  const brPct = bellScore === 1 ? 100 : 0;
  const prPct = practiceTotal > 0 ? Math.round((practiceScore / practiceTotal) * 100) : 0;
  const etPct = exitScore === 1 ? 100 : 0;

  const stars = pct >= 90 ? '⭐⭐⭐' : pct >= 70 ? '⭐⭐' : '⭐';

  phaseContent.innerHTML = `
    <div class="score-summary">
      <div class="session-complete">
        <div class="star-row">${stars}</div>
        <h2>Day ${lesson.day} Complete!</h2>
        <p class="sub">${lesson.title}</p>
      </div>

      <div class="score-circle ${circleClass}">
        <div class="score-pct">${pct}%</div>
        <div class="score-label">${letter}</div>
      </div>

      <div class="score-breakdown">
        <div class="score-item">
          <div class="item-label">🔔 Bell Ringer</div>
          <div class="item-score">${bellScore}</div>
          <div class="item-total">out of 1</div>
          <div class="grade-pill ${getGradeClass(brPct)}" style="margin-top:6px;">${brPct}%</div>
        </div>
        <div class="score-item">
          <div class="item-label">✏️ Practice</div>
          <div class="item-score">${practiceScore}</div>
          <div class="item-total">out of ${practiceTotal}</div>
          <div class="grade-pill ${getGradeClass(prPct)}" style="margin-top:6px;">${prPct}%</div>
        </div>
        <div class="score-item">
          <div class="item-label">🚪 Exit Ticket</div>
          <div class="item-score">${exitScore}</div>
          <div class="item-total">out of 1</div>
          <div class="grade-pill ${getGradeClass(etPct)}" style="margin-top:6px;">${etPct}%</div>
        </div>
      </div>

      <p class="feedback-message">${feedback}</p>
      <hr class="divider">

      <div style="display:flex; gap:12px; justify-content:center; flex-wrap:wrap;">
        <button class="btn-secondary" onclick="startNewSession()">New Session</button>
        <button class="btn-primary" style="max-width:200px;" onclick="window.location.href='grades.html'">
          View Grade Report
        </button>
      </div>
    </div>
  `;

  const bar = document.getElementById('progress-bar');
  if (bar) bar.style.width = '100%';

  screenState = 'complete';
}

// ============================================================
// Start a New Session (after Summary)
// ============================================================
function startNewSession() {
  if (firebaseEnabled && lastActiveDayData) {
    handleActiveDayChange(lastActiveDayData);
  } else if (firebaseEnabled) {
    screenState = 'waiting';
    renderWaitingScreen();
  } else {
    screenState = 'setup';
    renderSetupScreen(null);
  }
}

// ============================================================
// Toast notification
// ============================================================
function showToast(message, duration = 3000) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), duration);
}
