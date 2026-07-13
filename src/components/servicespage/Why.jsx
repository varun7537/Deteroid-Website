"use client";
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { LIGHT_BG_COLORS } from '../../styles/tokens'

const stats = [
  { val: 47,  suffix: '+', label: 'Projects Delivered', color: LIGHT_BG_COLORS.araticcyan,    glowBg: 'rgba(33,158,188,0.18)'  },
  { val: 48,  suffix: 'h', label: 'Avg. Turnaround',    color: LIGHT_BG_COLORS.evergreenteal,  glowBg: 'rgba(64,138,113,0.18)'  },
  { val: 0,   suffix: '',  label: 'Security Breaches',  color: LIGHT_BG_COLORS.solargold,      glowBg: 'rgba(255,183,3,0.18)'   },
  { val: 100, suffix: '%', label: 'Fixed Pricing',      color: LIGHT_BG_COLORS.light,          glowBg: 'rgba(255,255,255,0.08)' },
]

const accordionItems = [
  {
    num: '01',
    title: 'End-to-End in one contract',
    body: "Design, development, and security under one roof. When something breaks, there's one team responsible — not three vendors pointing fingers at each other.",
  },
  {
    num: '02',
    title: 'AI woven into the stack, not on top',
    body: 'AI runs through our code review, testing pipelines, component generation, and personalization layer. Every project benefits — not as a bolt-on, but as infrastructure.',
  },
  {
    num: '03',
    title: 'OWASP compliance, every project, by default',
    body: 'Security runs in parallel with development. CSP headers, CSRF protection, XSS sanitization, and rate limiting ship with every project at no extra cost.',
  },
  {
    num: '04',
    title: 'Built to scale, not built to replace',
    body: "Every system is architected for growth — modular, documented, and deployable on infrastructure you own. Starting small doesn't mean starting fragile.",
  },
]

// ─── Animated Stat Card ────────────────────────────────────────────────────────
function CountStat({ stat }) {
  const ref = useRef(null)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      const obj = { val: 0 }
      gsap.to(obj, {
        val: stat.val, duration: 1.6, ease: 'power3.out',
        onUpdate: () => setCount(Math.floor(obj.val)),
        onComplete: () => setCount(stat.val),
      })
      obs.disconnect()
    }, { threshold: 0.5 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [stat.val])

  return (
    <div
      ref={ref}
      className="stat-card"
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: `1px solid rgba(255,255,255,0.09)`,
        borderRadius: 20,
        padding: '30px 24px',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.38s cubic-bezier(0.23,1,0.32,1)',
        cursor: 'default',
        backdropFilter: 'blur(8px)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-8px)'
        e.currentTarget.style.background = `rgba(255,255,255,0.07)`
        e.currentTarget.style.borderColor = stat.color
        e.currentTarget.style.boxShadow = `0 24px 56px rgba(0,0,0,0.35), 0 0 0 1px ${stat.color}22`
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.09)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Ambient glow blob */}
      <div style={{
        position: 'absolute', width: 120, height: 120,
        background: stat.glowBg,
        borderRadius: '50%', top: -60, right: -50,
        filter: 'blur(28px)',
        pointerEvents: 'none',
      }} />

      {/* Accent dot */}
      <div style={{
        width: 9, height: 9, borderRadius: '50%',
        background: stat.color, marginBottom: 18,
        boxShadow: `0 0 0 4px ${stat.glowBg}`,
      }} />

      {/* Value */}
      <div style={{
        fontFamily: "'Outfit', sans-serif",
        fontSize: 46, fontWeight: 800, lineHeight: 1,
        marginBottom: 10, color: stat.color,
        letterSpacing: '-0.045em',
      }}>
        {count}
        <span style={{ fontSize: '0.46em', opacity: 0.85 }}>{stat.suffix}</span>
      </div>

      {/* Label */}
      <div style={{
        fontSize: 13, color: 'rgba(183,215,226,0.7)',
        fontWeight: 600, lineHeight: 1.5, letterSpacing: '0.01em',
      }}>
        {stat.label}
      </div>
    </div>
  )
}

