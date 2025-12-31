/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

export default function HeroVideoSection({ restaurantData }) {
  // console.log(dat[0].heroVideo);
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* Background Video */}
      <video
        src={`/videos/${restaurantData?.[0]?.heroVideo}`}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4"
      >
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
          {restaurantData?.name}
        </h1>

        <p className="text-gray-200 max-w-xl mb-6">
          {restaurantData?.tagline ||
            "Taste the authentic flavor of our kitchen"}
        </p>

        <a href="#menu" className="btn btn-primary btn-wide">
          View Menu
        </a>
      </motion.div>
    </section>
  );
}
