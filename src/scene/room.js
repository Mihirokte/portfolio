// room.js — Mihir's room as four 3D pieces that assemble into one cutaway.
// 1 unit = 9 cm. Room 44 x 44 (3.96 m square), walls 32 (2.9 m): every object below is sized from
// real dimensions (desk 75 cm, chair seat 45 cm, mug 9 cm) so the room reads at normal proportions.
// The camera looks in from the bed side, so the two back walls are the DOOR wall (plane x = 0, runs
// along z) and the S wall (plane z = 0, runs along x). The wall desk and the monitor desk meet as an L
// in the inner corner, the S light hangs above the end of the monitor desk, the guitar over the
// monitor, the shelves and clothes rack continue along the S wall, the bed runs along the open front.
import * as THREE from 'three';
import { mat, flat, box, cyl, rodX, rodZ, sphere, limb, ring, tube, plane, hinge, instanced, glow, contact, point, emissive, themed } from './helpers.js';
import * as T from './textures.js';

export const ROOM = { L: 44, H: 32, SLAB: 5, CENTRE: new THREE.Vector3(22, 10, 22) };
const TILE = 6.6;                                                  // 60 cm floor tiles

// The window: on the front wall (z = 44, the wall the camera looks through), in the gap between the door
// wall and the head of the bed, just past the lamp. A tall vertical light, 54 cm wide x 1.75 m, sill at
// 60 cm. It is never drawn — only the sun that comes through it is.
export const WINDOW = { x0: 6.0, x1: 12.0, y0: 6.5, y1: 26.0, z: 44 };

// floor rectangles (x0, x1, z0, z1) — a piece owns the wall segments behind its rectangle
export const PIECES = {
  battle: { rect: [0, 22, 0, 17] },     // the corner: S light, the L of desks, monitor, gaming chair + Mihir, guitar
  rack:   { rect: [22, 44, 0, 17] },    // wall shelves, shelf unit, clothes rack, football
  door:   { rect: [0, 14, 17, 44] },    // collages, doorway, red tube, lamp, rug
  bed:    { rect: [14, 44, 17, 44] },   // the bed, the mesh chair, bits on the floor
};

// pointers: section -> a point on the object that stands for it (absolute room coordinates) + the label side
export const PINS = [
  { section: 'projects', piece: 'battle', at: [0.9, 10.3, 7.5], side: 'left' },      // the MacBook on the wall desk: side projects
  { section: 'work',     piece: 'battle', at: [7.75, 10.9, 1.75], side: 'top' },     // the work laptop on the riser, editor open
  { section: 'skills',   piece: 'battle', at: [13.5, 11.8, 3.6], side: 'right' },    // the monitor: code, terminal, metrics
  { section: 'about',    piece: 'battle', at: [15.45, 11.05, 12.65], side: 'bottom' }, // Mihir: his right shoulder
  { section: 'hobbies',  piece: 'rack',   at: [29.5, 2.6, 11.5], side: 'bottom' },   // the football
  { section: 'contact',  piece: 'bed',    at: [18.4, 7.05, 32.6], side: 'right' },   // his phone, face up on the pillow
];

const v = (x, y, z) => new THREE.Vector3(x, y, z);
const seeded = (seed) => { let s = seed * 9301 + 49297; return () => { s = (s * 9301 + 49297) % 233280; return s / 233280; }; };

let M = null;
function materials(tex) {
  tex.plaster.repeat.set(4, 3);
  tex.carbon.repeat.set(5, 2.5);
  tex.wood.repeat.set(2, 1);
  tex.woodLight.repeat.set(1.5, 1);
  tex.quilt.repeat.set(4, 2.6);
  tex.weave.repeat.set(3, 2);
  return {
    wall: mat('#F7F2E8', { roughness: .95, bumpMap: tex.plaster, bumpScale: .03, env: .25 }),
    slab: mat('#CFC7B8', { roughness: .92 }),
    slabBottom: mat('#B5AC9C'),
    base: mat('#E6DFD2'), baseLip: mat('#F7F3EA'),
    black: mat('#2A2A2F', { roughness: .55 }),
    deskBlack: mat('#2E2E33', { roughness: .45, env: .5 }),
    darkm: mat('#55555C', { roughness: .7 }),
    grey: mat('#B9BBBE', { roughness: .7 }),
    silver: mat('#CFD2D6', { metalness: .75, roughness: .3, env: 1 }),
    white: mat('#F5F4EF', { roughness: .5, env: .5 }),
    cream: mat('#EEE6D4'),
    bedframe: mat('#FFFFFF', { map: tex.wood, roughness: .6, env: .4 }),
    shelfWood: mat('#FFFFFF', { map: tex.woodLight, roughness: .65, env: .35 }),
    sheet: mat('#F3E4DE', { roughness: 1 }),
    blanket: mat('#9C9CA2', { roughness: 1, bumpMap: tex.quilt, bumpScale: .12 }),
    pillow: mat('#FCFBF7', { roughness: 1 }),
    leather: mat('#3E2B26', { roughness: .45, env: .6, physical: true, clearcoat: .25, clearcoatRoughness: .4 }),
    leatherHi: mat('#5A3C34', { roughness: .5, env: .5 }),
    mesh: mat('#3C3C44', { roughness: .95 }),
    metal: mat('#8A8A90', { metalness: .85, roughness: .28, env: 1 }),
    chrome: mat('#D9DBE0', { metalness: 1, roughness: .18, env: 1.2 }),
    skin: mat('#C68B5E', { roughness: .78 }),
    skinShade: mat('#B87F55', { roughness: .8 }),
    hair: mat('#2A1B14', { roughness: .82, env: .25 }),
    beard: mat('#2B1C15', { roughness: .95, side: THREE.DoubleSide }),
    eyeWhite: mat('#F4F0E8', { roughness: .3, env: .6 }),
    iris: mat('#3A2418', { roughness: .25, env: .8 }),
    lip: mat('#8A4A48', { roughness: .8 }),
    rim: mat('#62636A', { metalness: .7, roughness: .35, env: 1 }),
    jersey: mat('#F6F4EE', { roughness: .9 }),
    maroon: mat('#8A1F2E', { roughness: .85 }),
    jeans: mat('#3A4A6B', { roughness: 1 }),
    psWhite: mat('#F2F1EC', { roughness: .32, env: .8, physical: true, clearcoat: .5, clearcoatRoughness: .25 }),
    psBlack: mat('#15151A', { roughness: .4, env: .6 }),
    maple: mat('#D6B076', { roughness: .5, env: .4 }),
    fretboard: mat('#5A3E2A', { roughness: .6 }),
    guitar: mat('#14141A', { roughness: .22, metalness: .1, env: 1, physical: true, clearcoat: .9, clearcoatRoughness: .12 }),
    pickguard: mat('#F2F0EA', { roughness: .35, env: .6 }),
    terracotta: mat('#C47A4A', { roughness: .9 }),
    green: mat('#5F9E4E', { roughness: .8 }),
    frameNavy: mat('#2E3A5E', { roughness: .6 }),
    doorFrame: mat('#EFE6D2', { roughness: .7 }),
    door: mat('#F3ECDC', { roughness: .6, env: .3 }),
    corridorFloor: mat('#D9CDB3'),
    shadeFabric: emissive(mat('#F5DDB6', { roughness: .95 }), '#FFB45A', .3, 2.4),
    bulb: emissive(mat('#FFF4D6'), '#FFE2A8', 1.2, 7),
    candle: mat('#F5F4EF'),
    flame: emissive(mat('#FFD27A', { roughness: 1 }), '#FFB040', 1.5, 6),
    weave: mat('#FFFFFF', { map: tex.weave, roughness: 1 }),
    rubik: ['#D8402A', '#F28C28', '#F2F2F2', '#F2C230', '#2D63B8', '#3DA35A'].map((c) => mat(c, { roughness: .35, env: .6 })),
    shirt: { grey: mat('#9A9CA2', { roughness: 1 }), navy: mat('#2B3A5C', { roughness: 1 }), red: mat('#B3312E', { roughness: 1 }), hoodie: mat('#3A3A40', { roughness: 1 }), spain: mat('#F3F1EA', { roughness: 1 }) },
    key: mat('#FFFFFF', { roughness: .6 }),
    book: mat('#FFFFFF', { roughness: .8 }),
  };
}

