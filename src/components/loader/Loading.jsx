import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loading = () => {
  const [loading, setLoading] = useState(true);

  // পেজ লোড হওয়ার পর ২.৫ সেকেন্ড পর এটি নিজে থেকেই চলে যাবে
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.8, ease: "easeInOut" },
          }}
          className="fixed inset-0 z-[9999] bg-[#050c10] flex flex-col items-center justify-center"
        >
          {/* Central Logo/Brand Name */}
          <div className="relative flex flex-col items-center">
            {/* Animated Golden Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-24 h-24 md:w-32 md:h-32 border-t-2 border-amber-500 rounded-full absolute -top-4 md:-top-6"
            />

            {/* Brand Name */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-center mt-4"
            >
              <h1 className="text-4xl md:text-6xl font-serif text-white tracking-[0.3em] uppercase italic">
                Foodix
              </h1>

              {/* Animated Progress Line */}
              <motion.div
                className="h-[1px] bg-amber-500 mt-4 mx-auto"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-amber-500/60 text-[10px] tracking-[0.5em] uppercase mt-4 font-bold"
              >
                Preparing Excellence
              </motion.p>
            </motion.div>
          </div>

          {/* Decorative Corner Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            className="absolute bottom-10 text-white font-serif italic text-sm tracking-widest"
          >
            Since 1998
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loading;
