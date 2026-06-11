"use client";

import { motion } from "framer-motion";
import { Mail, Send, ShoppingBag, PenTool } from "lucide-react";

const tools = [
  { name: "Klaviyo", desc: "Email Automation", icon: Mail },
  { name: "Brevo", desc: "Campaign System", icon: Send },
  { name: "Shopify", desc: "Ecommerce Platform", icon: ShoppingBag },
  { name: "Figma", desc: "Email Design", icon: PenTool },
];

const words = "Tools & Systems I Use".split(" ");

export default function Tools() {
  return (
    <section id="tools" className="py-16 sm:py-20 bg-zinc-950">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12">
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
                  delay: i * 0.08,
                }}
              >
                {word}
              </motion.span>
            ))}
          </h2>

          <p className="mt-4 text-zinc-400 text-base sm:text-lg">
            I use industry-standard platforms to build, manage, and optimize high-converting email marketing systems for ecommerce brands.
          </p>
        </div>

        {/* TOOL GRID */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-20"
        >
          {tools.map((tool, i) => {
            const Icon = tool.icon;

            return (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: { opacity: 1, scale: 1 },
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
                className="relative p-4 sm:p-6 rounded-xl border border-zinc-800 bg-zinc-900/40 hover:border-emerald-500 transition-colors text-center overflow-hidden"
              >
                {/* top gradient */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />

                <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-emerald-500/10 border border-emerald-500/20 mb-3">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />
                </div>

                <p className="font-semibold text-white text-sm sm:text-base">
                  {tool.name}
                </p>

                <p className="text-xs text-zinc-500 mt-1 sm:mt-2">
                  {tool.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* FINAL CTA BLOCK */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-10 text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Ready to improve your email revenue system?
          </h2>

          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base">
            Let’s analyze your current setup and identify opportunities to increase conversions, automate retention, and improve customer lifetime value.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
            <motion.a
              href="https://calendly.com/muhammadsufyanali/free-15-minute-klaviyo-discovery-call"
              target="_blank"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-8 py-3 rounded-lg transition"
            >
              Book Free 15-Min Call →
            </motion.a>

            <motion.a
              href="https://wa.me/923349489073"
              target="_blank"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700 font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              WhatsApp Me
            </motion.a>
          </div>

          {/* glow */}
          <div className="absolute -bottom-10 left-0 right-0 h-32 bg-emerald-500 opacity-20 blur-3xl" />
        </motion.div>

      </div>
    </section>
  );
}