// ------------------------------------------------------------------ shell ----
function slab(inner, [x0, x1, z0, z1], tex) {
  const sx0 = x0 === 0 ? -2 : x0, sz0 = z0 === 0 ? -2 : z0;
  const t = tex.tiles.clone(), b = tex.tilesBump.clone();
  for (const k of [t, b]) { k.repeat.set((x1 - sx0) / TILE, (z1 - sz0) / TILE); k.offset.set(sx0 / TILE, -z1 / TILE); k.needsUpdate = true; }
  const top = mat('#FFFFFF', { map: t, bumpMap: b, bumpScale: .05, roughness: .42, env: .7 });
  box(inner, sx0, x1, sz0, z1, -ROOM.SLAB, 0, [M.slab, M.slab, top, M.slabBottom, M.slab, M.slab], { sharp: true });
  // the darkening where the floor meets a wall
  const sh = (map) => { const m = new THREE.MeshBasicMaterial({ map, transparent: true, depthWrite: false }); return m; };
  if (z0 === 0) plane(inner, '+y', 0.012, Math.max(0, x0), x1, 0, 3.4, sh(tex.shadeV1), { renderOrder: 1 });
  if (x0 === 0) plane(inner, '+y', 0.012, 0, 3.4, Math.max(0, z0), z1, sh(tex.shadeU0), { renderOrder: 1 });
}

function skirting(inner, axis, a0, a1) {
  if (axis === 'z') { box(inner, 0, 0.3, a0, a1, 0, 1.0, M.base, { sharp: true }); box(inner, 0, 0.34, a0, a1, 1.0, 1.15, M.baseLip, { sharp: true, cast: false }); }
  else { box(inner, a0, a1, 0, 0.3, 0, 1.0, M.base, { sharp: true }); box(inner, a0, a1, 0, 0.34, 1.0, 1.15, M.baseLip, { sharp: true, cast: false }); }
}

function doorWall(inner, z0, z1, tex, { doorway = false } = {}) {
  const sz0 = z0 === 0 ? -2 : z0;
  const wallBox = (a, b, y0, y1) => box(inner, -2, 0, a, b, y0, y1, M.wall, { sharp: true });
  if (!doorway) { wallBox(sz0, z1, 0, ROOM.H); skirting(inner, 'z', Math.max(0, sz0), z1); return; }
  const d0 = 23.6, d1 = 32.6, dh = 23, A = 0.8;                      // 81 cm x 2.07 m opening
  wallBox(sz0, d0 - A, 0, ROOM.H); wallBox(d1 + A, z1, 0, ROOM.H); wallBox(d0 - A, d1 + A, dh + A, ROOM.H);
  skirting(inner, 'z', sz0, d0 - A); skirting(inner, 'z', d1 + A, z1);
  box(inner, -2, 0.25, d0 - A, d0, 0, dh + A, M.doorFrame, { sharp: true });          // architrave
  box(inner, -2, 0.25, d1, d1 + A, 0, dh + A, M.doorFrame, { sharp: true });
  box(inner, -2, 0.25, d0, d1, dh, dh + A, M.doorFrame, { sharp: true });
  // the lit corridor beyond (dimmer at night: the hall light, not daylight), the threshold, and the door
  // leaf swung back against the corridor wall
  const corridor = flat('#FFFFFF', { map: tex.corridor });
  themed(corridor, 'color', new THREE.Color('#FFFFFF'), new THREE.Color('#5E4E3E'));
  plane(inner, '+x', -1.96, d0, d1, 0, dh, corridor);
  box(inner, -2, 0.1, d0, d1, -0.3, 0.05, M.corridorFloor, { sharp: true, cast: false });
  box(inner, -0.1, 0.1, d0, d1, 0.05, 0.14, M.metal, { sharp: true, cast: false });
  const leaf = hinge(inner, -1.1, 0, d1 - .15, 'y', THREE.MathUtils.degToRad(78));
  box(leaf, -0.2, 0.2, -8.7, 0, 0.1, dh - .25, M.door, { r: .05 });
  for (const [a, b] of [[dh * .56, dh - 1.7], [1.5, dh * .47]]) box(leaf, -0.28, -0.2, -7.5, -1.2, a, b, M.doorFrame, { sharp: true, cast: false });
  rodX(leaf, -1.3, -0.3, 10.8, -1.1, 0.1, M.chrome, { cast: false });                  // lever handle
  cyl(leaf, -0.45, -1.1, 0.22, 10.5, 10.85, M.chrome, { cast: false }).rotation.z = Math.PI / 2;
  // a wall switch by the door
  box(inner, 0, 0.35, d1 + 1.6, d1 + 3.0, 11.6, 13.0, M.white, { r: .06, cast: false });
  box(inner, 0.35, 0.42, d1 + 1.95, d1 + 2.65, 12.0, 12.6, M.grey, { sharp: true, cast: false });
}

function sWall(inner, x0, x1) {
  const sx0 = x0 === 0 ? 0 : x0;             // the corner block belongs to the door wall
  box(inner, sx0, x1, -2, 0, 0, ROOM.H, M.wall, { sharp: true });
  skirting(inner, 'x', sx0, x1);
}

// --------------------------------------------------------------- furniture ----
/**
 * An open laptop. Built in a local frame where the deck runs x = [-w/2, w/2], z = [0, d] with the hinge
 * on the z = 0 edge and the screen facing +z; `yaw` turns the whole thing (pi/2 makes it face +x).
 */
function laptop(g, { x, y, z, yaw = 0, w, d, lid, body, screen, deck = null, tilt = 20, r = .1 }) {
  const grp = new THREE.Group(); grp.position.set(x, y, z); grp.rotation.y = yaw; g.add(grp);
  box(grp, -w / 2, w / 2, 0, d, 0, .22, body, { r });
  if (deck) plane(grp, '+y', .221, -w / 2 + .12, w / 2 - .12, .08, d - .08, flat('#FFFFFF', { map: deck }));
  else { plane(grp, '+y', .221, -w / 2 + .3, w / 2 - .3, .2, d * .6, flat('#1E1E22')); plane(grp, '+y', .221, -w * .22, w * .22, d * .66, d - .15, flat('#3A3A40')); }
  const h = hinge(grp, 0, .22, .06, 'x', -THREE.MathUtils.degToRad(tilt));
  box(h, -w / 2, w / 2, -.16, 0, 0, lid, body, { r });
  plane(h, '+z', .006, -w / 2 + .14, w / 2 - .14, .14, lid - .14, flat('#FFFFFF', { map: screen }));
  // the screen throws a little warm light onto the deck (the main light on the desk at night)
  point(h, 0, lid * .5, .9, '#FFE2C0', .8, 3.2, 6);
  return grp;
}

function wallDesk(inner, tex) {
  const [z0, z1, top] = [0.8, 14.2, 8.5];                              // 49 cm deep, 1.2 m long, 76 cm high
  box(inner, 0, 5.4, z0, z1, top - .45, top, M.deskBlack, { r: .12 });
  for (const bz of [2.0, 12.4]) {                                      // steel wall brackets
    box(inner, 0.3, 4.7, bz, bz + .45, top - .85, top - .45, M.black, { r: .04 });
    box(inner, 0.3, 0.75, bz, bz + .45, top - 5.4, top - .45, M.black, { r: .04 });
    limb(inner, v(0.75, top - 5.2, bz + .22), v(4.5, top - .9, bz + .22), .16, M.black);
  }
  contact(inner, 0.4, 5.4, z0, z1, .18);
  // MacBook, screen facing into the room (+x), a notebook and pen, a mug
  laptop(inner, { x: 1.1, y: top, z: 7.5, yaw: Math.PI / 2, w: 3.45, d: 2.45, lid: 2.25, body: M.silver, screen: tex.mac, deck: tex.deck, r: .08 });
  box(inner, 2.0, 4.6, 1.6, 4.4, top, top + .25, mat('#2B3A5C', { roughness: .8 }), { r: .06 });
  rodZ(inner, 1.9, 4.1, 3.4, top + .33, .09, M.black, { cast: false });
  cyl(inner, 4.3, 11.3, .48, top, top + 1.0, M.white);
  ring(inner, 4.3, top + .55, 11.95, .38, .08, M.white, { axis: 'x', seg: 20, cast: false });
}

function snoopyPicture(inner, tex) {
  const [z0, z1, y0, y1] = [2.6, 12.6, 12.8, 19.5];                    // 90 x 60 cm canvas, 1.15 m off the floor
  box(inner, 0, 0.45, z0, z1, y0, y1, M.frameNavy, { r: .03 });
  plane(inner, '+x', 0.46, z0 + .35, z1 - .35, y0 + .35, y1 - .35, mat('#FFFFFF', { map: tex.snoopy, roughness: .75, env: .2 }));
}

