import React from "react";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { ArrowRight, Quote } from "lucide-react";
import ceoimg1 from "../assets/images/ceoSection/ceoImg.jpg";
import ceoWithRestaurantImg from "../assets/images/ceoSection/ceowithrestaurant.jpg";

// Mock API Call
const fetchCeoSectionData = async () => {
  return {
    subtitle: "Our Culinary Philosophy",
    title: "RESTAURANT CEO TIPS",
    description:
      "Mastering the art of flavor requires patience and precision. Our CEO believes that every ingredient tells a story, and every plate is a canvas for emotion and excellence.",
    ctaText: "EXPLORE MORE",
  };
};

const LuxuryCeoSection = () => {
  // const [restaurantData] = useRestaurant();
  // console.log(restaurantData);
  const { data } = useQuery({
    queryKey: ["premiumCeoData"],
    queryFn: fetchCeoSectionData,
  });

  // if (isLoading)
  //   return (
  //     <div className="h-96 flex justify-center items-center bg-[#051117]">
  //       <span className="loading loading-spinner text-amber-500 w-12"></span>
  //     </div>
  //   );

  return (
    <section className="relative bg-[#051117] text-white py-20 lg:py-10 px-6 overflow-hidden">
      {/* Dynamic Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-48 md:w-96 h-48 md:h-96 bg-amber-900/30 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-16 items-center">
          {/* Column 1: CEO Image with Floating Quote */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-[450px] md:h-[550px] order-1"
          >
            <div className="absolute -inset-3 border border-amber-500/20 rounded-xl translate-x-2 translate-y-2"></div>
            <div className="relative h-full overflow-hidden rounded-xl shadow-2xl">
              <img
                src={ceoimg1}
                alt="CEO"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute bottom-6 left-6 bg-amber-500 p-3 rounded-lg text-black">
                <Quote size={20} fill="currentColor" />
              </div>
            </div>
          </motion.div>

          {/* Column 2: Food Action (Hidden on Small Mobile, Visible on Tablet+) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[550px] shadow-2xl hidden md:block order-3 lg:order-2"
          >
            <div className="relative h-full rounded-xl overflow-hidden group">
              <img
                src={ceoWithRestaurantImg}
                alt="Food"
                className="w-full h-full object-cover brightness-50 group-hover:brightness-90 group-hover:scale-110 transition duration-1000"
              />
              <div className="absolute inset-0 border-[15px] border-black/20 pointer-events-none"></div>
            </div>
          </motion.div>

          {/* Column 3: Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-3"
          >
            <span className="font-serif italic text-amber-500 text-xl md:text-2xl mb-4">
              {data.subtitle}
            </span>

            <h2 className="text-3xl md:text-5xl font-light tracking-[0.15em] leading-tight uppercase mb-8">
              {data.title.split(" ").map((word, i) => (
                <span
                  key={i}
                  className={
                    i === 1 ? "font-bold text-amber-500 block md:inline" : ""
                  }
                >
                  {word}{" "}
                </span>
              ))}
            </h2>

            <p className="text-gray-400 text-sm md:text-lg font-light leading-relaxed mb-10 max-w-md border-l-2 border-amber-500/20 pl-6 lg:pl-0 lg:border-none">
              {data.description}
            </p>

            {/* Premium Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-4 bg-transparent border border-amber-500/50 px-8 py-4 rounded-full hover:bg-amber-500 transition-all duration-500"
            >
              <span className="text-[10px] md:text-xs tracking-[0.3em] font-bold group-hover:text-black">
                {data.ctaText}
              </span>
              <div className="w-8 h-[1px] bg-amber-500 group-hover:bg-black transition-all"></div>
              <ArrowRight
                size={16}
                className="text-amber-500 group-hover:text-black transition-all"
              />
            </motion.button>

            {/* Visual Indicators for Mobile UX */}
            <div className="flex gap-2 mt-12 md:hidden">
              <div className="w-12 h-1 bg-amber-500 rounded-full"></div>
              <div className="w-2 h-1 bg-white/20 rounded-full"></div>
              <div className="w-2 h-1 bg-white/20 rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LuxuryCeoSection;
