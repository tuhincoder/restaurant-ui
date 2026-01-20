import { useState, useEffect } from "react";
import { useLocation, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu, Facebook, Instagram, Twitter } from "lucide-react";

export default function MobileSidebar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "About Us", path: "/aboutUs" },
    { name: "Contact", path: "/contact" },
    { name: "Hours", path: "/hours" },
    { name: "Book Now", path: "/reservation" },
  ];

  return (
    <>
      {/* --- Trigger Button --- */}
      <button
        className="flex items-center gap-2 px-4 py-2 border border-white/10 rounded-full active:scale-95 transition-all"
        onClick={() => setOpen(true)}
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">
          Menu
        </span>
        <Menu size={18} className="text-amber-500" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 w-full h-screen bg-[#050505] z-[200] flex flex-col"
          >
            {/* --- Top Header --- */}
            <div className="flex justify-between items-center px-8 py-6">
              <span className="text-lg font-bold tracking-tighter text-white">
                FOODIX<span className="text-amber-500">.</span>
              </span>
              <button
                onClick={() => setOpen(false)}
                className="p-2 text-white/40 hover:text-white"
              >
                <X size={28} strokeWidth={1.5} />
              </button>
            </div>

            {/* --- Navigation Links --- */}
            <nav className="flex-1 flex flex-col justify-center px-10 space-y-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) => `
                      text-4xl font-light tracking-tight transition-all
                      ${
                        isActive
                          ? "text-amber-500 italic font-serif"
                          : "text-white/30 hover:text-white"
                      }
                    `}
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            {/* --- Bottom Footer (Number + Socials) --- */}
            <div className="p-10 border-t border-white/5 bg-white/[0.01]">
              <div className="flex items-end justify-between">
                {/* Contact Info */}
                <div className="space-y-1">
                  <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold">
                    Reservation
                  </span>
                  <a
                    href="tel:+123456789"
                    className="block text-xl text-white font-medium"
                  >
                    +1 (234) 567-890
                  </a>
                </div>

                {/* Social Icons */}
                <div className="flex gap-5 pb-1">
                  <SocialLink href="#" Icon={Facebook} />
                  <SocialLink href="#" Icon={Instagram} />
                  <SocialLink href="#" Icon={Twitter} />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Minimalist Social Link Component
function SocialLink({ href, Icon }) {
  return (
    <a
      href={href}
      className="text-white/40 hover:text-amber-500 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon size={20} strokeWidth={1.5} />
    </a>
  );
}
