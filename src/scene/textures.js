// textures.js — every texture is drawn on a canvas at load. No image downloads, no fonts needed
// beyond the site's own pixel faces (which are already loaded by the page).
import { canvasTex } from './helpers.js';

const PX = "'Pixel Operator', monospace";

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
/** One floor tile (repeats). Large vitrified tile, hairline grout, a little tone drift. */
export function tiles() {
  return canvasTex(512, 512, (ctx, w, h) => {
    ctx.fillStyle = '#ECE7DD'; ctx.fillRect(0, 0, w, h);
    const rnd = seeded(7);
    for (let i = 0; i < 3000; i++) {
      ctx.fillStyle = rnd() < 0.5 ? 'rgba(255,255,255,.16)' : 'rgba(120,100,80,.05)';
      ctx.fillRect(rnd() * w, rnd() * h, 2, 2);
    }
    for (let i = 0; i < 9; i++) {                                 // faint marble veins
      ctx.strokeStyle = `rgba(150,135,115,${0.05 + rnd() * 0.05})`; ctx.lineWidth = 1 + rnd() * 2;
      ctx.beginPath(); let x = rnd() * w, y = rnd() * h; ctx.moveTo(x, y);
      for (let k = 0; k < 6; k++) { x += (rnd() - .4) * 120; y += (rnd() - .5) * 90; ctx.lineTo(x, y); }
      ctx.stroke();
    }
    ctx.fillStyle = '#CFC7B9';
    ctx.fillRect(0, 0, w, 6); ctx.fillRect(0, 0, 6, h);            // grout (top + left edge of each tile)
    ctx.fillStyle = 'rgba(255,255,255,.4)';
    ctx.fillRect(6, 6, w - 6, 2); ctx.fillRect(6, 6, 2, h - 6);
  }, { repeat: true, anisotropy: 16 });
}

/** Grey-scale height for the tiles: the grout sits low, the tile face is faintly uneven. */
export function tilesBump() {
  return canvasTex(512, 512, (ctx, w, h) => {
    ctx.fillStyle = '#B4B4B4'; ctx.fillRect(0, 0, w, h);
    const rnd = seeded(9);
    for (let i = 0; i < 2500; i++) { ctx.fillStyle = rnd() < .5 ? 'rgba(255,255,255,.06)' : 'rgba(0,0,0,.06)'; ctx.fillRect(rnd() * w, rnd() * h, 3, 3); }
    ctx.fillStyle = '#404040'; ctx.fillRect(0, 0, w, 7); ctx.fillRect(0, 0, 7, h);
    ctx.fillStyle = '#D8D8D8'; ctx.fillRect(7, 7, w - 7, 2); ctx.fillRect(7, 7, 2, h - 7);
  }, { repeat: true, linear: true, anisotropy: 16 });
}

/** Plaster: soft noise so the walls are not a dead flat fill. */
export function plasterBump() {
  return canvasTex(256, 256, (ctx, w, h) => {
    ctx.fillStyle = '#808080'; ctx.fillRect(0, 0, w, h);
    const rnd = seeded(13);
    for (let i = 0; i < 9000; i++) { const v = 110 + Math.floor(rnd() * 36); ctx.fillStyle = `rgb(${v},${v},${v})`; ctx.fillRect(rnd() * w, rnd() * h, 1 + rnd() * 2, 1 + rnd() * 2); }
  }, { repeat: true, linear: true });
}

/** Carbon-fibre weave for the gaming desk top. */
export function carbon() {
  return canvasTex(256, 256, (ctx, w, h) => {
    ctx.fillStyle = '#1F1F23'; ctx.fillRect(0, 0, w, h);
    const s = 16;
    for (let y = 0; y < h; y += s) for (let x = 0; x < w; x += s) {
      const a = ((x / s + y / s) % 2) === 0;
      const g = a ? ctx.createLinearGradient(x, y, x + s, y) : ctx.createLinearGradient(x, y, x, y + s);
      g.addColorStop(0, '#2C2C31'); g.addColorStop(.5, '#3A3A40'); g.addColorStop(1, '#232327');
      ctx.fillStyle = g; ctx.fillRect(x + 1, y + 1, s - 2, s - 2);
    }
  }, { repeat: true, anisotropy: 16 });
}

