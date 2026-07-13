"use client";
// HeroSection.jsx — fully redesigned with LIGHT_BG_COLORS
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { LIGHT_BG_COLORS } from '../../styles/tokens'

/* ─────────────────────────────────────────────
   useCountUp hook (self-contained)
───────────────────────────────────────────── */
function useCountUp(ref, rawNum, duration = 1400) {
  const [count, setCount] = useState(0)
  const [inView, setInView] = useState(false)

  const numericValue =
    typeof rawNum === 'number'
      ? rawNum
      : /^\d+$/.test(String(rawNum))
      ? parseInt(rawNum, 10)
      : null

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.unobserve(el) } },
      { threshold: 0.4 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [ref])

  useEffect(() => {
    if (!inView || numericValue === null) { setCount(numericValue ?? 0); return }
    let start = null
    const step = (ts) => {
      if (!start) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * numericValue))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, numericValue, duration])

  return { count, inView }
}

/* ─────────────────────────────────────────────
   Background — organic light mesh
   Completely different: layered petal-soft
   radial gradients on bg1, tinted with brand
   accent bleeds — feels like morning light
   through frosted glass. No dark bg at all.
───────────────────────────────────────────── */
function HeroBackground() {
  return (
    <>
      {/* Dot matrix grain */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `radial-gradient(${LIGHT_BG_COLORS.border}55 1px, transparent 1px)`,
        backgroundSize: '32px 32px',
        opacity: 0.55,
        zIndex: 0,
      }} />

      {/* Cyan bloom — top left */}
      <div style={{
        position: 'absolute', width: 700, height: 700, borderRadius: '50%',
        background: `radial-gradient(circle, rgba(33,158,188,0.13) 0%, transparent 70%)`,
        top: -260, left: -200,
        filter: 'blur(40px)', pointerEvents: 'none', zIndex: 0,
        animation: 'blobDrift 12s ease-in-out infinite',
      }} />

      {/* Teal bloom — bottom right */}
      <div style={{
        position: 'absolute', width: 560, height: 560, borderRadius: '50%',
        background: `radial-gradient(circle, rgba(64,138,113,0.1) 0%, transparent 68%)`,
        bottom: -180, right: -160,
        filter: 'blur(40px)', pointerEvents: 'none', zIndex: 0,
        animation: 'blobDrift 14s ease-in-out infinite reverse',
      }} />

      {/* Gold accent — mid right */}
      <div style={{
        position: 'absolute', width: 320, height: 320, borderRadius: '50%',
        background: `radial-gradient(circle, rgba(255,183,3,0.08) 0%, transparent 70%)`,
        top: '35%', right: '8%',
        filter: 'blur(50px)', pointerEvents: 'none', zIndex: 0,
        animation: 'blobDrift 9s ease-in-out infinite 3s',
      }} />

      {/* Geometric ring — top right */}
      <div style={{
        position: 'absolute', top: '8%', right: '6%',
        width: 110, height: 110,
        border: `1.5px solid ${LIGHT_BG_COLORS.araticcyan}28`,
        borderRadius: '30%',
        pointerEvents: 'none', zIndex: 0,
        animation: 'spinSlow 30s linear infinite',
      }} />

      {/* Small filled square — bottom left */}
      <div style={{
        position: 'absolute', bottom: '18%', left: '4%',
        width: 44, height: 44,
        background: LIGHT_BG_COLORS.araticcyan,
        opacity: 0.06, borderRadius: 12,
        pointerEvents: 'none', zIndex: 0,
        animation: 'floatSh 9s ease-in-out infinite',
      }} />

      {/* Circle outline — mid left */}
      <div style={{
        position: 'absolute', top: '55%', left: '3%',
        width: 66, height: 66,
        border: `1.5px solid ${LIGHT_BG_COLORS.evergreenteal}30`,
        borderRadius: '50%',
        pointerEvents: 'none', zIndex: 0,
        animation: 'floatSh 11s ease-in-out infinite reverse',
      }} />

      {/* Ghost word watermark */}
      <div style={{
        position: 'absolute', right: -30, top: '48%',
        transform: 'translateY(-50%)',
        fontFamily: "'Outfit', sans-serif",
        fontSize: 'clamp(140px,18vw,280px)',
        fontWeight: 800,
        color: LIGHT_BG_COLORS.araticcyan,
        opacity: 0.035,
        letterSpacing: '-0.05em',
        lineHeight: 1,
        pointerEvents: 'none',
        userSelect: 'none',
        whiteSpace: 'nowrap',
        zIndex: 0,
      }}>
        DETEROID
      </div>
    </>
  )
}

