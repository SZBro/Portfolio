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
    title: "Daily word puzzle game",
    description: "A Wordle-style game I'd actually play, in the browser. Maybe themed (CS terms or games), maybe built in Godot or Rust/WASM.",
    link: "",
    reflection: "",
    status: "idea"
  },
  {
    number: 3,
    artifact: "AI Inside It",
    title: "Error log visualizer",
    description: "Turns a long, messy error log into a chain of visual blocks: what happened, what caused what, and useful info at each step.",
    link: "",
    reflection: "",
    status: "idea"
  },
  {
    number: 4,
    artifact: "For Someone Else",
    title: "Voice call notes bot",
    description: "A Discord bot that records a voice call (with everyone's okay) and turns it into notes and action items, for a club or study group that meets on Discord.",
    link: "",
    reflection: "",
    status: "idea"
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