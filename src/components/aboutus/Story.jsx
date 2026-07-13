"use client";
import React, { useRef, useEffect, useState } from "react";
import { Reveal } from "./Reveal";
import { FONT, LIGHT_BG_COLORS } from "../../styles/tokens";

const MILESTONES = [
  {
    year: "2022",
    title: "Founded in Mumbai",
    desc: "Three engineers frustrated by agencies shipping beautiful but insecure websites decided to build something radically different.",
    accent: LIGHT_BG_COLORS.emberorange,
    icon: "🚀",
  },
  {
    year: "2023",
    title: "First 20 clients",
    desc: "Word-of-mouth growth among YC-backed startups. Zero paid marketing. Every client came from referrals.",
    accent: LIGHT_BG_COLORS.araticcyan,
    icon: "🤝",
  },
  {
    year: "2024",
    title: "Security practice formalised",
    desc: "Kaustubh joined full-time to lead our dedicated security review process. OWASP Top 10 became standard on every delivery.",
    accent: LIGHT_BG_COLORS.evergreenteal,
    icon: "🛡️",
  },
  {
    year: "2025",
    title: "48-hour guarantee launched",
    desc: "After refining our parallel design + development workflow for years, we officially launched our 48-hour delivery guarantee.",
    accent: LIGHT_BG_COLORS.solargold,
    icon: "⚡",
  },
];

