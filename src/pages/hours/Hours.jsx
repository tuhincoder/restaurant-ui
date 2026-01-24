import React from "react";
import { motion } from "framer-motion";
import { Clock, Phone, Info, CalendarDays, MapPin } from "lucide-react";
import { Helmet } from "react-helmet";

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
        <title>Hours & Info | Your Family Pizza</title>
      </Helmet>

      <section className="bg-[#051117] text-white py-32 md:py-28 px-6 md:px-12 lg:px-24 min-h-screen relative overflow-hidden">
        {/* Background Glows for Premium Look */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >
            <p className="font-serif italic text-amber-500 text-lg mb-3 block">
              Plan Your Visit
            </p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-6xl font-serif italic text-white"
            >
              Hours & <span className="text-amber-500">Timing</span>
            </motion.h2>
            {/* <h1 className="text-3xl md:text-6xl font-light tracking-[0.2em] uppercase">
              Hours & <span className="text-amber-500 font-bold">Timing</span>
            </h1> */}
            <div className="h-[2px] w-16 bg-amber-500 mx-auto mt-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            {/* 1. Hours List (Left Side) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1 bg-white/[0.03] border border-white/10 p-8 rounded-3xl backdrop-blur-md shadow-2xl"
            >
              <div className="flex items-center gap-3 mb-10 pb-4 border-b border-white/5">
                <Clock className="text-amber-500" size={24} />
                <h2 className="text-lg tracking-[0.2em] uppercase font-bold">
                  Weekly Schedule
                </h2>
              </div>
              <div className="space-y-6">
                {businessHours.map((item, index) => (
                  <div
                    key={index}
                    className={`flex justify-between items-center transition-all duration-300 ${
                      item.status === "closed"
                        ? "opacity-40 grayscale"
                        : "opacity-100"
                    }`}
                  >
                    <span className="text-sm md:text-base tracking-wide font-medium">
                      {item.day}
                    </span>
                    <span
                      className={`text-sm md:text-base font-bold ${
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

            {/* 2. Explanations & Info (Right Side) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Specialized Info Card */}
              <div className="bg-amber-500/[0.04] border border-amber-500/10 p-8 md:p-10 rounded-3xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-10 opacity-[0.05] group-hover:rotate-12 transition-transform duration-700">
                  <CalendarDays size={180} />
                </div>

                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-amber-500/10 rounded-xl text-amber-500">
                    <Info size={28} />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold uppercase tracking-widest leading-tight">
                    Behind Our <br className="md:hidden" /> Monday Schedule
                  </h2>
                </div>

                <div className="space-y-8 relative z-10">
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                    We believe in providing the absolute best for our customers.
                    To do that, we use Mondays to rest our team and prep our
                    kitchen for the week ahead.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-amber-500/30 transition-all">
                      <h4 className="text-amber-500 text-xs font-black uppercase mb-3 tracking-widest">
                        Staff Wellbeing
                      </h4>
                      <p className="text-xs text-gray-400 leading-relaxed">
                        Our chefs and staff work tireless hours over the
                        weekends. Mondays allow them to recharge and maintain
                        the high quality of service you expect.
                      </p>
                    </div>
                    <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-amber-500/30 transition-all">
                      <h4 className="text-amber-500 text-xs font-black uppercase mb-3 tracking-widest">
                        Quality Control
                      </h4>
                      <p className="text-xs text-gray-400 leading-relaxed">
                        This day is dedicated to deep-cleaning our equipment and
                        receiving fresh shipments directly from local suppliers.
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/5">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
                      <p className="text-xs italic text-gray-300">
                        <span className="text-amber-500 font-bold uppercase mr-1">
                          Holiday Notice:
                        </span>
                        Closed this Monday for{" "}
                        <span className="text-white border-b border-amber-500/50">
                          Martin Luther King Jr. Day
                        </span>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Contacts */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a
                  href="tel:+13043721040"
                  className="group p-8 bg-white/[0.02] border border-white/5 rounded-3xl hover:bg-amber-500 transition-all duration-500"
                >
                  <div className="flex items-center gap-3 mb-4 text-amber-500 group-hover:text-black transition-colors">
                    <Phone size={20} />
                    <span className="text-[10px] uppercase tracking-[0.3em] font-black">
                      Call for Pickup
                    </span>
                  </div>
                  <p className="text-2xl font-black group-hover:text-black transition-colors">
                    +1 304-372-1040
                  </p>
                </a>

                <div className="p-8 bg-white/[0.02] border border-white/5 rounded-3xl">
                  <div className="flex items-center gap-3 mb-4 text-amber-500">
                    <MapPin size={20} />
                    <span className="text-[10px] uppercase tracking-[0.3em] font-black">
                      Where to find us
                    </span>
                  </div>
                  <p className="text-lg text-gray-300 font-medium">
                    Kenna, West Virginia, <br className="hidden md:block" />{" "}
                    United States
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
