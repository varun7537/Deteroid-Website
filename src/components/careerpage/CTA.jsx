import React from "react";
import { motion } from "framer-motion";
import { LIGHT_BG_COLORS } from "../../styles/tokens";

const FONT = "'Syne', 'DM Sans', sans-serif";

export function CTA() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@400;500;600&display=swap');

        #cta * { box-sizing: border-box; }

        #cta {
          padding: 130px 0;
          background: ${LIGHT_BG_COLORS.bg1};
          font-family: ${FONT};
        }

        .cta-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 56px;
        }

        .cta-card {
          background: ${LIGHT_BG_COLORS.bgd};
          border-radius: 28px;
          padding: 96px 80px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        /* Decorative corner accents on the card */
        .cta-card::before {
          content: '';
          position: absolute;
          top: -80px;
          right: -80px;
          width: 260px;
          height: 260px;
          border-radius: 50%;
          background: ${LIGHT_BG_COLORS.araticcyan}18;
          pointer-events: none;
        }

        .cta-card::after {
          content: '';
          position: absolute;
          bottom: -60px;
          left: -60px;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: ${LIGHT_BG_COLORS.evergreenteal}14;
          pointer-events: none;
        }

        .cta-buttons {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
          position: relative;
          z-index: 1;
        }

        .cta-btn-primary {
          font-family: ${FONT};
          font-size: 16px;
          font-weight: 700;
          padding: 20px 52px;
          border-radius: 50px;
          background: ${LIGHT_BG_COLORS.araticcyan};
          color: ${LIGHT_BG_COLORS.light};
          display: inline-flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 12px 40px ${LIGHT_BG_COLORS.araticcyan}42;
          transition: all .3s;
          text-decoration: none;
          border: none;
        }

        .cta-btn-primary:hover {
          background: ${LIGHT_BG_COLORS.emberorange};
          box-shadow: 0 20px 60px ${LIGHT_BG_COLORS.emberorange}44;
          transform: translateY(-3px) scale(1.02);
        }

        .cta-btn-secondary {
          font-family: ${FONT};
          font-size: 15px;
          font-weight: 600;
          padding: 20px 36px;
          border-radius: 50px;
          border: 1.5px solid ${LIGHT_BG_COLORS.border}55;
          color: ${LIGHT_BG_COLORS.txt3};
          transition: all .3s;
          text-decoration: none;
          background: transparent;
        }

        .cta-btn-secondary:hover {
          border-color: ${LIGHT_BG_COLORS.araticcyan};
          color: ${LIGHT_BG_COLORS.bg1};
        }

        @media (max-width: 768px) {
          .cta-inner { padding: 0 20px; }
          .cta-card { padding: 64px 28px; border-radius: 20px; }
          #cta { padding: 80px 0; }
        }

        @media (max-width: 480px) {
          .cta-card { padding: 48px 20px; }
          .cta-btn-primary { padding: 16px 32px; font-size: 14px; }
          .cta-btn-secondary { padding: 16px 24px; font-size: 13px; }
        }
      `}</style>

      <section id="cta">
        <div className="cta-inner">
          <motion.div
            data-aos="fade-up"
            className="cta-card"
          >
            {/* Eyebrow label */}
            <span
              style={{
                fontFamily: FONT,
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: ".18em",
                textTransform: "uppercase",
                color: LIGHT_BG_COLORS.araticcyan,
                display: "block",
                marginBottom: 24,
                position: "relative",
                zIndex: 1,
              }}
            >
              Let's Talk
            </span>

            {/* Heading */}
            <h2
              style={{
                fontFamily: FONT,
                fontSize: "clamp(36px,5.5vw,72px)",
                fontWeight: 800,
                color: LIGHT_BG_COLORS.bg1,
                letterSpacing: "-.04em",
                lineHeight: 0.92,
                marginBottom: 18,
                position: "relative",
                zIndex: 1,
              }}
            >
              Need to discuss
              <br />
              before applying?
            </h2>

            {/* Subtext */}
            <p
              style={{
                fontSize: 17,
                color: LIGHT_BG_COLORS.txt3,
                maxWidth: 420,
                margin: "0 auto 52px",
                lineHeight: 1.72,
                fontFamily: FONT,
                position: "relative",
                zIndex: 1,
              }}
            >
              Schedule a 1:1 with our team. Get your questions answered. No pitch, no pressure —
              just a real conversation.
            </p>

            {/* Buttons */}
            <div className="cta-buttons">
              <a
                href="mailto:hello@deteroid.com?subject=Careers%20Discussion"
                className="cta-btn-primary"
              >
                Schedule a 1:1 Meeting
                <svg
                  width={16}
                  height={16}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>

              <a
                href="mailto:hello@deteroid.com"
                className="cta-btn-secondary"
              >
                hello@deteroid.com
              </a>
            </div>

            {/* Footer note */}
            <p
              style={{
                fontFamily: FONT,
                fontSize: 11,
                fontWeight: 700,
                color: LIGHT_BG_COLORS.txt3,
                marginTop: 22,
                letterSpacing: ".1em",
                textTransform: "uppercase",
                position: "relative",
                zIndex: 1,
              }}
            >
              Usually responds within 2 hours
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default CTA;