function neonSign(inner, tex) {
  const [z0, z1, y0] = [10.7, 13.7, 8.5];                               // a 27 x 17 cm light box leaning on the wall
  box(inner, 0.12, 0.62, z0, z1, y0, y0 + 1.9, M.black, { r: .05 });
  box(inner, 0.62, 0.72, z0 + .15, z1 - .15, y0 + .15, y0 + 1.75, M.white, { sharp: true, cast: false });
  plane(inner, '+x', 0.73, z0 + .2, z1 - .2, y0 + .2, y0 + 1.7, flat('#FFFFFF', { map: tex.neon }));
  point(inner, 1.4, y0 + 1.0, 12.2, '#FFC46A', 2.0, 12, 11);
  glow(inner, 0.9, y0 + .95, 12.2, 2.6, '#FFD48A', 0, .22);
}

/**
 * The line light on the wall: not an S but a snake, an LED line that curls at the head, undulates and
 * trails off, no two bends alike. Drawn unlit and untone-mapped in a saturated amber so it stays yellow
 * (an emissive strip under ACES goes white), with a brighter core along the side the camera sees and
 * standoffs into the wall. Four point lights along the curve are the light it actually throws.
 */
function sLight(inner) {
  // tall like the S was (y 12.5 to 24.5, x 0.8 to 6.8): a curl at the head, then four bends of unequal reach down the wall
  const ctrl = [[0.42, 0.11], [0.58, 0.03], [0.76, 0.10], [0.74, 0.24], [0.56, 0.28], [0.34, 0.30], [0.16, 0.40], [0.22, 0.52],
    [0.50, 0.58], [0.78, 0.64], [0.84, 0.76], [0.66, 0.86], [0.40, 0.90], [0.20, 0.97], [0.08, 1.0]];
  const pts = ctrl.map(([u, w]) => v(0.8 + u * 6.0, 24.5 - w * 12.0, 0.55));
  const amber = flat('#FFAE1E', { toneMapped: false });
  const core = flat('#FFE59A', { toneMapped: false });
  const { curve } = tube(inner, pts, 0.17, amber, { seg: 260, radial: 12, cast: false });
  tube(inner, pts.map((p) => v(p.x + .03, p.y + .02, p.z + .1)), 0.075, core, { seg: 260, radial: 8, cast: false });
  for (const t of [0, 1]) { const p = curve.getPoint(t); sphere(inner, p.x, p.y, p.z, 0.17, amber, { cast: false, seg: 12 }); }
  for (const t of [0.07, 0.3, 0.52, 0.74, 0.95]) { const p = curve.getPoint(t); rodZ(inner, 0, p.z, p.x, p.y, 0.06, M.metal, { cast: false, seg: 8 }); }
  for (const t of [0.12, 0.4, 0.65, 0.9]) { const p = curve.getPoint(t); point(inner, p.x, p.y, 1.7, '#FFB236', 1.4, 15, 22); }
  for (const t of [0.08, 0.26, 0.44, 0.62, 0.8, 0.96]) { const p = curve.getPoint(t); glow(inner, p.x, p.y, p.z + .4, 2.4, '#FFB030', 0, .14); }
}

function monitorDesk(inner, tex) {
  const [x0, x1, z0, z1, top] = [5.2, 21.2, 0.4, 8.2, 8.5];            // 1.44 m x 70 cm gaming desk
  const carbon = mat('#FFFFFF', { map: tex.carbon, roughness: .32, env: .9, physical: true, clearcoat: .55, clearcoatRoughness: .22 });
  box(inner, x0, x1, z0, z1, top - .5, top, carbon, { r: .14 });
  box(inner, x0 + .5, x1 - .5, z0 + .5, z1 - .5, top - .9, top - .5, M.black, { r: .06 });       // frame under the top
  for (const lx of [x0 + .6, x1 - 1.3]) {                                                        // T legs
    box(inner, lx, lx + .7, 3.95, 4.65, 0.4, top - .9, M.black, { r: .06 });
    box(inner, lx - .15, lx + .85, z0 + .7, z1 - .7, 0, .55, M.black, { r: .12 });
    box(inner, lx - .05, lx + .75, z0 + .9, z1 - .9, top - 1.1, top - .9, M.black, { r: .05 });
  }
  box(inner, x0 + 1.3, x1 - 1.3, z0 + 1.0, z0 + 1.5, 1.9, 2.4, M.black, { r: .06 });              // cross brace
  contact(inner, x0, x1, z0, z1, .2);
  // laptop on a riser, left
  box(inner, 5.9, 9.6, 1.4, 4.6, top, top + 1.0, M.darkm, { r: .1 });
  laptop(inner, { x: 7.75, y: top + 1.0, z: 2.0, w: 3.5, d: 2.4, lid: 2.3, body: M.darkm, screen: tex.code });
  // the monitor (27", landscape, on a low stand), and the keyboard in front of it
  const mx = 13.5;
  box(inner, mx - 1.8, mx + 1.8, 3.4, 5.6, top, top + .25, M.black, { r: .1 });
  box(inner, mx - .45, mx + .45, 3.9, 4.6, top + .25, top + 2.0, M.black, { r: .06 });
  box(inner, mx - 3.65, mx + 3.65, 3.2, 3.55, top + 1.2, top + 5.45, M.black, { r: .08 });
  plane(inner, '+z', 3.56, mx - 3.45, mx + 3.45, top + 1.4, top + 5.25, flat('#FFFFFF', { map: tex.dev }));
  box(inner, mx - 2.2, mx + 2.2, 2.9, 3.2, top + 2.0, top + 4.6, M.darkm, { r: .1 });            // the back housing
  point(inner, mx, top + 3.3, 5.6, '#FFDDB0', 2.4, 9, 13);                                        // the monitor lights the desk and him
  keyboard(inner, 10.6, 15.5, 5.45, 7.0, top);
  box(inner, 16.4, 17.5, 5.6, 6.6, top, top + .4, M.grey, { r: .22 });                           // mouse
  rodZ(inner, 3.6, 5.5, 17.0, top + .08, .05, M.black, { cast: false });                          // mouse cable
  ps5(inner, 19.4, 2.7, top);
  dualsense(inner, 19.3, 5.6, top);
  // power strip and cables on the floor under the desk
  box(inner, 8.2, 11.4, 1.0, 1.9, 0, .5, M.white, { r: .08 });
  for (const sx of [8.8, 9.8, 10.8]) box(inner, sx - .25, sx + .25, 1.1, 1.75, .5, .56, M.darkm, { sharp: true, cast: false });
  tube(inner, [v(11.3, .3, 1.4), v(13.0, .35, 1.3), v(15.5, 1.2, 1.2), v(17.4, 4.5, 1.1), v(18.6, top - .95, 1.3)], .08, M.black, { seg: 40, radial: 6, cast: false });
  tube(inner, [v(8.4, .3, 1.5), v(6.2, .3, 1.7), v(5.6, 2.0, 1.9), v(5.8, top - .95, 2.6)], .08, M.black, { seg: 30, radial: 6, cast: false });
}

/** PS5, standing on its stand against the wall: black body between two white plates that flare at the top, a warm power light. */
function ps5(inner, x, z, top) {
  const H = 4.3, D = 2.9;                                                                        // 39 x 26 x 10.4 cm
  cyl(inner, x, z, 1.05, top, top + .12, M.psBlack, { seg: 36 });                                 // stand
  box(inner, x - .38, x + .38, z - D / 2 + .1, z + D / 2 - .1, top + .12, top + H - .35, M.psBlack, { r: .08 });
  for (const s of [-1, 1]) {
    const g = hinge(inner, x + s * .4, top + .12, z, 'z', -s * .055);                               // the plates lean out a touch
    box(g, s > 0 ? 0 : -.17, s > 0 ? .17 : 0, -D / 2, D / 2, 0, H - .12, M.psWhite, { r: .1 });
    box(g, s > 0 ? -.02 : -.15, s > 0 ? .15 : .02, -D / 2 + .3, D / 2 - .3, H - .12, H + .1, M.psWhite, { r: .08 });   // the taller lip
  }
  box(inner, x - .3, x + .3, z - D / 2 + .35, z + D / 2 - .35, top + H - .35, top + H - .31, flat('#FFE6C2', { toneMapped: false }), { sharp: true, cast: false });  // power light along the top, warm
  box(inner, x - .2, x + .2, z + D / 2 - .14, z + D / 2 - .02, top + 1.2, top + 1.45, M.darkm, { sharp: true, cast: false });       // disc slot
  point(inner, x + .9, top + 2.4, z, '#FFE0B8', .5, 1.8, 5);
  contact(inner, x - 1.1, x + 1.1, z - 1.1, z + 1.1, .22, top + .01);
}

