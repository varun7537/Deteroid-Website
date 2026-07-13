"use client";
function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      html  { scroll-behavior: smooth; -webkit-font-smoothing: antialiased; }
      body  { font-family: 'DM Sans', sans-serif; background: #F8F5F0; color: #1A1A2E; overflow-x: hidden; cursor: none; }
      a     { text-decoration: none; }
 
      /* ── Animations ── */
      @keyframes pulse-dot  { 0%,100%{transform:scale(1)} 50%{transform:scale(1.45)} }
      @keyframes slide-up   { from{transform:translateY(110%);opacity:0} to{transform:translateY(0);opacity:1} }
      @keyframes fade-up    { from{opacity:0;transform:translateY(22px)} to{opacity:1;transform:translateY(0)} }
      @keyframes float-blob { 0%,100%{transform:translate(0,0)} 33%{transform:translate(20px,-30px)} 66%{transform:translate(-15px,20px)} }
      @keyframes spin-slow  { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
      @keyframes float-geo  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-20px)} }
      @keyframes float-badge{ 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
      @keyframes marquee    { from{transform:translateX(0)} to{transform:translateX(-50%)} }
      @keyframes blink      { 0%,100%{opacity:1} 50%{opacity:0} }
 
      /* ── Noise overlay ── */
      body::before {
        content: '';
        position: fixed;
        inset: 0;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
        pointer-events: none;
        z-index: 9990;
        opacity: 0.4;
      }
 
      /* ── Scrollbar ── */
      ::-webkit-scrollbar { width: 6px; }
      ::-webkit-scrollbar-track { background: #F8F5F0; }
      ::-webkit-scrollbar-thumb { background: #E8E4DC; border-radius: 3px; }
    `}</style>
  );
}

export default GlobalStyles;