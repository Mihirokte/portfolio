// main.js — the room, in 3D.
// One WebGL canvas fixed behind the page. The room fills the window (the slab, the bed's front and the
// ground shadow overflow out of the bottom). Pointers anchored to the geometry grow into in-place modals;
// hovering near his head makes him look back. Rendering is on demand: a frame is drawn only when
// something moved (the look-back, the day/night tween, a resize).
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { buildRoom, PINS, ROOM } from './room.js';
import { lerp, clamp, easeInOut, canvasTex, themed, applyTheme } from './helpers.js';

const SECTIONS = ['about', 'work', 'projects', 'skills', 'contact'];
const PAPER = '#F3EEE4';
const FRAME = 16 / 9;                                 // the room is composed inside a 16:9 frame
const FOV = 20;
const AZ = THREE.MathUtils.degToRad(43), EL = THREE.MathUtils.degToRad(26);
// The window shows the room itself: the two wall ends span the width, the wall tops sit just under the top
// edge, and whatever is below (the bed's front, the slab, the ground shadow) overflows out of the bottom.
// Walls are 2 units thick, so the outer wall faces are at -2.
const ROOM_FRAME = [[-2, 0, 44], [-2, 32, 44], [44, 0, -2], [44, 32, -2], [-2, 32, -2], [0, 32, 0], [44, 0, 44], [0, 0, 0]].map((v) => new THREE.Vector3(...v));
const SIDE_MARGIN = 0.012;                            // fraction of the width kept clear at each side
const TOP_MARGIN = 0.04;                              // fraction of the height kept above the wall tops
const MAX_OVERFLOW = 1.42;                            // the room may be this many viewport heights tall before we stop zooming in
const PIN_EDGE = 150;                                 // a label this close to a side edge flips to the other side
const LOOK_RADIUS = 0.09;                             // fraction of the height: the pointer this close to his head makes him look back
const LOOK_YAW = -2.0, LOOK_TWIST = -0.42;            // head yaw and torso twist (radians) when he looks back over his right shoulder

const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const q = new URLSearchParams(location.search);
const still = q.has('still');                               // screenshots: no fade-in, no loader hold
const pinnedLook = q.has('look') ? clamp(+q.get('look')) : null;   // ?look=1 pins the look-back (screenshots)
if (still) document.body.classList.add('still');

const $ = (id) => document.getElementById(id);
const stage = $('stage');
const canvas = $('view');
const pinsEl = $('pins');
const centre = stage.querySelector('.centre');
const loader = $('loader');
const root = $('modal-root');
const modal = $('modal');
const mTitle = $('modal-title');
const mIco = $('modal-ico');
const mScroll = $('modal-scroll');
const sections = [...modal.querySelectorAll('section')];

// the canvas textures set type in the site's pixel faces: have them before the room is drawn
await Promise.race([
  Promise.all(["16px 'Pixel Operator'", "bold 16px 'Pixel Operator'", '12px Determination', '24px Pixelta'].map((f) => document.fonts.load(f))),
  new Promise((r) => setTimeout(r, 1500)),
]);

