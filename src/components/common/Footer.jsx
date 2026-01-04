import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaTripadvisor,
} from "react-icons/fa";
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

const PremiumFooter = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerLinks = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  return (
    <footer className="bg-[#051117] text-gray-400 py-16 md:py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 right-0 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-amber-900/10 blur-[100px] md:blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* --- Top Section: Newsletter (Mobile Responsive) --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/[0.03] backdrop-blur-md border border-white/10 p-8 md:p-12 mb-16 md:mb-24 rounded-3xl flex flex-col lg:flex-row items-center justify-between gap-10"
        >
          <div className="text-center lg:text-left">
            <h3 className="text-2xl md:text-3xl font-serif text-white mb-3 italic">
              Join our culinary journey
            </h3>
            <p className="text-[10px] md:text-xs tracking-[0.2em] text-gray-500 uppercase">
              Subscribe for exclusive offers and recipes
            </p>
          </div>

          <div className="flex w-full lg:w-auto max-w-md border-b border-amber-500/30 group focus-within:border-amber-500 transition-all items-center">
            <input
              type="email"
              placeholder="YOUR EMAIL ADDRESS"
              className="bg-transparent py-4 w-full outline-none text-white text-[10px] md:text-xs tracking-[0.3em] placeholder:text-gray-700"
            />
            <button className="p-2 text-amber-500 hover:text-white transition-colors">
              <Mail size={18} />
            </button>
          </div>
        </motion.div>

        {/* --- Middle Section: Main Content Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 lg:gap-8 items-start">
          {/* Column 1: Brand Identity */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <div className="relative group cursor-pointer">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-8px] border border-dashed border-amber-500/20 rounded-full"
              ></motion.div>
              <div className="w-24 h-24 border border-white/10 rounded-full flex flex-col items-center justify-center bg-[#051117] relative z-10">
                <span className="text-[7px] tracking-[0.3em] text-amber-500 uppercase">
                  Cocktail
                </span>
                <div className="text-xl my-1">✨</div>
                <span className="text-[7px] tracking-[0.3em] text-white uppercase">
                  Restro
                </span>
              </div>
            </div>
            <p className="mt-8 text-[11px] leading-relaxed tracking-widest opacity-50 max-w-[220px]">
              Crafting unforgettable dining experiences since 1994. Excellence
              in every plate.
            </p>
          </motion.div>

          {/* Column 2: Navigation Links */}
          <motion.div
            variants={staggerLinks}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h4 className="text-white text-xs font-bold tracking-[0.3em] uppercase mb-8">
              Explore
            </h4>
            <ul className="space-y-4 text-[10px] tracking-[0.2em] uppercase font-medium">
              {["About Us", "Our Menus", "Private Dining", "Chef Special"].map(
                (item) => (
                  <motion.li
                    key={item}
                    whileHover={{ x: 5, color: "#f59e0b" }}
                    className="transition-all cursor-pointer hover:text-amber-500"
                  >
                    {item}
                  </motion.li>
                )
              )}
            </ul>
          </motion.div>

          {/* Column 3: Contact & Hours */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h4 className="text-white text-xs font-bold tracking-[0.3em] uppercase mb-8">
              Contact
            </h4>
            <div className="space-y-6 text-[11px] tracking-widest leading-loose">
              <p className="opacity-80">
                Via Serlas 546, 6700 St.
                <br />
                Moritz, Switzerland
              </p>
              <div className="text-gray-500 space-y-1">
                <p>
                  Mon - Wed: <span className="text-white">11:00 - 21:00</span>
                </p>
                <p>
                  Thu - Sat: <span className="text-white">11:00 - 23:00</span>
                </p>
                <p>
                  Sun: <span className="text-amber-500">Closed</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Column 4: Social & Action */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center lg:items-end"
          >
            <h4 className="text-white text-xs font-bold tracking-[0.3em] uppercase mb-8">
              Follow Us
            </h4>
            <div className="flex gap-4 mb-10">
              {[FaFacebookF, FaInstagram, FaTwitter, FaTripadvisor].map(
                (Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ y: -5 }}
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-amber-500 hover:text-amber-500 transition-all bg-white/5"
                  >
                    <Icon size={14} />
                  </motion.a>
                )
              )}
            </div>
            <Link to="/reservation">
              <button className="group relative px-10 py-4 overflow-hidden border border-amber-500/50 rounded-full lg:rounded-none">
                <span className="relative z-10 text-[10px] tracking-[0.3em] uppercase text-white group-hover:text-black transition-colors duration-500 font-bold">
                  Book a Table
                </span>
                <div className="absolute inset-0 bg-amber-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
              </button>
            </Link>
          </motion.div>
        </div>

        {/* --- Bottom Section: Copyright (Stack on Mobile) --- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] tracking-[0.3em] uppercase text-gray-600 text-center"
        >
          <p>© 2026 Foodix Luxury Dining Group</p>
          <div className="flex gap-6 md:gap-10">
            <span className="hover:text-white cursor-pointer transition-colors">
              Legal Notice
            </span>
            <span className="hover:text-white cursor-pointer transition-colors">
              Privacy Policy
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default PremiumFooter;
