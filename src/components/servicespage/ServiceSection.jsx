import { motion } from 'framer-motion'
import { LIGHT_BG_COLORS } from '../../styles/tokens'

// ─── Service Data ───────────────────────────────────────────────────────────────
const services = [
  {
    pillar:      'Pillar 01',
    label:       'design',
    title:       'Visual Craft & Design',
    count:       '3 services',
    accent:      LIGHT_BG_COLORS.araticcyan,
    badgeBg:     LIGHT_BG_COLORS.bg2,
    badgeBorder: 'rgba(33,158,188,0.22)',
    iconBg:      LIGHT_BG_COLORS.bg2,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke={LIGHT_BG_COLORS.araticcyan} width="22" height="22">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
    items: [
      {
        num:  '01',
        title:'UI/UX Design',
        desc: 'User-centered interface design grounded in behavior, hierarchy, and conversion psychology.',
        tag:  'Research → Wireframes → Figma',
      },
      {
        num:  '02',
        title:'Branding & Identity',
        desc: 'Complete brand systems — logo, type, color, voice — built to scale across every touchpoint.',
        tag:  'Logo · Typography · Guidelines',
      },
      {
        num:  '03',
        title:'Web Design',
        desc: 'High-fidelity website design with conversion-first layouts, responsive components, and handoff specs.',
        tag:  'Landing Pages · Web Apps',
      },
    ],
  },
  {
    pillar:      'Pillar 02',
    label:       'dev',
    title:       'Full-Stack Development',
    count:       '3 services',
    accent:      LIGHT_BG_COLORS.evergreenteal,
    badgeBg:     LIGHT_BG_COLORS.bg3,
    badgeBorder: 'rgba(64,138,113,0.22)',
    iconBg:      LIGHT_BG_COLORS.bg3,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke={LIGHT_BG_COLORS.evergreenteal} width="22" height="22">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    items: [
      {
        num:  '01',
        title:'Web Development',
        desc: 'Modern web applications built with performance-first architecture, clean code, and scalable infrastructure.',
        tag:  'React · Next.js · Node',
      },
      {
        num:  '02',
        title:'Mobile & Desktop Apps',
        desc: 'Cross-platform applications that feel native — built once, deployed everywhere with consistent UX.',
        tag:  'React Native · Electron',
      },
      {
        num:  '03',
        title:'AI & Automation',
        desc: 'Intelligent features woven into the stack — LLM-powered search, smart recommendations, and automation pipelines.',
        tag:  'OpenAI · Anthropic · Gemini',
      },
    ],
  },
  {
    pillar:      'Pillar 03',
    label:       'sec',
    title:       'Security & Defence Layer',
    count:       '3 services',
    accent:      LIGHT_BG_COLORS.emberorange,
    badgeBg:     '#FFF3E0',
    badgeBorder: 'rgba(251,133,0,0.22)',
    iconBg:      '#FFF3E0',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke={LIGHT_BG_COLORS.emberorange} width="22" height="22">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    items: [
      {
        num:  '01',
        title:'Professional Security Testing',
        desc: 'Full penetration testing, vulnerability reports, and automated scanning in CI/CD.',
        tag:  'OWASP · Pen Testing · CVE',
      },
      {
        num:  '02',
        title:'Web Security',
        desc: 'CSP headers, CSRF tokens, XSS sanitization, SQL injection hardening — shipped by default.',
        tag:  'OWASP Top 10 · CSP · CSRF',
      },
      {
        num:  '03',
        title:'AI Security',
        desc: 'Security review for AI-powered systems — prompt injection, model exfiltration, data exposure.',
        tag:  'Prompt Injection · LLM Security',
      },
    ],
  },
]

