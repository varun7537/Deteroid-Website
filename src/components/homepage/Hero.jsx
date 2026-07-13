"use client";
import React, { useState, useEffect, useRef } from "react";
import { LIGHT_BG_COLORS } from "../../styles/tokens";

const F = {
  display: "'Outfit', sans-serif",
  body:    "'DM Sans', sans-serif",
  mono:    "'Fira Code', 'DM Mono', 'Courier New', monospace",
};

const GLOBAL_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

@keyframes float-blob {
  0%,100% { transform: translate(0,0) scale(1); }
  33%      { transform: translate(20px,-24px) scale(1.05); }
  66%      { transform: translate(-16px,16px) scale(0.97); }
}
@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
@keyframes float-gentle {
  0%,100% { transform: translateY(0px); }
  50%      { transform: translateY(-14px); }
}
@keyframes float-badge {
  0%,100% { transform: translateY(0px); }
  50%      { transform: translateY(-6px); }
}
@keyframes pulse-ring {
  0%   { transform: scale(0.85); opacity: 0.8; }
  70%  { transform: scale(1.15); opacity: 0; }
  100% { transform: scale(1.15); opacity: 0; }
}
@keyframes blink {
  0%,100% { opacity: 1; }
  50%      { opacity: 0; }
}

/* Ghost word */
.hero-ghost-word {
  position: absolute;
  right: -20px;
  top: 50%;
  transform: translateY(calc(-50% + var(--ghost-y, 0px)));
  font-family: 'Outfit', sans-serif;
  font-size: clamp(80px, 17vw, 260px);
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.05em;
  white-space: nowrap;
  user-select: none;
  pointer-events: none;
  color: transparent;
  -webkit-text-stroke: 1.5px rgba(33,158,188,0.10);
  z-index: 0;
  will-change: transform;
}

/* Layout grid — 2 cols on desktop */
.hero-grid {
  display: grid;
  grid-template-columns: 54fr 46fr;
  gap: 72px;
  align-items: center;
}

