"use client";
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { LIGHT_BG_COLORS } from '../../styles/tokens'


// ─── Icons ────────────────────────────────────────────────────────────────────
const ArrowIcon = () => (
  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
)

// ─── Hero ─────────────────────────────────────────────────────────────────────
export default function Hero() {
  const ghostRef = useRef(null)

  useEffect(() => {
    const b1 = document.querySelector('.b1')
    const b2 = document.querySelector('.b2')

    const onScroll = () => {
      const y = window.scrollY
      if (b1) gsap.set(b1, { x: y * 0.012, y: y * -0.025 })
      if (b2) gsap.set(b2, { x: y * -0.01, y: y * 0.02 })
      if (ghostRef.current) gsap.set(ghostRef.current, { y: `${-55 + y * 0.07}%` })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const lineVariants = {
    hidden:  { y: '110%', opacity: 0 },
    visible: (i) => ({
      y: 0, opacity: 1,
      transition: { duration: 0.9, delay: 0.08 + i * 0.12, ease: [0.16, 1, 0.3, 1] },
    }),
  }

  const pills = [
    { label: 'Design',      color: LIGHT_BG_COLORS.araticcyan   },
    { label: 'Development', color: LIGHT_BG_COLORS.evergreenteal   },
    { label: 'Security',    color: LIGHT_BG_COLORS.emberorange },
  ]

  return (
    <>
      <style>{`
        /* ── Clip lines ── */
        .h1-clip { overflow: hidden; }
        .h1-line  { display: inline-block; }

        /* ── Gold underline bar (bottom line of heading) ── */
        .h-bar { position: relative; }
        .h-bar::after {
          content: '';
          position: absolute;
          left: 0; bottom: 10px;
          width: 100%; height: 13px;
          background: rgba(255, 183, 3, 0.22);
          z-index: -1;
          border-radius: 999px;
        }

        /* ── Parallax blobs ── */
        .blob {
          position: absolute;
          border-radius: 999px;
          filter: blur(88px);
          opacity: 0.45;
          pointer-events: none;
        }
        .b1 { width: 420px; height: 420px; background: rgba(33,158,188,0.14); top: -100px; left: -120px; }
        .b2 { width: 340px; height: 340px; background: rgba(64,138,113,0.12); bottom: -80px; right: -100px; }
        .b3 { width: 260px; height: 260px; background: rgba(255,183,3,0.09); top: 40%; left: 45%; transform: translate(-50%, -50%); }

        /* ── Geo shapes ── */
        .geo { position: absolute; border: 1px solid rgba(13,59,80,0.08); pointer-events: none; }
        .g1  { width: 120px; height: 120px; border-radius: 30px; top: 12%; right: 10%; transform: rotate(20deg); }
        .g2  { width: 80px;  height: 80px;  border-radius: 999px; bottom: 15%; left: 8%; }
        .g3  { width: 60px;  height: 60px;  transform: rotate(45deg); top: 60%; right: 18%; }

        /* ── Pipeline connector ── */
        .p-conn {
          width: 2px; height: 16px;
          background: linear-gradient(to bottom, ${LIGHT_BG_COLORS.border}, transparent);
          margin: 0 auto 5px;
        }

        /* ── Floating badge pulse ── */
        @keyframes pulse-dot {
          0%,100% { transform: scale(1); opacity: 1; }
          50%      { transform: scale(1.45); opacity: 0.55; }
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 1100px) {
          .hero-inner { grid-template-columns: 1fr !important; gap: 52px !important; }
          .pipeline-wrap { max-width: 540px !important; }
        }
        @media (max-width: 768px) {
          #hero { padding: 100px 20px 60px !important; }
          h1    { font-size: clamp(40px, 9vw, 64px) !important; }
          .hero-btns { flex-direction: column !important; }
          .hero-btns a { justify-content: center; }
        }
        @media (max-width: 560px) {
          .pipeline-lanes { grid-template-columns: 1fr !important; }
          .lane-col { border-right: none !important; border-bottom: 1.5px solid ${LIGHT_BG_COLORS.border} !important; }
          .lane-col:last-child { border-bottom: none !important; }
          .floating-badge { right: 4px !important; }
        }
      `}</style>

      {/* ── Section ── */}
      <section
        id="hero"
        style={{
          minHeight: '100vh',
          background: LIGHT_BG_COLORS.bg1,
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '120px 24px 80px',
        }}
      >
        {/* Grid background */}
        <div
          style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            backgroundImage: `linear-gradient(${LIGHT_BG_COLORS.border} 1px,transparent 1px),linear-gradient(90deg,${LIGHT_BG_COLORS.border} 1px,transparent 1px)`,
            backgroundSize: '76px 76px',
            opacity: 0.22,
          }}
        />

        {/* Ghost watermark */}
        <div
          ref={ghostRef}
          style={{
            position: 'absolute', inset: 0, display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            pointerEvents: 'none', userSelect: 'none', overflow: 'hidden',
          }}
        >
          <div style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 'clamp(160px,22vw,320px)',
            fontWeight: 800,
            color: `rgba(2,48,71,0.035)`,
            letterSpacing: '-0.06em',
            whiteSpace: 'nowrap',
            transform: 'translateY(-5%)',
          }}>
            SERVICES
          </div>
        </div>

        {/* Blobs */}
        <div className="blob b1" />
        <div className="blob b2" />
        <div className="blob b3" />

        {/* Geo shapes */}
        <div className="geo g1" />
        <div className="geo g2" />
        <div className="geo g3" />

        {/* Inner grid */}
        <div
          className="hero-inner"
          style={{
            width: '100%', maxWidth: 1320, position: 'relative', zIndex: 2,
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 60,
            alignItems: 'center',
          }}
        >
          {/* ── LEFT ── */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>

            {/* Label row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.05 }}
              style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}
            >
              <div style={{ width: 26, height: 2, background: LIGHT_BG_COLORS.araticcyan }} />
              <span style={{
                fontFamily: "'Outfit', sans-serif", fontSize: 11, fontWeight: 700,
                letterSpacing: '0.18em', textTransform: 'uppercase', color: LIGHT_BG_COLORS.araticcyan,
              }}>
                What We Do
              </span>
            </motion.div>

            {/* Heading */}
            <h1 style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 'clamp(52px,6.5vw,96px)',
              fontWeight: 800,
              lineHeight: 0.92,
              letterSpacing: '-0.05em',
              color: LIGHT_BG_COLORS.dark,
              marginBottom: 24,
              textAlign: 'left',
            }}>
              {/* Line 1 – neutral dark */}
              <div className="h1-clip">
                <motion.span className="h1-line" custom={0} variants={lineVariants} initial="hidden" animate="visible">
                  The Services
                </motion.span>
              </div>

              {/* Line 2 – Aratic araticcyan accent */}
              <div className="h1-clip">
                <motion.span
                  className="h1-line"
                  custom={1}
                  variants={lineVariants}
                  initial="hidden"
                  animate="visible"
                  style={{ color: LIGHT_BG_COLORS.araticcyan }}
                >
                  &amp; Solutions
                </motion.span>
              </div>

              {/* Line 3 – Evergreen evergreenteal + Solar Gold underbar */}
              <div className="h1-clip">
                <motion.span
                  className="h1-line h-bar"
                  custom={2}
                  variants={lineVariants}
                  initial="hidden"
                  animate="visible"
                  style={{ color: LIGHT_BG_COLORS.evergreenteal }}
                >
                  We Provide
                </motion.span>
              </div>
            </h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5 }}
              style={{
                fontSize: 17, lineHeight: 1.85, color: LIGHT_BG_COLORS.txt3,
                maxWidth: 510, marginBottom: 30,
              }}
            >
              From design to development with AI integration,
              plus comprehensive security testing —{' '}
              <strong style={{ color: LIGHT_BG_COLORS.dark, fontWeight: 700 }}>end-to-end solutions</strong>{' '}
              built to convert and built to hold.
            </motion.p>

            {/* Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.6 }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 34 }}
            >
              {pills.map((p) => (
                <div
                  key={p.label}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 8,
                    padding: '8px 18px', borderRadius: 999,
                    border: `1.5px solid ${LIGHT_BG_COLORS.border}`,
                    background: LIGHT_BG_COLORS.bglt,
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 11, fontWeight: 700,
                    letterSpacing: '0.07em', textTransform: 'uppercase',
                    color: LIGHT_BG_COLORS.txt1,
                    transition: 'all 0.25s ease',
                    cursor: 'default',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.boxShadow = `0 8px 22px rgba(2,48,71,0.09)`
                    e.currentTarget.style.borderColor = p.color
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                    e.currentTarget.style.borderColor = LIGHT_BG_COLORS.border
                  }}
                >
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: p.color }} />
                  {p.label}
                </div>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div
              className="hero-btns"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.7 }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}
            >
              {/* Primary — Aratic araticcyan */}
              <motion.a
                href="#cta"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '17px 42px', borderRadius: 999,
                  background: LIGHT_BG_COLORS.araticcyan, color: LIGHT_BG_COLORS.light,
                  fontFamily: "'Outfit', sans-serif", fontSize: 14, fontWeight: 700,
                  textDecoration: 'none',
                  boxShadow: `0 10px 28px rgba(33,158,188,0.32)`,
                  transition: 'box-shadow 0.3s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = `0 18px 38px rgba(33,158,188,0.42)`}
                onMouseLeave={e => e.currentTarget.style.boxShadow = `0 10px 28px rgba(33,158,188,0.32)`}
              >
                Get Started <ArrowIcon />
              </motion.a>

              {/* Secondary — dark outline */}
              <motion.a
                href="#cta"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '17px 34px', borderRadius: 999,
                  border: `1.5px solid ${LIGHT_BG_COLORS.border}`,
                  color: LIGHT_BG_COLORS.dark, background: 'transparent',
                  fontFamily: "'Outfit', sans-serif", fontSize: 14, fontWeight: 600,
                  textDecoration: 'none', transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = LIGHT_BG_COLORS.bgd
                  e.currentTarget.style.color = LIGHT_BG_COLORS.light
                  e.currentTarget.style.borderColor = LIGHT_BG_COLORS.bgd
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.color = LIGHT_BG_COLORS.dark
                  e.currentTarget.style.borderColor = LIGHT_BG_COLORS.border
                }}
              >
                Schedule a Call
              </motion.a>
            </motion.div>
          </div>

          {/* ── RIGHT — Pipeline Card ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <PipelineCard />
          </motion.div>
        </div>
      </section>
    </>
  )
}

// ─── Pipeline Card ─────────────────────────────────────────────────────────────
function PipelineCard() {
  const lanes = [
    {
      color: LIGHT_BG_COLORS.araticcyan,
      label: 'Design',
      badgeBg: LIGHT_BG_COLORS.bg2,
      badgeBorder: 'rgba(33,158,188,0.25)',
      steps: [
        { title: 'UI/UX Research',  sub: 'Flows & wireframes',     badge: 'Day 1'  },
        { title: 'Visual System',   sub: 'Tokens & components',    badge: 'Day 2–5' },
        { title: 'Final Handoff',   sub: 'Figma + dev specs',      badge: '✓ Done', doneBg: LIGHT_BG_COLORS.bg3, doneBorder: 'rgba(64,138,113,0.25)', doneColor: LIGHT_BG_COLORS.evergreenteal },
      ],
    },
    {
      color: LIGHT_BG_COLORS.evergreenteal,
      label: 'Development',
      badgeBg: LIGHT_BG_COLORS.bg3,
      badgeBorder: 'rgba(64,138,113,0.25)',
      steps: [
        { title: 'Architecture',    sub: 'Stack locked',           badge: 'Day 1'   },
        { title: 'Build + AI Layer',sub: 'Components & automation',badge: 'Day 3–14' },
        { title: 'Staging Deploy',  sub: 'Live review env',        badge: 'Active ●', highlight: true },
      ],
    },
    {
      color: LIGHT_BG_COLORS.emberorange,
      label: 'Security',
      badgeBg: '#FFF3E0',
      badgeBorder: 'rgba(251,133,0,0.25)',
      steps: [
        { title: 'Threat Modelling',sub: 'OWASP baseline',         badge: 'Day 1'      },
        { title: 'Hardening',       sub: 'CSP, CSRF, limits',      badge: 'Continuous' },
        { title: 'Pre-Launch Audit',sub: 'Full pen test report',   badge: 'Day 15'     },
      ],
    },
  ]

  return (
    <div className="pipeline-wrap" style={{ width: '100%', maxWidth: 600, position: 'relative' }}>

      {/* Ambient glow behind card */}
      <div style={{
        position: 'absolute', inset: -24, zIndex: -1, pointerEvents: 'none',
        background: `radial-gradient(ellipse at 50% 50%, rgba(33,158,188,0.07), transparent 70%)`,
      }} />

      {/* Floating status badge */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="floating-badge"
        style={{
          position: 'absolute', top: -14, right: -8, zIndex: 10,
          display: 'flex', alignItems: 'center', gap: 8,
          padding: '8px 16px', borderRadius: 10,
          border: `1.5px solid ${LIGHT_BG_COLORS.border}`, background: LIGHT_BG_COLORS.bglt,
          boxShadow: '0 8px 24px rgba(2,48,71,0.1)',
          fontFamily: "'Outfit', sans-serif", fontSize: 11, fontWeight: 700, color: LIGHT_BG_COLORS.evergreenteal,
        }}
      >
        <span style={{
          width: 7, height: 7, borderRadius: '50%', background: LIGHT_BG_COLORS.evergreenteal,
          animation: 'pulse-dot 1.5s infinite',
        }} />
        All pipelines running
      </motion.div>

      {/* Card */}
      <div style={{
        background: LIGHT_BG_COLORS.bglt,
        border: `1.5px solid ${LIGHT_BG_COLORS.border}`,
        borderRadius: 20, overflow: 'hidden',
        boxShadow: '0 20px 60px rgba(2,48,71,0.1)',
      }}>
        {/* Topbar */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8,
          padding: '14px 18px',
          background: LIGHT_BG_COLORS.bg2,
          borderBottom: `1.5px solid ${LIGHT_BG_COLORS.border}`,
        }}>
          {['#FF5F57','#FEBC2E','#28C840'].map((c, i) => (
            <span key={i} style={{ width: 11, height: 11, borderRadius: '50%', background: c }} />
          ))}
          <span style={{ marginLeft: 'auto', fontSize: 11, color: LIGHT_BG_COLORS.txt3, fontFamily: 'monospace' }}>
            service-pipeline.ts
          </span>
        </div>

        {/* Lanes */}
        <div className="pipeline-lanes" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)' }}>
          {lanes.map((lane, li) => (
            <div
              key={lane.label}
              className="lane-col"
              style={{
                padding: '16px 14px',
                borderRight: li < lanes.length - 1 ? `1.5px solid ${LIGHT_BG_COLORS.border}` : 'none',
              }}
            >
              {/* Lane title */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: 6,
                fontFamily: "'Outfit', sans-serif", fontSize: 10, fontWeight: 700,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: lane.color, marginBottom: 12,
                paddingBottom: 10, borderBottom: `1.5px solid ${LIGHT_BG_COLORS.border}`,
              }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: lane.color }} />
                {lane.label}
              </div>

              {/* Steps */}
              {lane.steps.map((step, si) => {
                const isDone = !!step.doneBg
                const bg   = isDone ? step.doneBg   : lane.badgeBg
                const clr  = isDone ? step.doneColor : lane.color
                const bdr  = isDone ? step.doneBorder : lane.badgeBorder

                return (
                  <div key={si}>
                    <motion.div
                      whileHover={{ y: -3 }}
                      transition={{ duration: 0.2 }}
                      style={{
                        background: LIGHT_BG_COLORS.bg1,
                        border: `1.5px solid ${step.highlight ? 'rgba(64,138,113,0.38)' : LIGHT_BG_COLORS.border}`,
                        borderRadius: 8, padding: '10px 11px', marginBottom: 5,
                      }}
                    >
                      <div style={{
                        fontFamily: "'Outfit', sans-serif", fontSize: 12,
                        fontWeight: 700, color: LIGHT_BG_COLORS.dark, marginBottom: 2,
                      }}>
                        {step.title}
                      </div>
                      <div style={{ fontSize: 10.5, color: LIGHT_BG_COLORS.txt3 }}>{step.sub}</div>
                      <span style={{
                        display: 'inline-block', marginTop: 6, padding: '2px 9px',
                        borderRadius: 999, fontSize: 9.5, fontWeight: 700,
                        fontFamily: "'Outfit', sans-serif", letterSpacing: '0.04em',
                        background: bg, color: clr, border: `1px solid ${bdr}`,
                      }}>
                        {step.badge}
                      </span>
                    </motion.div>
                    {si < lane.steps.length - 1 && <div className="p-conn" />}
                  </div>
                )
              })}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', alignItems: 'center',
          justifyContent: 'space-between', gap: 10,
          padding: '10px 18px',
          background: LIGHT_BG_COLORS.bg2,
          borderTop: `1.5px solid ${LIGHT_BG_COLORS.border}`,
        }}>
          <span style={{ fontSize: 11, color: LIGHT_BG_COLORS.txt3 }}>3 pipelines · parallel execution</span>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 6,
            fontFamily: "'Outfit', sans-serif", fontSize: 11, fontWeight: 700,
            textTransform: 'uppercase', letterSpacing: '0.06em', color: LIGHT_BG_COLORS.evergreenteal,
          }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: LIGHT_BG_COLORS.evergreenteal }} />
            All systems running
          </div>
        </div>
      </div>
    </div>
  )
}