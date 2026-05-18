
"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-salvore-dark pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <div>
            <span className="text-salvore-caramel text-xs uppercase tracking-widest block">Coordinates</span>
            <h1 className="font-serif text-4xl md:text-7xl text-salvore-cream mt-2">Reach Us</h1>
          </div>
          
          <div className="space-y-6 text-sm text-salvore-cream/70">
            <div>
              <h3 className="font-serif text-lg text-salvore-cream mb-1">Sanctuary Location</h3>
              <p>102 Luxury Arcade, Lavelle Road, Bangalore, KA, India</p>
            </div>
            <div>
              <h3 className="font-serif text-lg text-salvore-cream mb-1">Hours of Service</h3>
              <p>Monday — Sunday: 07:00 AM to 11:00 PM</p>
            </div>
            <div>
              <h3 className="font-serif text-lg text-salvore-cream mb-1">Direct Lines</h3>
              <p className="text-salvore-gold font-mono">concierge@salvore.luxury</p>
              <p className="text-salvore-gold font-mono">+91 80 4920 1102</p>
            </div>
          </div>
        </div>

        {/* Cinematic Mock Map Block */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full aspect-square bg-salvore-charcoal/50 border border-white/10 rounded-3xl flex flex-col items-center justify-center text-center p-8 text-salvore-cream/30 space-y-3 font-serif relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-caramel-glow opacity-10 pointer-events-none" />
          <span className="text-xl tracking-wider text-salvore-caramel/40">Interactive Dark Map Deck</span>
          <span className="text-xs font-mono tracking-widest text-salvore-cream/20">12.9716° N, 77.5946° E</span>
        </motion.div>
      </div>
    </main>
  );
}