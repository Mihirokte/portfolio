// main.js — the room, as a vector illustration.
// One WebGL canvas fixed behind the page. The whole room sits centred on the paper. Opening a pointer flies
// the camera to the thing it points at (a pan and a zoom; the isometric angle never changes) and the
// section grows out of the pointer beside it; closing flies back out. Hovering near his head makes him
// look back. Rendering is on demand: a frame is drawn only when something moved (the look-back, the
// day/night tween, the camera, a resize).
import * as THREE from 'three';
import { buildRoom, PINS, ROOM } from './room.js';
import { lerp, clamp, easeInOut, themed, applyTheme } from './helpers.js';

const SECTIONS = ['about', 'work', 'projects', 'skills', 'contact'];
const PAPER = '#F3EEE4';
// True isometric: the camera looks down the diagonal of the room (45 degrees round) at the angle that
// makes the three axes foreshorten equally (35.264 degrees up), with no perspective at all.
const AZ = THREE.MathUtils.degToRad(45), EL = Math.atan(1 / Math.SQRT2);
const CAM_D = 400;                                    // the camera's distance from its aim: anything, in orthographic
const AIM0 = new THREE.Vector3(22, 12, 22);           // the picture plane passes through the middle of the room
// Where things sit in the window, as fractions of its width and height (x0, x1, y0, y1 from the top left).
// HOME: the whole room, centred, with a margin. FOCUS: the object a pointer opened, in the half of the
// window away from its panel. Phones: the room in the upper part, the panel is a bottom sheet.
const HOME = [0.05, 0.95, 0.09, 0.93], HOME_COMPACT = [0.04, 0.96, 0.08, 0.62];
const FOCUS_L = [0.08, 0.46, 0.12, 0.88], FOCUS_R = [0.54, 0.92, 0.12, 0.88], FOCUS_COMPACT = [0.1, 0.9, 0.1, 0.46];
const FLY = 0.8;                                      // seconds, there and back
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
  renderer.shadowMap.type = THREE.PCFShadowMap;        // hard-edged: a shadow is one flat shape
  renderer.toneMapping = THREE.NoToneMapping;          // the palette is the palette
  renderer.setClearColor(PAPER, 0);                   // transparent: the stage's dot grid shows around the room
}

const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 1, 1200);
const dirCam = new THREE.Vector3(Math.sin(AZ) * Math.cos(EL), Math.sin(EL), Math.cos(AZ) * Math.cos(EL));

// ------------------------------------------------------------------ lights ----
// (Intensities look large because three.js's Lambert term divides every light by pi.)
// Two states of one room, drawn flat. The KEY light is the illustrator's light: it never casts a shadow,
// it only decides which of the three tones each face gets (tops lightest, the faces toward the door wall
// mid, the faces toward the S wall darkest). DAY: a flat ambient, the key, and the sun through the window
// on the front wall (see WINDOW in room.js), which lays one hard window-shaped patch on the floor. NIGHT:
// ambient and key drop to a dim blue, and the room's own sources — the lamp, the line light, the red tube,
// the sign, the screens, the candle — come on as flat pools. applyTheme(t) moves every registered value.
const ambient = new THREE.AmbientLight('#FFF6EA', 0.95);
themed(ambient, 'intensity', 0.95, 0.34);
themed(ambient, 'color', new THREE.Color('#FFF6EA'), new THREE.Color('#5C6A8C'));
scene.add(ambient);
const key = new THREE.DirectionalLight('#FFFFFF', 2.0);
key.position.set(-0.5, 0.85, 0.25).multiplyScalar(100).add(new THREE.Vector3(22, 0, 22));
key.target.position.set(22, 0, 22);
themed(key, 'intensity', 2.0, 0.46);
themed(key, 'color', new THREE.Color('#FFFFFF'), new THREE.Color('#6E7A9A'));
scene.add(key, key.target);
// the sun: 25 degrees off the front wall toward the door side and 32 high, so the rays through the window
// pass over the head of the bed and lay a window-shaped patch, glazing bars and all, on the open floor
// between the two chairs; the same light is a thin moon at night
const SUN_DIR = new THREE.Vector3(-0.358, 0.530, 0.769);
const sun = new THREE.DirectionalLight('#FFF0DA', 2.8);
sun.position.copy(SUN_DIR).multiplyScalar(130).add(new THREE.Vector3(22, 0, 22));
sun.target.position.set(22, 0, 22);
sun.castShadow = true;
sun.shadow.mapSize.set(3072, 3072);
Object.assign(sun.shadow.camera, { left: -80, right: 80, top: 70, bottom: -70, near: 20, far: 320 });
sun.shadow.bias = -0.0002;
sun.shadow.normalBias = 0.04;
themed(sun, 'intensity', 2.8, 0.2);
themed(sun, 'color', new THREE.Color('#FFF0DA'), new THREE.Color('#7E94C2'));
scene.add(sun, sun.target);

