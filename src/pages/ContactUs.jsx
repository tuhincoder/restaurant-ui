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
import { Helmet } from "react-helmet";

const ContactUs = () => {
  const mapAddress = "975 Kentuck Rd, Kenna, WV, United States";
  const encodedAddress = encodeURIComponent(mapAddress);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Your Family Pizza</title>
        <meta
          name="description"
          content="Get in touch with Your Family Pizza for orders and inquiries."
        />
      </Helmet>

      <section
        id="contact"
        className="bg-[#051117] text-white py-16 md:py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden"
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <MapPin className="text-amber-500 shrink-0" size={22} />
                    <div>
                      <h4 className="text-[10px] uppercase tracking-widest text-gray-500 mb-1 font-bold">
                        Location
                      </h4>
                      <p className="text-sm font-light leading-relaxed">
                        975 Kentuck Rd, Kenna, <br /> WV, United States
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <Mail className="text-amber-500 shrink-0" size={22} />
                    <div>
                      <h4 className="text-[10px] uppercase tracking-widest text-gray-500 mb-1 font-bold">
                        Email Us
                      </h4>
                      <a
                        href="mailto:YourFamilyPizza@gmail.com"
                        className="text-sm font-light hover:text-amber-500 transition-colors"
                      >
                        YourFamilyPizza@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <Phone className="text-amber-500 shrink-0" size={22} />
                    <div>
                      <h4 className="text-[10px] uppercase tracking-widest text-gray-500 mb-1 font-bold">
                        Call Us
                      </h4>
                      <a
                        href="tel:+13043721040"
                        className="text-sm font-light hover:text-amber-500 transition-colors"
                      >
                        +1 304-372-1040
                      </a>
                    </div>
                  </div>

                  {/* Open Hours */}
                  <div className="flex items-start gap-4">
                    <Clock className="text-amber-500 shrink-0" size={22} />
                    <div>
                      <h4 className="text-[10px] uppercase tracking-widest text-gray-500 mb-1 font-bold">
                        Open Hours
                      </h4>
                      <p className="text-sm font-light">Daily: 11:00 - 21:00</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media Links - Updated with your links */}
              <div className="pt-4">
                <h4 className="text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-4 font-bold text-center md:text-left">
                  Connect with us
                </h4>
                <div className="flex justify-center md:justify-start gap-6">
                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/p/Your-Family-Pizza-61578005693524"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-amber-500 transition-colors duration-300"
                  >
                    <Facebook size={22} strokeWidth={1.5} />
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/YourFamilyPizza"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-amber-500 transition-colors duration-300"
                  >
                    <Instagram size={22} strokeWidth={1.5} />
                  </a>

                  {/* Twitter/X */}
                  <a
                    href="#"
                    className="text-gray-400 hover:text-amber-500 transition-colors duration-300"
                  >
                    <Twitter size={22} strokeWidth={1.5} />
                  </a>
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
                  src={`https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                  allowFullScreen
                  loading="lazy"
                  className="opacity-70 group-hover:opacity-100 transition-all duration-700"
                ></iframe>
                <div className="absolute top-4 left-4 bg-amber-500 text-black px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                  Our Location
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
                    <label className="text-[9px] uppercase tracking-widest text-amber-500/80 ml-1 font-bold">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full bg-transparent border-b border-white/10 py-2 outline-none focus:border-amber-500 transition-all placeholder:text-gray-700 text-sm font-light"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] uppercase tracking-widest text-amber-500/80 ml-1 font-bold">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="email@example.com"
                      className="w-full bg-transparent border-b border-white/10 py-2 outline-none focus:border-amber-500 transition-all placeholder:text-gray-700 text-sm font-light"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] uppercase tracking-widest text-amber-500/80 ml-1 font-bold">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="What is this about?"
                    className="w-full bg-transparent border-b border-white/10 py-2 outline-none focus:border-amber-500 transition-all placeholder:text-gray-700 text-sm font-light"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] uppercase tracking-widest text-amber-500/80 ml-1 font-bold">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Write your message here..."
                    className="w-full bg-transparent border-b border-white/10 py-2 outline-none focus:border-amber-500 transition-all placeholder:text-gray-700 resize-none text-sm font-light"
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
