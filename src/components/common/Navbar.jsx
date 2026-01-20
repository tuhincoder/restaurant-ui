import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import MobileSidebar from "../MobileSidebar";
import { Sun, Moon, UtensilsCrossed } from "lucide-react"; // install: npm i lucide-react

export default function Navbar() {
  const [dark, setDark] = useState(true); // Default dark for luxury feel
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect to make navbar background appear
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "About Us", path: "/aboutUs" },
    { name: "Contact", path: "/contact" },
    { name: "Hours", path: "/hours" },
    { name: "Reservation", path: "/reservation" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-500 px-6 md:px-12 py-4 ${
        scrolled
          ? "bg-[#050c10]/80 backdrop-blur-lg border-b border-white/5 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* --- Logo Area --- */}
        <div className="flex-1">
          <NavLink to="/" className="flex items-center gap-2 group">
            <div className="p-2 bg-amber-500 rounded-lg group-hover:rotate-12 transition-transform duration-300">
              <UtensilsCrossed size={20} className="text-black" />
            </div>
            <span className="text-2xl font-serif font-bold tracking-tighter text-white">
              PIZZA<span className="text-amber-500">.</span>
            </span>
          </NavLink>
        </div>

        {/* --- Desktop Links --- */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => `
                relative text-[11px] uppercase tracking-[0.3em] font-bold transition-all duration-300 hover:text-amber-500
                ${isActive ? "text-amber-500" : "text-gray-300"}
              `}
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="navUnderline"
                      className="absolute -bottom-2 left-0 w-full h-[2px] bg-amber-500"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* --- Action Buttons --- */}
        <div className="flex-1 flex items-center justify-end gap-4">
          {/* Theme Toggle */}
          {/* <button
            className="p-2 rounded-full border border-white/10 hover:bg-white/5 transition-colors text-amber-500"
            onClick={() => setDark(!dark)}
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button> */}

          {/* Book Table Button (Desktop) */}
          <NavLink
            to="/reservation"
            className="hidden lg:block border border-amber-500 px-6 py-2 text-[10px] uppercase tracking-widest font-bold text-amber-500 hover:bg-amber-500 hover:text-black transition-all duration-500"
          >
            Book Table
          </NavLink>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <MobileSidebar />
          </div>
        </div>
      </div>
    </nav>
  );
}
