import React, { useState } from "react";
import { T } from "../../hooks/useTheme";
import { useReveal } from "../../hooks/useReveal";

const STEPS = [
  {
    n: "01",
    eyebrow: "Day 1–2",
    title: "Discovery & Strategy",
    body: "We start with a deep-dive brief — understanding your conversion goals, target audience, technical constraints, and brand voice. No templates, no assumptions.",
    badge: "2-hour kickoff call",
    icon: "🎯",
  },
  {
    n: "02",
    eyebrow: "Day 3–14",
    title: "Design, Build & Secure",
    body: "Design and development run in parallel. Security hardening happens continuously — not at the end. Staging goes live at 24 hours.",
    badge: "Staging at 24 hours",
    icon: "⚙️",
  },
  {
    n: "03",
    eyebrow: "Day 15+",
    title: "Launch & Optimize",
    body: "Security audit, performance testing, and QA run before any launch. Post-launch, we monitor Core Web Vitals and conversion rates for 30 days — included.",
    badge: "30-day post-launch support",
    icon: "🚀",
  },
];

// ─── Responsive breakpoints via inline media via style tag approach ──────────
// We inject a <style> block once via a singleton component
function GlobalStyles() {
  return (
    <style>{`
      .process-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2px;
        background: #B7D7E2;
        border: 1.5px solid #B7D7E2;
        border-radius: 20px;
        overflow: hidden;
      }
      @media (max-width: 1024px) {
        .process-grid {
          grid-template-columns: 1fr;
        }
      }
      @media (min-width: 641px) and (max-width: 1024px) {
        .process-grid {
          grid-template-columns: repeat(2, 1fr);
        }
        .process-step:last-child {
          grid-column: 1 / -1;
          max-width: 520px;
          margin: 0 auto;
          width: 100%;
        }
      }

      .process-section {
        padding: 120px 0;
      }
      @media (max-width: 768px) {
        .process-section {
          padding: 72px 0;
        }
      }
      @media (max-width: 480px) {
        .process-section {
          padding: 48px 0;
        }
      }

      .process-inner {
        max-width: 1280px;
        margin: 0 auto;
        padding: 0 56px;
      }
      @media (max-width: 768px) {
        .process-inner {
          padding: 0 24px;
        }
      }
      @media (max-width: 480px) {
        .process-inner {
          padding: 0 16px;
        }
      }

      .process-header {
        text-align: center;
        margin-bottom: 96px;
        transition: all 0.75s;
      }
      @media (max-width: 768px) {
        .process-header {
          margin-bottom: 56px;
        }
      }
      @media (max-width: 480px) {
        .process-header {
          margin-bottom: 40px;
        }
      }

      .process-title {
        font-family: ${T.syne || "Syne, sans-serif"};
        font-size: clamp(32px, 4.5vw, 60px);
        font-weight: 700;
        line-height: 1.05;
        letter-spacing: -0.03em;
        color: #023047;
        margin-top: 16px;
      }

      .step-block {
        padding: 48px 40px;
        position: relative;
        overflow: hidden;
        transition: background 0.3s, box-shadow 0.3s;
        background: #E7F5FA;
        cursor: default;
      }
      .step-block:hover {
        background: #F4FBFE;
      }
      @media (max-width: 480px) {
        .step-block {
          padding: 32px 20px;
        }
      }

      .step-number {
        font-family: ${T.syne || "Syne, sans-serif"};
        font-size: 88px;
        font-weight: 800;
        line-height: 1;
        margin-bottom: -10px;
        transition: color 0.3s;
        color: #B7D7E2;
        user-select: none;
        pointer-events: none;
      }
      .step-block:hover .step-number {
        color: rgba(2, 48, 71, 0.07);
      }
      @media (max-width: 480px) {
        .step-number {
          font-size: 60px;
        }
      }

      .step-eyebrow {
        font-family: ${T.syne || "Syne, sans-serif"};
        font-size: 11px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.15em;
        color: #219EBC;
        display: block;
        margin-bottom: 14px;
      }

      .step-title {
        font-family: ${T.syne || "Syne, sans-serif"};
        font-size: 22px;
        font-weight: 700;
        color: #023047;
        margin-bottom: 14px;
        letter-spacing: -0.02em;
      }
      @media (max-width: 480px) {
        .step-title {
          font-size: 18px;
        }
      }

      .step-body {
        font-size: 14.5px;
        line-height: 1.75;
        color: #6B8A96;
      }

      .step-badge {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        margin-top: 20px;
        font-size: 11px;
        font-weight: 700;
        padding: 6px 14px;
        border-radius: 50px;
        background: #E6F6EF;
        color: #408A71;
        border: 1px solid #B7D7E2;
        font-family: ${T.syne || "Syne, sans-serif"};
        letter-spacing: 0.04em;
        transition: background 0.3s, color 0.3s;
      }
      .step-block:hover .step-badge {
        background: #219EBC;
        color: #FFFFFF;
        border-color: #219EBC;
      }

      .process-divider {
        position: absolute;
        top: 0;
        left: 56px;
        right: 56px;
        height: 1px;
        background: #B7D7E2;
      }
      @media (max-width: 768px) {
        .process-divider {
          left: 24px;
          right: 24px;
        }
      }
      @media (max-width: 480px) {
        .process-divider {
          left: 16px;
          right: 16px;
        }
      }

      .reveal-fade {
        transition: opacity 0.75s ease, transform 0.75s ease;
      }
      .reveal-hidden {
        opacity: 0;
        transform: translateY(30px);
      }
      .reveal-visible {
        opacity: 1;
        transform: none;
      }

      .eyebrow-label {
        font-family: ${T.syne || "Syne, sans-serif"};
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        color: #219EBC;
        display: block;
        margin-bottom: 20px;
      }

      .connector-dot {
        display: none;
      }
      @media (min-width: 1025px) {
        .connector-dot {
          display: block;
          position: absolute;
          top: 50%;
          right: -7px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #219EBC;
          border: 2px solid #F4FBFE;
          transform: translateY(-50%);
          z-index: 2;
        }
      }
    `}</style>
  );
}

