// components/careers/Jobs.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LIGHT_BG_COLORS } from "../../styles/tokens";

const T = {
  FONT: "'Syne', 'DM Sans', sans-serif",
  BODY: "'DM Sans', sans-serif",
};

/* Accent variants per job — each accent uses a distinct palette color */
const ACCENT = {
  o: { cat: LIGHT_BG_COLORS.araticcyan,    lt: `${LIGHT_BG_COLORS.araticcyan}14`,    md: `${LIGHT_BG_COLORS.araticcyan}28`    },
  t: { cat: LIGHT_BG_COLORS.evergreenteal, lt: `${LIGHT_BG_COLORS.evergreenteal}14`, md: `${LIGHT_BG_COLORS.evergreenteal}28` },
  v: { cat: LIGHT_BG_COLORS.emberorange,   lt: `${LIGHT_BG_COLORS.emberorange}14`,   md: `${LIGHT_BG_COLORS.emberorange}28`   },
};

const JOBS = [
  {
    id: "job1",
    accentKey: "o",
    cat: "Sales & Growth",
    filter: "sales",
    badges: ["Remote", "3 Months", "Paid"],
    title: "Business Development Intern",
    desc: "Sales isn't about talking more — it's about understanding people better. Gain real exposure to business growth, closing deals, and building pipelines through hands-on client conversations. Performance-driven: you earn more per successful close.",
    stipend: "₹3000 – 5000 + per client",
    mailSubject: "Application: Business Development Intern",
    details: {
      do: [
        "Lead generation & research (100+ daily)",
        "Cold outreach via email, LinkedIn, calls",
        "Pipeline management & smart follow-ups",
        "Close deals & build lasting relationships",
      ],
      looking: [
        "Curiosity about how businesses grow",
        "Strong communication (verbal + written)",
        "Ability to work independently & take feedback",
        "Drive to learn real sales firsthand",
      ],
      get: [
        "₹3,000 – ₹5,000+ per client closed",
        "Mentorship from founders",
        "Real exposure from week one",
        "Certificate + performance recommendation",
      ],
    },
  },
  {
    id: "job2",
    accentKey: "t",
    cat: "Marketing",
    filter: "marketing",
    badges: ["Remote", "3 Months", "Paid"],
    title: "Social Media & Content Intern",
    desc: "Anyone can post content. Very few create content that actually performs. Learn what drives attention, engagement, and growth through real client accounts and real analytics.",
    stipend: "₹3000 – 5000 + per client",
    mailSubject: "Application: Social Media & Content Intern",
    details: {
      do: [
        "Create reels, posts, carousels for client accounts",
        "Write engaging captions, hooks, CTAs",
        "Manage daily social media operations & scheduling",
        "Analyze performance & iterate based on data",
      ],
      looking: [
        "Creative mindset with eye for trends",
        "Strong writing skills & understanding of tone",
        "Comfort with Instagram, LinkedIn, etLIGHT_BG_COLORS.",
        "Willingness to learn what actually converts",
      ],
      get: [
        "₹3,000 – ₹5,000+ per client closed",
        "Real client account management",
        "Feedback from experienced marketers",
        "Portfolio of live content you can showcase",
      ],
    },
  },
  {
    id: "job3",
    accentKey: "v",
    cat: "Marketing & Growth",
    filter: "marketing",
    badges: ["Remote", "3 Months", "Paid"],
    title: "Marketing & SEO Intern",
    desc: "Can you generate leads without burning cash? We're looking for someone who wants real impact, not just certificates. Learn organic growth, SEO strategy, and paid ads at scale.",
    stipend: "₹3000 – 5000 + per client",
    mailSubject: "Application: Marketing & SEO Intern",
    details: {
      do: [
        "Develop organic growth & SEO strategies",
        "Run and optimize paid ad campaigns",
        "Create content aligned with lead generation goals",
        "Track metrics and report on campaign performance",
      ],
      looking: [
        "Knowledge of SEO fundamentals",
        "Interest in paid ads & conversion optimization",
        "Data-driven mindset (growth metrics > vanity metrics)",
        "Ability to work cross-functionally",
      ],
      get: [
        "₹3,000 – ₹5,000+ per client closed",
        "Hands-on paid + organic experience",
        "Access to real campaign dashboards",
        "Direct mentorship from growth founders",
      ],
    },
  },
];

const FILTERS = [
  { key: "all",       label: "All Roles" },
  { key: "sales",     label: "Sales" },
  { key: "marketing", label: "Marketing" },
];

