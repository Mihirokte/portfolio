// helpers.js — tiny construction kit on top of three.js.
// World units are the room's units (1 unit = 9 cm: room 44 x 44, wall height 32). Axes: X = along the
// S wall, Y = up, Z = along the door wall. Every builder takes min/max corners like the pixel scripts
// did (x0, x1, z0, z1, y0, y1) so the mapped layout carries over number for number.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

export const UP = new THREE.Vector3(0, 1, 0);

/** Matte standard material with sane defaults for a lit diorama. */
export function mat(color, o = {}) {
  const M = o.physical ? THREE.MeshPhysicalMaterial : THREE.MeshStandardMaterial;
  const m = new M({
    color,
    roughness: o.roughness ?? 0.88,
    metalness: o.metalness ?? 0,
    map: o.map ?? null,
    bumpMap: o.bumpMap ?? null,
    bumpScale: o.bumpScale ?? 1,
    roughnessMap: o.roughnessMap ?? null,
    alphaMap: o.alphaMap ?? null,
    side: o.side ?? THREE.FrontSide,
    transparent: !!o.transparent,
    opacity: o.opacity ?? 1,
    envMapIntensity: o.env ?? 0.35,
  });
  if (o.physical) { m.clearcoat = o.clearcoat ?? 0; m.clearcoatRoughness = o.clearcoatRoughness ?? 0.3; }
  if (o.emissive) {
    m.emissive = new THREE.Color(o.emissive);
    m.emissiveIntensity = o.emissiveIntensity ?? 1;
    if (o.emissiveMap) m.emissiveMap = o.emissiveMap;
  }
  return m;
}

/** Unlit material: screens, prints, light tubes. */
export function flat(color, o = {}) {
  return new THREE.MeshBasicMaterial({ color, map: o.map ?? null, side: o.side ?? THREE.FrontSide, transparent: !!o.transparent, opacity: o.opacity ?? 1, toneMapped: o.toneMapped ?? true });
}

function finish(m, o) {
  m.castShadow = o.cast ?? true;
  m.receiveShadow = o.receive ?? true;
  return m;
}

const SOFT = 0.06;                                   // default edge radius: every object catches a highlight

/** Axis-aligned box from corners. Edges are softened unless `sharp`; pass r for a bigger radius. */
export function box(g, x0, x1, z0, z1, y0, y1, material, o = {}) {
  const w = x1 - x0, d = z1 - z0, h = y1 - y0;
  const r = o.sharp ? 0 : Math.min(o.r ?? SOFT, w / 2.001, h / 2.001, d / 2.001);
  const geo = r > 0
    ? new RoundedBoxGeometry(w, h, d, o.seg ?? (r > 0.3 ? 5 : 3), r)
    : new THREE.BoxGeometry(w, h, d);
  const m = new THREE.Mesh(geo, material);
  m.position.set((x0 + x1) / 2, (y0 + y1) / 2, (z0 + z1) / 2);
  g.add(finish(m, o));
  return m;
}

/** Vertical cylinder at (x, z) from y0 to y1. */
export function cyl(g, x, z, r, y0, y1, material, o = {}) {
  const geo = new THREE.CylinderGeometry(o.rTop ?? r, r, y1 - y0, o.seg ?? 32);
  const m = new THREE.Mesh(geo, material);
  m.position.set(x, (y0 + y1) / 2, z);
  g.add(finish(m, o));
  return m;
}

/** Cylinder lying along X (bars, tubes). */
export function rodX(g, x0, x1, y, z, r, material, o = {}) {
  const geo = new THREE.CylinderGeometry(r, r, x1 - x0, o.seg ?? 20);
  const m = new THREE.Mesh(geo, material);
  m.rotation.z = Math.PI / 2;
  m.position.set((x0 + x1) / 2, y, z);
  g.add(finish(m, o));
  return m;
}

/** Cylinder lying along Z. */
export function rodZ(g, z0, z1, x, y, r, material, o = {}) {
  const geo = new THREE.CylinderGeometry(r, r, z1 - z0, o.seg ?? 20);
  const m = new THREE.Mesh(geo, material);
  m.rotation.x = Math.PI / 2;
  m.position.set(x, y, (z0 + z1) / 2);
  g.add(finish(m, o));
  return m;
}

/** Sphere, or a part of one: phiStart/phiLength/thetaStart/thetaLength cut it (caps, shells), rot = [x, y, z] in radians. */
export function sphere(g, x, y, z, r, material, o = {}) {
  const ws = o.seg ?? 28, hs = o.seg ? Math.round(o.seg * 0.7) : 20;
  const m = new THREE.Mesh(new THREE.SphereGeometry(r, ws, hs, o.phiStart ?? 0, o.phiLength ?? Math.PI * 2, o.thetaStart ?? 0, o.thetaLength ?? Math.PI), material);
  m.position.set(x, y, z);
  if (o.scale) m.scale.set(...o.scale);
  if (o.rot) m.rotation.set(...o.rot);
  g.add(finish(m, o));
  return m;
}

