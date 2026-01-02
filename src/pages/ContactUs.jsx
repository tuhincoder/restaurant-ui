import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"; // install: npm i lucide-react

const ContactUs = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      id="contact"
      className="bg-[#050c10] text-white py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-amber-500 rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* --- Header Section --- */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-serif italic text-amber-500 text-xl mb-4"
          >
            Get in touch
          </motion.p>
          <div className="flex items-center justify-center gap-6">
            <div className="h-[1px] w-12 bg-amber-500/40"></div>
            <h2 className="text-4xl md:text-5xl font-light tracking-[0.25em] uppercase">
              Contact Us
            </h2>
            <div className="h-[1px] w-12 bg-amber-500/40"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* --- Left Side: Contact Info & Map --- */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            className="space-y-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Phone & Email */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-500/10 rounded-full text-amber-500">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-1">
                      Phone
                    </h4>
                    <p className="text-lg font-light tracking-wider">
                      +1 (234) 567-890
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-500/10 rounded-full text-amber-500">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-1">
                      Email
                    </h4>
                    <p className="text-lg font-light tracking-wider">
                      info@luxuryrestro.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Location & Hours */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-500/10 rounded-full text-amber-500">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-1">
                      Location
                    </h4>
                    <p className="text-sm font-light leading-relaxed">
                      Via Serlas 546, 6700 St.
                      <br />
                      Moritz, Switzerland
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-500/10 rounded-full text-amber-500">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-1">
                      Opening Hours
                    </h4>
                    <p className="text-sm font-light">
                      Mon - Sat: 11:00 AM - 10:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Integration (Grayscale Dark Mode Style) */}
            <div className="w-full h-80 rounded-2xl overflow-hidden border border-white/5 grayscale contrast-125 brightness-75 hover:grayscale-0 transition-all duration-700 shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2712.512345678!2d9.839!3d46.49!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDbCsDI5JzI0LjAiTiA5wrA1MCcyMC40IkU!5e0!3m2!1sen!2sch!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>

          {/* --- Right Side: Contact Form --- */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            className="bg-white/5 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-amber-500 font-bold ml-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-amber-500 transition-colors placeholder:text-gray-700 text-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-amber-500 font-bold ml-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-amber-500 transition-colors placeholder:text-gray-700 text-sm"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.3em] text-amber-500 font-bold ml-1">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-amber-500 transition-colors placeholder:text-gray-700 text-sm"
                  placeholder="Reservation Inquiry"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.3em] text-amber-500 font-bold ml-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-amber-500 transition-colors placeholder:text-gray-700 text-sm resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <div className="pt-6">
                <button className="group relative w-full overflow-hidden bg-transparent border border-amber-500 py-4 transition-all duration-300">
                  <span className="relative z-10 flex items-center justify-center gap-3 text-xs tracking-[0.4em] uppercase font-bold group-hover:text-black transition-colors">
                    Send Message <Send size={14} />
                  </span>
                  <div className="absolute inset-0 bg-amber-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
