import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaTripadvisor,
} from "react-icons/fa";
import { Mail } from "lucide-react"; // lucide-react install thakle bhalo

const PremiumFooter = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
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
    <footer className="bg-[#051117] text-gray-400 py-20 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-amber-900/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* --- Top Section: Newsletter --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-12 mb-20 rounded-2xl flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          <div className="text-center lg:text-left">
            <h3 className="text-2xl md:text-3xl font-serif text-white mb-2 italic">
              Join our culinary journey
            </h3>
            <p className="text-sm tracking-widest text-gray-500 uppercase">
              Subscribe for exclusive offers and recipes
            </p>
          </div>
          <div className="flex w-full lg:w-auto max-w-md border-b border-amber-500/50 group focus-within:border-amber-500 transition-all">
            <input
              type="email"
              placeholder="YOUR EMAIL ADDRESS"
              className="bg-transparent py-4 w-full outline-none text-white text-xs tracking-widest"
            />
            <button className="px-4 text-amber-500 hover:text-white transition-colors">
              <Mail size={20} />
            </button>
          </div>
        </motion.div>

        {/* --- Middle Section: Main Content --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8">
          {/* Column 1: Brand Identity */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            className="flex flex-col items-center lg:items-start"
          >
            <div className="relative group cursor-pointer">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-10px] border border-dashed border-amber-500/30 rounded-full"
              ></motion.div>
              <div className="w-28 h-28 border border-white/10 rounded-full flex flex-col items-center justify-center bg-[#051117] relative z-10">
                <span className="text-[8px] tracking-[0.4em] text-amber-500 uppercase">
                  Cocktail
                </span>
                <div className="text-2xl my-1">✨</div>
                <span className="text-[8px] tracking-[0.4em] text-white uppercase">
                  Restaurant
                </span>
              </div>
            </div>
            <p className="mt-8 text-xs leading-relaxed text-center lg:text-left tracking-wide opacity-60 max-w-[200px]">
              Crafting unforgettable dining experiences since 1994. Excellence
              in every plate.
            </p>
          </motion.div>

          {/* Column 2: Navigation Links */}
          <motion.div
            variants={staggerLinks}
            initial="hidden"
            whileInView="visible"
            className="text-center lg:text-left"
          >
            <h4 className="text-white text-sm font-bold tracking-[0.3em] uppercase mb-8 bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">
              Explore
            </h4>
            <ul className="space-y-4 text-[11px] tracking-[0.3em] uppercase font-medium">
              {[
                "About Us",
                "Our Menus",
                "Private Dining",
                "Chef Special",
                "Gift Cards",
              ].map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 5, color: "#f59e0b" }}
                  className="transition-all cursor-pointer"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Contact & Hours */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            className="text-center lg:text-left"
          >
            <h4 className="text-white text-sm font-bold tracking-[0.3em] uppercase mb-8">
              Contact
            </h4>
            <div className="space-y-6 text-xs tracking-widest leading-loose">
              <p>
                Via Serlas 546, 6700 St.
                <br />
                Moritz, Switzerland
              </p>
              <div className="text-gray-500">
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

          {/* Column 4: Experience & Social */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            className="flex flex-col items-center lg:items-end"
          >
            <h4 className="text-white text-sm font-bold tracking-[0.3em] uppercase mb-8 lg:text-right">
              Follow Us
            </h4>
            <div className="flex gap-4 mb-10">
              {[FaFacebookF, FaInstagram, FaTwitter, FaTripadvisor].map(
                (Icon, i) => (
                  <motion.a
                    key={i}
                    whileHover={{ y: -5, scale: 1.1 }}
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-amber-500 hover:text-amber-500 transition-all"
                  >
                    <Icon size={14} />
                  </motion.a>
                )
              )}
            </div>
            <button className="relative group px-8 py-3 overflow-hidden border border-amber-500/50">
              <span className="relative z-10 text-[10px] tracking-[0.4em] uppercase text-white group-hover:text-black transition-colors duration-300">
                Book a Table
              </span>
              <div className="absolute inset-0 bg-amber-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            </button>
          </motion.div>
        </div>

        {/* --- Bottom Section: Copyright --- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] tracking-[0.5em] uppercase text-gray-600"
        >
          <p>© 2025 Luxury Dining Group</p>
          <div className="flex gap-8">
            <span className="hover:text-white cursor-pointer transition-colors">
              Legal Notice
            </span>
            <span className="hover:text-white cursor-pointer transition-colors">
              Cookie Policy
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default PremiumFooter;
