"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Menu", href: "#menu" },
  { name: "Signature", href: "#signature" },
  { name: "Gallery", href: "#gallery" },
  { name: "Events", href: "#events" },
  { name: "Journal", href: "#blog" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => { setScrolled(window.scrollY > 50); };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? "py-4 bg-salvore-dark/60 backdrop-blur-md border-b border-white/5" : "py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between gap-4">
        
        <a href="#home" className="font-serif text-2xl tracking-widest text-gradient-gold font-bold shrink-0">
          SALVORE
        </a>

        {/* Unified Desktop Anchor Slider Menu */}
        <div className="hidden xl:flex items-center gap-5 glass-panel px-6 py-2.5 rounded-full max-w-full overflow-x-auto no-scrollbar">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[10px] tracking-widest uppercase text-white/70 hover:text-white transition-all duration-300 whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden xl:block shrink-0">
          <Link href="/reservations" className="border border-white/20 text-white px-6 py-2.5 rounded-full text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300">
            Book Table
          </Link>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="xl:hidden text-white focus:outline-none z-50 p-2">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Slider Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="absolute top-full left-0 w-full bg-black/95 border-b border-white/10 backdrop-blur-2xl py-8 px-6 flex flex-col gap-4 xl:hidden shadow-2xl max-h-[85vh] overflow-y-auto">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-xs tracking-widest uppercase text-white/90 hover:text-[#c89b53] transition-colors py-1 block"
              >
                {link.name}
              </a>
            ))}
            <Link 
              href="/reservations" 
              onClick={() => setIsOpen(false)} 
              className="w-full text-center bg-[#c89b53] text-black font-medium py-3 rounded-md uppercase tracking-widest text-sm mt-2 block"
            >
              Book Table
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}