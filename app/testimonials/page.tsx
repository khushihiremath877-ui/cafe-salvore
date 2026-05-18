"use client";

import { motion } from "framer-motion";

const reviews = [
  { quote: "Salvore is a masterclass in culinary restraint. The acoustic design alone makes the rare roast espresso pairings taste deeper.", author: "Elena Rostova, Architectural Digest" },
  { quote: "The 24K Gold Latte is showstopping, but the single-estate pour-overs are the true reason to request an annual reservation seat.", author: "Marcus Vance, Epicurean Magazine" }
];

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-salvore-dark pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="text-center">
          <span className="text-salvore-caramel text-xs uppercase tracking-widest block">Critiques</span>
          <h1 className="font-serif text-4xl md:text-6xl text-salvore-cream mt-2">Verified Critiques</h1>
        </div>

        <div className="space-y-8">
          {reviews.map((rev, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-8 md:p-12 rounded-2xl space-y-6 border border-white/5"
            >
              <p className="font-serif text-xl md:text-2xl italic text-salvore-cream/90 leading-relaxed">
                "{rev.quote}"
              </p>
              <div className="text-right">
                <span className="text-xs uppercase tracking-widest text-salvore-caramel font-medium">— {rev.author}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
