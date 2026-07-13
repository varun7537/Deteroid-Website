"use client";
import dynamic from "next/dynamic";

const ServicesComponent = dynamic(() => import("../../page-components/Services"), {
  ssr: false,
});

export default function Page() {
  return <ServicesComponent />;
}
