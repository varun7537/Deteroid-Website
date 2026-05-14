import React from "react";
import { Reveal } from "./Reveal";
import { FONT, LIGHT_BG_COLORS } from "../../styles/tokens";

/* ─── Steps ─────────────────────────────────────────── */
const STEPS = [
  {
    n: "01",
    title: "Discovery & scoping",
    body: "A 2-hour kickoff call to understand goals, audience, and constraints. We define scope before code. Price locks immediately.",
  },
  {
    n: "02",
    title: "Parallel design + development",
    body: "Design and development happen simultaneously. Components are built while visuals are finalized — this is how we ship fast.",
  },
  {
    n: "03",
    title: "Security hardening",
    body: "Security is not a final step. Every PR is scanned for vulnerabilities during development, not after.",
  },
  {
    n: "04",
    title: "Launch & monitoring",
    body: "We stay for 30 days post-launch — monitoring Core Web Vitals, fixing bugs, and tracking conversion performance.",
  },
];

/* ─── Terminal lines ─────────────────────────────────── */
const TERMINAL_LINES = [
  {
    ln: 1,
    code: <span style={{ color: "rgba(2,48,71,0.35)" }}>{"// Deteroid — Security Audit Pipeline"}</span>,
  },
  {
    ln: 2,
    code: (
      <>
        <span style={{ color: C.araticcyan }}>import</span>{" "}
        <span style={{ color: C.emberorange }}>runOWASP</span>{" "}
        <span style={{ color: C.araticcyan }}>from</span>{" "}
        <span style={{ color: C.evergreenteal }}>{"'@/lib/security'"}</span>
      </>
    ),
  },
  { ln: 3, code: "" },
  {
    ln: 4,
    code: (
      <>
        <span style={{ color: LIGHT_BG_COLORS.araticcyan }}>const</span>{" "}
        <span style={{ color: LIGHT_BG_COLORS.txt1 }}>audit</span>
        <span style={{ color: LIGHT_BG_COLORS.araticcyan }}> = await </span>
        <span style={{ color: LIGHT_BG_COLORS.emberorange }}>runOWASP</span>
        {"({"}
      </>
    ),
  },
  {
    ln: 5,
    code: <span style={{ color: LIGHT_BG_COLORS.txt3 }}>{"  target: 'https://client.deteroid.io',"}</span>,
  },
  {
    ln: 6,
    code: <span style={{ color: LIGHT_BG_COLORS.txt3 }}>{"  depth: 'full',"}</span>,
  },
  {
    ln: 7,
    code: <span style={{ color: LIGHT_BG_COLORS.txt3 }}>{"  checks: ['xss','csrf','sqli','csp']"}</span>,
  },
  {
    ln: 8,
    code: <span style={{ color: LIGHT_BG_COLORS.txt3 }}>{"})"}</span>,
  },
  { ln: 9, code: "" },
  {
    ln: 10,
    code: <span style={{ color: "rgba(2,48,71,0.35)" }}>{"// Results"}</span>,
  },
  {
    ln: 11,
    code: (
      <>
        → XSS Sanitization{" "}
        <span style={{ color: LIGHT_BG_COLORS.evergreenteal, fontWeight: 700 }}>✓ PASS</span>
      </>
    ),
  },
  {
    ln: 12,
    code: (
      <>
        → CSRF Protection{" "}
        <span style={{ color: LIGHT_BG_COLORS.evergreenteal, fontWeight: 700 }}>✓ PASS</span>
      </>
    ),
  },
  {
    ln: 13,
    code: (
      <>
        → SQL Injection{" "}
        <span style={{ color: LIGHT_BG_COLORS.evergreenteal, fontWeight: 700 }}>✓ PASS</span>
      </>
    ),
  },
  {
    ln: 14,
    code: (
      <>
        → CSP Headers{" "}
        <span style={{ color: LIGHT_BG_COLORS.evergreenteal, fontWeight: 700 }}>✓ PASS</span>
      </>
    ),
  },
  {
    ln: 15,
    code: (
      <>
        → Rate Limiting{" "}
        <span style={{ color: LIGHT_BG_COLORS.evergreenteal, fontWeight: 700 }}>✓ PASS</span>
      </>
    ),
  },
];

