"use client";
import React from "react";
import Cursor from "../components/contactuspage/Cursor";
import Hero from "../components/contactuspage/Hero";
import StatCard from "../components/contactuspage/StatCard";
import Marquee from "../components/contactuspage/Marquee";
import FloatingShapes from "../components/contactuspage/FloatingShapes";
import FormSection from "../components/contactuspage/FormSection";
import Channels from "../components/contactuspage/Channels";
import FAQ from "../components/contactuspage/FAQ";
import CTA from "../components/contactuspage/CTA";


export default function ContactUs() {
  return (
    <>
      <Cursor />
        <Hero />
        <StatCard />
        <Marquee />
        <FloatingShapes />
        <Channels />
        <FormSection />
        <FAQ />
        <CTA />
    </>
  );
}