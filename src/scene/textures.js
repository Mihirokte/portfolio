// textures.js — every texture is drawn on a canvas at load: the screens and prints as they look from across the room. No image downloads, no fonts needed
// beyond the site's own pixel faces (which are already loaded by the page).
import { canvasTex } from './helpers.js';

const PX = "Inter, system-ui, sans-serif";

function rr(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath();
}

function seeded(seed) {
  let s = seed * 9301 + 49297;
  return () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
}

// ------------------------------------------------------------------ surfaces ----
/** One floor tile (repeats): a flat fill with a hairline of grout on two edges. */
export function tiles() {
  return canvasTex(512, 512, (ctx, w, h) => {
    ctx.fillStyle = '#E2D9CB'; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#CFC5B5';
    ctx.fillRect(0, 0, w, 6); ctx.fillRect(0, 0, 6, h);            // grout (top + left edge of each tile)
  }, { repeat: true, anisotropy: 16 });
}

/** Woven rattan for the basket. */
export function weave() {
  return canvasTex(128, 128, (ctx, w, h) => {
    ctx.fillStyle = '#8A6E4E'; ctx.fillRect(0, 0, w, h);
    for (let y = 0; y < h; y += 16) for (let x = 0; x < w; x += 16) {
      ctx.fillStyle = ((x + y) / 16) % 2 ? '#A3845F' : '#75593C'; ctx.fillRect(x + 1, y + 1, 14, 14);
    }
  }, { repeat: true });
}

// ------------------------------------------------------------------- screens ----
/** The MacBook's screen from across the room: the projects window on a warm desktop (what it boots into up close). */
export function macScreen() {
  return canvasTex(512, 320, (ctx, w, h) => {
    const g = ctx.createRadialGradient(w * .2, 0, 0, w * .2, 0, w * 1.1);
    g.addColorStop(0, '#F3EEE6'); g.addColorStop(.55, '#E4DDD1'); g.addColorStop(1, '#D6CEC1');
    ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = 'rgba(255,255,255,.55)'; ctx.fillRect(0, 0, w, 12);
    const x0 = 22, y0 = 26, ww = w - 44, hh = h - 46;
    ctx.fillStyle = 'rgba(40,30,20,.16)'; rr(ctx, x0, y0 + 6, ww, hh, 10); ctx.fill();
    ctx.fillStyle = '#FFFFFF'; rr(ctx, x0, y0, ww, hh, 10); ctx.fill();
    ctx.fillStyle = '#FAF9F7'; ctx.fillRect(x0 + 6, y0, ww - 12, 22);
    ctx.fillStyle = 'rgba(29,29,33,.09)'; ctx.fillRect(x0, y0 + 22, ww, 1);
    ['#FF5F57', '#FEBC2E', '#28C840'].forEach((c, k) => { ctx.fillStyle = c; ctx.beginPath(); ctx.arc(x0 + 14 + k * 11, y0 + 11, 3.5, 0, Math.PI * 2); ctx.fill(); });
    ctx.fillStyle = '#1D1D21'; ctx.fillRect(x0 + 52, y0 + 9, 44, 5);
    const cw = (ww - 12 * 4) / 3, ch = (hh - 23 - 12 * 3) / 2;
    for (let r = 0; r < 2; r++) for (let c = 0; c < 3; c++) {
      if (r === 1 && c === 2) continue;
      const cx = x0 + 12 + c * (cw + 12), cy = y0 + 23 + 12 + r * (ch + 12);
      ctx.fillStyle = '#F6F4F0'; rr(ctx, cx, cy, cw, ch, 8); ctx.fill();
      ctx.fillStyle = '#9A968E'; ctx.fillRect(cx + 10, cy + 10, 24, 4);
      ctx.fillStyle = '#1D1D21'; ctx.fillRect(cx + 10, cy + ch - 30, cw * .55, 6);
      ctx.fillStyle = '#A09C95'; ctx.fillRect(cx + 10, cy + ch - 18, cw * .7, 4);
    }
  });
}

