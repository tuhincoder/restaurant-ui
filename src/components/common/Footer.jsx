import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Mail, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
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
        {/* --- Top Section: Newsletter --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/[0.03] backdrop-blur-md border border-white/10 p-8 md:p-12 mb-16 md:mb-24 rounded-3xl flex flex-col lg:flex-row items-center justify-between gap-10"
        >
          <div className="text-center lg:text-left">
            <h3 className="text-2xl md:text-3xl font-serif text-white mb-3 italic">
              Join the Pizza Family
            </h3>
            <p className="text-[10px] md:text-xs tracking-[0.2em] text-gray-500 uppercase">
              Subscribe for exclusive offers and fresh updates
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

        {/* --- Middle Section: Content Grid --- */}
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
              <div className="w-24 h-24 border border-white/10 rounded-full flex flex-col items-center justify-center bg-[#051117] relative z-10 shadow-2xl">
                <span className="text-[7px] tracking-[0.3em] text-amber-500 uppercase font-bold">
                  Your Family
                </span>
                <div className="text-xl my-1">🍕</div>
                <span className="text-[7px] tracking-[0.3em] text-white uppercase font-bold">
                  Pizza
                </span>
              </div>
            </div>
            <p className="mt-8 text-[11px] leading-relaxed tracking-widest opacity-50 max-w-[220px]">
              Crafting authentic flavors and family traditions in every slice.
              Serving Kenna, WV with pride.
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
              {["About Us", "Our Menu", "Hours", "Contact Us"].map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 5, color: "#f59e0b" }}
                  className="transition-all cursor-pointer hover:text-amber-500"
                >
                  <Link to={item === "Hours" ? "/hours" : "#"}>{item}</Link>
                </motion.li>
              ))}
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
              Visit Us
            </h4>
            <div className="space-y-6 text-[11px] tracking-widest leading-loose">
              <div className="opacity-80 flex flex-col items-center lg:items-start gap-1">
                <span className="flex items-center gap-2 text-amber-500">
                  <MapPin size={12} />{" "}
                  <span className="text-gray-300">Kenna, WV</span>
                </span>
                <p>975 Kentuck Rd, United States</p>
              </div>

              <div className="text-gray-500 space-y-1">
                <p className="flex items-center justify-center lg:justify-start gap-2">
                  <Clock size={12} className="text-amber-500/50" />
                  Daily: <span className="text-white">11:00 - 21:00</span>
                </p>
                <p>
                  Monday:{" "}
                  <span className="text-amber-600 italic font-medium">
                    Closed (Special Holidays)
                  </span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Column 4: Social & Action (Links Updated) */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center lg:items-end"
          >
            <h4 className="text-white text-xs font-bold tracking-[0.3em] uppercase mb-8">
              Connect
            </h4>
            <div className="flex gap-4 mb-8">
              {/* Facebook Link */}
              <motion.a
                href="https://www.facebook.com/p/Your-Family-Pizza-61578005693524"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, borderColor: "#f59e0b", color: "#f59e0b" }}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-all bg-white/5"
              >
                <FaFacebookF size={14} />
              </motion.a>

              {/* Instagram Link */}
              <motion.a
                href="https://www.instagram.com/YourFamilyPizza"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, borderColor: "#f59e0b", color: "#f59e0b" }}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-all bg-white/5"
              >
                <FaInstagram size={14} />
              </motion.a>

              {/* Twitter or Other (Optional) */}
              <motion.a
                href="#"
                whileHover={{ y: -5, borderColor: "#f59e0b", color: "#f59e0b" }}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-all bg-white/5"
              >
                <FaTwitter size={14} />
              </motion.a>
            </div>

            <div className="hidden lg:flex flex-col items-end mb-6">
              <span className="text-[9px] text-gray-600 uppercase tracking-widest mb-1">
                Direct Line
              </span>
              <a
                href="tel:+13043721040"
                className="text-lg text-white font-bold hover:text-amber-500 transition-colors"
              >
                +1 304-372-1040
              </a>
            </div>

            <Link to="/contact">
              <button className="group relative px-10 py-4 overflow-hidden border border-amber-500/50 rounded-full">
                <span className="relative z-10 text-[10px] tracking-[0.3em] uppercase text-white group-hover:text-black transition-colors duration-500 font-bold">
                  Order Now
                </span>
                <div className="absolute inset-0 bg-amber-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
              </button>
            </Link>
          </motion.div>
        </div>

        {/* --- Bottom Section --- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] tracking-[0.3em] uppercase text-gray-600 text-center"
        >
          <p>© 2026 Your Family Pizza | Kenna, West Virginia</p>
          <div className="flex gap-6 md:gap-10">
            <span className="hover:text-white cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="hover:text-white cursor-pointer transition-colors">
              Terms of Service
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
