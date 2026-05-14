import React, { useEffect, useState } from "react";
import { LIGHT_BG_COLORS } from "../../styles/tokens";

const FONT = "'Syne', 'DM Sans', sans-serif";

/* ─── StatCard ───────────────────────────────────────── */
function StatCard({ num, label, sub, accent, bg, textColor, tall, locTag, bordered }) {
  return (
    <div
      style={{
        background: bg,
        borderRadius: 28,
        padding: tall ? "36px 28px 28px" : "28px",
        border: bordered ? `1.5px solid ${LIGHT_BG_COLORS.border}` : "none",
        boxShadow: bordered
          ? "0 4px 24px rgba(1,38,53,0.06)"
          : "0 8px 32px rgba(1,38,53,0.10)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: tall ? 220 : 160,
        position: "relative",
        overflow: "hidden",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = `0 16px 48px rgba(1,38,53,0.18)`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = bordered
          ? "0 4px 24px rgba(1,38,53,0.06)"
          : "0 8px 32px rgba(1,38,53,0.10)";
      }}
    >
      {/* Accent dot */}
      <div
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          width: 10,
          height: 10,
          borderRadius: "50%",
          background: LIGHT_BG_COLORS.araticcyan,
          boxShadow: `0 0 14px ${LIGHT_BG_COLORS.araticcyan}99`,
        }}
      />

      {/* Number */}
      <span
        style={{
          fontFamily: FONT,
          fontWeight: 900,
          fontSize: "clamp(40px, 5vw, 56px)",
          lineHeight: 1,
          letterSpacing: "-0.04em",
          color: accent,
        }}
      >
        {num}
      </span>

      {/* Label + sub */}
      <div>
        <p
          style={{
            fontFamily: FONT,
            fontWeight: 700,
            fontSize: 15,
            color: textColor,
            marginBottom: 4,
          }}
        >
          {label}
        </p>
        <p style={{ fontSize: 12, color: bg === LIGHT_BG_COLORS.bgd ? "rgba(255,255,255,0.5)" : LIGHT_BG_COLORS.txt3 }}>
          {sub}
        </p>
        {locTag && (
          <span
            style={{
              display: "inline-block",
              marginTop: 10,
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: LIGHT_BG_COLORS.emberorange,
              background: "rgba(251,133,0,0.12)",
              borderRadius: 999,
              padding: "4px 10px",
            }}
          >
            📍 {locTag}
          </span>
        )}
      </div>
    </div>
  );
}

