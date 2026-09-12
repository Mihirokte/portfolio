import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { SKILLS } from '../content'
import { PALETTE } from '../palette'

const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Say hi' },
]
const BELT_SKILLS = SKILLS.flatMap((g) => g.items.slice(0, 3))

const STAR_R = 1.1
const ORBIT_R = 1.85
const ORBIT_TILT = 0.32 // rad — the "clock face" leans back slightly
const BELT_R = [2.45, 3.0]

/* ——— GLSL ——— */
const NOISE = /* glsl */ `
  float hash(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
  float noise(vec3 x) {
    vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(mix(hash(i), hash(i + vec3(1,0,0)), f.x), mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
               mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x), mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y), f.z);
  }
  float fbm(vec3 p) { float v = 0.0, a = 0.5; for (int i = 0; i < 5; i++) { v += a * noise(p); p = p * 2.03 + vec3(19.1, 7.3, 3.7); a *= 0.5; } return v; }
`

const STAR_VERT = /* glsl */ `
  varying vec3 vNormal; varying vec3 vPos; varying vec3 vView;
  void main() {
    vNormal = normalize(normalMatrix * normal);
    vPos = position;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vView = -mv.xyz;
    gl_Position = projectionMatrix * mv;
  }
`
const STAR_FRAG = /* glsl */ `
  uniform float uTime; uniform float uFlare; uniform vec3 uCore; uniform vec3 uMid; uniform vec3 uEdge;
  varying vec3 vNormal; varying vec3 vPos; varying vec3 vView;
  ${NOISE}
  void main() {
    vec3 p = normalize(vPos);
    float t = uTime * 0.05;
    // large convection cells drifting + fine granulation churning faster
    float cells = fbm(p * 3.5 + vec3(t, -t * 0.6, t * 0.3));
    float grain = fbm(p * 11.0 - vec3(t * 2.1, t * 1.4, -t));
    float g = cells * 0.7 + grain * 0.45;
    // cooler "spots" where cells are lowest
    vec3 col = mix(uEdge * 0.55, uMid, smoothstep(0.22, 0.58, g));
    col = mix(col, uCore, smoothstep(0.58, 0.92, g));
    float ndv = max(dot(normalize(vNormal), normalize(vView)), 0.0);
    float limb = pow(ndv, 0.6);                 // limb darkening
    col *= 0.5 + 0.65 * limb;
    col += uMid * pow(1.0 - ndv, 3.0) * 1.1;    // hot rim
    col *= 1.0 + uFlare * 0.45;
    gl_FragColor = vec4(col, 1.0);
  }
`
const RIM_FRAG = /* glsl */ `
  uniform vec3 uColor; uniform float uFlare;
  varying vec3 vNormal; varying vec3 vPos; varying vec3 vView;
  void main() {
    float f = pow(1.0 - max(dot(normalize(vNormal), normalize(vView)), 0.0), 2.6);
    f *= 1.0 + uFlare * 0.8;
    gl_FragColor = vec4(uColor * f * 1.5, f);
  }
`
const CORONA_VERT = /* glsl */ `
  varying vec2 vUv;
  void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
`
const CORONA_FRAG = /* glsl */ `
  uniform float uTime; uniform float uFlare; uniform vec3 uColor; uniform float uInner;
  varying vec2 vUv;
  ${NOISE}
  void main() {
    vec2 c = vUv - 0.5;
    float r = length(c) * 2.0;
    float ang = atan(c.y, c.x);
    float streaks = fbm(vec3(cos(ang) * 2.2, sin(ang) * 2.2, r * 3.0 - uTime * 0.12));
    float halo = exp(-r * 3.4) * (0.7 + 0.6 * streaks);
    float rays = pow(max(0.0, streaks - 0.38), 1.6) * exp(-r * 2.0) * 1.4;
    float a = (halo * 1.4 + rays) * (1.0 + uFlare * 0.7);
    a *= smoothstep(1.0, 0.72, r);
    a *= smoothstep(uInner - 0.04, uInner + 0.08, r);   // hollow where the star is
    gl_FragColor = vec4(uColor * a, a);
  }
`

