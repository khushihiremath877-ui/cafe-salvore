"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Compass, Shield, Clock, MapPin, ChevronRight, Calendar, BookOpen } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("Coffee");
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);
  
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // --- ANIMATION ENGINE MATH ---
  // Parallax Text
  const xTextLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const xTextRight = useTransform(scrollYProgress, [0, 1], ["-30%", "10%"]);
  
  // Hero Scaling
  const scaleHeroBg = useTransform(scrollYProgress, [0, 0.1], [1, 1.1]);

  // THE POURING LOGIC (Triggers between 20% and 40% scroll)
  const cupRotation = useTransform(scrollYProgress, [0.15, 0.3], [0, -90]);
  const liquidY = useTransform(scrollYProgress, [0.25, 0.45], [-20, 400]);
  const liquidOpacity = useTransform(scrollYProgress, [0.25, 0.3, 0.45], [0, 1, 0]);
  const textBlur = useTransform(scrollYProgress, [0.35, 0.5], ["blur(15px)", "blur(0px)"]);
  const textOpacity = useTransform(scrollYProgress, [0.35, 0.5], [0.2, 1]);

  // CATEGORIES & DATA
  const categories = ["Coffee", "Desserts", "Brunch"];
  const menuData: Record<string, Array<{ name: string; price: string; desc: string; tag: string; image: string }>> = {
    Coffee: [
      { name: "24K Gold Leaf Espresso", price: "₹450", desc: "Signature dark roast espresso extracted with mineralized water and garnished with pure edible 24k gold leafing.", tag: "Rare Blend", image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=600" },
      { name: "Smoked Caramel Macchiato", price: "₹520", desc: "Cold-smoked artisanal espresso layered over house-made salted caramel and velvet microfoam.", tag: "Tableside Smoke", image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=600" }
    ],
    Desserts: [
      { name: "Madagascar Vanilla Tart", price: "₹650", desc: "Crisp almond pastry shell filled with premium organic Madagascar bourbon vanilla bean custard.", tag: "Signature Sweet", image: "https://images.unsplash.com/photo-1519869325930-281384150729?q=80&w=600" },
      { name: "Saffron Truffle Opera Cake", price: "₹720", desc: "Layered sponge architecture soaked in single-origin espresso runtime syrup.", tag: "Limited Run", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=600" }
    ],
    Brunch: [
      { name: "Truffle Mushroom Benedict", price: "₹780", desc: "Poached free-range organic eggs, wild hand-picked forest mushrooms.", tag: "Chef Special", image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=600" },
      { name: "Avocado Croissant Toast", price: "₹580", desc: "Flaky house croissant base layered with whipped Hass avocado mousse.", tag: "Fresh Crop", image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=600" }
    ]
  };

  const faqs = [
    { q: "Do you accommodate walk-ins?", a: "To ensure full structural acoustic clarity, we highly prioritize booked invitations." },
    { q: "What is your bean allocation timeline?", a: "We rotate our single-estate micro-lots every 14 days." }
  ];

  return (
    <main ref={containerRef} className="relative w-full h-screen overflow-y-auto overflow-x-hidden no-scrollbar bg-[#0a0807] text-salvore-cream selection:bg-salvore-caramel selection:text-black">
      
      {/* 1. THE CINEMATIC DARK HERO (Original Salvore) */}
      <section id="home" className="relative w-full h-screen flex items-center justify-center px-4 overflow-hidden">
        <motion.div style={{ scale: scaleHeroBg }} className="absolute inset-0 z-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=2000" className="w-full h-full object-cover grayscale brightness-50" alt="Hero" />
        </motion.div>
        
        {/* PARALLAX TYPOGRAPHY LAYER */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none opacity-[0.03] font-serif font-black uppercase text-white">
            <motion.div style={{ x: xTextLeft }} className="text-[20vw] absolute top-[15vh]">SANCTUARY</motion.div>
        </div>

        <div className="relative z-10 text-center space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 glass-panel-luxury px-4 py-2 rounded-full border border-white/10 bg-black/40 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-mono tracking-widest uppercase">ALLOCATION ACTIVE // 8 SEATS REMAINING</span>
          </div>
          <h1 className="font-serif text-6xl md:text-[10rem] tracking-tighter text-gradient-gold-premium leading-none font-bold">SALVORE</h1>
          <p className="text-sm md:text-xl text-salvore-cream/60 font-light tracking-wide max-w-2xl mx-auto">A private sanctuary where structural acoustic calibration meets single-estate fluid mastery.</p>
          <div className="pt-4">
            <a href="#pour" className="glass-panel-luxury px-10 py-4 rounded-full inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase hover:bg-salvore-caramel hover:text-black transition-all duration-500">
                Begin The Experience <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 2. THE POURING ENGINE (The Scrollytelling Section) */}
      <section id="pour" className="relative h-[200vh] bg-[#F9F6F0]">
        <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
            
            {/* THE TILTING CUP */}
            <div className="relative flex flex-col items-center">
                <motion.div style={{ rotate: cupRotation }} className="z-20">
                    <img 
                        src="https://pngimg.com/d/cup_PNG1964.png" 
                        alt="Luxury Cup" 
                        className="w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-2xl"
                    />
                </motion.div>

                {/* THE LIQUID SPILL */}
                <motion.div 
                    style={{ y: liquidY, opacity: liquidOpacity }}
                    className="absolute top-24 z-10 w-2.5 h-64 bg-[#4E342E] rounded-full blur-[3px]"
                />
            </div>

            {/* THE CLEARING TEXT (Editorial Style) */}
            <motion.div 
                style={{ filter: textBlur, opacity: textOpacity }}
                className="mt-16 text-center max-w-2xl px-6"
            >
                <h2 className="font-serif text-4xl md:text-7xl leading-tight text-[#BC4749] font-bold">
                    For Kind People, <br /> Brews, Food and Planet
                </h2>
                <p className="mt-6 text-[#5B5B5B] font-light tracking-widest uppercase text-[10px]">Everything becomes clear.</p>
            </motion.div>
        </div>
      </section>

      {/* 3. THE "ABOUT US" BLUE BLOCK (Curvy Divider) */}
      <section id="about" className="relative bg-[#00305C] py-24 px-6 overflow-hidden">
         {/* CURVY SVG TOP DIVIDER */}
         <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px]">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#F9F6F0"></path>
            </svg>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 py-12">
            <div className="space-y-6">
                <h3 className="font-serif text-white text-5xl md:text-7xl italic font-light">About us.</h3>
                <p className="text-white/70 text-lg leading-relaxed max-w-md">
                    Board games and coffee are more than just a pass time; they are a way to connect and build fun communities.
                </p>
                <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
                    <div><div className="text-2xl font-bold text-salvore-gold">-18dB</div><div className="text-[10px] text-white/40 uppercase mt-1">Acoustics</div></div>
                    <div><div className="text-2xl font-bold text-salvore-gold">100%</div><div className="text-[10px] text-white/40 uppercase mt-1">Single Estate</div></div>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
                <div className="glass-panel-luxury p-8 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-md">
                    <Compass className="w-10 h-10 text-salvore-gold mb-4" />
                    <h4 className="text-white font-serif text-2xl font-bold">Spatial Aesthetic</h4>
                    <p className="text-white/40 text-sm mt-2">Geometric acoustic layouts enhance sensory taste responses.</p>
                </div>
            </div>
        </div>
      </section>

      {/* 4. THE EDITORIAL MENU (Clean Style) */}
      <section id="menu" className="bg-[#F9F6F0] py-24 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <span className="text-[#BC4749] text-xs tracking-widest uppercase font-mono block">// MICRO-LOT CURATIONS</span>
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-[#1A1A1A]">The Culinary Collection</h2>
          </div>
          
          <div className="flex justify-center gap-2 max-w-sm mx-auto p-1 rounded-full border border-[#1A1A1A]/10">
            {categories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)} className={`text-[10px] tracking-widest uppercase px-6 py-2.5 rounded-full transition-all duration-500 flex-1 ${activeCategory === cat ? "bg-[#1A1A1A] text-white" : "text-[#1A1A1A]/50 hover:text-[#1A1A1A]"}`}>{cat}</button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence mode="wait">
              <motion.div key={activeCategory} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="grid grid-cols-1 md:grid-cols-2 gap-8 col-span-2">
                {menuData[activeCategory].map((item) => (
                  <div key={item.name} className="bg-white rounded-3xl overflow-hidden flex flex-col shadow-sm hover:shadow-xl transition-all duration-500 border border-[#1A1A1A]/5 group cursor-pointer">
                    <div className="h-56 relative overflow-hidden bg-black">
                      <img src={item.image} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" alt={item.name} />
                    </div>
                    <div className="p-8 space-y-3">
                      <div className="flex justify-between items-center">
                        <h4 className="font-serif text-xl font-bold text-[#1A1A1A]">{item.name}</h4>
                        <span className="text-[#BC4749] font-mono font-bold">{item.price}</span>
                      </div>
                      <p className="text-[#5B5B5B] text-xs leading-relaxed line-clamp-2">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 5. FAQ & COORDINATES (Dark Footer) */}
      <section id="contact" className="bg-[#0a0807] py-24 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-8">
                <h2 className="font-serif text-5xl font-bold text-white">Visit Us.</h2>
                <div className="grid gap-6">
                    <div className="flex gap-4 items-start">
                        <MapPin className="w-6 h-6 text-salvore-gold shrink-0" />
                        <div><h4 className="text-white font-bold">Location</h4><p className="text-white/40 text-sm mt-1">102 Luxury Arcade, Lavelle Road, Bangalore</p></div>
                    </div>
                    <div className="flex gap-4 items-start">
                        <Clock className="w-6 h-6 text-salvore-gold shrink-0" />
                        <div><h4 className="text-white font-bold">Hours</h4><p className="text-white/40 text-sm mt-1">Mon—Sun // 07:00 AM - 11:00 PM</p></div>
                    </div>
                </div>
            </div>
            <div className="space-y-6">
                <h3 className="text-white font-serif text-2xl italic">Any Queries?</h3>
                <div className="space-y-3">
                    {faqs.map((item, idx) => (
                    <div key={idx} className="glass-panel-luxury rounded-xl border border-white/5 p-4 flex justify-between items-center cursor-pointer hover:bg-white/5 transition-all">
                        <span className="text-white text-xs">{item.q}</span>
                        <ChevronRight className="w-4 h-4 text-salvore-gold" />
                    </div>
                    ))}
                </div>
                <Link href="/reservations" className="block text-center py-5 rounded-full bg-gradient-to-r from-salvore-caramel to-salvore-gold text-black text-[10px] uppercase font-bold tracking-[0.3em]">Access Booking Portal</Link>
            </div>
        </div>
      </section>

    </main>
  );
}