// ------------------------------------------------------------------ renderer ----
let loaderDone = false;
let renderer = null;
try { renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' }); } catch (err) { console.warn('WebGL unavailable, falling back to the text layout', err); }
const GL = !!renderer;
if (!GL) {
  document.body.classList.add('nogl', 'ready');
  const nav = document.createElement('p'); nav.className = 'caps nogl-nav';
  for (const s of SECTIONS) { const b = document.createElement('button'); b.type = 'button'; b.textContent = s; b.addEventListener('click', () => show(s, b)); nav.appendChild(b); }
  centre.appendChild(nav);
  dismissLoader();
}
if (GL) {
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.setClearColor(PAPER, 0);                   // transparent: the stage's dot grid shows around the room
}

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(FOV, 1, 1, 1200);
const dirCam = new THREE.Vector3(Math.sin(AZ) * Math.cos(EL), Math.sin(EL), Math.cos(AZ) * Math.cos(EL));

// ------------------------------------------------------------------ lights ----
// Two states of one room. DAY: the sun comes in through the window on the front wall (the wall the camera
// looks through — see WINDOW in room.js), so the floor and the door wall carry a window-shaped patch of
// light and everything else is lit by sky and bounce; every light in the room is switched off and is just
// the pale object it is made of. NIGHT: the sun is a thin blue moon through the same window, the sky is
// near black, and the room's own sources — the lamp, the line light, the red tube, the sign, the screens,
// the candle — are what you see by. No painted light anywhere: every pool on a surface comes from a light
// that is really there, in physical units with inverse-square falloff. applyTheme(t) moves every
// registered value between the two readings.
if (GL) {
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  pmrem.dispose();
  themed(scene, 'environmentIntensity', 0.14, 0.08);         // reflections and the soft ambient they bring
  themed(renderer, 'toneMappingExposure', 1.0, 0.92);
}
const sky = new THREE.HemisphereLight('#E4ECF5', '#C9BBA6', 0.72);
themed(sky, 'intensity', 0.72, 0.16);
themed(sky, 'color', new THREE.Color('#E4ECF5'), new THREE.Color('#2A3650'));
themed(sky, 'groundColor', new THREE.Color('#C9BBA6'), new THREE.Color('#15120F'));
scene.add(sky);
// the sun: 25 degrees off the front wall toward the door side and 32 high, so the rays through the window
// pass over the head of the bed and lay a window-shaped patch, glazing bars and all, on the open floor
// between the two chairs; the same light is the moon at night
const SUN_DIR = new THREE.Vector3(-0.358, 0.530, 0.769);
const sun = new THREE.DirectionalLight('#FFF0DA', 6.0);
sun.position.copy(SUN_DIR).multiplyScalar(130).add(new THREE.Vector3(22, 0, 22));
sun.target.position.set(22, 0, 22);
sun.castShadow = true;
sun.shadow.mapSize.set(3072, 3072);
Object.assign(sun.shadow.camera, { left: -80, right: 80, top: 70, bottom: -70, near: 20, far: 320 });
sun.shadow.bias = -0.0002;
sun.shadow.normalBias = 0.04;
sun.shadow.radius = 2;
themed(sun, 'intensity', 6.0, 0.3);
themed(sun, 'color', new THREE.Color('#FFF0DA'), new THREE.Color('#7E94C2'));
scene.add(sun, sun.target);
// bounce: daylight from the window side, low and soft, the way the sunlit wall and floor throw it back
const fill = new THREE.DirectionalLight('#FFE6CE', 0.22);
fill.position.set(22 + 80, 24, 22 + 50);
themed(fill, 'intensity', 0.22, 0);
scene.add(fill);

// ------------------------------------------------------------------ room ----
const { pieces, figure } = GL ? await buildRoom(scene) : { pieces: {}, figure: null };
const pieceList = Object.values(pieces);
const contactTex = canvasTex(256, 256, (ctx, w, h) => {
  const g = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w / 2);
  g.addColorStop(0, 'rgba(40,30,20,.55)'); g.addColorStop(.6, 'rgba(40,30,20,.18)'); g.addColorStop(1, 'rgba(40,30,20,0)');
  ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
}, { q: 1 });
for (const p of pieceList) {
  const [x0, x1, z0, z1] = p.rect;
  // the soft shadow on the paper under the room (the darkening under a thing standing on a table)
  const shm = new THREE.MeshBasicMaterial({ map: contactTex, transparent: true, depthWrite: false, opacity: .5 });
  themed(shm, 'opacity', .5, .12);
  const sh = new THREE.Mesh(new THREE.PlaneGeometry((x1 - x0) * 1.5 + 8, (z1 - z0) * 1.5 + 8), shm);
  sh.rotation.x = -Math.PI / 2;
  sh.position.set((x0 + x1) / 2 - p.centre.x - 2, -ROOM.SLAB - 1.2, (z0 + z1) / 2 - p.centre.z - 2);
  p.g.add(sh);
}

