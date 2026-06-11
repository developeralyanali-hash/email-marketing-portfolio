"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Work", href: "#work" },
    { name: "Process", href: "#process" },
    { name: "Case Studies", href: "#case-studies" },
  ];

  const services = [
    "Email Automation Systems",
    "Conversion Email Strategy",
    "Klaviyo & Brevo Setup",
    "Retention & Lifecycle Design",
  ];

  return (
    <footer className="relative bg-zinc-950 border-t border-zinc-800/50 overflow-hidden">

      {/* subtle glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(16,185,129,0.08),transparent_60%)]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">

        {/* MAIN FOOTER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-14 sm:py-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* BRAND */}
            <div>
              <h3 className="text-white font-bold text-xl">
                Muhammad Sufyan Ali
              </h3>

              <p className="text-emerald-400 text-sm mt-1">
                Email Systems & Revenue Automation Specialist
              </p>

              <p className="text-zinc-400 text-sm mt-5 leading-relaxed">
                I help ecommerce brands recover lost revenue through structured email systems — not random campaigns.
              </p>

              <p className="text-zinc-500 text-xs mt-4">
                Focus: Abandoned carts • Welcome flows • Retention systems
              </p>
            </div>

            {/* SERVICES */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
                What I Build
              </h4>

              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service} className="text-zinc-400 text-sm">
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* ACTION BLOCK */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
                Work With Me
              </h4>

              <p className="text-zinc-400 text-sm leading-relaxed">
                If your store already gets traffic, the next step is simple:
                turn more visitors into repeat buyers using email systems.
              </p>

              <motion.a
                href="https://calendly.com/muhammadsufyanali/free-15-minute-klaviyo-discovery-call"
                target="_blank"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center mt-6 w-full bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-sm px-5 py-3 rounded-lg transition"
              >
                Book Growth Audit Call →
              </motion.a>

              <motion.a
                href="https://wa.me/923349489073"
                target="_blank"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center mt-3 w-full bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700 font-semibold text-sm px-5 py-3 rounded-lg transition"
              >
                Quick WhatsApp Chat
              </motion.a>
            </div>

          </div>
        </motion.div>

        {/* BOTTOM BAR */}
        <div className="border-t border-zinc-800/50 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-zinc-500">
            <p>© {currentYear} Muhammad Sufyan Ali. All rights reserved.</p>

            <p className="text-zinc-600 text-center sm:text-right">
              Built for ecommerce revenue systems — not portfolio browsing.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}