// ─── Pillar Summary Strip ───────────────────────────────────────────────────────
function PillarStrip() {
  const pillars = [
    { label: 'Design',      color: LIGHT_BG_COLORS.araticcyan   },
    { label: 'Development', color: LIGHT_BG_COLORS.evergreenteal },
    { label: 'Security',    color: LIGHT_BG_COLORS.emberorange   },
  ]
  return (
    <div style={{
      display:        'flex',
      alignItems:     'center',
      justifyContent: 'center',
      gap:            8,
      marginBottom:   52,
      flexWrap:       'wrap',
    }}>
      {pillars.map((p, i) => (
        <div key={p.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{
            display:       'flex',
            alignItems:    'center',
            gap:           7,
            padding:       '7px 18px',
            borderRadius:  999,
            border:        `1.5px solid ${LIGHT_BG_COLORS.border}`,
            background:    LIGHT_BG_COLORS.bglt,
            fontFamily:    "'Syne',sans-serif",
            fontSize:      11,
            fontWeight:    700,
            letterSpacing: '0.07em',
            textTransform: 'uppercase',
            color:         LIGHT_BG_COLORS.txt1,
          }}>
            <span style={{
              width: 6, height: 6, borderRadius: '50%',
              background: p.color, flexShrink: 0,
            }} />
            {p.label}
          </div>
          {i < pillars.length - 1 && (
            <span style={{ color: LIGHT_BG_COLORS.border, fontSize: 18, lineHeight: 1, userSelect: 'none' }}>·</span>
          )}
        </div>
      ))}
    </div>
  )
}