/** DualSense on the desk: white body, black face plate and touchpad, two sticks, two grips. */
function dualsense(inner, x, z, top) {
  box(inner, x - 1.0, x + 1.0, z - .55, z + .55, top, top + .5, M.psWhite, { r: .22 });
  box(inner, x - .78, x + .78, z - .5, z + .45, top + .5, top + .56, M.psBlack, { r: .06, cast: false });
  box(inner, x - .34, x + .34, z - .42, z + .02, top + .56, top + .6, M.darkm, { r: .05, cast: false });  // touchpad
  for (const s of [-1, 1]) {
    limb(inner, v(x + s * .72, top + .25, z + .2), v(x + s * .95, top + .22, z + 1.15), .28, M.psWhite);     // grips
    cyl(inner, x + s * .42, z + .3, .13, top + .56, top + .8, M.psBlack, { seg: 14, cast: false });         // sticks
  }
  box(inner, x - .34, x + .34, z - .55, z - .4, top + .5, top + .62, flat('#FFE6C2', { toneMapped: false }), { sharp: true, cast: false });   // light bar
  contact(inner, x - 1.1, x + 1.1, z - .7, z + 1.3, .2, top + .01);
}

/** Mechanical keyboard: a case and 5 x 14 instanced keycaps with a darker modifier row. */
function keyboard(inner, x0, x1, z0, z1, top) {
  box(inner, x0, x1, z0, z1, top, top + .32, M.black, { r: .08 });
  const cols = 14, rows = 5, kw = (x1 - x0 - .3) / cols, kd = (z1 - z0 - .3) / rows;
  const caps = instanced(inner, new THREE.BoxGeometry(kw - .07, .14, kd - .07), M.key, cols * rows);
  for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
    const edge = r === rows - 1 && (c < 3 || c > 9), space = r === rows - 1 && c >= 4 && c <= 9;
    if (space && c > 4) continue;
    const sx = space ? 6 : 1;
    caps.place(x0 + .15 + (c + sx / 2) * kw, top + .39, z0 + .15 + (r + .5) * kd, sx, 1, 1, edge || space ? '#4A4A52' : r === 0 ? '#3A3A42' : '#2C2C33');
  }
  caps.done();
}

function guitar(inner) {
  const cx = 13.5, y0 = 15.8, S = 0.6;                                 // hangs above the monitor, 1 m long
  const body = new THREE.Shape();
  const pts = [[0, 0], [1.9, 0.3], [2.7, 1.6], [2.6, 3.2], [1.9, 4.3], [2.0, 5.3], [2.6, 6.3], [2.2, 7.3], [1.2, 7.0], [0.5, 6.4], [-0.5, 6.4], [-1.3, 7.2], [-2.0, 8.2], [-2.5, 7.6], [-2.6, 6.2], [-2.1, 4.6], [-2.7, 3.3], [-2.8, 1.8], [-2.0, 0.4]].map(([x, y]) => new THREE.Vector2(x * S, y * S));
  body.moveTo(0, 0); body.splineThru(pts.slice(1)); body.lineTo(0, 0);
  const bodyMesh = new THREE.Mesh(new THREE.ExtrudeGeometry(body, { depth: .55, bevelEnabled: true, bevelThickness: .08, bevelSize: .08, bevelSegments: 3, curveSegments: 24 }), M.guitar);
  bodyMesh.position.set(cx, y0, 0.45); bodyMesh.castShadow = bodyMesh.receiveShadow = true; inner.add(bodyMesh);
  const guard = new THREE.Shape();
  [[0.3, 0.9], [1.9, 1.4], [2.1, 3.0], [1.6, 4.4], [0.6, 5.6], [-0.4, 5.4], [-0.9, 4.0], [-0.9, 2.4], [-0.3, 1.1]].forEach(([x, y], i) => (i ? guard.lineTo(x * S, y * S) : guard.moveTo(x * S, y * S)));
  const guardMesh = new THREE.Mesh(new THREE.ExtrudeGeometry(guard, { depth: .06, bevelEnabled: false }), M.pickguard);
  guardMesh.position.set(cx, y0, 1.08); inner.add(guardMesh);
  const zf = 1.08;                                                     // the body's front face
  for (const y of [y0 + 1.9, y0 + 2.75, y0 + 3.6]) box(inner, cx - .35, cx + .35, zf, zf + .18, y, y + .22, M.darkm, { r: .04 });   // pickups
  box(inner, cx - .42, cx + .42, zf, zf + .14, y0 + 1.15, y0 + 1.45, M.chrome, { r: .03 });                                       // bridge
  for (const k of [-.3, .3]) cyl(inner, cx + k * 2.2, zf + .1, .08, y0 + 2.2, y0 + 2.3, M.chrome, { cast: false, seg: 10 }).rotation.x = Math.PI / 2;   // knobs
  box(inner, cx - .3, cx + .3, 0.65, 0.95, y0 + 4.2, y0 + 9.4, M.maple, { r: .08 });                                             // neck
  box(inner, cx - .3, cx + .3, 0.95, 1.02, y0 + 4.2, y0 + 9.4, M.fretboard, { sharp: true, cast: false });
  const frets = instanced(inner, new THREE.BoxGeometry(.6, .05, .05), M.chrome, 20, { cast: false });
  for (let i = 0; i < 20; i++) frets.place(cx, y0 + 4.45 + i * .26 * (1 - i * .012), 1.03, 1, 1, 1);
  frets.done();
  box(inner, cx - .5, cx + .5, 0.65, 0.95, y0 + 9.4, y0 + 11.0, M.guitar, { r: .1 });                                            // headstock
  for (let i = 0; i < 6; i++) { const k = i - 2.5; cyl(inner, cx + (k < 0 ? -.62 : .62), 0.8, .07, y0 + 9.7 + (i % 3) * .4, y0 + 9.75 + (i % 3) * .4, M.chrome, { cast: false, seg: 8 }).rotation.z = Math.PI / 2; }
  const strings = instanced(inner, new THREE.BoxGeometry(.025, 1, .025), M.chrome, 6, { cast: false });
  for (let i = 0; i < 6; i++) strings.place(cx - .25 + i * .1, y0 + 5.95, 1.06, 1, 9.5, 1);
  strings.done();
  box(inner, cx - .3, cx + .3, 0.2, 0.65, y0 + 10.2, y0 + 10.6, M.metal, { r: .06 });                                            // wall hanger
}

