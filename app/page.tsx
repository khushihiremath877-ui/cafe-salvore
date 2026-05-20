
"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Compass, Shield, Clock, MapPin, ChevronRight, Calendar, BookOpen } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("Coffee");
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Parallax and Scale animations
  const xTextLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const xTextRight = useTransform(scrollYProgress, [0, 1], ["-30%", "10%"]);
  const scaleHeroBg = useTransform(scrollYProgress, [0, 0.2], [1, 1.12]);

  const categories = ["Coffee", "Desserts", "Brunch"];
  
  const menuData: Record<string, Array<{ name: string; price: string; desc: string; tag: string; image: string }>> = {
    Coffee: [
      { name: "24K Gold Leaf Espresso", price: "₹450", desc: "Signature dark roast espresso extracted with mineralized water and garnished with pure edible 24k gold leafing.", tag: "Rare Blend", image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=600" },
      { name: "Smoked Caramel Macchiato", price: "₹520", desc: "Cold-smoked artisanal espresso layered over house-made salted caramel and velvet microfoam.", tag: "Tableside Smoke", image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=600" }
    ],
    Desserts: [
      { name: "Madagascar Vanilla Tart", price: "₹650", desc: "Crisp almond pastry shell filled with premium organic Madagascar bourbon vanilla bean custard.", tag: "Signature Sweet", image: "https://images.unsplash.com/photo-1519869325930-281384150729?q=80&w=600" },
      { name: "Saffron Truffle Opera Cake", price: "₹720", desc: "Layered sponge architecture soaked in single-origin espresso runtime syrup and layered with delicate saffron chocolate ganache.", tag: "Limited Run", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=600" }
    ],
    Brunch: [
      { name: "Truffle Mushroom Benedict", price: "₹780", desc: "Poached free-range organic eggs, wild hand-picked forest mushrooms, shaved black truffle hollandaise on sourdough.", tag: "Chef Special", image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=600" },
      { name: "Avocado Croissant Toast", price: "₹580", desc: "Flaky freshly-baked house croissant base layered with whipped Hass avocado mousse and micro-herbs.", tag: "Fresh Crop", image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=600" }
    ]
  };

  const faqs = [
    { q: "Do you accommodate walk-ins?", a: "To ensure full structural acoustic clarity and custom tableside pours, we highly prioritize booked invitations." },
    { q: "What is your bean allocation timeline?", a: "We rotate our single-estate micro-lots every 14 days following rigorous cupping adjustments." },
    { q: "Is there a specific dress protocol?", a: "We invite our guests to lean into smart-casual or fine minimalist styling." }
  ];

  return (
    <main ref={containerRef} className="relative w-full h-screen overflow-y-auto overflow-x-hidden md:snap-y md:snap-mandatory no-scrollbar bg-[#0a0807] text-salvore-cream selection:bg-salvore-caramel selection:text-black">
      
      {/* BACKGROUND EFFECTS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[90vw] h-[90vw] bg-nebula-amber opacity-20 filter blur-[120px] rounded-full animate-nebula-1" />
        <div className="absolute bottom-[10%] left-[-10%] w-[80vw] h-[80vw] bg-nebula-espresso opacity-20 filter blur-[100px] rounded-full animate-nebula-2" />
      </div>

      {/* PARALLAX TYPOGRAPHY */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none opacity-[0.03] font-serif font-black uppercase text-white">
        <motion.div style={{ x: xTextLeft }} className="text-[20vw] absolute top-[15vh]">SANCTUARY</motion.div>
        <motion.div style={{ x: xTextRight }} className="text-[20vw] absolute top-[50vh]">RESERVE</motion.div>
        <motion.div style={{ x: xTextLeft }} className="text-[20vw] absolute top-[85vh]">EXPERIENCE</motion.div>
      </div>

      {/* PANEL 1: HERO */}
      <section id="home" className="relative w-full h-[90vh] md:h-screen md:snap-start flex items-center justify-center px-4 overflow-hidden">
        <motion.div style={{ scale: scaleHeroBg }} className="absolute inset-0 z-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=2000" className="w-full h-full object-cover grayscale brightness-50" alt="Hero" />
        </motion.div>
        <div className="relative z-10 text-center space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 glass-panel-luxury px-4 py-2 rounded-full border border-white/10 bg-black/40 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-mono tracking-widest uppercase">ALLOCATION ACTIVE // 8 SEATS REMAINING</span>
          </div>
          <h1 className="font-serif text-6xl md:text-[10rem] tracking-tighter text-gradient-gold-premium leading-none font-bold">SALVORE</h1>
          <p className="text-sm md:text-xl text-salvore-cream/60 font-light tracking-wide max-w-2xl mx-auto">A private sanctuary where structural acoustic calibration meets single-estate fluid mastery.</p>
          <div className="pt-4">
            <a href="#about" className="glass-panel-luxury px-10 py-4 rounded-full inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase hover:bg-salvore-caramel hover:text-black transition-all duration-500">Explore The Estate <ArrowRight className="w-4 h-4" /></a>
          </div>
        </div>
      </section>

      {/* PANEL 2: ABOUT */}
      <section id="about" className="relative w-full h-auto md:h-screen md:snap-start flex items-center justify-center py-20 md:py-0 px-6">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-salvore-caramel text-xs tracking-widest uppercase font-mono">// CORE SYSTEM SPECIFICATIONS</span>
            <h2 className="font-serif text-4xl md:text-6xl font-bold leading-tight text-white">Acoustic <br /><span className="text-gradient-gold-premium italic font-light">Isolation.</span></h2>
            <p className="text-salvore-cream/60 text-sm leading-relaxed">Internal geometry designed to eliminate environmental reflection.</p>
            <div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-6 font-mono">
              <div><div className="text-2xl font-bold text-salvore-gold">-18dB</div><div className="text-[10px] text-white/40 uppercase mt-1">Decibels</div></div>
              <div><div className="text-2xl font-bold text-salvore-gold">100%</div><div className="text-[10px] text-white/40 uppercase mt-1">Micro-Lot</div></div>
              <div><div className="text-2xl font-bold text-salvore-gold">0.02s</div><div className="text-[10px] text-white/40 uppercase mt-1">Variance</div></div>
            </div>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-panel-luxury p-8 rounded-3xl h-64 relative overflow-hidden group border border-white/5 hover:border-salvore-caramel/30 transition-all">
              <Compass className="w-10 h-10 text-salvore-caramel mb-4" />
              <h3 className="font-serif text-xl font-bold text-white">Controlled Extraction</h3>
              <p className="text-xs text-white/40 mt-2">Atmospheric bars maintained to preserve moisture curves perfectly.</p>
            </div>
            <div className="glass-panel-luxury p-8 rounded-3xl h-64 relative overflow-hidden group border border-white/5 hover:border-salvore-caramel/30 transition-all md:mt-12">
              <Shield className="w-10 h-10 text-salvore-caramel mb-4" />
              <h3 className="font-serif text-xl font-bold text-white">Private Alcovian Framing</h3>
              <p className="text-xs text-white/40 mt-2">Seating decks arranged with high acoustic boundaries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PANEL 3: MENU GRID */}
      <section id="menu" className="relative w-full h-auto md:h-screen md:snap-start flex items-center justify-center py-20 md:py-0 px-6">
        <div className="max-w-6xl w-full space-y-10">
          <div className="text-center">
            <span className="text-salvore-caramel text-xs tracking-widest uppercase font-mono block">// MICRO-LOT CURATIONS</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white">The Culinary Collection</h2>
          </div>
          <div className="flex justify-center gap-2 max-w-sm mx-auto glass-panel-luxury p-1 rounded-full border border-white/10">
            {categories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)} className={`text-[10px] tracking-widest uppercase px-6 py-2.5 rounded-full transition-all duration-500 flex-1 ${activeCategory === cat ? "bg-gradient-to-r from-salvore-caramel to-salvore-gold text-black shadow-lg" : "text-white/60 hover:text-white"}`}>{cat}</button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatePresence mode="wait">
              <motion.div key={activeCategory} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="grid grid-cols-1 md:grid-cols-2 gap-6 col-span-2">
                {menuData[activeCategory].map((item) => (
                  <div key={item.name} className="glass-panel-luxury rounded-2xl border border-white/5 overflow-hidden flex flex-col md:flex-row h-auto md:h-44 group hover:border-salvore-caramel/40 transition-all">
                    <div className="w-full md:w-1/3 h-40 md:h-full relative overflow-hidden bg-black">
                      <img src={item.image} className="w-full h-full object-cover grayscale md:group-hover:grayscale-0 transition-all duration-700" alt={item.name} />
                    </div>
                    <div className="p-6 flex flex-col justify-between flex-1 space-y-2">
                      <div className="flex justify-between items-start">
                        <h4 className="font-serif text-lg font-bold text-white">{item.name}</h4>
                        <span className="text-salvore-gold font-mono text-sm">{item.price}</span>
                      </div>
                      <p className="text-white/40 text-[11px] leading-relaxed line-clamp-2">{item.desc}</p>
                      <span className="text-[9px] font-mono tracking-widest text-salvore-caramel uppercase border border-salvore-caramel/20 px-2 py-0.5 rounded-full w-fit">{item.tag}</span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* PANEL 4: CONTACT & FAQ */}
      <section id="contact" className="relative w-full h-auto md:h-screen md:snap-start flex items-center justify-center py-20 md:py-0 px-6">
        <div className="max-w-4xl w-full space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <span className="text-salvore-caramel text-xs tracking-widest uppercase font-mono">07 // ASSISTANCE</span>
              <h2 className="font-serif text-4xl font-bold text-white">Sought <br /><span className="text-gradient-gold-premium italic font-light">Answers.</span></h2>
              <div className="space-y-3">
                {faqs.map((item, idx) => (
                  <div key={idx} className="glass-panel-luxury rounded-xl border border-white/5">
                    <button onClick={() => setOpenFaqIdx(openFaqIdx === idx ? null : idx)} className="w-full text-left p-4 flex justify-between items-center text-xs font-bold hover:text-salvore-gold transition-colors">
                      {item.q} <ChevronRight className={`w-4 h-4 transition-transform ${openFaqIdx === idx ? "rotate-90" : ""}`} />
                    </button>
                    {openFaqIdx === idx && <div className="p-4 border-t border-white/5 text-[11px] text-white/50">{item.a}</div>}
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-8">
              <div className="space-y-2">
                <span className="text-salvore-caramel text-xs tracking-widest uppercase font-mono">08 // COORDINATES</span>
                <h2 className="font-serif text-4xl font-bold text-white italic">Visit Us.</h2>
              </div>
              <div className="grid gap-4">
                <div className="glass-panel-luxury p-6 rounded-2xl border border-white/5 flex gap-4">
                  <MapPin className="w-5 h-5 text-salvore-caramel" />
                  <div><h4 className="text-xs font-bold">Location</h4><p className="text-xs text-white/50 mt-1">102 Luxury Arcade, Lavelle Road, Bangalore</p></div>
                </div>
                <div className="glass-panel-luxury p-6 rounded-2xl border border-white/5 flex gap-4">
                  <Clock className="w-5 h-5 text-salvore-caramel" />
                  <div><h4 className="text-xs font-bold">Hours</h4><p className="text-xs text-white/50 mt-1">Mon—Sun // 07:00 AM - 11:00 PM</p></div>
                </div>
              </div>
              <Link href="/reservations" className="block text-center py-5 rounded-full bg-gradient-to-r from-salvore-caramel to-salvore-gold text-black text-[10px] uppercase font-bold tracking-[0.3em] shadow-2xl">Access Booking Portal</Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}