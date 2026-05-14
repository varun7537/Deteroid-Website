// components/careers/Cursor.jsx
import React from "react";
import { useCursor } from "../../hooks/useCursor";

export function Cursor() {
  const { dotRef, ringRef } = useCursor();
  return (
    <>
      <div ref={dotRef}  className="c-dot" />
      <div ref={ringRef} className="c-ring" />
    </>
  );
}

export default Cursor;