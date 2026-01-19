import React, { useEffect, useState } from "react";
import { useNavigate, useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiArrowLeft,
  FiStar,
  FiShoppingBag,
  FiClock,
  FiMinus,
  FiPlus,
  FiTruck,
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
    <div className=" min-h-screen relative overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-orange-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[50%] bg-blue-500/10 rounded-full blur-[100px]" />
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="mb-12">
          <button
            onClick={() => navigate(-1)}
            className="group flex items-center gap-3"
          >
            <div className="p-2.5 bg-white/10 text-white rounded-full group-hover:bg-orange-500 transition-all border border-white/20 shadow-xl">
              <FiArrowLeft size={20} />
            </div>
            <span className="font-black text-gray-300 uppercase tracking-[0.2em] text-[10px] md:text-xs group-hover:text-white transition-colors">
              Return to Menu
            </span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Side: Image Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative"
          >
            <div className="relative rounded-[3.5rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border-[10px] border-white/5 bg-white/5 backdrop-blur-xl">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8 }}
                src={image}
                alt={title}
                className="w-full h-[400px] md:h-[550px] object-cover opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -right-2 md:right-12 bg-[#0a1a24]/90 backdrop-blur-md p-4 rounded-[2rem] shadow-2xl border border-white/10 flex items-center gap-3"
            >
              <div className="bg-orange-500 p-2 rounded-xl text-white shadow-lg shadow-orange-500/20">
                <FiStar fill="currentColor" size={18} />
              </div>
              <span className="font-black text-white text-lg">
                {rating}{" "}
                <span className="text-gray-500 text-sm italic">/ 5</span>
              </span>
            </motion.div>
          </motion.div>

          {/* Right Side: Content Area */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <span className="inline-block px-5 py-2 bg-orange-500/10 text-orange-500 text-[10px] font-black uppercase tracking-[0.3em] rounded-full border border-orange-500/20">
                {category}
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tighter uppercase">
                {title}
              </h1>
              <div className="h-1.5 w-24 bg-orange-500 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.4)]" />
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-medium italic pt-4">
                "{longDescription}"
              </p>
            </div>

            {/* Info Stats - ডার্ক কার্ডস */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-3 px-6 py-4 bg-white/5 rounded-2xl border border-white/10 shadow-inner">
                <FiClock className="text-orange-500" size={20} />
                <span className="text-xs font-black text-gray-300 uppercase">
                  Ready in 25 Min
                </span>
              </div>
              <div className="flex items-center gap-3 px-6 py-4 bg-white/5 rounded-2xl border border-white/10 shadow-inner">
                <FiTruck className="text-green-500" size={20} />
                <span className="text-xs font-black text-gray-300 uppercase">
                  Express Delivery
                </span>
              </div>
            </div>

            {/* Ingredients - সেমি-ট্রান্সপারেন্ট স্টাইল */}
            <div className="space-y-4">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-500">
                Main Ingredients
              </h4>
              <div className="flex flex-wrap gap-2">
                {ingredients?.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-5 py-2.5 bg-white/5 text-gray-300 text-xs font-bold rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Cart & Price Section */}
            <div className="pt-10 flex flex-col sm:flex-row items-center gap-8 border-t border-white/10 mt-10">
              <div className="flex flex-col items-center sm:items-start min-w-[120px]">
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">
                  Estimated Total
                </span>
                <span className="text-5xl font-black text-white tracking-tighter">
                  ${(price * quantity).toFixed(2)}
                </span>
              </div>

              {/* Counter UI - ডার্ক থিম */}
              <div className="flex items-center bg-white/5 p-2 rounded-[1.5rem] border border-white/10">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-12 h-12 flex items-center justify-center text-gray-400 hover:text-white transition-all active:scale-90"
                >
                  <FiMinus size={22} />
                </button>
                <span className="w-12 text-center font-black text-white text-xl">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-12 h-12 flex items-center justify-center text-gray-400 hover:text-white transition-all active:scale-90"
                >
                  <FiPlus size={22} />
                </button>
              </div>

              <motion.button
                whileHover={{
                  scale: 1.02,
                  backgroundColor: "#ffffff",
                  color: "#000000",
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:flex-1 bg-orange-500 text-white h-16 rounded-[1.5rem] font-black uppercase tracking-widest flex items-center justify-center gap-3 shadow-2xl shadow-orange-500/20 transition-all"
              >
                <FiShoppingBag size={24} />
                Add to Basket
              </motion.button>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default DishesDetails;
