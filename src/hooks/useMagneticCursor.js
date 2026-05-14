import { useState, useEffect, useRef } from 'react'

/**
 * Tracks mouse position for a custom magnetic cursor.
 * Returns dot position (snaps instantly), ring position (lags behind with RAF),
 * and a `big` flag that components can toggle on hover.
 */
export function useMagneticCursor() {
  const [pos,  setPos]  = useState({ x: -100, y: -100 })
  const [ring, setRing] = useState({ x: -100, y: -100 })
  const [big,  setBig]  = useState(false)

  const target = useRef({ x: -100, y: -100 })
  const raf    = useRef(null)

  useEffect(() => {
    const onMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
      target.current = { x: e.clientX, y: e.clientY }
    }

    const tick = () => {
      setRing(prev => ({
        x: prev.x + (target.current.x - prev.x) * 0.12,
        y: prev.y + (target.current.y - prev.y) * 0.12,
      }))
      raf.current = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove)
    raf.current = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return { pos, ring, big, setBig }
}