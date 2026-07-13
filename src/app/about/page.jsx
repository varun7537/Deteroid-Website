"use client";
import dynamic from "next/dynamic";

const AboutComponent = dynamic(() => import("../../page-components/AboutUs"), {
  ssr: false,
});

export default function Page() {
  return <AboutComponent />;
}
