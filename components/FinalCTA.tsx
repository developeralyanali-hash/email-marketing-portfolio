"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="relative py-20 sm:py-28 bg-zinc-950 overflow-hidden">
      
      {/* subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.08),transparent_60%)]" />

      <div className="container mx-auto px-4 relative z-10">

        {/* HEADLINE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-5xl font-bold text-white leading-tight">
            Your Email System Is Either{" "}
            <span className="text-emerald-400">Making Money</span> Or Losing It
          </h2>

          <p className="mt-6 text-zinc-400 text-base sm:text-lg">
            Most ecommerce brands don’t have a traffic problem —  
            they have a broken retention system.
            <br /><br />
            I design email systems that recover lost revenue from abandoned carts, inactive customers, and missed repeat purchases.
          </p>
        </motion.div>

        {/* VALUE STACK */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 max-w-2xl mx-auto grid gap-3 text-sm sm:text-base text-zinc-300"
        >
          <div>✔ Audit your current email revenue leaks</div>
          <div>✔ Identify missing automation flows</div>
          <div>✔ Show exact improvements you can implement</div>
          <div>✔ No obligation — just system breakdown</div>
        </motion.div>

        {/* CTA BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
        >
          
          {/* Primary CTA */}
          <a
            href="https://calendly.com/muhammadsufyanali/free-15-minute-klaviyo-discovery-call"
            target="_blank"
            className="bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-8 py-4 rounded-lg text-center transition"
          >
            Book Email Growth Audit Call →
          </a>

          {/* Secondary CTA */}
          <a
            href="https://wa.me/923349489073"
            target="_blank"
            className="bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700 font-semibold px-8 py-4 rounded-lg text-center transition"
          >
            Quick WhatsApp Chat
          </a>
        </motion.div>

        {/* MICRO TRUST LINE */}
        <p className="text-center text-xs text-zinc-500 mt-6">
          Usually responds within a few hours • Only serious ecommerce brands
        </p>

      </div>
    </section>
  );
}