/* ─────────────────────────────────────────────
   StatCard
───────────────────────────────────────────── */
function StatCard({ num, suffix = '', label, accentColor, glowColor, delay = 0 }) {
  const ref = useRef(null)
  const { count, inView } = useCountUp(ref, num)

  const isNumeric = typeof num === 'number' || /^\d+$/.test(String(num))
  const displayValue = isNumeric ? `${count}${suffix}` : `${num}${suffix}`

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, boxShadow: `0 24px 56px ${glowColor}` }}
      style={{
        background: LIGHT_BG_COLORS.bglt,
        borderLeft:   `1.5px solid ${LIGHT_BG_COLORS.border}`,
        borderRight:  `1.5px solid ${LIGHT_BG_COLORS.border}`,
        borderBottom: `1.5px solid ${LIGHT_BG_COLORS.border}`,
        borderTop:    `3px solid ${accentColor}`,
        borderRadius: 20,
        padding: '26px 22px',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'default',
        transition: 'box-shadow 0.3s ease, transform 0.3s ease',
        boxShadow: `0 6px 20px rgba(2,48,71,0.05)`,
      }}
    >
      {/* Indicator dot */}
      <div style={{
        width: 8, height: 8, borderRadius: '50%',
        background: accentColor,
        boxShadow: `0 0 0 3px ${glowColor}`,
        marginBottom: 14,
      }} />

      {/* Number */}
      <div style={{
        fontFamily: "'Outfit', sans-serif",
        fontSize: 'clamp(36px, 4.5vw, 52px)',
        fontWeight: 800,
        lineHeight: 1,
        marginBottom: 8,
        color: accentColor,
        letterSpacing: '-0.045em',
      }}>
        {displayValue}
      </div>

      {/* Label */}
      <div style={{
        fontSize: 13,
        color: LIGHT_BG_COLORS.txt3,
        fontWeight: 600,
        letterSpacing: '0.01em',
        lineHeight: 1.5,
      }}>
        {label}
      </div>

      {/* Corner glow */}
      <div style={{
        position: 'absolute', bottom: -18, right: -18,
        width: 72, height: 72, borderRadius: '50%',
        background: `radial-gradient(circle, ${glowColor}, transparent 70%)`,
        pointerEvents: 'none',
      }} />
    </motion.div>
  )
}

/* ─────────────────────────────────────────────
   Animation variants
───────────────────────────────────────────── */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11 } },
}
const item = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.82, ease: [0.16, 1, 0.3, 1] } },
}

/* ─────────────────────────────────────────────
   Headline config
───────────────────────────────────────────── */
const HEADLINE_LINES = [
  { text: "Let's build",  highlight: false },
  { text: 'something',   highlight: true  },
  { text: 'together.',   highlight: false, underline: true },
]

/* ─────────────────────────────────────────────
   Stat data — semantic LIGHT_BG_COLORS
───────────────────────────────────────────── */
const HERO_STATS = [
  {
    num: 47,     suffix: '+',    label: 'Projects Shipped',
    accentColor: LIGHT_BG_COLORS.araticcyan,
    glowColor:   'rgba(33,158,188,0.14)',
    delay: 0.1,
  },
  {
    num: 3,      suffix: ' yrs', label: 'Experience',
    accentColor: LIGHT_BG_COLORS.evergreenteal,
    glowColor:   'rgba(64,138,113,0.14)',
    delay: 0.2,
  },
  {
    num: 99,     suffix: '%',    label: 'Uptime',
    accentColor: LIGHT_BG_COLORS.solargold,
    glowColor:   'rgba(255,183,3,0.16)',
    delay: 0.3,
  },
  {
    num: '24/7', suffix: '',     label: 'Support',
    accentColor: LIGHT_BG_COLORS.bgd,
    glowColor:   'rgba(13,59,80,0.10)',
    delay: 0.4,
  },
]

