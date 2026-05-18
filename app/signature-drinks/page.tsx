"use client";

import { motion } from "framer-motion";

const highEndDrinks = [
  { id: "01", name: "24K Gold Crème Latte", description: "Double-shot Bourbon Typica espresso blended with cold-pressed macadamia nut milk, topped with gold-leaf flaking.", price: "₹550" },
  { id: "02", name: "Smoked Oakwood Nitro", description: "Cold brew steeped for 20 hours, infused with pure nitrogen and barrel-smoked with organic applewood tableside.", price: "₹620" },
  { id: "03", name: "Rosemary Infused Cascara", description: "A delicate tea crafted from dried coffee cherries, steeped with fresh charred rosemary sprigs and wild honey.", price: "₹480" }
];

export default function SignaturePage() {
  return (
    <main className="min-h-screen bg-salvore-dark pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 text-center md:text-left">
          <span className="text-salvore-caramel text-xs uppercase tracking-widest block">Liquid Artistry</span>
          <h1 className="font-serif text-4xl md:text-6xl text-salvore-cream mt-2">The Signature Reserve</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highEndDrinks.map((drink, i) => (
            <motion.div 
              key={drink.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="glass-panel p-8 rounded-2xl flex flex-col justify-between h-[400px] group hover:border-salvore-caramel/40 transition-all duration-500"
            >
              <div>
                <span className="font-mono text-salvore-caramel text-sm block mb-6">{drink.id} //</span>
                <h3 className="font-serif text-2xl text-salvore-cream mb-4 group-hover:text-salvore-gold transition-colors">{drink.name}</h3>
                <p className="text-salvore-cream/60 text-sm leading-relaxed">{drink.description}</p>
              </div>
              <div className="flex justify-between items-center border-t border-white/5 pt-4">
                <span className="text-xs uppercase tracking-wider text-salvore-cream/40">Tasting Grade A</span>
                <span className="text-gradient-gold font-medium font-mono text-lg">{drink.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}