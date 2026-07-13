"use client";
import dynamic from "next/dynamic";

const ContactComponent = dynamic(() => import("../../page-components/ContactUs"), {
  ssr: false,
});

export default function Page() {
  return <ContactComponent />;
}
