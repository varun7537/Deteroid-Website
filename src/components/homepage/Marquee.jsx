"use client";
import React from "react";
import { T } from "../../hooks/useTheme";

const MARQUEE_ITEMS = [
  ["Conversion Optimized", true],["OWASP Compliant", false],["48h Turnaround", true],["AI-Native Architecture", false],
  ["Fixed Pricing", true],["Zero Security Breaches", false],["Full-Stack Execution", true],["Core Web Vitals 95+", false],
];
 
function Marquee() {
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div style={{ padding:"40px 0", background:T.ink, overflow:"hidden" }}>
      <div style={{ display:"flex", whiteSpace:"nowrap", animation:"marquee 22s linear infinite", width:"max-content" }}>
        {doubled.map(([label, accent], i) => (
          <span key={i} style={{ display:"inline-flex", alignItems:"center", gap:16, padding:"0 48px", fontFamily:T.outfit, fontSize:13, fontWeight:700, letterSpacing:"0.12em", textTransform:"uppercase", color: accent ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.35)" }}>
            <span style={{ width:5, height:5, borderRadius:"50%", background:T.orange, flexShrink:0 }} />
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Marquee;