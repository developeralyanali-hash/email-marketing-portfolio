"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Revenue Gap Identification",
    desc: "I identify exactly where your email system is leaking revenue — from acquisition to retention — and quantify the missed opportunities.",
  },
  {
    title: "Buyer Behavior Analysis",
    desc: "I map real customer decision patterns: hesitation points, buying triggers, and friction moments inside your funnel.",
  },
  {
    title: "Lifecycle Architecture Design",
    desc: "I design a full revenue ecosystem: onboarding, cart recovery, post-purchase, and winback systems that work together.",
  },
  {
    title: "Conversion Engine Engineering",
    desc: "I build automated email flows driven by triggers, segmentation logic, and behavioral timing — not random campaigns.",
  },
  {
    title: "Performance Optimization Loop",
    desc: "I continuously improve systems using real engagement data to increase conversions, repeat purchases, and customer lifetime value.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-16 sm:py-20 bg-zinc-950">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            My Revenue System Design Process
          </h2>

          <p className="mt-4 text-zinc-400 text-base sm:text-lg">
            I don’t send email campaigns. I build systems that generate predictable revenue over time.
          </p>
        </div>

        {/* STEPS */}
        <div className="relative max-w-4xl mx-auto">

          {/* vertical line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-zinc-800" />

          {steps.map((step, i) => {
            const isHighImpact = i === 0 || i === steps.length - 1;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className={`relative flex items-start mb-10 sm:mb-12 ${
                  i % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
                }`}
              >
                {/* dot */}
                <div
                  className={`absolute left-4 sm:left-1/2 sm:-translate-x-1/2 w-3 h-3 rounded-full ${
                    isHighImpact ? "bg-emerald-400" : "bg-emerald-600/80"
                  } shadow-lg shadow-emerald-500/30`}
                />

                {/* card */}
                <div
                  className={`ml-12 sm:ml-0 sm:w-[45%] p-5 rounded-xl border transition-all bg-zinc-900/40 hover:border-emerald-500 ${
                    isHighImpact
                      ? "border-emerald-500/40"
                      : "border-zinc-800"
                  }`}
                >
                  <div className="text-emerald-400 text-xs font-semibold mb-2 tracking-wider">
                    STEP {i + 1}
                  </div>

                  <h3 className="text-white font-semibold text-lg">
                    {step.title}
                  </h3>

                  <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}

        </div>

        {/* MICRO CTA (IMPORTANT PSYCHOLOGICAL TRIGGER) */}
        <div className="text-center mt-14">
          <p className="text-zinc-500 text-sm sm:text-base mb-4">
            If your email system isn’t structured like this, you’re losing revenue every day.
          </p>

          <motion.a
            href="https://wa.me/923349489073"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-8 py-3 rounded-lg transition"
          >
            Fix My Email System →
          </motion.a>
        </div>

      </div>
    </section>
  );
}