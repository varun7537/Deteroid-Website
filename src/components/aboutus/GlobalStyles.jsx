import React from "react";

export default function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap');

      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      html  { scroll-behavior: smooth; }
      body  { font-family: 'Syne', sans-serif; background: #F8F5F0; overflow-x: hidden; }
      a     { text-decoration: none; }

      @keyframes blink     { 0%,100%{opacity:1}  50%{opacity:0} }
      @keyframes floatSh   { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
      @keyframes spinSlow  { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
      @keyframes marquee   { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }

      .marquee-track              { animation: marquee 28s linear infinite; }
      .marquee-track:hover        { animation-play-state: paused; }
    `}</style>
  );
}