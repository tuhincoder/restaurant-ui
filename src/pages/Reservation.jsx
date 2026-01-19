import React from "react";
import { useMutation } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Calendar, Users, Clock, ChevronDown } from "lucide-react";
import { Helmet } from "react-helmet";

const Reservation = () => {
  const mutation = useMutation({
    mutationFn: (newBooking) => {
      return new Promise((resolve) =>
        setTimeout(() => resolve(newBooking), 1500)
      );
    },

    onSuccess: () => alert("Table booked successfully!"),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    mutation.mutate(Object.fromEntries(formData));
  };

  // Animation Variants
  const fadeInUp = {
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
        <title>Reserve a Table | Restaurant</title>
        <meta
          name="description"
          content="Reserve your table at Restaurant Name for an unforgettable dining experience with premium cuisine and attentive service."
        />
      </Helmet>

      <section className="relative bg-[#051117] text-white  py-14 md:pt-28 px-6 lg:px-12 overflow-hidden">
        {/* 1. Subtle Background Text (Optimized for all screens) */}
        <div className="absolute top-20 left-0 text-[12vw] font-serif font-black opacity-[0.02] tracking-[0.2em] pointer-events-none select-none uppercase leading-none">
          Reservation
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
          {/* 2. Left Side: Form Section (order-2 on mobile for better UX) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <motion.div
              variants={fadeInUp}
              className="mb-10 text-center lg:text-left"
            >
              <span className="text-amber-500 font-bold tracking-[0.4em] text-[10px] uppercase">
                Online Booking
              </span>
              <h3 className="text-4xl md:text-6xl font-serif mt-2 mb-4 tracking-tight">
                Reserve Your{" "}
                <span className="text-amber-500 italic">Table</span>
              </h3>
              <p className="text-gray-400 text-sm md:text-base font-light max-w-md mx-auto lg:mx-0">
                Join us for an unforgettable culinary journey. Secure your spot
                at Restaurant.
              </p>
            </motion.div>

            <motion.form
              variants={fadeInUp}
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/[0.02] p-6 md:p-10 rounded-3xl border border-white/5 backdrop-blur-sm shadow-2xl"
            >
              {/* Party Size */}
              <div className="relative group border-b border-white/10 focus-within:border-amber-500 transition-all pb-2">
                <label className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gray-500 mb-2 font-bold">
                  <Users size={14} className="text-amber-500" /> Party Size
                </label>
                <select
                  name="persons"
                  className="w-full bg-transparent outline-none cursor-pointer text-white font-light py-1 appearance-none"
                >
                  <option className="bg-[#051117]">1 Person</option>
                  <option className="bg-[#051117]" selected>
                    2 Persons
                  </option>
                  <option className="bg-[#051117]">4 Persons</option>
                  <option className="bg-[#051117]">6+ Persons</option>
                </select>
                <ChevronDown
                  size={14}
                  className="absolute bottom-3 right-0 text-gray-500 pointer-events-none"
                />
              </div>

              {/* Date */}
              <div className="group border-b border-white/10 focus-within:border-amber-500 transition-all pb-2">
                <label className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gray-500 mb-2 font-bold">
                  <Calendar size={14} className="text-amber-500" /> Date
                </label>
                <input
                  type="date"
                  name="date"
                  className="w-full bg-transparent outline-none text-white font-light py-1 custom-calendar-icon"
                  defaultValue="2026-01-02"
                />
              </div>

              {/* Timing */}
              <div className="md:col-span-2 relative group border-b border-white/10 focus-within:border-amber-500 transition-all pb-2">
                <label className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gray-500 mb-2 font-bold">
                  <Clock size={14} className="text-amber-500" /> Preferred
                  Timing
                </label>
                <select
                  name="time"
                  className="w-full bg-transparent outline-none cursor-pointer text-white font-light py-1 appearance-none"
                >
                  <option className="bg-[#051117]">07:00 PM</option>
                  <option className="bg-[#051117]">08:30 PM</option>
                  <option className="bg-[#051117]">10:00 PM</option>
                </select>
                <ChevronDown
                  size={14}
                  className="absolute bottom-3 right-0 text-gray-500 pointer-events-none"
                />
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2 pt-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={mutation.isPending}
                  className="w-full py-4 bg-amber-500 text-black font-black uppercase tracking-[0.2em] text-[11px] rounded-xl shadow-xl shadow-amber-500/20 transition-all"
                >
                  {mutation.isPending ? "Confirming..." : "Book A Table Now"}
                </motion.button>
              </div>
            </motion.form>
          </motion.div>

          {/* 3. Right Side: Visual Section (order-1 on mobile) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-full max-w-[320px] md:max-w-[450px]">
              {/* Arched Frame */}
              <div className="w-full aspect-[3/4] rounded-t-full border-[12px] border-white/5 overflow-hidden shadow-2xl relative">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 8 }}
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1000"
                  alt="Dining"
                  className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#051117] via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Floating Badge (Laptop only effect) */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 md:-left-12 bg-amber-500 p-6 md:p-8 shadow-2xl max-w-[240px] md:max-w-[280px] rounded-br-[40px]"
              >
                <p className="font-serif text-xl md:text-2xl text-black italic leading-tight">
                  "Where every meal is a celebration."
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Reservation;