function hex(c: string) {
  return new THREE.Color(c)
}

export default function StarScene() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const titleRefs = useRef<(HTMLButtonElement | null)[]>([])
  const beltRefs = useRef<(HTMLSpanElement | null)[]>([])

  useEffect(() => {
    const wrap = wrapRef.current
    const canvas = canvasRef.current
    if (!wrap || !canvas) return
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches
    const isMobile = matchMedia('(pointer: coarse)').matches

    let renderer: THREE.WebGLRenderer
    try {
      renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' })
    } catch {
      wrap.style.display = 'none'
      return
    }
    renderer.setPixelRatio(Math.min(devicePixelRatio || 1, isMobile ? 1.5 : 2))
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.05

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 60)
    camera.position.set(0, 0.15, 6.6)
    camera.lookAt(0, 0, 0)

    const rig = new THREE.Group() // everything; drag + parallax rotate this
    scene.add(rig)

    /* ——— star ——— */
    const uniforms = {
      uTime: { value: 0 },
      uFlare: { value: 0 },
      uCore: { value: hex(PALETTE.white) },
      uMid: { value: hex(PALETTE.aqua) },
      uEdge: { value: hex(PALETTE.sky) },
    }
    const star = new THREE.Mesh(
      new THREE.SphereGeometry(STAR_R, 96, 64),
      new THREE.ShaderMaterial({ uniforms, vertexShader: STAR_VERT, fragmentShader: STAR_FRAG }),
    )
    rig.add(star)

    const rim = new THREE.Mesh(
      new THREE.SphereGeometry(STAR_R * 1.04, 64, 48),
      new THREE.ShaderMaterial({
        uniforms: { uColor: { value: hex(PALETTE.aqua) }, uFlare: uniforms.uFlare },
        vertexShader: STAR_VERT,
        fragmentShader: RIM_FRAG,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    )
    rig.add(rim)

    const CORONA_SIZE = 7.2
    const corona = new THREE.Mesh(
      new THREE.PlaneGeometry(CORONA_SIZE, CORONA_SIZE),
      new THREE.ShaderMaterial({
        uniforms: {
          uTime: uniforms.uTime,
          uFlare: uniforms.uFlare,
          uColor: { value: hex(PALETTE.aqua).lerp(hex(PALETTE.sky), 0.35) },
          uInner: { value: (STAR_R * 2) / CORONA_SIZE },
        },
        vertexShader: CORONA_VERT,
        fragmentShader: CORONA_FRAG,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    )
    corona.renderOrder = 2
    scene.add(corona) // billboard: stays camera-facing, outside the rotating rig

    /* ——— lights for the rocks (the star is the light source) ——— */
    const starLight = new THREE.PointLight(hex(PALETTE.aqua), 40, 20, 1.6)
    rig.add(starLight)
    scene.add(new THREE.AmbientLight(hex(PALETTE.sky), 0.25))

    /* ——— orbiting titles (clock face) ——— */
    const orbit = new THREE.Group()
    orbit.rotation.x = ORBIT_TILT
    rig.add(orbit)

    /* ——— asteroid belt ——— */
    const belt = new THREE.Group()
    belt.rotation.set(-0.48, 0, 0.14)
    rig.add(belt)
    const ROCKS = isMobile ? 420 : 820
    const rockGeo = new THREE.IcosahedronGeometry(1, 0)
    const rockMat = new THREE.MeshStandardMaterial({ color: hex(PALETTE.steel), roughness: 0.95, metalness: 0.05, flatShading: true })
    const rocks = new THREE.InstancedMesh(rockGeo, rockMat, ROCKS)
    const m = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), v = new THREE.Vector3(), s = new THREE.Vector3()
    for (let i = 0; i < ROCKS; i++) {
      const a = Math.random() * Math.PI * 2
      const r = BELT_R[0] + Math.random() * (BELT_R[1] - BELT_R[0])
      v.set(Math.cos(a) * r, (Math.random() - 0.5) * 0.16, Math.sin(a) * r)
      e.set(Math.random() * 6, Math.random() * 6, Math.random() * 6)
      q.setFromEuler(e)
      const sc = 0.012 + Math.pow(Math.random(), 2.2) * 0.06
      s.set(sc, sc * (0.7 + Math.random() * 0.6), sc)
      m.compose(v, q, s)
      rocks.setMatrixAt(i, m)
    }
    belt.add(rocks)

    /* ——— sizing ——— */
    let W = 1, H = 1
    const resize = () => {
      W = wrap.clientWidth
      H = wrap.clientHeight
      renderer.setSize(W, H, false)
      camera.aspect = W / H
      camera.updateProjectionMatrix()
      // keep the belt on screen in portrait
      const fit = Math.min(1, (W / H) / 1.25)
      rig.scale.setScalar(0.92 * fit + 0.08)
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(wrap)

    /* ——— interaction ——— */
    const pointer = { x: 0, y: 0, active: false }
    let hover = 0
    const drag = { on: false, lastX: 0, lastY: 0, vy: 0, vx: 0 }
    let dragY = 0, dragX = 0
    const raycaster = new THREE.Raycaster()
    const ndc = new THREE.Vector2()

    const onMove = (ev: PointerEvent) => {
      const r = canvas.getBoundingClientRect()
      pointer.x = (ev.clientX - r.left) / r.width
      pointer.y = (ev.clientY - r.top) / r.height
      pointer.active = true
      if (drag.on) {
        drag.vy = (ev.clientX - drag.lastX) * 0.006
        drag.vx = (ev.clientY - drag.lastY) * 0.004
        dragY += drag.vy
        dragX = THREE.MathUtils.clamp(dragX + drag.vx, -0.6, 0.6)
        drag.lastX = ev.clientX
        drag.lastY = ev.clientY
      }
      ndc.set(pointer.x * 2 - 1, -(pointer.y * 2 - 1))
      raycaster.setFromCamera(ndc, camera)
      const hit = raycaster.intersectObject(star, false).length > 0
      hover = hit ? 1 : 0
      canvas.style.cursor = drag.on ? 'grabbing' : hit ? 'grab' : 'default'
    }
    const onDown = (ev: PointerEvent) => {
      drag.on = true
      drag.lastX = ev.clientX
      drag.lastY = ev.clientY
      drag.vy = drag.vx = 0
    }
    const onUp = () => { drag.on = false; canvas.style.cursor = hover ? 'grab' : 'default' }
    const onLeave = () => { pointer.active = false; hover = 0 }
    canvas.addEventListener('pointermove', onMove)
    canvas.addEventListener('pointerdown', onDown)
    window.addEventListener('pointerup', onUp)
    canvas.addEventListener('pointerleave', onLeave)

    /* ——— only render while the hero is on screen ——— */
    let visible = true
    const io = new IntersectionObserver(([en]) => { visible = en.isIntersecting }, { threshold: 0 })
    io.observe(wrap)

    /* ——— projection helpers for HTML labels ——— */
    const world = new THREE.Vector3()
    const proj = new THREE.Vector3()
    const starCenter = new THREE.Vector3()
    const place = (el: HTMLElement | null, pos: THREE.Vector3, kind: 'title' | 'belt') => {
      if (!el) return
      proj.copy(pos).project(camera)
      const px = (proj.x * 0.5 + 0.5) * W
      const py = (-proj.y * 0.5 + 0.5) * H
      // depth: things farther than the star center read smaller + dimmer
      const depth = pos.z - starCenter.z // + toward camera
      const scale = THREE.MathUtils.clamp(1 + depth * 0.13, 0.72, 1.22)
      // occluded by the star disc when behind it
      star.getWorldPosition(starCenter)
      proj.copy(starCenter).project(camera)
      const sx = (proj.x * 0.5 + 0.5) * W, sy = (-proj.y * 0.5 + 0.5) * H
      const starPx = (STAR_R * rig.scale.x) / (Math.tan((camera.fov * Math.PI) / 360) * (camera.position.z - starCenter.z)) * (H / 2)
      const d = Math.hypot(px - sx, py - sy)
      let opacity = depth < 0 ? (kind === 'title' ? 0.45 : 0.4) : 1
      if (depth < 0 && d < starPx * 0.98) opacity = 0
      el.style.transform = `translate(-50%, -50%) translate(${px.toFixed(1)}px, ${py.toFixed(1)}px) scale(${scale.toFixed(3)})`
      el.style.opacity = String(opacity)
      el.style.pointerEvents = opacity > 0.05 ? 'auto' : 'none'
      el.style.zIndex = depth < 0 ? '1' : '3'
    }

    /* ——— loop ——— */
    const clock = new THREE.Clock()
    let raf = 0
    let flare = 0
    const tick = () => {
      raf = requestAnimationFrame(tick)
      if (!visible || document.hidden) return
      const dt = Math.min(0.05, clock.getDelta())
      const t = clock.elapsedTime
      uniforms.uTime.value = reduced ? 20 : t

      // proximity + hover -> flare
      let prox = 0
      if (pointer.active) {
        const dx = pointer.x - 0.5, dy = pointer.y - 0.5
        prox = THREE.MathUtils.clamp(1 - Math.hypot(dx, dy) / 0.45, 0, 1)
      }
      const targetFlare = prox * 0.55 + hover * 0.6
      flare += (targetFlare - flare) * Math.min(1, 5 * dt)
      uniforms.uFlare.value = flare
      starLight.intensity = 40 + flare * 30

      // inertia after drag
      if (!drag.on) { drag.vy *= 0.92; drag.vx *= 0.92; dragY += drag.vy; dragX = THREE.MathUtils.clamp(dragX + drag.vx, -0.6, 0.6) }

      // parallax toward the pointer
      const px = pointer.active ? (pointer.x - 0.5) : 0
      const py = pointer.active ? (pointer.y - 0.5) : 0
      rig.rotation.y += ((px * 0.35 + dragY) - rig.rotation.y) * Math.min(1, 4 * dt)
      rig.rotation.x += ((py * 0.18 + dragX) - rig.rotation.x) * Math.min(1, 4 * dt)

      if (!reduced) {
        star.rotation.y = t * 0.03
        orbit.rotation.y = -t * 0.11
        belt.rotation.y = t * 0.045
      }

      // titles: clock hands
      const n = SECTIONS.length
      for (let i = 0; i < n; i++) {
        const a = (i / n) * Math.PI * 2
        world.set(Math.cos(a) * ORBIT_R, 0, Math.sin(a) * ORBIT_R)
        orbit.localToWorld(world)
        place(titleRefs.current[i], world, 'title')
      }
      // skills: riding the belt
      const mcount = BELT_SKILLS.length
      const midR = (BELT_R[0] + BELT_R[1]) / 2
      for (let j = 0; j < mcount; j++) {
        const a = (j / mcount) * Math.PI * 2
        world.set(Math.cos(a) * midR, ((j % 3) - 1) * 0.07, Math.sin(a) * midR)
        belt.localToWorld(world)
        place(beltRefs.current[j], world, 'belt')
      }

      corona.position.copy(star.getWorldPosition(starCenter))
      corona.quaternion.copy(camera.quaternion)
      renderer.render(scene, camera)
    }
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      io.disconnect()
      canvas.removeEventListener('pointermove', onMove)
      canvas.removeEventListener('pointerdown', onDown)
      window.removeEventListener('pointerup', onUp)
      canvas.removeEventListener('pointerleave', onLeave)
      renderer.dispose()
      rockGeo.dispose()
      rockMat.dispose()
    }
  }, [])

  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div ref={wrapRef} className="absolute inset-0" style={{ zIndex: 10 }}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" style={{ touchAction: 'pan-y' }} />
      {SECTIONS.map((sct, i) => (
        <button
          key={sct.id}
          ref={(el) => { titleRefs.current[i] = el }}
          className="orbit-label"
          onClick={() => go(sct.id)}
          style={{ opacity: 0 }}
        >
          {sct.label}
        </button>
      ))}
      {BELT_SKILLS.map((sk, j) => (
        <span key={sk} ref={(el) => { beltRefs.current[j] = el }} className="belt-label" style={{ opacity: 0 }} aria-hidden>
          {sk}
        </span>
      ))}
    </div>
  )
}
