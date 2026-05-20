"use client";

import { useState, useRef } from "react";
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

  // ANIMATION MATH
  const xTextLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const cupRotation = useTransform(scrollYProgress, [0.12, 0.28], [0, -90]);
  const liquidY = useTransform(scrollYProgress, [0.22, 0.42], [-20, 450]);
  const liquidOpacity = useTransform(scrollYProgress, [0.22, 0.28, 0.42], [0, 1, 0]);
  const textBlur = useTransform(scrollYProgress, [0.32, 0.48], ["blur(15px)", "blur(0px)"]);
  const textOpacity = useTransform(scrollYProgress, [0.32, 0.48], [0.2, 1]);

  const categories = ["Coffee", "Desserts", "Brunch"];
  const menuData = {
    Coffee: [
      { name: "24K Gold Espresso", price: "₹450", desc: "Signature dark roast with edible gold.", image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=600" },
      { name: "Smoked Caramel", price: "₹520", desc: "Cold-smoked with house caramel.", image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=600" },
      { name: "Saffron Latte", price: "₹410", desc: "Kashmiri saffron infused.", image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?q=80&w=600" }
    ],
    Desserts: [
      { name: "Saffron Opera", price: "₹720", desc: "Layered saffron chocolate ganache.", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=600" },
      { name: "Vanilla Tart", price: "₹650", desc: "Premium bourbon vanilla bean.", image: "https://images.unsplash.com/photo-1519869325930-281384150729?q=80&w=600" }
    ],
    Brunch: [
      { name: "Truffle Benedict", price: "₹780", desc: "Poached eggs, black truffle hollandaise.", image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=600" },
      { name: "Avocado Toast", price: "₹580", desc: "Flaky croissant base with mousse.", image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=600" }
    ]
  };

  return (
    <main ref={containerRef} className="relative w-full h-screen overflow-y-auto overflow-x-hidden no-scrollbar bg-[#0a0807] text-[#EAD8C0]">
      
      {/* 1. HERO */}
      <section id="home" className="relative w-full h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=2000" className="w-full h-full object-cover grayscale brightness-50" alt="Hero" />
        </div>
        <div className="relative z-10 text-center space-y-6">
          <h1 className="font-serif text-6xl md:text-[10rem] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#D4A373] to-[#A17C54] font-bold">SALVORE</h1>
          <p className="text-[#EAD8C0]/60 italic tracking-wide">A sanctuary of fluid mastery.</p>
        </div>
      </section>

      {/* 2. THE POURING TRANSITION */}
      <section id="pour" className="relative h-[180vh] bg-[#1A0F0A]">
        <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
            <div className="relative flex flex-col items-center">
                <motion.div style={{ rotate: cupRotation }} className="z-20 text-[120px] md:text-[180px] drop-shadow-2xl">
                    ☕ {/* Emoji placeholder: 100% load guarantee */}
                </motion.div>
                <motion.div style={{ y: liquidY, opacity: liquidOpacity }} className="absolute top-32 z-10 w-3 h-64 bg-gradient-to-b from-[#4E342E] to-transparent rounded-full blur-[2px]" />
            </div>
            <motion.div style={{ filter: textBlur, opacity: textOpacity }} className="mt-12 text-center px-6">
                <h2 className="font-serif text-4xl md:text-7xl text-[#D4A373] font-bold">For Kind People, <br /> Brews & Planet</h2>
            </motion.div>
        </div>
      </section>

      {/* 3. ABOUT US (BROWN BLOCK) */}
      <section id="about" className="relative bg-[#2C1810] py-24 px-6 overflow-hidden">
         <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] fill-[#1A0F0A]"><path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path></svg>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10 py-10">
            <div className="space-y-6">
                <h3 className="font-serif text-[#D4A373] text-5xl italic">About us.</h3>
                <p className="text-[#EAD8C0]/70 text-lg">Connecting communities through curated micro-lots.</p>
            </div>
            <div className="bg-[#1A0F0A]/50 p-8 rounded-[40px] border border-[#D4A373]/10">
                <Compass className="w-10 h-10 text-[#D4A373] mb-4" />
                <h4 className="text-white font-serif text-2xl">Spatial Mastery</h4>
                <p className="text-[#EAD8C0]/40 text-sm mt-2">Engineered environments to heighten sensory response.</p>
            </div>
        </div>
      </section>

      {/* 4. MENU */}
      <section id="menu" className="bg-[#1A0F0A] py-24 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <h2 className="font-serif text-4xl text-center text-[#D4A373] font-bold">The Reserve Selection</h2>
          <div className="flex justify-center gap-4 overflow-x-auto pb-4">
            {categories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)} className={`text-[10px] tracking-widest uppercase px-8 py-3 rounded-full border transition-all ${activeCategory === cat ? "bg-[#D4A373] text-black border-[#D4A373]" : "text-[#D4A373]/40 border-[#D4A373]/10"}`}>{cat}</button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              <motion.div key={activeCategory} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 col-span-full">
                {menuData[activeCategory as keyof typeof menuData].map((item) => (
                  <div key={item.name} className="bg-[#2C1810]/20 rounded-3xl overflow-hidden border border-white/5">
                    <img src={item.image} className="h-48 w-full object-cover grayscale opacity-50" alt={item.name} />
                    <div className="p-6"><h4 className="text-white font-bold">{item.name}</h4><p className="text-[#D4A373] text-sm">{item.price}</p></div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 5. GALLERY */}
      <section id="gallery" className="bg-[#0a0807] py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1,2,3,4].map(i => (
                <div key={i} className="h-64 bg-[#2C1810]/40 rounded-2xl border border-white/5"></div>
            ))}
        </div>
      </section>

      {/* 6. FAQ & CONTACT */}
      <footer id="contact" className="bg-[#0a0807] py-24 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16">
            <div className="space-y-6">
                <h2 className="font-serif text-5xl font-bold text-white tracking-tighter">Visit.</h2>
                <p className="text-white/40">Lavelle Road, Bangalore // 07:00 AM - 11:00 PM</p>
            </div>
            <Link href="/reservations" className="py-5 rounded-full bg-gradient-to-r from-[#D4A373] to-[#A17C54] text-black text-center text-[10px] uppercase font-bold tracking-[0.3em]">Book a Table</Link>
        </div>
      </footer>
    </main>
  );
}