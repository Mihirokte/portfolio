/* ————— pond.js · procedural koi pond, zero deps ————— */
(() => {
"use strict";

const canvas = document.getElementById("pond");
const ctx = canvas.getContext("2d");
const DPR = Math.min(window.devicePixelRatio || 1, 2);
const REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches;

let W = 0, H = 0;            // css px
let bgLayer = null;          // pre-rendered static pond

/* ——— stories: each food item = one fact, told by the koi ——— */
const FOODS = [
  {
    label: "amazon",
    color: "#ffd166",
    title: "the koi says… about amazon",
    text: "Munch. This pellet tastes like scale — my human is a Software Engineer on Amazon's Global Stores team, where he led 8 engineers for 10 months moving 19 core ordering & refund services to new AWS infrastructure with zero downtime. He also shipped the org's first fully AI-led end-to-end rollout, and hooked legacy monoliths to diagnosis agents that cut risk-mitigation time by 97%.",
    links: [],
  },
  {
    label: "founding",
    color: "#ef7674",
    title: "the koi says… about building from zero",
    text: "Ooh, spicy. Before Amazon, he was a Founding Engineer in the CEO's office at YOptima, where he built nYO — a self-serve YouTube/DV360 campaign platform that cut client onboarding from days to minutes. He even fine-tuned Llama-2 on channel metadata, dropping live ad-placement variance by 40%. Startups feed you differently.",
    links: [],
  },
  {
    label: "iit delhi",
    color: "#8ecae6",
    title: "the koi says… about the roots",
    text: "A classic flake. He studied Mathematics and Computing at IIT Delhi, and for his thesis he modeled the Rubik's Cube as a permutation group — his graph-theoretic solver in GAP averaged sub-20-move solutions in under 2 seconds. Earlier, he ranked AIR 233 in KVPY and top-1000 in NTSE among a million candidates. Fish school; he schooled.",
    links: [],
  },
  {
    label: "helio",
    color: "#b8f2a2",
    title: "the koi says… about helio",
    text: "This one wriggles — it's alive, like his side project. He's building Helio, a split-brain personal assistant: a Telegram gateway on one side, a FastAPI + LangGraph brain on the other. It's hardened with 168 automated tests, an offline queue, and token redaction. He talks to it more than he talks to me, honestly.",
    links: [{ label: "github ↗", href: "https://github.com/Mihirokte" }],
  },
  {
    label: "say hi",
    color: "#e5b3fe",
    title: "the koi says… come closer",
    text: "The best pellet for last. He's in Bengaluru, fluent in Python and TypeScript, at home with React, AWS, and LangChain — and he replies faster than I swim. Drop him a line; tell him the fish sent you.",
    links: [
      { label: "email ↗", href: "mailto:mihirokte77@gmail.com" },
      { label: "linkedin ↗", href: "https://linkedin.com/in/mihirokte" },
      { label: "github ↗", href: "https://github.com/Mihirokte" },
    ],
  },
];

/* ——— state ——— */
const foods = [];        // {x,y,r,phase,data,eaten,respawnAt}
const ripples = [];      // {x,y,r,max,alpha}
const crumbs = [];       // particle bits when eating
let target = null;       // food koi is swimming to
let eatenCount = 0;
const eatenSet = new Set();

/* ——— koi: spine chain ——— */
const SEG = 14;
const koi = {
  x: 0, y: 0,
  angle: 0,
  speed: 0,
  baseSpeed: 1.1,
  spine: [],           // trailing points
  wanderT: Math.random() * 100,
  wanderTarget: null,
  eatPause: 0,
};

function resetSpine() {
  koi.spine = [];
  for (let i = 0; i < SEG; i++) koi.spine.push({ x: koi.x - i * 8, y: koi.y });
}

/* ——— layout ——— */
function layoutFoods() {
  // ring positions, jittered, kept away from edges and HUD
  const cx = W / 2, cy = H / 2;
  const rx = Math.min(W, H) * 0.32 + Math.min(W,H) * 0.04;
  const ry = Math.min(W, H) * 0.28;
  FOODS.forEach((data, i) => {
    const a = (i / FOODS.length) * Math.PI * 2 - Math.PI / 2 + 0.4;
    const f = foods[i] || (foods[i] = {});
    f.x = cx + Math.cos(a) * rx * (0.85 + 0.2 * ((i * 7) % 3) / 3);
    f.y = cy + Math.sin(a) * ry * (0.85 + 0.2 * ((i * 5) % 3) / 3);
    f.y = Math.max(H * 0.22, Math.min(H * 0.82, f.y));
    f.x = Math.max(W * 0.12, Math.min(W * 0.88, f.x));
    f.r = 9;
    f.phase = i * 1.7;
    f.data = data;
    f.eaten = f.eaten || false;
  });
}

/* ——— static pond background, pre-rendered ——— */
function renderBackground() {
  bgLayer = document.createElement("canvas");
  bgLayer.width = W * DPR;
  bgLayer.height = H * DPR;
  const b = bgLayer.getContext("2d");
  b.scale(DPR, DPR);

  // water gradient
  const g = b.createRadialGradient(W/2, H/2, 10, W/2, H/2, Math.max(W,H)*0.75);
  g.addColorStop(0, "#12545c");
  g.addColorStop(0.55, "#0b3a44");
  g.addColorStop(1, "#06171c");
  b.fillStyle = g;
  b.fillRect(0, 0, W, H);

  // pond floor pebbles
  const rnd = mulberry32(7);
  for (let i = 0; i < 90; i++) {
    const x = rnd() * W, y = rnd() * H;
    const r = 4 + rnd() * 14;
    b.beginPath();
    b.ellipse(x, y, r, r * (0.6 + rnd()*0.3), rnd() * Math.PI, 0, Math.PI*2);
    b.fillStyle = `rgba(${20+rnd()*30|0}, ${60+rnd()*30|0}, ${65+rnd()*25|0}, ${0.25 + rnd()*0.3})`;
    b.fill();
  }

  // sunken leaves / plants
  for (let i = 0; i < 14; i++) {
    const x = rnd() * W, y = rnd() * H;
    b.save();
    b.translate(x, y);
    b.rotate(rnd() * Math.PI * 2);
    b.beginPath();
    b.ellipse(0, 0, 10 + rnd()*16, 4 + rnd()*5, 0, 0, Math.PI*2);
    b.fillStyle = `rgba(30, 90, 70, ${0.14 + rnd()*0.14})`;
    b.fill();
    b.restore();
  }

  // lily pads near corners
  const pads = [
    [W*0.12, H*0.14, 42], [W*0.88, H*0.2, 34],
    [W*0.9, H*0.86, 46], [W*0.1, H*0.86, 30],
  ];
  pads.forEach(([x, y, r], i) => {
    b.save();
    b.translate(x, y);
    b.rotate(i * 1.3);
    b.beginPath();
    const notch = 0.5;
    b.moveTo(0, 0);
    b.arc(0, 0, r, notch, Math.PI * 2 - notch * 0.4);
    b.closePath();
    const pg = b.createRadialGradient(-r*0.3, -r*0.3, 4, 0, 0, r);
    pg.addColorStop(0, "#3e8e5f");
    pg.addColorStop(1, "#1f5c3c");
    b.fillStyle = pg;
    b.fill();
    b.strokeStyle = "rgba(10,40,30,0.5)";
    b.lineWidth = 1.5;
    b.stroke();
    // veins
    b.strokeStyle = "rgba(255,255,255,0.08)";
    for (let v = 0; v < 6; v++) {
      b.beginPath();
      b.moveTo(0, 0);
      const a = notch + v * (Math.PI*2 - notch*1.4) / 6;
      b.lineTo(Math.cos(a) * r * 0.9, Math.sin(a) * r * 0.9);
      b.stroke();
    }
    b.restore();
  });

  // stone rim vignette
  b.strokeStyle = "rgba(0,0,0,0.35)";
  b.lineWidth = Math.min(W,H) * 0.06;
  b.strokeRect(0, 0, W, H);
}

function mulberry32(a) {
  return function() {
    a |= 0; a = a + 0x6D2B79F5 | 0;
    let t = Math.imul(a ^ a >>> 15, 1 | a);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

/* ——— resize ——— */
function resize() {
  W = window.innerWidth;
  H = window.innerHeight;
  canvas.width = W * DPR;
  canvas.height = H * DPR;
  canvas.style.width = W + "px";
  canvas.style.height = H + "px";
  ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  renderBackground();
  layoutFoods();
  if (!koi.spine.length) {
    koi.x = W / 2; koi.y = H / 2;
    resetSpine();
  }
}
window.addEventListener("resize", resize);
resize();

/* ——— input ——— */
function pointerPos(e) {
  const r = canvas.getBoundingClientRect();
  const t = e.touches ? e.touches[0] : e;
  return { x: t.clientX - r.left, y: t.clientY - r.top };
}

function onTap(e) {
  const p = pointerPos(e);
  // nearest uneaten food within touch radius
  let best = null, bestD = 44 * 44;
  for (const f of foods) {
    if (f.eaten) continue;
    const dx = p.x - f.x, dy = p.y - f.y;
    const d = dx * dx + dy * dy;
    if (d < bestD) { bestD = d; best = f; }
  }
  addRipple(p.x, p.y, best ? 30 : 55);
  if (best) {
    target = best;
    hideHint();
    closePanel();
  }
}
canvas.addEventListener("pointerdown", onTap);

/* ——— ripples & crumbs ——— */
function addRipple(x, y, max) {
  ripples.push({ x, y, r: 4, max, alpha: 0.5 });
  if (ripples.length > 12) ripples.shift();
}

function addCrumbs(x, y, color) {
  for (let i = 0; i < 10; i++) {
    const a = Math.random() * Math.PI * 2;
    const s = 0.5 + Math.random() * 1.6;
    crumbs.push({ x, y, vx: Math.cos(a)*s, vy: Math.sin(a)*s, life: 1, color });
  }
}

/* ——— story panel ——— */
const panel = document.getElementById("story-panel");
const panelTitle = document.getElementById("panel-title");
const panelText = document.getElementById("panel-text");
const panelLinks = document.getElementById("panel-links");
const panelProgress = document.getElementById("panel-progress");
const hintEl = document.getElementById("hint");
document.getElementById("panel-close").addEventListener("click", closePanel);

FOODS.forEach(() => {
  const d = document.createElement("span");
  d.className = "dot";
  panelProgress.appendChild(d);
});

let typeTimer = null;

function openPanel(data) {
  panelTitle.textContent = data.title;
  panelLinks.innerHTML = "";
  data.links.forEach(l => {
    const a = document.createElement("a");
    a.href = l.href;
    a.textContent = l.label;
    if (!l.href.startsWith("mailto:")) { a.target = "_blank"; a.rel = "noopener"; }
    panelLinks.appendChild(a);
  });
  [...panelProgress.children].forEach((d, i) =>
    d.classList.toggle("eaten", eatenSet.has(i)));
  panel.classList.add("open");

  // typewriter
  clearInterval(typeTimer);
  if (REDUCED) { panelText.textContent = data.text; return; }
  panelText.innerHTML = '<span class="cursor"></span>';
  let i = 0;
  typeTimer = setInterval(() => {
    i += 2;
    if (i >= data.text.length) {
      clearInterval(typeTimer);
      panelText.textContent = data.text;
      return;
    }
    panelText.innerHTML = data.text.slice(0, i) + '<span class="cursor"></span>';
  }, 14);
}

function closePanel() {
  clearInterval(typeTimer);
  panel.classList.remove("open");
}

let hintHidden = false;
function hideHint() {
  if (hintHidden) return;
  hintHidden = true;
  hintEl.classList.add("hidden");
}

/* ——— koi brain ——— */
function pickWanderTarget() {
  koi.wanderTarget = {
    x: W * 0.15 + Math.random() * W * 0.7,
    y: H * 0.18 + Math.random() * H * 0.64,
  };
}
pickWanderTarget();

function updateKoi(dt) {
  if (koi.eatPause > 0) { koi.eatPause -= dt; koi.speed *= 0.92; return moveSpine(); }

  let dest, arriveR, speed;
  if (target && !target.eaten) {
    dest = target; arriveR = 14; speed = koi.baseSpeed * 2.4;
  } else {
    if (!koi.wanderTarget) pickWanderTarget();
    dest = koi.wanderTarget; arriveR = 30; speed = koi.baseSpeed;
  }

  const dx = dest.x - koi.x, dy = dest.y - koi.y;
  const dist = Math.hypot(dx, dy);

  if (dist < arriveR) {
    if (target && !target.eaten) {
      eat(target);
      target = null;
    } else {
      pickWanderTarget();
    }
  } else {
    const want = Math.atan2(dy, dx);
    let diff = want - koi.angle;
    while (diff > Math.PI) diff -= Math.PI * 2;
    while (diff < -Math.PI) diff += Math.PI * 2;
    koi.angle += diff * Math.min(1, 0.055 * dt);
    koi.speed += (speed - koi.speed) * 0.04 * dt;
  }

  // gentle idle sway
  koi.wanderT += dt * 0.016;
  const sway = Math.sin(koi.wanderT * 2.2) * 0.012;
  koi.angle += sway * dt;

  koi.x += Math.cos(koi.angle) * koi.speed * dt;
  koi.y += Math.sin(koi.angle) * koi.speed * dt;
  koi.x = Math.max(20, Math.min(W - 20, koi.x));
  koi.y = Math.max(20, Math.min(H - 20, koi.y));

  moveSpine();
}

function moveSpine() {
  let px = koi.x, py = koi.y;
  const gap = 7;
  koi.spine[0].x = px; koi.spine[0].y = py;
  for (let i = 1; i < SEG; i++) {
    const s = koi.spine[i];
    const dx = s.x - px, dy = s.y - py;
    const d = Math.hypot(dx, dy) || 1;
    s.x = px + (dx / d) * gap;
    s.y = py + (dy / d) * gap;
    px = s.x; py = s.y;
  }
}

function eat(food) {
  food.eaten = true;
  food.respawnAt = performance.now() + 30000;
  koi.eatPause = 40;
  addRipple(food.x, food.y, 46);
  addCrumbs(food.x, food.y, food.data.color);
  const idx = FOODS.indexOf(food.data);
  eatenSet.add(idx);
  eatenCount++;
  openPanel(food.data);
  if (navigator.vibrate) navigator.vibrate(18);
}

/* ——— drawing ——— */
function drawFood(f, t) {
  const bobY = Math.sin(t * 0.0018 + f.phase) * 3;
  const y = f.y + bobY;

  // glow halo
  ctx.beginPath();
  ctx.arc(f.x, y, f.r + 7 + Math.sin(t * 0.003 + f.phase) * 2, 0, Math.PI * 2);
  ctx.fillStyle = hexA(f.data.color, 0.16);
  ctx.fill();

  // pellet
  ctx.beginPath();
  ctx.arc(f.x, y, f.r, 0, Math.PI * 2);
  ctx.fillStyle = f.data.color;
  ctx.fill();
  ctx.beginPath();
  ctx.arc(f.x - 3, y - 3, f.r * 0.35, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(255,255,255,0.55)";
  ctx.fill();

  // label
  ctx.font = "600 11px ui-monospace, Menlo, monospace";
  ctx.textAlign = "center";
  ctx.fillStyle = "rgba(234, 246, 243, 0.85)";
  ctx.fillText(f.data.label, f.x, y + f.r + 18);
}

function hexA(hex, a) {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${n>>16&255}, ${n>>8&255}, ${n&255}, ${a})`;
}

function drawKoi(t) {
  const s = koi.spine;

  // shadow
  ctx.save();
  ctx.translate(5, 9);
  ctx.beginPath();
  ctx.ellipse(koi.x, koi.y, 26, 12, koi.angle, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(0,0,0,0.22)";
  ctx.fill();
  ctx.restore();

  // widths along the spine: head → belly → tail
  const widths = [];
  for (let i = 0; i < SEG; i++) {
    const u = i / (SEG - 1);
    widths.push(13 * Math.sin(Math.PI * Math.min(1, u * 1.25 + 0.12)) * (1 - u * 0.35) + 1);
  }

  // tail fin
  const tail = s[SEG - 1], pre = s[SEG - 2];
  const ta = Math.atan2(tail.y - pre.y, tail.x - pre.x);
  const flap = Math.sin(t * 0.012) * 0.5;
  ctx.beginPath();
  ctx.moveTo(tail.x, tail.y);
  ctx.lineTo(tail.x + Math.cos(ta + 0.55 + flap) * 20, tail.y + Math.sin(ta + 0.55 + flap) * 20);
  ctx.lineTo(tail.x + Math.cos(ta + flap * 0.6) * 13, tail.y + Math.sin(ta + flap * 0.6) * 13);
  ctx.lineTo(tail.x + Math.cos(ta - 0.55 + flap) * 20, tail.y + Math.sin(ta - 0.55 + flap) * 20);
  ctx.closePath();
  ctx.fillStyle = "#f4762e";
  ctx.fill();

  // body: outline via left/right edge points
  ctx.beginPath();
  for (let i = 0; i < SEG; i++) {
    const p = s[i];
    const nx = i < SEG - 1 ? s[i + 1] : s[i - 1];
    const a = i < SEG - 1 ? Math.atan2(nx.y - p.y, nx.x - p.x) : Math.atan2(p.y - nx.y, p.x - nx.x);
    const w = widths[i];
    const lx = p.x + Math.cos(a + Math.PI / 2) * w;
    const ly = p.y + Math.sin(a + Math.PI / 2) * w;
    if (i === 0) ctx.moveTo(lx, ly); else ctx.lineTo(lx, ly);
  }
  for (let i = SEG - 1; i >= 0; i--) {
    const p = s[i];
    const nx = i < SEG - 1 ? s[i + 1] : s[i - 1];
    const a = i < SEG - 1 ? Math.atan2(nx.y - p.y, nx.x - p.x) : Math.atan2(p.y - nx.y, p.x - nx.x);
    const w = widths[i];
    ctx.lineTo(p.x + Math.cos(a - Math.PI / 2) * w, p.y + Math.sin(a - Math.PI / 2) * w);
  }
  ctx.closePath();
  const bodyGrad = ctx.createLinearGradient(s[0].x, s[0].y, s[SEG-1].x, s[SEG-1].y);
  bodyGrad.addColorStop(0, "#ff9d52");
  bodyGrad.addColorStop(0.5, "#ff8c42");
  bodyGrad.addColorStop(1, "#f4762e");
  ctx.fillStyle = bodyGrad;
  ctx.fill();

  // koi patches
  ctx.save();
  ctx.clip();
  ctx.beginPath();
  ctx.ellipse(s[2].x, s[2].y, 10, 7, koi.angle, 0, Math.PI * 2);
  ctx.fillStyle = "#fff4ea";
  ctx.fill();
  ctx.beginPath();
  ctx.ellipse(s[6].x, s[6].y, 9, 6, koi.angle + 0.4, 0, Math.PI * 2);
  ctx.fillStyle = "#e8552f";
  ctx.fill();
  ctx.beginPath();
  ctx.ellipse(s[9].x, s[9].y, 7, 5, koi.angle - 0.3, 0, Math.PI * 2);
  ctx.fillStyle = "#fff4ea";
  ctx.fill();
  ctx.restore();

  // pectoral fins
  const h = s[1];
  const ha = Math.atan2(s[0].y - s[2].y, s[0].x - s[2].x);
  const finFlap = Math.sin(t * 0.008) * 0.3;
  for (const side of [-1, 1]) {
    ctx.beginPath();
    const fx = h.x + Math.cos(ha + side * 1.5) * 11;
    const fy = h.y + Math.sin(ha + side * 1.5) * 11;
    ctx.moveTo(fx, fy);
    ctx.quadraticCurveTo(
      fx + Math.cos(ha + side * (2.2 + finFlap)) * 16,
      fy + Math.sin(ha + side * (2.2 + finFlap)) * 16,
      fx + Math.cos(ha + side * 2.8) * 9,
      fy + Math.sin(ha + side * 2.8) * 9
    );
    ctx.closePath();
    ctx.fillStyle = "rgba(255, 140, 66, 0.75)";
    ctx.fill();
  }

  // eyes
  const head = s[0];
  for (const side of [-1, 1]) {
    ctx.beginPath();
    ctx.arc(
      head.x + Math.cos(ha + side * 0.85) * 7.5,
      head.y + Math.sin(ha + side * 0.85) * 7.5,
      2.1, 0, Math.PI * 2);
    ctx.fillStyle = "#1d2b33";
    ctx.fill();
  }
}

/* ——— caustic light shimmer (cheap) ——— */
function drawCaustics(t) {
  ctx.save();
  ctx.globalAlpha = 0.045;
  ctx.strokeStyle = "#bff5ff";
  ctx.lineWidth = 1.6;
  const n = W < 600 ? 5 : 8;
  for (let i = 0; i < n; i++) {
    const yy = (i + 0.5) * (H / n) + Math.sin(t * 0.0004 + i * 2.4) * 26;
    ctx.beginPath();
    for (let x = 0; x <= W; x += 26) {
      const y = yy + Math.sin(x * 0.014 + t * 0.0011 + i) * 14;
      x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.stroke();
  }
  ctx.restore();
}

/* ——— main loop ——— */
let last = performance.now();
function frame(now) {
  const dt = Math.min(3, (now - last) / 16.67);
  last = now;

  ctx.drawImage(bgLayer, 0, 0, W, H);
  drawCaustics(now);

  // respawn eaten food
  for (const f of foods) {
    if (f.eaten && now > f.respawnAt) { f.eaten = false; }
    if (!f.eaten) drawFood(f, now);
  }

  // ripples
  for (let i = ripples.length - 1; i >= 0; i--) {
    const r = ripples[i];
    r.r += 1.4 * dt;
    r.alpha *= 0.965;
    if (r.r > r.max || r.alpha < 0.02) { ripples.splice(i, 1); continue; }
    ctx.beginPath();
    ctx.arc(r.x, r.y, r.r, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(200, 240, 250, ${r.alpha})`;
    ctx.lineWidth = 1.5;
    ctx.stroke();
  }

  // crumbs
  for (let i = crumbs.length - 1; i >= 0; i--) {
    const c = crumbs[i];
    c.x += c.vx * dt; c.y += c.vy * dt;
    c.life -= 0.02 * dt;
    if (c.life <= 0) { crumbs.splice(i, 1); continue; }
    ctx.beginPath();
    ctx.arc(c.x, c.y, 2 * c.life, 0, Math.PI * 2);
    ctx.fillStyle = hexA(c.color, c.life * 0.8);
    ctx.fill();
  }

  // koi trail ripple occasionally
  if (!REDUCED && Math.random() < 0.03 && koi.speed > 0.6) {
    addRipple(koi.x, koi.y, 22);
  }

  updateKoi(dt);
  drawKoi(now);

  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);

})();
