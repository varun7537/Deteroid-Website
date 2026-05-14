import React, { useState } from "react";
import { useReveal } from "../../hooks/useReveal";
import { LIGHT_BG_COLORS } from "../../styles/tokens";

const CTA_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:opsz,wght@9..40,400;9..40,500&display=swap');

@keyframes cta-pulse-ring {
  0%   { transform: scale(0.92); opacity: 0.6; }
  70%  { transform: scale(1.12); opacity: 0; }
  100% { transform: scale(1.12); opacity: 0; }
}
@keyframes cta-float {
  0%,100% { transform: translateY(0px); }
  50%      { transform: translateY(-8px); }
}
@keyframes cta-spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

/* ── Outer section ── */
.cta-section {
  padding: 120px 0;
  background: ${LIGHT_BG_COLORS.bg1};
  position: relative;
  overflow: hidden;
}
.cta-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 56px;
  position: relative;
  z-index: 1;
}

/* ── Card ── */
.cta-card {
  background: ${LIGHT_BG_COLORS.bgd};
  border-radius: 32px;
  padding: 100px 80px;
  text-align: center;
  position: relative;
  overflow: hidden;
  /* Multi-layer shadow: deep navy lifts off bg1 canvas */
  box-shadow:
    0 2px 0 rgba(255,255,255,0.06) inset,
    0 40px 100px rgba(2,48,71,0.22),
    0 8px 24px rgba(2,48,71,0.12);
}

/* ── CTA button ── */
.cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: 'Syne', sans-serif;
  font-size: 16px;
  font-weight: 700;
  padding: 20px 52px;
  border-radius: 50px;
  background: ${LIGHT_BG_COLORS.emberorange};
  color: #fff;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
  box-shadow: 0 12px 40px rgba(251,133,0,0.40);
}
.cta-btn:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 20px 60px rgba(251,133,0,0.55);
  background: #e67600;
}
.cta-btn svg {
  transition: transform 0.25s ease;
}
.cta-btn:hover svg {
  transform: translateX(4px);
}

/* ── Trust signals row ── */
.cta-trust {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  margin-top: 36px;
  flex-wrap: wrap;
}

/* ── Decorative ring accent ── */
.cta-ring {
  position: absolute;
  border-radius: 50%;
  border: 1px solid rgba(33,158,188,0.12);
  pointer-events: none;
}

/* ── Section ambient blobs (on bg1 canvas) ── */
.cta-section-blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
  z-index: 0;
}

