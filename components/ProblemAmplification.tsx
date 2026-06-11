"use client";

import { motion } from "framer-motion";
import { AlertTriangle, ShoppingCart, RefreshCw } from "lucide-react";

const words = "Revenue Is Being Lost Inside Your Store".split(" ");

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const cardHover = {
  scale: 1.03,
  transition: { duration: 0.25 },
};

export default function ProblemAmplification() {
  return (
    <section className="py-16 sm:py-20 bg-zinc-950">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14">
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
            Most store owners don’t realize this early — revenue doesn’t disappear at once. It leaks quietly at every stage of the customer journey.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">

          {/* CARD 1 */}
          <motion.div
            {...fadeUp}
            whileHover={cardHover}
            className="relative p-5 sm:p-6 rounded-xl border border-zinc-800 bg-zinc-900/40 hover:border-emerald-500 transition-colors overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />

            <div className="flex items-center gap-2 text-emerald-400 mb-4">
              <ShoppingCart className="w-5 h-5" />
              <span className="font-semibold">Traffic You Already Paid For</span>
            </div>

            <h3 className="text-white font-semibold text-lg">
              Visitors arrive… and then silently leave
            </h3>

            <p className="mt-3 text-sm text-zinc-400">
              You are already spending money to bring people in. But most of them leave without any structured system to bring them back.
              That means paid traffic is partially wasted by default.
            </p>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            {...fadeUp}
            whileHover={cardHover}
            className="relative p-5 sm:p-6 rounded-xl border border-zinc-800 bg-zinc-900/40 hover:border-emerald-500 transition-colors overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />

            <div className="flex items-center gap-2 text-emerald-400 mb-4">
              <AlertTriangle className="w-5 h-5" />
              <span className="font-semibold">Intent That Never Gets Captured</span>
            </div>

            <h3 className="text-white font-semibold text-lg">
              People were interested — just not followed up
            </h3>

            <p className="mt-3 text-sm text-zinc-400">
              Cart abandonment, product browsing, and email signups all show intent.
              But without automated follow-ups, that intent decays within hours.
            </p>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            {...fadeUp}
            whileHover={cardHover}
            className="relative p-5 sm:p-6 rounded-xl border border-zinc-800 bg-zinc-900/40 hover:border-emerald-500 transition-colors overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />

            <div className="flex items-center gap-2 text-emerald-400 mb-4">
              <RefreshCw className="w-5 h-5" />
              <span className="font-semibold">Customers Who Never Return</span>
            </div>

            <h3 className="text-white font-semibold text-lg">
              The real profit is in the second purchase — not the first
            </h3>

            <p className="mt-3 text-sm text-zinc-400">
              Most brands focus on acquisition, but ignore retention.
              Without lifecycle email systems, first-time buyers rarely become repeat customers.
            </p>
          </motion.div>

        </div>

        {/* BOTTOM INSIGHT */}
        <motion.div
          {...fadeUp}
          className="text-center mt-12 max-w-2xl mx-auto"
        >
          <p className="text-zinc-400 text-sm sm:text-base">
            The issue is not marketing effort. It is the absence of systems that capture, follow up, and convert existing demand.
          </p>
        </motion.div>

        {/* CTA SECTION (NEW) */}
        <motion.div
          {...fadeUp}
          className="text-center mt-14"
        >
          <p className="text-zinc-400 text-sm sm:text-base mb-5">
            If this sounds familiar in your store, the problem is not traffic — it’s the system behind it.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <motion.a
              href="https://calendly.com/muhammadsufyanali/free-15-minute-klaviyo-discovery-call"
              target="_blank"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-6 sm:px-8 py-3 rounded-lg transition"
            >
              Fix My Email Revenue Leak →
            </motion.a>

            <motion.a
              href="https://wa.me/923349489073"
              target="_blank"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700 font-semibold px-6 sm:px-8 py-3 rounded-lg transition"
            >
              Quick WhatsApp Audit
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}