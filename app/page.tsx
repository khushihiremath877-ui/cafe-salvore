
"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Compass, Shield, Clock, MapPin, ChevronRight, Calendar, BookOpen, Coffee, Wind, Zap } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("Coffee");
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // --- ANIMATION ENGINE ---
  const cupRotation = useTransform(scrollYProgress, [0.08, 0.18], [0, -90]);
  const liquidY = useTransform(scrollYProgress, [0.15, 0.25], [-20, 500]);
  const liquidOpacity = useTransform(scrollYProgress, [0.15, 0.18, 0.25], [0, 1, 0]);
  const textBlur = useTransform(scrollYProgress, [0.18, 0.28], ["blur(15px)", "blur(0px)"]);
  const textOpacity = useTransform(scrollYProgress, [0.18, 0.28], [0.2, 1]);

  const categories = ["Coffee", "Desserts", "Brunch"];
  const menuData = {
    Coffee: [
      { name: "24K Gold Espresso", price: "₹450", desc: "Pure edible gold leafing.", image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=600" },
      { name: "Saffron Latte", price: "₹410", desc: "Kashmiri saffron infused.", image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?q=80&w=600" }
    ],
    Desserts: [{ name: "Saffron Opera", price: "₹720", desc: "Layered ganache.", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=600" }],
    Brunch: [{ name: "Truffle Benedict", price: "₹780", desc: "Black truffle hollandaise.", image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=600" }]
  };

  return (
    <main ref={containerRef} className="relative w-full h-screen overflow-y-auto overflow-x-hidden no-scrollbar bg-[#0a0807] text-[#EAD8C0] selection:bg-[#D4A373] selection:text-black">
      
      {/* 1. HERO */}
      <section className="relative w-full h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 grayscale brightness-50">
          <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2000" className="w-full h-full object-cover" alt="Hero" />
        </div>
        <div className="relative z-10 text-center space-y-4">
          <h1 className="font-serif text-7xl md:text-[11rem] tracking-tighter text-white font-bold leading-none">SALVORE</h1>
          <p className="text-[#D4A373] text-xs tracking-[0.6em] uppercase">Private Sanctuary & Roastery</p>
        </div>
      </section>

      {/* 2. THE POURING ENGINE (FIXED IMAGE) */}
      <section id="pour" className="relative h-[180vh] bg-[#120a07]">
        <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
            <div className="relative flex flex-col items-center">
                <motion.div style={{ rotate: cupRotation }} className="z-20">
                    <img 
                        src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3AtNDY0LWppLTU4MDYucG5n.png" 
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

      {/* 3. ABOUT (CURVY BREAK) */}
      <section className="relative bg-[#201410] py-32 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
                <h3 className="font-serif text-5xl text-white italic">The Vision.</h3>
                <p className="text-white/60 text-lg leading-relaxed">Where structural acoustic calibration meets the finest micro-lots in the world.</p>
            </div>
            <div className="border-l border-[#D4A373]/20 pl-8 space-y-4">
                <Shield className="w-8 h-8 text-[#D4A373]" />
                <h4 className="text-white text-xl font-bold font-serif">Acoustic Isolation</h4>
                <p className="text-white/40 text-sm">Every seat is engineered to eliminate environmental noise.</p>
            </div>
        </div>
      </section>

      {/* 4. THE MENU */}
      <section className="bg-[#0a0807] py-32 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center">
            <h2 className="font-serif text-5xl text-[#D4A373] font-bold uppercase tracking-widest">Reserve Selection</h2>
          </div>
          <div className="flex justify-center gap-6 pb-8 border-b border-white/5">
            {categories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)} className={`text-[10px] tracking-widest uppercase transition-all ${activeCategory === cat ? "text-[#D4A373]" : "text-white/30"}`}>{cat}</button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <AnimatePresence mode="wait">
              <motion.div key={activeCategory} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid md:grid-cols-2 gap-12 col-span-2">
                {menuData[activeCategory as keyof typeof menuData].map((item, i) => (
                  <div key={i} className="flex gap-6 items-center group">
                    <div className="w-32 h-32 rounded-2xl overflow-hidden bg-white/5 shrink-0">
                        <img src={item.image} className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all" alt={item.name} />
                    </div>
                    <div className="flex-1 border-b border-white/5 pb-4">
                        <div className="flex justify-between font-serif text-xl text-white"><span>{item.name}</span><span className="text-[#D4A373]">{item.price}</span></div>
                        <p className="text-[10px] uppercase tracking-widest text-white/30 mt-2">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 5. SIGNATURE ROASTS */}
      <section className="py-32 px-6 bg-[#120a07] text-center">
         <Zap className="w-10 h-10 text-[#D4A373] mx-auto mb-6" />
         <h2 className="font-serif text-5xl md:text-7xl text-white mb-6">Signature Pour.</h2>
         <p className="text-white/40 max-w-xl mx-auto text-sm leading-loose uppercase tracking-[0.2em]">Our beans are allocated from private estates across Ethiopia and Colombia.</p>
      </section>

      {/* 6. GALLERY GRID */}
      <section className="bg-[#0a0807] py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {["https://images.unsplash.com/photo-1554118811-1e0d58224f24", "https://images.unsplash.com/photo-1498804103079-a6351b050096", "https://images.unsplash.com/photo-1507133750040-4a8f57021571", "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"].map((url, i) => (
                <div key={i} className="h-80 rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                    <img src={`${url}?q=80&w=600`} className="w-full h-full object-cover" alt="Gallery" />
                </div>
            ))}
        </div>
      </section>

      {/* 7. EVENTS */}
      <section className="bg-[#201410] py-32 px-6">
        <div className="max-w-4xl mx-auto space-y-12 text-center">
            <h2 className="font-serif text-5xl text-[#D4A373]">Gatherings.</h2>
            <div className="glass-panel-luxury p-10 rounded-[40px] border border-white/5 space-y-4">
                <Calendar className="w-8 h-8 text-[#D4A373] mx-auto" />
                <h3 className="text-white text-2xl font-bold">Cupping Masterclass</h3>
                <p className="text-white/40 text-sm italic">June 04, 2026 // 10:00 AM</p>
                <button className="text-[10px] tracking-widest uppercase border-b border-[#D4A373] pt-4">Request Invitation</button>
            </div>
        </div>
      </section>

      {/* 8. JOURNAL / BLOG */}
      <section className="bg-[#0a0807] py-32 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
            <div className="space-y-4">
                <span className="text-[#D4A373] text-[10px] uppercase tracking-widest">// The Journal</span>
                <h3 className="font-serif text-3xl text-white">The Chemistry of Extraction.</h3>
                <p className="text-white/40 text-sm">A deep dive into water particle composition and mineral counts.</p>
            </div>
            <div className="h-64 rounded-3xl overflow-hidden bg-white/5"><img src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=600" className="w-full h-full object-cover opacity-50" /></div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="bg-[#120a07] py-32 px-6">
        <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="font-serif text-4xl text-center text-white italic">Inquiries.</h2>
            <div className="space-y-4">
                {[
                    {q: "Is there a dress code?", a: "We recommend smart casual or minimalist styling."},
                    {q: "How to book a private alcove?", a: "Bookings open 14 days in advance via the portal."}
                ].map((faq, i) => (
                    <div key={i} className="p-6 border border-white/5 rounded-2xl">
                        <h4 className="text-[#D4A373] text-sm font-bold">{faq.q}</h4>
                        <p className="text-white/40 text-xs mt-2">{faq.a}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* 10. CONTACT / FOOTER */}
      <footer className="bg-[#0a0807] py-40 px-6 border-t border-white/5 text-center">
        <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="font-serif text-6xl text-white font-bold tracking-tighter italic">Visit Salvore.</h2>
            <div className="flex flex-col md:flex-row justify-center gap-12">
                <div className="space-y-2"><MapPin className="w-5 h-5 text-[#D4A373] mx-auto"/><p className="text-xs text-white/40">Lavelle Road, Bangalore</p></div>
                <div className="space-y-2"><Clock className="w-5 h-5 text-[#D4A373] mx-auto"/><p className="text-xs text-white/40">07:00 AM — 11:00 PM</p></div>
            </div>
            <Link href="/book" className="inline-block px-12 py-5 rounded-full bg-gradient-to-r from-[#D4A373] to-[#A17C54] text-black font-bold uppercase text-[10px] tracking-[0.4em]">Book Invitation</Link>
        </div>
      </footer>

    </main>
  );
}