/* ── Responsive ── */
@media (max-width: 1024px) {
  .cta-inner { padding: 0 36px; }
  .cta-card  { padding: 80px 56px; border-radius: 28px; }
}
@media (max-width: 768px) {
  .cta-section { padding: 80px 0; }
  .cta-inner   { padding: 0 24px; }
  .cta-card    { padding: 64px 36px; border-radius: 24px; }
}
@media (max-width: 480px) {
  .cta-section { padding: 60px 0; }
  .cta-inner   { padding: 0 16px; }
  .cta-card    { padding: 52px 24px; border-radius: 20px; }
  .cta-btn     { padding: 17px 36px; font-size: 15px; width: 100%; justify-content: center; }
  .cta-trust   { gap: 16px; }
}
`;

function CTA() {
  const [ref, visible] = useReveal();

  return (
    <>
      <style>{CTA_CSS}</style>

      <section id="cta" className="cta-section">

        <div className="cta-section-blob" style={{ top: -60, right: -40, width: 360, height: 360, background: "rgba(33,158,188,0.07)" }} />
        <div className="cta-section-blob" style={{ bottom: -60, left: -40, width: 300, height: 300, background: "rgba(251,133,0,0.06)" }} />

        <div className="cta-inner">
          <div
            ref={ref}
            className="cta-card"
            style={{
              opacity:    visible ? 1 : 0,
              transform:  visible ? "none" : "translateY(30px)",
              transition: "opacity 0.75s cubic-bezier(0.16,1,0.3,1), transform 0.75s cubic-bezier(0.16,1,0.3,1)",
            }}
          >

            <div style={{
              position: "absolute", top: -200, right: -200,
              width: 600, height: 600,
              background: "radial-gradient(circle, rgba(251,133,0,0.16), transparent 68%)",
              pointerEvents: "none",
            }} />

            <div style={{
              position: "absolute", bottom: -200, left: -200,
              width: 520, height: 520,
              background: "radial-gradient(circle, rgba(33,158,188,0.12), transparent 68%)",
              pointerEvents: "none",
            }} />

            <div style={{
              position: "absolute", bottom: -120, right: "15%",
              width: 320, height: 320,
              background: "radial-gradient(circle, rgba(64,138,113,0.07), transparent 70%)",
              pointerEvents: "none",
            }} />

            <div className="cta-ring" style={{ top: 32, left: 40, width: 80, height: 80, animation: "cta-spin 20s linear infinite" }} />
            <div className="cta-ring" style={{ bottom: 36, right: 56, width: 56, height: 56, borderColor: "rgba(255,183,3,0.14)", animation: "cta-float 7s ease-in-out infinite" }} />
            <div style={{ position: "absolute", top: "40%", left: 52, width: 7, height: 7, borderRadius: "50%", background: LIGHT_BG_COLORS.evergreenteal, opacity: 0.40, animation: "cta-float 5s ease-in-out infinite", pointerEvents: "none" }} />
            <div style={{ position: "absolute", top: "30%", right: 60, width: 5, height: 5, borderRadius: "50%", background: LIGHT_BG_COLORS.emberorange, opacity: 0.50, animation: "cta-float 6s 1.5s ease-in-out infinite reverse", pointerEvents: "none" }} />


            <div style={{
              position: "absolute", inset: 0, pointerEvents: "none",
              backgroundImage: `
                radial-gradient(circle, rgba(183,215,226,0.07) 1px, transparent 1px)
              `,
              backgroundSize: "32px 32px",
            }} />

            <span style={{
              fontFamily: LIGHT_BG_COLORS.syne, fontSize: 11, fontWeight: 700,
              letterSpacing: "0.18em", textTransform: "uppercase",
              color: LIGHT_BG_COLORS.emberorange, display: "block", marginBottom: 20,
              position: "relative", zIndex: 1,
            }}>
              Let's talk
            </span>

            <h2 style={{
              fontFamily: LIGHT_BG_COLORS.syne,
              fontSize: "clamp(36px, 5vw, 68px)",
              fontWeight: 900,
              color: LIGHT_BG_COLORS.bglt,
              letterSpacing: "-0.035em",
              lineHeight: 0.95,
              marginBottom: 22,
              position: "relative", zIndex: 1,
            }}>
              Need to discuss
              <br />

              <span style={{ color: LIGHT_BG_COLORS.araticcyan }}>before</span>{" starting?"}
            </h2>

            <p style={{
              fontFamily: LIGHT_BG_COLORS.body, fontSize: 17,
              color: LIGHT_BG_COLORS.border,
              maxWidth: 460, margin: "0 auto 48px",
              lineHeight: 1.75, position: "relative", zIndex: 1,
            }}>
              Book a free 30-minute strategy call. No commitment, no pitch deck.{" "}

              <strong style={{ color: LIGHT_BG_COLORS.solargold, fontWeight: 600 }}>
                Just a direct conversation
              </strong>{" "}
              about your project.
            </p>

            <div style={{ position: "relative", zIndex: 1, display: "inline-block" }}>

              <span style={{
                position: "absolute", inset: -6, borderRadius: 56,
                background: LIGHT_BG_COLORS.emberorange, opacity: 0.18,
                animation: "cta-pulse-ring 2.4s ease-out infinite",
                pointerEvents: "none",
              }} />
              <a
                href="mailto:hello@deteroid.com"
                className="cta-btn"
              >
                Schedule a Free Call
                <svg width={16} height={16} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            <p style={{
              fontFamily: LIGHT_BG_COLORS.syne, fontSize: 11,
              color: "rgba(183,215,226,0.45)",
              marginTop: 18, letterSpacing: "0.06em", textTransform: "uppercase",
              position: "relative", zIndex: 1,
            }}>
              Usually responds within 2 hours
            </p>

            <div className="cta-trust" style={{ position: "relative", zIndex: 1 }}>
              {[
                { dot: LIGHT_BG_COLORS.evergreenteal, text: "No contracts" },
                { dot: LIGHT_BG_COLORS.solargold,     text: "Free 30-min call" },
                { dot: LIGHT_BG_COLORS.araticcyan,    text: "Fixed price always" },
              ].map(({ dot, text }) => (
                <div key={text} style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 12, fontFamily: LIGHT_BG_COLORS.body, color: "rgba(183,215,226,0.55)" }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: dot, display: "inline-block", flexShrink: 0 }} />
                  {text}
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default CTA;