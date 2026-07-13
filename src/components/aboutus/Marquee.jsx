"use client";
import React from "react";

const ITEMS = [
  ["Conversion Optimized", true],
  ["OWASP Compliant", false],
  ["48h Turnaround", true],
  ["AI-Native Architecture", false],
  ["Fixed Pricing", true],
  ["Zero Security Breaches", false],
  ["Full-Stack Execution", true],
  ["Core Web Vitals 95+", false],
];

export function Marquee() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div
      className="relative overflow-hidden"
      style={{
        background: "#1A1A2E",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: "18px 0",
      }}
    >
      {/* Gradient Fade Edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#1A1A2E] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#1A1A2E] to-transparent z-10" />

      {/* Track */}
      <div
        className="flex w-max animate-marquee items-center gap-10"
        style={{
          animation: "marquee 18s linear infinite",
        }}
      >
        {doubled.map(([text, isGood], i) => (
          <span
            key={i}
            className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest"
            style={{
              fontFamily: "Outfit, sans-serif",
              color: isGood
                ? "rgba(255,255,255,0.65)"
                : "rgba(255,255,255,0.35)",
              whiteSpace: "nowrap",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "999px",
                background: isGood ? "#FF4D00" : "rgba(255,255,255,0.25)",
                flexShrink: 0,
              }}
            />
            {text}
          </span>
        ))}
      </div>

      {/* Keyframes */}
      <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-marquee {
            will-change: transform;
          }
        `}
      </style>
    </div>
  );
}

export default Marquee;