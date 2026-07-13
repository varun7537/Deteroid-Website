"use client";
// components/contact/ContactForm.jsx
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { LIGHT_BG_COLORS } from '../../styles/tokens'

const FONT = {
  display: "'Outfit', sans-serif",
  body:    "'DM Sans', sans-serif",
}

const FORM_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap');

  .cf-wrap * { box-sizing: border-box; margin: 0; padding: 0; }

  .form-input {
    width: 100%;
    height: 50px;
    background: ${LIGHT_BG_COLORS.bg1};
    border: 1.5px solid ${LIGHT_BG_COLORS.border};
    border-radius: 12px;
    padding: 0 16px;
    font-family: 'DM Sans', sans-serif;
    font-size: 14.5px;
    color: ${LIGHT_BG_COLORS.txt1};
    outline: none;
    transition: border-color 0.25s ease, box-shadow 0.25s ease, background 0.2s ease;
    -webkit-appearance: none;
    appearance: none;
  }

  .form-input::placeholder {
    color: ${LIGHT_BG_COLORS.border};
    font-weight: 400;
  }

  .form-input:focus {
    border-color: ${LIGHT_BG_COLORS.araticcyan};
    box-shadow: 0 0 0 3.5px ${LIGHT_BG_COLORS.araticcyan}1a;
    background: ${LIGHT_BG_COLORS.bglt};
  }

  .form-input:hover:not(:focus) {
    border-color: ${LIGHT_BG_COLORS.araticcyan}66;
  }

  textarea.form-input {
    height: auto;
    padding-top: 14px;
    padding-bottom: 14px;
    resize: none;
    line-height: 1.7;
  }

  select.form-input {
    cursor: pointer;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%236B8A96' stroke-width='2.2' viewBox='0 0 24 24'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 16px center;
    padding-right: 40px;
    background-color: ${LIGHT_BG_COLORS.bg1};
  }

  .form-2col {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
  }

  @media (max-width: 600px) {
    .form-2col { grid-template-columns: 1fr; }
  }

  .cf-label {
    display: block;
    font-family: 'DM Sans', sans-serif;
    font-size: 11.5px;
    font-weight: 600;
    color: ${LIGHT_BG_COLORS.txt3};
    letter-spacing: 0.06em;
    text-transform: uppercase;
    margin-bottom: 8px;
  }

  .cf-field { display: flex; flex-direction: column; }

  select.form-input::-ms-expand { display: none; }
