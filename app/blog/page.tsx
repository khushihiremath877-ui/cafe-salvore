"use client";

import { motion } from "framer-motion";

const articles = [
  { title: "The Chemistry of Extracting Honey Processed Beans", excerpt: "Deep dive into water particle composition, temperature curves, and mineral counts necessary for delicate honey notes.", date: "May 14, 2026" },
  { title: "Acoustics & Architecture: Designing Silent Escapes", excerpt: "How structural glassmorphism and geometric acoustic layouts enhance sensory taste responses.", date: "April 29, 2026" }
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-salvore-dark pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-20">
          <span className="text-salvore-caramel text-xs uppercase tracking-widest block">Journal</span>
          <h1 className="font-serif text-4xl md:text-7xl text-salvore-cream mt-2">The Salvore Ledger</h1>
        </div>

        <div className="space-y-12">
          {articles.map((art, idx) => (
            <motion.article 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-b border-white/5 pb-12 space-y-4 group cursor-pointer"
            >
              <span className="font-mono text-xs text-salvore-caramel">{art.date}</span>
              <h2 className="font-serif text-2xl md:text-3xl text-salvore-cream group-hover:text-salvore-gold transition-colors">{art.title}</h2>
              <p className="text-salvore-cream/60 leading-relaxed text-sm max-w-2xl">{art.excerpt}</p>
              <span className="inline-block text-xs uppercase tracking-widest border-b border-salvore-caramel text-salvore-caramel pb-1 mt-2">Read Essay</span>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
}