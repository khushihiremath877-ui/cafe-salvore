
"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Compass, Shield, Clock, MapPin, ChevronRight, Calendar, BookOpen, Coffee, Zap } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("Coffee");
  const containerRef = useRef<HTMLDivElement>(null);
  
  // This now tracks the WHOLE page scroll, which is much more stable
  const { scrollYProgress } = useScroll();

  // --- INTERACTION ENGINE ---
  // These numbers [0, 0.2] mean the animation happens in the first 20% of the page
  const cupRotation = useTransform(scrollYProgress, [0.05, 0.2], [0, -90]);
  const liquidY = useTransform(scrollYProgress, [0.12, 0.25], [-20, 450]);
  const liquidOpacity = useTransform(scrollYProgress, [0.12, 0.15, 0.25], [0, 1, 0]);
  const textBlur = useTransform(scrollYProgress, [0.15, 0.3], ["blur(15px)", "blur(0px)"]);
  const textOpacity = useTransform(scrollYProgress, [0.15, 0.3], [0.1, 1]);

  const menuData = {
    Coffee: [
      { name: "24K Gold Espresso", price: "₹450", image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=600" },
      { name: "Saffron Latte", price: "₹410", image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?q=80&w=600" }
    ],
    Desserts: [{ name: "Saffron Opera", price: "₹720", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=600" }],
    Brunch: [{ name: "Truffle Benedict", price: "₹780", image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=600" }]
  };

  return (
    // REMOVED h-screen overflow-y-auto here to fix the scroll lock
    <div className="relative w-full bg-[#0a0807] text-[#EAD8C0] selection:bg-[#D4A373]">
      
      {/* 1. HERO */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 grayscale brightness-50">
          <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2000" className="w-full h-full object-cover" alt="Hero" />
        </div>
        <div className="relative z-10 text-center space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-7xl md:text-[11rem] tracking-tighter text-white font-bold leading-none"
          >
            SALVORE
          </motion.h1>
          <p className="text-[#D4A373] text-xs tracking-[0.6em] uppercase">Private Sanctuary & Roastery</p>
        </div>
      </section>

      {/* 2. THE POURING ENGINE */}
      <section className="relative h-[150vh] bg-[#120a07]">
        <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
            <div className="relative flex flex-col items-center">
                <motion.div style={{ rotate: cupRotation }} className="z-20">
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.png" 
                        alt="Coffee Cup" 
                        className="w-52 h-52 md:w-80 md:h-80 object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
                    />
                </motion.div>
                <motion.div style={{ y: liquidY, opacity: liquidOpacity }} className="absolute top-28 z-10 w-2 h-64 bg-gradient-to-b from-[#4E342E] to-transparent rounded-full blur-[2px]" />
            </div>
            <motion.div style={{ filter: textBlur, opacity: textOpacity }} className="mt-12 text-center px-6">
                <h2 className="font-serif text-4xl md:text-7xl text-[#D4A373] font-bold">For Kind People, <br /> Brews & Planet</h2>
            </motion.div>
        </div>
      </section>

      {/* 3. ABOUT */}
      <section className="relative bg-[#201410] py-32 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
                <h3 className="font-serif text-5xl text-white italic">The Vision.</h3>
                <p className="text-white/60 text-lg leading-relaxed">Where structural acoustic calibration meets the finest micro-lots.</p>
            </div>
            <div className="border-l border-[#D4A373]/20 pl-8 space-y-4">
                <Shield className="w-8 h-8 text-[#D4A373]" />
                <h4 className="text-white text-xl font-bold font-serif">Acoustic Isolation</h4>
                <p className="text-white/40 text-sm font-light">Engineered to eliminate environmental noise.</p>
            </div>
        </div>
      </section>

      {/* 4. MENU */}
      <section className="bg-[#0a0807] py-32 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <h2 className="font-serif text-4xl text-center text-[#D4A373] font-bold uppercase tracking-widest">Reserve Selection</h2>
          <div className="flex justify-center gap-6 pb-8 border-b border-white/5">
            {["Coffee", "Desserts", "Brunch"].map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)} className={`text-[10px] tracking-widest uppercase transition-all ${activeCategory === cat ? "text-[#D4A373]" : "text-white/30"}`}>{cat}</button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <AnimatePresence mode="wait">
              <motion.div key={activeCategory} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid md:grid-cols-2 gap-12 col-span-2">
                {menuData[activeCategory as keyof typeof menuData].map((item, i) => (
                  <div key={i} className="flex gap-6 items-center group">
                    <div className="w-24 h-24 rounded-2xl overflow-hidden bg-white/5 shrink-0">
                        <img src={item.image} className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all" alt={item.name} />
                    </div>
                    <div className="flex-1 border-b border-white/5 pb-4">
                        <div className="flex justify-between font-serif text-xl text-white"><span>{item.name}</span><span className="text-[#D4A373]">{item.price}</span></div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 5. GALLERY */}
      <section className="bg-[#0a0807] py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {["https://images.unsplash.com/photo-1554118811-1e0d58224f24", "https://images.unsplash.com/photo-1498804103079-a6351b050096", "https://images.unsplash.com/photo-1507133750040-4a8f57021571", "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"].map((url, i) => (
                <div key={i} className="h-64 rounded-3xl overflow-hidden bg-[#201410]">
                    <img src={`${url}?q=80&w=600`} className="w-full h-full object-cover grayscale" alt="Gallery" />
                </div>
            ))}
        </div>
      </section>

      {/* 6. FAQ & FOOTER */}
      <footer className="bg-[#0a0807] py-40 px-6 border-t border-white/5 text-center">
        <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="font-serif text-6xl text-white font-bold tracking-tighter italic">Visit Salvore.</h2>
            <p className="text-white/40 text-xs tracking-widest uppercase">Lavelle Road, Bangalore // 07:00 AM — 11:00 PM</p>
            <Link href="/book" className="inline-block px-12 py-5 rounded-full bg-gradient-to-r from-[#D4A373] to-[#A17C54] text-black font-bold uppercase text-[10px] tracking-[0.4em]">Book Invitation</Link>
        </div>
      </footer>
    </div>
  );
}