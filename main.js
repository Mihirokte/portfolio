/* Mihir Okte · pond — three.js scene */
import * as THREE from "three";

/* ————————————————— stories (sequence: me → work → skills → projects → hello) ————————————————— */
const STORIES = [
  {
    title: "I",
    text: "The one who feeds me is called Mihir. He studied mathematics at IIT Delhi and writes software in Bengaluru now. He comes to this pond when the city gets loud. I let him think here. He leaves crumbs.",
    links: [],
  },
  {
    title: "II",
    text: "He was the first engineer at an ad startup, building a campaign platform out of nothing for a year. Then Amazon took him. He led eight people through moving nineteen ordering services onto new machines, and nothing went down. I watched him worry about it from here.",
    links: [],
  },
  {
    title: "III",
    text: "From what he mutters while feeding me: Python and TypeScript for most things, React when it needs a face, AWS when it needs somewhere to live. Lately it is all agents, LangChain, MCP servers. He once fine-tuned a Llama to place YouTube ads. A llama. I am told it is not an animal.",
    links: [],
  },
  {
    title: "IV",
    text: "His current obsession is Helio, an assistant with a split brain: half of it lives on Telegram, half in a LangGraph service, held together by 168 tests. Before that, his college thesis taught a computer to solve a Rubik's Cube with group theory. Under twenty moves, in under two seconds.",
    links: [{ label: "github", href: "https://github.com/Mihirokte" }],
  },
  {
    title: "V",
    text: "That is everything I know, and I know him better than most. If you want him: mihirokte77@gmail.com, or mihirokte on GitHub and LinkedIn. Tell him the fish sent you.",
    links: [
      { label: "email", href: "mailto:mihirokte77@gmail.com" },
      { label: "linkedin", href: "https://linkedin.com/in/mihirokte" },
      { label: "github", href: "https://github.com/Mihirokte" },
    ],
  },
];

/* ————————————————— renderer / scene ————————————————— */
const container = document.getElementById("scene-container");
const IS_MOBILE = matchMedia("(pointer: coarse)").matches;
const DPR = Math.min(window.devicePixelRatio || 1, IS_MOBILE ? 1.75 : 2);

let renderer;
try {
  renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
} catch (e) {
  document.getElementById("loader").innerHTML =
    '<p class="loader-text">this pond needs WebGL — <a href="resume.html" style="color:#d8d2c2">resume is here</a></p>';
  throw e;
}
renderer.setPixelRatio(DPR);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.08;
container.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0d2622);

const camera = new THREE.PerspectiveCamera(42, window.innerWidth / window.innerHeight, 0.1, 100);
const CAM_BASE = new THREE.Vector3(0, 13.8, 8.6);
camera.position.copy(CAM_BASE);
camera.lookAt(0, 0, -0.4);

/* render target for the underwater pass (refraction source) */
let underRT = makeRT();
function makeRT() {
  const w = Math.max(512, Math.floor(window.innerWidth * DPR * 0.5));
  const h = Math.max(512, Math.floor(window.innerHeight * DPR * 0.5));
  return new THREE.WebGLRenderTarget(w, h);
}

/* ————————————————— light ————————————————— */
const sun = new THREE.DirectionalLight(0xffe3b8, 2.6);
sun.position.set(-7, 14, 5);
sun.castShadow = true;
sun.shadow.mapSize.set(IS_MOBILE ? 1024 : 2048, IS_MOBILE ? 1024 : 2048);
sun.shadow.camera.left = -12; sun.shadow.camera.right = 12;
sun.shadow.camera.top = 12; sun.shadow.camera.bottom = -12;
sun.shadow.camera.near = 2; sun.shadow.camera.far = 40;
sun.shadow.bias = -0.0004;
scene.add(sun);
scene.add(new THREE.HemisphereLight(0xbfd8d0, 0x24352c, 0.85));

/* ————————————————— groups ————————————————— */
const underGroup = new THREE.Group(); // rendered into RT: floor, fish, bubbles, blob shadows on floor
const overGroup = new THREE.Group();  // rendered on top: pads, reeds, dragonflies, pellets, motes
scene.add(underGroup, overGroup);

const FLOOR_Y = -2.3;

