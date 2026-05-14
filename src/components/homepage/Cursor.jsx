import React, { useRef, useEffect } from "react";

function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX, clientY } = e;

      // Small dot
      if (dotRef.current) {
        dotRef.current.style.left = `${clientX}px`;
        dotRef.current.style.top = `${clientY}px`;
      }

      // Outer ring
      if (ringRef.current) {
        ringRef.current.style.left = `${clientX}px`;
        ringRef.current.style.top = `${clientY}px`;
      }
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  const baseStyle = {
    position: "fixed",
    borderRadius: "50%",
    pointerEvents: "none",
    transform: "translate(-50%, -50%)",
    mixBlendMode: "multiply",
  };

  return (
    <>
      {/* Center Dot */}
      <div
        ref={dotRef}
        style={{
          ...baseStyle,
          width: "8px",
          height: "8px",
          background: "orange",
          zIndex: 9999,
        }}
      />

      <div
        ref={ringRef}
        style={{
          ...baseStyle,
          width: "36px",
          height: "36px",
          border: "1.5px solid orange",
          opacity: 0.6,
          zIndex: 9998,
          transition: "all 0.08s linear",
        }}
      />
    </>
  );
}

export default Cursor;