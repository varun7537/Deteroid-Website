// components/careers/Culture.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AOS from "aos";
import "aos/dist/aos.css";
import { LIGHT_BG_COLORS } from "../../styles/tokens";
gsap.registerPlugin(ScrollTrigger);

const T = {
  FONT: "'Syne', 'DM Sans', sans-serif",
  BODY_FONT: "'DM Sans', sans-serif",
};

const ACCENT = {
  o: {
    cat: LIGHT_BG_COLORS.araticcyan,
    lt: `${LIGHT_BG_COLORS.araticcyan}12`,
    md: `${LIGHT_BG_COLORS.araticcyan}22`,
    bar: `linear-gradient(90deg,${LIGHT_BG_COLORS.araticcyan},${LIGHT_BG_COLORS.evergreenteal})`,
  },
  t: {
    cat: LIGHT_BG_COLORS.evergreenteal,
    lt: `${LIGHT_BG_COLORS.evergreenteal}12`,
    md: `${LIGHT_BG_COLORS.evergreenteal}22`,
    bar: `linear-gradient(90deg,${LIGHT_BG_COLORS.evergreenteal},${LIGHT_BG_COLORS.araticcyan})`,
  },
  v: {
    cat: LIGHT_BG_COLORS.emberorange,
    lt: `${LIGHT_BG_COLORS.emberorange}12`,
    md: `${LIGHT_BG_COLORS.emberorange}22`,
    bar: `linear-gradient(90deg,${LIGHT_BG_COLORS.emberorange},${LIGHT_BG_COLORS.solargold})`,
  },
  d: {
    cat: LIGHT_BG_COLORS.solargold,
    lt: `${LIGHT_BG_COLORS.solargold}14`,
    md: `${LIGHT_BG_COLORS.solargold}26`,
    bar: `linear-gradient(90deg,${LIGHT_BG_COLORS.solargold},${LIGHT_BG_COLORS.emberorange})`,
  },
};

const STATS = [
  { val: "3+",    label: "Open Positions Right Now" },
  { val: "100%",  label: "Remote · Work Anywhere" },
  { val: "Day 1", label: "Real Projects, Not Drills" },
  { val: "0",     label: "Corporate Bureaucracy" },
];

