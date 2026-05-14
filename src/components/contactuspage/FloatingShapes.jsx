import { motion } from 'framer-motion'
import { LIGHT_BG_COLORS } from '../../styles/tokens'

/**
 * Purely decorative animated background layer used in the Hero section.
 * Contains: gradient blobs, grid overlay, ghost word, spinning/floating shapes.
 */
export default function FloatingShapes({ ghostWord = 'CONTACT' }) {
  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>

      {/* ── Blobs ─────────────────────────────────── */}
      <motion.div
        animate={{ x: [0, 18, -14, 0], y: [0, -22, 16, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', top: -60, right: -60, width: 480, height: 480,
          background: 'rgba(255,77,0,0.07)', borderRadius: '50%', filter: 'blur(80px)' }}
      />
      <motion.div
        animate={{ x: [0, -14, 12, 0], y: [0, 16, -18, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        style={{ position: 'absolute', bottom: 0, left: '4%', width: 360, height: 360,
          background: 'rgba(107,79,255,0.055)', borderRadius: '50%', filter: 'blur(80px)' }}
      />
      <motion.div
        animate={{ x: [0, 10, -8, 0], y: [0, -14, 12, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        style={{ position: 'absolute', top: '40%', right: '28%', width: 280, height: 280,
          background: 'rgba(0,184,160,0.055)', borderRadius: '50%', filter: 'blur(80px)' }}
      />

      {/* ── Grid lines ────────────────────────────── */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(26,26,46,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(26,26,46,.035) 1px,transparent 1px)',
        backgroundSize: '80px 80px',
      }} />

      {/* ── Ghost word ────────────────────────────── */}
      <div style={{
        position: 'absolute', right: -20, top: '50%',
        transform: 'translateY(-52%)',
        fontFamily: "'Syne', sans-serif",
        fontSize: 'clamp(200px,22vw,340px)',
        fontWeight: 800,
        color: 'rgba(26,26,46,.03)',
        lineHeight: 1,
        userSelect: 'none',
        whiteSpace: 'nowrap',
        letterSpacing: '-0.06em',
      }}>
        {ghostWord}
      </div>

      {/* ── Spinning diamond ring ─────────────────── */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
        style={{ position: 'absolute', top: '20%', right: '7%', width: 100, height: 100,
          border: '1.5px solid rgba(255,77,0,.13)', borderRadius: '28%' }}
      />

      {/* ── Floating square ──────────────────────── */}
      <motion.div
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{ position: 'absolute', bottom: '24%', left: '5%', width: 52, height: 52,
          background: LIGHT_BG_COLORS, opacity: 0.055, borderRadius: 14 }}
      />

      {/* ── Floating circle outline ───────────────── */}
      <motion.div
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        style={{ position: 'absolute', top: '55%', right: '17%', width: 66, height: 66,
          border: `1.5px solid rgba(107,79,255,.1)`, borderRadius: '50%' }}
      />

    </div>
  )
}