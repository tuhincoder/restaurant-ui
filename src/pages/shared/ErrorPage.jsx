import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="min-h-screen bg-[#050c10] flex items-center justify-center px-6 overflow-hidden relative">
      {/* Background Subtle Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/20 blur-[150px] rounded-full"></div>
      </div>

      <div className="max-w-2xl w-full text-center relative z-10">
        {/* Animated Main Number */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[120px] md:text-[200px] font-serif font-black text-white/5 leading-none select-none"
        >
          404
        </motion.h1>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="-mt-12 md:-mt-20 space-y-6"
        >
          <h2 className="text-3xl md:text-5xl font-serif text-white italic">
            Oops! The Plate is Empty
          </h2>
          <div className="h-[1px] w-20 bg-amber-500 mx-auto"></div>
          <p className="text-gray-400 text-sm md:text-base font-light tracking-widest max-w-md mx-auto leading-relaxed">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable. Perhaps it's time to head
            back to the kitchen?
          </p>

          {/* Action Button */}
          <div className="pt-8">
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-12 py-4 group overflow-hidden border border-white/10 bg-transparent"
              >
                <span className="relative z-10 text-[10px] tracking-[0.4em] uppercase font-bold text-white group-hover:text-black transition-colors duration-300">
                  Back to Home
                </span>
                <div className="absolute inset-0 bg-amber-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Decorative Floating Icon */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-10 -right-10 opacity-20 hidden md:block"
        >
          {/* আপনি এখানে একটি ফর্ক বা প্লেটের আইকন দিতে পারেন */}
          <svg
            width="100"
            height="100"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path>
            <path d="M7 2v20"></path>
            <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path>
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default ErrorPage;
