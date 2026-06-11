"use client";

import { useState } from "react";
import { motion } from "framer-motion";

/* WhatsApp SVG ICON (real brand-style) */
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 32 32"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16.003 3C9.37 3 3.997 8.373 3.997 15.006c0 2.65.868 5.104 2.348 7.087L4 29l7.067-2.285a11.946 11.946 0 005.936 1.53h.003c6.633 0 12.006-5.373 12.006-12.006C29.012 8.373 23.639 3 17.006 3h-.003zm0 21.6a9.568 9.568 0 01-4.873-1.333l-.35-.208-4.197 1.358 1.383-4.09-.227-.36a9.59 9.59 0 01-1.47-5.061c0-5.29 4.31-9.6 9.607-9.6 2.566 0 4.98 1 6.794 2.815a9.53 9.53 0 012.813 6.785c0 5.29-4.31 9.6-9.607 9.6zm5.267-7.2c-.288-.144-1.707-.843-1.972-.937-.266-.095-.46-.143-.654.144-.193.288-.75.936-.92 1.13-.17.192-.34.216-.628.072-.288-.144-1.217-.448-2.32-1.43-.858-.765-1.438-1.71-1.607-1.998-.17-.288-.018-.443.126-.587.13-.13.288-.34.432-.51.144-.17.192-.288.288-.48.096-.192.048-.36-.024-.504-.072-.144-.654-1.577-.896-2.16-.236-.566-.476-.49-.654-.5l-.56-.01c-.18 0-.48.07-.732.336-.252.288-.96.936-.96 2.282 0 1.346.984 2.647 1.122 2.83.138.192 1.937 2.958 4.694 4.147.656.283 1.167.452 1.566.579.658.21 1.256.18 1.73.11.528-.078 1.707-.697 1.948-1.37.24-.672.24-1.248.168-1.37-.072-.12-.264-.192-.552-.336z" />
  </svg>
);

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  const whatsappNumber = "923349489073";
  const message =
    "Hi Sufyan, I want to discuss email marketing for my brand";

  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 22, delay: 0.5 }}
      className="fixed bottom-5 right-5 z-[60]"
    >
      {/* Tooltip */}
      {showTooltip && (
        <motion.div
          initial={{ opacity: 0, x: 8 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 8 }}
          className="hidden md:block absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-zinc-900 text-white text-xs sm:text-sm px-3 py-2 rounded-lg border border-zinc-800 whitespace-nowrap shadow-xl"
        >
          Chat with me on WhatsApp
          <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-zinc-900 border-r border-b border-zinc-800 rotate-45" />
        </motion.div>
      )}

      {/* Button */}
     <motion.a
  href={url}
  target="_blank"
  rel="noopener noreferrer"
  onMouseEnter={() => setShowTooltip(true)}
  onMouseLeave={() => setShowTooltip(false)}
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.92 }}
  animate={{ y: [0, -6, 0] }}
  transition={{
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="group relative flex items-center justify-center w-14 h-14 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#25D366] to-[#20BA5A] hover:from-[#20BA5A] hover:to-[#1DA851] text-white shadow-lg shadow-[#25D366]/30 ring-1 ring-white/10 transition-all"
  aria-label="Chat on WhatsApp"
>
     {/* Premium Halo Pulse */}
<motion.div
  className="absolute inset-0 rounded-full border border-white/20"
  animate={{
    scale: [1, 1.18, 1],
    opacity: [0.25, 0, 0.25],
  }}
  transition={{
    duration: 3.5,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>
        {/* Glow overlay */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        {/* Icon */}
        <WhatsAppIcon className="relative z-10 w-6 h-6 sm:w-7 sm:h-7" />
      </motion.a>
    </motion.div>
  );
}