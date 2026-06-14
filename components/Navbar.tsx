"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  // 🔥 SEO-ALIGNED NAV STRUCTURE
  const navItems = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "results", label: "Case Studies" },
    { id: "process", label: "Process" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
  setOpen(false);

  setTimeout(() => {
    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = -80; // fixes fixed navbar overlap
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });

    setActive(id);
  }, 50);
};

  return (
    <motion.header
      ref={headerRef}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 border-b border-zinc-800/50 backdrop-blur-lg transition-all ${
        scrolled
          ? "bg-zinc-950/95 py-3 shadow-xl shadow-emerald-500/5"
          : "bg-zinc-950/70 py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8">

        {/* BRAND */}
        <div className="text-white font-semibold text-base sm:text-lg">
          Muhammad Sufyan Ali
          <span className="text-emerald-400 text-xs sm:text-sm ml-2 hidden sm:inline">
            Klaviyo Email Marketing Specialist
          </span>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
              className={`relative transition-colors ${
                active === item.id
                  ? "text-white"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {item.label}

              {active === item.id && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-emerald-500 rounded-full"
                  transition={{ type: "spring", stiffness: 500, damping: 35 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* DESKTOP CTA */}
        <motion.a
          href="https://wa.me/923349489073"
          target="_blank"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:flex bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-5 py-2 rounded-lg items-center gap-2"
        >
          <MessageCircle className="w-4 h-4" />
          Chat Now
        </motion.a>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-zinc-800 bg-zinc-950 overflow-hidden"
          >
            <div className="px-6 py-5 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left py-2 ${
                    active === item.id
                      ? "text-white font-medium"
                      : "text-zinc-400"
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <a
                href="https://calendly.com/muhammadsufyanali/free-15-minute-klaviyo-discovery-call"
                target="_blank"
                className="block text-center bg-emerald-500 text-black font-semibold py-3 rounded-lg"
              >
                Book Free Audit Call
              </a>

              <a
                href="https://wa.me/923349489073"
                target="_blank"
                className="block text-center bg-zinc-800 text-white border border-zinc-700 font-semibold py-3 rounded-lg"
              >
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}