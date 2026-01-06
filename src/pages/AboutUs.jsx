import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { Quote, Utensils, Award, Users } from "lucide-react";
import { Helmet } from "react-helmet-async";

// --- Animated Number Component ---
const AnimatedNumber = ({ value }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // সংখ্যা থেকে শুধু নম্বর আলাদা করা (যেমন: "25+" থেকে 25)
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
  const suffix = value.replace(/[0-9]/g, ""); // যেমন: "+", "k"

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(numericValue);
    }
  }, [isInView, numericValue, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest) + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
};

const AboutUs = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const stats = [
    { icon: <Utensils size={20} />, label: "Experience", value: "25+" },
    { icon: <Award size={20} />, label: "Michelin Stars", value: "02" },
    { icon: <Users size={20} />, label: "Master Chefs", value: "15" },
    { icon: <Quote size={20} />, label: "Happy Guests", value: "100k" },
  ];

  return (
    <>
      <Helmet>
        <title>About Us | Restaurant</title>
      </Helmet>

      <div className="bg-[#051117] text-gray-200 font-sans overflow-hidden">
        {/* --- Section 1: Detailed Story --- */}
        <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
          {/* আপনার আগের ইমেজ এবং স্টোরি কোড এখানে থাকবে (অপরিবর্তিত) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* ... (Previous Story Content) ... */}
          </div>
        </section>

        {/* --- Section 2: Stats Grid with Animation --- */}
        <section className="bg-white/[0.02] py-16 md:py-20 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center space-y-2"
              >
                <div className="text-amber-500 flex justify-center mb-2 opacity-60">
                  {stat.icon}
                </div>

                {/* এখানে এনিমেটেড নম্বর কল করা হয়েছে */}
                <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                  <AnimatedNumber value={stat.value} />
                </h3>

                <p className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- Section 3 & 4 (অপরিবর্তিত থাকবে) --- */}
      </div>
    </>
  );
};

export default AboutUs;
