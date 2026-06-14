"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect } from "react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function Hero() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <section className="relative overflow-hidden py-20 lg:py-32 bg-zinc-950">

      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        .shimmer-text {
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
        }

        @media (hover: hover) and (pointer: fine) {
          .desktop-hover:hover {
            transform: scale(1.05);
          }
        }
      `}</style>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 items-center gap-12 lg:gap-16">

          {/* LEFT */}
          <motion.div
            className="lg:col-span-3 text-center lg:text-left"
            initial="initial"
            animate="animate"
            variants={{
              animate: {
                transition: { staggerChildren: 0.1 },
              },
            }}
          >

            {/* MAIN SEO CONTEXT LINE (HIDDEN AUTHORITY SIGNAL FOR GOOGLE, NOT UI HEADING CHANGE) */}
            <h1 className="sr-only">
              Klaviyo Email Marketing Expert for eCommerce Brands
            </h1>

            {/* HEADLINE (UNCHANGED VISUALLY) */}
            <motion.h1
              variants={fadeUp}
              className="font-bold leading-tight tracking-tight text-white"
            >
              <span className="block text-4xl sm:text-5xl lg:text-7xl bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-400 bg-clip-text text-transparent shimmer-text">
                Stop Losing Revenue
              </span>

              <span className="block text-3xl sm:text-4xl lg:text-6xl mt-2">
                After Customers Leave Your Store
              </span>

              <span className="block text-lg sm:text-xl text-zinc-300 mt-6">
                Recovery Flows • Retention Systems • Customer Lifecycle Automation (Klaviyo & Email Marketing)
              </span>
            </motion.h1>

            {/* SUBTEXT */}
            <motion.p
              variants={fadeUp}
              className="mt-6 text-zinc-300 max-w-xl mx-auto lg:mx-0"
            >
              You already paid for the traffic.
              <br />
              <br />
              But visitors leave, carts get abandoned, customers buy once and never return,
              and revenue quietly slips away every day.
              <br />
              <br />
              I build automated Klaviyo email marketing systems that recover lost sales, increase repeat purchases,
              and turn email into a predictable revenue channel for your ecommerce business.
            </motion.p>

            {/* CTA */}
            <motion.div variants={fadeUp} className="mt-8">

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() =>
                    window.open(
                      "https://calendly.com/muhammadsufyanali/free-15-minute-klaviyo-discovery-call",
                      "_blank"
                    )
                  }
                  className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg shadow-lg shadow-emerald-500/20"
                >
                  Get Free Email Revenue Audit
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() =>
                    window.open("https://wa.me/923349489073", "_blank")
                  }
                  className="w-full sm:w-auto bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700 font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg"
                >
                  Discuss My Store
                </motion.button>

              </div>

              <p className="mt-4 text-sm text-zinc-400 text-center lg:text-left">
                Get actionable improvements you can implement immediately.
              </p>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-sm text-zinc-500 mt-6"
            >
              You'll leave with a clear understanding of where revenue is leaking from your customer journey — whether we work together or not.
            </motion.p>

            {/* SEO SUPPORT BLOCK (CLIENT-FACING, NOT HIDDEN) */}
            <motion.p
              variants={fadeUp}
              className="mt-6 text-zinc-400 text-sm max-w-xl mx-auto lg:mx-0"
            >
              Klaviyo Email Marketing Specialist focused on abandoned cart flows, welcome sequences, winback automation,
              and lifecycle revenue systems for eCommerce brands.
            </motion.p>

          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            className="lg:col-span-2 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              y: [0, -8, 0],
            }}
            transition={{
              opacity: { duration: 0.8, ease: "easeOut" },
              y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <div className="relative w-[200px] sm:w-[300px] lg:w-[340px]">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-3xl border-8 border-zinc-800 bg-black shadow-2xl"
              >
                <Image
                  src="/emails/best-campaign.webp"
                  alt="Email marketing sample design"
                  width={800}
                  height={1600}
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}