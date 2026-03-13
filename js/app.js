// ============================================================
// Main Application Logic — Coding I Daily Activities
// ============================================================

// App State
let state = {
  studentName: '',
  currentDay: 1,
  currentPhase: 'bell', // 'bell' | 'practice' | 'exit' | 'complete'
  bellAnswered: false,
  practiceAnswered: [],   // array of booleans
  exitAnswered: false,
  bellScore: 0,
  practiceScore: 0,
  practiceTotal: 0,
  exitScore: 0,
  lesson: null
};

// ============================================================
// Initialization
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  populateDaySelector();
  renderSetupScreen();
  setupNavigation();
});

function setupNavigation() {
  document.querySelectorAll('.btn-nav').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.target;
      if (target === 'grades') {
        window.location.href = 'grades.html';
      }
    });
  });
}

function populateDaySelector() {
  const sel = document.getElementById('day-select');
  if (!sel) return;

  let currentUnit = 0;
  let optgroup = null;

  for (let day = 1; day <= TOTAL_DAYS; day++) {
    const lesson = getLesson(day);
    if (!lesson) continue;

    if (lesson.unit !== currentUnit) {
      currentUnit = lesson.unit;
      optgroup = document.createElement('optgroup');
      optgroup.label = `Unit ${lesson.unit}: ${UNIT_COLORS[lesson.unit].name}`;
      sel.appendChild(optgroup);
    }

    const opt = document.createElement('option');
    opt.value = day;
    opt.textContent = `Day ${day}: ${lesson.title}`;
    optgroup.appendChild(opt);
  }
}

// ============================================================
// Setup Screen
// ============================================================
function renderSetupScreen() {
  const app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = `
    <div class="setup-screen">
      <div class="card" style="text-align:center; padding: 40px 28px;">
        <div style="font-size: 3rem; margin-bottom: 12px;">🐍</div>
        <h2 style="font-size:1.6rem; font-weight:800; color: var(--gray-800); margin-bottom:8px;">
          Coding I — Daily Activities
        </h2>
        <p style="color: var(--gray-500); margin-bottom: 28px;">
          Bell Ringer · Practice Problems · Exit Ticket
        </p>

        <div class="setup-grid" style="max-width:500px; margin: 0 auto;">
          <div class="form-group">
            <label for="student-name-input">Your Name</label>
            <input type="text" id="student-name-input" placeholder="First Last" autocomplete="off" />
          </div>
          <div class="form-group">
            <label for="day-select">Today's Lesson</label>
            <select id="day-select"></select>
          </div>
        </div>

        <button class="btn-primary" id="start-btn" style="max-width: 300px; margin: 24px auto 0;" onclick="startSession()">
          Start Today's Activities
        </button>

        <p style="margin-top:16px; font-size:0.8rem; color: var(--gray-400);">
          Your grades are saved automatically to this device.
        </p>
      </div>
    </div>
  `;

  populateDaySelector();

  // Check for previously used name
  const lastStudent = localStorage.getItem('cs_last_student');
  if (lastStudent) {
    document.getElementById('student-name-input').value = lastStudent;
  }
}

