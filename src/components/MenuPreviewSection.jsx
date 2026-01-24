import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import useDishes from "@/hooks/useDishes";
import { Link } from "react-router-dom";

export default function MenuPreviewSection() {
  const [dishesData] = useDishes();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const visibleDishes =
    isMobile && !isExpanded ? dishesData?.slice(0, 4) : dishesData;

  return (
    <section
      id="menu"
      className="bg-[#051117] pt-20 px-6 pb-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between mb-16 gap-6">
          <div className="space-y-3">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-amber-500 font-bold uppercase tracking-[0.4em] text-[10px] block"
            >
              Selected Menu
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-6xl font-serif italic text-white"
            >
              Popular <span className="text-amber-500">Dishes</span>
            </motion.h2>
            {/* <h2 className="text-4xl md:text-6xl text-white font-light tracking-tight">
              Popular{" "}
              <span className="italic font-serif text-amber-500">Dishes</span>
            </h2> */}
          </div>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          <AnimatePresence mode="popLayout">
            {visibleDishes?.map((dish) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={dish._id || dish.id}
                className="group relative bg-white/[0.02] rounded-[2rem] overflow-hidden border border-white/5 flex flex-col h-full transition-all duration-500 hover:border-amber-500/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
              >
                {/* Image Section */}
                <div className="relative aspect-[4/3] overflow-hidden m-3 rounded-[1.5rem]">
                  <img
                    src={dish.image}
                    alt={dish.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Glassmorphism Price Tag */}
                  <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full text-white text-sm font-bold shadow-lg">
                    <span className="text-amber-500">$</span>
                    {dish.price}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-7 pt-2 flex flex-col flex-1">
                  <h3 className="text-xl md:text-2xl font-serif text-white mb-3 group-hover:text-amber-500 transition-colors">
                    {dish.title}
                  </h3>
                  <p className="text-gray-400 text-sm italic line-clamp-2 mb-8 leading-relaxed">
                    "{dish.description}"
                  </p>

                  <div className="mt-auto pt-5 border-t border-white/5">
                    <Link to={`/singleDishes/${dish._id}`}>
                      <button className="flex items-center gap-2 text-[10px] uppercase font-black tracking-[0.2em] text-white hover:text-amber-500 transition-colors">
                        Explore Recipe{" "}
                        <ArrowRight
                          size={14}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* See More Button - Mobile Only */}
        {isMobile && !isExpanded && dishesData?.length > 4 && (
          <div className="mt-16 flex justify-center">
            <button
              onClick={() => setIsExpanded(true)}
              className="flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full font-black uppercase text-[10px] tracking-[0.25em] active:scale-95 transition-all shadow-xl hover:bg-amber-500"
            >
              See More Dishes <ChevronDown size={16} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
