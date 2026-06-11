"use client";

import { motion } from "framer-motion";
import { Workflow, Target, Repeat } from "lucide-react";

const words =
  "How I Help Ecommerce Brands Increase Email Revenue".split(" ");

export default function ValueProps() {
  return (
    <section id="value-props" className="py-16 sm:py-20 bg-zinc-950">
      <div className="container mx-auto px-4">

        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            {words.map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-[0.25em]"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.06,
                }}
              >
                {word}
              </motion.span>
            ))}
          </h2>

          <p className="mt-4 text-zinc-400 text-base sm:text-lg">
            Most eCommerce stores lose revenue silently because their email system
            is incomplete or under-optimized. I fix that by building structured,
            conversion-focused email journeys that turn traffic into repeat buyers.
          </p>
        </div>

        {/* GRID */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8"
        >

          {/* CARD 1 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{
              y:
                typeof window !== "undefined" && window.innerWidth > 768
                  ? -5
                  : 0,
              scale:
                typeof window !== "undefined" && window.innerWidth > 768
                  ? 1.02
                  : 1,
              boxShadow:
                typeof window !== "undefined" && window.innerWidth > 768
                  ? "0 10px 25px -5px rgba(16, 185, 129, 0.25)"
                  : "none",
            }}
            className="relative p-4 sm:p-6 rounded-xl border border-zinc-800 bg-zinc-900/40 hover:border-emerald-500 transition-colors text-center md:text-left overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />

            <div className="flex items-center justify-center md:justify-between mb-4">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                <Workflow className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-400" />
              </div>
              <span className="hidden md:block text-4xl sm:text-5xl font-bold text-zinc-800/40">
                01
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-semibold text-white">
              Revenue Automation Systems
            </h3>

            <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-zinc-400">
              Welcome flows, abandoned cart, browse recovery, and post-purchase systems
              designed to recover lost revenue automatically — without extra ad spend.
            </p>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{
              y:
                typeof window !== "undefined" && window.innerWidth > 768
                  ? -5
                  : 0,
              scale:
                typeof window !== "undefined" && window.innerWidth > 768
                  ? 1.02
                  : 1,
              boxShadow:
                typeof window !== "undefined" && window.innerWidth > 768
                  ? "0 10px 25px -5px rgba(16, 185, 129, 0.25)"
                  : "none",
            }}
            className="relative p-4 sm:p-6 rounded-xl border border-zinc-800 bg-zinc-900/40 hover:border-emerald-500 transition-colors text-center md:text-left overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />

            <div className="flex items-center justify-center md:justify-between mb-4">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                <Target className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-400" />
              </div>
              <span className="hidden md:block text-4xl sm:text-5xl font-bold text-zinc-800/40">
                02
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-semibold text-white">
              High-Converting Campaign Strategy
            </h3>

            <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-zinc-400">
              Product launches, promotions, and campaign sequences engineered to
              increase click-through rate and generate predictable revenue spikes.
            </p>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{
              y:
                typeof window !== "undefined" && window.innerWidth > 768
                  ? -5
                  : 0,
              scale:
                typeof window !== "undefined" && window.innerWidth > 768
                  ? 1.02
                  : 1,
              boxShadow:
                typeof window !== "undefined" && window.innerWidth > 768
                  ? "0 10px 25px -5px rgba(16, 185, 129, 0.25)"
                  : "none",
            }}
            className="relative p-4 sm:p-6 rounded-xl border border-zinc-800 bg-zinc-900/40 hover:border-emerald-500 transition-colors text-center md:text-left overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />

            <div className="flex items-center justify-center md:justify-between mb-4">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                <Repeat className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-400" />
              </div>
              <span className="hidden md:block text-4xl sm:text-5xl font-bold text-zinc-800/40">
                03
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-semibold text-white">
              Retention & Repeat Purchase Growth
            </h3>

            <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-zinc-400">
              Advanced segmentation and lifecycle optimization that increases repeat
              purchases and improves customer lifetime value over time.
            </p>
          </motion.div>

        </motion.div>

        {/* FINAL CTA (IMPROVED PSYCHOLOGY) */}
        <div className="text-center mt-12 sm:mt-14">
          <p className="text-zinc-400 mb-5 text-sm sm:text-base">
            If your email system is not actively generating revenue, you are losing money every single day.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <motion.a
              href="https://calendly.com/muhammadsufyanali/free-15-minute-klaviyo-discovery-call"
              target="_blank"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-8 py-3 rounded-lg transition shadow-lg shadow-emerald-500/20"
            >
              Fix My Email Revenue
            </motion.a>

            <motion.a
              href="https://wa.me/923349489073"
              target="_blank"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700 font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Ask for Free Review
            </motion.a>
          </div>
        </div>

      </div>
    </section>
  );
}