/** Capsule between two points: arms, legs, tripod legs. */
export function limb(g, a, b, r, material, o = {}) {
  const dir = new THREE.Vector3().subVectors(b, a);
  const len = Math.max(0.01, dir.length() - 2 * r);
  const m = new THREE.Mesh(new THREE.CapsuleGeometry(r, len, 8, 20), material);
  m.position.copy(a).addScaledVector(dir, 0.5);
  m.quaternion.setFromUnitVectors(UP, dir.normalize());
  g.add(finish(m, o));
  return m;
}

/** Torus (rings, hooks, mug handles). axis: 'x' | 'y' | 'z' = the ring's axis. */
export function ring(g, x, y, z, R, r, material, o = {}) {
  const m = new THREE.Mesh(new THREE.TorusGeometry(R, r, o.tube ?? 10, o.seg ?? 32, o.arc ?? Math.PI * 2), material);
  m.position.set(x, y, z);
  if (o.axis === 'x') m.rotation.y = Math.PI / 2;
  else if (o.axis === 'y') m.rotation.x = Math.PI / 2;
  if (o.rotZ) m.rotation.z = o.rotZ;
  g.add(finish(m, o));
  return m;
}

/** Smooth tube along points (the S light, cables). */
export function tube(g, points, r, material, o = {}) {
  const curve = new THREE.CatmullRomCurve3(points, !!o.closed, 'centripetal', o.tension ?? 0.5);
  const m = new THREE.Mesh(new THREE.TubeGeometry(curve, o.seg ?? 160, r, o.radial ?? 12, !!o.closed), material);
  g.add(finish(m, o));
  return { mesh: m, curve };
}

/** A thin textured plane. `normal` is one of '+x' '-x' '+z' '-z' '+y'. u/v = the two in-plane spans. */
export function plane(g, normal, at, u0, u1, v0, v1, material, o = {}) {
  const geo = new THREE.PlaneGeometry(u1 - u0, v1 - v0);
  const m = new THREE.Mesh(geo, material);
  const cu = (u0 + u1) / 2, cv = (v0 + v1) / 2;
  switch (normal) {
    case '+x': m.rotation.y = Math.PI / 2; m.position.set(at, cv, cu); break;                   // u = z, v = y
    case '-x': m.rotation.y = -Math.PI / 2; m.position.set(at, cv, cu); break;
    case '+z': m.position.set(cu, cv, at); break;                                              // u = x, v = y
    case '-z': m.rotation.y = Math.PI; m.position.set(cu, cv, at); break;
    case '+y': m.rotation.x = -Math.PI / 2; m.position.set(cu, at, cv); break;                 // u = x, v = z
  }
  m.castShadow = o.cast ?? false;
  m.receiveShadow = o.receive ?? false;
  if (o.renderOrder) m.renderOrder = o.renderOrder;
  g.add(m);
  return m;
}

/**
 * A group hinged at (x, y, z) and rotated `angle` about `axis` ('x' or 'z'): laptop lids, door leaves,
 * leaning things. Build the children in the hinge's local frame (hinge at the origin).
 */
export function hinge(g, x, y, z, axis, angle) {
  const h = new THREE.Group();
  h.position.set(x, y, z);
  h.rotation[axis] = angle;
  g.add(h);
  return h;
}

/** Instanced copies of one geometry; call place(i, x, y, z, sx, sy, sz, color) then done(). */
export function instanced(g, geo, material, n, o = {}) {
  const im = new THREE.InstancedMesh(geo, material, n);
  im.castShadow = o.cast ?? true;
  im.receiveShadow = o.receive ?? true;
  const m4 = new THREE.Matrix4(), p = new THREE.Vector3(), q = new THREE.Quaternion(), s = new THREE.Vector3();
  const col = new THREE.Color();
  let i = 0;
  g.add(im);
  return {
    mesh: im,
    place(x, y, z, sx = 1, sy = 1, sz = 1, color = null, rotY = 0) {
      if (i >= n) return;
      p.set(x, y, z); s.set(sx, sy, sz); q.setFromAxisAngle(UP, rotY);
      im.setMatrixAt(i, m4.compose(p, q, s));
      if (color) im.setColorAt(i, col.set(color));
      i++;
    },
    done() { im.count = i; im.instanceMatrix.needsUpdate = true; if (im.instanceColor) im.instanceColor.needsUpdate = true; },
  };
}

