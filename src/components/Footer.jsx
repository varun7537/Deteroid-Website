"use client";
import React from "react";
import Link from "next/link";
import { LIGHT_BG_COLORS } from "../styles/tokens";

const FOOTER_COLS = [
  {
    title: "Services",
    links: [
      { label: "Web Design",     to: "/services" },
      { label: "Development",    to: "/services" },
      { label: "Security Audit", to: "/services" },
      { label: "AI Integration", to: "/services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About",   to: "/about"   },
      { label: "Work",    to: "/about"   },
      { label: "Process", to: "/services"},
      { label: "Pricing", to: "/services"},
    ],
  },
];

const FOOTER_NAV = [
  { label: "Home",     to: "/"         },
  { label: "About",    to: "/about"    },
  { label: "Services", to: "/services" },
  { label: "Career",   to: "/career"   },
  { label: "Contact",  to: "/contact"  },
];

const SOC_ICONS = [
  {
    title: "Twitter/X",
    href: "https://twitter.com",
    path: <path d="M4 4l16 16M4 20L20 4" />,
  },
  {
    title: "LinkedIn",
    href: "https://linkedin.com",
    path: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="3" />
        <line x1="8" y1="9"   x2="8" y2="17" />
        <line x1="8" y1="5.5" x2="8" y2="6" />
        <path d="M12 9v8M12 13c0-2 7-2 7 0v4" />
      </>
    ),
  },
  {
    title: "GitHub",
    href: "https://github.com",
    path: (
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    ),
  },
];

const FOOTER_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=DM+Sans:opsz,wght@9..40,400;9..40,500&display=swap');

.footer-root {
  background: ${LIGHT_BG_COLORS.bgd};
  padding: 72px 0 0;
  position: relative;
  overflow: hidden;
}
.footer-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 56px;
  position: relative;
  z-index: 1;
}
.footer-grid {
  display: grid;
  grid-template-columns: 2.2fr 1fr 1fr 1.4fr;
  gap: 64px;
  margin-bottom: 56px;
}
.footer-link {
  display: block;
  font-size: 14px;
  font-family: 'DM Sans', sans-serif;
  color: ${LIGHT_BG_COLORS.border};
  margin-bottom: 13px;
  text-decoration: none;
  transition: color 0.2s ease, padding-left 0.2s ease;
}
.footer-link:hover {
  color: ${LIGHT_BG_COLORS.emberorange};
  padding-left: 4px;
}
.soc-icon {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: rgba(255,255,255,0.05);
  border: 1.5px solid rgba(183,215,226,0.14);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.25s ease, border-color 0.25s ease, transform 0.25s ease;
  flex-shrink: 0;
}
.soc-icon:hover {
  background: rgba(251,133,0,0.14);
  border-color: ${LIGHT_BG_COLORS.emberorange};
  transform: translateY(-2px);
}
.soc-icon:hover svg {
  stroke: ${LIGHT_BG_COLORS.emberorange} !important;
}
.footer-bottom {
  border-top: 1px solid rgba(183,215,226,0.12);
  padding: 22px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
}
.footer-legal-link {
  font-size: 12px;
  font-family: 'DM Sans', sans-serif;
  color: rgba(183,215,226,0.50);
  text-decoration: none;
  transition: color 0.2s ease;
}
.footer-legal-link:hover { color: ${LIGHT_BG_COLORS.emberorange}; }

/* ── Extra: quick footer nav row ── */
.footer-nav-row {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 40px;
  padding-bottom: 32px;
  border-bottom: 1px solid rgba(183,215,226,0.08);
}
.footer-nav-link {
  font-family: 'DM Sans', sans-serif;
  font-size: 13px;
  font-weight: 500;
  color: rgba(183,215,226,0.55);
  text-decoration: none;
  transition: color 0.2s ease;
}
.footer-nav-link:hover { color: ${LIGHT_BG_COLORS.araticcyan}; }

