// components/contact/CTA.jsx
import { motion } from 'framer-motion'
import { LIGHT_BG_COLORS } from "../../styles/tokens";

export default function CTA({ setBig }) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@400;500;600&display=swap');

        .cta-contact * { box-sizing: border-box; }

        .cta-contact {
          padding: 130px 0;
          background: ${LIGHT_BG_COLORS.bg1};
          font-family: 'DM Sans', sans-serif;
        }

        .cta-contact-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .cta-contact-card {
          background: ${LIGHT_BG_COLORS.bgd};
          border-radius: 32px;
          padding: clamp(64px, 8vw, 96px) clamp(40px, 6vw, 80px);
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .cta-contact-btns {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .cta-contact-btn-primary {
          font-family: 'Syne', sans-serif;
          font-size: 15px;
          font-weight: 700;
          padding: 20px 52px;
          border-radius: 50px;
          background: ${LIGHT_BG_COLORS.araticcyan};
          color: ${LIGHT_BG_COLORS.light};
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 12px 40px ${LIGHT_BG_COLORS.araticcyan}44;
          transition: box-shadow 0.3s ease, transform 0.3s ease, background 0.3s ease;
          letter-spacing: '-0.01em';
          border: none;
        }

        .cta-contact-btn-primary:hover {
          background: ${LIGHT_BG_COLORS.evergreenteal};
          box-shadow: 0 24px 64px ${LIGHT_BG_COLORS.evergreenteal}44;
          transform: translateY(-4px);
        }

        .cta-contact-btn-secondary {
          font-family: 'Syne', sans-serif;
          font-size: 15px;
          font-weight: 600;
          padding: 20px 36px;
          border-radius: 50px;
          border: 1.5px solid ${LIGHT_BG_COLORS.border}44;
          color: ${LIGHT_BG_COLORS.txt3};
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .cta-contact-btn-secondary:hover {
          border-color: ${LIGHT_BG_COLORS.araticcyan};
          color: ${LIGHT_BG_COLORS.light};
        }

        @media (max-width: 768px) {
          .cta-contact { padding: 80px 0; }
          .cta-contact-inner { padding: 0 20px; }
          .cta-contact-card { border-radius: 24px; }
        }

        @media (max-width: 480px) {
          .cta-contact { padding: 60px 0; }
          .cta-contact-inner { padding: 0 16px; }
          .cta-contact-btn-primary { padding: 16px 32px; font-size: 14px; }
          .cta-contact-btn-secondary { padding: 16px 24px; font-size: 13px; }
        }
      `}</style>

      <section className="cta-contact">
        <div className="cta-contact-inner">
          <motion.div
            className="cta-contact-card"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >

            {/* Ambient glows using palette hues */}
            <div style={{
              position: 'absolute', top: -200, right: -200,
              width: 600, height: 600,
              background: `radial-gradient(circle, ${LIGHT_BG_COLORS.araticcyan}20, transparent 65%)`,
              pointerEvents: 'none',
            }} />
            <div style={{
              position: 'absolute', bottom: -200, left: -200,
              width: 520, height: 520,
              background: `radial-gradient(circle, ${LIGHT_BG_COLORS.evergreenteal}18, transparent 65%)`,
              pointerEvents: 'none',
            }} />

            {/* Subtle dot grid */}
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage:
                `linear-gradient(${LIGHT_BG_COLORS.araticcyan}06 1px, transparent 1px),
                 linear-gradient(90deg, ${LIGHT_BG_COLORS.araticcyan}06 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
              pointerEvents: 'none',
            }} />

            {/* Rotating dashed ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
              style={{
                position: 'absolute', top: '50%', left: '50%',
                width: 600, height: 600,
                border: `1px dashed ${LIGHT_BG_COLORS.araticcyan}18`,
                borderRadius: '50%',
                transform: 'translate(-50%, -50%)',
                pointerEvents: 'none',
              }}
            >
              <div style={{
                position: 'absolute', top: -5, left: '50%',
                width: 10, height: 10, borderRadius: '50%',
                background: LIGHT_BG_COLORS.araticcyan, opacity: 0.8,
                transform: 'translateX(-50%)',
              }} />
            </motion.div>

            {/* Counter-rotating inner ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              style={{
                position: 'absolute', top: '50%', left: '50%',
                width: 380, height: 380,
                border: `1px dashed ${LIGHT_BG_COLORS.evergreenteal}14`,
                borderRadius: '50%',
                transform: 'translate(-50%, -50%)',
                pointerEvents: 'none',
              }}
            >
              <div style={{
                position: 'absolute', bottom: -4, left: '50%',
                width: 8, height: 8, borderRadius: '50%',
                background: LIGHT_BG_COLORS.solargold, opacity: 0.7,
                transform: 'translateX(-50%)',
              }} />
            </motion.div>

            {/* Content */}
            <div style={{ position: 'relative', zIndex: 2 }}>
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6 }}
                style={{
                  fontFamily: "'Syne', sans-serif", fontSize: 11, fontWeight: 700,
                  letterSpacing: '0.22em', textTransform: 'uppercase',
                  color: LIGHT_BG_COLORS.araticcyan, display: 'block', marginBottom: 24,
                }}
              >
                Ready to start?
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: 'clamp(38px, 5.5vw, 72px)',
                  fontWeight: 800, color: LIGHT_BG_COLORS.bg1,
                  letterSpacing: '-0.04em', lineHeight: 0.95, marginBottom: 22,
                }}
              >
                Let's build something
                <br />
                <span style={{ color: LIGHT_BG_COLORS.solargold }}>that lasts.</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.7 }}
                style={{
                  fontSize: 17, color: LIGHT_BG_COLORS.txt3,
                  maxWidth: 440, margin: '0 auto 52px',
                  lineHeight: 1.75, fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Send us a message and we'll get back to you within 2 hours. No pitch decks, no pressure.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="cta-contact-btns"
              >
                <a
                  href="#form"
                  className="cta-contact-btn-primary"
                  onMouseEnter={() => setBig?.(true)}
                  onMouseLeave={() => setBig?.(false)}
                >
                  Send a Message
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>

                <a
                  href="mailto:contact@deteroid.com"
                  className="cta-contact-btn-secondary"
                  onMouseEnter={() => setBig?.(true)}
                  onMouseLeave={() => setBig?.(false)}
                >
                  contact@deteroid.com
                </a>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.55 }}
                style={{
                  fontFamily: "'Syne', sans-serif", fontSize: 11, fontWeight: 700,
                  color: `${LIGHT_BG_COLORS.txt3}88`, marginTop: 24,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                }}
              >
                Usually responds within 2 hours
              </motion.p>
            </div>

          </motion.div>
        </div>
      </section>
    </>
  )
}