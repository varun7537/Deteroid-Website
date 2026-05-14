import React from "react";
import { useCounter } from "../../hooks/useCounter";
import { FONT, LIGHT_BG_COLORS } from "../../styles/tokens";

const ACCENT_MAP = {
  orange: {
    cat:  LIGHT_BG_COLORS.emberorange,
    lt:   "rgba(251,133,0,0.10)",
    bar:  `linear-gradient(90deg, ${LIGHT_BG_COLORS.emberorange}, ${LIGHT_BG_COLORS.solargold})`,
    dark: LIGHT_BG_COLORS.emberorange,
  },
  teal: {
    cat:  LIGHT_BG_COLORS.evergreenteal,
    lt:   "rgba(64,138,113,0.10)",
    bar:  `linear-gradient(90deg, ${LIGHT_BG_COLORS.evergreenteal}, ${LIGHT_BG_COLORS.araticcyan})`,
    dark: LIGHT_BG_COLORS.evergreenteal,
  },
  cyan: {
    cat:  LIGHT_BG_COLORS.araticcyan,
    lt:   "rgba(33,158,188,0.10)",
    bar:  `linear-gradient(90deg, ${LIGHT_BG_COLORS.araticcyan}, ${LIGHT_BG_COLORS.evergreenteal})`,
    dark: LIGHT_BG_COLORS.araticcyan,
  },
  violet: {
    /* re-mapped: violet → araticcyan in the new palette */
    cat:  LIGHT_BG_COLORS.araticcyan,
    lt:   "rgba(33,158,188,0.10)",
    bar:  `linear-gradient(90deg, ${LIGHT_BG_COLORS.araticcyan}, ${LIGHT_BG_COLORS.evergreenteal})`,
    dark: LIGHT_BG_COLORS.araticcyan,
  },
  gold: {
    cat:  LIGHT_BG_COLORS.solargold,
    lt:   "rgba(255,183,3,0.10)",
    bar:  `linear-gradient(90deg, ${LIGHT_BG_COLORS.solargold}, ${LIGHT_BG_COLORS.emberorange})`,
    dark: LIGHT_BG_COLORS.solargold,
  },
  dark: {
    cat:  LIGHT_BG_COLORS.dark,
    lt:   "rgba(1,38,53,0.08)",
    bar:  `linear-gradient(90deg, ${LIGHT_BG_COLORS.dark}, ${LIGHT_BG_COLORS.txt2})`,
    dark: "rgba(183,215,226,0.85)",
  },
  // Legacy alias: "o", "t", "v", "d"
  o: {
    cat:  LIGHT_BG_COLORS.emberorange,
    lt:   "rgba(251,133,0,0.10)",
    bar:  `linear-gradient(90deg, ${LIGHT_BG_COLORS.emberorange}, ${LIGHT_BG_COLORS.solargold})`,
    dark: LIGHT_BG_COLORS.emberorange,
  },
  t: {
    cat:  LIGHT_BG_COLORS.evergreenteal,
    lt:   "rgba(64,138,113,0.10)",
    bar:  `linear-gradient(90deg, ${LIGHT_BG_COLORS.evergreenteal}, ${LIGHT_BG_COLORS.araticcyan})`,
    dark: LIGHT_BG_COLORS.evergreenteal,
  },
  v: {
    cat:  LIGHT_BG_COLORS.araticcyan,
    lt:   "rgba(33,158,188,0.10)",
    bar:  `linear-gradient(90deg, ${LIGHT_BG_COLORS.araticcyan}, ${LIGHT_BG_COLORS.evergreenteal})`,
    dark: LIGHT_BG_COLORS.araticcyan,
  },
  d: {
    cat:  LIGHT_BG_COLORS.dark,
    lt:   "rgba(1,38,53,0.08)",
    bar:  `linear-gradient(90deg, ${LIGHT_BG_COLORS.dark}, ${LIGHT_BG_COLORS.txt2})`,
    dark: "rgba(183,215,226,0.85)",
  },
};

/* Suffix helper */
function getSuffix(num) {
  if (num === 48) return "h";
  if (num > 40)   return "+";
  return "";
}