// ------------------------------------------------------------------ room ----
const { pieces, figure } = GL ? await buildRoom(scene) : { pieces: {}, figure: null };
const pieceList = Object.values(pieces);
// the room's shadow on the paper: one hard shape, the slab's footprint shifted down and to the right on
// screen (toward +x and +z), the way every box in the house style carries its offset shadow
for (const p of pieceList) {
  const [x0, x1, z0, z1] = p.rect;
  const sx0 = x0 === 0 ? -2 : x0, sz0 = z0 === 0 ? -2 : z0;
  const shm = new THREE.MeshBasicMaterial({ color: '#2A2A30', transparent: true, depthWrite: false, opacity: .12 });
  themed(shm, 'opacity', .12, .5);
  themed(shm, 'color', new THREE.Color('#2A2A30'), new THREE.Color('#000000'));
  const sh = new THREE.Mesh(new THREE.PlaneGeometry(x1 - sx0, z1 - sz0), shm);
  sh.rotation.x = -Math.PI / 2;
  sh.position.set((sx0 + x1) / 2 - p.centre.x + 2.6, -ROOM.SLAB - 0.6, (sz0 + z1) / 2 - p.centre.z + 2.6);
  p.g.add(sh);
}

// ------------------------------------------------------------------ pins ----
const pinEls = (GL ? PINS : []).map((pin) => {
  const b = document.createElement('button');
  b.className = 'pin'; b.type = 'button';
  b.dataset.section = pin.section; b.dataset.side = pin.side;
  b.innerHTML = `<i></i><span class="caps">${pin.section}</span>`;
  b.setAttribute('aria-label', `open ${pin.section}`);
  b.addEventListener('click', (e) => { e.stopPropagation(); if (open === pin.section) hide(); else show(pin.section, b); });
  pinsEl.appendChild(b);
  return { el: b, pin, local: new THREE.Vector3(...pin.at), piece: pieces[pin.piece] };
});
// phones: the pointers keep their dots but lose their labels (they collide at that size), so a plain text row
// of the sections sits along the bottom edge instead; hidden on desktop, where the pointers are the navigation
const mnav = document.createElement('nav'); mnav.className = 'mnav'; mnav.setAttribute('aria-label', 'sections');
for (const s of SECTIONS) { const b = document.createElement('button'); b.type = 'button'; b.className = 'caps'; b.textContent = s; b.addEventListener('click', () => { if (open === s) hide(); else show(s, b); }); mnav.appendChild(b); }
document.body.appendChild(mnav);

// ------------------------------------------------------------------ state ----
let W = 0, H = 0, compact = false;
let open = null, origin = null, pendingHash = SECTIONS.includes(location.hash.slice(1)) ? location.hash.slice(1) : null;
let pointerIn = false, forceRender = true;
let look = 0, lookGoal = 0, closeTimer = 0, swapTimer = 0;
const px = new THREE.Vector2();
const _t = new THREE.Vector3(), _right = new THREE.Vector3(), _up = new THREE.Vector3();
// the camera's view: the picture-plane point it is centred on (cx, cy along _right and _up) and the half
// width of the picture in world units. `view` is what is drawn, `fly` the tween in progress, if any.
let view = { cx: 0, cy: 0, hw: 40 }, fly = null, home = null;

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

// the picture plane's axes never change (the camera only pans and zooms), so they are fixed once
camera.position.copy(AIM0).addScaledVector(dirCam, CAM_D);
camera.lookAt(AIM0);
camera.updateMatrixWorld();
_right.setFromMatrixColumn(camera.matrixWorld, 0);
_up.setFromMatrixColumn(camera.matrixWorld, 1);

/** Sets the camera to a view. */
function applyView(v) {
  view = v;
  const aim = AIM0.clone().addScaledVector(_right, v.cx - AIM0.dot(_right)).addScaledVector(_up, v.cy - AIM0.dot(_up));
  camera.position.copy(aim).addScaledVector(dirCam, CAM_D);
  camera.lookAt(aim);
  camera.updateMatrixWorld();
  const hh = v.hw * H / W;
  camera.left = -v.hw; camera.right = v.hw; camera.top = hh; camera.bottom = -hh;
  camera.updateProjectionMatrix();
  forceRender = true;
}

/** The extents of `points` on the picture plane (world units along _right and _up). */
function extents(points) {
  let x0 = 1e9, x1 = -1e9, y0 = 1e9, y1 = -1e9;
  for (const p of points) { const x = p.dot(_right), y = p.dot(_up); x0 = Math.min(x0, x); x1 = Math.max(x1, x); y0 = Math.min(y0, y); y1 = Math.max(y1, y); }
  return { x0, x1, y0, y1 };
}

