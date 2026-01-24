import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Mail, MapPin, Clock, QrCode, X, Maximize2 } from "lucide-react";
import orderQr from "@/assets/images/pizzaMenu/orderqr.jpg";

const Footer = () => {
  const [isQrOpen, setIsQrOpen] = useState(false);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <footer className="bg-[#051117] text-gray-400 py-16 md:py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden border-t border-white/5">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-900/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-4 relative">
          {/* Vertical Dotted Lines */}
          <div className="hidden md:block absolute left-[33.33%] top-0 bottom-0 w-[1px] border-l border-dashed border-white/10"></div>
          <div className="hidden md:block absolute left-[66.66%] top-0 bottom-0 w-[1px] border-l border-dashed border-white/10"></div>

          {/* 1. Left: Opening Hours */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start md:pr-8 lg:pr-12"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-9 h-9 rounded-full border border-amber-500/20 flex items-center justify-center shrink-0">
                <Clock size={14} className="text-amber-500" />
              </div>
              <h4 className="text-white text-[10px] font-bold tracking-[0.3em] uppercase">
                Opening Hours
              </h4>
            </div>
            <div className="w-full space-y-3 text-[10px] tracking-[0.15em] uppercase font-light">
              {/* Hours mapping remains same */}
              {[
                { day: "Sunday", time: "11 AM – 9 PM" },
                { day: "Monday", time: "Closed (MLK Jr. Day)", special: true },
                { day: "Tuesday", time: "11 AM – 9 PM" },
                { day: "Wednesday", time: "11 AM – 9 PM" },
                { day: "Thursday", time: "11 AM – 9 PM" },
                { day: "Friday", time: "11 AM – 10 PM" },
                { day: "Saturday", time: "11 AM – 10 PM" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b border-white/5 pb-2"
                >
                  <span
                    className={item.special ? "text-amber-600 font-medium" : ""}
                  >
                    {item.day}
                  </span>
                  <span
                    className={
                      item.special
                        ? "text-amber-600/70 italic lowercase"
                        : "text-white"
                    }
                  >
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 2. Middle: Follow Us */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center text-center px-4 md:px-8"
          >
            <div className="mb-10">
              <div className="text-2xl text-white font-serif italic mb-2">
                Your Family <span className="text-amber-500">Pizza</span>
              </div>
              <div className="h-[1px] w-10 bg-amber-500/40 mx-auto"></div>
            </div>
            <h4 className="text-white text-[9px] font-bold tracking-[0.4em] uppercase mb-6">
              Follow Our Story
            </h4>
            <div className="flex gap-4 mb-10">
              <motion.a
                href="https://www.facebook.com/p/Your-Family-Pizza-61578005693524"
                target="_blank"
                whileHover={{ y: -3, color: "#f59e0b" }}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5"
              >
                <FaFacebookF size={16} />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/YourFamilyPizza?fbclid=IwY2xjawPh9qBleHRuA2FlbQIxMABicmlkETFoRDF2R2hJbU84WTRFWXhvc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHrp3UPGxCbAP3oDHHm_SY2ZglMsVzYn5RE14CFakCCR_dIQR6Jl08bwx6IzS_aem_m6RQV_vWaxqD7SuP4GjIGA"
                target="_blank"
                whileHover={{ y: -3, color: "#f59e0b" }}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5"
              >
                <FaInstagram size={16} />
              </motion.a>
            </div>
            <div className="bg-white/[0.02] border border-white/5 p-5 rounded-2xl w-full max-w-[240px]">
              <span className="text-[8px] text-amber-500 uppercase tracking-[0.3em] mb-2 block font-bold">
                Direct Line
              </span>
              <a
                href="tel:+13043721040"
                className="text-lg text-white font-light tracking-widest hover:text-amber-500 transition-colors"
              >
                +1 304-372-1040
              </a>
            </div>
          </motion.div>

          {/* 3. Right: Contact & QR Modal Trigger */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-end text-center md:text-right md:pl-8 lg:pl-12"
          >
            <div className="flex items-center gap-4 mb-8 md:flex-row-reverse">
              <div className="w-9 h-9 rounded-full border border-amber-500/20 flex items-center justify-center shrink-0">
                <MapPin size={14} className="text-amber-500" />
              </div>
              <h4 className="text-white text-[10px] font-bold tracking-[0.3em] uppercase">
                Contact Info
              </h4>
            </div>

            <div className="space-y-6 text-[10px] tracking-[0.15em] uppercase leading-relaxed">
              <div>
                <p className="text-white mb-1 font-bold tracking-[0.2em]">
                  Kenna, West Virginia
                </p>
                <p className="opacity-60">975 Kentuck Rd, United States</p>
              </div>

              <div className="pt-5 border-t border-white/5 w-full md:w-auto">
                <div className="flex items-center gap-2 justify-center md:justify-end mb-2">
                  <Mail size={12} className="text-amber-500/50" />
                  <span className="text-amber-500/60 text-[8px] tracking-[0.3em]">
                    Email Us
                  </span>
                </div>
                <a
                  href="mailto:YourFamilyPizza@gmail.com"
                  className="text-white hover:text-amber-500 transition-colors lowercase tracking-normal block mb-6"
                >
                  YourFamilyPizza@gmail.com
                </a>

                {/* --- QR Code Interactive Trigger --- */}
                <div className="flex flex-col items-center md:items-end gap-3">
                  <div className="flex items-center gap-2">
                    <QrCode size={12} className="text-amber-500/50" />
                    <span className="text-amber-500/60 text-[8px] tracking-[0.3em]">
                      Order Online
                    </span>
                  </div>

                  <button
                    onClick={() => setIsQrOpen(true)}
                    className="group relative p-1.5 bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-300 hover:ring-2 hover:ring-amber-500/50"
                  >
                    <img
                      src={orderQr}
                      alt="Order QR"
                      className="w-16 h-16 md:w-14 md:h-14 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Maximize2 size={16} className="text-white" />
                    </div>
                  </button>
                  <p className="text-[7px] text-gray-600 tracking-widest uppercase">
                    Click to enlarge
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* --- Bottom Bar --- */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[8px] tracking-[0.3em] uppercase text-gray-600">
          <p>© 2026 Your Family Pizza | Handcrafted in Kenna, WV</p>
          <div className="flex gap-8">
            <span className="hover:text-amber-500 cursor-pointer transition-colors">
              Privacy
            </span>
            <span className="hover:text-amber-500 cursor-pointer transition-colors">
              Terms
            </span>
          </div>
        </div>
      </div>

      {/* --- QR Code Popup Modal --- */}
      <AnimatePresence>
        {isQrOpen && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsQrOpen(false)}
              className="absolute inset-0 bg-[#051117]/90 backdrop-blur-md"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, x: 20 }}
              animate={{ scale: 1, opacity: 1, x: 0 }}
              exit={{ scale: 0.9, opacity: 0, x: 20 }}
              className="relative bg-[#0a1217] border border-white/10 p-8 rounded-[2.5rem] max-w-sm w-full shadow-2xl overflow-hidden"
            >
              {/* Modal Decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 blur-3xl -z-10" />

              <button
                onClick={() => setIsQrOpen(false)}
                className="absolute top-5 right-5 text-gray-500 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-500/10 mb-4">
                  <QrCode className="text-amber-500" size={24} />
                </div>
                <h3 className="text-white font-serif italic text-2xl mb-2">
                  Scan & <span className="text-amber-500">Order</span>
                </h3>
                <p className="text-[9px] text-gray-500 tracking-[0.2em] uppercase mb-8">
                  Fast & Easy Online Ordering
                </p>

                <div className="bg-white p-4 rounded-3xl shadow-[0_20px_50px_rgba(245,158,11,0.1)] mb-8 inline-block">
                  <img
                    src={orderQr}
                    alt="Pizza Order QR"
                    className="w-48 h-48 md:w-56 md:h-56"
                  />
                </div>

                <div className="space-y-4">
                  <div className="h-[1px] w-12 bg-amber-500/20 mx-auto" />
                  <p className="text-[10px] text-gray-400 leading-relaxed italic">
                    Open your camera app or QR scanner <br /> to browse our menu
                    and place your order.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
