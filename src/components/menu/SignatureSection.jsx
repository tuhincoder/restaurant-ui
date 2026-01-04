import React from "react";
import { motion } from "framer-motion";

const SignatureSection = () => {
  return (
    <section className=" bg-[#051117] py-12 md:py-20 px-4 sm:px-6 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row items-center bg-[#0a1217] border border-white/5 rounded-2xl overflow-hidden shadow-2xl"
        >
          {/* Image Part */}
          <div className="w-full lg:w-1/2 h-56 sm:h-72 lg:h-[450px] relative overflow-hidden">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000"
              alt="Signature Dish"
              className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute top-4 right-4 bg-amber-500 text-black font-bold px-5 py-2 rounded-full text-xs shadow-lg">
              $24.00
            </div>
          </div>

          {/* Content Part */}
          <div className="w-full lg:w-1/2 p-6 sm:p-12 space-y-6">
            <div className="space-y-2 text-center lg:text-left">
              <span className="text-amber-500 text-[10px] tracking-[0.5em] uppercase font-bold">
                Chef's Signature
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif text-white leading-tight italic">
                A Culinary Masterpiece <br className="hidden sm:block" /> For
                Your Senses
              </h2>
            </div>

            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed text-center lg:text-left font-light tracking-wide">
              Experience the perfect balance of flavors and textures. Crafted
              with the finest seasonal ingredients to elevate your dining
              journey to new heights.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 py-6 border-y border-white/5">
              <div className="text-center lg:text-left">
                <span className="text-white font-serif block text-lg italic tracking-wide">
                  Organic
                </span>
                <span className="text-gray-500 text-[9px] uppercase tracking-[0.2em]">
                  Ingredients
                </span>
              </div>
              <div className="text-center lg:text-left border-l border-white/5 pl-4">
                <span className="text-white font-serif block text-lg italic tracking-wide">
                  Awarded
                </span>
                <span className="text-gray-500 text-[9px] uppercase tracking-[0.2em]">
                  Master Chef
                </span>
              </div>
            </div>

            {/* View All Button Style */}
            <div className="flex justify-center lg:justify-start pt-2">
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="relative w-full sm:w-auto px-10 py-4 group overflow-hidden border border-white/10"
              >
                <span className="relative z-10 text-[10px] tracking-[0.3em] uppercase font-bold text-white group-hover:text-black transition-colors duration-300">
                  Book Experience
                </span>
                <div className="absolute inset-0 bg-amber-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SignatureSection;