/** The view that puts `points` inside the window rectangle `[fx0, fx1, fy0, fy1]` (fractions), centred in it. Orthographic, so it is exact. */
function fitView(points, [fx0, fx1, fy0, fy1]) {
  const { x0, x1, y0, y1 } = extents(points);
  const fw = fx1 - fx0, fh = fy1 - fy0;
  const hw = Math.max((x1 - x0) / (2 * fw), (y1 - y0) / (2 * fh) * (W / H));
  const hh = hw * H / W;
  return { cx: (x0 + x1) / 2 - ((fx0 + fx1) / 2 - 0.5) * 2 * hw, cy: (y0 + y1) / 2 + ((fy0 + fy1) / 2 - 0.5) * 2 * hh, hw };
}

const box8 = (b) => Array.from({ length: 8 }, (_, i) => new THREE.Vector3(i & 1 ? b.max.x : b.min.x, i & 2 ? b.max.y : b.min.y, i & 4 ? b.max.z : b.min.z));
// What the home view frames: the drawn outline of the room, not the bounds of its meshes (those include
// things hidden behind the walls, like the door leaf swung into the corridor, and would pull it off
// centre). The tops of the two walls, the bottom of the slab, and the hard shadow under it.
const S = ROOM.SLAB, SH = 2.6;
const OUTLINE = [[-2, ROOM.H, -2], [-2, ROOM.H, ROOM.L], [ROOM.L, ROOM.H, -2], [-2, -S, ROOM.L], [ROOM.L, -S, -2], [ROOM.L, -S, ROOM.L],
  [-2 + SH, -S - .6, ROOM.L + SH], [ROOM.L + SH, -S - .6, -2 + SH], [ROOM.L + SH, -S - .6, ROOM.L + SH]].map((v) => new THREE.Vector3(...v));
/** The eight corners of a pointer's frame box, in world space. */
function frameCorners(pin) {
  const [x0, x1, z0, z1, y0, y1] = pin.frame;
  return box8(new THREE.Box3(new THREE.Vector3(x0, y0, z0), new THREE.Vector3(x1, y1, z1)));
}
/** Where a pointer's frame box lands in the window (CSS px) under the current view. */
function frameRect(pin) {
  let x0 = 1e9, x1 = -1e9, y0 = 1e9, y1 = -1e9;
  for (const p of frameCorners(pin)) {
    _t.copy(p).project(camera);
    const x = (_t.x + 1) / 2 * W, y = (1 - _t.y) / 2 * H;
    x0 = Math.min(x0, x); x1 = Math.max(x1, x); y0 = Math.min(y0, y); y1 = Math.max(y1, y);
  }
  return { x0, x1, y0, y1 };
}
const homeView = () => fitView(OUTLINE, compact ? HOME_COMPACT : HOME);
const focusView = (pin) => fitView(frameCorners(pin), compact ? FOCUS_COMPACT : pin.panel === 'right' ? FOCUS_L : FOCUS_R);

/** Flies the camera from the current view to `to` over FLY seconds (at once if motion is reduced), then calls `then`. */
function flyTo(to, then = null) {
  if (reduced || still) { applyView(to); fly = null; then?.(); return; }
  fly = { from: { ...view }, to, t0: performance.now(), then };
}
function stepFly(now) {
  if (!fly) return;
  const k = Math.min(1, (now - fly.t0) / (FLY * 1000)), e = easeInOut(k);
  const { from, to } = fly;
  applyView({ cx: lerp(from.cx, to.cx, e), cy: lerp(from.cy, to.cy, e), hw: Math.exp(lerp(Math.log(from.hw), Math.log(to.hw), e)) });
  if (k >= 1) { const then = fly.then; fly = null; then && queueMicrotask(then); }
}

