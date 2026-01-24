import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
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
  const [displayCount, setDisplayCount] = useState(12);
  const menuTopRef = useRef(null);
  const scrollContainerRef = useRef(null);

  // ক্যাটাগরি চেঞ্জ হলে 'Show More' কাউন্ট রিসেট হবে
  useEffect(() => {
    setDisplayCount(12);

    // ক্যাটাগরি ক্লিক করলে মোবাইল ভিউতে সেটি যাতে স্ক্রিনের মাঝখানে আসে
    if (scrollContainerRef.current) {
      const activeBtn = scrollContainerRef.current.querySelector(".active-cat");
      if (activeBtn) {
        activeBtn.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        });
      }
    }
  }, [activeCategory]);

  const {
    data: menuData = [],
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ["menu", activeCategory],
    queryFn: async () => {
      const response = await axios.get(
        `https://restaurant-server-delta-lyart.vercel.app/allMenu?category=${activeCategory}`
      );
      return response.data;
    },
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 15,
    placeholderData: keepPreviousData,
  });

  const handleShowLess = () => {
    setDisplayCount(12);
    window.scrollTo({
      top: menuTopRef.current.offsetTop - 100,
      behavior: "smooth",
    });
  };

  if (isLoading) return <Loading />;

  return (
    <>
      <section
        className="bg-[#051117] min-h-screen pt-32 md:pt-28 overflow-hidden"
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

        {/* Filter Bar (Mobile User Friendly Version) */}
        <div className="sticky top-0 z-40 bg-[#051117]/95 backdrop-blur-md border-y border-white/5 py-4 mb-12">
          <div
            ref={scrollContainerRef}
            className="max-w-7xl mx-auto px-4 flex flex-nowrap lg:flex-wrap lg:justify-center gap-3 overflow-x-auto no-scrollbar scroll-smooth"
            style={{
              msOverflowStyle: "none" /* IE and Edge */,
              scrollbarWidth: "none" /* Firefox */,
              WebkitOverflowScrolling: "touch" /* iOS momentum scroll */,
            }}
          >
            {/* CSS for hiding scrollbar in Chrome/Safari */}
            <style
              dangerouslySetInnerHTML={{
                __html: `
              .no-scrollbar::-webkit-scrollbar { display: none; }
            `,
              }}
            />

            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 md:px-8 md:py-3 rounded-full text-[10px] md:text-xs uppercase tracking-[0.15em] transition-all border shrink-0 outline-none whitespace-nowrap
                  ${
                    activeCategory === cat
                      ? "bg-amber-500 text-black border-amber-500 font-bold active-cat shadow-[0_0_15px_rgba(245,158,11,0.3)]"
                      : "text-gray-400 border-white/10 hover:text-white bg-white/5"
                  }`}
              >
                {cat.replace(/-/g, " ")}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Area */}
        <div className="max-w-6xl mx-auto px-6">
          {/* Background Loading Pulse (Subtle) */}
          {isFetching && !isLoading && (
            <div className="flex justify-center mb-4">
              <div className="text-[10px] text-amber-500/50 tracking-widest animate-pulse">
                UPDATING MENU...
              </div>
            </div>
          )}

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
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
                  className="group flex flex-col items-center gap-2 border border-white/5 py-4 px-8 rounded-xl hover:bg-white/5 transition-all"
                >
                  <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500 group-hover:text-amber-500 transition-all">
                    Full Menu
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
