"use client";
import React from "react";
import { Reveal } from "./Reveal";
import { LIGHT_BG_COLORS } from "../../styles/tokens";

/* ─── Pillars ────────────────────────────────────────── */
const PILLARS = [
  {
    icon: "🛡️",
    title: "Security-first",
    desc: "OWASP Top 10 coverage on every project, no exceptions.",
    accent: LIGHT_BG_COLORS.araticcyan,
    accentBg: `rgba(33,158,188,0.10)`,
  },
  {
    icon: "⚡",
    title: "Speed obsessed",
    desc: "Core Web Vitals targets defined before any code is written.",
    accent: LIGHT_BG_COLORS.solargold,
    accentBg: `rgba(255,183,3,0.10)`,
  },
  {
    icon: "🎯",
    title: "Conversion-driven",
    desc: "Design decisions anchored to measurable business outcomes.",
    accent: LIGHT_BG_COLORS.emberorange,
    accentBg: `rgba(251,133,0,0.10)`,
  },
];

export function Mission() {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        background: LIGHT_BG_COLORS.bg1,
        paddingTop: "clamp(80px,10vw,140px)",
        paddingBottom: "clamp(80px,10vw,140px)",
      }}
    >
      {/* Top divider */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "92%",
          height: 1,
          background: LIGHT_BG_COLORS.border,
        }}
      />

      {/* Background glow — top right */}
      <div
        style={{
          position: "absolute",
          right: -120,
          top: -100,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${LIGHT_BG_COLORS.araticcyan}0E, transparent 70%)`,
          filter: "blur(24px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 clamp(20px,4vw,48px)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "clamp(48px,7vw,88px)",
            alignItems: "center",
          }}
        >
          {/* ── LEFT ── */}
          <div>
            <Reveal>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <div
                  style={{
                    width: 36,
                    height: 2,
                    borderRadius: 999,
                    background: LIGHT_BG_COLORS.araticcyan,
                  }}
                />
                <span
                  style={{
                    fontFamily: FONT,
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: LIGHT_BG_COLORS.araticcyan,
                  }}
                >
                  Our Mission
                </span>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h2
                style={{
                  fontFamily: FONT,
                  fontWeight: 900,
                  fontSize: "clamp(32px,5vw,60px)",
                  lineHeight: 1.02,
                  letterSpacing: "-0.05em",
                  color: LIGHT_BG_COLORS.txt1,
                  marginBottom: 28,
                  maxWidth: 680,
                }}
              >
                Security isn't a feature.
                <br />
                <span style={{ color: LIGHT_BG_COLORS.emberorange }}>It's the foundation.</span>
              </h2>
            </Reveal>

            <Reveal delay={160}>
              <p
                style={{
                  color: LIGHT_BG_COLORS.txt2,
                  fontSize: "clamp(15px,1.8vw,18px)",
                  lineHeight: 1.9,
                  marginBottom: 24,
                  maxWidth: 600,
                }}
              >
                Most agencies bolt security on at the end. We build it into every
                component, every API route, and every deployment pipeline from day one.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <p
                style={{
                  color: LIGHT_BG_COLORS.txt3,
                  fontSize: "clamp(14px,1.6vw,17px)",
                  lineHeight: 1.9,
                  maxWidth: 600,
                }}
              >
                Our mission is simple: give early-stage startups the same calibre of
                secure, high-performance digital infrastructure that once required an
                entire engineering department.
              </p>
            </Reveal>

            {/* CTAs */}
            <Reveal delay={320}>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 12,
                  marginTop: 36,
                }}
              >
                <a
                  href="#contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "13px 28px",
                    borderRadius: 999,
                    background: LIGHT_BG_COLORS.dark,
                    color: LIGHT_BG_COLORS.light,
                    fontWeight: 700,
                    fontSize: 14,
                    fontFamily: FONT,
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    boxShadow: "0 10px 28px rgba(1,38,53,0.14)",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = LIGHT_BG_COLORS.emberorange;
                    e.target.style.transform = "translateY(-2px)";
                    e.target.style.boxShadow = `0 16px 40px rgba(251,133,0,0.32)`;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = LIGHT_BG_COLORS.dark;
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "0 10px 28px rgba(1,38,53,0.14)";
                  }}
                >
                  Let's Build →
                </a>

                <a
                  href="#services"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "13px 28px",
                    borderRadius: 999,
                    border: `1.5px solid ${LIGHT_BG_COLORS.border}`,
                    color: LIGHT_BG_COLORS.txt1,
                    fontWeight: 700,
                    fontSize: 14,
                    fontFamily: FONT,
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    background: "transparent",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = LIGHT_BG_COLORS.dark;
                    e.target.style.color = LIGHT_BG_COLORS.light;
                    e.target.style.borderColor = LIGHT_BG_COLORS.dark;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "transparent";
                    e.target.style.color = LIGHT_BG_COLORS.txt1;
                    e.target.style.borderColor = LIGHT_BG_COLORS.border;
                  }}
                >
                  Explore Services
                </a>
              </div>
            </Reveal>
          </div>

          {/* ── RIGHT: Pillars card ── */}
          <Reveal delay={200} dir="right">
            <div
              style={{
                position: "relative",
                borderRadius: 32,
                padding: "clamp(28px,4vw,42px)",
                background: LIGHT_BG_COLORS.bgd,
                overflow: "hidden",
                boxShadow: "0 28px 72px rgba(1,38,53,0.20)",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              {/* Inner glow — cyan top right */}
              <div
                style={{
                  position: "absolute",
                  top: -60,
                  right: -60,
                  width: 280,
                  height: 280,
                  borderRadius: "50%",
                  background: `radial-gradient(circle, ${LIGHT_BG_COLORS.araticcyan}1A, transparent 70%)`,
                  pointerEvents: "none",
                }}
              />

              {/* Inner glow — gold bottom left */}
              <div
                style={{
                  position: "absolute",
                  bottom: -60,
                  left: -40,
                  width: 220,
                  height: 220,
                  borderRadius: "50%",
                  background: `radial-gradient(circle, ${LIGHT_BG_COLORS.solargold}12, transparent 70%)`,
                  pointerEvents: "none",
                }}
              />

              {/* Glass sheen */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(160deg, rgba(255,255,255,0.04), transparent 60%)",
                  pointerEvents: "none",
                }}
              />

              <div style={{ position: "relative", zIndex: 1 }}>
                {PILLARS.map((p, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: 18,
                      marginBottom: i !== PILLARS.length - 1 ? 32 : 0,
                    }}
                  >
                    {/* Icon box */}
                    <div
                      style={{
                        width: 54,
                        height: 54,
                        borderRadius: 18,
                        background: p.accentBg,
                        border: `1px solid ${p.accent}30`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 22,
                        flexShrink: 0,
                      }}
                    >
                      {p.icon}
                    </div>

                    {/* Text */}
                    <div>
                      <h4
                        style={{
                          fontFamily: FONT,
                          fontWeight: 700,
                          fontSize: 17,
                          color: LIGHT_BG_COLORS.light,
                          marginBottom: 7,
                        }}
                      >
                        {p.title}
                      </h4>
                      <p
                        style={{
                          color: `rgba(183,215,226,0.72)`,
                          fontSize: 14,
                          lineHeight: 1.8,
                          maxWidth: 380,
                        }}
                      >
                        {p.desc}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Bottom divider + stat */}
                <div
                  style={{
                    marginTop: 36,
                    paddingTop: 24,
                    borderTop: "1px solid rgba(183,215,226,0.10)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: 10,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: LIGHT_BG_COLORS.evergreenteal,
                        boxShadow: `0 0 10px ${LIGHT_BG_COLORS.evergreenteal}`,
                      }}
                    />
                    <span
                      style={{
                        fontFamily: FONT,
                        fontSize: 12,
                        fontWeight: 600,
                        color: "rgba(183,215,226,0.55)",
                        letterSpacing: "0.04em",
                      }}
                    >
                      Zero breaches since 2022
                    </span>
                  </div>
                  <span
                    style={{
                      fontFamily: FONT,
                      fontSize: 11,
                      fontWeight: 800,
                      letterSpacing: "0.20em",
                      textTransform: "uppercase",
                      color: LIGHT_BG_COLORS.solargold,
                    }}
                  >
                    OWASP Verified
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Mobile CTA stack */}
      <style>{`
        @media (max-width: 480px) {
          .mission-ctas {
            flex-direction: column !important;
          }
          .mission-ctas a {
            text-align: center !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Mission;