import React from "react";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion"; // Animation er jonno (Optional kintu sundor dekhay)

// Mock API Call
const fetchCeoSectionData = async () => {
  return {
    ceoImage:
      "https://images.unsplash.com/photo-1577214495773-51465474ff21?q=80&w=1000&auto=format&fit=crop",
    foodImage:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000&auto=format&fit=crop",
    subtitle: "Our Culinary Philosophy",
    title: "RESTAURANT CEO TIPS",
    description:
      "Mastering the art of flavor requires patience and precision. Our CEO believes that every ingredient tells a story, and every plate is a canvas for emotion and excellence.",
    ctaText: "EXPLORE MORE",
  };
};

const LuxuryCeoSection = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["premiumCeoData"],
    queryFn: fetchCeoSectionData,
  });

  if (isLoading)
    return (
      <div className="h-screen flex justify-center items-center bg-[#080808]">
        <span className="loading loading-spinner text-amber-500 w-16"></span>
      </div>
    );

  return (
    <section className="relative bg-[#080808] text-white py-24 px-6 lg:px-20 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-amber-900 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-amber-900 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
          {/* Column 1: CEO Image with Decorative Frame */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative group h-[550px]"
          >
            <div className="absolute -inset-4 border border-amber-500/20 translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
            <div className="relative h-full overflow-hidden shadow-2xl">
              <img
                src={data.ceoImage}
                alt="CEO"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
              />
            </div>
          </motion.div>

          {/* Column 2: Food Action Image */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[550px] shadow-2xl hidden md:block"
          >
            <img
              src={data.foodImage}
              alt="Food"
              className="w-full h-full object-cover brightness-75 hover:brightness-100 transition duration-500"
            />
          </motion.div>

          {/* Column 3: Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Elegant Subtitle */}
            <span className="font-serif italic text-amber-500 text-2xl mb-4 tracking-wide block">
              {data.subtitle}
            </span>

            {/* Main Heading with Golden Lines */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-8 w-full">
              <div className="h-[1px] w-8 bg-amber-600"></div>
              <h2 className="text-4xl md:text-5xl font-extralight tracking-[0.25em] leading-tight uppercase">
                {data.title.split(" ").map((word, i) => (
                  <span
                    key={i}
                    className={i === 1 ? "font-semibold text-amber-500" : ""}
                  >
                    {word}{" "}
                  </span>
                ))}
              </h2>
              <div className="h-[1px] w-8 bg-amber-600 lg:hidden"></div>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed mb-10 max-w-md">
              {data.description}
            </p>

            {/* Custom Luxury Button */}
            <button className="group relative overflow-hidden bg-transparent border border-amber-500/30 px-10 py-4 transition-all duration-300">
              <span className="relative z-10 text-sm tracking-[0.4em] font-medium group-hover:text-black transition-colors duration-300">
                {data.ctaText}
              </span>
              {/* Button Hover Fill */}
              <div className="absolute inset-0 bg-amber-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            </button>

            {/* Social Link Indicators (Optional extra beauty) */}
            <div className="mt-12 flex gap-6 opacity-30">
              <div className="w-10 h-[1px] bg-white"></div>
              <div className="w-2 h-2 rounded-full bg-amber-500"></div>
              <div className="w-10 h-[1px] bg-white"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LuxuryCeoSection;