/* ── Detail Panel ── */
function DetailPanel({ job }) {
  const a = ACCENT[job.accentKey];

  return (
    <motion.div
      key={job.id}
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
      style={{
        background: LIGHT_BG_COLORS.bglt,
        border: `1.5px solid ${LIGHT_BG_COLORS.border}`,
        borderRadius: 20,
        overflow: "hidden",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        boxShadow: `0 8px 32px ${LIGHT_BG_COLORS.bgd}14`,
      }}
    >
      {/* Top accent stripe */}
      <div style={{ height: 3, background: a.cat, flexShrink: 0 }} />

      <div style={{ padding: "32px 36px", flex: 1, display: "flex", flexDirection: "column" }}>

        {/* Category + Apply */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
          <span style={{
            fontFamily: T.FONT,
            fontSize: 10,
            fontWeight: 800,
            letterSpacing: ".16em",
            textTransform: "uppercase",
            color: a.cat,
          }}>
            {job.cat}
          </span>

          <a
            href={`mailto:hello@deteroid.com?subject=${encodeURIComponent(job.mailSubject)}`}
            style={{
              fontFamily: T.FONT,
              fontSize: 11,
              fontWeight: 700,
              padding: "9px 20px",
              borderRadius: 50,
              background: LIGHT_BG_COLORS.bgd,
              color: LIGHT_BG_COLORS.light,
              letterSpacing: ".04em",
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
              gap: 8,
              transition: "background .2s",
              textDecoration: "none",
            }}
            onMouseEnter={e => e.currentTarget.style.background = a.cat}
            onMouseLeave={e => e.currentTarget.style.background = LIGHT_BG_COLORS.bgd}
          >
            Apply Now
            <svg style={{ width: 12, height: 12, fill: "none", stroke: LIGHT_BG_COLORS.light, strokeWidth: 2.5 }} viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Title */}
        <h3 style={{
          fontFamily: T.FONT,
          fontSize: 24,
          fontWeight: 700,
          color: LIGHT_BG_COLORS.dark,
          letterSpacing: "-.03em",
          marginBottom: 14,
          lineHeight: 1.2,
        }}>
          {job.title}
        </h3>

        {/* Badges */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 18 }}>
          {job.badges.map(b => (
            <span key={b} style={{
              fontSize: 10,
              fontWeight: 700,
              padding: "4px 14px",
              borderRadius: 50,
              background: LIGHT_BG_COLORS.bg2,
              color: LIGHT_BG_COLORS.txt2,
              border: `1px solid ${LIGHT_BG_COLORS.border}`,
              fontFamily: T.FONT,
              letterSpacing: ".06em",
              textTransform: "uppercase",
            }}>
              {b}
            </span>
          ))}
        </div>

        {/* Description */}
        <p style={{
          fontSize: 13.5,
          color: LIGHT_BG_COLORS.txt3,
          lineHeight: 1.75,
          marginBottom: 28,
          maxWidth: 520,
        }}>
          {job.desc}
        </p>

        {/* Two-column details grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 0,
          border: `1px solid ${LIGHT_BG_COLORS.border}`,
          borderRadius: 12,
          overflow: "hidden",
          marginBottom: 28,
          flex: 1,
        }}>
          {[
            { label: "What You'll Do",           items: job.details.do },
            { label: "What We're Looking For",   items: job.details.looking },
          ].map(({ label, items }, ci) => (
            <div
              key={label}
              style={{
                padding: "22px 24px",
                borderRight: ci === 0 ? `1px solid ${LIGHT_BG_COLORS.border}` : "none",
                background: ci === 0 ? LIGHT_BG_COLORS.bg2 : LIGHT_BG_COLORS.bglt,
              }}
            >
              <span style={{
                fontFamily: T.FONT,
                fontSize: 9,
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: ".16em",
                color: LIGHT_BG_COLORS.txt3,
                marginBottom: 14,
                display: "block",
              }}>
                {label}
              </span>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 9 }}>
                {items.map((item, i) => (
                  <li key={i} style={{
                    fontSize: 12.5,
                    color: LIGHT_BG_COLORS.txt1,
                    lineHeight: 1.55,
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 8,
                  }}>
                    <span style={{
                      width: 5,
                      height: 5,
                      borderRadius: "50%",
                      background: a.cat,
                      flexShrink: 0,
                      marginTop: 6,
                    }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Compensation footer */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderTop: `1px solid ${LIGHT_BG_COLORS.border}`,
          paddingTop: 20,
        }}>
          <div>
            <span style={{
              fontFamily: T.FONT,
              fontSize: 9,
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: ".16em",
              color: LIGHT_BG_COLORS.txt3,
              display: "block",
              marginBottom: 4,
            }}>
              Compensation
            </span>
            <span style={{
              fontFamily: T.FONT,
              fontSize: 20,
              fontWeight: 700,
              color: LIGHT_BG_COLORS.dark,
              letterSpacing: "-.02em",
            }}>
              {job.stipend}
            </span>
          </div>

          <a
            href={`mailto:hello@deteroid.com?subject=${encodeURIComponent(job.mailSubject)}`}
            style={{
              fontFamily: T.FONT,
              fontSize: 11,
              fontWeight: 700,
              color: a.cat,
              textDecoration: "none",
              letterSpacing: ".06em",
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            Full Details
            <svg style={{ width: 12, height: 12, fill: "none", stroke: "currentColor", strokeWidth: 2.5 }} viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Job Row ── */
function JobRow({ job, isActive, onClick }) {
  const a = ACCENT[job.accentKey];
  const [hov, setHov] = useState(false);

  return (
    <motion.button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      whileTap={{ scale: 0.985 }}
      style={{
        width: "100%",
        textAlign: "left",
        background: isActive ? LIGHT_BG_COLORS.bglt : hov ? LIGHT_BG_COLORS.bglt : "transparent",
        border: `1.5px solid ${isActive ? LIGHT_BG_COLORS.border : "transparent"}`,
        borderRadius: 14,
        padding: "18px 20px",
        cursor: "pointer",
        transition: "all .25s ease",
        boxShadow: isActive ? `0 4px 24px ${LIGHT_BG_COLORS.bgd}12` : "none",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Left accent bar */}
      <motion.div
        style={{
          position: "absolute",
          left: 0,
          top: "20%",
          bottom: "20%",
          width: 3,
          borderRadius: 2,
          background: a.cat,
        }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: isActive ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      <span style={{
        fontFamily: T.FONT,
        fontSize: 9,
        fontWeight: 800,
        letterSpacing: ".14em",
        textTransform: "uppercase",
        color: isActive ? a.cat : LIGHT_BG_COLORS.txt3,
        display: "block",
        marginBottom: 6,
        transition: "color .2s",
      }}>
        {job.cat}
      </span>

      <div style={{
        fontFamily: T.FONT,
        fontSize: 15,
        fontWeight: 700,
        color: LIGHT_BG_COLORS.dark,
        letterSpacing: "-.02em",
        lineHeight: 1.3,
      }}>
        {job.title}
      </div>

      <div style={{
        fontFamily: T.FONT,
        fontSize: 11,
        color: LIGHT_BG_COLORS.txt3,
        marginTop: 8,
        fontWeight: 500,
      }}>
        {job.stipend}
      </div>
    </motion.button>
  );
}

/* ── Main Jobs Section ── */
export function Jobs() {
  const [filter, setFilter] = useState("all");
  const [activeId, setActiveId] = useState("job1");
  const sectionRef = useRef(null);

  const filtered = filter === "all" ? JOBS : JOBS.filter(j => j.filter === filter);

  useEffect(() => {
    if (!filtered.find(j => j.id === activeId)) {
      setActiveId(filtered[0]?.id || null);
    }
  }, [filter]);

  const activeJob = JOBS.find(j => j.id === activeId);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@400;500;600;700&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        #jobs-section {
          font-family: ${T.BODY};
          background: ${LIGHT_BG_COLORS.bg1};
          position: relative;
          padding: 120px 0 140px;
        }

        .jobs-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 56px;
        }

        @media (max-width: 900px) {
          .jobs-layout { flex-direction: column !important; }
          .jobs-left { width: 100% !important; min-width: unset !important; }
          .jobs-right { display: none !important; }
          .jobs-container { padding: 0 24px; }
          #jobs-section { padding: 80px 0; }
          .jobs-header { flex-direction: column !important; align-items: flex-start !important; gap: 24px !important; }
        }

        @media (max-width: 600px) {
          .jobs-container { padding: 0 16px; }
          #jobs-section { padding: 60px 0; }
        }
      `}</style>

      <section id="jobs-section" ref={sectionRef}>
        {/* Top border */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 56,
          right: 56,
          height: 1,
          background: LIGHT_BG_COLORS.border,
        }} />

        <div className="jobs-container">

          {/* Header */}
          <div
            className="jobs-header"
            data-aos="fade-up"
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: 40,
              marginBottom: 72,
            }}
          >
            {/* Left copy */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <div style={{ width: 32, height: 1.5, background: LIGHT_BG_COLORS.araticcyan }} />
                <span style={{
                  fontFamily: T.FONT,
                  fontSize: 10,
                  fontWeight: 800,
                  letterSpacing: ".2em",
                  textTransform: "uppercase",
                  color: LIGHT_BG_COLORS.araticcyan,
                }}>
                  Now Hiring
                </span>
              </div>

              <h2 style={{
                fontFamily: T.FONT,
                fontSize: "clamp(34px, 4.5vw, 58px)",
                fontWeight: 700,
                lineHeight: 0.96,
                letterSpacing: "-.035em",
                color: LIGHT_BG_COLORS.dark,
              }}>
                We're looking for talent.
                <br />
                <span style={{ color: LIGHT_BG_COLORS.txt3, fontWeight: 600 }}>No corporate politics.</span>
              </h2>

              <p style={{
                marginTop: 20,
                fontSize: 14,
                color: LIGHT_BG_COLORS.txt3,
                lineHeight: 1.7,
                maxWidth: 320,
              }}>
                Performance-driven roles. Remote-first. Real projects from day one.
              </p>
            </div>

            {/* Open positions counter */}
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              flexShrink: 0,
              background: LIGHT_BG_COLORS.bglt,
              border: `1.5px solid ${LIGHT_BG_COLORS.border}`,
              borderRadius: 16,
              padding: "20px 28px",
              boxShadow: `0 4px 20px ${LIGHT_BG_COLORS.bgd}0c`,
            }}>
              <span style={{
                fontFamily: T.FONT,
                fontSize: 52,
                fontWeight: 800,
                color: LIGHT_BG_COLORS.araticcyan,
                lineHeight: 1,
              }}>
                3
              </span>
              <div style={{
                fontSize: 13,
                color: LIGHT_BG_COLORS.txt3,
                lineHeight: 1.5,
                fontWeight: 600,
              }}>
                Open<br />Positions
              </div>
            </div>
          </div>

          {/* Body */}
          <div
            className="jobs-layout"
            data-aos="fade-up"
            data-aos-delay="100"
            style={{
              display: "flex",
              gap: 28,
              alignItems: "flex-start",
            }}
          >
            {/* LEFT — job list */}
            <div
              className="jobs-left"
              style={{
                width: 300,
                minWidth: 280,
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              {/* Filter pills */}
              <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
                {FILTERS.map(f => (
                  <button
                    key={f.key}
                    onClick={() => setFilter(f.key)}
                    style={{
                      fontFamily: T.FONT,
                      fontSize: 11,
                      fontWeight: 700,
                      padding: "8px 20px",
                      borderRadius: 50,
                      background: filter === f.key ? LIGHT_BG_COLORS.bgd : LIGHT_BG_COLORS.bglt,
                      color: filter === f.key ? LIGHT_BG_COLORS.light : LIGHT_BG_COLORS.txt1,
                      border: `1.5px solid ${filter === f.key ? LIGHT_BG_COLORS.bgd : LIGHT_BG_COLORS.border}`,
                      letterSpacing: ".06em",
                      textTransform: "uppercase",
                      transition: "all .2s ease",
                      cursor: "pointer",
                    }}
                  >
                    {f.label}
                  </button>
                ))}
              </div>

              {/* Job rows */}
              <AnimatePresence mode="popLayout">
                {filtered.map((job) => (
                  <motion.div
                    key={job.id}
                    layout
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <JobRow
                      job={job}
                      isActive={activeId === job.id}
                      onClick={() => setActiveId(job.id)}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Bottom note */}
              <p style={{
                fontSize: 12,
                color: LIGHT_BG_COLORS.txt3,
                marginTop: 16,
                lineHeight: 1.6,
                padding: "0 4px",
              }}>
                Don't see a fit?{" "}
                <a
                  href="mailto:hello@deteroid.com?subject=Open Application"
                  style={{ color: LIGHT_BG_COLORS.araticcyan, fontWeight: 600, textDecoration: "none" }}
                >
                  Send an open application →
                </a>
              </p>
            </div>

            {/* RIGHT — detail panel */}
            <div
              className="jobs-right"
              style={{
                flex: 1,
                minHeight: 540,
                position: "sticky",
                top: 32,
              }}
            >
              <AnimatePresence mode="wait">
                {activeJob && <DetailPanel key={activeJob.id} job={activeJob} />}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default Jobs;