function startSession() {
  const nameInput = document.getElementById('student-name-input');
  const daySelect = document.getElementById('day-select');

  const name = nameInput ? nameInput.value.trim() : '';
  const day = daySelect ? parseInt(daySelect.value) : 1;

  if (!name) {
    nameInput.focus();
    nameInput.style.borderColor = 'var(--error)';
    showToast('Please enter your name to start!');
    return;
  }

  const lesson = getLesson(day);
  if (!lesson) {
    showToast('Invalid day selected.');
    return;
  }

  // Save name for next time
  localStorage.setItem('cs_last_student', name);

  // Reset state
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
  const unitInfo = UNIT_COLORS[lesson.unit];

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
      <button class="phase-tab locked" id="tab-practice" onclick="switchTab('practice')">
        <span class="tab-icon">✏️</span>
        <span class="tab-label">Practice</span>
      </button>
      <button class="phase-tab locked" id="tab-exit" onclick="switchTab('exit')">
        <span class="tab-icon">🚪</span>
        <span class="tab-label">Exit Ticket</span>
      </button>
    </div>

    <div id="phase-content"></div>
  `;

  updateProgress();
}

function renderPhaseTabs() {}

function updateProgress() {
  const { bellAnswered, practiceAnswered, exitAnswered, lesson } = state;
  let done = 0;
  const total = 1 + lesson.practice.length + 1;

  if (bellAnswered) done += 1;
  done += practiceAnswered.filter(Boolean).length;
  if (exitAnswered) done += 1;

  const pct = Math.round((done / total) * 100);
  const bar = document.getElementById('progress-bar');
  if (bar) bar.style.width = pct + '%';
}

function switchTab(phase) {
  // Only allow switching to unlocked phases
  if (phase === 'practice' && !state.bellAnswered) {
    showToast('Complete the Bell Ringer first!');
    return;
  }
  if (phase === 'exit' && !state.practiceAnswered.every(Boolean)) {
    showToast('Complete all Practice Problems first!');
    return;
  }

  state.currentPhase = phase;
  updateTabs();

  if (phase === 'bell') renderBellRingerContent();
  else if (phase === 'practice') renderPracticeContent();
  else if (phase === 'exit') renderExitTicketContent();
}

function updateTabs() {
  const { bellAnswered, practiceAnswered, currentPhase } = state;
  const allPractice = practiceAnswered.every(Boolean);

  ['bell', 'practice', 'exit'].forEach(phase => {
    const tab = document.getElementById(`tab-${phase}`);
    if (!tab) return;
    tab.className = 'phase-tab';

    if (phase === currentPhase) {
      tab.classList.add('active');
    } else if (phase === 'practice' && bellAnswered) {
      tab.classList.add(allPractice ? 'completed' : '');
    } else if (phase === 'exit' && allPractice) {
      tab.classList.add('');
    } else if (
      (phase === 'practice' && !bellAnswered) ||
      (phase === 'exit' && !allPractice)
    ) {
      tab.classList.add('locked');
    }
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
      ${!bellAnswered ? `<button class="btn-submit" id="submit-bell" onclick="submitBell()" disabled>Submit Answer</button>` : ''}
      ${bellAnswered ? `<button class="btn-next show" onclick="goToPractice()">Start Practice Problems →</button>` : ''}
    </div>
  `;

  if (bellAnswered) {
    lockOptions('bell', 0, q.correct, getUserAnswer('bell', 0));
  }
}

function getUserAnswer(phase, index) {
  return localStorage.getItem(`cs_answer_${state.studentName}_${state.currentDay}_${phase}_${index}`) || null;
}

function saveUserAnswer(phase, index, answer) {
  localStorage.setItem(`cs_answer_${state.studentName}_${state.currentDay}_${phase}_${index}`, answer);
}

