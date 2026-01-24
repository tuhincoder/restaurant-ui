import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import img1 from "@/assets/images/pizzaMenu/pizza1.png";
import img2 from "@/assets/images/pizzaMenu/pizza2.jpg";
import img3 from "@/assets/images/pizzaMenu/pizza3.jpg";
import img4 from "@/assets/images/pizzaMenu/pizza4.jpg";
import img5 from "@/assets/images/pizzaMenu/pizza5.jpg";

const MenuPicture = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const menuImages = useMemo(
    () => [
      { id: 1, url: img1 },
      { id: 2, url: img2 },
      { id: 3, url: img3 },
      { id: 4, url: img4 },
      { id: 5, url: img5 },
    ],
    []
  );

  const duplicatedImages = useMemo(
    () => [...menuImages, ...menuImages, ...menuImages],
    [menuImages]
  );

  return (
    <section className="bg-[#051117]  overflow-hidden">
      {/* Header - Optimized for Mobile */}
      <div className="max-w-7xl mx-auto px-6 mb-6 md:mb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-6xl font-serif italic text-white"
          >
            Visual <span className="text-amber-500">Menu</span>
          </motion.h2>
          {/* <h2 className="text-xl md:text-4xl font-light tracking-[0.15em] md:tracking-[0.2em] text-white uppercase">
            Visual{" "}
            <span className="text-amber-500 italic font-serif">Menu</span>
          </h2> */}
          <div className="h-[1px] w-10 md:w-12 bg-amber-500/40 mx-auto mt-3"></div>
        </motion.div>
      </div>

      {/* --- Horizontal Auto-Scrolling Carousel --- */}
      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex gap-4 md:gap-6 py-4"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{
            ease: "linear",
            duration: 20, // মোবাইলে স্পিড একটু ফাস্ট মনে হতে পারে তাই ২০-৩০ সেকেন্ড ব্যালেন্সড
            repeat: Infinity,
          }}
          // Mobile touch and Desktop hover handling
          onMouseEnter={(e) =>
            (e.currentTarget.style.animationPlayState = "paused")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.animationPlayState = "running")
          }
          onTouchStart={(e) =>
            (e.currentTarget.style.animationPlayState = "paused")
          }
          onTouchEnd={(e) =>
            (e.currentTarget.style.animationPlayState = "running")
          }
        >
          {duplicatedImages.map((img, idx) => (
            <motion.div
              key={`${img.id}-${idx}`}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedImg(img.url)}
              className="relative group w-[180px] sm:w-[250px] md:w-[320px] h-[260px] sm:h-[380px] md:h-[480px] bg-white rounded-xl overflow-hidden cursor-pointer shadow-2xl border border-white/5 flex-shrink-0 transition-all duration-500"
            >
              <img
                src={img.url}
                alt="Menu Item"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />

              {/* Overlay Hover Effect - Subtle for mobile, active on touch/hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-amber-500 p-3 md:p-4 rounded-full text-black shadow-lg transform scale-50 group-hover:scale-100 transition-transform duration-300">
                  <ZoomIn size={window.innerWidth < 768 ? 18 : 24} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* --- Responsive Modal with Deep Zoom --- */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
          >
            {/* Close Button - Larger and more accessible for mobile */}
            <motion.button
              whileTap={{ scale: 0.8 }}
              className="absolute top-5 right-5 text-white bg-white/10 p-3 rounded-full border border-white/10 hover:text-amber-500 z-[110]"
              onClick={() => setSelectedImg(null)}
            >
              <X size={24} />
            </motion.button>

            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="relative w-full max-w-4xl flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="cursor-zoom-in rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-white/5 w-full">
                <Zoom>
                  <img
                    src={selectedImg}
                    alt="Menu Zoomed"
                    className="w-full h-auto max-h-[75vh] md:max-h-[80vh] object-contain"
                  />
                </Zoom>
              </div>

              {/* Mobile Text Alert */}
              <div className="mt-5 flex items-center gap-2 text-amber-500/80 tracking-[0.2em] md:tracking-[0.3em] uppercase text-[9px] md:text-[11px] font-bold">
                <ZoomIn size={14} className="animate-pulse" />
                <span>Tap to zoom deeper</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MenuPicture;