/** Texture density: every canvas texture is drawn at Q x its nominal size (the room fills the window now). */
export const TEX_Q = 2;

/** Canvas-drawn texture. draw(ctx, w, h) works in nominal pixels; the canvas itself is TEX_Q x denser. */
export function canvasTex(w, h, draw, o = {}) {
  const c = document.createElement('canvas');
  const q = o.q ?? TEX_Q;
  c.width = w * q; c.height = h * q;
  const ctx = c.getContext('2d');
  ctx.scale(q, q);
  draw(ctx, w, h);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = o.linear ? THREE.NoColorSpace : THREE.SRGBColorSpace;
  t.anisotropy = o.anisotropy ?? 16;
  if (o.repeat) { t.wrapS = t.wrapT = THREE.RepeatWrapping; }
  if (o.nearest) { t.magFilter = THREE.NearestFilter; }
  return t;
}

let _radial = null;
function radialTex() {
  return _radial ??= canvasTex(256, 256, (ctx, w, h) => {
    const gr = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, w / 2);
    gr.addColorStop(0, 'rgba(255,255,255,1)');
    gr.addColorStop(0.3, 'rgba(255,255,255,.55)');
    gr.addColorStop(0.65, 'rgba(255,255,255,.14)');
    gr.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = gr; ctx.fillRect(0, 0, w, h);
  });
}

/** Soft radial halo at a light source: the glare the eye (and a camera) sees looking at an emitter. Faint by day, present at night. */
export function glow(g, x, y, z, size, color, day = 0.5, night = day) {
  const m = new THREE.SpriteMaterial({ map: radialTex(), color, transparent: true, opacity: day, depthWrite: false, blending: THREE.AdditiveBlending });
  themed(m, 'opacity', day, night);
  const s = new THREE.Sprite(m);
  s.position.set(x, y, z);
  s.scale.set(size, size, 1);
  g.add(s);
  return s;
}

// ------------------------------------------------------------------ theme ----
// Day and night are the same scene under different light. Every value that differs between the two is
// registered here with both readings, and applyTheme(t) sets all of them at once for t in [0, 1]
// (0 = day, 1 = night), so the switch can be tweened frame by frame.
export const THEMED = [];

/** Register `target[key]` as day/night themed. Numbers lerp; THREE.Color values lerp in RGB. */
export function themed(target, key, day, night) {
  THEMED.push({ target, key, day, night, color: day instanceof THREE.Color });
  return target;
}

export function applyTheme(t) {
  for (const r of THEMED) {
    if (r.color) r.target[r.key].copy(r.day).lerp(r.night, t);
    else r.target[r.key] = r.day + (r.night - r.day) * t;
  }
}

const col = (c) => new THREE.Color(c);

/**
 * A real point light in physical units (candela, inverse-square falloff) with a day and a night
 * intensity. `distance` is a soft cutoff so a small source does not shade the far side of the room.
 */
export function point(g, x, y, z, color, day, night, distance = 0) {
  const l = new THREE.PointLight(color, day, distance, 2);
  l.position.set(x, y, z);
  themed(l, 'intensity', day, night);
  g.add(l);
  return l;
}

/** A themed emissive strength on a material (the lamp shade, the bulb, the LED tube). */
export function emissive(m, color, day, night) {
  m.emissive = col(color);
  m.emissiveIntensity = day;
  themed(m, 'emissiveIntensity', day, night);
  return m;
}

let _soft = null;
function softRectTex() {
  return _soft ??= canvasTex(256, 256, (ctx, w, h) => {
    ctx.clearRect(0, 0, w, h);
    ctx.shadowColor = 'rgba(0,0,0,1)'; ctx.shadowBlur = 48;
    ctx.fillStyle = 'rgba(0,0,0,1)';
    ctx.beginPath(); ctx.roundRect(56, 56, w - 112, h - 112, 28); ctx.fill();
  });
}

/** Contact shadow on the floor under a piece of furniture: the darkening where a thing meets the ground. */
export function contact(g, x0, x1, z0, z1, opacity = 0.32, y = 0.025) {
  const m = new THREE.MeshBasicMaterial({ map: softRectTex(), color: '#3A3028', transparent: true, opacity, depthWrite: false, toneMapped: false });
  const pad = Math.min(x1 - x0, z1 - z0) * 0.35;
  return plane(g, '+y', y, x0 - pad, x1 + pad, z0 - pad, z1 + pad, m, { renderOrder: 1 });
}

export const lerp = (a, b, t) => a + (b - a) * t;
export const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
export const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
