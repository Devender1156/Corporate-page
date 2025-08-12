# Corporate Auth UI (Login + Signup) - Beginner Guide

This small project includes two pages:
- `login.html` — corporate login page
- `signup.html` — sign-up page with a simple password strength indicator
- `style.css`, `login.js`, `signup.js`

## Quick steps (beginner-friendly)

1. **Download** the zip from the link provided with this chat and unzip it.
2. **Open the folder** in a code editor (VS Code recommended).
3. **Open `login.html` or `signup.html`** in your browser:
   - Right-click the file and choose *Open with → Browser*, or
   - Drag the file into a browser window, or
   - Use the "Live Server" extension in VS Code (recommended) to auto-refresh pages.
4. **Try the forms** — they'll validate inputs in the browser. This is client-side only (no real user accounts created).
5. **Inspect console** for debug info: Press `F12` → Console tab.
6. **Customize visuals** by editing `style.css`. Change `--primary` color at the top to match your company brand.
7. **Hook up a backend later**: Replace the `alert` / success messages with `fetch()` calls to your server API.

## Common beginner troubleshooting
- *"Nothing happens when I press submit"*: Open browser dev tools (F12) → Console to see JS errors.
- *"Styles look weird"*: Make sure `style.css` is in the same folder as `.html` files.
- *"JS not running"*: Confirm `<script src="..."></script>` references match file names exactly.

## Deploying (very quick)
- **GitHub Pages:** push files to a repo and enable Pages (serve from `main` branch root).
- **Netlify / Vercel:** drag-and-drop the folder to Netlify's deploy page for a free quick host.

## Want next?
- I can show how to connect the signup/login to a fake API (mock server) or a real backend (Node/Express or Firebase).
- I can add password visibility toggle, "remember me", or show how to store tokens securely.

---
Enjoy! If you'd like, tell me what OS and code editor you're using and I can give exact step-by-step screenshots.
