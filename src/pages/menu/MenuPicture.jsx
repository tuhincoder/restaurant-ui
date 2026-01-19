import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react"; // SearchPlus বাদ দেওয়া হয়েছে
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

// সরাসরি লোকাল ইমেজগুলো ইমপোর্ট করুন
import img1 from "@/assets/images/pizzaMenu/pizza1.png";
import img2 from "@/assets/images/pizzaMenu/pizza2.jpg";
import img3 from "@/assets/images/pizzaMenu/pizza3.jpg";
import img4 from "@/assets/images/pizzaMenu/pizza4.jpg";
import img5 from "@/assets/images/pizzaMenu/pizza5.jpg";

const MenuPicture = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const menuImages = [
    { id: 1, url: img1 },
    { id: 2, url: img2 },
    { id: 3, url: img3 },
    { id: 4, url: img4 },
    { id: 5, url: img5 },
  ];

  const duplicatedImages = [...menuImages, ...menuImages, ...menuImages];

  return (
    <section className="bg-[#051117] py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <h2 className="text-2xl md:text-4xl font-light tracking-[0.2em] text-white uppercase">
          Visual <span className="text-amber-500 italic">Menu</span>
        </h2>
        <div className="h-[1px] w-12 bg-amber-500/40 mx-auto mt-4"></div>
      </div>

      {/* --- Horizontal Auto-Scrolling Carousel --- */}
      <div className="relative flex overflow-hidden group">
        <motion.div
          className="flex gap-5 pointer-events-auto py-4"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {duplicatedImages.map((img, idx) => (
            <motion.div
              key={`${img.id}-${idx}`}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedImg(img.url)}
              className="relative w-[220px] md:w-[320px] h-[320px] md:h-[480px] bg-white rounded-xl overflow-hidden cursor-pointer shadow-xl border border-white/5 flex-shrink-0"
            >
              <img
                src={img.url}
                alt="Menu Item"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <div className="bg-amber-500/90 p-3 rounded-full text-black shadow-lg">
                  <ZoomIn size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* --- Professional Modal with Zoom Feature --- */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/98 backdrop-blur-md flex items-center justify-center p-6"
          >
            {/* Close Button */}
            <motion.button
              whileHover={{ rotate: 90, scale: 1.1 }}
              className="absolute top-6 right-6 text-white/70 hover:text-amber-500 transition-all z-[110] bg-white/10 p-2 rounded-full border border-white/10"
              onClick={() => setSelectedImg(null)}
            >
              <X size={28} />
            </motion.button>

            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="relative max-w-4xl max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Zoom Library Wrapper */}
              <div className="cursor-zoom-in rounded-lg overflow-hidden shadow-2xl border border-white/10 bg-white/5">
                <Zoom>
                  <img
                    src={selectedImg}
                    alt="Menu Zoomed"
                    className="max-w-full max-h-[75vh] object-contain"
                  />
                </Zoom>
              </div>

              <div className="mt-6 flex items-center gap-2 text-amber-500/60 animate-pulse">
                <ZoomIn size={16} />{" "}
                {/* SearchPlus এর বদলে ZoomIn ব্যবহার করা হয়েছে */}
                <p className="text-[10px] tracking-[0.3em] uppercase">
                  Click image to toggle deep zoom
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MenuPicture;
