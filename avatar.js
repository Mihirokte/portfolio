/* Mihir Okte · avatar stage — three.js skinned character
   (based on the webgl_animation_skinning_blending example setup:
   skinned GLB + AnimationMixer with idle/walk/run clips, self-hosted
   at assets/soldier.glb; we play idle on the menu and can blend the
   other clips in later).
   Isolated from the menu on purpose: if this module or its CDN fails,
   the menu still works (menu.js has zero dependencies). */

import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.module.js";
import { GLTFLoader } from "https://cdn.jsdelivr.net/npm/three@0.180.0/examples/jsm/loaders/GLTFLoader.js";

const REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches;
const canvas = document.getElementById("avatar-stage");

let renderer;
try {
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
} catch (e) {
  canvas.remove(); // no WebGL: the menu carries the page alone
  throw e;
}
renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 2));
renderer.setSize(innerWidth, innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(35, innerWidth / innerHeight, 0.1, 50);
camera.position.set(0, 1.4, 4.4);
camera.lookAt(0.7, 1.0, 0);

/* lighting in the example's spirit, tinted console-cool */
const hemi = new THREE.HemisphereLight(0xbfd4ff, 0x0d0e11, 1.6);
hemi.position.set(0, 20, 0);
scene.add(hemi);
const dir = new THREE.DirectionalLight(0xffffff, 2.2);
dir.position.set(-2, 4, 3);
scene.add(dir);
const rim = new THREE.DirectionalLight(0x7aa7ff, 1.4);
rim.position.set(3, 2, -2);
scene.add(rim);

/* character rig: slides between stage-front and receded per view */
const rig = new THREE.Group();
scene.add(rig);
let targetX = 1.35;
window.addEventListener("viewchange", (e) => {
  targetX = e.detail.onStage ? 1.35 : 3.2;
});
rig.position.x = targetX;

let mixer = null;
const actions = {}; // idle / walk / run — kept for the later modifications

new GLTFLoader().load(
  "assets/soldier.glb",
  (gltf) => {
    const model = gltf.scene;
    model.rotation.y = -0.5; // three-quarter stance toward the menu
    rig.add(model);

    mixer = new THREE.AnimationMixer(model);
    for (const clip of gltf.animations) {
      actions[clip.name.toLowerCase()] = mixer.clipAction(clip);
    }
    // example ships Idle / Walk / Run (+ TPose); stand idle on the menu
    const idle = actions["idle"];
    if (idle) {
      idle.play();
    } else {
      const first = Object.values(actions)[0];
      if (first) first.play();
    }
    if (REDUCED && mixer) mixer.timeScale = 0; // hold the pose
  },
  undefined,
  (err) => {
    console.warn("avatar failed to load:", err);
    canvas.remove(); // menu remains fully usable
  }
);

window.addEventListener("resize", () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
});

const clock = new THREE.Clock();
function tick() {
  const dt = clock.getDelta();
  if (mixer) mixer.update(dt);
  rig.position.x += (targetX - rig.position.x) * Math.min(1, 3 * dt);
  renderer.render(scene, camera);
  requestAnimationFrame(tick);
}
requestAnimationFrame(tick);
