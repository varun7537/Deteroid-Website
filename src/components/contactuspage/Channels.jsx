// components/contact/Channels.jsx
import { motion } from 'framer-motion'
import { LIGHT_BG_COLORS } from '../../styles/tokens'

const CHANNELS = [
  {
    title:   'Email',
    desc:    'Drop us an email anytime — we personally read and reply to every message.',
    detail:  'contact@deteroid.com',
    color:   LIGHT_BG_COLORS.araticcyan,
    barBg:   `linear-gradient(90deg, ${LIGHT_BG_COLORS.araticcyan}, ${LIGHT_BG_COLORS.evergreenteal})`,
    iconBg:  LIGHT_BG_COLORS.bg2,
    href:    'mailto:contact@deteroid.com',
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 7l10 7 10-7" />
      </svg>
    ),
  },
  {
    title:   'LinkedIn',
    desc:    'Connect with us professionally. Follow our work and reach out directly.',
    detail:  'linkedin.com/company/deteroid',
    color:   LIGHT_BG_COLORS.evergreenteal,
    barBg:   `linear-gradient(90deg, ${LIGHT_BG_COLORS.evergreenteal}, ${LIGHT_BG_COLORS.araticcyan})`,
    iconBg:  LIGHT_BG_COLORS.bg3,
    href:    'https://linkedin.com/company/deteroid',
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <rect x="2" y="2" width="20" height="20" rx="4" />
        <path d="M7 10v7M7 7v.01M12 17v-4a2 2 0 014 0v4M12 10v7" />
      </svg>
    ),
  },
  {
    title:   'Phone',
    desc:    'Call us directly during business hours for urgent queries or quick chats.',
    detail:  '+91 99999 99999',
    color:   LIGHT_BG_COLORS.emberorange,
    barBg:   `linear-gradient(90deg, ${LIGHT_BG_COLORS.emberorange}, ${LIGHT_BG_COLORS.solargold})`,
    iconBg:  `${LIGHT_BG_COLORS.emberorange}10`,
    href:    'tel:+919999999999',
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M6.6 10.8a15.3 15.3 0 006.6 6.6l2.2-2.2a1 1 0 011-.24 11.4 11.4 0 003.56.56 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.56 3.57a1 1 0 01-.25 1L6.6 10.8z" />
      </svg>
    ),
  },
]

export default function Channels() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');

        .ch-section * { box-sizing: border-box; }

        .ch-section {
          padding: 130px 0;
          position: relative;
          background: ${LIGHT_BG_COLORS.bg2};
          border-top: 1px solid ${LIGHT_BG_COLORS.border};
          font-family: 'DM Sans', sans-serif;
        }

        .ch-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
          position: relative;
          z-index: 1;
        }

        .ch-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 16px;
        }

        .ch-card {
          background: ${LIGHT_BG_COLORS.bglt};
          border: 1.5px solid ${LIGHT_BG_COLORS.border};
          border-radius: 24px;
          padding: 40px 32px;
          position: relative;
          overflow: hidden;
          text-decoration: none;
          display: block;
          cursor: pointer;
          transition: box-shadow 0.3s ease, transform 0.3s ease;
        }

        .ch-card:hover {
          transform: translateY(-8px);
        }

        @media (max-width: 768px) {
          .ch-section { padding: 80px 0; }
          .ch-inner { padding: 0 20px; }
          .ch-grid { grid-template-columns: 1fr; gap: 12px; }
          .ch-card { padding: 32px 24px; }
        }

        @media (max-width: 480px) {
          .ch-section { padding: 60px 0; }
          .ch-inner { padding: 0 16px; }
        }
      `}</style>

      <section className="ch-section">
        {/* Background blobs — light palette */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage:
            `radial-gradient(circle at 20% 50%, ${LIGHT_BG_COLORS.araticcyan}0a 0%, transparent 60%),
             radial-gradient(circle at 80% 20%, ${LIGHT_BG_COLORS.evergreenteal}08 0%, transparent 60%)`,
        }} />

        <div className="ch-inner">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ marginBottom: 72, maxWidth: 600 }}
          >
            <span style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: LIGHT_BG_COLORS.araticcyan,
              display: 'block',
              marginBottom: 16,
            }}>
              How to Reach Us
            </span>

            <h2 style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 'clamp(34px, 4.5vw, 58px)',
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: '-0.035em',
              color: LIGHT_BG_COLORS.dark,
              margin: 0,
            }}>
              Pick your preferred
              <br />channel.
            </h2>
          </motion.div>

          {/* Cards */}
          <div className="ch-grid">
            {CHANNELS.map((ch, i) => (
              <motion.a
                key={i}
                href={ch.href}
                className="ch-card"
                target={ch.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.75, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{
                  boxShadow: `0 32px 64px ${LIGHT_BG_COLORS.bgd}18, 0 0 0 1.5px ${ch.color}33`,
                }}
              >
                {/* Top accent bar */}
                <div style={{
                  position: 'absolute',
                  top: 0, left: 0,
                  height: 4, width: '100%',
                  background: ch.barBg,
                  borderRadius: '24px 24px 0 0',
                }} />

                {/* Subtle corner glow */}
                <div style={{
                  position: 'absolute',
                  bottom: -60, right: -60,
                  width: 200, height: 200,
                  borderRadius: '50%',
                  background: `radial-gradient(circle, ${ch.color}0c, transparent 70%)`,
                  pointerEvents: 'none',
                }} />

                {/* Icon */}
                <div style={{
                  width: 52,
                  height: 52,
                  borderRadius: 16,
                  background: ch.iconBg,
                  border: `1px solid ${LIGHT_BG_COLORS.border}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 24,
                  color: ch.color,
                }}>
                  {ch.icon}
                </div>

                <h3 style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: 22,
                  fontWeight: 700,
                  color: LIGHT_BG_COLORS.dark,
                  marginBottom: 10,
                  letterSpacing: '-0.02em',
                }}>
                  {ch.title}
                </h3>

                <p style={{
                  fontSize: 14,
                  color: LIGHT_BG_COLORS.txt3,
                  lineHeight: 1.75,
                  marginBottom: 24,
                  fontFamily: "'DM Sans', sans-serif",
                }}>
                  {ch.desc}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: 13,
                    fontWeight: 700,
                    color: ch.color,
                  }}>
                    {ch.detail}
                  </span>
                  <svg width="13" height="13" fill="none" stroke={ch.color} strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.a>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}