/* ─── Hero ───────────────────────────────────────────── */
export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const fade = (delay) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? "translateY(0)" : "translateY(22px)",
    transition: `
      opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}ms,
      transform 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}ms
    `,
  });

  return (
    <>
      {/* Google Font import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800;900&family=DM+Sans:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 72px;
          align-items: center;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .cta-row {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
        }

        /* Ripple dots background pattern */
        .hero-bg-dots {
          background-image:
          radial-gradient(circle, ${LIGHT_BG_COLORS.border} 1px, transparent 1px);
          background-size: 36px 36px;
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 56px;
          }
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* Mobile */
        @media (max-width: 600px) {
          .hero-grid {
            gap: 40px;
          }
          .stats-grid {
            grid-template-columns: 1fr 1fr;
            gap: 12px;
          }
          .cta-row {
            flex-direction: column;
          }
          .cta-row a {
            text-align: center;
          }
        }

        @media (max-width: 400px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }
        }

        @keyframes float-badge {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-6px); }
        }

        @keyframes drift {
          0%   { transform: translate(0,0) scale(1); }
          33%  { transform: translate(30px,-20px) scale(1.06); }
          66%  { transform: translate(-20px,10px) scale(0.96); }
          100% { transform: translate(0,0) scale(1); }
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 14px 28px;
          border-radius: 999px;
          background: ${LIGHT_BG_COLORS.dark};
          color: ${LIGHT_BG_COLORS.light};
          font-weight: 700;
          font-size: 14px;
          font-family: ${FONT};
          text-decoration: none;
          transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 10px 30px rgba(1,38,53,0.16);
          border: none;
          cursor: pointer;
        }
        .btn-primary:hover {
          background: ${LIGHT_BG_COLORS.emberorange};
          transform: translateY(-2px);
          box-shadow: 0 16px 40px rgba(251,133,0,0.35);
        }

        .btn-outline {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 14px 28px;
          border-radius: 999px;
          border: 1.5px solid ${LIGHT_BG_COLORS.border};
          color: ${LIGHT_BG_COLORS.txt1};
          font-weight: 700;
          font-size: 14px;
          font-family: ${FONT};
          text-decoration: none;
          transition: all 0.3s ease;
          background: transparent;
          cursor: pointer;
        }
        .btn-outline:hover {
          background: ${LIGHT_BG_COLORS.dark};
          color: ${LIGHT_BG_COLORS.light};
          border-color: ${LIGHT_BG_COLORS.dark};
          transform: translateY(-2px);
        }
      `}</style>

      <section
        id="about"
        style={{
          position: "relative",
          minHeight: "100vh",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          background: LIGHT_BG_COLORS.bg1,
          paddingTop: "clamp(90px, 10vw, 140px)",
          paddingBottom: "clamp(80px, 10vw, 140px)",
        }}
      >
        {/* ── Dot grid bg ── */}
        <div
          className="hero-bg-dots"
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.55,
            pointerEvents: "none",
          }}
        />

        {/* ── Floating color blobs ── */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-80px",
            width: 480,
            height: 480,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${LIGHT_BG_COLORS.araticcyan}22, transparent 70%)`,
            filter: "blur(40px)",
            animation: "drift 14s ease-in-out infinite",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "-60px",
            width: 360,
            height: 360,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${LIGHT_BG_COLORS.solargold}1A, transparent 70%)`,
            filter: "blur(30px)",
            animation: "drift 18s ease-in-out infinite reverse",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "40%",
            left: "38%",
            width: 280,
            height: 280,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${LIGHT_BG_COLORS.evergreenteal}14, transparent 70%)`,
            filter: "blur(24px)",
            animation: "drift 22s ease-in-out infinite",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "absolute",
            right: -40,
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: "clamp(100px, 18vw, 280px)",
            fontWeight: 900,
            fontFamily: FONT,
            color: LIGHT_BG_COLORS.txt1,
            opacity: 0.03,
            letterSpacing: "-0.06em",
            lineHeight: 1,
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          ABOUT
        </div>

        <div
          style={{
            position: "relative",
            zIndex: 10,
            width: "100%",
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 clamp(20px, 4vw, 48px)",
          }}
        >
          <div className="hero-grid">
            <div>
              <div
                className="flex items-center"
                style={{ ...fade(50), display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}
              >
                <div
                  style={{
                    width: 36,
                    height: 2,
                    background: LIGHT_BG_COLORS.araticcyan,
                    borderRadius: 999,
                  }}
                />
                <span
                  style={{
                    fontFamily: FONT,
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: LIGHT_BG_COLORS.araticcyan,
                  }}
                >
                  About Deteroid
                </span>
              </div>

              <h1
                style={{
                  fontFamily: FONT,
                  fontWeight: 900,
                  lineHeight: 0.92,
                  letterSpacing: "-0.06em",
                  fontSize: "clamp(56px, 7.5vw, 88px)",
                  color: LIGHT_BG_COLORS.txt1,
                  overflow: "hidden",
                }}
              >
                {/* Line 1 */}
                <div style={{ overflow: "hidden", paddingBottom: 6 }}>
                  <span
                    style={{
                      display: "block",
                      color: LIGHT_BG_COLORS.txt1,
                      opacity: mounted ? 1 : 0,
                      transform: mounted ? "translateY(0)" : "translateY(110%)",
                      transition: `all 0.9s cubic-bezier(0.16,1,0.3,1) 100ms`,
                    }}
                  >
                    Built
                  </span>
                </div>

                {/* Line 2 */}
                <div style={{ overflow: "hidden", paddingBottom: 6 }}>
                  <span
                    style={{
                      display: "block",
                      color: LIGHT_BG_COLORS.emberorange,
                      opacity: mounted ? 1 : 0,
                      transform: mounted ? "translateY(0)" : "translateY(110%)",
                      transition: `all 0.9s cubic-bezier(0.16,1,0.3,1) 200ms`,
                    }}
                  >
                    different.
                  </span>
                </div>

                <div style={{ overflow: "hidden", paddingBottom: 6 }}>
                  <span
                    style={{
                      display: "block",
                      color: LIGHT_BG_COLORS.txt1,
                      opacity: mounted ? 1 : 0,
                      transform: mounted ? "translateY(0)" : "translateY(110%)",
                      transition: `all 0.9s cubic-bezier(0.16,1,0.3,1) 320ms`,
                    }}
                  >
                    Wired
                  </span>
                </div>

                <div style={{ overflow: "hidden", paddingBottom: 6 }}>
                  <span
                    style={{
                      display: "block",
                      color: LIGHT_BG_COLORS.araticcyan,
                      opacity: mounted ? 1 : 0,
                      transform: mounted ? "translateY(0)" : "translateY(110%)",
                      transition: `all 0.9s cubic-bezier(0.16,1,0.3,1) 440ms`,
                    }}
                  >
                    for results.
                  </span>
                </div>
              </h1>

              <p
                style={{
                  ...fade(500),
                  maxWidth: 520,
                  marginTop: 32,
                  marginBottom: 36,
                  color: LIGHT_BG_COLORS.txt2,
                  fontSize: "clamp(15px, 1.8vw, 18px)",
                  lineHeight: 1.85,
                  fontWeight: 400,
                  fontFamily: FONT,
                }}
              >
                We're a web design and development agency for startups — where{" "}
                <span style={{ color: LIGHT_BG_COLORS.dark, fontWeight: 700 }}>
                  AI, design, and security
                </span>{" "}
                are merged into one modern digital experience.
              </p>

              <div
                style={{
                  ...fade(560),
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: LIGHT_BG_COLORS.bglt,
                  border: `1px solid ${LIGHT_BG_COLORS.border}`,
                  borderRadius: 999,
                  padding: "8px 16px",
                  marginBottom: 32,
                  boxShadow: "0 4px 14px rgba(1,38,53,0.07)",
                  animation: "float-badge 4s ease-in-out infinite",
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: LIGHT_BG_COLORS.evergreenteal,
                    boxShadow: `0 0 8px ${LIGHT_BG_COLORS.evergreenteal}`,
                    display: "inline-block",
                  }}
                />
                <span
                  style={{
                    fontFamily: FONT,
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: LIGHT_BG_COLORS.txt3,
                  }}
                >
                  3 spots open · Q3 2025
                </span>
              </div>

              <div className="cta-row" style={fade(650)}>
                <a href="#cta" className="btn-primary">
                  Get Started →
                </a>
                <a href="#work" className="btn-outline">
                  View Work
                </a>
              </div>
            </div>

            {/* ── RIGHT: Stats grid ── */}
            <div style={fade(300)}>
              <div className="stats-grid">
                {STATS.map((s) => (
                  <StatCard key={s.label} {...s} />
                ))}
              </div>

              <div
                style={{
                  marginTop: 20,
                  background: LIGHT_BG_COLORS.bglt,
                  border: `1px solid ${LIGHT_BG_COLORS.border}`,
                  borderRadius: 20,
                  padding: "16px 24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 12,
                  boxShadow: "0 4px 18px rgba(1,38,53,0.06)",
                  flexWrap: "wrap",
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
                      color: LIGHT_BG_COLORS.txt2,
                      letterSpacing: "0.04em",
                    }}
                  >
                    Currently accepting new projects
                  </span>
                </div>
                <span
                  style={{
                    fontFamily: FONT,
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: LIGHT_BG_COLORS.solargold,
                  }}
                >
                  Deteroid · 2025
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;