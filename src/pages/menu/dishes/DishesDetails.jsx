import React, { useEffect, useState } from "react";
import { useNavigate, useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiArrowLeft,
  FiStar,
  FiClock,
  FiMinus,
  FiPlus,
  FiShoppingBag,
  FiCheckCircle,
  FiZap,
} from "react-icons/fi";

const DishesDetails = () => {
  const navigate = useNavigate();
  const menuDataDetails = useLoaderData();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    title,
    longDescription,
    price,
    category,
    rating,
    ingredients,
    image,
  } = menuDataDetails || {};

  return (
    <div className="min-h-screen bg-[#051117] text-white selection:bg-amber-500/30">
      {/* Background Decorative Element */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 blur-[150px] rounded-full -z-10" />

      <main className="max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20">
        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-3 text-gray-400 hover:text-amber-500 transition-colors group"
          >
            <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
              Back to Menu
            </span>
          </button>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <FiStar className="text-amber-500 fill-amber-500" size={14} />
              <span className="text-sm font-bold">
                {rating}{" "}
                <span className="text-gray-500 font-normal">
                  (120+ Reviews)
                </span>
              </span>
            </div>
            <div className="h-4 w-[1px] bg-white/10 hidden md:block" />
            <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-md border border-amber-500/20">
              {category}
            </span>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Balanced Image Gallery Style */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-6 xl:col-span-7"
          >
            <div className="relative group rounded-[2rem] overflow-hidden bg-[#0a141a] border border-white/5 p-3 md:p-4">
              <div className="aspect-[4/3] rounded-[1.5rem] overflow-hidden shadow-2xl">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Feature Overlays */}
              <div className="absolute bottom-8 left-8 flex gap-3">
                <div className="bg-black/60 backdrop-blur-md p-3 rounded-2xl border border-white/10 flex items-center gap-2">
                  <FiClock className="text-amber-500" />
                  <span className="text-[10px] font-bold uppercase">
                    20 min
                  </span>
                </div>
                <div className="bg-black/60 backdrop-blur-md p-3 rounded-2xl border border-white/10 flex items-center gap-2">
                  <FiZap className="text-green-500" />
                  <span className="text-[10px] font-bold uppercase">
                    Freshly Baked
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Detailed Story & Order Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-6 xl:col-span-5 space-y-10"
          >
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-serif italic text-white tracking-tight leading-tight">
                {title}
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed font-light">
                {longDescription}
              </p>
            </div>

            {/* Fresh Ingredients Grid */}
            <div className="space-y-4">
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">
                The Flavors Inside
              </p>
              <div className="grid grid-cols-2 gap-3">
                {ingredients?.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 text-sm text-gray-300 bg-white/[0.02] p-3 rounded-xl border border-white/5 transition-all hover:bg-white/[0.05]"
                  >
                    <FiCheckCircle
                      className="text-amber-500 shrink-0"
                      size={14}
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Configuration Box */}
            <div className="bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-8 space-y-8 shadow-2xl">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                    Price per Unit
                  </p>
                  <p className="text-3xl font-bold text-white">${price}</p>
                </div>

                {/* Modern Counter */}
                <div className="flex items-center bg-[#051117] rounded-full p-1 border border-white/10">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-amber-500 hover:text-black transition-all"
                  >
                    <FiMinus />
                  </button>
                  <span className="w-10 text-center font-bold font-mono">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-amber-500 hover:text-black transition-all"
                  >
                    <FiPlus />
                  </button>
                </div>
              </div>

              {/* Final Order Action */}
              <div className="space-y-4">
                <div className="flex items-center justify-between px-2">
                  <span className="text-sm text-gray-400 font-medium uppercase">
                    Total Payable
                  </span>
                  <span className="text-2xl font-black text-amber-500">
                    ${(price * quantity).toFixed(2)}
                  </span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-white text-black h-16 rounded-2xl font-black uppercase tracking-[0.2em] text-[11px] flex items-center justify-center gap-3 hover:bg-amber-500 transition-all shadow-xl"
                >
                  <FiShoppingBag size={18} />
                  Order Now
                </motion.button>
              </div>
            </div>

            <p className="text-center text-[9px] text-gray-600 uppercase tracking-[0.3em]">
              * Guaranteed hot delivery within 30 minutes in Kenna area.
            </p>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default DishesDetails;
