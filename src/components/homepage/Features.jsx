import React, { useState } from "react";
import { useReveal } from "../../hooks/useReveal";
import { LIGHT_BG_COLORS } from "../../styles/tokens";

const ROW_THEMES = [
  {
    rowBg:        LIGHT_BG_COLORS.bg1,
    dividerClr:   LIGHT_BG_COLORS.border,
    eyebrowClr:   LIGHT_BG_COLORS.emberorange,
    headClr:      LIGHT_BG_COLORS.txt1,
    accentClr:    LIGHT_BG_COLORS.araticcyan,
    bodyClr:      LIGHT_BG_COLORS.txt2,
    checkClr:     LIGHT_BG_COLORS.txt2,
    checkIconBg:  "rgba(251,133,0,0.10)",
    checkIconStr: LIGHT_BG_COLORS.emberorange,
    linkClr:      LIGHT_BG_COLORS.emberorange,
    blobA: "rgba(33,158,188,0.07)",
    blobB: "rgba(64,138,113,0.05)",
    dark: false,
  },
  // ── Row 2 · AI-Native · bgd #0D3B50 ────────
  {
    rowBg:        LIGHT_BG_COLORS.bgd,
    dividerClr:   "rgba(255,255,255,0.08)",
    eyebrowClr:   LIGHT_BG_COLORS.araticcyan,
    headClr:      LIGHT_BG_COLORS.dkHead,
    accentClr:    LIGHT_BG_COLORS.solargold,
    bodyClr:      LIGHT_BG_COLORS.dkBody,
    checkClr:     LIGHT_BG_COLORS.dkBody,
    checkIconBg:  "rgba(33,158,188,0.18)",
    checkIconStr: LIGHT_BG_COLORS.araticcyan,
    linkClr:      LIGHT_BG_COLORS.araticcyan,
    blobA: "rgba(33,158,188,0.10)",
    blobB: "rgba(255,183,3,0.07)",
    dark: true,
  },
  // ── Row 3 · Security · bg3 #E6F6EF ─────────
  {
    rowBg:        LIGHT_BG_COLORS.bg3,
    dividerClr:   "#C5E5D8",
    eyebrowClr:   LIGHT_BG_COLORS.evergreenteal,
    headClr:      LIGHT_BG_COLORS.txt1,
    accentClr:    LIGHT_BG_COLORS.evergreenteal,
    bodyClr:      LIGHT_BG_COLORS.txt2,
    checkClr:     LIGHT_BG_COLORS.txt2,
    checkIconBg:  "rgba(64,138,113,0.12)",
    checkIconStr: LIGHT_BG_COLORS.evergreenteal,
    linkClr:      LIGHT_BG_COLORS.evergreenteal,
    blobA: "rgba(64,138,113,0.08)",
    blobB: "rgba(33,158,188,0.05)",
    dark: false,
  },
  // ── Row 4 · Pricing · bglt #FFFFFF ─────────
  {
    rowBg:        LIGHT_BG_COLORS.bglt,
    dividerClr:   LIGHT_BG_COLORS.border,
    eyebrowClr:   LIGHT_BG_COLORS.solargold,
    headClr:      LIGHT_BG_COLORS.txt1,
    accentClr:    LIGHT_BG_COLORS.solargold,
    bodyClr:      LIGHT_BG_COLORS.txt2,
    checkClr:     LIGHT_BG_COLORS.txt2,
    checkIconBg:  "rgba(255,183,3,0.12)",
    checkIconStr: LIGHT_BG_COLORS.solargold,
    linkClr:      LIGHT_BG_COLORS.solargold,
    blobA: "rgba(255,183,3,0.07)",
    blobB: "rgba(251,133,0,0.05)",
    dark: false,
  },
  // ── Row 5 · Turnaround · bg2 #E7F5FA ───────
  {
    rowBg:        LIGHT_BG_COLORS.bg2,
    dividerClr:   LIGHT_BG_COLORS.border,
    eyebrowClr:   LIGHT_BG_COLORS.araticcyan,
    headClr:      LIGHT_BG_COLORS.txt1,
    accentClr:    LIGHT_BG_COLORS.emberorange,
    bodyClr:      LIGHT_BG_COLORS.txt2,
    checkClr:     LIGHT_BG_COLORS.txt2,
    checkIconBg:  "rgba(33,158,188,0.12)",
    checkIconStr: LIGHT_BG_COLORS.araticcyan,
    linkClr:      LIGHT_BG_COLORS.araticcyan,
    blobA: "rgba(33,158,188,0.09)",
    blobB: "rgba(251,133,0,0.06)",
    dark: false,
  },
];

