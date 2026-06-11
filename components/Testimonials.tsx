"use client";

import { motion } from "framer-motion";
import { Settings, Mail, DollarSign, Quote } from "lucide-react";

const words = "Why This Email System Works".split(" ");

export default function Testimonials() {
  return (
    <section id="why-me" className="py-16 sm:py-20 bg-zinc-950">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
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
            Most ecommerce brands already have traffic and products. The missing piece is a structured email system that converts, retains, and re-engages customers automatically.
          </p>
        </div>

        {/* GRID */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8"
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
        >
          {/* CARD 1 */}
          <motion.div
            className="relative p-5 sm:p-6 rounded-xl border border-zinc-800 bg-zinc-900/40 hover:border-emerald-500 transition-colors text-center md:text-left overflow-hidden"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{
              y:
                typeof window !== "undefined" && window.innerWidth > 768
                  ? -5
                  : 0,
              boxShadow:
                typeof window !== "undefined" && window.innerWidth > 768
                  ? "0 10px 25px -5px rgba(16, 185, 129, 0.25)"
                  : "none",
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
            <Quote className="absolute -top-2 -right-2 w-16 h-16 sm:w-20 sm:h-20 text-zinc-800/30" />

            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-emerald-500/10 border border-emerald-500/20 mb-4">
              <Settings className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-400" />
            </div>

            <h3 className="text-base sm:text-lg font-semibold text-white">
              System-First Strategy
            </h3>

            <p className="mt-3 text-sm sm:text-base text-zinc-400">
             Most email marketers focus on individual campaigns. I focus on building connected systems that guide customers from subscription to repeat purchase.
            </p>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            className="relative p-5 sm:p-6 rounded-xl border border-zinc-800 bg-zinc-900/40 hover:border-emerald-500 transition-colors text-center md:text-left overflow-hidden"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{
              y:
                typeof window !== "undefined" && window.innerWidth > 768
                  ? -5
                  : 0,
              boxShadow:
                typeof window !== "undefined" && window.innerWidth > 768
                  ? "0 10px 25px -5px rgba(16, 185, 129, 0.25)"
                  : "none",
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
            <Quote className="absolute -top-2 -right-2 w-16 h-16 sm:w-20 sm:h-20 text-zinc-800/30" />

            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-emerald-500/10 border border-emerald-500/20 mb-4">
              <Mail className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-400" />
            </div>

            <h3 className="text-base sm:text-lg font-semibold text-white">
              Behavior-Based Automation
            </h3>

            <p className="mt-3 text-sm sm:text-base text-zinc-400">
              Every flow is built around customer actions, intent signals, and buying behavior—not generic email schedules that get ignored.
            </p>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            className="relative p-5 sm:p-6 rounded-xl border border-zinc-800 bg-zinc-900/40 hover:border-emerald-500 transition-colors text-center md:text-left overflow-hidden"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{
              y:
                typeof window !== "undefined" && window.innerWidth > 768
                  ? -5
                  : 0,
              boxShadow:
                typeof window !== "undefined" && window.innerWidth > 768
                  ? "0 10px 25px -5px rgba(16, 185, 129, 0.25)"
                  : "none",
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
            <Quote className="absolute -top-2 -right-2 w-16 h-16 sm:w-20 sm:h-20 text-zinc-800/30" />

            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-emerald-500/10 border border-emerald-500/20 mb-4">
              <DollarSign className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-400" />
            </div>

            <h3 className="text-base sm:text-lg font-semibold text-white">
              Revenue-Focused Execution
            </h3>

            <p className="mt-3 text-sm sm:text-base text-zinc-400">
              Every email, automation, and sequence is designed with one objective: generating more revenue through better retention and customer lifetime value.
            </p>
          </motion.div>
        </motion.div>

        {/* FINAL CTA */}
        <div className="text-center mt-14">
          <p className="text-zinc-500 mb-4">
            Most brands don't realize how much revenue is being lost through weak email systems. Let's identify the biggest opportunities in yours.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <motion.a
              href="https://calendly.com/muhammadsufyanali/free-15-minute-klaviyo-discovery-call"
              target="_blank"
              className="inline-block bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-8 py-3 rounded-lg transition"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Free Email System Audit →
            </motion.a>

            <motion.a
              href="https://wa.me/923349489073"
              target="_blank"
              className="inline-block bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700 font-semibold px-8 py-3 rounded-lg transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Discuss Your Store
            </motion.a>
          </div>
        </div>

      </div>
    </section>
  );
}