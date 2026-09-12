/* Mihir Okte · game menu — router + keyboard/mouse nav + skill map.
   Deliberately dependency-free: the menu must render even if the 3D
   engine CDN is unreachable. The avatar lives in avatar.js (PlayCanvas). */
(() => {
"use strict";

/* ——— router ——— */
const VIEWS = ["home", "menu", "about", "experience", "skills", "exploration", "fun", "hobbies"];
const els = {};
for (const v of VIEWS) els[v] = document.getElementById(`view-${v}`);
const chrome = document.getElementById("chrome");
const stage = document.getElementById("avatar-stage");
const menuLinks = [...document.querySelectorAll("#menu-list a")];
let current = null; // null until boot — show() must run once unconditionally
let menuIdx = 0;

function routeFromHash() {
  const h = location.hash.replace(/^#\//, "");
  return VIEWS.includes(h) ? h : "home";
}

function show(view, push = true) {
  if (!VIEWS.includes(view)) view = "home";
  if (view === current) {
    if (push && view !== "home" && location.hash !== `#/${view}`) location.hash = `#/${view}`;
    return;
  }
  if (current) {
    els[current].classList.remove("active");
    els[current].hidden = true;
  }
  current = view;
  const el = els[view];
  el.hidden = false;
  requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add("active")));
  chrome.hidden = view === "home" || view === "menu";

  if (push) {
    if (view === "home") history.pushState(null, "", location.pathname);
    else if (location.hash !== `#/${view}`) location.hash = `#/${view}`;
  }
  if (view === "menu") {
    highlightMenu(menuIdx);
    menuLinks[menuIdx].focus({ preventScroll: true });
  }
  if (view === "skills") skillMapFocus(0);

  // avatar presence per view (avatar.js listens; opacity applied here so it
  // works even when the 3D module never loaded)
  const onStage = view === "home" || view === "menu";
  stage.style.transition = "opacity 0.4s ease";
  stage.style.opacity = onStage ? "1" : "0.3";
  window.dispatchEvent(new CustomEvent("viewchange", { detail: { view, onStage } }));
}

window.addEventListener("hashchange", () => show(routeFromHash(), false));

/* ——— landing ——— */
document.getElementById("start-btn").addEventListener("click", () => show("menu"));
document.getElementById("back-btn").addEventListener("click", () => show("menu"));

/* ——— menu selection: mouse + keyboard ——— */
function highlightMenu(i) {
  menuIdx = (i + menuLinks.length) % menuLinks.length;
  menuLinks.forEach((a, j) => a.classList.toggle("selected", j === menuIdx));
}
menuLinks.forEach((a, i) => {
  a.addEventListener("pointerenter", () => highlightMenu(i));
  a.addEventListener("focus", () => highlightMenu(i));
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && current === "home") { show("menu"); return; }
  if (e.key === "Escape") {
    if (current === "menu") show("home");
    else if (current !== "home") show("menu");
    return;
  }
  if (current === "menu") {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") { e.preventDefault(); highlightMenu(menuIdx + 1); menuLinks[menuIdx].focus(); }
    if (e.key === "ArrowUp" || e.key === "ArrowLeft") { e.preventDefault(); highlightMenu(menuIdx - 1); menuLinks[menuIdx].focus(); }
    if (e.key === "Enter") { e.preventDefault(); menuLinks[menuIdx].click(); }
  }
  if (current === "skills") {
    if (["ArrowRight", "ArrowDown"].includes(e.key)) { e.preventDefault(); skillMapFocus(skillFocusIdx + 1); }
    if (["ArrowLeft", "ArrowUp"].includes(e.key)) { e.preventDefault(); skillMapFocus(skillFocusIdx - 1); }
  }
});