/** Wood grain (bed frame, shelf unit). */
export function wood(base = '#5A4238', vein = '#4A352C') {
  return canvasTex(512, 256, (ctx, w, h) => {
    ctx.fillStyle = base; ctx.fillRect(0, 0, w, h);
    const rnd = seeded(31);
    for (let i = 0; i < 70; i++) {
      ctx.strokeStyle = vein; ctx.globalAlpha = .25 + rnd() * .4; ctx.lineWidth = .6 + rnd() * 1.6;
      ctx.beginPath(); const y = rnd() * h; ctx.moveTo(0, y);
      for (let x = 0; x <= w; x += 32) ctx.lineTo(x, y + Math.sin(x / 60 + i) * 3 + (rnd() - .5) * 2);
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
  }, { repeat: true, anisotropy: 16 });
}

/** Quilted duvet: a diamond grid of soft bumps (height map). */
export function quilt() {
  return canvasTex(256, 256, (ctx, w, h) => {
    ctx.fillStyle = '#9A9A9A'; ctx.fillRect(0, 0, w, h);
    const s = 64;
    for (let y = 0; y <= h; y += s) for (let x = 0; x <= w; x += s) {
      for (const [ox, oy] of [[0, 0], [s / 2, s / 2]]) {
        const g = ctx.createRadialGradient(x + ox, y + oy, 0, x + ox, y + oy, s * .5);
        g.addColorStop(0, 'rgba(255,255,255,.55)'); g.addColorStop(.75, 'rgba(255,255,255,.08)'); g.addColorStop(1, 'rgba(0,0,0,.25)');
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x + ox, y + oy, s * .5, 0, Math.PI * 2); ctx.fill();
      }
    }
    ctx.strokeStyle = 'rgba(0,0,0,.35)'; ctx.lineWidth = 2;
    for (let k = -h; k <= w; k += s) { ctx.beginPath(); ctx.moveTo(k, 0); ctx.lineTo(k + h, h); ctx.stroke(); ctx.beginPath(); ctx.moveTo(k + h, 0); ctx.lineTo(k, h); ctx.stroke(); }
  }, { repeat: true, linear: true });
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
/** macOS desktop wallpaper (a warm sunset over dunes) + a dock. */
export function macScreen() {
  return canvasTex(512, 320, (ctx, w, h) => {
    const g = ctx.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, '#E8743F'); g.addColorStop(.55, '#D4486C'); g.addColorStop(1, '#F6C08A');
    ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#B8403A';
    ctx.beginPath(); ctx.moveTo(0, h * .72); ctx.lineTo(w * .3, h * .52); ctx.lineTo(w * .55, h * .66); ctx.lineTo(w * .8, h * .5); ctx.lineTo(w, h * .62); ctx.lineTo(w, h); ctx.lineTo(0, h); ctx.fill();
    ctx.fillStyle = '#F2D4A0';
    ctx.beginPath(); ctx.moveTo(0, h * .84); ctx.lineTo(w * .25, h * .7); ctx.lineTo(w * .5, h * .82); ctx.lineTo(w * .75, h * .68); ctx.lineTo(w, h * .8); ctx.lineTo(w, h); ctx.lineTo(0, h); ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,.35)'; ctx.fillRect(0, 0, w, h * .07);
    const dw = w * .55; rr(ctx, w / 2 - dw / 2, h * .86, dw, h * .11, 10); ctx.fillStyle = 'rgba(255,255,255,.42)'; ctx.fill();
    const cols = ['#FF5F56', '#FFBD2E', '#28C840', '#007AFF', '#AF52DE', '#FF9500', '#5AC8FA', '#8E8E93'];
    cols.forEach((c, i) => { const x = w / 2 - dw / 2 + dw * (i + .5) / cols.length, r = h * .035; rr(ctx, x - r, h * .915 - r, 2 * r, 2 * r, 4); ctx.fillStyle = c; ctx.fill(); });
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

/** His phone, face up: a warm lock screen with the time and a couple of notifications. */
export function phoneScreen() {
  return canvasTex(128, 272, (ctx, w, h) => {
    const g = ctx.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, '#FFE3B8'); g.addColorStop(1, '#F2B46E');
    ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#4A3222'; ctx.textAlign = 'center'; ctx.font = `bold 40px ${PX}`; ctx.fillText('17:38', w / 2, 76);
    ctx.font = `11px ${PX}`; ctx.fillText('FRIDAY 2 OCTOBER', w / 2, 94);
    for (let i = 0; i < 2; i++) { rr(ctx, 10, 120 + i * 52, w - 20, 42, 8); ctx.fillStyle = 'rgba(255,250,240,.75)'; ctx.fill(); ctx.fillStyle = '#4A3222'; ctx.fillRect(22, 132 + i * 52, 44, 5); ctx.fillStyle = '#9A7A5A'; ctx.fillRect(22, 144 + i * 52, 70, 4); }
    ctx.fillStyle = '#4A3222'; ctx.fillRect(w / 2 - 20, h - 12, 40, 3);
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

/** The little warm neon sign under the print. */
export function neonSign() {
  return canvasTex(256, 160, (ctx, w, h) => {
    const g = ctx.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, '#FFE2AE'); g.addColorStop(1, '#FFB764');
    ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = '#FFF4DE'; ctx.lineWidth = 8; rr(ctx, w * .08, h * .12, w * .84, h * .76, 22); ctx.stroke();
    ctx.strokeStyle = '#7A3C1C'; ctx.lineWidth = 8; ctx.lineJoin = 'round'; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(w * .2, h * .58); ctx.lineTo(w * .32, h * .4); ctx.lineTo(w * .42, h * .62); ctx.lineTo(w * .52, h * .38); ctx.lineTo(w * .62, h * .62); ctx.lineTo(w * .72, h * .42); ctx.lineTo(w * .8, h * .56); ctx.stroke();
  });
}

/** Oval doormat: grey, with a border. Transparent outside the oval. */
export function doormat() {
  return canvasTex(512, 320, (ctx, w, h) => {
    ctx.clearRect(0, 0, w, h);
    ctx.beginPath(); ctx.ellipse(w / 2, h / 2, w / 2 - 4, h / 2 - 4, 0, 0, Math.PI * 2);
    ctx.fillStyle = '#8E8A84'; ctx.fill();
    ctx.beginPath(); ctx.ellipse(w / 2, h / 2, w / 2 - 28, h / 2 - 24, 0, 0, Math.PI * 2);
    ctx.fillStyle = '#A5A19B'; ctx.fill();
    const rnd = seeded(17);
    ctx.fillStyle = 'rgba(0,0,0,.08)';
    for (let i = 0; i < 1600; i++) { const x = rnd() * w, y = rnd() * h; if (((x - w / 2) / (w / 2 - 28)) ** 2 + ((y - h / 2) / (h / 2 - 24)) ** 2 < 1) ctx.fillRect(x, y, 2, 2); }
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

/**
 * Soft darkening used where floor meets wall: black fading to clear. `dir` names the dark edge in
 * texture space: 'u0' (left), 'u1' (right), 'v0' (bottom), 'v1' (top).
 */
export function shade(dir = 'v1', alpha = 0.3) {
  return canvasTex(64, 64, (ctx, w, h) => {
    const [x0, y0, x1, y1] = dir === 'u0' ? [0, 0, w, 0] : dir === 'u1' ? [w, 0, 0, 0] : dir === 'v0' ? [0, h, 0, 0] : [0, 0, 0, h];
    const g = ctx.createLinearGradient(x0, y0, x1, y1);
    g.addColorStop(0, `rgba(0,0,0,${alpha})`); g.addColorStop(.45, `rgba(0,0,0,${alpha * .3})`); g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = g; ctx.fillRect(0, 0, w, h);
  });
}
