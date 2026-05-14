import { useState, useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

/**
 * Returns a count that animates from 0 → target using an easeOutCubic
 * curve once the provided ref element enters the viewport.
 */
export function useCountUp(ref, target, duration = 900) {
  const [count, setCount] = useState(0)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView || target === 0) {
      setCount(target)
      return
    }

    let startTs = null

    const step = (ts) => {
      if (!startTs) startTs = ts
      const progress = Math.min((ts - startTs) / duration, 1)
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
      else setCount(target)
    }

    requestAnimationFrame(step)
  }, [inView, target, duration])

  return { count, inView }
}