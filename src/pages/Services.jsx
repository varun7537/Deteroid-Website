import React from "react";
import CTA from "../components/servicespage/CTA";
import Cursor from "../components/servicespage/Cursor";
import FAQ from "../components/servicespage/FAQ";
import Hero from "../components/servicespage/Hero";
import Marquee from "../components/servicespage/Marquee";
import ServiceSection from "../components/servicespage/ServiceSection";
import Why from "../components/servicespage/Why";

export default function Services() {
  return (
    <>
    <Hero />
    <Marquee />
    <ServiceSection />
    <Cursor />
    <Why />
    <FAQ />
    <CTA />
    </>
  );
}