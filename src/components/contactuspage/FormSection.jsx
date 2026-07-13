"use client";
// components/contact/FormSection.jsx
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import ContactForm from './ContactForm'
import { LIGHT_BG_COLORS } from '../../styles/tokens'

const FONT = {
  display: "'Outfit', sans-serif",
  body:    "'DM Sans', sans-serif",
}

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 28 },
  whileInView:{ opacity: 1, y: 0 },
  viewport:   { once: true, margin: '-100px' },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
})

const INFO_CARDS = [
  {
    label: 'Email',
    val:   'contact@deteroid.com',
    sub:   'We reply within 2 hours',
    color: LIGHT_BG_COLORS.araticcyan,
    href:  'mailto:contact@deteroid.com',
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 7l10 7 10-7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'Phone',
    val:   '+91 99999 99999',
    sub:   'Mon–Fri, 10am–7pm IST',
    color: LIGHT_BG_COLORS.evergreenteal,
    href:  'tel:+919999999999',
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M6.6 10.8a15.3 15.3 0 006.6 6.6l2.2-2.2a1 1 0 011-.24c1.23.4 2.56.6 3.56.56a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.56 3.57a1 1 0 01-.25 1L6.6 10.8z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'Location',
    val:   'Mumbai, India',
    sub:   'Remote-first team',
    color: LIGHT_BG_COLORS.emberorange,
    href:  null,
    icon: (
      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
  },
]

const PROCESS_STEPS = [
  { n: 1, t: 'We read your message and understand your requirements.' },
  { n: 2, t: 'We respond with a clear technical plan within hours.' },
  { n: 3, t: 'We schedule a quick call if needed.' },
  { n: 4, t: 'We start building your solution.' },
]

export default function FormSection({ setBig }) {
  const ref   = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=DM+Sans:wght@300;400;500;600&display=swap');

        .fs-section * { box-sizing: border-box; }

        .fs-section {
          padding: 130px 0;
          position: relative;
          background: ${LIGHT_BG_COLORS.bglt};
          border-top: 1px solid ${LIGHT_BG_COLORS.border};
          font-family: 'DM Sans', sans-serif;
        }

        .fs-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .fs-layout {
          display: grid;
          grid-template-columns: minmax(0, 55fr) minmax(0, 45fr);
          gap: clamp(32px, 5vw, 64px);
          align-items: start;
        }

        .fs-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 40px;
          margin-bottom: 72px;
          flex-wrap: wrap;
        }

        @media (max-width: 900px) {
          .fs-layout { grid-template-columns: 1fr; }
          .fs-sidebar { display: none; }
        }

        @media (max-width: 600px) {
          .fs-section { padding: 72px 0 80px; }
          .fs-inner { padding: 0 20px; }
          .fs-header { flex-direction: column; align-items: flex-start; gap: 20px; margin-bottom: 40px; }
        }

        @media (max-width: 480px) {
          .fs-inner { padding: 0 16px; }
          .fs-section { padding: 56px 0 64px; }
        }
      `}</style>

      <section id="form" className="fs-section" ref={ref}>
        <div className="fs-inner">

          {/* Section header */}
          <motion.div {...fadeUp(0)} className="fs-header">
            <div>
              <span style={{
                fontFamily: FONT.display, fontSize: 11, fontWeight: 700,
                letterSpacing: '0.22em', textTransform: 'uppercase',
                color: LIGHT_BG_COLORS.araticcyan, display: 'block', marginBottom: 16,
              }}>
                Send a Message
              </span>
              <h2 style={{
                fontFamily: FONT.display,
                fontSize: 'clamp(34px, 4.5vw, 58px)',
                fontWeight: 700, lineHeight: 1,
                letterSpacing: '-0.035em', color: LIGHT_BG_COLORS.dark, margin: 0,
              }}>
                Tell us what
                <br />you're building.
              </h2>
            </div>

            <p style={{
              fontSize: 15, color: LIGHT_BG_COLORS.txt3, maxWidth: 320,
              lineHeight: 1.75, fontFamily: FONT.body, margin: 0,
            }}>
              We respond to every message personally. No bots, no auto-replies — just real people who care.
            </p>
          </motion.div>

          {/* Main grid */}
          <div className="fs-layout">

            {/* LEFT — Form */}
            <motion.div {...fadeUp(0.1)}>
              <ContactForm setBig={setBig} />
            </motion.div>

            {/* RIGHT — Info cards + process */}
            <motion.div
              {...fadeUp(0.2)}
              className="fs-sidebar"
              style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
            >

              {/* Info cards */}
              {INFO_CARDS.map((card, i) => {
                const inner = (
                  <motion.div
                    whileHover={{
                      x: 5,
                      borderColor: card.color,
                      boxShadow: `0 8px 32px ${card.color}14`,
                    }}
                    transition={{ duration: 0.25 }}
                    style={{
                      background: LIGHT_BG_COLORS.bglt,
                      border: `1.5px solid ${LIGHT_BG_COLORS.border}`,
                      borderRadius: 16, padding: '18px 20px',
                      display: 'flex', gap: 14, alignItems: 'flex-start',
                      cursor: card.href ? 'pointer' : 'default',
                      textDecoration: 'none',
                    }}
                  >
                    {/* Icon */}
                    <div style={{
                      width: 42, height: 42, borderRadius: 12,
                      background: `${card.color}12`,
                      border: `1px solid ${card.color}22`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: card.color, flexShrink: 0,
                    }}>
                      {card.icon}
                    </div>

                    <div>
                      <span style={{
                        fontFamily: FONT.display, fontSize: 10, fontWeight: 700,
                        color: card.color, letterSpacing: '0.1em',
                        textTransform: 'uppercase', display: 'block', marginBottom: 2,
                      }}>
                        {card.label}
                      </span>
                      <div style={{
                        fontSize: 15, fontWeight: 600, color: LIGHT_BG_COLORS.dark,
                        fontFamily: FONT.display, marginBottom: 2,
                      }}>
                        {card.val}
                      </div>
                      <div style={{ fontSize: 12.5, color: LIGHT_BG_COLORS.txt3, fontFamily: FONT.body }}>
                        {card.sub}
                      </div>
                    </div>
                  </motion.div>
                )

                return card.href ? (
                  <a key={i} href={card.href} style={{ textDecoration: 'none', display: 'block' }}>
                    {inner}
                  </a>
                ) : (
                  <div key={i}>{inner}</div>
                )
              })}

              {/* What Happens Next */}
              <div style={{
                background: LIGHT_BG_COLORS.bg2,
                border: `1.5px solid ${LIGHT_BG_COLORS.border}`,
                borderRadius: 20, padding: '28px 28px 24px', marginTop: 4,
              }}>
                <span style={{
                  fontFamily: FONT.display, fontSize: 10, fontWeight: 700,
                  color: LIGHT_BG_COLORS.txt3, letterSpacing: '0.12em', textTransform: 'uppercase',
                  display: 'block', marginBottom: 20,
                }}>
                  What Happens Next
                </span>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                  {PROCESS_STEPS.map((step, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -16 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + i * 0.1, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                      style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}
                    >
                      {/* Step number badge — uses araticcyan as primary brand */}
                      <div style={{
                        width: 28, height: 28, borderRadius: '50%',
                        background: LIGHT_BG_COLORS.araticcyan,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: LIGHT_BG_COLORS.light, fontSize: 11, fontWeight: 800,
                        fontFamily: FONT.display, flexShrink: 0, marginTop: 1,
                      }}>
                        {step.n}
                      </div>
                      <p style={{
                        fontSize: 13.5, color: LIGHT_BG_COLORS.txt2, margin: 0,
                        lineHeight: 1.7, fontFamily: FONT.body, paddingTop: 4,
                      }}>
                        {step.t}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </section>
    </>
  )
}