export function StatCard({
  num     = 0,
  label   = "",
  sub     = "",
  accent  = "orange",
  icon    = null,
  tall    = false,
  locTag  = "",
  /* Pass inverted=true when the card sits on a dark (bgd) background */
  inverted = false,
}) {
  const a = ACCENT_MAP[accent] || ACCENT_MAP.orange;
  const [counterRef, count] = useCounter(num);

  /* Colour tokens that flip based on background */
  const surfaceBg   = inverted ? "rgba(255,255,255,0.05)" : LIGHT_BG_COLORS.bglt;
  const borderColor = inverted ? "rgba(183,215,226,0.12)" : LIGHT_BG_COLORS.border;
  const labelColor  = inverted ? "rgba(183,215,226,0.70)" : LIGHT_BG_COLORS.txt2;
  const subColor    = inverted ? "rgba(183,215,226,0.45)" : LIGHT_BG_COLORS.txt3;
  const numColor    = inverted ? a.dark : a.cat;

  return (
    <div
      ref={counterRef}
      style={{
        position:     "relative",
        background:   surfaceBg,
        borderRadius: 24,
        padding:      "clamp(20px,2.5vw,28px)",
        border:       `1.5px solid ${borderColor}`,
        /* Gradient top-border trick */
        borderTop:    "3px solid transparent",
        backgroundImage: `
          linear-gradient(${surfaceBg}, ${surfaceBg}),
          ${a.bar}
        `,
        backgroundOrigin: "border-box",
        backgroundClip:   "padding-box, border-box",
        boxShadow:    inverted
          ? "0 8px 28px rgba(1,38,53,0.20)"
          : "0 6px 24px rgba(1,38,53,0.07)",
        overflow:     "hidden",
        display:      "flex",
        flexDirection:"column",
        minHeight:    tall ? "clamp(200px,26vw,420px)" : "clamp(140px,18vw,200px)",
        transition:   "transform 0.3s ease, box-shadow 0.3s ease",
        cursor:       "default",
        backdropFilter: inverted ? "blur(12px)" : "none",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform   = "translateY(-4px)";
        e.currentTarget.style.boxShadow   = inverted
          ? `0 16px 48px rgba(1,38,53,0.32)`
          : `0 14px 40px ${a.cat}22`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform   = "translateY(0)";
        e.currentTarget.style.boxShadow   = inverted
          ? "0 8px 28px rgba(1,38,53,0.20)"
          : "0 6px 24px rgba(1,38,53,0.07)";
      }}
    >
      {/* Ambient card glow */}
      <div
        style={{
          position:      "absolute",
          top:           -30,
          right:         -30,
          width:         160,
          height:        160,
          borderRadius:  "50%",
          background:    `radial-gradient(circle, ${a.cat}18, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      {/* Icon */}
      {icon && (
        <div
          style={{
            width:           40,
            height:          40,
            borderRadius:    14,
            background:      inverted ? `${a.cat}22` : a.lt,
            display:         "flex",
            alignItems:      "center",
            justifyContent:  "center",
            marginBottom:    18,
            color:           a.cat,
            fontSize:        18,
            position:        "relative",
            zIndex:          1,
          }}
        >
          {icon}
        </div>
      )}

      {/* Body */}
      <div
        style={{
          display:        "flex",
          flexDirection:  "column",
          flex:           1,
          justifyContent: "space-between",
          position:       "relative",
          zIndex:         1,
        }}
      >
        <div>
          {/* Number */}
          <div
            style={{
              fontFamily:    FONT,
              fontWeight:    900,
              fontSize:      "clamp(36px,5vw,56px)",
              lineHeight:    1,
              letterSpacing: "-0.04em",
              color:         numColor,
              marginBottom:  6,
            }}
          >
            {num > 1 ? count : num}
            {getSuffix(num)}
          </div>

          {/* Label */}
          <div
            style={{
              fontFamily:  FONT,
              fontSize:    14,
              fontWeight:  700,
              color:       labelColor,
              marginBottom: 4,
              lineHeight:  1.4,
            }}
          >
            {label}
          </div>

          {/* Sub */}
          <div
            style={{
              fontFamily:    FONT,
              fontSize:      11,
              fontWeight:    700,
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              color:         subColor,
            }}
          >
            {sub}
          </div>
        </div>

        {/* Location tag */}
        {locTag && (
          <div
            style={{
              display:       "inline-flex",
              alignItems:    "center",
              gap:           8,
              marginTop:     18,
              padding:       "6px 12px",
              borderRadius:  999,
              border:        `1px solid ${inverted ? "rgba(183,215,226,0.14)" : LIGHT_BG_COLORS.border}`,
              background:    inverted ? "rgba(183,215,226,0.06)" : LIGHT_BG_COLORS.bg1,
              width:         "fit-content",
            }}
          >
            <span
              style={{
                width:        6,
                height:       6,
                borderRadius: "50%",
                background:   LIGHT_BG_COLORS.araticcyan,
                boxShadow:    `0 0 8px ${LIGHT_BG_COLORS.araticcyan}`,
                display:      "inline-block",
                flexShrink:   0,
              }}
            />
            <span
              style={{
                fontFamily:    FONT,
                fontSize:      10,
                fontWeight:    700,
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                color:         inverted ? "rgba(183,215,226,0.55)" : LIGHT_BG_COLORS.txt3,
              }}
            >
              {locTag}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default StatCard;