/** MacBook deck: black keys on silver, a trackpad below. Long axis = u. */
export function macDeck() {
  return canvasTex(512, 352, (ctx, w, h) => {
    ctx.fillStyle = '#C9CBCF'; ctx.fillRect(0, 0, w, h);
    const kx0 = 36, kw = (w - 72) / 14, kh = 26;
    for (let r = 0; r < 6; r++) for (let c = 0; c < 14; c++) {
      if (r === 5 && c > 3 && c < 9) { if (c === 4) { rr(ctx, kx0 + 4 * kw + 2, 14 + 5 * 30 + 2, 5 * kw - 4, kh - 4, 3); ctx.fillStyle = '#1E1E22'; ctx.fill(); } continue; }
      rr(ctx, kx0 + c * kw + 2, 14 + r * 30 + 2, kw - 4, kh - 4, 3); ctx.fillStyle = '#1E1E22'; ctx.fill();
      ctx.fillStyle = 'rgba(255,255,255,.07)'; ctx.fillRect(kx0 + c * kw + 4, 14 + r * 30 + 4, kw - 8, 2);
    }
    rr(ctx, w / 2 - 110, 204, 220, 128, 8); ctx.fillStyle = '#B9BBC0'; ctx.fill();
    ctx.strokeStyle = 'rgba(0,0,0,.12)'; ctx.lineWidth = 2; ctx.stroke();
  });
}

/** Code editor. */
export function codeScreen() {
  return canvasTex(480, 320, (ctx, w, h) => {
    ctx.fillStyle = '#1E1F26'; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#2A2B33'; ctx.fillRect(0, 0, w, 24); ctx.fillRect(0, 24, 34, h);
    ctx.fillStyle = '#3A3B45'; ctx.fillRect(0, 24, 120, h);
    const rnd = seeded(3);
    const pal = ['#C792EA', '#82AAFF', '#C3E88D', '#F78C6C', '#89DDFF', '#EEFFFF'];
    for (let i = 0; i < 18; i++) {
      const y = 38 + i * 15; let x = 134 + Math.floor(rnd() * 3) * 16;
      const n = 1 + Math.floor(rnd() * 4);
      for (let k = 0; k < n; k++) { const len = 18 + rnd() * 70; ctx.fillStyle = pal[Math.floor(rnd() * pal.length)]; ctx.fillRect(x, y, len, 6); x += len + 9; if (x > w - 30) break; }
    }
    for (let i = 0; i < 12; i++) { ctx.fillStyle = i === 3 ? '#E0E0E8' : '#8A8B95'; ctx.fillRect(14, 40 + i * 20, 70 + ((i * 29) % 30), 6); }
  });
}

