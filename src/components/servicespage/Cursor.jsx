import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const mouse = useRef({ x: 0, y: 0 })
  const pos = useRef({ x: 0, y: 0 })
  const rafRef = useRef(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current

    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      gsap.set(dot, { x: e.clientX, y: e.clientY })
    }

    const animateRing = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.12
      pos.current.y += (mouse.current.y - pos.current.y) * 0.12
      gsap.set(ring, { x: pos.current.x, y: pos.current.y })
      rafRef.current = requestAnimationFrame(animateRing)
    }
    animateRing()

    document.addEventListener('mousemove', onMove)

    // hover effects
    const addBig = () => gsap.to(ring, { width: 64, height: 64, opacity: 0.2, duration: 0.2 })
    const removeBig = () => gsap.to(ring, { width: 36, height: 36, opacity: 0.55, duration: 0.2 })

    const targets = document.querySelectorAll('a, button, .srv-block, .ws, .wi, .faq-item, .smc')
    targets.forEach(el => {
      el.addEventListener('mouseenter', addBig)
      el.addEventListener('mouseleave', removeBig)
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafRef.current)
      targets.forEach(el => {
        el.removeEventListener('mouseenter', addBig)
        el.removeEventListener('mouseleave', removeBig)
      })
    }
  }, [])

  return (
    <>
      <div ref={dotRef} style={{
        position: 'fixed', width: 8, height: 8, background: '#FF4D00', borderRadius: '50%',
        pointerEvents: 'none', zIndex: 9999, transform: 'translate(-50%, -50%)', mixBlendMode: 'multiply',
      }} />
      <div ref={ringRef} style={{
        position: 'fixed', width: 36, height: 36, border: '1.5px solid #FF4D00', borderRadius: '50%',
        pointerEvents: 'none', zIndex: 9998, transform: 'translate(-50%, -50%)', mixBlendMode: 'multiply', opacity: 0.55,
      }} />
    </>
  )
}
