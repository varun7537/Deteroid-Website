"use client";
import React, { useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import { useReveal } from "../../hooks/useReveal";
import { LIGHT_BG_COLORS } from "../../styles/tokens";

const STAT_META = [
  // 47+   Projects Delivered
  { suffixClr: LIGHT_BG_COLORS.solargold,     subClr: LIGHT_BG_COLORS.evergreenteal, overlayClr: "rgba(251,133,0,0.05)"   },
  // 48h   Turnaround
  { suffixClr: LIGHT_BG_COLORS.araticcyan,    subClr: LIGHT_BG_COLORS.araticcyan,    overlayClr: "rgba(33,158,188,0.05)"  },
  // 100%  Fixed Pricing
  { suffixClr: LIGHT_BG_COLORS.araticcyan,    subClr: LIGHT_BG_COLORS.solargold,     overlayClr: "rgba(33,158,188,0.05)"  },
  // 0     Security Breaches
  { suffixClr: LIGHT_BG_COLORS.evergreenteal, subClr: LIGHT_BG_COLORS.evergreenteal, overlayClr: "rgba(64,138,113,0.05)"  },
];

const STATS_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&display=swap');

/* ── Stat grid ── */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2px;
  background: ${LIGHT_BG_COLORS.border};
  border-radius: 20px;
  overflow: hidden;
  border: 1.5px solid ${LIGHT_BG_COLORS.border};
  box-shadow: 0 8px 40px rgba(2,48,71,0.07), 0 2px 8px rgba(2,48,71,0.04);
}

/* ── Stat card ── */
.stat-card {
  background: ${LIGHT_BG_COLORS.bglt};
  padding: 48px 36px;
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: background 0.3s ease, box-shadow 0.3s ease;
  cursor: default;
}
.stat-card:hover {
  background: ${LIGHT_BG_COLORS.bg2};
  box-shadow: inset 0 0 0 1px rgba(33,158,188,0.10);
}

/* Top-edge accent line — reveals on hover */
.stat-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, ${LIGHT_BG_COLORS.emberorange}, ${LIGHT_BG_COLORS.araticcyan});
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s cubic-bezier(0.4,0,0.2,1);
}
.stat-card:hover::before {
  transform: scaleX(1);
}

/* ── Section divider rules ── */
.stats-rule {
  height: 1px;
  background: linear-gradient(90deg, transparent, ${LIGHT_BG_COLORS.border}, transparent);
}

/* ── Responsive ── */

/* Tablet: 2×2 grid */
@media (max-width: 900px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    border-radius: 16px;
  }
  .stat-card {
    padding: 40px 28px;
  }
}

/* Large mobile: still 2×2 but tighter */
@media (max-width: 600px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    border-radius: 14px;
    gap: 1px;
  }
  .stat-card {
    padding: 32px 20px;
  }
  .stats-section-inner {
    padding: 0 16px !important;
  }
  .stats-section {
    padding: 72px 0 !important;
  }
}

/* Small mobile: single column */
@media (max-width: 380px) {
  .stats-grid {
    grid-template-columns: 1fr;
    border-radius: 12px;
  }
  .stat-card {
    padding: 28px 18px;
  }
}
`;

function StatCard({ num, suffix, label, sub, delay, metaIdx }) {
  const [ref, count] = useCounter(num);
  const [rRef, visible] = useReveal();
  const [hov, setHov] = useState(false);

  const { suffixClr, subClr, overlayClr } = STAT_META[metaIdx];

  const displayed = num > 0 ? count : 0;

  return (
    <div
      className="stat-card"
      ref={(el) => {
        if (ref) ref.current = el;
        if (rRef) rRef.current = el;
      }}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}, background 0.3s ease`,
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse at 50% 60%, ${overlayClr}, transparent 70%)`,
          opacity: hov ? 1 : 0,
          transition: "opacity 0.35s ease",
          pointerEvents: "none",
        }}
      />

      <span
        style={{
          fontFamily: LIGHT_BG_COLORS.outfit,
          fontSize: "clamp(44px, 5vw, 72px)",
          fontWeight: 800,
          color: LIGHT_BG_COLORS.txt1,
          lineHeight: 1,
          display: "block",
          marginBottom: 10,
          position: "relative",
          zIndex: 1,
          transform: hov ? "scale(1.04)" : "scale(1)",
          transition: "transform 0.3s ease",
        }}
      >
        {displayed}
        <em
          style={{
            fontStyle: "normal",
            color: suffixClr,
            fontSize:
              suffix === "%" || suffix === "h"
                ? "0.45em"
                : suffix === "+"
                ? "0.75em"
                : "1em",
            verticalAlign: suffix === "+" ? "super" : "baseline",
            marginLeft: suffix === "+" ? 1 : 0,
          }}
        >
          {suffix}
        </em>
      </span>

      <div
        style={{
          fontFamily: LIGHT_BG_COLORS.body,
          fontSize: "clamp(13px, 1.2vw, 15px)",
          color: LIGHT_BG_COLORS.txt2,
          fontWeight: 500,
          lineHeight: 1.4,
          position: "relative",
          zIndex: 1,
          marginBottom: 5,
        }}
      >
        {label}
      </div>

      <div
        style={{
          fontFamily: LIGHT_BG_COLORS.outfit,
          fontSize: 11,
          color: subClr,
          fontWeight: 700,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          position: "relative",
          zIndex: 1,
        }}
      >
        {sub}
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 16,
          right: 18,
          width: 5,
          height: 5,
          borderRadius: "50%",
          background: subClr,
          opacity: hov ? 0.40 : 0.12,
          transition: "opacity 0.3s ease",
        }}
      />
    </div>
  );
}

function Stats() {
  return (
    <>
      <style>{STATS_CSS}</style>

      <section
        id="stats"
        className="stats-section"
        style={{
          padding: "100px 0",
          position: "relative",
          background: LIGHT_BG_COLORS.bg1,
          overflow: "hidden",
        }}
      >
        <div className="stats-rule" />

        <div
          style={{
            position: "absolute",
            top: -60, right: -40,
            width: 340, height: 340,
            borderRadius: "50%",
            background: "rgba(33,158,188,0.05)",
            filter: "blur(70px)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: -50, left: -30,
            width: 260, height: 260,
            borderRadius: "50%",
            background: "rgba(255,183,3,0.06)",
            filter: "blur(60px)",
            pointerEvents: "none",
          }}
        />

        <div
          className="stats-section-inner"
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 56px",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div className="stats-grid">
            {STATS_DATA.map((s, i) => (
              <StatCard
                key={s.label}
                {...s}
                metaIdx={i}
                delay={`${i * 0.1}s`}
              />
            ))}
          </div>
        </div>

        <div className="stats-rule" style={{ marginTop: 0 }} />
      </section>
    </>
  );
}


const STATS_DATA = [
  { num: 47,  suffix: "+", label: "Projects Delivered", sub: "Since 2022"          },
  { num: 48,  suffix: "h", label: "Turnaround Time",    sub: "Guaranteed"           },
  { num: 100, suffix: "%", label: "Fixed Pricing",      sub: "No hidden fees"       },
  { num: 0,   suffix: "",  label: "Security Breaches",  sub: "Across all projects"  },
];

export default Stats;