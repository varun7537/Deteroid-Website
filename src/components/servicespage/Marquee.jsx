"use client";
import React from "react"

const items = [
  ["Conversion Optimized", true],
  ["OWASP Compliant", false],
  ["48h Turnaround", true],
  ["AI-Native Architecture", false],
  ["Fixed Pricing", true],
  ["Zero Security Breaches", false],
  ["Full-Stack Execution", true],
  ["Core Web Vitals 95+", false],
]

export default function Marquee() {
  const doubled = [...items, ...items]

  return (
    <div
      style={{
        padding: "44px 0",
        background: "#1A1A2E",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* edge fade glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg,#1A1A2E 0%,transparent 10%,transparent 90%,#1A1A2E 100%)",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />

      {/* TRACK */}
      <div className="mq-track">
        {doubled.map(([text, isActive], i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 14,
              padding: "0 48px",
              fontFamily: "'Outfit', sans-serif",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: isActive
                ? "rgba(255,255,255,0.85)"
                : "rgba(255,255,255,0.35)",
              whiteSpace: "nowrap",
            }}
          >
            {/* dot */}
            <span
              style={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: isActive ? "#00B8A0" : "#FF4D00",
                boxShadow: isActive
                  ? "0 0 12px rgba(0,184,160,0.6)"
                  : "0 0 12px rgba(255,77,0,0.4)",
                flexShrink: 0,
              }}
            />
            {text}
          </span>
        ))}
      </div>

      {/* CSS animation */}
      <style>
        {`
          .mq-track {
            display: inline-flex;
            width: max-content;
            animation: marquee 18s linear infinite;
          }

          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </div>
  )
}