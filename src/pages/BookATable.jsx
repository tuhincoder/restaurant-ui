import React, { useState } from "react";
import { motion } from "framer-motion";
import { Users, Calendar, Clock, ChevronRight } from "lucide-react";
import ContactHours from "@/components/menu/ContactHours";

const BookATable = () => {
  const [formData, setFormData] = useState({
    name: "",
    guests: "2 Persons",
    date: "",
    time: "07:00 PM",
  });

  return (
    <>
      <section id="book-a-table" className="py-24 bg-[#0f1a19] px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side: Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <span className="text-amber-500 uppercase tracking-[0.3em] text-sm font-bold">
                Reservation
              </span>
              <h2 className="text-5xl md:text-6xl font-serif text-white leading-tight">
                Book A Table <br />
                <span className="italic text-gray-500 text-4xl md:text-5xl">
                  For Your Comfort
                </span>
              </h2>
              <p className="text-gray-400 text-lg font-light leading-relaxed max-w-md">
                Ami ekhon reservation system-er UI design ti diyechi.
                <span className="text-amber-500 italic block mt-2">
                  If you want, I will do the full integration later.
                </span>
              </p>

              <div className="pt-6 space-y-4 text-gray-300">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full border border-amber-500/20 flex items-center justify-center text-amber-500">
                    <Clock size={18} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-500">
                      Working Hours
                    </p>
                    <p className="font-medium">
                      Mon - Sun: 10:00 AM - 11:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side: Fancy Form */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-[#111111] p-8 md:p-12 rounded-2xl border border-white/5 shadow-2xl relative overflow-hidden"
            >
              {/* Form Background Decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 blur-3xl rounded-full"></div>

              <form className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Person Selection */}
                  <div className="space-y-2">
                    <label className="text-gray-400 text-xs uppercase tracking-widest">
                      Number of Guests
                    </label>
                    <div className="relative">
                      <Users
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-500"
                        size={18}
                      />
                      <select className="w-full bg-black/40 border border-white/10 rounded-lg py-4 pl-12 pr-4 text-white focus:border-amber-500 outline-none transition-all appearance-none">
                        <option>1 Person</option>
                        <option selected>2 Persons</option>
                        <option>4 Persons</option>
                        <option>6+ Persons</option>
                      </select>
                    </div>
                  </div>

                  {/* Date Selection */}
                  <div className="space-y-2">
                    <label className="text-gray-400 text-xs uppercase tracking-widest">
                      Select Date
                    </label>
                    <div className="relative">
                      <Calendar
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-500"
                        size={18}
                      />
                      <input
                        type="date"
                        className="w-full bg-black/40 border border-white/10 rounded-lg py-4 pl-12 pr-4 text-white focus:border-amber-500 outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Time Selection */}
                <div className="space-y-2">
                  <label className="text-gray-400 text-xs uppercase tracking-widest">
                    Preferred Time
                  </label>
                  <div className="relative">
                    <Clock
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-500"
                      size={18}
                    />
                    <select className="w-full bg-black/40 border border-white/10 rounded-lg py-4 pl-12 pr-4 text-white focus:border-amber-500 outline-none transition-all appearance-none">
                      <option>06:00 PM</option>
                      <option selected>07:30 PM</option>
                      <option>09:00 PM</option>
                    </select>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="button"
                  className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold py-5 rounded-lg flex items-center justify-center gap-2 group transition-all"
                >
                  BOOK A TABLE
                  <ChevronRight
                    className="group-hover:translate-x-1 transition-transform"
                    size={20}
                  />
                </button>

                <p className="text-center text-gray-500 text-sm italic">
                  Powered by Luxury Dining Reservation
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      {/*  */}
    </>
  );
};

export default BookATable;
