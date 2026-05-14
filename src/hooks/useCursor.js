// hooks/useCursor.js — lag-following custom cursor
import { useEffect, useRef } from "react";

export function useCursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const lag = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const lerp = (a, b, t) => a + (b - a) * t;

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + "px";
        dotRef.current.style.top  = e.clientY + "px";
      }
    };

    let raf;
    const tick = () => {
      lag.current.x = lerp(lag.current.x, pos.current.x, 0.12);
      lag.current.y = lerp(lag.current.y, pos.current.y, 0.12);
      if (ringRef.current) {
        ringRef.current.style.left = lag.current.x + "px";
        ringRef.current.style.top  = lag.current.y + "px";
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    window.addEventListener("mousemove", onMove);
    return () => { window.removeEventListener("mousemove", onMove); cancelAnimationFrame(raf); };
  }, []);

  // Expand ring on hover targets
  useEffect(() => {
    const grow = () => ringRef.current?.classList.add("big");
    const shrink = () => ringRef.current?.classList.remove("big");
    const attach = () => {
      document.querySelectorAll("a,button,.job-card,.ci-card,.jc-arrow").forEach(el => {
        el.addEventListener("mouseenter", grow);
        el.addEventListener("mouseleave", shrink);
      });
    };
    attach();
    const obs = new MutationObserver(attach);
    obs.observe(document.body, { childList: true, subtree: true });
    return () => obs.disconnect();
  }, []);

  return { dotRef, ringRef };
}