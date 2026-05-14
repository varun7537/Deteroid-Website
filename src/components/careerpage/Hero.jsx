import React from "react";
import { motion } from "framer-motion";
import { LIGHT_BG_COLORS } from "../../styles/tokens";

/* ── Code snippet lines ── */
const CODE_LINES = [
  {
    n: 1,
    jsx: (
      <span style={{ color: "rgba(2,48,71,.35)" }}>
        {"// Deteroid — How we work"}
      </span>
    ),
  },
  {
    n: 2,
    jsx: (
      <>
        <span style={{ color: LIGHT_BG_COLORS.araticcyan }}>const</span> team = {"{"}
      </>
    ),
  },
  {
    n: 3,
    jsx: (
      <>
        &nbsp;&nbsp;size:{" "}
        <span style={{ color: LIGHT_BG_COLORS.evergreenteal }}>'small &amp; focused'</span>,
      </>
    ),
  },
  {
    n: 4,
    jsx: (
      <>
        &nbsp;&nbsp;roles: [<span style={{ color: LIGHT_BG_COLORS.evergreenteal }}>'builders'</span>,{" "}
        <span style={{ color: LIGHT_BG_COLORS.evergreenteal }}>'thinkers'</span>],
      </>
    ),
  },
  {
    n: 5,
    jsx: (
      <>
        &nbsp;&nbsp;culture:{" "}
        <span style={{ color: LIGHT_BG_COLORS.evergreenteal }}>'results &gt; politics'</span>,
      </>
    ),
  },
  {
    n: 6,
    jsx: (
      <>
        &nbsp;&nbsp;location:{" "}
        <span style={{ color: LIGHT_BG_COLORS.evergreenteal }}>'remote'</span>,
      </>
    ),
  },
  {
    n: 7,
    jsx: (
      <>
        &nbsp;&nbsp;pay:{" "}
        <span style={{ color: LIGHT_BG_COLORS.evergreenteal }}>'performance-driven'</span>,
      </>
    ),
  },
  {
    n: 8,
    jsx: (
      <>
        &nbsp;&nbsp;mission:{" "}
        <span style={{ color: LIGHT_BG_COLORS.emberorange }}>buildSecureProducts</span>()
        <span
          style={{
            display: "inline-block",
            width: 2,
            height: 13,
            background: LIGHT_BG_COLORS.emberorange,
            marginLeft: 4,
            borderRadius: 2,
            verticalAlign: "middle",
            animation: "blink 1.1s step-end infinite",
          }}
        />
      </>
    ),
  },
  { n: 9, jsx: "}" },
];

/* ── Badge data ── */
const BADGES = [
  { dot: LIGHT_BG_COLORS.emberorange,   label: "Remote-first" },
  { dot: LIGHT_BG_COLORS.evergreenteal, label: "Performance-driven pay" },
  { dot: LIGHT_BG_COLORS.araticcyan,    label: "3 open roles" },
];

const GLOBAL_STYLES = `
  @keyframes blink     { 50% { opacity: 0; } }
  @keyframes floatUp   { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-6px); } }
  @keyframes floatDown { 0%,100% { transform:translateY(0); } 50% { transform:translateY(6px); } }

  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');

  #hero * { box-sizing: border-box; }

  #hero .hero-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(100%, 420px), 1fr));
    gap: 56px;
    align-items: center;
  }

  #hero .hero-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    align-items: center;
    margin-bottom: 28px;
  }

  #hero .hero-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  @media (max-width: 860px) {
    #hero .hero-right { display: none; }
    #hero { padding-top: 80px !important; padding-bottom: 60px !important; }
  }

  @media (max-width: 600px) {
    #hero .hero-inner { padding: 0 20px !important; }
    #hero h1 { font-size: 44px !important; }
  }
`;

