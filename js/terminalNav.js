// Terminal-style logo: when a page loads, the navbar logo "types" a `cd`
// command for that page behind a blinking cursor, e.g. `cd /projects/`.

const COMMAND = "cd ";
const TYPE_DELAY_MS = 45;

// Keyed by page name without ".html", since GitHub Pages also serves
// extensionless URLs like /projects
const PAGE_PATHS = {
  index: "/home/",
  experience: "/experience/",
  projects: "/projects/",
};

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function currentPath() {
  const page = window.location.pathname
    .split("/")
    .pop()
    .replace(/\.html$/, "");
  return PAGE_PATHS[page || "index"] ?? "/";
}

async function typeText(element, text) {
  for (const char of text) {
    element.textContent += char;
    await wait(TYPE_DELAY_MS);
  }
}

export async function initTerminalNav() {
  const logo = document.querySelector(".terminal-logo");
  const text = logo?.querySelector(".terminal-logo__text");
  if (!text) {
    return;
  }

  const command = COMMAND + currentPath();
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (reduceMotion) {
    text.textContent = command;
    return;
  }

  // The cursor stays solid while typing, like a real terminal
  text.textContent = "";
  logo.classList.add("is-typing");
  await typeText(text, command);
  logo.classList.remove("is-typing");
}