// ------------------------------------------------------------------ pins ----
const pinEls = (GL ? PINS : []).map((pin) => {
  const b = document.createElement('button');
  b.className = 'pin'; b.type = 'button';
  b.dataset.section = pin.section; b.dataset.side = pin.side;
  b.innerHTML = `<i></i><span class="caps">${pin.section}</span>`;
  b.setAttribute('aria-label', `open ${pin.section}`);
  b.addEventListener('click', (e) => { e.stopPropagation(); open === pin.section ? hide() : show(pin.section, b); });
  pinsEl.appendChild(b);
  return { el: b, pin, local: new THREE.Vector3(...pin.at), piece: pieces[pin.piece] };
});
// phones: the pointers keep their dots but lose their labels (they collide at that size), so a plain text row
// of the sections sits along the bottom edge instead; hidden on desktop, where the pointers are the navigation
const mnav = document.createElement('nav'); mnav.className = 'mnav'; mnav.setAttribute('aria-label', 'sections');
for (const s of SECTIONS) { const b = document.createElement('button'); b.type = 'button'; b.className = 'caps'; b.textContent = s; b.addEventListener('click', () => open === s ? hide() : show(s, b)); mnav.appendChild(b); }
document.body.appendChild(mnav);

// ------------------------------------------------------------------ state ----
let W = 0, H = 0, compact = false;
let open = null, origin = null, pendingHash = SECTIONS.includes(location.hash.slice(1)) ? location.hash.slice(1) : null;
let pointerIn = false, forceRender = true;
let look = 0, lookGoal = 0, closeTimer = 0, swapTimer = 0;
const px = new THREE.Vector2();
const _t = new THREE.Vector3(), _right = new THREE.Vector3(), _up = new THREE.Vector3();

// theme: 0 = day, 1 = night. Night is the default; the choice is kept in localStorage (the inline script in
// the head applies it before first paint) and the scene tweens between the two readings in the loop.
const themeBtn = $('theme');
const pinnedTheme = q.has('theme') ? (q.get('theme') === 'day' ? 0 : 1) : null;             // ?theme=day pins it (screenshots)
let night = pinnedTheme ?? (document.documentElement.dataset.theme === 'day' ? 0 : 1);
let theme = night;
function setTheme(n, persist = true) {
  night = n;
  document.documentElement.dataset.theme = n ? 'night' : 'day';
  themeBtn.querySelector('span').textContent = n ? 'night' : 'day';
  themeBtn.setAttribute('aria-label', n ? 'switch to day' : 'switch to night');
  if (persist) try { localStorage.setItem('theme', n ? 'night' : 'day'); } catch { /* private mode: the choice just does not stick */ }
}
setTheme(night, false);
themeBtn.addEventListener('click', () => setTheme(night ? 0 : 1));
applyTheme(theme);

function aimCamera(aim, d) {
  camera.position.copy(aim).addScaledVector(dirCam, d);
  camera.lookAt(aim);
  camera.updateMatrixWorld();
}

function extents(points) {
  let x0 = 1e9, x1 = -1e9, y0 = 1e9, y1 = -1e9;
  for (const p of points) { _t.copy(p).project(camera); x0 = Math.min(x0, _t.x); x1 = Math.max(x1, _t.x); y0 = Math.min(y0, _t.y); y1 = Math.max(y1, _t.y); }
  return { x0, x1, y0, y1 };
}