function renderOptions(q, phase, index, disabled) {
  if (q.type === 'true_false') {
    return `
      <div class="tf-options">
        <button class="tf-btn" data-answer="True" onclick="selectAnswer(this, '${phase}', ${index}, '${escapeAttr(q.correct)}')" ${disabled ? 'disabled' : ''}>True</button>
        <button class="tf-btn" data-answer="False" onclick="selectAnswer(this, '${phase}', ${index}, '${escapeAttr(q.correct)}')" ${disabled ? 'disabled' : ''}>False</button>
      </div>
    `;
  }

  return `
    <div class="options-list">
      ${q.options.map((opt, i) => {
        const letter = opt.charAt(0);
        const text = opt.substring(3);
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
  // Convert code blocks (text after a blank line that looks like code)
  return text.replace(/\n\n([\s\S]+?)(?=\n\n|$)/g, (match, code) => {
    // Detect if it looks like code (has indentation, print, def, etc.)
    if (/^\s*(print|def|for|while|if|else|elif|import|#|[a-z_]+ =)/.test(code)) {
      return `<div class="code-block">${escapeHtml(code.trim())}</div>`;
    }
    return match;
  }).replace(/\n/g, '<br>');
}

function formatOptionText(text) {
  if (text.includes('print(') || text.includes('def ') || text.includes('= ') || text.includes('\\n')) {
    return `<code style="font-family: var(--mono); font-size: 0.85em; white-space: pre-wrap;">${escapeHtml(text)}</code>`;
  }
  return escapeHtml(text);
}

function escapeHtml(text) {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function selectAnswer(btn, phase, index, correctAnswer) {
  // Don't allow if already answered
  if (btn.disabled) return;

  // For true/false
  const isTF = btn.classList.contains('tf-btn');
  const container = btn.closest(isTF ? '.tf-options' : '.options-list');

  // Deselect previous selection
  container.querySelectorAll(isTF ? '.tf-btn' : '.option-btn').forEach(b => b.classList.remove('selected'));

  // Select this one
  btn.classList.add('selected');
  btn.dataset.selected = 'true';

  // Enable submit if on an un-answered question
  if (phase === 'bell') {
    const submitBtn = document.getElementById('submit-bell');
    if (submitBtn) submitBtn.disabled = false;
  } else if (phase === 'practice') {
    const submitBtn = document.getElementById(`submit-p${index}`);
    if (submitBtn) submitBtn.disabled = false;
  } else if (phase === 'exit') {
    const submitBtn = document.getElementById('submit-exit');
    if (submitBtn) submitBtn.disabled = false;
  }
}

function submitBell() {
  const q = state.lesson.bellRinger;
  const selectedBtn = document.querySelector('.tf-btn.selected, .option-btn.selected');
  if (!selectedBtn) return;

  const answer = selectedBtn.dataset.answer;
  const correct = answer === q.correct;

  state.bellScore = correct ? 1 : 0;
  state.bellAnswered = true;
  saveUserAnswer('bell', 0, answer);
  saveSessionGrade(state.studentName, state.currentDay, 'bellRinger', state.bellScore, 1);
  updateProgress();

  lockOptions('bell', 0, q.correct, answer);

  // Show feedback
  const feedbackEl = document.getElementById('feedback-bell');
  if (feedbackEl) {
    feedbackEl.className = `feedback-box ${correct ? 'correct' : 'incorrect'} show`;
    feedbackEl.innerHTML = `<span class="feedback-icon">${correct ? '✓ Correct!' : '✗ Incorrect.'}</span> ${q.explanation}`;
  }

  // Swap submit for next button
  const actionBar = document.querySelector('.action-bar');
  if (actionBar) {
    actionBar.innerHTML = `<button class="btn-next show" onclick="goToPractice()">Start Practice Problems →</button>`;
  }

  // Update card styling
  const card = document.querySelector('.question-card');
  if (card) {
    card.className = `question-card ${correct ? 'correct' : 'incorrect'}`;
  }

  updateTabs();
}

function lockOptions(phase, index, correctAnswer, userAnswer) {
  const isTF = document.querySelector('.tf-options');
  const btnClass = isTF ? '.tf-btn' : '.option-btn';
  const btns = document.querySelectorAll(btnClass);

  btns.forEach(btn => {
    btn.disabled = true;
    const ans = btn.dataset.answer;
    if (ans === correctAnswer) {
      btn.classList.add('correct-answer');
      if (btn.querySelector('.option-letter')) {
        btn.querySelector('.option-letter').textContent = '✓';
      }
    } else if (ans === userAnswer && ans !== correctAnswer) {
      btn.classList.add('wrong-answer');
      if (btn.querySelector('.option-letter')) {
        btn.querySelector('.option-letter').textContent = '✗';
      }
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
    <div style="margin-bottom: 16px; display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
      <span style="font-weight: 700; color: var(--gray-600);">Practice Problems</span>
      <span style="font-size:0.8rem; color: var(--gray-400);">${problems.length} questions — answer all to unlock Exit Ticket</span>
      <span class="badge badge-practice" style="margin-left:auto;">${practiceAnswered.filter(Boolean).length}/${problems.length} answered</span>
    </div>

    ${problems.map((p, i) => renderPracticeCard(p, i)).join('')}

    <div class="action-bar" id="practice-action-bar">
      ${practiceAnswered.every(Boolean)
        ? `<button class="btn-next show" onclick="goToExit()">Proceed to Exit Ticket →</button>`
        : `<p style="color: var(--gray-400); font-size: 0.875rem; margin: auto 0;">Answer all questions to continue</p>`
      }
    </div>
  `;
}

