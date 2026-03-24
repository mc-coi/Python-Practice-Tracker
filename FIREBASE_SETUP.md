# Firebase Setup Guide — Coding I Daily Activities

Follow these steps once to connect the app to Firebase. It takes about 10 minutes.

---

## Step 1 — Create a Firebase Project

1. Go to https://console.firebase.google.com
2. Click **Add project**
3. Name it something like `coding-i-activities`
4. Disable Google Analytics (not needed) → **Create project**

---

## Step 2 — Enable Firestore Database

1. In the left sidebar click **Build → Firestore Database**
2. Click **Create database**
3. Choose **Start in production mode** → Next
4. Select a region close to you (e.g. `us-central1`) → **Enable**

---

## Step 3 — Set Firestore Security Rules

1. In Firestore, click the **Rules** tab
2. Replace the default rules with:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // Active day setting — anyone reads, only teacher writes
    match /settings/{doc} {
      allow read: if true;
      allow write: if request.auth != null;
    }

    // Student grades — anyone writes their own, only teacher reads
    match /grades/{studentId} {
      allow write: if true;
      allow read:  if request.auth != null;
    }
  }
}
```

3. Click **Publish**

---

## Step 4 — Enable Email/Password Authentication

1. In the left sidebar click **Build → Authentication**
2. Click **Get started**
3. Under **Sign-in providers**, click **Email/Password**
4. Toggle **Enable** → **Save**

---

## Step 5 — Create Your Teacher Account

1. Still in **Authentication**, click the **Users** tab
2. Click **Add user**
3. Enter your teacher email and a strong password → **Add user**
4. Write these down — you'll use them to log in to the Teacher Dashboard

---

## Step 6 — Get Your Firebase Config Keys

1. Click the gear icon (⚙) → **Project settings**
2. Scroll down to **Your apps**
3. Click **Add app** → choose the **Web** icon (`</>`)
4. Give it a nickname like `coding-i-web` → **Register app**
5. You'll see a code block like this:

```js
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "coding-i-activities.firebaseapp.com",
  projectId: "coding-i-activities",
  storageBucket: "coding-i-activities.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};
```

---

## Step 7 — Paste Config Into the App

1. Open `js/firebase-config.js` in a text editor
2. Replace each placeholder with your real values:

```js
const FIREBASE_CONFIG = {
  apiKey:            "AIzaSy...",            // ← your value
  authDomain:        "coding-i-activities.firebaseapp.com",
  projectId:         "coding-i-activities",
  storageBucket:     "coding-i-activities.appspot.com",
  messagingSenderId: "123456789",
  appId:             "1:123456789:web:abcdef"
};
```

3. Save the file

---

## Step 8 — Host the App (so students can open it)

The app needs to run from a real URL, not just a file on your computer.
The easiest free option is **Firebase Hosting**:

1. Install Node.js from https://nodejs.org (if you haven't already)
2. Open a terminal in the `Python Practice Tracker` folder and run:

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
```

When prompted:
- Public directory: `.` (just a dot)
- Single-page app: **No**
- Overwrite `index.html`: **No**

Then deploy:

```bash
firebase deploy
```

Your app will be live at `https://your-project-id.web.app` — share that URL with students.

> **Alternative:** You can also use **Netlify** (drag the whole folder onto https://app.netlify.com/drop) or **GitHub Pages** for free hosting.

---

## How It Works Day-to-Day

### Teacher (you)
1. Open `teacher.html` (or `/teacher.html` on your hosted URL)
2. Sign in with the email/password you created in Step 5
3. Pick a lesson day from the dropdown
4. Click **▶ Activate Day** when class begins
5. Watch the grades table update live as students submit answers
6. Click **⬇ Export CSV** at any time for a gradebook download
7. Click **⏹ Deactivate** when class ends

### Students
1. Open `index.html` (the main URL)
2. While the day is inactive → they see a "waiting" screen
3. As soon as you activate a day → their screen automatically updates to the name entry form
4. They type their name and click **Start Today's Activities**
5. Scores save to both their browser and your Firestore gradebook

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| "Firebase is not configured" on teacher page | Re-check `js/firebase-config.js` values |
| Student sees "Waiting" even after you activate | Hard-refresh their browser (Ctrl+Shift+R) |
| "Permission denied" error in console | Re-check Firestore security rules in Step 3 |
| Teacher login fails | Confirm the user exists under Authentication → Users |
| Scores not saving to Firebase | Open browser DevTools (F12) → Console for error details |

---

*That's it! The app works in local-only mode until you add your config, so nothing breaks in the meantime.*
