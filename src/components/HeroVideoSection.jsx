/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { Clock, MapPin, ArrowRight } from "lucide-react";

export default function HeroVideoSection({ restaurantData }) {
  return (
    <section className="relative h-screen min-h-[660px] w-full overflow-hidden">
      {/* Background Video */}
      <video
        src={`/videos/${restaurantData?.[0]?.heroVideo}`}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Improved Dynamic Overlay: Mobile-e ektu beshi dark jate text clear thake */}
      <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-black/90 via-black/50 to-black/80 lg:to-black/60"></div>

      {/* Main Content Container: Mobile-e padding top (pt-24) deya hoyeche Navbar theke bachaner jonno */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-center pt-24 lg:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left Side: Story & Branding */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 md:space-y-6 text-left order-2 lg:order-1"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "60px" }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-[2px] bg-amber-500"
            ></motion.div>

            <h1 className="text-white text-4xl md:text-7xl font-light tracking-tighter leading-tight">
              {restaurantData?.[0]?.name || "THE LUXE"} <br />
              <span className="italic font-serif text-amber-500 text-3xl md:text-6xl">
                Kitchen & Bar
              </span>
            </h1>

            <p className="text-gray-300 max-w-md text-base md:text-lg font-light leading-relaxed border-l-2 border-amber-500/30 pl-4 md:pl-6">
              {restaurantData?.[0]?.description ||
                "Experience a symphony of flavors where traditional heritage meets modern culinary innovation."}
            </p>

            {/* Quick Info: Mobile-e spacing adjust kora hoyeche */}
            <div className="flex flex-wrap gap-4 md:gap-8 pt-2 text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-amber-500 font-bold">
              <div className="flex items-center gap-2">
                <MapPin size={14} /> St. Moritz, SZ
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} /> 11 AM - 10 PM
              </div>
            </div>
          </motion.div>

          {/* Right Side: Action (View Menu) - Mobile-e scale komano hoyeche */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center lg:items-end order-1 lg:order-2"
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-16 rounded-full aspect-square flex flex-col items-center justify-center text-center group hover:border-amber-500 transition-all duration-700 shadow-2xl scale-90 md:scale-100">
              <p className="text-white text-[10px] tracking-[0.4em] uppercase mb-2 md:mb-4 opacity-70">
                Discover
              </p>
              <h2 className="text-white text-xl md:text-3xl font-serif italic mb-4 md:mb-8">
                Our Seasonal <br /> Selection
              </h2>

              <motion.a
                href="#menu"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-6 md:px-8 py-2 md:py-3 bg-amber-500 text-black text-[9px] md:text-[10px] font-bold tracking-[0.3em] uppercase overflow-hidden group/btn"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Menu <ArrowRight size={14} />
                </span>
                <div className="absolute inset-0 bg-white translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300"></div>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Scroll Indicator - Mobile-e h-8 kore deya hoyeche */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-amber-500 to-transparent"></div>
      </motion.div>
    </section>
  );
}
