/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { Clock, MapPin, ArrowRight } from "lucide-react";

export default function HeroVideoSection({ restaurantData }) {
  return (
    // Mobile-e height auto/fixed (70vh) ebong Desktop-e h-screen
    <section className="relative h-[75vh] md:h-screen min-h-[550px] md:min-h-[660px] w-full overflow-hidden bg-black">
      {/* Background Video - Object focus center */}
      <video
        src={`/videos/${restaurantData?.[0]?.heroVideo}`}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60 md:opacity-100"
      />

      {/* Overlay: Mobile-e dark gradient ta arektu heavy jate readability thake */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#050c10]"></div>

      {/* Content Container */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-end pb-12 md:pb-0 md:justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Text Content: Mobile-e order-1 jate age text dekha jay */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 md:space-y-6 text-left order-1"
          >
            <div className="h-[2px] w-12 bg-amber-500"></div>

            <h1 className="text-white text-4xl md:text-7xl font-light tracking-tighter leading-[1.1]">
              {restaurantData?.[0]?.name || "THE FOODIX"} <br />
              <span className="italic font-serif text-amber-500 text-3xl md:text-6xl">
                Kitchen & Bar
              </span>
            </h1>

            <p className="text-gray-300 max-w-sm md:max-w-md text-sm md:text-lg font-light leading-relaxed border-l border-amber-500/30 pl-4">
              {restaurantData?.[0]?.description ||
                "Experience a symphony of flavors where traditional heritage meets modern culinary innovation."}
            </p>

            {/* Quick Info */}
            <div className="flex flex-wrap gap-4 pt-2 text-[10px] uppercase tracking-widest text-amber-500/80 font-semibold">
              <div className="flex items-center gap-1.5">
                <MapPin size={12} /> St. Moritz, SZ
              </div>
              <div className="flex items-center gap-1.5">
                <Clock size={12} /> 11 AM - 10 PM
              </div>
            </div>
          </motion.div>

          {/* Action Circle: Mobile-e size komano hoyeche jate video beshi dhake na */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden md:flex flex-col items-center lg:items-end order-2"
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-12 md:p-16 rounded-full aspect-square flex flex-col items-center justify-center text-center group hover:border-amber-500 transition-all duration-700">
              <p className="text-white text-[10px] tracking-[0.4em] uppercase mb-4 opacity-70">
                Discover
              </p>
              <h2 className="text-white text-2xl font-serif italic mb-6">
                Our Seasonal <br /> Selection
              </h2>

              <motion.a
                href="#menu"
                className="px-6 py-3 bg-amber-500 text-black text-[10px] font-bold tracking-[0.3em] uppercase flex items-center gap-2"
              >
                View Menu <ArrowRight size={14} />
              </motion.a>
            </div>
          </motion.div>

          {/* Mobile View Menu Button: Circle er bodole simple button for mobile accessibility */}
          <div className="md:hidden order-2 pt-4">
            <motion.a
              href="#menu"
              whileTap={{ scale: 0.95 }}
              className="w-full py-4 bg-amber-500 text-black text-[11px] font-bold tracking-[0.3em] uppercase flex items-center justify-center gap-2 rounded-sm"
            >
              Explore Our Menu <ArrowRight size={16} />
            </motion.a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          animate={{ height: [20, 40, 20] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-[1px] bg-gradient-to-b from-amber-500 to-transparent"
        />
      </div>
    </section>
  );
}
