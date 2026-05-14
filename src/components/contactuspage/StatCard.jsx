import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { LIGHT_BG_COLORS } from '../../styles/tokens'

function useCountUp(ref, rawNum, duration = 1500) {
  const [count,  setCount]  = useState(0)
  const [inView, setInView] = useState(false)

  const numericValue =
    typeof rawNum === 'number'
      ? rawNum
      : /^\d+$/.test(String(rawNum))
      ? parseInt(rawNum, 10)
      : null // non-numeric → display as-is, no animation

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setInView(true); obs.unobserve(el) }
      },
      { threshold: 0.45 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [ref])

  useEffect(() => {
    if (!inView || numericValue === null) {
      setCount(numericValue ?? 0)
      return
    }
    let startTs = null
    const step = (ts) => {
      if (!startTs) startTs = ts
      const progress = Math.min((ts - startTs) / duration, 1)
      const eased    = 1 - Math.pow(1 - progress, 3) // cubic ease-out
      setCount(Math.floor(eased * numericValue))
      if (progress < 1) requestAnimationFrame(step)
      else setCount(numericValue)
    }
    requestAnimationFrame(step)
  }, [inView, numericValue, duration])

  return { count, inView }
}

function toGlow(hexColor, alpha = 0.14) {
  const map = {
    [LIGHT_BG_COLORS.araticcyan]:    `rgba(33,158,188,${alpha})`,
    [LIGHT_BG_COLORS.evergreenteal]: `rgba(64,138,113,${alpha})`,
    [LIGHT_BG_COLORS.solargold]:     `rgba(255,183,3,${alpha})`,
    [LIGHT_BG_COLORS.emberorange]:   `rgba(251,133,0,${alpha})`,
    [LIGHT_BG_COLORS.bgd]:           `rgba(13,59,80,${alpha})`,
    [LIGHT_BG_COLORS.dark]:          `rgba(1,38,53,${alpha})`,
  }
  return map[hexColor] || `rgba(33,158,188,${alpha})`
}

export default function StatCard({
  num,
  suffix      = '',
  label       = '',
  accentColor = LIGHT_BG_COLORS.araticcyan,
  delay       = 0,
  size        = 'md',
  full        = false,
}) {
  const ref = useRef(null)
  const { count, inView } = useCountUp(ref, num)

  const isNumeric    = typeof num === 'number' || /^\d+$/.test(String(num))
  const displayValue = isNumeric ? `${count}${suffix}` : `${num}${suffix}`
  const glowColor    = toGlow(accentColor)
  const glowColorHi  = toGlow(accentColor, 0.22)

  /* Size scale */
  const scale = {
    sm: { pad: '18px 18px', numSize: 'clamp(28px,3.5vw,36px)', labelSize: 12, dotSize: 7 },
    md: { pad: '26px 22px', numSize: 'clamp(36px,4.5vw,52px)', labelSize: 13, dotSize: 8 },
    lg: { pad: '34px 28px', numSize: 'clamp(44px,5.5vw,64px)', labelSize: 14, dotSize: 10 },
  }[size] || {}

}

export function StatCardDark({
  num,
  suffix      = '',
  label       = '',
  accentColor = LIGHT_BG_COLORS.araticcyan,
  delay       = 0,
  size        = 'md',
  full        = false,
  children,
}) {
  const ref = useRef(null)
  const { count, inView } = useCountUp(ref, num ?? 0)

  const isNumeric    = num !== undefined && (typeof num === 'number' || /^\d+$/.test(String(num)))
  const displayValue = isNumeric ? `${count}${suffix}` : num !== undefined ? `${num}${suffix}` : null
  const glowColor    = toGlow(accentColor, 0.18)

  const scale = {
    sm: { pad: '18px 18px', numSize: 'clamp(28px,3.5vw,36px)', labelSize: 12 },
    md: { pad: '26px 22px', numSize: 'clamp(36px,4.5vw,52px)', labelSize: 13 },
    lg: { pad: '34px 28px', numSize: 'clamp(44px,5.5vw,64px)', labelSize: 14 },
  }[size] || {}

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -5, boxShadow: '0 24px 56px rgba(1,38,53,0.28)' }}
      style={{
        gridColumn:    full ? '1 / -1' : undefined,
        position:      'relative',
        overflow:      'hidden',
        padding:       scale.pad,
        borderRadius:  22,
        cursor:        'default',
        background:    LIGHT_BG_COLORS.bgd,
        border:        `1.5px solid rgba(255,255,255,0.07)`,
        boxShadow:     `0 10px 36px rgba(1,38,53,0.18)`,
        transition:    'transform 0.36s cubic-bezier(0.23,1,0.32,1), box-shadow 0.36s ease',
      }}
    >
      {/* Glow blob */}
      <div style={{
        position:      'absolute',
        top: -60, right: -60,
        width:         160, height: 160,
        borderRadius:  '50%',
        background:    glowColor,
        filter:        'blur(40px)',
        pointerEvents: 'none',
      }} />

      {/* Accent dot */}
      <div style={{
        width:        8, height: 8,
        borderRadius: '50%',
        background:   accentColor,
        boxShadow:    `0 0 0 3px ${toGlow(accentColor, 0.25)}`,
        marginBottom: 14,
      }} />

      {/* Value */}
      {displayValue && (
        <div style={{
          fontFamily:    "'Syne', sans-serif",
          fontSize:      scale.numSize,
          fontWeight:    800,
          lineHeight:    1,
          letterSpacing: '-0.045em',
          color:         accentColor,
          marginBottom:  8,
          position:      'relative', zIndex: 1,
        }}>
          {displayValue}
        </div>
      )}

      {/* Label */}
      {label && (
        <div style={{
          fontSize:      scale.labelSize,
          fontWeight:    600,
          lineHeight:    1.5,
          color:         'rgba(183,215,226,0.6)',
          position:      'relative', zIndex: 1,
        }}>
          {label}
        </div>
      )}

      {/* Arbitrary children (e.g. a mini CTA) */}
      {children && (
        <div style={{ position: 'relative', zIndex: 1 }}>
          {children}
        </div>
      )}
    </motion.div>
  )
}