import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { BELT_WORDS } from '../content'
import { PALETTE } from '../palette'

const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Say hi' },
]

const STAR_R = 1.1
const ORBIT_R = 1.85
const ORBIT_TILT = 0.32 // rad — the "clock face" leans back slightly
const BELT_R = [2.5, 3.05]

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
    float cells = fbm(p * 3.5 + vec3(t, -t * 0.6, t * 0.3));
    float grain = fbm(p * 11.0 - vec3(t * 2.1, t * 1.4, -t));
    float g = cells * 0.7 + grain * 0.45;
    vec3 col = mix(uEdge * 0.55, uMid, smoothstep(0.22, 0.58, g));
    col = mix(col, uCore, smoothstep(0.58, 0.92, g));
    float ndv = max(dot(normalize(vNormal), normalize(vView)), 0.0);
    float limb = pow(ndv, 0.6);
    col *= 0.5 + 0.65 * limb;
    col += uEdge * pow(1.0 - ndv, 3.0) * 1.1;
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
    a *= smoothstep(uInner - 0.04, uInner + 0.08, r);
    gl_FragColor = vec4(uColor * a, a);
  }
`
/* twinkling starfield */
const STARS_VERT = /* glsl */ `
  attribute float aSize; attribute float aPhase;
  uniform float uTime;
  varying float vTwinkle;
  void main() {
    vTwinkle = 0.55 + 0.45 * sin(uTime * 1.4 + aPhase);
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = aSize * (300.0 / -mv.z);
    gl_Position = projectionMatrix * mv;
  }
`
const STARS_FRAG = /* glsl */ `
  uniform vec3 uColor;
  varying float vTwinkle;
  void main() {
    float d = length(gl_PointCoord - 0.5) * 2.0;
    float a = smoothstep(1.0, 0.2, d) * vTwinkle;
    gl_FragColor = vec4(uColor, a);
  }
