"use client";
import React from "react";
import { Reveal } from "./Reveal";
import { LIGHT_BG_COLORS } from "../../styles/tokens";

export function CTA() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden"
      style={{
        background: LIGHT_BG_COLORS.bg,
        paddingTop: "140px",
        paddingBottom: "140px",
      }}
    >
      {/* Background Glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-180px",
          left: "-180px",
          width: "520px",
          height: "520px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,77,0,0.08), transparent 70%)",
          filter: "blur(30px)",
        }}
      />

      <div
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
          paddingInline: "32px",
        }}
      >
        <Reveal>
          <div
            className="relative overflow-hidden"
            style={{
              background: LIGHT_BG_COLORS.dark,
              borderRadius: "42px",
              padding:
                "clamp(72px, 8vw, 110px) clamp(28px, 6vw, 72px)",
              boxShadow: "0 35px 100px rgba(0,0,0,0.28)",
              isolation: "isolate",
              border: "1px solid rgba(255,255,255,0.06)",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            {/* Top Right Glow */}
            <div
              className="absolute pointer-events-none"
              style={{
                top: "-260px",
                right: "-260px",
                width: "720px",
                height: "720px",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(255,77,0,0.18), transparent 70%)",
                filter: "blur(20px)",
                zIndex: 0,
              }}
            />

            <div
              className="absolute pointer-events-none"
              style={{
                bottom: "-240px",
                left: "-240px",
                width: "620px",
                height: "620px",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(107,79,255,0.16), transparent 70%)",
                filter: "blur(20px)",
                zIndex: 0,
              }}
            />

            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
                backgroundSize: "42px 42px",
                maskImage:
                  "radial-gradient(circle at center, black 30%, transparent 90%)",
                WebkitMaskImage:
                  "radial-gradient(circle at center, black 30%, transparent 90%)",
                zIndex: 0,
              }}
            />

            {/* Content */}
            <div
              className="relative z-10"
              style={{
                width: "100%",
                maxWidth: "860px",
                margin: "0 auto",
              }}
            >
              {/* Label */}
              <span
                className="inline-flex items-center justify-center"
                style={{
                  fontFamily: FONT,
                  fontSize: "12px",
                  fontWeight: 800,
                  letterSpacing: "0.24em",
                  textTransform: "uppercase",
                  color: LIGHT_BG_COLORS.orange,
                  marginBottom: "28px",
                  padding: "10px 18px",
                  borderRadius: "999px",
                  background: "rgba(255,77,0,0.08)",
                  border: "1px solid rgba(255,77,0,0.16)",
                }}
              >
                Let’s build something
              </span>

              {/* Heading */}
              <h2
                style={{
                  fontFamily: FONT,
                  fontWeight: 900,
                  fontSize: "clamp(42px, 6vw, 82px)",
                  lineHeight: 0.92,
                  letterSpacing: "-0.06em",
                  color: LIGHT_BG_COLORS.txt1,
                  marginBottom: "30px",
                }}
              >
                Ready to start <br />
                your project?
              </h2>

              <p
                style={{
                  maxWidth: "640px",
                  margin: "0 auto 52px",
                  fontSize: "18px",
                  lineHeight: 1.9,
                  color: "rgba(255,255,255,0.62)",
                }}
              >
                Schedule a 30-minute strategy call. No pitch decks.
                Just a direct conversation about what you’re building
                and how to ship it faster.
              </p>

              {/* Buttons */}
              <div
                className="flex flex-wrap items-center justify-center"
                style={{
                  gap: "18px",
                  marginBottom: "40px",
                }}
              >
                {/* Primary CTA */}
                <a
                  href="mailto:hello@deteroid.com"
                  className="group inline-flex items-center justify-center"
                  style={{
                    fontFamily: FONT,
                    fontWeight: 700,
                    fontSize: "15px",
                    color: "#fff",
                    textDecoration: "none",
                    padding: "18px 40px",
                    borderRadius: "999px",
                    background:
                      "linear-gradient(135deg,#FF4D00,#FF7A18)",
                    boxShadow:
                      "0 18px 50px rgba(255,77,0,0.35)",
                    transition:
                      "transform .35s ease, box-shadow .35s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(-4px)";
                    e.currentTarget.style.boxShadow =
                      "0 24px 60px rgba(255,77,0,0.42)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(0px)";
                    e.currentTarget.style.boxShadow =
                      "0 18px 50px rgba(255,77,0,0.35)";
                  }}
                >
                  <span>Book a Free Call</span>

                  <span
                    style={{
                      marginLeft: "12px",
                      transition: "transform .3s ease",
                    }}
                    className="group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>

                {/* Secondary CTA */}
                <a
                  href="mailto:hello@deteroid.com"
                  style={{
                    fontFamily: FONT,
                    fontWeight: 600,
                    fontSize: "15px",
                    color: "rgba(255,255,255,0.78)",
                    textDecoration: "none",
                    padding: "18px 34px",
                    borderRadius: "999px",
                    border:
                      "1px solid rgba(255,255,255,0.14)",
                    background: "rgba(255,255,255,0.02)",
                    backdropFilter: "blur(10px)",
                    transition: "all .35s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "rgba(255,255,255,0.08)";
                    e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.28)";
                    e.currentTarget.style.color = "#fff";
                    e.currentTarget.style.transform =
                      "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      "rgba(255,255,255,0.02)";
                    e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.14)";
                    e.currentTarget.style.color =
                      "rgba(255,255,255,0.78)";
                    e.currentTarget.style.transform =
                      "translateY(0px)";
                  }}
                >
                  hello@deteroid.com
                </a>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "#22C55E",
                    boxShadow:
                      "0 0 14px rgba(34,197,94,0.8)",
                  }}
                />

                <p
                  style={{
                    fontFamily: FONT,
                    fontSize: "11px",
                    fontWeight: 800,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.32)",
                    margin: 0,
                  }}
                >
                  Usually responds within 2 hours
                </p>
              </div>
            </div>

            {/* Border Glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                borderRadius: "42px",
                border: "1px solid rgba(255,255,255,0.05)",
                boxShadow:
                  "inset 0 0 60px rgba(255,255,255,0.02)",
              }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default CTA;