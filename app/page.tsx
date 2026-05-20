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

  // --- ANIMATION ENGINE ---
  const xTextLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const scaleHeroBg = useTransform(scrollYProgress, [0, 0.1], [1, 1.1]);

  // THE POURING LOGIC
  const cupRotation = useTransform(scrollYProgress, [0.15, 0.3], [0, -90]);
  const liquidY = useTransform(scrollYProgress, [0.25, 0.45], [-20, 400]);
  const liquidOpacity = useTransform(scrollYProgress, [0.25, 0.3, 0.45], [0, 1, 0]);
  const textBlur = useTransform(scrollYProgress, [0.35, 0.5], ["blur(15px)", "blur(0px)"]);
  const textOpacity = useTransform(scrollYProgress, [0.35, 0.5], [0.2, 1]);

  const categories = ["Coffee", "Desserts", "Brunch"];
  const menuData: Record<string, Array<{ name: string; price: string; desc: string; image: string }>> = {
    Coffee: [
      { name: "24K Gold Leaf Espresso", price: "₹450", desc: "Signature dark roast with pure edible gold leafing.", image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=600" },
      { name: "Smoked Caramel Macchiato", price: "₹520", desc: "Cold-smoked artisanal espresso with velvet microfoam.", image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=600" }
    ],
    Desserts: [
      { name: "Saffron Truffle Opera", price: "₹720", desc: "Layered sponge with delicate saffron chocolate ganache.", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=600" }
    ],
    Brunch: [
      { name: "Truffle Benedict", price: "₹780", desc: "Poached eggs with shaved black truffle hollandaise.", image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=600" }
    ]
  };

  return (
    <main ref={containerRef} className="relative w-full h-screen overflow-y-auto overflow-x-hidden no-scrollbar bg-[#0a0807] text-[#EAD8C0] selection:bg-[#D4A373] selection:text-black">
      
      {/* 1. HERO SECTION */}
      <section id="home" className="relative w-full h-screen flex items-center justify-center px-4 overflow-hidden">
        <motion.div style={{ scale: scaleHeroBg }} className="absolute inset-0 z-0 opacity-30">
          <img src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=2000" className="w-full h-full object-cover grayscale brightness-50" alt="Hero" />
        </motion.div>
        
        <div className="absolute inset-0 z-0 opacity-[0.03] font-serif font-black uppercase text-white pointer-events-none">
            <motion.div style={{ x: xTextLeft }} className="text-[20vw] absolute top-[15vh]">RESERVE</motion.div>
        </div>

        <div className="relative z-10 text-center space-y-6 max-w-4xl">
          <h1 className="font-serif text-6xl md:text-[10rem] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#D4A373] to-[#A17C54] leading-none font-bold">SALVORE</h1>
          <p className="text-sm md:text-xl text-[#EAD8C0]/60 font-light tracking-wide max-w-2xl mx-auto italic">A sanctuary where fluid mastery meets acoustic isolation.</p>
          <div className="pt-4">
            <a href="#pour" className="px-10 py-4 rounded-full border border-[#D4A373]/30 inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase hover:bg-[#D4A373] hover:text-black transition-all duration-500">
                The Pour <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 2. THE POURING ENGINE */}
      <section id="pour" className="relative h-[200vh] bg-[#1A0F0A]">
        <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
            <div className="relative flex flex-col items-center">
                <motion.div style={{ rotate: cupRotation }} className="z-20">
                    <img 
                        src="https://www.pngarts.com/files/1/Coffee-Cup-PNG-Transparent-Image.png" 
                        alt="Coffee Cup" 
                        className="w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                    />
                </motion.div>
                <motion.div 
                    style={{ y: liquidY, opacity: liquidOpacity }}
                    className="absolute top-24 z-10 w-3 h-64 bg-gradient-to-b from-[#4E342E] to-[#2C1810] rounded-full blur-[2px]"
                />
            </div>

            <motion.div 
                style={{ filter: textBlur, opacity: textOpacity }}
                className="mt-16 text-center max-w-2xl px-6"
            >
                <h2 className="font-serif text-4xl md:text-7xl leading-tight text-[#D4A373] font-bold">
                    For Kind People, <br /> Brews & Planet
                </h2>
                <p className="mt-6 text-[#D4A373]/50 font-mono tracking-widest uppercase text-[10px]">Everything becomes clear.</p>
            </motion.div>
        </div>
      </section>

      {/* 3. ABOUT US (CURVY DARK BROWN) */}
      <section className="relative bg-[#2C1810] py-24 px-6">
         <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px]">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#1A0F0A"></path>
            </svg>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-12 relative z-10">
            <div className="space-y-6">
                <h3 className="font-serif text-[#D4A373] text-5xl md:text-7xl italic">About us.</h3>
                <p className="text-[#EAD8C0]/70 text-lg leading-relaxed">
                   Crafting moments of connection through curated micro-lots and silent architecture.
                </p>
            </div>
            <div className="bg-[#1A0F0A]/50 p-10 rounded-[40px] border border-[#D4A373]/10 backdrop-blur-md">
                <Compass className="w-12 h-12 text-[#D4A373] mb-6" />
                <h4 className="text-white font-serif text-2xl font-bold">Spatial Mastery</h4>
                <p className="text-[#EAD8C0]/40 text-sm mt-2 font-light leading-relaxed">Our environments are engineered to heighten sensory response, isolating the notes of the roast from the noise of the world.</p>
            </div>
        </div>
      </section>

      {/* 4. THE GOLDEN MENU */}
      <section id="menu" className="bg-[#1A0F0A] py-24 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-[#D4A373]">The Reserve Menu</h2>
          </div>
          
          <div className="flex justify-center gap-4 py-2">
            {categories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)} className={`text-[10px] tracking-widest uppercase px-8 py-3 rounded-full border transition-all ${activeCategory === cat ? "bg-[#D4A373] text-black border-[#D4A373]" : "text-[#D4A373]/40 border-[#D4A373]/10 hover:border-[#D4A373]/40"}`}>{cat}</button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence mode="wait">
              <motion.div key={activeCategory} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 md:grid-cols-2 gap-8 col-span-2">
                {menuData[activeCategory].map((item) => (
                  <div key={item.name} className="bg-[#2C1810]/30 rounded-3xl overflow-hidden border border-white/5 hover:border-[#D4A373]/30 transition-all duration-500 group">
                    <div className="h-64 relative overflow-hidden">
                      <img src={item.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={item.name} />
                    </div>
                    <div className="p-8">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-serif text-xl font-bold text-white">{item.name}</h4>
                        <span className="text-[#D4A373] font-mono">{item.price}</span>
                      </div>
                      <p className="text-[#EAD8C0]/40 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 5. CONTACT */}
      <footer className="bg-[#0a0807] py-24 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-6">
                <h2 className="font-serif text-5xl font-bold text-white">Visit Us.</h2>
                <div className="space-y-4">
                    <div className="flex gap-4"><MapPin className="text-[#D4A373]" /> <span className="text-sm text-white/50">Lavelle Road, Bangalore</span></div>
                    <div className="flex gap-4"><Clock className="text-[#D4A373]" /> <span className="text-sm text-white/50">07:00 AM - 11:00 PM</span></div>
                </div>
            </div>
            <Link href="/reservations" className="h-fit py-5 rounded-full bg-gradient-to-r from-[#D4A373] to-[#A17C54] text-black text-center text-[10px] uppercase font-bold tracking-[0.3em]">Access Booking Portal</Link>
        </div>
      </footer>
    </main>
  );
}