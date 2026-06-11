"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

const words = "Email Revenue Systems I Design for Ecommerce Brands".split(" ");

export default function EmailShowcase() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const isDesktop = () =>
    typeof window !== "undefined" && window.innerWidth > 768;

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const cards = [
    {
      id: 1,
      title: "Revenue-Driven Welcome Flow System",
      desc:
        "A structured onboarding system designed to convert new subscribers into first-time buyers.",
      image: "/images/welcome-flow.webp",
    },
    {
      id: 2,
      title: "Abandonment & Recovery System",
      desc:
        "Automated sequences designed to recover lost sales and re-engage inactive users.",
      image: "/images/abandonment-flow.webp",
    },
  ];

  return (
    <section id="work" className="py-16 sm:py-20 bg-zinc-950">
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
            Real-world inspired ecommerce email systems structured to increase
            revenue, recover abandoned users, and improve customer lifetime
            value.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">

          {cards.map((card) => (
            <motion.div
              key={card.id}
              whileHover={{
                y: isDesktop() ? -5 : 0,
                scale: isDesktop() ? 1.02 : 1,
                boxShadow: isDesktop()
                  ? "0 10px 25px -5px rgba(16, 185, 129, 0.25)"
                  : "none",
              }}
              className="relative p-4 sm:p-6 rounded-xl border border-zinc-800 bg-zinc-900/40 hover:border-emerald-500 transition-colors overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />

              <div className="text-2xl sm:text-3xl font-bold text-zinc-800 select-none">
                0{card.id}
              </div>

              {/* CLICKABLE IMAGE */}
              <div
                onClick={() => setSelectedImage(card.image)}
                className="cursor-pointer relative h-48 sm:h-64 mt-4 rounded-lg overflow-hidden hover:scale-[1.02] transition-transform"
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 100vw, 50vw"
                />
              </div>

              <h3 className="mt-4 text-lg sm:text-xl font-semibold text-white">
                {card.title}
              </h3>

              <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-zinc-400">
                {card.desc}
              </p>
            </motion.div>
          ))}

        </div>

        {/* CTA */}
        <div className="text-center mt-12 sm:mt-14">
          <p className="text-zinc-400 mb-5 text-sm sm:text-base">
            Most ecommerce stores lose revenue due to missing email systems.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://calendly.com/muhammadsufyanali/free-15-minute-klaviyo-discovery-call"
              className="bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-8 py-3 rounded-lg"
            >
              Fix My Email Revenue System
            </a>

            <a
              href="https://wa.me/923349489073"
              className="bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700 font-semibold px-8 py-3 rounded-lg"
            >
              Get Free Review
            </a>
          </div>
        </div>

        {/* LIGHTBOX MODAL */}
        {selectedImage && (
          <div
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          >
            <div
              className="relative max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Preview"
                width={1600}
                height={1000}
                className="w-full h-auto max-h-[85vh] object-contain rounded-xl"
              />

              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-3 right-3 bg-zinc-900/80 hover:bg-zinc-800 text-white px-3 py-1 rounded-md"
              >
                ✕
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}