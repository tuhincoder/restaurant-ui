import React from "react";
import { motion } from "framer-motion";
import { Quote, Utensils, Award, Users } from "lucide-react";

const AboutUs = () => {
  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="bg-[#050c10] text-gray-200 font-sans overflow-hidden">
      {/* --- Section 1: Detailed Story & Dynamic Image (Top Priority) --- */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: Dynamic Image Composition [Inspired by Reference 1] */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center"
          >
            {/* Main Image */}
            <div className="relative w-4/5 aspect-[3/4] overflow-hidden rounded-sm shadow-2xl border border-white/5">
              <img
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000"
                alt="Chef's Craft"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110 hover:scale-100"
              />
            </div>
            {/* Secondary Floating Image */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -right-4 w-1/2 aspect-square border-[10px] border-[#050c10] overflow-hidden shadow-2xl"
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
            className="space-y-8"
          >
            <div className="space-y-2">
              <span className="font-serif italic text-amber-500 text-xl block">
                Our food philosophy
              </span>
              <h1 className="text-5xl md:text-7xl font-light tracking-[0.1em] text-white leading-tight uppercase">
                OUR <span className="font-bold text-amber-500">STORY</span>
              </h1>
            </div>

            <p className="text-lg leading-relaxed font-light text-gray-400 italic">
              "Cooking is an art, but all art requires knowing something about
              the techniques and materials."
            </p>

            <div className="space-y-6 text-gray-400 font-light leading-loose">
              <p>
                Founded on the principles of excellence and authenticity, our
                restaurant has been a beacon of culinary innovation for over two
                decades. We believe that every ingredient has a soul, and our
                mission is to bring that soul to your plate with precision and
                passion.
              </p>
              <p>
                Whether it's the locally sourced herbs or the finest cuts of
                meat, our chefs treat every element with the respect it
                deserves, ensuring a dining experience that transcends the
                ordinary.
              </p>
            </div>

            {/* Signature CTA */}
            <div className="pt-6">
              <button className="relative group px-10 py-4 overflow-hidden border-b-2 border-amber-500">
                <span className="relative z-10 text-xs tracking-[0.4em] font-bold uppercase text-white">
                  Read More
                </span>
                <div className="absolute inset-0 bg-amber-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Section 2: Stats Grid --- */}
      <section className="bg-white/5 py-20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { icon: <Utensils />, label: "Years Experience", value: "25+" },
            { icon: <Award />, label: "Michelin Stars", value: "02" },
            { icon: <Users />, label: "Master Chefs", value: "15" },
            { icon: <Quote />, label: "Happy Guests", value: "100k" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="text-center space-y-2"
            >
              <div className="text-amber-500 flex justify-center mb-4 opacity-70">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-bold text-white tracking-tight">
                {stat.value}
              </h3>
              <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- Section 3: Professional Philosophy --- */}
      <section className="py-24 bg-[#081218] px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <Quote className="mx-auto text-amber-500 opacity-20" size={64} />
          <h2 className="text-3xl md:text-5xl font-serif italic text-white leading-[1.6]">
            "Quality is not an act, it is a habit. We strive for perfection in
            every garnish, every pour, and every smile."
          </h2>
          <div className="flex justify-center gap-4 items-center">
            <div className="h-[1px] w-12 bg-amber-500"></div>
            <span className="text-xs tracking-[0.5em] uppercase text-amber-500 font-bold">
              The Executive Chef
            </span>
            <div className="h-[1px] w-12 bg-amber-500"></div>
          </div>
        </div>
      </section>

      {/* --- Section 4: Final Call to Action --- */}
      <section className="py-32 text-center border-t border-white/5">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="space-y-10"
        >
          <h2 className="text-4xl md:text-6xl font-light tracking-[0.3em] uppercase text-white">
            Join Our Table
          </h2>
          <button className="relative px-16 py-5 group overflow-hidden border border-amber-500">
            <span className="relative z-10 text-xs tracking-[0.5em] font-bold text-amber-500 group-hover:text-black transition-colors">
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