/* ─────────────────────────────────────────────
   Global keyframes + responsive CSS
───────────────────────────────────────────── */
const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap');

  @keyframes blobDrift {
    0%,100% { transform: translate(0,0) scale(1); }
    33%      { transform: translate(24px,-28px) scale(1.04); }
    66%      { transform: translate(-18px,16px) scale(0.97); }
  }
  @keyframes spinSlow {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  @keyframes floatSh {
    0%,100% { transform: translateY(0); }
    50%     { transform: translateY(-16px); }
  }
  @keyframes shimmer {
    0%   { background-position: -200% center; }
    100% { background-position: 200% center; }
  }

  /* ── Pill badge hover ── */
  .hero-badge:hover {
    background: ${LIGHT_BG_COLORS.araticcyan} !important;
    color: #fff !important;
  }

  /* ── CTA primary hover ── */
  .hero-cta-primary:hover {
    box-shadow: 0 20px 48px rgba(33,158,188,0.38) !important;
    transform: translateY(-2px);
  }

  /* ── CTA secondary hover ── */
  .hero-cta-secondary:hover {
    background: ${LIGHT_BG_COLORS.bgd} !important;
    color: #fff !important;
    border-color: ${LIGHT_BG_COLORS.bgd} !important;
  }

  /* ── Responsive ── */
  @media (max-width: 1100px) {
    .hero-layout { grid-template-columns: 1fr !important; gap: 56px !important; }
    .stat-mosaic { grid-template-columns: 1fr 1fr !important; }
  }
  @media (max-width: 768px) {
    .hero-inner  { padding: 80px 28px !important; }
    .hero-headline span { font-size: clamp(52px, 11vw, 72px) !important; }
    .hero-subtitle { font-size: 15px !important; }
    .hero-ctas { flex-direction: column !important; align-items: flex-start !important; }
    .hero-cta-primary, .hero-cta-secondary { width: 100% !important; justify-content: center !important; }
  }
  @media (max-width: 520px) {
    .hero-inner { padding: 72px 20px !important; }
    .stat-mosaic { gap: 10px !important; }
    .hero-headline span { font-size: clamp(44px, 13vw, 64px) !important; }
  }
  @media (max-width: 380px) {
    .stat-mosaic { grid-template-columns: 1fr !important; }
  }
`

/* ─────────────────────────────────────────────
   Hero  — main export
───────────────────────────────────────────── */
export default function Hero({ setBig = () => {} }) {
  return (
    <>
      <style>{GLOBAL_CSS}</style>

      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 100,
        position: 'relative',
        overflow: 'hidden',
        /*
         * ── COMPLETELY DIFFERENT BACKGROUND ──
         * Soft luminous dawn mesh on light base:
         * bg1 (#F4FBFE) as the dominant canvas,
         * bg2/bg3 as warm mid-horizon bands,
         * accent bleeds from araticcyan & evergreenteal.
         * Nothing dark — total contrast to the previous
         * near-black scheme.
         */
        background: `
          radial-gradient(ellipse 90% 55% at 15% 0%,   rgba(33,158,188,0.10) 0%, transparent 55%),
          radial-gradient(ellipse 70% 50% at 85% 100%, rgba(64,138,113,0.09) 0%, transparent 52%),
          radial-gradient(ellipse 60% 40% at 80% 10%,  rgba(255,183,3,0.06)  0%, transparent 50%),
          linear-gradient(160deg,
            #F4FBFE 0%,
            #EDF7FA 28%,
            #E9F5F2 55%,
            #F0F9FB 80%,
            #F4FBFE 100%
          )
        `,
      }}>
        <HeroBackground />

        {/* Thin top accent line */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          height: 3,
          background: `linear-gradient(90deg,
            ${LIGHT_BG_COLORS.araticcyan},
            ${LIGHT_BG_COLORS.evergreenteal} 50%,
            ${LIGHT_BG_COLORS.solargold}
          )`,
          zIndex: 10,
        }} />

        <div
          className="hero-inner"
          style={{
            maxWidth: 1300,
            margin: '0 auto',
            padding: '80px 52px',
            width: '100%',
            position: 'relative',
            zIndex: 2,
          }}
        >
          <div
            className="hero-layout"
            style={{
              display: 'grid',
              gridTemplateColumns: '55fr 45fr',
              gap: 80,
              alignItems: 'center',
            }}
          >
            {/* ─── LEFT ─── */}
            <motion.div variants={container} initial="hidden" animate="show">

              {/* Eyebrow badge */}
              <motion.div variants={item} style={{ marginBottom: 32 }}>
                <span
                  className="hero-badge"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 11,
                    fontWeight: 800,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: LIGHT_BG_COLORS.araticcyan,
                    background: `rgba(33,158,188,0.08)`,
                    border: `1px solid rgba(33,158,188,0.2)`,
                    padding: '7px 16px',
                    borderRadius: 99,
                    transition: 'background 0.25s ease, color 0.25s ease',
                    cursor: 'default',
                  }}
                >
                  {/* Live pulse dot */}
                  <span style={{
                    width: 7, height: 7, borderRadius: '50%',
                    background: LIGHT_BG_COLORS.evergreenteal,
                    display: 'inline-block',
                    boxShadow: `0 0 0 3px rgba(64,138,113,0.2)`,
                    animation: 'pulseDot 2.2s ease-in-out infinite',
                  }} />
                  Get in Touch
                </span>
              </motion.div>

              {/* Headline */}
              <h1
                className="hero-headline"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 800,
                  lineHeight: 0.92,
                  letterSpacing: '-0.05em',
                  marginBottom: 28,
                  marginTop: 0,
                }}
              >
                {HEADLINE_LINES.map((line, i) => (
                  <motion.div key={i} variants={item} style={{ overflow: 'hidden' }}>
                    <span style={{
                      display: 'block',
                      fontSize: 'clamp(64px, 8.5vw, 88px)',
                      /* txt1 for normal lines, araticcyan for highlight */
                      color: line.highlight
                        ? LIGHT_BG_COLORS.araticcyan
                        : LIGHT_BG_COLORS.dark,
                      position: 'relative',
                    }}>
                      {line.text}
                      {/* Soft underline highlight on last line */}
                      {line.underline && (
                        <span style={{
                          position: 'absolute',
                          bottom: 8, left: 0,
                          width: '100%', height: 12,
                          background: `linear-gradient(90deg,
                            rgba(33,158,188,0.18),
                            rgba(64,138,113,0.12)
                          )`,
                          borderRadius: 4,
                          zIndex: -1,
                        }} />
                      )}
                    </span>
                  </motion.div>
                ))}
              </h1>

              {/* Subtitle */}
              <motion.p
                variants={item}
                className="hero-subtitle"
                style={{
                  fontSize: 16.5,
                  lineHeight: 1.82,
                  /* txt3 for body copy — readable but subordinate */
                  color: LIGHT_BG_COLORS.txt3,
                  maxWidth: 450,
                  marginBottom: 44,
                  marginTop: 0,
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Whether you're starting a new project, need a security audit, or want to integrate AI —
                <strong style={{
                  /* txt1 for emphasis — darkest readable tone */
                  color: LIGHT_BG_COLORS.txt1,
                  fontWeight: 600,
                }}>
                  {' '}no agencies, no middlemen. Just Deteroid.
                </strong>
              </motion.p>

              {/* CTA buttons */}
              <motion.div
                variants={item}
                className="hero-ctas"
                style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}
              >
                {/* Primary — araticcyan filled */}
                <motion.a
                  href="#form"
                  className="hero-cta-primary"
                  whileTap={{ scale: 0.97 }}
                  onMouseEnter={() => setBig(true)}
                  onMouseLeave={() => setBig(false)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 9,
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 14,
                    fontWeight: 700,
                    padding: '15px 32px',
                    borderRadius: 50,
                    background: LIGHT_BG_COLORS.araticcyan,
                    color: LIGHT_BG_COLORS.light,
                    textDecoration: 'none',
                    boxShadow: `0 8px 28px rgba(33,158,188,0.28)`,
                    transition: 'box-shadow 0.28s ease, transform 0.28s ease',
                    letterSpacing: '0.01em',
                    border: 'none',
                  }}
                >
                  Send a Message
                  <svg width={13} height={13} fill="none" stroke="currentColor"
                    strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"
                    viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </motion.a>

                {/* Secondary — outlined, bgd on hover */}
                <motion.a
                  href="mailto:contact@deteroid.com"
                  className="hero-cta-secondary"
                  whileTap={{ scale: 0.97 }}
                  onMouseEnter={() => setBig(true)}
                  onMouseLeave={() => setBig(false)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 9,
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 14,
                    fontWeight: 600,
                    padding: '15px 32px',
                    borderRadius: 50,
                    background: 'transparent',
                    /* txt1 on border/text for a refined outlined feel */
                    color: LIGHT_BG_COLORS.txt1,
                    border: `1.5px solid ${LIGHT_BG_COLORS.border}`,
                    textDecoration: 'none',
                    transition: 'background 0.28s ease, color 0.28s ease, border-color 0.28s ease',
                    letterSpacing: '0.01em',
                  }}
                >
                  contact@deteroid.com
                </motion.a>
              </motion.div>

              {/* Trust strip */}
              <motion.div
                variants={item}
                style={{
                  display: 'flex', alignItems: 'center', gap: 20,
                  marginTop: 44,
                  paddingTop: 28,
                  borderTop: `1px solid ${LIGHT_BG_COLORS.border}`,
                  flexWrap: 'wrap',
                }}
              >
                {[
                  { dot: LIGHT_BG_COLORS.evergreenteal, label: 'OWASP Compliant' },
                  { dot: LIGHT_BG_COLORS.araticcyan,    label: 'AI-Native Stack' },
                  { dot: LIGHT_BG_COLORS.solargold,     label: 'Fixed Pricing' },
                ].map(({ dot, label }) => (
                  <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                    <span style={{
                      width: 7, height: 7, borderRadius: '50%',
                      background: dot, flexShrink: 0,
                      boxShadow: `0 0 0 2px ${dot}33`,
                    }} />
                    <span style={{
                      fontSize: 12, fontWeight: 600,
                      color: LIGHT_BG_COLORS.txt3,
                      letterSpacing: '0.02em',
                    }}>
                      {label}
                    </span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* ─── RIGHT: Stat cards ─── */}
            <div
              className="stat-mosaic"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 14,
              }}
            >
              {HERO_STATS.map((s) => (
                <StatCard
                  key={s.label}
                  num={s.num}
                  suffix={s.suffix}
                  label={s.label}
                  accentColor={s.accentColor}
                  glowColor={s.glowColor}
                  delay={s.delay}
                />
              ))}

              {/* Full-width bottom card — mini CTA */}
              {/* <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.52, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  gridColumn: '1 / -1',
                  background: LIGHT_BG_COLORS.bgd,
                  borderRadius: 20,
                  padding: '22px 26px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 16,
                  boxShadow: `0 10px 36px rgba(1,38,53,0.18)`,
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                whileHover={{
                  y: -4,
                  boxShadow: '0 22px 54px rgba(1,38,53,0.26)',
                }}
              >
                {/* Subtle cyan glow inside dark card 
                {/* <div style={{
                  position: 'absolute', width: 220, height: 220,
                  background: 'rgba(33,158,188,0.12)',
                  borderRadius: '50%', right: -80, top: -80,
                  filter: 'blur(40px)', pointerEvents: 'none',
                }} />
                {/* <div style={{ zIndex: 1 }}>
                  <div style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 15, fontWeight: 800,
                    color: LIGHT_BG_COLORS.light,
                    marginBottom: 4,
                    letterSpacing: '-0.02em',
                  }}>
                    One team. Full stack.
                  </div>
                  <div style={{
                    fontSize: 12, color: 'rgba(183,215,226,0.6)',
                    fontWeight: 500,
                  }}>
                    Design · Dev · Security · AI
                  </div>
                </div> 
                <div style={{
                  width: 38, height: 38, borderRadius: '50%',
                  background: LIGHT_BG_COLORS.araticcyan,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, zIndex: 1,
                  boxShadow: `0 4px 16px rgba(33,158,188,0.4)`,
                }}>
                  <svg width={14} height={14} fill="none" stroke="#fff"
                    strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"
                    viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div> 
              </motion.div> */}
            </div> 

          </div>
        </div>
      </section>
    </>
  )
}