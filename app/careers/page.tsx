"use client";

import { motion } from "framer-motion";

export default function CareersPage() {
  const roles = ["Senior Head Roaster", "Sensory Hospitality Host", "Artisanal Pastry Architect"];

  return (
    <main className="min-h-screen bg-salvore-dark pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto space-y-16">
        <div className="text-center max-w-xl mx-auto">
          <span className="text-salvore-caramel text-xs uppercase tracking-widest block">Guild</span>
          <h1 className="font-serif text-4xl md:text-6xl text-salvore-cream mt-2">Join the Guild</h1>
          <p className="text-salvore-cream/60 text-sm mt-4">We are continuously looking for precise culinary minds committed to silent excellence.</p>
        </div>

        <div className="space-y-4">
          {roles.map((role, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ x: 8 }}
              className="glass-panel p-6 rounded-xl flex justify-between items-center border border-white/5 cursor-pointer hover:border-salvore-caramel/30 transition-all"
            >
              <span className="font-serif text-xl text-salvore-cream">{role}</span>
              <span className="text-salvore-caramel text-xs uppercase tracking-widest">Apply Now &rarr;</span>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}