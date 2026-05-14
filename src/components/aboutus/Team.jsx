import React from "react";
import { Reveal } from "./Reveal";
import { FONT, LIGHT_BG_COLORS} from "../../styles/tokens";


const MEMBERS = [
  {
    name: "Aryan Shah",
    role: "Founder & CEO",
    bio: "Full-stack engineer with 8 years building products. Obsessed with conversion rates and Core Web Vitals.",
    initials: "AS",
    accent: LIGHT_BG_COLORS.emberorange,
    accentBg: "rgba(251,133,0,0.10)",
    tagColor: "rgba(251,133,0,0.12)",
  },
  {
    name: "Kaustubh Jain",
    role: "Security Lead",
    bio: "Former penetration tester. Responsible for every security audit that ships. Zero breaches since 2022.",
    initials: "KJ",
    accent: LIGHT_BG_COLORS.evergreenteal,
    accentBg: "rgba(64,138,113,0.10)",
    tagColor: "rgba(64,138,113,0.12)",
  },
  {
    name: "Daksh Mehta",
    role: "Design Engineer",
    bio: "Blurs the line between design and code. Figma to production in hours, not days.",
    initials: "DM",
    accent: LIGHT_BG_COLORS.araticcyan,
    accentBg: "rgba(33,158,188,0.10)",
    tagColor: "rgba(33,158,188,0.12)",
  },
];

export function Team() {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        background: LIGHT_BG_COLORS.bg3,
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
          opacity: 0.4,
          pointerEvents: "none",
        }}
      />

      {/* Ambient glow — top right */}
      <div
        style={{
          position: "absolute",
          top: -100,
          right: -100,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${LIGHT_BG_COLORS.araticcyan}0D, transparent 70%)`,
          filter: "blur(24px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 clamp(20px,4vw,48px)",
        }}
      >
        {/* Section tag */}
        <Reveal>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <div style={{ width: 36, height: 2, borderRadius: 999, background: LIGHT_BG_COLORS.evergreenteal }} />
            <span
              style={{
                fontFamily: FONT,
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: LIGHT_BG_COLORS.evergreenteal,
              }}
            >
              The team
            </span>
          </div>
        </Reveal>

        {/* Title */}
        <Reveal delay={80}>
          <h2
            style={{
              fontFamily: FONT,
              fontWeight: 900,
              fontSize: "clamp(36px,5vw,72px)",
              lineHeight: 0.95,
              letterSpacing: "-0.06em",
              color: LIGHT_BG_COLORS.txt1,
              marginBottom: 16,
              maxWidth: 720,
            }}
          >
            Three people.
            <br />
            <span style={{ color: LIGHT_BG_COLORS.araticcyan }}>No outsourcing.</span>
          </h2>
        </Reveal>

        {/* Subtitle */}
        <Reveal delay={140}>
          <p
            style={{
              color: LIGHT_BG_COLORS.txt2,
              fontSize: "clamp(14px,1.8vw,18px)",
              lineHeight: 1.85,
              maxWidth: 580,
              marginBottom: "clamp(48px,6vw,70px)",
            }}
          >
            Every person who works on your project is on this page. We don't
            hand work off to freelancers or junior contractors.
          </p>
        </Reveal>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "clamp(16px,2vw,24px)",
          }}
        >
          {MEMBERS.map((m, i) => (
            <Reveal key={m.name} delay={i * 120}>
              <div
                style={{
                  position: "relative",
                  borderRadius: 28,
                  padding: "clamp(24px,3vw,34px)",
                  background: LIGHT_BG_COLORS.bglt,
                  border: `1.5px solid ${LIGHT_BG_COLORS.border}`,
                  boxShadow: "0 12px 40px rgba(1,38,53,0.07)",
                  transition: "transform 0.35s ease, box-shadow 0.35s ease",
                  overflow: "hidden",
                  minHeight: 300,
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = `0 28px 72px rgba(1,38,53,0.12)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 12px 40px rgba(1,38,53,0.07)";
                }}
              >
                {/* Card inner glow */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: 200,
                    height: 200,
                    borderRadius: "50%",
                    background: `radial-gradient(circle, ${m.accent}18, transparent 70%)`,
                    pointerEvents: "none",
                  }}
                />

                {/* Avatar */}
                <div
                  style={{
                    width: 68,
                    height: 68,
                    borderRadius: 22,
                    background: `linear-gradient(135deg, ${m.accent}, ${m.accent}BB)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: FONT,
                    fontWeight: 900,
                    fontSize: 20,
                    color: "#fff",
                    boxShadow: `0 10px 28px ${m.accent}30`,
                    marginBottom: 22,
                    position: "relative",
                    zIndex: 1,
                    transition: "transform 0.3s ease",
                    letterSpacing: "0.04em",
                  }}
                >
                  {m.initials}
                </div>

                {/* Name */}
                <h3
                  style={{
                    fontFamily: FONT,
                    fontWeight: 900,
                    fontSize: "clamp(18px,2vw,22px)",
                    color: LIGHT_BG_COLORS.txt1,
                    marginBottom: 6,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {m.name}
                </h3>

                {/* Role badge */}
                <span
                  style={{
                    display: "inline-block",
                    fontFamily: FONT,
                    fontSize: 10,
                    fontWeight: 800,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: m.accent,
                    background: m.tagColor,
                    borderRadius: 999,
                    padding: "5px 10px",
                    marginBottom: 16,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {m.role}
                </span>

                {/* Bio */}
                <p
                  style={{
                    fontSize: "clamp(13px,1.5vw,15px)",
                    lineHeight: 1.85,
                    color: LIGHT_BG_COLORS.txt2,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {m.bio}
                </p>

                {/* Bottom accent bar */}
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
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom trust strip */}
        <Reveal delay={360}>
          <div
            style={{
              marginTop: "clamp(36px,4vw,56px)",
              background: LIGHT_BG_COLORS.bglt,
              border: `1.5px solid ${LIGHT_BG_COLORS.border}`,
              borderRadius: 20,
              padding: "18px clamp(20px,3vw,32px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 14,
              boxShadow: "0 4px 18px rgba(1,38,53,0.05)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: LIGHT_BG_COLORS.evergreenteal,
                  boxShadow: `0 0 10px ${LIGHT_BG_COLORS.evergreenteal}`,
                }}
              />
              <span
                style={{
                  fontFamily: FONT,
                  fontSize: 13,
                  fontWeight: 600,
                  color: LIGHT_BG_COLORS.txt2,
                  letterSpacing: "0.03em",
                }}
              >
                You work with us directly — no hand-offs, ever
              </span>
            </div>
            <span
              style={{
                fontFamily: FONT,
                fontSize: 11,
                fontWeight: 800,
                letterSpacing: "0.20em",
                textTransform: "uppercase",
                color: LIGHT_BG_COLORS.solargold,
              }}
            >
              Mumbai, India 📍
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Team;