/** CONTAIN: camera distance + aim so that `points` fill `margin` of a frame (default 16:9) centred in the viewport (fov fixed). */
function fit(points, margin, frame = FRAME) {
  camera.fov = FOV; camera.aspect = W / H; camera.updateProjectionMatrix();
  const fw = Math.min(W, H * frame), fh = fw / frame;             // the artwork's frame, in CSS px
  const aim = new THREE.Vector3(22, 12, 22);
  let d = 260;
  for (let it = 0; it < 6; it++) {
    aimCamera(aim, d);
    const { x0, x1, y0, y1 } = extents(points);
    const halfH = d * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
    _right.setFromMatrixColumn(camera.matrixWorld, 0);
    _up.setFromMatrixColumn(camera.matrixWorld, 1);
    aim.addScaledVector(_right, (x0 + x1) / 2 * halfH * camera.aspect).addScaledVector(_up, (y0 + y1) / 2 * halfH);
    d *= Math.max(((x1 - x0) / 2) / (margin * fw / W), ((y1 - y0) / 2) / (margin * fh / H));
  }
  return { d, aim, fov: camera.fov };
}

/**
 * COVER: the room fills the window. The camera stays at distance `d` (the same perspective as the contain
 * fit) and the lens zooms: the wall ends span the width, the wall tops sit under the top edge, and the room
 * may run up to MAX_OVERFLOW viewport heights tall before the zoom stops (ultra-wide windows).
 */
function fitRoom(d) {
  camera.fov = FOV; camera.aspect = W / H; camera.updateProjectionMatrix();
  const aim = new THREE.Vector3(22, 12, 22);
  const yTop = 1 - 2 * TOP_MARGIN;
  for (let it = 0; it < 8; it++) {
    aimCamera(aim, d);
    const { x0, x1, y0, y1 } = extents(ROOM_FRAME);
    const halfH = d * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
    _right.setFromMatrixColumn(camera.matrixWorld, 0);
    _up.setFromMatrixColumn(camera.matrixWorld, 1);
    const k = Math.max(((x1 - x0) / 2) / (1 - 2 * SIDE_MARGIN), ((y1 - y0) / 2) / MAX_OVERFLOW);
    aim.addScaledVector(_right, (x0 + x1) / 2 * halfH * camera.aspect).addScaledVector(_up, (y1 - yTop * k) * halfH);
    camera.fov = 2 * THREE.MathUtils.radToDeg(Math.atan(Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * k));
    camera.updateProjectionMatrix();
  }
  return { d, aim, fov: camera.fov };
}

/** The eight corners of every piece's bounds: what the contain fit frames. */
function corners() {
  const pts = [];
  for (const p of pieceList) {
    const b = p.box0;
    for (let i = 0; i < 8; i++) pts.push(new THREE.Vector3(i & 1 ? b.max.x : b.min.x, i & 2 ? b.max.y : b.min.y, i & 4 ? b.max.z : b.min.z));
  }
  return pts;
}

function measure() {
  W = innerWidth; H = innerHeight;
  compact = W < 820;
  document.body.classList.toggle('compact', compact);
  if (!GL) return;
  const rect = stage.getBoundingClientRect();
  H = Math.round(rect.height) || H;
  renderer.setSize(W, H, false);
  camera.clearViewOffset();
  // phones: the whole room contained in the upper part of the screen; desktop: the room fills the window
  const f = compact ? fit(corners(), 0.94, W / (H * 0.62)) : fitRoom(fit(corners(), 0.88).d);
  camera.fov = f.fov;
  camera.aspect = W / H;
  camera.updateProjectionMatrix();
  aimCamera(f.aim, f.d);
  forceRender = true;
}

function placePins() {
  for (const { el, pin, local, piece } of pinEls) {
    piece.inner.localToWorld(_t.copy(local)).project(camera);
    const x = (_t.x + 1) / 2 * W, y = (1 - _t.y) / 2 * H;
    // a label that would run off a window edge sits on the other side of its pointer
    let side = pin.side;
    if (side === 'left' && x < PIN_EDGE) side = 'right';
    else if (side === 'right' && x > W - PIN_EDGE) side = 'left';
    else if (side === 'top' && y < 70) side = 'bottom';
    else if (side === 'bottom' && y > H - 80) side = 'top';
    if (el.dataset.side !== side) el.dataset.side = side;
    el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
    el.style.opacity = _t.z < 1 ? '' : '0';
  }
}

