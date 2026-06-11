import { Variants } from "framer-motion";

/* =========================
   PAGE / SECTION CONTAINER
========================= */

export const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

/* =========================
   PREMIUM FADE UP (CORE)
========================= */

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    filter: "blur(6px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1], // smooth SaaS easing
    },
  },
};

/* =========================
   HERO ENTRANCE (SLIGHTLY STRONGER)
========================= */

export const heroFade: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.98,
    filter: "blur(8px)",
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================
   CARD MICRO INTERACTION
========================= */

export const cardHover = {
  hover: {
    y: -6,
    scale: 1.01,
    transition: {
      duration: 0.25,
      ease: "easeOut",
    },
  },
};

/* =========================
   BUTTON MICRO INTERACTION
========================= */

export const buttonHover = {
  hover: {
    y: -2,
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

/* =========================
   SOFT STAGGER FOR GRIDS
========================= */

export const staggerGrid: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

/* =========================
   ACCESSIBILITY (REDUCED MOTION)
========================= */

export const reducedMotion = {
  hidden: {
    opacity: 1,
    y: 0,
    filter: "none",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "none",
    transition: {
      duration: 0,
    },
  },
};