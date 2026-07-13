"use client";
import React from "react";
import { Reveal } from "./Reveal";
import { FONT, LIGHT_BG_COLORS } from "../../styles/tokens";

const VALUES = [
  {
    n: "01",
    title: "Radical transparency",
    body: "Fixed-price quotes. No scope creep. You see every commit, every design decision, and every security finding before we do.",
    accent: LIGHT_BG_COLORS.emberorange,
    icon: "🔍",
  },
  {
    n: "02",
    title: "Speed without shortcuts",
    body: "48-hour delivery is only possible because our process is engineered for it — not because we skip critical steps.",
    accent: LIGHT_BG_COLORS.araticcyan,
    icon: "⚡",
  },
  {
    n: "03",
    title: "Security as respect",
    body: "Every user who visits a site we build deserves protection. We treat that responsibility seriously in every line of code.",
    accent: LIGHT_BG_COLORS.evergreenteal,
    icon: "🛡️",
  },
  {
    n: "04",
    title: "Permanent ownership",
    body: "You own everything — every pixel, every repository, every deployment. Your product remains fully yours forever.",
    accent: LIGHT_BG_COLORS.solargold,
    icon: "🔑",
  },
];

export function Values() {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        /* bgd = deep ocean — intentional dark contrast section */
        background: LIGHT_BG_COLORS.bgd,
        paddingTop:    "clamp(80px,10vw,140px)",
        paddingBottom: "clamp(80px,10vw,140px)",
      }}
    >
      {/* Ambient glows */}
      <div
        style={{
          position: "absolute",
          top: -140,
          right: -100,
          width: 420,
          height: 420,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${LIGHT_BG_COLORS.araticcyan}18, transparent 70%)`,
          filter: "blur(24px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -100,
          left: -80,
          width: 340,
          height: 340,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${LIGHT_BG_COLORS.emberorange}12, transparent 70%)`,
          filter: "blur(20px)",
          pointerEvents: "none",
        }}
      />

      {/* Subtle grid texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(183,215,226,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(183,215,226,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          opacity: 0.4,
          pointerEvents: "none",
        }}
      />

      {/* Watermark */}
      <div
        style={{
          position: "absolute",
          left: -20,
          bottom: -20,
          fontSize: "clamp(90px,15vw,220px)",
          fontWeight: 900,
          fontFamily: FONT,
          color: LIGHT_BG_COLORS.light,
          opacity: 0.025,
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        VALUES
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 clamp(20px,4vw,48px)",
        }}
      >
        {/* Section tag */}
        <Reveal>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <div style={{ width: 36, height: 2, borderRadius: 999, background: LIGHT_BG_COLORS.solargold }} />
            <span
              style={{
                fontFamily: FONT,
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: LIGHT_BG_COLORS.solargold,
              }}
            >
              What we stand for
            </span>
          </div>
        </Reveal>

        {/* Title */}
        <Reveal delay={80}>
          <h2
            style={{
              fontFamily: FONT,
              fontWeight: 900,
              fontSize: "clamp(36px,5vw,72px)",
              lineHeight: 0.95,
              letterSpacing: "-0.06em",
              color: LIGHT_BG_COLORS.light,
              marginBottom: "clamp(48px,6vw,80px)",
              maxWidth: 720,
            }}
          >
            Our{" "}
            <span style={{ color: LIGHT_BG_COLORS.araticcyan }}>values.</span>
          </h2>
        </Reveal>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "clamp(14px,2vw,22px)",
          }}
        >
          {VALUES.map((v, i) => (
            <Reveal key={v.n} delay={i * 100}>
              <div
                style={{
                  position: "relative",
                  borderRadius: 30,
                  padding: "clamp(24px,3vw,34px)",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(183,215,226,0.10)",
                  backdropFilter: "blur(16px)",
                  overflow: "hidden",
                  minHeight: 300,
                  transition: "transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.borderColor = `${v.accent}40`;
                  e.currentTarget.style.boxShadow = `0 20px 60px ${v.accent}18`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "rgba(183,215,226,0.10)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Card inner glow */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: 200,
                    height: 200,
                    borderRadius: "50%",
                    background: `radial-gradient(circle, ${v.accent}20, transparent 70%)`,
                    pointerEvents: "none",
                  }}
                />

                {/* Number + icon badge */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 56,
                    height: 56,
                    borderRadius: 20,
                    background: `${v.accent}18`,
                    border: `1px solid ${v.accent}35`,
                    marginBottom: 26,
                    position: "relative",
                    zIndex: 2,
                    fontSize: 22,
                  }}
                >
                  {v.icon}
                </div>

                {/* Number label */}
                <span
                  style={{
                    display: "block",
                    fontFamily: FONT,
                    fontSize: 11,
                    fontWeight: 800,
                    letterSpacing: "0.18em",
                    color: v.accent,
                    marginBottom: 10,
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  {v.n}
                </span>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: FONT,
                    fontSize: "clamp(18px,2vw,22px)",
                    fontWeight: 800,
                    lineHeight: 1.2,
                    color: LIGHT_BG_COLORS.light,
                    marginBottom: 14,
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  {v.title}
                </h3>

                {/* Body */}
                <p
                  style={{
                    fontSize: "clamp(13px,1.5vw,15px)",
                    lineHeight: 1.9,
                    color: "rgba(183,215,226,0.72)",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  {v.body}
                </p>

                {/* Bottom accent bar */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: 3,
                    background: v.accent,
                    opacity: 0.85,
                  }}
                />
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom badge row */}
        <Reveal delay={400}>
          <div
            style={{
              marginTop: "clamp(40px,5vw,60px)",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              gap: 14,
            }}
          >
            {[
              { label: "OWASP Certified", color: LIGHT_BG_COLORS.evergreenteal },
              { label: "Fixed-price guarantee", color: LIGHT_BG_COLORS.araticcyan },
              { label: "100% ownership transfer", color: LIGHT_BG_COLORS.solargold },
              { label: "Zero breach record", color: LIGHT_BG_COLORS.emberorange },
            ].map((b) => (
              <span
                key={b.label}
                style={{
                  fontFamily: FONT,
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: b.color,
                  background: `${b.color}14`,
                  border: `1px solid ${b.color}30`,
                  borderRadius: 999,
                  padding: "8px 16px",
                }}
              >
                {b.label}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Values;