function gamingChairWithMihir(inner) {
  const cx = 13.2, cz = 12.4;                                          // faces the monitor (-z); the camera sees his back
  for (let i = 0; i < 5; i++) {                                        // five-star base on casters
    const a = i * Math.PI * 2 / 5 + .3, ex = cx + Math.cos(a) * 2.9, ez = cz + Math.sin(a) * 2.9;
    limb(inner, v(cx, .6, cz), v(ex, .5, ez), .22, M.black);
    sphere(inner, ex, .32, ez, .32, M.darkm, { seg: 14 });
  }
  cyl(inner, cx, cz, .6, .3, 1.0, M.black);
  cyl(inner, cx, cz, .32, 1.0, 4.2, M.chrome);
  box(inner, cx - 1.3, cx + 1.3, cz - 1.0, cz + 1.0, 4.2, 4.7, M.black, { r: .1 });
  box(inner, cx - 2.4, cx + 2.4, cz - 2.4, cz + 2.2, 4.7, 5.7, M.leather, { r: .45 });          // bucket seat, 51 cm
  for (const sx of [cx - 2.4, cx + 1.6]) box(inner, sx, sx + .8, cz - 2.2, cz + 2.0, 5.7, 6.4, M.leather, { r: .3 });
  const back = hinge(inner, cx, 5.2, cz + 2.3, 'x', .1);                                       // backrest, leaning back a touch
  box(back, -2.3, 2.3, 0, 1.0, 0, 9.4, M.leather, { r: .45 });
  box(back, -1.4, 1.4, -.06, .02, 1.2, 8.6, M.leatherHi, { r: .05, cast: false });
  for (const sx of [-2.6, 1.9]) box(back, sx, sx + .7, -.5, .6, 5.6, 9.0, M.leather, { r: .25 });   // wings
  box(back, -1.6, 1.6, -.9, .05, 8.0, 9.2, M.leather, { r: .4 });                                 // headrest pillow
  box(back, -1.7, 1.7, -.7, .05, 1.6, 2.8, M.leather, { r: .35 });                                // lumbar pillow
  for (const sx of [cx - 3.2, cx + 2.5]) {                                                        // armrests
    box(inner, sx + .15, sx + .55, cz - .6, cz + .4, 5.2, 7.4, M.black, { r: .08 });
    box(inner, sx, sx + .75, cz - 1.8, cz + 1.0, 7.4, 7.85, M.black, { r: .2 });
  }
  // Mihir. Seat surface 5.7 (51 cm); shoulders 10.9; head top 14.75 (1.33 m seated). He faces the monitor
  // (-z); the camera sees his back and right side. `torso` and `head` are groups so he can look back.
  const S = 5.7, hipY = S + .9;
  for (const sx of [-1, 1]) {
    const hx = cx + sx * .75;
    limb(inner, v(hx, hipY, cz + .6), v(hx + sx * .1, hipY + .1, cz - 3.0), .68, M.jeans);       // thigh
    sphere(inner, hx + sx * .1, hipY + .05, cz - 3.0, .6, M.jeans, { seg: 16 });                 // knee
    limb(inner, v(hx + sx * .1, hipY, cz - 3.0), v(hx + sx * .15, .9, cz - 2.6), .48, M.jeans);  // shin
    const fx = hx + sx * .15;
    box(inner, fx - .6, fx + .6, cz - 5.0, cz - 1.9, .3, 1.05, M.white, { r: .3 });               // trainer
    box(inner, fx - .62, fx + .62, cz - 5.05, cz - 1.85, 0, .32, M.darkm, { r: .12, cast: false });
    box(inner, fx - .3, fx + .3, cz - 4.6, cz - 2.6, 1.05, 1.12, M.maroon, { sharp: true, cast: false });   // laces
  }
  // torso: waist narrower than the chest, shoulder caps, the maroon trims as patches over the caps, collar, neck
  const torso = new THREE.Group(); torso.position.set(cx, 0, cz + .5); inner.add(torso);
  box(torso, -1.5, 1.5, -.8, .8, S + .9, S + 3.7, M.jersey, { r: .6 });
  box(torso, -1.85, 1.85, -.95, .95, S + 3.2, S + 5.65, M.jersey, { r: .8 });
  for (const sx of [-1, 1]) {
    sphere(torso, sx * 1.9, S + 5.1, 0, .64, M.jersey, { seg: 20 });
    sphere(torso, sx * 1.9, S + 5.1, 0, .665, M.maroon, { seg: 20, thetaLength: .7, cast: false });
  }
  cyl(torso, 0, -.05, .84, S + 5.55, S + 5.95, M.maroon, { rTop: .76 });
  cyl(torso, 0, -.1, .5, S + 5.6, S + 6.95, M.skin);
  // arms: short sleeves with a maroon cuff, upper arms hanging beside the body, elbows just behind the desk
  // edge, forearms level onto the keys, hands with fingers on the keyboard
  for (const sx of [-1, 1]) {
    const sh = v(cx + sx * 1.9, S + 5.1, cz + .5), el = v(cx + sx * 2.05, 8.6, cz - 1.0), ha = v(cx + sx * .95, 9.2, 6.75);
    const dir = el.clone().sub(sh).normalize(), cuff = sh.clone().lerp(el, .42);
    limb(inner, sh, cuff, .5, M.jersey);
    limb(inner, cuff.clone().addScaledVector(dir, -.1), cuff.clone().addScaledVector(dir, .1), .52, M.maroon, { cast: false });
    limb(inner, cuff, el, .4, M.skin);
    sphere(inner, el.x, el.y, el.z, .42, M.skin, { seg: 16 });
    limb(inner, el, ha, .34, M.skin);
    sphere(inner, ha.x, ha.y - .05, ha.z - .35, .5, M.skin, { scale: [1.0, .5, 1.3], seg: 16 });                          // palm
    for (let i = 0; i < 4; i++) limb(inner, v(ha.x + (i - 1.5) * .24, ha.y - .08, ha.z - .75), v(ha.x + (i - 1.5) * .26, ha.y - .3, ha.z - 1.3), .1, M.skin);
    limb(inner, v(ha.x - sx * .4, ha.y - .1, ha.z - .3), v(ha.x - sx * .8, ha.y - .3, ha.z - .65), .11, M.skin);           // thumb, toward the middle
  }
  // head group, hinged at the top of the neck; the face is on the -z side
  const head = new THREE.Group(); head.position.set(cx, S + 6.9, cz + .4); head.rotation.order = 'YXZ'; inner.add(head);
  const hy = .9;
  sphere(head, 0, hy, 0, 1.25, M.skin);
  for (const sx of [-1, 1]) sphere(head, sx * 1.22, hy - .1, -.05, .3, M.skin, { seg: 12, scale: [.6, 1, .8] });        // ears
  for (const sx of [-1, 1]) {
    sphere(head, sx * .43, hy + .15, -1.13, .17, M.eyeWhite, { seg: 14 });
    sphere(head, sx * .43, hy + .15, -1.27, .085, M.iris, { seg: 12 });
    box(head, sx * .43 - .27, sx * .43 + .27, -1.2, -1.08, hy + .5, hy + .6, M.hair, { r: .04, cast: false }).rotation.z = sx * .14;   // brow
    ring(head, sx * .45, hy + .13, -1.3, .34, .035, M.rim, { axis: 'z', seg: 32, cast: false });                           // round rim
    limb(head, v(sx * .79, hy + .13, -1.26), v(sx * 1.22, hy + .08, -.1), .03, M.rim, { cast: false });                    // temple
  }
  rodX(head, -.11, .11, hy + .18, -1.3, .03, M.rim, { cast: false });                                                     // bridge
  limb(head, v(0, hy + .05, -1.2), v(0, hy - .22, -1.34), .14, M.skinShade);                                              // nose
  // the trimmed beard: a thin shell on the lower face, sideburns up to the hair, the moustache, the mouth
  const FRONT = Math.PI * 1.5;                                                                                            // phi of the -z face
  sphere(head, 0, hy, 0, 1.275, M.beard, { seg: 40, phiStart: FRONT - 1.25, phiLength: 2.5, thetaStart: 1.83, thetaLength: .86, cast: false });
  for (const s of [-1, 1]) sphere(head, 0, hy, 0, 1.275, M.beard, { seg: 24, phiStart: FRONT + (s > 0 ? 1.25 : -1.55), phiLength: .3, thetaStart: 1.42, thetaLength: .5, cast: false });
  limb(head, v(-.32, hy - .33, -1.25), v(.32, hy - .33, -1.25), .075, M.beard, { cast: false });
  limb(head, v(-.2, hy - .5, -1.27), v(.2, hy - .5, -1.27), .035, M.lip, { cast: false });
  // hair: a cap with its rim tilted (high on the forehead, low on the nape) and the curls as instanced spheres
  // hugging the cap so the silhouette is a textured dome, not a bunch of grapes; it flares over the ears
  const HR = 1.55, HC = v(0, hy + .12, .2), TILT = .52, CUT = 1.48;
  sphere(head, HC.x, HC.y, HC.z, HR, M.hair, { seg: 40, thetaLength: CUT, rot: [TILT, 0, 0] });
  const curls = instanced(head, new THREE.SphereGeometry(1, 10, 8), M.hair, 80);
  const rnd = seeded(17), axis = v(0, Math.cos(TILT), Math.sin(TILT));
  for (let i = 0, n = 110; i < n; i++) {
    const yy = 1 - (i + .5) / n * 2, rr = Math.sqrt(1 - yy * yy), ph = i * 2.399963;
    const d = v(Math.cos(ph) * rr, yy, Math.sin(ph) * rr);
    if (d.angleTo(axis) > CUT * .97) continue;                                                                           // on the cap only
    const r = .3 + rnd() * .16, p = HC.clone().addScaledVector(d, HR - r * .4);
    curls.place(p.x, p.y, p.z, r, r, r);
  }
  for (const sx of [-1, 1]) for (const [dy, dz, r] of [[.3, -.35, .42], [.05, .15, .46], [.35, .55, .4]]) curls.place(sx * 1.45, hy + dy, dz, r, r, r);   // over the ears
  curls.done();
  contact(inner, cx - 2.6, cx + 2.6, cz - 2.6, cz + 2.6, .16);
  return { head, torso, at: v(cx, S + 7.8, cz + .4) };
}