const FEATURES_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&family=Fira+Code:wght@400;500&display=swap');

@keyframes blink {
  0%,100% { opacity:1; }
  50%      { opacity:0; }
}

/* ── Section wrapper ── */
.feat-section {
  padding: 120px 0;
  position: relative;
  overflow: hidden;
}

.feat-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 56px;
  position: relative;
  z-index: 1;
}

.feat-rule {
  position: absolute;
  top: 0; left: 56px; right: 56px;
  height: 1px;
}

/* ── Two-column feature grid ── */
.feat-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 100px;
  align-items: center;
}

/* ── Mockup shell ── */
.mockup-shell {
  border-radius: 20px;
  padding: 26px;
  overflow: hidden;
  border: 1.5px solid ${LIGHT_BG_COLORS.border};
  box-shadow: 0 16px 60px rgba(2,48,71,0.07);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}
.mockup-shell:hover {
  box-shadow: 0 24px 80px rgba(2,48,71,0.11);
  transform: translateY(-2px);
}
.mockup-shell-dark {
  border-color: rgba(255,255,255,0.09) !important;
  box-shadow: 0 16px 60px rgba(0,0,0,0.30) !important;
}
.mockup-shell-dark:hover {
  box-shadow: 0 24px 80px rgba(0,0,0,0.40) !important;
}

/* ── FeatureLink ── */
.feat-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 700;
  font-family: 'Syne', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  text-decoration: none;
  transition: gap 0.2s ease, opacity 0.2s ease;
}
.feat-link:hover { gap: 14px; opacity: 0.75; }
.feat-link svg { transition: transform 0.2s ease; }
.feat-link:hover svg { transform: translateX(4px); }

/* ── Tablet  (≤1024px) ── */
@media (max-width: 1024px) {
  .feat-grid   { grid-template-columns: 1fr; gap: 52px; }
  .feat-inner  { padding: 0 36px; }
  .feat-rule   { left: 36px; right: 36px; }
  .feat-section{ padding: 80px 0; }
  /* Always: text above mockup on stacked layout */
  .feat-text-col { order: 0 !important; }
  .feat-mock-col { order: 1 !important; }
}

/* ── Large mobile (≤768px) ── */
@media (max-width: 768px) {
  .feat-inner  { padding: 0 24px; }
  .feat-rule   { left: 24px; right: 24px; }
  .feat-section{ padding: 64px 0; }
  .mockup-shell{ padding: 18px; }
  .feat-grid   { gap: 40px; }
}