/* ————————————————— pond floor ————————————————— */
function floorTexture() {
  const c = document.createElement("canvas");
  c.width = c.height = 1024;
  const g = c.getContext("2d");
  const grad = g.createRadialGradient(512, 512, 80, 512, 512, 720);
  grad.addColorStop(0, "#57644a");
  grad.addColorStop(0.55, "#42523e");
  grad.addColorStop(1, "#1f2c24");
  g.fillStyle = grad;
  g.fillRect(0, 0, 1024, 1024);

  const rnd = mulberry32(11);
  // silt speckle
  for (let i = 0; i < 4200; i++) {
    g.fillStyle = `rgba(${30 + rnd() * 60 | 0},${45 + rnd() * 55 | 0},${30 + rnd() * 40 | 0},${0.05 + rnd() * 0.12})`;
    g.fillRect(rnd() * 1024, rnd() * 1024, 1.6 + rnd() * 2.4, 1.6 + rnd() * 2.4);
  }
  // pebbles
  for (let i = 0; i < 260; i++) {
    const x = rnd() * 1024, y = rnd() * 1024, r = 4 + rnd() * 16;
    const tone = 70 + rnd() * 60;
    g.save();
    g.translate(x, y);
    g.rotate(rnd() * Math.PI);
    g.beginPath();
    g.ellipse(0, 0, r, r * (0.62 + rnd() * 0.3), 0, 0, Math.PI * 2);
    g.fillStyle = `rgba(${tone | 0},${tone * 1.05 | 0},${tone * 0.9 | 0},0.85)`;
    g.fill();
    g.beginPath();
    g.ellipse(-r * 0.25, -r * 0.28, r * 0.4, r * 0.22, 0, 0, Math.PI * 2);
    g.fillStyle = "rgba(255,255,255,0.10)";
    g.fill();
    g.restore();
  }
  // sunken leaves
  for (let i = 0; i < 22; i++) {
    const x = rnd() * 1024, y = rnd() * 1024;
    g.save();
    g.translate(x, y);
    g.rotate(rnd() * Math.PI * 2);
    g.beginPath();
    g.ellipse(0, 0, 14 + rnd() * 20, 6 + rnd() * 8, 0, 0, Math.PI * 2);
    g.fillStyle = `rgba(60, 70, 35, ${0.22 + rnd() * 0.2})`;
    g.fill();
    g.restore();
  }
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

const floor = new THREE.Mesh(
  new THREE.PlaneGeometry(60, 60),
  new THREE.MeshStandardMaterial({ map: floorTexture(), roughness: 1, metalness: 0 })
);
floor.rotation.x = -Math.PI / 2;
floor.position.y = FLOOR_Y;
floor.receiveShadow = true;
underGroup.add(floor);

/* caustics — additive plane just above the floor */
const causticMat = new THREE.ShaderMaterial({
  transparent: true,
  blending: THREE.AdditiveBlending,
  depthWrite: false,
  uniforms: { uTime: { value: 0 } },
  vertexShader: `
    varying vec2 vUv;
    void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
  fragmentShader: `
    uniform float uTime;
    varying vec2 vUv;
    float caustic(vec2 p, float t){
      vec2 i = p;
      float c = 1.0;
      float inten = 0.005;
      for (int n = 0; n < 4; n++) {
        float tt = t * (1.0 - (3.5 / float(n + 1)));
        i = p + vec2(cos(tt - i.x) + sin(tt + i.y), sin(tt - i.y) + cos(tt + i.x));
        c += 1.0 / length(vec2(p.x / (sin(i.x + tt) / inten), p.y / (cos(i.y + tt) / inten)));
      }
      c /= 4.0;
      c = 1.17 - pow(c, 1.4);
      return pow(abs(c), 8.0);
    }
    void main(){
      vec2 p = mod(vUv * 28.0, 6.28318) - 3.14159;
      float v = caustic(p, uTime * 0.5);
      float edge = smoothstep(0.5, 0.28, distance(vUv, vec2(0.5)));
      gl_FragColor = vec4(vec3(0.55, 0.75, 0.65) * v * 0.55 * edge, v * 0.5 * edge);
    }`,
});
const caustics = new THREE.Mesh(new THREE.PlaneGeometry(60, 60), causticMat);
caustics.rotation.x = -Math.PI / 2;
caustics.position.y = FLOOR_Y + 0.02;
underGroup.add(caustics);

/* ————————————————— water surface ————————————————— */
const waterUniforms = {
  tUnder: { value: underRT.texture },
  uTime: { value: 0 },
  uSunDir: { value: sun.position.clone().normalize() },
  uCamPos: { value: camera.position },
  uRipples: { value: Array.from({ length: 8 }, () => new THREE.Vector4(0, 0, -10, 0)) },
};

const water = new THREE.Mesh(
  new THREE.PlaneGeometry(60, 60),
  new THREE.ShaderMaterial({
    uniforms: waterUniforms,
    vertexShader: `
      varying vec3 vWorldPos;
      varying vec4 vScreenPos;
      void main(){
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vWorldPos = wp.xyz;
        vec4 mvp = projectionMatrix * viewMatrix * wp;
        vScreenPos = mvp;
        gl_Position = mvp;
      }`,
    fragmentShader: `
      uniform sampler2D tUnder;
      uniform float uTime;
      uniform vec3 uSunDir;
      uniform vec3 uCamPos;
      uniform vec4 uRipples[8];
      varying vec3 vWorldPos;
      varying vec4 vScreenPos;

      float waveH(vec2 p){
        float t = uTime;
        float h = 0.0;
        h += sin(p.x * 0.85 + t * 0.9) * 0.055;
        h += sin(p.x * 0.5 + p.y * 1.0 + t * 1.25) * 0.045;
        h += sin(p.y * 1.6 - p.x * 0.35 + t * 1.6) * 0.025;
        h += sin(p.x * 2.4 + p.y * 2.1 + t * 2.35) * 0.012;
        return h;
      }
      float rippleH(vec2 p){
        float h = 0.0;
        for (int i = 0; i < 8; i++){
          vec4 r = uRipples[i];
          float age = uTime - r.z;
          if (r.z < 0.0 || age < 0.0 || age > 4.0) continue;
          float d = length(p - r.xy);
          float front = d - age * 1.7;
          h += r.w * exp(-front * front * 6.0) * sin(front * 9.0) * exp(-age * 1.3) * exp(-d * 0.16);
        }
        return h;
      }
      float H(vec2 p){ return waveH(p) + rippleH(p); }

      void main(){
        vec2 p = vWorldPos.xz;
        float e = 0.14;
        float hx = H(p + vec2(e, 0.0)) - H(p - vec2(e, 0.0));
        float hz = H(p + vec2(0.0, e)) - H(p - vec2(0.0, e));
        vec3 n = normalize(vec3(-hx * 1.7, 2.0 * e, -hz * 1.7));

        vec3 viewDir = normalize(uCamPos - vWorldPos);

        // refraction
        vec2 screenUV = (vScreenPos.xy / vScreenPos.w) * 0.5 + 0.5;
        vec2 offset = n.xz * 0.16;
        vec3 refr = texture2D(tUnder, screenUV + offset).rgb;
        refr *= vec3(0.78, 0.94, 0.88);                    // absorption tint
        refr = mix(refr, vec3(0.05, 0.20, 0.18), 0.18);    // depth haze

        // sky reflection
        vec3 refl = reflect(-viewDir, n);
        float up = clamp(refl.y, 0.0, 1.0);
        vec3 sky = mix(vec3(0.72, 0.62, 0.42), vec3(0.45, 0.66, 0.74), pow(up, 0.55));
        sky = mix(vec3(0.16, 0.30, 0.20), sky, smoothstep(0.0, 0.24, up)); // canopy at grazing

        float fresnel = pow(1.0 - max(dot(viewDir, n), 0.0), 5.0);
        fresnel = 0.04 + 0.62 * fresnel;

        vec3 col = mix(refr, sky, fresnel);

        // sun
        vec3 halfV = normalize(uSunDir + viewDir);
        col += vec3(1.0, 0.88, 0.66) * pow(max(dot(n, halfV), 0.0), 260.0) * 2.4;
        col += vec3(1.0, 0.92, 0.75) * pow(max(dot(n, halfV), 0.0), 36.0) * 0.14;

        gl_FragColor = vec4(col, 1.0);
      }`,
  })
);
water.rotation.x = -Math.PI / 2;
overGroup.add(water); // note: toggled separately in render loop

/* ripple trigger */
let rippleIdx = 0;
function triggerRipple(x, z, amp = 0.05) {
  waterUniforms.uRipples.value[rippleIdx].set(x, z, clock.elapsedTime, amp);
  rippleIdx = (rippleIdx + 1) % 8;
}

/* ————————————————— koi ————————————————— */
const swimUniforms = { uTime: { value: 0 }, uAmp: { value: 0.14 }, uBend: { value: 0 } };
function swimmable(mat) {
  mat.onBeforeCompile = (sh) => {
    sh.uniforms.uTime = swimUniforms.uTime;
    sh.uniforms.uAmp = swimUniforms.uAmp;
    sh.uniforms.uBend = swimUniforms.uBend;
    sh.vertexShader = sh.vertexShader
      .replace("#include <common>", "#include <common>\nuniform float uTime;\nuniform float uAmp;\nuniform float uBend;")
      .replace("#include <begin_vertex>", `#include <begin_vertex>
        {
          float fseg = clamp((1.15 - transformed.z) / 2.6, 0.0, 1.4);
          float sway = sin(transformed.z * 1.8 - uTime * 7.0) * uAmp * (0.10 + fseg * fseg);
          transformed.x += sway + uBend * fseg * fseg * 0.55;
        }`);
  };
  return mat;
}

function koiTexture() {
  const c = document.createElement("canvas");
  c.width = 256; c.height = 512;
  const g = c.getContext("2d");
  g.fillStyle = "#efe4d0";
  g.fillRect(0, 0, 256, 512);
  // back darker along the top circumference line (u ~ 0.25 → x = 64)
  const back = g.createLinearGradient(0, 0, 256, 0);
  back.addColorStop(0.0, "rgba(160,140,110,0.25)");
  back.addColorStop(0.25, "rgba(120,100,80,0.35)");
  back.addColorStop(0.5, "rgba(160,140,110,0.2)");
  back.addColorStop(0.75, "rgba(255,255,255,0.25)"); // belly light
  back.addColorStop(1.0, "rgba(160,140,110,0.25)");
  g.fillStyle = back;
  g.fillRect(0, 0, 256, 512);

  const rnd = mulberry32(5);
  const blob = (x, y, rx, ry, color) => {
    for (const dx of [-256, 0, 256]) { // wrap seam
      g.save();
      g.translate(x + dx, y);
      g.rotate(rnd() * 0.9 - 0.45);
      g.beginPath();
      g.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
      g.fillStyle = color;
      g.filter = "blur(3px)";
      g.fill();
      g.restore();
      g.filter = "none";
    }
  };
  blob(70, 90, 60, 55, "#d95f1e");   // head-back orange
  blob(200, 200, 55, 70, "#e2681f");
  blob(60, 300, 48, 60, "#d94f1e");
  blob(170, 400, 40, 45, "#2e2a26"); // charcoal near tail
  blob(120, 250, 22, 26, "#2e2a26");
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = THREE.RepeatWrapping;
  return tex;
}

function koiBodyGeometry() {
  const keys = [ // z, radius
    [1.12, 0.03], [1.0, 0.13], [0.72, 0.22], [0.35, 0.27], [0.0, 0.28],
    [-0.42, 0.22], [-0.8, 0.13], [-1.08, 0.06], [-1.2, 0.045],
  ];
  const radiusAt = (z) => {
    for (let i = 0; i < keys.length - 1; i++) {
      const [z0, r0] = keys[i], [z1, r1] = keys[i + 1];
      if (z <= z0 && z >= z1) {
        const t = (z0 - z) / (z0 - z1);
        const s = t * t * (3 - 2 * t);
        return r0 + (r1 - r0) * s;
      }
    }
    return keys[keys.length - 1][1];
  };
  const rings = 30, seg = 18;
  const pos = [], uv = [], idx = [];
  for (let i = 0; i <= rings; i++) {
    const z = 1.12 - (i / rings) * 2.32;
    const r = radiusAt(z);
    for (let j = 0; j <= seg; j++) {
      const a = (j / seg) * Math.PI * 2;
      pos.push(Math.cos(a) * r * 0.6, Math.sin(a) * r, z);
      uv.push(j / seg, i / rings);
    }
  }
  for (let i = 0; i < rings; i++) {
    for (let j = 0; j < seg; j++) {
      const a = i * (seg + 1) + j, b = a + seg + 1;
      idx.push(a, b, a + 1, b, b + 1, a + 1);
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
  geo.setIndex(idx);
  geo.computeVertexNormals();
  return geo;
}

function finShape(points) {
  const s = new THREE.Shape();
  s.moveTo(points[0][0], points[0][1]);
  for (let i = 1; i < points.length; i++) s.lineTo(points[i][0], points[i][1]);
  s.closePath();
  return new THREE.ShapeGeometry(s, 6);
}

const koi = new THREE.Group();
{
  const bodyMat = swimmable(new THREE.MeshStandardMaterial({
    map: koiTexture(), roughness: 0.55, metalness: 0.05,
  }));
  const body = new THREE.Mesh(koiBodyGeometry(), bodyMat);
  body.castShadow = true;
  koi.add(body);

  const finMat = swimmable(new THREE.MeshStandardMaterial({
    color: 0xe2681f, roughness: 0.6, transparent: true, opacity: 0.88, side: THREE.DoubleSide,
  }));

  // tail (drawn in XY, x becomes -z after rotateY(PI/2))
  const tail = new THREE.Mesh(
    finShape([[0, 0], [0.55, 0.34], [0.42, 0.02], [0.55, -0.3]]), finMat);
  tail.geometry.rotateY(Math.PI / 2);
  tail.geometry.translate(0, 0.02, -1.16);
  tail.castShadow = true;
  koi.add(tail);

  // dorsal fin
  const dorsal = new THREE.Mesh(
    finShape([[0, 0], [0.55, 0.16], [0.8, 0.02]]), finMat);
  dorsal.geometry.rotateY(Math.PI / 2);
  dorsal.geometry.translate(0, 0.26, 0.25);
  koi.add(dorsal);

  // pectoral fins
  for (const side of [-1, 1]) {
    const fin = new THREE.Mesh(new THREE.CircleGeometry(0.16, 10, 0, Math.PI * 0.9), finMat);
    fin.geometry.rotateX(-Math.PI / 2);
    fin.geometry.rotateZ(side * 0.9);
    fin.geometry.translate(side * 0.19, -0.06, 0.45);
    koi.add(fin);
  }

  // eyes
  const eyeMat = new THREE.MeshStandardMaterial({ color: 0x14181a, roughness: 0.3 });
  for (const side of [-1, 1]) {
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.035, 10, 8), eyeMat);
    eye.position.set(side * 0.12, 0.05, 0.86);
    koi.add(eye);
  }
}
koi.position.set(0, -1.15, 0);
koi.scale.setScalar(1.15);
underGroup.add(koi);

/* ————————————————— lily pads + lotus ————————————————— */
const pads = [];
function makePad(x, z, r, withFlower) {
  const g = new THREE.Group();
  const pad = new THREE.Mesh(
    new THREE.CylinderGeometry(r, r * 0.98, 0.035, 26, 1, false, 0, Math.PI * 2 - 0.5),
    new THREE.MeshStandardMaterial({ color: 0x3d7a48, roughness: 0.8 })
  );
  pad.castShadow = true;
  g.add(pad);
  const rim = new THREE.Mesh(
    new THREE.CylinderGeometry(r * 0.99, r * 0.97, 0.037, 26, 1, false, 0, Math.PI * 2 - 0.5),
    new THREE.MeshStandardMaterial({ color: 0x2f5e38, roughness: 0.85 })
  );
  rim.scale.set(1.001, 0.9, 1.001);
  g.add(rim);

  if (withFlower) {
    const flower = new THREE.Group();
    const petalMat = new THREE.MeshStandardMaterial({ color: 0xf2d7dd, roughness: 0.5, side: THREE.DoubleSide });
    for (let i = 0; i < 9; i++) {
      const petal = new THREE.Mesh(new THREE.CircleGeometry(0.16, 8, 0, Math.PI * 0.7), petalMat);
      petal.geometry.rotateZ(-Math.PI * 0.35);
      const a = (i / 9) * Math.PI * 2;
      petal.position.set(Math.cos(a) * 0.07, 0.1 + (i % 2) * 0.05, Math.sin(a) * 0.07);
      petal.rotation.set(-0.9 - (i % 2) * 0.35, -a + Math.PI / 2, 0);
      flower.add(petal);
    }
    const center = new THREE.Mesh(
      new THREE.SphereGeometry(0.06, 10, 8),
      new THREE.MeshStandardMaterial({ color: 0xe8b93c, roughness: 0.7 })
    );
    center.position.y = 0.12;
    flower.add(center);
    flower.position.y = 0.03;
    g.add(flower);
  }

  g.position.set(x, 0.03, z);
  g.rotation.y = Math.random() * Math.PI * 2;
  overGroup.add(g);

  // blob shadow on the pond floor (sun-offset)
  const blob = new THREE.Mesh(
    new THREE.CircleGeometry(r * 0.95, 20),
    new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.22, depthWrite: false })
  );
  blob.rotation.x = -Math.PI / 2;
  const sd = sun.position.clone().normalize();
  const depth = 0.03 - FLOOR_Y;
  blob.position.set(x - sd.x / sd.y * depth, FLOOR_Y + 0.04, z - sd.z / sd.y * depth);
  underGroup.add(blob);

  pads.push({ group: g, phase: Math.random() * 6 });
  return g;
}
makePad(-5.6, -2.6, 1.0, true);
makePad(-4.4, -3.4, 0.62, false);
makePad(6.2, 2.2, 0.85, false);
makePad(5.1, 3.1, 0.5, false);
makePad(2.8, -4.6, 0.7, false);

/* ————————————————— reeds ————————————————— */
const reeds = [];
function reedCluster(x, z, count) {
  const cluster = new THREE.Group();
  for (let i = 0; i < count; i++) {
    const h = 1.6 + Math.random() * 1.6;
    const reed = new THREE.Mesh(
      new THREE.CylinderGeometry(0.012, 0.035, h, 6),
      new THREE.MeshStandardMaterial({ color: new THREE.Color().setHSL(0.22 + Math.random() * 0.05, 0.4, 0.3 + Math.random() * 0.12), roughness: 0.9 })
    );
    reed.position.set(x + (Math.random() - 0.5) * 0.9, h / 2 - 0.1, z + (Math.random() - 0.5) * 0.9);
    reed.rotation.z = (Math.random() - 0.5) * 0.16;
    reed.rotation.x = (Math.random() - 0.5) * 0.12;
    reed.castShadow = true;
    cluster.add(reed);
    reeds.push({ mesh: reed, base: reed.rotation.z, phase: Math.random() * 6 });
    if (i % 3 === 0 && h > 2.2) {
      const head = new THREE.Mesh(
        new THREE.CapsuleGeometry(0.05, 0.3, 4, 8),
        new THREE.MeshStandardMaterial({ color: 0x5b3a25, roughness: 0.95 })
      );
      head.position.copy(reed.position);
      head.position.y = h - 0.25;
      head.rotation.copy(reed.rotation);
      cluster.add(head);
    }
  }
  overGroup.add(cluster);
}
reedCluster(-8.2, 4.6, 9);
reedCluster(8.6, -3.2, 7);
reedCluster(7.8, 5.4, 5);

/* ————————————————— dragonflies ————————————————— */
const dragonflies = [];
function makeDragonfly(tint) {
  const g = new THREE.Group();
  const bodyMat = new THREE.MeshStandardMaterial({ color: tint, roughness: 0.4, metalness: 0.3 });
  const thorax = new THREE.Mesh(new THREE.CapsuleGeometry(0.035, 0.12, 4, 8), bodyMat);
  thorax.rotation.x = Math.PI / 2;
  g.add(thorax);
  const abdomen = new THREE.Mesh(new THREE.CylinderGeometry(0.016, 0.008, 0.5, 6), bodyMat);
  abdomen.rotation.x = Math.PI / 2;
  abdomen.position.z = -0.34;
  g.add(abdomen);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.045, 10, 8), bodyMat);
  head.position.z = 0.12;
  g.add(head);

  const wingMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.3, side: THREE.DoubleSide, depthWrite: false });
  const wings = [];
  for (const [zOff, side] of [[0.02, -1], [0.02, 1], [-0.1, -1], [-0.1, 1]]) {
    const wing = new THREE.Mesh(new THREE.PlaneGeometry(0.55, 0.11), wingMat);
    wing.geometry.translate(side * 0.28, 0, 0);
    wing.position.set(0, 0.03, zOff);
    g.add(wing);
    wings.push({ mesh: wing, side });
  }

  const shadow = new THREE.Mesh(
    new THREE.CircleGeometry(0.16, 12),
    new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.18, depthWrite: false })
  );
  shadow.rotation.x = -Math.PI / 2;
  overGroup.add(shadow);

  overGroup.add(g);
  const d = {
    group: g, wings, shadow,
    pos: new THREE.Vector3((Math.random() - 0.5) * 10, 1.2, (Math.random() - 0.5) * 8),
    from: new THREE.Vector3(), to: new THREE.Vector3(),
    t: 1, dur: 1, hover: 0,
  };
  d.from.copy(d.pos); d.to.copy(d.pos);
  dragonflies.push(d);
}
makeDragonfly(0x3a6ea5);
makeDragonfly(0xa53a4f);

function updateDragonfly(d, t, dt) {
  if (d.hover > 0) {
    d.hover -= dt;
    d.pos.y = d.to.y + Math.sin(t * 9) * 0.02;
  } else if (d.t >= 1) {
    // pick a new dart target, then hover there
    d.from.copy(d.to);
    d.to.set((Math.random() - 0.5) * 13, 0.7 + Math.random() * 1.3, (Math.random() - 0.5) * 9);
    d.dur = 0.7 + Math.random() * 0.9;
    d.t = 0;
    d.hover = 0;
  } else {
    d.t += dt / d.dur;
    const s = d.t < 1 ? (1 - Math.pow(1 - d.t, 3)) : 1; // ease-out dart
    d.pos.lerpVectors(d.from, d.to, s);
    if (d.t >= 1) d.hover = 1.2 + Math.random() * 2.4;
  }
  d.group.position.copy(d.pos);
  const dir = new THREE.Vector3().subVectors(d.to, d.from);
  if (dir.lengthSq() > 0.001) d.group.rotation.y = Math.atan2(dir.x, dir.z);
  for (const w of d.wings) w.mesh.rotation.z = w.side * (0.45 + Math.sin(t * 42 + w.side) * 0.55);
  d.shadow.position.set(d.pos.x, 0.02, d.pos.z);
  const sc = Math.max(0.3, 1.4 - d.pos.y * 0.5);
  d.shadow.scale.setScalar(sc);
  d.shadow.material.opacity = 0.1 + 0.12 * sc;
}

/* ————————————————— pollen motes ————————————————— */
{
  const n = IS_MOBILE ? 40 : 70;
  const p = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    p[i * 3] = (Math.random() - 0.5) * 18;
    p[i * 3 + 1] = 0.2 + Math.random() * 2.6;
    p[i * 3 + 2] = (Math.random() - 0.5) * 13;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(p, 3));
  const motes = new THREE.Points(geo, new THREE.PointsMaterial({
    color: 0xfff3d0, size: 0.045, transparent: true, opacity: 0.5, depthWrite: false,
  }));
  overGroup.add(motes);
  motes.userData.update = (t) => {
    const arr = geo.attributes.position.array;
    for (let i = 0; i < n; i++) {
      arr[i * 3] += Math.sin(t * 0.3 + i) * 0.0012;
      arr[i * 3 + 1] += Math.cos(t * 0.2 + i * 2.1) * 0.0009;
    }
    geo.attributes.position.needsUpdate = true;
  };
  window.__motes = motes;
}

/* ————————————————— bubbles underwater ————————————————— */
{
  const n = 26;
  const p = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    p[i * 3] = (Math.random() - 0.5) * 16;
    p[i * 3 + 1] = FLOOR_Y + Math.random() * 2;
    p[i * 3 + 2] = (Math.random() - 0.5) * 12;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(p, 3));
  const bubbles = new THREE.Points(geo, new THREE.PointsMaterial({
    color: 0xcfe8e2, size: 0.05, transparent: true, opacity: 0.55, depthWrite: false,
  }));
  underGroup.add(bubbles);
  bubbles.userData.update = (dt) => {
    const arr = geo.attributes.position.array;
    for (let i = 0; i < n; i++) {
      arr[i * 3 + 1] += dt * (0.12 + (i % 5) * 0.03);
      if (arr[i * 3 + 1] > -0.1) {
        arr[i * 3 + 1] = FLOOR_Y + 0.1;
        arr[i * 3] = (Math.random() - 0.5) * 16;
        arr[i * 3 + 2] = (Math.random() - 0.5) * 12;
      }
    }
    geo.attributes.position.needsUpdate = true;
  };
  window.__bubbles = bubbles;
}

/* ————————————————— food pellets ————————————————— */
const pellets = [];
const pelletCluster = { x: 2.2, z: 1.4, drift: Math.random() * 6 };
function spawnPellets() {
  while (pellets.length) {
    const p = pellets.pop();
    overGroup.remove(p.mesh, p.hit);
  }
  const pelletMat = new THREE.MeshStandardMaterial({ color: 0x6b4a2f, roughness: 0.95 });
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2 + Math.random();
    const r = 0.5 + Math.random() * 0.9;
    const mesh = new THREE.Mesh(new THREE.SphereGeometry(0.085, 10, 8), pelletMat);
    mesh.scale.y = 0.75;
    mesh.castShadow = true;
    const hit = new THREE.Mesh(
      new THREE.SphereGeometry(0.45, 8, 6),
      new THREE.MeshBasicMaterial({ visible: false })
    );
    overGroup.add(mesh, hit);
    pellets.push({
      mesh, hit, eaten: false,
      ox: Math.cos(a) * r, oz: Math.sin(a) * r,
      phase: Math.random() * 6,
    });
  }
}
spawnPellets();

function updatePellets(t) {
  pelletCluster.x = 2.2 + Math.sin(t * 0.05 + pelletCluster.drift) * 1.6;
  pelletCluster.z = 1.4 + Math.cos(t * 0.04 + pelletCluster.drift) * 1.2;
  for (const p of pellets) {
    if (p.eaten) continue;
    const x = pelletCluster.x + p.ox + Math.sin(t * 0.4 + p.phase) * 0.08;
    const z = pelletCluster.z + p.oz + Math.cos(t * 0.35 + p.phase) * 0.08;
    const y = 0.02 + Math.sin(t * 1.4 + p.phase) * 0.012;
    p.mesh.position.set(x, y, z);
    p.hit.position.set(x, y, z);
  }
}

/* ————————————————— splash particles ————————————————— */
const splashes = [];
function splash(x, z) {
  const mat = new THREE.MeshBasicMaterial({ color: 0xe8f4f0, transparent: true, opacity: 0.85 });
  for (let i = 0; i < 9; i++) {
    const m = new THREE.Mesh(new THREE.SphereGeometry(0.03, 6, 5), mat.clone());
    m.position.set(x, 0.04, z);
    const a = Math.random() * Math.PI * 2;
    overGroup.add(m);
    splashes.push({
      mesh: m,
      vx: Math.cos(a) * (0.4 + Math.random()), vy: 1.4 + Math.random() * 1.2, vz: Math.sin(a) * (0.4 + Math.random()),
      life: 1,
    });
  }
}

/* ————————————————— koi behavior ————————————————— */
const fish = {
  heading: 0, speed: 0, baseSpeed: 0.9,
  state: "wander", // wander | seek | rise | dive
  target: null, wanderTo: new THREE.Vector2(), riseT: 0,
  eatenTotal: 0,
};
function pickWander() {
  fish.wanderTo.set((Math.random() - 0.5) * 12, (Math.random() - 0.5) * 9);
}
pickWander();

function updateFish(dt, t) {
  const pos = koi.position;
  let destX, destZ, wantSpeed, arriveR;

  if (fish.state === "seek" && fish.target && !fish.target.eaten) {
    destX = fish.target.mesh.position.x;
    destZ = fish.target.mesh.position.z;
    wantSpeed = 2.6; arriveR = 0.35;
  } else if (fish.state === "rise") {
    fish.riseT += dt;
    const k = Math.min(1, fish.riseT / 0.8);
    pos.y = -1.15 + ((-0.18) - (-1.15)) * (k * k * (3 - 2 * k));
    fish.speed *= 0.94;
    if (k >= 1) { // gulp
      const p = fish.target;
      p.eaten = true;
      p.mesh.visible = false; p.hit.visible = false;
      triggerRipple(pos.x, pos.z, 0.11);
      splash(pos.x, pos.z);
      audio.plip();
      openStory(STORIES[fish.eatenTotal % STORIES.length], fish.eatenTotal % STORIES.length);
      fish.eatenTotal++;
      if (pellets.every(q => q.eaten)) setTimeout(spawnPellets, 26000);
      fish.state = "dive"; fish.riseT = 0; fish.target = null;
    }
    moveForward(dt);
    return;
  } else if (fish.state === "dive") {
    fish.riseT += dt;
    const k = Math.min(1, fish.riseT / 1.1);
    pos.y = -0.18 + ((-1.15) - (-0.18)) * (k * k * (3 - 2 * k));
    if (k >= 1) { fish.state = "wander"; fish.riseT = 0; pickWander(); }
    destX = fish.wanderTo.x; destZ = fish.wanderTo.y;
    wantSpeed = fish.baseSpeed; arriveR = 1.2;
  } else {
    fish.state = fish.target ? "seek" : "wander";
    destX = fish.wanderTo.x; destZ = fish.wanderTo.y;
    wantSpeed = fish.baseSpeed; arriveR = 1.0;
  }

  const dx = destX - pos.x, dz = destZ - pos.z;
  const dist = Math.hypot(dx, dz);

  if (fish.state === "seek" && dist < arriveR) {
    fish.state = "rise"; fish.riseT = 0;
    return;
  }
  if (fish.state === "wander" && dist < arriveR) pickWander();

  const want = Math.atan2(dx, dz);
  let diff = want - fish.heading;
  while (diff > Math.PI) diff -= Math.PI * 2;
  while (diff < -Math.PI) diff += Math.PI * 2;
  const turn = diff * Math.min(1, 2.6 * dt);
  fish.heading += turn;
  swimUniforms.uBend.value += ((turn / Math.max(dt, 0.001)) * 0.12 - swimUniforms.uBend.value) * 0.08;
  fish.speed += (wantSpeed - fish.speed) * 1.4 * dt;

  moveForward(dt);
  swimUniforms.uAmp.value = 0.09 + fish.speed * 0.05;
}
function moveForward(dt) {
  koi.position.x += Math.sin(fish.heading) * fish.speed * dt;
  koi.position.z += Math.cos(fish.heading) * fish.speed * dt;
  koi.position.x = THREE.MathUtils.clamp(koi.position.x, -10, 10);
  koi.position.z = THREE.MathUtils.clamp(koi.position.z, -7.5, 7.5);
  koi.rotation.y = fish.heading;
}

/* ————————————————— story panel ————————————————— */
const panel = document.getElementById("story-panel");
const panelTitle = document.getElementById("panel-title");
const panelText = document.getElementById("panel-text");
const panelLinks = document.getElementById("panel-links");
const panelProgress = document.getElementById("panel-progress");
document.getElementById("panel-close").addEventListener("click", () => panel.classList.remove("open"));
const eatenSet = new Set();
STORIES.forEach(() => {
  const d = document.createElement("span");
  d.className = "dot";
  panelProgress.appendChild(d);
});
function openStory(story, idx) {
  eatenSet.add(idx);
  panelTitle.textContent = story.title;
  panelText.textContent = story.text;
  panelLinks.innerHTML = "";
  for (const l of story.links) {
    const a = document.createElement("a");
    a.href = l.href; a.textContent = l.label;
    if (!l.href.startsWith("mailto:")) { a.target = "_blank"; a.rel = "noopener"; }
    panelLinks.appendChild(a);
  }
  [...panelProgress.children].forEach((d, i) => d.classList.toggle("eaten", eatenSet.has(i)));
  panel.classList.add("open");
}

/* ————————————————— input ————————————————— */
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
const parallax = new THREE.Vector2();

renderer.domElement.addEventListener("pointerdown", (e) => {
  pointer.set((e.clientX / window.innerWidth) * 2 - 1, -(e.clientY / window.innerHeight) * 2 + 1);
  raycaster.setFromCamera(pointer, camera);

  const hits = raycaster.intersectObjects(pellets.filter(p => !p.eaten).map(p => p.hit), false);
  if (hits.length) {
    const p = pellets.find(q => q.hit === hits[0].object);
    if (p && (fish.state === "wander" || fish.state === "seek")) {
      fish.target = p;
      fish.state = "seek";
    }
    triggerRipple(hits[0].object.position.x, hits[0].object.position.z, 0.04);
    return;
  }
  const wHit = raycaster.intersectObject(water, false);
  if (wHit.length) {
    triggerRipple(wHit[0].point.x, wHit[0].point.z, 0.055);
    audio.drip();
  }
});

window.addEventListener("pointermove", (e) => {
  if (IS_MOBILE) return;
  parallax.set((e.clientX / window.innerWidth - 0.5) * 0.6, (e.clientY / window.innerHeight - 0.5) * 0.4);
});

/* ————————————————— ambient audio (generative, no assets) ————————————————— */
const audio = {
  ctx: null, master: null, running: false, timers: [],
  ensure() {
    if (this.ctx) return;
    this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    this.master = this.ctx.createGain();
    this.master.gain.value = 0;
    this.master.connect(this.ctx.destination);

    // water wash: looped brown noise, lowpassed, slow swell
    const len = this.ctx.sampleRate * 4;
    const buf = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const d = buf.getChannelData(0);
    let lastOut = 0;
    for (let i = 0; i < len; i++) {
      const white = Math.random() * 2 - 1;
      lastOut = (lastOut + 0.02 * white) / 1.02;
      d[i] = lastOut * 3.5;
    }
    const src = this.ctx.createBufferSource();
    src.buffer = buf; src.loop = true;
    const lp = this.ctx.createBiquadFilter();
    lp.type = "lowpass"; lp.frequency.value = 420;
    const washGain = this.ctx.createGain();
    washGain.gain.value = 0.14;
    const lfo = this.ctx.createOscillator();
    lfo.frequency.value = 0.07;
    const lfoGain = this.ctx.createGain();
    lfoGain.gain.value = 0.05;
    lfo.connect(lfoGain).connect(washGain.gain);
    src.connect(lp).connect(washGain).connect(this.master);
    src.start(); lfo.start();

    // lapping: bandpassed noise swells
    const src2 = this.ctx.createBufferSource();
    src2.buffer = buf; src2.loop = true; src2.playbackRate.value = 0.8;
    const bp = this.ctx.createBiquadFilter();
    bp.type = "bandpass"; bp.frequency.value = 760; bp.Q.value = 1.4;
    this.lapGain = this.ctx.createGain();
    this.lapGain.gain.value = 0.0;
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
    this.timers.forEach(clearTimeout); this.timers = [];
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

/* ————————————————— resize ————————————————— */
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  underRT.dispose();
  underRT = makeRT();
  waterUniforms.tUnder.value = underRT.texture;
});

/* ————————————————— main loop ————————————————— */
const clock = new THREE.Clock();
let loaderHidden = false;

function animate() {
  const dt = Math.min(0.05, clock.getDelta());
  const t = clock.elapsedTime;

  waterUniforms.uTime.value = t;
  causticMat.uniforms.uTime.value = t;
  swimUniforms.uTime.value = t;

  updateFish(dt, t);
  updatePellets(t);
  for (const d of dragonflies) updateDragonfly(d, t, dt);
  for (const p of pads) {
    p.group.position.y = 0.03 + Math.sin(t * 0.7 + p.phase) * 0.012;
    p.group.rotation.z = Math.sin(t * 0.5 + p.phase) * 0.02;
  }
  for (const r of reeds) r.mesh.rotation.z = r.base + Math.sin(t * 0.8 + r.phase) * 0.028;
  window.__motes.userData.update(t);
  window.__bubbles.userData.update(dt);

  for (let i = splashes.length - 1; i >= 0; i--) {
    const s = splashes[i];
    s.vy -= 6 * dt;
    s.mesh.position.x += s.vx * dt;
    s.mesh.position.y += s.vy * dt;
    s.mesh.position.z += s.vz * dt;
    s.life -= dt * 1.6;
    s.mesh.material.opacity = Math.max(0, s.life * 0.85);
    if (s.life <= 0 || s.mesh.position.y < 0) {
      overGroup.remove(s.mesh);
      splashes.splice(i, 1);
    }
  }

  // camera: slow drift + pointer parallax
  camera.position.x = CAM_BASE.x + Math.sin(t * 0.05) * 0.35 + parallax.x;
  camera.position.z = CAM_BASE.z + Math.cos(t * 0.04) * 0.25 + parallax.y;
  camera.position.y = CAM_BASE.y + Math.sin(t * 0.03) * 0.15;
  camera.lookAt(0, 0, -0.4);

  // pass 1: underwater into RT
  water.visible = false;
  overGroup.visible = false;
  underGroup.visible = true;
  renderer.setRenderTarget(underRT);
  renderer.render(scene, camera);

  // pass 2: surface + above water
  water.visible = true;
  overGroup.visible = true;
  underGroup.visible = false;
  renderer.setRenderTarget(null);
  renderer.render(scene, camera);

  if (!loaderHidden) {
    loaderHidden = true;
    setTimeout(() => document.getElementById("loader").classList.add("done"), 500);
  }
  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);

/* ————————————————— util ————————————————— */
function mulberry32(a) {
  return function () {
    a |= 0; a = a + 0x6D2B79F5 | 0;
    let t = Math.imul(a ^ a >>> 15, 1 | a);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
