"use client";
// pages/Careers.jsx
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AOS from "aos";
import "aos/dist/aos.css";

import GlobalStyles from "../components/careerpage/GlobalStyles";
import Cursor from "../components/careerpage/Cursor";
import Hero from "../components/careerpage/Hero";
import Marquee from "../components/careerpage/Marquee";
import Jobs from "../components/careerpage/Jobs";
import Culture from "../components/careerpage/Culture";
import CTA from "../components/careerpage/CTA";

gsap.registerPlugin(ScrollTrigger);

export default function Careers() {
  useEffect(() => {
    // ── AOS init ──
    AOS.init({
      duration: 750,
      easing: "cubic-bezier(0.16,1,0.3,1)",
      once: true,
      offset: 60,
    });

    // ── GSAP: parallax blobs ──
    const b1 = document.querySelector(".blob-1");
    const b2 = document.querySelector(".blob-2");
    const ghost = document.querySelector(".h-ghost-el");

    if (b1) {
      gsap.to(b1, {
        x: "+=14",
        y: "-=24",
        scrollTrigger: { trigger: "#hero", start: "top top", end: "bottom top", scrub: true },
      });
    }
    if (b2) {
      gsap.to(b2, {
        x: "-=10",
        y: "+=20",
        scrollTrigger: { trigger: "#hero", start: "top top", end: "bottom top", scrub: true },
      });
    }
    if (ghost) {
      gsap.to(ghost, {
        y: "+=60",
        scrollTrigger: { trigger: "#hero", start: "top top", end: "bottom top", scrub: true },
      });
    }

    // ── GSAP: job cards stagger ──
    gsap.from(".job-card", {
      y: 40,
      opacity: 0,
      duration: 0.75,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: { trigger: "#jobs", start: "top 80%", toggleActions: "play none none none" },
    });

    // ── GSAP: culture cards stagger ──
    gsap.from(".ci-card", {
      y: 40,
      opacity: 0,
      duration: 0.75,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: { trigger: "#culture", start: "top 75%", toggleActions: "play none none none" },
    });

    return () => ScrollTrigger.getAll().forEach(st => st.kill());
  }, []);

  return (
    <>
      <GlobalStyles />
      <Cursor />
      <Hero />
      <Marquee />
      <Jobs />
      <Culture />
      <CTA />
    </>
  );
}