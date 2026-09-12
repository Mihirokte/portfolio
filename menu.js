/* Mihir Okte · game menu — router, keyboard+mouse nav, skill map, avatar */
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

/* ============================================================
   AVATAR: create yours at https://readyplayer.me (free), copy the
   .glb URL it gives you, and paste it here. Until then a stylized
   placeholder figure is rendered.
   ============================================================ */
const AVATAR_GLB_URL = ""; // e.g. "https://models.readyplayer.me/<your-id>.glb"

const REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ——— router ——— */
const VIEWS = ["home", "menu", "about", "experience", "skills", "exploration", "fun", "hobbies"];
const els = {};
for (const v of VIEWS) els[v] = document.getElementById(`view-${v}`);
const chrome = document.getElementById("chrome");
const menuLinks = [...document.querySelectorAll("#menu-list a")];
let current = "home";
let menuIdx = 0;

function routeFromHash() {
  const h = location.hash.replace(/^#\//, "");
  return VIEWS.includes(h) ? h : (location.hash === "#menu" ? "menu" : "home");
}

function show(view, push = true) {
  if (!VIEWS.includes(view)) view = "home";
  if (view === current && !push) return;
  els[current].classList.remove("active");
  els[current].hidden = true;
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
  avatarMode(view);
}

window.addEventListener("hashchange", () => show(routeFromHash(), false));

/* ——— landing ——— */
document.getElementById("start-btn").addEventListener("click", () => show("menu"));

/* ——— menu selection: mouse + keyboard ——— */
function highlightMenu(i) {
  menuIdx = (i + menuLinks.length) % menuLinks.length;
  menuLinks.forEach((a, j) => a.classList.toggle("selected", j === menuIdx));
}
menuLinks.forEach((a, i) => {
  a.addEventListener("pointerenter", () => highlightMenu(i));
  a.addEventListener("focus", () => highlightMenu(i));
});

document.getElementById("back-btn").addEventListener("click", () => show("menu"));

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
  if (entry.node.tip) {
    tip.textContent = `${entry.node.label} — ${entry.node.tip}`;
    tip.hidden = false;
  } else {
    tip.textContent = entry.node.label;
    tip.hidden = false;
  }
}
function skillMapFocus(i) {
  if (!skillNodes.length) return;
  skillFocusIdx = (i + skillNodes.length) % skillNodes.length;
  const entry = skillNodes[skillFocusIdx];
  entry.g.focus({ preventScroll: true });
  showTip(entry);
}
buildSkillMap();

/* ——— avatar stage (three.js) ——— */
const stage = document.getElementById("avatar-stage");
let renderer, scene, camera, avatar, avatarBase = { x: 2.2, y: 0 };

function initStage() {
  try {
    renderer = new THREE.WebGLRenderer({ canvas: stage, antialias: true, alpha: true });
  } catch (e) {
    stage.remove();
    return;
  }
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 2));
  renderer.setSize(innerWidth, innerHeight);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(35, innerWidth / innerHeight, 0.1, 50);
  camera.position.set(0, 1.5, 4.2);
  camera.lookAt(0.6, 1.0, 0);

  const key = new THREE.DirectionalLight(0xbfd4ff, 2.2);
  key.position.set(2, 4, 3);
  scene.add(key);
  scene.add(new THREE.HemisphereLight(0x8fa8d0, 0x0d0e11, 0.9));
  const rim = new THREE.DirectionalLight(0x7aa7ff, 1.6);
  rim.position.set(-3, 2, -2);
  scene.add(rim);

  if (AVATAR_GLB_URL) {
    new GLTFLoader().load(AVATAR_GLB_URL, (gltf) => {
      avatar = gltf.scene;
      avatar.position.set(avatarBase.x, 0, 0);
      scene.add(avatar);
    }, undefined, () => placeholderFigure());
  } else {
    placeholderFigure();
  }

  window.addEventListener("resize", () => {
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
  });
  requestAnimationFrame(tick);
}

/* stylized placeholder: matte figure bust from primitives, console-neutral */
function placeholderFigure() {
  avatar = new THREE.Group();
  const mat = new THREE.MeshStandardMaterial({ color: 0x2a2e38, roughness: 0.6, metalness: 0.25 });
  const accent = new THREE.MeshStandardMaterial({ color: 0x7aa7ff, roughness: 0.4, metalness: 0.1, emissive: 0x1a2c55, emissiveIntensity: 0.7 });

  const torso = new THREE.Mesh(new THREE.CapsuleGeometry(0.34, 0.6, 6, 16), mat);
  torso.position.y = 0.95;
  torso.scale.z = 0.62;
  avatar.add(torso);

  const head = new THREE.Mesh(new THREE.SphereGeometry(0.21, 24, 18), mat);
  head.position.y = 1.62;
  avatar.add(head);

  const visor = new THREE.Mesh(new THREE.TorusGeometry(0.215, 0.012, 8, 40), accent);
  visor.position.y = 1.63;
  visor.rotation.x = Math.PI / 2.25;
  avatar.add(visor);

  for (const s of [-1, 1]) {
    const arm = new THREE.Mesh(new THREE.CapsuleGeometry(0.09, 0.52, 4, 10), mat);
    arm.position.set(s * 0.46, 0.98, 0);
    arm.rotation.z = s * 0.12;
    avatar.add(arm);
  }
  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.56, 0.05, 32), accent);
  base.position.y = 0.0;
  base.material = base.material.clone();
  base.material.emissiveIntensity = 0.35;
  avatar.add(base);

  avatar.position.set(avatarBase.x, 0, 0);
  scene.add(avatar);
}

/* avatar placement per view: right side on landing/menu, receded on pages */
function avatarMode(view) {
  if (view === "home" || view === "menu") avatarBase = { x: 1.35, o: 1 };
  else avatarBase = { x: 3.6, o: 0.3 };
  stage.style.transition = "opacity 0.4s ease";
  stage.style.opacity = avatarBase.o;
}

let t0 = performance.now();
function tick(now) {
  const t = (now - t0) / 1000;
  if (avatar) {
    avatar.position.x += (avatarBase.x - avatar.position.x) * 0.04;
    if (!REDUCED) {
      avatar.rotation.y = Math.sin(t * 0.25) * 0.35 - 0.3;
      avatar.position.y = Math.sin(t * 0.8) * 0.02;
    }
  }
  renderer.render(scene, camera);
  requestAnimationFrame(tick);
}
initStage();

/* ——— boot ——— */
show(routeFromHash(), false);
