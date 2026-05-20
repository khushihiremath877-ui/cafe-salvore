
"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Compass, Shield, Clock, MapPin, ChevronRight, Calendar, BookOpen, Zap } from "lucide-react";

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

  const menuData = {
    Coffee: [
      { name: "24K Gold Espresso", price: "₹450", desc: "Signature roast with edible gold.", tag: "Rare", image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=600" },
      { name: "Saffron Latte", price: "₹410", desc: "Infused with Kashmiri saffron.", tag: "Infusion", image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?q=80&w=600" }
    ],
    Desserts: [{ name: "Saffron Opera", price: "₹720", desc: "Layered chocolate ganache.", tag: "Signature", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=600" }],
    Brunch: [{ name: "Truffle Benedict", price: "₹780", desc: "Black truffle hollandaise.", tag: "Chef Special", image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=600" }]
  };

  const handleBooking = () => {
    alert("Redirecting to the Secure Reservation Portal...");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main ref={containerRef} className="relative w-full bg-[#0a0807] text-white selection:bg-[#D4A373] no-scrollbar">
      
      {/* VIBRANT BACKGROUND NEBULA */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-5%] right-[-5%] w-[80vw] h-[80vw] bg-[#FFD700] opacity-20 filter blur-[140px] rounded-full animate-pulse" />
        <div className="absolute bottom-[5%] left-[-5%] w-[70vw] h-[70vw] bg-[#8B4513] opacity-25 filter blur-[120px] rounded-full" />
      </div>

      {/* FLOATING TYPOGRAPHY */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none opacity-[0.03] font-serif font-black uppercase text-white overflow-hidden">
        <motion.div style={{ x: xTextLeft }} className="text-[20vw] absolute top-[15vh]">SANCTUARY</motion.div>
        <motion.div style={{ x: xTextRight }} className="text-[20vw] absolute top-[150vh]">RESERVE</motion.div>
      </div>

      {/* 1. HERO */}
      <section className="relative h-screen flex items-center justify-center snap-start overflow-hidden px-6">
        <div className="absolute inset-0 z-0 opacity-40">
          <img src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=2000" className="w-full h-full object-cover" alt="Hero" />
        </div>
        <div className="relative z-10 text-center space-y-6">
          <h1 className="font-serif text-6xl md:text-[11rem] tracking-tighter text-white font-bold leading-none drop-shadow-2xl">SALVORE</h1>
          <p className="text-[#FFD700] text-xs tracking-[0.6em] uppercase font-bold">Luxury Roastery // Bengaluru</p>
        </div>
      </section>

      {/* 2. ABOUT */}
      <section className="relative py-40 px-6 snap-start">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
                <h2 className="font-serif text-5xl md:text-7xl text-white italic">Acoustic Isolation.</h2>
                <p className="text-white/60 text-lg leading-relaxed">Where the silence of the sanctuary meets the vibrant notes of the roast.</p>
            </div>
            <div className="p-10 rounded-[40px] border border-[#FFD700]/10 bg-white/5 backdrop-blur-xl">
                <Compass className="w-10 h-10 text-[#FFD700] mb-6" />
                <h3 className="font-serif text-2xl text-white mb-4">Spatial Mastery</h3>
                <p className="text-white/50 text-sm leading-loose">Engineered for total sensory immersion.</p>
            </div>
        </div>
      </section>

      {/* 3. MENU - VIBRANT IMAGES */}
      <section className="relative py-40 px-6 snap-start">
        <div className="max-w-6xl mx-auto space-y-16">
          <h2 className="font-serif text-center text-4xl md:text-6xl text-white">The Collection</h2>
          <div className="flex justify-center gap-8 border-b border-white/5 pb-6">
            {["Coffee", "Desserts", "Brunch"].map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)} className={`text-[10px] tracking-widest uppercase transition-all ${activeCategory === cat ? "text-[#FFD700]" : "text-white/20"}`}>{cat}</button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {menuData[activeCategory as keyof typeof menuData].map((item, i) => (
              <div key={i} className="flex gap-6 items-center border-b border-white/5 pb-10 group">
                <div className="w-32 h-32 rounded-3xl overflow-hidden shadow-2xl">
                    <img src={item.image} className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-700" alt={item.name} />
                </div>
                <div className="flex-1 space-y-2">
                    <div className="flex justify-between font-serif text-2xl text-white"><span>{item.name}</span><span className="text-[#FFD700]">{item.price}</span></div>
                    <p className="text-white/50 text-xs">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. GALLERY - COLORFUL */}
      <section className="py-40 px-6 snap-start">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            {["https://images.unsplash.com/photo-1554118811-1e0d58224f24", "https://images.unsplash.com/photo-1498804103079-a6351b050096", "https://images.unsplash.com/photo-1507133750040-4a8f57021571", "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"].map((url, i) => (
                <div key={i} className="h-96 rounded-[40px] overflow-hidden shadow-xl border border-white/5">
                    <img src={`${url}?q=80&w=800`} className="w-full h-full object-cover" alt="Gallery" />
                </div>
            ))}
        </div>
      </section>

      {/* 5. JOURNAL */}
      <section className="py-40 px-6 snap-start">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
                <h3 className="font-serif text-5xl text-white italic">Chemistry & Extraction.</h3>
                <p className="text-white/50 text-sm leading-loose">A deep dive into the colorful science of the perfect pour.</p>
                <BookOpen className="w-6 h-6 text-[#FFD700]" />
            </div>
            <div className="h-[500px] rounded-[60px] overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1000" className="w-full h-full object-cover" alt="Journal" />
            </div>
        </div>
      </section>

      {/* 6. COORDINATES & FIXED PORTAL */}
      <footer className="py-40 px-6 snap-start border-t border-white/5 text-center">
        <div className="max-w-4xl mx-auto space-y-16">
            <div className="space-y-6">
                <h2 className="font-serif text-6xl md:text-8xl text-white font-bold italic tracking-tighter">Visit us.</h2>
                <div className="flex flex-col md:flex-row justify-center gap-10">
                    <div className="flex items-center gap-3 text-white/50 text-xs uppercase tracking-widest"><MapPin className="w-4 h-4 text-[#FFD700]"/> Lavelle Road, Bangalore</div>
                    <div className="flex items-center gap-3 text-white/50 text-xs uppercase tracking-widest"><Clock className="w-4 h-4 text-[#FFD700]"/> 07:00 — 23:00</div>
                </div>
            </div>
            <button 
              onClick={handleBooking}
              className="inline-block px-16 py-6 rounded-full bg-gradient-to-r from-[#FFD700] to-[#DAA520] text-black font-bold uppercase text-[10px] tracking-[0.5em] hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(255,215,0,0.3)]"
            >
                Access Booking Portal
            </button>
        </div>
      </footer>

    </main>
  );
}