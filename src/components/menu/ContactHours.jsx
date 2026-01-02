import React from "react";
import { motion } from "framer-motion";

const ContactHours = () => {
  const photos = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1550966841-3ee323357223?q=80&w=1000",
      size: "col-span-12 md:col-span-8 h-[300px] md:h-[500px]",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1000",
      size: "col-span-6 md:col-span-4 h-[140px] md:h-[240px]",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000",
      size: "col-span-6 md:col-span-4 h-[140px] md:h-[240px]",
    },
  ];

  return (
    <section className="bg-[#050c10] py-20 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header with Luxury Typography */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="space-y-2">
            <span className="text-amber-500 text-[10px] tracking-[0.5em] uppercase font-bold">
              Atmosphere
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-white italic">
              Captured Moments
            </h2>
          </div>
          <p className="text-gray-500 text-sm max-w-xs font-light leading-relaxed italic md:text-right">
            "A glimpse into the elegance and culinary excellence of Foodix."
          </p>
        </div>

        {/* Asymmetric Grid Layout */}
        <div className="grid grid-cols-12 gap-4">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`${photo.size} relative overflow-hidden group rounded-sm shadow-2xl border border-white/5`}
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.8 }}
                src={photo.url}
                className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
                alt="Restaurant Vibe"
              />
              {/* Elegant Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <span className="text-amber-500 text-[10px] tracking-widest uppercase font-bold underline underline-offset-8">
                  View Detail
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Brand Statement - Bottom Floating Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 text-center"
        >
          <span className="text-white/10 text-6xl md:text-9xl font-serif font-black tracking-tighter uppercase select-none">
            Excellence
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHours;
