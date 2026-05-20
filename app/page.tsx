"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Compass, Shield, Clock, MapPin, ChevronRight, Calendar, BookOpen, Zap } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("Coffee");
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);
  
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const xTextLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const xTextRight = useTransform(scrollYProgress, [0, 1], ["-30%", "10%"]);
  const scaleHeroBg = useTransform(scrollYProgress, [0, 0.2], [1, 1.12]);

  const categories = ["Coffee", "Desserts", "Brunch"];
  
  const menuData: Record<string, Array<{ name: string; price: string; desc: string; tag: string; image: string }>> = {
    Coffee: [
      { name: "24K Gold Leaf Espresso", price: "₹450", desc: "Signature dark roast espresso.", tag: "Rare Blend", image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=600" },
      { name: "Smoked Caramel Macchiato", price: "₹520", desc: "Cold-smoked artisanal espresso.", tag: "Signature", image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=600" }
    ],
    Desserts: [
      { name: "Madagascar Vanilla Tart", price: "₹650", desc: "Premium organic vanilla custard.", tag: "Signature Sweet", image: "https://images.unsplash.com/photo-1519869325930-281384150729?q=80&w=600" }
    ],
    Brunch: [
      { name: "Truffle Mushroom Benedict", price: "₹780", desc: "Poached free-range organic eggs.", tag: "Chef Special", image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=600" }
    ]
  };

  const faqs = [
    { q: "Do you accommodate walk-ins?", a: "We highly prioritize booked invitations." },
    { q: "What is your bean allocation timeline?", a: "We rotate our single-estate micro-lots every 14 days." }
  ];

  return (
    <main ref={containerRef} className="relative w-full h-screen overflow-y-auto overflow-x-hidden md:snap-y md:snap-mandatory no-scrollbar bg-[#0a0807] text-white selection:bg-[#D4A373]">
      
      {/* PANEL 1: HERO */}
      <section id="home" className="relative w-full h-screen md:snap-start flex items-center justify-center px-4 overflow-hidden">
        <motion.div style={{ scale: scaleHeroBg }} className="absolute inset-0 z-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=2000" className="w-full h-full object-cover grayscale brightness-50" alt="Hero" />
        </motion.div>
        <div className="relative z-10 text-center space-y-6 max-w-4xl">
          <h1 className="font-serif text-6xl md:text-[10rem] tracking-tighter text-white leading-none font-bold">SALVORE</h1>
          <p className="text-sm md:text-xl text-white/60 italic tracking-wide">A private sanctuary of fluid mastery.</p>
        </div>
      </section>

      {/* PANEL 2: ABOUT */}
      <section id="about" className="relative w-full h-screen md:snap-start flex items-center justify-center px-6">
        <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-[#D4A373] text-xs tracking-widest uppercase font-mono">// CORE SYSTEM</span>
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-white">Acoustic Isolation.</h2>
            <p className="text-white/60 text-sm">Geometry designed to eliminate environmental reflection.</p>
          </div>
          <div className="p-10 rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-md">
            <Compass className="w-10 h-10 text-[#D4A373] mb-6" />
            <h3 className="font-serif text-2xl text-white">Spatial Aesthetic</h3>
          </div>
        </div>
      </section>

      {/* PANEL 3: SIGNATURE */}
      <section id="signature" className="relative w-full h-screen md:snap-start flex items-center justify-center px-6">
         <div className="text-center space-y-8 max-w-2xl">
            <Zap className="w-12 h-12 text-[#D4A373] mx-auto mb-4" />
            <h2 className="font-serif text-5xl md:text-7xl font-bold text-white">Signature Pour.</h2>
         </div>
      </section>

      {/* PANEL 4: MENU */}
      <section id="menu" className="relative w-full h-screen md:snap-start flex items-center justify-center px-6">
        <div className="max-w-6xl w-full space-y-10">
          <h2 className="font-serif text-center text-3xl md:text-5xl font-bold text-white">Culinary Collection</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {menuData[activeCategory].map((item) => (
              <div key={item.name} className="rounded-2xl border border-white/5 overflow-hidden flex flex-row h-44 bg-white/5">
                <div className="w-1/3 h-full relative overflow-hidden">
                  <img src={item.image} className="w-full h-full object-cover grayscale" alt={item.name} />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <h4 className="font-serif text-lg font-bold text-white">{item.name}</h4>
                  <span className="text-[#D4A373] font-mono text-sm">{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PANEL 5: GALLERY */}
      <section id="gallery" className="relative w-full h-screen md:snap-start flex items-center justify-center px-6">
        <div className="max-w-6xl w-full grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-80 rounded-3xl overflow-hidden border border-white/5 bg-white/5">
                  <div className="w-full h-full bg-[#1A1A1A] flex items-center justify-center italic text-white/20">Frame {i}</div>
                </div>
            ))}
        </div>
      </section>

      {/* PANEL 6: EVENTS */}
      <section id="events" className="relative w-full h-screen md:snap-start flex items-center justify-center px-6">
        <div className="max-w-xl w-full p-12 rounded-[40px] border border-white/5 bg-white/5 text-center">
            <Calendar className="w-8 h-8 text-[#D4A373] mx-auto mb-4" />
            <h3 className="text-white text-2xl font-bold font-serif">Cupping Masterclass</h3>
            <p className="text-white/40 text-xs mt-2">June 04, 2026 // 10:00 AM</p>
        </div>
      </section>

      {/* PANEL 7: JOURNAL */}
      <section id="journal" className="relative w-full h-screen md:snap-start flex items-center justify-center px-6">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
                <h3 className="font-serif text-4xl text-white">The Journal.</h3>
                <p className="text-white/40 text-sm">Insights into the chemistry of extraction.</p>
            </div>
            <div className="h-96 rounded-[40px] bg-white/5 border border-white/5 overflow-hidden">
                <div className="w-full h-full bg-[#1A1A1A]"></div>
            </div>
        </div>
      </section>

      {/* PANEL 8: CONTACT */}
      <section id="contact" className="relative w-full h-screen md:snap-start flex items-center justify-center px-6">
        <div className="max-w-4xl w-full grid md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h2 className="font-serif text-4xl font-bold text-white italic">Inquiries.</h2>
            {faqs.map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-white/5 text-xs text-white/50">{item.q}</div>
            ))}
          </div>
          <div className="space-y-8">
            <MapPin className="w-5 h-5 text-[#D4A373]" />
            <p className="text-xs text-white/50">Lavelle Road, Bangalore</p>
            <Link href="/book" className="block text-center py-5 rounded-full bg-white text-black text-[10px] uppercase font-bold tracking-[0.3em]">Access Portal</Link>
          </div>
        </div>
      </section>
    </main>
  );
}