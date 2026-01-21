import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import axios from "axios";
import MenuPreviewSection from "@/components/MenuPreviewSection";

const AllMenu = () => {
  const categories = [
    "Classic-Pizzas",
    "Specialty-Favorites",
    '6"-Subs',
    "Chicken",
    "Sides",
    "Snacks",
    "Desserts",
    "Drinks",
    "Sauces",
    "New-Item",
  ];

  // মোবাইলের ইনফিনিট লুপের জন্য ডাবল লিস্ট
  const mobileCategories = [...categories, ...categories];

  const [activeCategory, setActiveCategory] = useState("Classic-Pizzas");
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef(null);

  // স্ক্রিন সাইজ চেক (১০২৪ পিক্সেলের নিচে মোবাইল/ট্যাবলেট মোড)
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { data: menuData, isLoading } = useQuery({
    queryKey: ["menu", activeCategory],
    queryFn: async () => {
      const response = await axios.get(
        `https://restaurant-server-delta-lyart.vercel.app/allMenu?category=${activeCategory}`
      );
      return response.data;
    },
  });

  if (isLoading)
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-[#051117] text-amber-500">
        <Loader2 className="animate-spin mb-4" size={50} />
        <p className="text-xs uppercase tracking-[0.5em]">Loading Menu...</p>
      </div>
    );

  return (
    <>
      <section className="bg-[#051117] min-h-screen py-12 md:py-24 overflow-hidden">
        {/* Header */}
        <div className="max-w-7xl mx-auto text-center mb-10 md:mb-16 px-6">
          <h2 className="text-3xl md:text-6xl font-light tracking-[0.2em] text-white uppercase">
            Our <span className="text-amber-500 italic">Menu</span>
          </h2>
          <div className="h-[1px] w-20 bg-amber-500/40 mx-auto mt-6"></div>
        </div>

        {/* --- Responsive Filter Bar --- */}
        <div className="sticky top-0 z-40 bg-[#051117]/95 backdrop-blur-md border-y border-white/5 py-4 mb-12">
          <div
            className="max-w-7xl mx-auto px-4 overflow-hidden"
            ref={scrollRef}
          >
            <motion.div
              // লজিক: শুধু মোবাইল হলে ড্র্যাগ এবং এনিমেশন হবে
              drag={isMobile ? "x" : false}
              dragConstraints={scrollRef}
              // ডেস্কটপে (isMobile false) এনিমেশন হবে না {x: 0}
              animate={isMobile && !isPaused ? { x: ["0%", "-50%"] } : { x: 0 }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
              onPointerDown={() => setIsPaused(true)}
              // ডেস্কটপে বাটনগুলোকে সেন্টারে আনার জন্য 'lg:justify-center'
              className={`flex flex-nowrap items-center gap-3 lg:flex-wrap lg:justify-center ${
                isMobile ? "cursor-grab active:cursor-grabbing" : ""
              }`}
            >
              {/* মোবাইল হলে ডাবল লিস্ট রেন্ডার হবে, ডেস্কটপে শুধু মেইন লিস্ট */}
              {(isMobile ? mobileCategories : categories).map((cat, idx) => (
                <button
                  key={`${cat}-${idx}`}
                  onClick={() => {
                    setActiveCategory(cat);
                    setIsPaused(true); // ক্লিক করলে অটো-মুভ থেমে যাবে
                  }}
                  className={`px-6 py-2 md:px-8 md:py-2.5 rounded-full text-[10px] md:text-xs uppercase tracking-[0.15em] transition-all duration-300 whitespace-nowrap border shrink-0 ${
                    activeCategory === cat
                      ? "bg-amber-500 text-black border-amber-500 font-bold shadow-[0_0_20px_rgba(245,158,11,0.4)]"
                      : "text-gray-400 border-white/10 hover:border-amber-500/50 hover:text-white"
                  }`}
                >
                  {cat.replace(/-/g, " ")}
                </button>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Menu List */}
        <div className="max-w-6xl mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 md:gap-x-24 gap-y-10"
            >
              {menuData?.map((item, idx) => (
                <div key={idx} className="group flex flex-col">
                  <div className="flex items-baseline gap-3 mb-2">
                    <h3 className="text-sm md:text-base font-bold tracking-widest uppercase text-white group-hover:text-amber-500 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <div className="flex-grow border-b border-dotted border-white/20 h-0 translate-y-[-4px]"></div>
                    <span className="text-amber-500 font-bold text-sm md:text-base tracking-tighter">
                      ${item.price?.toFixed(2)}
                    </span>
                  </div>
                  {item.desc && (
                    <p className="text-gray-500 text-[11px] md:text-sm italic font-light leading-relaxed">
                      {item.desc}
                    </p>
                  )}
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
};

export default AllMenu;
