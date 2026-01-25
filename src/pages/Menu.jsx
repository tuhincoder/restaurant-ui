import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import axios from "axios";
import { ChevronDown, Loader2 } from "lucide-react";
import { Helmet } from "react-helmet";

const Menu = () => {
  const [activeTab, setActiveTab] = useState("Pizza");
  const [showAll, setShowAll] = useState(false);

  const menuRef = useRef(null);

  const {
    data: menuItems = [],
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ["menu", activeTab],
    queryFn: async () => {
      const response = await axios.get(
        `https://restaurant-server-delta-lyart.vercel.app/menu?category=${activeTab}`
      );
      return response.data;
    },
    staleTime: 1000 * 60 * 10,
    gcTime: 1000 * 60 * 15,
    placeholderData: keepPreviousData,
  });

  const itemsToDisplay = showAll ? menuItems : menuItems.slice(0, 12);

  const handleToggleMenu = () => {
    if (showAll) {
      const yOffset = -100;
      const element = menuRef.current;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setShowAll(false);
    } else {
      setShowAll(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>Our Menu | Your Family Pizza</title>
      </Helmet>

      <section
        ref={menuRef}
        id="menu"
        className="bg-[#051117] text-white py-16 md:pt-24 px-6 md:px-12 lg:px-24 relative overflow-hidden"
      >
        {/* Background Glow */}
        <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-amber-900/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="font-serif italic text-amber-500 text-lg mb-2"
            >
              Handcrafted with love
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-6xl font-serif italic text-white"
            >
              Our <span className="text-amber-500">Menu</span>
            </motion.h2>
            <div className="h-[1px] w-12 bg-amber-500/40 mx-auto mt-4"></div>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-16">
            <div className="flex border border-white/5 rounded-full p-1 bg-white/[0.02] backdrop-blur-sm overflow-x-auto no-scrollbar">
              {["Drinks", "Pizza", "Favorites"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setShowAll(false);
                  }}
                  className={`px-6 md:px-10 py-2.5 text-[10px] md:text-xs tracking-[0.2em] uppercase transition-all duration-500 rounded-full whitespace-nowrap ${
                    activeTab === tab
                      ? "text-black bg-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.3)]"
                      : "text-gray-500 hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* --- Content Area --- */}
          <div className="relative min-h-[400px]">
            {isLoading && menuItems.length === 0 ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[#051117]/50 backdrop-blur-sm z-20">
                <Loader2 className="w-10 h-10 text-amber-500 animate-spin" />
                <p className="text-amber-500/60 tracking-[0.3em] text-[10px] uppercase">
                  Loading Menu...
                </p>
              </div>
            ) : (
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-12 transition-opacity duration-500 ${
                  isFetching ? "opacity-50" : "opacity-100"
                }`}
              >
                <AnimatePresence mode="popLayout">
                  {itemsToDisplay.map((item, index) => (
                    <motion.div
                      key={item._id}
                      layout
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3, delay: index * 0.02 }}
                      className="group relative"
                    >
                      <div className="flex items-baseline gap-4 mb-2">
                        <h3 className="text-sm md:text-base font-bold tracking-[0.15em] uppercase group-hover:text-amber-500 transition-colors duration-300">
                          {item.title}
                        </h3>
                        <div className="flex-grow border-b border-white/10 border-dashed translate-y-[-4px]"></div>
                        <span className="text-amber-500 font-serif italic text-lg md:text-xl">
                          ${item.price?.toFixed(2)}
                        </span>
                      </div>
                      <p className="text-gray-500 text-xs md:text-sm font-light tracking-wide leading-relaxed max-w-[85%] group-hover:text-gray-400 transition-colors">
                        {item.desc}
                      </p>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}
          </div>

          {/* --- View Full Menu Button --- */}
          <div className="mt-20 flex flex-col items-center gap-8">
            {!isLoading && menuItems.length > 12 && (
              <button
                onClick={handleToggleMenu}
                className="relative px-12 py-4 group overflow-hidden border border-amber-500/20 rounded-full transition-all hover:border-amber-500"
              >
                <span className="relative z-10 text-[10px] tracking-[0.4em] uppercase font-bold text-white group-hover:text-black transition-colors duration-500 flex items-center gap-2">
                  {showAll ? "Show Less" : "View Full Menu"}
                  {!showAll && (
                    <ChevronDown size={14} className="animate-bounce" />
                  )}
                </span>
                <div className="absolute inset-0 bg-amber-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
              </button>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