function renderPracticeCard(problem, index) {
  const answered = state.practiceAnswered[index];
  const userAns = getUserAnswer('practice', index);

  let cardClass = 'question-card';
  if (answered) {
    const correct = userAns === problem.correct;
    cardClass += correct ? ' correct' : ' incorrect';
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
        ? `<div class="action-bar" style="margin-top: 12px; justify-content: flex-end;">
             <button class="btn-submit" id="submit-p${index}" onclick="submitPractice(${index})" disabled>Submit</button>
           </div>`
        : ''
      }
    </div>
  `;
}

function submitPractice(index) {
  const problem = state.lesson.practice[index];
  const card = document.getElementById(`practice-card-${index}`);

  // Find selected answer
  const isTF = card.querySelector('.tf-options');
  const selectedBtn = isTF
    ? card.querySelector('.tf-btn.selected')
    : card.querySelector('.option-btn.selected');

  if (!selectedBtn) return;

  const answer = selectedBtn.dataset.answer;
  const correct = answer === problem.correct;

  // Update state
  state.practiceAnswered[index] = true;
  if (correct) state.practiceScore++;
  saveUserAnswer('practice', index, answer);

  // Check if all practice answered
  if (state.practiceAnswered.every(Boolean)) {
    saveSessionGrade(state.studentName, state.currentDay, 'practice', state.practiceScore, state.practiceTotal);
  }

  updateProgress();

  // Update card
  card.className = `question-card ${correct ? 'correct' : 'incorrect'}`;

  // Show feedback
  const feedbackEl = document.getElementById(`feedback-p${index}`);
  if (feedbackEl) {
    feedbackEl.className = `feedback-box ${correct ? 'correct' : 'incorrect'} show`;
    feedbackEl.innerHTML = `<span class="feedback-icon">${correct ? '✓ Correct!' : '✗ Incorrect.'}</span> ${problem.explanation}`;
  }

  // Lock all options in this card
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

  // Remove submit button from this card
  const submitArea = card.querySelector('.action-bar');
  if (submitArea) submitArea.remove();

  // Update counter badge and action bar
  const countBadge = document.querySelector('.badge-practice');
  if (countBadge) {
    countBadge.textContent = `${state.practiceAnswered.filter(Boolean).length}/${state.lesson.practice.length} answered`;
  }

  // Show proceed button if all done
  if (state.practiceAnswered.every(Boolean)) {
    const actionBar = document.getElementById('practice-action-bar');
    if (actionBar) {
      actionBar.innerHTML = `<button class="btn-next show" onclick="goToExit()">Proceed to Exit Ticket →</button>`;
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

  const answer = selectedBtn.dataset.answer;
  const correct = answer === q.correct;

  state.exitScore = correct ? 1 : 0;
  state.exitAnswered = true;
  saveUserAnswer('exit', 0, answer);
  saveSessionGrade(state.studentName, state.currentDay, 'exitTicket', state.exitScore, 1);
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

  // Remove tabs
  const tabsEl = document.getElementById('phase-tabs');
  if (tabsEl) tabsEl.style.display = 'none';

  const { bellScore, practiceScore, practiceTotal, exitScore, lesson, studentName } = state;

  const totalScore = bellScore + practiceScore + exitScore;
  const totalPossible = 1 + practiceTotal + 1;
  const pct = Math.round((totalScore / totalPossible) * 100);
  const letter = getLetterGrade(pct);
  const circleClass = getScoreCircleClass(pct);
  const feedback = getFeedbackMessage(pct);

  const brPct = bellScore === 1 ? 100 : 0;
  const prPct = practiceTotal > 0 ? Math.round((practiceScore / practiceTotal) * 100) : 0;
  const etPct = exitScore === 1 ? 100 : 0;

  // Star display
  let stars = '';
  if (pct >= 90) stars = '⭐⭐⭐';
  else if (pct >= 70) stars = '⭐⭐';
  else stars = '⭐';

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

      <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
        <button class="btn-secondary" onclick="startNewSession()">
          New Session
        </button>
        <button class="btn-primary" style="max-width: 200px;" onclick="window.location.href='grades.html'">
          View Grade Report
        </button>
      </div>
    </div>
  `;

  // Update progress to 100%
  const bar = document.getElementById('progress-bar');
  if (bar) bar.style.width = '100%';
}

function startNewSession() {
  renderSetupScreen();
  const header = document.querySelector('.lesson-header');
  if (header) header.remove();
  const tabs = document.getElementById('phase-tabs');
  if (tabs) tabs.remove();
  // Reset — re-render full setup
  renderSetupScreen();
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