export function Hero() {
  return (
    <>
      <style>{GLOBAL_STYLES}</style>

      <section
        id="hero"
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          minHeight: "100vh",
          background: LIGHT_BG_COLORS.bg1,
          paddingTop: 110,
          paddingBottom: 90,
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {/* Subtle grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            backgroundImage:
              `linear-gradient(${LIGHT_BG_COLORS.border}44 1px,transparent 1px),` +
              `linear-gradient(90deg,${LIGHT_BG_COLORS.border}44 1px,transparent 1px)`,
            backgroundSize: "90px 90px",
          }}
        />

        {/* Ghost watermark */}
        <div
          style={{
            position: "absolute",
            right: -40,
            top: "50%",
            transform: "translateY(-50%)",
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(120px,18vw,260px)",
            fontWeight: 800,
            color: `${LIGHT_BG_COLORS.araticcyan}08`,
            letterSpacing: "-0.06em",
            pointerEvents: "none",
            whiteSpace: "nowrap",
            userSelect: "none",
          }}
        >
          CAREERS
        </div>

        {/* Ambient blobs — using palette colors */}
        <div style={{ position:"absolute", width:420, height:420, background:`${LIGHT_BG_COLORS.araticcyan}14`, borderRadius:"50%", top:-120, right:-120, filter:"blur(80px)", pointerEvents:"none" }} />
        <div style={{ position:"absolute", width:340, height:340, background:`${LIGHT_BG_COLORS.evergreenteal}12`, borderRadius:"50%", bottom:"8%", left:"6%", filter:"blur(80px)", pointerEvents:"none" }} />
        <div style={{ position:"absolute", width:260, height:260, background:`${LIGHT_BG_COLORS.solargold}10`, borderRadius:"50%", top:"20%", left:"15%", filter:"blur(100px)", pointerEvents:"none" }} />

        {/* Page inner */}
        <div
          className="hero-inner"
          style={{
            position: "relative",
            width: "100%",
            maxWidth: 1180,
            padding: "0 32px",
            margin: "0 auto",
          }}
        >
          <div className="hero-grid">

            {/* ════ LEFT ════ */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              style={{ display: "flex", flexDirection: "column" }}
            >
              {/* Eyebrow */}
              <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:20 }}>
                <div style={{ width:32, height:2, background:LIGHT_BG_COLORS.araticcyan, borderRadius:2, flexShrink:0 }} />
                <span
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.22em",
                    color: LIGHT_BG_COLORS.araticcyan,
                    textTransform: "uppercase",
                  }}
                >
                  Join Deteroid
                </span>
              </div>

              {/* H1 */}
              <h1
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "clamp(42px,6.5vw,80px)",
                  fontWeight: 800,
                  lineHeight: 0.97,
                  letterSpacing: "-0.05em",
                  color: LIGHT_BG_COLORS.dark,
                  marginBottom: 20,
                  margin: "0 0 20px",
                }}
              >
                Build the <br />
                <span style={{ color: LIGHT_BG_COLORS.emberorange }}>future</span> <br />
                <span style={{ position:"relative", display:"inline-block" }}>
                  with us.
                  <span
                    style={{
                      position: "absolute",
                      bottom: 3,
                      left: 0,
                      width: "100%",
                      height: 8,
                      background: `linear-gradient(90deg,${LIGHT_BG_COLORS.solargold},${LIGHT_BG_COLORS.emberorange})`,
                      opacity: 0.22,
                      borderRadius: 3,
                    }}
                  />
                </span>
              </h1>

              {/* Subtitle */}
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.8,
                  color: LIGHT_BG_COLORS.txt3,
                  maxWidth: 420,
                  margin: "0 0 32px",
                }}
              >
                Join a focused team of developers, designers, and security experts.
                <strong style={{ color: LIGHT_BG_COLORS.txt1, fontWeight: 600 }}>
                  {" "}Remote-first. No bureaucracy.
                </strong>{" "}
                Real impact from day one.
              </p>

              {/* Buttons */}
              <div className="hero-buttons">
                <motion.a
                  href="#jobs"
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 6,
                    height: 44,
                    padding: "0 26px",
                    background: LIGHT_BG_COLORS.araticcyan,
                    color: LIGHT_BG_COLORS.light,
                    fontFamily: "'Syne', sans-serif",
                    fontSize: 13.5,
                    fontWeight: 700,
                    letterSpacing: "0.01em",
                    borderRadius: 999,
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                    boxShadow: `0 10px 28px ${LIGHT_BG_COLORS.araticcyan}38`,
                    border: "none",
                  }}
                >
                  View Open Positions →
                </motion.a>

                <motion.a
                  href="#cta"
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 44,
                    padding: "0 22px",
                    background: `${LIGHT_BG_COLORS.bgd}08`,
                    color: LIGHT_BG_COLORS.txt1,
                    fontFamily: "'Syne', sans-serif",
                    fontSize: 13.5,
                    fontWeight: 600,
                    borderRadius: 999,
                    border: `1px solid ${LIGHT_BG_COLORS.border}`,
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                  }}
                >
                  Talk to us
                </motion.a>
              </div>

              {/* Badges */}
              <div className="hero-badges">
                {BADGES.map((b) => (
                  <div
                    key={b.label}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 7,
                      height: 32,
                      padding: "0 14px",
                      borderRadius: 999,
                      border: `1px solid ${LIGHT_BG_COLORS.border}`,
                      background: LIGHT_BG_COLORS.bglt,
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: 12,
                      fontWeight: 600,
                      color: LIGHT_BG_COLORS.txt2,
                      whiteSpace: "nowrap",
                    }}
                  >
                    <span
                      style={{
                        width: 7,
                        height: 7,
                        borderRadius: "50%",
                        background: b.dot,
                        flexShrink: 0,
                      }}
                    />
                    {b.label}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* ════ RIGHT ════ */}
            <motion.div
              className="hero-right"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                paddingTop: 20,
              }}
            >
              <div style={{ width:"100%", maxWidth:490, position:"relative" }}>

                {/* Float tag — top-right */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  style={{
                    position: "absolute",
                    top: -18,
                    right: 16,
                    zIndex: 2,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 7,
                    padding: "7px 14px",
                    borderRadius: 999,
                    background: LIGHT_BG_COLORS.bglt,
                    border: `1px solid ${LIGHT_BG_COLORS.border}`,
                    boxShadow: `0 4px 20px ${LIGHT_BG_COLORS.araticcyan}22`,
                    fontFamily: "'Syne', sans-serif",
                    fontSize: 12,
                    fontWeight: 600,
                    color: LIGHT_BG_COLORS.evergreenteal,
                    whiteSpace: "nowrap",
                  }}
                >
                  <span style={{ width:7, height:7, borderRadius:"50%", background:LIGHT_BG_COLORS.evergreenteal }} />
                  Remote-first team
                </motion.div>

                {/* Code card — light theme */}
                <div
                  style={{
                    borderRadius: 16,
                    overflow: "hidden",
                    border: `1px solid ${LIGHT_BG_COLORS.border}`,
                    boxShadow: `0 24px 64px ${LIGHT_BG_COLORS.bgd}22`,
                  }}
                >
                  {/* Window chrome */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 7,
                      padding: "11px 16px",
                      background: LIGHT_BG_COLORS.bgd,
                      borderBottom: `1px solid ${LIGHT_BG_COLORS.border}22`,
                    }}
                  >
                    <span style={{ width:11, height:11, borderRadius:"50%", background:"#F87171" }} />
                    <span style={{ width:11, height:11, borderRadius:"50%", background:LIGHT_BG_COLORS.solargold }} />
                    <span style={{ width:11, height:11, borderRadius:"50%", background:LIGHT_BG_COLORS.evergreenteal }} />
                    <span
                      style={{
                        marginLeft: "auto",
                        fontFamily: "monospace",
                        fontSize: 11,
                        color: `${LIGHT_BG_COLORS.bg1}66`,
                      }}
                    >
                      culture.ts
                    </span>
                  </div>

                  {/* Code body — light, airy feel */}
                  <div
                    style={{
                      background: LIGHT_BG_COLORS.bg2,
                      padding: "20px 20px 22px",
                      fontFamily: "'Fira Code','Cascadia Code',monospace",
                      fontSize: 13,
                      lineHeight: 1.85,
                      color: LIGHT_BG_COLORS.txt1,
                    }}
                  >
                    {CODE_LINES.map((l) => (
                      <div key={l.n} style={{ display:"flex", gap:16 }}>
                        <span
                          style={{
                            color: LIGHT_BG_COLORS.txt3,
                            width: 20,
                            textAlign: "right",
                            flexShrink: 0,
                            fontSize: 12,
                            userSelect: "none",
                            paddingTop: 1,
                          }}
                        >
                          {l.n}
                        </span>
                        <span>{l.jsx}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Float tag — bottom-left */}
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  style={{
                    position: "absolute",
                    bottom: -18,
                    left: 16,
                    zIndex: 2,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "7px 14px",
                    borderRadius: 999,
                    background: LIGHT_BG_COLORS.bglt,
                    border: `1px solid ${LIGHT_BG_COLORS.border}`,
                    boxShadow: `0 4px 20px ${LIGHT_BG_COLORS.emberorange}22`,
                    fontFamily: "'Syne', sans-serif",
                    fontSize: 12,
                    fontWeight: 600,
                    color: LIGHT_BG_COLORS.emberorange,
                    whiteSpace: "nowrap",
                  }}
                >
                  ⚡ 3 open roles
                </motion.div>

              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;