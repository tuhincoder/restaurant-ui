import { useState, useEffect } from "react";
import { useLocation, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu, Instagram, Facebook, Twitter } from "lucide-react";

export default function MobileSidebar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close sidebar on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Disable scroll when sidebar is open
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [open]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "About Us", path: "/aboutUs" },
    { name: "Contact", path: "/contact" },
    { name: "Reservation", path: "/reservation" },
  ];

  return (
    <>
      {/* --- Hamburger Button --- */}
      <button
        className="p-2 text-amber-500 hover:bg-white/5 rounded-lg transition-colors"
        onClick={() => setOpen(true)}
      >
        <Menu size={28} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 w-full h-screen bg-[#050c10] z-[200] flex flex-col p-8"
          >
            {/* --- Top Bar in Sidebar --- */}
            <div className="flex justify-between items-center mb-16">
              <span className="text-xl font-serif font-bold text-white tracking-tighter">
                FOODIX<span className="text-amber-500">.</span>
              </span>
              <button
                onClick={() => setOpen(false)}
                className="p-2 bg-white/5 rounded-full text-amber-500"
              >
                <X size={24} />
              </button>
            </div>

            {/* --- Navigation Links --- */}
            <nav className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i }}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) => `
                      text-4xl font-light tracking-widest uppercase transition-all duration-300
                      ${
                        isActive
                          ? "text-amber-500 italic font-serif"
                          : "text-gray-400 hover:text-white"
                      }
                    `}
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            {/* --- Bottom Sidebar Info --- */}
            <div className="mt-auto space-y-8">
              <div className="h-[1px] w-full bg-white/10"></div>

              <div className="space-y-2">
                <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500">
                  Reservation
                </p>
                <p className="text-lg text-white font-light">
                  +1 (234) 567-890
                </p>
              </div>

              <div className="flex gap-6 text-amber-500">
                <Facebook
                  size={20}
                  className="hover:text-white transition-colors"
                />
                <Instagram
                  size={20}
                  className="hover:text-white transition-colors"
                />
                <Twitter
                  size={20}
                  className="hover:text-white transition-colors"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
