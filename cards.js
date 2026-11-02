// status: "live" = finished, "idea" = placeholder
const cards = [
  {
    number: 1,
    artifact: "Your Portfolio",
    title: "This portfolio",
    description: "A terminal-flavored portfolio built with a web chat AI, plain HTML/CSS/JS, and GitHub Pages.",
    link: "https://github.com/SZBro/Portfolio",
    reflection: "During the creation of this portfolio, I learned how to plan and walk through a project with AI from beginning to end. I was surprised by the visuals Claude can create right in the chat, and I liked picking a color palette there before writing any code. I’m starting to develop a workflow with AI coding tools: first a long conversation about requirements, MVP, tools, and tech to lay everything out, which is where the human time goes, and then building section by section, which flowed easily. Not everything went smoothly: deploying took debugging (a GitHub auth error and a 404), and I had to catch that the AI’s first card design was missing a reflection field.",
    status: "live"
  },
  {
    number: 2,
    artifact: "Something You Will Use",
    title: "Mathle",
    description: "A Wordle that doesn't suck with dyslexia.",
    link: "https://szbro.github.io/Mathle/",
    repo: "https://github.com/SZBro/Mathle",
    reflection: "I started this project by brainstorming with Claude. For the first hour I wrote no code at all and focused on defining the game: how order of operations would work, which functions to include, how scoring should behave, and which features belonged in the first version. With those rules settled, I built the project in stages: the core math engine first, then the play screen and visuals, and finally the reveal page and scoring logic. Breaking it up this way made each step easier to test and kept the agent from guessing at decisions I hadn’t made yet. My main takeaway is to start earlier. With more time, I could have spread the work across several sessions and planned out more content, like a larger puzzle set. Even so, I finished a working MVP that I’ll keep playing, and I plan to add features, such as a practice mode, to make it more enjoyable for myself and others.",
    status: "live"
  },
  {
    number: 3,
    artifact: "AI Inside It",
    title: "TraceRoot",
    description: "A local CLI that coding agents run when a Python program crashes. It returns a short, ranked root cause (file:line, cause, fix) in about 60 tokens, with the same accuracy as giving Claude every file.",
    link: "https://szbro.github.io/traceroot/",
    repo: "https://github.com/SZBro/traceroot",
    log: "https://github.com/SZBro/traceroot/blob/main/LOG.md",
    reflection: "I think this week of the project shows that the idea and brainstorming stage is becoming more and more important when developing projects. I loved the idea for this project, but building a tool that’s actually useful in terms of accuracy is difficult. This project showed me many things happening that I wasn’t thinking about, and it made me really think: was there a better way to approach the original brainstorming process to avoid many of these issues? From now on, right before I finish brainstorming and writing the CLAUDE.md that starts the Claude Code process, I want to do another brainstorming session on issues or problems that might pop up, and account for them now rather than later. Overall, using Claude is making development more of an SRS game than a coding game: having everything laid out, organized, and thought through matters more when developing projects that aren’t part of very specific work.",
    status: "live"
  },
  {
    number: 4,
    artifact: "For Someone Else",
    title: "Fat Bear or Weak",
    description: "A browser game for Fat Bear Week, made with my partner Chris. You're a bear on a salmon river trying to be the heaviest by nightfall. Bears don't eat each other; they fight over the best fishing spots with swipes, charges, blocks and dashes, steal each other's fish, and hunt roaming wildlife.",
    link: "https://github.com/SZBro/Project_For_Someone_Else",
    repo: "https://github.com/SZBro/Project_For_Someone_Else",
    log: "https://github.com/SZBro/Project_For_Someone_Else/blob/main/LOG.md",
    reflection: "I really like this project because Chris, our girlfriends, and I are all fans of Fat Bear Week, and we wanted to make a game that plays off of it. It has been really fun to develop and come up with ideas for. I grew up playing Flash browser games and later .io games like agar.io, and those were a big motivation for this one. Right now the game is a single-player version that runs locally in the browser, with NPC bears to fight over the river. We planned it in a shared Google Doc where each of us brainstormed in our own section, then moved the ideas we both agreed on into a “Finalized” section before writing any code. The plan is to expand it into multiplayer modes and refine the combat so it becomes something people can actually play together. Next week will focus on the multiplayer part.",
    status: "live"
  },
  {
    number: 5,
    artifact: "The Moonshot",
    title: "CI failure debugger for humans and agents",
    description: "A free, local tool that turns a failed GitHub Actions log into a cause chain with every step linked to its log lines. Humans get a visual view; AI agents get it through an MCP server, so they can debug CI without reading thousands of lines. Grows out of Artifact 3.",
    link: "",
    reflection: "",
    status: "idea"
  }
];