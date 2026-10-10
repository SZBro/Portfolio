# Build Log: Artifact 1 (Portfolio)

Chat AI used: Claude (web chat)
Stack: plain HTML, CSS, JavaScript, deployed on GitHub Pages
Live site: https://szbro.github.io/Portfolio/

---

## 2026-10-10

### Planning
- Went through the assignment section by section with the chat AI before writing any code.
- Card storage: since there's no backend, the cards have to live in the front end.
  Compared three options (hardcoded HTML, JSON + fetch, JS data file).
  - Chose a JS data file (`cards.js`). JSON + fetch breaks when opening
    index.html directly from disk, and hardcoded HTML repeats the card markup 5 times.
- Stack: asked for a list of options (plain, CDN CSS frameworks, Vite + React,
  Astro, Jekyll, etc.). React is the most job-relevant, but I chose plain
  HTML/CSS/JS because the deadline is tomorrow and there's no build step to debug.
- Asked why the assignment mentions frameworks / unfamiliar stacks if it's this
  simple. Takeaway: it's optional ("may"), not required.

### Repo + deploy
- Created a public repo `Portfolio` on my personal GitHub.
- Pushed a hello-world first to test deployment before building anything.
- Push failed with an authentication error. GitHub no longer accepts account
  passwords over HTTPS. Installed GitHub CLI (`winget install GitHub.cli`), ran
  `gh auth login`, and the push worked.
- Opened account-level Pages settings by mistake; the right place is
  repo Settings → Pages. Set source to main / root.
- Site gave a 404. Actions tab had no runs: I pushed *before* enabling Pages,
  so no build was triggered. Fixed with an empty commit + push.
- Learned the URL path is case-sensitive: `/Portfolio/` works, `/portfolio/` doesn't.

### Design
- Wanted a dark, terminal look. Asked for a few theme options side by side
  (green phosphor, amber CRT, modern editor, Nord).
- Asked for the AI's honest opinion on the terminal idea. Decided on
  "terminal-flavored, not terminal-simulated": monospace only for prompts,
  labels, and card numbers; normal sans font for readable text; everything
  visible on load.
- Narrowed to Graphite mint (B) and Nord (A). Rule for highlighting: the accent
  color only means "live or clickable."
- Built both themes as CSS variables so I can switch with `data-theme` on <html>.

### Requirements check
- Asked the AI to list every requirement and check it against the mockup. Gaps found:
  - Cards had a description but no separate reflection field → added `reflection`.
  - Only card 1 had a link → every card now has a `link` field.
  - Cards just said [01]–[05] → now labeled with official names
    (Your Portfolio, Something You Will Use, AI Inside It, For Someone Else, The Moonshot).
  - Placeholder ideas were filler from the AI → marked TODO, to be replaced with my own ideas.

### Build
- Got index.html, style.css, cards.js, app.js from the chat. Cards are data in
  cards.js and rendered by app.js.
- Previewing locally with VS Code + Live Server.
- Didn't like the blinking cursor ("blinking for no reason"). Replaced it with a
  type/delete loop that cycles through phrases; the cursor only blinks while
  paused. Respects reduced-motion settings and keeps an aria-label for screen readers.

### Still to do
- [ ] Write my own about text (what I like building)
- [ ] Fill in ideas for cards 2–5
- [ ] Update typing phrases to match
- [ ] Pick final theme (graphite vs nord)
- [ ] Write the Artifact 1 reflection
- [ ] Submit the link on Canvas