function measure() {
  W = innerWidth; H = innerHeight;
  compact = W < 820;
  document.body.classList.toggle('compact', compact);
  if (!GL) return;
  const rect = stage.getBoundingClientRect();
  H = Math.round(rect.height) || H;
  renderer.setSize(W, H, false);
  document.body.style.setProperty('--mnav-h', `${compact ? mnav.offsetHeight : 0}px`);   // the phone sheet sits above the nav
  home = homeView();
  // a resize keeps whatever is in view (the room, or the object a pointer opened) framed the same way
  const pin = open && PINS.find((p) => p.section === open);
  const target = pin ? focusView(pin) : home;
  if (fly) fly = { ...fly, from: { ...view }, to: target, t0: performance.now() }; else applyView(target);
  if (pin && root.classList.contains('open')) placeModal(pin);
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
// Opening a pointer is a visit: the other pointers step away, the camera flies to the object (pan and
// zoom, same isometric angle), and when it lands the section grows out of the pointer's dot into a note
// pinned beside the object, on the side the object leaves free. Closing shrinks the note back into the
// dot and the camera flies out to the whole room. Opening another section from the phone nav flies
// straight from one object to the next.
const pinOf = (section) => PINS.find((p) => p.section === section);
const elOf = (section) => pinEls.find((p) => p.pin.section === section)?.el || null;

/** The pointer's dot in window px under the current view. */
function dotOf(pin) {
  const pe = pinEls.find((p) => p.pin === pin);
  pe.piece.inner.localToWorld(_t.copy(pe.local)).project(camera);
  return { x: (_t.x + 1) / 2 * W, y: (1 - _t.y) / 2 * H };
}

/** Puts the note beside the object in view and sets its growth origin to the pointer's dot. */
function placeModal(pin) {
  const a = dotOf(pin);
  if (!compact) {
    const r = frameRect(pin), mw = modal.offsetWidth, mh = modal.offsetHeight, m = 24, gap = 40;
    const left = pin.panel === 'right' ? r.x1 + gap : r.x0 - gap - mw;
    modal.style.left = `${Math.round(clamp(left, m, Math.max(m, W - mw - m)))}px`;
    modal.style.top = `${Math.round(clamp((r.y0 + r.y1) / 2 - mh / 2, m, Math.max(m, H - mh - m)))}px`;
  } else { modal.style.left = modal.style.top = ''; }
  modal.style.transformOrigin = `${(a.x - modal.offsetLeft).toFixed(1)}px ${(a.y - modal.offsetTop).toFixed(1)}px`;
}

/** Grows the note for the open section (the camera has landed). */
function reveal() {
  const pin = pinOf(open);
  if (!pin) return;
  clearTimeout(closeTimer);
  root.hidden = false;
  root.classList.remove('closing');
  modal.style.transition = 'none';                     // jump to the start state, no slide from the previous spot
  placeModal(pin);
  void modal.offsetWidth;                              // flush the start state before the transition is re-armed
  modal.style.transition = '';
  requestAnimationFrame(() => root.classList.add('open'));
  modal.focus({ preventScroll: true });
}

/** Shrinks the note back into its dot. */
function conceal() {
  root.classList.remove('open');
  root.classList.add('closing');
  clearTimeout(closeTimer);
  closeTimer = setTimeout(() => { root.hidden = true; root.classList.remove('closing'); }, still ? 0 : 340);
}

function show(section, from) {
  if (!SECTIONS.includes(section) || open === section) return;
  const pin = pinOf(section);
  if (!pin) return;
  const was = open;
  if (was) { conceal(); elOf(was)?.classList.remove('into'); }
  open = section;
  origin = from || elOf(section);
  const sec = sections.find((x) => x.dataset.panel === section);
  sections.forEach((x) => x.classList.toggle('on', x === sec));
  mTitle.textContent = sec.dataset.title;
  mScroll.scrollTop = 0;
  elOf(section)?.classList.add('into');
  pinEls.forEach(({ el }) => el.toggleAttribute('aria-current', el.dataset.section === section));
  mnav.querySelectorAll('button').forEach((b) => b.toggleAttribute('aria-current', b.textContent === section));
  document.body.classList.add('modal-open');
  history.replaceState(null, '', '#' + section);
  // let a closing note finish shrinking before the camera moves on
  clearTimeout(swapTimer);
  swapTimer = setTimeout(() => flyTo(focusView(pin), () => { if (open === section) reveal(); }), was && !still ? 260 : 0);
}

function hide() {
  if (!open) return;
  const was = open;
  open = null;
  clearTimeout(swapTimer);
  conceal();
  const from = origin;
  origin = null;
  elOf(was)?.classList.remove('into');
  pinEls.forEach(({ el }) => el.removeAttribute('aria-current'));
  mnav.querySelectorAll('button').forEach((b) => b.removeAttribute('aria-current'));
  document.body.classList.remove('modal-open');
  history.replaceState(null, '', location.pathname + location.search);
  setTimeout(() => flyTo(home), still ? 0 : 180);
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
// a click anywhere on the room (not on the chrome or a pointer) ends a visit and flies back out
stage.addEventListener('click', (e) => { if (open && !e.target.closest('.chrome, .pin')) hide(); });

// ------------------------------------------------------------------ loop ----
let last = performance.now();
function frame(t) {
  if (!GL) return;
  requestAnimationFrame(frame);
  const dt = Math.min(0.05, (t - last) / 1000); last = t;
  stepFly(t);
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
