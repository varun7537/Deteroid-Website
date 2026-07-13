"use client";
import dynamic from "next/dynamic";

const CareerComponent = dynamic(() => import("../../page-components/Career"), {
  ssr: false,
});

export default function Page() {
  return <CareerComponent />;
}
