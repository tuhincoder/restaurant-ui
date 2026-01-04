import React from "react";
import { motion } from "framer-motion";
import { Quote, Utensils, Award, Users } from "lucide-react";

const AboutUs = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="bg-[#051117] text-gray-200 font-sans overflow-hidden">
      {/* --- Section 1: Detailed Story & Dynamic Image --- */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left: Dynamic Image (Mobile Optimized) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative flex justify-center lg:justify-start"
          >
            {/* Main Image */}
            <div className="relative w-full md:w-4/5 aspect-[3/4] overflow-hidden rounded-sm shadow-2xl border border-white/5">
              <img
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000"
                alt="Chef's Craft"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110 hover:scale-100"
              />
            </div>

            {/* Secondary Floating Image (Adjusted for Mobile) */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-2 md:-right-4 w-2/5 md:w-1/2 aspect-square border-[6px] md:border-[10px] border-[#050c10] overflow-hidden shadow-2xl z-10"
            >
              <img
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1000"
                alt="Detailed Food"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Right: Detailed Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8 text-center lg:text-left pt-10 lg:pt-0"
          >
            <div className="space-y-2">
              <span className="font-serif italic text-amber-500 text-lg md:text-xl block tracking-wide">
                Our food philosophy
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extralight tracking-[0.1em] text-white leading-tight uppercase">
                OUR <span className="font-bold text-amber-500">STORY</span>
              </h1>
            </div>

            <p className="text-base md:text-lg leading-relaxed font-light text-gray-400 italic max-w-xl mx-auto lg:mx-0">
              "Cooking is an art, but all art requires knowing something about
              the techniques and materials."
            </p>

            <div className="space-y-4 md:space-y-6 text-sm md:text-base text-gray-400 font-light leading-relaxed md:leading-loose max-w-2xl mx-auto lg:mx-0">
              <p>
                Founded on the principles of excellence and authenticity, our
                restaurant has been a beacon of culinary innovation for over two
                decades. Every ingredient has a soul, and our mission is to
                bring that to your plate with precision.
              </p>
              <p className="hidden md:block">
                Whether it's the locally sourced herbs or the finest cuts of
                meat, our chefs treat every element with the respect it
                deserves.
              </p>
            </div>

            <div className="pt-4">
              <button className="relative group px-8 md:px-10 py-3 md:py-4 overflow-hidden border-b-2 border-amber-500">
                <span className="relative z-10 text-[10px] md:text-xs tracking-[0.3em] font-bold uppercase text-white">
                  Read More
                </span>
                <div className="absolute inset-0 bg-amber-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Section 2: Stats Grid (2 columns on Mobile) --- */}
      <section className="bg-white/[0.02] py-16 md:py-20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {[
            { icon: <Utensils size={20} />, label: "Experience", value: "25+" },
            { icon: <Award size={20} />, label: "Michelin Stars", value: "02" },
            { icon: <Users size={20} />, label: "Master Chefs", value: "15" },
            { icon: <Quote size={20} />, label: "Happy Guests", value: "100k" },
          ].map((stat, i) => (
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
              <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                {stat.value}
              </h3>
              <p className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- Section 3: Philosophy (Text size optimized) --- */}
      <section className="py-20 md:py-32 bg-[#081218] px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8 md:space-y-12">
          <Quote className="mx-auto text-amber-500 opacity-20 w-12 h-12 md:w-16 md:h-16" />
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif italic text-white leading-relaxed md:leading-[1.6]">
            "Quality is not an act, it is a habit. We strive for perfection in
            every garnish, every pour, and every smile."
          </h2>
          <div className="flex justify-center gap-4 items-center pt-4">
            <div className="h-[1px] w-8 md:w-12 bg-amber-500/50"></div>
            <span className="text-[10px] md:text-xs tracking-[0.4em] uppercase text-amber-500 font-bold">
              The Executive Chef
            </span>
            <div className="h-[1px] w-8 md:w-12 bg-amber-500/50"></div>
          </div>
        </div>
      </section>

      {/* --- Section 4: Call to Action --- */}
      <section className="py-24 md:py-32 text-center border-t border-white/5">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-10 px-6"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extralight tracking-[0.2em] uppercase text-white">
            Join Our Table
          </h2>
          <button className="relative px-10 md:px-16 py-4 md:py-5 group overflow-hidden border border-amber-500 transition-all active:scale-95">
            <span className="relative z-10 text-[10px] md:text-xs tracking-[0.4em] font-bold text-amber-500 group-hover:text-black transition-colors">
              Book a Reservation
            </span>
            <div className="absolute inset-0 bg-amber-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutUs;
