
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

  const xTextLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const xTextRight = useTransform(scrollYProgress, [0, 1], ["-30%", "10%"]);
  const scaleHeroBg = useTransform(scrollYProgress, [0, 0.2], [1, 1.12]);

  const categories = ["Coffee", "Desserts", "Brunch"];
  
  const menuData: Record<string, Array<{ name: string; price: string; desc: string; tag: string; image: string }>> = {
    Coffee: [
      { 
        name: "24K Gold Leaf Espresso", 
        price: "₹450", 
        desc: "Signature dark roast espresso extracted with mineralized water and garnished with pure edible 24k gold leafing.", 
        tag: "Rare Blend",
        image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=600"
      },
      { 
        name: "Smoked Caramel Macchiato", 
        price: "₹520", 
        desc: "Cold-smoked artisanal espresso layered over house-made salted caramel and velvet microfoam.", 
        tag: "Tableside Smoke",
        image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=600"
      }
    ],
    Desserts: [
      { 
        name: "Madagascar Vanilla Tart", 
        price: "₹650", 
        desc: "Crisp almond pastry shell filled with premium organic Madagascar bourbon vanilla bean custard.", 
        tag: "Signature Sweet",
        image: "https://images.unsplash.com/photo-1519869325930-281384150729?q=80&w=600"
      },
      { 
        name: "Saffron Truffle Opera Cake", 
        price: "₹720", 
        desc: "Layered sponge architecture soaked in single-origin espresso runtime syrup and layered with delicate saffron chocolate ganache.", 
        tag: "Limited Run",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=600"
      }
    ],
    Brunch: [
      { 
        name: "Truffle Mushroom Benedict", 
        price: "₹780", 
        desc: "Poached free-range organic eggs, wild hand-picked forest mushrooms, shaved black truffle hollandaise on sourdough.", 
        tag: "Chef Special",
        image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=600"
      },
      { 
        name: "Avocado Croissant Toast", 
        price: "₹580", 
        desc: "Flaky freshly-baked house croissant base layered with whipped Hass avocado mousse and micro-herbs.", 
        tag: "Fresh Crop",
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=600"
      }
    ]
  };

  const communityEvents = [
    { title: "Acoustic Jazz Evenings", date: "Every Friday", time: "08:00 PM", desc: "Ambient classical jazz acts perform live alongside an extended reserve pour menu." },
    { title: "Cupping Masterclass", date: "June 04, 2026", time: "10:00 AM", desc: "A sensory walkthrough evaluating breaking crusts across global multi-lots." }
  ];

  const articles = [
    { title: "The Chemistry of Extracting Honey Processed Beans", date: "May 14, 2026", excerpt: "Deep dive into water particle composition, temperature curves, and mineral counts necessary for delicate notes." },
    { title: "Acoustics & Architecture: Designing Silent Escapes", date: "April 29, 2026", excerpt: "How structural glassmorphism and geometric acoustic layouts enhance sensory taste responses." }
  ];

  const faqs = [
    { q: "Do you accommodate walk-ins?", a: "To ensure full structural acoustic clarity and custom tableside pours, we highly prioritize booked invitations. Walk-ins are handled strictly on space liquidity." },
    { q: "What is your bean allocation timeline?", a: "We rotate our single-estate micro-lots every 14 days following rigorous cupping adjustments, guaranteeing complex, seasonal shifts." },
    { q: "Is there a specific dress protocol?", a: "We invite our guests to lean into smart-casual or fine minimalist styling to respect the artistic environment of our acoustic lounge space." }
  ];

  return (
    <main ref={containerRef} className="min-h-screen xl:h-screen w-full overflow-y-auto xl:overflow-y-scroll xl:snap-y xl:snap-mandatory scroll-smooth no-scrollbar text-salvore-cream bg-[#0a0807] relative z-10 pb-12 xl:pb-0">
      
      {/* IMMERSIVE FIXED BACKGROUND EFFECTS DECK */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[90vw] sm:w-[70vw] h-[90vw] sm:h-[70vw] bg-nebula-amber filter blur-[100px] sm:blur-[150px] rounded-full animate-nebula-1" />
        <div className="absolute bottom-[10%] left-[-10%] w-[80vw] sm:w-[60vw] h-[80vw] sm:h-[60vw] bg-nebula-espresso filter blur-[90px] sm:blur-[130px] rounded-full animate-nebula-2" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.003)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.003)_1px,transparent_1px)] bg-[size:50px_50px] sm:bg-[size:100px_100px]" />
      </div>

      {/* AMBIENT MOUSE SPOTLIGHT IRIS */}
      <div 
        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none opacity-25 filter blur-[90px] z-30 transition-transform duration-200 ease-out hidden xl:block"
        style={{
          background: "radial-gradient(circle, rgba(243,215,154,0.18) 0%, transparent 70%)",
          left: mousePos.x - 250,
          top: mousePos.y - 250,
        }}
      />

      {/* GLOBAL PARALLAX KINETIC TYPOGRAPHY LAYER */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none opacity-[0.02] sm:opacity-[0.03] font-serif font-black uppercase text-white">
        <motion.div style={{ x: xTextLeft }} className="text-[24vw] xl:text-[18vw] whitespace-nowrap leading-none absolute top-[15vh]">SANCTUARY</motion.div>
        <motion.div style={{ x: xTextRight }} className="text-[24vw] xl:text-[18vw] whitespace-nowrap leading-none absolute top-[50vh]">RESERVE</motion.div>
        <motion.div style={{ x: xTextLeft }} className="text-[24vw] xl:text-[18vw] whitespace-nowrap leading-none absolute top-[80vh]">EXPERIENCE</motion.div>
      </div>

      {/* PANEL 1: HERO */}
      <section id="home" className="min-h-[90vh] xl:h-screen w-full xl:snap-start flex items-center justify-center relative px-4 sm:px-6 overflow-hidden pt-16 xl:pt-0">
        <motion.div style={{ scale: scaleHeroBg }} className="absolute inset-0 z-0 opacity-[0.15] sm:opacity-[0.2]">
          <img 
            src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=2000" 
            alt="Salvore Atmosphere" 
            className="w-full h-full object-cover grayscale brightness-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-[#090706]" />
        </motion.div>
        
        <div className="relative z-10 flex flex-col items-center max-w-5xl space-y-4 sm:space-y-6 text-center px-2">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 glass-panel-luxury px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/5 bg-black/40 backdrop-blur-md max-w-full">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span className="text-[8px] sm:text-[10px] font-mono tracking-widest uppercase text-white/80 line-clamp-1">ALLOCATION ACTIVE // 8 SEATS REMAINING</span>
          </motion.div>
          <h1 className="font-serif text-5xl sm:text-7xl md:text-[11rem] tracking-tighter text-gradient-gold-premium leading-none font-bold drop-shadow-2xl select-none">
            SALVORE
          </h1>
          <p className="text-xs sm:text-base md:text-xl text-salvore-cream/60 font-light max-w-2xl tracking-wide leading-relaxed px-4">
            A private sanctuary where structural acoustic calibration meets single-estate fluid mastery. Crafted for the uncompromising.
          </p>
          <div className="pt-2">
            <a href="#about" className="group relative glass-panel-luxury text-salvore-cream px-8 sm:px-12 py-3.5 sm:py-5 rounded-full inline-flex items-center gap-3 sm:gap-4 text-[10px] sm:text-xs tracking-[0.3em] uppercase hover:bg-salvore-caramel hover:text-black hover:border-transparent transition-all duration-700 font-medium cursor-pointer">
              Explore The Estate
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-2 transition-transform duration-500" />
            </a>
          </div>
        </div>
      </section>

      {/* PANEL 2: ABOUT */}
      <section id="about" className="min-h-screen xl:h-screen w-full xl:snap-start flex items-center justify-center relative px-4 sm:px-6 md:px-20 overflow-hidden py-12 xl:py-0">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-12 items-center relative z-10">
          <div className="lg:col-span-5 space-y-3 sm:space-y-6">
            <span className="text-salvore-caramel text-[10px] sm:text-xs tracking-widest uppercase font-mono block">// CORE SYSTEM SPECIFICATIONS</span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold leading-tight text-white">
              Acoustic <br /><span className="text-gradient-gold-premium italic font-light">Isolation.</span>
            </h2>
            <p className="text-salvore-cream/60 text-xs sm:text-sm leading-relaxed">
              We developed an internal geometry using micro-cement composites to eliminate environmental reflection—allowing delicate flavor matrices to bloom pure.
            </p>
            
            <div className="grid grid-cols-3 gap-2 sm:gap-4 border-t border-white/5 pt-4 sm:pt-6 font-mono">
              <div>
                <div className="text-lg sm:text-2xl font-bold text-salvore-gold">-18dB</div>
                <div className="text-[8px] sm:text-[10px] text-white/40 tracking-wider mt-1">Decibels</div>
              </div>
              <div>
                <div className="text-lg sm:text-2xl font-bold text-salvore-gold">100%</div>
                <div className="text-[8px] sm:text-[10px] text-white/40 tracking-wider mt-1">Micro-Lot</div>
              </div>
              <div>
                <div className="text-lg sm:text-2xl font-bold text-salvore-gold">0.02s</div>
                <div className="text-[8px] sm:text-[10px] text-white/40 tracking-wider mt-1">Variance</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full">
            <motion.div whileHover={{ scale: 1.02 }} className="glass-panel-luxury p-5 sm:p-8 rounded-3xl space-y-3 sm:space-y-6 group border border-white/5 transition-all duration-500 hover:border-salvore-caramel/30 cursor-pointer relative overflow-hidden h-[150px] sm:h-[220px]">
              <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <img src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=600" alt="Extraction Lab" className="w-full h-full object-cover" />
              </div>
              <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-salvore-caramel group-hover:text-black transition-all duration-500 relative z-10">
                <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-salvore-caramel group-hover:text-black" />
              </div>
              <div className="space-y-0.5 sm:space-y-2 relative z-10">
                <h3 className="font-serif text-base sm:text-xl font-bold text-white">Controlled Extraction</h3>
                <p className="text-[10px] sm:text-xs text-white/40 leading-relaxed">Atmospheric bars maintained to preserve moisture curves perfectly.</p>
              </div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="glass-panel-luxury p-5 sm:p-8 rounded-3xl space-y-3 sm:space-y-6 group border border-white/5 transition-all duration-500 hover:border-salvore-caramel/30 cursor-pointer sm:mt-0 xl:mt-10 relative overflow-hidden h-[150px] sm:h-[220px]">
              <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=600" alt="Lounge Space" className="w-full h-full object-cover" />
              </div>
              <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-salvore-caramel group-hover:text-black transition-all duration-500 relative z-10">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-salvore-caramel group-hover:text-black" />
              </div>
              <div className="space-y-0.5 sm:space-y-2 relative z-10">
                <h3 className="font-serif text-base sm:text-xl font-bold text-white">Private Alcovian Framing</h3>
                <p className="text-[10px] sm:text-xs text-white/40 leading-relaxed">Seating decks arranged with high acoustic boundaries safeguarding privacy.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PANEL 3: MENU GRID - FIXED INTERIOR SPACING OVERRIDES */}
      <section id="menu" className="min-h-screen xl:h-screen w-full xl:snap-start flex items-center justify-center relative px-4 sm:px-6 md:px-12 overflow-hidden py-12 xl:py-0">
        <div className="max-w-6xl w-full flex flex-col justify-center h-full relative z-10">
          <div className="text-center space-y-0.5 sm:space-y-2 mb-4">
            <span className="text-salvore-caramel text-[10px] sm:text-xs tracking-widest uppercase font-mono block">// MICRO-LOT CURATIONS</span>
            <h2 className="font-serif text-2xl sm:text-5xl font-bold text-white">The Culinary Collection</h2>
          </div>
          
          <div className="flex justify-center gap-1 max-w-xs sm:max-w-sm mx-auto glass-panel-luxury p-1 rounded-full border border-white/5 mb-6">
            {categories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)} className={`text-[9px] sm:text-[11px] tracking-widest uppercase px-3 sm:px-6 py-1.5 sm:py-2.5 rounded-full cursor-pointer font-medium transition-all duration-500 flex-1 text-center ${activeCategory === cat ? "bg-gradient-to-r from-salvore-caramel to-salvore-gold text-black shadow-lg" : "text-white/60 hover:text-white"}`}>{cat}</button>
            ))}
          </div>

          <div className="w-full">
            <AnimatePresence mode="wait">
              <motion.div key={activeCategory} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-6">
                {menuData[activeCategory].map((item) => (
                  <motion.div 
                    key={item.name} 
                    whileHover={{ scale: 1.01 }} 
                    className="glass-panel-luxury rounded-2xl border border-white/5 transition-all duration-500 overflow-hidden flex flex-col sm:flex-row h-auto sm:h-[160px] md:h-[180px] group cursor-pointer hover:border-salvore-caramel/40"
                  >
                    <div className="w-full sm:w-[35%] h-[140px] sm:h-full relative overflow-hidden bg-[#141211] shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover grayscale-0 md:grayscale md:group-hover:grayscale-0 md:group-hover:scale-105 transition-all duration-700" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black/20" />
                    </div>

                    <div className="p-4 flex flex-col justify-between flex-1 space-y-2 bg-white/[0.005]">
                      <div className="space-y-1">
                        <div className="flex justify-between items-baseline gap-2">
                          <h4 className="font-serif text-base sm:text-lg md:text-xl font-bold text-white group-hover:text-salvore-gold transition-colors">{item.name}</h4>
                          <span className="text-gradient-gold-premium font-mono font-bold text-xs sm:text-sm shrink-0">{item.price}</span>
                        </div>
                        <p className="text-white/40 text-[10px] sm:text-[11px] leading-relaxed line-clamp-2 sm:line-clamp-3">{item.desc}</p>
                      </div>
                      <div>
                        <span className="text-[8px] font-mono tracking-widest text-salvore-caramel uppercase border border-salvore-caramel/30 px-2 py-0.5 rounded-full inline-block">{item.tag}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* PANEL 4: SIGNATURE LIQUID ART WORKSHOP */}
      <section id="signature" className="min-h-screen xl:h-screen w-full xl:snap-start flex items-center justify-center relative px-4 sm:px-6 md:px-12 overflow-hidden py-12 xl:py-0">
        <div className="max-w-6xl w-full space-y-4 sm:space-y-12 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/5 pb-2 sm:pb-6">
            <div className="space-y-0.5 sm:space-y-2">
              <span className="text-salvore-caramel text-[10px] sm:text-xs tracking-widest uppercase font-mono block">03 // The Vault Collection</span>
              <h2 className="font-serif text-2xl sm:text-5xl md:text-6xl font-bold text-white">Liquid Artistry</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-8">
            {menuData.Coffee.map((drink, i) => (
              <motion.div key={i} whileHover={{ y: -4 }} className="glass-panel-luxury p-5 sm:p-8 rounded-3xl flex flex-col justify-between h-[140px] sm:h-[220px] relative overflow-hidden group hover:border-salvore-caramel/50 transition-all duration-500 cursor-pointer">
                <div className="space-y-1.5 sm:space-y-3">
                  <div className="flex justify-between items-baseline">
                    <span className="font-mono text-salvore-caramel text-[9px] sm:text-[10px] tracking-widest font-semibold">0{i+1} // ESTATE RESERVE</span>
                    <span className="text-gradient-gold-premium font-mono text-xs sm:text-lg font-bold">{drink.price}</span>
                  </div>
                  <h3 className="font-serif text-base sm:text-2xl font-bold text-white group-hover:text-salvore-gold transition-colors">{drink.name}</h3>
                  <p className="text-white/50 text-[10px] sm:text-xs leading-relaxed line-clamp-2 sm:line-clamp-3">{drink.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PANEL 5: VISUAL ECHOES GALLERY */}
      <section id="gallery" className="min-h-screen xl:h-screen w-full xl:snap-start flex items-center justify-center relative px-4 sm:px-6 md:px-12 overflow-hidden py-12 xl:py-0">
        <div className="max-w-6xl w-full space-y-4 sm:space-y-8 relative z-10">
          <div className="text-center space-y-0.5">
            <span className="text-salvore-caramel text-[10px] sm:text-xs tracking-widest uppercase font-mono block">04 // Spatial Aesthetic</span>
            <h2 className="font-serif text-2xl sm:text-5xl font-bold text-white">Visual Echoes</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4">
            {[
              "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=500",
              "https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=500",
              "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=500",
              "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=500"
            ].map((src, idx) => (
              <motion.div key={idx} whileHover={{ scale: 1.02 }} className="glass-panel-luxury h-[140px] sm:h-[260px] rounded-2xl overflow-hidden relative group border border-white/5 cursor-pointer">
                <img src={src} alt="Salvore Spatial Asset" className="w-full h-full object-cover grayscale-0 md:grayscale md:group-hover:grayscale-0 md:group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent xl:opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-2 sm:p-4">
                  <span className="text-[8px] sm:text-[10px] font-mono uppercase tracking-widest text-salvore-gold">Framework 0{idx+1}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PANEL 6: CURATED GATHERINGS */}
      <section id="events" className="min-h-screen xl:h-screen w-full xl:snap-start flex items-center justify-center relative px-4 sm:px-6 md:px-12 overflow-hidden py-12 xl:py-0">
        <div className="max-w-5xl w-full space-y-4 sm:space-y-8 relative z-10">
          <div className="text-center space-y-0.5">
            <span className="text-salvore-caramel text-[10px] sm:text-xs tracking-widest uppercase font-mono block">// INTENTIONAL ASSEMBLIES</span>
            <h2 className="font-serif text-2xl sm:text-5xl font-bold text-white">Curated Gatherings</h2>
          </div>
          <div className="space-y-3 sm:space-y-4">
            {communityEvents.map((ev, idx) => (
              <div key={idx} className="glass-panel-luxury p-4 sm:p-6 md:p-8 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-6 group border border-white/5 hover:border-salvore-caramel/30 transition-colors">
                <div className="space-y-1 sm:space-y-2">
                  <div className="flex items-center gap-2 text-[9px] sm:text-[10px] font-mono text-salvore-caramel">
                    <Calendar className="w-3 h-3 shrink-0" />
                    <span>{ev.date} — {ev.time}</span>
                  </div>
                  <h3 className="font-serif text-base sm:text-xl font-bold text-white group-hover:text-salvore-gold transition-colors">{ev.title}</h3>
                  <p className="text-white/50 text-[11px] sm:text-xs max-w-xl leading-relaxed">{ev.desc}</p>
                </div>
                <button className="w-full sm:w-auto text-center px-4 sm:px-6 py-2 sm:py-3 border border-white/10 rounded-full text-[9px] sm:text-[11px] font-mono uppercase tracking-wider text-white hover:bg-salvore-cream hover:text-black transition-all duration-300 shrink-0 cursor-pointer">Reserve Pass</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PANEL 7: THE LEDGER */}
      <section id="blog" className="min-h-screen xl:h-screen w-full xl:snap-start flex items-center justify-center relative px-4 sm:px-6 md:px-12 overflow-hidden py-12 xl:py-0">
        <div className="max-w-4xl w-full space-y-4 sm:space-y-10 relative z-10">
          <div className="text-center space-y-0.5">
            <span className="text-salvore-caramel text-[10px] sm:text-xs tracking-widest uppercase font-mono block">06 // Academic Output</span>
            <h2 className="font-serif text-2xl sm:text-5xl font-bold text-white">The Salvore Ledger</h2>
          </div>
          <div className="space-y-4 sm:space-y-8">
            {articles.map((art, idx) => (
              <div key={idx} className="border-b border-white/5 pb-3 sm:pb-6 space-y-1.5 group cursor-pointer">
                <div className="flex items-center gap-2 font-mono text-[9px] sm:text-[10px] text-salvore-caramel">
                  <BookOpen className="w-3 h-3 shrink-0" />
                  <span>{art.date}</span>
                </div>
                <h3 className="font-serif text-base sm:text-xl font-bold text-white group-hover:text-salvore-gold transition-colors duration-300">{art.title}</h3>
                <p className="text-white/50 text-[11px] sm:text-xs max-w-2xl leading-relaxed line-clamp-2 sm:line-clamp-none">{art.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PANEL 8: FAQ ACCORDION */}
      <section id="faq" className="min-h-screen xl:h-screen w-full xl:snap-start flex items-center justify-center relative px-4 sm:px-6 md:px-12 overflow-hidden py-12 xl:py-0">
        <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-12 items-start relative z-10">
          <div className="lg:col-span-5 space-y-1 sm:space-y-4">
            <span className="text-salvore-caramel text-[10px] sm:text-xs tracking-widest uppercase font-mono block">07 // ASSISTANCE PROTOCOLS</span>
            <h2 className="font-serif text-2xl sm:text-5xl font-bold text-white">Sought <br /><span className="text-gradient-gold-premium italic font-light">Answers.</span></h2>
          </div>
          <div className="lg:col-span-7 space-y-2 sm:space-y-3 w-full">
            {faqs.map((item, idx) => (
              <div key={idx} className="glass-panel-luxury rounded-2xl overflow-hidden border border-white/5 transition-all duration-300">
                <button onClick={() => setOpenFaqIdx(openFaqIdx === idx ? null : idx)} className="w-full text-left p-4 sm:p-6 flex justify-between items-center text-white font-serif text-xs sm:text-base font-bold cursor-pointer hover:text-salvore-gold transition-colors gap-4">
                  <span>{item.q}</span>
                  <ChevronRight className={`w-4 h-4 text-salvore-caramel transition-transform duration-300 shrink-0 ${openFaqIdx === idx ? "rotate-90" : ""}`} />
                </button>
                <AnimatePresence>
                  {openFaqIdx === idx && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="border-t border-white/5 bg-white/[0.01]">
                      <p className="p-4 sm:p-6 text-[11px] sm:text-xs text-white/50 leading-relaxed font-light">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PANEL 9: COORDINATES */}
      <section id="contact" className="min-h-screen xl:h-screen w-full xl:snap-start flex items-center justify-center relative px-4 text-center overflow-hidden py-12 xl:py-0">
        <div className="max-w-2xl space-y-6 sm:space-y-10 relative z-10 w-full px-2">
          <div className="space-y-0.5 sm:space-y-2">
            <span className="text-salvore-caramel text-[10px] sm:text-xs tracking-widest uppercase font-mono block">08 // RECEPTION CODES</span>
            <h2 className="font-serif text-3xl sm:text-6xl font-bold text-white">Visit The Sanctuary</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left w-full">
            <div className="glass-panel-luxury p-4 sm:p-6 rounded-2xl space-y-1 sm:space-y-3 border border-white/5">
              <MapPin className="w-4 h-4 text-salvore-caramel" />
              <h4 className="text-[10px] uppercase tracking-wider font-semibold text-white">Location Index</h4>
              <p className="text-[11px] sm:text-xs text-white/50 font-light">102 Luxury Arcade, Lavelle Road, Bangalore, India</p>
            </div>
            <div className="glass-panel-luxury p-4 sm:p-6 rounded-2xl space-y-1 sm:space-y-3 border border-white/5">
              <Clock className="w-4 h-4 text-salvore-caramel" />
              <h4 className="text-[10px] uppercase tracking-wider font-semibold text-white">Service Matrix</h4>
              <p className="text-[11px] sm:text-xs text-white/50 font-light">Monday — Sunday // 07:00 AM to 11:00 PM</p>
            </div>
          </div>
          <div className="pt-2">
            <Link href="/reservations" className="inline-block w-full sm:w-auto text-center text-[10px] sm:text-xs uppercase tracking-[0.3em] font-semibold bg-gradient-to-r from-salvore-caramel to-salvore-gold text-black px-8 sm:px-12 py-3.5 sm:py-5 rounded-full shadow-2xl hover:opacity-90 active:scale-95 transition-all duration-300">Access Booking Portal</Link>
          </div>
        </div>
      </section>

    </main>
  );
}