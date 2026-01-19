import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useMenu from "@/hooks/useMenu";
import Loading from "@/components/loader/Loading";
import { Helmet } from "react-helmet-async";
import { ArrowRight, ChevronDown } from "lucide-react"; // আইকন যোগ করা হয়েছে

const Menu = () => {
  const [activeTab, setActiveTab] = useState("Pizza");
  const [showAll, setShowAll] = useState(false);
  const [menu, isLoading] = useMenu();

  const menuRef = useRef(null);
  const footerRef = useRef(null); // নিচে স্ক্রল করার জন্য

  const filteredItems =
    menu?.filter((item) => item.category === activeTab) || [];
  const itemsToDisplay = showAll ? filteredItems : filteredItems.slice(0, 12);

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

  if (isLoading) return <Loading />;

  return (
    <>
      <Helmet>
        <title>Our Menu | Your Family Pizza</title>
        <meta
          name="description"
          content="Explore our artisanal pizza selection"
        />
      </Helmet>

      <section
        ref={menuRef}
        id="menu"
        className="bg-[#051117] text-white py-16 md:py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden"
      >
        {/* Background Glow */}
        <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-amber-900/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* --- TOP CTA BUTTON --- */}
          <div className="flex justify-end mb-8">
            <motion.button
              whileHover={{ x: 5 }}
              onClick={() =>
                footerRef.current?.scrollIntoView({ behavior: "smooth" })
              }
              className="group flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-amber-500/80 hover:text-amber-500 transition-all"
            >
              See All Categories{" "}
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </motion.button>
          </div>

          <div className="text-center mb-12">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="font-serif italic text-amber-500 text-lg mb-2"
            >
              Handcrafted with love
            </motion.p>
            <h2 className="text-3xl md:text-5xl font-light tracking-[0.2em] uppercase">
              Our Pizza Menu
            </h2>
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

          {/* Menu Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-12 min-h-[400px]">
            <AnimatePresence mode="popLayout">
              {itemsToDisplay.map((item, index) => (
                <motion.div
                  key={item._id || item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: index * 0.05 }}
                  className="group relative"
                >
                  <div className="flex items-baseline gap-4 mb-2">
                    <h3 className="text-sm md:text-base font-bold tracking-[0.15em] uppercase group-hover:text-amber-500 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <div className="flex-grow border-b border-white/10 border-dashed translate-y-[-4px]"></div>
                    <span className="text-amber-500 font-serif italic text-lg md:text-xl">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>
                  <p className="text-gray-500 text-xs md:text-sm font-light tracking-wide leading-relaxed max-w-[85%] group-hover:text-gray-400 transition-colors">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* --- BOTTOM SECTION --- */}
          <div
            ref={footerRef}
            className="mt-20 flex flex-col items-center gap-8"
          >
            {/* Main Toggle Button */}
            {filteredItems.length > 12 && (
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

            {/* Bottom Link to Contact/Order */}
            <motion.div
              initial={{ opacity: 0.5 }}
              whileHover={{ opacity: 1 }}
              className="pt-12 border-t border-white/5 w-full flex justify-center"
            >
              <a
                href="/contact"
                className="flex items-center gap-4 group text-white/60 hover:text-amber-500 transition-all"
              >
                <span className="text-[11px] tracking-[0.5em] uppercase">
                  Ready to Order? Go to Contact
                </span>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-amber-500 transition-all">
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