/** The monitor: an editor on the left, a terminal below it, a metrics panel on the right. */
export function devScreen() {
  return canvasTex(640, 360, (ctx, w, h) => {
    ctx.fillStyle = '#1B1C22'; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#262730'; ctx.fillRect(0, 0, w, 22);                                           // title bar
    for (let i = 0; i < 3; i++) { ctx.fillStyle = ['#FF5F56', '#FFBD2E', '#28C840'][i]; ctx.beginPath(); ctx.arc(14 + i * 14, 11, 4, 0, Math.PI * 2); ctx.fill(); }
    ctx.fillStyle = '#2E2F39'; ctx.fillRect(0, 22, 30, h);                                            // gutter
    const rnd = seeded(21);
    const pal = ['#C792EA', '#82AAFF', '#C3E88D', '#F78C6C', '#89DDFF', '#EEFFFF'];
    for (let i = 0; i < 15; i++) {                                                                    // code
      const y = 36 + i * 14; let x = 44 + Math.floor(rnd() * 3) * 14;
      const n = 1 + Math.floor(rnd() * 4);
      for (let k = 0; k < n; k++) { const len = 16 + rnd() * 64; ctx.fillStyle = pal[Math.floor(rnd() * pal.length)]; ctx.fillRect(x, y, len, 5); x += len + 8; if (x > 380) break; }
      ctx.fillStyle = '#5A5C68'; ctx.fillRect(10, y, 12, 5);
    }
    ctx.fillStyle = '#111217'; ctx.fillRect(0, 250, 410, h - 250);                                    // terminal
    ctx.fillStyle = '#2E2F39'; ctx.fillRect(0, 250, 410, 2);
    ctx.font = `12px ${PX}`; ctx.textBaseline = 'alphabetic';
    const lines = [['#7FD8A6', '$ make deploy'], ['#B9BBC6', 'build  ok   312 tests passed'], ['#B9BBC6', 'canary 1%  p99 41ms  errors 0'], ['#F2C230', 'promote? y'], ['#7FD8A6', '$ _']];
    lines.forEach(([c, t], i) => { ctx.fillStyle = c; ctx.fillText(t, 12, 272 + i * 17); });
    ctx.fillStyle = '#23242C'; ctx.fillRect(410, 22, w - 410, h - 22);                                // metrics panel
    ctx.fillStyle = '#B9BBC6'; ctx.font = `11px ${PX}`;
    const names = ['latency', 'throughput', 'errors', 'queue'];
    names.forEach((n, i) => {
      const y = 44 + i * 80;
      ctx.fillStyle = '#B9BBC6'; ctx.fillText(n.toUpperCase(), 424, y);
      ctx.fillStyle = '#2E2F39'; ctx.fillRect(424, y + 8, w - 440, 50);
      ctx.strokeStyle = ['#82AAFF', '#C3E88D', '#F78C6C', '#C792EA'][i]; ctx.lineWidth = 2; ctx.beginPath();
      for (let k = 0; k <= 20; k++) { const x = 424 + k * (w - 440) / 20, yy = y + 50 - 6 - rnd() * 32; k ? ctx.lineTo(x, yy) : ctx.moveTo(x, yy); }
      ctx.stroke();
    });
  });
}

