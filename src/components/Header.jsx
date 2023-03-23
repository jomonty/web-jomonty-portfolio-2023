import { X, Sun } from "react-feather";

import NavBar from "./NavBar.jsx";
import NavMobilePopover from "./NavMobilePopover.jsx";
import NavDarkModeToggle from "./NavDarkModeToggle.jsx";

const Header = ({ navOpen, handleNavOpen, darkMode, toggleTheme }) => {
  return (
    <header className="top-0 flex-initial py-6">
      <div className="mx-auto flex h-10 w-[85vw] place-content-center gap-4">
        <div className="flex flex-1">
          <img src="./logo-low-trans-svg.svg" className="pl-5" />
        </div>
        <div className="flex flex-1 justify-end md:justify-center">
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
        <div className="flex items-center justify-end md:flex-1">
          <NavDarkModeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
          {/* <div className="flex rounded-full border py-2 px-3 shadow">
            <button>
              <Sun color="rgb(21 128 61)" />
            </button>
          </div> */}
        </div>
        <NavMobilePopover navOpen={navOpen} handleNavOpen={handleNavOpen} />
      </div>
    </header>
  );
};

export default Header;
