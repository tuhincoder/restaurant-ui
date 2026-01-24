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
  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.882194681643!2d-81.6508006241381!3d38.58249857176214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8848da0c49733333%3A0x6d8b67f1b7f2f6a!2s975%20Kentuck%20Rd%2C%20Kenna%2C%20WV%2025248%2C%20USA!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd";

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
        <title>Contact Us | Your Family Pizza</title>
      </Helmet>

      <section className="bg-[#051117] text-white py-24 md:py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-6xl font-serif italic text-white"
            >
              Contact <span className="text-amber-500">Us</span>
            </motion.h2>
            {/* <h2 className="text-3xl md:text-5xl font-light tracking-[0.2em] uppercase text-white">
              Contact <span className="text-amber-500 font-bold">Us</span>
            </h2> */}
            <div className="h-[1px] w-20 bg-amber-500 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left: Info & Map */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Column 1: Location & Email with Socials */}
                <div className="space-y-8">
                  <div className="flex items-start gap-4 group">
                    <MapPin className="text-amber-500 shrink-0" size={22} />
                    <div>
                      <h4 className="text-[10px] uppercase tracking-widest text-gray-500 mb-1 font-bold">
                        Location
                      </h4>
                      <p className="text-sm font-light leading-relaxed text-gray-300">
                        975 Kentuck Rd, Kenna, <br /> WV, United States
                      </p>
                    </div>
                  </div>

                  {/* Email and Social Icons Under It */}
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <Mail className="text-amber-500 shrink-0" size={22} />
                      <div>
                        <h4 className="text-[10px] uppercase tracking-widest text-gray-500 mb-1 font-bold">
                          Email Us
                        </h4>
                        <a
                          href="mailto:YourFamilyPizza@gmail.com"
                          className="text-sm font-light text-gray-300 hover:text-amber-500 transition-colors"
                        >
                          YourFamilyPizza@gmail.com
                        </a>
                      </div>
                    </div>

                    {/* Social Icons Directly Under Email & Above Map */}
                    <div className="flex gap-5 pt-2 pl-10 md:pl-10">
                      <a
                        href="https://www.facebook.com/p/Your-Family-Pizza-61578005693524"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-400 hover:text-amber-500 transition-all"
                      >
                        <Facebook size={18} />
                      </a>
                      <a
                        href="https://www.instagram.com/YourFamilyPizza?fbclid=IwY2xjawPh9qBleHRuA2FlbQIxMABicmlkETFoRDF2R2hJbU84WTRFWXhvc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHrp3UPGxCbAP3oDHHm_SY2ZglMsVzYn5RE14CFakCCR_dIQR6Jl08bwx6IzS_aem_m6RQV_vWaxqD7SuP4GjIGA"
                        className="text-gray-400 hover:text-amber-500 transition-all"
                      >
                        <Instagram size={18} />
                      </a>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-amber-500 transition-all"
                      >
                        <Twitter size={18} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Column 2: Phone & Hours */}
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <Phone className="text-amber-500 shrink-0" size={22} />
                    <div>
                      <h4 className="text-[10px] uppercase tracking-widest text-gray-500 mb-1 font-bold">
                        Call Us
                      </h4>
                      <a
                        href="tel:+13043721040"
                        className="text-sm font-light text-gray-300 hover:text-amber-500 transition-colors"
                      >
                        +1 304-372-1040
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="text-amber-500 shrink-0" size={22} />
                    <div>
                      <h4 className="text-[10px] uppercase tracking-widest text-gray-500 mb-1 font-bold">
                        Open Hours
                      </h4>
                      <p className="text-sm font-light text-gray-300">
                        Daily: 11:00 AM - 09:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map - Positioned Under Info and Social Icons */}
              <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                <iframe
                  title="Google Map"
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    filter:
                      "grayscale(1) contrast(1.2) invert(0.9) brightness(0.8)",
                  }}
                  src={mapEmbedUrl}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white/[0.02] p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl"
            >
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[9px] uppercase tracking-widest text-amber-500 font-bold ml-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full bg-transparent border-b border-white/10 py-2 outline-none focus:border-amber-500 transition-all text-sm font-light"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] uppercase tracking-widest text-amber-500 font-bold ml-1">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="email@example.com"
                      className="w-full bg-transparent border-b border-white/10 py-2 outline-none focus:border-amber-500 transition-all text-sm font-light"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] uppercase tracking-widest text-amber-500 font-bold ml-1">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Write your message..."
                    className="w-full bg-transparent border-b border-white/10 py-2 outline-none focus:border-amber-500 transition-all text-sm font-light resize-none"
                  ></textarea>
                </div>
                <button className="w-full py-4 border border-amber-500/50 text-amber-500 font-bold uppercase tracking-[0.4em] text-[10px] hover:bg-amber-500 hover:text-black transition-all duration-500 rounded-lg flex items-center justify-center gap-3">
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
