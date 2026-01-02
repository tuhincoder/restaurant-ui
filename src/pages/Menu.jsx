import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import SignatureSection from "@/components/menu/SignatureSection";

// Mock API Call: Real project-e ekhane backend theke data ashbe
const fetchMenuData = async () => {
  return [
    {
      id: 1,
      category: "Mains",
      title: "BEEF BURGER MEAL",
      price: 32,
      desc: "Classic greek salad, barrel aged feta cheese, bread",
    },
    {
      id: 2,
      category: "Mains",
      title: "ROASTED LAMB RUMP",
      price: 25,
      desc: "Grilled lamb cutlets, pomegranate glaze, butternut squash",
    },
    {
      id: 3,
      category: "Starters",
      title: "PAN SEARED SCALLOPS",
      price: 29,
      desc: "Saffron, celeriac puree, black pudding, olive oil",
    },
    {
      id: 4,
      category: "Mains",
      title: "PAN SEARED SEA BASS",
      price: 38,
      desc: "Saffron and mussel’s broth, new potatoes, edamame beans",
    },
    {
      id: 5,
      category: "Desserts",
      title: "CITRUS CURED SALMON",
      price: 41,
      desc: "Horseradish creme fraiche, beetroot mousse, oil",
    },
    {
      id: 6,
      category: "Starters",
      title: "BRAISED OX CHEEK RAVIOLI",
      price: 23,
      desc: "Mediterranean olives casserole, celeriac puree, mushrooms",
    },
  ];
};

const Menu = () => {
  const [activeTab, setActiveTab] = useState("Mains");

  const { data: menuItems, isLoading } = useQuery({
    queryKey: ["menuData"],
    queryFn: fetchMenuData,
  });

  const filteredItems = menuItems?.filter(
    (item) => item.category === activeTab
  );

  if (isLoading)
    return (
      <div className="h-96 flex justify-center items-center bg-[#050c10]">
        <span className="loading loading-spinner text-amber-500"></span>
      </div>
    );

  return (
    <>
      <section className="bg-[#050c10] text-white py-16 md:py-24 px-4 md:px-12 lg:px-24 relative overflow-hidden">
        {/* Background Subtle Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header Section */}
          <div className="text-center mb-10 md:mb-16">
            <p className="font-serif italic text-amber-500 text-lg md:text-xl mb-2">
              Special selection
            </p>
            <div className="flex items-center justify-center gap-4 md:gap-6">
              <div className="h-[1px] w-8 md:w-12 bg-amber-500/40"></div>
              <h2 className="text-2xl md:text-6xl font-light tracking-[0.2em] md:tracking-[0.3em] uppercase">
                From Our Menu
              </h2>
              <div className="h-[1px] w-8 md:w-12 bg-amber-500/40"></div>
            </div>
          </div>

          {/* DaisyUI Tabs for Categories - Optimized for Mobile */}
          <div className="flex justify-center mb-10 md:mb-16">
            <div className="flex bg-transparent border border-white/10 rounded-lg p-1 overflow-x-auto no-scrollbar max-w-full">
              {["Starters", "Mains", "Desserts"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 md:px-8 py-2 text-[10px] md:text-xs tracking-[0.2em] uppercase transition-all duration-300 whitespace-nowrap ${
                    activeTab === tab
                      ? "text-amber-500 bg-amber-500/10 rounded-md shadow-sm"
                      : "text-gray-500 hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Menu Grid - Adjusted spacing for mobile */}
          <motion.div
            layout
            className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 md:gap-x-20 gap-y-8 md:gap-y-12"
          >
            <AnimatePresence mode="wait">
              {filteredItems?.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="group cursor-pointer"
                >
                  <div className="flex justify-between items-end mb-1 md:mb-2">
                    <h3 className="text-base md:text-xl font-medium tracking-wider md:tracking-widest uppercase group-hover:text-amber-500 transition-colors duration-300">
                      {item.title}
                    </h3>
                    {/* Responsive Dotted Line - Hidden on very small screens if title is long */}
                    <div className="hidden sm:block flex-grow mx-4 mb-2 border-b border-dotted border-white/20"></div>
                    <span className="text-amber-500 font-bold text-base md:text-lg ml-2">
                      ${item.price}
                    </span>
                  </div>
                  <p className="text-gray-500 text-xs md:text-sm italic font-light tracking-wide leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* View All Button - Compact on Mobile */}
          <div className="mt-12 md:mt-20 text-center">
            <button className="relative px-8 md:px-12 py-3 md:py-4 group overflow-hidden border border-white/10">
              <span className="relative z-10 text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold group-hover:text-black transition-colors duration-300">
                View All Menu
              </span>
              <div className="absolute inset-0 bg-amber-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-i`n-out"></div>
            </button>
          </div>
        </div>
      </section>
      <SignatureSection />
    </>
  );
};

export default Menu;
