import React, { useEffect, useState, useCallback } from "react";
import { NavLink } from "react-router-dom";
import { FONT, LIGHT_BG_COLORS } from "../styles/tokens";

const NAV_LINKS = [
  { label: "Home",     to: "/"         },
  { label: "About",    to: "/about"    },
  { label: "Services", to: "/services" },
  { label: "Career",   to: "/career"   },
  { label: "Contact",  to: "/contact"  },
];

const MOBILE_MENU_CSS = `
  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50%       { opacity: 0.7; transform: scale(1.35); }
  }

  /* Hamburger lines */
  .nav-hamburger {
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    width: 40px;
    height: 40px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
    border-radius: 8px;
    transition: background 0.2s ease;
  }
  .nav-hamburger:hover {
    background: rgba(33,158,188,0.10);
  }
  .nav-hamburger span {
    display: block;
    width: 22px;
    height: 2px;
    border-radius: 2px;
    background: ${LIGHT_BG_COLORS.txt1};
    transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
    transform-origin: center;
  }
  .nav-hamburger.open span:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
  }
  .nav-hamburger.open span:nth-child(2) {
    opacity: 0;
    transform: scaleX(0);
  }
  .nav-hamburger.open span:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);
  }

  /* Mobile dropdown */
  .nav-mobile-menu {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 40;
    background: rgba(244,251,254,0.97);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 80px 32px 48px;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
  }
  .nav-mobile-menu.open {
    opacity: 1;
    pointer-events: all;
  }
  .nav-mobile-link {
    font-size: 28px;
    font-weight: 800;
    letter-spacing: -0.03em;
    color: ${LIGHT_BG_COLORS.txt1};
    text-decoration: none;
    padding: 10px 0;
    transition: color 0.2s ease;
    font-family: ${FONT};
  }
  .nav-mobile-link:hover,
  .nav-mobile-link.active {
    color: ${LIGHT_BG_COLORS.araticcyan};
  }
  .nav-mobile-cta {
    margin-top: 24px;
    font-family: ${FONT};
    font-size: 14px;
    font-weight: 700;
    padding: 13px 32px;
    border-radius: 999px;
    background: ${LIGHT_BG_COLORS.araticcyan};
    color: ${LIGHT_BG_COLORS.light};
    border: none;
    cursor: pointer;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    box-shadow: 0 8px 24px rgba(33,158,188,0.22);
    transition: background 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
  }
  .nav-mobile-cta:hover {
    background: ${LIGHT_BG_COLORS.accent};
    transform: translateY(-2px);
    box-shadow: 0 14px 32px rgba(251,133,0,0.28);
  }

  @media (max-width: 768px) {
    .nav-hamburger    { display: flex; }
    .nav-desktop-links { display: none !important; }
    .nav-desktop-cta   { display: none !important; }
    .nav-mobile-menu   { display: flex; }
  }
`;

