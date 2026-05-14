// src/styles/tokens.js

// Accent palettes
export const ACCENT_MAP = {
  o: {
    cat: "#FF4D00",
    md: "#FF8A50",
    lt: "#FFF0EB",
    bar: "linear-gradient(90deg,#FF4D00,#FF8A50)",
  },

  t: {
    cat: "#00B8A0",
    md: "#00D4B8",
    lt: "#E6FAF8",
    bar: "linear-gradient(90deg,#00B8A0,#00D4B8)",
  },

  v: {
    cat: "#6B4FFF",
    md: "#9B7FFF",
    lt: "#F0ECFF",
    bar: "linear-gradient(90deg,#6B4FFF,#9B7FFF)",
  },

  d: {
    cat: "#1A1A2E",
    md: "#3D3D5C",
    lt: "#F8F5F0",
    bar: "linear-gradient(90deg,#1A1A2E,#3D3D5C)",
  },
};

export const ACCENT = ACCENT_MAP;

// Main color system
// export const COLORS = {
//   bg1: "#023047",
//   bg2: "#0A425C",
//   bg3: "#8ECAE6", // light blue
//   border: "#219EBC", // cyan
//   txt1: "#FFFFFF",
//   txt2: "#C7E6F2",
//   txt3: "#023047", // deep navy
//   primary: "#219EBC",
//   secondary: "#FFB703", // gold
//   accent: "#FB8500" // orange
// };

export const DARK_BG_COLORS = {
  bg1:    "#023047",
  bg2:    "#0B3B52",
  bg3:    "#174B5F",

  bglt:   "#1D5B63",
  bgd:    "#012635",

  border: "#24556B",

  txt1:   "#F8FCFF",
  txt2:   "#B7CBD4",
  txt3:   "#7FA6B8",

  dark:   "#011E2B",
  light:  "#F4FBFE",

  araticcyan:   "#219EBC",
  solargold: "#FFB703",
  emberorange:    "#FB8500",
  evergreenteal:   "#408A71"
}

// export const LIGHT_BG_COLORS = {
//   bg1:    "#F4FBFE",   // main background
//   bg2:    "#E7F5FA",   // cards
//   bg3:    "#E6F6EF",   // tinted sections

//   bglt:   "#FFFFFF",   // pure light surfaces
//   bgd:    "#0D3B50",   // stronger light contrast blocks

//   border: "#219EBC",

//   txt1: "#023047",
//   txt2: "#355C5A",
//   txt3: "#6B8A96",

//   dark:   "#012635",
//   light:  "#FFFFFF",

//   primary:   "#219EBC",
//   secondary: "#FFB703",
//   accent:    "#FB8500",
//   success:   "#408A71"
// }

export const LIGHT_BG_COLORS = {
  bg1:    "#F4FBFE",
  bg2:    "#E7F5FA",
  bg3:    "#E6F6EF",

  bglt:   "#FFFFFF",
  bgd:    "#0D3B50",

  border: "#B7D7E2",

  txt1:   "#023047",
  txt2:   "#355C5A",
  txt3:   "#6B8A96",

  dkHead: "#F4FBFE",         
  dkBody: "#B7D7E2",            
  dkMute: "rgba(183,215,226,0.50)",

  dark:   "#012635",
  light:  "#FFFFFF",

  araticcyan:   "#219EBC",
  solargold: "#FFB703",
  emberorange:    "#FB8500",
  evergreenteal:   "#408A71",

  syne: "'Syne', sans-serif",
  mono: "'Fira Code', monospace",
  body: "'DM Sans', sans-serif"  
}

export const NAV_LINKS = [
  { label: 'Home', href: '#home', active: true },
  { label: 'About', href: '#about', active: true },
  { label: 'Services', href: '#services', active: true },
  { label: 'Career', href: '#career', active: true },
  { label: 'Contact', href: '#form', active: true },
]

// Typography
export const FONT = "'Syne', sans-serif";

const HERO_STATS = [
  {
    num: '50+',
    suffix: '',
    label: 'Projects',
    color: '#FF4D00',
    delay: 0.1,
  },
  {
    num: '10+',
    suffix: 'yrs',
    label: 'Experience',
    color: '#00B8A0',
    delay: 0.2,
  },
  {
    num: '99',
    suffix: '%',
    label: 'Uptime',
    color: '#6B4FFF',
    delay: 0.3,
  },
  {
    num: '24/7',
    suffix: '',
    label: 'Support',
    color: '#1A1A2E',
    delay: 0.4,
  },
]

// Combined export object
export const T = {
  ACCENT_MAP,
  ACCENT,
  DARK_BG_COLORS,
  LIGHT_BG_COLORS,
  // COLORS,
  FONT,
  NAV_LINKS,
  HERO_STATS
};

export default T;