const CARDS = [
  {
    id: "real-projects",
    variant: "o",
    icon: (
      <svg viewBox="0 0 24 24" width={20} height={20} fill="none" stroke={LIGHT_BG_COLORS.araticcyan} strokeWidth={2}>
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Work on Real-World Projects",
    body: "No dummy projects. No coursework. Every task you do directly impacts a real client or our platform. You'll see your work in production from day one.",
  },
  {
    id: "performance",
    variant: "t",
    icon: (
      <svg viewBox="0 0 24 24" width={20} height={20} fill="none" stroke={LIGHT_BG_COLORS.evergreenteal} strokeWidth={2}>
        <path d="M2 20h.01M7 20v-4M12 20v-8M17 20V8M22 4v16" />
      </svg>
    ),
    title: "Performance-Driven Growth",
    body: "Earn based on results, not hours. More clients closed = more take-home. Your effort directly translates to earnings. No hidden criteria, no politics.",
  },
  {
    id: "remote",
    variant: "v",
    icon: (
      <svg viewBox="0 0 24 24" width={20} height={20} fill="none" stroke={LIGHT_BG_COLORS.emberorange} strokeWidth={2}>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Remote-First Flexibility",
    body: "Work from anywhere. No commute, no office politics. Just you, your tools, and real work that matters. Flexible hours — deliver results, not seat time.",
  },
  {
    id: "learning",
    variant: "d",
    icon: (
      <svg viewBox="0 0 24 24" width={20} height={20} fill="none" stroke={LIGHT_BG_COLORS.solargold} strokeWidth={2}>
        <path d="M13 2L3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: "Fast Learning Environment",
    body: "Learn from founders and experienced developers. Real mentorship, real feedback, real growth — not slide decks. You'll get sharper every single day.",
  },
];

function StatBox({ stat, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: 0.2 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      style={{
        background: LIGHT_BG_COLORS.bglt,
        border: `1px solid ${LIGHT_BG_COLORS.border}`,
        borderRadius: 10,
        padding: "18px 20px 16px",
        position: "relative",
      }}
    >
      <div
        style={{
          fontFamily: T.FONT,
          fontSize: 26,
          fontWeight: 800,
          color: LIGHT_BG_COLORS.araticcyan,
          letterSpacing: "-0.04em",
          lineHeight: 1,
          marginBottom: 6,
        }}
      >
        {stat.val}
      </div>
      <div
        style={{
          fontFamily: T.BODY_FONT,
          fontSize: 11,
          color: LIGHT_BG_COLORS.txt3,
          lineHeight: 1.4,
        }}
      >
        {stat.label}
      </div>
    </motion.div>
  );
}

export function Culture() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: "ease-out-quart" });

    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
          },
        }
      );
    }
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');

        .culture-section *,
        .culture-section *::before,
        .culture-section *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .culture-section {
          background: ${LIGHT_BG_COLORS.bg2};
          padding: 100px 0 120px;
          position: relative;
          font-family: 'DM Sans', sans-serif;
        }

        .culture-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 48px;
        }

        .culture-top-rule {
          position: absolute;
          top: 0;
          left: 48px;
          right: 48px;
          height: 1px;
          background: ${LIGHT_BG_COLORS.border};
        }

        .culture-layout {
          display: grid;
          grid-template-columns: 340px 1fr;
          gap: 80px;
          align-items: start;
        }

        .culture-left {
          position: sticky;
          top: 100px;
        }

        .culture-eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: ${LIGHT_BG_COLORS.araticcyan};
          margin-bottom: 20px;
        }

        .culture-eyebrow::before {
          content: '';
          display: block;
          width: 28px;
          height: 2px;
          background: ${LIGHT_BG_COLORS.araticcyan};
          flex-shrink: 0;
        }

        .culture-heading {
          font-family: 'Syne', sans-serif;
          font-size: clamp(36px, 4vw, 54px);
          font-weight: 800;
          line-height: 0.96;
          letter-spacing: -0.04em;
          color: ${LIGHT_BG_COLORS.dark};
          margin-bottom: 22px;
        }

        .culture-subtext {
          font-size: 14.5px;
          line-height: 1.8;
          color: ${LIGHT_BG_COLORS.txt3};
          margin-bottom: 36px;
          font-weight: 400;
        }

        .culture-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Syne', sans-serif;
          font-size: 13px;
          font-weight: 700;
          padding: 13px 26px;
          border-radius: 50px;
          background: ${LIGHT_BG_COLORS.bgd};
          color: ${LIGHT_BG_COLORS.bg1};
          text-decoration: none;
          letter-spacing: 0.01em;
          transition: background 0.25s, transform 0.2s;
          border: 1.5px solid ${LIGHT_BG_COLORS.bgd};
          margin-bottom: 48px;
        }

        .culture-cta:hover {
          background: ${LIGHT_BG_COLORS.araticcyan};
          border-color: ${LIGHT_BG_COLORS.araticcyan};
          transform: translateY(-2px);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }

        .cards-list {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .card-row {
          display: flex;
          align-items: flex-start;
          gap: 24px;
          padding: 28px 0;
          border-bottom: 1px solid ${LIGHT_BG_COLORS.border};
          position: relative;
        }

        .card-row:first-child {
          border-top: 1px solid ${LIGHT_BG_COLORS.border};
        }

        .card-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: ${LIGHT_BG_COLORS.bg3};
          border: 1px solid ${LIGHT_BG_COLORS.border};
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
          transition: background 0.25s, transform 0.25s;
        }

        .card-row:hover .card-icon-wrap {
          background: ${LIGHT_BG_COLORS.araticcyan}18;
          transform: scale(1.08);
        }

        .card-content { flex: 1; }

        .card-title {
          font-family: 'Syne', sans-serif;
          font-size: 15px;
          font-weight: 700;
          color: ${LIGHT_BG_COLORS.dark};
          letter-spacing: -0.02em;
          margin-bottom: 8px;
        }

        .card-body {
          font-size: 13.5px;
          color: ${LIGHT_BG_COLORS.txt3};
          line-height: 1.75;
        }

        .card-row::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, ${LIGHT_BG_COLORS.araticcyan}, ${LIGHT_BG_COLORS.evergreenteal});
          transition: width 0.35s cubic-bezier(0.16,1,0.3,1);
        }

        .card-row:hover::after { width: 100%; }

        @media (max-width: 960px) {
          .culture-layout {
            grid-template-columns: 1fr;
            gap: 56px;
          }
          .culture-left { position: static; }
        }

        @media (max-width: 600px) {
          .culture-inner { padding: 0 20px; }
          .culture-top-rule { left: 20px; right: 20px; }
          .culture-section { padding: 72px 0 80px; }
          .stats-grid { grid-template-columns: 1fr 1fr; }
        }
      `}</style>

      <section className="culture-section" id="culture" ref={sectionRef}>
        <div className="culture-top-rule" />

        <div className="culture-inner">
          <div className="culture-layout">

            {/* LEFT */}
            <div className="culture-left" data-aos="fade-right">
              <div className="culture-eyebrow">Why Deteroid</div>

              <h2 className="culture-heading" ref={headingRef}>
                We built a company we'd want to work&nbsp;at.
              </h2>

              <p className="culture-subtext">
                No perks that don't matter. No culture memos. Just the
                fundamentals done right — real work, real growth, real pay.
              </p>

              <a href="#jobs" className="culture-cta">
                See open roles
                <svg width={13} height={13} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>

              {/* Stats */}
              <div className="stats-grid">
                {STATS.map((stat, i) => (
                  <StatBox key={stat.val} stat={stat} index={i} />
                ))}
              </div>
            </div>

            {/* RIGHT — vertical card list */}
            <div data-aos="fade-left" data-aos-delay="100">
              <div className="cards-list">
                {CARDS.map((card, i) => {
                  const accentColors = {
                    o: LIGHT_BG_COLORS.araticcyan,
                    t: LIGHT_BG_COLORS.evergreenteal,
                    v: LIGHT_BG_COLORS.emberorange,
                    d: LIGHT_BG_COLORS.solargold,
                  };
                  return (
                    <motion.div
                      key={card.id}
                      className="card-row"
                      initial={{ opacity: 0, x: 24 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{
                        duration: 0.5,
                        delay: i * 0.1,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <div className="card-icon-wrap">
                        {React.cloneElement(card.icon, {
                          stroke: accentColors[card.variant],
                        })}
                      </div>

                      <div className="card-content">
                        <div className="card-title">{card.title}</div>
                        <p className="card-body">{card.body}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Culture;