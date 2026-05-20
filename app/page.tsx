
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

  // PARALLAX EFFECTS
  const xTextLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const xTextRight = useTransform(scrollYProgress, [0, 1], ["-30%", "10%"]);

  const menuData = {
    Coffee: [
      { name: "24K Gold Espresso", price: "₹450", desc: "Signature dark roast with edible gold.", tag: "Rare", image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=600" },
      { name: "Saffron Latte", price: "₹410", desc: "Infused with Kashmiri saffron.", tag: "Infusion", image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?q=80&w=600" }
    ],
    Desserts: [{ name: "Saffron Opera", price: "₹720", desc: "Layered chocolate ganache.", tag: "Signature", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=600" }],
    Brunch: [{ name: "Truffle Benedict", price: "₹780", desc: "Black truffle hollandaise.", tag: "Chef Special", image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=600" }]
  };

  return (
    <main ref={containerRef} className="relative w-full bg-[#0a0807] text-white selection:bg-[#D4A373] no-scrollbar">
      
      {/* --- RESTORED BACKGROUND EFFECTS --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[90vw] h-[90vw] bg-[#FFBF00] opacity-10 filter blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-[10%] left-[-10%] w-[80vw] h-[80vw] bg-[#4E342E] opacity-20 filter blur-[120px] rounded-full" />
      </div>

      {/* --- FLOATING TYPOGRAPHY --- */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none opacity-[0.02] font-serif font-black uppercase text-white overflow-hidden">
        <motion.div style={{ x: xTextLeft }} className="text-[20vw] absolute top-[15vh]">SANCTUARY</motion.div>
        <motion.div style={{ x: xTextRight }} className="text-[20vw] absolute top-[120vh]">RESERVE</motion.div>
        <motion.div style={{ x: xTextLeft }} className="text-[20vw] absolute top-[250vh]">EXPERIENCE</motion.div>
      </div>

      {/* 1. HERO */}
      <section className="relative h-screen flex items-center justify-center snap-start overflow-hidden px-6">
        <div className="absolute inset-0 z-0 opacity-20 grayscale brightness-50">
          <img src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=2000" className="w-full h-full object-cover" alt="Hero" />
        </div>
        <div className="relative z-10 text-center space-y-6">
          <h1 className="font-serif text-6xl md:text-[11rem] tracking-tighter text-white font-bold leading-none">SALVORE</h1>
          <p className="text-[#D4A373] text-xs tracking-[0.6em] uppercase">Private Roastery // Bengaluru</p>
        </div>
      </section>

      {/* 2. ABOUT */}
      <section className="relative py-40 px-6 snap-start">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
                <span className="text-[#D4A373] text-xs tracking-widest uppercase font-mono">// System 01</span>
                <h2 className="font-serif text-5xl md:text-7xl text-white italic">Acoustic Isolation.</h2>
                <p className="text-white/40 text-lg leading-relaxed">Structural geometry designed to eliminate environmental noise and focus the palate.</p>
            </div>
            <div className="p-10 rounded-[40px] border border-white/5 bg-white/5 backdrop-blur-xl">
                <Compass className="w-10 h-10 text-[#D4A373] mb-6" />
                <h3 className="font-serif text-2xl text-white mb-4">Spatial Mastery</h3>
                <p className="text-white/30 text-sm leading-loose">Seating decks arranged with high-density acoustic boundaries for total sensory immersion.</p>
            </div>
        </div>
      </section>

      {/* 3. SIGNATURE */}
      <section className="relative py-40 bg-[#120a07] text-center snap-start">
         <Zap className="w-12 h-12 text-[#D4A373] mx-auto mb-8" />
         <h2 className="font-serif text-5xl md:text-8xl text-white font-bold">Signature Pour.</h2>
         <p className="mt-8 text-white/40 text-sm tracking-[0.4em] uppercase">Allocated Micro-Lots</p>
      </section>

      {/* 4. MENU */}
      <section className="relative py-40 px-6 snap-start">
        <div className="max-w-6xl mx-auto space-y-16">
          <h2 className="font-serif text-center text-4xl md:text-6xl text-white">The Collection</h2>
          <div className="flex justify-center gap-8 border-b border-white/5 pb-6">
            {["Coffee", "Desserts", "Brunch"].map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)} className={`text-[10px] tracking-widest uppercase transition-all ${activeCategory === cat ? "text-[#D4A373]" : "text-white/20"}`}>{cat}</button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {menuData[activeCategory as keyof typeof menuData].map((item, i) => (
              <div key={i} className="flex gap-6 items-center border-b border-white/5 pb-10 group">
                <div className="w-32 h-32 rounded-3xl overflow-hidden bg-white/5 grayscale group-hover:grayscale-0 transition-all duration-700">
                    <img src={item.image} className="w-full h-full object-cover" alt={item.name} />
                </div>
                <div className="flex-1 space-y-2">
                    <div className="flex justify-between font-serif text-2xl text-white"><span>{item.name}</span><span className="text-[#D4A373]">{item.price}</span></div>
                    <p className="text-white/30 text-xs">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. GALLERY */}
      <section className="py-40 px-6 snap-start bg-[#0a0807]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            {["https://images.unsplash.com/photo-1554118811-1e0d58224f24", "https://images.unsplash.com/photo-1498804103079-a6351b050096", "https://images.unsplash.com/photo-1507133750040-4a8f57021571", "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"].map((url, i) => (
                <div key={i} className="h-96 rounded-[40px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 border border-white/5">
                    <img src={`${url}?q=80&w=800`} className="w-full h-full object-cover" alt="Gallery" />
                </div>
            ))}
        </div>
      </section>

      {/* 6. EVENTS */}
      <section className="py-40 px-6 snap-start bg-[#120a07]">
        <div className="max-w-3xl mx-auto text-center p-16 rounded-[60px] border border-white/5 bg-white/5 backdrop-blur-md">
            <Calendar className="w-10 h-10 text-[#D4A373] mx-auto mb-8" />
            <h2 className="font-serif text-4xl text-white mb-4">Cupping Masterclass</h2>
            <p className="text-white/40 text-xs tracking-widest uppercase">June 04, 2026 // 10:00 AM</p>
            <div className="h-[1px] w-12 bg-[#D4A373] mx-auto my-10" />
            <button className="text-[10px] tracking-widest uppercase text-[#D4A373] hover:text-white transition-colors">Apply for Seat</button>
        </div>
      </section>

      {/* 7. JOURNAL */}
      <section className="py-40 px-6 snap-start">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
                <span className="text-[#D4A373] text-xs tracking-widest uppercase font-mono">// Reading 04</span>
                <h3 className="font-serif text-5xl text-white italic">Chemistry & <br /> Extraction.</h3>
                <p className="text-white/40 text-sm leading-loose">Exploring the mineral counts and temperature curves required for a perfect pour.</p>
                <BookOpen className="w-6 h-6 text-[#D4A373]" />
            </div>
            <div className="h-[500px] rounded-[60px] overflow-hidden border border-white/5 grayscale">
                <img src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1000" className="w-full h-full object-cover opacity-50" alt="Journal" />
            </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="py-40 px-6 snap-start bg-[#120a07]">
        <div className="max-w-3xl mx-auto space-y-12">
            <h2 className="font-serif text-4xl text-center text-white italic">Inquiries.</h2>
            <div className="space-y-4">
                {[
                    {q: "Is there a dress protocol?", a: "We invite guests to lean into smart-minimalist styling."},
                    {q: "What is the allocation timeline?", a: "Micro-lots rotate every 14 days."}
                ].map((item, i) => (
                    <div key={i} className="p-8 rounded-3xl border border-white/5 bg-white/5">
                        <h4 className="text-[#D4A373] text-sm font-bold mb-4">{item.q}</h4>
                        <p className="text-white/30 text-xs leading-relaxed">{item.a}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* 9. COORDINATES & PORTAL */}
      <footer className="py-40 px-6 snap-start border-t border-white/5 text-center">
        <div className="max-w-4xl mx-auto space-y-16">
            <div className="space-y-6">
                <h2 className="font-serif text-6xl md:text-8xl text-white font-bold italic tracking-tighter">Visit us.</h2>
                <div className="flex flex-col md:flex-row justify-center gap-10">
                    <div className="flex items-center gap-3 text-white/40 text-xs uppercase tracking-widest"><MapPin className="w-4 h-4 text-[#D4A373]"/> Lavelle Road, Bangalore</div>
                    <div className="flex items-center gap-3 text-white/40 text-xs uppercase tracking-widest"><Clock className="w-4 h-4 text-[#D4A373]"/> 07:00 — 23:00</div>
                </div>
            </div>
            <Link href="/book" className="inline-block px-16 py-6 rounded-full bg-[#D4A373] text-black font-bold uppercase text-[10px] tracking-[0.5em] hover:scale-105 transition-transform">Access Portal</Link>
        </div>
      </footer>

    </main>
  );
}