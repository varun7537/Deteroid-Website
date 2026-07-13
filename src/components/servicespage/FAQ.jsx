"use client";
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { motion } from 'framer-motion'
import { LIGHT_BG_COLORS } from '../../styles/tokens'

const faqs = [
  {
    q: 'What types of clients do you work with?',
    a: 'We primarily work with startups, scale-ups, and modern businesses that need a reliable technical partner — not just a vendor. Our clients range from pre-launch founders building their first product to established teams rebuilding legacy systems. If you need design, development, and security to work together without managing three separate agencies, Deteroid is the right fit.',
  },
  {
    q: 'Can we start with a single service?',
    a: "Yes — and we encourage it if that's where you are. Many clients start with a single service (a security audit, a design system, or a specific web app) and expand the relationship over time. Every engagement includes baseline security regardless of the primary service.",
  },
  {
    q: 'How fast can you deliver?',
    a: 'Our standard turnaround is 48 hours for scoped engagements. This is possible because we run design and development in parallel — by the time visual review happens, components are already built. Complex applications take longer and we scope those timelines honestly upfront.',
  },
  {
    q: 'What does your security service include?',
    a: 'Every Deteroid project includes baseline security at no extra cost: OWASP Top 10 mitigations, CSP headers, CSRF protection, XSS sanitization, and rate limiting. Our premium tier adds full penetration testing, vulnerability reports, automated scanning in CI/CD, and security architecture review. AI Security covers prompt injection, model exfiltration, and AI-specific attack surfaces.',
  },
  {
    q: 'How do you integrate AI into existing products?',
    a: 'We start with a technical audit of your existing stack to identify integration points — search, recommendations, content generation, internal tooling, or user-facing AI features. We design the AI layer to work with your data architecture rather than around it. We support OpenAI, Anthropic, Gemini, and open-source model deployments. Every AI integration includes a security review for prompt injection and data exposure risks.',
  },
]

// ─── Plus / X Icon ─────────────────────────────────────────────────────────────
const PlusIcon = ({ open }) => (
  <svg
    width="12" height="12" fill="none"
    stroke={open ? LIGHT_BG_COLORS.light : LIGHT_BG_COLORS.txt3}
    strokeWidth="2.5" viewBox="0 0 24 24"
    style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}
  >
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
)

const ArrowIcon = () => (
  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
)

