# Coding I — Daily Activities App

A fully static web app for daily classroom activities in the Coding I Python course.

## Features

- **Bell Ringer** — Warm-up question to start class
- **Practice Problems** — 3–8 questions per lesson (beginner → challenge difficulty)
- **Exit Ticket** — Check-for-understanding question to close class
- **Auto-grading** — Immediate feedback and explanations for every answer
- **Grade Tracking** — All student scores saved in browser localStorage
- **Grade Report** — Detailed table with per-student, per-activity breakdowns
- **CSV Export** — Download all grades as a spreadsheet

## Content

Covers all 54 days of the Coding I curriculum:

| Unit | Topic | Days |
|------|-------|------|
| 1 | Intro to Programming | 1–6 |
| 2 | Variables, Data Types & Expressions | 7–15 |
| 3 | Conditionals | 16–24 |
| 4 | Loops and Iteration | 25–33 |
| 5 | Functions and Modularity | 34–42 |
| 6 | Debugging and Documentation | 43–48 |
| 7 | Project Development | 49–54 |

## Hosting on GitHub Pages

1. Push this folder to a GitHub repository
2. Go to **Settings → Pages**
3. Set source to **main branch / root**
4. Access at: `https://yourusername.github.io/repo-name/`

## Usage

**For Students:**
1. Enter your name
2. Select today's lesson
3. Complete the Bell Ringer (1 question)
4. Complete Practice Problems (unlocked after Bell Ringer)
5. Complete the Exit Ticket (unlocked after Practice)
6. View your session score

**For Teachers:**
- Click **Grade Report** to view all student grades
- Filter by student name or unit
- Switch between table view and student card view
- Export all grades to CSV

## Technical Notes

- Pure HTML/CSS/JavaScript — no frameworks, no build step
- All grades stored in browser localStorage (device-specific)
- Works offline after initial load
- Mobile-friendly responsive design
