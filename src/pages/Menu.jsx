import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useMenu from "@/hooks/useMenu";
import Loading from "@/components/loader/Loading";
import { Helmet } from "react-helmet-async";

// SignatureSection import thakle thakbe, na thakle bad diye test korben

const Menu = () => {
  const [activeTab, setActiveTab] = useState("Mains");
  const [menu, isLoading] = useMenu();

  // const { data: menuItems } = useQuery({
  //   queryKey: ["menuData"],
  //   queryFn: fetchMenuData,
  // });
  // console.log(menuItems);
  const filteredItems = menu?.filter((item) => item.category === activeTab);
  console.log(filteredItems);

  if (isLoading) return <Loading />;

  return (
    <>
      <Helmet>
        <title>Menu | Restaurant</title>
        <meta name="description" content="Explore our seasonal menu" />
      </Helmet>
      <section className="bg-[#051117] text-white py-16 md:py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header Section */}
          <div className="text-center mb-12">
            <p className="font-serif italic text-amber-500 text-lg mb-2">
              Special selection
            </p>
            <h2 className="text-3xl md:text-5xl font-light tracking-[0.2em] uppercase">
              From Our Menu
            </h2>
            <div className="h-[1px] w-12 bg-amber-500/40 mx-auto mt-4"></div>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-16">
            <div className="flex border border-white/5 rounded-full p-1.5 bg-white/[0.02]">
              {["Starters", "Mains", "Desserts"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 md:px-10 py-2.5 text-[10px] md:text-xs tracking-[0.2em] uppercase transition-all duration-500 rounded-full ${
                    activeTab === tab
                      ? "text-black bg-amber-500 shadow-lg"
                      : "text-gray-500 hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* --- Optimized Menu Grid --- */}
          <motion.div
            layout
            className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-10"
          >
            <AnimatePresence mode="wait">
              {filteredItems?.map((item, index) => (
                <motion.div
                  key={`${item.id}-${index}`} // unique key optimization
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group"
                >
                  <div className="flex items-baseline gap-2 mb-2">
                    {/* Title */}
                    <h3 className="text-sm md:text-base font-bold tracking-widest uppercase group-hover:text-amber-500 transition-colors duration-300 shrink-0">
                      {item.title}
                    </h3>

                    {/* Dotted Divider (এটি এখন সব স্ক্রিনেই সুন্দর থাকবে) */}
                    <div className="flex-grow border-b border-dotted border-white/20 h-0 translate-y-[-4px]"></div>

                    {/* Price */}
                    <span className="text-amber-500 font-bold text-sm md:text-base tracking-tighter shrink-0">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-500 text-[11px] md:text-sm italic font-light tracking-wide leading-relaxed max-w-[90%]">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* View All Button */}
          <div className="mt-20 text-center">
            <button className="relative px-12 py-4 group overflow-hidden border border-amber-500/20 rounded-sm">
              <span className="relative z-10 text-[10px] tracking-[0.4em] uppercase font-bold text-white group-hover:text-black transition-colors duration-500">
                Explore Full Menu
              </span>
              <div className="absolute inset-0 bg-amber-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

// Mock data update for better testing
// const fetchMenuData = async () => {
//   return [
//     {
//       id: 1,
//       category: "Mains",
//       title: "BEEF BURGER MEAL",
//       price: 32,
//       desc: "Classic greek salad, barrel aged feta cheese, bread",
//     },
//     {
//       id: 2,
//       category: "Mains",
//       title: "ROASTED LAMB RUMP",
//       price: 25,
//       desc: "Grilled lamb cutlets, pomegranate glaze, butternut squash",
//     },
//     {
//       id: 3,
//       category: "Starters",
//       title: "PAN SEARED SCALLOPS",
//       price: 29,
//       desc: "Saffron, celeriac puree, black pudding, olive oil",
//     },
//     {
//       id: 4,
//       category: "Mains",
//       title: "PAN SEARED SEA BASS",
//       price: 38,
//       desc: "Saffron and mussel’s broth, new potatoes, edamame beans",
//     },
//     {
//       id: 5,
//       category: "Desserts",
//       title: "CITRUS CURED SALMON",
//       price: 41,
//       desc: "Horseradish creme fraiche, beetroot mousse, oil",
//     },
//     {
//       id: 6,
//       category: "Starters",
//       title: "BRAISED OX CHEEK RAVIOLI",
//       price: 23,
//       desc: "Mediterranean olives casserole, celeriac puree, mushrooms",
//     },
//   ];
// };

export default Menu;
