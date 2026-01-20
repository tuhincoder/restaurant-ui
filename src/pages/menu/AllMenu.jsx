import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Loader2, UtensilsCrossed } from "lucide-react";
import axios from "axios";

const AllMenu = () => {
  // ক্যাটাগরি লিস্ট (আপনার API এর ক্যাটাগরি নামের সাথে হুবহু মিল রাখা হয়েছে)
  const categories = [
    "Classic-Pizzas",
    "Specialty-Favorites",
    "6\"-Subs",
    "Chicken",
    "Sides",
    "Snacks",
    "Desserts",
    "Drinks",
    "Sauces",
    "New-Item",
  ];

  const [activeCategory, setActiveCategory] = useState("Classic-Pizzas");

  const { data: menuData, isLoading, isError } = useQuery({
    queryKey: ["fullMenu"],
    queryFn: async () => {
      const response = await axios.get(
        "https://restaurant-server-delta-lyart.vercel.app/allMenu"
      );
      return response.data;
    },
    // লোডিং কমাতে ডেটা ক্যাশ করে রাখবে
    staleTime: 1000 * 60 * 10, 
  });

  // ফিল্টারিং লজিক (useMemo ব্যবহার করা হয়েছে পারফরম্যান্সের জন্য)
  const filteredMenu = useMemo(() => {
    return menuData?.filter((item) => item.category === activeCategory);
  }, [menuData, activeCategory]);

  if (isLoading)
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-[#051117] text-amber-500">
        <Loader2 className="animate-spin mb-4" size={50} />
        <p className="text-xs uppercase tracking-[0.5em] animate-pulse">Loading Menu...</p>
      </div>
    );

  if (isError)
    return (
      <div className="h-screen flex items-center justify-center bg-[#051117] text-red-500">
        <p className="uppercase tracking-widest">Failed to load menu. Please try again.</p>
      </div>
    );

  return (
    <section className="bg-[#051117] min-h-screen py-12 md:py-20">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-10 md:mb-16 px-6">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-serif italic text-amber-500 text-base md:text-lg mb-2"
        >
          Fresh & Hot
        </motion.p>
        <h2 className="text-3xl md:text-6xl font-light tracking-[0.2em] text-white uppercase">
          Our <span className="text-amber-500 italic">Menu</span>
        </h2>
        <div className="h-[1px] w-20 bg-amber-500/40 mx-auto mt-6"></div>
      </div>

      {/* Category Filter Bar (Sticky) */}
      <div className="sticky top-0 z-40 bg-[#051117]/95 backdrop-blur-md border-y border-white/5 py-4 md:py-6 mb-12">
        <div className="max-w-7xl mx-auto flex gap-3 md:gap-4 overflow-x-auto no-scrollbar justify-start md:justify-center px-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 md:px-8 md:py-2.5 rounded-full text-[9px] md:text-xs uppercase tracking-[0.15em] transition-all duration-300 whitespace-nowrap border ${
                activeCategory === cat
                  ? "bg-amber-500 text-black border-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.3)]"
                  : "text-gray-400 border-white/10 hover:border-amber-500/50 hover:text-white"
              }`}
            >
              {cat.replace(/-/g, " ")}
            </button>
          ))}
        </div>
      </div>

      {/* Menu List Area */}
      <div className="max-w-6xl mx-auto px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 md:gap-x-20 gap-y-8 md:gap-y-12"
          >
            {filteredMenu?.map((item, idx) => (
              <motion.div
                key={idx}
                className="group flex flex-col justify-start"
              >
                {/* Title and Price Row */}
                <div className="flex items-baseline gap-2 mb-2">
                  <h3 className="text-xs md:text-[15px] font-bold tracking-widest uppercase text-white group-hover:text-amber-500 transition-colors duration-300 shrink-0">
                    {item.title}
                  </h3>

                  {/* Dotted Leader Line */}
                  <div className="flex-grow border-b border-dotted border-white/20 h-0 translate-y-[-4px]"></div>

                  <span className="text-amber-500 font-bold text-xs md:text-base tracking-tighter shrink-0">
                    ${item.price?.toFixed(2)}
                  </span>
                </div>

                {/* Description - আপনার JSON এ ফিল্ডের নাম 'desc' */}
                {item.desc && (
                  <p className="text-gray-500 text-[10px] md:text-[12px] italic font-light tracking-wide leading-relaxed max-w-[95%]">
                    {item.desc}
                  </p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {(!filteredMenu || filteredMenu.length === 0) && (
          <div className="flex flex-col items-center justify-center py-20 text-gray-600">
            <UtensilsCrossed size={40} className="mb-4 opacity-20" />
            <p className="tracking-widest uppercase text-xs">
              No items found in this category.
            </p>
          </div>
        )}
      </div>

      {/* Footer Branding */}
      <div className="mt-24 text-center opacity-20 px-6">
        <div className="h-[1px] w-full max-w-md bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8"></div>
        <p className="text-[9px] tracking-[0.6em] uppercase text-white font-light">
          Your Family Pizza &copy; 2026
        </p>
      </div>
    </section>
  );
};

export default AllMenu;