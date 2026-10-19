const container = document.getElementById("cards");

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

cards.forEach((card) => {
  const live = card.status === "live";
  const box = el("article", `card ${live ? "live" : "idea"}`);
  const num = String(card.number).padStart(2, "0");

  box.appendChild(el("p", "mono card-label",
    `[${num}] artifact ${card.number} · ${card.artifact.toLowerCase()} · ${live ? "live" : "idea"}`));
  box.appendChild(el("h2", "", card.title));
  box.appendChild(el("p", "", card.description));

  if (card.link) {
    const a = el("a", "mono", "view project →");
    a.href = card.link;
    a.target = "_blank";
    a.rel = "noopener";
    box.appendChild(a);
  }

  if (card.repo) {
    const a = el("a", "mono", "view code →");
    a.href = card.repo;
    a.target = "_blank";
    a.rel = "noopener";
    box.appendChild(a);
  }

  if (card.reflection) {
    const details = el("details", "reflection");
    details.appendChild(el("summary", "mono", "reflection"));
    details.appendChild(el("p", "", card.reflection));
    box.appendChild(details);
  }

  container.appendChild(box);
});

// typing effect for the header
const phrases = ["Skyler Broussard", "Student", "I Build Cool Things"];
const typed = document.getElementById("typed");
const cursor = document.querySelector(".cursor");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function sleep(ms) { return new Promise((r) => setTimeout(r, ms)); }

async function typeLoop() {
  let i = 0;
  while (true) {
    const word = phrases[i];
    for (let c = 1; c <= word.length; c++) {
      typed.textContent = word.slice(0, c);
      await sleep(90);
    }
    cursor.classList.add("idle");
    await sleep(2200);
    cursor.classList.remove("idle");
    for (let c = word.length; c >= 0; c--) {
      typed.textContent = word.slice(0, c);
      await sleep(45);
    }
    await sleep(300);
    i = (i + 1) % phrases.length;
  }
}

if (!reduceMotion) typeLoop();