export function Story() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateProgress = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const wh = window.innerHeight;
      const total = rect.height + wh;
      const current = wh - rect.top;
      const next = Math.max(0, Math.min(1, current / total));
      setProgress(next);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    updateProgress();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        overflow: "hidden",
        background: LIGHT_BG_COLORS.bg2, 
        paddingTop:    "clamp(80px,10vw,140px)",
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

      {/* Dot-grid texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(circle, ${LIGHT_BG_COLORS.border} 1px, transparent 1px)`,
          backgroundSize: "36px 36px",
          opacity: 0.45,
          pointerEvents: "none",
        }}
      />

      {/* Ambient blobs */}
      <div
        style={{
          position: "absolute",
          left: -100,
          top: "20%",
          width: 380,
          height: 380,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${LIGHT_BG_COLORS.araticcyan}0D, transparent 70%)`,
          filter: "blur(24px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: -80,
          bottom: "10%",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${LIGHT_BG_COLORS.solargold}0A, transparent 70%)`,
          filter: "blur(20px)",
          pointerEvents: "none",
        }}
      />

      {/* Watermark */}
      <div
        style={{
          position: "absolute",
          right: -30,
          bottom: -10,
          fontSize: "clamp(100px,16vw,240px)",
          fontWeight: 900,
          fontFamily: FONT,
          color: LIGHT_BG_COLORS.txt1,
          opacity: 0.03,
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        STORY
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: 1440,
          margin: "0 auto",
          padding: "0 clamp(20px,4vw,48px)",
        }}
      >
        {/* Header */}
        <Reveal>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <div style={{ width: 36, height: 2, borderRadius: 999, background: LIGHT_BG_COLORS.araticcyan }} />
            <span
              style={{
                fontFamily: FONT,
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: LIGHT_BG_COLORS.araticcyan,
              }}
            >
              Our story
            </span>
          </div>
        </Reveal>

        {/* Title */}
        <Reveal delay={80}>
          <h2
            style={{
              fontFamily: FONT,
              fontWeight: 900,
              fontSize: "clamp(38px,5vw,72px)",
              lineHeight: 0.95,
              letterSpacing: "-0.06em",
              color: LIGHT_BG_COLORS.txt1,
              marginBottom: "clamp(56px,7vw,90px)",
              maxWidth: 760,
            }}
          >
            How we{" "}
            <span style={{ color: LIGHT_BG_COLORS.emberorange }}>got here.</span>
          </h2>
        </Reveal>

        {/* Timeline */}
        <div style={{ position: "relative", paddingTop: 50 }}>

          {/* Base track line */}
          <div
            style={{
              position: "absolute",
              top: 78,
              left: 0,
              right: 0,
              height: 2,
              background: LIGHT_BG_COLORS.border,
              borderRadius: 999,
            }}
          />

          {/* Animated fill line */}
          <div
            style={{
              position: "absolute",
              top: 78,
              left: 0,
              height: 2,
              width: `${progress * 100}%`,
              background: `linear-gradient(to right, ${LIGHT_BG_COLORS.emberorange}, ${LIGHT_BG_COLORS.araticcyan})`,
              borderRadius: 999,
              transition: "width 0.08s linear",
              willChange: "width",
              boxShadow: `0 0 16px ${LIGHT_BG_COLORS.araticcyan}55`,
            }}
          />

          {/* Milestone cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "clamp(24px,3vw,42px)",
            }}
          >
            {MILESTONES.map((m, i) => {
              const trigger = i / (MILESTONES.length - 1);
              const localProgress = Math.min(Math.max((progress - trigger) * 4, 0), 1);
              const active = progress >= trigger;

              return (
                <Reveal key={m.year} delay={i * 100}>
                  <div style={{ position: "relative" }}>

                    {/* Node bubble */}
                    <div
                      style={{
                        position: "relative",
                        zIndex: 10,
                        width: 58,
                        height: 58,
                        borderRadius: 20,
                        background: active
                          ? `linear-gradient(135deg, ${m.accent}, ${m.accent}BB)`
                          : LIGHT_BG_COLORS.bglt,
                        border: active
                          ? `2px solid ${m.accent}`
                          : `2px solid ${LIGHT_BG_COLORS.border}`,
                        boxShadow: active
                          ? `0 12px 36px ${m.accent}35`
                          : `0 6px 18px rgba(1,38,53,0.07)`,
                        marginBottom: 32,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: active ? 22 : 18,
                        transform: `scale(${0.92 + localProgress * 0.08})`,
                        transition: "all 0.45s cubic-bezier(0.22,1,0.36,1)",
                        willChange: "transform, background, box-shadow",
                      }}
                    >
                      {/* Pulse ring */}
                      <div
                        style={{
                          position: "absolute",
                          inset: -6,
                          borderRadius: 26,
                          background: m.accent,
                          opacity: localProgress * 0.14,
                          filter: "blur(8px)",
                          transition: "opacity 0.35s ease",
                        }}
                      />
                      <span style={{ position: "relative", zIndex: 2 }}>
                        {active ? m.icon : (
                          <span
                            style={{
                              fontFamily: FONT,
                              fontWeight: 900,
                              fontSize: 13,
                              letterSpacing: "0.06em",
                              color: C.txt3,
                            }}
                          >
                            {m.year.slice(2)}
                          </span>
                        )}
                      </span>
                    </div>

                    {/* Card */}
                    <div
                      style={{
                        background: active ? LIGHT_BG_COLORS.bglt : `${LIGHT_BG_COLORS.bglt}CC`,
                        borderRadius: 28,
                        padding: "clamp(22px,3vw,34px)",
                        border: active
                          ? `1.5px solid ${m.accent}28`
                          : `1px solid ${LIGHT_BG_COLORS.border}`,
                        boxShadow: active
                          ? `0 24px 64px ${m.accent}12`
                          : `0 8px 28px rgba(1,38,53,0.05)`,
                        minHeight: 260,
                        transform: `translateY(${18 - localProgress * 18}px)`,
                        opacity: 0.55 + localProgress * 0.45,
                        transition: "all 0.45s cubic-bezier(0.22,1,0.36,1)",
                        willChange: "transform, opacity, box-shadow",
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      {/* Card inner glow */}
                      {active && (
                        <div
                          style={{
                            position: "absolute",
                            top: -40,
                            right: -40,
                            width: 180,
                            height: 180,
                            borderRadius: "50%",
                            background: `radial-gradient(circle, ${m.accent}18, transparent 70%)`,
                            pointerEvents: "none",
                          }}
                        />
                      )}

                      {/* Year badge */}
                      <span
                        style={{
                          display: "inline-block",
                          marginBottom: 14,
                          padding: "7px 13px",
                          borderRadius: 999,
                          background: active
                            ? `${m.accent}18`
                            : `rgba(1,38,53,0.04)`,
                          color: active ? m.accent : LIGHT_BG_COLORS.txt3,
                          fontFamily: FONT,
                          fontSize: 11,
                          fontWeight: 800,
                          letterSpacing: "0.18em",
                          textTransform: "uppercase",
                          transition: "all 0.35s ease",
                        }}
                      >
                        {m.year}
                      </span>

                      <h3
                        style={{
                          fontFamily: FONT,
                          fontWeight: 800,
                          fontSize: "clamp(20px,2.5vw,26px)",
                          lineHeight: 1.15,
                          color: LIGHT_BG_COLORS.txt1,
                          marginBottom: 14,
                        }}
                      >
                        {m.title}
                      </h3>

                      <p
                        style={{
                          color: LIGHT_BG_COLORS.txt2,
                          fontSize: "clamp(13px,1.5vw,15px)",
                          lineHeight: 1.9,
                        }}
                      >
                        {m.desc}
                      </p>

                      {/* Bottom accent bar */}
                      {active && (
                        <div
                          style={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            width: "100%",
                            height: 3,
                            background: m.accent,
                            opacity: 0.85,
                          }}
                        />
                      )}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>

      {/* Responsive */}
      <style>{`
        @media (max-width: 600px) {
          .story-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Story;