import React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

const ContactUs = () => {
  const mapAddress = "Via Serlas 546, 7500 St. Moritz, Switzerland";
  const encodedAddress = encodeURIComponent(mapAddress);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Restaurant</title>
        <meta
          name="description"
          content="Get in touch with Restaurant Name for reservations, private dining, events, or general inquiries. Our team is ready to assist you."
        />
      </Helmet>
      <section
        id="contact"
        className="bg-[#051117] text-white py-16 md:py-14 px-6 md:px-12 lg:px-24 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-light tracking-[0.25em] uppercase text-white">
              Contact Us
            </h2>
            <div className="h-[1px] w-20 bg-amber-500 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Side: Info, Socials & Map */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-10"
            >
              {/* Contact Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-amber-500 shrink-0" size={22} />
                    <div>
                      <h4 className="text-[10px] uppercase tracking-widest text-gray-500 mb-1 font-bold">
                        Location
                      </h4>
                      <p className="text-sm font-light leading-relaxed">
                        {mapAddress}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="text-amber-500 shrink-0" size={22} />
                    <div>
                      <h4 className="text-[10px] uppercase tracking-widest text-gray-500 mb-1 font-bold">
                        Email Us
                      </h4>
                      <p className="text-sm font-light">
                        foodix.restaurant@gmail.com
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Phone className="text-amber-500 shrink-0" size={22} />
                    <div>
                      <h4 className="text-[10px] uppercase tracking-widest text-gray-500 mb-1 font-bold">
                        Call Us
                      </h4>
                      <p className="text-sm font-light">+1 (234) 567-890</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="text-amber-500 shrink-0" size={22} />
                    <div>
                      <h4 className="text-[10px] uppercase tracking-widest text-gray-500 mb-1 font-bold">
                        Open Hours
                      </h4>
                      <p className="text-sm font-light">
                        Daily: 11:00 AM - 11:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="pt-4">
                <h4 className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-4 font-bold text-center md:text-left">
                  Connect with us
                </h4>
                <div className="flex justify-center md:justify-start gap-6">
                  {[Facebook, Instagram, Twitter].map((Icon, index) => (
                    <a
                      key={index}
                      href="#"
                      className="text-gray-400 hover:text-amber-500 transition-colors duration-300"
                    >
                      <Icon size={20} strokeWidth={1.5} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Google Map Section */}
              <div className="relative w-full h-64 md:h-80 rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                <iframe
                  title="Google Map"
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    filter:
                      "grayscale(1) contrast(1.2) invert(0.9) brightness(0.8)",
                  }}
                  src={`https://www.google.com/maps?q=${encodedAddress}&output=embed`}
                  allowFullScreen
                  loading="lazy"
                  className="opacity-70 group-hover:opacity-100 transition-all duration-700"
                ></iframe>
                <div className="absolute top-4 left-4 bg-amber-500 text-black px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  Our Venue
                </div>
              </div>
            </motion.div>

            {/* Right Side: Contact Form */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white/[0.02] p-8 md:p-12 rounded-[30px] md:rounded-[40px] border border-white/5 shadow-2xl"
            >
              <form className="space-y-7 md:space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div className="space-y-2">
                    <label className="text-[9px] uppercase tracking-widest text-amber-500/80 ml-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-transparent border-b border-white/10 py-2 outline-none focus:border-amber-500 transition-all placeholder:text-gray-800 text-sm font-light"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] uppercase tracking-widest text-amber-500/80 ml-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full bg-transparent border-b border-white/10 py-2 outline-none focus:border-amber-500 transition-all placeholder:text-gray-800 text-sm font-light"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] uppercase tracking-widest text-amber-500/80 ml-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Reservation / Inquiry"
                    className="w-full bg-transparent border-b border-white/10 py-2 outline-none focus:border-amber-500 transition-all placeholder:text-gray-800 text-sm font-light"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] uppercase tracking-widest text-amber-500/80 ml-1">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    placeholder="How can we help you?"
                    className="w-full bg-transparent border-b border-white/10 py-2 outline-none focus:border-amber-500 transition-all placeholder:text-gray-800 resize-none text-sm font-light"
                  ></textarea>
                </div>
                <button className="w-full py-4 bg-transparent border border-amber-500/50 text-amber-500 font-bold uppercase tracking-[0.4em] text-[10px] hover:bg-amber-500 hover:text-black transition-all duration-500 rounded-xl flex items-center justify-center gap-3">
                  Send Message <Send size={14} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
