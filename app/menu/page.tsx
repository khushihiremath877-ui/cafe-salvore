"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Coffee", "Desserts", "Brunch"];

const menuItems = [
  { id: 1, name: "Gold Leaf Espresso", category: "Coffee", price: "₹450", desc: "Signature dark roast espresso garnished with edible 24k gold flakes." },
  { id: 2, name: "Smoked Caramel Macchiato", category: "Coffee", price: "₹520", desc: "Cold-smoked artisanal espresso layered with house-made salted caramel syrup." },
  { id: 3, name: "Madagascar Vanilla Tart", category: "Desserts", price: "₹650", desc: "Crisp pastry shell filled with rich Madagascar bourbon vanilla bean custard." },
  { id: 4, name: "Saffron Truffle Opera Cake", category: "Desserts", price: "₹720", desc: "Layered almond sponge cake soaked in espresso syrup with a hint of organic saffron." },
  { id: 5, name: "Avocado Croissant Toast", category: "Brunch", price: "₹580", desc: "Flaky freshly-baked croissant base layered with hass avocado mousse and microgreens." },
  { id: 6, name: "Truffle Mushroom Benedict", category: "Brunch", price: "₹780", desc: "Poached organic eggs, wild forest mushrooms, shaved black truffle hollandaise sauce." },
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section className="min-h-screen w-full bg-salvore-dark pt-32 pb-20 px-6 md:px-12 relative overflow-hidden">
      
      {/* Background radial soft gold glow */}
      <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-caramel-glow pointer-events-none rounded-full blur-3xl opacity-40" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Page Header */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-6xl text-salvore-cream mb-4"
          >
            The Culinary <span className="text-gradient-gold italic">Collection</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-salvore-cream/60 tracking-widest uppercase text-xs"
          >
            Immersive tastes crafted meticulously for refined palates
          </motion.p>
        </div>

        {/* Category Filter Bar */}
        <div className="flex justify-center gap-3 md:gap-6 mb-16 border-b border-white/5 pb-6 overflow-x-auto no-scrollbar">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative px-6 py-2 text-sm tracking-widest uppercase rounded-full transition-all duration-300 cursor-pointer ${
                activeCategory === category ? "text-salvore-dark font-medium" : "text-salvore-cream/70 hover:text-salvore-cream"
              }`}
            >
              {activeCategory === category && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-salvore-caramel to-salvore-gold rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              {category}
            </button>
          ))}
        </div>

        {/* Animated Item Display Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                className="glass-panel p-8 rounded-2xl group hover:border-salvore-caramel/40 transition-all duration-500 hover:translate-y-[-4px]"
              >
                <div className="flex justify-between items-baseline mb-3">
                  <h3 className="font-serif text-xl md:text-2xl text-salvore-cream group-hover:text-salvore-gold transition-colors duration-300">
                    {item.name}
                  </h3>
                  <span className="text-gradient-gold font-medium text-lg tracking-wider">
                    {item.price}
                  </span>
                </div>
                <p className="text-salvore-cream/60 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}