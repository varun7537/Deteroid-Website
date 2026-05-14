import React from "react";
import GlobalStyles from "../components/homepage/GlobalStyles";
import Cursor from "../components/homepage/Cursor";
import Hero from "../components/homepage/Hero";
import Marquee from "../components/homepage/Marquee";
import Stats from "../components/homepage/Stats";
import Trust from "../components/homepage/Trust";
import Features from "../components/homepage/Features";
import Process from "../components/homepage/Process";
import CTA from "../components/homepage/CTA";

export default function Home() {
  return (
    <>
      <GlobalStyles />
      <Cursor />
      <Hero />
      <Marquee />
      <Stats />
      <Trust />
      <Features />
      <Process />
      <CTA />
    </>
  );
}