/** He looks back over his shoulder when the pointer comes near his head, and for as long as About is open. */
function aimLook() {
  if (!figure) return;
  if (pinnedLook !== null) { lookGoal = pinnedLook; return; }
  if (open === 'about') { lookGoal = 1; return; }
  if (!pointerIn || open) { lookGoal = 0; return; }
  pieces.battle.inner.localToWorld(_t.copy(figure.at)).project(camera);
  const hx = (_t.x + 1) / 2 * W, hy = (1 - _t.y) / 2 * H;
  lookGoal = Math.hypot(px.x - hx, px.y - hy) < LOOK_RADIUS * H ? 1 : 0;
}

/** The look-back: the head turns, the torso twists a little with it, and the arms re-solve so the hands stay on the keys. */
function poseLook(e) {
  figure.head.rotation.set(0.1 * e, LOOK_YAW * e, -0.05 * e);
  figure.torso.rotation.y = LOOK_TWIST * e;
  figure.solveArms();
}

// ------------------------------------------------------------------ modal ----
// The modal grows out of the pointer that opened it: its transform origin is the pointer's dot, so the
// pointer visibly becomes the box. Closing shrinks it back into the same point.
function anchorOf(el) {
  const r = (el.querySelector('i') || el).getBoundingClientRect();
  return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
}

function show(section, from) {
  if (!SECTIONS.includes(section) || open === section) return;
  if (open) {                                          // swap: shrink into the old origin, then grow from the new one
    hide();
    clearTimeout(swapTimer);
    swapTimer = setTimeout(() => show(section, from), still ? 0 : 320);
    return;
  }
  open = section;
  origin = from || pinEls.find((p) => p.pin.section === section)?.el || null;
  const sec = sections.find((s) => s.dataset.panel === section);
  sections.forEach((s) => s.classList.toggle('on', s === sec));
  mTitle.textContent = sec.dataset.title;
  mIco.style.setProperty('--i', sec.dataset.ico);
  mScroll.scrollTop = 0;

  clearTimeout(closeTimer);
  root.hidden = false;
  root.classList.remove('closing');
  modal.style.transition = 'none';                     // jump to the start state, no slide from the previous spot
  const a = origin ? anchorOf(origin) : { x: W / 2, y: H / 2 };
  if (!compact) {
    // beside the pointer, not over it: the thing it points at (and he, looking back) stays in view
    const mw = modal.offsetWidth, mh = modal.offsetHeight, m = 20, gap = 56;
    const left = a.x + gap + mw <= W - m ? a.x + gap : a.x - gap - mw >= m ? a.x - gap - mw : a.x - mw / 2;
    modal.style.left = `${Math.round(clamp(left, m, Math.max(m, W - mw - m)))}px`;
    modal.style.top = `${Math.round(clamp(a.y - mh / 2, m, Math.max(m, H - mh - m)))}px`;
  } else { modal.style.left = modal.style.top = ''; }
  modal.style.transformOrigin = `${(a.x - modal.offsetLeft).toFixed(1)}px ${(a.y - modal.offsetTop).toFixed(1)}px`;
  void modal.offsetWidth;                              // flush the start state before the transition is re-armed
  modal.style.transition = '';
  requestAnimationFrame(() => root.classList.add('open'));

  if (origin?.classList.contains('pin')) origin.classList.add('into');
  pinEls.forEach(({ el }) => el.toggleAttribute('aria-current', el.dataset.section === section));
  mnav.querySelectorAll('button').forEach((b) => b.toggleAttribute('aria-current', b.textContent === section));
  document.body.classList.add('modal-open');
  history.replaceState(null, '', '#' + section);
  modal.focus({ preventScroll: true });
}