@media (max-width: 1024px) {
  .footer-inner { padding: 0 36px; }
  .footer-grid  { grid-template-columns: 1fr 1fr; gap: 40px; }
  .footer-brand { grid-column: 1 / -1; }
}
@media (max-width: 768px) {
  .footer-root  { padding: 56px 0 0; }
  .footer-inner { padding: 0 24px; }
  .footer-grid  { gap: 32px; margin-bottom: 40px; }
}
@media (max-width: 480px) {
  .footer-inner  { padding: 0 16px; }
  .footer-root   { padding: 48px 0 0; }
  .footer-grid   { grid-template-columns: 1fr; gap: 28px; }
  .footer-brand  { grid-column: auto; }
  .footer-bottom { flex-direction: column; align-items: flex-start; gap: 10px; }
  .footer-nav-row{ gap: 14px; }
}
`;

function SocIcon({ title, href, path }) {
  return (
    <a
      className="soc-icon"
      href={href}
      title={title}
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        viewBox="0 0 24 24"
        style={{
          width: 14, height: 14,
          stroke: LIGHT_BG_COLORS.border,
          fill: "none",
          strokeWidth: 1.8,
          transition: "stroke 0.2s ease",
        }}
      >
        {path}
      </svg>
    </a>
  );
}

function Footer() {
  return (
    <>
      <style>{FOOTER_CSS}</style>

      <footer className="footer-root">
        {/* Ambient blobs */}
        <div style={{ position:"absolute", top:-60, right:-40, width:340, height:340, borderRadius:"50%", background:"rgba(33,158,188,0.07)", filter:"blur(80px)", pointerEvents:"none" }} />
        <div style={{ position:"absolute", bottom:0, left:-30, width:260, height:260, borderRadius:"50%", background:"rgba(251,133,0,0.05)", filter:"blur(70px)", pointerEvents:"none" }} />

        <div className="footer-inner">

          {/* ── Quick nav row ── */}
          <nav className="footer-nav-row" aria-label="Footer navigation">
            {FOOTER_NAV.map(({ label, to }) => (
              <Link key={label} href={to} className="footer-nav-link">
                {label}
              </Link>
            ))}
          </nav>

          {/* ── Main grid ── */}
          <div className="footer-grid">

            {/* Brand column */}
            <div className="footer-brand">
              <Link
                href="/"
                style={{
                  fontFamily: LIGHT_BG_COLORS.outfit,
                  fontSize: 22, fontWeight: 800,
                  color: LIGHT_BG_COLORS.bglt,
                  letterSpacing: "-0.03em",
                  display: "block", marginBottom: 14,
                  textDecoration: "none",
                }}
              >
                Deter<span style={{ color: LIGHT_BG_COLORS.emberorange }}>oid</span>
              </Link>
              <p style={{ fontFamily: LIGHT_BG_COLORS.body, fontSize: 14, lineHeight: 1.75, color: LIGHT_BG_COLORS.border, maxWidth: 230 }}>
                Design. Code. Secure.
                <br />
                Conversion-optimized websites with security baked in — not bolted on.
              </p>
              {/* Trust micro-signal */}
              <div style={{ display:"flex", alignItems:"center", gap:7, marginTop:20 }}>
                <span style={{ width:6, height:6, borderRadius:"50%", background:LIGHT_BG_COLORS.evergreenteal, display:"inline-block" }} />
                <span style={{ fontFamily:LIGHT_BG_COLORS.outfit, fontSize:10, fontWeight:700, color:LIGHT_BG_COLORS.evergreenteal, letterSpacing:"0.08em", textTransform:"uppercase" }}>
                  0 security breaches
                </span>
              </div>
            </div>

            {/* Link columns — Services + Company */}
            {FOOTER_COLS.map((col) => (
              <div key={col.title}>
                <h4 style={{
                  fontFamily: LIGHT_BG_COLORS.outfit, fontSize: 11, fontWeight: 700,
                  textTransform: "uppercase", letterSpacing: "0.15em",
                  color: LIGHT_BG_COLORS.bglt, marginBottom: 22,
                }}>
                  {col.title}
                </h4>
                {col.links.map(({ label, to }) => (
                  <Link key={label} href={to} className="footer-link">
                    {label}
                  </Link>
                ))}
              </div>
            ))}

            {/* Contact column */}
            <div>
              <h4 style={{
                fontFamily: LIGHT_BG_COLORS.outfit, fontSize: 11, fontWeight: 700,
                textTransform: "uppercase", letterSpacing: "0.15em",
                color: LIGHT_BG_COLORS.bglt, marginBottom: 22,
              }}>
                Contact
              </h4>
              <a
                href="mailto:hello@deteroid.com"
                style={{ display:"block", fontFamily:LIGHT_BG_COLORS.body, fontSize:14, color:LIGHT_BG_COLORS.emberorange, marginBottom:18, fontWeight:500, textDecoration:"none", transition:"opacity 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.75"; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
              >
                hello@deteroid.com
              </a>
              <div style={{ display:"flex", gap:10, marginTop:4 }}>
                {SOC_ICONS.map((s) => <SocIcon key={s.title} {...s} />)}
              </div>
              <p style={{ fontFamily:LIGHT_BG_COLORS.outfit, fontSize:10, fontWeight:600, color:"rgba(183,215,226,0.38)", marginTop:16, letterSpacing:"0.06em", textTransform:"uppercase" }}>
                Responds within 2 hours
              </p>
            </div>
          </div>

          {/* ── Bottom bar ── */}
          <div className="footer-bottom">
            <p style={{ fontFamily:LIGHT_BG_COLORS.body, fontSize:12, color:"rgba(183,215,226,0.45)" }}>
              © {new Date().getFullYear()} Deteroid. All rights reserved.
            </p>
            <div style={{ display:"flex", gap:24, flexWrap:"wrap" }}>
              {["Privacy", "Terms", "Cookies"].map((l) => (
                <a key={l} href="#" className="footer-legal-link">{l}</a>
              ))}
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}

export default Footer;