import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import MobileSidebar from "../MobileSidebar";

export default function Navbar() {
  const [dark, setDark] = useState(false);
  // const { slug } = useParams();

  useEffect(() => {
    if (dark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [dark]);

  return (
    <div className="navbar bg-base-100 shadow-md dark:bg-gray-900 dark:text-white ">
      <div className="flex-1">
        <span className="btn btn-ghost normal-case text-xl">Foodix</span>
      </div>

      <div className="hidden md:flex gap-4">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 font-bold"
              : "text-gray-700 dark:text-gray-300"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/menu"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 font-bold"
              : "text-gray-700 dark:text-gray-300"
          }
        >
          Menu
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 font-bold"
              : "text-gray-700 dark:text-gray-300"
          }
        >
          Contact
        </NavLink>
      </div>

      <div className="flex items-center gap-2">
        <button
          className="btn btn-outline btn-sm"
          onClick={() => setDark(!dark)}
        >
          {dark ? "☀️" : "🌙"}
        </button>
        <div className="md:hidden">
          <MobileSidebar />
        </div>
      </div>
    </div>
  );
}