/* ─── Terminal Component ─────────────────────────────── */
function Terminal() {
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          inset: -28,
          background: `radial-gradient(circle at 50% 50%, ${LIGHT_BG_COLORS.araticcyan}12, transparent 70%)`,
          filter: "blur(16px)",
          pointerEvents: "none",
          borderRadius: 32,
        }}
      />

      <div
        style={{
          position: "absolute",
          zIndex: 20,
          top: -14,
          right: -10,
          background: LIGHT_BG_COLORS.bglt,
          border: `1px solid ${LIGHT_BG_COLORS.border}`,
          borderRadius: 12,
          padding: "9px 14px",
          display: "flex",
          alignItems: "center",
          gap: 8,
          fontFamily: FONT,
          fontSize: 11,
          fontWeight: 700,
          color: LIGHT_BG_COLORS.evergreenteal,
          boxShadow: "0 8px 28px rgba(1,38,53,0.10)",
          animation: "termFloat 4s ease-in-out infinite",
        }}
      >
        <span
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: LIGHT_BG_COLORS.evergreenteal,
            boxShadow: `0 0 10px ${LIGHT_BG_COLORS.evergreenteal}`,
            display: "inline-block",
          }}
        />
        Secure build verified
      </div>

      <div
        style={{
          borderRadius: 20,
          overflow: "hidden",
          background: LIGHT_BG_COLORS.bg2,
          border: `1.5px solid ${LIGHT_BG_COLORS.border}`,
          boxShadow: "0 24px 64px rgba(1,38,53,0.12)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "13px 18px",
            background: LIGHT_BG_COLORS.bglt,
            borderBottom: `1px solid ${LIGHT_BG_COLORS.border}`,
          }}
        >
          <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#FB8500" }} />
          <div style={{ width: 12, height: 12, borderRadius: "50%", background: LIGHT_BG_COLORS.solargold }} />
          <div style={{ width: 12, height: 12, borderRadius: "50%", background: LIGHT_BG_COLORS.evergreenteal }} />
          <span
            style={{
              marginLeft: "auto",
              fontSize: 11,
              fontFamily: "monospace",
              color: LIGHT_BG_COLORS.txt3,
              fontWeight: 600,
            }}
          >
            security-audit.ts
          </span>
        </div>

        <div
          style={{
            padding: "24px",
            fontFamily: "monospace",
            fontSize: 12,
            lineHeight: "1.9",
            color: LIGHT_BG_COLORS.txt1,
          }}
        >
          {TERMINAL_LINES.map(({ ln, code }) => (
            <div key={ln} style={{ display: "flex", gap: 16 }}>
              <span
                style={{
                  width: 20,
                  textAlign: "right",
                  color: LIGHT_BG_COLORS.border,
                  userSelect: "none",
                  flexShrink: 0,
                }}
              >
                {ln}
              </span>
              <span style={{ whiteSpace: "pre" }}>{code}</span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 18px",
            background: LIGHT_BG_COLORS.bglt,
            borderTop: `1px solid ${LIGHT_BG_COLORS.border}`,
          }}
        >
          <span style={{ color: LIGHT_BG_COLORS.txt3, fontSize: 12, fontFamily: "monospace" }}>TypeScript</span>
          <span
            style={{
              color: LIGHT_BG_COLORS.evergreenteal,
              fontSize: 12,
              fontWeight: 700,
              fontFamily: FONT,
            }}
          >
            5 / 5 Passed
          </span>
        </div>
      </div>

      <style>{`
        @keyframes termFloat {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-6px); }
        }
      `}</style>
    </div>
  );
}

/* ─── Main Section ───────────────────────────────────── */
export function Approach() {
  return (
    <section
      style={{
        position: "relative",
        background: LIGHT_BG_COLORS.bg1,
        padding: "clamp(80px,10vw,140px) 0",
        overflow: "hidden",
      }}
    >
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

      <div
        style={{
          position: "absolute",
          left: -100,
          top: "30%",
          width: 380,
          height: 380,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${LIGHT_BG_COLORS.araticcyan}0F, transparent 70%)`,
          filter: "blur(30px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 clamp(20px,4vw,48px)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "clamp(48px,7vw,100px)",
            alignItems: "start",
          }}
        >

          <div>
            <Reveal>
              <span
                style={{
                  fontFamily: FONT,
                  fontSize: 12,
                  fontWeight: 800,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: LIGHT_BG_COLORS.emberorange,
                }}
              >
                How we work
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h2
                style={{
                  fontFamily: FONT,
                  fontSize: "clamp(36px,5vw,64px)",
                  fontWeight: 900,
                  lineHeight: 1,
                  letterSpacing: "-0.05em",
                  color: LIGHT_BG_COLORS.txt1,
                  marginTop: 16,
                  marginBottom: 52,
                }}
              >
                No ambiguity.<br />
                <span style={{ color: LIGHT_BG_COLORS.araticcyan }}>Just execution.</span>
              </h2>
            </Reveal>

            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 100}>
                <div
                  className="approach-step"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "56px 1fr",
                    gap: 20,
                    padding: "22px 0",
                    borderBottom: `1px solid ${LIGHT_BG_COLORS.border}`,
                    cursor: "default",
                  }}
                >

                  <div
                    className="step-badge"
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 14,
                      border: `1.5px solid ${LIGHT_BG_COLORS.border}`,
                      background: LIGHT_BG_COLORS.bglt,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s ease",
                      boxShadow: "0 2px 8px rgba(1,38,53,0.06)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: FONT,
                        fontWeight: 900,
                        fontSize: 13,
                        color: LIGHT_BG_COLORS.txt3,
                        transition: "color 0.3s",
                      }}
                    >
                      {s.n}
                    </span>
                  </div>

                  <div>
                    <h3
                      style={{
                        fontFamily: FONT,
                        fontWeight: 800,
                        fontSize: 16,
                        color: LIGHT_BG_COLORS.txt1,
                        marginBottom: 6,
                      }}
                    >
                      {s.title}
                    </h3>
                    <p
                      style={{
                        color: LIGHT_BG_COLORS.txt2,
                        fontSize: 14,
                        lineHeight: 1.75,
                      }}
                    >
                      {s.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* RIGHT */}
          <Reveal delay={200}>
            <div style={{ position: "sticky", top: 100 }}>
              <Terminal />
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        .approach-step:hover .step-badge {
          background: ${LIGHT_BG_COLORS.emberorange} !important;
          border-color: ${LIGHT_BG_COLORS.emberorange} !important;
        }
        .approach-step:hover .step-badge span {
          color: #fff !important;
        }

        @media (max-width: 600px) {
          .approach-step {
            grid-template-columns: 44px 1fr !important;
            gap: 14px !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Approach;