"use client";
import React, { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let isMoving = false;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      isMoving = true;
      
      // Update center dot instantly using hardware acceleration
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      
      // Ensure visibility on move
      dot.style.opacity = "1";
      ring.style.opacity = "0.6";
    };

    // Smoothly interpolate the outer ring position
    let rafId;
    const updateRing = () => {
      if (isMoving) {
        ringX += (mouseX - ringX) * 0.15;
        ringY += (mouseY - ringY) * 0.15;
        ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }
      rafId = requestAnimationFrame(updateRing);
    };
    rafId = requestAnimationFrame(updateRing);

    window.addEventListener("mousemove", onMouseMove);

    // Hide cursor when mouse leaves the window
    const onMouseLeaveWindow = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    document.addEventListener("mouseleave", onMouseLeaveWindow);

    // Event Delegation for hover effects: big ring when hovering interactive elements
    const onMouseOver = (e) => {
      const target = e.target;
      if (!target) return;
      
      const isInteractive = target.closest("a, button, .srv-block, .ws, .wi, .faq-item, .smc, .job-card, .ci-card, .jc-arrow, [role='button']");
      if (isInteractive) {
        ring.classList.add("big");
        dot.classList.add("hovered");
      }
    };

    const onMouseOut = (e) => {
      const target = e.target;
      if (!target) return;
      
      const isInteractive = target.closest("a, button, .srv-block, .ws, .wi, .faq-item, .smc, .job-card, .ci-card, .jc-arrow, [role='button']");
      if (isInteractive) {
        ring.classList.remove("big");
        dot.classList.remove("hovered");
      }
    };

    const onMouseDown = () => {
      ring.classList.add("clicked");
    };

    const onMouseUp = () => {
      ring.classList.remove("clicked");
    };

    window.addEventListener("mouseover", onMouseOver);
    window.addEventListener("mouseout", onMouseOut);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeaveWindow);
      window.removeEventListener("mouseover", onMouseOver);
      window.removeEventListener("mouseout", onMouseOut);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      cancelAnimationFrame(rafId);
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <>
      <style>{`
        /* Hide the default browser cursor everywhere */
        html, body, a, button, input, textarea, select, [role="button"], .srv-block, .ws, .wi, .faq-item {
          cursor: none !important;
        }

        .custom-cursor-dot {
          position: fixed;
          top: 0;
          left: 0;
          width: 8px;
          height: 8px;
          background: #FF4D00;
          border-radius: 50%;
          pointer-events: none;
          z-index: 99999;
          mix-blend-mode: difference;
          opacity: 0;
          transition: width 0.2s ease, height 0.2s ease, background 0.2s ease, opacity 0.3s ease;
        }

        .custom-cursor-dot.hovered {
          width: 4px;
          height: 4px;
          background: #00B8A0;
        }

        .custom-cursor-ring {
          position: fixed;
          top: 0;
          left: 0;
          width: 36px;
          height: 36px;
          border: 1.5px solid #FF4D00;
          border-radius: 50%;
          pointer-events: none;
          z-index: 99998;
          mix-blend-mode: difference;
          opacity: 0;
          transition: width 0.22s cubic-bezier(0.16, 1, 0.3, 1), 
                      height 0.22s cubic-bezier(0.16, 1, 0.3, 1), 
                      border-color 0.22s ease, 
                      opacity 0.3s ease;
        }

        .custom-cursor-ring.big {
          width: 60px;
          height: 60px;
          border-color: #00B8A0;
          opacity: 0.45;
        }

        .custom-cursor-ring.clicked {
          width: 24px;
          height: 24px;
          border-color: #6B4FFF;
          opacity: 0.8;
        }
      `}</style>
      <div ref={dotRef} className="custom-cursor-dot" />
      <div ref={ringRef} className="custom-cursor-ring" />
    </>
  );
}
