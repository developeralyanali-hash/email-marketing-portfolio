"use client";

import { motion, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const items = [
  "Revenue Email Systems",
  "Klaviyo Automation Architecture",
  "Ecommerce Retention Flows",
  "High-Converting Campaign Strategy",
  "Lifecycle Revenue Design",
  "Customer Retention Systems",
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

function Counter() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = 25; // increased perceived authority
    const duration = 1400;
    const stepTime = duration / end;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);

      if (start >= end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView]);

  return (
    <div ref={ref} className="text-3xl font-bold text-white">
      {count}+
    </div>
  );
}

export default function TrustStrip() {
  const [paused, setPaused] = useState(false);
  const marqueeItems = [...items, ...items];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: {
          transition: { staggerChildren: 0.15 },
        },
      }}
      className="border-y border-zinc-800 bg-zinc-950 py-12 lg:py-16"
    >
      <div className="container mx-auto px-4">

        <div className="max-w-4xl mx-auto text-center">

          {/* TITLE */}
          <motion.p
            variants={fadeUp}
            className="text-xs tracking-widest uppercase text-zinc-400 font-medium mb-6"
          >
            Revenue Systems • Email Automation • Lifecycle Strategy
          </motion.p>

          {/* MARQUEE */}
          <motion.div
            variants={fadeUp}
            className="overflow-hidden w-full mb-10 [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <motion.div
              animate={{
                x: paused ? undefined : ["0%", "-50%"],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex w-max items-center gap-12"
            >
              {marqueeItems.map((text, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, color: "#10b981" }}
                  className="flex items-center shrink-0"
                >
                  <span className="text-zinc-300 text-sm sm:text-base font-medium">
                    {text}
                  </span>
                  <span className="ml-6 text-emerald-400">•</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* TRUST CORE */}
          <motion.div
            variants={fadeUp}
            className="relative grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10"
          >
            {/* PRIMARY AUTHORITY STAT */}
            <div>
              <Counter />
              <div className="text-xs text-zinc-400 mt-1">
                Revenue Systems Designed
              </div>
            </div>

            {/* PLATFORM AUTHORITY */}
            <div>
              <div className="text-xl font-semibold text-white">
                Klaviyo • Brevo Specialist
              </div>
              <div className="text-xs text-zinc-500 mt-1">
                Core Email Infrastructure
              </div>
            </div>

            {/* POSITIONING */}
            <div>
              <div className="text-2xl font-bold text-emerald-400">
                Ecommerce Growth Focused
              </div>
              <div className="text-xs text-zinc-500 mt-1">
                Retention • Automation • Revenue
              </div>
            </div>

            <div className="hidden sm:block absolute left-1/3 top-1/2 -translate-y-1/2 h-12 w-px bg-zinc-800" />
            <div className="hidden sm:block absolute left-2/3 top-1/2 -translate-y-1/2 h-12 w-px bg-zinc-800" />
          </motion.div>

          {/* FINAL TRUST LINE */}
          <motion.p
            variants={fadeUp}
            className="text-sm text-zinc-500 max-w-2xl mx-auto"
          >
            I design complete email revenue systems that help ecommerce brands
            recover lost sales, increase repeat purchases, and build predictable
            customer lifetime value using automation and lifecycle strategy.
          </motion.p>

        </div>
      </div>
    </motion.section>
  );
}