// main.js — the room, as a vector illustration, and the things in it you can use.
// One WebGL canvas fixed behind the page, and over it the screens. At home the
// whole room sits centred on the paper, seen from far off down a long lens (so it reads as isometric) and
// leaning a little with the pointer. Every section lives on a real surface in the room: the journal, the
// work laptop, the MacBook, the monitor, the phone. Opening one flies the camera across the room until that
// surface faces you and fills the view at exactly one CSS pixel per screen pixel; then the interface on it
// boots and you use it where it is. (Square on and 1:1, the surface needs no 3D transform: its interface is
// laid flat over the exact pixels the surface covers, so it is crisp and takes every click.) Leaving flies
// back out, or straight on to the next thing.
// Rendering is on demand: a frame is drawn only when something moved.
import * as THREE from 'three';
import { buildRoom, PINS, ROOM, SCREENS } from './room.js';
import { lerp, clamp, easeInOut, themed, applyTheme } from './helpers.js';
import { initScreens, SECTIONS } from './screens.js';

const PAPER = '#F3EEE4';
// Home: the camera looks down the diagonal of the room (45 degrees round, 35.26 up: the isometric angle)
// through a long lens from far away, so lines stay near parallel. At a surface the lens widens, so the
// flight in reads as moving through the room, not as a zoom.
const AZ = THREE.MathUtils.degToRad(45), EL = Math.atan(1 / Math.SQRT2);
const FOV_HOME = 12, FOV_NEAR = 36;
const AIM0 = new THREE.Vector3(22, 12, 22);
// where things sit in the window, as fractions of its width and height (x0, x1, y0, y1 from the top left)
const HOME = [0.05, 0.95, 0.09, 0.93], HOME_COMPACT = [0.04, 0.96, 0.08, 0.62];
// a surface at a visit: the largest it can be inside this share of the window, centred at this height
const AT = { w: 0.8, h: 0.74, y: 0.47 }, AT_COMPACT = { w: 0.94, h: 0.7, y: 0.45 };
const FLY_IN = 2.1, FLY_OUT = 1.6, FLY_ACROSS = 1.7;       // seconds
const LEAN = { yaw: 0.05, pitch: 0.028 };              // how far the room leans with the pointer at home (radians)
const PIN_EDGE = 150;                                  // a label this close to a side edge flips to the other side
const LOOK_RADIUS = 0.09;                              // fraction of the height: the pointer this close to his head makes him look back
const LOOK_YAW = -2.0, LOOK_TWIST = -0.42;             // head yaw and torso twist (radians) when he looks back over his right shoulder

const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const q = new URLSearchParams(location.search);
const still = q.has('still');                               // screenshots: no fade-in, no loader hold, no flights
const scrub = import.meta.env.DEV && q.has('scrub');                             // tests: a flight holds still until window.__scrub(k) sets how far along it is
const pinnedLook = q.has('look') ? clamp(+q.get('look')) : null;   // ?look=1 pins the look-back (screenshots)
if (still) document.body.classList.add('still');

const $ = (id) => document.getElementById(id);
const stage = $('stage');
const canvas = $('view');
const pinsEl = $('pins');
const loader = $('loader');
const nav = $('nav');

// the canvas textures set type in the site's face: have it before the room is drawn
await Promise.race([
  Promise.all(['400 16px Inter', '600 16px Inter'].map((f) => document.fonts.load(f))),
  new Promise((r) => setTimeout(r, 1500)),
]);

// ------------------------------------------------------------------ chrome ----
const clockFmt = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', hour12: false });
const clock = () => clockFmt.format(new Date());

// theme: 0 = day, 1 = night. Night is the default; the choice is kept in localStorage (the inline script in
// the head applies it before first paint) and the scene tweens between the two readings in the loop.
const themeBtn = $('theme');
const pinnedTheme = q.has('theme') ? (q.get('theme') === 'day' ? 0 : 1) : null;             // ?theme=day pins it (screenshots)
let night = pinnedTheme ?? (document.documentElement.dataset.theme === 'day' ? 0 : 1);
let theme = night;
function setTheme(n, persist = true) {
  night = n;
  document.documentElement.dataset.theme = n ? 'night' : 'day';
  themeBtn.querySelector('span').textContent = n ? 'Night' : 'Day';
  themeBtn.setAttribute('aria-label', n ? 'switch to day' : 'switch to night');
  if (persist) try { localStorage.setItem('theme', n ? 'night' : 'day'); } catch { /* private mode: the choice just does not stick */ }
}
setTheme(night, false);
themeBtn.addEventListener('click', () => setTheme(night ? 0 : 1));

