/* Mihir Okte · avatar stage — PlayCanvas engine.
   Isolated from the menu on purpose: if this module or its CDN fails,
   the menu still works (menu.js has zero dependencies).

   YOUR AVATAR: create one free at https://readyplayer.me, copy the
   .glb URL it gives you, and paste it below. PlayCanvas loads it
   directly; until then a stylized figure is shown. */
const AVATAR_GLB_URL = ""; // e.g. "https://models.readyplayer.me/<your-id>.glb"

import * as pc from "https://cdn.jsdelivr.net/npm/playcanvas@2.7.4/build/playcanvas.mjs";

const REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches;
const canvas = document.getElementById("avatar-stage");

let app;
try {
  app = new pc.Application(canvas, {
    graphicsDeviceOptions: { alpha: true, antialias: true },
  });
} catch (e) {
  canvas.remove(); // no WebGL: menu carries the page alone
  throw e;
}
app.setCanvasFillMode(pc.FILLMODE_FILL_WINDOW);
app.setCanvasResolution(pc.RESOLUTION_AUTO);
app.start();

/* camera — transparent clear so the CSS background shows through */
const camera = new pc.Entity("camera");
camera.addComponent("camera", {
  clearColor: new pc.Color(0, 0, 0, 0),
  fov: 35,
});
camera.setPosition(0, 1.4, 4.4);
camera.lookAt(0.7, 1.0, 0);
app.root.addChild(camera);

/* console-cool lighting: key, rim, ambient */
const key = new pc.Entity("key");
key.addComponent("light", { type: "directional", color: new pc.Color(0.75, 0.83, 1), intensity: 1.6 });
key.setEulerAngles(45, 30, 0);
app.root.addChild(key);

const rim = new pc.Entity("rim");
rim.addComponent("light", { type: "directional", color: new pc.Color(0.48, 0.65, 1), intensity: 1.1 });
rim.setEulerAngles(-20, -120, 0);
app.root.addChild(rim);

app.scene.ambientLight = new pc.Color(0.12, 0.14, 0.19);

/* avatar root — slides between stage-front and receded */
const rig = new pc.Entity("rig");
app.root.addChild(rig);
let targetX = 1.35;

window.addEventListener("viewchange", (e) => {
  targetX = e.detail.onStage ? 1.35 : 3.4;
});

function mat(color, opts = {}) {
  const m = new pc.StandardMaterial();
  m.diffuse = new pc.Color(...color);
  if (opts.emissive) {
    m.emissive = new pc.Color(...opts.emissive);
    m.emissiveIntensity = opts.emissiveIntensity ?? 1;
  }
  m.gloss = opts.gloss ?? 0.5;
  m.metalness = opts.metalness ?? 0.2;
  m.useMetalness = true;
  m.update();
  return m;
}

function primitive(type, material, pos, scale, euler) {
  const e = new pc.Entity();
  e.addComponent("render", { type, material });
  e.setLocalPosition(...pos);
  if (scale) e.setLocalScale(...scale);
  if (euler) e.setLocalEulerAngles(...euler);
  rig.addChild(e);
  return e;
}

/* stylized placeholder figure: matte bust with a glowing visor ring */
function placeholderFigure() {
  const body = mat([0.16, 0.18, 0.23], { gloss: 0.55, metalness: 0.3 });
  const glow = mat([0.2, 0.32, 0.65], { emissive: [0.3, 0.5, 1], emissiveIntensity: 0.8, metalness: 0.1 });

  primitive("capsule", body, [0, 0.95, 0], [0.7, 0.85, 0.45]);          // torso
  primitive("sphere", body, [0, 1.62, 0], [0.42, 0.42, 0.42]);          // head
  primitive("torus", glow, [0, 1.63, 0], [0.46, 0.46, 0.46], [78, 0, 0]); // visor ring
  primitive("capsule", body, [-0.46, 0.98, 0], [0.19, 0.62, 0.19], [0, 0, 7]);   // arms
  primitive("capsule", body, [0.46, 0.98, 0], [0.19, 0.62, 0.19], [0, 0, -7]);
  primitive("cylinder", glow, [0, 0, 0], [1.05, 0.045, 1.05]);          // light base
}

if (AVATAR_GLB_URL) {
  app.assets.loadFromUrlAndFilename(AVATAR_GLB_URL, "avatar.glb", "container", (err, asset) => {
    if (err || !asset) { placeholderFigure(); return; }
    const entity = asset.resource.instantiateRenderEntity();
    rig.addChild(entity);
  });
} else {
  placeholderFigure();
}

/* gentle idle motion */
let t = 0;
app.on("update", (dt) => {
  t += dt;
  const x = rig.getPosition().x + (targetX - rig.getPosition().x) * Math.min(1, 3 * dt);
  const y = REDUCED ? 0 : Math.sin(t * 0.8) * 0.02;
  rig.setPosition(x, y, 0);
  if (!REDUCED) rig.setEulerAngles(0, Math.sin(t * 0.25) * 20 - 17, 0);
});