// ---------------------------------------------------------------- the rack ----
function wallShelves(inner) {
  for (const hs of [16.5, 21.5]) box(inner, 23.0, 28.0, 0, 2.3, hs, hs + .5, M.black, { r: .06 });      // 45 cm floating shelves
  const [c0, cs] = [23.5, .9];                                                                            // Rubik's cube
  for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) for (let k = 0; k < 3; k++) {
    if (i && j && k && i < 2 && j < 2 && k < 2) continue;
    const m = [M.rubik[(i + j) % 6], M.rubik[(j + k + 2) % 6], M.rubik[(i * 2 + k) % 6], M.rubik[(i + k + 3) % 6], M.rubik[(i + j * 2 + 1) % 6], M.rubik[(j + 4) % 6]];
    box(inner, c0 + i * cs / 3, c0 + (i + 1) * cs / 3 - .03, 0.6 + k * cs / 3, 0.6 + (k + 1) * cs / 3 - .03, 17.0 + j * cs / 3, 17.0 + (j + 1) * cs / 3 - .03, m, { sharp: true, cast: false });
  }
  cyl(inner, 26.6, 1.2, .5, 17.0, 18.1, M.terracotta, { rTop: .58 });                                     // plant
  cyl(inner, 26.6, 1.2, .3, 18.1, 19.4, M.green);
  for (const [dx, dy, dz] of [[0, 1.5, 0], [.45, 1.0, .2], [-.4, 1.1, -.1], [.1, .7, .45]]) sphere(inner, 26.6 + dx, 18.1 + dy, 1.2 + dz, .36, M.green, { seg: 12, scale: [1.3, .8, 1] });
  box(inner, 25.0, 25.6, 0.5, 1.7, 17.0, 18.6, M.white, { r: .04 });                                      // a small frame
  cyl(inner, 24.0, 1.1, .45, 22.0, 24.2, M.candle);                                                       // candle
  sphere(inner, 24.0, 24.45, 1.1, .12, M.flame, { cast: false, seg: 8 });
  point(inner, 24.0, 24.7, 1.3, '#FFA040', .25, 3.5, 9);                                                   // the candle
  glow(inner, 24.0, 24.5, 1.4, 1.2, '#FFB060', 0, .12);
  cyl(inner, 26.4, 1.1, .7, 22.0, 23.7, M.white, { rTop: .62 });                                          // jar
  box(inner, 25.0, 25.7, 1.3, 1.6, 22.0, 23.4, M.darkm, { r: .04 });
}

function shelfUnit(inner) {
  const [x0, x1, z0, z1, H] = [23.0, 28.6, 0.8, 6.2, 13.2];                                              // 50 x 49 cm, 1.2 m
  box(inner, x0, x1, z0, z0 + .5, 0, H, M.shelfWood, { r: .04 });                                          // back panel
  box(inner, x0, x0 + .45, z0, z1, 0, H, M.shelfWood, { r: .04 });
  box(inner, x1 - .45, x1, z0, z1, 0, H, M.shelfWood, { r: .04 });
  for (const [a, b] of [[0, .6], [4.4, 4.9], [8.8, 9.3], [H - .5, H]]) box(inner, x0, x1, z0, z1, a, b, M.shelfWood, { r: .04 });
  contact(inner, x0, x1, z0, z1, .26);
  const books = instanced(inner, new THREE.BoxGeometry(1, 1, 1), M.book, 14);
  const rnd = seeded(5), pal = ['#C8302F', '#2E3A5E', '#E0B452', '#4F79B8', '#7E9C8A', '#F2F0EA', '#9C8AB8', '#D96A5A', '#2A2A30'];
  let bx = x0 + .7;
  for (let i = 0; i < 14 && bx < x1 - 1.0; i++) {
    const w = .3 + rnd() * .35, h = 2.3 + rnd() * 1.1, d = 1.7 + rnd() * .4;
    books.place(bx + w / 2, 9.3 + h / 2, z1 - .5 - d / 2, w, h, d, pal[Math.floor(rnd() * pal.length)]);
    bx += w + .04;
  }
  books.done();
  box(inner, x0 + .8, x1 - 1.6, z0 + 1.0, z1 - .9, 4.9, 7.6, M.grey, { r: .08 });                        // a box, middle tier
  box(inner, x0 + .9, x1 - .9, z0 + 1.0, z1 - .8, .6, 3.6, M.weave, { r: .25 });                          // woven basket, bottom
  box(inner, x0 + .5, x0 + 3.1, z0 + .7, z1 - 1.4, H, H + 2.4, M.white, { r: .08 });                      // a box on top
}

function shirtShape(hood, S) {
  const s = new THREE.Shape();
  const pts = [[-2.6, 0], [2.6, 0], [2.6, 8.6], [4.6, 9.6], [4.1, 12.4], [2.8, 11.9], [2.8, 13.9], [0.9, 14.7], [0, 14.1], [-0.9, 14.7], [-2.8, 13.9], [-2.8, 11.9], [-4.1, 12.4], [-4.6, 9.6], [-2.6, 8.6]];
  pts.forEach(([x, y], i) => (i ? s.lineTo(x * S, y * S) : s.moveTo(x * S, y * S)));
  s.closePath();
  if (hood) { const h = new THREE.Shape(); h.absellipse(0, 14.6 * S, 2.4 * S, 1.6 * S, 0, Math.PI * 2, false, 0); return [s, h]; }
  return [s];
}

function clothesRack(inner) {
  const [x0, x1, zb, rodY] = [30.6, 40.6, 5.6, 17.8];                                                    // 90 cm rail at 1.6 m
  for (const ux of [x0, x1 - .5]) {
    box(inner, ux, ux + .5, zb - 1.9, zb + 1.9, 0, .45, M.metal, { r: .1 });
    cyl(inner, ux + .25, zb, .2, .45, rodY - .2, M.metal);
    for (const dz of [-1.7, 1.7]) sphere(inner, ux + .25, .2, zb + dz, .2, M.black, { seg: 10 });
  }
  rodX(inner, x0, x1, rodY, zb, .2, M.metal);
  rodX(inner, x0 + .25, x1 - .25, 1.6, zb, .12, M.metal, { cast: false });                              // low bar
  const kinds = ['grey', 'navy', 'red', 'hoodie', 'spain'], S = .55;
  kinds.forEach((kind, i) => {
    const x = 31.9 + i * 1.9;
    const geo = new THREE.ExtrudeGeometry(shirtShape(kind === 'hoodie', S), { depth: .3, bevelEnabled: true, bevelThickness: .1, bevelSize: .1, bevelSegments: 3 });
    const m = new THREE.Mesh(geo, M.shirt[kind]);
    m.rotation.y = Math.PI / 2;                                                                           // hangs in the plane x = const, faces +x
    m.position.set(x, rodY - 8.5, zb);
    m.castShadow = m.receiveShadow = true;
    inner.add(m);
    const hy = rodY - 8.5 + 14.7 * S;                                                                     // the collar line
    for (const dz of [-2.4, 2.4]) limb(inner, v(x + .15, hy - .1, zb + dz), v(x + .15, rodY - .5, zb), .06, M.metal, { cast: false });   // hanger arms
    rodZ(inner, zb - 2.4, zb + 2.4, x + .15, hy - .1, .06, M.metal, { cast: false });
    ring(inner, x + .15, rodY - .1, zb, .32, .05, M.metal, { axis: 'x', arc: Math.PI * 1.5, rotZ: Math.PI * .75, cast: false });   // hook
    if (kind === 'spain') {
      box(inner, x + .3, x + .42, zb - .55, zb + .55, hy - .9, hy - .3, M.maroon, { sharp: true, cast: false });
      for (const dz of [-1, 1]) box(inner, x + .3, x + .42, zb + dz * 2.25 - .35, zb + dz * 2.25 + .35, hy - 2.8, hy - 1.3, M.maroon, { sharp: true, cast: false });
    }
  });
}

function footballBall(inner, tex) {
  const b = sphere(inner, 29.5, 1.22, 11.5, 1.22, mat('#FFFFFF', { map: tex.ball, roughness: .5, env: .45 }), { seg: 56 });
  b.rotation.set(.4, .6, .2);
  contact(inner, 28.4, 30.6, 10.4, 12.6, .3);
}