/** His phone, face up: the chat it opens to (what it boots into up close). */
export function phoneScreen() {
  return canvasTex(128, 272, (ctx, w, h) => {
    ctx.fillStyle = '#0E0E11'; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#EDEAE4'; ctx.fillRect(10, 8, 16, 4);
    ctx.fillStyle = '#2C2C33'; ctx.beginPath(); ctx.arc(18, 28, 7, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#EDEAE4'; ctx.fillRect(30, 24, 36, 4);
    ctx.fillStyle = 'rgba(237,234,228,.08)'; ctx.fillRect(0, 42, w, 1);
    for (const [y, bw] of [[52, 58], [74, 88]]) { ctx.fillStyle = '#26262D'; rr(ctx, 8, y, bw, 18, 8); ctx.fill(); }
    ctx.fillStyle = 'rgba(237,234,228,.08)'; ctx.fillRect(0, h - 62, w, 1);
    for (let r = 0; r < 2; r++) for (let c = 0; c < 2; c++) { ctx.fillStyle = 'rgba(237,234,228,.1)'; rr(ctx, 8 + c * 58, h - 54 + r * 24, 54, 19, 6); ctx.fill(); }
  });
}

// --------------------------------------------------------------------- prints ----
/**
 * The Snoopy canvas: the classic panel. Blue sky, Snoopy sitting on the ridge of his red doghouse
 * looking up, Woodstock beside him, and the speech bubble: "KEEP LOOKING UP.. THAT'S THE SECRET OF LIFE..."
 */
export function snoopyPrint() {
  return canvasTex(960, 540, (ctx, w, h) => {
    const sky = ctx.createLinearGradient(0, 0, w * .4, h);
    sky.addColorStop(0, '#6FC1E8'); sky.addColorStop(.5, '#2F7FC8'); sky.addColorStop(1, '#1C4F9A');
    ctx.fillStyle = sky; ctx.fillRect(0, 0, w, h);
    // the doghouse: red gable roof, the right half darker, ridge in orange-brown
    const rx0 = w * .60, rx1 = w * .98, ridge = w * .80, ry = h * .70, ryb = h * 1.02;
    ctx.fillStyle = '#E04A2A'; ctx.beginPath(); ctx.moveTo(rx0, ryb); ctx.lineTo(ridge, ry); ctx.lineTo(ridge, ryb); ctx.fill();
    ctx.fillStyle = '#B83A22'; ctx.beginPath(); ctx.moveTo(ridge, ry); ctx.lineTo(rx1, ryb); ctx.lineTo(ridge, ryb); ctx.fill();
    ctx.strokeStyle = '#D9843A'; ctx.lineWidth = 9; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(rx0 - 10, ryb); ctx.lineTo(ridge, ry - 2); ctx.lineTo(rx1 + 10, ryb); ctx.stroke();
    ctx.strokeStyle = '#1A1A1A'; ctx.lineWidth = 4;
    ctx.beginPath(); ctx.moveTo(rx0 - 14, ryb); ctx.lineTo(ridge, ry - 8); ctx.lineTo(rx1 + 14, ryb); ctx.stroke();
    // Snoopy, seated on the ridge, head back, looking up (profile to the left)
    const sx = ridge + 10, sy = ry - 6;
    ctx.fillStyle = '#FBFAF4'; ctx.strokeStyle = '#1A1A1A'; ctx.lineWidth = 5; ctx.lineJoin = 'round';
    ctx.beginPath(); ctx.ellipse(sx, sy - 58, 44, 62, 0, 0, Math.PI * 2); ctx.fill(); ctx.stroke();          // body
    ctx.beginPath(); ctx.ellipse(sx + 46, sy - 10, 26, 14, 0, 0, Math.PI * 2); ctx.fill(); ctx.stroke();     // hind leg
    ctx.beginPath(); ctx.ellipse(sx - 26, sy - 4, 20, 10, 0, 0, Math.PI * 2); ctx.fill(); ctx.stroke();      // paw
    ctx.beginPath(); ctx.ellipse(sx - 2, sy - 136, 40, 36, -0.25, 0, Math.PI * 2); ctx.fill(); ctx.stroke(); // head
    ctx.beginPath(); ctx.ellipse(sx - 54, sy - 170, 52, 24, -0.72, 0, Math.PI * 2); ctx.fill(); ctx.stroke(); // snout, pointing up-left
    ctx.beginPath(); ctx.ellipse(sx - 80, sy - 194, 14, 10, -0.7, 0, Math.PI * 2); ctx.fillStyle = '#1A1A1A'; ctx.fill(); // nose
    ctx.beginPath(); ctx.ellipse(sx - 44, sy - 152, 22, 7, -0.72, 0, Math.PI * 2); ctx.fill();                // open mouth
    ctx.beginPath(); ctx.ellipse(sx + 30, sy - 120, 16, 36, 0.35, 0, Math.PI * 2); ctx.fill();                // ear, hanging back
    ctx.beginPath(); ctx.arc(sx - 22, sy - 150, 4, 0, Math.PI * 2); ctx.fill();                               // eye
    ctx.strokeStyle = '#1A1A1A'; ctx.lineWidth = 4;
    ctx.beginPath(); ctx.moveTo(sx - 60, sy - 194); ctx.lineTo(sx - 70, sy - 206); ctx.stroke();            // eyebrow line
    // Woodstock, on the roof to the left
    const wx = rx0 + 54, wy = ryb - 46;
    ctx.fillStyle = '#F6D13A'; ctx.strokeStyle = '#1A1A1A'; ctx.lineWidth = 4;
    ctx.beginPath(); ctx.ellipse(wx, wy - 16, 20, 18, 0, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    ctx.beginPath(); ctx.ellipse(wx + 8, wy - 44, 16, 15, 0, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    for (const [dx, dy] of [[-6, -62], [2, -66], [10, -64], [16, -60]]) { ctx.beginPath(); ctx.moveTo(wx + 8, wy - 56); ctx.lineTo(wx + dx, wy + dy); ctx.stroke(); }
    ctx.beginPath(); ctx.moveTo(wx + 20, wy - 46); ctx.lineTo(wx + 34, wy - 50); ctx.lineTo(wx + 22, wy - 40); ctx.closePath(); ctx.fillStyle = '#F3A33B'; ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#1A1A1A'; ctx.beginPath(); ctx.arc(wx + 12, wy - 48, 2.5, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = '#F3A33B'; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(wx - 6, wy + 2); ctx.lineTo(wx - 6, wy + 14); ctx.moveTo(wx + 6, wy + 2); ctx.lineTo(wx + 6, wy + 14); ctx.stroke();
    // the speech bubble, cloud-edged, with the hand-lettered line
    const bx = w * .09, by = h * .09, bw = w * .46, bh = h * .46;
    ctx.fillStyle = '#FBFAF4'; ctx.strokeStyle = '#1A1A1A'; ctx.lineWidth = 5;
    const bumps = 14, rxb = bw / 2, ryb2 = bh / 2, cx = bx + rxb, cy = by + ryb2;
    ctx.beginPath();
    ctx.moveTo(cx + rxb, cy);
    for (let i = 1; i <= bumps; i++) {
      const a = i / bumps * Math.PI * 2, am = a - Math.PI / bumps;
      ctx.quadraticCurveTo(cx + Math.cos(am) * (rxb + 16), cy + Math.sin(am) * (ryb2 + 14), cx + Math.cos(a) * rxb, cy + Math.sin(a) * ryb2);
    }
    ctx.closePath(); ctx.fill(); ctx.stroke();
    for (let i = 0; i < 3; i++) {                                    // thought puffs trailing to Snoopy
      const r = 16 - i * 4, px = bx + bw * .78 + i * 46, py = by + bh + 22 + i * 40;
      ctx.beginPath(); ctx.arc(px, py, r, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    }
    ctx.fillStyle = '#1A1A1A'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.font = `bold 46px ${PX}`;
    const lines = ['KEEP LOOKING', "UP.. THAT'S THE", 'SECRET OF', 'LIFE...'];
    lines.forEach((l, i) => ctx.fillText(l, bx + bw / 2, by + bh * .22 + i * 52));
    // canvas texture + a soft vignette so it reads as a print, not a flat fill
    const v = ctx.createRadialGradient(w / 2, h / 2, h * .3, w / 2, h / 2, w * .75);
    v.addColorStop(0, 'rgba(0,0,0,0)'); v.addColorStop(1, 'rgba(0,0,0,.18)');
    ctx.fillStyle = v; ctx.fillRect(0, 0, w, h);
  }, { anisotropy: 16 });
}

const PHOTO = [['#D8A090', '#B86E5C'], ['#8FA7C2', '#4F6A8A'], ['#C9C3B6', '#8E8679'], ['#E0B452', '#B0802A'], ['#7E9C8A', '#4E6E5C'], ['#B98B5E', '#80592F'], ['#9C8AB8', '#64527F'], ['#D9C9A8', '#A48F6C'], ['#D96A5A', '#9C3B2E'], ['#5F86A8', '#2F4F6B'], ['#C8302F', '#7A1D1A'], ['#2E3A5E', '#1A2238']];

/** One print for the collage: a coloured picture with a figure or a horizon, on photo paper. */
export function photoPrint(i) {
  return canvasTex(128, 160, (ctx, w, h) => {
    const [a, b] = PHOTO[i % PHOTO.length];
    const rnd = seeded(i + 40);
    ctx.fillStyle = '#FAF8F2'; ctx.fillRect(0, 0, w, h);
    const g = ctx.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, a); g.addColorStop(1, b);
    ctx.fillStyle = g; ctx.fillRect(6, 6, w - 12, h - 12);
    if (i % 3 === 0) { ctx.fillStyle = b; ctx.beginPath(); ctx.ellipse(w / 2, h * .42, w * .16, h * .14, 0, 0, Math.PI * 2); ctx.fill(); ctx.fillRect(w * .3, h * .55, w * .4, h * .4); }
    else if (i % 3 === 1) { ctx.fillStyle = 'rgba(255,255,255,.55)'; ctx.fillRect(6, h * .5, w - 12, 4); ctx.fillStyle = b; ctx.beginPath(); ctx.arc(w * .3 + rnd() * w * .4, h * .35, 12, 0, Math.PI * 2); ctx.fill(); }
    else { ctx.fillStyle = 'rgba(0,0,0,.25)'; for (let k = 0; k < 4; k++) ctx.fillRect(10 + k * 28, h * .3 + (k % 2) * 30, 18, h * .5); }
  });
}

/** The little neon sign under the print: the warm lit face, or (off = true) the same panel switched off — milky white, the tube a pale grey line. */
export function neonSign(off = false) {
  return canvasTex(256, 160, (ctx, w, h) => {
    const g = ctx.createLinearGradient(0, 0, 0, h);
    if (off) { g.addColorStop(0, '#F6F4F0'); g.addColorStop(1, '#E9E6E0'); } else { g.addColorStop(0, '#FFE2AE'); g.addColorStop(1, '#FFB764'); }
    ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = off ? '#FDFCFA' : '#FFF4DE'; ctx.lineWidth = 8; rr(ctx, w * .08, h * .12, w * .84, h * .76, 22); ctx.stroke();
    ctx.strokeStyle = off ? '#B9B6B0' : '#7A3C1C'; ctx.lineWidth = 8; ctx.lineJoin = 'round'; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(w * .2, h * .58); ctx.lineTo(w * .32, h * .4); ctx.lineTo(w * .42, h * .62); ctx.lineTo(w * .52, h * .38); ctx.lineTo(w * .62, h * .62); ctx.lineTo(w * .72, h * .42); ctx.lineTo(w * .8, h * .56); ctx.stroke();
  });
}

/** Round jute rug: concentric braided rings, a little fibre noise. Transparent outside the circle. */
export function rug() {
  return canvasTex(512, 512, (ctx, w, h) => {
    ctx.clearRect(0, 0, w, h);
    const cx = w / 2, cy = h / 2, R = w / 2 - 4;
    for (let r = R, i = 0; r > 0; r -= 14, i++) {
      ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fillStyle = i % 2 ? '#C9B28C' : '#B89D74'; ctx.fill();
    }
    const rnd = seeded(23);
    ctx.strokeStyle = 'rgba(80,60,30,.18)'; ctx.lineWidth = 1.5;
    for (let i = 0; i < 2400; i++) {
      const a = rnd() * Math.PI * 2, r = rnd() * (R - 6), x = cx + Math.cos(a) * r, y = cy + Math.sin(a) * r;
      ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + Math.cos(a + 1.57) * 5, y + Math.sin(a + 1.57) * 5); ctx.stroke();
    }
    ctx.strokeStyle = 'rgba(255,255,255,.25)'; ctx.lineWidth = 2;
    for (let r = R - 7; r > 0; r -= 28) { ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.stroke(); }
  }, { anisotropy: 16 });
}

/**
 * The classic 32-panel football (a truncated icosahedron: 12 black pentagons, 20 white hexagons), as an
 * equirectangular map for a sphere. Every texel is assigned to the nearest panel centre, with the
 * centres' angular radii as weights so the pentagons come out the right size; texels that sit between
 * two panels are the stitched seams.
 */
export function football() {
  const PHI = (1 + Math.sqrt(5)) / 2;
  const raw = [];
  for (const s1 of [-1, 1]) for (const s2 of [-1, 1]) raw.push([0, s1, s2 * PHI], [s1, s2 * PHI, 0], [s2 * PHI, 0, s1]);
  const unit = (p) => { const l = Math.hypot(...p); return p.map((c) => c / l); };
  const dist = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]);
  const centres = raw.map((p) => ({ v: unit(p), w: 1 / (20.07 * Math.PI / 180) }));          // pentagons at the 12 vertices
  for (let i = 0; i < 12; i++) for (let j = i + 1; j < 12; j++) for (let k = j + 1; k < 12; k++) {
    if (Math.abs(dist(raw[i], raw[j]) - 2) < 1e-6 && Math.abs(dist(raw[j], raw[k]) - 2) < 1e-6 && Math.abs(dist(raw[i], raw[k]) - 2) < 1e-6) {
      centres.push({ v: unit([raw[i][0] + raw[j][0] + raw[k][0], raw[i][1] + raw[j][1] + raw[k][1], raw[i][2] + raw[j][2] + raw[k][2]]), w: 1 / (23.8 * Math.PI / 180) });   // hexagons at the 20 faces
    }
  }
  const W = 512, H = 256;
  return canvasTex(W, H, (ctx, w, h) => {
    const img = ctx.createImageData(w, h), d = img.data;
    for (let y = 0; y < h; y++) {
      const lat = Math.PI / 2 - (y + .5) / h * Math.PI, cl = Math.cos(lat), sl = Math.sin(lat);
      for (let x = 0; x < w; x++) {
        const lon = (x + .5) / w * 2 * Math.PI - Math.PI;
        const dx = cl * Math.cos(lon), dy = sl, dz = cl * Math.sin(lon);
        let best = 1e9, second = 1e9, pent = false;
        for (const c of centres) {
          const dot = Math.min(1, Math.max(-1, dx * c.v[0] + dy * c.v[1] + dz * c.v[2]));
          const s = Math.acos(dot) * c.w;
          if (s < best) { second = best; best = s; pent = c.w > 2.6; } else if (s < second) second = s;
        }
        const seam = Math.max(0, 1 - (second - best) / 0.07);                                   // 1 on the seam, 0 inside a panel
        const base = pent ? [28, 28, 34] : [246, 244, 238];
        const shade = pent ? [12, 12, 16] : [150, 146, 136];
        const o = (y * w + x) * 4;
        d[o] = base[0] + (shade[0] - base[0]) * seam; d[o + 1] = base[1] + (shade[1] - base[1]) * seam; d[o + 2] = base[2] + (shade[2] - base[2]) * seam; d[o + 3] = 255;
      }
    }
    ctx.putImageData(img, 0, 0);
  }, { q: 1, anisotropy: 16 });
}

