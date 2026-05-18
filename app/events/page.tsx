"use client";

import { motion } from "framer-motion";

const communityEvents = [
  { title: "Acoustic Jazz Evenings", date: "Every Friday", time: "08:00 PM", desc: "Ambient classical jazz acts perform live alongside an extended reserve pour menu." },
  { title: "Cupping & Origins Masterclass", date: "June 04, 2026", time: "10:00 AM", desc: "A sensory walkthrough evaluating breaking crusts and defects across global multi-lots." }
];

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-salvore-dark pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <span className="text-salvore-caramel text-xs uppercase tracking-widest block">Gatherings</span>
          <h1 className="font-serif text-4xl md:text-6xl text-salvore-cream mt-2">Curated Gatherings</h1>
        </div>

        <div className="space-y-6">
          {communityEvents.map((ev, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-panel p-8 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:border-salvore-caramel/20 transition-colors"
            >
              <div className="space-y-2">
                <span className="text-xs font-mono text-salvore-caramel">{ev.date} — {ev.time}</span>
                <h3 className="font-serif text-2xl text-salvore-cream">{ev.title}</h3>
                <p className="text-salvore-cream/60 text-sm max-w-xl">{ev.desc}</p>
              </div>
              <button className="whitespace-nowrap px-6 py-3 border border-white/10 rounded-full text-xs uppercase tracking-wider text-salvore-cream hover:bg-white hover:text-black transition-all">
                Get Ticket
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}