
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
      <section id="about" className="relative w-full h-auto md:h-screen