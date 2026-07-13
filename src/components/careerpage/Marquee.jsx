"use client";
// components/careers/Marquee.jsx
import React from "react";
import { T } from "../../styles/tokens";

const ITEMS = [
  ["Remote-First", true], ["Performance Pay", false], ["Real Projects Day One", true],
  ["No Corporate Politics", false], ["Business Development", true], ["Social Media & Content", false],
  ["Marketing & SEO", true], ["Mumbai, India", false],
];

export function Marquee() {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div style={{ padding: "44px 0", background: T.ink, overflow: "hidden" }}>
      <div className="mq-track" style={{ display: "flex", whiteSpace: "nowrap", width: "max-content" }}>
        {doubled.map(([label, hi], i) => (
          <span key={i} style={{
            display: "inline-flex", alignItems: "center", gap: 14,
            padding: "0 48px", fontFamily: T.outfit, fontSize: 12, fontWeight: 700,
            letterSpacing: ".14em", textTransform: "uppercase",
            color: hi ? "rgba(255,255,255,.65)" : "rgba(255,255,255,.3)",
          }}>
            <span style={{ width: 4, height: 4, borderRadius: "50%", background: T.orange, flexShrink: 0 }} />
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Marquee;