import React, { useEffect, useRef, useState } from "react";
import { LIGHT_BG_COLORS } from "../../styles/tokens";

export function Cursor() {
  const dotRef = useRef(null);
  const ringRef  = useRef(null);
  const trailRef = useRef([]);
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });

  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const lerp = (a, b, t) => a + (b - a) * t;

    /* ── Track mouse position ── */
    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };

      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + "px";
        dotRef.current.style.top  = e.clientY + "px";
      }

      /* Detect interactive elements */
      const el = document.elementFromPoint(e.clientX, e.clientY);
      const interactive =
        el &&
        (el.closest("a") ||
          el.closest("button") ||
          el.tagName === "INPUT" ||
          el.tagName === "TEXTAREA" ||
          el.closest("[data-cursor='hover']"));
      setHovered(!!interactive);
    };

    const onDown = () => setClicked(true);
    const onUp = () => setClicked(false);

    /* ── RAF loop for lagged ring ── */
    let raf;
    const animate = () => {
      ring.current.x = lerp(ring.current.x, pos.current.x, 0.1);
      ring.current.y = lerp(ring.current.y, pos.current.y, 0.1);

      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + "px";
        ringRef.current.style.top = ring.current.y + "px";
      }

      /* Update trail dots */
      trailRef.current.forEach((el, i) => {
        if (!el) return;
        const factor = 0.05 + i * 0.015;
        const prevX = parseFloat(el.dataset.x || pos.current.x);
        const prevY = parseFloat(el.dataset.y || pos.current.y);
        const nx = lerp(prevX, pos.current.x, factor);
        const ny = lerp(prevY, pos.current.y, factor);
        el.dataset.x = nx;
        el.dataset.y = ny;
        el.style.left = nx + "px";
        el.style.top  = ny + "px";
        el.style.opacity = (1 - i / trailRef.current.length) * 0.18;
      });

      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup",   onUp);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup",   onUp);
      cancelAnimationFrame(raf);
    };
  }, []);

  const BASE = {
    position: "fixed",
    borderRadius: "50%",
    pointerEvents: "none",
    transform: "translate(-50%, -50%)",
    zIndex: 9999,
    willChange: "left, top",
  };

  /* Dynamic ring size/color on hover */
  const ringSize    = hovered ? 52 : 36;
  const ringColor   = hovered ? LIGHT_BG_COLORS.araticcyan : LIGHT_BG_COLORS.emberorange;
  const ringOpacity = hovered ? 0.55 : 0.42;
  const ringScale   = clicked ? 0.85 : 1;

  /* Dot color cycles: default = orange, hover = cyan */
  const dotColor = hovered ? LIGHT_BG_COLORS.araticcyan : LIGHT_BG_COLORS.emberorange;
  const dotSize  = clicked ? 5 : 8;

  const TRAIL_COUNT = 5;

  return (
    <>
      {/* Trail dots */}
      {Array.from({ length: TRAIL_COUNT }).map((_, i) => (
        <div
          key={i}
          ref={(el) => (trailRef.current[i] = el)}
          style={{
            ...BASE,
            width:      6 - i * 0.8,
            height:     6 - i * 0.8,
            background: LIGHT_BG_COLORS.emberorange,
            opacity:    0,
            zIndex:     9994,
            transition: "opacity 0.2s",
          }}
        />
      ))}

      {/* Main dot */}
      <div
        ref={dotRef}
        style={{
          ...BASE,
          width:      dotSize,
          height:     dotSize,
          background: dotColor,
          boxShadow:  `0 0 12px ${dotColor}`,
          transition: "width 0.2s ease, height 0.2s ease, background 0.2s ease, box-shadow 0.2s ease",
        }}
      />

      {/* Lagged ring */}
      <div
        ref={ringRef}
        style={{
          ...BASE,
          width:       ringSize,
          height:      ringSize,
          border:      `1.5px solid ${ringColor}`,
          opacity:     ringOpacity,
          transform:   `translate(-50%, -50%) scale(${ringScale})`,
          transition:  "width 0.35s ease, height 0.35s ease, border-color 0.25s ease, opacity 0.25s ease, transform 0.15s ease",
          zIndex:      9998,
        }}
      />

      {/* Hover label: shows a small "●" dot inside ring when hovering links */}
      {hovered && (
        <div
          style={{
            ...BASE,
            left:          ring.current.x,
            top:           ring.current.y,
            width:          6,
            height:         6,
            background:     LIGHT_BG_COLORS.araticcyan,
            opacity:        0.9,
            zIndex:         9997,
            boxShadow:      `0 0 8px ${LIGHT_BG_COLORS.araticcyan}`,
            transition:     "opacity 0.2s",
          }}
        />
      )}
    </>
  );
}

export default Cursor;