// ─── Accordion Item ────────────────────────────────────────────────────────────
function AccordionItem({ item, isOpen, onToggle }) {
  const bodyRef = useRef(null)

  useEffect(() => {
    if (!bodyRef.current) return
    gsap.to(bodyRef.current, {
      maxHeight: isOpen ? 220 : 0,
      duration: 0.48, ease: 'power3.inOut',
    })
  }, [isOpen])

  return (
    <div style={{
      background: isOpen
        ? 'rgba(33,158,188,0.07)'
        : 'rgba(255,255,255,0.03)',
      border: `1px solid ${isOpen ? 'rgba(33,158,188,0.4)' : 'rgba(255,255,255,0.08)'}`,
      borderRadius: 20,
      padding: '0 26px',
      transition: 'all 0.38s cubic-bezier(0.23,1,0.32,1)',
      marginBottom: 14,
      overflow: 'hidden',
      backdropFilter: 'blur(6px)',
      boxShadow: isOpen
        ? '0 16px 48px rgba(0,0,0,0.28), 0 0 0 1px rgba(33,158,188,0.12)'
        : '0 4px 16px rgba(0,0,0,0.12)',
    }}>
      <div
        onClick={onToggle}
        style={{
          display: 'flex', alignItems: 'flex-start', gap: 18,
          padding: '24px 0', cursor: 'pointer',
        }}
      >
        {/* Number */}
        <span style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: 10, fontWeight: 800,
          color: LIGHT_BG_COLORS.araticcyan,
          width: 28, flexShrink: 0,
          marginTop: 5, letterSpacing: '0.14em',
          opacity: isOpen ? 1 : 0.65,
          transition: 'opacity 0.3s ease',
        }}>
          {item.num}
        </span>

        {/* Title */}
        <div style={{ flex: 1 }}>
          <h3 style={{
            fontFamily: "'Outfit', sans-serif",
            fontSize: 18, fontWeight: 700,
            color: isOpen ? LIGHT_BG_COLORS.araticcyan : 'rgba(228,241,248,0.92)',
            lineHeight: 1.4, letterSpacing: '-0.025em',
            transition: 'color 0.3s ease',
            margin: 0,
          }}>
            {item.title}
          </h3>
        </div>

        {/* Toggle button */}
        <div style={{
          width: 34, height: 34, borderRadius: '50%',
          background: isOpen ? LIGHT_BG_COLORS.araticcyan : 'rgba(255,255,255,0.06)',
          border: `1px solid ${isOpen ? LIGHT_BG_COLORS.araticcyan : 'rgba(255,255,255,0.15)'}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0, transition: 'all 0.32s ease',
        }}>
          <svg
            width="11" height="11" fill="none"
            stroke={isOpen ? '#012635' : 'rgba(183,215,226,0.8)'}
            strokeWidth="2.5" viewBox="0 0 24 24"
            style={{
              transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
              transition: 'transform 0.38s ease',
            }}
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </div>
      </div>

      {/* Body */}
      <div ref={bodyRef} style={{ maxHeight: 0, overflow: 'hidden' }}>
        <p style={{
          padding: '0 0 24px 46px',
          fontSize: 14.5, lineHeight: 1.85,
          color: 'rgba(183,215,226,0.65)',
          margin: 0,
        }}>
          {item.body}
        </p>
      </div>
    </div>
  )
}

// ─── Why Section ───────────────────────────────────────────────────────────────
export default function Why() {
  const [openIndex, setOpenIndex] = useState(0)
  const toggle = (i) => setOpenIndex((prev) => (prev === i ? -1 : i))

  return (
    <>
      <style>{`
        /* ── Grid layouts ── */
        #why .why-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 88px;
          align-items: center;
        }
        #why .why-stats-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
          width: 100%;
        }

        /* ── Noise texture overlay ── */
        #why::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
          opacity: 0.022;
          pointer-events: none;
          z-index: 1;
        }

        /* ── Decorative horizontal rule ── */
        #why .why-divider {
          width: 48px; height: 3px;
          background: linear-gradient(90deg, ${LIGHT_BG_COLORS.araticcyan}, ${LIGHT_BG_COLORS.evergreenteal});
          border-radius: 99px;
          margin-bottom: 22px;
        }

        /* ── Responsive breakpoints ── */
        @media (max-width: 1100px) {
          #why .why-grid {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
          }
        }
        @media (max-width: 768px) {
          #why {
            padding: 96px 0 !important;
          }
          #why .why-stats-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 14px !important;
          }
          #why .why-eyebrow { font-size: 10px !important; }
          #why .why-heading { font-size: clamp(32px, 7vw, 48px) !important; }
          #why .why-desc { font-size: 15px !important; }
        }
        @media (max-width: 520px) {
          #why .why-stats-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          #why .container {
            padding: 0 20px !important;
          }
          #why .stat-card {
            padding: 22px 18px !important;
          }
        }
        @media (max-width: 380px) {
          #why .why-stats-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      <section
        id="why"
        style={{
          padding: '140px 0',
          /* ── COMPLETELY DIFFERENT BACKGROUND — deep ocean dark ── */
          background: `
            radial-gradient(ellipse 80% 60% at 10% 20%, rgba(33,158,188,0.13) 0%, transparent 55%),
            radial-gradient(ellipse 60% 50% at 90% 80%, rgba(64,138,113,0.11) 0%, transparent 50%),
            radial-gradient(ellipse 50% 70% at 50% 50%, rgba(1,38,53,0.6) 0%, transparent 100%),
            linear-gradient(160deg, #012635 0%, #021f30 40%, #011820 70%, #010e18 100%)
          `,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative grid lines — subtle depth */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `
            linear-gradient(rgba(33,158,188,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(33,158,188,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '72px 72px',
          pointerEvents: 'none', zIndex: 0,
        }} />

        {/* Large arc — top right decorative */}
        <div style={{
          position: 'absolute',
          width: 680, height: 680,
          border: '1px solid rgba(33,158,188,0.07)',
          borderRadius: '50%',
          top: -320, right: -240,
          pointerEvents: 'none', zIndex: 0,
        }} />
        <div style={{
          position: 'absolute',
          width: 480, height: 480,
          border: '1px solid rgba(33,158,188,0.05)',
          borderRadius: '50%',
          top: -220, right: -140,
          pointerEvents: 'none', zIndex: 0,
        }} />

        {/* Bottom-left arc */}
        <div style={{
          position: 'absolute',
          width: 520, height: 520,
          border: '1px solid rgba(64,138,113,0.07)',
          borderRadius: '50%',
          bottom: -260, left: -200,
          pointerEvents: 'none', zIndex: 0,
        }} />

        {/* Radiant glow — cyan top-left */}
        <div style={{
          position: 'absolute', width: 500, height: 500, borderRadius: '50%',
          background: 'rgba(33,158,188,0.09)',
          top: -200, left: -160,
          filter: 'blur(80px)', pointerEvents: 'none', zIndex: 0,
        }} />

        {/* Radiant glow — teal bottom-right */}
        <div style={{
          position: 'absolute', width: 380, height: 380, borderRadius: '50%',
          background: 'rgba(64,138,113,0.08)',
          bottom: -140, right: -120,
          filter: 'blur(70px)', pointerEvents: 'none', zIndex: 0,
        }} />

        <div
          className="container"
          style={{
            maxWidth: 1320, margin: '0 auto',
            padding: '0 36px', position: 'relative', zIndex: 2,
          }}
        >
          <div className="why-grid">

            {/* ── LEFT — heading + stats ── */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

              {/* Eyebrow */}
              <span
                className="why-eyebrow"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: 11, fontWeight: 800,
                  letterSpacing: '0.2em', textTransform: 'uppercase',
                  color: LIGHT_BG_COLORS.araticcyan,
                  marginBottom: 16, display: 'block',
                }}
              >
                Why Choose Deteroid
              </span>

              {/* Gradient divider */}
              <div className="why-divider" />

              {/* Heading */}
              <h2
                className="why-heading"
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: 'clamp(36px, 4.4vw, 58px)',
                  fontWeight: 800, lineHeight: 0.97,
                  letterSpacing: '-0.05em',
                  color: LIGHT_BG_COLORS.light,
                  marginBottom: 22, marginTop: 0,
                }}
              >
                Not just a vendor.
                <br />
                <span style={{
                  background: `linear-gradient(110deg, ${LIGHT_BG_COLORS.evergreenteal}, ${LIGHT_BG_COLORS.araticcyan})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  An integrated partner.
                </span>
              </h2>

              {/* Description */}
              <p
                className="why-desc"
                style={{
                  fontSize: 15.5, lineHeight: 1.9,
                  color: 'rgba(183,215,226,0.62)',
                  maxWidth: 560, marginBottom: 44, marginTop: 0,
                }}
              >
                No handoff gaps, no vendor management, no fragmented accountability.
                One team owns the full stack — from first wireframe to post-launch monitoring.
              </p>

              {/* Stat cards grid */}
              <div className="why-stats-grid">
                {stats.map((s) => (
                  <CountStat key={s.label} stat={s} />
                ))}
              </div>
            </div>

            {/* ── RIGHT — accordion ── */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

              {/* Section label above accordion */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: 12,
                marginBottom: 28,
              }}>
                <div style={{
                  width: 28, height: 1,
                  background: `linear-gradient(90deg, ${LIGHT_BG_COLORS.araticcyan}, transparent)`,
                }} />
                <span style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: 10, fontWeight: 800,
                  letterSpacing: '0.18em', textTransform: 'uppercase',
                  color: 'rgba(183,215,226,0.4)',
                }}>
                  What sets us apart
                </span>
              </div>

              {accordionItems.map((item, i) => (
                <AccordionItem
                  key={i}
                  item={item}
                  isOpen={openIndex === i}
                  onToggle={() => toggle(i)}
                />
              ))}

              {/* Bottom tag */}
              <div style={{
                marginTop: 28, display: 'flex', alignItems: 'center', gap: 10,
              }}>
                <div style={{
                  width: 8, height: 8, borderRadius: '50%',
                  background: LIGHT_BG_COLORS.evergreenteal,
                  boxShadow: `0 0 0 3px rgba(64,138,113,0.2)`,
                }} />
                <span style={{
                  fontSize: 13,
                  color: 'rgba(183,215,226,0.4)',
                  fontWeight: 500,
                  letterSpacing: '0.01em',
                }}>
                  All services. One team. Zero gaps.
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}