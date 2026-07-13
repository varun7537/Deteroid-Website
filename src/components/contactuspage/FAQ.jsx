"use client";
// components/contact/FAQ.jsx
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LIGHT_BG_COLORS } from "../../styles/tokens";

const FAQ_DATA = [
  {
    q: 'How long does a project take?',
    a: 'Most projects take 2–6 weeks depending on complexity and requirements. We scope everything clearly upfront so there are no surprises.',
  },
  {
    q: 'Do you work with startups?',
    a: 'Yes, we work with startups, agencies, and enterprise teams globally. We adapt our process to fit your stage and budget.',
  },
  {
    q: 'What technologies do you use?',
    a: "We use React, Node.js, Next.js, and modern cloud infrastructure. We always recommend the best stack for your specific use case, not what's trendy.",
  },
  {
    q: 'Do you offer ongoing support?',
    a: 'Yes, we provide maintenance and long-term support packages. Most clients choose to stay on retainer after launch for updates and improvements.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)
  const toggle = (i) => setOpen((prev) => (prev === i ? null : i))

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=DM+Sans:wght@300;400;500;600&display=swap');

        .faq-section * { box-sizing: border-box; }

        .faq-section {
          padding: 130px 0;
          position: relative;
          background: ${LIGHT_BG_COLORS.bg3};
          border-top: 1px solid ${LIGHT_BG_COLORS.border};
          font-family: 'DM Sans', sans-serif;
        }

        .faq-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .faq-layout {
          display: grid;
          grid-template-columns: minmax(0, 360px) 1fr;
          gap: clamp(48px, 8vw, 100px);
          align-items: start;
        }

        .faq-left { position: sticky; top: 120px; }

        .faq-ask-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: 'Outfit', sans-serif;
          font-size: 13px;
          font-weight: 700;
          color: ${LIGHT_BG_COLORS.araticcyan};
          text-decoration: none;
          padding: 10px 20px;
          border: 1.5px solid ${LIGHT_BG_COLORS.araticcyan};
          border-radius: 50px;
          white-space: nowrap;
          transition: background 0.2s, color 0.2s;
        }

        .faq-ask-cta:hover {
          background: ${LIGHT_BG_COLORS.araticcyan};
          color: ${LIGHT_BG_COLORS.light};
        }

        @media (max-width: 900px) {
          .faq-layout {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .faq-left { position: static; }
        }

        @media (max-width: 600px) {
          .faq-section { padding: 72px 0 80px; }
          .faq-inner { padding: 0 20px; }
        }

        @media (max-width: 480px) {
          .faq-inner { padding: 0 16px; }
        }
      `}</style>

      <section className="faq-section">
        <div className="faq-inner">
          <div className="faq-layout">

            {/* LEFT — sticky heading */}
            <div className="faq-left">
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <span style={{
                  fontFamily: "'Outfit', sans-serif", fontSize: 11, fontWeight: 700,
                  letterSpacing: '0.22em', textTransform: 'uppercase',
                  color: LIGHT_BG_COLORS.araticcyan, display: 'block', marginBottom: 16,
                }}>
                  Common Questions
                </span>

                <h2 style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: 'clamp(34px, 4.5vw, 58px)',
                  fontWeight: 700, lineHeight: 1,
                  letterSpacing: '-0.035em',
                  color: LIGHT_BG_COLORS.dark, marginBottom: 20,
                }}>
                  Before you
                  <br />reach out.
                </h2>

                <p style={{
                  fontSize: 15, color: LIGHT_BG_COLORS.txt3, lineHeight: 1.75,
                  marginBottom: 40, fontFamily: "'DM Sans', sans-serif",
                }}>
                  Quick answers to the questions we hear most often.
                </p>

                {/* Pill tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {['2–6 Weeks', 'All Timezones', 'Startup-Friendly', 'No Lock-in'].map((tag, i) => (
                    <span key={i} style={{
                      fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 500,
                      color: LIGHT_BG_COLORS.txt2, border: `1px solid ${LIGHT_BG_COLORS.border}`,
                      borderRadius: 50, padding: '5px 12px', background: LIGHT_BG_COLORS.bglt,
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* RIGHT — FAQ list */}
            <div>
              {FAQ_DATA.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.09, duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    borderBottom: `1px solid ${LIGHT_BG_COLORS.border}`,
                    borderTop: i === 0 ? `1px solid ${LIGHT_BG_COLORS.border}` : 'none',
                  }}
                >
                  <button
                    onClick={() => toggle(i)}
                    style={{
                      display: 'flex', justifyContent: 'space-between',
                      alignItems: 'center', width: '100%',
                      padding: '24px 0', background: 'none', border: 'none',
                      cursor: 'pointer', textAlign: 'left', gap: 16,
                    }}
                  >
                    <span style={{
                      fontFamily: "'Outfit', sans-serif", fontSize: 16,
                      fontWeight: open === i ? 700 : 500,
                      color: open === i ? LIGHT_BG_COLORS.dark : LIGHT_BG_COLORS.txt2,
                      transition: 'color 0.2s ease',
                      lineHeight: 1.4,
                    }}>
                      {faq.q}
                    </span>

                    <motion.div
                      animate={{
                        rotate: open === i ? 45 : 0,
                        background: open === i ? LIGHT_BG_COLORS.araticcyan : 'rgba(0,0,0,0)',
                        borderColor: open === i ? LIGHT_BG_COLORS.araticcyan : LIGHT_BG_COLORS.border,
                      }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      style={{
                        flexShrink: 0, width: 28, height: 28, borderRadius: '50%',
                        border: `1.5px solid ${LIGHT_BG_COLORS.border}`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}
                    >
                      <svg width="12" height="12" fill="none"
                        stroke={open === i ? LIGHT_BG_COLORS.light : LIGHT_BG_COLORS.txt3}
                        strokeWidth="2.5" viewBox="0 0 24 24">
                        <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                      </svg>
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {open === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        style={{ overflow: 'hidden' }}
                      >
                        <p style={{
                          paddingBottom: 24, fontSize: 15,
                          color: LIGHT_BG_COLORS.txt3, lineHeight: 1.8,
                          fontFamily: "'DM Sans', sans-serif",
                        }}>
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}

              {/* Still have questions? */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                style={{
                  marginTop: 40, padding: '24px 28px',
                  background: LIGHT_BG_COLORS.bglt, border: `1.5px solid ${LIGHT_BG_COLORS.border}`,
                  borderRadius: 18,
                  display: 'flex', alignItems: 'center',
                  justifyContent: 'space-between', gap: 16, flexWrap: 'wrap',
                }}
              >
                <div>
                  <p style={{
                    fontFamily: "'Outfit', sans-serif", fontSize: 15, fontWeight: 700,
                    color: LIGHT_BG_COLORS.dark, marginBottom: 4,
                  }}>
                    Still have questions?
                  </p>
                  <p style={{ fontSize: 13.5, color: LIGHT_BG_COLORS.txt3, fontFamily: "'DM Sans', sans-serif" }}>
                    We're happy to answer anything personally.
                  </p>
                </div>
                <a href="mailto:contact@deteroid.com" className="faq-ask-cta">
                  Ask us directly
                  <svg width="12" height="12" fill="none" stroke="currentColor"
                    strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </motion.div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}