function StepBlock({ n, eyebrow, title, body, badge, icon, delay = 0 }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={`step-block process-step reveal-fade ${visible ? "reveal-visible" : "reveal-hidden"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Ghost step number */}
      <div className="step-number" aria-hidden="true">{n}</div>

      {/* Eyebrow */}
      <span className="step-eyebrow">{eyebrow}</span>

      {/* Title */}
      <h3 className="step-title">{title}</h3>

      {/* Body */}
      <p className="step-body">{body}</p>

      {/* Badge */}
      <span className="step-badge">
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
          <circle cx="5" cy="5" r="4.5" stroke="currentColor" strokeWidth="1" fill="none"/>
          <path d="M3 5l1.5 1.5L7 3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        {badge}
      </span>
    </div>
  );
}

function Process() {
  const [hRef, hVis] = useReveal();

  return (
    <>
      <GlobalStyles />
      <section
        id="process"
        className="process-section"
        style={{ position: "relative", background: "#F4FBFE" }}
      >
        {/* Top border divider */}
        <div className="process-divider" />

        <div className="process-inner">
          {/* Section header */}
          <div
            ref={hRef}
            className={`process-header reveal-fade ${hVis ? "reveal-visible" : "reveal-hidden"}`}
          >
            {/* Eyebrow label */}
            <span className="eyebrow-label">How it Works</span>

            {/* Decorative accent line */}
            <div
              style={{
                width: 40,
                height: 3,
                borderRadius: 2,
                background: "#FB8500",
                margin: "0 auto 20px",
              }}
            />

            {/* Heading */}
            <h2 className="process-title">
              Three steps.<br />
              <span style={{ color: "#219EBC" }}>One team.</span>{" "}
              <span style={{ color: "#FB8500" }}>Zero friction.</span>
            </h2>

            {/* Sub-caption */}
            <p
              style={{
                marginTop: 20,
                fontSize: 16,
                color: "#6B8A96",
                maxWidth: 480,
                margin: "20px auto 0",
                lineHeight: 1.7,
              }}
            >
              From brief to launch in under three weeks — with security and
              performance baked in at every stage.
            </p>
          </div>

          {/* Step grid */}
          <div className="process-grid">
            {STEPS.map((s, i) => (
              <StepBlock key={s.n} {...s} delay={i * 120} />
            ))}
          </div>

          {/* Bottom CTA row */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: 56,
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "14px 32px",
                borderRadius: 50,
                background: "#FB8500",
                color: "#FFFFFF",
                fontFamily: T.syne || "Syne, sans-serif",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "background 0.2s, transform 0.2s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "#0D3B50";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "#FB8500";
                e.currentTarget.style.transform = "none";
              }}
            >
              Start your project
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#work"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "14px 32px",
                borderRadius: 50,
                background: "transparent",
                color: "#023047",
                fontFamily: T.syne || "Syne, sans-serif",
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                textDecoration: "none",
                border: "1.5px solid #B7D7E2",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "#219EBC";
                e.currentTarget.style.color = "#219EBC";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "#B7D7E2";
                e.currentTarget.style.color = "#023047";
              }}
            >
              See our work
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Process;