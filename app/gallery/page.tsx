"use client";

import { motion } from "framer-motion";

export default function GalleryPage() {
  const placeholders = [1, 2, 3, 4, 5, 6];

  return (
    <main className="min-h-screen bg-salvore-dark pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-salvore-caramel text-xs uppercase tracking-widest block">Atmosphere</span>
          <h1 className="font-serif text-4xl md:text-6xl text-salvore-cream mt-2">Visual Echoes</h1>
        </div>

        {/* Premium Immersive Masonry Grid Layout */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
          {placeholders.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className={`break-inside-avoid glass-panel rounded-2xl overflow-hidden relative border border-white/5 group bg-salvore-charcoal/30 flex items-center justify-center text-salvore-cream/20 font-serif ${
                index % 2 === 0 ? "h-[300px]" : "h-[450px]"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-salvore-dark to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500 z-10" />
              <span className="group-hover:scale-110 transition-transform duration-500">Salvore Frame {item}</span>
              <div className="absolute bottom-6 left-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-xs uppercase tracking-widest text-salvore-gold">Roastery & Interior</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}