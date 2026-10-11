# Build Log: Artifact 1 (Portfolio)

Chat AI used: Claude (web chat)
Stack: plain HTML, CSS, JavaScript, deployed on GitHub Pages
Live site: https://szbro.github.io/Portfolio/

---

## 2026-10-10

## Current state (read this first)
- Static site, no build step: index.html, style.css, cards.js, app.js.
- All card content lives in `cards.js` (one object per artifact). app.js renders it.
- To finish an artifact: edit its object in cards.js. Set `status: "live"`,
  fill `title`, `description`, `link`, `reflection`. Don't touch app.js/style.css.
- Theme: CSS variables; switch with `data-theme` ("graphite" or "nord") on <html>.
- Links must be relative (site lives at /Portfolio/, path is case-sensitive).
- Deploy: push to main → GitHub Pages builds automatically.

### Planning
- Went through the assignment section by section with the chat AI before writing any code.
- Card storage: no backend, so cards have to live in the front end. Compared three
  options (hardcoded HTML, JSON + fetch, JS data file).
  - Chose a JS data file (`cards.js`). JSON + fetch breaks when opening index.html
    from disk, and hardcoded HTML repeats the card markup five times.
- Stack: asked for a list of options (plain, CDN CSS frameworks, Vite + React,
  Astro, Jekyll, etc.) and which is best for jobs (React). Chose plain HTML/CSS/JS
  anyway because the deadline is tomorrow and there's no build step to debug.
- Asked why the assignment mentions frameworks / unfamiliar stacks if it's this
  simple. Takeaway: it's optional ("may"), not required.

### Repo + deploy
- Created a public repo `Portfolio` on my personal GitHub.
- Pushed a hello-world first to test deployment before building anything.
- Push failed with an authentication error (GitHub no longer accepts account
  passwords over HTTPS). Installed GitHub CLI (`winget install GitHub.cli`),
  ran `gh auth login`, then the push worked.
- Opened account-level Pages settings by mistake; the right place is
  repo Settings → Pages. Set source to main / root.
- Site gave a 404. Actions tab showed no runs: I pushed *before* enabling Pages,
  so no build was triggered. Fixed with an empty commit + push.
- Learned the URL path is case-sensitive: `/Portfolio/` works, `/portfolio/` doesn't.

### Design
- Wanted a dark, terminal look. Asked for a few theme options side by side
  (green phosphor, amber CRT, modern editor, Nord).
- Asked for the AI's honest opinion on the terminal idea. Decided on
  "terminal-flavored, not terminal-simulated": monospace only for prompts,
  labels, and card numbers; normal sans font for readable text; everything
  visible on load.
- Narrowed to Graphite mint and Nord. Rule for highlighting: the accent color
  only means "live or clickable."
- Built both themes as CSS variables, switchable with `data-theme` on <html>.

### Requirements check
- Asked the AI to list every requirement and check it against the mockup. Gaps found:
  - Cards had a description but no separate reflection field → added `reflection`.
  - Only card 1 had a link → every card now has a `link` field.
  - Cards just said [01]–[05] → now labeled with the official artifact names
    (Your Portfolio, Something You Will Use, AI Inside It, For Someone Else, The Moonshot).
  - Placeholder ideas were filler from the AI → replaced with my own ideas (below).

### Build
- Got index.html, style.css, cards.js, app.js from the chat. Cards are data in
  cards.js and rendered by app.js.
- Previewing locally with VS Code + Live Server.
- Didn't like the blinking cursor ("blinking for no reason"). Replaced it with a
  type/delete loop that cycles through phrases; the cursor only blinks while
  paused. Respects reduced-motion settings and keeps an aria-label for screen readers.

### About section (step 2)
- Wrote the about text around my interests: systems, AI/data science, and game dev.
  The AI drafted three tones; I picked and edited one.
- Updated the typing phrases to match my interests.

### Placeholder ideas (step 6)
- Read the Artifact 2–5 pages to make sure each idea fits its shape.
- Card 2 (Something You Will Use): daily word puzzle game.
  - Considered rebuilding my Tabber Chrome extension, but decided to keep that as a
    side project and do something new.
  - I don't like JS, so asked about other stacks: Godot, Rust/WASM, Python/pygbag.
  - Learned it can be fully static: word lists ship as files, the daily word is
    computed from the date. No server needed.
- Card 3 (AI Inside It): error log visualizer.
  - Learned I'm using a model, not training one. The course's Claude access covers
    Claude Code (skills, MCP servers, `claude -p`) but NOT the paid API.
- Card 4 (For Someone Else): Discord bot that turns voice calls into notes.
  - Receiving voice audio is the hard part; fallback is summarizing a recording.
  - Need everyone's consent to record (Washington requires all-party consent).
- Card 5 (The Moonshot): CI failure debugger for humans and agents.
  - Compared several ideas: AI scraper, WiFi sensing with ESP32 boards, game
    balance analyzer, indie game, AI debugging tool.
  - AI scraper: market is crowded (Thunderbit is almost exactly the idea, 100k+ users).
  - WiFi sensing: interesting for a possible masters capstone; doable in a scoped-down
    form (presence/zones), with classic ML first. Keeping it in mind for later.
  - Chose the debugging tool: cheapest (can run locally for $0, I'm paying out of
    pocket), fits my systems background, and grows out of Artifact 3.
  - Narrowed the scope to one log type: failed GitHub Actions (CI) builds. Public
    failed runs + the commits that fixed them give real test data.
  - Differentiators: visual cause chain, every step linked to the exact log lines
    (so the AI can be checked), and an MCP server so AI agents can use it too.

### Reflection + polish
- Wrote my Artifact 1 reflection. The AI suggested typo fixes and adding one
  sentence about what went wrong.
- Long reflection stretched every card in its row. Added a collapsible
  "▸ reflection · read more" toggle (HTML <details>) and stopped cards from stretching.
- Asked about multiple pages on GitHub Pages: possible (more HTML files/folders,
  relative links), but not needed for Artifact 1.

### Ideas for later
- Detail pages for bigger artifacts (screenshots, demo GIF, how it works, what broke).
- Pick a final theme (graphite vs nord), or add a theme toggle.
- Add LinkedIn link once I have one set up.

### Done
- [x] About text
- [x] Five cards, with my own ideas in 2–5
- [x] Artifact 1 reflection
- [x] Log
- [x] Deployed
- [ ] Submit link on Canvas