export function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  // Shared active-style resolver for NavLink
  const desktopLinkStyle = ({ isActive }) => ({
    fontFamily: FONT,
    fontSize: 14,
    fontWeight: 600,
    color: isActive ? LIGHT_BG_COLORS.araticcyan : LIGHT_BG_COLORS.txt2,
    textDecoration: "none",
    position: "relative",
  });

  return (
    <>
      <style>{MOBILE_MENU_CSS}</style>

      {/* ── Desktop / Scrolled Navbar ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(255,255,255,0.92)"
            : "rgba(244,251,254,0.75)",
          backdropFilter:       "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: scrolled
            ? `1px solid ${LIGHT_BG_COLORS.border}`
            : "1px solid transparent",
          padding: scrolled ? "14px 0" : "22px 0",
        }}
      >
        <div
          className="flex items-center justify-between"
          style={{ maxWidth: 1280, margin: "0 auto", padding: "0 56px" }}
        >
          {/* Logo */}
          <NavLink
            to="/"
            onClick={closeMenu}
            style={{
              fontFamily:     FONT,
              fontSize:       24,
              fontWeight:     900,
              color:          LIGHT_BG_COLORS.txt1,
              letterSpacing:  "-0.03em",
              textDecoration: "none",
              display:        "flex",
              alignItems:     "center",
              gap:            8,
            }}
          >
            Deteroid
            <span
              style={{
                width:        8,
                height:       8,
                borderRadius: "50%",
                background:   LIGHT_BG_COLORS.accent,
                display:      "inline-block",
                animation:    "pulse 2s infinite",
                boxShadow:    `0 0 12px ${LIGHT_BG_COLORS.accent}`,
              }}
            />
          </NavLink>

          {/* Desktop Nav Links */}
          <div className="nav-desktop-links hidden md:flex items-center gap-9">
            {NAV_LINKS.map(({ label, to }) => (
              <NavLink
                key={label}
                to={to}
                end={to === "/"}
                className="relative group transition-all duration-300"
                style={desktopLinkStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = LIGHT_BG_COLORS.araticcyan;
                }}
                onMouseLeave={(e) => {
                  // Re-derive active state on mouse-leave
                  const isActive = e.currentTarget.getAttribute("aria-current") === "page";
                  e.currentTarget.style.color = isActive
                    ? LIGHT_BG_COLORS.araticcyan
                    : LIGHT_BG_COLORS.txt2;
                }}
              >
                {({ isActive }) => (
                  <>
                    {label}
                    {/* Underline — always rendered; width driven by active or group-hover */}
                    <span
                      style={{
                        position:   "absolute",
                        bottom:     -5,
                        left:       0,
                        width:      isActive ? "100%" : 0,
                        height:     2,
                        borderRadius: 10,
                        background: LIGHT_BG_COLORS.araticcyan,
                        transition: "width 0.3s ease",
                      }}
                      className={!isActive ? "group-hover:w-full" : ""}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Desktop CTA */}
          <NavLink
            to="/contact"
            className="nav-desktop-cta"
            style={{
              fontFamily:     FONT,
              fontSize:       13,
              fontWeight:     700,
              padding:        "11px 24px",
              borderRadius:   999,
              background:     LIGHT_BG_COLORS.araticcyan,
              color:          LIGHT_BG_COLORS.light,
              border:         `1px solid ${LIGHT_BG_COLORS.araticcyan}`,
              display:        "inline-flex",
              alignItems:     "center",
              justifyContent: "center",
              gap:            8,
              transition:     "all 0.25s ease",
              boxShadow:      "0 8px 24px rgba(33,158,188,0.22)",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background  = LIGHT_BG_COLORS.accent;
              e.currentTarget.style.border      = `1px solid ${LIGHT_BG_COLORS.accent}`;
              e.currentTarget.style.transform   = "translateY(-2px)";
              e.currentTarget.style.boxShadow   = "0 14px 32px rgba(251,133,0,0.28)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background  = LIGHT_BG_COLORS.araticcyan;
              e.currentTarget.style.border      = `1px solid ${LIGHT_BG_COLORS.araticcyan}`;
              e.currentTarget.style.transform   = "translateY(0px)";
              e.currentTarget.style.boxShadow   = "0 8px 24px rgba(33,158,188,0.22)";
            }}
          >
            Get Started
            <span style={{ fontSize: 14 }}>→</span>
          </NavLink>

          {/* Mobile Hamburger */}
          <button
            className={`nav-hamburger${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* ── Mobile Full-screen Menu ── */}
      <div className={`nav-mobile-menu${menuOpen ? " open" : ""}`} role="dialog" aria-modal="true">
        {NAV_LINKS.map(({ label, to }) => (
          <NavLink
            key={label}
            to={to}
            end={to === "/"}
            className={({ isActive }) =>
              `nav-mobile-link${isActive ? " active" : ""}`
            }
            onClick={closeMenu}
          >
            {label}
          </NavLink>
        ))}
        <NavLink
          to="/contact"
          className="nav-mobile-cta"
          onClick={closeMenu}
        >
          Get Started <span>→</span>
        </NavLink>
      </div>
    </>
  );
}

export default Navbar;