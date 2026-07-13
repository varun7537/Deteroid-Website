"use client";
import dynamic from "next/dynamic";

const HomeComponent = dynamic(() => import("../page-components/Home"), {
  ssr: false,
});

export default function Page() {
  return <HomeComponent />;
}
