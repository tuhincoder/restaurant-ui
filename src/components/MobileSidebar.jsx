import { useState, useEffect } from "react";
import { useLocation, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu, Facebook, Instagram, Phone } from "lucide-react";

export default function MobileSidebar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // পেজ পরিবর্তন হলে সাইডবার অটো বন্ধ হবে
  useEffect(() => setOpen(false), [location.pathname]);

  // বডি স্ক্রল কন্ট্রোল
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/allMenu" },
    { name: "About Us", path: "/aboutUs" },
    { name: "Hours", path: "/hours" },
    { name: "Happy Moments", path: "/happy-customers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* --- Trigger Button --- */}
      <button
        className="flex items-center gap-2 px-4 py-2 border border-white/10 rounded-full active:scale-95 transition-all bg-white/5"
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
            className="fixed inset-0 w-full h-screen bg-[#051117] z-[200] flex flex-col"
          >
            {/* --- Header Area --- */}
            <div className="flex justify-between items-center px-8 py-6">
              <span className="text-xl font-bold tracking-tighter text-white">
                FOODIX<span className="text-amber-500">.</span>
              </span>
              <button
                onClick={() => setOpen(false)}
                className="p-2 text-white/60 hover:text-white"
              >
                <X size={32} strokeWidth={1.5} />
              </button>
            </div>

            {/* --- Navigation --- */}
            <nav className="flex-1 flex flex-col justify-center px-10 space-y-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) => `
                      text-3xl font-light tracking-tight transition-all block
                      ${
                        isActive
                          ? "text-amber-500 italic font-serif"
                          : "text-white/50 hover:text-white"
                      }
                    `}
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            {/* --- Bottom Footer Area (Number & Socials in one row) --- */}
            <div className="p-8 border-t border-white/5 bg-white/[0.02]">
              <div className="flex items-center justify-between">
                {/* Contact Section */}
                <div className="space-y-1">
                  <span className="text-[9px] uppercase tracking-[0.3em] text-amber-500 font-bold block">
                    Reservation
                  </span>
                  <a
                    href="tel:+13043721040"
                    className="flex items-center gap-2 text-lg text-white font-medium"
                  >
                    <Phone size={16} className="text-amber-500" />
                    +1 304-372-1040
                  </a>
                </div>

                {/* Social Icons Section (Right Side) */}
                <div className="flex gap-3">
                  <SocialLink href="https://facebook.com" Icon={Facebook} />
                  <SocialLink href="https://instagram.com" Icon={Instagram} />
                </div>
              </div>

              {/* Optional: Footer Credit */}
              <div className="mt-6 text-center">
                <span className="text-[8px] text-white/10 uppercase tracking-[0.4em]">
                  Family Pizza Legacy
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// --- Social Link Component ---
function SocialLink({ href, Icon }) {
  return (
    <a
      href={href}
      className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-white border border-white/10 hover:bg-amber-500 hover:text-black transition-all duration-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon size={18} strokeWidth={2} />
    </a>
  );
}