/* ——— skill map: constellation ——— */
const SKILLS = {
  hub: { id: "hub", label: "MIHIR", x: 500, y: 310 },
  branches: [
    {
      label: "Languages", x: 220, y: 140,
      nodes: [
        { label: "Python", x: 90, y: 70, tip: "fluent · daily driver" },
        { label: "TypeScript", x: 230, y: 40, tip: "fluent" },
        { label: "JavaScript", x: 360, y: 90, tip: "fluent" },
        { label: "SQL", x: 80, y: 200, tip: "intermediate" },
        { label: "C/C++ · Java", x: 330, y: 190, tip: "intermediate" },
      ],
    },
    {
      label: "Frameworks", x: 790, y: 150,
      nodes: [
        { label: "React", x: 680, y: 60, tip: "faces of things" },
        { label: "Next.js", x: 820, y: 40, tip: "" },
        { label: "Node.js", x: 920, y: 100, tip: "" },
        { label: "Flask", x: 900, y: 220, tip: "and REST APIs" },
      ],
    },
    {
      label: "Cloud", x: 230, y: 480,
      nodes: [
        { label: "AWS", x: 100, y: 420, tip: "where things live" },
        { label: "GCP", x: 90, y: 540, tip: "" },
        { label: "Docker", x: 250, y: 580, tip: "" },
        { label: "CI/CD", x: 380, y: 540, tip: "GitHub Actions" },
      ],
    },
    {
      label: "AI & Agents", x: 780, y: 470,
      nodes: [
        { label: "LangChain", x: 660, y: 560, tip: "orchestration" },
        { label: "MCP", x: 790, y: 590, tip: "context engineering" },
        { label: "Claude Code · Cursor · Kiro", x: 900, y: 520, tip: "daily tools" },
        { label: "Fine-tuning", x: 920, y: 400, tip: "Llama-2 in production" },
      ],
    },
  ],
};

const svg = document.getElementById("skillmap");
const tip = document.getElementById("skill-tip");
const NS = "http://www.w3.org/2000/svg";
const skillNodes = [];
let skillFocusIdx = 0;

function svgEl(tag, attrs, parent) {
  const el = document.createElementNS(NS, tag);
  for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
  (parent || svg).appendChild(el);
  return el;
}

function buildSkillMap() {
  const edges = svgEl("g", {});
  const nodes = svgEl("g", {});
  const hub = SKILLS.hub;

  const addNode = (n, cls, r) => {
    const g = svgEl("g", { class: `node ${cls}`, tabindex: "0", role: "img", "aria-label": n.label + (n.tip ? `: ${n.tip}` : "") }, nodes);
    svgEl("circle", { cx: n.x, cy: n.y, r }, g);
    const t = svgEl("text", { x: n.x, y: n.y - r - 8, "text-anchor": "middle" }, g);
    t.textContent = n.label;
    const entry = { g, node: n };
    g.addEventListener("pointerenter", () => showTip(entry));
    g.addEventListener("focus", () => {
      skillFocusIdx = skillNodes.indexOf(entry);
      showTip(entry);
    });
    g.addEventListener("pointerleave", () => (tip.hidden = true));
    skillNodes.push(entry);
    return entry;
  };

  addNode(hub, "hub", 26);
  for (const b of SKILLS.branches) {
    svgEl("line", { class: "edge lit", x1: hub.x, y1: hub.y, x2: b.x, y2: b.y }, edges);
    addNode(b, "branch", 16);
    for (const n of b.nodes) {
      svgEl("line", { class: "edge", x1: b.x, y1: b.y, x2: n.x, y2: n.y }, edges);
      addNode(n, "leaf", 9);
    }
  }
}
function showTip(entry) {
  skillNodes.forEach(e => e.g.classList.toggle("focused", e === entry));
  tip.textContent = entry.node.tip ? `${entry.node.label} — ${entry.node.tip}` : entry.node.label;
  tip.hidden = false;
}
function skillMapFocus(i) {
  if (!skillNodes.length) return;
  skillFocusIdx = (i + skillNodes.length) % skillNodes.length;
  const entry = skillNodes[skillFocusIdx];
  entry.g.focus({ preventScroll: true });
  showTip(entry);
}
buildSkillMap();

/* ——— boot ——— */
show(routeFromHash(), false);

})();