`

const hex = (c: string) => new THREE.Color(c)

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
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 80)
    camera.position.set(0, 0.15, 6.6)
    camera.lookAt(0, 0, 0)

    const rig = new THREE.Group()
    scene.add(rig)

    /* ——— starfield (cosmos) ——— */
    const N = isMobile ? 700 : 1400
    const pos = new Float32Array(N * 3), size = new Float32Array(N), phase = new Float32Array(N)
    for (let i = 0; i < N; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 60
      pos[i * 3 + 1] = (Math.random() - 0.5) * 36
      pos[i * 3 + 2] = -10 - Math.random() * 30
      size[i] = 0.4 + Math.pow(Math.random(), 3) * 2.2
      phase[i] = Math.random() * Math.PI * 2
    }
    const starsGeo = new THREE.BufferGeometry()
    starsGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    starsGeo.setAttribute('aSize', new THREE.BufferAttribute(size, 1))
    starsGeo.setAttribute('aPhase', new THREE.BufferAttribute(phase, 1))
    const starsUniforms = { uTime: { value: 0 }, uColor: { value: hex(PALETTE.cream) } }
    const starfield = new THREE.Points(
      starsGeo,
      new THREE.ShaderMaterial({ uniforms: starsUniforms, vertexShader: STARS_VERT, fragmentShader: STARS_FRAG, transparent: true, depthWrite: false }),
    )
    scene.add(starfield)

    /* ——— the sun ——— */
    const uniforms = {
      uTime: { value: 0 },
      uFlare: { value: 0 },
      uCore: { value: hex(PALETTE.cream) },
      uMid: { value: hex(PALETTE.gold) },
      uEdge: { value: hex(PALETTE.orange) },
    }
    const star = new THREE.Mesh(
      new THREE.SphereGeometry(STAR_R, 96, 64),
      new THREE.ShaderMaterial({ uniforms, vertexShader: STAR_VERT, fragmentShader: STAR_FRAG }),
    )
    rig.add(star)

    const rim = new THREE.Mesh(
      new THREE.SphereGeometry(STAR_R * 1.04, 64, 48),
      new THREE.ShaderMaterial({
        uniforms: { uColor: { value: hex(PALETTE.gold) }, uFlare: uniforms.uFlare },
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
          uColor: { value: hex(PALETTE.orange).lerp(hex(PALETTE.gold), 0.5) },
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
    scene.add(corona)

    /* ——— orbiting titles (clock face) ——— */
    const orbit = new THREE.Group()
    orbit.rotation.x = ORBIT_TILT
    rig.add(orbit)

    /* ——— word belt — flipped over the horizontal axis vs. the rock belt ——— */
    const belt = new THREE.Group()
    belt.rotation.set(0.48, 0, -0.14)
    rig.add(belt)

    /* ——— sizing ——— */
    let W = 1, H = 1
    const resize = () => {
      W = wrap.clientWidth
      H = wrap.clientHeight
      renderer.setSize(W, H, false)
      camera.aspect = W / H
      camera.updateProjectionMatrix()
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
    const onDown = (ev: PointerEvent) => { drag.on = true; drag.lastX = ev.clientX; drag.lastY = ev.clientY; drag.vy = drag.vx = 0 }
    const onUp = () => { drag.on = false; canvas.style.cursor = hover ? 'grab' : 'default' }
    const onLeave = () => { pointer.active = false; hover = 0 }
    canvas.addEventListener('pointermove', onMove)
    canvas.addEventListener('pointerdown', onDown)
    window.addEventListener('pointerup', onUp)
    canvas.addEventListener('pointerleave', onLeave)

    let visible = true
    const io = new IntersectionObserver(([en]) => { visible = en.isIntersecting }, { threshold: 0 })
    io.observe(wrap)

    /* ——— projection for HTML labels ——— */
    const world = new THREE.Vector3()
    const proj = new THREE.Vector3()
    const starCenter = new THREE.Vector3()
    const place = (el: HTMLElement | null, p: THREE.Vector3, kind: 'title' | 'belt') => {
      if (!el) return
      star.getWorldPosition(starCenter)
      proj.copy(p).project(camera)
      const px = (proj.x * 0.5 + 0.5) * W
      const py = (-proj.y * 0.5 + 0.5) * H
      const depth = p.z - starCenter.z
      const scale = THREE.MathUtils.clamp(1 + depth * 0.13, 0.7, 1.24)
      proj.copy(starCenter).project(camera)
      const sx = (proj.x * 0.5 + 0.5) * W, sy = (-proj.y * 0.5 + 0.5) * H
      const starPx = (STAR_R * rig.scale.x) / (Math.tan((camera.fov * Math.PI) / 360) * (camera.position.z - starCenter.z)) * (H / 2)
      const d = Math.hypot(px - sx, py - sy)
      let opacity = depth < 0 ? (kind === 'title' ? 0.45 : 0.38) : 1
      if (depth < 0 && d < starPx * 0.98) opacity = 0
      el.style.transform = `translate(-50%, -50%) translate(${px.toFixed(1)}px, ${py.toFixed(1)}px) scale(${scale.toFixed(3)})`
      el.style.opacity = String(opacity)
      el.style.pointerEvents = kind === 'title' && opacity > 0.05 ? 'auto' : 'none'
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
      starsUniforms.uTime.value = reduced ? 0 : t

      let prox = 0
      if (pointer.active) {
        const dx = pointer.x - 0.5, dy = pointer.y - 0.5
        prox = THREE.MathUtils.clamp(1 - Math.hypot(dx, dy) / 0.45, 0, 1)
      }
      const targetFlare = prox * 0.55 + hover * 0.6
      flare += (targetFlare - flare) * Math.min(1, 5 * dt)
      uniforms.uFlare.value = flare

      if (!drag.on) { drag.vy *= 0.92; drag.vx *= 0.92; dragY += drag.vy; dragX = THREE.MathUtils.clamp(dragX + drag.vx, -0.6, 0.6) }

      const px = pointer.active ? (pointer.x - 0.5) : 0
      const py = pointer.active ? (pointer.y - 0.5) : 0
      rig.rotation.y += ((px * 0.35 + dragY) - rig.rotation.y) * Math.min(1, 4 * dt)
      rig.rotation.x += ((py * 0.18 + dragX) - rig.rotation.x) * Math.min(1, 4 * dt)
      starfield.rotation.y = rig.rotation.y * 0.15 // distant stars drift less: parallax
      starfield.rotation.x = rig.rotation.x * 0.15

      if (!reduced) {
        star.rotation.y = t * 0.03
        orbit.rotation.y = -t * 0.11
        belt.rotation.y = t * 0.05
      }

      const n = SECTIONS.length
      for (let i = 0; i < n; i++) {
        const a = (i / n) * Math.PI * 2
        world.set(Math.cos(a) * ORBIT_R, 0, Math.sin(a) * ORBIT_R)
        orbit.localToWorld(world)
        place(titleRefs.current[i], world, 'title')
      }
      const m = BELT_WORDS.length
      for (let j = 0; j < m; j++) {
        const a = (j / m) * Math.PI * 2
        const r = j % 2 === 0 ? BELT_R[0] : BELT_R[1]
        world.set(Math.cos(a) * r, ((j % 3) - 1) * 0.09, Math.sin(a) * r)
        belt.localToWorld(world)
        place(beltRefs.current[j], world, 'belt')
      }

      corona.position.copy(starCenter)
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
      starsGeo.dispose()
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
      {BELT_WORDS.map((w, j) => (
        <span
          key={w}
          ref={(el) => { beltRefs.current[j] = el }}
          className={`belt-label ${j % 4 === 0 ? 'big' : ''}`}
          style={{ opacity: 0 }}
          aria-hidden
        >
          {w}
        </span>
      ))}
    </div>
  )
}