// ─── FAQ Item ──────────────────────────────────────────────────────────────────
function FaqItem({ item, isOpen, onToggle }) {
  const bodyRef = useRef(null)

  useEffect(() => {
    if (!bodyRef.current) return
    gsap.to(bodyRef.current, { maxHeight: isOpen ? 500 : 0, duration: 0.45, ease: 'power3.inOut' })
  }, [isOpen])

  return (
    <div style={{
      borderRadius: 24,
      border: `1.5px solid ${isOpen ? LIGHT_BG_COLORS.araticcyan : LIGHT_BG_COLORS.border}`,
      background: LIGHT_BG_COLORS.bglt,
      overflow: 'hidden',
      boxShadow: isOpen ? `0 20px 56px rgba(33,158,188,0.1)` : `0 6px 20px rgba(2,48,71,0.04)`,
      marginBottom: 18,
      transition: 'all 0.35s ease',
    }}>
      <button
        onClick={onToggle}
        style={{
          display: 'flex', alignItems: 'flex-start',
          justifyContent: 'space-between', gap: 20,
          padding: '28px 32px', width: '100%',
          background: 'none', border: 'none',
          fontFamily: 'inherit', textAlign: 'left', cursor: 'pointer',
        }}
      >
        {/* Question text */}
        <span style={{
          fontSize: 16, fontWeight: 600, lineHeight: 1.5,
          color: isOpen ? LIGHT_BG_COLORS.dark : LIGHT_BG_COLORS.txt1,
          transition: 'color 0.25s',
        }}>
          {item.q}
        </span>

        {/* Toggle button — araticcyan when open, bordered when closed */}
        <div style={{
          width: 28, height: 28, borderRadius: '50%',
          background: isOpen ? LIGHT_BG_COLORS.araticcyan : LIGHT_BG_COLORS.bglt,
          border: `1.5px solid ${isOpen ? LIGHT_BG_COLORS.araticcyan : LIGHT_BG_COLORS.border}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0, marginTop: 2, transition: 'all 0.3s',
        }}>
          <PlusIcon open={isOpen} />
        </div>
      </button>

      {/* Answer body */}
      <div ref={bodyRef} style={{ maxHeight: 0, overflow: 'hidden' }}>
        <p style={{
          padding: '0 32px 28px',
          fontSize: 15, lineHeight: 1.9,
          color: LIGHT_BG_COLORS.txt3,
        }}>
          {item.a}
        </p>
      </div>
    </div>
  )
}

// ─── FAQ Section ───────────────────────────────────────────────────────────────
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i))

  const links = [
    { label: 'Email us directly', href: 'mailto:hello@deteroid.com', color: LIGHT_BG_COLORS.araticcyan },
    { label: 'Book a call instead', href: '#cta',                    color: LIGHT_BG_COLORS.evergreenteal },
  ]

  return (
    <>
      <style>{`
        #faq .faq-grid {
          display: grid;
          grid-template-columns: minmax(300px, 360px) 1fr;
          gap: 90px;
          align-items: start;
        }
        #faq .faq-sticky { position: sticky; top: 120px; }

        @media (max-width: 1024px) {
          #faq .faq-grid { grid-template-columns: 1fr !important; gap: 56px !important; }
          #faq .faq-sticky { position: static !important; }
        }
        @media (max-width: 640px) {
          #faq { padding: 100px 0 !important; }
          #faq .container { padding: 0 20px !important; }
        }
      `}</style>

      <section
        id="faq"
        style={{
          padding: '140px 0',
          background: LIGHT_BG_COLORS.bg1,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Subtle bg glow — evergreenteal bottom-right */}
        <div style={{
          position: 'absolute', width: 500, height: 500, borderRadius: '50%',
          background: 'rgba(64,138,113,0.05)', bottom: -200, right: -160,
          filter: 'blur(60px)', pointerEvents: 'none',
        }} />

        <div
          className="container"
          style={{ maxWidth: 1320, margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 2 }}
        >
          <div className="faq-grid">

            {/* ── Left sticky panel ── */}
            <div className="faq-sticky" data-aos="fade-right" data-aos-duration="700">

              {/* Eyebrow — Aratic araticcyan */}
              <span style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 11, fontWeight: 700,
                letterSpacing: '0.18em', textTransform: 'uppercase',
                color: LIGHT_BG_COLORS.araticcyan, marginBottom: 18, display: 'block',
              }}>
                FAQ
              </span>

              {/* Heading */}
              <h2 style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: 'clamp(32px,4vw,54px)',
                fontWeight: 800, lineHeight: 1.04,
                color: LIGHT_BG_COLORS.dark, marginBottom: 20,
              }}>
                We&apos;ve Got
                <br />
                <span style={{ color: LIGHT_BG_COLORS.araticcyan }}>Answers.</span>
              </h2>

              {/* Description */}
              <p style={{
                fontSize: 16, lineHeight: 1.85,
                color: LIGHT_BG_COLORS.txt3, marginBottom: 32,
              }}>
                The questions we get most often — answered directly.
              </p>

              {/* CTA links */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {links.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 8,
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: 13, fontWeight: 700,
                      textDecoration: 'none',
                      letterSpacing: '0.04em', textTransform: 'uppercase',
                      color: link.color,
                    }}
                    whileHover={{ gap: 14, transition: { duration: 0.2 } }}
                  >
                    {link.label} <ArrowIcon />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* ── Right FAQ list ── */}
            <div data-aos="fade-left" data-aos-duration="700" data-aos-delay="150">
              {faqs.map((item, i) => (
                <FaqItem
                  key={i}
                  item={item}
                  isOpen={openIndex === i}
                  onToggle={() => toggle(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}