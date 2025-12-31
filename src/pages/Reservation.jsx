import React from "react";
import { useMutation } from "@tanstack/react-query";
import { motion } from "framer-motion";

const Reservation = () => {
  // TanStack Query Mutation
  const mutation = useMutation({
    mutationFn: (newBooking) => {
      console.log("Booking Data:", newBooking);
      return new Promise((resolve) =>
        setTimeout(() => resolve(newBooking), 1500)
      );
    },
    onSuccess: () => {
      alert("Table booked successfully!");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    mutation.mutate(data);
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

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <section className="bg-[#0f1a19] text-white py-24 px-6 md:px-20 overflow-hidden relative">
      {/* 1. Background Watermark with Floating Animation */}
      <motion.h2
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 0.05 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute top-10 left-0 text-[100px] md:text-[180px] font-serif font-bold uppercase tracking-[0.2em] pointer-events-none whitespace-nowrap"
      >
        RESERVE
      </motion.h2>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* 2. Left Side - Form Section */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeInUp}>
            <h3 className="text-4xl md:text-5xl font-serif mb-3 tracking-tight">
              BOOK A TABLE
            </h3>
            <p className="text-[#c7a17a] text-sm mb-12 italic tracking-widest uppercase">
              * Reservations highly recommended
            </p>
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-8 max-w-md">
            {/* Person Dropdown */}
            <motion.div
              variants={fadeInUp}
              className="group border-b border-gray-700 focus-within:border-[#c7a17a] transition-colors duration-300"
            >
              <label className="text-[10px] uppercase tracking-widest text-gray-500">
                Party Size
              </label>
              <select
                name="persons"
                className="w-full bg-transparent py-2 outline-none appearance-none cursor-pointer text-gray-200 font-light"
              >
                <option className="bg-[#1e2d2b]">1 Person</option>
                <option className="bg-[#1e2d2b]">2 Persons</option>
                <option className="bg-[#1e2d2b]">4 Persons</option>
                <option className="bg-[#1e2d2b]">6+ Persons</option>
              </select>
            </motion.div>

            {/* Date Input */}
            <motion.div
              variants={fadeInUp}
              className="group border-b border-gray-700 focus-within:border-[#c7a17a] transition-colors duration-300"
            >
              <label className="text-[10px] uppercase tracking-widest text-gray-500">
                Preferred Date
              </label>
              <input
                type="date"
                name="date"
                className="w-full bg-transparent py-2 outline-none text-gray-200 cursor-pointer font-light invert-[0.8] md:invert-0"
                defaultValue="2025-12-31"
              />
            </motion.div>

            {/* Time Dropdown */}
            <motion.div
              variants={fadeInUp}
              className="group border-b border-gray-700 focus-within:border-[#c7a17a] transition-colors duration-300"
            >
              <label className="text-[10px] uppercase tracking-widest text-gray-500">
                Timing
              </label>
              <select
                name="time"
                className="w-full bg-transparent py-2 outline-none appearance-none cursor-pointer text-gray-200 font-light"
              >
                <option className="bg-[#1e2d2b]">07:00 pm</option>
                <option className="bg-[#1e2d2b]">08:30 pm</option>
                <option className="bg-[#1e2d2b]">10:00 pm</option>
              </select>
            </motion.div>

            {/* Submit Button with Hover Effect */}
            <motion.div variants={fadeInUp} className="pt-6">
              <button
                type="submit"
                disabled={mutation.isPending}
                className="relative group overflow-hidden border border-[#c7a17a] px-12 py-4 transition-all duration-500"
              >
                <span className="relative z-10 text-xs font-bold tracking-[0.3em] uppercase group-hover:text-[#0f1a19]">
                  {mutation.isPending ? "Confirming..." : "Book Now"}
                </span>
                <div className="absolute inset-0 bg-[#c7a17a] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
              </button>
            </motion.div>
          </form>

          <motion.p
            variants={fadeInUp}
            className="mt-12 text-[9px] text-gray-600 tracking-[0.2em] uppercase"
          >
            Powered by Premium Reservation System
          </motion.p>
        </motion.div>

        {/* 3. Right Side - Arched Image & Cursive Text */}
        <div className="relative flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative w-full max-w-[450px]"
          >
            {/* Arched Image */}
            <div className="w-full h-[550px] md:h-[650px] rounded-t-full overflow-hidden border-[12px] border-[#162624] shadow-2xl">
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 10 }} // Very slow zoom on hover
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1000"
                alt="Restaurant Interior"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Cursive Text with Motion */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="absolute -bottom-8 -left-10 md:-left-16 bg-[#0f1a19]/80 backdrop-blur-md p-6"
            >
              <h4 className="font-serif text-3xl md:text-5xl text-[#c7a17a] italic leading-tight">
                Book private dining <br /> & banquet rooms
              </h4>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