function hide() {
  if (!open) return;
  open = null;
  root.classList.remove('open');
  root.classList.add('closing');
  clearTimeout(closeTimer);
  closeTimer = setTimeout(() => { root.hidden = true; root.classList.remove('closing'); }, still ? 0 : 380);
  const from = origin;
  origin = null;
  from?.classList.remove('into');
  pinEls.forEach(({ el }) => el.removeAttribute('aria-current'));
  mnav.querySelectorAll('button').forEach((b) => b.removeAttribute('aria-current'));
  document.body.classList.remove('modal-open');
  history.replaceState(null, '', location.pathname + location.search);
  from?.focus?.({ preventScroll: true });
}

// ------------------------------------------------------------------ chrome ----
const clockFmt = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', hour12: false });
function tick() { $('clock-time').textContent = clockFmt.format(new Date()); }
tick(); setInterval(tick, 15000);

/** The loader stays up until the fonts are in and the room has drawn its first frame, then fades. */
function dismissLoader() {
  if (loaderDone) return;
  loaderDone = true;
  const hold = still ? 0 : Math.max(0, 400 - performance.now());     // no flash on a fast load
  setTimeout(() => {
    loader.classList.add('out');
    if (still) loader.classList.add('gone');
    else { loader.addEventListener('transitionend', () => loader.classList.add('gone'), { once: true }); setTimeout(() => loader.classList.add('gone'), 900); }
  }, hold);
}

root.querySelectorAll('[data-close]').forEach((el) => el.addEventListener('click', hide));
$('mark').addEventListener('click', (e) => { e.preventDefault(); hide(); });
addEventListener('keydown', (e) => { if (e.key === 'Escape') hide(); });
addEventListener('resize', measure);
stage.addEventListener('pointermove', (e) => {
  const r = canvas.getBoundingClientRect();
  px.set(e.clientX - r.left, e.clientY - r.top);
  pointerIn = true;
});
stage.addEventListener('pointerleave', () => { pointerIn = false; });

// ------------------------------------------------------------------ loop ----
let last = performance.now();
function frame(t) {
  if (!GL) return;
  requestAnimationFrame(frame);
  const dt = Math.min(0.05, (t - last) / 1000); last = t;
  let dirty = forceRender;
  // the look back: a slow ease out and back (about 0.7 s), never a snap
  aimLook();
  if (figure && look !== lookGoal) {
    look = reduced ? lookGoal : Math.abs(lookGoal - look) < 0.002 ? lookGoal : lerp(look, lookGoal, 1 - Math.pow(1 - 0.065, dt * 60));
    poseLook(easeInOut(look));
    dirty = true;
  }
  // day to night and back: every light, emitter and halo moves together over about half a second
  if (theme !== night) {
    theme = reduced ? night : Math.abs(night - theme) < 0.003 ? night : lerp(theme, night, 1 - Math.pow(1 - 0.1, dt * 60));
    applyTheme(easeInOut(theme));
    dirty = true;
  }
  if (dirty) {
    forceRender = false;
    renderer.render(scene, camera);
    placePins();
    if (!document.body.classList.contains('ready')) { document.body.classList.add('ready'); dismissLoader(); }
    if (pendingHash) { const s = pendingHash; pendingHash = null; show(s); }
  }
}

measure();
if (pinnedLook !== null && figure) { look = pinnedLook; poseLook(easeInOut(look)); }
// compile every program before the first frame (in parallel where the driver allows) instead of stalling
// the first render for seconds; the loader keeps animating meanwhile
if (GL) { try { await renderer.compileAsync(scene, camera); } catch (err) { console.warn('shader precompile skipped', err); } }
frame(performance.now());                                       // the first frame now; the loop schedules the rest
