"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { q: "Do you accommodate walk-ins?", a: "To ensure full structural acoustic clarity and custom tableside pours, we highly prioritize booked invitations. Walk-ins are handled strictly on space liquidity." },
  { q: "What is your bean allocation timeline?", a: "We rotate our single-estate micro-lots every 14 days following rigorous cupping adjustments, guaranteeing complex, seasonal shifts." }
];

export default function FAQPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-salvore-dark pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-salvore-caramel text-xs uppercase tracking-widest block">Inquiries</span>
          <h1 className="font-serif text-4xl md:text-6xl text-salvore-cream mt-2">Sought Answers</h1>
        </div>

        <div className="space-y-4">
          {faqs.map((item, idx) => (
            <div key={idx} className="glass-panel rounded-xl overflow-hidden border border-white/5">
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full text-left p-6 flex justify-between items-center text-salvore-cream font-serif text-lg cursor-pointer hover:text-salvore-gold transition-colors"
              >
                <span>{item.q}</span>
                <span className="text-salvore-caramel font-mono">{openIdx === idx ? "—" : "+"}</span>
              </button>
              
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="border-t border-white/5 bg-white/[0.01]"
                  >
                    <p className="p-6 text-sm text-salvore-cream/60 leading-relaxed">{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}