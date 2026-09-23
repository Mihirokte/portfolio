import { useEffect, useRef } from 'react'

/**
 * The stage: the cat animation is the backmost layer, seen through three
 * torn-paper apertures. Pointer movement parallaxes the sheets a few pixels.
 * The animation always plays (an animated image, not a <video>, so no
 * autoplay policy can pause it).
 */
export default function Theatre({ compact }: { compact: boolean }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || compact) return
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    let tx = 0, ty = 0
    const onMove = (e: PointerEvent) => {
      tx = (e.clientX / innerWidth - 0.5) * 2
      ty = (e.clientY / innerHeight - 0.5) * 2
      if (!raf) raf = requestAnimationFrame(apply)
    }
    const apply = () => {
      raf = 0
      el.style.setProperty('--px', tx.toFixed(3))
      el.style.setProperty('--py', ty.toFixed(3))
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [compact])

  return (
    <div className="theatre" ref={ref} aria-hidden>
      <div className="stage">
        <picture>
          <source srcSet="/cat-day.webp" type="image/webp" />
          <img src="/cat-day.gif" alt="" width={1280} height={720} decoding="async" />
        </picture>
      </div>
      <div className="aperture a3" />
      <div className="aperture a2" />
      <div className="aperture a1" />
      <div className="floor" />
    </div>
  )
}
