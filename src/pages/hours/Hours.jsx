import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Clock, Phone, Info, CalendarDays, MapPin } from "lucide-react";

const Hours = () => {
  const businessHours = [
    { day: "Sunday", time: "11 AM – 9 PM", status: "open" },
    { day: "Monday", time: "Closed (MLK Jr. Day)", status: "closed" },
    { day: "Tuesday", time: "11 AM – 9 PM", status: "open" },
    { day: "Wednesday", time: "11 AM – 9 PM", status: "open" },
    { day: "Thursday", time: "11 AM – 9 PM", status: "open" },
    { day: "Friday", time: "11 AM – 10 PM", status: "open" },
    { day: "Saturday", time: "11 AM – 10 PM", status: "open" },
  ];

  return (
    <>
      <Helmet>
        <title>Hours & Info | Restaurant</title>
      </Helmet>

      <section className="min-h-screen bg-[#051117] text-white py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <p className="font-serif italic text-amber-500 text-lg mb-2">
              Visit Us
            </p>
            <h1 className="text-4xl md:text-6xl font-light tracking-[0.2em] uppercase">
              Hours & Timing
            </h1>
            <div className="h-[1px] w-20 bg-amber-500/40 mx-auto mt-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 1. Hours List (Left Side) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-1 bg-white/[0.03] border border-white/5 p-8 rounded-2xl backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-8">
                <Clock className="text-amber-500" size={22} />
                <h2 className="text-lg tracking-widest uppercase font-medium">
                  Opening Hours
                </h2>
              </div>
              <div className="space-y-5">
                {businessHours.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center border-b border-white/5 pb-2"
                  >
                    <span
                      className={`text-sm tracking-wide ${
                        item.status === "closed"
                          ? "text-amber-500/50"
                          : "text-gray-300"
                      }`}
                    >
                      {item.day}
                    </span>
                    <span
                      className={`text-sm font-semibold ${
                        item.status === "closed"
                          ? "text-amber-600 italic"
                          : "text-amber-500"
                      }`}
                    >
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 2. Explanations & Contact (Right Side) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Why Closed on Monday Section */}
              <div className="bg-amber-500/[0.03] border border-amber-500/20 p-8 rounded-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                  <CalendarDays size={150} />
                </div>

                <div className="flex items-center gap-3 mb-6 text-amber-500">
                  <Info size={24} />
                  <h2 className="text-xl font-bold uppercase tracking-widest">
                    Why are we closed on Mondays?
                  </h2>
                </div>

                <div className="space-y-6 text-gray-400 leading-relaxed relative z-10">
                  <p className="text-sm md:text-base">
                    In the hospitality industry, Mondays are traditionally
                    reserved for behind-the-scenes work to ensure the best
                    experience for our guests.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-white text-sm font-bold uppercase mb-2">
                        Staff Welfare
                      </h4>
                      <p className="text-xs leading-relaxed">
                        After a high-energy weekend, we give our dedicated team
                        a well-deserved break to recharge and spend time with
                        their families.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-white text-sm font-bold uppercase mb-2">
                        Fresh Inventory
                      </h4>
                      <p className="text-xs leading-relaxed">
                        We use this day to source fresh, local ingredients and
                        perform deep maintenance to keep our kitchen at peak
                        performance.
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/5">
                    <p className="text-xs italic">
                      <span className="text-amber-500 font-bold">
                        Special Note:
                      </span>{" "}
                      We are specifically closed this Monday in observance of{" "}
                      <span className="text-white">
                        Martin Luther King Jr. Day
                      </span>
                      .
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact & Location Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-white/[0.02] border border-white/5 rounded-xl hover:bg-white/[0.04] transition-colors">
                  <div className="flex items-center gap-3 mb-3 text-amber-500">
                    <Phone size={18} />
                    <span className="text-[10px] uppercase tracking-widest text-gray-500">
                      Reservations
                    </span>
                  </div>
                  <a
                    href="tel:+13043721040"
                    className="text-xl font-bold hover:text-amber-500 transition-colors"
                  >
                    +1 304-372-1040
                  </a>
                </div>

                <div className="p-6 bg-white/[0.02] border border-white/5 rounded-xl hover:bg-white/[0.04] transition-colors">
                  <div className="flex items-center gap-3 mb-3 text-amber-500">
                    <MapPin size={18} />
                    <span className="text-[10px] uppercase tracking-widest text-gray-500">
                      Location
                    </span>
                  </div>
                  <p className="text-sm text-gray-300 font-medium">
                    West Virginia, United States
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hours;
