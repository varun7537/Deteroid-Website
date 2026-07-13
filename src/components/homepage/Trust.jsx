"use client";
import { useReveal } from "../../hooks/useReveal";
import { useState } from "react";
import { LIGHT_BG_COLORS } from "../../styles/tokens";

const ACCENT_CLR = {
  o: {
    stroke:  LIGHT_BG_COLORS.emberorange,
    iconBg:  "rgba(251,133,0,0.09)",
    barEnd:  LIGHT_BG_COLORS.solargold,
  },
  t: {
    stroke:  LIGHT_BG_COLORS.evergreenteal,
    iconBg:  LIGHT_BG_COLORS.bg3,
    barEnd:  LIGHT_BG_COLORS.evergreenteal,
  },
  v: {
    stroke:  LIGHT_BG_COLORS.araticcyan,
    iconBg:  "rgba(33,158,188,0.09)",
    barEnd:  LIGHT_BG_COLORS.araticcyan,
  },
};

const TRUST_CARDS = [
  {
    accent: "o",
    title: "Conversion-Focused",
    body: "Every design decision is made through a conversion lens — layout, copy hierarchy, CTA placement, and friction reduction.",
    icon: <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />,
  },
  {
    accent: "v",
    title: "AI-Native Architecture",
    body: "AI is woven into the stack from day one — intelligent components, automated testing, and AI-powered personalization built in.",
    icon: (
      <>
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </>
    ),
  },
  {
    accent: "t",
    title: "48-Hour Turnaround",
    body: "Fast delivery without compromising on quality. Parallel design and development workflows hit every deadline.",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </>
    ),
  },
  {
    accent: "o",
    title: "Fixed Transparent Pricing",
    body: "One price, everything included. No retainers, no scope creep, no surprise invoices. You know exactly what you're getting.",
    icon: (
      <>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </>
    ),
  },
  {
    accent: "t",
    title: "Security-First Stack",
    body: "OWASP compliance, CSP headers, encrypted data flows, and automated vulnerability scanning ship with every project.",
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  },
  {
    accent: "v",
    title: "Full-Stack Execution",
    body: "Design, front-end, back-end, DevOps, and security — one team, one contract. No vendor management, no handoff gaps.",
    icon: (
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    ),
  },
];

/* ── Responsive CSS injected once ── */
const TRUST_CSS = `
.trust-section-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 56px;
  position: relative;
  z-index: 1;
}

.trust-cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
  background: ${LIGHT_BG_COLORS.border};
  border-radius: 20px;
  overflow: hidden;
  border: 1.5px solid ${LIGHT_BG_COLORS.border};
  box-shadow: 0 8px 40px rgba(2,48,71,0.07), 0 2px 8px rgba(2,48,71,0.04);
}

.trust-card-inner {
  background: ${LIGHT_BG_COLORS.bglt};
  padding: 44px 36px;
  position: relative;
  overflow: hidden;
  transition: background 0.35s ease, box-shadow 0.35s ease;
}
.trust-card-inner:hover {
  background: ${LIGHT_BG_COLORS.bg2};
  box-shadow: 0 12px 40px rgba(2,48,71,0.08), 0 2px 8px rgba(2,48,71,0.04);
}

.trust-heading {
  text-align: center;
  margin-bottom: 80px;
}

/* ── 1024px: 2 columns ── */
@media (max-width: 1024px) {
  .trust-section-inner { padding: 0 36px; }
  .trust-cards-grid    { grid-template-columns: repeat(2, 1fr); }
  .trust-heading       { margin-bottom: 56px; }
}

/* ── 768px: tighten card padding ── */
@media (max-width: 768px) {
  .trust-section-inner { padding: 0 24px; }
  .trust-card-inner    { padding: 32px 24px; }
  .trust-heading       { margin-bottom: 48px; }
}

/* ── 640px: single column ── */
@media (max-width: 640px) {
  .trust-cards-grid    { grid-template-columns: 1fr; border-radius: 16px; }
  .trust-section-inner { padding: 0 16px; }
  .trust-card-inner    { padding: 28px 20px; }
  .trust-heading       { margin-bottom: 40px; }
  .trust-section       { padding: 80px 0 !important; }
}

/* ── 380px: very small ── */
@media (max-width: 380px) {
  .trust-section-inner { padding: 0 12px; }
  .trust-card-inner    { padding: 24px 16px; }
  .trust-section       { padding: 64px 0 !important; }
}
`;

let trustCssInjected = false;

