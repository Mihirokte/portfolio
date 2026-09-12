/* Mihir Okte · pond — taopunk art direction (flat cel, ink outline, jade glow) */
(() => {
"use strict";

/* palette — sampled from the studied gameplay frames */
const P = {
  waterDeep: "#0a1512",
  waterMid: "#10201b",
  ink: "#0a0d0a",
  bone: "#ece3c8",
  gold: "#b98f4a",
  goldDark: "#6f5730",
  olive: "#3a3f2c",
  oliveDark: "#252a1e",
  fish: "#e8a31d",
  fishShade: "#c07f12",
  belly: "#f2d896",
  jade: "#46e0b1",
  jadeDim: "#2a8f70",
  crimson: "#a92e22",
  padGreen: "#2e4a38",
  padLight: "#3f6148",
};

const STORIES = [
  {
    title: "一",
    text: "My feeder is Mihir. Mathematics at IIT Delhi, engineer at Amazon now. He thinks by this pond. The best ones need quiet.",
    links: [],
  },
  {
    title: "二",
    text: "He led eight engineers and moved nineteen of Amazon's ordering services onto new infrastructure. Zero downtime. Before that, founding engineer at a startup. He builds calm out of chaos.",
    links: [],
  },
  {
    title: "三",
    text: "Python, TypeScript, React, AWS. Lately it is agents: LangChain, MCP. He once tuned a Llama to place YouTube ads and cut placement variance by forty percent.",
    links: [],
  },
  {
    title: "四",
    text: "He is building Helio, a split-brain assistant: Telegram on one side, a LangGraph brain on the other, 168 tests deep. His thesis solved the Rubik's Cube with group theory. Under two seconds.",
    links: [{ label: "github", href: "https://github.com/Mihirokte" }],
  },
  {
    title: "五",
    text: "That is all I know. Write to him. Tell him the fish sent you.",
    links: [
      { label: "email", href: "mailto:mihirokte77@gmail.com" },
      { label: "linkedin", href: "https://linkedin.com/in/mihirokte" },
      { label: "github", href: "https://github.com/Mihirokte" },
    ],
  },
];

const canvas = document.getElementById("pond");
const ctx = canvas.getContext("2d");
const DPR = Math.min(window.devicePixelRatio || 1, 2);
const REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches;

let W = 0, H = 0;
let staticLayer = null;  // pond bed, props, vignette
let grainLayer = null;   // noise tile

/* ————— utils ————— */
function mulberry32(a) {
  return function () {
    a |= 0; a = a + 0x6D2B79F5 | 0;
    let t = Math.imul(a ^ a >>> 15, 1 | a);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

/* ————— static scenery (drawn once per resize) ————— */
function drawLattice(g, x, y, w, h, cell) {
  g.save();
  g.strokeStyle = P.goldDark;
  g.lineWidth = 2;
  g.strokeRect(x, y, w, h);
  g.lineWidth = 1.2;
  for (let cx = x + cell; cx < x + w; cx += cell) {
    g.beginPath(); g.moveTo(cx, y); g.lineTo(cx, y + h); g.stroke();
  }
  for (let cy = y + cell; cy < y + h; cy += cell) {
    g.beginPath(); g.moveTo(x, cy); g.lineTo(x + w, cy); g.stroke();
  }
  g.restore();
}

function drawBranch(g, x, y, angle, len, depth, rnd) {
  if (depth === 0 || len < 8) return;
  const x2 = x + Math.cos(angle) * len;
  const y2 = y + Math.sin(angle) * len;
  g.lineWidth = depth * 1.4;
  g.beginPath(); g.moveTo(x, y); g.lineTo(x2, y2); g.stroke();
  // leaf clusters at tips
  if (depth <= 2) {
    g.save();
    g.fillStyle = "rgba(24, 36, 26, 0.9)";
    for (let i = 0; i < 4; i++) {
      g.beginPath();
      g.ellipse(x2 + (rnd() - 0.5) * 18, y2 + (rnd() - 0.5) * 12, 8 + rnd() * 7, 4 + rnd() * 3, rnd() * Math.PI, 0, Math.PI * 2);
      g.fill();
    }
    g.restore();
  }
  const n = 2;
  for (let i = 0; i < n; i++) {
    drawBranch(g, x2, y2, angle + (rnd() - 0.4) * 0.7, len * (0.6 + rnd() * 0.2), depth - 1, rnd);
  }
}

function stoneSlab(g, pts, fill) {
  g.beginPath();
  g.moveTo(pts[0][0], pts[0][1]);
  for (let i = 1; i < pts.length; i++) g.lineTo(pts[i][0], pts[i][1]);
  g.closePath();
  g.fillStyle = fill;
  g.fill();
  g.strokeStyle = P.ink;
  g.lineWidth = 3;
  g.stroke();
}

function renderStatic() {
  staticLayer = document.createElement("canvas");
  staticLayer.width = W * DPR;
  staticLayer.height = H * DPR;
  const g = staticLayer.getContext("2d");
  g.scale(DPR, DPR);
  const rnd = mulberry32(9);

  // flat water, slightly lifted center — cel, not gradient-heavy
  g.fillStyle = P.waterDeep;
  g.fillRect(0, 0, W, H);
  const lift = g.createRadialGradient(W * 0.5, H * 0.42, 60, W * 0.5, H * 0.42, Math.max(W, H) * 0.62);
  lift.addColorStop(0, P.waterMid);
  lift.addColorStop(1, "rgba(10, 21, 18, 0)");
  g.fillStyle = lift;
  g.fillRect(0, 0, W, H);

  // still water dashes (hand-placed light strokes)
  g.strokeStyle = "rgba(160, 210, 190, 0.07)";
  g.lineWidth = 1.5;
  for (let i = 0; i < 26; i++) {
    const x = rnd() * W, y = rnd() * H, l = 20 + rnd() * 70;
    g.beginPath(); g.moveTo(x, y); g.lineTo(x + l, y); g.stroke();
  }

  // corner stone platforms with gold trim + lattice
  const s = Math.min(W, H);
  // top-left slab
  stoneSlab(g, [[-20, -20], [s * 0.34, -20], [s * 0.26, s * 0.1], [s * 0.08, s * 0.16], [-20, s * 0.12]], P.oliveDark);
  g.strokeStyle = P.gold; g.lineWidth = 2;
  g.beginPath(); g.moveTo(s * 0.33, -14); g.lineTo(s * 0.25, s * 0.09); g.lineTo(s * 0.08, s * 0.15); g.stroke();
  drawLattice(g, s * 0.02, s * 0.01, s * 0.13, s * 0.06, s * 0.022);

  // bottom-right slab
  stoneSlab(g, [[W + 20, H + 20], [W - s * 0.3, H + 20], [W - s * 0.22, H - s * 0.09], [W - s * 0.05, H - s * 0.13], [W + 20, H - s * 0.1]], P.oliveDark);
  g.strokeStyle = P.gold; g.lineWidth = 2;
  g.beginPath(); g.moveTo(W - s * 0.29, H + 14); g.lineTo(W - s * 0.21, H - s * 0.08); g.lineTo(W - s * 0.05, H - s * 0.12); g.stroke();

  // stone-crackle cells on slabs (the game's cracked-stone motif)
  g.strokeStyle = "rgba(10, 13, 10, 0.55)";
  g.lineWidth = 1.4;
  for (let i = 0; i < 14; i++) {
    const cx = rnd() * s * 0.22, cy = rnd() * s * 0.12;
    g.beginPath();
    g.moveTo(cx, cy);
    g.lineTo(cx + (rnd() - 0.5) * 30, cy + rnd() * 22);
    g.lineTo(cx + (rnd() - 0.5) * 40, cy + rnd() * 30);
    g.stroke();
  }

  // overhanging branch silhouettes (ink)
  g.strokeStyle = "rgba(16, 24, 18, 0.95)";
  g.lineCap = "round";
  drawBranch(g, W * 0.86, -10, Math.PI * 0.62, s * 0.13, 4, rnd);
  drawBranch(g, W * 0.06, -14, Math.PI * 0.42, s * 0.11, 4, rnd);

  // lily pads — flat cel discs with notch + pale outline
  const padSpots = [
    [W * 0.16, H * 0.74, s * 0.052], [W * 0.22, H * 0.8, s * 0.034],
    [W * 0.82, H * 0.22, s * 0.045], [W * 0.76, H * 0.17, s * 0.028],
    [W * 0.88, H * 0.62, s * 0.038],
  ];
  for (const [px, py, pr] of padSpots) {
    const a0 = rnd() * Math.PI * 2;
    g.beginPath();
    g.moveTo(px, py);
    g.arc(px, py, pr, a0 + 0.5, a0 + Math.PI * 2 - 0.2);
    g.closePath();
    g.fillStyle = P.padGreen;
    g.fill();
    g.strokeStyle = P.ink;
    g.lineWidth = 2.5;
    g.stroke();
    // single cel highlight wedge
    g.beginPath();
    g.moveTo(px, py);
    g.arc(px, py, pr * 0.82, a0 + 2.2, a0 + 3.1);
    g.closePath();
    g.fillStyle = P.padLight;
    g.fill();
  }

  // heavy edge vignette — authentic to the frames
  const vig = g.createRadialGradient(W / 2, H / 2, s * 0.3, W / 2, H / 2, Math.max(W, H) * 0.72);
  vig.addColorStop(0, "rgba(0,0,0,0)");
  vig.addColorStop(1, "rgba(3, 6, 5, 0.78)");
  g.fillStyle = vig;
  g.fillRect(0, 0, W, H);

  // grain tile
  grainLayer = document.createElement("canvas");
  grainLayer.width = grainLayer.height = 256;
  const gg = grainLayer.getContext("2d");
  const im = gg.createImageData(256, 256);
  for (let i = 0; i < im.data.length; i += 4) {
    const v = 118 + Math.random() * 20 | 0;
    im.data[i] = im.data[i + 1] = im.data[i + 2] = v;
    im.data[i + 3] = 14;
  }
  gg.putImageData(im, 0, 0);
}

/* ————— resize ————— */
function resize() {
  W = window.innerWidth;
  H = window.innerHeight;
  canvas.width = W * DPR;
  canvas.height = H * DPR;
  canvas.style.width = W + "px";
  canvas.style.height = H + "px";
  ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  renderStatic();
  layoutFood();
}
window.addEventListener("resize", resize);

/* ————— food: jade orbs, well separated ————— */
const foods = [];
function layoutFood() {
  const spots = [
    [0.24, 0.3], [0.68, 0.18], [0.84, 0.44], [0.62, 0.76], [0.3, 0.6],
  ];
  spots.forEach(([fx, fy], i) => {
    const f = foods[i] || (foods[i] = { eaten: false, phase: i * 1.9 });
    f.bx = W * fx;
    f.by = H * fy;
    f.r = Math.max(9, Math.min(W, H) * 0.014);
  });
}

/* ————— fish: 2-part sprite rig (body + pivoting tail) ————— */
const bodyImg = new Image();
const tailImg = new Image();
bodyImg.src = "assets/fish-body.png";
tailImg.src = "assets/fish-tail.png";
const spritesReady = Promise.all([bodyImg.decode(), tailImg.decode()]);

const fish = {
  x: 0, y: 0, heading: 0, speed: 0, base: 0.9, bend: 0,
  state: "wander", target: null, gulpT: 0,
  wanderTo: { x: 0, y: 0 }, eatenTotal: 0,
};
function scale() { return Math.max(0.62, Math.min(W, H) / 900); }
function pickWander() {
  fish.wanderTo.x = W * (0.15 + Math.random() * 0.7);
  fish.wanderTo.y = H * (0.15 + Math.random() * 0.7);
}

function updateFish(dt) {
  let dest, arriveR, want;
  if (fish.state === "seek" && fish.target && !fish.target.eaten) {
    dest = { x: fish.target.bx, y: fish.target.by };
    arriveR = 16; want = fish.base * 2.6;
  } else {
    dest = fish.wanderTo; arriveR = 40; want = fish.base;
  }
  const dx = dest.x - fish.x, dy = dest.y - fish.y;
  const dist = Math.hypot(dx, dy);

  if (dist < arriveR) {
    if (fish.state === "seek" && fish.target && !fish.target.eaten) {
      const f = fish.target;
      f.eaten = true;
      addRipple(f.bx, f.by, 1.4);
      burst(f.bx, f.by);
      audio.plip();
      openStory(STORIES[fish.eatenTotal % STORIES.length], fish.eatenTotal % STORIES.length);
      fish.eatenTotal++;
      if (foods.every(q => q.eaten)) setTimeout(() => foods.forEach(q => q.eaten = false), 26000);
      fish.target = null;
      fish.state = "wander";
      fish.gulpT = 1;
    }
    pickWander();
  } else {
    const wantA = Math.atan2(dy, dx);
    let diff = wantA - fish.heading;
    while (diff > Math.PI) diff -= Math.PI * 2;
    while (diff < -Math.PI) diff += Math.PI * 2;
    const turn = diff * Math.min(1, 3.2 * dt);
    fish.heading += turn;
    fish.bend += (turn * 6 - fish.bend) * Math.min(1, 5 * dt); // lean into turns
    fish.speed += (want - fish.speed) * 1.6 * dt;
  }
  fish.gulpT = Math.max(0, fish.gulpT - dt * 2);

  const px60 = 60 * scale();
  fish.x += Math.cos(fish.heading) * fish.speed * px60 * dt;
  fish.y += Math.sin(fish.heading) * fish.speed * px60 * dt;
  fish.x = Math.max(30, Math.min(W - 30, fish.x));
  fish.y = Math.max(30, Math.min(H - 30, fish.y));
}

function drawFish(t) {
  if (!bodyImg.complete || !bodyImg.naturalWidth) return;
  const k = scale();
  // sprite native: body 560x360 (head +x, tail joint at x=95, center y=180)
  // on screen the body spans ~110px at k=1
  const bw = 110 * k, bh = bw * (360 / 560);
  const flap = Math.sin(t * (5 + fish.speed * 3)) * (0.28 + Math.min(0.25, fish.speed * 0.12));
  const swayA = Math.sin(t * (5 + fish.speed * 3)) * 0.045 + fish.bend * 0.06;

  ctx.save();
  ctx.translate(fish.x, fish.y);
  ctx.rotate(fish.heading + swayA);

  // tail: pivot sits where the body's tail joint is.
  // body sprite: joint at (95/560 - 0.5) * bw from center = -0.33 * bw
  const jointX = -0.33 * bw;
  const tw = 78 * k, th = tw * (360 / 400);
  ctx.save();
  ctx.translate(jointX, 0);
  ctx.rotate(Math.PI + flap * 0.7 + fish.bend * 0.12);
  // tail sprite pivot at (56/400, 180/360) → offset so pivot lands on origin
  ctx.drawImage(tailImg, -tw * (56 / 400), -th * 0.5, tw, th);
  ctx.restore();

  ctx.drawImage(bodyImg, -bw * 0.5, -bh * 0.5, bw, bh);
  ctx.restore();

  // gulp ring
  if (fish.gulpT > 0) {
    const hx = fish.x + Math.cos(fish.heading) * bw * 0.42;
    const hy = fish.y + Math.sin(fish.heading) * bw * 0.42;
    ctx.beginPath();
    ctx.arc(hx, hy, (1 - fish.gulpT) * 26 * k + 6, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(236, 227, 200, ${fish.gulpT * 0.5})`;
    ctx.lineWidth = 2;
    ctx.stroke();
  }
}

/* ————— ripples: thin ink rings ————— */
const ripples = [];
function addRipple(x, y, amp = 1) {
  ripples.push({ x, y, r: 6, amp, life: 1 });
  if (ripples.length > 14) ripples.shift();
}
function drawRipples(dt) {
  for (let i = ripples.length - 1; i >= 0; i--) {
    const r = ripples[i];
    r.r += 42 * dt * r.amp;
    r.life -= dt * 0.55;
    if (r.life <= 0) { ripples.splice(i, 1); continue; }
    for (let ring = 0; ring < 2; ring++) {
      const rr = r.r - ring * 10;
      if (rr < 2) continue;
      ctx.beginPath();
      ctx.arc(r.x, r.y, rr, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(170, 215, 195, ${r.life * (0.22 - ring * 0.08)})`;
      ctx.lineWidth = 1.6;
      ctx.stroke();
    }
  }
}

/* ————— jade burst on eat ————— */
const bits = [];
function burst(x, y) {
  for (let i = 0; i < 10; i++) {
    const a = Math.random() * Math.PI * 2;
    const v = 30 + Math.random() * 80;
    bits.push({ x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v, life: 1 });
  }
}
function drawBits(dt) {
  for (let i = bits.length - 1; i >= 0; i--) {
    const b = bits[i];
    b.x += b.vx * dt; b.y += b.vy * dt;
    b.vx *= 0.94; b.vy *= 0.94;
    b.life -= dt * 1.8;
    if (b.life <= 0) { bits.splice(i, 1); continue; }
    ctx.beginPath();
    ctx.arc(b.x, b.y, 2.2 * b.life + 0.5, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(70, 224, 177, ${b.life * 0.8})`;
    ctx.fill();
  }
}

/* ————— food orbs: jade glow ————— */
function drawFood(t) {
  for (const f of foods) {
    if (f.eaten) continue;
    const x = f.bx + Math.sin(t * 0.5 + f.phase) * 6;
    const y = f.by + Math.cos(t * 0.4 + f.phase) * 5;
    f.x = x; f.y = y;
    const pulse = 0.85 + Math.sin(t * 2 + f.phase) * 0.15;

    // painted halo
    const halo = ctx.createRadialGradient(x, y, 2, x, y, f.r * 4.2 * pulse);
    halo.addColorStop(0, "rgba(70, 224, 177, 0.5)");
    halo.addColorStop(0.5, "rgba(70, 224, 177, 0.13)");
    halo.addColorStop(1, "rgba(70, 224, 177, 0)");
    ctx.fillStyle = halo;
    ctx.beginPath();
    ctx.arc(x, y, f.r * 4.2 * pulse, 0, Math.PI * 2);
    ctx.fill();

    // orb: flat jade with ink outline + bone core (like the game's pao orb)
    ctx.beginPath();
    ctx.arc(x, y, f.r * pulse, 0, Math.PI * 2);
    ctx.fillStyle = P.jade;
    ctx.fill();
    ctx.strokeStyle = P.ink;
    ctx.lineWidth = 2.2;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(x, y, f.r * 0.42 * pulse, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(236, 243, 230, 0.85)";
    ctx.fill();
  }
}

/* ————— jade moths (the game's moth motif) ————— */
const moths = [
  { x: 0, y: 0, tx: 0, ty: 0, t: 1, dur: 1, hover: 0, phase: 0 },
  { x: 0, y: 0, tx: 0, ty: 0, t: 1, dur: 1, hover: 2, phase: 3 },
];
function updateMoth(m, t, dt) {
  if (m.hover > 0) {
    m.hover -= dt;
  } else if (m.t >= 1) {
    m.tx = W * (0.1 + Math.random() * 0.8);
    m.ty = H * (0.1 + Math.random() * 0.8);
    m.fx = m.x; m.fy = m.y;
    m.dur = 0.9 + Math.random();
    m.t = 0;
  } else {
    m.t += dt / m.dur;
    const e = 1 - Math.pow(1 - Math.min(1, m.t), 3);
    m.x = m.fx + (m.tx - m.fx) * e;
    m.y = m.fy + (m.ty - m.fy) * e;
    if (m.t >= 1) m.hover = 1.5 + Math.random() * 3;
  }
  const bob = Math.sin(t * 6 + m.phase) * 3;
  const y = m.y + bob;
  const flap = Math.abs(Math.sin(t * 16 + m.phase));
  const k = Math.max(0.7, scale());

  // glow
  const halo = ctx.createRadialGradient(m.x, y, 1, m.x, y, 26 * k);
  halo.addColorStop(0, "rgba(70, 224, 177, 0.32)");
  halo.addColorStop(1, "rgba(70, 224, 177, 0)");
  ctx.fillStyle = halo;
  ctx.beginPath();
  ctx.arc(m.x, y, 26 * k, 0, Math.PI * 2);
  ctx.fill();

  // wings: two flat jade blades scaling with flap
  for (const side of [-1, 1]) {
    ctx.save();
    ctx.translate(m.x, y);
    ctx.scale(side * (0.35 + flap * 0.65), 1);
    ctx.beginPath();
    ctx.moveTo(2 * k, 0);
    ctx.quadraticCurveTo(14 * k, -10 * k, 16 * k, -2 * k);
    ctx.quadraticCurveTo(13 * k, 2 * k, 9 * k, 3 * k);
    ctx.quadraticCurveTo(12 * k, 7 * k, 7 * k, 9 * k);
    ctx.quadraticCurveTo(4 * k, 6 * k, 2 * k, 2 * k);
    ctx.closePath();
    ctx.fillStyle = "rgba(110, 235, 195, 0.85)";
    ctx.fill();
    ctx.strokeStyle = "rgba(20, 60, 48, 0.9)";
    ctx.lineWidth = 1.4;
    ctx.stroke();
    ctx.restore();
  }
  // body
  ctx.beginPath();
  ctx.ellipse(m.x, y, 1.8 * k, 5.5 * k, 0, 0, Math.PI * 2);
  ctx.fillStyle = "#dff5ea";
  ctx.fill();
}

/* ————— story panel ————— */
const panel = document.getElementById("story-panel");
const panelTitle = document.getElementById("panel-title");
const panelText = document.getElementById("panel-text");
const panelLinks = document.getElementById("panel-links");
const panelProgress = document.getElementById("panel-progress");
const eatenSet = new Set();
STORIES.forEach(() => {
  const d = document.createElement("span");
  d.className = "dot";
  panelProgress.appendChild(d);
});
let typeTimer = null, closeTimer = null;
function cancelAutoClose() { clearTimeout(closeTimer); closeTimer = null; }
panel.addEventListener("pointerenter", cancelAutoClose);
panel.addEventListener("pointerdown", cancelAutoClose);

function closePanel() {
  clearInterval(typeTimer);
  cancelAutoClose();
  panel.classList.remove("open");
}
document.getElementById("panel-close").addEventListener("click", closePanel);

function renderLinks(story) {
  panelLinks.innerHTML = "";
  for (const l of story.links) {
    const a = document.createElement("a");
    a.href = l.href; a.textContent = l.label;
    if (!l.href.startsWith("mailto:")) { a.target = "_blank"; a.rel = "noopener"; }
    panelLinks.appendChild(a);
  }
}

function openStory(story, idx) {
  eatenSet.add(idx);
  clearInterval(typeTimer);
  cancelAutoClose();
  panelTitle.textContent = story.title;
  panelLinks.innerHTML = "";
  [...panelProgress.children].forEach((d, i) => d.classList.toggle("eaten", eatenSet.has(i)));
  panel.classList.add("open");

  const finish = () => {
    panelText.textContent = story.text;
    renderLinks(story);
    closeTimer = setTimeout(closePanel, story.links.length ? 4000 : 2000);
  };

  if (REDUCED) { finish(); return; }
  panelText.innerHTML = '<span class="cursor"></span>';
  let i = 0;
  typeTimer = setInterval(() => {
    i += 2;
    if (i >= story.text.length) {
      clearInterval(typeTimer);
      finish();
      return;
    }
    panelText.innerHTML = escapeHtml(story.text.slice(0, i)) + '<span class="cursor"></span>';
  }, 16);
}
function escapeHtml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/* ————— input ————— */
canvas.addEventListener("pointerdown", (e) => {
  const r = canvas.getBoundingClientRect();
  const x = e.clientX - r.left, y = e.clientY - r.top;
  let best = null, bestD = Math.pow(Math.max(44, Math.min(W, H) * 0.06), 2);
  for (const f of foods) {
    if (f.eaten) continue;
    const d = (x - f.bx) ** 2 + (y - f.by) ** 2;
    if (d < bestD) { bestD = d; best = f; }
  }
  addRipple(x, y, best ? 0.8 : 1.1);
  if (best) {
    fish.target = best;
    fish.state = "seek";
    closePanel();
  } else {
    audio.drip();
  }
});

/* ————— ambient audio (generative) ————— */
const audio = {
  ctx: null, master: null, running: false, timers: [], lapGain: null,
  ensure() {
    if (this.ctx) return;
    this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    this.master = this.ctx.createGain();
    this.master.gain.value = 0;
    this.master.connect(this.ctx.destination);
    const len = this.ctx.sampleRate * 4;
    const buf = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const d = buf.getChannelData(0);
    let last = 0;
    for (let i = 0; i < len; i++) {
      const w = Math.random() * 2 - 1;
      last = (last + 0.02 * w) / 1.02;
      d[i] = last * 3.5;
    }
    const src = this.ctx.createBufferSource();
    src.buffer = buf; src.loop = true;
    const lp = this.ctx.createBiquadFilter();
    lp.type = "lowpass"; lp.frequency.value = 420;
    const wash = this.ctx.createGain();
    wash.gain.value = 0.14;
    const lfo = this.ctx.createOscillator();
    lfo.frequency.value = 0.07;
    const lfoG = this.ctx.createGain();
    lfoG.gain.value = 0.05;
    lfo.connect(lfoG).connect(wash.gain);
    src.connect(lp).connect(wash).connect(this.master);
    src.start(); lfo.start();

    const src2 = this.ctx.createBufferSource();
    src2.buffer = buf; src2.loop = true; src2.playbackRate.value = 0.8;
    const bp = this.ctx.createBiquadFilter();
    bp.type = "bandpass"; bp.frequency.value = 760; bp.Q.value = 1.4;
    this.lapGain = this.ctx.createGain();
    this.lapGain.gain.value = 0;
    src2.connect(bp).connect(this.lapGain).connect(this.master);
    src2.start();
  },
  scheduleLife() {
    const lap = () => {
      if (!this.running) return;
      const t = this.ctx.currentTime;
      this.lapGain.gain.cancelScheduledValues(t);
      this.lapGain.gain.setValueAtTime(this.lapGain.gain.value, t);
      this.lapGain.gain.linearRampToValueAtTime(0.028 + Math.random() * 0.02, t + 0.5 + Math.random());
      this.lapGain.gain.linearRampToValueAtTime(0.004, t + 2 + Math.random() * 1.5);
      this.timers.push(setTimeout(lap, 2200 + Math.random() * 2600));
    };
    const bird = () => {
      if (!this.running) return;
      const notes = 2 + (Math.random() * 3 | 0);
      for (let i = 0; i < notes; i++) {
        const t = this.ctx.currentTime + i * (0.16 + Math.random() * 0.08);
        const o = this.ctx.createOscillator();
        const g = this.ctx.createGain();
        const f0 = 2400 + Math.random() * 1400;
        o.frequency.setValueAtTime(f0, t);
        o.frequency.exponentialRampToValueAtTime(f0 * (1.25 + Math.random() * 0.3), t + 0.07);
        o.frequency.exponentialRampToValueAtTime(f0 * 0.9, t + 0.14);
        g.gain.setValueAtTime(0, t);
        g.gain.linearRampToValueAtTime(0.035, t + 0.02);
        g.gain.exponentialRampToValueAtTime(0.0005, t + 0.18);
        o.connect(g).connect(this.master);
        o.start(t); o.stop(t + 0.22);
      }
      this.timers.push(setTimeout(bird, 6000 + Math.random() * 11000));
    };
    const cricket = () => {
      if (!this.running) return;
      const t0 = this.ctx.currentTime;
      for (let i = 0; i < 3; i++) {
        const t = t0 + i * 0.09;
        const o = this.ctx.createOscillator();
        o.type = "triangle";
        o.frequency.value = 4300 + Math.random() * 400;
        const g = this.ctx.createGain();
        g.gain.setValueAtTime(0, t);
        g.gain.linearRampToValueAtTime(0.012, t + 0.015);
        g.gain.linearRampToValueAtTime(0, t + 0.05);
        o.connect(g).connect(this.master);
        o.start(t); o.stop(t + 0.07);
      }
      this.timers.push(setTimeout(cricket, 900 + Math.random() * 1800));
    };
    lap(); bird(); cricket();
  },
  start() {
    this.ensure();
    this.ctx.resume();
    this.running = true;
    this.master.gain.cancelScheduledValues(this.ctx.currentTime);
    this.master.gain.linearRampToValueAtTime(0.9, this.ctx.currentTime + 1.5);
    this.scheduleLife();
  },
  stop() {
    if (!this.ctx) return;
    this.running = false;
    this.timers.forEach(clearTimeout);
    this.timers = [];
    this.master.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 0.6);
  },
  plip() {
    if (!this.running) return;
    const t = this.ctx.currentTime;
    const o = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    o.frequency.setValueAtTime(680, t);
    o.frequency.exponentialRampToValueAtTime(210, t + 0.13);
    g.gain.setValueAtTime(0.12, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.16);
    o.connect(g).connect(this.master);
    o.start(t); o.stop(t + 0.2);
  },
  drip() {
    if (!this.running) return;
    const t = this.ctx.currentTime;
    const o = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    o.frequency.setValueAtTime(900, t);
    o.frequency.exponentialRampToValueAtTime(400, t + 0.07);
    g.gain.setValueAtTime(0.05, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.09);
    o.connect(g).connect(this.master);
    o.start(t); o.stop(t + 0.12);
  },
};
const soundBtn = document.getElementById("sound-toggle");
soundBtn.addEventListener("click", () => {
  const on = soundBtn.getAttribute("aria-pressed") === "true";
  if (on) { audio.stop(); soundBtn.setAttribute("aria-pressed", "false"); soundBtn.textContent = "sound"; }
  else { audio.start(); soundBtn.setAttribute("aria-pressed", "true"); soundBtn.textContent = "sound · on"; }
});

/* ————— main loop ————— */
let last = performance.now();
let loaderHidden = false;
let grainOff = 0;

function frame(now) {
  const dt = Math.min(0.05, (now - last) / 1000);
  last = now;
  const t = now / 1000;

  ctx.drawImage(staticLayer, 0, 0, W, H);

  // drifting ink water-lines
  ctx.strokeStyle = "rgba(150, 200, 180, 0.05)";
  ctx.lineWidth = 1.4;
  for (let i = 0; i < 5; i++) {
    const y = ((t * 6 + i * H / 5) % (H + 40)) - 20;
    const x0 = (i * 137) % W;
    ctx.beginPath();
    ctx.moveTo(x0 - 60, y);
    ctx.quadraticCurveTo(x0, y - 5, x0 + 60, y);
    ctx.stroke();
  }

  drawRipples(dt);
  drawFood(t);
  updateFish(dt);
  drawFish(t);
  drawBits(dt);
  for (const m of moths) updateMoth(m, t, dt);

  // occasional trail ripple
  if (!REDUCED && Math.random() < 0.02 && fish.speed > 0.5) addRipple(fish.x, fish.y, 0.5);

  // film grain (flickering offset)
  if ((grainOff = (grainOff + 1) % 4) === 0) {
    ctx.save();
    ctx.globalAlpha = 0.5;
    ctx.drawImage(grainLayer, Math.random() * -60, Math.random() * -60, W + 120, H + 120);
    ctx.restore();
  }

  if (!loaderHidden) {
    loaderHidden = true;
    setTimeout(() => document.getElementById("loader").classList.add("done"), 450);
  }
  requestAnimationFrame(frame);
}

/* ————— boot ————— */
resize();
fish.x = W / 2; fish.y = H / 2;
pickWander();
requestAnimationFrame(frame);

})();