// ─── Service Block ──────────────────────────────────────────────────────────────
function ServiceBlock({ svc, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 44 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: '-60px' }}
      className="svc-card"
      style={{
        border:       `1.5px solid ${LIGHT_BG_COLORS.border}`,
        borderRadius: 22,
        overflow:     'hidden',
        background:   LIGHT_BG_COLORS.bglt,
        boxShadow:    '0 4px 24px rgba(2,48,71,0.05)',
        transition:   'box-shadow 0.35s ease, border-color 0.35s ease, transform 0.35s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = svc.accent
        e.currentTarget.style.boxShadow   = `0 20px 56px rgba(2,48,71,0.1)`
        e.currentTarget.style.transform   = 'translateY(-3px)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = LIGHT_BG_COLORS.border
        e.currentTarget.style.boxShadow   = '0 4px 24px rgba(2,48,71,0.05)'
        e.currentTarget.style.transform   = 'translateY(0)'
      }}
    >
      {/* ── Card Header — bg2 (cool-tinted stripe, distinct from white body) ── */}
      <div
        className="svc-header"
        style={{
          display:        'flex',
          justifyContent: 'space-between',
          alignItems:     'center',
          padding:        '24px 36px',
          borderBottom:   `1.5px solid ${LIGHT_BG_COLORS.border}`,
          background:     LIGHT_BG_COLORS.bg2,
          flexWrap:       'wrap',
          gap:            12,
        }}
      >
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          {/* Icon box */}
          <div style={{
            width:          48,
            height:         48,
            borderRadius:   14,
            flexShrink:     0,
            background:     svc.iconBg,
            border:         `1.5px solid ${svc.badgeBorder}`,
            display:        'flex',
            alignItems:     'center',
            justifyContent: 'center',
          }}>
            {svc.icon}
          </div>

          <div>
            {/* Pillar label — pillar's own accent color */}
            <div style={{
              fontSize:      11,
              fontWeight:    700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color:         svc.accent,
              marginBottom:  4,
              fontFamily:    "'Syne',sans-serif",
            }}>
              {svc.pillar}
            </div>
            {/* Title — deep dark for max contrast on bg2 */}
            <div style={{
              fontSize:   21,
              fontWeight: 700,
              color:      LIGHT_BG_COLORS.dark,
              fontFamily: "'Syne',sans-serif",
              lineHeight: 1.2,
            }}>
              {svc.title}
            </div>
          </div>
        </div>

        {/* Count + arrow */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
          <span style={{ fontSize: 13, color: LIGHT_BG_COLORS.txt3, fontFamily: "'Syne',sans-serif" }}>
            {svc.count}
          </span>
          <div
            style={{
              width:          36,
              height:         36,
              borderRadius:   '50%',
              border:         `1.5px solid ${LIGHT_BG_COLORS.border}`,
              background:     'transparent',
              display:        'flex',
              alignItems:     'center',
              justifyContent: 'center',
              transition:     'all 0.3s ease',
              cursor:         'pointer',
              color:          LIGHT_BG_COLORS.txt3,
              fontSize:       15,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background  = svc.accent
              e.currentTarget.style.borderColor = svc.accent
              e.currentTarget.style.color       = LIGHT_BG_COLORS.light
              e.currentTarget.style.transform   = 'scale(1.08)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background  = 'transparent'
              e.currentTarget.style.borderColor = LIGHT_BG_COLORS.border
              e.currentTarget.style.color       = LIGHT_BG_COLORS.txt3
              e.currentTarget.style.transform   = 'scale(1)'
            }}
          >
            ➜
          </div>
        </div>
      </div>

      {/* ── Card Body — 3 columns ── */}
      <div className="srv-body-grid">
        {svc.items.map((item, i) => (
          <div
            key={i}
            className="srv-col"
            style={{
              padding:     '24px 26px',
              borderRight: i !== svc.items.length - 1 ? `1.5px solid ${LIGHT_BG_COLORS.border}` : 'none',
              background:  LIGHT_BG_COLORS.bglt,
              transition:  'background 0.25s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = LIGHT_BG_COLORS.bg1 }}
            onMouseLeave={e => { e.currentTarget.style.background = LIGHT_BG_COLORS.bglt }}
          >
            {/* Number */}
            <div style={{
              fontSize:      10,
              color:         LIGHT_BG_COLORS.txt3,
              fontWeight:    700,
              marginBottom:  8,
              fontFamily:    "'Syne',sans-serif",
              letterSpacing: '0.08em',
            }}>
              {item.num}
            </div>

            {/* Title — txt1 */}
            <div style={{
              fontSize:     15,
              fontWeight:   700,
              color:        LIGHT_BG_COLORS.txt1,
              fontFamily:   "'Syne',sans-serif",
              marginBottom: 10,
              lineHeight:   1.3,
            }}>
              {item.title}
            </div>

            {/* Description — txt3 muted */}
            <p style={{
              fontSize:     13,
              color:        LIGHT_BG_COLORS.txt3,
              lineHeight:   1.8,
              marginBottom: 14,
              margin:       '0 0 14px',
            }}>
              {item.desc}
            </p>

            {/* Tag pill */}
            <div style={{
              fontSize:      10,
              fontWeight:    700,
              padding:       '4px 12px',
              borderRadius:  999,
              display:       'inline-block',
              background:    svc.badgeBg,
              color:         svc.accent,
              border:        `1px solid ${svc.badgeBorder}`,
              fontFamily:    "'Syne',sans-serif",
              letterSpacing: '0.04em',
              whiteSpace:    'nowrap',
            }}>
              {item.tag}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────
export default function ServiceSection() {
  return (
    <>
      <style>{`
        /* ─ Body grid ─ */
        .srv-body-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        }

        /* 2-col at medium */
        @media (max-width: 960px) {
          .srv-body-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .srv-col:nth-child(2) {
            border-right: none !important;
          }
          .srv-col:nth-child(1),
          .srv-col:nth-child(2) {
            border-bottom: 1.5px solid ${LIGHT_BG_COLORS.border} !important;
          }
          .srv-col:nth-child(3) {
            grid-column: 1 / -1;
            border-right: none !important;
          }
        }

        /* 1-col at small */
        @media (max-width: 600px) {
          .srv-body-grid {
            grid-template-columns: 1fr !important;
          }
          .srv-col {
            border-right: none !important;
            border-bottom: 1.5px solid ${LIGHT_BG_COLORS.border} !important;
            grid-column: auto !important;
          }
          .srv-col:last-child {
            border-bottom: none !important;
          }
          .svc-header {
            padding: 18px 20px !important;
          }
        }

        /* ─ Header row ─ */
        @media (max-width: 768px) {
          #services { padding: 80px 0 !important; }
          .srv-header-row {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 18px !important;
            margin-bottom: 40px !important;
          }
          .srv-desc {
            text-align: left !important;
            max-width: 100% !important;
          }
        }

        @media (max-width: 480px) {
          .srv-container { padding: 0 16px !important; }
          .svc-card { border-radius: 16px !important; }
        }
      `}</style>

      <section
        id="services"
        style={{
          padding:   '130px 0',
          background:`
            repeating-linear-gradient(
              135deg,
              ${LIGHT_BG_COLORS.bg2} 0px,
              ${LIGHT_BG_COLORS.bg2} 1px,
              transparent 1px,
              transparent 58px
            ),
            ${LIGHT_BG_COLORS.bg1}
          `,
          display:        'flex',
          justifyContent: 'center',
          position:       'relative',
          overflow:       'hidden',
        }}
      >
        {/* Ambient blob — Cyan top-left (Design pillar) */}
        <div style={{
          position:      'absolute',
          width:         520,
          height:        520,
          borderRadius:  '50%',
          background:    'rgba(33,158,188,0.07)',
          top:           -200,
          left:          -180,
          filter:        'blur(72px)',
          pointerEvents: 'none',
        }} />

        {/* Ambient blob — Teal bottom-right (Development pillar) */}
        <div style={{
          position:      'absolute',
          width:         400,
          height:        400,
          borderRadius:  '50%',
          background:    'rgba(64,138,113,0.06)',
          bottom:        -160,
          right:         -140,
          filter:        'blur(64px)',
          pointerEvents: 'none',
        }} />

        {/* Ambient blob — Orange center-right (Security pillar) */}
        <div style={{
          position:      'absolute',
          width:         280,
          height:        280,
          borderRadius:  '50%',
          background:    'rgba(251,133,0,0.04)',
          top:           '50%',
          right:         '6%',
          transform:     'translateY(-50%)',
          filter:        'blur(50px)',
          pointerEvents: 'none',
        }} />

        {/* ── Container ── */}
        <div
          className="srv-container"
          style={{
            width:     '100%',
            maxWidth:  1200,
            padding:   '0 28px',
            position:  'relative',
            zIndex:    2,
          }}
        >
          {/* ── Section heading ── */}
          <div
            className="srv-header-row"
            style={{
              display:        'flex',
              alignItems:     'flex-end',
              justifyContent: 'space-between',
              gap:            40,
              marginBottom:   60,
            }}
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <div>
              {/* Eyebrow — Aratic Cyan */}
              <span style={{
                fontFamily:    "'Syne',sans-serif",
                fontSize:      11,
                fontWeight:    700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color:         LIGHT_BG_COLORS.araticcyan,
                display:       'block',
                marginBottom:  16,
              }}>
                Our Services
              </span>

              {/* Heading: base dark + Evergreen Teal second line */}
              <h2 style={{
                fontFamily:    "'Syne',sans-serif",
                fontSize:      'clamp(30px,4vw,54px)',
                fontWeight:    800,
                lineHeight:    0.97,
                letterSpacing: '-0.035em',
                color:         LIGHT_BG_COLORS.dark,
                margin:        0,
              }}>
                Three pillars.
                <br />
                <span style={{ color: LIGHT_BG_COLORS.evergreenteal }}>One integrated practice.</span>
              </h2>

              {/* Solar Gold accent underline — warmth + authority */}
              <div style={{
                width:        64,
                height:       3,
                background:   LIGHT_BG_COLORS.solargold,
                borderRadius: 999,
                marginTop:    18,
              }} />
            </div>

            {/* Right descriptor — txt3 muted */}
            <p
              className="srv-desc"
              style={{
                fontSize:   15,
                color:      LIGHT_BG_COLORS.txt3,
                maxWidth:   300,
                lineHeight: 1.78,
                textAlign:  'right',
                margin:     0,
              }}
            >
              No handoff gaps. No vendor juggling.{' '}
              Design, development, and security move as one.
            </p>
          </div>

          {/* ── Pillar pills ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <PillarStrip />
          </motion.div>

          {/* ── Cards ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%' }}>
            {services.map((svc, i) => (
              <ServiceBlock key={i} svc={svc} index={i} />
            ))}
          </div>

          {/* ── Solar Gold divider line at bottom ── */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              marginTop:       64,
              height:          2,
              background:      `linear-gradient(to right, transparent, ${LIGHT_BG_COLORS.solargold}, transparent)`,
              borderRadius:    999,
              transformOrigin: 'center',
            }}
          />
        </div>
      </section>
    </>
  )
}