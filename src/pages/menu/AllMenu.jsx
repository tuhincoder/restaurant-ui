import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import axios from "axios";

const AllMenu = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Pizzas",
    '6" Subs',
    "Chicken",
    "Sides",
    "Snacks",
    "Desserts",
    "Sauces",
    "New Item",
  ];

  const { data: menuData, isLoading } = useQuery({
    queryKey: ["fullMenu"],
    queryFn: async () => {
      // আপনার API থেকে { title, price, category, description } ডেটা আসবে
      const response = await axios.get("https://your-api.com/api/menu");
      return response.data;
    },
  });

  const filteredMenu =
    activeCategory === "All"
      ? menuData
      : menuData?.filter((item) => item.category === activeCategory);

  if (isLoading)
    return (
      <div className="h-screen flex items-center justify-center bg-[#051117]">
        <Loader2 className="animate-spin text-amber-500" size={50} />
      </div>
    );

  return (
    <section className="bg-[#051117] min-h-screen py-20 px-6">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-serif italic text-amber-500 text-lg mb-2"
        >
          Special Selection
        </motion.p>
        <h2 className="text-4xl md:text-6xl font-light tracking-[0.2em] text-white uppercase">
          Our <span className="text-amber-500 italic">Menu</span>
        </h2>
        <div className="h-[1px] w-24 bg-amber-500/40 mx-auto mt-6"></div>
      </div>

      {/* Category Filter Bar (Sticky) */}
      <div className="sticky top-0 z-40 bg-[#051117]/90 backdrop-blur-md border-y border-white/5 py-6 mb-16">
        <div className="max-w-7xl mx-auto flex gap-4 overflow-x-auto no-scrollbar justify-start md:justify-center px-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-[10px] md:text-xs uppercase tracking-[0.2em] transition-all duration-300 whitespace-nowrap border ${
                activeCategory === cat
                  ? "bg-amber-500 text-black border-amber-500 shadow-lg"
                  : "text-gray-500 border-white/10 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Menu List Area */}
      <div className="max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-10"
          >
            {filteredMenu?.map((item, idx) => (
              <motion.div
                key={idx}
                className="group flex flex-col justify-start"
              >
                {/* Title and Price Row */}
                <div className="flex items-baseline gap-2 mb-1">
                  <h3 className="text-sm md:text-base font-bold tracking-widest uppercase text-white group-hover:text-amber-500 transition-colors duration-300 shrink-0">
                    {item.title}
                  </h3>

                  {/* Dotted Leader Line */}
                  <div className="flex-grow border-b border-dotted border-white/20 h-0 translate-y-[-4px]"></div>

                  <span className="text-amber-500 font-bold text-sm md:text-base tracking-tighter shrink-0">
                    ${item.price?.toFixed(2)}
                  </span>
                </div>

                {/* Conditional Short Description */}
                {item.description && (
                  <p className="text-gray-500 text-[11px] md:text-xs italic font-light tracking-wide leading-relaxed max-w-[90%]">
                    {item.description}
                  </p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredMenu?.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-600 tracking-widest uppercase text-sm">
              No items found in this category.
            </p>
          </div>
        )}
      </div>

      {/* Footer Branding */}
      <div className="mt-32 text-center opacity-20">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"></div>
        <p className="text-[10px] tracking-[0.8em] uppercase text-white font-light">
          Your Family Pizza &copy; 2026
        </p>
      </div>
    </section>
  );
};

export default AllMenu;