function TrustCard({ accent, title, body, icon }) {
  const [hov, setHov] = useState(false);
  const [ref, visible] = useReveal();
  const { stroke, iconBg, barEnd } = ACCENT_CLR[accent];

  return (
    <div
      ref={ref}
      className="trust-card-inner"
      style={{
        opacity:   visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: "background 0.35s ease, box-shadow 0.35s ease, opacity 0.6s ease, transform 0.6s ease",
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {/* Top accent bar */}
      <div
        style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 2,
          background: `linear-gradient(90deg, ${LIGHT_BG_COLORS.emberorange}, ${barEnd})`,
          transform: hov ? "scaleX(1)" : "scaleX(0)",
          transition: "transform 0.4s cubic-bezier(0.4,0,0.2,1)",
          transformOrigin: "left",
        }}
      />

      {/* Icon */}
      <div
        style={{
          width: 48, height: 48, borderRadius: 14,
          background: iconBg,
          border: `1px solid ${hov ? stroke + "30" : LIGHT_BG_COLORS.border}`,
          display: "flex", alignItems: "center", justifyContent: "center",
          marginBottom: 24,
          transform: hov ? "scale(1.08) rotate(-4deg)" : "none",
          transition: "transform 0.3s ease, border-color 0.3s ease",
        }}
      >
        <svg viewBox="0 0 24 24" style={{ width: 22, height: 22, stroke, strokeWidth: 2, fill: "none", strokeLinecap: "round", strokeLinejoin: "round" }}>
          {icon}
        </svg>
      </div>

      <h3
        style={{
          fontFamily: LIGHT_BG_COLORS.outfit,
          fontSize: 17, fontWeight: 700,
          color: LIGHT_BG_COLORS.txt1,
          lineHeight: 1.3, marginBottom: 10,
        }}
      >
        {title}
      </h3>

      <p
        style={{
          fontFamily: LIGHT_BG_COLORS.body,
          fontSize: 14.5, lineHeight: 1.7,
          color: LIGHT_BG_COLORS.txt2,
        }}
      >
        {body}
      </p>

      {/* Corner dot */}
      <div
        style={{
          position: "absolute", bottom: 20, right: 24,
          width: 6, height: 6, borderRadius: "50%",
          background: stroke,
          opacity: hov ? 0.35 : 0.12,
          transition: "opacity 0.3s ease",
        }}
      />
    </div>
  );
}

function Trust() {
  const [ref, visible] = useReveal();

  // Inject CSS once
  if (!trustCssInjected && typeof document !== "undefined") {
    const style = document.createElement("style");
    style.textContent = TRUST_CSS;
    document.head.appendChild(style);
    trustCssInjected = true;
  }

  return (
    <section
      id="trust"
      className="trust-section"
      style={{
        background: LIGHT_BG_COLORS.bg1,
        padding: "120px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Blobs */}
      <div
        style={{
          position: "absolute", top: -80, right: -60,
          width: 400, height: 400, borderRadius: "50%",
          background: "rgba(33,158,188,0.05)",
          filter: "blur(80px)", pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute", bottom: -60, left: -40,
          width: 320, height: 320, borderRadius: "50%",
          background: "rgba(64,138,113,0.05)",
          filter: "blur(70px)", pointerEvents: "none",
        }}
      />

      <div className="trust-section-inner">

        {/* Header */}
        <div
          ref={ref}
          className="trust-heading"
          style={{
            opacity:   visible ? 1 : 0,
            transform: visible ? "none" : "translateY(30px)",
            transition: "all 0.75s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          <span
            style={{
              fontFamily: LIGHT_BG_COLORS.outfit,
              fontSize: 11, fontWeight: 700,
              letterSpacing: "0.18em", textTransform: "uppercase",
              color: LIGHT_BG_COLORS.emberorange,
              display: "block", marginBottom: 20,
            }}
          >
            Why teams choose Deteroid
          </span>

          <h2
            style={{
              fontFamily: LIGHT_BG_COLORS.outfit,
              fontSize: "clamp(32px, 4.5vw, 60px)",
              fontWeight: 700, lineHeight: 1,
              letterSpacing: "-0.03em",
              color: LIGHT_BG_COLORS.txt1,
              maxWidth: 520, margin: "0 auto 20px",
            }}
          >
            Built for{" "}
            <span style={{ color: LIGHT_BG_COLORS.araticcyan }}>conversion.</span>
            <br />
            Secured from day one.
          </h2>

          <p
            style={{
              fontFamily: LIGHT_BG_COLORS.body,
              fontSize: 15, fontWeight: 400,
              color: LIGHT_BG_COLORS.txt3,
              maxWidth: 420, margin: "0 auto",
              lineHeight: 1.65,
            }}
          >
            Every decision — from the stack to the pixel — is made with one goal:{" "}
            <strong style={{ color: LIGHT_BG_COLORS.txt2, fontWeight: 600 }}>
              results that last.
            </strong>
          </p>
        </div>

        {/* Cards grid */}
        <div className="trust-cards-grid">
          {TRUST_CARDS.map((card) => (
            <TrustCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Trust;