/* Stat bar */
.stat-item {
  padding: 13px 24px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

/* Editor tab */
.editor-tab {
  padding: 9px 16px;
  font-size: 12px;
  font-family: 'DM Sans', sans-serif;
  cursor: default;
  user-select: none;
  transition: background 0.2s;
}

/* Badges on editor */
.editor-badge-top {
  position: absolute;
  top: -20px;
  right: -14px;
  z-index: 2;
  background: ${LIGHT_BG_COLORS.bglt};
  border: 1.5px solid ${LIGHT_BG_COLORS.border};
  border-radius: 10px;
  padding: 9px 15px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-weight: 600;
  color: ${LIGHT_BG_COLORS.evergreenteal};
  font-family: 'DM Sans', sans-serif;
  box-shadow: 0 8px 28px rgba(2,48,71,0.09);
  animation: float-badge 4s ease-in-out infinite;
}

.editor-badge-bottom {
  position: absolute;
  bottom: -18px;
  left: -16px;
  z-index: 2;
  background: ${LIGHT_BG_COLORS.bglt};
  border: 1.5px solid ${LIGHT_BG_COLORS.border};
  border-radius: 10px;
  padding: 9px 15px;
  font-size: 12px;
  font-weight: 600;
  color: ${LIGHT_BG_COLORS.solargold};
  font-family: 'DM Sans', sans-serif;
  box-shadow: 0 8px 28px rgba(2,48,71,0.09);
  animation: float-badge 5s 2s ease-in-out infinite;
}

/* CTA hovers */
.cta-primary {
  transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
}
.cta-primary:hover {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 16px 44px rgba(33,158,188,0.38) !important;
  background: #1B88A2 !important;
}
.cta-secondary {
  transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease, transform 0.25s ease;
}
.cta-secondary:hover {
  background: #023047 !important;
  color: #FFFFFF !important;
  border-color: #023047 !important;
  transform: translateY(-2px);
}

/* ── Responsive: 1280px container padding reduction ── */
@media (max-width: 1280px) {
  .hero-inner { padding: 80px 36px !important; }
  .hero-grid  { gap: 48px; }
}

/* ── Responsive: collapse to single column below 1024px ── */
@media (max-width: 1024px) {
  .hero-grid {
    grid-template-columns: 1fr;
    gap: 52px;
  }
  .hero-ghost-word {
    right: -10px;
    font-size: clamp(60px, 13vw, 140px);
    top: 70px;
    transform: none;
  }
  .hero-editor-col { order: -1; }
  .hero-inner { padding: 72px 36px !important; }
  /* Move editor badges to be less aggressive on medium screens */
  .editor-badge-top    { top: -14px; right: -8px; }
  .editor-badge-bottom { bottom: -14px; left: -8px; }
}

/* ── Responsive: tablet ── */
@media (max-width: 768px) {
  .hero-ghost-word {
    font-size: clamp(52px, 14vw, 100px);
    right: -6px;
    top: 50px;
  }
  .hero-inner { padding: 56px 24px !important; }
  .hero-stat-bar {
    flex-wrap: wrap !important;
    width: 100% !important;
    border-radius: 12px !important;
  }
  .stat-item {
    flex: 1 1 calc(33.333% - 2px);
    min-width: 90px;
    border-right: none !important;
    border-bottom: 1px solid ${LIGHT_BG_COLORS.border} !important;
    padding: 12px 16px !important;
  }
  .stat-item:last-child { border-bottom: none !important; }
  /* Reduce editor badge font on tablet */
  .editor-badge-top,
  .editor-badge-bottom { font-size: 11px; padding: 7px 12px; }
}

/* ── Responsive: mobile ── */
@media (max-width: 640px) {
  .hero-ghost-word {
    font-size: clamp(44px, 16vw, 80px);
    right: -4px;
    top: 36px;
    -webkit-text-stroke: 1px rgba(33,158,188,0.08);
  }
  .hero-inner { padding: 48px 16px !important; }

  /* Stack CTAs vertically */
  .hero-cta-row {
    flex-direction: column !important;
    align-items: stretch !important;
    gap: 10px !important;
  }
  .hero-cta-row a {
    justify-content: center !important;
    width: 100% !important;
    text-align: center !important;
  }

  /* Stat bar vertical on mobile */
  .hero-stat-bar {
    flex-direction: column !important;
    width: 100% !important;
    border-radius: 12px !important;
  }
  .stat-item {
    flex: unset !important;
    width: 100% !important;
    border-right: none !important;
    border-bottom: 1px solid ${LIGHT_BG_COLORS.border} !important;
    padding: 12px 18px !important;
  }
  .stat-item:last-child { border-bottom: none !important; }

  /* Editor badge adjustments on mobile — pull back so they don't overflow */
  .editor-badge-top {
    top: -12px;
    right: -4px;
    font-size: 10px;
    padding: 6px 10px;
    gap: 6px;
  }
  .editor-badge-bottom {
    bottom: -12px;
    left: -4px;
    font-size: 10px;
    padding: 6px 10px;
  }

  /* Reduce editor code font slightly on mobile */
  .hero-editor-code { font-size: 11px !important; }

  /* Editor grid: hide line numbers to save space */
  .editor-line-number { display: none !important; }

  /* Reduce hero grid gap */
  .hero-grid { gap: 40px !important; }
}

/* ── Responsive: very small mobile ── */
@media (max-width: 380px) {
  .hero-inner { padding: 40px 14px !important; }
  .hero-ghost-word { font-size: 40px; }
  .cta-primary, .cta-secondary {
    font-size: 14px !important;
    padding: 13px 22px !important;
  }
  .editor-badge-top,
  .editor-badge-bottom { display: none; }
}
`;

const EDITOR_LINES = [
  {
    ln: 1,
    code: <span style={{ color: "#8BAAB6" }}>{"// Deteroid — Production Component"}</span>,
  },
  {
    ln: 2,
    code: (
      <>
        <span style={{ color: LIGHT_BG_COLORS.araticcyan }}>import</span>
        <span style={{ color: LIGHT_BG_COLORS.txt3 }}>{" { "}</span>
        <span style={{ color: LIGHT_BG_COLORS.emberorange }}>useState</span>
        <span style={{ color: LIGHT_BG_COLORS.txt3 }}>, </span>
        <span style={{ color: LIGHT_BG_COLORS.emberorange }}>useEffect</span>
        <span style={{ color: LIGHT_BG_COLORS.txt3 }}>{" } "}</span>
        <span style={{ color: LIGHT_BG_COLORS.araticcyan }}>from</span>
        <span style={{ color: LIGHT_BG_COLORS.evergreenteal }}>{" 'react'"}</span>
      </>
    ),
  },
  {
    ln: 3,
    code: (
      <>
        <span style={{ color: LIGHT_BG_COLORS.araticcyan }}>import</span>
        <span style={{ color: LIGHT_BG_COLORS.txt3 }}>{" { "}</span>
        <span style={{ color: LIGHT_BG_COLORS.emberorange }}>sanitize</span>
        <span style={{ color: LIGHT_BG_COLORS.txt3 }}>, </span>
        <span style={{ color: LIGHT_BG_COLORS.emberorange }}>csrf</span>
        <span style={{ color: LIGHT_BG_COLORS.txt3 }}>{" } "}</span>
        <span style={{ color: LIGHT_BG_COLORS.araticcyan }}>from</span>
        <span style={{ color: LIGHT_BG_COLORS.evergreenteal }}>{" '@/lib/security'"}</span>
      </>
    ),
  },
  { ln: 4, code: "" },
  {
    ln: 5,
    code: (
      <>
        <span style={{ color: LIGHT_BG_COLORS.araticcyan }}>{"export const "}</span>
        <span style={{ color: LIGHT_BG_COLORS.emberorange }}>ConversionForm</span>
        <span style={{ color: LIGHT_BG_COLORS.txt3 }}>{" = () => {"}</span>
      </>
    ),
  },
  {
    ln: 6,
    code: (
      <>
        <span style={{ color: LIGHT_BG_COLORS.araticcyan }}>{" const "}</span>
        <span style={{ color: LIGHT_BG_COLORS.txt3 }}>[</span>
        <span style={{ color: LIGHT_BG_COLORS.txt1, fontWeight: 500 }}>rate</span>
        <span style={{ color: LIGHT_BG_COLORS.txt3 }}>, </span>
        <span style={{ color: LIGHT_BG_COLORS.emberorange }}>setRate</span>
        <span style={{ color: LIGHT_BG_COLORS.txt3 }}>]</span>
        <span style={{ color: LIGHT_BG_COLORS.araticcyan }}>{" = "}</span>
        <span style={{ color: LIGHT_BG_COLORS.emberorange }}>useState</span>
        <span style={{ color: LIGHT_BG_COLORS.txt3 }}>(</span>
        <span style={{ color: LIGHT_BG_COLORS.solargold }}>0</span>
        <span style={{ color: LIGHT_BG_COLORS.txt3 }}>)</span>
      </>
    ),
  },
  {
    ln: 7,
    code: (
      <>
        <span style={{ color: LIGHT_BG_COLORS.emberorange }}>{" useEffect"}</span>
        <span style={{ color: LIGHT_BG_COLORS.txt3 }}>{" (() => {"}</span>
      </>
    ),
  },
  {
    ln: 8,
    code: (
      <>
        <span style={{ color: LIGHT_BG_COLORS.emberorange }}>{" trackConversion"}</span>
        <span style={{ color: LIGHT_BG_COLORS.txt3 }}>{"({"}</span>
        <span style={{ color: LIGHT_BG_COLORS.txt1, fontWeight: 500 }}> secure</span>
        <span style={{ color: LIGHT_BG_COLORS.txt3 }}>:</span>
        <span style={{ color: LIGHT_BG_COLORS.araticcyan }}> true</span>
        <span style={{ color: LIGHT_BG_COLORS.txt3 }}>{" })"}</span>
      </>
    ),
  },
  {
    ln: 9,
    code: <span style={{ color: LIGHT_BG_COLORS.txt3 }}>{" }, [])"}</span>,
  },
  {
    ln: 10,
    code: (
      <>
        <span style={{ color: LIGHT_BG_COLORS.araticcyan }}>{" return "}</span>
        <span style={{ color: LIGHT_BG_COLORS.txt3 }}>(</span>
      </>
    ),
  },
  {
    ln: 11,
    code: (
      <>
        <span style={{ color: LIGHT_BG_COLORS.txt3 }}>&nbsp;&nbsp;&lt;</span>
        <span style={{ color: LIGHT_BG_COLORS.emberorange }}>SecureForm</span>
        <span style={{ color: LIGHT_BG_COLORS.txt2, fontWeight: 500 }}> csrf</span>
        <span style={{ color: LIGHT_BG_COLORS.txt3 }}>{"={"}</span>
        <span style={{ color: LIGHT_BG_COLORS.emberorange }}>csrf</span>
        <span style={{ color: LIGHT_BG_COLORS.txt3 }}>{"()}"}&gt;</span>
        <span
          style={{
            display: "inline-block",
            width: 2,
            height: 13,
            background: LIGHT_BG_COLORS.araticcyan,
            verticalAlign: "middle",
            marginLeft: 2,
            animation: "blink 1.1s step-end infinite",
          }}
        />
      </>
    ),
  },
];

function HeroEditor() {
  return (
    <div style={{ position: "relative" }}>
      {/* Badge: Security */}
      <div className="editor-badge-top">
        <span style={{ position: "relative", width: 10, height: 10, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{
            position: "absolute", inset: 0, borderRadius: "50%",
            background: LIGHT_BG_COLORS.evergreenteal, opacity: 0.25,
            animation: "pulse-ring 1.8s ease-out infinite",
          }} />
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: LIGHT_BG_COLORS.evergreenteal, display: "block", position: "relative" }} />
        </span>
        Security scan passed ✓
      </div>

      {/* Badge: Turnaround */}
      <div className="editor-badge-bottom">
        ⚡ 48h turnaround
      </div>

      {/* Editor chrome */}
      <div
        style={{
          background: LIGHT_BG_COLORS.bglt,
          border: `1.5px solid ${LIGHT_BG_COLORS.border}`,
          borderRadius: 20,
          overflow: "hidden",
          boxShadow: `0 2px 0 rgba(255,255,255,0.9) inset,
                      0 28px 80px rgba(2,48,71,0.12),
                      0 4px 16px rgba(2,48,71,0.06)`,
        }}
      >
        {/* Title bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "13px 18px",
            borderBottom: `1px solid ${LIGHT_BG_COLORS.border}`,
            background: LIGHT_BG_COLORS.bg2,
          }}
        >
          <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#FF5F57" }} />
          <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#FEBC2E" }} />
          <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#28C840" }} />
          <span style={{ marginLeft: "auto", fontSize: 11, color: LIGHT_BG_COLORS.txt3, fontFamily: F.mono, letterSpacing: "0.04em" }}>
            ConversionForm.tsx
          </span>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", borderBottom: `1px solid ${LIGHT_BG_COLORS.border}`, background: LIGHT_BG_COLORS.bg1, overflowX: "auto" }}>
          {[
            ["Component.tsx", true],
            ["styles.css",    false],
            ["security.ts",   false],
          ].map(([tab, active]) => (
            <div
              key={tab}
              className="editor-tab"
              style={{
                color:        active ? LIGHT_BG_COLORS.araticcyan : LIGHT_BG_COLORS.txt3,
                borderRight:  `1px solid ${LIGHT_BG_COLORS.border}`,
                borderBottom: active ? `2px solid ${LIGHT_BG_COLORS.araticcyan}` : "2px solid transparent",
                background:   active ? LIGHT_BG_COLORS.bglt : "transparent",
                fontWeight:   active ? 600 : 400,
                whiteSpace:   "nowrap",
              }}
            >
              {tab}
            </div>
          ))}
        </div>

        {/* Code */}
        <div
          className="hero-editor-code"
          style={{
            padding: "20px 22px",
            fontFamily: F.mono,
            fontSize: 12.5,
            lineHeight: 1.9,
            background: LIGHT_BG_COLORS.bglt,
            overflowX: "auto",
          }}
        >
          {EDITOR_LINES.map(({ ln, code }) => (
            <div key={ln} style={{ display: "flex", gap: 18 }}>
              <span
                className="editor-line-number"
                style={{ color: LIGHT_BG_COLORS.border, fontSize: 11, width: 22, textAlign: "right", flexShrink: 0, userSelect: "none" }}
              >
                {ln}
              </span>
              <span style={{ whiteSpace: "pre" }}>{code}</span>
            </div>
          ))}
        </div>

        {/* Status bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "8px 18px",
            borderTop: `1px solid ${LIGHT_BG_COLORS.border}`,
            background: LIGHT_BG_COLORS.bgd,
            flexWrap: "wrap",
            gap: 8,
          }}
        >
          <div style={{ display: "flex", gap: 16, fontSize: 11, color: "rgba(183,215,226,0.7)", fontFamily: F.body }}>
            <span>TypeScript</span>
            <span>UTF-8</span>
            <span>Ln 11</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, fontWeight: 600, color: LIGHT_BG_COLORS.evergreenteal, fontFamily: F.body }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: LIGHT_BG_COLORS.evergreenteal, display: "inline-block" }} />
            All checks passed
          </div>
        </div>
      </div>
    </div>
  );
}

const BLOBS = [
  { w: 520, h: 520, bg: "rgba(33,158,188,0.07)",  pos: { top: -120, right: -80   }, delay: "0s"  },
  { w: 380, h: 380, bg: "rgba(2,48,71,0.04)",     pos: { bottom: -60, left: "4%" }, delay: "-3s" },
  { w: 280, h: 280, bg: "rgba(64,138,113,0.06)",  pos: { top: "38%", right: "18%" }, delay: "-5s" },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const ghostRef = useRef(null);
  useEffect(() => {
    const el = ghostRef.current;
    if (!el) return;
    const onScroll = () => {
      el.style.setProperty("--ghost-y", `${window.scrollY * 0.07}px`);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const fadeUp = (delay) => ({
    opacity:   mounted ? 1 : 0,
    transform: mounted ? "none" : "translateY(20px)",
    transition: `opacity 0.85s cubic-bezier(0.16,1,0.3,1) ${delay}s,
                 transform 0.85s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
  });

  return (
    <>
      <style>{GLOBAL_CSS}</style>

      <section
        id="hero"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          paddingTop: 96,
          position: "relative",
          overflow: "hidden",
          background: LIGHT_BG_COLORS.bg1,
        }}
      >
        {/* Ghost word */}
        <div ref={ghostRef} className="hero-ghost-word" aria-hidden="true">BUILD</div>

        {/* Blobs */}
        {BLOBS.map((b, i) => (
          <div
            key={i}
            style={{
              position: "absolute", borderRadius: "50%", filter: "blur(80px)",
              pointerEvents: "none", zIndex: 0,
              width: b.w, height: b.h, background: b.bg,
              ...b.pos, animation: `float-blob 9s ${b.delay} ease-in-out infinite`,
            }}
          />
        ))}

        {/* Geometric accents */}
        <div style={{ position: "absolute", top: "16%", right: "7%", width: 110, height: 110, border: `1.5px solid rgba(33,158,188,0.18)`, borderRadius: "30%", animation: "spin-slow 22s linear infinite", pointerEvents: "none", zIndex: 0 }} />
        <div style={{ position: "absolute", top: "58%", left: "3%", width: 56, height: 56, background: LIGHT_BG_COLORS.araticcyan, opacity: 0.07, borderRadius: 10, animation: "float-gentle 7s ease-in-out infinite", pointerEvents: "none", zIndex: 0 }} />
        <div style={{ position: "absolute", bottom: "22%", right: "13%", width: 74, height: 74, border: `1.5px solid rgba(2,48,71,0.10)`, borderRadius: "50%", animation: "float-gentle 9s ease-in-out infinite reverse", pointerEvents: "none", zIndex: 0 }} />
        <div style={{ position: "absolute", top: "33%", left: "48%", width: 9, height: 9, background: LIGHT_BG_COLORS.evergreenteal, opacity: 0.40, borderRadius: "50%", animation: "float-gentle 5s ease-in-out infinite", pointerEvents: "none", zIndex: 0 }} />
        <div style={{ position: "absolute", top: "72%", right: "38%", width: 6, height: 6, background: LIGHT_BG_COLORS.solargold, opacity: 0.50, borderRadius: "50%", animation: "float-gentle 6s 2s ease-in-out infinite reverse", pointerEvents: "none", zIndex: 0 }} />

        {/* Dot grid */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0, backgroundImage: `linear-gradient(rgba(33,158,188,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(33,158,188,0.04) 1px, transparent 1px)`, backgroundSize: "72px 72px" }} />

        {/* Content */}
        <div
          className="hero-inner"
          style={{
            maxWidth: 1280, margin: "0 auto",
            padding: "80px 56px", width: "100%",
            position: "relative", zIndex: 1,
          }}
        >
          <div className="hero-grid">

            {/* LEFT — copy */}
            <div style={{ position: "relative", zIndex: 1 }}>

              {/* Eyebrow pill */}
              <div
                style={{
                  display: "inline-flex", alignItems: "center", gap: 10,
                  marginBottom: 32, background: LIGHT_BG_COLORS.bg2,
                  border: `1px solid ${LIGHT_BG_COLORS.border}`, borderRadius: 50,
                  padding: "6px 16px 6px 10px", ...fadeUp(0.1),
                }}
              >
                <span style={{ width: 22, height: 22, borderRadius: "50%", background: LIGHT_BG_COLORS.araticcyan, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width={10} height={10} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span style={{ fontFamily: F.body, fontSize: 12, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: LIGHT_BG_COLORS.araticcyan }}>
                  DETEROID
                </span>
              </div>

              {/* Headline */}
              <h1
                style={{
                  fontFamily: F.display,
                  fontSize: "clamp(44px, 6.5vw, 108px)",
                  fontWeight: 800,
                  lineHeight: 0.92,
                  letterSpacing: "-0.04em",
                  color: LIGHT_BG_COLORS.txt1,
                  marginBottom: 0,
                }}
              >
                {[
                  { word: "Design.", accent: false,          delay: 0.10 },
                  { word: "Code.",   accent: "araticcyan",   delay: 0.22 },
                  { word: "Secure.", accent: false,          delay: 0.34 },
                ].map(({ word, accent, delay }) => (
                  <span key={word} style={{ display: "block", overflow: "hidden" }}>
                    <span
                      style={{
                        display: "block",
                        color: accent ? LIGHT_BG_COLORS.araticcyan : LIGHT_BG_COLORS.txt1,
                        opacity:   mounted ? 1 : 0,
                        transform: mounted ? "translateY(0)" : "translateY(110%)",
                        transition: `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
                        position: "relative",
                      }}
                    >
                      {word}
                      {accent && (
                        <span
                          style={{
                            position: "absolute", bottom: 6, left: 0, width: "100%", height: 8,
                            background: `linear-gradient(90deg, rgba(33,158,188,0.18), ${LIGHT_BG_COLORS.bg3} 90%)`,
                            borderRadius: 4, zIndex: -1,
                          }}
                        />
                      )}
                    </span>
                  </span>
                ))}
              </h1>

              {/* Subtitle */}
              <p
                style={{
                  fontFamily: F.body, fontSize: 17, lineHeight: 1.75,
                  color: LIGHT_BG_COLORS.txt2, maxWidth: 460,
                  marginTop: 28, marginBottom: 40, ...fadeUp(0.5),
                }}
              >
                We build conversion-optimized websites with security baked in — not bolted on.{" "}
                <strong style={{ color: LIGHT_BG_COLORS.txt1, fontWeight: 600 }}>
                  Fixed price. 48-hour turnaround.
                </strong>{" "}
                No surprises, no retainers.
              </p>

              {/* CTAs */}
              <div
                className="hero-cta-row"
                style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap", ...fadeUp(0.62) }}
              >
                <a
                  href="#cta"
                  className="cta-primary"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 9,
                    fontFamily: F.display, fontSize: 15, fontWeight: 700,
                    padding: "15px 30px", borderRadius: 50,
                    background: LIGHT_BG_COLORS.araticcyan, color: LIGHT_BG_COLORS.bglt,
                    textDecoration: "none", whiteSpace: "nowrap",
                    boxShadow: "0 8px 28px rgba(33,158,188,0.30)", border: "none",
                  }}
                >
                  Get Started
                  <svg width={14} height={14} fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>

                <a
                  href="#cta"
                  className="cta-secondary"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 9,
                    fontFamily: F.display, fontSize: 15, fontWeight: 600,
                    padding: "14px 30px", borderRadius: 50,
                    border: `1.5px solid ${LIGHT_BG_COLORS.border}`,
                    color: LIGHT_BG_COLORS.txt1, background: "transparent",
                    textDecoration: "none", whiteSpace: "nowrap",
                  }}
                >
                  Schedule a Call
                </a>
              </div>

              {/* Stats bar */}
              <div
                className="hero-stat-bar"
                style={{
                  display: "flex", marginTop: 36,
                  border: `1.5px solid ${LIGHT_BG_COLORS.border}`,
                  borderRadius: 14, overflow: "hidden",
                  width: "fit-content", background: LIGHT_BG_COLORS.bglt,
                  boxShadow: "0 2px 12px rgba(2,48,71,0.05)",
                  ...fadeUp(0.74),
                }}
              >
                {[
                  { val: "47+",  lbl: "Projects delivered", color: LIGHT_BG_COLORS.araticcyan    },
                  { val: "100%", lbl: "Fixed pricing",       color: LIGHT_BG_COLORS.solargold     },
                  { val: "48h",  lbl: "Avg. delivery",       color: LIGHT_BG_COLORS.evergreenteal },
                ].map(({ val, lbl, color }, i, arr) => (
                  <div
                    key={lbl}
                    className="stat-item"
                    style={{ borderRight: i < arr.length - 1 ? `1px solid ${LIGHT_BG_COLORS.border}` : "none" }}
                  >
                    <strong style={{ fontFamily: F.display, fontSize: 20, fontWeight: 800, color, lineHeight: 1 }}>
                      {val}
                    </strong>
                    <span style={{ fontFamily: F.body, fontSize: 11, color: LIGHT_BG_COLORS.txt3, fontWeight: 500, marginTop: 2 }}>
                      {lbl}
                    </span>
                  </div>
                ))}
              </div>

              {/* Trust strip */}
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 20, ...fadeUp(0.82) }}>
                {[
                  { bg: LIGHT_BG_COLORS.araticcyan,    initials: "AJ" },
                  { bg: LIGHT_BG_COLORS.evergreenteal, initials: "MK" },
                  { bg: LIGHT_BG_COLORS.solargold,     initials: "+"  },
                ].map(({ bg, initials }, i) => (
                  <div
                    key={i}
                    style={{
                      width: 26, height: 26, borderRadius: "50%",
                      background: `${bg}22`,
                      border: `2px solid ${LIGHT_BG_COLORS.bglt}`,
                      marginLeft: i === 0 ? 0 : -8,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 10, fontWeight: 700, color: bg, fontFamily: F.display,
                    }}
                  >
                    {initials}
                  </div>
                ))}
                <span style={{ marginLeft: 6, fontFamily: F.body, fontSize: 12, color: LIGHT_BG_COLORS.txt3 }}>
                  Trusted by{" "}
                  <strong style={{ color: LIGHT_BG_COLORS.txt2, fontWeight: 600 }}>200+ founders</strong>
                </span>
              </div>
            </div>

            {/* RIGHT — editor */}
            <div
              className="hero-editor-col"
              style={{ position: "relative", zIndex: 1, ...fadeUp(0.4) }}
            >
              <div style={{ position: "absolute", inset: -32, background: `radial-gradient(ellipse at 55% 45%, rgba(33,158,188,0.09), transparent 68%)`, pointerEvents: "none", zIndex: -1 }} />
              <HeroEditor />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