// ---------------------------------------------------------------- the door ----
/** A column of 10 x 13 cm photo prints beside the door, stuck up by hand so each sits a little off true. */
function collage(inner, zc, yc, tex, seed) {
  const rnd = seeded(seed);
  let i = 0;
  for (let r = 0; r < 4; r++) for (let c = 0; c < 3; c++, i++) {
    const z = zc + (c - 1) * 1.55 + (rnd() - .5) * .3, y = yc + (1.5 - r) * 1.95 + (rnd() - .5) * .3;
    const m = plane(inner, '+x', 0.06 + (i % 3) * .004, z - .55, z + .55, y - .72, y + .72, mat('#FFFFFF', { map: tex.photos[(i + seed) % 12], roughness: .5, env: .5 }));
    m.rotation.x = (rnd() - .5) * .14;
  }
}

function redTube(inner) {
  const y = 25.6, x = 0.75;                                                                               // 1.5 m red LED tube over the door
  rodZ(inner, 17.4, 34.0, x, y, .3, emissive(mat('#FF8A62', { roughness: .3 }), '#FF4A22', 1.6, 6.5), { cast: false });
  for (const z of [16.9, 34.0]) rodZ(inner, z, z + .5, x, y, .36, M.black, { cast: false });
  for (const z of [19, 25.7, 32.4]) rodZ(inner, 0, x, x / 2, y, .07, M.metal, { cast: false }).rotation.set(0, Math.PI / 2, 0);
  // the tube is a line source: three points along it stand in for it
  for (const z of [20.2, 25.7, 31.2]) point(inner, 2.4, y - .3, z, '#FF5A2A', 2.6, 24, 30);
  for (const z of [19.5, 25.7, 31.9]) glow(inner, 1.4, y, z, 7, '#FF6A3A', 0, .12);
}

function lamp(inner) {
  const [x0, x1, z0, z1] = [0.9, 4.9, 39.6, 43.6];                                                        // shelf lamp, 36 cm square, 2 m
  for (const [ux, uz] of [[x0, z0], [x1 - .4, z0], [x0, z1 - .4], [x1 - .4, z1 - .4]]) box(inner, ux, ux + .4, uz, uz + .4, 0, 17.4, M.black, { r: .05 });
  for (const hs of [0.5, 6.4, 12.3]) box(inner, x0, x1, z0, z1, hs, hs + .5, M.black, { r: .05 });
  contact(inner, x0, x1, z0, z1, .3);
  box(inner, x0 + .5, x1 - .5, z0 + .6, z1 - .6, 6.9, 9.4, M.darkm, { r: .15 });                          // speaker
  cyl(inner, x0 + 2.0, z1 - .58, .8, 8.15, 8.25, M.black, { cast: false }).rotation.x = Math.PI / 2;
  cyl(inner, x0 + 2.0, z1 - .58, .3, 8.15, 8.28, M.grey, { cast: false }).rotation.x = Math.PI / 2;
  const books = instanced(inner, new THREE.BoxGeometry(1, 1, 1), M.book, 7);
  const pal = ['#C8302F', '#4F79B8', '#E0B452', '#2A2A30', '#7E9C8A', '#F2F0EA', '#9C8AB8'];
  let bx = x0 + .6;
  for (let i = 0; i < 7; i++) { const w = .35 + (i % 3) * .12, h = 2.2 + (i % 4) * .3; books.place(bx + w / 2, 1.0 + h / 2, z0 + 2.0, w, h, 2.6, pal[i]); bx += w + .05; }
  books.done();
  cyl(inner, x0 + 2.0, z0 + 2.0, .55, 12.8, 13.4, M.white);                                               // a small plant on top
  cyl(inner, x0 + 2.0, z0 + 2.0, .25, 13.4, 14.3, M.green);
  for (const [dx, dy, dz] of [[0, 1.1, 0], [.4, .8, .2], [-.4, .9, -.2]]) sphere(inner, x0 + 2.0 + dx, 13.4 + dy, z0 + 2.0 + dz, .32, M.green, { seg: 12, scale: [1.3, .7, 1] });
  // the drum shade with a bulb inside: the one light that really lights this corner
  const cxl = (x0 + x1) / 2, czl = (z0 + z1) / 2;
  cyl(inner, cxl, czl, 2.5, 17.4, 21.9, M.shadeFabric, { seg: 40, cast: false, receive: false });
  ring(inner, cxl, 17.45, czl, 2.5, .06, M.black, { axis: 'y', seg: 40, cast: false });
  ring(inner, cxl, 21.85, czl, 2.5, .06, M.black, { axis: 'y', seg: 40, cast: false });
  cyl(inner, cxl, czl, .25, 17.4, 19.1, M.black, { cast: false });
  sphere(inner, cxl, 19.6, czl, .55, M.bulb, { cast: false, seg: 16 });
  // the bulb: a spot down through the open bottom of the shade (this one casts shadows: the shelf frame
  // and whatever stands near it draw on the floor and the wall), a spot up through the open top, and a
  // dimmer all-round point for what comes through the fabric
  const down = new THREE.SpotLight('#FFB85A', 40, 70, 1.25, .55, 2);
  down.position.set(cxl, 19.4, czl); down.target.position.set(cxl, 0, czl);
  down.castShadow = true; down.shadow.mapSize.set(1024, 1024); down.shadow.bias = -.003; down.shadow.normalBias = .04;
  down.shadow.camera.near = 2; down.shadow.camera.far = 60;
  themed(down, 'intensity', 40, 420);
  inner.add(down, down.target);
  const up = new THREE.SpotLight('#FFC070', 14, 40, 1.1, .6, 2);
  up.position.set(cxl, 19.8, czl); up.target.position.set(cxl, 40, czl);
  themed(up, 'intensity', 14, 160);
  inner.add(up, up.target);
  point(inner, cxl, 19.6, czl, '#FFB85A', 8, 90, 40);
  glow(inner, cxl, 19.6, czl, 7, '#FFC46A', .03, .2);
}

function roundRug(inner, tex) {
  const m = new THREE.Mesh(new THREE.CircleGeometry(4.2, 64), mat('#FFFFFF', { map: tex.rug, roughness: 1, transparent: true }));
  m.rotation.x = -Math.PI / 2; m.position.set(7.8, 0.05, 27.0); m.receiveShadow = true; inner.add(m);
}

// ----------------------------------------------------------------- the bed ----
function bed(inner, tex) {
  const [x0, x1, z0, z1] = [14.0, 38.0, 29.0, 44.0];                                                      // 2.16 x 1.35 m
  box(inner, x0, x1, z0, z1, 0, 3.0, M.bedframe, { r: .25 });
  box(inner, x0 - .3, x0 + .3, z0 - .3, z1 + .3, 0, 7.6, M.bedframe, { r: .15 });                         // headboard at the door-wall end
  box(inner, x0 + .5, x1 - .5, z0 + .5, z1 - .5, 3.0, 5.4, M.sheet, { r: .6 });
  contact(inner, x0, x1, z0, z1, .3);
  box(inner, 22.0, x1 - .6, z0 + .8, z1 - .3, 5.4, 6.6, M.blanket, { r: .55 });                           // the grey blanket
  box(inner, 22.0, 24.6, z0 + .8, z1 - .3, 6.6, 7.3, M.blanket, { r: .35 });                              // folded back edge
  box(inner, 22.0, x1 - .6, z1 - .5, z1 + .2, 3.4, 5.6, M.blanket, { r: .3 });                            // draped over the front edge
  for (const [pz0, pz1] of [[z0 + 1.2, z0 + 7.0], [z0 + 7.8, z0 + 13.8]]) box(inner, x0 + 1.0, x0 + 7.0, pz0, pz1, 5.4, 6.8, M.pillow, { r: .7 });
  // his phone, face up on the pillow by the headboard, screen lit
  const g = new THREE.Group(); g.position.set(18.4, 6.8, 32.6); g.rotation.y = -.22; inner.add(g);
  box(g, -.8, .8, -1.6, 1.6, 0, .2, M.psBlack, { r: .08 });
  plane(g, '+y', .205, -.7, .7, -1.5, 1.5, flat('#FFFFFF', { map: tex.phone }));
  point(g, 0, .8, 0, '#FFD9A8', 1.0, 4.0, 7);
}

