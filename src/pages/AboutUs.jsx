import React from "react";
import GlobalStyles from "../components/aboutus/GlobalStyles";
import Cursor from "../components/aboutus/Cursor";
import Navbar from "../components/Navbar";
import Hero from "../components/aboutus/Hero";
import Marquee from "../components/aboutus/Marquee";
import Mission from "../components/aboutus/Mission";
import Values from "../components/aboutus/Values";
import Story from "../components/aboutus/Story";
import Team from "../components/aboutus/Team";
import Approach from "../components/aboutus/Approach";
import CTA from "../components/aboutus/CTA";
import Footer from "../components/Footer";

export default function AboutUs() {
  return (
    <>
      <GlobalStyles />
      <Cursor />
      <div
        style={{
          minHeight:  "100vh",
          background: "#F8F5F0",
          color:      "#1A1A2E",
          overflowX:  "hidden",
        }}
      >
        <Hero />
        <Marquee />
        <Mission />
        <Values />
        <Story />
        <Team />
        <Approach />
        <CTA />
      </div>
    </>
  );
}