`

const SERVICES = [
  'Web Development', 'UI/UX Design', 'AI Integration',
  'Security Audit', 'Penetration Testing', 'Cloud Architecture',
]

const INITIAL_FORM = { name: '', email: '', company: '', service: '', budget: '', message: '' }

function Field({ label, children }) {
  return (
    <div className="cf-field">
      <label className="cf-label">{label}</label>
      {children}
    </div>
  )
}

function Spinner() {
  return (
    <motion.span
      animate={{ rotate: 360 }}
      transition={{ duration: 0.75, repeat: Infinity, ease: 'linear' }}
      style={{
        display: 'inline-block', width: 17, height: 17,
        border: '2.5px solid rgba(255,255,255,0.3)',
        borderTopColor: '#fff', borderRadius: '50%', flexShrink: 0,
      }}
    />
  )
}

function CheckIcon() {
  return (
    <svg width="32" height="32" fill="none" stroke={LIGHT_BG_COLORS.evergreenteal} strokeWidth="2.8"
      viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5"
      viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

export default function ContactForm({ setBig = () => {} }) {
  const [form, setForm]       = useState(INITIAL_FORM)
  const [sent, setSent]       = useState(false)
  const [sending, setSending] = useState(false)
  const [errors, setErrors]   = useState({})

  const set = (key) => (e) => {
    setForm((prev) => ({ ...prev, [key]: e.target.value }))
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: '' }))
  }

  const validate = () => {
    const errs = {}
    if (!form.name.trim())    errs.name    = 'Name is required'
    if (!form.email.trim())   errs.email   = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Enter a valid email'
    if (!form.message.trim()) errs.message = 'Message is required'
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setSending(true)
    setTimeout(() => { setSending(false); setSent(true) }, 1800)
  }

  const handleReset = () => { setForm(INITIAL_FORM); setErrors({}); setSent(false) }

  return (
    <>
      <style>{FORM_CSS}</style>

      <AnimatePresence mode="wait">

        {/* SUCCESS */}
        {sent ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.94, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -8 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{
              background: LIGHT_BG_COLORS.bglt,
              border: `1.5px solid ${LIGHT_BG_COLORS.border}`,
              borderTop: `4px solid ${LIGHT_BG_COLORS.evergreenteal}`,
              borderRadius: 24,
              padding: '80px 48px',
              textAlign: 'center',
              minHeight: 380,
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
            }}
          >
            <motion.div
              initial={{ scale: 0, rotate: -15 }}
              animate={{ scale: [0, 1.2, 1], rotate: [-15, 5, 0] }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{
                width: 76, height: 76, borderRadius: '50%',
                background: LIGHT_BG_COLORS.bg3,
                border: `1px solid ${LIGHT_BG_COLORS.border}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 28,
                boxShadow: `0 8px 32px ${LIGHT_BG_COLORS.evergreenteal}22`,
              }}
            >
              <CheckIcon />
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: FONT.display, fontSize: 28, fontWeight: 700,
                color: LIGHT_BG_COLORS.dark, marginBottom: 12, letterSpacing: '-0.025em',
              }}
            >
              Message sent!
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: FONT.body, color: LIGHT_BG_COLORS.txt3,
                fontSize: 15.5, lineHeight: 1.75, marginBottom: 32,
              }}
            >
              We'll get back to you within 2 hours.
              <br />Real person, real reply — check your inbox.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              onClick={handleReset}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              style={{
                fontFamily: FONT.display, fontSize: 13, fontWeight: 700,
                color: LIGHT_BG_COLORS.txt3, background: 'transparent',
                border: `1.5px solid ${LIGHT_BG_COLORS.border}`, borderRadius: 50,
                padding: '10px 24px', cursor: 'pointer', letterSpacing: '0.02em',
              }}
            >
              Send another message
            </motion.button>
          </motion.div>

        ) : (

          /* FORM */
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{
              background: LIGHT_BG_COLORS.bglt,
              border: `1.5px solid ${LIGHT_BG_COLORS.border}`,
              borderRadius: 24,
              padding: '36px 36px 32px',
              boxShadow: `0 4px 32px ${LIGHT_BG_COLORS.bgd}0d`,
            }}
          >
            <form className="cf-wrap" onSubmit={handleSubmit} noValidate>

              {/* Name / Email */}
              <div className="form-2col" style={{ marginBottom: 14 }}>
                <Field label="Your Name">
                  <input className="form-input" type="text" placeholder="Jane Smith"
                    value={form.name} onChange={set('name')} autoComplete="name" />
                  {errors.name && <ErrorMsg>{errors.name}</ErrorMsg>}
                </Field>
                <Field label="Email Address">
                  <input className="form-input" type="email" placeholder="jane@company.com"
                    value={form.email} onChange={set('email')} autoComplete="email" />
                  {errors.email && <ErrorMsg>{errors.email}</ErrorMsg>}
                </Field>
              </div>

              {/* Company / Service */}
              <div className="form-2col" style={{ marginBottom: 14 }}>
                <Field label="Company">
                  <input className="form-input" type="text" placeholder="Apple InLIGHT_BG_COLORS."
                    value={form.company} onChange={set('company')} autoComplete="organization" />
                </Field>
                <Field label="Service Needed">
                  <select className="form-input" value={form.service} onChange={set('service')}>
                    <option value="">Select a service</option>
                    {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </Field>
              </div>

              {/* Budget */}
              <div style={{ marginBottom: 14 }}>
                <Field label="Project Budget">
                  <input className="form-input" type="text"
                    placeholder="e.g. ₹50,000 – ₹1,00,000"
                    value={form.budget} onChange={set('budget')} />
                </Field>
              </div>

              {/* Message */}
              <div style={{ marginBottom: 28 }}>
                <Field label="Message">
                  <textarea className="form-input" rows={5}
                    placeholder="Tell us about your project — goals, timeline, anything relevant..."
                    value={form.message} onChange={set('message')} />
                  {errors.message && <ErrorMsg>{errors.message}</ErrorMsg>}
                </Field>
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={sending}
                whileHover={!sending ? { y: -2, boxShadow: `0 20px 52px ${LIGHT_BG_COLORS.araticcyan}44` } : {}}
                whileTap={!sending ? { scale: 0.98 } : {}}
                onMouseEnter={() => setBig(true)}
                onMouseLeave={() => setBig(false)}
                style={{
                  width: '100%', height: 56,
                  background: sending
                    ? LIGHT_BG_COLORS.border
                    : `linear-gradient(135deg, ${LIGHT_BG_COLORS.araticcyan}, ${LIGHT_BG_COLORS.evergreenteal})`,
                  color: LIGHT_BG_COLORS.light,
                  fontFamily: FONT.display, fontSize: 15, fontWeight: 700,
                  borderRadius: 50, border: 'none',
                  cursor: sending ? 'not-allowed' : 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                  boxShadow: sending ? 'none' : `0 8px 28px ${LIGHT_BG_COLORS.araticcyan}38`,
                  transition: 'background 0.25s ease, box-shadow 0.25s ease',
                  letterSpacing: '-0.01em',
                }}
              >
                {sending ? <><Spinner /> Sending…</> : <>Send Message <ArrowIcon /></>}
              </motion.button>

              {/* Privacy note */}
              <p style={{
                fontFamily: FONT.body, fontSize: 12, color: LIGHT_BG_COLORS.txt3,
                textAlign: 'center', marginTop: 16, lineHeight: 1.6,
              }}>
                🔒 Your information is private and never shared.
              </p>

            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function ErrorMsg({ children }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      style={{
        display: 'block', fontFamily: "'DM Sans', sans-serif",
        fontSize: 11.5, fontWeight: 500,
        color: LIGHT_BG_COLORS.emberorange, marginTop: 5, paddingLeft: 2,
      }}
    >
      {children}
    </motion.span>
  )
}