function meshChair(inner) {
  const cx = 31.0, cz = 20.6;                                                                             // faces the desks (-z); the camera sees its back
  for (let i = 0; i < 5; i++) {
    const a = i * Math.PI * 2 / 5 + .7, ex = cx + Math.cos(a) * 2.6, ez = cz + Math.sin(a) * 2.6;
    limb(inner, v(cx, .55, cz), v(ex, .45, ez), .2, M.black);
    sphere(inner, ex, .3, ez, .3, M.darkm, { seg: 14 });
  }
  cyl(inner, cx, cz, .3, .5, 4.3, M.chrome);
  box(inner, cx - 2.1, cx + 2.1, cz - 2.1, cz + 2.0, 4.3, 5.2, M.black, { r: .4 });
  const back = hinge(inner, cx, 5.0, cz + 2.0, 'x', .12);
  box(back, -2.0, 2.0, 0, .5, 0, 5.8, M.mesh, { r: .3 });
  box(back, -2.05, 2.05, .05, .45, 0, 5.8, M.black, { r: .1, cast: false });
  box(back, -1.9, 1.9, .5, .9, .3, 1.2, M.black, { r: .1 });
  box(back, -.3, .3, .1, .4, 5.8, 6.5, M.black, { sharp: true });
  box(back, -1.3, 1.3, -.2, .5, 6.5, 8.0, M.black, { r: .3 });                                             // headrest
  for (const ax of [cx - 2.7, cx + 2.1]) { box(inner, ax + .15, ax + .45, cz - .5, cz + .3, 5.2, 6.9, M.black, { r: .06 }); box(inner, ax, ax + .6, cz - 1.5, cz + 1.0, 6.9, 7.25, M.black, { r: .15 }); }
  contact(inner, cx - 2.4, cx + 2.4, cz - 2.4, cz + 2.4, .18);
}

function floorBits(inner) {
  for (const [sx, sz, ry] of [[17.0, 26.4, .1], [18.8, 26.6, -.08]]) {                                   // slippers
    const g = new THREE.Group(); g.position.set(sx, 0, sz); g.rotation.y = ry; inner.add(g);
    box(g, -.65, .65, -1.5, 1.5, 0, .35, M.grey, { r: .2 });
    box(g, -.6, .6, -1.3, -.2, .35, .95, M.darkm, { r: .3 });
  }
  box(inner, 39.6, 42.0, 29.6, 31.4, 0, 4.8, M.black, { r: .5 });                                         // backpack, by the foot of the bed
  box(inner, 39.4, 42.2, 29.4, 31.6, 4.8, 5.6, M.darkm, { r: .4 });
  box(inner, 40.0, 41.6, 31.4, 31.7, 1.0, 2.2, M.darkm, { r: .1, cast: false });
  limb(inner, v(39.8, 5.4, 30.5), v(40.3, 6.6, 30.5), .12, M.darkm);
  limb(inner, v(41.8, 5.4, 30.5), v(41.3, 6.6, 30.5), .12, M.darkm);
  contact(inner, 39.6, 42.0, 29.6, 31.4, .3);
  cyl(inner, 36.5, 24.0, .4, 0, 2.6, mat('#4F79B8', { roughness: .35, env: .8 }));                        // water bottle
  cyl(inner, 36.5, 24.0, .3, 2.6, 3.0, M.white);
}

// --------------------------------------------------------------- the window ----
// The sun enters only through the window: a shadow-only front wall (never drawn, never picked) with the
// window cut out of it, built from four strips around the hole plus a mullion and a transom, so the light
// on the floor has the shape of the window. As the room comes apart the hole opens — setWindow(g), g = 0
// the window, g = 1 no wall at all — and the floating pieces stand in full sun.
let win = null;
function windowWall(inner) {
  const m = new THREE.MeshBasicMaterial({ colorWrite: false, depthWrite: false, side: THREE.DoubleSide });
  const strip = () => {
    const s = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), m);
    s.castShadow = true; s.receiveShadow = false; s.frustumCulled = false; s.userData.noPick = true;
    inner.add(s);
    return s;
  };
  win = { strips: [strip(), strip(), strip(), strip()], bars: [strip(), strip()] };
  setWindow(0);
}


export function setWindow(g) {
  if (!win) return;
  const { x0, x1, y0, y1 } = WINDOW;
  const z = WINDOW.z + 0.6;                                          // just outside the slab and wall faces at 44, so they never z-fight with it
  const E = 120;                                                     // the wall's reach: no sun ray to the room gets round it
  const cx = (x0 + x1) / 2, cy = (y0 + y1) / 2;
  const hw = (x1 - x0) / 2 + g * E, hh = (y1 - y0) / 2 + g * E;
  const place = (s, xa, xb, ya, yb) => { s.position.set((xa + xb) / 2, (ya + yb) / 2, z); s.scale.set(Math.max(0.001, xb - xa), Math.max(0.001, yb - ya), 1); };
  const [L, R, T, B] = win.strips;
  place(L, cx - E, cx - hw, cy - E, cy + E);
  place(R, cx + hw, cx + E, cy - E, cy + E);
  place(T, cx - hw, cx + hw, cy + hh, cy + E);
  place(B, cx - hw, cx + hw, cy - E, cy - hh);
  const t = 0.3 * (1 - g);                                           // the glazing bars thin out as the wall goes
  place(win.bars[0], cx - t, cx + t, cy - hh, cy + hh);
  const ty = y0 + (y1 - y0) * .64;
  place(win.bars[1], cx - hw, cx + hw, ty - t, ty + t);
}

// ------------------------------------------------------------------ build ----
const nextFrame = () => new Promise((r) => requestAnimationFrame(() => r()));

/** Builds the room a piece at a time, yielding a frame between pieces so the page stays responsive while it does. */
export async function buildRoom(scene) {
  const tex = {
    tiles: T.tiles(), tilesBump: T.tilesBump(), plaster: T.plasterBump(), carbon: T.carbon(), wood: T.wood(), woodLight: T.wood('#CDAE7E', '#A98755'),
    quilt: T.quilt(), weave: T.weave(), mac: T.macScreen(), deck: T.macDeck(), code: T.codeScreen(), dev: T.devScreen(), phone: T.phoneScreen(),
    snoopy: T.snoopyPrint(), neon: T.neonSign(), rug: T.rug(), ball: T.football(), corridor: T.corridor(),
    photos: Array.from({ length: 12 }, (_, i) => T.photoPrint(i)),
    shadeV1: T.shade('v1', .3), shadeU0: T.shade('u0', .3),
  };
  M = materials(tex);
  await nextFrame();
  const pieces = {};
  for (const name of Object.keys(PIECES)) {
    const rect = PIECES[name].rect;
    const [x0, x1, z0, z1] = rect;
    const g = new THREE.Group(); g.name = name;
    const centre = new THREE.Vector3((x0 + x1) / 2, 0, (z0 + z1) / 2);
    g.position.copy(centre);
    const inner = new THREE.Group(); inner.position.copy(centre).negate(); g.add(inner);
    slab(inner, rect, tex);
    pieces[name] = { name, rect, centre, g, inner, lift: 0, liftGoal: 0 };
    scene.add(g);
  }
  const P = pieces;
  // the corner
  doorWall(P.battle.inner, 0, 17, tex);
  sWall(P.battle.inner, 0, 22);
  snoopyPicture(P.battle.inner, tex);
  neonSign(P.battle.inner, tex);
  wallDesk(P.battle.inner, tex);
  sLight(P.battle.inner);
  monitorDesk(P.battle.inner, tex);
  guitar(P.battle.inner);
  const figure = gamingChairWithMihir(P.battle.inner);
  await nextFrame();
  // the rack
  sWall(P.rack.inner, 22, 44);
  wallShelves(P.rack.inner);
  shelfUnit(P.rack.inner);
  clothesRack(P.rack.inner);
  footballBall(P.rack.inner, tex);
  await nextFrame();
  // the door
  doorWall(P.door.inner, 17, 44, tex, { doorway: true });
  collage(P.door.inner, 20.0, 19.5, tex, 0);
  collage(P.door.inner, 37.8, 19.5, tex, 4);
  redTube(P.door.inner);
  lamp(P.door.inner);
  roundRug(P.door.inner, tex);
  await nextFrame();
  // the bed
  bed(P.bed.inner, tex);
  meshChair(P.bed.inner);
  floorBits(P.bed.inner);
  // each piece's bounds, before the (huge, invisible) window wall joins the door piece
  for (const p of Object.values(pieces)) { p.g.updateMatrixWorld(true); p.box0 = new THREE.Box3().setFromObject(p.g); }
  windowWall(P.door.inner);

  return { pieces, figure };
}
