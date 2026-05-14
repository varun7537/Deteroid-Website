import React from "react";
import { useReveal } from "../../hooks/useReveal";

const TRANSFORMS = {
  up:    "translateY(36px)",
  left:  "translateX(-36px)",
  right: "translateX(36px)",
  none:  "none",
};

export function Reveal({ children, delay = 0, dir = "up", className = "" }) {
  const [ref, visible] = useReveal();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity:    visible ? 1 : 0,
        transform:  visible ? "translate(0)" : (TRANSFORMS[dir] ?? TRANSFORMS.up),
        transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms,
                     transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}

export default Reveal;