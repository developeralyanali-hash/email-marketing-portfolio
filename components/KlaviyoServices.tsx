"use client";

import { motion } from "framer-motion";
import { Mail, Zap, BarChart3, Users } from "lucide-react";

export default function KlaviyoServices() {
  return (
    <section className="py-16 sm:py-20 bg-zinc-950">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Klaviyo Email Marketing Services
          </h2>

          <p className="mt-4 text-zinc-400 text-base sm:text-lg">
            I help eCommerce brands build high-converting Klaviyo automation systems that increase revenue, improve retention, and turn email into a predictable growth channel.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* SERVICE 1 */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/40"
          >
            <div className="flex items-center gap-2 text-emerald-400 mb-3">
              <Zap className="w-5 h-5" />
              <h3 className="text-white font-semibold">
                Klaviyo Automation Setup
              </h3>
            </div>

            <p className="text-zinc-400 text-sm">
              Build complete Klaviyo flows including abandoned cart, welcome series, browse abandonment, and winback automation designed to recover lost revenue.
            </p>
          </motion.div>

          {/* SERVICE 2 */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/40"
          >
            <div className="flex items-center gap-2 text-emerald-400 mb-3">
              <Mail className="w-5 h-5" />
              <h3 className="text-white font-semibold">
                Email Flow Strategy & Optimization
              </h3>
            </div>

            <p className="text-zinc-400 text-sm">
              Optimize existing Klaviyo flows using behavioral triggers, segmentation, and conversion-focused email logic to increase engagement and revenue.
            </p>
          </motion.div>

          {/* SERVICE 3 */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/40"
          >
            <div className="flex items-center gap-2 text-emerald-400 mb-3">
              <BarChart3 className="w-5 h-5" />
              <h3 className="text-white font-semibold">
                Email Revenue Optimization
              </h3>
            </div>

            <p className="text-zinc-400 text-sm">
              Improve customer lifetime value (LTV) through lifecycle email strategy, retention systems, and performance-driven automation testing.
            </p>
          </motion.div>

          {/* SERVICE 4 */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/40"
          >
            <div className="flex items-center gap-2 text-emerald-400 mb-3">
              <Users className="w-5 h-5" />
              <h3 className="text-white font-semibold">
                Customer Lifecycle Strategy
              </h3>
            </div>

            <p className="text-zinc-400 text-sm">
              Design full customer journey systems from first visit to repeat purchase using Klaviyo segmentation and behavioral marketing.
            </p>
          </motion.div>

        </div>

        {/* SEO + TRUST LINE */}
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="text-zinc-500 text-sm">
            Specialized in Klaviyo email marketing for eCommerce brands focused on retention, automation, and revenue growth through lifecycle marketing systems.
          </p>
        </div>

      </div>
    </section>
  );
}