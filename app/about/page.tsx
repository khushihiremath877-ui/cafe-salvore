"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-salvore-dark pt-32 pb-24 px-6 md:px-12 relative">
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-caramel-glow opacity-30 blur-3xl pointer-events-none" />
      
      <div className="max-w-5xl mx-auto space-y-24">
        {/* Philosophy Header */}
        <div className="max-w-3xl">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-salvore-caramel text-xs uppercase tracking-widest block mb-3"
          >
            Our Philosophy
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-7xl text-salvore-cream leading-tight"
          >
            Slowing down time, <br />one roasted bean at a time.
          </motion.h1>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[450px] bg-salvore-charcoal/50 border border-white/5 rounded-2xl flex items-center justify-center text-salvore-caramel/20 font-serif text-7xl select-none"
          >
            EST. 2026
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6 text-salvore-cream/70 leading-relaxed"
          >
            <h3 className="font-serif text-2xl text-salvore-cream">The Salvore Sanctuary</h3>
            <p>
              Salvore emerged from a desire to strip away the noisy, fast-paced rhythms of modern life and replace them with intentional hospitality. Our space is consciously designed with acoustic damping, minimalistic layouts, and warm organic elements.
            </p>
            <p>
              We source directly from single-estate micro-lots across Colombia, Ethiopia, and Sumatra. Every roast batch is monitored via multi-point heat analytics to coax out deep, complex sugars without masking regional clarity.
            </p>
          </motion.div>
        </div>
      </div>
    </main>
  );
}