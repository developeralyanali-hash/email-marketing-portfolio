"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  Target,
  TrendingUp,
} from "lucide-react";

const words = "Email Marketing Case Study Breakdowns".split(" ");

export default function CaseStudies() {
  const isDesktop = () =>
    typeof window !== "undefined" && window.innerWidth > 768;

  const cardHover = {
    y: isDesktop() ? -6 : 0,
    scale: isDesktop() ? 1.02 : 1,
    boxShadow: isDesktop()
      ? "0 20px 40px -10px rgba(16, 185, 129, 0.25)"
      : "none",
  };

  return (
   <section id="results"  className="py-16 sm:py-20 bg-zinc-950">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            {words.map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-[0.25em]"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                {word}
              </motion.span>
            ))}
          </h2>

          <p className="mt-4 text-zinc-400 text-base sm:text-lg">
            Practical email system breakdowns based on ecommerce behavior, conversion psychology, and lifecycle revenue systems.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">

          {/* CASE 1 */}
          <motion.div
            whileHover={cardHover}
            className="relative p-5 sm:p-6 rounded-xl border border-zinc-800 bg-zinc-900/40 hover:border-emerald-500 transition-all overflow-hidden group"
          >
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-70" />

            <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-emerald-300 transition-colors">
              Abandoned Cart Recovery System
            </h3>

            <div className="mt-4 space-y-3">

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                <span className="text-white font-medium flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-500" />
                  Problem:
                </span>
                Ecommerce stores lose high-intent buyers at checkout without structured follow-up systems.
              </p>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                <span className="text-white font-medium flex items-center gap-2">
                  <Target className="w-4 h-4 text-blue-400" />
                  Strategy:
                </span>
                3-step automated flow using urgency, reminders, and objection-handling psychology.
              </p>

              <p className="text-xs sm:text-sm text-emerald-400 font-medium">
                <TrendingUp className="inline w-4 h-4 mr-1" />
                Outcome: Increased recovered revenue potential through behavioral triggers.
              </p>

            </div>
          </motion.div>

          {/* CASE 2 */}
          <motion.div
            whileHover={cardHover}
            className="relative p-5 sm:p-6 rounded-xl border border-zinc-800 bg-zinc-900/40 hover:border-emerald-500 transition-all overflow-hidden group"
          >
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-70" />

            <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-emerald-300 transition-colors">
              Welcome Flow Conversion System
            </h3>

            <div className="mt-4 space-y-3">

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                <span className="text-white font-medium flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-500" />
                  Problem:
                </span>
                New subscribers don’t convert due to lack of structured onboarding.
              </p>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                <span className="text-white font-medium flex items-center gap-2">
                  <Target className="w-4 h-4 text-blue-400" />
                  Strategy:
                </span>
                Multi-email journey combining storytelling, trust-building, and product positioning.
              </p>

              <p className="text-xs sm:text-sm text-emerald-400 font-medium">
                <TrendingUp className="inline w-4 h-4 mr-1" />
                Outcome: Higher first-purchase probability via structured engagement.
              </p>

            </div>
          </motion.div>

          {/* CASE 3 */}
          <motion.div
            whileHover={cardHover}
            className="relative p-5 sm:p-6 rounded-xl border border-zinc-800 bg-zinc-900/40 hover:border-emerald-500 transition-all overflow-hidden md:col-span-2 group"
          >
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-70" />

            <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-emerald-300 transition-colors">
              Customer Winback & Reactivation System
            </h3>

            <div className="mt-4 space-y-3">

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                <span className="text-white font-medium flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-500" />
                  Problem:
                </span>
                Large inactive customer base with no reactivation system.
              </p>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                <span className="text-white font-medium flex items-center gap-2">
                  <Target className="w-4 h-4 text-blue-400" />
                  Strategy:
                </span>
                Segmented lifecycle campaigns using personalization + behavioral triggers.
              </p>

              <p className="text-xs sm:text-sm text-emerald-400 font-medium">
                <TrendingUp className="inline w-4 h-4 mr-1" />
                Outcome: Improved re-engagement and repeat purchase potential.
              </p>

            </div>
          </motion.div>

        </div>

        {/* CTA */}
        <div className="text-center mt-12 sm:mt-14">
          <p className="text-zinc-500 mb-4 text-sm sm:text-base">
            Every ecommerce brand has hidden revenue leaks. I'll review your current email setup and show where automation, retention, and customer journeys can be improved.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <motion.a
              href="https://calendly.com/muhammadsufyanali/free-15-minute-klaviyo-discovery-call"
              target="_blank"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-6 sm:px-8 py-3 rounded-lg transition"
            >
              Get a Free Email System Audit →
            </motion.a>

            <motion.a
              href="https://wa.me/923349489073"
              target="_blank"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700 font-semibold px-6 sm:px-8 py-3 rounded-lg transition"
            >
              Discuss Your Store
            </motion.a>
          </div>
        </div>

      </div>
    </section>
  );
}