const screens = initScreens({ go: (s) => (s === 'room' ? leave() : visit(s)), theme: (t) => setTheme(t === 'night' ? 1 : 0), clock });

// ------------------------------------------------------------------ renderer ----
let loaderDone = false;
let renderer = null;
try { renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, stencil: true, powerPreference: 'high-performance' }); } catch (err) { console.warn('WebGL unavailable, falling back to the screens as a page', err); }
const GL = !!renderer;
if (!GL) {
  // no room to fly through: every screen is laid out as a page, one after another
  document.body.classList.add('nogl', 'ready');
  screens.bootAll();
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
const camera = new THREE.PerspectiveCamera(FOV_HOME, 1, 1, 2000);
const dirHome = new THREE.Vector3(Math.sin(AZ) * Math.cos(EL), Math.sin(EL), Math.cos(AZ) * Math.cos(EL));

// ------------------------------------------------------------------ lights ----
// (Intensities look large because three.js's Lambert term divides every light by pi.)
// Two states of one room, drawn flat. The KEY light is the illustrator's light: it never casts a shadow,
// it only decides which of the three tones each face gets (tops lightest, the faces toward the door wall
// mid, the faces toward the S wall darkest). DAY: a flat ambient, the key, and the sun through the window
// on the front wall (see WINDOW in room.js), which lays one hard window-shaped patch on the floor. NIGHT:
// ambient and key drop to a dim blue, and the room's own sources come on as flat pools.
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
// lay a window-shaped patch on the open floor between the two chairs; the same light is a thin moon at night
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
// ------------------------------------------------------------------ the block ----
// My room is one cell of a much larger block of rooms: the cells all round it (beside, above, below,
// behind and in front) are drawn as their edges only, fading out with distance, and mine is the one cut
// open. Each cell is a room's footprint wall to wall (46 x 46) by slab to wall top (37). The lines are
// kept off my room exactly, whatever the camera does, by a stencil: the room's cell box is drawn first,
// invisibly, marking its outline on screen, and lines are drawn only outside that mark. Inside the room
// (on a visit) the mark covers the whole window, so the block disappears.
const CELL = { x: -2, y: -ROOM.SLAB, z: -2, w: ROOM.L + 2, h: ROOM.H + ROOM.SLAB };
const BLOCK = { r: 5, up: 3, down: 3, fade: 3.8, alpha: .34 };
const lattice = (() => {
  const pos = [], col = [];
  const { x: X0, y: Y0, z: Z0, w: P, h: Q } = CELL;
  for (let i = -BLOCK.r; i <= BLOCK.r; i++) for (let j = -BLOCK.down; j <= BLOCK.up; j++) for (let k = -BLOCK.r; k <= BLOCK.r; k++) {
    const x = X0 + i * P, y = Y0 + j * Q, z = Z0 + k * P;
    const d = Math.hypot(i, j * 1.15, k);
    const a = BLOCK.alpha * Math.pow(Math.max(0, 1 - d / BLOCK.fade), 1.4);
    if (a < .01) continue;
    for (const [dx, dy, dz] of [[P, 0, 0], [0, Q, 0], [0, 0, P]]) {
      pos.push(x, y, z, x + dx, y + dy, z + dz);
      // the far end of each edge is a step further out, so lines fade along their length too
      const d2 = Math.hypot(i + dx / P, (j + dy / Q) * 1.15, k + dz / P);
      const a2 = BLOCK.alpha * Math.pow(Math.max(0, 1 - d2 / BLOCK.fade), 1.4);
      col.push(1, 1, 1, a, 1, 1, 1, Math.max(a2, a * .35));
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute('color', new THREE.Float32BufferAttribute(col, 4));
  const m = new THREE.LineBasicMaterial({
    vertexColors: true, transparent: true, depthWrite: false,
    stencilWrite: true, stencilRef: 1, stencilFunc: THREE.NotEqualStencilFunc, stencilFail: THREE.KeepStencilOp, stencilZFail: THREE.KeepStencilOp, stencilZPass: THREE.KeepStencilOp,
  });
  themed(m, 'color', new THREE.Color('#1D1D21'), new THREE.Color('#B4B0A8'));
  const lines = new THREE.LineSegments(geo, m);
  lines.renderOrder = 10; lines.frustumCulled = false;
  // the mark: my room's cell, a hair larger, drawn into the stencil only
  const mark = new THREE.Mesh(new THREE.BoxGeometry(P + .6, Q + .6, P + .6), new THREE.MeshBasicMaterial({
    colorWrite: false, depthWrite: false, depthTest: false, side: THREE.DoubleSide,
    stencilWrite: true, stencilRef: 1, stencilFunc: THREE.AlwaysStencilFunc, stencilZPass: THREE.ReplaceStencilOp,
  }));
  mark.position.set(X0 + P / 2, Y0 + Q / 2, Z0 + P / 2);
  mark.renderOrder = -10;
  return { lines, mark, segments: pos.length / 6 };
})();
if (GL) scene.add(lattice.mark, lattice.lines);
applyTheme(theme);

// ------------------------------------------------------------------ surfaces ----
// Each section's surface, measured once: its centre, which way is right, up and out, and its size, all in
// world space, and the interface that lives on it.
const SURF = {};
if (GL) {
  scene.updateMatrixWorld(true);
  for (const s of SECTIONS) {
    const mesh = SCREENS[s];
    const pos = new THREE.Vector3(), quat = new THREE.Quaternion(), scl = new THREE.Vector3();
    mesh.matrixWorld.decompose(pos, quat, scl);
    const { width, height } = mesh.geometry.parameters;
    const n = new THREE.Vector3(0, 0, 1).applyQuaternion(quat);
    const surf = {
      section: s, mesh, centre: pos, quat,
      right: new THREE.Vector3(1, 0, 0).applyQuaternion(quat), up: new THREE.Vector3(0, 1, 0).applyQuaternion(quat), out: n,
      w: width * scl.x, h: height * scl.y,
    };
    surf.aspect = surf.w / surf.h;
    surf.el = screens.element(s);
    const pin = PINS.find((p) => p.section === s);
    surf.via = new THREE.Vector3(...pin.via);
    surf.fov = pin.fov;
    SURF[s] = surf;
  }
}

// ------------------------------------------------------------------ pins ----
const pinEls = (GL ? PINS : []).map((pin) => {
  const b = document.createElement('button');
  b.className = 'pin'; b.type = 'button';
  b.dataset.section = pin.section; b.dataset.side = pin.side;
  b.innerHTML = `<i></i><span>${pin.section[0].toUpperCase() + pin.section.slice(1)}</span>`;
  b.setAttribute('aria-label', `go to ${pin.section}`);
  b.addEventListener('click', (e) => { e.stopPropagation(); visit(pin.section); });
  pinsEl.appendChild(b);
  return { el: b, pin, local: new THREE.Vector3(...pin.at), piece: pieces[pin.piece] };
});
nav.querySelectorAll('[data-to]').forEach((b) => b.addEventListener('click', (e) => { e.stopPropagation(); const to = b.dataset.to; if (to === 'room') leave(); else visit(to); }));

// ------------------------------------------------------------------ state ----
let W = 0, H = 0, compact = false;
let at = null;                       // the section whose surface the camera is at (or flying to), null at home
let landed = false;                  // the camera has arrived and the screen is live
let pendingHash = SECTIONS.includes(location.hash.slice(1)) ? location.hash.slice(1) : null;
let pointerIn = false, forceRender = true, hover = null;
let look = 0, lookGoal = 0;
const px = new THREE.Vector2(-1, -1), ndc = new THREE.Vector2();
const lean = { x: 0, y: 0, gx: 0, gy: 0 };
const _t = new THREE.Vector3();
const raycaster = new THREE.Raycaster();
// a camera pose: where the camera is, the point it looks at, its up vector and its lens. Poses are built
// from { aim, dir, dist } (the point, the unit direction from it to the camera, the distance) and carry
// `pos` once applied. `pose` is what is drawn; `fly` the flight in progress, if any.
let pose = null, fly = null;
const posOf = (p) => p.pos ?? p.aim.clone().addScaledVector(p.dir, p.dist);
function applyPose(p) {
  const pos = posOf(p);
  pose = { pos, aim: p.aim.clone(), up: p.up.clone(), fov: p.fov, clip: p.clip };
  camera.position.copy(pos);
  camera.up.copy(p.up);
  camera.lookAt(p.aim);
  camera.fov = p.fov;
  camera.aspect = W / H;
  const d = pos.distanceTo(p.aim);
  camera.near = Math.max(0.02, d * 0.02, p.clip ?? 0);
  camera.far = d * 4 + 400;
  camera.updateProjectionMatrix();
  camera.updateMatrixWorld();
  forceRender = true;
}

/** The pose that puts `points` inside the window rectangle `[fx0, fx1, fy0, fy1]` (fractions), looking along `dir`. */
function fitPose(points, [fx0, fx1, fy0, fy1], dir, fov) {
  const tx0 = fx0 * 2 - 1, tx1 = fx1 * 2 - 1, ty0 = 1 - fy1 * 2, ty1 = 1 - fy0 * 2;
  const p = { aim: AIM0.clone(), dir: dir.clone(), dist: 300, up: new THREE.Vector3(0, 1, 0), fov };
  const right = new THREE.Vector3(), up = new THREE.Vector3();
  for (let it = 0; it < 10; it++) {
    applyPose(p);
    let x0 = 1e9, x1 = -1e9, y0 = 1e9, y1 = -1e9;
    for (const v of points) { _t.copy(v).project(camera); x0 = Math.min(x0, _t.x); x1 = Math.max(x1, _t.x); y0 = Math.min(y0, _t.y); y1 = Math.max(y1, _t.y); }
    const halfH = p.dist * Math.tan(THREE.MathUtils.degToRad(fov / 2)), halfW = halfH * camera.aspect;
    right.setFromMatrixColumn(camera.matrixWorld, 0); up.setFromMatrixColumn(camera.matrixWorld, 1);
    p.aim.addScaledVector(right, ((x0 + x1) / 2 - (tx0 + tx1) / 2) / 2 * halfW).addScaledVector(up, ((y0 + y1) / 2 - (ty0 + ty1) / 2) / 2 * halfH);
    p.dist *= Math.max((x1 - x0) / (tx1 - tx0), (y1 - y0) / (ty1 - ty0));
  }
  return p;
}

// What the home view frames: the drawn outline of the room (the tops of the two walls, the bottom of the
// slab and the hard shadow under it), not the bounds of its meshes, which include things hidden behind
// the walls and would pull it off centre.
const S = ROOM.SLAB, SH = 2.6;
const OUTLINE = [[-2, ROOM.H, -2], [-2, ROOM.H, ROOM.L], [ROOM.L, ROOM.H, -2], [-2, -S, ROOM.L], [ROOM.L, -S, -2], [ROOM.L, -S, ROOM.L],
  [-2 + SH, -S - .6, ROOM.L + SH], [ROOM.L + SH, -S - .6, -2 + SH], [ROOM.L + SH, -S - .6, ROOM.L + SH]].map((v) => new THREE.Vector3(...v));
let homeBase = null;
/** Home, leaning with the pointer: the base pose turned a little round the room's centre. */
function homePose() {
  const p = { ...homeBase, aim: homeBase.aim.clone(), up: homeBase.up.clone() };
  p.dir = homeBase.dir.clone().applyAxisAngle(new THREE.Vector3(0, 1, 0), lean.x * LEAN.yaw);
  const side = new THREE.Vector3().crossVectors(p.dir, p.up).normalize();
  p.dir.applyAxisAngle(side, lean.y * LEAN.pitch);
  return p;
}

/**
 * The pose at a surface: square on to it, its top up, and so close that one unit of the screen's CSS is one
 * pixel of the window. Returns the pose and the CSS size the screen is laid out at.
 */
function surfacePose(s) {
  const a = compact ? AT_COMPACT : AT;
  const cssW = Math.floor(Math.min(a.w * W, a.h * H * s.aspect)), cssH = Math.round(cssW / s.aspect);
  const fov = s.fov ?? FOV_NEAR;
  const t = Math.tan(THREE.MathUtils.degToRad(fov / 2));
  const dist = s.w * H / (2 * t * cssW);
  const ppu = cssW / s.w;                                       // window px per world unit at the surface
  // centre the surface at height a.y, then nudge it onto whole pixels so the type stays crisp
  const topLeftX = W / 2 - cssW / 2, topLeftY = a.y * H - cssH / 2;
  const dx = Math.round(topLeftX) - topLeftX, dy = Math.round(topLeftY) - topLeftY;
  const aim = s.centre.clone().addScaledVector(s.up, (a.y - 0.5) * H / ppu).addScaledVector(s.right, -dx / ppu).addScaledVector(s.up, dy / ppu);
  // anything nearer than just in front of the surface is cut away by the lens (on a phone the camera has to
  // stand back from the monitor, behind his chair)
  return { pose: { aim, dir: s.out.clone(), dist, up: s.up.clone(), fov, clip: Math.max(0, dist - 2.4) }, rect: { left: Math.round(topLeftX), top: Math.round(topLeftY), width: cssW, height: cssH } };
}

/**
 * A flight: the camera travels a curve from where it is, pulled through `via` (a clear point in the room),
 * to the pose `to`. `kind` sets how the gaze and the roll move along it: 'in' looks at the destination
 * early and turns square to it as it lands; 'out' keeps looking at what it is leaving and only then turns
 * to the room; 'across' turns evenly.
 */
/**
 * A flight's path. In and out: a curve pulled through `via` (a clear point above and in front of the
 * surface). Between two surfaces (`via` an array [c1, c2]): a curve that lifts straight up and back off the
 * first surface, crosses over the room above his head, and comes down square onto the second.
 */
const flight = (from, to, via, kind) => {
  const P0 = posOf(from), P2 = posOf(to);
  const two = Array.isArray(via);
  return { P0, P1: two ? via[0].clone() : via ? via.clone() : P0.clone().lerp(P2, 0.5), Q1: two ? via[1].clone() : null, P2, A0: from.aim.clone(), A2: to.aim.clone(), U0: from.up.clone(), U2: to.up.clone(), F0: from.fov, F2: to.fov, C0: from.clip ?? 0, C2: to.clip ?? 0, kind };
};
function flyTo(to, seconds, { via, kind = 'in', then = null } = {}) {
  if (reduced || still || !pose) { applyPose(to); fly = null; then?.(); return; }
  fly = { ...flight(pose, to, via, kind), t0: performance.now(), ms: seconds * 1000, then };
}
const smooth = (a, b, x) => { const t = clamp((x - a) / (b - a)); return t * t * (3 - 2 * t); };
/** The pose `k` of the way along a flight (0 to 1, eased). */
function flightPose(f, k) {
  const e = easeInOut(k), u = 1 - e;
  const pos = f.Q1
    ? f.P0.clone().multiplyScalar(u * u * u).addScaledVector(f.P1, 3 * u * u * e).addScaledVector(f.Q1, 3 * u * e * e).addScaledVector(f.P2, e * e * e)
    : f.P0.clone().multiplyScalar(u * u).addScaledVector(f.P1, 2 * u * e).addScaledVector(f.P2, e * e);
  const wa = f.kind === 'in' ? 1 - Math.pow(1 - e, 3) : f.kind === 'out' ? Math.pow(e, 3) : e;
  const wu = f.kind === 'in' ? smooth(0.5, 1, e) : f.kind === 'out' ? smooth(0, 0.5, e) : e;
  const aim = f.A0.clone().lerp(f.A2, wa);
  const fwd = new THREE.Vector3().subVectors(aim, pos).normalize();
  const up = f.U0.clone().lerp(f.U2, wu);
  up.addScaledVector(fwd, -up.dot(fwd));                       // keep it square to the view
  if (up.lengthSq() < 1e-6) up.copy(f.U2);
  up.normalize();
  const clip = f.C0 * (1 - smooth(0, 0.4, e)) + f.C2 * smooth(0.6, 1, e);   // the cut only near either end, where the camera is square on
  return k >= 1 ? { pos: f.P2.clone(), aim: f.A2.clone(), up: f.U2.clone(), fov: f.F2, clip: f.C2 } : { pos, aim, up, fov: lerp(f.F0, f.F2, e), clip };
}
function stepFly(now) {
  if (!fly) return false;
  const k = scrub ? (fly.k ?? 0) : Math.min(1, (now - fly.t0) / fly.ms);
  fly.prog = k;
  applyPose(flightPose(fly, k));
  if (k >= 1) { const then = fly.then; fly = null; then?.(); }
  return true;
}

// ------------------------------------------------------------------ visits ----
const LIFT = new THREE.Vector3(0, 11, 0);
/** The two pull points of a flight from surface A to surface B: lifted off A, and above B. */
const acrossVia = (A, B) => [posOf(surfacePose(A).pose).addScaledVector(A.out, 2).add(LIFT), posOf(surfacePose(B).pose).addScaledVector(B.out, 2).add(LIFT)];
/** Shows one screen live on its surface (or none), laid exactly over the pixels the surface covers. */
function showScreen(section, rect = null) {
  for (const s of Object.values(SURF)) {
    const on = s.section === section;
    s.el.classList.toggle('live', on);
    if (on) Object.assign(s.el.style, { left: `${rect.left}px`, top: `${rect.top}px`, width: `${rect.width}px`, height: `${rect.height}px` });
  }
}

/** Fly to a section's surface and boot its screen there. From another surface the camera arcs across. */
function visit(section) {
  if (!GL || !SURF[section] || (at === section && (landed || fly))) return;
  const from = at;
  if (from) { screens.sleep(from); showScreen(null); }
  at = section; landed = false;
  document.body.classList.add('visiting');
  document.body.dataset.at = section;
  setCurrent(section);
  history.replaceState(null, '', '#' + section);
  const { pose: to, rect } = surfacePose(SURF[section]);
  const via = from ? acrossVia(SURF[from], SURF[section]) : SURF[section].via;
  flyTo(to, from ? FLY_ACROSS : FLY_IN, { via, kind: from ? 'across' : 'in', then: () => land(section, rect) });
}
function land(section, rect) {
  if (at !== section) return;
  landed = true;
  showScreen(section, rect);
  document.body.classList.add('landed');
  screens.boot(section);
}
/** Back out to the whole room. */
function leave() {
  if (!at) return;
  const was = at;
  screens.sleep(at);
  showScreen(null);
  at = null; landed = false;
  document.body.classList.remove('landed');
  setCurrent(null);
  history.replaceState(null, '', location.pathname + location.search);
  flyTo(homePose(), FLY_OUT, { via: SURF[was].via, kind: 'out', then: () => { if (!at) document.body.classList.remove('visiting'); } });
}
function setCurrent(section) {
  nav.querySelectorAll('[data-to]').forEach((b) => b.toggleAttribute('aria-current', b.dataset.to === (section ?? 'room')));
  pinEls.forEach(({ el }) => el.toggleAttribute('aria-current', el.dataset.section === section));
}

// ------------------------------------------------------------------ layout ----
function measure() {
  W = innerWidth; H = innerHeight;
  compact = W < 820;
  document.body.classList.toggle('compact', compact);
  if (!GL) return;
  H = Math.round(stage.getBoundingClientRect().height) || H;
  renderer.setSize(W, H, false);
  homeBase = fitPose(OUTLINE, compact ? HOME_COMPACT : HOME, dirHome, FOV_HOME);
  // a resize lands the camera again wherever it is meant to be
  fly = null;
  if (at) {
    const { pose: p, rect } = surfacePose(SURF[at]);
    applyPose(p);
    if (landed) showScreen(at, rect); else land(at, rect);
  } else applyPose(homePose());
}

function placePins() {
  for (const { el, pin, local, piece } of pinEls) {
    piece.inner.localToWorld(_t.copy(local)).project(camera);
    const x = (_t.x + 1) / 2 * W, y = (1 - _t.y) / 2 * H;
    let side = pin.side;
    if (side === 'left' && x < PIN_EDGE) side = 'right';
    else if (side === 'right' && x > W - PIN_EDGE) side = 'left';
    else if (side === 'top' && y < 70) side = 'bottom';
    else if (side === 'bottom' && y > H - 80) side = 'top';
    if (el.dataset.side !== side) el.dataset.side = side;
    el.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
    el.classList.toggle('hot', hover === pin.section);
  }
}

/** Which surface is under the pointer at home (the screens themselves are what you click, as well as the pointers). */
function pick() {
  if (!GL || at || fly || !pointerIn) return null;
  ndc.set(px.x / W * 2 - 1, 1 - px.y / H * 2);
  raycaster.setFromCamera(ndc, camera);
  let best = null, bd = 1e9;
  for (const s of Object.values(SURF)) {
    const hit = raycaster.intersectObject(s.mesh, false)[0];
    if (hit && hit.distance < bd) { bd = hit.distance; best = s.section; }
  }
  return best;
}

/** He looks back over his shoulder when the pointer comes near his head (at home only). */
function aimLook() {
  if (!figure) return;
  if (pinnedLook !== null) { lookGoal = pinnedLook; return; }
  if (!pointerIn || at || fly) { lookGoal = 0; return; }
  pieces.battle.inner.localToWorld(_t.copy(figure.at)).project(camera);
  const hx = (_t.x + 1) / 2 * W, hy = (1 - _t.y) / 2 * H;
  lookGoal = Math.hypot(px.x - hx, px.y - hy) < LOOK_RADIUS * H ? 1 : 0;
}
function poseLook(e) {
  figure.head.rotation.set(0.1 * e, LOOK_YAW * e, -0.05 * e);
  figure.torso.rotation.y = LOOK_TWIST * e;
  figure.solveArms();
}

// ------------------------------------------------------------------ input ----
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

$('mark').addEventListener('click', (e) => { e.preventDefault(); leave(); });
$('back').addEventListener('click', (e) => { e.stopPropagation(); leave(); });
addEventListener('keydown', (e) => { if (e.key === 'Escape') leave(); }, true);
addEventListener('resize', measure);
stage.addEventListener('pointermove', (e) => {
  px.set(e.clientX, e.clientY);
  pointerIn = true;
  lean.gx = clamp(e.clientX / W * 2 - 1, -1, 1); lean.gy = clamp(e.clientY / H * 2 - 1, -1, 1);
  const h = pick();
  if (h !== hover) { hover = h; stage.classList.toggle('pointing', !!h); forceRender = true; }
});
stage.addEventListener('pointerleave', () => { pointerIn = false; lean.gx = lean.gy = 0; if (hover) { hover = null; stage.classList.remove('pointing'); forceRender = true; } });
// a click on the room: on a surface at home, go to it; anywhere off the screen during a visit, come back out
stage.addEventListener('click', (e) => {
  if (e.target.closest('.chrome, .pin, .scr, .nav, .back')) return;
  if (at) { if (landed) leave(); return; }
  const h = pick();
  if (h) visit(h);
});

// ------------------------------------------------------------------ loop ----
let last = performance.now();
function frame(t) {
  if (!GL) return;
  requestAnimationFrame(frame);
  const dt = Math.min(0.05, (t - last) / 1000); last = t;
  let dirty = forceRender || stepFly(t);
  // at home the room leans gently toward the pointer
  if (!at && !fly && !reduced && !still) {
    const k = 1 - Math.pow(1 - 0.06, dt * 60);
    const nx = lerp(lean.x, lean.gx, k), ny = lerp(lean.y, lean.gy, k);
    if (Math.abs(nx - lean.x) + Math.abs(ny - lean.y) > 1e-4) { lean.x = nx; lean.y = ny; applyPose(homePose()); dirty = true; }
  }
  aimLook();
  if (figure && look !== lookGoal) {
    look = reduced ? lookGoal : Math.abs(lookGoal - look) < 0.002 ? lookGoal : lerp(look, lookGoal, 1 - Math.pow(1 - 0.065, dt * 60));
    poseLook(easeInOut(look));
    dirty = true;
  }
  if (theme !== night) {
    theme = reduced ? night : Math.abs(night - theme) < 0.003 ? night : lerp(theme, night, 1 - Math.pow(1 - 0.1, dt * 60));
    applyTheme(easeInOut(theme));
    dirty = true;
  }
  // the block of rooms fades out as the camera goes in, and back as it comes home
  const lv = !fly ? (at ? 0 : 1) : fly.kind === 'in' ? 1 - smooth(0, .3, fly.prog ?? 0) : fly.kind === 'out' ? smooth(.55, 1, fly.prog ?? 0) : 0;
  if (Math.abs(lattice.lines.material.opacity - lv) > 1e-3) { lattice.lines.material.opacity = lv; dirty = true; }
  if (dirty) {
    forceRender = false;
    renderer.render(scene, camera);
    placePins();
    if (!document.body.classList.contains('ready')) { document.body.classList.add('ready'); dismissLoader(); }
    if (pendingHash) { const s = pendingHash; pendingHash = null; setTimeout(() => visit(s), still ? 0 : 350); }
  }
}

// test hooks for the dev server only (Vite drops this block from the build)
if (import.meta.env.DEV) {
  window.__state = () => ({ theme, night, amb: +ambient.intensity.toFixed(4), key: +key.intensity.toFixed(4), sun: +sun.intensity.toFixed(4), lean: [lean.x, lean.y].map((v) => +v.toFixed(5)), lat: lattice.lines.material.opacity, fly: !!fly, at });
  window.__lean = (x, y) => { lean.x = lean.gx = x; lean.y = lean.gy = y; applyPose(homePose()); };
  window.__lattice = (v) => { lattice.lines.visible = v; forceRender = true; return lattice.segments; };
  /** The room cell's 8 corners in window px under the current camera. */
  window.__cellCorners = () => { const { x, y, z, w: P, h: Q } = CELL; const out = []; for (let i = 0; i < 8; i++) { _t.set(x + (i & 1 ? P : 0), y + (i & 2 ? Q : 0), z + (i & 4 ? P : 0)).project(camera); out.push([(_t.x + 1) / 2 * W, (1 - _t.y) / 2 * H]); } return out; };
  window.__cam = () => ({ pos: camera.position.toArray().map((v) => +v.toFixed(2)), aim: pose?.aim.toArray().map((v) => +v.toFixed(2)), fov: camera.fov, near: camera.near, W, H, home: homeBase && { aim: homeBase.aim.toArray().map((v) => +v.toFixed(2)), dist: +homeBase.dist.toFixed(1) } });
  window.__scrub = (k) => { if (fly) { fly.k = clamp(k); forceRender = true; } };
  /**
   * Test probe: flies home -> `section` -> home in thought only and reports every point where the camera would
   * be inside a solid (a mesh's bounds, walls and slab included), and at the surface whether anything stands
   * between the camera and the screen's centre and corners.
   */
  /** Test probe for a flight between two surfaces: every point where the camera would be inside a solid. */
  window.__probeAcross = (a, b) => {
    const A = SURF[a], B = SURF[b], from = surfacePose(A).pose, to = surfacePose(B).pose;
    const via = acrossVia(A, B);
    const solids = [];
    scene.traverse((o) => { if (o.isMesh && o.visible && o.material?.colorWrite !== false && o !== A.mesh && o !== B.mesh) { const bx = new THREE.Box3().setFromObject(o); if (!bx.isEmpty()) solids.push({ o, b: bx }); } });
    const f = flight({ ...from, pos: posOf(from) }, to, via, 'across'), inside = [];
    for (let i = 0; i <= 100; i++) { const p = flightPose(f, i / 100).pos; for (const { o, b: bx } of solids) if (bx.containsPoint(p)) inside.push(`k=${i / 100} ${o.geometry.type} at ${bx.getCenter(new THREE.Vector3()).toArray().map((v) => v.toFixed(1))}`); }
    return inside;
  };
  window.__probe = (section, via = null) => {
    const s = { ...SURF[section], via: via ? new THREE.Vector3(...via) : SURF[section].via }, { pose: to } = surfacePose(s), home = homePose();
    const solids = [];
    scene.traverse((o) => { if (o.isMesh && o.visible && o.material?.colorWrite !== false && o !== s.mesh) { const b = new THREE.Box3().setFromObject(o); if (!b.isEmpty()) solids.push({ o, b }); } });
    const inside = [];
    for (const [name, f] of [['in', flight(home, to, s.via, 'in')], ['out', flight({ ...to, pos: posOf(to) }, home, s.via, 'out')]]) {
      for (let i = 0; i <= 100; i++) {
        const p = flightPose(f, i / 100).pos;
        for (const { o, b } of solids) if (b.containsPoint(p)) inside.push(`${name} k=${i / 100} in ${o.geometry.type} at ${b.getCenter(new THREE.Vector3()).toArray().map((v) => v.toFixed(1))}`);
      }
    }
    const cam = posOf(to), blocked = [];
    for (const [u, v] of [[0, 0], [-0.95, -0.95], [0.95, -0.95], [-0.95, 0.95], [0.95, 0.95]]) {
      const target = s.centre.clone().addScaledVector(s.right, u * s.w / 2).addScaledVector(s.up, v * s.h / 2);
      const dir = target.clone().sub(cam), len = dir.length();
      raycaster.set(cam, dir.normalize()); raycaster.near = to.clip ?? 0; raycaster.far = len - 0.01;
      const hits = raycaster.intersectObjects(solids.map((x) => x.o), false);
      if (hits.length) blocked.push(`(${u},${v}) by ${hits[0].object.geometry.type} at ${hits[0].point.toArray().map((n) => n.toFixed(2))}`);
    }
    raycaster.near = 0; raycaster.far = Infinity;
    const at9 = flightPose(flight(home, to, s.via, 'in'), 0.9).pos;
    return { inside: [...new Set(inside)].slice(0, 12), insideCount: inside.length, blocked, solids: solids.length, at9: at9.toArray().map((v) => +v.toFixed(2)), wallsAt9: solids.filter(({ b }) => b.containsPoint(at9)).length };
  };
  /** The window-px box the current surface's mesh projects to (checked against its interface in tests). */
  window.__surfaceBox = () => {
    if (!at) return null;
    const s = SURF[at]; let x0 = 1e9, x1 = -1e9, y0 = 1e9, y1 = -1e9;
    for (const [u, v] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) {
      _t.copy(s.centre).addScaledVector(s.right, u * s.w / 2).addScaledVector(s.up, v * s.h / 2).project(camera);
      const x = (_t.x + 1) / 2 * W, y = (1 - _t.y) / 2 * H;
      x0 = Math.min(x0, x); x1 = Math.max(x1, x); y0 = Math.min(y0, y); y1 = Math.max(y1, y);
    }
    return [x0, y0, x1 - x0, y1 - y0].map((n) => +n.toFixed(2));
  };
}

measure();
if (pinnedLook !== null && figure) { look = pinnedLook; poseLook(easeInOut(look)); }
// compile every program before the first frame instead of stalling the first render; the loader keeps animating
if (GL) { try { await renderer.compileAsync(scene, camera); } catch (err) { console.warn('shader precompile skipped', err); } }
frame(performance.now());
