import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery, keepPreviousData } from "@tanstack/react-query"; // keepPreviousData ইম্পোর্ট করুন
import { Loader2, ArrowDown, ArrowUp } from "lucide-react";
import axios from "axios";
import MenuPreviewSection from "@/components/MenuPreviewSection";
import Loading from "@/components/loader/Loading";

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

  const [activeCategory, setActiveCategory] = useState("Classic-Pizzas");
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [displayCount, setDisplayCount] = useState(12);

  const scrollRef = useRef(null);
  const menuTopRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // ক্যাটাগরি চেঞ্জ হলে 'Show More' কাউন্ট রিসেট হবে
  useEffect(() => {
    setDisplayCount(12);
  }, [activeCategory]);

  const {
    data: menuData = [],
    isLoading, // একদম প্রথমবার লোড
    isFetching, // ব্যাকগ্রাউন্ডে ডাটা আপডেট হচ্ছে কি না
  } = useQuery({
    queryKey: ["menu", activeCategory],
    queryFn: async () => {
      const response = await axios.get(
        `https://restaurant-server-delta-lyart.vercel.app/allMenu?category=${activeCategory}`
      );
      return response.data;
    },
    // --- এই সেটিংসগুলো বারবার লোডিং বন্ধ করবে ---
    staleTime: 1000 * 60 * 10, // ১০ মিনিট পর্যন্ত ডাটা Fresh থাকবে (বারবার লোড হবে না)
    gcTime: 1000 * 60 * 15, // ১৫ মিনিট ডাটা ক্যাশ-এ থাকবে
    placeholderData: keepPreviousData, // ট্যাব চেঞ্জ করলে আগের ডাটা স্ক্রিনে রেখে দিবে, লোডার দেখাবে না
  });

  const handleShowLess = () => {
    setDisplayCount(12);
    window.scrollTo({
      top: menuTopRef.current.offsetTop - 100,
      behavior: "smooth",
    });
  };

  // ১. শুধুমাত্র একদম প্রথমবার যখন সাইটে আসবে তখন আপনার কাস্টম লোডিং দেখাবে
  if (isLoading) return <Loading />;

  return (
    <>
      <section
        className="bg-[#051117] min-h-screen py-12 md:py-24 overflow-hidden"
        ref={menuTopRef}
      >
        {/* Header */}
        <div className="max-w-7xl mx-auto text-center mb-10 px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-6xl font-serif italic text-white"
          >
            Our All <span className="text-amber-500">Menu</span>
          </motion.h2>
          <div className="h-[1px] w-20 bg-amber-500/40 mx-auto mt-6"></div>
        </div>

        {/* Filter Bar */}
        <div className="sticky top-0 z-40 bg-[#051117]/95 backdrop-blur-md border-y border-white/5 py-4 mb-12">
          <div
            className="max-w-7xl mx-auto px-4 overflow-hidden"
            ref={scrollRef}
          >
            {/* ছোট একটি ইন্ডিকেটর যদি ব্যাকগ্রাউন্ডে ডাটা ফেচ হয় (ঐচ্ছিক) */}
            {isFetching && !isLoading && (
              <div className="absolute top-0 right-10">
                <Loader2 className="animate-spin text-amber-500/20" size={14} />
              </div>
            )}

            <motion.div
              drag={isMobile ? "x" : false}
              dragConstraints={scrollRef}
              animate={isMobile && !isPaused ? { x: ["0%", "-50%"] } : { x: 0 }}
              transition={{
                x: { repeat: Infinity, duration: 25, ease: "linear" },
              }}
              onPointerDown={() => setIsPaused(true)}
              className="flex flex-nowrap items-center gap-3 lg:flex-wrap lg:justify-center"
            >
              {(isMobile ? [...categories, ...categories] : categories).map(
                (cat, idx) => (
                  <button
                    key={`${cat}-${idx}`}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-6 py-2 md:px-8 md:py-2.5 rounded-full text-[10px] md:text-xs uppercase tracking-[0.15em] transition-all border shrink-0 ${
                      activeCategory === cat
                        ? "bg-amber-500 text-black border-amber-500 font-bold"
                        : "text-gray-400 border-white/10 hover:text-white"
                    }`}
                  >
                    {cat.replace(/-/g, " ")}
                  </button>
                )
              )}
            </motion.div>
          </div>
        </div>

        {/* Menu Area */}
        <div className="max-w-6xl mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 md:gap-x-24 gap-y-10"
            >
              {menuData.length > 0 ? (
                menuData.slice(0, displayCount).map((item) => (
                  <div key={item._id} className="group flex flex-col">
                    <div className="flex items-baseline gap-3 mb-2">
                      <h3 className="text-sm md:text-base font-bold tracking-widest uppercase text-white group-hover:text-amber-500 transition-colors">
                        {item.title}
                      </h3>
                      <div className="flex-grow border-b border-dotted border-white/20 h-0"></div>
                      <span className="text-amber-500 font-bold text-sm md:text-base shrink-0">
                        ${item.price?.toFixed(2)}
                      </span>
                    </div>
                    <p className="text-gray-500 text-[11px] md:text-sm italic font-light">
                      {item.desc}
                    </p>
                  </div>
                ))
              ) : (
                <p className="col-span-full text-center text-gray-600 uppercase text-xs">
                  No items found.
                </p>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Load More Button */}
          {menuData.length > 12 && (
            <div className="flex justify-center mt-16">
              {displayCount < menuData.length ? (
                <button
                  onClick={() => setDisplayCount(menuData.length)}
                  className="group flex flex-col items-center gap-2"
                >
                  <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500 group-hover:text-amber-500 transition-all">
                    Explore Full Menu
                  </span>
                  <ArrowDown
                    className="text-amber-500 animate-bounce"
                    size={20}
                  />
                </button>
              ) : (
                <button
                  onClick={handleShowLess}
                  className="group flex flex-col items-center gap-2"
                >
                  <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500 group-hover:text-amber-500 transition-all">
                    Show Less
                  </span>
                  <ArrowUp className="text-amber-500" size={20} />
                </button>
              )}
            </div>
          )}
        </div>
      </section>
      <MenuPreviewSection />
    </>
  );
};

export default AllMenu;
