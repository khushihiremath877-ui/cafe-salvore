"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Compass, MapPin, Clock, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("Coffee");
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // --- REFINED ANIMATION ENGINE ---
  const cupRotation = useTransform(scrollYProgress, [0.1, 0.25], [0, -85]);
  const liquidY = useTransform(scrollYProgress, [0.2, 0.4], [-10, 350]);
  const liquidScaleY = useTransform(scrollYProgress, [0.2, 0.35], [0, 1]);
  const liquidOpacity = useTransform(scrollYProgress, [0.2, 0.25, 0.4], [0, 1, 0]);
  
  const textBlur = useTransform(scrollYProgress, [0.3, 0.45], ["blur(12px)", "blur(0px)"]);
  const textY = useTransform(scrollYProgress, [0.3, 0.45], [40, 0]);

  const menuData = {
    Coffee: [
      { name: "24K Gold Espresso", price: "₹450", image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=600" },
      { name: "Saffron Latte", price: "₹410", image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?q=80&w=600" }
    ],
    Desserts: [
      { name: "Saffron Opera", price: "₹720", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=600" }
    ],
    Brunch: [
      { name: "Truffle Benedict", price: "₹780", image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=600" }
    ]
  };

  return (
    <main ref={containerRef} className="bg-[#0a0807] text-[#D4A373] selection:bg-[#D4A373] selection:text-black">
      
      {/* SECTION 1: HERO (THE HOOK) */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6">
        <div className="absolute inset-0 opacity-20 grayscale brightness-50">
          <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2000" className="w-full h-full object-cover" alt="Background" />
        </div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 font-serif text-7xl md:text-[12rem] tracking-tighter font-bold text-white mb-4"
        >
          SALVORE
        </motion.h1>
        <p className="relative z-10 text-xs md:text-sm tracking-[0.5em] uppercase opacity-50">Curated Roastery & Sanctuary</p>
      </section>

      {/* SECTION 2: THE INTERACTIVE POUR (THE WOW FACTOR) */}
      <section className="relative h-[150vh] bg-[#120a07]">
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
          
          <div className="relative">
            {/* THE CUP - Using a much higher quality, verified transparent asset */}
            <motion.div style={{ rotate: cupRotation }} className="z-20 relative">
              <img 
                src="https://pngimg.com/d/cup_PNG1964.png" 
                className="w-48 md:w-72 drop-shadow-[0_25px_50px_rgba(0,0,0,0.9)]" 
                alt="Cup" 
              />
            </motion.div>

            {/* THE LIQUID - Now with a gradient for realism */}
            <motion.div 
              style={{ y: liquidY, scaleY: liquidScaleY, opacity: liquidOpacity }}
              className="absolute top-24 left-1/2 -translate-x-1/2 w-2 h-80 bg-gradient-to-b from-[#3d2419] to-transparent rounded-full blur-[1px] z-10 origin-top"
            />
          </div>

          <motion.div style={{ filter: textBlur, y: textY }} className="mt-16 text-center max-w-xl px-6">
            <h2 className="font-serif text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
              For Kind People, <br /> Brews & Planet
            </h2>
            <div className="w-12 h-[1px] bg-[#D4A373]/30 mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: THE MENU (EDITORIAL GRID) */}
      <section id="menu" className="py-24 px-6 bg-[#0a0807]">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center gap-8 mb-16 border-b border-white/5 pb-4">
            {["Coffee", "Desserts", "Brunch"].map(cat => (
              <button 
                key={cat} 
                onClick={() => setActiveCategory(cat)}
                className={`text-[10px] tracking-[0.3em] uppercase transition-all ${activeCategory === cat ? "text-[#D4A373]" : "text-white/20 hover:text-white/50"}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div 
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12"
            >
              {menuData[activeCategory as keyof typeof menuData].map((item, idx) => (
                <div key={idx} className="group flex flex-col md:flex-row gap-6 items-center">
                  <div className="w-full md:w-40 h-40 overflow-hidden rounded-2xl bg-white/5 border border-white/5">
                    <img src={item.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={item.name} />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-serif text-xl text-white">{item.name}</h4>
                      <span className="text-[#D4A373] font-mono text-sm">{item.price}</span>
                    </div>
                    <div className="w-full h-[1px] bg-white/5 my-2" />
                    <p className="text-white/30 text-[10px] uppercase tracking-widest leading-loose">Limited Batch Allocation</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* SECTION 4: FOOTER (SIMPLE & CLEAN) */}
      <footer className="py-24 border-t border-white/5 px-6 text-center">
        <h2 className="font-serif text-4xl text-white mb-8">Visit The Sanctuary.</h2>
        <p className="text-white/40 text-xs tracking-[0.2em] uppercase mb-12">Lavelle Road, Bangalore // 07:00 — 23:00</p>
        <Link href="/book" className="inline-block border border-[#D4A373] text-[#D4A373] px-12 py-4 rounded-full text-[10px] tracking-[0.4em] uppercase hover:bg-[#D4A373] hover:text-black transition-all">
          Reserve Table
        </Link>
      </footer>

    </main>
  );
}
