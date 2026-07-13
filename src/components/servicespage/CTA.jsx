"use client";
import { motion } from 'framer-motion'
import { LIGHT_BG_COLORS } from '../../styles/tokens'

const ArrowIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
)

export default function CTA() {
  return (
    <>
      <style>{`
        #cta .cta-pad {
          transition: box-shadow 0.4s ease;
        }
        #cta .btn-main:hover {
          transform: translateY(-4px);
          box-shadow: 0 24px 56px rgba(33,158,188,0.42) !important;
        }
        #cta .btn-ghost:hover {
          border-color: rgba(2,48,71,0.55) !important;
          color: ${LIGHT_BG_COLORS.dark} !important;
          background: rgba(2,48,71,0.05) !important;
        }

        @media (max-width: 768px) {
          #cta .cta-pad { padding: 64px 28px !important; }
          #cta .cta-btns { flex-direction: column !important; align-items: center; }
        }
        @media (max-width: 480px) {
          #cta .cta-pad { padding: 48px 20px !important; border-radius: 20px !important; }
          #cta .cta-btns a { width: 100%; justify-content: center; }
        }
      `}</style>

      <section
        id="cta"
        style={{
          padding: '130px 20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          background: LIGHT_BG_COLORS.bg1,
        }}
      >
        <div style={{ width: '100%', maxWidth: 1320, margin: '0 auto', display: 'flex', justifyContent: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="cta-pad"
            style={{
              width: '100%',
              maxWidth: 1180,
              /* Deep ocean dark background — same brand dark used in bgd token */
              background: LIGHT_BG_COLORS.bgd,
              borderRadius: 32,
              padding: '100px 80px',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              border: `1px solid rgba(183,215,226,0.12)`,
              boxShadow: '0 40px 120px rgba(1,38,53,0.22), inset 0 1px 0 rgba(255,255,255,0.04)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Background grid — uses light border with low opacity on dark bg */}
            <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: `linear-gradient(rgba(183,215,226,.04) 1px,transparent 1px), linear-gradient(90deg,rgba(183,215,226,.04) 1px,transparent 1px)`,
              backgroundSize: '60px 60px',
              pointerEvents: 'none', opacity: 0.5,
            }} />

            {/* Glow orb top-right — Aratic araticcyan */}
            <motion.div
              animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute', top: -180, right: -180,
                width: 560, height: 560, borderRadius: '50%',
                background: `radial-gradient(circle,rgba(33,158,188,0.18),transparent 70%)`,
                pointerEvents: 'none',
              }}
            />

            {/* Glow orb bottom-left — Evergreen evergreenteal */}
            <motion.div
              animate={{ scale: [1, 1.12, 1], opacity: [0.35, 0.65, 0.35] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute', bottom: -180, left: -180,
                width: 500, height: 500, borderRadius: '50%',
                background: `radial-gradient(circle,rgba(64,138,113,0.16),transparent 70%)`,
                pointerEvents: 'none',
              }}
            />

            {/* Rotating dashed ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              style={{
                position: 'absolute', width: 720, height: 720, borderRadius: '50%',
                border: `1px dashed rgba(183,215,226,0.08)`,
                pointerEvents: 'none',
              }}
            />

            {/* Floating shape — Solar solargold square */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute', top: 80, left: 90,
                width: 16, height: 16, borderRadius: 4,
                background: LIGHT_BG_COLORS.solargold, opacity: 0.75,
              }}
            />

            {/* Floating shape — Aratic araticcyan circle */}
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute', bottom: 90, right: 100,
                width: 20, height: 20, borderRadius: '50%',
                background: LIGHT_BG_COLORS.araticcyan, opacity: 0.65,
              }}
            />

            {/* Content */}
            <div style={{ position: 'relative', zIndex: 2, maxWidth: 860, width: '100%', margin: '0 auto' }}>

              {/* Eyebrow label — Solar solargold */}
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: 11, fontWeight: 700,
                  letterSpacing: '0.18em', textTransform: 'uppercase',
                  color: LIGHT_BG_COLORS.solargold,
                  display: 'block', marginBottom: 24,
                }}
              >
                Let&apos;s build something
              </motion.span>

              {/* Heading — white on dark */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: 'clamp(38px,5.8vw,74px)',
                  fontWeight: 900,
                  color: LIGHT_BG_COLORS.light,
                  letterSpacing: '-0.045em',
                  lineHeight: 0.92,
                  marginBottom: 22,
                }}
              >
                Need to discuss
                <br />
                <span style={{ color: LIGHT_BG_COLORS.araticcyan }}>before starting?</span>
              </motion.h2>

              {/* Description — muted on dark */}
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.7 }}
                style={{
                  fontSize: 17,
                  color: 'rgba(183,215,226,0.65)',
                  maxWidth: 520, margin: '0 auto 54px',
                  lineHeight: 1.8,
                }}
              >
                Schedule a 1:1 meeting with our team. No pitch decks,
                no pressure. Just a direct conversation about your project.
              </motion.p>

              {/* Buttons */}
              <motion.div
                className="cta-btns"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.7 }}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  gap: 16, flexWrap: 'wrap', position: 'relative', zIndex: 2,
                }}
              >
                {/* Primary — Aratic araticcyan */}
                <motion.a
                  href="mailto:hello@deteroid.com"
                  className="btn-main"
                  whileTap={{ scale: 0.97 }}
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 16, fontWeight: 700,
                    padding: '20px 52px', borderRadius: 999,
                    background: LIGHT_BG_COLORS.araticcyan, color: LIGHT_BG_COLORS.light,
                    textDecoration: 'none',
                    display: 'inline-flex', alignItems: 'center', gap: 10,
                    boxShadow: `0 16px 50px rgba(33,158,188,0.35)`,
                    transition: 'all 0.3s ease',
                  }}
                >
                  Schedule a Meeting <ArrowIcon />
                </motion.a>

                {/* Ghost — bordered on dark */}
                <motion.a
                  href="mailto:hello@deteroid.com"
                  className="btn-ghost"
                  whileTap={{ scale: 0.97 }}
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 15, fontWeight: 600,
                    padding: '20px 38px', borderRadius: 999,
                    border: `1.5px solid rgba(183,215,226,0.28)`,
                    color: 'rgba(183,215,226,0.75)',
                    textDecoration: 'none',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  hello@deteroid.com
                </motion.a>
              </motion.div>

              {/* Footer note — Solar solargold tint */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.7 }}
                style={{
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: 11, fontWeight: 700,
                  color: 'rgba(255,183,3,0.45)',
                  marginTop: 24, letterSpacing: '0.1em', textTransform: 'uppercase',
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