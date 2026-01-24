import React from "react";
import { motion } from "framer-motion";
import {
  Quote,
  Utensils,
  Award,
  Users,
  Heart,
  Star,
  ShieldCheck,
} from "lucide-react";
import { Helmet } from "react-helmet";
import MenuPicture from "./menu/MenuPicture";
import { Link } from "react-router-dom";

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
    <>
      <Helmet>
        <title>About Our Story | Premium Family Pizza</title>
        <meta
          name="description"
          content="Discover the legacy of our restaurant, where culinary excellence meets genuine hospitality."
        />
      </Helmet>

      <div className="pt-24">
        <MenuPicture />
      </div>

      <div className="bg-[#051117] text-gray-200 font-sans overflow-hidden">
        {/* --- Section: Welcome Section (Compact & Responsive) --- */}
        <section className="py-12 md:py-20 px-6 border-b border-white/5">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-amber-500 font-bold tracking-[0.3em] text-[10px] uppercase block mb-2">
                Our Heritage
              </span>
              <h1 className="text-3xl md:text-6xl lg:text-7xl font-serif italic text-white leading-tight">
                Welcome to Our{" "}
                <span className="text-amber-500">Family Pizza</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <p className="text-sm md:text-xl text-gray-400 font-light leading-relaxed">
                <span className="md:hidden">
                  Where every slice is a piece of our heart and every guest is
                  family.
                </span>
                <span className="hidden md:inline">
                  At our table, you're not just a guest—you're a part of a
                  legacy built on flour, passion, and the joy of sharing the
                  perfect slice.
                </span>
              </p>
            </motion.div>
          </div>
        </section>

        {/* --- Section 1: Detailed Story --- */}
        <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative flex justify-center lg:justify-start"
            >
              <div className="relative w-full md:w-4/5 aspect-[3/4] overflow-hidden rounded-sm shadow-2xl border border-white/5">
                <img
                  src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000"
                  alt="Chef's Craft"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110 hover:scale-100"
                />
              </div>
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-6 -right-2 md:-right-4 w-2/5 md:w-1/2 aspect-square border-[6px] md:border-[10px] border-[#050c10] overflow-hidden shadow-2xl z-10"
              >
                <img
                  src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1000"
                  alt="Fine Dining"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              viewport={{ once: true }}
              className="space-y-6 text-center lg:text-left pt-10 lg:pt-0"
            >
              <span className="font-serif italic text-amber-500 text-lg md:text-xl block tracking-wide">
                Our Legacy
              </span>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-extralight tracking-[0.1em] text-white leading-tight uppercase">
                OUR <span className="font-bold text-amber-500">STORY</span>
              </h2>
              <p className="text-base md:text-lg leading-relaxed font-light text-gray-400 italic max-w-xl mx-auto lg:mx-0 border-l-2 border-amber-500/30 pl-4">
                "We don't just cook; we create experiences that resonate with
                the soul."
              </p>
              <div className="space-y-4 text-sm md:text-base text-gray-400 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
                <p>
                  Founded on the principles of excellence and authenticity, our
                  journey began with a simple dream: to serve meals that feel
                  like a celebration of life.
                </p>
                <p>
                  Every ingredient is hand-picked, every recipe is a secret
                  passed down through generations, and every guest is treated
                  like part of our family.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- Section 2: Core Values --- */}
        <section className="py-20 px-6 max-w-7xl mx-auto border-t border-white/5">
          <div className="text-center mb-16">
            <span className="text-amber-500 font-bold tracking-[0.3em] text-[10px] uppercase">
              The Foundation
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-white mt-4 italic">
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: <ShieldCheck size={32} />,
                title: "Absolute Purity",
                desc: "We source only organic, locally-grown ingredients for quality.",
              },
              {
                icon: <Heart size={32} />,
                title: "Genuine Warmth",
                desc: "Hospitality is in our DNA. We treat every guest with love.",
              },
              {
                icon: <Star size={32} />,
                title: "Culinary Mastery",
                desc: "Our chefs blend traditional secrets with modern techniques.",
              },
            ].map((value, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="p-10 bg-white/[0.02] border border-white/5 rounded-3xl text-center group hover:border-amber-500/30 transition-all duration-500"
              >
                <div className="text-amber-500 flex justify-center mb-6 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h4 className="text-white font-bold tracking-widest uppercase text-sm mb-4 group-hover:text-amber-500">
                  {value.title}
                </h4>
                <p className="text-gray-500 text-sm font-light leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- Section 3: Stats Grid --- */}
        <section className="bg-white/[0.02] py-16 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-y-12">
            {[
              {
                icon: <Utensils size={20} />,
                label: "Years of Passion",
                value: "20+",
              },
              { icon: <Award size={20} />, label: "Awards Won", value: "12" },
              {
                icon: <Users size={20} />,
                label: "Team Members",
                value: "45+",
              },
              {
                icon: <Quote size={20} />,
                label: "Happy Diners",
                value: "150k",
              },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-center space-y-2"
              >
                <div className="text-amber-500 flex justify-center mb-2 opacity-60">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-white">{stat.value}</h3>
                <p className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- Section 4: Philosophy Quote --- */}
        <section className="py-20 md:py-32 bg-[#081218] px-6 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
            <Quote className="mx-auto text-amber-500 opacity-20 w-12 h-12" />
            <h2 className="text-2xl md:text-4xl font-serif italic text-white leading-relaxed">
              "Quality is never an accident; it is always the result of sincere
              effort and skillful execution."
            </h2>
          </div>
        </section>

        {/* --- Section 5: Call to Action --- */}
        <section className="py-20 text-center border-t border-white/5">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="space-y-8 px-6"
          >
            <h2 className="text-3xl md:text-5xl font-extralight tracking-[0.2em] uppercase text-white">
              Visit Us Today
            </h2>
            <button className="relative px-12 py-5 group overflow-hidden border border-amber-500 transition-all">
              <Link to={"/reservation"}>
                <span className="relative z-10 text-[10px] tracking-[0.5em] font-black text-amber-500 group-hover:text-black transition-colors uppercase">
                  Book Your Table
                </span>
                <div className="absolute inset-0 bg-amber-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
              </Link>
            </button>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
