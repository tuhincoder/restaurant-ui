import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react"; // install: npm i lucide-react

export default function MenuPreviewSection({ menu }) {
  // Animation Variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="menu"
      className="bg-[#051117] py-24 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* --- Section Header --- */}
      <div className="text-center mb-20">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="font-serif italic text-amber-500 text-xl mb-4"
        >
          From our Kitchen
        </motion.p>
        <div className="flex items-center justify-center gap-4">
          <div className="h-[1px] w-8 md:w-16 bg-amber-500/50"></div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-light tracking-[0.2em] text-white uppercase"
          >
            Popular Dishes
          </motion.h2>
          <div className="h-[1px] w-8 md:w-16 bg-amber-500/50"></div>
        </div>
      </div>

      {/* --- Menu Grid --- */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto"
      >
        {menu?.map((dish) => (
          <motion.div
            key={dish.id}
            variants={item}
            className="group relative bg-[#0a1e27] border border-white/5 overflow-hidden shadow-2xl"
          >
            {/* Price Tag Overlay */}
            <div className="absolute top-4 right-4 z-20 bg-amber-500 text-black font-bold px-3 py-1 text-sm rounded-sm">
              ${dish.price}
            </div>

            {/* Image Container with Zoom */}
            <div className="relative h-72 overflow-hidden">
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.8 }}
                src={dish.image}
                alt={dish.title}
                className="w-full h-full object-cover brightness-90 group-hover:brightness-100 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e27] to-transparent opacity-60"></div>
            </div>

            {/* Card Content */}
            <div className="p-8 text-center lg:text-left">
              <h3 className="text-xl font-serif text-white mb-3 tracking-wide group-hover:text-amber-500 transition-colors">
                {dish.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2 italic font-light">
                {dish.description}
              </p>

              {/* Details Button - Premium Style */}
              <div className="flex justify-center lg:justify-start">
                <button className="group/btn relative flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-amber-500 font-bold hover:text-white transition-colors">
                  <span>View Details</span>
                  <div className="w-6 h-[1px] bg-amber-500 group-hover/btn:w-10 group-hover/btn:bg-white transition-all duration-300"></div>
                  <ArrowRight
                    size={14}
                    className="opacity-0 group-hover/btn:opacity-100 transition-opacity"
                  />
                </button>
              </div>
            </div>

            {/* Bottom Border Accent */}
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-amber-500 group-hover:w-full transition-all duration-500"></div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
