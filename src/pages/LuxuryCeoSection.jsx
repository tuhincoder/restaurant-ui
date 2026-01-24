import React from "react";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { ArrowRight, Quote } from "lucide-react";
import ceoimg1 from "../assets/images/ceoSection/ceoImg.jpg";
import ceoWithRestaurantImg from "../assets/images/ceoSection/ceowithrestaurant.jpg";
import { Link } from "react-router-dom";

const fetchCeoSectionData = async () => {
  return {
    subtitle: "A Message From The Heart",
    title: "THE OWNER'S PROMISE",
    description:
      "At our table, every guest is treated like family. We believe that great dining is not just about the food, but about the moments shared and the memories created. From our kitchen to your plate, we are committed to excellence, quality, and the warmth of genuine hospitality.",
    ctaText: "EXPLORE OUR STORY",
  };
};

const LuxuryCeoSection = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["premiumCeoData"],
    queryFn: fetchCeoSectionData,
  });

  if (isLoading)
    return (
      <div className="h-96 flex justify-center items-center bg-[#051117]">
        <span className="loading loading-spinner text-amber-500 w-12"></span>
      </div>
    );

  return (
    <section className="relative bg-[#051117] text-white py-20 lg:py-24 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-48 md:w-96 h-48 md:h-96 bg-amber-900/30 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-16 items-center">
          {/* Column 1: Owner Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] md:h-[550px] order-1"
          >
            <div className="absolute -inset-3 border border-amber-500/20 rounded-xl translate-x-2 translate-y-2"></div>
            <div className="relative h-full overflow-hidden rounded-xl shadow-2xl">
              <img
                src={ceoimg1}
                alt="Owner"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute bottom-6 left-6 bg-amber-500 p-4 rounded-lg text-black shadow-2xl">
                <Quote size={24} fill="currentColor" />
              </div>
            </div>
          </motion.div>

          {/* Column 2: Atmosphere Visual (Hidden on Mobile) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[550px] shadow-2xl hidden lg:block order-2"
          >
            <div className="relative h-full rounded-xl overflow-hidden group">
              <img
                src={ceoWithRestaurantImg}
                alt="Restaurant Atmosphere"
                className="w-full h-full object-cover brightness-50 group-hover:brightness-90 group-hover:scale-110 transition duration-1000"
              />
              <div className="absolute inset-0 border-[15px] border-white/5 pointer-events-none"></div>
              <div className="absolute bottom-10 left-10 right-10">
                <p className="text-amber-500 font-serif italic text-lg opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  "Hospitality is the heart of our story."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Column 3: Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-3 pt-6 lg:pt-0"
          >
            <span className="font-serif italic text-amber-500 text-xl mb-4 tracking-wide">
              {data.subtitle}
            </span>

            <h2 className="text-3xl md:text-5xl font-light tracking-tight leading-tight uppercase mb-8">
              {data.title.split(" ").map((word, i) => (
                <span
                  key={i}
                  className={
                    word.includes("OWNER") || word.includes("PROMISE")
                      ? "font-bold text-amber-500"
                      : ""
                  }
                >
                  {word}{" "}
                </span>
              ))}
            </h2>

            <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed mb-10 max-w-md italic border-l-2 lg:border-none border-amber-500/20 pl-4 lg:pl-0">
              "{data.description}"
            </p>

            <div className="mb-12 group cursor-default">
              <p className="text-white font-serif text-2xl tracking-[0.2em] uppercase">
                The Owner
              </p>
              <div className="h-[1px] w-12 bg-amber-500 mt-2 mx-auto lg:mx-0 group-hover:w-24 transition-all duration-500"></div>
            </div>

            {/* --- Updated Responsive Action Button --- */}
            <Link to="/aboutUs" className="w-full sm:w-auto">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center justify-center gap-4 bg-transparent border border-amber-500/40 px-8 py-4 rounded-full hover:bg-amber-500 transition-all duration-500 shadow-lg hover:shadow-amber-500/20 cursor-pointer"
              >
                <span className="text-[10px] md:text-xs tracking-[0.4em] font-black text-white group-hover:text-black transition-colors uppercase">
                  {data.ctaText}
                </span>
                <ArrowRight
                  size={18}
                  className="text-amber-500 group-hover:text-black group-hover:translate-x-2 transition-all"
                />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LuxuryCeoSection;
