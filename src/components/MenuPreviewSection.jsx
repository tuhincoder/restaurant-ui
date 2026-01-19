import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Plus, ChevronDown } from "lucide-react";
import useDishes from "@/hooks/useDishes";
import { Link } from "react-router-dom";

export default function MenuPreviewSection() {
  const [dishesData] = useDishes();

  // লজিক স্টেট: মোবাইলে ৪টি দেখানোর জন্য
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // স্ক্রিন সাইজ ডিটেক্ট করার লজিক
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };
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
            <span className="text-amber-500 font-bold uppercase tracking-[0.4em] text-[10px]">
              Selected Menu
            </span>
            <h2 className="text-4xl md:text-6xl text-white font-light tracking-tight">
              Popular{" "}
              <span className="italic font-serif text-amber-500">Dishes</span>
            </h2>
          </div>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleDishes?.map((dish) => (
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              key={dish._id || dish.id}
              className="group relative bg-[#0a141a] rounded-2xl overflow-hidden border border-white/5 flex flex-col h-full"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-black/60 px-4 py-1.5 rounded-full text-white text-sm font-medium">
                  <span className="text-amber-500 font-bold">$</span>{" "}
                  {dish.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-serif text-white mb-3">
                  {dish.title}
                </h3>
                <p className="text-gray-400 text-sm italic line-clamp-2 mb-6">
                  {dish.description}
                </p>
                <div className="mt-auto">
                  <Link to={`/singleDishes/${dish._id}`}>
                    <button className="flex items-center gap-2 text-[10px] uppercase font-bold text-amber-500">
                      Detail Info <ArrowRight size={14} />
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- বাটন লজিক --- */}
        {/* শুধুমাত্র মোবাইলে দেখাবে এবং যখন ৪টি ডাটা দেখা যাচ্ছে তখনই থাকবে */}
        {isMobile && !isExpanded && dishesData?.length > 4 && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setIsExpanded(true)} // ক্লিক করলে লজিক পরিবর্তন হবে
              className="flex items-center gap-3 bg-amber-500 text-black px-10 py-4 rounded-full font-black uppercase text-[10px] tracking-widest active:scale-95 transition-all shadow-lg shadow-amber-500/20"
            >
              See More Dishes <ChevronDown size={16} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
