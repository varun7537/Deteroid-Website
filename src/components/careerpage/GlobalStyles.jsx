// components/careers/GlobalStyles.jsx
import React from "react";

export function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');

      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      html  { scroll-behavior: smooth; -webkit-font-smoothing: antialiased; }
      body  { font-family: 'DM Sans', sans-serif; background: #F8F5F0; color: #1A1A2E; overflow-x: hidden; cursor: none; }
      a     { text-decoration: none; }
      button { cursor: none; }

      /* ── Noise overlay ── */
      body::after {
        content: '';
        position: fixed; inset: 0;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
        pointer-events: none; z-index: 9990; opacity: .4;
      }

      /* ── Cursor ── */
      .c-dot {
        position: fixed; width: 8px; height: 8px; background: #FF4D00;
        border-radius: 50%; pointer-events: none; z-index: 9999;
        transform: translate(-50%,-50%); mix-blend-mode: multiply; transition: transform .08s;
      }
      .c-ring {
        position: fixed; width: 36px; height: 36px; border: 1.5px solid #FF4D00;
        border-radius: 50%; pointer-events: none; z-index: 9998;
        transform: translate(-50%,-50%);
        transition: width .18s, height .18s, opacity .18s;
        mix-blend-mode: multiply; opacity: .55;
      }
      .c-ring.big { width: 64px; height: 64px; opacity: .2; }

      /* ── Keyframes ── */
      @keyframes pls      { 0%,100%{transform:scale(1)} 50%{transform:scale(1.5)} }
      @keyframes bd       { 0%,100%{transform:translate(0,0)} 40%{transform:translate(16px,-20px)} 70%{transform:translate(-12px,14px)} }
      @keyframes spin     { from{transform:rotate(0)} to{transform:rotate(360deg)} }
      @keyframes flt      { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-16px)} }
      @keyframes flt-rev  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(16px)} }
      @keyframes mq       { from{transform:translateX(0)} to{transform:translateX(-50%)} }
      @keyframes blink    { 0%,100%{opacity:1} 50%{opacity:0} }
      @keyframes snip-flt { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
      @keyframes cta-spin { from{transform:translate(-50%,-50%) rotate(0)} to{transform:translate(-50%,-50%) rotate(360deg)} }
      @keyframes fu       { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
      @keyframes su       { from{transform:translateY(110%);opacity:0} to{transform:translateY(0);opacity:1} }

      /* ── Hero clip animations ── */
      .h1-line-1 { animation: su .9s cubic-bezier(.16,1,.3,1) .08s both; }
      .h1-line-2 { animation: su .9s cubic-bezier(.16,1,.3,1) .2s both; }
      .h1-line-3 { animation: su .9s cubic-bezier(.16,1,.3,1) .32s both; }
      .hero-sub-anim { animation: fu .9s .5s both; }
      .hero-btns-anim { animation: fu .9s .65s both; }
      .hero-badges-anim { animation: fu .9s .8s both; }
      .hero-right-anim { animation: fu .9s .3s both; }

      /* ── Blobs / geo ── */
      .blob-1 { animation: bd 9s ease-in-out infinite; }
      .blob-2 { animation: bd 12s ease-in-out infinite reverse; }
      .blob-3 { animation: bd 7s ease-in-out infinite 2s; }
      .geo-1  { animation: spin 24s linear infinite; }
      .geo-2  { animation: flt 8s ease-in-out infinite; }
      .geo-3  { animation: flt-rev 10s ease-in-out infinite; }

      /* ── Snippet badges ── */
      .snip-badge-anim  { animation: snip-flt 4s ease-in-out infinite; }
      .snip-badge2-anim { animation: snip-flt 5s 2s ease-in-out infinite; }
      .blink            { animation: blink 1.1s step-end infinite; }

      /* ── Marquee ── */
      .mq-track { animation: mq 26s linear infinite; }
      .mq-track:hover { animation-play-state: paused; }

      /* ── CTA ring ── */
      .cta-ring { animation: cta-spin 50s linear infinite; }

      /* ── Job card expand ── */
      .jc-details { max-height: 0; overflow: hidden; transition: max-height .5s ease; }
      .job-open .jc-details { max-height: 700px; }
      .jc-toggle-icon { transition: transform .3s; }
      .job-open .jc-toggle-icon { transform: rotate(180deg); }

      /* ── Culture card top bar ── */
      .ci-bar-o::before { background: linear-gradient(90deg,#FF4D00,#FF8A50); }
      .ci-bar-t::before { background: linear-gradient(90deg,#00B8A0,#00D4B8); }
      .ci-bar-v::before { background: linear-gradient(90deg,#6B4FFF,#9B7FFF); }
      .ci-bar-i::before { background: linear-gradient(90deg,#1A1A2E,#3D3D5C); }

      /* ── n-dot ── */
      .n-dot { animation: pls 2s ease-in-out infinite; }

      /* ── Scrollbar ── */
      ::-webkit-scrollbar { width: 6px; }
      ::-webkit-scrollbar-track { background: #F8F5F0; }
      ::-webkit-scrollbar-thumb { background: #E5E1D8; border-radius: 3px; }
    `}</style>
  );
}

export default GlobalStyles;