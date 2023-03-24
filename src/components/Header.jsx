import { Link, useLocation } from "react-router-dom";

import NavBar from "./NavBar.jsx";
import NavMobilePopover from "./NavMobilePopover.jsx";
import NavDarkModeToggle from "./NavDarkModeToggle.jsx";

const Header = ({ navOpen, handleNavOpen, darkMode, toggleTheme }) => {
  const location = useLocation();
  return (
    <header className="pt-6">
      <div className="sm:px-8">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div
            className={`relative flex place-content-center gap-4 px-4 sm:px-8 md:h-40 lg:px-12 ${
              location.pathname === "/" ? "h-32 md:h-40" : "h-20 md:h-28"
            }`}
          >
            <div
              className={`relative flex h-full flex-1 ${
                location.pathname == "/" ? "items-end" : "items-start"
              }`}
            >
              <Link to="/">
                <img
                  src="/logo-low-trans-svg.svg"
                  className={`${location.pathname === "/" ? "h-16" : "h-10"}`}
                />
              </Link>
            </div>
            <div className="flex h-10 flex-1 justify-end md:justify-center">
              <div className="hidden md:flex ">
                <NavBar />
              </div>
              <div className="flex place-content-center rounded-full shadow dark:bg-zinc-800 dark:ring-1 dark:ring-white/10 md:hidden">
                <button
                  className="flex place-items-center py-2 px-3 text-sm text-slate-700 dark:text-zinc-200"
                  onClick={() => handleNavOpen()}
                >
                  Menu
                </button>
              </div>
            </div>
            <div className="flex h-10 items-center justify-end md:flex-1">
              <NavDarkModeToggle
                darkMode={darkMode}
                toggleTheme={toggleTheme}
              />
            </div>
            <NavMobilePopover
              navOpen={navOpen}
              handleNavOpen={handleNavOpen}
              darkMode={darkMode}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
