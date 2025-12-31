import { useState, useEffect } from "react";
import { useLocation, NavLink } from "react-router-dom";

export default function MobileSidebar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  // const { slug } = useParams();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <div>
      <button className="btn btn-outline btn-sm" onClick={() => setOpen(!open)}>
        ☰
      </button>

      {open && (
        <div className="fixed top-0 left-0 w-64 h-full bg-base-200 dark:bg-gray-800 shadow-md p-4 z-50">
          <nav className="flex flex-col gap-4 mt-6">
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
              to={"/menu"}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-bold"
                  : "text-gray-700 dark:text-gray-300"
              }
            >
              Menu
            </NavLink>
            <NavLink
              to={`/contact`}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-bold"
                  : "text-gray-700 dark:text-gray-300"
              }
            >
              Contact
            </NavLink>
          </nav>
        </div>
      )}
    </div>
  );
}
