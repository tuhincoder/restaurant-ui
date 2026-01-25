import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const SocialSidebar = () => {
  const socials = [
    {
      id: 1,
      icon: <FaFacebookF />,
      link: "https://www.facebook.com/p/Your-Family-Pizza-61578005693524",
      // Facebook Official Blue: #1877F2
      color: "bg-[#1877F2]",
      label: "Facebook",
    },
    {
      id: 2,
      icon: <FaInstagram />,
      link: "https://www.instagram.com/yourfamilypizza",
      // Instagram Official Gradient
      color: "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]",
      label: "Instagram",
    },
    // {
    //   id: 3,
    //   icon: <FaLinkedinIn />,
    //   link: "https://linkedin.com/in/yourprofile",
    //   // LinkedIn Official Blue: #0A66C2
    //   color: "bg-[#0A66C2]",
    //   label: "LinkedIn",
    // },
    // {
    //   id: 4,
    //   icon: <FaYoutube />,
    //   link: "https://youtube.com/yourchannel",
    //   // YouTube Official Red: #FF0000
    //   color: "bg-[#FF0000]",
    //   label: "YouTube",
    // },
  ];

  return (
    <div
      className="fixed z-[9999] flex flex-col 
      /* Mobile: Left side bottom (Chat icon is on the right) */
      left-0 bottom-24 
      /* Desktop: Left side middle */
      md:bottom-auto md:top-1/2 md:-translate-y-1/2"
    >
      {socials.map((social, index) => (
        <motion.a
          key={social.id}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ x: 6 }}
          className={`${social.color} w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-white text-lg md:text-xl transition-all duration-300 shadow-lg relative group border-b border-white/10 last:border-0`}
        >
          {/* Social Icon with subtle shadow */}
          <span className="relative z-10 drop-shadow-md">{social.icon}</span>

          {/* Small Tooltip Text (Appears on Hover) */}
          <span className="absolute left-full ml-3 px-2 py-1 bg-black/90 text-white text-[10px] md:text-xs rounded opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-2xl z-[10001]">
            {social.label}

            {/* Tooltip Small Arrow */}
            <div className="absolute top-1/2 -left-1 -translate-y-1/2 w-0 h-0 border-t-4 border-t-transparent border-r-4 border-r-black/90 border-b-4 border-b-transparent"></div>
          </span>
        </motion.a>
      ))}
    </div>
  );
};

export default SocialSidebar;