/* ── Small mobile (≤480px) ── */
@media (max-width: 480px) {
  .feat-inner  { padding: 0 16px; }
  .feat-rule   { left: 16px; right: 16px; }
  .feat-section{ padding: 52px 0; }
  .mockup-shell{ padding: 14px; border-radius: 14px; }
  .feat-grid   { gap: 32px; }

  /* Conversion mini-cards: stack */
  .conv-mini-grid { grid-template-columns: 1fr !important; gap: 8px !important; }
  /* Kanban: single column */
  .kanban-grid    { grid-template-columns: 1fr !important; }
  /* Security label: smaller */
  .sec-label      { font-size: 12px !important; }
}
`;

function CheckItem({ children, theme }) {
  return (
    <div style={{
      display: "flex", alignItems: "flex-start", gap: 12,
      fontSize: 15, color: theme.checkClr, fontFamily: LIGHT_BG_COLORS.body, lineHeight: 1.65,
    }}>
      <div style={{
        width: 20, height: 20, borderRadius: "50%",
        background: theme.checkIconBg,
        display: "flex", alignItems: "center", justifyContent: "center",
        flexShrink: 0, marginTop: 2,
      }}>
        <svg viewBox="0 0 24 24" style={{ width: 10, height: 10, stroke: theme.checkIconStr, strokeWidth: 3, fill: "none" }}>
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      {children}
    </div>
  );
}

function FeatureLink({ href, children, theme }) {
  return (
    <a href={href} className="feat-link" style={{ color: theme.linkClr }}>
      {children}
      <svg width={16} height={16} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </a>
  );
}

function badgeStyle(variant, dark) {
  if (dark) {
    return {
      t: { bg: "rgba(64,138,113,0.22)",  clr: "#7DDFC0" },
      o: { bg: "rgba(251,133,0,0.22)",   clr: "#FFB36B" },
      v: { bg: "rgba(33,158,188,0.22)",  clr: "#7DD5F0" },
      g: { bg: "rgba(255,183,3,0.22)",   clr: "#FFD87A" },
    }[variant] || { bg: "rgba(33,158,188,0.22)", clr: "#7DD5F0" };
  }
  return {
    t: { bg: LIGHT_BG_COLORS.bg3,                        clr: LIGHT_BG_COLORS.evergreenteal },
    o: { bg: "rgba(251,133,0,0.10)",       clr: LIGHT_BG_COLORS.emberorange   },
    v: { bg: "rgba(33,158,188,0.10)",      clr: LIGHT_BG_COLORS.araticcyan    },
    g: { bg: "rgba(255,183,3,0.12)",       clr: LIGHT_BG_COLORS.solargold     },
  }[variant] || { bg: LIGHT_BG_COLORS.bg3, clr: LIGHT_BG_COLORS.evergreenteal };
}

function MockupShell({ title, badge, badgeVariant = "t", children, dark = false }) {
  const { bg, clr } = badgeStyle(badgeVariant, dark);
  const shellBg  = dark ? "rgba(255,255,255,0.055)" : LIGHT_BG_COLORS.bglt;
  const titleClr = dark ? LIGHT_BG_COLORS.dkHead : LIGHT_BG_COLORS.txt1;

  return (
    <div
      className={`mockup-shell${dark ? " mockup-shell-dark" : ""}`}
      style={{ background: shellBg }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 22, gap: 12 }}>
        <span style={{ fontFamily: LIGHT_BG_COLORS.syne, fontSize: 13, fontWeight: 700, color: titleClr, letterSpacing: "0.02em" }}>
          {title}
        </span>
        <span style={{ fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 50, background: bg, color: clr, letterSpacing: "0.05em", fontFamily: LIGHT_BG_COLORS.syne, whiteSpace: "nowrap", flexShrink: 0 }}>
          {badge}
        </span>
      </div>
      {children}
    </div>
  );
}

function ConversionMockup() {
  const bars = [40, 55, 45, 70, 85, 90, 80, 95, 100, 60, 50, 75];
  return (
    <MockupShell title="Conversion Analytics" badge="↑ 34.2% this month" badgeVariant="o">
      <div className="conv-mini-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10, marginBottom: 20 }}>
        {[
          ["Conv. Rate", "8.4%",  "↑ 2.1%", LIGHT_BG_COLORS.evergreenteal],
          ["Revenue",    "$48k",  "↑ 18%",  LIGHT_BG_COLORS.evergreenteal],
          ["Bounce",     "21%",   "↓ 9%",   LIGHT_BG_COLORS.araticcyan   ],
        ].map(([lbl, val, delta, dClr]) => (
          <div key={lbl} style={{ background: LIGHT_BG_COLORS.bg2, borderRadius: 10, padding: "12px 10px", border: `1px solid ${LIGHT_BG_COLORS.border}` }}>
            <div style={{ fontSize: 11, color: LIGHT_BG_COLORS.txt3, marginBottom: 5, fontWeight: 500, fontFamily: LIGHT_BG_COLORS.body }}>{lbl}</div>
            <div style={{ fontFamily: LIGHT_BG_COLORS.syne, fontSize: 20, fontWeight: 800, color: LIGHT_BG_COLORS.txt1 }}>{val}</div>
            <div style={{ fontSize: 11, color: dClr, fontWeight: 700, marginTop: 2 }}>{delta}</div>
          </div>
        ))}
      </div>
      {/* Bar chart */}
      <div style={{ height: 88, display: "flex", alignItems: "flex-end", gap: 5, padding: "6px 0" }}>
        {bars.map((h, i) => (
          <div key={i} style={{
            flex: 1, borderRadius: "4px 4px 0 0", height: `${h}%`,
            background: h >= 80 ? LIGHT_BG_COLORS.emberorange : h >= 60 ? LIGHT_BG_COLORS.solargold : LIGHT_BG_COLORS.bg2,
            transition: "background 0.2s",
          }} />
        ))}
      </div>
    </MockupShell>
  );
}

function AIMockup() {
  const bubbleBg  = "rgba(255,255,255,0.055)";
  const bubbleBdr = "rgba(255,255,255,0.09)";

  return (
    <MockupShell title="AI Code Assistant" badge="GPT-4 powered" badgeVariant="v" dark>
      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 14 }}>

        {/* User 1 */}
        <div style={{ display: "flex", gap: 9, alignItems: "flex-start" }}>
          <div style={{ width: 26, height: 26, borderRadius: 8, background: "rgba(255,255,255,0.08)", color: LIGHT_BG_COLORS.dkMute, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, fontFamily: LIGHT_BG_COLORS.syne, flexShrink: 0 }}>U</div>
          <div style={{ fontSize: 12.5, lineHeight: 1.6, color: LIGHT_BG_COLORS.dkBody, background: bubbleBg, padding: "9px 13px", borderRadius: 8, border: `1px solid ${bubbleBdr}`, fontFamily: LIGHT_BG_COLORS.body }}>
            Add CSRF protection to this form component
          </div>
        </div>

        {/* AI response */}
        <div style={{ display: "flex", gap: 9, alignItems: "flex-start" }}>
          <div style={{ width: 26, height: 26, borderRadius: 8, background: "rgba(33,158,188,0.20)", color: LIGHT_BG_COLORS.araticcyan, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, fontFamily: LIGHT_BG_COLORS.syne, flexShrink: 0 }}>AI</div>
          <div style={{ fontSize: 12.5, lineHeight: 1.6, color: LIGHT_BG_COLORS.dkBody, background: bubbleBg, padding: "9px 13px", borderRadius: 8, border: `1px solid ${bubbleBdr}`, flex: 1, fontFamily: LIGHT_BG_COLORS.body }}>
            Sure — here's the secure version with token validation:
            <div style={{ background: "rgba(0,0,0,0.38)", borderRadius: 8, padding: "10px 12px", fontFamily: LIGHT_BG_COLORS.mono, fontSize: 11, color: "#B0E4CC", marginTop: 8, lineHeight: 1.75, border: `1px solid ${bubbleBdr}` }}>
              <span style={{ color: LIGHT_BG_COLORS.araticcyan }}>import</span>{" { csrf } "}
              <span style={{ color: LIGHT_BG_COLORS.araticcyan }}>from</span>
              <span style={{ color: LIGHT_BG_COLORS.evergreenteal }}>{" '@/lib/security'"}</span><br />
              <span style={{ color: LIGHT_BG_COLORS.araticcyan }}>const</span>{" token = "}
              <span style={{ color: LIGHT_BG_COLORS.emberorange }}>csrf</span>{"()"}<br />
              {"<"}<span style={{ color: LIGHT_BG_COLORS.emberorange }}>Form</span>{" csrf={token}>"}
            </div>
          </div>
        </div>

        {/* User 2 with cursor */}
        <div style={{ display: "flex", gap: 9, alignItems: "flex-start" }}>
          <div style={{ width: 26, height: 26, borderRadius: 8, background: "rgba(255,255,255,0.08)", color: LIGHT_BG_COLORS.dkMute, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, fontFamily: LIGHT_BG_COLORS.syne, flexShrink: 0 }}>U</div>
          <div style={{ fontSize: 12.5, lineHeight: 1.6, color: LIGHT_BG_COLORS.dkBody, background: bubbleBg, padding: "9px 13px", borderRadius: 8, border: `1px solid ${bubbleBdr}`, fontFamily: LIGHT_BG_COLORS.body }}>
            Also add rate limiting
            <span style={{ display: "inline-block", width: 2, height: 12, background: LIGHT_BG_COLORS.araticcyan, verticalAlign: "middle", marginLeft: 2, animation: "blink 1.1s step-end infinite" }} />
          </div>
        </div>
      </div>

      {/* Input bar */}
      <div style={{ display: "flex", gap: 9, alignItems: "center", background: "rgba(255,255,255,0.04)", borderRadius: 10, padding: "10px 14px", border: `1px solid ${bubbleBdr}` }}>
        <span style={{ fontSize: 12, color: LIGHT_BG_COLORS.dkMute, flex: 1, fontFamily: LIGHT_BG_COLORS.body }}>Ask anything about your codebase...</span>
        <div style={{ width: 26, height: 26, borderRadius: 8, background: LIGHT_BG_COLORS.araticcyan, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <svg viewBox="0 0 24 24" style={{ width: 12, height: 12, stroke: "#fff", fill: "none" }}><path d="M5 12h14M12 5l7 7-7 7" /></svg>
        </div>
      </div>
    </MockupShell>
  );
}

function SecurityMockup() {
  const checks = [
    ["SQL injection protection",  true,  "Pass"],
    ["XSS sanitization layer",    true,  "Pass"],
    ["CSP headers configured",    true,  "Pass"],
    ["CSRF tokens on all forms",  true,  "Pass"],
    ["Rate limiting — API routes",false, "Running"],
  ];
  return (
    <MockupShell title="Security Audit — Pre-Launch" badge="4 / 4 passed" badgeVariant="t">
      <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
        {checks.map(([label, done, tag]) => (
          <div key={label} style={{
            display: "flex", alignItems: "center", gap: 12,
            padding: "12px 14px",
            background: done ? LIGHT_BG_COLORS.bglt : `${LIGHT_BG_COLORS.bglt}AA`,
            borderRadius: 10,
            border: `1px solid ${done ? "#C5E5D8" : LIGHT_BG_COLORS.border}`,
            opacity: done ? 1 : 0.60,
          }}>
            {/* Tick */}
            <div style={{
              width: 20, height: 20, borderRadius: 6,
              background: done ? LIGHT_BG_COLORS.bg3 : "transparent",
              border: done ? "none" : `1px solid ${LIGHT_BG_COLORS.border}`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 11, fontWeight: 700, color: done ? LIGHT_BG_COLORS.evergreenteal : "transparent", flexShrink: 0,
            }}>
              {done ? "✓" : ""}
            </div>
            <span className="sec-label" style={{
              fontSize: 13, fontFamily: LIGHT_BG_COLORS.body,
              color: done ? LIGHT_BG_COLORS.txt2 : LIGHT_BG_COLORS.txt3,
              flex: 1, fontWeight: 500,
              textDecoration: done ? "line-through" : "none",
              textDecorationColor: `${LIGHT_BG_COLORS.evergreenteal}55`,
            }}>
              {label}
            </span>
            <span style={{
              fontSize: 10, fontWeight: 700, padding: "3px 10px", borderRadius: 50,
              letterSpacing: "0.04em", fontFamily: LIGHT_BG_COLORS.syne,
              background: done ? LIGHT_BG_COLORS.bg3 : "rgba(33,158,188,0.10)",
              color:      done ? LIGHT_BG_COLORS.evergreenteal : LIGHT_BG_COLORS.araticcyan,
            }}>
              {tag}
            </span>
          </div>
        ))}
      </div>
    </MockupShell>
  );
}

function PricingMockup() {
  return (
    <MockupShell title="Growth Package" badge="Most Popular" badgeVariant="g">
      <div style={{ textAlign: "center", padding: "24px 12px" }}>
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: LIGHT_BG_COLORS.solargold, marginBottom: 14, display: "block", fontFamily: LIGHT_BG_COLORS.syne }}>
          Fixed, one-time price
        </span>
        <div style={{ fontFamily: LIGHT_BG_COLORS.syne, fontSize: "clamp(40px,5vw,56px)", fontWeight: 800, color: LIGHT_BG_COLORS.txt1, lineHeight: 1, marginBottom: 8 }}>
          $4,800
        </div>
        <div style={{ fontSize: 14, color: LIGHT_BG_COLORS.txt3, marginBottom: 20, fontFamily: LIGHT_BG_COLORS.body }}>
          Complete delivery in 48 hours
        </div>
        <div style={{ width: "100%", height: 1, background: LIGHT_BG_COLORS.border, marginBottom: 18 }} />
        <div style={{ display: "flex", flexDirection: "column", gap: 10, textAlign: "left" }}>
          {[
            "Custom design system",
            "Full-stack development",
            "Security audit included",
            "2 rounds of revisions",
            "30-day post-launch support",
          ].map((f) => (
            <div key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: LIGHT_BG_COLORS.txt2, fontFamily: LIGHT_BG_COLORS.body }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: LIGHT_BG_COLORS.solargold, flexShrink: 0 }} />
              {f}
            </div>
          ))}
        </div>
      </div>
    </MockupShell>
  );
}

function KanbanMockup() {
  const cols = [
    { head: "Discovery", cards: [
      { title: "Kickoff brief",  sub: "Goals, audience, brand",  time: "Hour 0–2",   st: "done" },
      { title: "Tech spec",      sub: "Stack decisions locked",  time: "Hour 2–4",   st: "done" },
    ]},
    { head: "Build", cards: [
      { title: "Design system",  sub: "Tokens, components",      time: "Hour 4–18",  st: "prog" },
      { title: "Development",    sub: "In progress...",           time: "Hour 18–40", st: "prog" },
    ]},
    { head: "Launch", cards: [
      { title: "Security audit", sub: "Auto-scan + review",      time: "Hour 40–44", st: "todo" },
      { title: "Go live",        sub: "Deploy + handoff",        time: "Hour 48",    st: "todo" },
    ]},
  ];
  const stClr = { done: LIGHT_BG_COLORS.evergreenteal, prog: LIGHT_BG_COLORS.emberorange, todo: LIGHT_BG_COLORS.araticcyan };

  return (
    <MockupShell title="Project — 48h Sprint" badge="Live" badgeVariant="o">
      <div className="kanban-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10 }}>
        {cols.map((col) => (
          <div key={col.head}>
            <div style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.10em", color: LIGHT_BG_COLORS.txt3, marginBottom: 8, fontFamily: LIGHT_BG_COLORS.syne }}>
              {col.head}
            </div>
            {col.cards.map((card) => (
              <div key={card.title} style={{
                background: LIGHT_BG_COLORS.bglt,
                borderRadius: 10, padding: "11px 13px", marginBottom: 7,
                border: `1px solid ${LIGHT_BG_COLORS.border}`,
                borderLeft: `2.5px solid ${stClr[card.st]}`,
                opacity: card.st === "todo" ? 0.65 : 1,
                transition: "opacity 0.2s",
              }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: LIGHT_BG_COLORS.txt1, marginBottom: 3, fontFamily: LIGHT_BG_COLORS.syne }}>{card.title}</div>
                <div style={{ fontSize: 11, color: LIGHT_BG_COLORS.txt3, fontFamily: LIGHT_BG_COLORS.body }}>{card.sub}</div>
                <div style={{ display: "inline-block", fontSize: 10, fontWeight: 600, padding: "2px 8px", borderRadius: 50, background: LIGHT_BG_COLORS.bg2, color: LIGHT_BG_COLORS.txt3, marginTop: 6, border: `1px solid ${LIGHT_BG_COLORS.border}`, fontFamily: LIGHT_BG_COLORS.body }}>
                  {card.time}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </MockupShell>
  );
}

function FeatureRow({ eyebrow, headline, body, checks, linkText, linkHref, mockup, reverse, themeIdx }) {
  const [textRef, textVis] = useReveal();
  const [mockRef, mockVis] = useReveal();
  const theme = ROW_THEMES[themeIdx];

  const renderHeadline = (raw) => {
    const lines = raw.split(/<br\s*\/?>/i);
    return (
      <h2 style={{
        fontFamily: LIGHT_BG_COLORS.syne,
        fontSize: "clamp(32px,4.5vw,58px)",
        fontWeight: 800,
        lineHeight: 1.0,
        letterSpacing: "-0.03em",
        color: theme.headClr,
        marginBottom: 20,
      }}>
        {lines.map((line, i) => {
          const words = line.trim().split(" ");
          return (
            <span key={i} style={{ display: "block" }}>
              {i === 0 ? (
                <>
                  <span style={{ color: theme.accentClr }}>{words[0]}</span>
                  {words.length > 1 ? " " + words.slice(1).join(" ") : ""}
                </>
              ) : line}
            </span>
          );
        })}
      </h2>
    );
  };

  const textCol = (
    <div
      ref={textRef}
      className="feat-text-col"
      style={{
        opacity:    textVis ? 1 : 0,
        transform:  textVis ? "none" : "translateY(30px)",
        transition: "opacity 0.75s cubic-bezier(0.16,1,0.3,1), transform 0.75s cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      <span style={{ fontFamily: LIGHT_BG_COLORS.syne, fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: theme.eyebrowClr, display: "block", marginBottom: 20 }}>
        {eyebrow}
      </span>

      {renderHeadline(headline)}

      <p style={{ fontFamily: LIGHT_BG_COLORS.body, fontSize: 16, lineHeight: 1.8, color: theme.bodyClr, marginBottom: 28 }}>
        {body}
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 36 }}>
        {checks.map((c) => <CheckItem key={c} theme={theme}>{c}</CheckItem>)}
      </div>

      <FeatureLink href={linkHref} theme={theme}>{linkText}</FeatureLink>
    </div>
  );

  const mockCol = (
    <div
      ref={mockRef}
      className="feat-mock-col"
      style={{
        opacity:    mockVis ? 1 : 0,
        transform:  mockVis ? "none" : "translateY(30px)",
        transition: "opacity 0.75s cubic-bezier(0.16,1,0.3,1) 0.15s, transform 0.75s cubic-bezier(0.16,1,0.3,1) 0.15s",
      }}
    >
      {mockup}
    </div>
  );

  return (
    <section className="feat-section" style={{ background: theme.rowBg }}>
      <div className="feat-rule" style={{ background: theme.dividerClr }} />

      <div style={{ position: "absolute", top: -80, right: -60, width: 380, height: 380, borderRadius: "50%", background: theme.blobA, filter: "blur(80px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: -60, left: -40, width: 280, height: 280, borderRadius: "50%", background: theme.blobB, filter: "blur(70px)", pointerEvents: "none" }} />

      <div className="feat-inner">
        <div className="feat-grid">
          {reverse ? [mockCol, textCol] : [textCol, mockCol]}
        </div>
      </div>
    </section>
  );
}


function Features() {
  return (
    <>
      <style>{FEATURES_CSS}</style>
      <div id="features">

        <FeatureRow
          themeIdx={0}
          eyebrow="Increase Conversions"
          headline="Every pixel is a<br>conversion decision."
          body="We don't just build beautiful websites — we build websites that sell. Layout, hierarchy, CTA placement, and load performance are all optimized for your specific conversion goal."
          checks={["A/B tested component patterns from day one", "Heatmap-informed layout decisions", "Core Web Vitals score of 95+ guaranteed"]}
          linkText="See our process" linkHref="#process"
          mockup={<ConversionMockup />}
        />

        <FeatureRow
          themeIdx={1}
          reverse
          eyebrow="AI-Powered From Day One"
          headline="Not a plugin.<br>A core architecture decision."
          body="AI isn't added as an afterthought — it's designed into your system from the first line of code. Intelligent components, predictive UX, and automated personalization are part of the stack."
          checks={["AI-assisted code review in every PR", "LLM-powered search and recommendations", "Automated regression testing via AI agents"]}
          linkText="Talk to us about AI" linkHref="#cta"
          mockup={<AIMockup />}
        />

        <FeatureRow
          themeIdx={2}
          eyebrow="Security Built In"
          headline="OWASP-compliant on<br>every project."
          body="Security isn't a feature you pay extra for. Every Deteroid project ships with a full security audit, automated vulnerability scanning, and a hardened stack — before you go live."
          checks={["OWASP Top 10 mitigations by default", "Automated pen-test reports on every deploy", "Encrypted at rest and in transit"]}
          linkText="View security stack" linkHref="#cta"
          mockup={<SecurityMockup />}
        />

        <FeatureRow
          themeIdx={3}
          reverse
          eyebrow="Fixed Price"
          headline="One quote.<br>One invoice.<br>No drama."
          body="Scope creep kills budgets. We scope precisely upfront and lock the price — so you can plan with confidence without checking invoices weekly."
          checks={["Detailed scope document before we start", "Price locked — even if we go over hours", "Revision rounds included in every package"]}
          linkText="See pricing packages" linkHref="#cta"
          mockup={<PricingMockup />}
        />

        <FeatureRow
          themeIdx={4}
          eyebrow="48-Hour Turnaround"
          headline="Fast without<br>cutting corners."
          body="Our parallel workflow runs design and development simultaneously. By the time mockups are approved, components are already built. 48 hours from brief to live."
          checks={["Parallel design + dev workflow", "Live Figma access throughout", "Staging environment at 24 hours"]}
          linkText="Start your project" linkHref="#cta"
          mockup={<KanbanMockup />}
        />

      </div>
    </>
  );
}

export default Features;