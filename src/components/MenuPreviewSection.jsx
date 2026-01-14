import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Plus } from "lucide-react";
import useDishes from "@/hooks/useDishes";
import { Link } from "react-router-dom";

export default function MenuPreviewSection() {
  const [dishesData] = useDishes();
  console.log(dishesData);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="menu"
      className="bg-[#051117] pt-20 md:pt-16 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* --- Header: Left Aligned for Modern Feel --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-amber-500 font-bold uppercase tracking-[0.4em] text-[10px]"
            >
              Selected Menu
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl text-white font-light tracking-tight leading-none"
            >
              Popular{" "}
              <span className="italic font-serif text-amber-500">Dishes</span>
            </motion.h2>
          </div>
          <Link to={"/menu"}>
            <motion.button className="flex items-center gap-2 text-white/50 hover:text-amber-500 transition-colors uppercase text-[10px] tracking-widest font-bold">
              View Full Menu <ArrowRight size={16} />
            </motion.button>
          </Link>
        </div>

        {/* --- Menu Grid --- */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 lg:gap-8"
        >
          {dishesData?.map((dish) => (
            <motion.div
              key={dish.id}
              variants={item}
              className="group relative bg-[#0a141a] rounded-2xl overflow-hidden border border-white/5 flex flex-col h-full"
            >
              {/* Image Container with Dynamic Badge */}
              <div className="relative h-64 md:h-72 overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8 }}
                  src={dish.image}
                  alt={dish.title}
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                />

                {/* Modern Price Tag */}
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white border border-white/10 px-4 py-1.5 rounded-full text-sm font-medium">
                  <span className="text-amber-500 font-bold">$</span>
                  {dish.price}
                </div>

                {/* Mobile Quick Add (User Friendly) */}
                <button className="absolute bottom-4 right-4 p-3 bg-amber-500 text-black rounded-full lg:opacity-0 lg:translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
                  <Plus size={20} />
                </button>
              </div>

              {/* Card Content */}
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl md:text-2xl font-serif text-white group-hover:text-amber-500 transition-colors duration-300">
                    {dish.title}
                  </h3>
                </div>

                <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed mb-6 italic opacity-80 line-clamp-2">
                  {dish.description}
                </p>

                {/* Simple Link - Mobile Friendly */}
                <div className="mt-auto">
                  <button className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-amber-500/80 group-hover:text-amber-500 transition-all">
                    Detail Info{" "}
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                </div>
              </div>

              {/* Subtle Overlay Effect */}
              <div className="absolute inset-0 border-[1px] border-amber-500/0 group-hover:border-amber-500/20 rounded-2xl transition-all duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
