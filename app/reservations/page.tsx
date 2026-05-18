"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ReservationsPage() {
  const [confirmed, setConfirmed] = useState(false);

  return (
    <main className="min-h-screen bg-salvore-dark pt-32 pb-24 px-6 flex items-center justify-center relative">
      <div className="absolute inset-0 bg-caramel-glow pointer-events-none opacity-20 blur-2xl" />
      
      <div className="w-full max-w-xl relative z-10">
        {!confirmed ? (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-panel p-8 md:p-12 rounded-3xl space-y-8"
          >
            <div className="text-center">
              <h1 className="font-serif text-3xl md:text-5xl text-salvore-cream">Table Reservation</h1>
              <p className="text-salvore-cream/50 text-xs uppercase tracking-widest mt-2">Experience curated tranquility</p>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); setConfirmed(true); }} className="space-y-5">
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-salvore-caramel mb-2">Name</label>
                <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-salvore-cream focus:outline-none focus:border-salvore-caramel transition-colors" placeholder="Guest Name" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-salvore-caramel mb-2">Date</label>
                  <input required type="date" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-salvore-cream focus:outline-none focus:border-salvore-caramel transition-colors" />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-salvore-caramel mb-2">Time Slot</label>
                  <input required type="time" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-salvore-cream focus:outline-none focus:border-salvore-caramel transition-colors" />
                </div>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-salvore-caramel to-salvore-gold text-salvore-dark font-bold text-xs uppercase tracking-widest py-4 rounded-xl shadow-lg hover:opacity-90 transition-opacity cursor-pointer">
                Request Invitation
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="glass-panel p-12 rounded-3xl text-center space-y-4"
          >
            <h2 className="font-serif text-3xl text-salvore-gold">Seat Allocated</h2>
            <p className="text-salvore-cream/70 text-sm max-w-sm mx-auto leading-relaxed">
              An access pass summary along with dress coordinates has been routed to your digital address. Welcome to Salvore.
            </p>
          </motion.div>
        )}
      </div>
    </main>
  );
}