/** The lit corridor seen through the open door: warm, darker toward the floor, a skirting line. */
export function corridor() {
  return canvasTex(128, 512, (ctx, w, h) => {
    const g = ctx.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, '#F3E6C8'); g.addColorStop(.75, '#E6D7B4'); g.addColorStop(1, '#CDBD98');
    ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#B9A98A'; ctx.fillRect(0, h - 26, w, 6);
    ctx.fillStyle = '#D9CDB3'; ctx.fillRect(0, h - 20, w, 20);
    ctx.fillStyle = 'rgba(255,255,255,.35)'; ctx.fillRect(w * .3, h * .1, w * .25, h * .5);   // light from a window beyond
  });
}

/** The open journal, seen from across the room: two cream pages, ruled, a taped photo and lines of writing. */
export function journal() {
  return canvasTex(780, 540, (ctx, w, h) => {
    ctx.fillStyle = '#F7F1E4'; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#E6DDCB'; ctx.fillRect(w / 2 - 3, 0, 6, h);                   // the crease
    ctx.fillStyle = '#E3D9C6';
    for (let y = 70; y < h - 30; y += 26) { ctx.fillRect(30, y, w / 2 - 60, 2); ctx.fillRect(w / 2 + 30, y, w / 2 - 60, 2); }
    // the taped photo, top left, and the lines of writing round it
    ctx.fillStyle = '#FBF8F1'; ctx.fillRect(48, 52, 150, 186);
    ctx.fillStyle = '#B98B6E'; ctx.fillRect(58, 62, 130, 150);
    ctx.fillStyle = '#7A5A48'; ctx.fillRect(98, 92, 50, 56); ctx.fillRect(84, 150, 78, 62);
    ctx.fillStyle = 'rgba(236,226,196,.85)'; ctx.fillRect(98, 42, 52, 20);
    ctx.font = "600 30px Inter, sans-serif"; ctx.fillStyle = '#2A2A30'; ctx.fillText('About', 222, 92);
    const rnd = seeded(77);
    const write = (x0, x1, y0, y1) => {
      ctx.fillStyle = '#4A4A58';
      for (let y = y0; y < y1; y += 26) { let x = x0; while (x < x1 - 30) { const len = 14 + rnd() * 46; ctx.fillRect(x, y - 9, Math.min(len, x1 - x), 4); x += len + 8; } }
    };
    write(222, w / 2 - 40, 122, 240);
    write(48, w / 2 - 40, 278, h - 40);
    ctx.font = "600 30px Inter, sans-serif"; ctx.fillStyle = '#2A2A30'; ctx.fillText('Accolades', w / 2 + 40, 92);
    write(w / 2 + 40, w - 48, 122, h - 40);
  });
}
